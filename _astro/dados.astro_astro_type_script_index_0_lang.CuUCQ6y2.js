function M(){const x=document.getElementById("dice-container"),g=document.getElementById("btn-spin"),c=document.getElementById("result-display"),C=document.querySelectorAll("#dice-count-selector .selector-btn"),I=document.querySelectorAll("#theme-selector .selector-btn"),h=document.getElementById("history-list"),A=document.getElementById("btn-clear"),m=document.getElementById("shake-permission-btn"),y=document.getElementById("toast-message");if(!x||!g||!c)return;let l=parseInt(localStorage.getItem("decidelo_dados_count"))||1,u=localStorage.getItem("decidelo_dados_theme")||"casino",v=!1,f=[],p=[{x:0,y:0},{x:0,y:0},{x:0,y:0}];const q={1:{x:0,y:0},2:{x:0,y:180},3:{x:0,y:270},4:{x:0,y:90},5:{x:270,y:0},6:{x:90,y:0}};let d=null;function H(){d||(d=new(window.AudioContext||window.webkitAudioContext)),d.state==="suspended"&&d.resume()}function R(t){try{H();const s=d.currentTime,i=4+t*3;for(let n=0;n<i;n++){const e=Math.random()*1.1,o=.8+Math.random()*.4;G(s+e,o)}for(let n=0;n<t;n++){const e=s+1.6+n*.1;N(e,.9+n*.08)}}catch{console.warn("Audio Context bloqueado o no soportado en este navegador.")}}function G(t,s){if(!d)return;const i=d.createOscillator(),n=d.createGain();i.type="triangle",i.frequency.setValueAtTime(950*s+(Math.random()-.5)*200,t),n.gain.setValueAtTime(.04,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.025),i.connect(n),n.connect(d.destination),i.start(t),i.stop(t+.025);const e=d.createOscillator(),o=d.createGain();e.type="sine",e.frequency.setValueAtTime(130*s,t),o.gain.setValueAtTime(.07,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.04),e.connect(o),o.connect(d.destination),e.start(t),e.stop(t+.04)}function N(t,s){if(!d)return;const i=d.createOscillator(),n=d.createGain();i.type="sine",i.frequency.setValueAtTime(110*s,t),i.frequency.exponentialRampToValueAtTime(50,t+.1),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.12),i.connect(n),n.connect(d.destination),i.start(t),i.stop(t+.12);const e=d.createOscillator(),o=d.createGain();e.type="triangle",e.frequency.setValueAtTime(1100*s,t),o.gain.setValueAtTime(.08,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.04),e.connect(o),o.connect(d.destination),e.start(t),e.stop(t+.04)}function k(t){y&&(y.textContent=t,y.classList.add("show"),setTimeout(()=>{y.classList.remove("show")},2500))}function O(){const t=localStorage.getItem("decidelo_dados_history");if(t)try{f=JSON.parse(t)}catch{f=[]}$()}function $(){if(h){if(h.innerHTML="",f.length===0){h.innerHTML='<span class="history-empty">Sin lanzamientos aún</span>';return}f.slice().reverse().forEach(t=>{const s=document.createElement("div");s.className="history-item-row";const i=document.createElement("span");i.className="history-sum",i.textContent=`Total: ${t.sum}`;const n=document.createElement("span");n.className="history-details",n.textContent=`[${t.details.join(", ")}]`,s.appendChild(i),s.appendChild(n),h.appendChild(s)})}}function Y(t){const i={sum:t.reduce((n,e)=>n+e,0),details:t};f.push(i),f.length>5&&f.shift(),localStorage.setItem("decidelo_dados_history",JSON.stringify(f)),$()}function w(){x.innerHTML="";for(let t=0;t<l;t++){const s=document.createElement("div");if(s.className="dice-scene",u==="dnd")s.innerHTML=`
          <div class="d20-wrapper" id="d20-wrapper-${t}">
            <svg viewBox="0 0 100 100" class="d20-svg">
              <defs>
                <linearGradient id="d20-grad-central-${t}" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#00e5ff" />
                  <stop offset="100%" stop-color="#b366ff" />
                </linearGradient>
                <linearGradient id="d20-grad-side-${t}" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#372880" />
                  <stop offset="100%" stop-color="#1f144d" />
                </linearGradient>
              </defs>
              <polygon points="50,32 76,68 24,68" fill="url(#d20-grad-central-${t})" stroke="rgba(0, 229, 255, 0.55)" stroke-width="1" stroke-linejoin="round"/>
              <polygon points="50,2 91.6,26 50,32" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="50,2 50,32 8.4,26" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="8.4,26 50,32 24,68" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="8.4,26 24,68 8.4,74" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="24,68 8.4,74 50,98" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="76,68 50,98 91.6,74" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="76,68 91.6,74 91.6,26" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="50,32 76,68 91.6,26" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <polygon points="24,68 76,68 50,98" fill="url(#d20-grad-side-${t})" stroke="rgba(179, 102, 255, 0.45)" stroke-width="0.9" stroke-linejoin="round"/>
              <text x="50" y="59" class="d20-number" id="d20-number-${t}" text-anchor="middle" dominant-baseline="central">20</text>
            </svg>
          </div>
        `;else{const i=u==="yugioh",n=i?"yugioh-face":"casino-face",e=i?"yugioh-dot":"casino-dot",o=i?`
          <div class="eye-of-anubis">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15,50 Q50,20 85,50" stroke="#d4af37" stroke-width="5" stroke-linecap="round" fill="none"/>
              <path d="M15,50 Q50,80 85,50" stroke="#d4af37" stroke-width="5" stroke-linecap="round" fill="none"/>
              <circle cx="50" cy="50" r="14" fill="#201a15" stroke="#d4af37" stroke-width="4"/>
              <circle cx="46" cy="46" r="4" fill="#ffffff"/>
              <path d="M42,62 L38,82 Q34,88 28,78 L37,63" stroke="#d4af37" stroke-width="4" stroke-linecap="round" fill="none"/>
              <path d="M60,62 Q72,74 80,66" stroke="#d4af37" stroke-width="4" stroke-linecap="round" fill="none"/>
            </svg>
          </div>
        `:`
          <div class="dot dot-top-left ${e}"></div>
          <div class="dot dot-top-right ${e}"></div>
          <div class="dot dot-mid-left ${e}"></div>
          <div class="dot dot-mid-right ${e}"></div>
          <div class="dot dot-bot-left ${e}"></div>
          <div class="dot dot-bot-right ${e}"></div>
        `;s.innerHTML=`
          <div class="dice-cube" id="die-${t}">
            <div class="face front ${n}">
              <div class="dot dot-center ${e}"></div>
            </div>
            <div class="face back ${n}">
              <div class="dot dot-top-left ${e}"></div>
              <div class="dot dot-bot-right ${e}"></div>
            </div>
            <div class="face right ${n}">
              <div class="dot dot-top-left ${e}"></div>
              <div class="dot dot-center ${e}"></div>
              <div class="dot dot-bot-right ${e}"></div>
            </div>
            <div class="face left ${n}">
              <div class="dot dot-top-left ${e}"></div>
              <div class="dot dot-top-right ${e}"></div>
              <div class="dot dot-bot-left ${e}"></div>
              <div class="dot dot-bot-right ${e}"></div>
            </div>
            <div class="face top ${n}">
              <div class="dot dot-top-left ${e}"></div>
              <div class="dot dot-top-right ${e}"></div>
              <div class="dot dot-center ${e}"></div>
              <div class="dot dot-bot-left ${e}"></div>
              <div class="dot dot-bot-right ${e}"></div>
            </div>
            <div class="face bottom ${n}">
              ${o}
            </div>
          </div>
        `}x.appendChild(s)}X()}function X(){p=[{x:0,y:0},{x:0,y:0},{x:0,y:0}];for(let t=0;t<l;t++){const s=document.getElementById(`die-${t}`);s&&(s.style.transform="rotateX(0deg) rotateY(0deg)")}}function S(){if(v)return;v=!0,g.disabled=!0,c.classList.remove("show"),R(l);const t=1600,s=100,i=[],n=u==="dnd"?20:6;for(let o=0;o<l;o++){const r=Math.floor(Math.random()*n)+1;i.push(r)}const e=[];if(u==="dnd")for(let o=0;o<l;o++){const r=document.getElementById(`d20-number-${o}`);if(r){const a=setInterval(()=>{r.textContent=Math.floor(Math.random()*20)+1},50);e.push(a)}}for(let o=0;o<l;o++){const r=i[o];setTimeout(()=>{if(u==="dnd"){const a=document.getElementById(`d20-wrapper-${o}`);a&&(a.classList.remove("rolling"),a.offsetWidth,a.classList.add("rolling"))}else{const a=document.getElementById(`die-${o}`);if(a){const L=q[r],J=Math.floor(Math.random()*3)+4,U=Math.floor(Math.random()*3)+4,W=p[o].x%360;let _=p[o].x+J*360+(L.x-W);const Z=p[o].y%360;let j=p[o].y+U*360+(L.y-Z);p[o].x=_,p[o].y=j,a.style.transform=`rotateX(${_}deg) rotateY(${j}deg)`}}},o*s)}for(let o=0;o<l;o++){const r=t+o*s;setTimeout(()=>{if(u==="dnd"){clearInterval(e[o]);const a=document.getElementById(`d20-number-${o}`);a&&(a.textContent=i[o])}o===l-1&&setTimeout(()=>{P(i),Y(i),v=!1,g.disabled=!1},100)},r)}}function P(t){const s=t.reduce((n,e)=>n+e,0);c.innerHTML="";const i=document.createElement("span");if(i.className="sum-value",i.textContent=`Suma: ${s}`,c.appendChild(i),t.length>1){const n=document.createElement("span");n.className="individual-values",n.textContent=`Valores: (${t.join(" + ")})`,c.appendChild(n)}c.classList.add("show")}function E(){C.forEach(t=>{parseInt(t.getAttribute("data-count"),10)===l?t.classList.add("active"):t.classList.remove("active")}),I.forEach(t=>{t.getAttribute("data-theme")===u?t.classList.add("active"):t.classList.remove("active")})}C.forEach(t=>{t.addEventListener("click",()=>{v||(l=parseInt(t.getAttribute("data-count"),10),localStorage.setItem("decidelo_dados_count",l),E(),c&&c.classList.remove("show"),w())})}),I.forEach(t=>{t.addEventListener("click",()=>{v||(u=t.getAttribute("data-theme"),localStorage.setItem("decidelo_dados_theme",u),E(),c&&c.classList.remove("show"),w())})}),g.addEventListener("click",S),A&&A.addEventListener("click",()=>{f=[],localStorage.removeItem("decidelo_dados_history"),$()});let T=null,B=null,V=null,b=0;const Q=14;function D(t){const s=t.accelerationIncludingGravity;if(!s)return;const i=Date.now();if(i-b>100){const n=i-b;b=i;const e=s.x,o=s.y,r=s.z;T!==null&&Math.abs(e+o+r-T-B-V)/n*1e4>Q*100&&(v||S()),T=e,B=o,V=r}}function z(){typeof DeviceMotionEvent<"u"&&typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(t=>{t==="granted"?(window.addEventListener("devicemotion",D),m&&(m.style.display="none"),k("¡Giro por movimiento activado!")):k("Permiso de acelerómetro denegado.")}).catch(t=>{console.error(t),k("Error al activar acelerómetro.")}):(window.addEventListener("devicemotion",D),m&&(m.style.display="none"),k("¡Giro por movimiento activado!"))}m&&((typeof DeviceMotionEvent<"u"&&typeof DeviceMotionEvent.requestPermission=="function"||typeof window.DeviceMotionEvent<"u")&&(m.style.display="inline-flex"),m.addEventListener("click",z)),E(),w(),O()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M();document.addEventListener("astro:page-load",M);
