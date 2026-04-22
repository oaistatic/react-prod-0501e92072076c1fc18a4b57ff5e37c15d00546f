import{n as e}from"./f025431a-gjb4o5hex8ccu4v5.js";import{ect as t,tct as n}from"./4813494d-7wk99m1ly4swd636.js";function r(e,t,n){P.set(e,setTimeout(()=>{P.has(e)&&e.dispatchEvent(new N(`toggle`,{cancelable:!1,oldState:t,newState:n}))},0))}function i(e){return B.get(e)||`hidden`}function a(e){return[...e].pop()}function o(e){let t=e.popoverTargetElement;if(!(t instanceof HTMLElement))return;let n=i(t);e.popoverTargetAction===`show`&&n===`showing`||e.popoverTargetAction===`hide`&&n===`hidden`||(n===`showing`?b(t,!0,!0):s(t,!1)&&(V.set(t,e),y(t)))}function s(e,t){return!(e.popover!==`auto`&&e.popover!==`manual`&&e.popover!==`hint`||!e.isConnected||t&&i(e)!==`showing`||!t&&i(e)!==`hidden`||e instanceof I&&e.hasAttribute(`open`)||document.fullscreenElement===e)}function c(e){if(!e)return 0;let t=R.get(document)||new Set,n=z.get(document)||new Set;return n.has(e)?[...n].indexOf(e)+t.size+1:t.has(e)?[...t].indexOf(e)+1:0}function l(e){let t=p(e),n=m(e);return c(t)>c(n)?t:n}function u(e){let t,n=z.get(e)||new Set,r=R.get(e)||new Set,i=n.size>0?n:r.size>0?r:null;return i?(t=a(i),t.isConnected?t:(i.delete(t),u(e))):null}function d(e){for(let t of e||[])if(!t.isConnected)e.delete(t);else return t;return null}function f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.parentNode?f(e.parentNode):e}function p(e){for(;e;){if(e instanceof HTMLElement&&e.popover===`auto`&&B.get(e)===`showing`)return e;if(e=e instanceof Element&&e.assignedSlot||e.parentElement||f(e),e instanceof F&&(e=e.host),e instanceof Document)return}}function m(e){for(;e;){let t=e.popoverTargetElement;if(t instanceof HTMLElement)return t;if(e=e.parentElement||f(e),e instanceof F&&(e=e.host),e instanceof Document)return}}function h(e,t){let n=new Map,r=0;for(let e of t||[])n.set(e,r),r+=1;n.set(e,r),r+=1;let i=null;function a(t){if(!t)return;let r=!1,a=null,o=null;for(;!r;){if(a=p(t)||null,a===null||!n.has(a))return;(e.popover===`hint`||a.popover===`auto`)&&(r=!0),r||(t=a.parentElement)}o=n.get(a),(i===null||n.get(i)<o)&&(i=a)}return a(e.parentElement||f(e)),i}function g(e){return e.hidden||e instanceof F||(e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLOptGroupElement||e instanceof HTMLOptionElement||e instanceof HTMLFieldSetElement)&&e.disabled||e instanceof HTMLInputElement&&e.type===`hidden`||e instanceof HTMLAnchorElement&&e.href===``?!1:typeof e.tabIndex==`number`&&e.tabIndex!==-1}function _(e){if(e.shadowRoot&&e.shadowRoot.delegatesFocus!==!0)return null;let t=e;t.shadowRoot&&(t=t.shadowRoot);let n=t.querySelector(`[autofocus]`);if(n)return n;{let e=t.querySelectorAll(`slot`);for(let t of e){let e=t.assignedElements({flatten:!0});for(let t of e)if(t.hasAttribute(`autofocus`))return t;else if(n=t.querySelector(`[autofocus]`),n)return n}}let r=e.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){if(g(i))return i;i=r.nextNode()}}function v(e){var t;(t=_(e))==null||t.focus()}function y(e){if(!s(e,!1))return;let t=e.ownerDocument;if(!e.dispatchEvent(new N(`beforetoggle`,{cancelable:!0,oldState:`closed`,newState:`open`}))||!s(e,!1))return;let n=!1,i=e.popover,a=null,o=h(e,R.get(t)||new Set),c=h(e,z.get(t)||new Set);if(i===`auto`&&(S(z.get(t)||new Set,n,!0),w(o||t,n,!0),a=`auto`),i===`hint`&&(c?(w(c,n,!0),a=`hint`):(S(z.get(t)||new Set,n,!0),o?(w(o,n,!0),a=`auto`):a=`hint`)),i===`auto`||i===`hint`){if(i!==e.popover||!s(e,!1))return;u(t)||(n=!0),a===`auto`?(R.has(t)||R.set(t,new Set),R.get(t).add(e)):a===`hint`&&(z.has(t)||z.set(t,new Set),z.get(t).add(e))}H.delete(e);let l=t.activeElement;e.classList.add(`:popover-open`),B.set(e,`showing`),L.has(t)||L.set(t,new Set),L.get(t).add(e),E(V.get(e),!0),v(e),n&&l&&e.popover===`auto`&&H.set(e,l),r(e,`closed`,`open`)}function b(e,t=!1,n=!1){var i,o;if(!s(e,!0))return;let c=e.ownerDocument;if([`auto`,`hint`].includes(e.popover)&&(w(e,t,n),!s(e,!0)))return;let l=R.get(c)||new Set,u=l.has(e)&&a(l)===e;if(E(V.get(e),!1),V.delete(e),n&&(e.dispatchEvent(new N(`beforetoggle`,{oldState:`open`,newState:`closed`})),u&&a(l)!==e&&w(e,t,n),!s(e,!0)))return;(i=L.get(c))==null||i.delete(e),l.delete(e),(o=z.get(c))==null||o.delete(e),e.classList.remove(`:popover-open`),B.set(e,`hidden`),n&&r(e,`open`,`closed`);let d=H.get(e);d&&(H.delete(e),t&&d.focus())}function x(e,t=!1,n=!1){let r=u(e);for(;r;)b(r,t,n),r=u(e)}function S(e,t=!1,n=!1){let r=d(e);for(;r;)b(r,t,n),r=d(e)}function C(e,t,n,r){let o=!1,s=!1;for(;o||!s;){s=!0;let c=null,l=!1;for(let n of t)if(n===e)l=!0;else if(l){c=n;break}if(!c)return;for(;i(c)===`showing`&&t.size;)b(a(t),n,r);t.has(e)&&a(t)!==e&&(o=!0),o&&(r=!1)}}function w(e,t,n){let r=e.ownerDocument||e;if(e instanceof Document)return x(r,t,n);if(z.get(r)?.has(e)){C(e,z.get(r),t,n);return}S(z.get(r)||new Set,t,n),R.get(r)?.has(e)&&C(e,R.get(r),t,n)}function T(e){if(!e.isTrusted)return;let t=e.composedPath()[0];if(!t)return;let n=t.ownerDocument;if(!u(n))return;let r=l(t);if(r&&e.type===`pointerdown`)U.set(n,r);else if(e.type===`pointerup`){let e=U.get(n)===r;U.delete(n),e&&w(r||n,!1,!0)}}function E(e,t=!1){if(!e)return;W.has(e)||W.set(e,e.getAttribute(`aria-expanded`));let n=e.popoverTargetElement;if(n instanceof HTMLElement&&n.popover===`auto`)e.setAttribute(`aria-expanded`,String(t));else{let t=W.get(e);t?e.setAttribute(`aria-expanded`,t):e.removeAttribute(`aria-expanded`)}}function D(){return typeof HTMLElement<`u`&&typeof HTMLElement.prototype==`object`&&`popover`in HTMLElement.prototype}function O(e,t,n){let r=e[t];Object.defineProperty(e,t,{value(e){return r.call(this,n(e))}})}function k(){return typeof globalThis.CSSLayerBlockRule==`function`}function A(){let e=k();return`
${e?`@layer popover-polyfill {`:``}
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }

  :where(dialog[popover].\\:popover-open) {
    display: block;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
${e?`}`:``}
`}function j(e){let t=A();if(q===null)try{q=new CSSStyleSheet,q.replaceSync(t)}catch{q=!1}if(q===!1){let n=document.createElement(`style`);n.textContent=t,e instanceof Document?e.head.prepend(n):e.prepend(n)}else e.adoptedStyleSheets=[q,...e.adoptedStyleSheets]}function M(){if(typeof window>`u`)return;window.ToggleEvent=window.ToggleEvent||N;function e(e){return e?.includes(`:popover-open`)&&(e=e.replace(K,`$1.\\:popover-open`)),e}O(Document.prototype,`querySelector`,e),O(Document.prototype,`querySelectorAll`,e),O(Element.prototype,`querySelector`,e),O(Element.prototype,`querySelectorAll`,e),O(Element.prototype,`matches`,e),O(Element.prototype,`closest`,e),O(DocumentFragment.prototype,`querySelectorAll`,e),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute(`popover`))return null;let e=(this.getAttribute(`popover`)||``).toLowerCase();return e===``||e==`auto`?`auto`:e==`hint`?`hint`:`manual`},set(e){e===null?this.removeAttribute(`popover`):this.setAttribute(`popover`,e)}},showPopover:{enumerable:!0,configurable:!0,value(e={}){y(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){b(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(e={}){return typeof e==`boolean`&&(e={force:e}),B.get(this)===`showing`&&e.force===void 0||e.force===!1?b(this,!0,!0):(e.force===void 0||e.force===!0)&&y(this),B.get(this)===`showing`}}});let t=Element.prototype.attachShadow;t&&Object.defineProperties(Element.prototype,{attachShadow:{enumerable:!0,configurable:!0,writable:!0,value(e){let n=t.call(this,e);return j(n),n}}});let n=HTMLElement.prototype.attachInternals;n&&Object.defineProperties(HTMLElement.prototype,{attachInternals:{enumerable:!0,configurable:!0,writable:!0,value(){let e=n.call(this);return e.shadowRoot&&j(e.shadowRoot),e}}});let r=new WeakMap;function i(e){Object.defineProperties(e.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(e){if(e===null)this.removeAttribute(`popovertarget`),r.delete(this);else if(e instanceof Element)this.setAttribute(`popovertarget`,``),r.set(this,e);else throw TypeError(`popoverTargetElement must be an element or null`)},get(){if(this.localName!==`button`&&this.localName!==`input`||this.localName===`input`&&this.type!==`reset`&&this.type!==`image`&&this.type!==`button`||this.disabled||this.form&&this.type===`submit`)return null;let e=r.get(this);if(e&&e.isConnected)return e;if(e&&!e.isConnected)return r.delete(this),null;let t=f(this),n=this.getAttribute(`popovertarget`);return(t instanceof Document||t instanceof G)&&n&&t.getElementById(n)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){let e=(this.getAttribute(`popovertargetaction`)||``).toLowerCase();return e===`show`||e===`hide`?e:`toggle`},set(e){this.setAttribute(`popovertargetaction`,e)}}})}i(HTMLButtonElement),i(HTMLInputElement);let a=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=t[0];if(!(n instanceof Element)||n?.shadowRoot)return;let r=f(n);if(!(r instanceof G||r instanceof Document))return;let i=t.find(e=>e.matches?.call(e,`[popovertargetaction],[popovertarget]`));if(i){o(i),e.preventDefault();return}},s=e=>{let t=e.key,n=e.target;!e.defaultPrevented&&n&&(t===`Escape`||t===`Esc`)&&w(n.ownerDocument,!0,!0)};(e=>{e.addEventListener(`click`,a),e.addEventListener(`keydown`,s),e.addEventListener(`pointerdown`,T),e.addEventListener(`pointerup`,T)})(document),j(document)}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{n(),N=class extends Event{constructor(e,{oldState:n=``,newState:r=``,...i}={}){super(e,i),t(this,`oldState`,void 0),t(this,`newState`,void 0),this.oldState=String(n||``),this.newState=String(r||``)}},P=new WeakMap,F=globalThis.ShadowRoot||function(){},I=globalThis.HTMLDialogElement||function(){},L=new WeakMap,R=new WeakMap,z=new WeakMap,B=new WeakMap,V=new WeakMap,H=new WeakMap,U=new WeakMap,W=new WeakMap,G=globalThis.ShadowRoot||function(){},K=/(^|[^\\]):popover-open\b/g,q=null,D()||M()}))();
//# sourceMappingURL=2c24763d-iuzqpnry2gxi34xe.js.map