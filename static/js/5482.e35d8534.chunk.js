"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[5482],{8229:(e,t,o)=>{function r(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function l(e,t,o){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=o,r}function i(){return r()}function s(){return l(1,1,1)}function a(){return l(1,0,0)}function u(){return l(0,1,0)}function p(){return l(0,0,1)}o.d(t,{a:()=>n,c:()=>r,f:()=>l});const d=i(),c=s(),f=a(),b=u(),y=p();Object.freeze(Object.defineProperty({__proto__:null,ONES:c,UNIT_X:f,UNIT_Y:b,UNIT_Z:y,ZEROS:d,clone:n,create:r,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:l,ones:s,unitX:a,unitY:u,unitZ:p,zeros:i},Symbol.toStringTag,{value:"Module"}))},21134:(e,t,o)=>{o.d(t,{Z:()=>v});var r,n=o(27366),l=o(84652),i=o(49861),s=o(25243),a=o(27135),u=o(69912),p=o(2632),d=o(87125),c=o(51995),f=o(46784);let b=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,l.d9)(this.color)})}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,n._)([(0,i.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],b.prototype,"minValue",void 0),(0,n._)([(0,i.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],b.prototype,"maxValue",void 0),(0,n._)([(0,i.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],b.prototype,"color",void 0),b=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],b);const y=b;var h;let m=h=class extends p.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,l.d9)(this.colorClassBreakInfos),legendOptions:(0,l.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,n._)([(0,i.Cb)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,n._)([(0,i.Cb)({type:d.I,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,n._)([(0,i.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,n._)([(0,i.Cb)({type:[y],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudClassBreaksRenderer")],m);const v=m},2632:(e,t,o)=>{o.d(t,{Z:()=>S});var r,n=o(27366),l=o(43404),i=o(46784),s=o(84652),a=o(49861),u=(o(25243),o(69912));o(63780),o(93169);let p=r=class extends i.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorModulation")],p);const d=p,c=new l.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let f=class extends i.wq{};(0,n._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],f.prototype,"type",void 0),f=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f);const b=f;var y,h=o(27135);let m=y=class extends b{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,h.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=y=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const v=m;var C;let w=C=class extends b{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new C({scaleFactor:this.scaleFactor})}};(0,n._)([(0,h.J)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=C=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const g={key:"type",base:b,typeMap:{"fixed-size":v,splat:w}},T=(0,l.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let _=class extends i.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.d9)(this.pointSizeAlgorithm),colorModulation:(0,s.d9)(this.colorModulation),pointsPerInch:(0,s.d9)(this.pointsPerInch)}}};(0,n._)([(0,a.Cb)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],_.prototype,"type",void 0),(0,n._)([(0,a.Cb)({types:g,json:{write:!0}})],_.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,a.Cb)({type:d,json:{write:!0}})],_.prototype,"colorModulation",void 0),(0,n._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],_.prototype,"pointsPerInch",void 0),_=(0,n._)([(0,u.j)("esri.renderers.PointCloudRenderer")],_),(_||(_={})).fieldTransformTypeKebabDict=new l.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const S=_},89431:(e,t,o)=>{o.d(t,{Z:()=>f});var r,n=o(27366),l=o(84652),i=o(49861),s=(o(25243),o(27135)),a=o(69912),u=o(2632),p=o(87125),d=o(57203);let c=r=class extends u.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,l.d9)(this.field),fieldTransformType:(0,l.d9)(this.fieldTransformType),stops:(0,l.d9)(this.stops),legendOptions:(0,l.d9)(this.legendOptions)})}};(0,n._)([(0,s.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,n._)([(0,i.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,n._)([(0,i.Cb)({type:p.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,n._)([(0,i.Cb)({type:u.Z.fieldTransformTypeKebabDict.apiValues,json:{type:u.Z.fieldTransformTypeKebabDict.jsonValues,read:u.Z.fieldTransformTypeKebabDict.read,write:u.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,n._)([(0,i.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,n._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],c);const f=c},87005:(e,t,o)=>{o.d(t,{Z:()=>v});var r,n=o(27366),l=o(84652),i=o(49861),s=o(25243),a=o(27135),u=o(69912),p=o(2632),d=o(87125),c=o(51995),f=o(46784);let b=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,l.d9)(this.values),color:(0,l.d9)(this.color)})}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,n._)([(0,i.Cb)({type:[String],json:{write:!0}})],b.prototype,"values",void 0),(0,n._)([(0,i.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],b.prototype,"color",void 0),b=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],b);const y=b;var h;let m=h=class extends p.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:(0,l.d9)(this.field),fieldTransformType:(0,l.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,l.d9)(this.colorUniqueValueInfos),legendOptions:(0,l.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,n._)([(0,i.Cb)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,n._)([(0,i.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,n._)([(0,i.Cb)({type:[y],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,i.Cb)({type:d.I,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudUniqueValueRenderer")],m);const v=m},35482:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var r=o(63780),n=o(18722),l=o(48976),i=o(98131),s=o(11186),a=o(8229),u=o(78952),p=o(50628),d=(o(93169),o(21134)),c=o(89431),f=o(87005),b=o(28278),y=o(2821);function h(e,t,o){return null!==e&&void 0!==e&&e.attributeInfo.useElevation?t?function(e,t){const o=new Float64Array(t);for(let r=0;r<t;r++)o[r]=e[3*r+2];return o}(t,o):null:null!==e&&void 0!==e&&e.attributeInfo.storageInfo?(0,b.qM)(e.attributeInfo.storageInfo,e.buffer,o):null}function m(e,t,o,r,n){const l=e.length/3;let i=0;for(let s=0;s<l;s++){let l=!0;for(let e=0;e<r.length&&l;e++){const{filterJSON:t}=r[e],o=n[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=C(t.requiredSetBits),r=C(t.requiredClearBits);(o&e)===e&&0==(o&r)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&o,r=o>>>4&15,n=r>1,i=1===e,s=e===r;let a=!1;for(const o of t.includedReturns)if("last"===o&&s||"firstOfMany"===o&&i&&n||"lastOfMany"===o&&s&&n||"single"===o&&!n){a=!0;break}a||(l=!1);break}}}l&&(o[i]=s,e[3*i]=e[3*s],e[3*i+1]=e[3*s+1],e[3*i+2]=e[3*s+2],t[3*i]=t[3*s],t[3*i+1]=t[3*s+1],t[3*i+2]=t[3*s+2],i++)}return i}function v(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function C(e){let t=0;for(const o of e||[])t|=1<<o;return t}class w{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&o.push(t.pointIdFilterMap.buffer);for(const r of t.attributes)"buffer"in r.values&&(0,n.eP)(r.values.buffer)&&r.values.buffer!==t.rgb.buffer&&o.push(r.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const o=(0,b.W7)(t,e);if(null==o.vertexAttributes.position)return;const r=(0,b.I_)(t,o.vertexAttributes.position),n=o.header.fields,l=[n.offsetX,n.offsetY,n.offsetZ],i=[n.scaleX,n.scaleY,n.scaleZ],s=r.length/3,a=new Float64Array(3*s);for(let e=0;e<s;e++)a[3*e]=r[3*e]*i[0]+l[0],a[3*e+1]=r[3*e+1]*i[1]+l[1],a[3*e+2]=r[3*e+2]*i[2]+l[2];return a}if("lepcc-xyz"===e.encoding)return(0,y.Gi)(t).result}(e.schema,e.geometryBuffer);let o=t.length/3,n=null;const l=new Array,i=h(e.primaryAttributeData,t,o);null!=e.primaryAttributeData&&i&&l.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});const s=h(e.modulationAttributeData,t,o);null!=e.modulationAttributeData&&s&&l.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let a=function(e,t,o,r){var n;const{rendererJSON:l,isRGBRenderer:i}=e;let s=null,a=null;if(t&&i)s=t;else if(t&&"pointCloudUniqueValueRenderer"===(null===l||void 0===l?void 0:l.type)){a=f.Z.fromJSON(l);const e=a.colorUniqueValueInfos;s=new Uint8Array(3*r);const o=v(a.fieldTransformType);for(let n=0;n<r;n++){const r=(o?o(t[n]):t[n])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(r)){s[3*n]=e[t].color.r,s[3*n+1]=e[t].color.g,s[3*n+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===(null===l||void 0===l?void 0:l.type)){a=c.Z.fromJSON(l);const e=a.stops;s=new Uint8Array(3*r);const o=v(a.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n],l=e.length-1;if(r<e[0].value)s[3*n]=e[0].color.r,s[3*n+1]=e[0].color.g,s[3*n+2]=e[0].color.b;else if(r>=e[l].value)s[3*n]=e[l].color.r,s[3*n+1]=e[l].color.g,s[3*n+2]=e[l].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const o=(r-e[t-1].value)/(e[t].value-e[t-1].value);s[3*n]=e[t].color.r*o+e[t-1].color.r*(1-o),s[3*n+1]=e[t].color.g*o+e[t-1].color.g*(1-o),s[3*n+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===(null===l||void 0===l?void 0:l.type)){a=d.Z.fromJSON(l);const e=a.colorClassBreakInfos;s=new Uint8Array(3*r);const o=v(a.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){s[3*n]=e[t].color.r,s[3*n+1]=e[t].color.g,s[3*n+2]=e[t].color.b;break}}}else s=new Uint8Array(3*r).fill(255);if(o&&null!==(n=a)&&void 0!==n&&n.colorModulation){const e=a.colorModulation.minValue,t=a.colorModulation.maxValue,n=.3;for(let l=0;l<r;l++){const r=o[l],i=r>=t?1:r<=e?n:n+(1-n)*(r-e)/(t-e);s[3*l]=i*s[3*l],s[3*l+1]=i*s[3*l+1],s[3*l+2]=i*s[3*l+2]}}return s}(e.rendererInfo,i,s,o);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const i=e.filterAttributesData.filter(r.pC).map((e=>{const r=h(e,t,o),n={attributeInfo:e.attributeInfo,values:r};return l.push(n),n}));n=new Uint32Array(o),o=m(t,a,n,e.filterInfo,i)}for(const r of e.userAttributesData){const e=h(r,t,o);l.push({attributeInfo:r.attributeInfo,values:e})}3*o<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const p=this._transformCoordinates(t,o,e.obb,u.Z.fromJSON(e.inSR),u.Z.fromJSON(e.outSR));return{obb:e.obb,points:p,rgb:a,attributes:l,pointIdFilterMap:n}}_transformCoordinates(e,t,o,r,n){if(!(0,p.projectBuffer)(e,r,0,e,n,0,t))throw new Error("Can't reproject");const i=(0,a.f)(o.center[0],o.center[1],o.center[2]),u=(0,a.c)(),d=(0,a.c)();(0,l.a)(g,o.quaternion);const c=new Float32Array(3*t);for(let l=0;l<t;l++)u[0]=e[3*l]-i[0],u[1]=e[3*l+1]-i[1],u[2]=e[3*l+2]-i[2],(0,s.v)(d,u,g),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(d[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(d[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(d[2])),c[3*l]=u[0],c[3*l+1]=u[1],c[3*l+2]=u[2];return c}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let r=0;r<t;r++)e[3*r+2]+=o}}const g=(0,i.a)();function T(){return new w}}}]);
//# sourceMappingURL=5482.e35d8534.chunk.js.map