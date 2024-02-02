"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[9583],{82582:(e,t,r)=>{r.d(t,{dp:()=>n,o2:()=>l,yZ:()=>o});var i=r(16889),s=r(68860);const a=96;function o(e,t){const r=t||e.extent,i=e.width,o=(0,s.c9)(null===r||void 0===r?void 0:r.spatialReference);return r&&i?r.width/i*o*s.hd*a:0}function n(e,t){return e/((0,s.c9)(t)*s.hd*a)}function l(e,t,r){return function(e,t){return 0===t||(0,i.W8)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,i.W8)(e,t)||e>t}(e,r)}},19583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var i=r(27366),s=r(76200),a=r(62044),o=r(10064),n=r(93002),l=r(97642),y=r(66978),p=r(49861),u=r(25243),c=(r(63780),r(93169),r(38511)),d=r(69912),h=r(31201),m=r(25265),b=r(53866),g=r(82582),v=r(92975),f=r(30651),S=r(27961),_=r(6741),x=r(11936),C=r(6693),w=r(46671),I=r(6061),L=r(29598),O=r(71684),E=r(56811),P=r(18870),T=r(99063),D=r(45948),M=r(44041),N=r(83690),R=r(77990),F=r(58132),Z=r(26704),j=r(6701);let J=class extends((0,C.h)((0,T.n)((0,E.M)((0,P.x)((0,_.O)((0,x.Y)((0,I.q)((0,L.I)((0,l.R)((0,O.Q)((0,S.V)((0,w.N)(f.Z))))))))))))){constructor(){super(...arguments),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(y.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){var s;if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray();let o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&null!==(s=this.capabilities.exportMap)&&void 0!==s&&s.supportsDynamicLayers){const e=(0,m.M9)(i.origin);if(e===m.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;o=(0,F.QV)(a,e,m.s3.SERVICE)}else if(e>m.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");o=(0,F.QV)(a,e.sublayers,(0,m.M9)(e.origin))}}const n=[],l={writeSublayerStructure:o,...i};let y=o;a.forEach((e=>{const t=e.write({},l);n.push(t),y=y||"user"===e.originOf("visible")})),n.some((e=>Object.keys(e).length>1))&&(t.layers=n),y&&(t.visibleLayers=a.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){var s;const a=(null===i||void 0===i?void 0:i.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const o=new M.R({layer:this,floors:null===i||void 0===i?void 0:i.floors,scale:(0,g.yZ)({extent:e,width:t})*a}),n=o.toJSON();o.destroy();const l=null===i||void 0===i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},y=null===(s=e)||void 0===s?void 0:s.spatialReference,p=(0,v.B9)(y);n.dpi*=a;const u={};if(null!==i&&void 0!==i&&i.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==t&&void 0!==t?t:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...n,...l,...u}}async fetchImage(e,t,r,i){const{data:s}=await this._fetchImage("image",e,t,r,i);return s}async fetchImageBitmap(e,t,r,i){const{data:s,url:a}=await this._fetchImage("blob",e,t,r,i);return(0,N.g)(s,a,null===i||void 0===i?void 0:i.signal)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,s.Z)(this.url,e),{extent:r,fullExtent:i,timeExtent:o}=t,n=r||i;return{fullExtent:n&&b.Z.fromJSON(n),timeExtent:o&&a.Z.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,n.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,Z.D)(this,e)}async _fetchImage(e,t,r,i,a){var n,l,p;const u={responseType:e,signal:null!==(n=null===a||void 0===a?void 0:a.signal)&&void 0!==n?n:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(null!=(null===(l=u.query)||void 0===l?void 0:l.dynamicLayers)&&(null===(p=this.capabilities)||void 0===p||null===(p=p.exportMap)||void 0===p||!p.supportsDynamicLayers))throw new o.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});try{const{data:e}=await(0,s.Z)(c,u);return{data:e,url:c}}catch(d){if((0,y.D_)(d))throw d;throw new o.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:d})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.Z)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,p.Cb)((0,j.mi)("dateFieldsTimeReference"))],J.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,p.Cb)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"dpi",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,c.r)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,p.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,p.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,p.Cb)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,p.Cb)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.Cb)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,p.Cb)((0,j.mi)("preferredTimeReference"))],J.prototype,"preferredTimeZone",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,p.Cb)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,h.c)("sublayers",{layers:{type:[R.Z]},visibleLayers:{type:[u.z8]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,p.Cb)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,p.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,p.Cb)(D.HQ)],J.prototype,"url",void 0),J=(0,i._)([(0,d.j)("esri.layers.MapImageLayer")],J);const V=J},44041:(e,t,r)=>{r.d(t,{R:()=>d});var i=r(27366),s=r(7138),a=r(76672),o=r(49861),n=(r(25243),r(63780),r(93169),r(69912)),l=r(82582),y=r(45948),p=r(87072),u=r(58132);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let d=class extends s.Z{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,p.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,u.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null===(e=this.floors)||void 0===e||!e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,t)=>{const r=(0,p.f)(this.floors,t),i=(0,a._)(r,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,i=t=>{t.visible&&(0===r||(0,l.o2)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(i):e.unshift(t))};t&&t.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"dynamicLayers",null),(0,i._)([(0,o.Cb)()],d.prototype,"floors",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"hasDynamicLayers",null),(0,i._)([(0,o.Cb)()],d.prototype,"layer",null),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"layers",null),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"layerDefs",null),(0,i._)([(0,o.Cb)({type:Number})],d.prototype,"scale",void 0),(0,i._)([(0,o.Cb)(y.qG)],d.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"version",null),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"visibleSublayers",null),d=(0,i._)([(0,n.j)("esri.layers.mixins.ExportImageParameters")],d)}}]);
//# sourceMappingURL=9583.3febcf9c.chunk.js.map