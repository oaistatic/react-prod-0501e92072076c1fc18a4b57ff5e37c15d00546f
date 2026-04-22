import{n as e,s as t}from"./f025431a-gjb4o5hex8ccu4v5.js";import{cn as n,ct as r,dt as i,et as a,ft as o,ln as s,mn as c,on as l,pn as u,sn as d,st as f,tt as p,un as m}from"./2340486e-epv5pa20wdn92ya5.js";import{$d as h,At as g,BW as _,Bo as v,Cf as y,E5 as b,Et as x,Ft as S,Go as C,It as w,K5 as T,Kd as E,L9 as D,Lt as O,NU as ee,Nt as k,PU as A,Pt as te,Qo as ne,R9 as j,RW as re,Rt as ie,S9 as ae,SW as oe,Sv as se,W7 as ce,Wo as le,Zo as ue,_t as de,af as fe,at as pe,bW as me,bt as he,ef as ge,fd as _e,gt as ve,ht as ye,if as be,kt as xe,l4 as M,ld as N,md as P,oW as Se,ot as Ce,pd as we,qd as Te,rf as Ee,sW as De,sd as F,u4 as Oe,vt as ke,vv as Ae,wf as je,xU as Me,xt as Ne,xv as Pe,yf as Fe,yt as Ie,zo as Le}from"./4813494d-7wk99m1ly4swd636.js";import{cu as Re,su as ze}from"./1a7ebd5f-epb8sg6kzenggoha.js";import{i as Be,n as Ve,r as He,t as Ue}from"./8aa57a25-on1lk3nx8ui3seav.js";var I,L,R,z,B,V,H,We,Ge,Ke=e((()=>{c(),n(),m(),I=new WeakMap,L=new WeakMap,R=new WeakMap,z=new WeakMap,B=new WeakMap,V=new WeakMap,H=new WeakMap,We=class{constructor(e,t){u(this,I,void 0),u(this,L,void 0),u(this,R,void 0),u(this,z,[]),u(this,B,{}),u(this,V,void 0),u(this,H,void 0),d(R,this,e);let n=e.getUniformBlockIndex(t,Ge._),r=e.getActiveUniformBlockParameter(t,n,e.UNIFORM_BLOCK_DATA_SIZE);d(V,this,e.createBuffer()),e.bindBuffer(e.UNIFORM_BUFFER,s(V,this)),e.bufferData(e.UNIFORM_BUFFER,r,e.DYNAMIC_DRAW),e.bindBufferBase(e.UNIFORM_BUFFER,0,s(V,this)),e.uniformBlockBinding(t,n,0);let i=e.getActiveUniformBlockParameter(t,n,e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);d(z,this,[]),d(B,this,{});for(let n=0;n<i.length;n++){let r=i[n];if(r==null)continue;let a=e.getActiveUniform(t,r);if(!a)throw Error(`No uniformInfo for index `+r);let o=a.name;o=o.replace(/\[0\]$/,``);let c=e.getActiveUniforms(t,[r],e.UNIFORM_OFFSET),l=Array.isArray(c)&&c.length>0?c[0]:0;s(z,this).push(o),s(B,this)[o]=l}d(H,this,new ArrayBuffer(r)),d(I,this,new Float32Array(s(H,this))),d(L,this,new Int32Array(s(H,this)))}setVariablesAndRender(e){for(let t of s(z,this)){let[,n]=t.split(`.`),r=s(B,this)[t]/4,i=e[n];typeof i==`number`?s(I,this)[r]=i:typeof i==`boolean`?s(L,this)[r]=+!!i:Array.isArray(i)&&s(I,this).set(i,r)}s(R,this).bindBuffer(s(R,this).UNIFORM_BUFFER,s(V,this)),s(R,this).bufferSubData(s(R,this).UNIFORM_BUFFER,0,s(H,this)),s(R,this).drawArrays(s(R,this).TRIANGLE_STRIP,0,6)}},Ge={_:`BlorbUniformsObject`}})),qe,Je=e((()=>{qe=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

/* ----------------------- Utilities actually used ----------------------- */

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) * (1.0 - t) * exp(-E * 2.0 * t) * t * 10.0;
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) k = 0.000001;
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

/* --------------------------- Active states ----------------------------- */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isWhiteForeground
) {
  float midRadius = 0.12;
  float maxRadius = 0.3;
  float t1 = 1.0;
  float gamma = 3.0;
  float omega = pi / 2.0;

  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    float t_prime = args.time / t1;
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    float adjustedTime = args.time - t1;
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  float distance = length(args.st) - radius;
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isWhiteForeground ? vec3(1.0) : vec3(0.0), alpha);
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  const int barCount = 4;

  float totalSpan = args.mainRadius * 1.9;
  float slotWidth = totalSpan / float(barCount);
  float gapRatio = clamp(0.35, 0.0, 0.9);
  float baseBarHalfWidth = slotWidth * (1.0 - gapRatio) * 0.5;

  for (int i = 0; i < barCount; i++) {
    float f = (float(i) + 0.5) / float(barCount);

    float w = baseBarHalfWidth;
    float h = w;

    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );

    vec2 pos = vec2(f - 0.5, 0.0) * totalSpan;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0);
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));
  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

