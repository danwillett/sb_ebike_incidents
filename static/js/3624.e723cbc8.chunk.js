"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[3624],{41978:(t,e,i)=>{i.d(e,{AM:()=>f});var s=i(27366),n=i(7138),h=i(93169),r=i(84652),o=i(32718),l=i(49861),a=(i(25243),i(69912)),d=i(85411),c=i(32551);const u=-1;let f=class extends n.Z{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,h.Z)("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(_(t))}catch(e){this._transitionTo([]),o.Z.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&g(this._current,_(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&g(this._current,t,this.scale)?(this._final=t,this._to=(0,r.d9)(t),function(t,e,i){var s,n;const h=t.length>e.length?t:e,r=t.length>e.length?e:t,o=r[r.length-1],l=null!==(s=null===o||void 0===o?void 0:o.scale)&&void 0!==s?s:i,a=null!==(n=null===o||void 0===o?void 0:o.effects)&&void 0!==n?n:[];for(let d=r.length;d<h.length;d++)r.push({scale:l,effects:[...a]});for(let d=0;d<h.length;d++)r[d].scale=r[d].scale===u?i:r[d].scale,h[d].scale=h[d].scale===u?i:h[d].scale,(0,c.uF)(r[d].effects,h[d].effects)}(this._current,this._to,this.scale),this._from=(0,r.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,r.d9)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const t=this._current[i],s=this._from[i],n=this._to[i];t.scale=p(s.scale,n.scale,e);for(let i=0;i<t.effects.length;i++){const h=t.effects[i],r=s.effects[i],o=n.effects[i];h.interpolate(r,o,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,r.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,i=this._current.length-1;let s,n,h=1;if(1===e.length||t>=e[0].scale)n=s=e[0].effects;else if(t<=e[i].scale)n=s=e[i].effects;else for(let r=0;r<i;r++){const i=e[r],o=e[r+1];if(i.scale>=t&&o.scale<=t){h=(t-i.scale)/(o.scale-i.scale),s=i.effects,n=o.effects;break}}for(let r=0;r<this.effects.length;r++)this.effects[r].interpolate(s[r],n[r],h)}};function _(t){const e=(0,d.Q)(t)||[];return function(t){const e=t[0];return!!e&&"type"in e}(e)?[{scale:u,effects:e}]:e}function g(t,e,i){var s,n,h,r;return null===(s=t[0])||void 0===s||!s.effects||null===(n=e[0])||void 0===n||!n.effects||!(((null===(h=t[0])||void 0===h?void 0:h.scale)===u||(null===(r=e[0])||void 0===r?void 0:r.scale)===u)&&(t.length>1||e.length>1)&&i<=0)&&(0,c.AS)(t[0].effects,e[0].effects)}function p(t,e,i){return t+(e-t)*i}(0,s._)([(0,l.Cb)()],f.prototype,"_to",void 0),(0,s._)([(0,l.Cb)()],f.prototype,"duration",void 0),(0,s._)([(0,l.Cb)({value:""})],f.prototype,"effect",null),(0,s._)([(0,l.Cb)({readOnly:!0})],f.prototype,"effects",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],f.prototype,"hasEffects",null),(0,s._)([(0,l.Cb)({value:0})],f.prototype,"scale",null),(0,s._)([(0,l.Cb)({readOnly:!0})],f.prototype,"transitioning",null),f=(0,s._)([(0,a.j)("esri.layers.effects.EffectView")],f)},33624:(t,e,i)=>{i.d(e,{W:()=>o});var s=i(23588),n=i(41978),h=i(87422),r=i(3453);class o extends h.s{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!==(t=null===(e=this._effectView)||void 0===e?void 0:e.effects)&&void 0!==t?t:null}get effect(){var t,e;return null!==(t=null===(e=this._effectView)||void 0===e?void 0:e.effect)&&void 0!==t?t:""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new n.AM),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new r.Z),this._highlightGradient.setHighlightOptions(t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some((t=>t.hasHighlight))}get hasLabels(){return this.children.some((t=>t.hasLabels))}get requiresDedicatedFBO(){return this.children.some((t=>"blendMode"in t&&t.blendMode&&"normal"!==t.blendMode))}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){var e;const i=this.createRenderParams(t),{painter:s}=i;s.beforeRenderLayer(i,null!==(e=this._clips)&&void 0!==e&&e.length?255:0,this.computedOpacity),this.renderChildren(i),s.afterRenderLayer(i,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:(0,s.c)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}},87422:(t,e,i)=>{i.d(e,{s:()=>o});var s=i(91505),n=i(93169),h=i(66978);const r=1/(0,n.Z)("mapview-transitions-duration");class o extends s.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){var e;if(this._stage===t)return;const i=this._stage;this._stage=t,t?(null===(e=this._stage)||void 0===e?void 0:e.untrashDisplayObject(this))||(this.onAttach(),this.emit("attach")):null===i||void 0===i||i.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,h.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,h.hh)(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var t,e;null!==(t=this._fadeInResolver)&&void 0!==t&&t.call(this),this._fadeInResolver=null,null!==(e=this._fadeOutResolver)&&void 0!==e&&e.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;null===(t=this.parent)||void 0===t||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const s=t*r;this.computedOpacity=i>e?Math.max(e,i-s):Math.min(e,i+s),this.computedVisible=this.computedOpacity>0;const n=e===this.computedOpacity;this.inFadeTransition=!n,n||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},3453:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(32718),n=i(94109),h=i(17615),r=i(8548),o=i(57808),l=i(52311);const a=s.Z.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");const d=[0,0,0,0];class c{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:h.Fo.outlinePosition,outlineWidth:h.Fo.outlineWidth,innerHaloWidth:h.Fo.innerHaloWidth,outerHaloWidth:h.Fo.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*h.iq),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;!function(t,e){e.fillColor[0]=t.color.r/255,e.fillColor[1]=t.color.g/255,e.fillColor[2]=t.color.b/255,e.fillColor[3]=t.color.a,t.haloColor?(e.outlineColor[0]=t.haloColor.r/255,e.outlineColor[1]=t.haloColor.g/255,e.outlineColor[2]=t.haloColor.b/255,e.outlineColor[3]=t.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=t.fillOpacity,e.outlineColor[3]*=t.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=h.Fo.outlineWidth,e.outerHaloWidth=h.Fo.outerHaloWidth,e.innerHaloWidth=h.Fo.innerHaloWidth,e.outlinePosition=h.Fo.outlinePosition}(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,s=e.outlinePosition-e.outlineWidth/2,n=e.outlinePosition+e.outlineWidth/2,r=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,o=Math.sqrt(Math.PI/2)*h.pW,l=Math.abs(i)>o?Math.round(10*(Math.abs(i)-o))/10:0,c=Math.abs(r)>o?Math.round(10*(Math.abs(r)-o))/10:0;let u;l&&!c?a.error("The outer rim of the highlight is "+l+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!l&&c?a.error("The inner rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):l&&c&&a.error("The highlight is "+Math.max(l,c)+"px away from the edge of the feature; consider reducing some width values.");const f=[void 0,void 0,void 0,void 0];function _(t,e,i){f[0]=(1-i)*t[0]+i*e[0],f[1]=(1-i)*t[1]+i*e[1],f[2]=(1-i)*t[2]+i*e[2],f[3]=(1-i)*t[3]+i*e[3]}const{_texelData:g}=this;for(let a=0;a<h.iq;++a)u=i+a/(h.iq-1)*(r-i),u<i?(f[0]=0,f[1]=0,f[2]=0,f[3]=0):u<s?_(d,e.outlineColor,(u-i)/(s-i)):u<n?[f[0],f[1],f[2],f[3]]=e.outlineColor:u<r?_(e.outlineColor,e.fillColor,(u-n)/(r-n)):[f[0],f[1],f[2],f[3]]=e.fillColor,g[4*a]=255*f[0],g[4*a+1]=255*f[1],g[4*a+2]=255*f[2],g[4*a+3]=255*f[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=r,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const e=new l.X;e.wrapMode=r.e8.CLAMP_TO_EDGE,e.width=h.iq,e.height=1,this._shadeTex=new o.x(t,e)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,h.iq,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,n.Sf),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;null!==(t=this._shadeTex)&&void 0!==t&&t.dispose(),this._shadeTex=null}}},17615:(t,e,i)=>{i.d(e,{Fo:()=>o,bM:()=>n,dl:()=>h,iq:()=>r,pW:()=>s});const s=1,n=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],h=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r=256,o={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0}}}]);
//# sourceMappingURL=3624.e723cbc8.chunk.js.map