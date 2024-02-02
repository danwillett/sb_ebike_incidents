"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[4931],{22052:(e,t,s)=>{s.d(t,{l:()=>o});const o={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}}},46939:(e,t,s)=>{s.d(t,{QH:()=>u,T$:()=>d,Xm:()=>n,iE:()=>p});var o=s(42537),r=s(93169),l=s(77427),i=s(38499);function n(e){return new a(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},arguments.length>2?arguments[2]:void 0)}class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},s=arguments.length>2?arguments[2]:void 0;if(this.onProgress=t,this.taskName=s,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let t=0;t<e;t++){const s=t,o=1/e;this._weights[s]=o,this._progressMap.set(s,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[o,r]of this._progressMap.entries())e+=r*this._weights[o];if(1===e&&(0,r.Z)("enable-feature:esri-3dofl-upload-timings")){var t;const e=Math.round(performance.now()-(null!==(t=this._startTime)&&void 0!==t?t:0))/1e3;console.log("".concat(this.taskName," done in ").concat(e," sec"));for(const[t,o]of this._timingsMap){var s;const r=Math.round(o.end-o.start)/1e3,l=Math.round(r/e*100);console.log(null!==(s=this.taskName)&&void 0!==s?s:"Task",{stepKey:t,stepTime:r,relativeTime:l})}}this.onProgress(e)}setProgress(e,t){if(this._progressMap.set(e,t),(0,r.Z)("enable-feature:esri-3dofl-upload-timings")){var s;const o=performance.now();null!==(s=this._startTime)&&void 0!==s||(this._startTime=o);const r=(0,l.s1)(this._timingsMap,e,(()=>({start:o,end:0})));1===t&&(r.end=o)}this.emitProgress()}simulate(e,t){return u((t=>this.setProgress(e,t)),t)}makeOnProgress(e){return t=>this.setProgress(e,t)}}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;const s=performance.now();e(0);const r=setInterval((()=>{const o=performance.now()-s,r=1-Math.exp(-o/t);e(r)}),f);return(0,o.kB)((()=>{clearInterval(r),e(1)}))}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return(0,i.up)((0,i._H)(e*g/t))}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return(0,i.up)((0,i._H)(e*g/t))}const h=10,c=10,g=8e-6,f=(0,i.HA)(50),m=(0,i.HA)(1e3)},85079:(e,t,s)=>{s.d(t,{Upload:()=>f});var o=s(27366),r=s(7138),l=s(14921),i=s(10064),n=s(98928),a=s(66978),u=s(49861),d=(s(25243),s(63780),s(93169),s(69912)),p=s(585),h=s(22052),c=s(18277),g=s(46939);let f=class extends r.Z{constructor(){super({}),this.files=[],this.progress=0,this._uploadTask=null,this._layer=null}destroy(){this.cancel(),this.files=[],this._layer=null,this._uploadTask=null}get state(){const e=this._uploadTask;return e&&0!==this.files.length?e.finished?e.error?"error":"success":"pending":"default"}get result(){var e,t;return null!==(e=null===(t=this._uploadTask)||void 0===t?void 0:t.value)&&void 0!==e?e:null}get error(){var e,t;return null!==(e=null===(t=this._uploadTask)||void 0===t?void 0:t.error)&&void 0!==e?e:null}uploadTo(e){this.cancel(),this.files=[],this._layer=e,this._uploadTask=(0,l.vr)((async t=>{const o=await v(e);(0,a.k_)(t),this.progress=0,this.files=o;const r=(0,g.Xm)(h.l.upload,(e=>{this.progress=e}),"Upload.uploadTo");if(0===o.length)return null;const{default:l}=await Promise.all([s.e(5158),s.e(6775),s.e(7898),s.e(1320),s.e(865),s.e(7838)]).then(s.bind(s,97838));(0,a.k_)(t);const n=await l.extractAndFilterFiles(o,e);(0,a.k_)(t),n.length>0&&(this.files=n);const u=new p.Z({x:0,y:0,z:0,spatialReference:e.spatialReference}),d=await l.createFromFiles(u,n,{layer:e,signal:t,onProgress:r.makeOnProgress("createFromFiles")});if((0,a.k_)(t),!d)throw new i.Z("editor:upload","could not upload or convert model");const c=n.reduce(((e,t)=>e+t.size),0),f=r.simulate("loadMesh",(0,g.T$)(c));try{await d.load()}finally{f.remove()}return d}))}retry(){this._layer&&this.uploadTo(this._layer)}cancel(){var e;null===(e=this._uploadTask)||void 0===e||e.abort()}};(0,o._)([(0,u.Cb)()],f.prototype,"files",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"progress",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"state",null),(0,o._)([(0,u.Cb)()],f.prototype,"result",null),(0,o._)([(0,u.Cb)()],f.prototype,"error",null),(0,o._)([(0,u.Cb)()],f.prototype,"_uploadTask",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"_layer",void 0),f=(0,o._)([(0,d.j)("esri.widgets.Editor.Upload")],f);let m=null;async function v(e){const{resolve:t,promise:s}=(0,a.hh)(),o=document.createElement("input");o.type="file",o.multiple=!1,o.accept=[...(0,c.ir)(e.infoFor3D),".zip"].join(","),o.style.display="none",document.body.appendChild(o);const r=(0,n.on)(o,"change",(()=>t(o.files?Array.from(o.files):[])));return m?m(o):o.click(),s.finally((()=>{r.remove(),o.remove()}))}}}]);
//# sourceMappingURL=4931.38b8e574.chunk.js.map