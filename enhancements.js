(()=>{
  const topButtons=[...document.querySelectorAll('.desktop-nav [data-nav]')];
  const allNav=[...document.querySelectorAll('[data-nav]')];
  const toast=document.getElementById('toast');

  function markActive(name){
    topButtons.forEach(btn=>btn.classList.toggle('is-active',btn.dataset.nav===name));
  }

  allNav.forEach(btn=>btn.addEventListener('click',()=>markActive(btn.dataset.nav)));

  document.querySelectorAll('[data-start]').forEach(btn=>btn.addEventListener('click',()=>markActive('reflect')));
  document.querySelectorAll('[data-demo-result]').forEach(btn=>btn.addEventListener('click',()=>markActive('reflect')));

  const save=document.getElementById('saveGrowth');
  if(save){
    save.addEventListener('click',()=>{
      setTimeout(()=>{
        const goalNav=document.querySelector('.desktop-nav [data-nav="goal"]') || document.querySelector('.bottom-nav [data-nav="goal"]');
        if(goalNav) goalNav.click();
        if(toast){toast.textContent='Connected to My Goal.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
      },720);
    });
  }
})();
