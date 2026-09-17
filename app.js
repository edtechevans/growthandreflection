const views = [...document.querySelectorAll('.view')];
  const navButtons = [...document.querySelectorAll('.nav button')];
  function go(view){
    views.forEach(v=>v.classList.toggle('active',v.id===`view-${view}`));
    navButtons.forEach(b=>b.classList.toggle('active',b.dataset.go===view));
    window.scrollTo({top:0,behavior:'smooth'});
    closeModal();
  }
  document.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.go)));
  document.querySelectorAll('.click-card').forEach(el=>el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go(el.dataset.go)}}));

  const modal=document.getElementById('startModal');
  const stepEls=[...document.querySelectorAll('.modal-step')];
  const dots=[...document.querySelectorAll('.step-dot')];
  const back=document.getElementById('backStep');
  const next=document.getElementById('nextStep');
  let currentStep=1;
  function setStep(n){currentStep=n;stepEls.forEach(s=>s.classList.toggle('active',+s.dataset.step===n));dots.forEach((d,i)=>d.classList.toggle('active',i<n));back.disabled=n===1;next.textContent=n===3?'Reflect with Demo AI':'Continue';}
  function openModal(){modal.classList.add('open');document.body.style.overflow='hidden';setStep(1)}
  function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
  document.querySelectorAll('[data-open-start]').forEach(b=>b.addEventListener('click',openModal));
  document.getElementById('closeModal').addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
  back.addEventListener('click',()=>setStep(Math.max(1,currentStep-1)));
  next.addEventListener('click',()=>{if(currentStep<3){setStep(currentStep+1)}else{runAnalysis()}});
  document.querySelectorAll('.choice').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));c.classList.add('selected')}));
  document.querySelectorAll('.lens-choice').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('.lens-choice').forEach(x=>x.classList.remove('selected'));c.classList.add('selected')}));

  const uploadArea=document.getElementById('uploadArea'), fileInput=document.getElementById('fileInput'), fileList=document.getElementById('fileList');
  function showFiles(files){fileList.innerHTML='';[...files].slice(0,5).forEach(f=>{const s=document.createElement('span');s.className='tag navy';s.textContent=f.name;fileList.appendChild(s)})}
  fileInput.addEventListener('change',()=>showFiles(fileInput.files));
  ['dragenter','dragover'].forEach(ev=>uploadArea.addEventListener(ev,e=>{e.preventDefault();uploadArea.classList.add('drag')}));
  ['dragleave','drop'].forEach(ev=>uploadArea.addEventListener(ev,e=>{e.preventDefault();uploadArea.classList.remove('drag');if(ev==='drop'&&e.dataTransfer.files)showFiles(e.dataTransfer.files)}));

  function runAnalysis(){
    closeModal();
    const q=document.getElementById('wondering').value.trim();
    if(q)document.getElementById('reflectionQuestion').textContent=`“${q}”`;
    const overlay=document.getElementById('analysisOverlay');
    const steps=[...overlay.querySelectorAll('.analysis-step')];overlay.classList.add('open');
    let i=0;const advance=()=>{if(i>0){steps[i-1].classList.remove('active');steps[i-1].classList.add('done');steps[i-1].querySelector('.status').textContent='✓'}if(i<steps.length){steps[i].classList.add('active');i++;setTimeout(advance,650)}else{setTimeout(()=>{overlay.classList.remove('open');go('reflection')},450)}};setTimeout(advance,650);
  }

  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.getElementById(`tab-${t.dataset.tab}`).classList.add('active')}));

  const messages=document.getElementById('messages'),coachInput=document.getElementById('coachInput');
  const coachReplies={
    'Why did you connect this to MTSS?':'Because the issue is not only “choice.” Your question also raises whether the core learning design anticipates different levels of readiness for open inquiry. AISG’s emerging MTSS direction emphasizes strong inclusive Tier 1 before additional intervention. The useful question is: what structures can be built into the task so more learners can exercise agency successfully from the start?',
    'Give me three alternatives I could try next lesson.':'Three small options: (1) let students choose which of three authentic problems to investigate; (2) keep the topic fixed but let groups generate and justify their own inquiry question; or (3) keep the question fixed but let students choose the audience and decide what evidence that audience would find convincing. Each moves a different kind of decision to students.',
    'How could I make this more accessible without reducing challenge?':'Keep the intellectual goal constant, then vary the supports around it. You could provide model questions, a planning conference, optional sentence stems, visual exemplars, and different ways to organize evidence. The aim is not to simplify the reasoning — it is to reduce barriers to entering and sustaining the reasoning.',
    'I disagree with your interpretation of agency. Explain your reasoning.':'That is worth challenging. I connected this to agency because the TLF describes meaningful decisions about what students learn, how they learn, and how they demonstrate understanding. Your unit clearly includes the final part. I inferred that the teacher-selected inquiry question limits the first part. If students have other meaningful decisions elsewhere in the unit that were not in the evidence I saw, my interpretation would need to change.'
  };
  function addMessage(text,type='user'){const d=document.createElement('div');d.className=`message ${type}`;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight;}
  function sendCoach(text){if(!text.trim())return;addMessage(text,'user');coachInput.value='';setTimeout(()=>addMessage(coachReplies[text]||'I would start by returning to the evidence and the framework language, then separate what is directly visible from what is only a possibility. For this demo, try one of the suggested prompts so you can see a grounded example response.','ai'),350)}
  document.getElementById('coachSend').addEventListener('click',()=>sendCoach(coachInput.value));
  coachInput.addEventListener('keydown',e=>{if(e.key==='Enter')sendCoach(coachInput.value)});
  document.querySelectorAll('[data-coach]').forEach(b=>b.addEventListener('click',()=>sendCoach(b.dataset.coach)));

  const toast=document.getElementById('toast');let toastTimer;function showToast(msg){clearTimeout(toastTimer);toast.textContent=msg;toast.classList.add('show');toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
  document.getElementById('saveNext').addEventListener('click',()=>showToast('Next step saved to My Growth.'));
  document.getElementById('saveNextTop').addEventListener('click',()=>showToast('Reflection next step saved.'));
  document.getElementById('copyAdapt').addEventListener('click',async()=>{const text=document.querySelector('.edit-area').value;try{await navigator.clipboard.writeText(text);showToast('Draft copied to clipboard.')}catch{showToast('Copy is restricted in this browser. The draft remains editable.')}});

  const recordBtn=document.getElementById('recordBtn'),wave=document.getElementById('wave'),recordState=document.getElementById('recordState'),recordHint=document.getElementById('recordHint'),transcript=document.getElementById('transcript');let recording=false,timer;
  recordBtn.addEventListener('click',()=>{recording=!recording;if(recording){recordBtn.classList.add('recording');wave.classList.add('active');recordState.textContent='Listening…';recordHint.textContent='Demo recording in progress. Press again to stop and reveal a sample transcript.';timer=setTimeout(()=>recordBtn.click(),3500)}else{clearTimeout(timer);recordBtn.classList.remove('recording');wave.classList.remove('active');recordState.textContent='Reflection captured.';recordHint.textContent='Review the transcript, then reflect with AI.';transcript.hidden=false;transcript.scrollIntoView({behavior:'smooth',block:'center'})}});
  document.getElementById('reflectVoice').addEventListener('click',()=>{document.getElementById('reflectionQuestion').textContent='“Students kept coming back to me for permission during group work. Did the way I structured the lesson unintentionally reduce their agency?”';runVoiceToReflection()});
  function runVoiceToReflection(){const overlay=document.getElementById('analysisOverlay');overlay.classList.add('open');setTimeout(()=>{overlay.classList.remove('open');go('reflection')},2200)}

  const classVideoInput=document.getElementById('classVideoInput');
  const videoDrop=document.getElementById('videoDrop');
  const classVideoPreview=document.getElementById('classVideoPreview');
  const videoPlayer=document.getElementById('videoPlayer');
  const videoFileMeta=document.getElementById('videoFileMeta');
  const videoFileName=document.getElementById('videoFileName');
  const videoFileSize=document.getElementById('videoFileSize');
  const analyseVideo=document.getElementById('analyseVideo');
  let classroomVideoUrl=null;
  function formatBytes(bytes){if(!bytes)return '0 MB';const mb=bytes/1024/1024;return `${mb<1?mb.toFixed(1):mb.toFixed(1)} MB`;}
  function loadClassVideo(file){
    if(!file)return;
    if(!file.type.startsWith('video/') && !/\.(mp4|mov|m4v|webm)$/i.test(file.name)){showToast('Please choose a classroom video file.');return;}
    if(classroomVideoUrl)URL.revokeObjectURL(classroomVideoUrl);
    classroomVideoUrl=URL.createObjectURL(file);
    classVideoPreview.src=classroomVideoUrl;
    classVideoPreview.hidden=false;
    videoPlayer.classList.add('has-video');
    videoFileMeta.hidden=false;
    videoFileName.textContent=file.name;
    videoFileSize.textContent=formatBytes(file.size);
    analyseVideo.textContent='Analyse uploaded video';
    showToast('Classroom video ready for preview.');
  }
  classVideoInput.addEventListener('change',()=>loadClassVideo(classVideoInput.files[0]));
  ['dragenter','dragover'].forEach(ev=>videoDrop.addEventListener(ev,e=>{e.preventDefault();videoDrop.classList.add('drag')}));
  ['dragleave','drop'].forEach(ev=>videoDrop.addEventListener(ev,e=>{e.preventDefault();videoDrop.classList.remove('drag');if(ev==='drop'&&e.dataTransfer.files?.[0])loadClassVideo(e.dataTransfer.files[0])}));
  analyseVideo.addEventListener('click',()=>{
    const overlay=document.getElementById('analysisOverlay');
    const title=overlay.querySelector('h2');
    const note=overlay.querySelector('.analysis-card > p');
    const priorTitle=title.textContent, priorNote=note.textContent;
    title.textContent='Reviewing the classroom video…';
    note.textContent='Demo mode simulates transcription, timestamped evidence, and framework-grounded reflection.';
    overlay.classList.add('open');
    setTimeout(()=>{
      overlay.classList.remove('open');
      title.textContent=priorTitle; note.textContent=priorNote;
      document.getElementById('videoResults').scrollIntoView({behavior:'smooth',block:'start'});
      showToast('Demo video reflection ready.');
    },2200);
  });

  document.getElementById('mobileMenu').addEventListener('click',()=>{const choice=prompt('Go to: Home, My growth, Frameworks, Voice reflection');if(!choice)return;const c=choice.toLowerCase();if(c.includes('growth'))go('growth');else if(c.includes('framework'))go('frameworks');else if(c.includes('voice'))go('voice');else go('home')});