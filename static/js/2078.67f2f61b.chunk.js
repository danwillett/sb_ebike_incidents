"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[2078],{62078:(e,t,r)=>{r.d(t,{FO:()=>p,W7:()=>h,addOrUpdateResource:()=>l,fetchResources:()=>n,removeAllResources:()=>u,removeResource:()=>c});var a=r(76200),o=r(10064),s=r(35995);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const a=(0,s.v_)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:l="asc",sortField:c="created"}=t,u={query:{start:o,num:n,sortOrder:l,sortField:c,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},i=await e.portal.request(a,u);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((t=>{let{created:r,size:a,resource:o}=t;return{created:new Date(r),size:a,resource:e.resourceFromPath(o)}}))}}async function l(e,t,r,a){if(!e.hasPath())throw new o.Z("portal-item-resource-".concat(t,":invalid-path"),"Resource does not have a valid path");const n=e.portalItem;await n.load(a);const l=(0,s.v_)(n.userItemUrl,"add"===t?"addResources":"updateResources"),[c,u]=i(e.path),d=new FormData;return c&&"."!==c&&d.append("resourcesPrefix",c),null!=a&&a.compress&&d.append("compress","true"),d.append("fileName",u),d.append("file",r,u),d.append("f","json"),null!==a&&void 0!==a&&a.access&&d.append("access",a.access),await n.portal.request(l,{method:"post",body:d,signal:null===a||void 0===a?void 0:a.signal}),e}async function c(e,t,r){if(!t.hasPath())throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,s.v_)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,s.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function i(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,s.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[a,o]=i(t);return[a,o,r]}async function p(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,a.Z)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+a))}}}]);
//# sourceMappingURL=2078.67f2f61b.chunk.js.map