import{n as e,s as t}from"./f025431a-gjb4o5hex8ccu4v5.js";import{ct as n,et as r,ft as i,on as a,tt as o}from"./2340486e-epv5pa20wdn92ya5.js";import{Bq as s,Dm as c,Lq as ee,S9 as te,Sm as l,W7 as u,dS as d,fS as f}from"./4813494d-7wk99m1ly4swd636.js";import{DY as p,EY as m}from"./1a7ebd5f-epb8sg6kzenggoha.js";import{i as h,n as g,r as _,t as ne}from"./8d846022-hmskdqmgg57cepj5.js";import{i as v,o as re}from"./91969468-d25p9uix5rohc5zr.js";import{n as ie,t as y}from"./4d271a7b-m2y3z1m0qwfsue83.js";import{n as ae,t as b}from"./f8d34c7f-f1ndmf972n6upsu5.js";import{n as x,r as S,t as C}from"./c01cad0d-o50r9v16lsdrfalw.js";function w({source:e,theme:t}){return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: transparent;
      }

      #diagram {
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        box-sizing: border-box;
      }

      #diagram > svg {
        max-width: 100%;
        max-height: 100%;
      }

      pre {
        margin: 0;
        padding: 16px;
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
      }
    </style>
    <script src="${T}"><\/script>
  </head>
  <body>
    <div id="diagram"></div>
    <script>
      (() => {
        const container = document.getElementById("diagram");
        if (!container) return;

        const showError = (message) => {
          container.innerHTML = "<pre>" + message + "</pre>";
        };

        if (
          typeof window.mermaid?.initialize !== "function" ||
          typeof window.mermaid?.parse !== "function" ||
          typeof window.mermaid?.render !== "function"
        ) {
          showError("Mermaid runtime failed to load.");
          return;
        }

        let source;
        try {
          source = decodeURIComponent(${JSON.stringify(encodeURIComponent(e))});
        } catch (error) {
          showError("Invalid Mermaid source.");
          console.error(error);
          return;
        }

        window.mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          suppressErrorRendering: true,
          theme: ${JSON.stringify(t)},
          darkMode: ${JSON.stringify(t===`dark`)},
          flowchart: { useMaxWidth: false },
          sequence: { useMaxWidth: false },
          gantt: { useMaxWidth: false },
          journey: { useMaxWidth: false },
          class: { useMaxWidth: false },
          state: { useMaxWidth: false },
          er: { useMaxWidth: false },
          pie: { useMaxWidth: false },
          quadrantChart: { useMaxWidth: false },
          xyChart: { useMaxWidth: false },
          requirement: { useMaxWidth: false },
          mindmap: { useMaxWidth: false },
          kanban: { useMaxWidth: false },
          timeline: { useMaxWidth: false },
          gitGraph: { useMaxWidth: false },
          c4: { useMaxWidth: false },
          sankey: { useMaxWidth: false },
          block: { useMaxWidth: false },
          packet: { useMaxWidth: false },
          architecture: { useMaxWidth: false },
          radar: { useMaxWidth: false },
        });

        const renderId = "mermaid-diagram-" + Math.random().toString(36).slice(2);

        Promise.resolve(window.mermaid.parse(source, { suppressErrors: true }))
          .then((parseResult) => {
            if (parseResult === false) {
              throw new Error("Invalid Mermaid source");
            }
            return window.mermaid.render(renderId, source);
          })
          .then((renderResult) => {
            const svgMarkup =
              typeof renderResult === "string"
                ? renderResult
                : renderResult?.svg;
            if (!svgMarkup) {
              throw new Error("Invalid Mermaid SVG output");
            }
            container.innerHTML = svgMarkup;
          })
          .catch((error) => {
            showError("Unable to render Mermaid diagram.");
            console.error(error);
          });
      })();
    <\/script>
  </body>
