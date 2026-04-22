import{n as e,s as t}from"./f025431a-gjb4o5hex8ccu4v5.js";import{ct as n,dt as r,et as i,ft as a,on as o,ot as s,st as c}from"./2340486e-epv5pa20wdn92ya5.js";import{AP as l,BB as u,FG as ee,FP as te,HC as ne,IG as d,IP as f,K5 as p,Kq as re,L9 as ie,NJ as m,O5 as h,R9 as ae,VB as g,VC as _,Wq as v,_Y as oe,gY as y,kJ as se,kP as b,llt as x,n4 as S,r4 as C,vlt as w}from"./4813494d-7wk99m1ly4swd636.js";import{J6 as ce,RH as le,Xnt as T,Znt as ue,ah as E,fc as D,pc as O,q6 as k,rh as A,th as j,zH as M}from"./1a7ebd5f-epb8sg6kzenggoha.js";import{r as de,t as N}from"./d4c3e8a1-dd8qf11bq5qh6sxq.js";import{n as P,o as F,r as fe,t as I}from"./b7bb170e-e3om2zfee868lp5c.js";import{i as pe,n as me,r as he}from"./ad0785dd-o2y65hoygqlnu0yi.js";import{n as ge,t as _e}from"./a4a3fb1e-glpb5ll7jr22m834.js";function ve({content:e,button:t,onClick:n}){return(0,L.jsxs)(`div`,{className:`border-token-border-medium flex rounded-lg border text-sm hover:cursor-pointer`,onClick:n,children:[(0,L.jsx)(`div`,{className:`h-9 grow px-3 py-2`,children:e}),(0,L.jsx)(`div`,{className:`bg-token-border-medium w-px`}),t]})}var L,ye=e((()=>{L=i()}));function be({onSelectExample:e}){let t=a(),n=(0,R.useRef)(null);return(0,z.jsxs)(`select`,{onChange:t=>{t.target.value!==`label`&&(e(W[parseInt(t.target.value)].spec),n.current.value=`label`)},className:`border-token-border-medium h-8 rounded-lg border bg-transparent px-2 py-0 text-sm`,ref:n,children:[(0,z.jsx)(`option`,{value:`label`,className:`bg-token-main-surface-primary text-token-text-primary`,children:t.formatMessage(U.examples)}),W.map((e,n)=>(0,z.jsx)(`option`,{value:n,className:`bg-token-main-surface-primary text-token-text-primary`,children:t.formatMessage(e.displayName)},n))]})}var R,z,B,V,H,U,W,xe=e((()=>{R=t(o()),n(),z=i(),B={openapi:`3.1.0`,info:{title:`Get weather data`,description:`Retrieves current weather data for a location.`,version:`v1.0.0`},servers:[{url:`https://weather.example.com`}],paths:{"/location":{get:{description:`Get temperature for a specific location`,operationId:`GetCurrentWeather`,parameters:[{name:`location`,in:`query`,description:`The city and state to retrieve the weather for`,required:!0,schema:{type:`string`}}],deprecated:!1}}},components:{schemas:{}}},V=`openapi: 3.1.0
info:
  title: Swagger Petstore
  description: This example uses the Swagger Petstore API.
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.7
servers:
  - url: https://petstore.swagger.io/v2
paths:
  /store/inventory:
    get:
      tags:
        - store
      summary: Returns pet inventories by status
      operationId: getInventory
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: object
                additionalProperties:
                  type: integer
                  format: int32
                properties:
                  available:
                    type: integer
                    format: int32
                  pending:
                    type: integer
                    format: int32
                  sold:
                    type: integer
                    format: int32
  /pet/findByStatus:
    get:
      tags:
        - pet
      summary: Finds Pets by status
      operationId: findPetsByStatusPending
      parameters:
        - name: status
          in: query
          required: true
          schema:
            type: string
            enum:
              - pending
            default: pending
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Pet"
  /pet/{petId}:
    get:
      tags:
        - pet
      summary: Find pet by ID
      operationId: getPetById
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: integer
            format: int64
            default: 1
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
components:
  schemas:
    Pet:
      type: object
      required:
        - name
        - photoUrls
      properties:
        id:
          type: integer
          format: int64
        category:
          $ref: "#/components/schemas/Category"
        name:
          type: string
          example: doggie
        photoUrls:
          type: array
          items:
            type: string
        tags:
          type: array
          items:
            $ref: "#/components/schemas/Tag"
        status:
          type: string
          enum:
            - pending
            - available
            - sold
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
    Tag:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`,H={openapi:`3.1.0`,info:{title:`Untitled`,description:`Your OpenAPI specification`,version:`v1.0.0`},servers:[{url:``}],paths:{},components:{schemas:{}}},U=c({examples:{id:`gizmo.actions.examples`,defaultMessage:`Examples`},weatherExampleTitle:{id:`gizmo.actions.weatherExampleTitle`,defaultMessage:`Weather (JSON)`},petStoreExampleTitle:{id:`gizmo.actions.petStoreExampleTitle`,defaultMessage:`Pet Store (YAML)`},blankExampleTitle:{id:`gizmo.actions.blankExampleTitle`,defaultMessage:`Blank Template`}}),W=[{displayName:U.weatherExampleTitle,spec:JSON.stringify(B,null,2)},{displayName:U.petStoreExampleTitle,spec:V},{displayName:U.blankExampleTitle,spec:JSON.stringify(H,null,2)}]}));function Se({onImport:e,onClose:t}){let[n,i]=(0,G.useState)(``),[a,o]=(0,G.useState)(!1);async function s(){let r;try{r=new URL(n)}catch{return}if(r?.hostname){o(!0);try{e((await u.fetchOpenAPISpec(n)).content),t()}finally{o(!1)}}}return(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(`input`,{name:`url`,value:n,onChange:e=>{i(e.target.value)},placeholder:`https://...`,className:`border-token-border-default h-8 rounded-sm border px-2 text-sm`,autoFocus:!0,dir:`ltr`}),(0,K.jsx)(j,{color:`primary`,size:`small`,loading:a,onClick:s,children:(0,K.jsx)(r,{id:`7sLuEB`,defaultMessage:`Import`})}),(0,K.jsx)(j,{color:`secondary`,size:`small`,onClick:t,children:(0,K.jsx)(r,{id:`xHBR5t`,defaultMessage:`Cancel`})})]})}var G,K,Ce=e((()=>{g(),E(),G=t(o()),n(),K=i()}));function q(e){return e?.type===h.OAuth}function J(e){return e?.type===h.ServiceHTTP}function Y({children:e}){return(0,X.jsx)(`label`,{className:`mb-1 block text-sm font-semibold`,children:e})}function we({jitPluginTool:e,onUpdateTool:t,onClose:n}){let i=a(),o=e?.metadata?.auth,[s,c]=(0,Te.useState)({apiKeyValue:``,oauthClientIdValue:``,oauthClientSecretValue:``,oauthAuthUrlValue:q(o)?o.client_url:``,oauthTokenUrlValue:q(o)?o.authorization_url:``,oauthScopeValue:q(o)?o.scope:``,authTypeValue:o?.type===h.OAuth||o?.type===h.ServiceHTTP?o.type===h.OAuth?h.OAuth:h.ServiceHTTP:h.None,httpAuthTypeValue:J(o)?o.authorization_type:`basic`,customHeaderValue:J(o)?o.custom_auth_header??``:``,tokenExchangeMethodValue:q(o)?o.token_exchange_method??`default_post`:`default_post`});function l(e){c(t=>({...t,...e}))}function u(){t(s.authTypeValue===h.None?{type:h.None}:s.authTypeValue===h.OAuth?{type:h.OAuth,client_url:s.oauthAuthUrlValue,authorization_url:s.oauthTokenUrlValue,authorization_content_type:`application/x-www-form-urlencoded`,scope:s.oauthScopeValue,token_exchange_method:s.tokenExchangeMethodValue,oauth_client_id:s.oauthClientIdValue,oauth_client_secret:s.oauthClientSecretValue}:{type:h.ServiceHTTP,authorization_type:s.httpAuthTypeValue,custom_auth_header:s.customHeaderValue,api_key:s.apiKeyValue}),n()}return(0,X.jsxs)(b,{testId:`modal-tool-auth-editor`,type:`success`,isOpen:!0,title:i.formatMessage({id:`kZ040s`,defaultMessage:`Authentication`}),primaryButton:(0,X.jsx)(S,{color:`primary`,onClick:()=>{u()},children:(0,X.jsx)(r,{id:`dchvRM`,defaultMessage:`Save`})}),secondaryButton:(0,X.jsx)(S,{color:`secondary`,onClick:n,children:(0,X.jsx)(r,{id:`xHBR5t`,defaultMessage:`Cancel`})}),onClose:n,children:[(0,X.jsxs)(`div`,{className:`mb-4`,children:[(0,X.jsx)(r,{id:`la7zPT`,defaultMessage:`Authentication Type`}),(0,X.jsxs)(D.Root,{onValueChange:e=>{l({authTypeValue:e})},value:s.authTypeValue,className:`mt-2 flex gap-4`,children:[(0,X.jsx)(A,{label:i.formatMessage({id:`Ml5rNZ`,defaultMessage:`None`}),value:h.None}),(0,X.jsx)(A,{label:i.formatMessage({id:`rN0uCi`,defaultMessage:`API Key`}),value:h.ServiceHTTP}),(0,X.jsx)(A,{label:i.formatMessage({id:`qG7Z4O`,defaultMessage:`OAuth`}),value:h.OAuth})]})]}),s.authTypeValue===`service_http`?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`hSd+5k`,defaultMessage:`API Key`})}),(0,X.jsx)(I,{placeholder:i.formatMessage({id:`9W9lGr`,defaultMessage:`[HIDDEN]`}),type:`password`,value:s.apiKeyValue,onChange:e=>{l({apiKeyValue:e.target.value})},className:`mb-2`,dir:`ltr`}),(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`PSnRGf`,defaultMessage:`Auth Type`})}),(0,X.jsxs)(D.Root,{className:`mb-2 flex gap-6 overflow-hidden rounded-lg`,value:s.httpAuthTypeValue,required:!0,onValueChange:e=>{l({httpAuthTypeValue:e})},children:[(0,X.jsx)(A,{value:`basic`,label:`Basic`}),(0,X.jsx)(A,{value:`bearer`,label:`Bearer`}),(0,X.jsx)(A,{value:`custom`,label:i.formatMessage({id:`6kqx38`,defaultMessage:`Custom`})})]}),s.httpAuthTypeValue===`custom`&&(0,X.jsxs)(`div`,{className:`mt-2`,children:[(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`XqdT/P`,defaultMessage:`Custom Header Name`})}),(0,X.jsx)(I,{value:s.customHeaderValue,onChange:e=>{l({customHeaderValue:e.target.value})},className:`mb-2`,placeholder:`X-Api-Key`,dir:`ltr`})]})]}):s.authTypeValue===`oauth`?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`lS4nvz`,defaultMessage:`Client ID`})}),(0,X.jsx)(I,{placeholder:`<HIDDEN>`,type:`password`,value:s.oauthClientIdValue,onChange:e=>{l({oauthClientIdValue:e.target.value})},className:`mb-2`,dir:`ltr`}),(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`OvwGR3`,defaultMessage:`Client Secret`})}),(0,X.jsx)(I,{placeholder:`<HIDDEN>`,type:`password`,value:s.oauthClientSecretValue,onChange:e=>{l({oauthClientSecretValue:e.target.value})},className:`mb-2`,dir:`ltr`}),(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`I27qZU`,defaultMessage:`Authorization URL`})}),(0,X.jsx)(I,{value:s.oauthAuthUrlValue,onChange:e=>{l({oauthAuthUrlValue:e.target.value})},className:`mb-2`,dir:`ltr`}),(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`QywIpF`,defaultMessage:`Token URL`})}),(0,X.jsx)(I,{value:s.oauthTokenUrlValue,onChange:e=>{l({oauthTokenUrlValue:e.target.value})},className:`mb-2`,dir:`ltr`}),(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`1VAJqN`,defaultMessage:`Scope`})}),(0,X.jsx)(I,{value:s.oauthScopeValue,onChange:e=>{l({oauthScopeValue:e.target.value})},className:`mb-2`,dir:`ltr`}),(0,X.jsx)(Y,{children:(0,X.jsx)(r,{id:`9MvwPc`,defaultMessage:`Token Exchange Method`})}),(0,X.jsxs)(D.Root,{value:s.tokenExchangeMethodValue,required:!0,onValueChange:e=>{l({tokenExchangeMethodValue:e})},children:[(0,X.jsx)(A,{value:`default_post`,label:i.formatMessage({id:`vXIzoE`,defaultMessage:`Default (POST request)`})}),(0,X.jsx)(A,{value:`basic_auth_header`,label:i.formatMessage({id:`38o+yX`,defaultMessage:`Basic authorization header`})})]}),(0,X.jsx)(r,{id:`x19klG`,defaultMessage:`Warning: OAuth may fail if you don't allow our redirect URLs. Visit <link>this documentation</link> to learn more.`,values:{link:e=>(0,X.jsx)(`a`,{href:`https://platform.openai.com/docs/actions/authentication`,target:`_blank`,rel:`noopener noreferrer`,className:`text-blue-500 underline`,children:e})}})]}):null]})}var Te,X,Ee=e((()=>{p(),C(),l(),F(),E(),O(),Te=t(o()),n(),X=i()}));function De({rootDomain:e,operations:t}){return t==null||t.length===0?(0,Z.jsx)(`div`,{className:`text-token-text-tertiary text-sm`,children:(0,Z.jsx)(r,{id:`L69u6d`,defaultMessage:`Operations in your schema will show here`})}):(0,Z.jsx)(`table`,{className:`w-full text-sm`,children:(0,Z.jsxs)(`tbody`,{children:[(0,Z.jsxs)(`tr`,{className:`border-token-border-default text-token-text-tertiary border-b text-start text-xs`,children:[(0,Z.jsx)(`th`,{className:`py-1 font-normal`,children:(0,Z.jsx)(r,{id:`JizDcr`,defaultMessage:`Name`})}),(0,Z.jsx)(`th`,{className:`py-1 font-normal`,children:(0,Z.jsx)(r,{id:`zN16fd`,defaultMessage:`Method`})}),(0,Z.jsx)(`th`,{className:`py-1 font-normal`,children:(0,Z.jsx)(r,{id:`y2WJvt`,defaultMessage:`Path`})}),(0,Z.jsx)(`th`,{className:`py-1 font-normal`})]}),t.map(t=>(0,Z.jsxs)(`tr`,{className:`border-token-border-default border-b`,children:[(0,Z.jsx)(`td`,{className:`py-2`,children:t.operationName}),(0,Z.jsx)(`td`,{className:`py-2 uppercase`,children:t.method}),(0,Z.jsx)(`td`,{className:`py-2`,dir:`ltr`,style:{textAlign:`match-parent`},children:t.path}),(0,Z.jsx)(`td`,{className:`py-2`,children:(0,Z.jsx)(j,{color:`secondary`,onClick:()=>{e&&me.publish({kind:he.TestGizmoAction,rootDomain:e,operationName:t.operationName})},children:(0,Z.jsx)(r,{id:`Ag71GQ`,defaultMessage:`Test`})})})]},t.operationName))]})})}function Oe({validationResponse:e}){return(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(P,{label:a().formatMessage({id:`hKfo5R`,defaultMessage:`Available actions`})}),(0,Z.jsx)(De,{rootDomain:e.success?e.spec.root_domain:void 0,operations:e.success?e.spec.operations:void 0})]})}var Z,ke=e((async()=>{F(),await pe(),E(),n(),Z=i()}));function Ae(e){switch(e){case h.None:return s({id:`G9qfIC`,defaultMessage:`None`});case h.OAuth:return s({id:`t8MwwT`,defaultMessage:`OAuth`});case h.ServiceHTTP:return s({id:`rN0uCi`,defaultMessage:`API Key`})}}function je({currentlyEditingActionDomain:e,gizmoEditorData:t,updateGizmo:n,onClose:i}){let o=a(),[s,c]=(0,Q.useState)(e),l=(0,Q.useRef)(s),{data:d}=re(se()?.getWorkspaceId());(0,Q.useEffect)(()=>{l.current=s},[s]);let f=t?.tools?.find(e=>e.type===x.JIT_PLUGIN&&e.metadata.domain===s),[p]=(0,Q.useState)(()=>f==null),m=f?.metadata?.raw_spec??``,[ae,g]=(0,Q.useState)(!1),[_,v]=(0,Q.useState)(!1),[y,b]=(0,Q.useState)(!1),C=(0,Q.useCallback)(e=>{n(t=>({...t,tools:f?t.tools.map(t=>t.type===x.JIT_PLUGIN&&t.metadata.domain===s?{...t,metadata:{...t.metadata,...e,json_schema:void 0}}:t):[...t.tools,{type:x.JIT_PLUGIN,metadata:{raw_spec:``,domain:s??`Unknown domain`,action_id:``,...e,json_schema:void 0}}]}))},[s,f,n]),[w,T]=(0,Q.useState)(),E=t,[D]=(0,Q.useState)(()=>ee(async function(e){let t=await u.validateOpenAPISpec(e);T(t);let r=t.success?t.spec.root_domain:void 0;if(r){if(r!==l.current&&E?.tools?.find(e=>e.type===x.JIT_PLUGIN&&e.metadata.domain===r)){T({success:!1,errors:[o.formatMessage({id:`nwBcmJ`,defaultMessage:`Action sets cannot have duplicate domains - {domain} already exists on another action`},{domain:r})]});return}n(e=>({...e,tools:e.tools.map(e=>e.type===x.JIT_PLUGIN&&e.metadata.domain===l.current?{...e,metadata:{...e.metadata,domain:r}}:e)})),c(r)}if(t.success&&t.known_auth!=null&&t.known_privacy_policy!=null&&f){let e={type:`oauth`,client_url:t.known_auth.client_url,authorization_url:t.known_auth.authorization_url,authorization_content_type:t.known_auth.authorization_content_type,scope:t.known_auth.scope,instructions:t.known_auth.instructions,verification_tokens:t.known_auth.verification_tokens,pkce_required:t.known_auth.pkce_required,token_exchange_method:t.known_auth.token_exchange_method};oe(f.metadata.auth,e)||C({auth:e}),f.metadata.privacy_policy_url!==t.known_privacy_policy&&C({privacy_policy_url:t.known_privacy_policy})}},1e3)),O=w==null?void 0:w.success?w.warnings:w.errors;(0,Q.useEffect)(()=>{m===``?(T(void 0),D.cancel()):D(m)},[D,m]);let k=e=>{try{C({raw_spec:JSON.stringify(JSON.parse(e),null,2)})}catch{try{C({raw_spec:N.stringify(N.parse(e),{lineWidth:120,indent:2})})}catch{}}},A=(0,Q.useCallback)(e=>{switch(e.type){case h.None:C({auth:{type:h.None}});break;case h.OAuth:{let{oauth_client_id:t,oauth_client_secret:n,...r}=e;C({auth:r,oauth_client_id:t,oauth_client_secret:n});break}case h.ServiceHTTP:{let{api_key:t,...n}=e;C({auth:n,api_key:t});break}}},[C]),M=(0,Q.useCallback)(()=>{window.confirm(`Are you sure you want to delete this action?`)&&(n(e=>({...e,tools:e.tools.filter(e=>!(e.type===x.JIT_PLUGIN&&e.metadata.domain===s))})),i())},[s,i,n]);return(0,$.jsxs)(`div`,{className:`h-full overflow-auto px-4 pb-12 text-sm`,children:[(0,$.jsxs)(`div`,{className:`relative flex flex-col items-center px-16 py-6 text-center`,children:[(0,$.jsx)(`div`,{className:`absolute start-0 top-6`,children:(0,$.jsx)(S,{color:`secondary`,onClick:i,icon:te})}),f!=null&&(0,$.jsx)(`div`,{className:`absolute end-0 top-6`,children:(0,$.jsx)(S,{color:`secondary`,onClick:M,className:`text-red-500`,children:(0,$.jsx)(ce,{className:`icon`})})}),(0,$.jsx)(`div`,{className:`text-xl font-semibold`,children:p?(0,$.jsx)(r,{id:`LEn2vt`,defaultMessage:`Add actions`}):(0,$.jsx)(r,{id:`WtVYgh`,defaultMessage:`Edit actions`})}),(0,$.jsx)(`div`,{className:`text-token-text-tertiary text-sm`,children:(0,$.jsx)(r,{id:`f0WG0Q`,defaultMessage:`Let your GPT retrieve information or take actions outside of ChatGPT.`})}),(0,$.jsx)(`div`,{className:`text-token-text-tertiary text-sm`,children:(0,$.jsx)(`a`,{href:`https://help.openai.com/en/articles/8554397-creating-a-gpt`,target:`_blank`,rel:`noreferrer`,className:`font-semibold`,children:(0,$.jsx)(r,{id:`44M7/B`,defaultMessage:`Learn more.`})})})]}),(0,$.jsxs)(fe,{className:`relative`,children:[(0,$.jsx)(P,{label:o.formatMessage({id:`kZ040s`,defaultMessage:`Authentication`})}),(0,$.jsx)(ve,{onClick:()=>{g(!0)},content:o.formatMessage(Ae(f?.metadata?.auth?.type===h.OAuth||f?.metadata?.auth?.type===h.ServiceHTTP?f.metadata.auth.type===h.OAuth?h.OAuth:h.ServiceHTTP:h.None)),button:(0,$.jsx)(`button`,{color:`secondary`,className:`flex items-center gap-2 px-3`,children:(0,$.jsx)(ne,{className:`icon-sm`})})}),ae&&(0,$.jsx)(we,{jitPluginTool:f,onUpdateTool:A,onClose:()=>g(!1)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{className:`mb-1 flex h-8 items-center justify-between`,children:[(0,$.jsx)(`label`,{className:`text-token-text-primary font-semibold`,children:(0,$.jsx)(r,{id:`+xKwQg`,defaultMessage:`Schema`})}),(0,$.jsx)(`div`,{className:`flex items-center`,children:_?(0,$.jsx)(Se,{onImport:e=>k(e),onClose:()=>v(!1)}):(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(j,{color:`secondary`,size:`small`,onClick:()=>v(!0),children:(0,$.jsx)(r,{id:`kTR+Ef`,defaultMessage:`Import from URL`})}),(0,$.jsx)(be,{onSelectExample:e=>{C({raw_spec:e})}})]})})]}),(0,$.jsxs)(`div`,{className:`border-token-border-default mb-8 overflow-hidden rounded-lg border`,children:[(0,$.jsxs)(`div`,{className:`relative`,children:[(0,$.jsx)(`textarea`,{value:m,onChange:e=>{C({raw_spec:e.target.value})},spellCheck:!1,placeholder:o.formatMessage({id:`zBM3o0`,defaultMessage:`Enter your OpenAPI schema here`}),className:`text-token-text-primary block h-96 w-full border-none bg-transparent p-2 font-mono text-xs`,dir:`ltr`}),(0,$.jsx)(`div`,{className:`absolute end-2 bottom-2 flex gap-2`,children:m===``?(0,$.jsxs)(j,{as:`a`,to:Me,openNewTab:!0,size:`small`,children:[(0,$.jsx)(r,{id:`gizmo.actions.actionsGptHelp`,defaultMessage:`Get help from ActionsGPT`}),(0,$.jsx)(ue,{className:`icon`})]}):(0,$.jsx)(j,{onClick:()=>{k(m)},children:(0,$.jsx)(r,{id:`vJWnIM`,defaultMessage:`Format`})})})]}),O!=null&&O?.length>0&&(0,$.jsx)(`div`,{className:`border-token-border-default border-t p-2 text-red-500`,children:O.map((e,t)=>(0,$.jsx)(`div`,{children:e},t))})]})]}),w!=null&&(0,$.jsx)(Oe,{validationResponse:w}),d?.allowed_custom_actions_domains!=null&&(d?.allowed_custom_actions_domains?.length>0?(0,$.jsxs)(`div`,{className:`mt-4`,children:[(0,$.jsxs)(`p`,{className:`mb-1 cursor-pointer font-semibold`,onClick:()=>b(!y),children:[(0,$.jsx)(r,{id:`Gcxir6`,defaultMessage:`Domains allowed by your workspace`}),(0,$.jsx)(_e,{className:`inline`,checked:y})]}),(0,$.jsx)(`ul`,{className:ie(`list-disc ps-4`,!y&&`hidden`),children:d?.allowed_custom_actions_domains.map(e=>(0,$.jsx)(`li`,{children:e},e))})]}):(0,$.jsx)(`p`,{className:`text-sm italic`,children:(0,$.jsx)(r,{id:`wWCl0j`,defaultMessage:`No domains are allowed by your workspace's settings.`})})),(0,$.jsxs)(`div`,{className:`mt-4`,children:[(0,$.jsx)(P,{htmlFor:`privacyPolicyUrl`,label:o.formatMessage({id:`Pbk0Gp`,defaultMessage:`Privacy policy`}),description:`Privacy policy is required for all public GPTs.`}),(0,$.jsx)(le,{ariaLabel:!1,name:`privacyPolicyUrl`,value:f?.metadata?.privacy_policy_url??``,placeholder:`https://app.example.com/privacy`,onChange:e=>{C({privacy_policy_url:e.target.value})}})]})]})}var Q,$,Me,Ne=e((async()=>{w(),p(),ge(),C(),M(),f(),T(),_(),k(),g(),E(),ye(),v(),m(),ae(),d(),y(),Q=t(o()),n(),de(),F(),xe(),Ce(),Ee(),await ke(),$=i(),Me=window.location.origin+`/g/g-TYEliDU6A-actionsgpt`}));await e((async()=>{await Ne()}))();export{je as GizmoActionsEditor};
//# sourceMappingURL=bd3ef8ba-j1p2irhz73bhpcav.js.map