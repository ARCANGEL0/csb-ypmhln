"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849,1583],{849:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(74848),a=n(33540);let i=a.default.div`
  display: flex;
  place-content: center;

  canvas {
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
`;var s=n(96540),l=n(16602),c=n(62104),f=n(1364),u=n(48060),o=n(37e3);let d=({containerRef:e,id:t,setLoading:n,loading:r})=>{let{processes:{[t]:i}={}}=(0,c.N)(),{componentWindow:d,defaultSize:h={height:0,width:0},libs:w=[],maximized:m=!1}=i||{},{windowStates:{[t]:p}}=(0,f.w)(),{sizes:{titleBar:g}}=(0,a.useTheme)(),y=(0,s.useRef)(!1),v=(0,l.A)(),{size:b}=p||{};(0,s.useEffect)(()=>{r&&(0,o.aY)(w).then(()=>{if(!window.Chess)return;let t=document.createElement("canvas");e.current?.appendChild(t),window.Chess.init(t),n(!1),v(window.FS,"Chess")})},[e,w,r,v,n]),(0,s.useEffect)(()=>{window.Chess&&setTimeout(()=>{y.current=m;let{height:e,width:t}=!m&&b||d?.getBoundingClientRect()||{};if(!e||!t)return;let n=h?(0,o.kl)(h.width)/(0,o.kl)(h.height):1,r=(0,o.kl)(t),a=r>(0,o.kl)(e)-g.height,i=m&&a?r/n:r,s=i/n;s>0&&i>0&&window.Chess.setSize(i,s)},m||y.current?u.UW.WINDOW+10:0)},[d,h,m,b,g.height]),(0,s.useEffect)(()=>()=>{try{window.Chess?.destroy()}catch{}},[])};var h=n(14153);let w=({id:e})=>(0,r.jsx)(h.A,{StyledComponent:i,id:e,useHook:d})},14153:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(74848),a=n(96540),i=n(51583),s=n(8218),l=n(62104);let c=(0,a.memo)(({id:e,useHook:t,StyledComponent:n,children:c})=>{let{processes:{[e]:{url:f=""}={}}}=(0,l.N)(),u=(0,a.useRef)(null),[o,d]=(0,a.useState)(!0),h=(0,a.useMemo)(()=>({contain:"strict",visibility:o?"hidden":"visible"}),[o]);return t({containerRef:u,id:e,loading:o,setLoading:d,url:f}),(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)(i.default,{}),(0,r.jsx)(n,{ref:u,style:h,...(0,s.A)({id:e}),children:c})]})})},51583:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(33540);let a=r.default.div`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "L o a d i n g ...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`},16602:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(41017);let i=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,a.f)(),i=(0,r.useRef)();return(0,r.useEffect)(()=>()=>{if(i.current){let e=i.current;i.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,r.useCallback)(async(t,r)=>{if(!t)return;let a="";try{a=await e(t,r)}catch{}a&&(n("/",a),i.current=a)},[e,n])}},8218:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(16286),a=n(96540),i=n(51780),s=n(16091),l=n(13296),c=n(41017),f=n(62104),u=n(1364),o=n(48060),d=n(37e3),h=n(96119);let w=({callback:e,directory:t=o.Bn,id:n,onDragLeave:w,onDragOver:m,updatePositions:p})=>{let{url:g}=(0,f.N)(),y=(0,h.w)(),{iconPositions:v,sortOrders:b,setIconPositions:C}=(0,u.w)(),{exists:k,mkdirRecursive:x,updateFolder:A,writeFile:E}=(0,c.f)(),j=(0,a.useCallback)(async(e,t,a)=>{if(n){if(t){let i=(0,r.join)(o.Bn,e);if(await x(o.Bn),await E(i,t,!0))return a===l.z.UPDATE_URL&&g(n,i),A(o.Bn,e),(0,r.basename)(i)}else a===l.z.UPDATE_URL&&g(n,e)}return""},[n,x,A,g,E]),{openTransferDialog:B}=(0,i.A)();return{onDragLeave:w,onDragOver:e=>{m?.(e),(0,d.CH)(e)},onDrop:a=>{if(o.jj.has((0,d.uQ)(t)))return;if(p&&a.target instanceof HTMLElement){let{files:e,text:n}=(0,s.bn)(a);if(0===e.length&&""===n)return;(async()=>{let i={x:a.clientX,y:a.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;s=s.map(e=>(0,r.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=await Promise.all(s.map(async e=>{let n=`${t}/${e}`;if(!v[n]||!await k(n))return e;let a=0;do a+=1,n=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${a})${(0,r.extname)(e)}`;while(v[n]&&await k(n));return(0,r.basename)(n)})),(0,d.$Y)(t,a.target,v,b,i,s,C,k)})()}let i="string"==typeof n;i&&!p&&t===o.Bn&&y.current[n]?.componentWindow?.focus(o.VD),(0,s.nX)(a,e||j,t,B,i)}}}}}]);