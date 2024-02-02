"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[834],{46228:(e,t,r)=>{r.d(t,{I:()=>n,v:()=>a});var s=r(16889);function n(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=(0,s.uZ)(e,0,l);for(let s=0;s<4;s++)t[r+s]=Math.floor(256*c(n*i[s]))}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;for(let s=0;s<4;s++)r+=e[t+s]*o[s];return r}const i=[1,256,65536,16777216],o=[1/256,1/65536,1/16777216,1/4294967296],l=a(new Uint8ClampedArray([255,255,255,255]));function c(e){return e-Math.floor(e)}},82272:(e,t,r)=>{r.d(t,{BN:()=>d,Yc:()=>h,em:()=>n,hZ:()=>u,mx:()=>c});var s=r(42265);const n="arial-unicode-ms",a="woff2",i=new Map,o=new Set;class l{constructor(e,t){this.fontFace=e,this.promise=t}}async function c(e){const t=h(e),r=i.get(t);if(r)return r.promise;const n=new FontFace(e.family,"url('".concat(s.default.fontsUrl,"/woff2/").concat(t,".").concat(a,"') format('").concat(a,"')"),{style:e.style,weight:e.weight}),c=document.fonts;if(c.has(n)&&"loading"===n.status)return n.loaded;const u=n.load().then((()=>(c.add(n),n)));return i.set(t,new l(n,u)),o.add(n),u}function u(e){return o.has(e)}function d(e){if(!e)return n;const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function h(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return d(e.family)+(t.length>0?t:"-regular")}},91935:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(10064),n=r(32718),a=r(58971);function i(e,t,r,s,a){if(null==e)return null;const i=e.referencesGeometry()&&a?l(t,s,a):t,o=e.repurposeFeature(i);try{return e.evaluate({...r,$feature:o},e.services)}catch(c){return n.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const o=new Map;function l(e,t,r){const{transform:i,hasZ:l,hasM:c}=r;o.has(t)||o.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,r,s,n)=>(0,a.U1)(r,t,e,s,n);case"esriGeometryPolygon":return(e,r,s,n)=>(0,a.Ie)(r,t,e,s,n);case"esriGeometryPolyline":return(e,r,s,n)=>(0,a.G6)(r,t,e,s,n);case"esriGeometryMultipoint":return(e,r,s,n)=>(0,a.J9)(r,t,e,s,n);default:return n.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s.Z("mapview-arcade","Unable to handle geometryType: ".concat(e))),e=>e}}(t));const u=o.get(t)(e.geometry,i,l,c);return{...e,geometry:u}}},81735:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(27366),n=r(7138),a=r(49861),i=(r(25243),r(63780),r(93169),r(69912));let o=class extends n.Z{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.tileStore.tileScheme.spatialReference;return e&&e.toJSON()||null}};(0,s._)([(0,a.Cb)({readOnly:!0})],o.prototype,"supportsTileUpdates",null),(0,s._)([(0,a.Cb)({constructOnly:!0})],o.prototype,"remoteClient",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],o.prototype,"service",void 0),(0,s._)([(0,a.Cb)()],o.prototype,"spatialReference",null),(0,s._)([(0,a.Cb)({constructOnly:!0})],o.prototype,"tileInfo",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],o.prototype,"tileStore",void 0),o=(0,s._)([(0,i.j)("esri.views.2d.layers.features.processors.BaseProcessor")],o);const l=o},3561:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var s=r(27366),n=r(75746),a=(r(10064),r(93169),r(32718),r(92026)),i=r(66978),o=(r(25243),r(63780),r(69912)),l=r(48732),c=r(78952),u=r(84328),d=r(80613),h=r(72774),f=r(74017),m=r(61909),y=r(69813),p=r(27301),g=r(81735);class _{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,t){const r=this._resourceMap,s=r.get(e);if(s)return s;let n=this._inFlightResourceMap.get(e);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...t}),this._inFlightResourceMap.set(e,n),n.then((t=>(this._inFlightResourceMap.delete(e),r.set(e,t),t)))}catch(a){return(0,i.D_)(a)?null:{width:0,height:0}}return n}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}loadFont(e){return Promise.resolve(null)}}function v(e,t){const r=t-t/4,s=t+t/2;return(!e.minScale||e.minScale>=r)&&(!e.maxScale||e.maxScale<=s)}function b(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const n in t.data){const e=n,a=t.data[e];if(r.message.data[e]=null,null!=a){var s;const t=a.stride,n=a.indices.slice(0),i=a.vertices.slice(0),o=a.records.slice(0),l={stride:t,indices:n,vertices:i,records:o,metrics:null===(s=a.metrics)||void 0===s?void 0:s.slice(0)};r.transferList.push(n,i,o),r.message.data[e]=l}}return r}let w=class extends g.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new _(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){var r;const s=t.schema.processors[0];if("symbol"!==s.type)return;const n=(0,l.Hg)(this._schema,s);((0,l.uD)(n,"mesh")||(0,l.uD)(n,"target"))&&(e.mesh=!0,null!==(r=e.why)&&void 0!==r&&r.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,r,s){return(0,i.k_)(s),this._onTileData(e,t,r,s)}onTileClear(e,t){const r={clear:!0,end:t};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:r})}onTileError(e,t,r){const s=r.signal,n={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",n,{signal:s})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,b(r),[],!1,!1,null)}))}_addBufferData(e,t){var r;this._bufferData.has(e)||this._bufferData.set(e,[]),null===(r=this._bufferData.get(e))||void 0===r||r.push(b(t))}_createFactory(e){const{geometryType:t,objectIdField:r,fields:s}=this.service,n={geometryType:t,fields:s,spatialReference:c.Z.fromJSON(this.spatialReference)},a=new m.Wr(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:i,aggregateMatcher:o}=e.mesh;return this._store=a,this._matchers.feature=(0,y.fL)(i,a,n,this._resourceManagerProxy),this._matchers.aggregate=o?(0,y.fL)(o,a,n,this._resourceManagerProxy):null,new f.j(t,r,a)}async _onTileData(e,t,r,s){var n;(0,i.k_)(s);const{type:a,addOrUpdate:o,remove:l,clear:c,end:u}=t,d=!!this._schema.mesh.sortKey;if(!o){const t={type:a,addOrUpdate:null,remove:l,clear:c,end:u,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},s)}const h=this._processFeatures(e,o,r,s,null===(n=t.status)||void 0===n?void 0:n.version);try{const r=await h;if(null==r){const t={type:a,addOrUpdate:null,remove:l,clear:c,end:u,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},s)}const n=[];for(const t of r){let r=!1;const s=t.message.bufferIds,a=e.key.id,i=t.message.tileKey;if(a!==i&&null!=s){if(!this.tileStore.get(i)){this._addBufferData(a,t),n.push(t);continue}let e=this._bufferIds.get(i);e||(e=new Set,this._bufferIds.set(i,e));const o=Array.from(s);for(const t of o){if(e.has(t)){r=!0;break}e.add(t)}}r||(this._addBufferData(a,t),n.push(t))}await Promise.all(n.map((r=>{const n=e.key.id===r.message.tileKey,i=n?t.remove:[],o=n&&t.end;return this._updateTileMesh(a,e,r,i,o,!!t.clear,s.signal)})))}catch(f){this._handleError(e,f,s)}}async _updateTileMesh(e,t,r,s,n,a,o){var l;const c=e,u=r.message.tileKey,d=!!this._schema.mesh.sortKey;u!==t.key.id&&(n=!1);const h={type:c,addOrUpdate:null===r||void 0===r?void 0:r.message,remove:s,clear:a,end:n,sort:d},f={transferList:null!==(l=null===r||void 0===r?void 0:r.transferList)&&void 0!==l?l:[],signal:o};return(0,i.k_)(f),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:u,data:h},f)}async _processFeatures(e,t,r,s,n){if(null==t||!t.hasFeatures)return null;const a={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,l={viewingMode:"",scale:e.scale},c=await this._matchers.feature,u=await this._matchers.aggregate;(0,i.k_)(s);const d=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,c,u,a,l),(0,i.k_)(s),this._writeFeatureSet(e,t,a,d,o,r,n)}_writeFeatureSet(e,t,r,s,n,a,i){const o=t.getSize(),l=this._schema.mesh.matcher.symbologyType,c=new h._(e.key.id,{features:o,records:o,metrics:0},l,a,l!==d.mD.HEATMAP,i),u={viewingMode:"",scale:e.scale},f=t.getCursor();for(;f.next();)try{const t=f.getDisplayId(),a=null!=s?s.get(t):null;n.writeCursor(c,f,r,u,e.level,a,this._resourceManagerProxy)}catch(y){}const m=e.tileInfoView.tileInfo.isWrappable;return c.serialize(m)}_handleError(e,t,r){if(!(0,i.D_)(t)){const s={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}return Promise.resolve()}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(null==t)return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let s=!1;for(const n in t.classes){const a=t.classes[n].filter((t=>v(t,e.scale)));s=s||!!a.length,r.classes[n]=a}return s?r:null}const r=t.classes.filter((t=>v(t,e.scale)));return r.length?{type:"simple",classes:r}:null}_getLabels(e,t){if("subtype"===t.type){var r;const s=this.service.subtypeField;(0,a.O3)(s,"Expected to find subtype Field");const n=e.readAttribute(s);return null==n?[]:null!==(r=t.classes[n])&&void 0!==r?r:[]}return t.classes}_getLabelInfos(e,t){const r=this._getLabelingSchemaForScale(e);if(null==r)return null;const s=new Map,a=t.getCursor();for(;a.next();){const e=a.getDisplayId(),t=[],i=(0,u.nE)(e),o=i&&1!==a.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(a,r);for(const r of l){if(r.target!==o)continue;const s=a.getStorage(),l=i&&"feature"===o?s.getComputedStringAtIndex(a.readAttribute("referenceId"),r.fieldIndex):s.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=(0,n.E)(l.toString()),u=c[0],d=c[1];this._store.getMosaicItem(r.symbol,(0,p._)(u)).then((e=>{var s;t[r.index]={glyphs:null!==(s=e.glyphMosaicItems)&&void 0!==s?s:[],rtl:d,index:r.index}}))}s.set(e,t)}return s}};w=(0,s._)([(0,o.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],w);const S=w},29145:(e,t,r)=>{r.d(t,{x:()=>u,B:()=>c});var s=r(98991),n=r(80613),a=r(54815);const i={marker:n.LW.MARKER,fill:n.LW.FILL,line:n.LW.LINE,text:n.LW.TEXT};class o{constructor(e,t,r,s){const o={minScale:null===t||void 0===t?void 0:t.minScale,maxScale:null===t||void 0===t?void 0:t.maxScale},l=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(o);this.layers=e,this.data=t,this.hash=this._createHash()+l,this.rendererKey=r;const c={isOutline:!1,placement:null,symbologyType:n.mD.DEFAULT,vvFlags:r};for(const n of e){const e=i[n.type];c.isOutline="line"===n.type&&n.isOutline,n.materialKey=(0,a.jj)(e,c),n.maxVVSize=s,n.scaleInfo=o,n.templateHash+=l}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}const l=async(e,t,r)=>{const n=new s._(r,t);return new o(await n.analyzeSymbolReference(e.data,!1),e.data,e.rendererKey,e.maxVVSize)};async function c(e,t,s,n){if(!e)return null;if("cim"===e.type)return l(e,t,s);if("web-style"===e.type){var a;const{fetchCIMSymbolReference:i}=await r.e(656).then(r.bind(r,80656)),o={type:"cim",data:null!==(a=await i(e,null,n))&&void 0!==a?a:void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return l(o,t,s)}return e}function u(e){if(!e)return null;const{avoidSDFRasterization:t,type:r,cim:s,url:n,materialHash:a,maxVVSize:i}=e,o={cim:s,type:r,mosaicHash:a,url:n,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(r){case"marker":i&&"size"in s&&(s.size=Math.max(i,s.size)),o.size=e.size,o.path=e.path,o.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":o.dashTemplate=e.dashTemplate;break;case"text":o.text=e.text,o.fontName=e.fontName}return o}}}]);
//# sourceMappingURL=834.931cb90a.chunk.js.map