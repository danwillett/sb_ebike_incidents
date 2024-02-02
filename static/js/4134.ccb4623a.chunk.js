"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[4134],{82218:(e,t,i)=>{i.d(t,{a:()=>y,c:()=>b,g:()=>I,h:()=>P,u:()=>m});i(93169);var n=i(32718),r=i(16889),s=i(21530),o=i(14226),a=i(81949),l=i(11186),d=i(71353),u=i(14320),c=i(85981),h=i(55652),p=i(40885),g=i(40927),v=i(51378);const f=n.Z.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");const _=class{constructor(){this.plane=(0,h.Ue)(),this.origin=(0,d.c)(),this.basis1=(0,d.c)(),this.basis2=(0,d.c)()}};function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return{plane:(0,h.Ue)(e.plane),origin:(0,d.g)(e.origin),basis1:(0,d.g)(e.basis1),basis2:(0,d.g)(e.basis2)}}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y();return w(e.origin,e.basis1,e.basis2,t)}function w(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y();return(0,l.c)(n.origin,e),(0,l.c)(n.basis1,t),(0,l.c)(n.basis2,i),m(n),function(e,t){Math.abs((0,l.j)(e.basis1,e.basis2)/((0,l.l)(e.basis1)*(0,l.l)(e.basis2)))>1e-6&&f.warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,l.j)(e.basis1,F(e)))>1e-6&&f.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,l.j)(F(e),e.origin)-e.plane[3])>1e-6&&f.warn(t,"Plane offset is not consistent with plane origin")}(n,"fromValues()"),n}function m(e){(0,h.my)(e.basis2,e.basis1,e.origin,e.plane)}function S(e,t,i){e!==i&&b(e,i);const n=(0,l.i)(v.WM.get(),F(e),t);return(0,l.g)(i.origin,i.origin,n),i.plane[3]-=t,i}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y();const i=(e[2]-e[0])/2,n=(e[3]-e[1])/2;return(0,l.s)(t.origin,e[0]+i,e[1]+n,0),(0,l.s)(t.basis1,i,0,0),(0,l.s)(t.basis2,0,n,0),(0,h.al)(0,0,1,0,t.plane),t}function C(e,t,i){return!!(0,h.BR)(e.plane,t,i)&&R(e,i)}function k(e,t,i){const n=Z.get();j(e,t,n,Z.get());let s=Number.POSITIVE_INFINITY;for(const o of V){const a=W(e,o,x.get()),d=v.WM.get();if((0,h.rx)(n,a,d)){const e=(0,l.C)(v.WM.get(),t.origin,d),n=Math.abs((0,r.ZF)((0,l.j)(t.direction,e)));n<s&&(s=n,(0,l.c)(i,d))}}return s===Number.POSITIVE_INFINITY?O(e,t,i):i}function O(e,t,i){if(C(e,t,i))return i;const n=Z.get(),r=Z.get();j(e,t,n,r);let s=Number.POSITIVE_INFINITY;for(const o of V){const a=W(e,o,x.get()),d=v.WM.get();if((0,h.dZ)(n,a,d)){const e=(0,p.Jk)(t,d);if(!(0,h.Ac)(r,d))continue;e<s&&(s=e,(0,l.c)(i,d))}}return E(e,t.origin)<s&&H(e,t.origin,i),i}function H(e,t,i){const n=(0,h.nF)(e.plane,t,v.WM.get()),r=(0,c.ct)(N(e,e.basis1),n,-1,1,v.WM.get()),s=(0,c.ct)(N(e,e.basis2),n,-1,1,v.WM.get());return(0,l.f)(i,(0,l.g)(v.WM.get(),r,s),e.origin),i}function M(e,t,i){const{origin:n,basis1:r,basis2:s}=e,o=(0,l.f)(v.WM.get(),t,n),a=(0,g.SR)(r,o),d=(0,g.SR)(s,o),u=(0,g.SR)(F(e),o);return(0,l.s)(i,a,d,u)}function E(e,t){const i=M(e,t,v.WM.get()),{basis1:n,basis2:r}=e,s=(0,l.l)(n),o=(0,l.l)(r),a=Math.max(Math.abs(i[0])-s,0),d=Math.max(Math.abs(i[1])-o,0),u=i[2];return a*a+d*d+u*u}function P(e,t){return Math.sqrt(E(e,t))}function T(e,t){const i=-e.plane[3];return(0,g.SR)(F(e),t)-i}function F(e){return(0,h.mJ)(e.plane)}function R(e,t){const i=(0,l.f)(v.WM.get(),t,e.origin),n=(0,l.m)(e.basis1),r=(0,l.m)(e.basis2),s=(0,l.j)(e.basis1,i),o=(0,l.j)(e.basis2,i);return-s-n<0&&s-n<0&&-o-r<0&&o-r<0}function N(e,t){const i=x.get();return(0,l.c)(i.origin,e.origin),(0,l.c)(i.vector,t),i}function W(e,t,i){const{basis1:n,basis2:r,origin:s}=e,o=(0,l.i)(v.WM.get(),n,t.origin[0]),a=(0,l.i)(v.WM.get(),r,t.origin[1]);(0,l.g)(i.origin,o,a),(0,l.g)(i.origin,i.origin,s);const d=(0,l.i)(v.WM.get(),n,t.direction[0]),u=(0,l.i)(v.WM.get(),r,t.direction[1]);return(0,l.i)(i.vector,(0,l.g)(d,d,u),2),i}function j(e,t,i,n){const r=F(e);(0,h.my)(r,t.direction,t.origin,i),(0,h.my)((0,h.mJ)(i),r,t.origin,n)}const A={plane:(0,h.Ue)(),origin:(0,d.f)(0,0,0),basis1:(0,d.f)(1,0,0),basis2:(0,d.f)(0,1,0)},Z=new s.x(h.Ue),x=new s.x(c.Ue),L=(0,d.c)(),z=new s.x((()=>y())),V=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],U=(0,a.a)(),D=(0,a.a)();Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:_,altitudeAt:T,axisAt:function(e,t,i,n){return function(e,t,i){switch(t){case u.R.X:(0,l.c)(i,e.basis1),(0,l.n)(i,i);break;case u.R.Y:(0,l.c)(i,e.basis2),(0,l.n)(i,i);break;case u.R.Z:(0,l.c)(i,F(e))}return i}(e,i,n)},closestPoint:O,closestPointOnSilhouette:k,copy:b,copyWithoutVerify:function(e,t){(0,l.c)(t.origin,e.origin),(0,l.c)(t.basis1,e.basis1),(0,l.c)(t.basis2,e.basis2),(0,h.JG)(t.plane,e.plane)},create:y,distance:P,distance2:E,distanceToSilhouette:function(e,t){let i=Number.NEGATIVE_INFINITY;for(const n of V){const r=W(e,n,x.get()),s=(0,c.Jk)(r,t);s>i&&(i=s)}return Math.sqrt(i)},elevate:S,equals:function(e,t){return(0,l.h)(e.basis1,t.basis1)&&(0,l.h)(e.basis2,t.basis2)&&(0,l.h)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,h.Ac)(e.plane,t)&&R(e,t)},fromAABoundingRect:I,fromValues:w,intersectRay:C,intersectRayClosestSilhouette:function(e,t,i){if(C(e,t,i))return i;const n=k(e,t,v.WM.get());return(0,l.g)(i,t.origin,(0,l.i)(v.WM.get(),t.direction,(0,l.o)(t.origin,n)/(0,l.l)(t.direction))),i},normal:F,projectPoint:H,projectPointLocal:M,rotate:function(e,t,i,n){return e!==n&&b(e,n),(0,o.c)(D,t,i),(0,l.e)(n.basis1,e.basis1,D),(0,l.e)(n.basis2,e.basis2,D),m(n),n},setAltitudeAt:function(e,t,i,n){const r=T(e,t),s=(0,l.i)(L,F(e),i-r);return(0,l.g)(n,t,s),n},setExtent:function(e,t,i){return I(t,i),S(i,T(e,e.origin),i),i},transform:function(e,t,i){return e!==i&&b(e,i),(0,o.i)(U,t),(0,o.t)(U,U),(0,l.e)(i.basis1,e.basis1,U),(0,l.e)(i.basis2,e.basis2,U),(0,l.e)((0,h.mJ)(i.plane),(0,h.mJ)(e.plane),U),(0,l.e)(i.origin,e.origin,t),(0,h.T5)(i.plane,i.plane,i.origin),i},up:A,updateUnboundedPlane:m,wrap:function(e,t,i){const n=z.get();return n.origin=e,n.basis1=t,n.basis2=i,n.plane=(0,h.re)(0,0,0,0),m(n),n}},Symbol.toStringTag,{value:"Module"}))},97942:(e,t,i)=>{function n(e){let t,i,n=[],r=!1;return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return r&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}(o,n)||(i=e.apply(this,o),t=this,n=o,r=!0),i}}i.d(t,{H:()=>n})},46798:(e,t,i)=>{i.d(t,{q:()=>l});var n=i(63780),r=i(42537),s=i(32718),o=i(66978),a=i(70431);class l{constructor(e,t,i,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,a.bA)(e,{...r,schedule:n}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,r.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>s.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,r.kB)((()=>{i.removed=!0,(0,n.Od)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const n=this._transferLists[e],r=n?n(t):[];return this._thread.invoke(e,t,{transferList:r,signal:i})}return this._promise?this._promise.then((()=>((0,o.k_)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},85981:(e,t,i)=>{i.d(t,{AR:()=>_,Gr:()=>f,JG:()=>d,Jk:()=>h,KU:()=>g,Ue:()=>l,al:()=>u,ct:()=>v,nF:()=>p,zk:()=>c});var n=i(16889),r=i(21530),s=i(11186),o=i(71353),a=i(51378);function l(e){return e?{origin:(0,o.g)(e.origin),vector:(0,o.g)(e.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l();return u(e.origin,e.vector,t)}function u(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,s.c)(i.origin,e),(0,s.c)(i.vector,t),i}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,s.c)(i.origin,e),(0,s.f)(i.vector,t,e),i}function h(e,t){const i=(0,s.f)(a.WM.get(),t,e.origin),r=(0,s.j)(e.vector,i),o=(0,s.j)(e.vector,e.vector),l=(0,n.uZ)(r/o,0,1),d=(0,s.f)(a.WM.get(),(0,s.i)(a.WM.get(),e.vector,l),i);return(0,s.j)(d,d)}function p(e,t,i){return v(e,t,0,1,i)}function g(e,t,i){return(0,s.g)(i,e.origin,(0,s.i)(i,e.vector,t))}function v(e,t,i,r,o){const{vector:l,origin:d}=e,u=(0,s.f)(a.WM.get(),t,d),c=(0,s.j)(l,u)/(0,s.m)(l);return(0,s.i)(o,l,(0,n.uZ)(c,i,r)),(0,s.g)(o,o,e.origin)}function f(e,t){if(y(e,function(e,t){const i=w.get();return i.origin=e,i.vector=t,i}(t.origin,t.direction),!1,b)){const{tA:t,pB:i,distance2:n}=b;if(t>=0&&t<=1)return n;if(t<0)return(0,s.a)(e.origin,i);if(t>1)return(0,s.a)((0,s.g)(a.WM.get(),e.origin,e.vector),i)}return null}function _(e,t,i){return!!y(e,t,!0,b)&&((0,s.c)(i,b.pA),!0)}function y(e,t,i,r){const o=1e-6,l=e.origin,d=(0,s.g)(a.WM.get(),l,e.vector),u=t.origin,c=(0,s.g)(a.WM.get(),u,t.vector),h=a.WM.get(),p=a.WM.get();if(h[0]=l[0]-u[0],h[1]=l[1]-u[1],h[2]=l[2]-u[2],p[0]=c[0]-u[0],p[1]=c[1]-u[1],p[2]=c[2]-u[2],Math.abs(p[0])<o&&Math.abs(p[1])<o&&Math.abs(p[2])<o)return!1;const g=a.WM.get();if(g[0]=d[0]-l[0],g[1]=d[1]-l[1],g[2]=d[2]-l[2],Math.abs(g[0])<o&&Math.abs(g[1])<o&&Math.abs(g[2])<o)return!1;const v=h[0]*p[0]+h[1]*p[1]+h[2]*p[2],f=p[0]*g[0]+p[1]*g[1]+p[2]*g[2],_=h[0]*g[0]+h[1]*g[1]+h[2]*g[2],y=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],b=(g[0]*g[0]+g[1]*g[1]+g[2]*g[2])*y-f*f;if(Math.abs(b)<o)return!1;let w=(v*f-_*y)/b,m=(v+f*w)/y;i&&(w=(0,n.uZ)(w,0,1),m=(0,n.uZ)(m,0,1));const S=a.WM.get(),I=a.WM.get();return S[0]=l[0]+w*g[0],S[1]=l[1]+w*g[1],S[2]=l[2]+w*g[2],I[0]=u[0]+m*p[0],I[1]=u[1]+m*p[1],I[2]=u[2]+m*p[2],r.tA=w,r.tB=m,r.pA=S,r.pB=I,r.distance2=(0,s.a)(S,I),!0}const b={tA:0,tB:0,pA:(0,o.c)(),pB:(0,o.c)(),distance2:0},w=new r.x((()=>l()))},36700:(e,t,i)=>{i.d(t,{x:()=>o});var n=i(44179),r=i(75691),s=i(61309);class o extends r.a{constructor(e){super({...e,constraint:new n.Hk(e.targetPoint)})}get hints(){return[new s.n(this.targetPoint,this.isDraped,this.domain)]}}},84134:(e,t,i)=>{i.r(t),i.d(t,{FeatureServiceSnappingSource:()=>se});var n=i(27366),r=i(7138),s=i(14921),o=i(42537),a=i(97942),l=i(66978),d=i(94172),u=i(49861),c=(i(25243),i(63780)),h=(i(93169),i(69912)),p=i(46634),g=i(37933),v=i(74509),f=i(87960),_=i(11186),y=i(67077),b=i(82218);function w(e,t){return(0,b.g)(t.extent,m),(0,b.h)(m,(0,_.s)(S,e.x,e.y,0))}const m=(0,b.a)(),S=(0,y.c)();var I=i(69787);let C=class extends r.Z{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>w(t,e)-w(t,i))),e}_scaleEnabled(){return(0,I.rs)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,n=[];for(const{row:r,colFrom:s,colTo:o}of e)for(let e=s;e<=o;e++){const s=t.normalizeCol(e),o=new f.f(null,i,r,s);this.tileInfo.updateTileInfo(o),n.push(o)}return n}get tileInfo(){var e,t;return null!==(e=null===(t=this.view.featuresTilingScheme)||void 0===t?void 0:t.tileInfo)&&void 0!==e?e:null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,d.YP)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.state)||void 0===e?void 0:e.viewpoint}),(()=>this.notifyChange("tilesCoveringView")),d.Z_))}};(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tiles",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"_scaleEnabled",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tilesCoveringView",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tileInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tileSize",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],C.prototype,"view",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],C.prototype,"layer",void 0),(0,n._)([(0,u.Cb)()],C.prototype,"pointOfInterest",void 0),C=(0,n._)([(0,h.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],C);var k,O=i(65156);!function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.VISIBLE_WHEN_EXTENDED=1]="VISIBLE_WHEN_EXTENDED",e[e.VISIBLE_ON_SURFACE=2]="VISIBLE_ON_SURFACE"}(k||(k={}));let H=class extends r.Z{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(null!=t){const i=e.map((e=>w(t,e)));for(let n=1;n<i.length;n++)if(i[n-1]>i[n])return e.sort(((e,i)=>w(t,e)-w(t,i))),e.slice()}return e}get tilesCoveringView(){var e;return this._filterTiles(null===(e=this.view.featureTiles)||void 0===e||null===(e=e.tiles)||void 0===e?void 0:e.toArray()).map(M)}get tileInfo(){var e,t;return null!==(e=null===(t=this.view.featureTiles)||void 0===t?void 0:t.tilingScheme.toTileInfo())&&void 0!==e?e:null}get tileSize(){var e,t;return null!==(e=null===(t=this.view.featureTiles)||void 0===t?void 0:t.tileSize)&&void 0!==e?e:256}get _effectivePointOfInterest(){var e;const t=this.pointOfInterest;return null!=t?t:null===(e=this.view.pointsOfInterest)||void 0===e?void 0:e.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,d.YP)((()=>this.view.featureTiles),(e=>{this.removeHandles(P),e&&this.addHandles(e.addClient(),P)}),d.nn))}_filterTiles(e){return null==e?[]:e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>E&&e.measures.visibility===k.VISIBLE_ON_SURFACE))}};function M(e){let{lij:[t,i,n],extent:r}=e;return new f.f("".concat(t,"/").concat(i,"/").concat(n),t,i,n,r)}(0,n._)([(0,u.Cb)({readOnly:!0})],H.prototype,"tiles",null),(0,n._)([(0,u.Cb)({readOnly:!0})],H.prototype,"tilesCoveringView",null),(0,n._)([(0,u.Cb)({readOnly:!0})],H.prototype,"tileInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],H.prototype,"tileSize",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],H.prototype,"view",void 0),(0,n._)([(0,u.Cb)()],H.prototype,"pointOfInterest",void 0),(0,n._)([(0,u.Cb)()],H.prototype,"_effectivePointOfInterest",null),H=(0,n._)([(0,h.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],H);const E=50,P="feature-tiles";var T=i(64674),F=i(52824),R=i(80885),N=i(51995),W=i(52639),j=(i(51508),i(40281)),A=i(16889),Z=i(62554),x=i(61459),L=i(58009),z=i(87037),V=i(61054),U=i(98351),D=i(21897);const J=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let B=class extends r.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=J.map((e=>new x.default({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,i=new Set((this._labels.size,this._labels.keys()));e.forEach(((n,r)=>{const s=n.lij.toString();i.delete(s);const o=n.lij[0],a=n.geometry;if(this.enablePolygons&&!this._polygons.has(s)){const e=new W.Z({geometry:a,symbol:this._symbols[o%this._symbols.length]});this._polygons.set(s,e),t.push(e)}if(this.enableLabels){const i=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),t})(n),o=r/(e.length-1),l=(0,A.t7)(0,200,o),d=(0,A.t7)(20,6,o)/.75,u=null!=n.loadPriority&&n.loadPriority>=e.length,c=new N.Z([l,u?0:l,u?0:l]),h="3d"===this.view.type?()=>new Z.Z({verticalOffset:new V.Z({screenLength:40/.75}),callout:new U.Z({color:new N.Z("white"),border:new D.Z({color:new N.Z("black")})}),symbolLayers:new j.Z([new z.Z({text:i,halo:{color:"white",size:1/.75},material:{color:c},size:d})])}):()=>new L.Z({text:i,haloColor:"white",haloSize:1/.75,color:c,size:d}),p=this._labels.get(s);if(p){const e=h();null!=p.symbol&&JSON.stringify(e)===JSON.stringify(p.symbol)||(p.symbol=e)}else{const e=new W.Z({geometry:a.extent.center,symbol:h()});this._labels.set(s,e),t.push(e)}}}));const n=new Array;i.forEach((e=>{const t=this._polygons.get(e);null!=t&&(n.push(t),this._polygons.delete(e));const i=this._labels.get(e);null!=i&&(n.push(i),this._labels.delete(e))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,n._)([(0,u.Cb)({constructOnly:!0})],B.prototype,"view",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],B.prototype,"updating",void 0),(0,n._)([(0,u.Cb)()],B.prototype,"enabled",null),B=(0,n._)([(0,h.j)("esri.views.support.TileTreeDebugger")],B);let G=class extends B{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles((0,o.kB)((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)}));const i=i=>{var n;const r=t.get(i),s=null!==(n=e.get(i))&&void 0!==n?n:"?";return r?"".concat(r,":").concat(s,"\n").concat(i):"store:".concat(s,"\n").concat(i)},n=new Map;return this._debugInfo.storedTiles.forEach((e=>{n.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{n.set(e.data.id,e.data)})),Array.from(n.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:R.Z.fromExtent((0,O.HH)(e.extent,this.view.spatialReference)),label:i(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};(0,n._)([(0,u.Cb)({constructOnly:!0})],G.prototype,"handle",void 0),G=(0,n._)([(0,h.j)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],G);var Y=i(92026),q=i(46798),X=i(27823),K=i(55946);let Q=class extends r.Z{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new p.R,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:i}of e.pointsInFeatures)for(const{z:e}of i)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=(0,l.Ds)((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=(0,Y.IM)(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new $(this.schedule,{alignElevation:async(e,t)=>{let{signal:i}=t;return{result:await this.elevationAlignPointsInFeatures(e.query,i)}},getSymbologyCandidates:async(e,t)=>{let{signal:i}=t;return{result:await this.queryForSymbologySnapping(e,i)}}}),this.addHandles([this._workerHandle.on("notify-updating",(e=>{let{updating:t}=e;return this._workerHandleUpdating=t})),this._workerHandle.on("notify-availability",(e=>{let{availability:t}=e;return this._set("availability",t)}))])}async setup(e,t){var i;const n=this._serviceInfoFromLayer(e.layer);if(null==n)return;const r={configuration:this._convertConfiguration(e.configuration),serviceInfo:n,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:null===(i=e.layer.elevationInfo)||void 0===i?void 0:i.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",r,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this._convertConfiguration(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:n,coordinateHelper:r}=e,s={...e,point:(0,K.T)(i[0],i[1],i[2],r.spatialReference.toJSON()),filter:null===n||void 0===n?void 0:n.toJSON()};return this._workerHandle.invoke(s,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var i,n,r,s,o,a;const d=this._editId++,u={id:d};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",u,t));const h=await this._updatingHandles.addPromise((0,l.Hl)(e.result,t)),p={id:d,edits:{addedFeatures:null!==(i=null===(n=h.addedFeatures)||void 0===n?void 0:n.map((e=>{let{objectId:t}=e;return t})).filter(c.pC))&&void 0!==i?i:[],deletedFeatures:null!==(r=null===(s=h.deletedFeatures)||void 0===s?void 0:s.map((e=>{let{objectId:t,globalId:i}=e;return{objectId:t,globalId:i}})))&&void 0!==r?r:[],updatedFeatures:null!==(o=null===(a=h.updatedFeatures)||void 0===a?void 0:a.map((e=>{let{objectId:t}=e;return t})).filter(c.pC))&&void 0!==o?o:[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",p,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;null!==(t=this._suspendController)&&void 0!==t&&t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}_convertConfiguration(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){var t,i,n;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:null!==(t=null===(i=e.parsedUrl)||void 0===i?void 0:i.path)&&void 0!==t?t:"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:X.M.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null===(n=e.timeInfo)||void 0===n?void 0:n.toJSON()}}};(0,n._)([(0,u.Cb)({constructOnly:!0})],Q.prototype,"schedule",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],Q.prototype,"hasZ",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],Q.prototype,"elevationAlignPointsInFeatures",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],Q.prototype,"queryForSymbologySnapping",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],Q.prototype,"updating",null),(0,n._)([(0,u.Cb)({readOnly:!0})],Q.prototype,"availability",void 0),(0,n._)([(0,u.Cb)()],Q.prototype,"_workerHandleUpdating",void 0),Q=(0,n._)([(0,h.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],Q);class $ extends q.q{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}var ee=i(585),te=i(59068),ie=i(22824);let ne=class extends r.Z{get tiles(){return[new f.f("0/0/0",0,0,0,(0,O.al)(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new ie.Z({origin:new ee.Z({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new te.Z({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};(0,n._)([(0,u.Cb)({readOnly:!0})],ne.prototype,"tiles",null),(0,n._)([(0,u.Cb)({readOnly:!0})],ne.prototype,"tileInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],ne.prototype,"tileSize",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],ne.prototype,"layer",void 0),(0,n._)([(0,u.Cb)()],ne.prototype,"pointOfInterest",void 0),ne=(0,n._)([(0,h.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],ne);var re=i(32609);let se=class extends r.Z{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return null===(e=this.view)||void 0===e?void 0:e.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){var e;return!(!(0,g.e9)(this._layer)||this._layer.sublayers.find((e=>e.visible)))||!!this.view&&(!1!==(null===(e=this._layerView)||void 0===e?void 0:e.suspended)||!this.layerSource.enabled)}get updating(){var e;return(null===(e=this._workerHandle)||void 0===e?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var e,t;const{view:i,_layerView:n,layerSource:r}=this,{layer:s}=r,{fieldsIndex:o,timeInfo:a,floorInfo:l,subtypeField:d}=s,u=n&&"filter"in n?n.filter:null,c=null!==u&&void 0!==u&&u.where&&"1=1"!==u.where?this._getOrLoadWhereFields(u.where,o):[];if(null!==u&&void 0!==u&&u.timeExtent&&a){var h,p,g,v;const{startField:e,endField:t}=a,i=null!==(h=null===(p=o.get(e))||void 0===p?void 0:p.name)&&void 0!==h?h:e,n=null!==(g=null===(v=o.get(t))||void 0===v?void 0:v.name)&&void 0!==g?g:t;i&&c.push(i),n&&c.push(n)}if(null!==i&&void 0!==i&&i.map&&(0,T.n0)(i.map)&&null!==(e=i.map.utilityNetworks)&&void 0!==e&&e.find((e=>e.isUtilityLayer(s)))){var f,_;const e=null===(f=s.fieldsIndex.get("assetGroup"))||void 0===f?void 0:f.name,t=null===(_=s.fieldsIndex.get("assetType"))||void 0===_?void 0:_.name;e&&t&&(c.push(e),c.push(t))}if(s&&null!==l&&void 0!==l&&l.floorField&&null!==i&&void 0!==i&&null!==(t=i.floors)&&void 0!==t&&t.length){var y,b;const e=null!==(y=null===(b=o.get(l.floorField))||void 0===b?void 0:b.name)&&void 0!==y?y:l.floorField;e&&c.push(e)}if(d){var w,m;const e=null!==(w=null===(m=o.get(d))||void 0===m?void 0:m.name)&&void 0!==w?w:d;e&&c.push(e)}return new Set(c)}get configuration(){const{view:e}=this,t=null!=e?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){var e,t;return null!==(e=null===(t=this._workerHandle)||void 0===t?void 0:t.availability)&&void 0!==e?e:0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new p.R,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=(0,a.H)(F.g)}initialize(){let e;const t=this.view;if(null!=t)switch(t.type){case"2d":this._tilesOfInterest=new C({view:t,layer:this._layer}),e=this._workerHandle=new Q;break;case"3d":{var i;const{resourceController:n}=t,r=this._layer;this._tilesOfInterest=new H({view:t}),e=this._workerHandle=new Q({schedule:e=>n.immediate.schedule(e),hasZ:this._layer.hasZ&&(null===(i=this._layer.returnZ)||void 0===i||i),elevationAlignPointsInFeatures:async(e,i)=>{const n=await t.whenLayerView(r);return(0,l.k_)(i),n.elevationAlignPointsInFeatures(e,i)},queryForSymbologySnapping:async(e,i)=>{const n=await t.whenLayerView(r);return(0,l.k_)(i),n.queryForSymbologySnapping(e,i)}}),this.addHandles([t.elevationProvider.on("elevation-change",(t=>{let{context:i}=t;const{elevationInfo:n}=r;(0,v.W_)(i,n)&&(0,l.R8)(e.notifyElevationSourceChange())})),(0,d.YP)((()=>r.elevationInfo),(()=>(0,l.R8)(e.notifyElevationSourceChange())),d.nn),(0,d.YP)((()=>{var e;return null===(e=this._layerView)||void 0===e||null===(e=e.processor)||void 0===e?void 0:e.renderer}),(()=>(0,l.R8)(e.notifySymbologyChange())),d.nn),(0,d.YP)((()=>{var e,t;return null!==(e=null===(t=this._layerView)||void 0===t?void 0:t.symbologySnappingSupported)&&void 0!==e&&e}),(t=>(0,l.R8)(e.setSymbologySnappingSupported(t))),d.nn),(0,d.on)((()=>{var e;return null===(e=this._layerView)||void 0===e?void 0:e.layer}),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}else this._tilesOfInterest=new ne({layer:this._layer}),e=this._workerHandle=new Q;this.addHandles([(0,o.ed)(e)]),(0,l.R8)(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>(0,l.R8)(e.updateTiles(this._updateTilesParameters,null))),d.nn),this.addHandles([(0,d.YP)((()=>this.configuration),(t=>(0,l.R8)(e.configure(t,null))),d.Z_),(0,d.YP)((()=>this._outFields),(t=>(0,l.R8)(e.updateOutFields(t))),d.nn),(0,d.YP)((()=>this._isSuspended),(t=>(0,l.R8)(e.setSuspended(t))),d.tX)]),null!=t&&this.addHandles((0,d.YP)((()=>re.Z.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(i=>{i&&!this._debug?(this._debug=new G({view:t,handle:e}),this.addHandles((0,o.ed)(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")}),d.nn)),this.addHandles(this.layerSource.layer.on("apply-edits",(t=>{(0,l.R8)(e.applyEdits(t,null))})))}destroy(){this._updatingHandles.destroy()}refresh(){var e;null===(e=this._workerHandle)||void 0===e||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:n}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(n);const r=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>(0,F.X)(e,r)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:n}=this;if(!this._loadWhereModuleTask&&!n){const e=(0,s.vr)((async()=>{const e=await i.e(4054).then(i.bind(i,54054));return this._whereModule=e.WhereClause,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!n)return[];try{return n.create(e,t).fieldNames}catch(k){return[]}}};(0,n._)([(0,u.Cb)({constructOnly:!0})],se.prototype,"spatialReference",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],se.prototype,"layerSource",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],se.prototype,"view",void 0),(0,n._)([(0,u.Cb)()],se.prototype,"_tilesOfInterest",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],se.prototype,"_updateTilesParameters",null),(0,n._)([(0,u.Cb)()],se.prototype,"_layerView",null),(0,n._)([(0,u.Cb)()],se.prototype,"_isSuspended",null),(0,n._)([(0,u.Cb)({readOnly:!0})],se.prototype,"updating",null),(0,n._)([(0,u.Cb)()],se.prototype,"_outFields",null),(0,n._)([(0,u.Cb)({readOnly:!0})],se.prototype,"configuration",null),(0,n._)([(0,u.Cb)({readOnly:!0})],se.prototype,"availability",null),(0,n._)([(0,u.Cb)()],se.prototype,"_loadWhereModuleTask",void 0),(0,n._)([(0,u.Cb)()],se.prototype,"_whereModule",void 0),se=(0,n._)([(0,h.j)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],se)},52824:(e,t,i)=>{i.d(t,{X:()=>l,g:()=>d});var n=i(38054),r=i(97760),s=i(95905),o=i(36700);function a(e){let{x:t,y:i,z:r}=e;return(0,n.al)(t,i,null!==r&&void 0!==r?r:0)}function l(e,t){switch(e.type){case"edge":return e.draped?new r.k({edgeStart:a(e.start),edgeEnd:a(e.end),targetPoint:a(e.target),objectId:e.objectId,getGroundElevation:t}):new s.L({edgeStart:a(e.start),edgeEnd:a(e.end),targetPoint:a(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new o.x({targetPoint:a(e.target),objectId:e.objectId,isDraped:!1})}}function d(e,t){return null!=e&&"3d"===e.type?(i,n)=>e.elevationProvider.getElevation(i,n,0,t,"ground"):()=>null}},61309:(e,t,i)=>{i.d(t,{n:()=>s});var n=i(11186),r=i(55054);class s extends r.r{constructor(e,t,i){super(t,i),this.point=e}equals(e){return e instanceof s&&(0,n.h)(this.point,e.point)}}},32609:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(27366),r=i(7138),s=i(49861),o=(i(25243),i(63780),i(93169),i(69912));let a=class extends r.Z{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};(0,n._)([(0,s.Cb)()],a.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),(0,n._)([(0,s.Cb)()],a.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),a=(0,n._)([(0,o.j)("esri.views.support.DebugFlags")],a);const l=new a}}]);
//# sourceMappingURL=4134.ccb4623a.chunk.js.map