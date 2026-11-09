(function(){
    function loadBg(el){
      const src = el && el.dataset ? el.dataset.bgSrc : '';
      if(!src) return;
      el.style.backgroundImage = "url('" + src.replace(/'/g, "%27") + "')";
      delete el.dataset.bgSrc;
    }
    function initLazyBackgrounds(){
      const items = Array.from(document.querySelectorAll('.hof-image[data-bg-src]'));
      if(!items.length) return;
      if(!('IntersectionObserver' in window)){
        items.forEach(loadBg);
        return;
      }
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            loadBg(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {rootMargin:'220px 0px'});
      items.forEach(item => observer.observe(item));
    }
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLazyBackgrounds);
    else initLazyBackgrounds();
  })();