/* ------------------------------ I/O & UBO ------------------------------ */

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float speakTimestamp;
  vec4 avgMag;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isWhiteForeground;
} ubo; 

/* -------------------------------- main --------------------------------- */

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;
  args.amount = 1.0;
  args.duration = ubo.time - ubo.speakTimestamp;

  
  SDFArgs idleArgs = args;
  idleArgs.amount = 1.0;
  sdf = applyIdleState(sdf, idleArgs, ubo.isWhiteForeground);

  float silenceDuration = ubo.time - ubo.silenceTimestamp;
  sdf = applySpeakState(
    sdf,
    args,
    ubo.avgMag,
    ubo.silenceAmount,
    silenceDuration
  );

  float clampingTolerance = 0.0075 / max(ubo.screenScaleFactor, 0.0001);
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`})),U,Ye=e((()=>{U=`#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`}));function Xe({className:e,staticConfig:t,onDynamicConfigSetterReady:n,onRenderComplete:r}){"use no forget";let i=(0,W.useRef)({viewport:Qe,time:(0,W.useRef)(performance.now()/1e3).current}).current,a=(0,W.useRef)(void 0),o=(0,W.useRef)({...i,...t,speakTimestamp:0,avgMag:[0,0,0,0],silenceAmount:0,silenceTimestamp:0}),s=(0,W.useCallback)(e=>{o.current={...i,...t,...e},a.current=e},[i,t]);return(0,W.useEffect)(()=>{a.current&&(o.current={...i,...t,...a.current})},[t,i]),(0,W.useEffect)(()=>{n(s)},[n,s]),(0,W.useEffect)(()=>{let e=setInterval(()=>{i.time=performance.now()/1e3},de);return()=>clearInterval(e)},[i]),(0,Ze.jsx)(pe,{className:D(`flex items-center justify-center`,e),variablesRef:o,onViewportUpdate:e=>{i.viewport=[e.width,e.height]},onGlAvailable:void 0,onCanvasSizeUpdate:void 0,onRenderComplete:r,scale:1,GLUniformsSetter:We,vert:U,frag:qe})}var W,Ze,Qe,$e=e((()=>{Ce(),ke(),j(),W=t(l()),Ke(),Je(),Ye(),Ze=a(),Qe=[300,300]}));function et(e){return e.origin===`local`}function tt(e){return e*at}function nt(){he()||Ne()}var rt,G,it,at,ot,st,ct=e((()=>{rt=p(),ye(),ne(),Ie(),le(),G=t(l()),$e(),it=a(),at=1.4,ot={bands:4,loPass:0,hiPass:400},st=e=>{"use forget";let t=(0,rt.c)(12),{className:n}=e,[r,i]=(0,G.useState)(void 0),{getTracks:a}=C(),o;t[0]===a?o=t[1]:(o=a([ue.Microphone]).find(et),t[0]=a,t[1]=o);let s=ve(o?.track,ot),c;t[2]===s?c=t[3]:(c=s.map(tt),t[2]=s,t[3]=c);let l=c,u=nt,d,f;t[4]!==l||t[5]!==r?(d=()=>{r&&r({speakTimestamp:0,avgMag:l,silenceAmount:0,silenceTimestamp:0})},f=[l,r],t[4]=l,t[5]=r,t[6]=d,t[7]=f):(d=t[6],f=t[7]),(0,G.useEffect)(d,f);let p;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(p={screenScaleFactor:window.devicePixelRatio,isWhiteForeground:!0},t[8]=p):p=t[8];let m=p,h;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{i(()=>e)},t[9]=h):h=t[9];let g=h,_;return t[10]===n?_=t[11]:(_=(0,it.jsx)(Xe,{className:n,staticConfig:m,onDynamicConfigSetterReady:g,onRenderComplete:u}),t[10]=n,t[11]=_),_}}));function lt(){return Ee()}var K,q,J,Y,ut,dt,ft,pt,mt,ht,X,gt=e((()=>{K=p(),Be(),ce(),Oe(),je(),N(),j(),q=t(l()),r(),be(),ct(),Me(),J=a(),Y={buttonLayout:`rounded-full overflow-hidden h-9 px-3`,buttonContents:`flex flex-row items-center justify-center gap-2`,buttonColors:`hover:opacity-80 font-semibold transition-colors transition-width duration-500 ease-in-out`,loadingColor:`bg-token-icon-primary text-token-text-inverted px-0`,loadedColor:`bg-token-bg-accent-static text-token-text-inverted-static`},ut=`relative overflow-visible before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:content-[''] before:shadow-[0_0_18px_6px_rgba(250,226,113,0.6)] before:opacity-90 before:animate-[pulse_2.4s_ease-in-out_infinite]`,dt=`bg-[#fae271] text-[#a96e25] hover:bg-[#f6dc63] active:bg-[#f0d35a]`,ft=()=>void 0,pt=e=>{"use forget";let t=(0,K.c)(7),{className:n,Icon:r}=e,i;t[0]===n?i=t[1]:(i=D(n,`relative`),t[0]=n,t[1]=i);let a;t[2]===r?a=t[3]:(a=(0,J.jsx)(r,{className:`absolute start-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2`}),t[2]=r,t[3]=a);let o;return t[4]!==i||t[5]!==a?(o=(0,J.jsx)(`div`,{className:i,children:a}),t[4]=i,t[5]=a,t[6]=o):o=t[6],o},mt=()=>{let[e,t]=(0,q.useState)(!0),n=P(e=>e.server.connectionState===Fe.Connected),r=P(e=>e.server.remoteState===y.Listening||e.server.remoteState===y.Speaking);return(0,q.useEffect)(()=>{n&&r&&e?t(!1):n||t(!0)},[n,r,e]),e},ht=e=>{"use forget";let t=(0,K.c)(23),{onClick:n}=e,r=mt(),a=o(),s=ee(),c=ae(lt)?.id!=null,[l,u]=(0,q.useState)(!1),d=ft(),f,p;s?(f=M,p=X.endingVoiceSessionLabel):r&&!c?(f=l?He:M,p=X.cancelLoadingAriaLabel):(f=st,p=X.endVoiceAriaLabel);let m;t[0]===f?m=t[1]:(m=(0,J.jsx)(pt,{Icon:f,className:`h-3 w-3`}),t[0]=f,t[1]=m);let h;t[2]!==p||t[3]!==m?(h=[m,p],t[2]=p,t[3]=m,t[4]=h):h=t[4];let[g,_]=h,v;v=s?X.endingVoiceSessionLabel:r&&!c?X.cancelLoadingButtonLabel:X.endVoiceButtonLabel;let y=v,b=r||s,x,S;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(x=()=>u(!0),S=()=>u(!1),t[5]=x,t[6]=S):(x=t[5],S=t[6]);let C;t[7]!==_||t[8]!==a?(C=a.formatMessage(_),t[7]=_,t[8]=a,t[9]=C):C=t[9];let w=b&&Y.loadingColor,T=!b&&(d?dt:Y.loadedColor),E=!b&&d&&ut,O;t[10]!==w||t[11]!==T||t[12]!==E?(O=D(Y.buttonLayout,Y.buttonContents,Y.buttonColors,w,T,E),t[10]=w,t[11]=T,t[12]=E,t[13]=O):O=t[13];let k;t[14]===y?k=t[15]:(k=(0,J.jsx)(i,{...y}),t[14]=y,t[15]=k);let A;return t[16]!==g||t[17]!==s||t[18]!==n||t[19]!==O||t[20]!==k||t[21]!==C?(A=(0,J.jsxs)(`button`,{onMouseOver:x,onMouseOut:S,"aria-label":C,type:`button`,className:O,onClick:n,disabled:s,children:[g,k]}),t[16]=g,t[17]=s,t[18]=n,t[19]=O,t[20]=k,t[21]=C,t[22]=A):A=t[22],A},X=f({endVoiceButtonLabel:{id:`integratedux.endVoiceMode`,defaultMessage:`End`},cancelLoadingButtonLabel:{id:`integratedux.cancelLoading`,defaultMessage:`Cancel`},endVoiceAriaLabel:{id:`integratedux.endVoiceAriaLabel`,defaultMessage:`End Voice`},cancelLoadingAriaLabel:{id:`integratedux.cancelLoadingAria`,defaultMessage:`Cancel loading`},endingVoiceSessionLabel:{id:`integratedux.endingVoiceSession`,defaultMessage:`Ending…`}})})),_t,vt,yt=e((()=>{_t={ON:{colorClass:`bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:void 0},OFF:{colorClass:`bg-red-500/10 hover:bg-red-500/15 active:bg-red-500/20 dark:bg-red-500/10 dark:hover:bg-red-500/15 dark:active:bg-red-500/20`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:`text-danger`}},vt={ON:{colorClass:`bg-gray-900 hover:bg-gray-800 active:bg-gray-700`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:`text-token-main-surface-primary hover:text-token-text-inverted`},OFF:{colorClass:`bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:`hover:text-token-text-inverted`}}})),bt,xt,St,Z,Ct=e((()=>{bt=p(),O(),S(),g(),j(),l(),r(),yt(),xt=a(),St=e=>{"use forget";let t=(0,bt.c)(15),{disabled:n,onClick:r,microphoneLabel:i,microphoneActive:a,microphoneForceMuted:s}=e,c=o(),l=a?ie:w,{colorClass:u,sizeClass:d,iconColorClass:f}=_t[a?`ON`:`OFF`],p;t[0]!==c||t[1]!==a||t[2]!==s?(p=s?c.formatMessage(Z.microphoneMuted):a?c.formatMessage(Z.microphoneOff):c.formatMessage(Z.microphoneOn),t[0]=c,t[1]=a,t[2]=s,t[3]=p):p=t[3];let m=p,h;t[4]!==u||t[5]!==d?(h=D(u,d),t[4]=u,t[5]=d,t[6]=h):h=t[6];let g;return t[7]!==l||t[8]!==n||t[9]!==f||t[10]!==i||t[11]!==r||t[12]!==m||t[13]!==h?(g=(0,xt.jsx)(x,{"aria-label":m,onClick:r,icon:l,iconSize:`icon-md`,disabled:n,className:h,iconColor:f,tooltipPrimaryLabel:m,tooltipSecondaryLabel:i}),t[7]=l,t[8]=n,t[9]=f,t[10]=i,t[11]=r,t[12]=m,t[13]=h,t[14]=g):g=t[14],g},Z=f({microphoneMuted:{id:`integrated-ux.mute-button.microphone-muted`,defaultMessage:`Microphone muted in system settings / hardware switch`},microphoneOff:{id:`integrated-ux.mute-button.microphone-off`,defaultMessage:`Turn off microphone`},microphoneOn:{id:`integrated-ux.mute-button.microphone-on`,defaultMessage:`Turn on microphone`}})})),wt,Tt,Et,Dt=e((()=>{wt=p(),Le(),N(),Me(),Ct(),Tt=a(),Et=()=>{"use forget";let e=(0,wt.c)(6),{isMuting:t,toggleMute:n}=we(),{disconnectPending:r}=v(),{forceMuted:i,active:a,label:o,granted:s}=A(),c=t||r||i||!s,l=s&&a,u;return e[0]!==i||e[1]!==o||e[2]!==c||e[3]!==l||e[4]!==n?(u=(0,Tt.jsx)(St,{disabled:c,onClick:n,microphoneActive:l,microphoneForceMuted:i,microphoneLabel:o}),e[0]=i,e[1]=o,e[2]=c,e[3]=l,e[4]=n,e[5]=u):u=e[5],u}})),Ot,kt,At,Q,jt=e((()=>{Ot=p(),Oe(),k(),Ue(),g(),j(),r(),yt(),kt=a(),At=e=>{"use forget";let t=(0,Ot.c)(14),{waiting:n,started:r,onClick:i}=e,a=o(),s;t[0]!==a||t[1]!==r||t[2]!==n?(s=n?a.formatMessage(Q.screensharePending):r?a.formatMessage(Q.screenshareOn):a.formatMessage(Q.screenshareOff),t[0]=a,t[1]=r,t[2]=n,t[3]=s):s=t[3];let c=s,{colorClass:l,sizeClass:u,iconColorClass:d}=vt[r?`ON`:`OFF`],f=n?M:r?te:Ve,p;t[4]!==l||t[5]!==u?(p=D(l,u),t[4]=l,t[5]=u,t[6]=p):p=t[6];let m;return t[7]!==f||t[8]!==d||t[9]!==i||t[10]!==c||t[11]!==p||t[12]!==n?(m=(0,kt.jsx)(x,{"aria-label":c,onClick:i,disabled:n,icon:f,iconSize:`icon-md`,className:p,iconColor:d}),t[7]=f,t[8]=d,t[9]=i,t[10]=c,t[11]=p,t[12]=n,t[13]=m):m=t[13],m},Q=f({screenshareOff:{id:`integrated-ux.screenshare-button.screenshare-off`,defaultMessage:`Activate screenshare`},screenshareOn:{id:`integrated-ux.screenshare-button.screenshare-on`,defaultMessage:`Turn off screenshare`},screensharePending:{id:`integrated-ux.screenshare-button.pending`,defaultMessage:`Pending screenshare activation`}})})),Mt,Nt,Pt,Ft=e((()=>{Mt=p(),N(),l(),jt(),Nt=a(),Pt=()=>{"use forget";let e=(0,Mt.c)(7),{screenshareTrackState:t,toggleScreenShare:n}=_e(),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=[F.Starting,F.Stopping],e[0]=r):r=e[0];let i=r.includes(t),a=t===F.Started,o;e[1]===n?o=e[2]:(o=()=>n(`ControlButton`),e[1]=n,e[2]=o);let s;return e[3]!==a||e[4]!==o||e[5]!==i?(s=(0,Nt.jsx)(At,{waiting:i,started:a,onClick:o}),e[3]=a,e[4]=o,e[5]=i,e[6]=s):s=e[6],s}}));function It(e){return e.files.length>0}function Lt(e){return e.server.connectionState}var Rt,$,zt,Bt=e((async()=>{Rt=p(),T(),Se(),_(),Pe(),await Re(),me(),ce(),g(),N(),be(),ge(),Te(),gt(),Dt(),Ft(),$=a(),zt=e=>{"use forget";let t=(0,Rt.c)(18),{onComposerSubmit:n}=e,r=fe(),i=De(),a;t[0]===i.conversation?a=t[1]:(a=i.conversation??re(b),t[0]=i.conversation,t[1]=a);let o=a,s;t[2]===i?s=t[3]:(s=()=>oe(i),t[2]=i,t[3]=s);let c=!ae(s),l=se(Ae.hasUploadInProgress),u=se(It),d=c||l||u,f=P(Lt),p;t[4]!==f||t[5]!==r?(p=async()=>{E({type:`STOP`,reason:await h({connectionState:f,isLimitExceeded:r})})},t[4]=f,t[5]=r,t[6]=p):p=t[6];let m=p,g;t[7]===d?g=t[8]:(g=!d&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(xe,{capability:`screenshare`,children:(0,$.jsx)(Pt,{})}),(0,$.jsx)(Et,{})]}),t[7]=d,t[8]=g);let _;t[9]!==i||t[10]!==d||t[11]!==o||t[12]!==m||t[13]!==n?(_=d?(0,$.jsx)(ze,{onSubmit:n,composerController:i,conversation:o,isStreaming:!1,isDisabled:!1,showSpinner:!1}):(0,$.jsx)(ht,{onClick:m}),t[9]=i,t[10]=d,t[11]=o,t[12]=m,t[13]=n,t[14]=_):_=t[14];let v;return t[15]!==g||t[16]!==_?(v=(0,$.jsxs)(`div`,{className:`flex flex-row gap-2`,children:[g,_]}),t[15]=g,t[16]=_,t[17]=v):v=t[17],v}}));export{Bt as n,zt as t};
//# sourceMappingURL=e838a246-ixouuqigr5ppbgua.js.map