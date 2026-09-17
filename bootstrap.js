(async()=>{
  const root=document.getElementById('appRoot');
  const version='6';
  const parts=['partials/part1.html','partials/part2.html','partials/part3.html','partials/part4.html','partials/part5.html'];
  try{
    const html=(await Promise.all(parts.map(p=>fetch(`${p}?v=${version}`,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(p);return r.text()})))).join('');
    root.outerHTML=html;
    await loadScript('logo1.js');
    await loadScript('logo2.js');
    await loadScript('logo3.js');
    await loadScript('logo4.js');
    await loadScript('logo5.js');
    await loadScript('app.js');
  }catch(err){
    root.innerHTML='<main style="font-family:system-ui;padding:40px;max-width:760px;margin:auto"><h1>AISG Reflect</h1><p>The prototype could not load its static files. Refresh the page or open the latest GitHub Pages version in a new tab.</p></main>';
    console.error(err);
  }
  function loadScript(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=`${src}?v=${version}`;s.onload=resolve;s.onerror=reject;document.body.appendChild(s)})}
})();
