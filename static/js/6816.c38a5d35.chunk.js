"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[6816],{70116:(e,t,i)=>{var a;i.d(t,{Y:()=>a}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(a||(a={}))},46816:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(27366),l=i(76200),r=i(10064),n=i(92026),s=i(97642),o=i(66978),h=i(35995),c=i(49861),d=(i(25243),i(63780)),u=(i(93169),i(38511)),p=i(69912),v=i(90724),m=i(30651),f=i(17775),y=i(11936),_=i(6061),b=i(29598),w=i(45948);class g{constructor(e,t,i,a){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=a)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,a=-1/0,l=!0;for(const r of t)r===e?this._hasNoDataValues=!0:(i=r<i?r:i,a=r>a?r:a,l=!1);l?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=a>-3e38?a:0)}}var D=i(42537),T=i(32718),S=i(70431);class O{constructor(e,t,i,a){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,S.bA)(e,{...l,schedule:a}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,l.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>T.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,D.kB)((()=>{i.removed=!0,(0,d.Od)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this._transferLists[e],l=a?a(t):[];return this._thread.invoke(e,t,{transferList:l,signal:i})}return this._promise?this._promise.then((()=>((0,o.k_)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}class C extends O{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(L.forEach(((e,t)=>{e===this&&L.delete(t)})),this.destroy())}}const L=new Map;let I=class extends((0,f.Z)((0,y.Y)((0,_.q)((0,b.I)((0,s.R)(m.Z)))))){constructor(){super(...arguments),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=L.get(e);return t||(null!=e?(t=new C((t=>e.immediate.schedule(t))),L.set(e,t)):(t=new C,L.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,n.RY)(this._lercDecoder)}readCapabilities(e,t){const i=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));return i?{operations:{supportsTileMap:i.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(o.r9).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,a){const r=null!=(a=a||{signal:null}).signal?a.signal:a.signal=(new AbortController).signal,n={responseType:"array-buffer",signal:r},s={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,a))).then((()=>(0,l.Z)(this.getTileUrl(e,t,i),n))).then((e=>this._lercDecoder.decode(e.data,s,r))).then((e=>new g(e)))}getTileUrl(e,t,i){const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=(0,h.B7)({...this.parsedUrl.query,blankTile:!a&&null});return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(i).concat(l?"?"+l:"")}async queryElevation(e,t){const{ElevationQuery:a}=await i.e(5887).then(i.bind(i,35887));return(0,o.k_)(t),(new a).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:a}=await i.e(5887).then(i.bind(i,35887));return(0,o.k_)(t),(new a).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,a):Promise.resolve("unknown")}async _fetchImageService(e){var t;if(this.sourceJSON)return this.sourceJSON;const i={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},a=await(0,l.Z)(this.parsedUrl.path,i);a.ssl&&(this.url=null===(t=this.url)||void 0===t?void 0:t.replace(/^http:/i,"https:")),this.sourceJSON=a.data,this.read(a.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[x]}};(0,a._)([(0,c.Cb)({readOnly:!0})],I.prototype,"capabilities",void 0),(0,a._)([(0,u.r)("service","capabilities",["capabilities"])],I.prototype,"readCapabilities",null),(0,a._)([(0,c.Cb)({json:{read:{source:"copyrightText"}}})],I.prototype,"copyright",void 0),(0,a._)([(0,c.Cb)({readOnly:!0,type:v.Z})],I.prototype,"heightModelInfo",void 0),(0,a._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),(0,a._)([(0,c.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),(0,a._)([(0,c.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],I.prototype,"minScale",void 0),(0,a._)([(0,c.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],I.prototype,"maxScale",void 0),(0,a._)([(0,c.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],I.prototype,"opacity",void 0),(0,a._)([(0,c.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],I.prototype,"operationalLayerType",void 0),(0,a._)([(0,c.Cb)()],I.prototype,"sourceJSON",void 0),(0,a._)([(0,c.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],I.prototype,"type",void 0),(0,a._)([(0,c.Cb)(w.HQ)],I.prototype,"url",void 0),(0,a._)([(0,c.Cb)()],I.prototype,"version",void 0),(0,a._)([(0,u.r)("version",["currentVersion"])],I.prototype,"readVersion",null),I=(0,a._)([(0,p.j)("esri.layers.ElevationLayer")],I);const x=Symbol("default-fetch-tile");I.prototype.fetchTile[x]=!0;const A=I},17775:(e,t,i)=>{i.d(t,{Z:()=>d});var a=i(27366),l=(i(59486),i(49861)),r=(i(25243),i(63780),i(93169),i(38511)),n=i(69912),s=i(22824),o=i(53184),h=i(34810),c=i(78952);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var e,t;null===(e=this.tilemapCache)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e)}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){var a;const l=null===(a=t.capabilities)||void 0===a?void 0:a.includes("Tilemap");let{minLOD:r,maxLOD:n,minScale:c,maxScale:d}=t;if(null==r&&null==n&&0!==c&&0!==d){const e=e=>Math.round(1e4*e)/1e4;c=e(c||t.tileInfo.lods[0].scale),d=e(d||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);r=t>=c?i.level:r,n=t>=d?i.level:n}}if(l)return new h.y({layer:this,minLOD:r,maxLOD:n});if(t.tileInfo){const e=new s.Z;return e.read(t.tileInfo,i),new o.Z(e,r,n)}return null}};return(0,a._)([(0,l.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,a._)([(0,l.Cb)()],t.prototype,"minScale",void 0),(0,a._)([(0,r.r)("service","minScale")],t.prototype,"readMinScale",null),(0,a._)([(0,l.Cb)()],t.prototype,"maxScale",void 0),(0,a._)([(0,r.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,a._)([(0,l.Cb)({type:c.Z})],t.prototype,"spatialReference",void 0),(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,a._)([(0,l.Cb)({type:s.Z})],t.prototype,"tileInfo",void 0),(0,a._)([(0,l.Cb)()],t.prototype,"tilemapCache",void 0),(0,a._)([(0,r.r)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,a._)([(0,l.Cb)()],t.prototype,"version",void 0),t=(0,a._)([(0,n.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},53184:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(10064),l=i(66978);class r{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var a;const l=null===(a=this.tileInfo)||void 0===a?void 0:a.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,r){await(0,l.Yn)(r);const n=this.getAvailability(e,t,i);if("unavailable"===n)throw new a.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return n}async fetchAvailabilityUpsample(e,t,i,a,r){await(0,l.Yn)(r),a.level=e,a.row=t,a.col=i;const n=this.tileInfo;return n.updateTileInfo(a),this.fetchAvailability(e,t,i,r).catch((e=>{if((0,l.D_)(e))throw e;if(n.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a,r);throw e}))}}},34810:(e,t,i)=>{i.d(t,{y:()=>S});var a,l=i(27366),r=i(76200),n=i(7138),s=i(70116),o=i(10064),h=i(42537),c=i(16054),d=i(27546),u=i(66978),p=i(94172),v=i(99346),m=i(35995),f=i(49861),y=(i(25243),i(63780)),_=(i(93169),i(69912)),b=i(87960),w=i(84652),g=i(18722);class D{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze((0,w.d9)(t));const a=this.location.width,l=this.location.height;let r=!0,n=!0;const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=g.c8?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(a*l/32));let o=0;for(let h=0;h<i.length;h++){const e=h%32;i[h]?(n=!1,s[o]|=1<<e):r=!1,31===e&&++o}n?(this._availability="unavailable",this.byteSize=40):r?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+(0,g.Xw)(s))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%32,l=i>>5,r=this._availability;return l<0||l>r.length?"unknown":r[l]&1<<a?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||r.Z,{row:a,col:l,width:n,height:s}=e,h={query:{f:"json"}};return t=t?{...h,...t}:h,i(function(e){var t;let i;if(null!==(t=e.service.tileServers)&&void 0!==t&&t.length){const t=e.service.tileServers;i="".concat(t&&t.length?t[e.row%t.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}else i="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);const a=e.service.query;return a&&(i="".concat(i,"?").concat(a)),i}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:l,width:n,height:s},valid:!0,data:(0,y.a9)(n*s,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==a||e.location.left!==l||e.location.width!==n||e.location.height!==s))throw new o.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:l,width:n,height:s}});return D.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new D(e))}_validateJSON(e){if(null===e||void 0===e||!e.location)throw new o.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}let S=a=class extends n.Z{constructor(e){super(e),this._pendingTilemapRequests={},this.request=r.Z,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new c.z(2*s.Y.MEGABYTES),this.addHandles([(0,p.YP)((()=>{const{layer:e}=this;return[null===e||void 0===e?void 0:e.parsedUrl,null===e||void 0===e?void 0:e.tileServers,null===e||void 0===e?void 0:e.apiKey,null===e||void 0===e?void 0:e.customParameters]}),(()=>this._initializeTilemapDefinition()),p.nn)])}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,a){var l;if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new o.Z("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));const r=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,i,r);if(n)return Promise.resolve(n);const s=null===(l=a)||void 0===l?void 0:l.signal;return a={...a,signal:null},new Promise(((e,t)=>{(0,u.fu)(s,(()=>t((0,u.zE)())));const i=T(r);let l=this._pendingTilemapRequests[i];if(!l){l=D.fromDefinition(r,a).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,a){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new o.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,a).catch((e=>e)).then((a=>{if(a instanceof D){const l=a.getAvailability(t,i);if("unavailable"===l)throw new o.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return l}if((0,u.D_)(a))throw a;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const r=this.layer.tileInfo;r.updateTileInfo(a);const n=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,u.D_)(e))throw e;if(r.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,r,n){if(!this._prefetchingEnabled||null==e)return;const s="prefetch-".concat(e);if(this.hasHandles(s))return;const o=new AbortController;n.then((()=>o.abort()),(()=>o.abort()));let c=!1;const d=(0,h.kB)((()=>{c||(c=!0,o.abort())}));if(this.addHandles(d,s),await(0,v.MU)(10,o.signal).catch((()=>{})),c||(c=!0,this.removeHandles(s)),(0,u.Hc)(o))return;const p=new b.f(e,t,i,l),m={...r,signal:o.signal},f=this.layer.tileInfo;for(let h=0;a._prefetches.length<a._maxPrefetch&&f.upsampleTile(p);++h){const e=this.fetchAvailability(p.level,p.row,p.col,m);a._prefetches.push(e);const t=()=>{a._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,m.B7)({...t.query,...a,token:null!==i&&void 0!==i?i:null===(e=t.query)||void 0===e?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=T(a);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};S._maxPrefetch=4,S._prefetches=new d.Z({initialSize:a._maxPrefetch}),(0,l._)([(0,f.Cb)({constructOnly:!0})],S.prototype,"layer",void 0),(0,l._)([(0,f.Cb)({constructOnly:!0})],S.prototype,"minLOD",void 0),(0,l._)([(0,f.Cb)({constructOnly:!0})],S.prototype,"maxLOD",void 0),(0,l._)([(0,f.Cb)({constructOnly:!0})],S.prototype,"request",void 0),(0,l._)([(0,f.Cb)({constructOnly:!0})],S.prototype,"size",void 0),S=a=(0,l._)([(0,_.j)("esri.layers.support.TilemapCache")],S)}}]);
//# sourceMappingURL=6816.c38a5d35.chunk.js.map