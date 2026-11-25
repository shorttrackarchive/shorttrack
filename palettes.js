/* Presentation only. Saved palette is independent of filters, scores and language. */
(()=>{
  const storageKey='shorttrack_palette_v1';
  const palettes=[
    {id:'ice-trace',name:'Ice Trace',colors:['#DDEAE6','#20253D','#3451FF','#AAA8FF','#7DE2C3']},
    {id:'fresh-ice',name:'Fresh Ice',colors:['#F5F9FC','#25313C','#087EA4','#B8E4DA','#C5C3EC']},
    {id:'night-session',name:'Night Session',colors:['#171C22','#EDF2F5','#73E2C1','#B5ADFF','#80B4D4']},
    {id:'photo-finish',name:'Photo Finish',colors:['#FAFAF8','#191919','#C53046','#53758C','#DDE2E6']}
  ];
  const valid=id=>palettes.some(p=>p.id===id);
  const en=()=>document.documentElement.lang==='en';
  const label=(ko,english)=>en()?english:ko;
  let saved=valid(document.documentElement.dataset.palette)?document.documentElement.dataset.palette:'ice-trace';
  let draft=saved,dialog,bridge,lastFocus,previousOverflow,previousPadding,initialView,saveFailed=false;

  // Legacy modules use literal colors. Read the browser's parsed CSS rather than
  // rewriting sources or changing semantic medal/status or user-created card colors.
  function buildColorBridge(){
    const protectedSelectors=/gold|silver|bronze|danger|error|warn|invalid|correct|wrong|tier-row|tier-label|fan-card|card-preview|card-stat|rating|approved-stack/i;
    const activeSelector=/active|selected|primary|:checked|\[aria-pressed/i;
    function token(raw,property,selector){
      let r,g,b,alpha=1;
      if(raw.startsWith('#')){
        let hex=raw.slice(1);if(hex.length===3||hex.length===4)hex=[...hex].map(c=>c+c).join('');
        r=parseInt(hex.slice(0,2),16);g=parseInt(hex.slice(2,4),16);b=parseInt(hex.slice(4,6),16);if(hex.length===8)alpha=parseInt(hex.slice(6,8),16)/255;
      }else if(/^rgba?\(/i.test(raw)){
        const parts=raw.match(/[\d.]+/g)?.map(Number);if(!parts||parts.length<3)return raw;[r,g,b]=parts;if(parts.length>3)alpha=parts[3];
      }else if(raw.toLowerCase()==='white'){r=g=b=255;}else if(raw.toLowerCase()==='black'){r=g=b=0;}else return raw;
      if(alpha<0.5)return raw;
      const light=(r*.2126+g*.7152+b*.0722)/255;
      const chroma=Math.max(r,g,b)-Math.min(r,g,b);
      const blue=b>r*1.12&&b>g*.95&&chroma>45;
      const accent=blue||(g>r*1.2&&chroma>55);
      if(property==='color'){
        if(light>.85)return `var(--palette-${activeSelector.test(selector)?'on-accent':'on-strong'})`;
        if(accent&&light<.7)return 'var(--palette-link)';
        return `var(--palette-${light>.34?'muted':'ink'})`;
      }
      if(property.includes('border')||property==='outline-color')return `var(--palette-${accent&&light<.65?'accent':'border'})`;
      if(property.startsWith('background')){
        if(accent&&light<.72)return 'var(--palette-accent)';
        if(light<.28)return 'var(--palette-strong)';
        return `var(--palette-${light>.975?'surface':'soft'})`;
      }
      return raw;
    }
    function rulesText(rules){
      let result='';
      for(const rule of rules){
        if(rule.type===CSSRule.STYLE_RULE){
          if(protectedSelectors.test(rule.selectorText))continue;
          const declarations=[];
          for(const property of rule.style){
            if(!['color','background','background-color','border','border-color','border-top','border-bottom','border-left','border-right','border-top-color','border-bottom-color','border-left-color','border-right-color','outline-color'].includes(property))continue;
            const value=rule.style.getPropertyValue(property);
            if(/url\(|gradient\(|var\(/i.test(value))continue;
            const converted=value.replace(/#[\da-f]{3,8}\b|rgba?\([^)]*\)|\bwhite\b|\bblack\b/gi,color=>token(color,property,rule.selectorText));
            if(converted!==value)declarations.push(`${property}:${converted}${rule.style.getPropertyPriority(property)?'!important':''}`);
          }
          if(declarations.length)result+=`${rule.selectorText}{${declarations.join(';')}}\n`;
        }else if(rule.cssRules&&rule.conditionText){
          const inner=rulesText(rule.cssRules);if(inner)result+=`@${rule.type===CSSRule.MEDIA_RULE?'media':'supports'} ${rule.conditionText}{${inner}}\n`;
        }
      }
      return result;
    }
    let css='';
    for(const sheet of document.styleSheets){
      if(!sheet.href||new URL(sheet.href).origin!==location.origin||sheet.href.includes('palettes.css'))continue;
      try{css+=rulesText(sheet.cssRules);}catch(_unavailableStylesheet){}
    }
    bridge=document.createElement('style');bridge.id='paletteColorBridge';bridge.textContent=css;document.body.append(bridge);
  }
  function apply(id){
    document.documentElement.dataset.palette=valid(id)?id:'ice-trace';
    if(bridge)bridge.disabled=id==='ice-trace';
  }
  function refreshLabels(){
    const button=document.querySelector('.palette-settings-button');
    if(button){button.textContent=label('설정','Settings');button.removeAttribute('data-i18n');button.setAttribute('aria-label',label('화면 설정','Appearance settings'));}
    if(!dialog)return;
    dialog.querySelector('#paletteTitle').textContent=label('화면 설정','Appearance');
    dialog.querySelector('.palette-close').setAttribute('aria-label',label('닫기','Close'));
    dialog.querySelector('#paletteLegend').textContent=label('팔레트','Palette');
    dialog.querySelector('#paletteViewLegend').textContent=label('화면 모드','Layout');
    dialog.querySelector('[data-palette-action=cancel]').textContent=label('취소','Cancel');
    dialog.querySelector('[data-palette-action=reset]').textContent=label('기본값 복원','Restore default');
    dialog.querySelector('[data-palette-action=apply]').textContent=label('적용','Apply');
    for(const button of dialog.querySelectorAll('[data-palette-view]')){
      const mode=button.dataset.paletteView;
      button.textContent=mode==='auto'?label('자동','Auto'):mode==='mobile'?label('모바일','Mobile'):label('데스크톱','Desktop');
      button.setAttribute('aria-pressed',String(mode===currentViewMode));
    }
    const status=dialog.querySelector('.palette-status');
    status.textContent=saveFailed?label('이 브라우저에 설정을 저장하지 못했습니다.','Could not save settings in this browser.'):draft===saved?label('저장된 팔레트','Saved palette'):label('미리보기 · 적용 전','Preview · Not applied');
    dialog.querySelectorAll('input[name=archive-palette]').forEach(input=>{input.checked=input.value===draft;});
  }
  function close(){dialog.close('cancel');}
  function open(){
    if(dialog.open)return;
    lastFocus=document.activeElement;initialView=currentViewMode;draft=saved;saveFailed=false;dialog.returnValue='';refreshLabels();
    previousOverflow=document.body.style.overflow;previousPadding=document.body.style.paddingRight;
    const gap=innerWidth-document.documentElement.clientWidth;
    if(gap)document.body.style.paddingRight=`${parseFloat(getComputedStyle(document.body).paddingRight)+gap}px`;
    document.body.style.overflow='hidden';dialog.showModal();
    dialog.querySelector('input:checked')?.focus({preventScroll:true});
  }
  document.addEventListener('DOMContentLoaded',()=>{
    buildColorBridge();apply(saved);
    const button=document.querySelector('.mobile-settings-btn');
    button?.classList.add('palette-settings-button');button?.removeAttribute('onclick');button?.removeAttribute('aria-expanded');
    button?.setAttribute('aria-haspopup','dialog');button?.setAttribute('aria-controls','paletteDialog');button?.addEventListener('click',open);
    dialog=document.createElement('dialog');dialog.id='paletteDialog';dialog.setAttribute('aria-labelledby','paletteTitle');
    dialog.innerHTML='<div class="palette-dialog-head"><h2 id="paletteTitle"></h2><button class="palette-close" type="button">×</button></div><fieldset class="palette-list"><legend id="paletteLegend"></legend></fieldset><fieldset class="palette-view"><legend id="paletteViewLegend"></legend><div class="palette-view-options"></div></fieldset><p class="palette-status" role="status" aria-live="polite"></p><div class="palette-actions"><button type="button" data-palette-action="reset"></button><button type="button" data-palette-action="cancel"></button><button type="button" class="palette-apply" data-palette-action="apply"></button></div>';
    for(const palette of palettes){
      const option=document.createElement('label');option.className='palette-option';
      const radio=document.createElement('input');radio.type='radio';radio.name='archive-palette';radio.value=palette.id;
      const name=document.createElement('span');name.className='palette-name';name.textContent=palette.name;
      const swatches=document.createElement('span');swatches.className='palette-colors';swatches.setAttribute('aria-hidden','true');
      for(const color of palette.colors){const swatch=document.createElement('span');swatch.className='palette-swatch';swatch.style.backgroundColor=color;swatch.title=color;swatches.append(swatch);}
      radio.addEventListener('change',()=>{if(radio.checked){draft=palette.id;apply(draft);refreshLabels();}});
      option.append(radio,name,swatches);dialog.querySelector('.palette-list').append(option);
    }
    for(const mode of ['auto','mobile','desktop']){
      const control=document.createElement('button');control.type='button';control.dataset.paletteView=mode;
      control.onclick=()=>{currentViewMode=mode;applyViewMode();refreshLabels();};dialog.querySelector('.palette-view-options').append(control);
    }
    dialog.querySelector('.palette-close').onclick=close;
    dialog.querySelector('[data-palette-action=cancel]').onclick=close;
    dialog.querySelector('[data-palette-action=reset]').onclick=()=>{draft='ice-trace';apply(draft);refreshLabels();};
    dialog.querySelector('[data-palette-action=apply]').onclick=()=>{
      try{localStorage.setItem(storageKey,draft);saved=draft;setViewMode(currentViewMode);dialog.close('apply');}catch(_storageError){saveFailed=true;refreshLabels();}
    };
    dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
    dialog.addEventListener('click',event=>{
      const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))close();
    });
    dialog.addEventListener('close',()=>{
      if(dialog.returnValue!=='apply'){apply(saved);currentViewMode=initialView;applyViewMode();}
      document.body.style.overflow=previousOverflow;document.body.style.paddingRight=previousPadding;
      lastFocus?.focus({preventScroll:true});
    });
    document.body.append(dialog);refreshLabels();
    const originalLanguage=setLanguage;
    setLanguage=window.setLanguage=function(...args){const result=originalLanguage.apply(this,args);refreshLabels();return result;};
    const originalView=setViewMode;
    setViewMode=window.setViewMode=function(...args){const result=originalView.apply(this,args);refreshLabels();return result;};
    window.addEventListener('storage',event=>{if(event.key===storageKey){saved=valid(event.newValue)?event.newValue:'ice-trace';if(!dialog.open){draft=saved;apply(saved);}refreshLabels();}});
  });
})();
