"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[1118,2078],{15909:(e,t,r)=>{r.d(t,{D:()=>a});var o=r(80292);function a(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:a}=e;(0,o.l)(t)&&a&&t.originOf(r)!==a&&t.updateOrigin(r,a)}))}},80292:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},81118:(e,t,r)=>{r.d(t,{xp:()=>E,Vt:()=>A});var o=r(27366),a=r(76200),n=r(10064),i=r(32718),s=r(66978),l=r(35995),d=r(49861),u=(r(25243),r(63780),r(93169),r(38511)),c=r(69912),p=r(31201),h=r(15909),v=r(53866),y=r(90724),f=r(78952),m=r(25899),w=r(45948),g=r(30494);let S=null;function I(){return S}var b=r(7575),x=r(98995),_=r(81359),R=r(9634);const O="esri.layers.mixins.SceneService",Z=i.Z.getLogger(O),A=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,s.Ds)((async(e,t,r)=>{switch(e){case E.SAVE:return this._save(t);case E.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return f.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f.Z(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return v.Z.fromJSON(o,r)}const o=t.store,a=this._readSpatialReference(t);return null==a||null==(null===o||void 0===o?void 0:o.extent)||!Array.isArray(o.extent)||o.extent.some((e=>e<N))?null:new v.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){var r;const o=null===(r=this.portalItem)||void 0===r?void 0:r.title;if("item-title"===this.sublayerTitleMode)return(0,m.a7)(this.url,t.name);let a=t.name;if(!a&&this.url){const e=(0,m.Qc)(this.url);null!=e&&(a=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&o&&(a=o+" - "+a),(0,m.ld)(a)}set url(e){const t=(0,m.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:Z});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,m.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.mN)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,g.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,Z,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null===(t=e.rootPage)||void 0===t||null===(t=t.nodes)||void 0===t?void 0:t[o];if(null==(null===a||void 0===a||null===(r=a.obb)||void 0===r?void 0:r.center)||null==a.obb.halfSize)throw new n.Z("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<N||null==this.fullExtent||this.fullExtent.hasZ)return;const i=a.obb.halfSize,s=a.obb.center[2],l=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-l,this.fullExtent.zmax=s+l}else if("node"===(null===e||void 0===e?void 0:e.type)){var o;const t=null===(o=e.rootNode)||void 0===o?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<N)return;const r=t[2],a=t[3],{fullExtent:n}=this;n&&(n.zmin=r-a,n.zmax=r+a)}}async _fetchService(e){if(null==this.url)throw new n.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,a.Z)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var t,r;const o=await(0,a.Z)(null!==(t=null===(r=this.parsedUrl)||void 0===r?void 0:r.path)&&void 0!==t?t:"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});o.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let n=!1;if(o.data.layerType&&"Voxel"===o.data.layerType&&(n=!0),n)return this._fetchVoxelServiceLayer();const i=o.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){var t;const r=(await(0,a.Z)((null===(t=this.parsedUrl)||void 0===t?void 0:t.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:null===(e=this.portalItem)||void 0===e?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===P.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){var r,o;const a={...C,...t};let i=x.default.from(e);if(!i)throw new n.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,_.w)(i),i.id&&(i=i.clone(),i.id=null);const s=i.portal||b.Z.getDefault();await this._ensureLoadBeforeSave(),i.type=j,i.portal=s;const l={origin:"portal-item",url:null,messages:[],portal:s,portalItem:i,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},d={layers:[this.write({},l)]};return await Promise.all(null!==(r=l.resources.pendingOperations)&&void 0!==r?r:[]),await this._validateAgainstJSONSchema(d,l,a),i.url=this.url,i.title||(i.title=this.title),this._updateTypeKeywords(i,a,P.newItem),await s.signIn(),await(null===(o=s.user)||void 0===o?void 0:o.addItem({item:i,folder:null===a||void 0===a?void 0:a.folder,data:d})),await(0,R.Hn)(this.resourceReferences,l,null),this.portalItem=i,(0,h.D)(l),l.portalItem=i,i}async _save(e){var t;const r={...C,...e};if(!this.portalItem)throw new n.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,_.w)(this.portalItem),this.portalItem.type!==j)throw new n.Z("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(j,'"'));await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&(0,l.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||b.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},a={layers:[this.write({},o)]};return await Promise.all(null!==(t=o.resources.pendingOperations)&&void 0!==t?t:[]),await this._validateAgainstJSONSchema(a,o,r),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,P.existingItem),await(0,R.bx)(this.portalItem,a,this.resourceReferences,o,null),(0,h.D)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,r){var o,a,i;let s=null!==(o=null===(a=t.messages)||void 0===a?void 0:a.filter((e=>"error"===e.type)).map((e=>new n.Z(e.name,e.message,e.details))))&&void 0!==o?o:[];(null===r||void 0===r||null===(i=r.validationOptions)||void 0===i?void 0:i.ignoreUnsupported)&&(s=s.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const l=null===r||void 0===r?void 0:r.validationOptions,d=null===l||void 0===l?void 0:l.enabled,u=I();if(d&&u){const t=(await u()).validate(e,r.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n".concat(t.join("\n"));if(Z.error("_validateAgainstJSONSchema(): ".concat(e)),"throw"===l.failPolicy){const e=t.map((e=>new n.Z("sceneservice:schema-validation",e))).concat(s);throw new n.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(s.length>0)throw new n.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}};return(0,o._)([(0,d.Cb)(w.id)],t.prototype,"id",void 0),(0,o._)([(0,d.Cb)({type:f.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,u.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,d.Cb)({type:v.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,u.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,d.Cb)({readOnly:!0,type:y.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,d.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,u.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,d.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,d.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,d.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,u.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,u.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,d.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,d.Cb)(w.HQ)],t.prototype,"url",null),(0,o._)([(0,p.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,d.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,d.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,d.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,c.j)(O)],t),t},N=-1e38;var P,T;(T=P||(P={}))[T.existingItem=0]="existingItem",T[T.newItem=1]="newItem";const j="Scene Service",C={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var E;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(E||(E={}))},30494:(e,t,r)=>{r.d(t,{T:()=>n});var o=r(76200),a=r(10064);async function n(e,t,r,n,i,s){let l=null;if(null!=r){const t="".concat(e,"/nodepages/"),a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.Z)(a,{query:{f:"json",token:n},responseType:"json",signal:s})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(p){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,p),l=p}}if(!t)return null;const d=null===t||void 0===t?void 0:t.split("/").pop(),u="".concat(e,"/nodes/"),c=u+d;try{return{type:"node",rootNode:(await(0,o.Z)(c,{query:{f:"json",token:n},responseType:"json",signal:s})).data,urlPrefix:u}}catch(p){throw new a.Z("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:p,url:c})}}},62078:(e,t,r)=>{r.d(t,{FO:()=>p,W7:()=>h,addOrUpdateResource:()=>s,fetchResources:()=>i,removeAllResources:()=>d,removeResource:()=>l});var o=r(76200),a=r(10064),n=r(35995);async function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,n.v_)(e.itemUrl,"resources"),{start:a=1,num:i=10,sortOrder:s="asc",sortField:l="created"}=t,d={query:{start:a,num:i,sortOrder:s,sortField:l,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(o,d);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:o,resource:a}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(a)}}))}}async function s(e,t,r,o){if(!e.hasPath())throw new a.Z("portal-item-resource-".concat(t,":invalid-path"),"Resource does not have a valid path");const i=e.portalItem;await i.load(o);const s=(0,n.v_)(i.userItemUrl,"add"===t?"addResources":"updateResources"),[l,d]=u(e.path),c=new FormData;return l&&"."!==l&&c.append("resourcesPrefix",l),null!=o&&o.compress&&c.append("compress","true"),c.append("fileName",d),c.append("file",r,d),c.append("f","json"),null!==o&&void 0!==o&&o.access&&c.append("access",o.access),await i.portal.request(s,{method:"post",body:c,signal:null===o||void 0===o?void 0:o.signal}),e}async function l(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function d(e,t){await e.load(t);const r=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function c(e){const[t,r]=function(e){const t=(0,n.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[o,a]=u(t);return[o,a,r]}async function p(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.Z)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=c(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+o))}},81359:(e,t,r)=>{r.d(t,{w:()=>i});var o=r(42265),a=r(10064),n=r(66660);function i(e){if(o.default.apiKey&&(0,n.r)(e.portal.url))throw new a.Z("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}},9634:(e,t,r)=>{r.d(t,{Hn:()=>l,Pl:()=>v,bx:()=>d});var o=r(14921),a=r(10064),n=r(66978),i=r(71907),s=r(62078);async function l(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const o=await u(e,t,r);await c(o,t,r)}async function d(e,t,r,o){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const n=await u(r,o,a);await e.update({data:t}),await c(n,o,a)}async function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null===t||void 0===t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),d=new Set,u=[];l.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const a of t.resources.toUpdate)if(o.delete(a.resource.path),l.has(a.resource.path)||d.has(a.resource.path)){const{resource:t,content:o,finish:n,error:l}=a,d=(0,s.W7)(t,(0,i.DO)());e.paths.push(d.path),u.push(p({resource:d,content:o,compress:a.compress,finish:n,error:l},r))}else e.paths.push(a.resource.path),u.push(h(a,r)),d.add(a.resource.path);for(const a of t.resources.toAdd)e.paths.push(a.resource.path),o.has(a.resource.path)?o.delete(a.resource.path):u.push(p(a,r));if(0===u.length)return o;const c=await(0,n.UO)(u);if((0,n.k_)(r),c.length>0)throw new a.Z("save:resources","Failed to save one or more resources",{errors:c});return o}async function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e||!t.portalItem)return;const o=[];for(const a of e){const e=t.portalItem.resourceFromPath(a);o.push(e.portalItem.removeResource(e,r))}await(0,n.as)(o)}async function p(e,t){var r,a;const n={...null!=t?t:{},compress:e.compress},i=await(0,o.q6)(e.resource.portalItem.addResource(e.resource,await(0,s.FO)(e.content),n));if(!0!==i.ok)throw null!==(r=e.error)&&void 0!==r&&r.call(e,i.error),i.error;null===(a=e.finish)||void 0===a||a.call(e,e.resource)}async function h(e,t){var r,a;const n=await(0,o.q6)(e.resource.update(await(0,s.FO)(e.content),t));if(!0!==n.ok)throw null!==(r=e.error)&&void 0!==r&&r.call(e,n.error),n.error;null===(a=e.finish)||void 0===a||a.call(e,e.resource)}async function v(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}}}]);
//# sourceMappingURL=1118.7b3ed6d9.chunk.js.map