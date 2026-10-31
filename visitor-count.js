/* Visitor counts load independently of archive data. Only read requests are retried. */
let visitorCountsState=null,visitorCountsReadBusy=null,visitorCountsStarted=false,visitorCountsTimer=0,visitorCountsRetry=0,visitorCountsSequence=0,visitorCountsAppliedSequence=0,visitorCountsStatus='loading';
const VISITOR_COUNTS_CACHE='shorttrack_visitor_counts_v2';
function visitorCountDate(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
function archiveRenderVisitors(){
  const today=document.getElementById('todayVisitors'),total=document.getElementById('totalVisitors'),widget=document.querySelector('.visitor-widget');
  if(!today||!total||!widget)return;
  const current=visitorCountsState?.date===visitorCountDate(),en=currentLang==='en';
  today.textContent=current?String(visitorCountsState.today):'—';
  total.textContent=visitorCountsState?String(visitorCountsState.total):'—';
  widget.dataset.state=visitorCountsStatus;
  const note=document.getElementById('visitorCountStatus');
  if(note)note.textContent=visitorCountsStatus==='fresh'?'':visitorCountsState?(en?'Last count · checking updates':'이전 집계 · 최신 확인 중'):visitorCountsStatus==='error'?(en?'Retrying count':'집계 재시도 중'):(en?'Loading count':'집계 확인 중');
  widget.title=visitorCountsState?(en?'Last confirmed: ':'마지막 확인: ')+new Date(visitorCountsState.checkedAt).toLocaleString(en?'en-US':'ko-KR'):'';
}
function applyVisitorCounts(result,sequence){
  if(!result?.ok||!Number.isSafeInteger(result.today)||!Number.isSafeInteger(result.total)||result.today<0||result.total<result.today)throw new Error('Invalid visitor count');
  if(sequence<visitorCountsAppliedSequence)return;
  visitorCountsAppliedSequence=sequence;
  visitorCountsState={today:result.today,total:result.total,date:result.date||visitorCountDate(),checkedAt:Date.now()};
  visitorCountsStatus='fresh';visitorCountsRetry=0;clearTimeout(visitorCountsTimer);
  try{localStorage.setItem(VISITOR_COUNTS_CACHE,JSON.stringify(visitorCountsState));}catch{}
  archiveRenderVisitors();
}
async function visitorCountRequest(url,options,sequence){
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
  try{const response=await fetch(url,{...options,signal:controller.signal,cache:'no-store'});if(!response.ok)throw new Error('Visitor API '+response.status);applyVisitorCounts(await response.json(),sequence);}
  finally{clearTimeout(timeout);}
}
function retryVisitorCounts(){
  clearTimeout(visitorCountsTimer);
  const delay=[5000,15000,30000,60000][Math.min(visitorCountsRetry++,3)];
  visitorCountsTimer=setTimeout(()=>{if(document.hidden)retryVisitorCounts();else readVisitorCounts();},delay);
}
function readVisitorCounts(){
  if(visitorCountsReadBusy)return visitorCountsReadBusy;
  const url=new URL(APPS_SCRIPT_URL);url.searchParams.set('type','visits');url.searchParams.set('_',String(Date.now()));
  const sequence=++visitorCountsSequence;
  visitorCountsReadBusy=visitorCountRequest(url.href,{},sequence).catch(error=>{
    visitorCountsStatus='error';archiveRenderVisitors();retryVisitorCounts();console.warn('Visitor count read failed; retrying.',error);
  }).finally(()=>{visitorCountsReadBusy=null;});
  return visitorCountsReadBusy;
}
function registerVisit(){
  if(visitorCountsStarted)return;visitorCountsStarted=true;
  try{
    const cached=JSON.parse(localStorage.getItem(VISITOR_COUNTS_CACHE)||'null');
    if(cached&&Number.isSafeInteger(cached.today)&&cached.today>=0&&Number.isSafeInteger(cached.total)&&cached.total>=cached.today&&Number.isFinite(cached.checkedAt))visitorCountsState=cached;
  }catch{}
  archiveRenderVisitors();
  // Count this page once. A failed response is followed by reads, never another POST.
  readVisitorCounts().finally(()=>{
    const sequence=++visitorCountsSequence;
    visitorCountRequest(APPS_SCRIPT_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'visit',visit_date:visitorCountDate(),page_url:location.href,user_agent:navigator.userAgent,referrer:document.referrer||'',created_at:new Date().toISOString()})},sequence)
      .catch(error=>{visitorCountsStatus='error';archiveRenderVisitors();retryVisitorCounts();console.warn('Visitor count write response unavailable; checking count without recounting.',error);});
  });
}
window.archiveRenderVisitors=archiveRenderVisitors;
window.addEventListener('online',()=>{if(visitorCountsStarted)readVisitorCounts();});
document.addEventListener('visibilitychange',()=>{if(visitorCountsStarted&&!document.hidden)readVisitorCounts();});
document.addEventListener('click',event=>{if(event.target.closest('.lang-btn'))queueMicrotask(archiveRenderVisitors);});
