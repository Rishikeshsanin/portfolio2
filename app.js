(function () {
  'use strict';

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var data = {
    tools: ['Python','Java','TypeScript','JavaScript','React','Next.js','FastAPI','Node.js','PostgreSQL','Supabase','Firebase','Docker','Railway','Vercel','Gemini','OpenAI','LLMs','RAG','Computer Vision','YOLO','PyTorch','scikit-learn','GitHub Actions','Unity'],
    projects: [
      {
        name:'ReturnReview', kind:'CV + LLM', glyph:'RR', tone:'#c8ff4d',
        tag:'Evidence-first return inspection using computer vision, policy retrieval and a grounded LLM review workflow.',
        repo:'https://github.com/Rishikeshsanin/ReturnReview',
        live:'https://returnreview-web-production.up.railway.app',
        desc:'A semester-scale AI system for cardboard-box return inspection. It validates multi-angle evidence, verifies category, localizes visible damage, retrieves return policy, drafts a grounded review with Gemini, and keeps a human reviewer as the final decision-maker.',
        stack:['Next.js','FastAPI','PostgreSQL','MobileNetV3','YOLO11n-seg','Gemini','Railway'],
        why:'CV observes, policy provides facts, the LLM interprets, and a human decides.'
      },
      {
        name:'Skylark Command', kind:'Decision Intelligence', glyph:'SC', tone:'#8da2ff',
        tag:'Trust-native executive analytics over live CRM and operational data, with bounded AI interpretation.',
        repo:'https://github.com/Rishikeshsanin/skylark-command',
        live:'https://skylark-command.vercel.app',
        desc:'A decision-intelligence system over monday.com data. Deterministic TypeScript owns the business arithmetic; AI can plan and explain but cannot silently redefine the facts. Includes temporal snapshots, Customer 360, change intelligence and scenario analysis.',
        stack:['Next.js','React','TypeScript','PostgreSQL','monday.com','Gemini','Vercel'],
        why:'Fluent AI answers never outrank deterministic evidence.'
      },
      {
        name:'Imposter X', kind:'Realtime Social', glyph:'IX', tone:'#ff7b65',
        tag:'A room-based social deduction experience extended with live voice/video multiplayer.',
        repo:'https://github.com/Rishikeshsanin/Imposter-X',
        desc:'A realtime evolution of the Imposter party-game concept built around low-friction rooms and shared live play. The focus is making multiplayer social interaction feel immediate instead of looking like a CRUD app with a room code.',
        stack:['WebRTC','LiveKit','Realtime rooms','Responsive UI','Vercel'],
        why:'Room flow, identity, sync and social presence all have to feel effortless.'
      },
      {
        name:'NoCodeML', kind:'Applied ML', glyph:'NM', tone:'#71e7c4',
        tag:'A no-code machine-learning workflow that makes model experimentation approachable through a polished interface.',
        repo:'https://github.com/Rishikeshsanin/NoCodeML',
        desc:'An applied-ML product built around lowering the friction of common machine-learning workflows. Instead of starting with notebooks, the experience starts with the user and wraps data/model operations inside a usable product flow.',
        stack:['Python','Machine Learning','Data workflows','Web UI'],
        why:'Turn ML from a notebook activity into a product experience.'
      },
      {
        name:'EchoType', kind:'Voice / Edge AI', glyph:'ET', tone:'#d59cff',
        tag:'A redesigned speech-to-typing experience focused on fast local dictation and practical desktop use.',
        repo:'https://github.com/Rishikeshsanin/EchoType',
        desc:'A substantially redesigned speech/typing application based on a permitted reference implementation, with a stronger interface and an architecture aimed at local speech recognition, private dictation and a more complete desktop product.',
        stack:['Python','Speech AI','Local inference','Desktop UX'],
        why:'Speak naturally, get usable text, keep the interaction fast enough to disappear.'
      },
      {
        name:'Vibify', kind:'Realtime Music', glyph:'VB', tone:'#ffe15b',
        tag:'Shared listening rooms that synchronize playback state while every device streams directly from YouTube.',
        repo:'https://github.com/Rishikeshsanin/vibify',
        live:'https://vibify-mu.vercel.app',
        desc:'A Spotify-Jam-style web experiment. The host owns the timeline, guests stream the same YouTube media locally, and Firebase carries only compact playback state. The system measures drift and avoids constant corrective seeking.',
        stack:['Next.js','React','TypeScript','Firebase','YouTube IFrame API','Vercel'],
        why:'Never move the song through the app — move only the authoritative playback state.'
      },
      {
        name:'Axiom Imaging', kind:'Systems + Healthcare', glyph:'AI', tone:'#55c5ff',
        tag:'A DICOM/PACS operations platform with real imaging workflow boundaries, quality gates and systems components.',
        repo:'https://github.com/Rishikeshsanin/axiom-imaging',
        desc:'A research and educational imaging platform that ingests de-identified DICOM studies, stores original objects through Orthanc, maps study hierarchy into PostgreSQL, opens imaging through OHIF, and adds operational scheduling, device telemetry and a separate C++ systems component.',
        stack:['Next.js','FastAPI','PostgreSQL','Orthanc','DICOMweb','OHIF','C++20','Docker'],
        why:'Built around real interoperability boundaries instead of generic healthcare CRUD.'
      },
      {
        name:'MostLikely', kind:'Realtime Multiplayer', glyph:'WW', tone:'#ff8bd8',
        tag:'A mobile-first social voting game with secret ballots, synchronized reveals and data-backed session awards.',
        repo:'https://github.com/Rishikeshsanin/MostLikely',
        live:'https://most-likely-azure.vercel.app',
        desc:'A realtime party game for groups. Players join with a code, vote secretly on one another, reveal together, and end with awards derived from the session. The backend protects raw vote mappings while the room remains instant through realtime state-change signals.',
        stack:['Next.js','React','TypeScript','Supabase Realtime','Edge Functions','PostgreSQL','Vercel'],
        why:'Votes stay secret until reveal, while every phone stays in sync.'
      }
    ],
    caps: [
      ['AI systems','LLMs, RAG, agents, evaluation'],
      ['Vision','CV pipelines, segmentation, evidence'],
      ['Realtime','Rooms, presence, synchronization'],
      ['Product','Interaction, polish, deployment']
    ],
    proof: [
      ['08','Flagship builds','Eight selected systems spanning AI, CV, realtime collaboration, healthcare tooling and multiplayer products.'],
      ['01','Evidence-first AI mindset','ReturnReview and Skylark explicitly separate model interpretation from deterministic facts and human decisions.'],
      ['∞','Iteration over demos','Build, test on real devices, find the ugly failure mode, then make the next version better.']
    ],
    skills: [
      ['AI / LLM systems',92], ['Full-stack product engineering',90],
      ['Computer vision',84], ['Realtime systems',86],
      ['Python',91], ['Java / DSA',82],
      ['Deployment + QA',88], ['UI / interaction engineering',87]
    ]
  };

  if (!reduced && window.Lenis) {
    var lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', function () { if (window.ScrollTrigger) ScrollTrigger.update(); });
    function lenisFrame(t) { lenis.raf(t); requestAnimationFrame(lenisFrame); }
    requestAnimationFrame(lenisFrame);
  }
  if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  function enterHero() {
    var nav = $('.nav');
    var cv = $('.quick-cv');
    if (!window.gsap) {
      if (nav) nav.style.opacity = '1';
      if (cv) cv.classList.add('on');
      return;
    }
    var chars = [];
    $$('.hero .warp').forEach(function (el) {
      var text = el.textContent;
      el.textContent = '';
      Array.from(text).forEach(function (c) {
        var s = document.createElement('span');
        s.textContent = c === ' ' ? '\u00a0' : c;
        s.style.display = 'inline-block';
        el.appendChild(s);
        chars.push(s);
      });
    });
    gsap.set(chars, { opacity:0, xPercent:40, yPercent:25, rotation:-10, skewX:-22, scale:.68, transformOrigin:'0% 100%' });
    gsap.to(chars, { opacity:1, xPercent:0, yPercent:0, rotation:0, skewX:0, scale:1, duration:1.05, stagger:.018, ease:'expo.out' });
    gsap.to('.hero__lede', { opacity:1, duration:.7, delay:.35 });
    gsap.to('.rig', { opacity:1, y:0, duration:1.1, delay:.2, ease:'expo.out' });
    gsap.to('.nav', { opacity:1, duration:.45, delay:.6, onComplete:function () { if (cv) cv.classList.add('on'); } });
  }

  function boot() {
    var root = $('#boot');
    if (!root) { enterHero(); return; }
    var hello = $('.boot__hello');
    var core = $('.boot__core');
    var paths = $$('.boot__mark path');
    var fill = $('#bootFill');
    var pct = $('#bootPct');
    var task = $('#bootTask');
    var tasks = ['INIT','MAPPING WORK','LOADING SYSTEMS','CALIBRATING UI','READY'];
    document.body.classList.add('no-scroll');

    paths.forEach(function (p) {
      var l = p.getTotalLength();
      p.style.strokeDasharray = l;
      p.style.strokeDashoffset = l;
    });

    if (reduced || !window.gsap) {
      root.remove();
      document.body.classList.remove('no-scroll');
      enterHero();
      return;
    }

    var state = { v:0 };
    var tl = gsap.timeline({ defaults:{ ease:'power3.out' } });
    tl.to(hello, { opacity:1, duration:.45 })
      .to(hello, { opacity:0, y:-12, duration:.35, delay:.35 })
      .to(core, { opacity:1, duration:.25 });

    paths.forEach(function (p, i) {
      tl.to(p, { strokeDashoffset:0, duration:.42 }, i === 0 ? '<' : '-=.23');
    });

    tl.to(state, {
      v:100, duration:1,
      onUpdate:function () {
        var v = Math.round(state.v);
        pct.textContent = String(v).padStart(3,'0');
        fill.style.width = v + '%';
        task.textContent = tasks[Math.min(tasks.length - 1, Math.floor(v / 23))];
      }
    }, '-=.28').to(root, {
      yPercent:-100, duration:.8, ease:'expo.inOut',
      onComplete:function () {
        root.remove();
        document.body.classList.remove('no-scroll');
        enterHero();
      }
    });
  }

  function renderRails() {
    function tile(x) { return '<span class="tool-tile"><i></i>' + x + '</span>'; }
    var a = data.tools.filter(function (_, i) { return i % 2 === 0; });
    var b = data.tools.filter(function (_, i) { return i % 2 === 1; });
    $('#railA').innerHTML = a.concat(a).map(tile).join('');
    $('#railB').innerHTML = b.concat(b).map(tile).join('');
    if (window.gsap && window.ScrollTrigger) {
      gsap.to('#railA', { xPercent:-50, ease:'none', scrollTrigger:{ trigger:'.toolbox', start:'top bottom', end:'bottom top', scrub:1 } });
      gsap.fromTo('#railB', { xPercent:-50 }, { xPercent:0, ease:'none', scrollTrigger:{ trigger:'.toolbox', start:'top bottom', end:'bottom top', scrub:1 } });
    }
  }

  function revealWords() {
    var root = $('[data-reveal]');
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(function (x) {
        if (/^\s+$/.test(x)) frag.appendChild(document.createTextNode(x));
        else if (x) {
          var s = document.createElement('span');
          s.className = 'word';
          s.textContent = x;
          frag.appendChild(s);
        }
      });
      n.parentNode.replaceChild(frag, n);
    });
    $$('.word', root).forEach(function (w) {
      if (window.ScrollTrigger) {
        ScrollTrigger.create({
          trigger:w, start:'top 78%',
          onEnter:function () { w.classList.add('lit'); },
          onLeaveBack:function () { w.classList.remove('lit'); }
        });
      } else w.classList.add('lit');
    });
  }

  var activeProject = 0;
  function renderProjects() {
    var orbit = $('#projectOrbit');
    var N = data.projects.length;
    $('#projectTotal').textContent = String(N).padStart(2,'0');
    orbit.innerHTML = data.projects.map(function (p, i) {
      var href = p.live || p.repo;
      var angle = i * 360 / N;
      return '<a class="project-card" href="' + href + '" target="_blank" rel="noopener" data-index="' + i + '" style="--angle:' + angle + 'deg;--tone:' + p.tone + '" data-cursor="' + (p.live ? 'LIVE' : 'GITHUB') + '">' +
        '<span class="project-card__art"></span><span class="project-card__glyph">' + p.glyph + '</span>' +
        '<span class="project-card__label"><b>' + p.name + '</b><span>' + p.kind + '</span></span></a>';
    }).join('');

    function update() {
      var p = data.projects[activeProject];
      orbit.style.transform = 'rotateY(' + (-activeProject * 360 / N) + 'deg)';
      $('#projectIndex').textContent = String(activeProject + 1).padStart(2,'0');
      $('#projectKind').textContent = p.kind;
      $('#projectName').textContent = p.name;
      $('#projectTag').textContent = p.tag;
      $$('.project-card').forEach(function (el, i) {
        var a = (i - activeProject + N) % N;
        var b = (activeProject - i + N) % N;
        var d = Math.min(a, b);
        el.style.opacity = d > 2 ? '.2' : '1';
        el.style.filter = d === 0 ? 'none' : 'saturate(.5) brightness(.7)';
      });
    }

    $('#nextProject').addEventListener('click', function () { activeProject = (activeProject + 1) % N; update(); });
    $('#prevProject').addEventListener('click', function () { activeProject = (activeProject - 1 + N) % N; update(); });

    var drawer = $('#drawer');
    $('#projectMore').addEventListener('click', function () {
      var p = data.projects[activeProject];
      $('#drawerKind').textContent = p.kind;
      $('#drawerName').textContent = p.name;
      $('#drawerDesc').textContent = p.desc;
      $('#drawerMetric').textContent = p.why;
      $('#drawerStack').innerHTML = p.stack.map(function (x) { return '<span>' + x + '</span>'; }).join('');
      $('#drawerLinks').innerHTML = (p.live ? '<a href="' + p.live + '" target="_blank" rel="noopener">Live ↗</a>' : '') +
        '<a href="' + p.repo + '" target="_blank" rel="noopener">GitHub ↗</a>';
      drawer.hidden = false;
      document.body.classList.add('no-scroll');
    });
    $('#drawerClose').addEventListener('click', function () {
      drawer.hidden = true;
      document.body.classList.remove('no-scroll');
    });

    window.addEventListener('keydown', function (e) {
      if (!drawer.hidden) return;
      var rect = $('#projectStage').getBoundingClientRect();
      if (rect.top >= innerHeight || rect.bottom <= 0) return;
      if (e.key === 'ArrowRight') { activeProject = (activeProject + 1) % N; update(); }
      if (e.key === 'ArrowLeft') { activeProject = (activeProject - 1 + N) % N; update(); }
    });
    update();
  }

  function renderAboutAndProof() {
    $('#capabilityMap').innerHTML = data.caps.map(function (x) {
      return '<div class="cap"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>';
    }).join('');

    $$('.desktop-app').forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('.desktop-app').forEach(function (b) { b.classList.toggle('active', b === btn); });
        $$('.window').forEach(function (w) { w.classList.toggle('active', w.dataset.windowPanel === btn.dataset.window); });
      });
    });

    function timeNow() {
      return new Intl.DateTimeFormat('en-IN', { timeZone:'Asia/Kolkata', hour:'2-digit', minute:'2-digit', hour12:false }).format(new Date());
    }
    function tick() {
      var t = timeNow();
      $('#clock').textContent = t;
      $('#nowTime').textContent = t;
    }
    tick();
    setInterval(tick, 30000);

    $('#proofGrid').innerHTML = data.proof.map(function (x) {
      return '<article class="proof-card"><span class="num">' + x[0] + '</span><h3>' + x[1] + '</h3><p>' + x[2] + '</p></article>';
    }).join('');

    $('#skillsBars').innerHTML = data.skills.map(function (x) {
      return '<div class="skill-row"><span>' + x[0] + '</span><b>LVL ' + x[1] + '</b><i style="--level:' + x[1] + '%"></i></div>';
    }).join('');

    if (window.ScrollTrigger) {
      ScrollTrigger.create({ trigger:'.skills-panel', start:'top 75%', onEnter:function () { $('.skills-panel').classList.add('in'); } });
    } else $('.skills-panel').classList.add('in');
  }

  function navSpy() {
    var links = $$('.nav nav a');
    ['work','about','proof','contact'].forEach(function (id) {
      var el = $('#' + id);
      if (!el) return;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle('active', a.dataset.sec === id); });
        });
      }, { rootMargin:'-35% 0px -55%' }).observe(el);
    });
  }

  function heroCanvas() {
    var c = $('#heroCanvas');
    if (!c) return;
    var g = c.getContext('2d');
    var tick = 0;
    function fit() {
      var d = window.devicePixelRatio || 1;
      c.width = c.clientWidth * d;
      c.height = c.clientHeight * d;
      g.setTransform(d,0,0,d,0,0);
    }
    new ResizeObserver(fit).observe(c);
    fit();
    function loop() {
      var w = c.clientWidth, h = c.clientHeight;
      g.fillStyle = '#08080b'; g.fillRect(0,0,w,h);
      g.font = '11px DM Mono, monospace'; g.fillStyle = '#c8ff4d';
      ['> rishi.build()','  loading: ai_systems','  loading: realtime_rooms','  loading: computer_vision','  loading: product_polish','','STATUS: SHIPPING'].forEach(function (t,i) { g.fillText(t,18,30+i*20); });
      g.strokeStyle = 'rgba(200,255,77,.18)';
      for (var x=0;x<w;x+=24) { g.beginPath(); g.moveTo(x,0); g.lineTo(x,h); g.stroke(); }
      for (var y=0;y<h;y+=24) { g.beginPath(); g.moveTo(0,y); g.lineTo(w,y); g.stroke(); }
      g.fillStyle = 'rgba(200,255,77,.85)';
      for (var i=0;i<24;i++) {
        var px = (i*47 + tick*1.2) % w;
        var py = h - 24 - Math.sin(i*.8 + tick*.03) * 30;
        g.fillRect(px,py,2,2);
      }
      tick++;
      requestAnimationFrame(loop);
    }
    loop();
  }

  function orbCanvas() {
    var c = $('#orbCanvas');
    if (!c) return;
    var g = c.getContext('2d');
    var t = 0;
    function fit() {
      var d = window.devicePixelRatio || 1;
      c.width = c.clientWidth * d;
      c.height = c.clientHeight * d;
      g.setTransform(d,0,0,d,0,0);
    }
    new ResizeObserver(fit).observe(c);
    fit();
    function loop() {
      var w=c.clientWidth,h=c.clientHeight,cx=w/2,cy=h/2,r=Math.min(w,h)*.28;
      g.clearRect(0,0,w,h); g.strokeStyle='rgba(200,255,77,.5)'; g.lineWidth=1;
      for (var ring=0;ring<8;ring++) {
        g.beginPath();
        for (var i=0;i<=100;i++) {
          var a=i/100*Math.PI*2+t*(.002+ring*.00015);
          var rr=r*(.48+ring*.07)+Math.sin(i*.35+t*.01+ring)*9;
          var x=cx+Math.cos(a)*rr, y=cy+Math.sin(a*1.16)*rr*.65;
          if(i===0) g.moveTo(x,y); else g.lineTo(x,y);
        }
        g.stroke();
      }
      g.fillStyle='#c8ff4d';
      for (var p=0;p<45;p++) {
        var aa=p/45*Math.PI*2+t*.004, r2=r*(.7+.28*Math.sin(p*2.3));
        g.beginPath(); g.arc(cx+Math.cos(aa)*r2,cy+Math.sin(aa*1.3)*r2*.65,1.7,0,Math.PI*2); g.fill();
      }
      t++; requestAnimationFrame(loop);
    }
    loop();
  }

  function cursor() {
    if (reduced || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    var c=$('#cursor'), path=$('#cursorPath'), lab=$('#cursorLabel'), label=$('span',lab);
    var pts = Array.from({length:14}, function () { return {x:innerWidth/2,y:innerHeight/2}; });
    var tx=innerWidth/2, ty=innerHeight/2;
    addEventListener('pointermove', function (e) { tx=e.clientX;ty=e.clientY;c.classList.add('on'); });
    function loop() {
      pts[0].x+=(tx-pts[0].x)*.34; pts[0].y+=(ty-pts[0].y)*.34;
      for(var i=1;i<pts.length;i++){var k=.26-i*.009;pts[i].x+=(pts[i-1].x-pts[i].x)*k;pts[i].y+=(pts[i-1].y-pts[i].y)*k;}
      var head=pts[0],tail=pts[pts.length-1],size=18+Math.min(24,Math.hypot(head.x-tail.x,head.y-tail.y)*.16);
      var ring=pts.map(function (p,i){var a=i/pts.length*Math.PI*2,anchor=pts[Math.min(i,pts.length-1)];return[(i?anchor.x:head.x)+Math.cos(a)*size,(i?anchor.y:head.y)+Math.sin(a)*size];});
      var d='M '+ring[0][0]+' '+ring[0][1]; for(var q=1;q<ring.length;q++)d+=' L '+ring[q][0]+' '+ring[q][1]; d+=' Z';
      path.setAttribute('d',d); lab.style.transform='translate('+(tx+22)+'px,'+(ty+18)+'px)'; requestAnimationFrame(loop);
    }
    loop();
    $$('[data-cursor]').forEach(function (el) {
      el.addEventListener('mouseenter', function () { label.textContent=el.dataset.cursor;lab.classList.add('on'); });
      el.addEventListener('mouseleave', function () { lab.classList.remove('on'); });
    });
  }

  function snakeGame() {
    var c=$('#snakeCanvas'),g=c.getContext('2d'),scoreEl=$('#score'),bestEl=$('#best'),hint=$('#gameHint');
    var cols=24,rows=12,snake=[],dir=[1,0],next=[1,0],food={x:16,y:6},score=0,best=+(localStorage.rmSnakeBest||0),state='idle',timer=null;
    bestEl.textContent=String(best).padStart(2,'0');
    function fit(){var d=devicePixelRatio||1;c.width=c.clientWidth*d;c.height=c.clientHeight*d;g.setTransform(d,0,0,d,0,0);draw();}
    new ResizeObserver(fit).observe(c);
    function place(){do{food={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)};}while(snake.some(function(s){return s.x===food.x&&s.y===food.y;}));}
    function reset(){snake=[{x:8,y:6},{x:7,y:6},{x:6,y:6}];dir=next=[1,0];score=0;scoreEl.textContent='00';place();draw();}
    function start(){if(timer)clearInterval(timer);state='play';hint.textContent='playing · arrows / WASD';reset();timer=setInterval(step,105);}
    function step(){dir=next;var h={x:snake[0].x+dir[0],y:snake[0].y+dir[1]};if(h.x<0||h.y<0||h.x>=cols||h.y>=rows||snake.some(function(s){return s.x===h.x&&s.y===h.y;})){state='dead';clearInterval(timer);timer=null;hint.textContent='game over · press enter or tap';draw();return;}snake.unshift(h);if(h.x===food.x&&h.y===food.y){score++;scoreEl.textContent=String(score).padStart(2,'0');if(score>best){best=score;localStorage.rmSnakeBest=best;bestEl.textContent=String(best).padStart(2,'0');}place();}else snake.pop();draw();}
    function draw(){var w=c.clientWidth,h=c.clientHeight,cw=w/cols,ch=h/rows;g.fillStyle='#09090b';g.fillRect(0,0,w,h);g.fillStyle='rgba(255,255,255,.08)';for(var x=0;x<cols;x++)for(var y=0;y<rows;y++)g.fillRect(x*cw+cw/2,y*ch+ch/2,1,1);g.fillStyle='#f2f0e9';g.fillRect(food.x*cw+3,food.y*ch+3,cw-6,ch-6);snake.forEach(function(s,i){g.fillStyle=i===0?'#c8ff4d':'rgba(200,255,77,'+Math.max(.28,1-i/snake.length)+')';g.fillRect(s.x*cw+3,s.y*ch+3,cw-6,ch-6);});if(state!=='play'){g.fillStyle='rgba(5,5,6,.74)';g.fillRect(0,0,w,h);g.fillStyle='#f2f0e9';g.textAlign='center';g.font='800 '+Math.max(22,w*.045)+'px DM Sans';g.fillText(state==='dead'?'EATEN':'SNAKE',w/2,h/2);}}
    function turn(v){if(v[0]===-dir[0]&&v[1]===-dir[1])return;next=v;}
    addEventListener('keydown',function(e){var map={ArrowUp:[0,-1],w:[0,-1],W:[0,-1],ArrowDown:[0,1],s:[0,1],S:[0,1],ArrowLeft:[-1,0],a:[-1,0],A:[-1,0],ArrowRight:[1,0],d:[1,0],D:[1,0]};if(map[e.key]&&state==='play'){e.preventDefault();turn(map[e.key]);}else if((e.key==='Enter'||e.key===' ')&&state!=='play'){start();}});
    c.addEventListener('pointerdown',function(){if(state!=='play')start();});
    fit(); reset();
  }

  renderRails();
  revealWords();
  renderProjects();
  renderAboutAndProof();
  navSpy();
  heroCanvas();
  orbCanvas();
  cursor();
  snakeGame();
  boot();
})();