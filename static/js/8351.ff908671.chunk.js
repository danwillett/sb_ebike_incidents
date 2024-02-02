/*! For license information please see 8351.ff908671.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[8351],{58351:(e,t,i)=>{i.r(t),i.d(t,{CalciteTextArea:()=>j,defineCustomElement:()=>T});var a=i(51554),r=i(85955),n=i(74310),s=i(92358),o=i(46895),l=i(72021),c=i(47242),h=i(52655),d=i(13160),u=i(14387),g=i(76652);const f="assistive-text",m="character-limit",p="content",b="container",v="footer",x="character--over-limit",y="readonly",z="text-area--invalid",w="footer--slotted",L="border--color",C="hide",E="block-size--full",H="footer--end-only",S="footer-start",k="footer-end",O=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTextAreaInput=(0,a.yM)(this,"calciteTextAreaInput",7),this.calciteTextAreaChange=(0,a.yM)(this,"calciteTextAreaChange",7),this.guid=(0,u.g)(),this.handleInput=e=>{this.value=e.target.value,this.calciteTextAreaInput.emit()},this.handleChange=()=>{this.calciteTextAreaChange.emit()},this.contentSlotChangeHandler=()=>{if(!this.value){this.el.childNodes.forEach((e=>{"#text"===e.nodeName&&(this.value=e.nodeValue.trim())}))}},this.renderCharacterLimit=()=>this.maxLength?(this.localizedCharacterLengthObj=this.getLocalizedCharacterLength(),(0,a.h)("span",{class:m},(0,a.h)("span",{class:{[x]:this.isCharacterLimitExceeded()}},this.localizedCharacterLengthObj.currentLength),"/",this.localizedCharacterLengthObj.maxLength)):null,this.resizeObserver=(0,l.c)("resize",(async()=>{await(0,c.b)(this);const{textAreaHeight:e,textAreaWidth:t,elHeight:i,elWidth:a,footerHeight:r,footerWidth:n}=this.getHeightAndWidthOfElements();n>0&&n!==t&&(this.footerEl.style.width="".concat(t,"px")),a===t&&i===e+(r||0)||this.setHeightAndWidthToAuto()})),this.setTextAreaEl=e=>{this.textAreaEl=e,this.resizeObserver.observe(e)},this.setHeightAndWidthToAuto=function(e,t,i){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return(0,g.i)(i)&&(a="leading"in i?!!i.leading:a,r="trailing"in i?!!i.trailing:r),(0,g.d)(e,t,{leading:a,maxWait:t,trailing:r})}((()=>{"vertical"!==this.resize&&"both"!==this.resize||(this.el.style.height="auto"),"horizontal"!==this.resize&&"both"!==this.resize||(this.el.style.width="auto")}),100,{leading:!1}),this.autofocus=!1,this.columns=void 0,this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.label=void 0,this.maxLength=void 0,this.messages=void 0,this.name=void 0,this.numberingSystem=void 0,this.placeholder=void 0,this.readOnly=!1,this.required=!1,this.resize="both",this.rows=void 0,this.scale="m",this.value=void 0,this.wrap="soft",this.messageOverrides=void 0,this.defaultMessages=void 0,this.endSlotHasElements=void 0,this.startSlotHasElements=void 0,this.effectiveLocale="",this.localizedCharacterLengthObj=void 0}onMessagesChange(){}connectedCallback(){(0,d.c)(this),(0,n.c)(this),(0,r.c)(this),(0,o.c)(this),(0,h.c)(this)}async componentWillLoad(){(0,c.a)(this),await(0,h.s)(this)}componentDidLoad(){(0,c.s)(this)}componentDidRender(){(0,d.u)(this),this.setTextAreaHeight()}disconnectedCallback(){var e;(0,d.d)(this),(0,n.d)(this),(0,r.d)(this),(0,o.d)(this),(0,h.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}render(){const e=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return(0,a.h)(a.AA,null,(0,a.h)("textarea",{"aria-describedby":this.guid,"aria-invalid":(0,s.t)(this.isCharacterLimitExceeded()),"aria-label":(0,n.g)(this),autofocus:this.autofocus,class:{[y]:this.readOnly,[z]:this.isCharacterLimitExceeded(),[w]:this.endSlotHasElements&&this.startSlotHasElements,[E]:!e,[L]:!e},cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readonly:this.readOnly,required:this.required,rows:this.rows,value:this.value,wrap:this.wrap,ref:this.setTextAreaEl}),(0,a.h)("span",{class:{[p]:!0}},(0,a.h)("slot",{onSlotchange:this.contentSlotChangeHandler})),(0,a.h)("footer",{class:{[v]:!0,[y]:this.readOnly,[C]:!e},ref:e=>this.footerEl=e},(0,a.h)("div",{class:{[b]:!0,[H]:!this.startSlotHasElements&&this.endSlotHasElements}},(0,a.h)("slot",{name:S,onSlotchange:e=>this.startSlotHasElements=(0,s.e)(e)}),(0,a.h)("slot",{name:k,onSlotchange:e=>this.endSlotHasElements=(0,s.e)(e)})),this.renderCharacterLimit()),(0,a.h)(r.H,{component:this}),this.isCharacterLimitExceeded()&&(0,a.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:f,id:this.guid},this.replacePlaceHoldersInMessages()))}async setFocus(){await(0,c.c)(this),this.textAreaEl.focus()}async selectText(){await(0,c.b)(this),this.textAreaEl.select()}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}onFormReset(){this.value=this.defaultValue}onLabelClick(){this.setFocus()}getLocalizedCharacterLength(){const e=this.value?this.value.length.toString():"0",t=this.maxLength.toString();return"latn"===this.numberingSystem?{currentLength:e,maxLength:t}:(o.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator},{currentLength:o.n.localize(e),maxLength:o.n.localize(t)})}syncHiddenFormInput(e){e.setCustomValidity(""),this.isCharacterLimitExceeded()&&e.setCustomValidity(this.replacePlaceHoldersInMessages())}setTextAreaHeight(){const{textAreaHeight:e,elHeight:t,footerHeight:i}=this.getHeightAndWidthOfElements();i>0&&e+i!=t&&(this.textAreaEl.style.height="".concat(t-i,"px"))}getHeightAndWidthOfElements(){var e;const{height:t,width:i}=this.textAreaEl.getBoundingClientRect(),{height:a,width:r}=this.el.getBoundingClientRect(),{height:n,width:s}=null===(e=this.footerEl)||void 0===e?void 0:e.getBoundingClientRect();return{textAreaHeight:t,textAreaWidth:i,elHeight:a,elWidth:r,footerHeight:n,footerWidth:s}}replacePlaceHoldersInMessages(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}isCharacterLimitExceeded(){var e;return(null===(e=this.value)||void 0===e?void 0:e.length)>this.maxLength}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);color:var(--calcite-ui-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-ui-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}.readonly{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-ui-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-text-area",{autofocus:[516],columns:[514],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],label:[1],maxLength:[514,"max-length"],messages:[1040],name:[513],numberingSystem:[1,"numbering-system"],placeholder:[1],readOnly:[516,"read-only"],required:[516],resize:[513],rows:[514],scale:[513],value:[1025],wrap:[513],messageOverrides:[1040],defaultMessages:[32],endSlotHasElements:[32],startSlotHasElements:[32],effectiveLocale:[32],localizedCharacterLengthObj:[32],setFocus:[64],selectText:[64]}]);function A(){if("undefined"===typeof customElements)return;["calcite-text-area"].forEach((e=>{if("calcite-text-area"===e)customElements.get(e)||customElements.define(e,O)}))}A();const j=O,T=A},76652:(e,t,i)=>{i.d(t,{S:()=>s,a:()=>v,b:()=>m,c:()=>p,d:()=>W,f:()=>a,i:()=>w,r:()=>n});var a="object"==typeof global&&global&&global.Object===Object&&global,r="object"==typeof self&&self&&self.Object===Object&&self,n=a||r||Function("return this")(),s=n.Symbol,o=Object.prototype,l=o.hasOwnProperty,c=o.toString,h=s?s.toStringTag:void 0;var d=Object.prototype.toString;var u="[object Null]",g="[object Undefined]",f=s?s.toStringTag:void 0;function m(e){return null==e?void 0===e?g:u:f&&f in Object(e)?function(e){var t=l.call(e,h),i=e[h];try{e[h]=void 0;var a=!0}catch(n){}var r=c.call(e);return a&&(t?e[h]=i:delete e[h]),r}(e):function(e){return d.call(e)}(e)}function p(e){return null!=e&&"object"==typeof e}var b="[object Symbol]";function v(e){return"symbol"==typeof e||p(e)&&m(e)==b}var x=/\s/;var y=/^\s+/;function z(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t}(e)+1).replace(y,""):e}function w(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var L=NaN,C=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,H=/^0o[0-7]+$/i,S=parseInt;function k(e){if("number"==typeof e)return e;if(v(e))return L;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=z(e);var i=E.test(e);return i||H.test(e)?S(e.slice(2),i?2:8):C.test(e)?L:+e}var O=function(){return n.Date.now()},A="Expected a function",j=Math.max,T=Math.min;function W(e,t,i){var a,r,n,s,o,l,c=0,h=!1,d=!1,u=!0;if("function"!=typeof e)throw new TypeError(A);function g(t){var i=a,n=r;return a=r=void 0,c=t,s=e.apply(n,i)}function f(e){var i=e-l;return void 0===l||i>=t||i<0||d&&e-c>=n}function m(){var e=O();if(f(e))return p(e);o=setTimeout(m,function(e){var i=t-(e-l);return d?T(i,n-(e-c)):i}(e))}function p(e){return o=void 0,u&&a?g(e):(a=r=void 0,s)}function b(){var e=O(),i=f(e);if(a=arguments,r=this,l=e,i){if(void 0===o)return function(e){return c=e,o=setTimeout(m,t),h?g(e):s}(l);if(d)return clearTimeout(o),o=setTimeout(m,t),g(l)}return void 0===o&&(o=setTimeout(m,t)),s}return t=k(t)||0,w(i)&&(h=!!i.leading,n=(d="maxWait"in i)?j(k(i.maxWait)||0,t):n,u="trailing"in i?!!i.trailing:u),b.cancel=function(){void 0!==o&&clearTimeout(o),c=0,a=l=r=o=void 0},b.flush=function(){return void 0===o?s:p(O())},b}},14387:(e,t,i)=>{i.d(t,{g:()=>a});const a=()=>[2,1,1,1,3].map((e=>{let t="";for(let i=0;i<e;i++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")}}]);
//# sourceMappingURL=8351.ff908671.chunk.js.map