</html>`}var T,E=e((()=>{T=`https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js`}));function D({spec:e,mode:t}){return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: white;
      }

      #vis {
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        box-sizing: border-box;
      }

      #vis > .vega-embed {
        max-width: 100%;
        max-height: 100%;
      }

      #vis svg,
      #vis canvas {
        max-width: 100%;
        max-height: 100%;
      }

      pre {
        margin: 0;
        padding: 16px;
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
      }
    </style>
    <script src="${O}"><\/script>
    <script src="${k}"><\/script>
    <script src="${A}"><\/script>
  </head>
  <body>
    <div id="vis"></div>
    <script>
      (() => {
        const container = document.getElementById("vis");
        if (!container) return;

        const showError = (message) => {
          container.innerHTML = "<pre>" + message + "</pre>";
        };

        if (typeof window.vegaEmbed !== "function") {
          showError("Vega runtime failed to load.");
          return;
        }

        let spec;
        try {
          spec = JSON.parse(decodeURIComponent(${JSON.stringify(encodeURIComponent(e))}));
        } catch (error) {
          showError("Invalid Vega spec JSON.");
          console.error(error);
          return;
        }

        const mode = ${JSON.stringify(t)};
        const schemaByMode = {
          vega: "https://vega.github.io/schema/vega/v5.json",
          "vega-lite": "https://vega.github.io/schema/vega-lite/v5.json",
        };

        if (
          spec &&
          typeof spec === "object" &&
          !Object.prototype.hasOwnProperty.call(spec, "$schema")
        ) {
          spec.$schema = schemaByMode[mode];
        }

        window
          .vegaEmbed("#vis", spec, {
            mode,
            actions: false,
            renderer: "svg",
          })
          .catch((error) => {
            showError("Unable to render Vega chart.");
            console.error(error);
          });
      })();
    <\/script>
  </body>
</html>`}var O,k,A,j=e((()=>{O=`https://cdn.jsdelivr.net/npm/vega@5/build/vega.min.js`,k=`https://cdn.jsdelivr.net/npm/vega-lite@5/build/vega-lite.min.js`,A=`https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.min.js`}));function M(e){let t=!1,n=e.replace(P,e=>(F.test(e)&&(t=!0),``));if(t)throw Error(`Invalid Mermaid source`);let r=n.trim();if(!r)throw Error(`Invalid Mermaid source`);return r}function N(e){let t=e.trim().toLowerCase();if(!t)return t;let n=m[t];return n?.previewLanguage??n?.language??t}function oe({code:e,language:t,theme:n=`light`}){let r=t.trim().toLowerCase(),i=N(t);if(r===`svg`||(i===`html`||i===`xml`||i===``)&&x(e))return{code:C({svgMarkup:e}),language:`html`};if(i===`vega`||i===`vega-lite`)return{code:D({spec:e,mode:i}),language:`html`};if(i===`mermaid`)return{code:w({source:M(e),theme:n===`dark`?`dark`:`neutral`}),language:`html`};if(h(i))return{code:e,language:i};throw Error(`Unsupported sandbox execution language: ${t}`)}var P,F,se=e((()=>{E(),S(),j(),p(),_(),P=/%%\{[\s\S]*?\}%%/g,F=/(?:["']securityLevel["']|securityLevel)\s*:/i}));function I(e){"use forget";let t=(0,ce.c)(55),{id:n,code:r,language:a,isStreaming:o,hasNetworkAccess:s,isCodeEdited:l,analyticsContext:u,showAnimation:d,onReadyChange:p,captureConsoleMessages:m,onConsoleMessagesChange:h,ref:_}=e,v=o===void 0?!1:o,y=l===void 0?!1:l,b=d===void 0?!0:d,x=m===void 0?!1:m,S=(0,L.useRef)(null),C=(0,L.useRef)(0),w;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(w=[],t[0]=w):w=t[0];let T=(0,L.useRef)(w),E=c(),D=te(ee),O=E?`dark`:`light`,k=a===`recharts`,A=k&&D!==`default`?D:null,j=`${a}\u0000${k?`${O}\u0000${A??``}`:``}\u0000${r}`,M=a===`recharts`&&v,N;t[1]!==r||t[2]!==a||t[3]!==O?(N=oe({code:r,language:a,theme:O}),t[1]=r,t[2]=a,t[3]=O,t[4]=N):N=t[4];let{code:P,language:F}=N,[se,I]=(0,L.useState)(null),R=se===j,z,B;t[5]!==R||t[6]!==p?(z=()=>{p?.(R)},B=[R,p],t[5]=R,t[6]=p,t[7]=z,t[8]=B):(z=t[7],B=t[8]),(0,L.useEffect)(z,B);let de=re(),fe=s??de,V,H;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(H=()=>({focus:()=>{S.current?.focus()},captureScreenshotDataUrl:async()=>(await S.current?.screenshot())?.imageBase64??null,clearCapturedConsoleMessages:()=>{T.current=[]}}),V=[],t[9]=V,t[10]=H):(V=t[9],H=t[10]),(0,L.useImperativeHandle)(_,H,V);let U;t[11]!==A||t[12]!==u||t[13]!==x||t[14]!==P||t[15]!==F||t[16]!==y||t[17]!==k||t[18]!==a||t[19]!==h||t[20]!==p||t[21]!==j||t[22]!==O?(U=()=>{C.current+=1;let e=C.current,t=!1,n=!1,r=()=>C.current===e,i=e=>{n||!r()||(n=!0,ae({outcome:e,language:a,isCodeEdited:y,analyticsContext:u}),e===`failure`&&p?.(!1,`failure`))},o=()=>{r()&&!t&&(t=!0,I(j))},s=e=>{!x||h==null||!r()||(T.current=e,h(e))};T.current=[],s([]),(async()=>{let e=k?{theme:O,accentTheme:A}:void 0,c=S.current?.evalAsync({code:P,language:F,...e==null?{}:{additionalGlobals:e}});if(c)for(;;){let e=await c.next();if(e.done){if(!r())break;n||i(t?`success`:`failure`);break}r()&&(s([...T.current,e.value]),e.value.type===g.ENVIRONMENT_STATUS&&e.value.status===ne.RUNNING_CODE&&(o(),(a===`html`||a===`react`||a===`recharts`||a===`threejs`)&&i(`success`)),e.value.type===g.RUN_COMPLETE&&(i(e.value.wasFatalError?`failure`:`success`),e.value.wasFatalError||o()))}})().catch(e=>{r()&&(e instanceof DOMException&&e.name===`AbortError`||i(`failure`))})},t[11]=A,t[12]=u,t[13]=x,t[14]=P,t[15]=F,t[16]=y,t[17]=k,t[18]=a,t[19]=h,t[20]=p,t[21]=j,t[22]=O,t[23]=U):U=t[23];let W=f(U),G;t[24]===W?G=t[25]:(G=()=>{I(null),W()},t[24]=W,t[25]=G);let K=f(G),q;t[26]!==F||t[27]!==M||t[28]!==W?(q=()=>{let e=S.current;return M?(C.current+=1,I(null),e?.stop(),e?.prepareEnvironment(ue,F),()=>{C.current+=1,e?.stop()}):(W(),()=>{C.current+=1,e?.stop()})},t[26]=F,t[27]=M,t[28]=W,t[29]=q):q=t[29];let J;t[30]!==u||t[31]!==x||t[32]!==P||t[33]!==F||t[34]!==y||t[35]!==M||t[36]!==v||t[37]!==a||t[38]!==h||t[39]!==p||t[40]!==j||t[41]!==W?(J=[u,x,P,F,y,M,v,a,h,p,j,W],t[30]=u,t[31]=x,t[32]=P,t[33]=F,t[34]=y,t[35]=M,t[36]=v,t[37]=a,t[38]=h,t[39]=p,t[40]=j,t[41]=W,t[42]=J):J=t[42],(0,L.useEffect)(q,J);let Y=i(),X;t[43]===Y?X=t[44]:(X=Y.formatMessage({id:`c107cH`,defaultMessage:`Preview`}),t[43]=Y,t[44]=X);let Z=!fe,Q;t[45]===Y?Q=t[46]:(Q=Y.formatMessage({id:`GE4AJf`,defaultMessage:`Network requests in canvas are disabled for your workspace. Contact your admin to enable this feature.`}),t[45]=Y,t[46]=Q);let $;return t[47]!==n||t[48]!==M||t[49]!==K||t[50]!==b||t[51]!==X||t[52]!==Z||t[53]!==Q?($=(0,le.jsx)(ie,{id:n,title:X,visuallyHidden:!1,disableNetworkRequests:Z,networkAccessDeniedMessage:Q,enableTransition:!1,enableAnimation:b,iframeTabIndex:0,onRetryCodeRun:K,showInlineLoadingState:M,ref:S}),t[47]=n,t[48]=M,t[49]=K,t[50]=b,t[51]=X,t[52]=Z,t[53]=Q,t[54]=$):$=t[54],$}var ce,L,le,ue,R=e((()=>{ce=o(),v(),s(),b(),se(),y(),u(),l(),d(),_(),L=t(a()),n(),le=r(),ue=`function Visualization() { return null; }`}));export{R as n,I as t};
//# sourceMappingURL=32207105-hv0alko4eoi3pd7z.js.map