"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[9301],{59301:(t,e,o)=>{o.r(e),o.d(e,{executeAttachmentQuery:()=>c,fetchAttachments:()=>p,processAttachmentQueryResult:()=>l});var n=o(19545),r=o(76200),a=o(35995),i=o(22585),s=o(11812);function d(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function l(t,e){const o={};for(const r of e){const{parentObjectId:e,parentGlobalId:i,attachmentInfos:d}=r;for(const r of d){const{id:d}=r,l=(0,a.qg)((0,n.Dp)("".concat(t.path,"/").concat(e,"/attachments/").concat(d))),c=s.Z.fromJSON(r);c.set({url:l,parentObjectId:e,parentGlobalId:i}),o[e]?o[e].push(c):o[e]=[c]}}return o}function c(t,e,o){let n={query:(0,i.A)({...t.query,f:"json",...d(e)})};return o&&(n={...o,...n,query:{...o.query,...n.query}}),(0,r.Z)(t.path+"/queryAttachments",n).then((t=>t.data.attachmentGroups))}async function p(t,e,o){const{objectIds:n}=e,a=[];for(const i of n)a.push((0,r.Z)(t.path+"/"+i+"/attachments",o));return Promise.all(a).then((t=>n.map(((e,o)=>({parentObjectId:e,attachmentInfos:t[o].data.attachmentInfos})))))}},11812:(t,e,o)=>{o.d(e,{Z:()=>u});var n,r=o(27366),a=o(46784),i=o(49861),s=o(25243),d=(o(63780),o(93169),o(69912));function l(t){const{exifInfo:e,exifName:o,tagName:n}=t;if(!e||!o||!n)return null;const r=e.find((t=>t.name===o));return r?function(t){const{tagName:e,tags:o}=t;if(!o||!e)return null;const n=o.find((t=>t.name===e));return(null===n||void 0===n?void 0:n.value)||null}({tagName:n,tags:r.tags}):null}const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let p=n=class extends a.wq{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=l({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return c[e]||null}clone(){return new n({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,r._)([(0,i.Cb)({type:String})],p.prototype,"contentType",void 0),(0,r._)([(0,i.Cb)()],p.prototype,"exifInfo",void 0),(0,r._)([(0,i.Cb)({readOnly:!0})],p.prototype,"orientationInfo",null),(0,r._)([(0,i.Cb)({type:s.z8})],p.prototype,"id",void 0),(0,r._)([(0,i.Cb)({type:String})],p.prototype,"globalId",void 0),(0,r._)([(0,i.Cb)({type:String})],p.prototype,"keywords",void 0),(0,r._)([(0,i.Cb)({type:String})],p.prototype,"name",void 0),(0,r._)([(0,i.Cb)({json:{read:!1}})],p.prototype,"parentGlobalId",void 0),(0,r._)([(0,i.Cb)({json:{read:!1}})],p.prototype,"parentObjectId",void 0),(0,r._)([(0,i.Cb)({type:s.z8})],p.prototype,"size",void 0),(0,r._)([(0,i.Cb)({json:{read:!1}})],p.prototype,"url",void 0),p=n=(0,r._)([(0,d.j)("esri.layers.support.AttachmentInfo")],p);const u=p}}]);
//# sourceMappingURL=9301.88648359.chunk.js.map