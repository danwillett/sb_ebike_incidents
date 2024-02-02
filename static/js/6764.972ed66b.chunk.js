/*! For license information please see 6764.972ed66b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[6764],{36764:(e,t,i)=>{i.r(t),i.d(t,{CalciteInputNumber:()=>H,defineCustomElement:()=>C});var n=i(51554),a=i(92358),r=i(85955),s=i(13160),o=i(19579),l=i(74310),c=i(47242),u=i(46895),d=i(72021),h=i(52655),m=i(64044),b=i(57601),p=i(87138);const v="loader",g="clear-button",f="icon",x="prefix",y="suffix",w="number-button-wrapper",k="number-button-item--horizontal",z="element-wrapper",I="wrapper",N="action-wrapper",V="number-button-item",E="action",D=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputNumberFocus=(0,n.yM)(this,"calciteInternalInputNumberFocus",6),this.calciteInternalInputNumberBlur=(0,n.yM)(this,"calciteInternalInputNumberBlur",6),this.calciteInputNumberInput=(0,n.yM)(this,"calciteInputNumberInput",7),this.calciteInputNumberChange=(0,n.yM)(this,"calciteInputNumberChange",6),this.previousValueOrigin="initial",this.mutationObserver=(0,d.c)("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||(this.isClearable&&"Escape"===e.key&&(this.clearInputValue(e),e.preventDefault()),"Enter"!==e.key||e.defaultPrevented||(0,r.s)(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setNumberValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedNumberValue&&(this.calciteInputNumberChange.emit(),this.setPreviousEmittedNumberValue(this.value))},this.inputNumberBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputNumberBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=(0,a.g)(this.el,"action");e.target!==t&&this.setFocus()},this.inputNumberFocusHandler=()=>{this.calciteInternalInputNumberFocus.emit()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly)return;const t=e.target.value;u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=u.n.delocalize(t);"insertFromPaste"===e.inputType?((!(0,u.i)(i)||this.integer&&(i.includes("e")||i.includes(".")))&&e.preventDefault(),this.setNumberValue({nativeEvent:e,origin:"user",value:(0,u.p)(i)}),this.childNumberEl.value=this.localizedValue):this.setNumberValue({nativeEvent:e,origin:"user",value:i})},this.inputNumberKeyDownHandler=e=>{if(this.disabled||this.readOnly)return;if("ArrowUp"===e.key)return e.preventDefault(),void this.nudgeNumberValue("up",e);if("ArrowDown"===e.key)return void this.nudgeNumberValue("down",e);const t=[...o.n,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const i=e.shiftKey&&"Tab"===e.key;if(t.includes(e.key)||i)"Enter"===e.key&&this.emitChangeIfUserModified();else{if(u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},e.key===u.n.decimal&&!this.integer){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&-1===this.childNumberEl.value.indexOf(u.n.decimal))return}if(/[eE]/.test(e.key)&&!this.integer){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&!/[eE]/.test(this.childNumberEl.value))return}if("-"===e.key){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&this.childNumberEl.value.split("-").length<=2)return}e.preventDefault()}},this.nudgeNumberValue=(e,t)=>{if(t instanceof KeyboardEvent&&t.repeat)return;const i=this.maxString?parseFloat(this.maxString):null,n=this.minString?parseFloat(this.minString):null;this.incrementOrDecrementNumberValue(e,i,n,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let a=!0;this.nudgeNumberValueIntervalId=window.setInterval((()=>{a?a=!1:this.incrementOrDecrementNumberValue(e,i,n,t)}),150)},this.nudgeButtonPointerUpHandler=e=>{(0,a.j)(e)&&window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerDownHandler=e=>{if(!(0,a.j)(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)},this.hiddenInputChangeHandler=e=>{e.target.name===this.name&&this.setNumberValue({value:e.target.value,origin:"direct"}),e.stopPropagation()},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputNumberValue=e=>{this.childNumberEl&&(this.childNumberEl.value=e)},this.setPreviousEmittedNumberValue=e=>{this.previousEmittedNumberValue=this.normalizeValue(e)},this.setPreviousNumberValue=e=>{this.previousValue=this.normalizeValue(e)},this.setNumberValue=e=>{var t,i;let{committing:n=!1,nativeEvent:a,origin:r,previousValue:s,value:o}=e;u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const l=(null===(t=this.previousValue)||void 0===t?void 0:t.length)>o.length||(null===(i=this.value)||void 0===i?void 0:i.length)>o.length,c=this.integer?o.replace(/[e.]/g,""):o,d="."===c.charAt(c.length-1),h=d&&l?c:(0,u.s)(c),m=o&&!h?(0,u.i)(this.previousValue)?this.previousValue:"":h;let b=u.n.localize(m);if("connected"===r||d||(b=(0,u.e)(b,m,u.n)),this.localizedValue=d&&l?"".concat(b).concat(u.n.decimal):b,this.setPreviousNumberValue(null!==s&&void 0!==s?s:this.value),this.previousValueOrigin=r,this.userChangedValue="user"===r&&this.value!==m,this.value=["-","."].includes(m)?"":m,"direct"===r&&(this.setInputNumberValue(b),this.setPreviousEmittedNumberValue(b)),a){this.calciteInputNumberInput.emit().defaultPrevented?(this.value=this.previousValue,this.localizedValue=u.n.localize(this.previousValue)):n&&this.emitChangeIfUserModified()}},this.inputNumberKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.hidden=!1,this.icon=void 0,this.iconFlipRtl=!1,this.integer=!1,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.inputMode="decimal",this.enterKeyHint=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.localizedValue=void 0,this.slottedActionElDisabledInternally=!1}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var e;this.maxString=(null===(e=this.max)||void 0===e?void 0:e.toString())||null}minWatcher(){var e;this.minString=(null===(e=this.min)||void 0===e?void 0:e.toString())||null}onMessagesChange(){}valueWatcher(e,t){this.userChangedValue||(this.setNumberValue({origin:"direct",previousValue:t,value:null==e||""==e?"":(0,u.i)(e)?e:this.previousValue||""}),this.warnAboutInvalidNumberValue(e)),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=(0,a.h)({},this.icon,"number")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleWatcher(e){(0,h.u)(this,this.effectiveLocale),u.n.numberFormatOptions={locale:e,numberingSystem:this.numberingSystem,useGrouping:!1}}connectedCallback(){var e;(0,s.c)(this),(0,u.c)(this),(0,h.c)(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),(0,l.c)(this),(0,r.c)(this),this.setPreviousEmittedNumberValue(this.value),this.setPreviousNumberValue(this.value),this.warnAboutInvalidNumberValue(this.value),this.setNumberValue({origin:"connected",value:(0,u.i)(this.value)?this.value:""}),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}componentDidLoad(){(0,c.s)(this)}disconnectedCallback(){var e;(0,s.d)(this),(0,l.d)(this),(0,r.d)(this),(0,u.d)(this),(0,h.d)(this),null===(e=this.mutationObserver)||void 0===e||e.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){var e,t;(0,c.a)(this),this.maxString=null===(e=this.max)||void 0===e?void 0:e.toString(),this.minString=null===(t=this.min)||void 0===t?void 0:t.toString(),this.requestedIcon=(0,a.h)({},this.icon,"number"),await(0,h.s)(this)}componentShouldUpdate(e,t,i){return!("value"===i&&e&&!(0,u.i)(e))||(this.setNumberValue({origin:"reset",value:t}),!1)}componentDidRender(){(0,s.u)(this)}async setFocus(){var e;await(0,c.c)(this),null===(e=this.childNumberEl)||void 0===e||e.focus()}async selectText(){var e;null===(e=this.childNumberEl)||void 0===e||e.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,i,n){const{value:a}=this,r="up"===e?1:-1,s=this.integer&&"any"!==this.step?Math.round(this.step):this.step,o="any"===s?1:Math.abs(s||1),l=new u.B(""!==a?a:"0").add("".concat(o*r)),c="number"===typeof i&&!isNaN(i)&&l.subtract("".concat(i)).isNegative?"".concat(i):"number"!==typeof t||isNaN(t)||l.subtract("".concat(t)).isNegative?l.toString():"".concat(t);this.setNumberValue({committing:!0,nativeEvent:n,origin:"user",value:c})}onFormReset(){this.setNumberValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(e){var t,i,n,a;e.type="number",e.min=null!==(t=null===(i=this.min)||void 0===i?void 0:i.toString(10))&&void 0!==t?t:"",e.max=null!==(n=null===(a=this.max)||void 0===a?void 0:a.toString(10))&&void 0!==n?n:""}setDisabledAction(){const e=(0,a.g)(this.el,"action");e&&(this.disabled?(null==e.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(e){return(0,u.i)(e)?e:""}warnAboutInvalidNumberValue(e){e&&!(0,u.i)(e)&&console.warn('The specified value "'.concat(e,'" cannot be parsed, or is out of range.'))}render(){const e=(0,a.b)(this.el),t=(0,n.h)("div",{class:v},(0,n.h)("calcite-progress",{label:this.messages.loading,type:"indeterminate"})),i=(0,n.h)("button",{"aria-label":this.messages.clear,class:g,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"x",scale:(0,m.g)(this.scale)})),s=(0,n.h)("calcite-icon",{class:f,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:(0,m.g)(this.scale)}),o="horizontal"===this.numberButtonType,c=(0,n.h)("button",{"aria-hidden":"true",class:{[V]:!0,[k]:o},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:(0,m.g)(this.scale)})),u=(0,n.h)("button",{"aria-hidden":"true",class:{[V]:!0,[k]:o},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:(0,m.g)(this.scale)})),d=(0,n.h)("div",{class:w},c,u),h=(0,n.h)("div",{class:x},this.prefixText),b=(0,n.h)("div",{class:y},this.suffixText),p=(0,n.h)("input",{"aria-label":(0,l.g)(this),autocomplete:this.autocomplete,autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputNumberBlurHandler,onFocus:this.inputNumberFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputNumberKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,type:"text",value:this.localizedValue,ref:this.setChildNumberElRef});return(0,n.h)(n.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)("div",{class:{[I]:!0,[a.C.rtl]:"rtl"===e}},"horizontal"!==this.numberButtonType||this.readOnly?null:u,this.prefixText?h:null,(0,n.h)("div",{class:z},p,this.isClearable?i:null,this.requestedIcon?s:null,this.loading?t:null),(0,n.h)("div",{class:N},(0,n.h)("slot",{name:E})),"vertical"!==this.numberButtonType||this.readOnly?null:d,this.suffixText?b:null,"horizontal"!==this.numberButtonType||this.readOnly?null:c,(0,n.h)(r.H,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-input-number",{alignment:[513],autofocus:[516],clearable:[516],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],hidden:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],integer:[4],label:[1],loading:[516],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],step:[520],autocomplete:[1],inputMode:[1,"input-mode"],enterKeyHint:[1,"enter-key-hint"],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],value:[1025],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],localizedValue:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]}]);function O(){if("undefined"===typeof customElements)return;["calcite-input-number","calcite-icon","calcite-progress"].forEach((e=>{switch(e){case"calcite-input-number":customElements.get(e)||customElements.define(e,D);break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-progress":customElements.get(e)||(0,p.d)()}}))}O();const H=D,C=O},64044:(e,t,i)=>{function n(e){return"l"===e?"m":"s"}i.d(t,{g:()=>n})},57601:(e,t,i)=>{i.d(t,{I:()=>d,d:()=>h});var n=i(51554),a=i(92358),r=i(72021);const s="flip-rtl",o={},l={},c={s:16,m:24,l:32};async function u(e){let{icon:t,scale:i}=e;const a=c[i],r=function(e){const t=!isNaN(Number(e.charAt(0))),i=e.split("-");if(i.length>0){const t=/[a-z]/i;e=i.map(((e,i)=>e.replace(t,(function(e,t){return 0===i&&0===t?e:e.toUpperCase()})))).join("")}return t?"i".concat(e):e}(t),s="F"===r.charAt(r.length-1),u=s?r.substring(0,r.length-1):r,d="".concat(u).concat(a).concat(s?"F":"");if(o[d])return o[d];l[d]||(l[d]=fetch((0,n.K3)("./assets/icon/".concat(d,".json"))).then((e=>e.json())).catch((()=>(console.error('"'.concat(d,'" is not a valid calcite-ui-icon name')),""))));const h=await l[d];return o[d]=h,h}const d=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:i,scale:r,textLabel:o}=this,l=(0,a.b)(e),u=c[r],d=!!o,h=[].concat(i||"");return(0,n.h)(n.AA,{"aria-hidden":(0,a.t)(!d),"aria-label":d?o:null,role:d?"img":null},(0,n.h)("svg",{"aria-hidden":"true",class:{[s]:"rtl"===l&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(u," ").concat(u),width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map((e=>"string"===typeof e?(0,n.h)("path",{d:e}):(0,n.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:i}=this;if(!n.Z5.isBrowser||!e||!i)return;const a=await u({icon:e,scale:t});e===this.icon&&(this.pathData=a)}waitUntilVisible(e){this.intersectionObserver=(0,r.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function h(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,d)}))}h()},87138:(e,t,i)=>{i.d(t,{d:()=>s});var n=i(51554),a=i(92358);const r=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="determinate",this.value=0,this.label=void 0,this.text=void 0,this.reversed=!1}render(){const e="determinate"===this.type?{width:"".concat(100*this.value,"%")}:{},t=(0,a.b)(this.el);return(0,n.h)("div",{"aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},(0,n.h)("div",{class:"track"},(0,n.h)("div",{class:{bar:!0,indeterminate:"indeterminate"===this.type,[a.C.rtl]:"rtl"===t,reversed:this.reversed},style:e})),this.text?(0,n.h)("div",{class:"text"},this.text):null)}get el(){return this}static get style(){return":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-app-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:var(--calcite-app-z-index);background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-progress",{type:[513],value:[2],label:[1],text:[1],reversed:[516]}]);function s(){if("undefined"===typeof customElements)return;["calcite-progress"].forEach((e=>{if("calcite-progress"===e)customElements.get(e)||customElements.define(e,r)}))}s()}}]);
//# sourceMappingURL=6764.972ed66b.chunk.js.map