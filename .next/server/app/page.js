(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1603:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>r.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(5480),t(9176),t(5866);var i=t(3191),n=t(8716),s=t(7922),r=t.n(s),l=t(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(a,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5480)),"/Users/kostiantyn/Downloads/bratislava-app/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,9176)),"/Users/kostiantyn/Downloads/bratislava-app/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/kostiantyn/Downloads/bratislava-app/src/app/page.tsx"],p="/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8792:(e,a,t)=>{Promise.resolve().then(t.bind(t,4497))},4497:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>m});var i=t(326),n=t(434),s=t(7577),r=t(1193),l=t(5342),o=t(2068);let d=`
  :root {
    --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-spring: cubic-bezier(0.34, 1.42, 0.64, 1);
  }

  /* ── Entrance keyframes ── */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeScaleIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Hero layer ── */
  .anim-hero-label {
    animation: fadeIn 400ms var(--ease-out) both;
    animation-delay: 0ms;
  }
  .anim-hero-title {
    animation: fadeSlideUp 500ms var(--ease-out) both;
    animation-delay: 60ms;
  }
  .anim-hero-subtitle {
    animation: fadeSlideUp 500ms var(--ease-out) both;
    animation-delay: 120ms;
  }
  .anim-hero-counters {
    animation: fadeSlideUp 500ms var(--ease-out) both;
    animation-delay: 200ms;
  }

  /* ── Banner ── */
  .anim-banner {
    animation: fadeSlideDown 450ms var(--ease-out) both;
    animation-delay: 280ms;
  }

  /* ── Specialist of day ── */
  .anim-specialist-label {
    animation: fadeIn 400ms var(--ease-out) both;
    animation-delay: 360ms;
  }
  .anim-specialist-card {
    animation: fadeScaleIn 480ms var(--ease-out) both;
    animation-delay: 420ms;
  }

  /* ── Section tiles (stagger) ── */
  .anim-tile-0 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 520ms; }
  .anim-tile-1 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 590ms; }
  .anim-tile-2 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 660ms; }
  .anim-tile-3 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 730ms; }

  /* ── Recent cards (stagger) ── */
  .anim-recent-label {
    animation: fadeIn 400ms var(--ease-out) both;
    animation-delay: 800ms;
  }
  .anim-recent-0 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 850ms; }
  .anim-recent-1 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 910ms; }
  .anim-recent-2 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 970ms; }

  /* ── Skip all entrance animations on repeat visits ── */
  /* Any .anim-* class inside .animations-done is instantly visible */
  .animations-done [class*="anim-"] {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  /* ── Tap / press feedback ── */
  .pressable {
    transition: transform 150ms var(--ease-spring);
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
  .pressable:active {
    transform: scale(0.97);
    transition: transform 80ms var(--ease-out);
  }

  /* ── Arrow nudge on hover (desktop / pointer devices) ── */
  @media (hover: hover) {
    .pressable:hover .arrow-hint {
      transform: translateX(4px);
      opacity: 1;
    }
  }
  .arrow-hint {
    transition: transform 200ms var(--ease-out), opacity 200ms var(--ease-out);
  }
`,c=[{href:"/catalog",icon:"\uD83D\uDDC2",label:"Каталог",desc:"Врачи, юристы, мастера",color:"#EEF3FA",border:"#C5D5EE"},{href:"/listings",icon:"\uD83D\uDCE2",label:"Объявления",desc:"Купить, продать, отдать",color:"#FFF8EE",border:"#F0D898"},{href:"/events",icon:"\uD83C\uDF89",label:"События",desc:"Места и встречи",color:"#F0FAF0",border:"#A8D8A8"},{href:"/blacklist",icon:"⚠️",label:"Чёрный список",desc:"Кидалы и плохие работодатели",color:"#0F1923",border:"#2A3540"}],p={active:!0,emoji:"\uD83D\uDCCC",text:"Добро пожаловать! Мы только запустились — добавляй своих специалистов и помогай сообществу расти.",link:"/add",linkLabel:"Добавить →"};function x({count:e,label:a,delay:t,duration:n=1100}){let r=function(e,a=1100,t=200){return(0,s.useRef)(null)}(0,n,t);return(0,i.jsxs)("div",{style:{textAlign:"center"},children:[i.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:"20px",fontFamily:"Unbounded, sans-serif",lineHeight:1},children:i.jsx("span",{ref:r,children:"0"})}),i.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:"11px",marginTop:"3px"},children:a})]})}function m(){var e;let a=r.jt[r.jt.length-1],t=r.RH[r.RH.length-1],m=r.FP[r.FP.length-1],h=r.jt[e=r.jt.length,Math.floor(Date.now()/864e5)%e],f={specialists:r.jt.length,listings:r.RH.length,events:r.FP.length,jobs:r.WN.length,housing:r.H.length},[g]=(0,s.useState)(()=>!1),u=g?0:400,y=g?0:1100;return(0,i.jsxs)("div",{className:g?"animations-done":"",children:[i.jsx("style",{dangerouslySetInnerHTML:{__html:d}}),(0,i.jsxs)("div",{style:{background:"var(--blue)",padding:"32px 20px 28px",position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:180,height:180,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}),i.jsx("div",{style:{position:"absolute",bottom:-20,right:60,width:80,height:80,borderRadius:"50%",background:"rgba(232,184,75,0.2)"}}),i.jsx("p",{className:"anim-hero-label",style:{margin:"0 0 8px",color:"var(--accent)",fontSize:"12px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase"},children:"Братислава"}),(0,i.jsxs)("h1",{className:"anim-hero-title",style:{margin:0,color:"#fff",fontSize:"26px",lineHeight:1.2},children:["Свои",i.jsx("br",{}),"в Братиславе"]}),i.jsx("p",{className:"anim-hero-subtitle",style:{margin:"10px 0 0",color:"rgba(255,255,255,0.65)",fontSize:"14px"},children:"Русскоязычное сообщество"}),(0,i.jsxs)("div",{className:"anim-hero-counters",style:{display:"flex",gap:"16px",marginTop:"20px",flexWrap:"wrap"},children:[i.jsx(x,{count:f.specialists,label:"специалистов",delay:u,duration:y}),i.jsx(x,{count:f.listings,label:"объявлений",delay:u+80,duration:y}),i.jsx(x,{count:f.events,label:"событий",delay:u+160,duration:y}),i.jsx(x,{count:f.jobs,label:"вакансий",delay:u+240,duration:y})]})]}),p.active&&(0,i.jsxs)("div",{className:"anim-banner",style:{margin:"16px 16px 0",background:"var(--accent)",borderRadius:"var(--radius)",padding:"14px 16px",display:"flex",gap:"10px",alignItems:"flex-start"},children:[i.jsx("span",{style:{fontSize:"20px",flexShrink:0},children:p.emoji}),(0,i.jsxs)("div",{style:{flex:1},children:[i.jsx("p",{style:{margin:0,fontSize:"13px",color:"#0F1923",lineHeight:1.5,fontWeight:500},children:p.text}),p.link&&i.jsx(n.default,{href:p.link,style:{display:"inline-block",marginTop:"8px",fontSize:"13px",fontWeight:700,color:"#0F1923",textDecoration:"none"},children:p.linkLabel})]})]}),(0,i.jsxs)("div",{style:{padding:"16px 16px 4px"},children:[i.jsx("h2",{className:"anim-specialist-label",style:{fontSize:"12px",color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",margin:"0 0 10px"},children:"Специалист дня"}),i.jsx("div",{className:"anim-specialist-card",children:i.jsx(n.default,{href:`/catalog/${h.category}/${h.id}`,style:{textDecoration:"none"},children:(0,i.jsxs)("div",{className:"pressable",style:{background:"linear-gradient(135deg, var(--blue) 0%, #2B5499 100%)",borderRadius:"var(--radius)",padding:"16px",display:"flex",gap:"14px",alignItems:"center"},children:[h.photo&&i.jsx("img",{src:h.photo,alt:"",style:{width:56,height:56,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(255,255,255,0.3)",flexShrink:0}}),(0,i.jsxs)("div",{style:{minWidth:0,flex:1},children:[i.jsx("div",{style:{fontWeight:700,fontSize:"15px",color:"#fff"},children:h.name}),i.jsx("div",{style:{fontSize:"12px",color:"rgba(255,255,255,0.6)",marginTop:"3px"},children:l.Hs[h.category]}),i.jsx("p",{style:{margin:"6px 0 0",fontSize:"12px",color:"rgba(255,255,255,0.7)",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:h.description})]}),i.jsx("span",{className:"arrow-hint",style:{color:"rgba(255,255,255,0.5)",fontSize:"18px",flexShrink:0},children:"›"})]})})})]}),i.jsx("div",{style:{padding:"16px 16px",display:"flex",flexDirection:"column",gap:"10px"},children:c.map((e,a)=>i.jsx("div",{className:`anim-tile-${a}`,children:i.jsx(n.default,{href:e.href,style:{textDecoration:"none"},children:(0,i.jsxs)("div",{className:"pressable",style:{background:e.color,border:`1px solid ${e.border}`,borderRadius:"var(--radius)",padding:"18px 20px",display:"flex",alignItems:"center",gap:"16px"},children:[i.jsx("span",{style:{fontSize:"32px",lineHeight:1},children:e.icon}),(0,i.jsxs)("div",{children:[i.jsx("div",{style:{fontWeight:700,fontSize:"16px",color:"/blacklist"===e.href?"#fff":"var(--text)",fontFamily:"Unbounded, sans-serif"},children:e.label}),i.jsx("div",{style:{fontSize:"13px",color:"/blacklist"===e.href?"rgba(255,255,255,0.5)":"var(--text-muted)",marginTop:"2px"},children:e.desc})]}),i.jsx("span",{className:"arrow-hint",style:{marginLeft:"auto",color:"/blacklist"===e.href?"rgba(255,255,255,0.4)":"var(--text-muted)",fontSize:"18px"},children:"›"})]})})},e.href))}),(0,i.jsxs)("div",{style:{padding:"4px 16px 24px"},children:[i.jsx("h2",{className:"anim-recent-label",style:{fontSize:"12px",color:"var(--text-muted)",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",margin:"0 0 12px"},children:"Недавно добавлено"}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsx("div",{className:"anim-recent-0",children:i.jsx(n.default,{href:`/catalog/${a.category}/${a.id}`,style:{textDecoration:"none"},children:i.jsx("div",{className:"pressable",children:i.jsx(o.Card,{children:(0,i.jsxs)("div",{style:{padding:"14px 16px",display:"flex",gap:"12px",alignItems:"center"},children:[i.jsx("img",{src:a.photo,alt:"",style:{width:44,height:44,borderRadius:"50%",objectFit:"cover",flexShrink:0}}),(0,i.jsxs)("div",{style:{minWidth:0},children:[i.jsx("div",{style:{fontWeight:600,fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a.name}),i.jsx(o.Badge,{children:l.Hs[a.category]})]}),i.jsx("span",{className:"arrow-hint",style:{marginLeft:"auto",color:"var(--text-muted)"},children:"›"})]})})})})}),i.jsx("div",{className:"anim-recent-1",children:i.jsx(n.default,{href:`/listings/${t.id}`,style:{textDecoration:"none"},children:i.jsx("div",{className:"pressable",children:i.jsx(o.Card,{children:(0,i.jsxs)("div",{style:{padding:"14px 16px",display:"flex",gap:"12px",alignItems:"center"},children:[i.jsx("span",{style:{fontSize:"28px"},children:"\uD83D\uDCE2"}),(0,i.jsxs)("div",{style:{minWidth:0},children:[i.jsx("div",{style:{fontWeight:600,fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.title}),(0,i.jsxs)("div",{style:{display:"flex",gap:"6px",marginTop:"4px",alignItems:"center"},children:[i.jsx(o.Badge,{color:"#FFF8EE",textColor:"#B8860B",children:l.Bv[t.type]}),t.price&&(0,i.jsxs)("span",{style:{fontSize:"13px",fontWeight:600,color:"var(--blue)"},children:[t.price,"€"]})]})]}),i.jsx("span",{className:"arrow-hint",style:{marginLeft:"auto",color:"var(--text-muted)"},children:"›"})]})})})})}),i.jsx("div",{className:"anim-recent-2",children:i.jsx(n.default,{href:`/events/${m.id}`,style:{textDecoration:"none"},children:i.jsx("div",{className:"pressable",children:i.jsx(o.Card,{children:(0,i.jsxs)("div",{style:{padding:"14px 16px",display:"flex",gap:"12px",alignItems:"center"},children:[i.jsx("span",{style:{fontSize:"28px"},children:"\uD83C\uDF89"}),(0,i.jsxs)("div",{style:{minWidth:0},children:[i.jsx("div",{style:{fontWeight:600,fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m.title}),i.jsx(o.Badge,{color:"#F0FAF0",textColor:"#2D7A2D",children:m.isPlace?"Место":"Событие"})]}),i.jsx("span",{className:"arrow-hint",style:{marginLeft:"auto",color:"var(--text-muted)"},children:"›"})]})})})})})]})]})]})}},5480:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>r,__esModule:()=>s,default:()=>l});var i=t(8570);let n=(0,i.createProxy)(String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/page.tsx`),{__esModule:s,$$typeof:r}=n;n.default;let l=(0,i.createProxy)(String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/page.tsx#default`)}};var a=require("../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),i=a.X(0,[24,359],()=>t(1603));module.exports=i})();