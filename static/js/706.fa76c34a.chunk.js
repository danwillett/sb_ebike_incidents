"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[706],{14813:(e,t,i)=>{i.d(t,{Y6:()=>g});var s,r,n=i(88396),o=i(6394),h=i(11186),a=i(71353),l=i(90045),c=i(67077),d=i(585);(r=s||(s={}))[r.Z=0]="Z",r[r.M=1]="M";class u{constructor(e){this.spatialReference=e}createVector(){return this._tag((0,o.a)())}pointToVector(e){return this._tag((0,o.f)(e.x,e.y))}arrayToVector(e){return this._tag((0,o.f)(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return(0,n.l)(s,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return(0,n.d)(e,t)}getZ(e){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0}hasZ(){return!1}getM(e){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0}hasM(){return!1}clone(e){return this._tag((0,o.b)(e))}copy(e,t){return(0,n.j)(t,e)}fromXYZ(e){return this._tag((0,o.f)(e[0],e[1]))}toXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e[0],e[1],0)}pointToXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e.x,e.y,0)}equals(e,t){return(0,n.o)(e,t)}_tag(e){return e}}class p{constructor(e,t){this._valueType=e,this.spatialReference=t}createVector(){return this._tag((0,a.c)())}pointToVector(e){return this._tag((0,a.f)(e.x,e.y,this._valueType===s.Z?e.z:e.m))}arrayToVector(e){return this._tag((0,a.f)(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===s.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=this._valueType===s.Z?e[2]:void 0,t.m=this._valueType===s.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=this._valueType===s.Z?e[2]:void 0,t.m=this._valueType===s.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};const i=this._valueType===s.Z,r=this._valueType===s.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=r?e[2]:void 0,t.hasZ=i,t.hasM=r,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return(0,h.p)(s,e,t,i)}addDelta(e,t,i,r){e[0]+=t,e[1]+=i,this._valueType===s.Z&&(e[2]+=r)}distance(e,t){return this._valueType===s.Z?(0,h.o)(e,t):(0,n.d)(e,t)}getZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this._valueType===s.Z?e[2]:t}hasZ(){return this._valueType===s.Z}getM(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this._valueType===s.M?e[2]:t}hasM(){return this._valueType===s.M}clone(e){return this._tag((0,a.e)(e))}copy(e,t){return(0,h.c)(t,e)}fromXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._tag((0,a.f)(e[0],e[1],this._valueType===s.Z?e.length>2?e[2]:t:i))}toXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e[0],e[1],this._valueType===s.Z?e[2]:0)}pointToXYZ(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(i,e.x,e.y,this._valueType===s.Z&&null!==(t=e.z)&&void 0!==t?t:0)}equals(e,t){return(0,h.G)(e,t)}_tag(e){return e}}class _{constructor(e){this.spatialReference=e}createVector(){return this._tag((0,c.c)())}pointToVector(e){return this._tag((0,c.f)(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag((0,c.f)(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return(0,l.l)(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,e[2]+=s}distance(e,t){return(0,h.o)(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag((0,c.b)(e))}copy(e,t){return(0,l.c)(t,e)}fromXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._tag((0,c.f)(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(t,e[0],e[1],e[2])}pointToXYZ(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.c)();return(0,h.s)(i,e.x,e.y,null!==(t=e.z)&&void 0!==t?t:0)}equals(e,t){return(0,l.e)(e,t)}_tag(e){return e}}function g(e,t,i){return e&&t?new _(i):t?new p(s.M,i):e?new p(s.Z,i):new u(i)}},84954:(e,t,i)=>{i.d(t,{wA:()=>u,kS:()=>d,XE:()=>p,Xz:()=>c});var s=i(63780),r=i(91505),n=i(80885),o=i(29909),h=i(14813),a=i(92975),l=i(50951);class c{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class d{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}}class u{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||function(e,t){if(!t.supported)return;let i=1/0,s=-1/0;const r=t.upperBoundX-t.lowerBoundX;e.forEach((e=>{let n=e.pos[0];for(;n<t.lowerBoundX;)n+=r;for(;n>t.upperBoundX;)n-=r;i=Math.min(i,n),s=Math.max(s,n),e.pos[0]=n}));const n=s-i;r-n<n&&e.forEach((e=>{e.pos[0]<0&&(e.pos[0]+=r)}))}(this.vertices,function(e,t){const i=(0,a.C5)(e);return t===l.JY.Global&&i?{supported:!0,lowerBoundX:i.valid[0],upperBoundX:i.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(0===this.vertices.length)return;const i=this.vertices[0];let s=null,r=e,n=t;do{s=r,s.index=n++,r=s.rightEdge?s.rightEdge.rightVertex:null}while(null!=r&&r!==i);s.leftEdge&&s!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(s),this.vertices.length-1)}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(0===this.vertices.length)return;const t=this.vertices[0];let i=t;do{e(i,i.index),i=null!=i.rightEdge?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)}}class p extends r.Z{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[];let r=i.vertices.find((e=>null==e.leftEdge));const n=r;do{s.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null}while(r&&r!==n);e.push(s)}return new o.Z({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[],r=i.vertices[0];let n=r;const o=n;do{s.push(t(n.pos)),n=null!=n.rightEdge?n.rightEdge.rightVertex:null}while(n&&n!==o);i.isClosed()&&s.push(t(r.pos)),e.push(s)}return new n.Z({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,r=(0,h.Y6)(e.hasZ,e.hasM,i),n=new p(e.type,r);switch(e.type){case"polygon":{const o=e.rings;for(let e=0;e<o.length;++e){const h=o[e],a=new u(i,t);a.index=e;const l=h.length>2&&(0,s.fS)(h[0],h[h.length-1]),p=l?h.length-1:h.length;for(let e=0;e<p;++e){const t=r.arrayToVector(h[e]),i=new c(a);a.vertices.push(i),i.pos=t,i.index=e}const _=a.vertices.length-1;for(let e=0;e<_;++e){const t=a.vertices[e],i=a.vertices[e+1],s=new d(a,t,i);a.edges.push(s)}if(l){const e=new d(a,a.vertices[a.vertices.length-1],a.vertices[0]);a.edges.push(e)}n.components.push(a)}break}case"polyline":{const s=e.paths;for(let e=0;e<s.length;++e){const o=s[e],h=new u(i,t);h.index=e;const a=o.length;for(let e=0;e<a;++e){const t=r.arrayToVector(o[e]),i=new c(h);h.vertices.push(i),i.pos=t,i.index=e}const l=h.vertices.length-1;for(let e=0;e<l;++e){const t=h.vertices[e],i=h.vertices[e+1],s=new d(h,t,i);h.edges.push(s)}n.components.push(h)}break}case"point":{const s=new u(i,t);s.index=0;const o=new c(s);o.index=0,o.pos=r.pointToVector(e),s.vertices.push(o),n.components.push(s);break}}return n}}},87268:(e,t,i)=>{i.d(t,{c:()=>x});var s=i(91505),r=i(42537),n=i(84954),o=i(153);class h{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let e="redo";null==this._addedVertex&&(e="apply",this._addedVertex=new n.Xz(this._component));const t=this._component.getLastVertex();if(null==t)this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0;else{let e=null;t.rightEdge&&(this._originalEdge=t.rightEdge,e=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,null==this._left&&(this._left=new n.kS(this._component,t,this._addedVertex)),this._component.edges.push(this._left),t.rightEdge=this._left,null!=this._originalEdge&&null!=e&&(null==this._right&&(this._right=new n.kS(this._component,this._addedVertex,e)),this._component.edges.push(this._right),e.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,t.index+1)}this._editGeometry.notifyChanges({operation:e,addedVertices:[this._addedVertex]})}undo(){null!=this._addedVertex&&(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),null!=this._left&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),null!=this._right&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),null!=this._originalEdge&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),null!=this._left?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}}var a=i(34778);class l{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo";if(null==this.removedVertices){const t=this.removedVertices=[];this._vertices.forEach((e=>{const i=this._removeVertex(e);null!=i&&t.push(i)})),e="apply"}else this.removedVertices.forEach((e=>{this._removeVertex(e.removedVertex)}));this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){var e;null!==(e=this.removedVertices)&&void 0!==e&&e.forEach((e=>{this._undoRemoveVertex(e)})),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this._minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),s&&(t.edges.splice(t.edges.indexOf(s),1),s.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),0===e.index&&r&&this._vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),s&&r&&(i.createdEdge=new n.kS(t,s.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,s=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),s&&(i.edges.push(s),s.leftVertex.rightEdge=s),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}}class c{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let e="redo";const t=this._edge,i=t.component,s=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),null==this.createdVertex&&(e="apply",this.createdVertex=new n.Xz(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),null==this._left&&(this._left=new n.kS(i,s,this.createdVertex)),this._left.leftVertex.leftEdge?i.edges.push(this._left):i.edges.unshift(this._left),s.rightEdge=this._left,null==this._right&&(this._right=new n.kS(i,this.createdVertex,r)),i.edges.push(this._right),r.leftEdge=this._right,i.updateVertexIndex(this.createdVertex,s.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(null==this.createdVertex||null==this._left||null==this._right)return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,r=null===i||void 0===i?void 0:i.leftVertex,n=null===s||void 0===s?void 0:s.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),r&&(r.rightEdge=e),n&&(n.leftEdge=e),r&&t.updateVertexIndex(r,r.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}class d{constructor(e,t,i){this._editGeometry=e,this._vertex=t,this._pos=i}apply(){const e=null==this._originalPosition;e&&(this._originalPosition=this._vertex.pos),this._apply(e?"apply":"redo")}undo(){this._vertex.pos=this._originalPosition,this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof d&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(e){this._vertex.pos=this._pos,this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:e,updatedVertices:[this._vertex]})}}var u=i(63780);class p{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo";if(null==this._createdEdge){e="apply";const t=this._component.getFirstVertex(),i=this._component.getLastVertex();if(this._component.isClosed()||this._component.vertices.length<3||null==t||null==i)return;this._createdEdge=new n.kS(this._component,i,t)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){null!=this._createdEdge&&((0,u.Od)(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}var _=i(254),g=i(3711),f=i(12225),v=i(29014);class m{constructor(){this._operations=[],this._closed=!1}close(){this._closed=!0}apply(){for(const e of this._operations)e.apply()}undo(){for(let e=this._operations.length-1;e>=0;e--)this._operations[e].undo()}accumulate(e){if(this._closed)return!1;const t=this._operations.length?this._operations[this._operations.length-1]:null;return t&&t.accumulate(e)||(this._operations.push(e),e.apply()),!0}}class x extends s.Z{constructor(e){super(),this.data=e,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",(e=>{e.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})}))}destroy(){this._listener.remove()}splitEdge(e,t){return this._apply(new c(this.data,e,t))}updateVertices(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.O.ACCUMULATE_STEPS;return this._apply(new a.y(this.data,e,t),i)}moveVertices(e,t,i,s){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.O.ACCUMULATE_STEPS;return this.updateVertices(e,new _.z(this.data.coordinateHelper,t,i,s),r)}scaleVertices(e,t,i,s,r){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o.O.ACCUMULATE_STEPS,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:a.w.CUMULATIVE;return this.updateVertices(e,new v.q(t,i,s,r,h),n)}rotateVertices(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.O.ACCUMULATE_STEPS,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a.w.CUMULATIVE;return this.updateVertices(e,new f.S(t,i,r),s)}removeVertices(e){return this._apply(new l(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return 0===this.data.components.length?null:this._apply(new h(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new d(this.data,e,t))}offsetEdge(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.O.ACCUMULATE_STEPS;return this.updateVertices([t.leftVertex,t.rightVertex],new g.A(this.data.coordinateHelper,e,t,i),s)}closeComponent(e){return this.data.components.includes(e)?this._apply(new p(this.data,e)):null}canRemoveVertex(e){return e.vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new m;return this._apply(e),(0,r.kB)((()=>e.close()))}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();return e.undo(),this._redoStack.push(e),e}return null}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();return e.apply(),this._undoStack.push(e),e}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.O.ACCUMULATE_STEPS)!==o.O.NEW_STEP&&null!=this.lastOperation&&this.lastOperation.accumulate(e)||(e.apply(),this._undoStack.push(e),this._redoStack=[]),e}static fromGeometry(e,t){return new x(n.XE.fromGeometry(e,t))}}},153:(e,t,i)=>{var s;i.d(t,{O:()=>s}),function(e){e[e.NEW_STEP=0]="NEW_STEP",e[e.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"}(s||(s={}))},254:(e,t,i)=>{i.d(t,{z:()=>s});class s{constructor(e,t,i,s){this._helper=e,this.dx=t,this.dy=i,this.dz=s}_move(e,t,i,s){this._helper.addDelta(e.pos,t,i,s)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof s}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}},3711:(e,t,i)=>{i.d(t,{A:()=>d,v:()=>_});var s=i(16889),r=i(88396),n=i(6394),o=i(11186),h=i(71353),a=i(55652),l=i(40927),c=i(94163);class d{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.IMMEDIATE;this._helper=e,this._planeType=t,this._edge=i,this.distance=s,this._plane=(0,a.Ue)(),this._offsetPlane=(0,a.Ue)(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,r===g.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var e,t;const i=this._toXYZ(this._edge.leftVertex.pos),s=this._toXYZ(null===(e=this._edge.leftVertex.leftEdge)||void 0===e||null===(e=e.leftVertex)||void 0===e?void 0:e.pos),r=this._toXYZ(this._edge.rightVertex.pos),n=this._toXYZ(null===(t=this._edge.rightVertex.rightEdge)||void 0===t||null===(t=t.rightVertex)||void 0===t?void 0:t.pos);this._edgeDirection=(0,o.C)((0,h.c)(),i,r),this._left=this._computeNeighbor(i,s,this._edgeDirection),this._right=this._computeNeighbor(r,n,this._edgeDirection)}_toXYZ(e){return null!=e?this._helper.toXYZ(e):null}_pointToXYZ(e){return this._toXYZ(this._helper.pointToVector(e))}_computeNeighbor(e,t,i){if(null==t)return{start:e,end:t,direction:(0,h.f)(-i[1],i[0],0),isOriginalDirection:!0};const s=(0,o.C)((0,h.c)(),e,t),r=!this._passesBisectingAngleThreshold(s,i);return{start:e,end:t,direction:r?this._bisectVectorsPerpendicular(i,s):s,isOriginalDirection:!r}}_passesBisectingAngleThreshold(e,t){const i=Math.abs((0,l.EU)(t,e));return i>=u&&i<=Math.PI-u}_bisectVectorsPerpendicular(e,t){const i=(0,o.j)(e,t)<0?e:(0,o.E)((0,h.c)(),e),s=Math.abs((0,o.j)(i,t));if(!(s<p||s>1-p))return this._bisectDirection(i,t);const r=(0,o.b)((0,h.c)(),i,[0,0,1]);return(0,o.n)(r,r)}_bisectDirection(e,t){const i=(0,o.g)((0,h.c)(),e,t);return(0,o.n)(i,i)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);(0,o.j)(e,t)<0&&(0,o.E)(t,t),(0,a.Yq)(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=(0,o.b)((0,h.c)(),e.direction,this._edgeDirection);(0,o.n)(t,t);const i=(0,o.b)((0,h.c)(),this._edgeDirection,t);return this._planeType===_.XY&&(i[2]=0),(0,o.n)(i,i)}_initializeDistanceConstraints(){null==this._left.end||this.requiresSplitEdgeLeft||this._updateDistanceConstraint((0,a.jH)(this._plane,this._left.end)),null==this._right.end||this.requiresSplitEdgeRight||this._updateDistanceConstraint((0,a.jH)(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=(0,a.mJ)(e),i=this._edgeDirection,s=(0,o.g)((0,h.c)(),this._left.start,this._left.direction),l=(0,o.g)((0,h.c)(),this._right.start,this._right.direction),d=this._pointInBasis2D((0,n.a)(),t,i,this._left.start),u=this._pointInBasis2D((0,n.a)(),t,i,s),p=this._pointInBasis2D((0,n.a)(),t,i,this._right.start),_=this._pointInBasis2D((0,n.a)(),t,i,l),[g]=(0,c.dU)({start:u,end:d,type:c.SP.LINE},{start:_,end:p,type:c.SP.LINE});if(!g)return;const f=(0,r.c)((0,n.a)(),d,u);(0,r.e)(f,f);const v=(0,r.c)((0,n.a)(),g,u),m=(0,r.g)(f,v),x=(0,o.g)((0,h.c)(),s,(0,o.i)((0,h.c)(),this._left.direction,-m)),y=(0,a.jH)(e,x);this._updateDistanceConstraint(y)}_pointInBasis2D(e,t,i,s){return e[0]=(0,l.SR)(t,s),e[1]=(0,l.SR)(i,s),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),(0,a.JG)(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;const i=(e,t,i)=>null!=t&&(0,a.fn)(this._offsetPlane,e,(0,o.g)((0,h.c)(),e,t),i),s=(0,h.c)();(e===this._edge.leftVertex?i(this._left.start,this._left.direction,s):i(this._right.start,this._right.direction,s))&&this._helper.copy(this._helper.fromXYZ(s,void 0,this._helper.getM(e.pos)),e.pos)}selectArrowFromStartPoint(e){this._selectedArrow=(0,a.Ac)(this.plane,this._pointToXYZ(e))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(e){return(0,a.jH)(this.plane,this._pointToXYZ(e))}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof d&&this._edge.leftVertex.index===e._edge.leftVertex.index&&this._edge.rightVertex.index===e._edge.rightVertex.index&&this._edge.component===e._edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&(0,o.G)((0,a.mJ)(this._plane),(0,a.mJ)(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3];this.distance=t+this._plane[3]}clone(){const e=new d(this._helper,this._planeType,this._edge,this.distance,g.DEFERRED);return(0,a.JG)(e._plane,this._plane),(0,a.JG)(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=(0,o.c)((0,h.c)(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return null==e&&null==t||null!=e&&null!=t&&(0,o.G)(e,t)}_cloneNeighbor(e){let{start:t,end:i,direction:s,isOriginalDirection:r}=e;return{start:(0,o.c)((0,h.c)(),t),end:null!=i?(0,o.c)((0,h.c)(),i):null,direction:(0,o.c)((0,h.c)(),s),isOriginalDirection:r}}}const u=(0,s.Vl)(15),p=.001;var _,g,f;(f=_||(_={}))[f.XYZ=0]="XYZ",f[f.XY=1]="XY",function(e){e[e.IMMEDIATE=0]="IMMEDIATE",e[e.DEFERRED=1]="DEFERRED"}(g||(g={}))},12225:(e,t,i)=>{i.d(t,{S:()=>o});var s=i(63780),r=i(88396),n=i(34778);class o{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.w.CUMULATIVE;this.origin=e,this.angle=t,this._accumulationType=i}_rotate(e,t){(0,r.r)(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof o&&(0,s.fS)(this.origin,e.origin)}accumulate(e,t){const i=t._accumulationType===n.w.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e._accumulationType===n.w.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}},29014:(e,t,i)=>{i.d(t,{q:()=>h});var s=i(63780),r=i(6394),n=i(88396),o=i(34778);class h{constructor(e,t,i,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.w.CUMULATIVE;this.origin=e,this.axis1=t,this.factor1=i,this.factor2=s,this._accumulationType=n,this.axis2=(0,r.f)(t[1],-t[0])}_scale(e,t,i){(0,n.u)(e.pos,e.pos,this.origin,this.axis1,t),(0,n.u)(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof h&&(0,s.fS)(this.origin,e.origin)&&(0,s.fS)(this.axis1,e.axis1)}accumulate(e,t){t._accumulationType===o.w.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e._accumulationType===o.w.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}},34778:(e,t,i)=>{i.d(t,{w:()=>r,y:()=>s});class s{constructor(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}apply(){this._vertices.forEach((e=>this.operation.apply(e))),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})}undo(){this._vertices.forEach((e=>this.operation.undo(e))),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0}canAccumulate(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1;for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof s&&this.canAccumulate(e))&&(this._vertices.forEach((t=>this.operation.accumulate(t,e.operation))),this.operation.accumulateParams(e.operation),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)}}var r;!function(e){e[e.CUMULATIVE=0]="CUMULATIVE",e[e.REPLACE=1]="REPLACE"}(r||(r={}))},34019:(e,t,i)=>{i.d(t,{N:()=>s});class s{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.feature=e.feature,this.visualizer=e.visualizer,this.selfSnappingZ=e.selfSnappingZ}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}},38561:(e,t,i)=>{i.d(t,{a:()=>l});var s=i(42537),r=i(90609),n=i(53397),o=i(5916),h=i(61309),a=i(41216);class l{draw(e,t){const i=this._getUniqueHints(e),l=this.sortUniqueHints(i),c=[];for(const s of l)s instanceof r.w&&c.push(this.visualizeIntersectionPoint(s,t)),s instanceof n.w&&c.push(this.visualizeLine(s,t)),s instanceof o.L&&c.push(this.visualizeParallelSign(s,t)),s instanceof a.y&&c.push(this.visualizeRightAngleQuad(s,t)),s instanceof h.n&&c.push(this.visualizePoint(s,t));return(0,s.AL)(c)}sortUniqueHints(e){return e}_getUniqueHints(e){const t=[];for(const i of e){let e=!0;for(const s of t)if(i.equals(s)){e=!1;break}e&&t.push(i)}return t}}},61309:(e,t,i)=>{i.d(t,{n:()=>n});var s=i(11186),r=i(55054);class n extends r.r{constructor(e,t,i){super(t,i),this.point=e}equals(e){return e instanceof n&&(0,s.h)(this.point,e.point)}}},64357:(e,t,i)=>{i.d(t,{f:()=>D,k:()=>P});var s=i(47898),r=i(68860),n=i(79347),o=i(11186),h=i(71353),a=i(5986),l=i(55652),c=i(74702),d=i(25003);function u(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.hasZ;const n=(0,d.m)(e.spatialReference),u=(0,r.oq)(n);if(null==u)return null;const f=(e,t)=>!(t.length<2)&&((0,o.s)(e,t[0],t[1],i&&t[2]||0),!0);let v=0;for(const s of e.rings){const i=s.length;if(i<3)continue;const{positionsWorldCoords:r}=t;for(;r.length<i;)r.push((0,h.c)());const d=p,u=(0,o.s)(_,0,0,0),m=1/i;for(let t=0;t<i;t++){if(!f(d,s[t]))return null;if(!(0,a.S)(d,e.spatialReference,r[t],n))return null;(0,o.q)(u,u,r[t],m)}const x=(0,l.zk)(r[0],r[1],u,(0,l.re)());if(0===(0,o.m)((0,l.mJ)(x)))continue;for(let e=0;e<i;e++)(0,l.tx)(x,u,r[e],r[e]);const y=g(r);for(let e=0;e<y.length;e+=3)v+=(0,c.wu)(r[y[e]],r[y[e+1]],r[y[e+2]])}return(0,s.ne)(v,u)}const p=(0,h.c)(),_=(0,h.c)();function g(e){return(0,n.e)(function(e){const t=new Float64Array(2*e.length);for(let i=0;i<e.length;++i){const s=e[i],r=2*i;t[r]=s[0],t[r+1]=s[1]}return t}(e),[],2)}i(59486);var f=i(2170),v=i(96334);const m=(0,h.c)();var x=i(15559),y=i(47072),V=i(78952);function E(e){const{spatialReference:t}=e;return(0,y.T)(t,T,w,Z,e)}function T(e){return(0,s.ne)(Math.abs((0,x.p8)([e],"square-meters")[0]),"square-meters")}function w(e){try{return(0,s.ne)(Math.abs((0,f.geodesicArea)(e,"square-meters")),"square-meters")}catch(P){return null}}function Z(e){const t=[];return function(e,t){let{hasZ:i,spatialReference:s,rings:r}=e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const h=(0,v.zl)(s);if(null==h)return!1;const a=i?e=>e:e=>(0,o.s)(m,e[0],e[1],n);for(const o of r){const e=[];for(const t of o){const i=[0,0,n];h(a(t),0,i,0),e.push(i)}t.push(e)}return!0}(e,t)?(0,s.ne)(Math.abs((0,x.p8)([{type:"polygon",rings:t,spatialReference:V.Z.WGS84}],"square-meters")[0]),"square-meters"):null}function P(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{positionsWorldCoords:[]};if("on-the-ground"===t){const t=E(e);return null!=t?t:function(e){return u(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]},!1)}(e,i)}return function(e){return u(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]})}(e,i)}function D(e){return P(e,"on-the-ground",arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]})}}}]);
//# sourceMappingURL=706.fa76c34a.chunk.js.map