(async()=>{
  try{
    const files=['app-parts/part1.txt','app-parts/part2.txt','app-parts/part3.txt'];
    const parts=await Promise.all(files.map(path=>fetch(path,{cache:'no-store'}).then(response=>{
      if(!response.ok) throw new Error(`Could not load ${path}`);
      return response.text();
    })));
    const code=parts.join('');
    (0,eval)(code);
  }catch(error){
    console.error('AISG Reflect failed to start',error);
    const main=document.querySelector('.app-main');
    if(main) main.innerHTML='<section class="view is-active"><div class="page-heading"><p class="eyebrow">AISG Reflect</p><h1>We could not load the prototype.</h1><p>Please refresh the page. If the problem continues, open the latest GitHub Pages version in a new tab.</p></div></section>';
  }
})();
