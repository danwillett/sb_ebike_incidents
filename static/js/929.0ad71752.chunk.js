"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[929],{21857:(e,t,i)=>{i.d(t,{CS:()=>g,Cw:()=>f,Yu:()=>v,j5:()=>m,lm:()=>w});var n=i(42265),s=i(19545),r=i(44055),a=i(76200),o=i(84652),l=i(35995),u=i(78952),h=i(41414),c=i(376),d=i(9014),p=i(49818);const _={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function f(e){var t;const i=e.folders||[],n=i.slice(),s=new Map,r=new Map,a=new Map,l=new Map,u=new Map,h={esriGeometryPoint:r,esriGeometryPolyline:a,esriGeometryPolygon:l};((null===(t=e.featureCollection)||void 0===t?void 0:t.layers)||[]).forEach((e=>{const t=(0,o.d9)(e);t.featureSet.features=[];const i=e.featureSet.geometryType;s.set(i,t);const n=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?y(r,n,e.featureSet.features):"esriGeometryPolyline"===i?y(a,n,e.featureSet.features):"esriGeometryPolygon"===i&&y(l,n,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{u.set(e.id,e)})),i.forEach((t=>{t.networkLinkIds.forEach((i=>{const s=function(e,t,i){const n=function(e,t){let i;return t.some((t=>t.id===e&&(i=t,!0))),i}(e,i);return n&&(n.parentFolderId=t,n.networkLink=n),n}(i,t.id,e.networkLinks);s&&n.push(s)}))})),n.forEach((e=>{if(e.featureInfos){e.points=(0,o.d9)(s.get("esriGeometryPoint")),e.polylines=(0,o.d9)(s.get("esriGeometryPolyline")),e.polygons=(0,o.d9)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const i of e.featureInfos)switch(i.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var t;const n=h[i.type].get(i.id);n&&(null===(t=e[_[i.type]])||void 0===t||t.featureSet.features.push(n));break}case"GroundOverlay":{const t=u.get(i.id);t&&e.mapImages.push(t);break}}e.fullExtent=w([e])}}));const c=w(n);return{folders:i,sublayers:n,extent:c}}function g(e,t,i,r){const o=null===s.id||void 0===s.id?void 0:s.id.findCredential(e);e=(0,l.fl)(e,{token:null===o||void 0===o?void 0:o.token});const u=n.default.kmlServiceUrl;return(0,a.Z)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function m(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const s=[],r={},a=t.sublayers,o=new Set(t.folders.map((e=>e.id)));return a.forEach((t=>{const a=new e;if(i?a.read(t,i):a.read(t),n.length&&o.has(a.id)&&(a.visible=n.includes(a.id)),r[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){var l;const e=r[t.parentFolderId];e.sublayers||(e.sublayers=[]),null===(l=e.sublayers)||void 0===l||l.unshift(a)}else s.unshift(a)})),s}function y(e,t,i){i.forEach((i=>{e.set(i.attributes[t],i)}))}async function v(e){const t=p.Z.fromJSON(e.featureSet).features,i=e.layerDefinition,n=(0,d.i)(i.drawingInfo.renderer),s=r.Z.fromJSON(e.popupInfo),a=[];for(const r of t){const e=await n.getSymbolAsync(r);r.symbol=e,r.popupTemplate=s,r.visible=!0,a.push(r)}return a}function w(e){const t=(0,h.Ue)(h.G_),i=(0,h.Ue)(h.G_);for(const a of e){var n,s,r;if(null!==(n=a.polygons)&&void 0!==n&&null!==(n=n.featureSet)&&void 0!==n&&n.features)for(const e of a.polygons.featureSet.features)(0,c.Yg)(t,e.geometry),(0,h.TC)(i,t);if(null!==(s=a.polylines)&&void 0!==s&&null!==(s=s.featureSet)&&void 0!==s&&s.features)for(const e of a.polylines.featureSet.features)(0,c.Yg)(t,e.geometry),(0,h.TC)(i,t);if(null!==(r=a.points)&&void 0!==r&&null!==(r=r.featureSet)&&void 0!==r&&r.features)for(const e of a.points.featureSet.features)(0,c.Yg)(t,e.geometry),(0,h.TC)(i,t);if(a.mapImages)for(const e of a.mapImages)(0,c.Yg)(t,e.extent),(0,h.TC)(i,t)}return(0,h.fS)(i,h.G_)?void 0:{xmin:i[0],ymin:i[1],zmin:i[2],xmax:i[3],ymax:i[4],zmax:i[5],spatialReference:u.Z.WGS84}}},90110:(e,t,i)=>{i.d(t,{c:()=>a});var n=i(62272),s=i(80613),r=i(64510);class a extends r.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[n.U.bitmap],target:()=>this.children,drawPhase:s.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},6326:(e,t,i)=>{i.r(t),i.d(t,{default:()=>B});var n=i(27366),s=i(19545),r=i(40281),a=i(92026),o=i(94172),l=i(35995),u=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),c=i(53866),d=i(79803),p=i(78952),_=i(21857),f=i(23084),g=i(78983),m=i(45956),y=i(90110),v=i(95986),w=i(75391),b=i(77318),S=i(67581),T=i(76200),E=i(585),x=i(80394),I=i(25866),C=i(40658),A=i(8548),O=i(53634),V=i(48673),D=i(20396),P=i(57808),M=i(52311);class R{constructor(e){if(this._ownsRctx=!1,e)this._ownsRctx=!1,this._rctx=e;else{if(R._instance)return R._instanceRefCount++,R._instance;R._instanceRefCount=1,R._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl");e.getExtension("OES_texture_float"),this._rctx=new D.x(e,{})}const t=(0,C.s)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(t.shaders.vertexShader,t.shaders.fragmentShader,t.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new I.Z(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const n=(0,d.project)(e.extent,t),s=new E.Z({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),{x:r,y:a}=(0,x.VO)(s,t,e.extent);let o=(r+a)/2;const l=Math.round((n.xmax-n.xmin)/o),u=Math.round((n.ymax-n.ymin)/o);o=(n.width/l+n.height/u)/2;const h=new E.Z({x:o,y:o,spatialReference:n.spatialReference}),c=(0,x.Qp)({projectedExtent:n,srcBufferExtent:e.extent,pixelSize:h,hasWrapAround:!0,spacing:[16,16]}),p=(0,V.Br)(this._rctx,c),_=new M.X(l,u);_.wrapMode=A.e8.CLAMP_TO_EDGE;const f=new O.X(this._rctx,_);this._rctx.bindFramebuffer(f),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(p,1),this._quad.bind();const{width:g=0,height:m=0}=e.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",g,m),this._program.setUniform2fv("u_transformSpacing",c.spacing),this._program.setUniform2fv("u_transformGridSize",c.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),p.dispose(),i){const{width:e,height:t}=f,i=new ImageData(null!==e&&void 0!==e?e:0,null!==t&&void 0!==t?t:0);f.readPixels(0,0,null!==e&&void 0!==e?e:0,null!==t&&void 0!==t?t:0,A.VI.RGBA,A.Br.UNSIGNED_BYTE,i.data);const s=f.detachColorTexture(A.VY.COLOR_ATTACHMENT0);return f.dispose(),{texture:s,extent:n,imageData:i}}const y=f.detachColorTexture(A.VY.COLOR_ATTACHMENT0);return f.dispose(),{texture:y,extent:n}}reprojectBitmapData(e,t){const i=(0,m.JZ)(e.bitmapData)?(0,m.RL)(e.bitmapData):e.bitmapData,n=new M.X;n.wrapMode=A.e8.CLAMP_TO_EDGE,n.width=e.bitmapData.width,n.height=e.bitmapData.height;const s=new P.x(this._rctx,n,i),r=this.reprojectTexture({texture:s,extent:e.extent},t,!0);r.texture.dispose();const a=document.createElement("canvas"),o=r.imageData;return a.width=o.width,a.height=o.height,a.getContext("2d").putImageData(o,0,0),{bitmapData:a,extent:r.extent}}async loadAndReprojectBitmapData(e,t,i){const n=(await(0,T.Z)(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=n.width,s.height=n.height;const r=s.getContext("2d");r.drawImage(n,0,0);const a=r.getImageData(0,0,s.width,s.height);if(t.spatialReference.equals(i))return{bitmapData:a,extent:t};const o=this.reprojectBitmapData({bitmapData:a,extent:t},i);return{bitmapData:o.bitmapData,extent:o.extent}}destroy(){this._ownsRctx?(R._instanceRefCount--,0===R._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),R._instance=null)):(this._quad.dispose(),this._program.dispose())}}R._instanceRefCount=0;class U{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let L=class extends((0,v.y)(S.Z)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new y.c,this._kmlVisualData=new U,this._fetchController=null,this.allVisiblePoints=new g.J,this.allVisiblePolylines=new g.J,this.allVisiblePolygons=new g.J,this.allVisibleMapImages=new r.Z}async hitTest(e,t){var i,n,s;const r=this.layer;return[null===(i=this._pointsView)||void 0===i?void 0:i.hitTest(e),null===(n=this._polylinesView)||void 0===n?void 0:n.hitTest(e),null===(s=this._polygonsView)||void 0===s?void 0:s.hitTest(e)].flat().filter(Boolean).map((t=>(t.layer=r,t.sourceLayer=r,{type:"graphic",graphic:t,layer:r,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new b.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new w.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new b.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new w.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new b.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new w.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)))})),(0,o.YP)((()=>this.layer.visibleSublayers),(e=>{for(const[t,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const t of e){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()}))]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new R}detach(){this._fetchController=(0,a.IM)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,a.SC)(this._polygonsView),this._polylinesView=(0,a.SC)(this._polylinesView),this._pointsView=(0,a.SC)(this._pointsView),this._imageReprojector=(0,a.SC)(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,i;((null===(t=this.view.spatialReference)||void 0===t?void 0:t.isWGS84)||(null===(i=this.view.spatialReference)||void 0===i?void 0:i.isWebMercator))&&this._imageReprojector.loadAndReprojectBitmapData(e.href,c.Z.fromJSON(e.extent),this.view.spatialReference).then((t=>{const i=new m.eY(t.bitmapData);i.x=t.extent.xmin,i.y=t.extent.ymax,i.resolution=t.extent.width/t.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)}))}async _getViewDependentUrl(e,t){const{viewFormat:i,viewBoundScale:n,httpQuery:r}=e;if(null!=i){if(null==t)throw new Error("Loading this network link requires a view state.");let a;if(await(0,d.load)(),null!=n&&1!==n){const e=new c.Z(t.extent);e.expand(n),a=e}else a=t.extent;a=(0,d.project)(a,p.Z.WGS84);const o=(0,d.project)(a,p.Z.WebMercator),u=a.xmin,h=a.xmax,_=a.ymin,g=a.ymax,m=t.size[0]*t.pixelRatio,y=t.size[1]*t.pixelRatio,v=Math.max(o.width,o.height),w={"[bboxWest]":u.toString(),"[bboxEast]":h.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":g.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":v.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":v.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":m.toString(),"[vertPixels]":y.toString(),"[terrainEnabled]":"0","[clientVersion]":s.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},b=e=>{for(const t in e){let i;for(i in w)e[t]=e[t].replace(i,w[i])}},S=(0,l.u0)(i);b(S);let T={};null!=r&&(T=(0,l.u0)(r),b(T));const E=(0,f.en)(e.href);return E.query={...E.query,...S,...T},"".concat(E.path,"?").concat((0,l.B7)(S))}return e.href}async _fetchService(e){const t=new U;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t})))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!(null===t||void 0===t||!t.visibility)&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,i){return this._fetchParsedKML(e,i).then((async e=>{for(const n of e.sublayers){t.allSublayers.set(n.id,n);const e=n.points?await(0,_.Yu)(n.points):[],s=n.polylines?await(0,_.Yu)(n.polylines):[],r=n.polygons?await(0,_.Yu)(n.polygons):[],a=n.mapImages||[];if(t.allPoints.push(...e.map((e=>({item:e,sublayerId:n.id})))),t.allPolylines.push(...s.map((e=>({item:e,sublayerId:n.id})))),t.allPolygons.push(...r.map((e=>({item:e,sublayerId:n.id})))),t.allMapImages.push(...a.map((e=>({item:e,sublayerId:n.id})))),n.networkLink){const e=await this._getViewDependentUrl(n.networkLink,this.view.state);await this._loadVisualData(e,t,i)}}}))}_fetchParsedKML(e,t){return(0,_.CS)(e,this.layer.spatialReference,this.layer.refreshInterval,t).then((e=>(0,_.Cw)(e.data)))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};(0,n._)([(0,u.Cb)()],L.prototype,"_pointsView",void 0),(0,n._)([(0,u.Cb)()],L.prototype,"_polylinesView",void 0),(0,n._)([(0,u.Cb)()],L.prototype,"_polygonsView",void 0),(0,n._)([(0,u.Cb)()],L.prototype,"updating",void 0),L=(0,n._)([(0,h.j)("esri.views.2d.layers.KMLLayerView2D")],L);const B=L},98634:(e,t,i)=>{i.d(t,{H:()=>s,K:()=>n});const n=class{};function s(e){let t="";for(let i=0;i<(arguments.length<=1?0:arguments.length-1);i++)t+=e[i]+(i+1<1||arguments.length<=i+1?void 0:arguments[i+1]);return t+=e[e.length-1],t}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(s||(s={}))},78041:(e,t,i)=>{i.d(t,{Bh:()=>_,E0:()=>d,IB:()=>l,K5:()=>h,j7:()=>u,je:()=>p,ve:()=>c,wu:()=>a});var n=i(25920),s=i(8548),r=i(36207);const a=(0,r.wK)(s.zi.SRC_ALPHA,s.zi.ONE,s.zi.ONE_MINUS_SRC_ALPHA,s.zi.ONE_MINUS_SRC_ALPHA),o=(0,r.if)(s.zi.ONE,s.zi.ONE),l=(0,r.if)(s.zi.ZERO,s.zi.ONE_MINUS_SRC_ALPHA);function u(e){return e===n.A.FrontFace?null:e===n.A.Alpha?l:o}function h(e){return e===n.A.FrontFace?r.LZ:null}const c=5e5,d={factor:-1,units:-2};function p(e){return e?d:null}function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.wb.LESS;return e===n.A.NONE||e===n.A.FrontFace?t:s.wb.LEQUAL}},25920:(e,t,i)=>{var n;i.d(t,{A:()=>n}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(n||(n={}))},68401:(e,t,i)=>{var n,s,r,a,o,l,u,h,c;i.d(t,{Gv:()=>s,Iq:()=>h,JJ:()=>u,Rw:()=>a,Ti:()=>c,V_:()=>l,Vr:()=>n,hU:()=>o}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(n||(n={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(s||(s={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(r||(r={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(o||(o={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(u||(u={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(h||(h={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(c||(c={}))},81152:(e,t,i)=>{i.d(t,{G:()=>s});var n=i(92026);class s{constructor(){this._result=!1}dispose(){this._program=(0,n.M2)(this._program)}get result(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}},40235:(e,t,i)=>{i.d(t,{mO:()=>a});var n=i(30308);class s{constructor(e,t,i,n,s,r,a,o,l){this.createQuery=e,this.deleteQuery=t,this.resultAvailable=i,this.getResult=n,this.disjoint=s,this.beginTimeElapsed=r,this.endTimeElapsed=a,this.createTimestamp=o,this.timestampBits=l}}let r=!1;function a(e,t){if(t.disjointTimerQuery)return null;let i=e.getExtension("EXT_disjoint_timer_query_webgl2");return i&&(0,n.Z)(e)?new s((()=>e.createQuery()),(t=>{e.deleteQuery(t),r=!1}),(t=>e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)),(t=>e.getQueryParameter(t,e.QUERY_RESULT)),(()=>e.getParameter(i.GPU_DISJOINT_EXT)),(t=>{r||(r=!0,e.beginQuery(i.TIME_ELAPSED_EXT,t))}),(()=>{e.endQuery(i.TIME_ELAPSED_EXT),r=!1}),(e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT)),(()=>e.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):(i=e.getExtension("EXT_disjoint_timer_query"),i?new s((()=>i.createQueryEXT()),(e=>{i.deleteQueryEXT(e),r=!1}),(e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_AVAILABLE_EXT)),(e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_EXT)),(()=>e.getParameter(i.GPU_DISJOINT_EXT)),(e=>{r||(r=!0,i.beginQueryEXT(i.TIME_ELAPSED_EXT,e))}),(()=>{i.endQueryEXT(i.TIME_ELAPSED_EXT),r=!1}),(e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT)),(()=>i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):null)}},48673:(e,t,i)=>{i.d(t,{Br:()=>u,Fm:()=>f,N9:()=>m,RA:()=>y,Tc:()=>c,Ue:()=>d,iC:()=>h,s9:()=>l,v:()=>g,xW:()=>_,zS:()=>p});var n=i(6394),s=i(83826),r=i(8548),a=i(57808),o=i(52311);function l(e,t){var i;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest";const l=!(arguments.length>3&&void 0!==arguments[3]&&arguments[3]&&"u8"===t.pixelType),u=l?r.Br.FLOAT:r.Br.UNSIGNED_BYTE,h=null==t.pixels||0===t.pixels.length?null:l?t.getAsRGBAFloat():t.getAsRGBA(),c=null===(i=e.capabilities.textureFloat)||void 0===i?void 0:i.textureFloatLinear,d=new o.X;return d.width=t.width,d.height=t.height,d.internalFormat=e.type===s.zO.WEBGL2&&l?r.lP.RGBA32F:r.VI.RGBA,d.samplingMode=!c||"bilinear"!==n&&"cubic"!==n?r.cw.NEAREST:r.cw.LINEAR,d.dataType=u,d.wrapMode=r.e8.CLAMP_TO_EDGE,new a.x(e,d,h)}function u(e,t){const{spacing:i,offsets:n,coefficients:l,size:[u,h]}=t,c=i[0]>1,d=new o.X;d.width=c?4*u:u,d.height=h,d.internalFormat=e.type===s.zO.WEBGL2?r.lP.RGBA32F:r.VI.RGBA,d.dataType=r.Br.FLOAT,d.samplingMode=r.cw.NEAREST,d.wrapMode=r.e8.CLAMP_TO_EDGE;const p=new Float32Array(c?u*h*16:2*n.length);if(c&&null!=l)for(let s=0,r=0;s<l.length;s++)p[r++]=l[s],s%3==2&&(p[r++]=1);else for(let s=0;s<h;s++)for(let e=0;e<u;e++){const t=4*(s*u+e),i=2*(e*h+s);p[t]=n[i],p[t+1]=n[i+1],p[t+3]=-1===n[i]?0:1}return new a.x(e,d,p)}function h(e,t){const i=new o.X;return i.internalFormat=r.VI.RGBA,i.width=t.length/4,i.height=1,i.samplingMode=r.cw.NEAREST,i.wrapMode=r.e8.CLAMP_TO_EDGE,new a.x(e,i,t)}function c(e,t,i){return{u_flipY:!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u_applyTransform:!!e,u_opacity:arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u_transformSpacing:e?e.spacing:n.Z,u_transformGridSize:e?e.size:n.Z,u_targetImageSize:t,u_srcImageSize:i}}function d(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function p(e,t){return{u_scale:e,u_offset:t}}function _(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function f(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function g(e,t){const i=e.gl,n=t.glName,s=new Map;if(null==n)return s;const r=i.getProgramParameter(n,i.ACTIVE_UNIFORMS);let a;for(let o=0;o<r;o++)a=i.getActiveUniform(n,o),a&&s.set(a.name,{location:i.getUniformLocation(n,a.name),info:a});return s}function m(e,t,i){Object.keys(i).forEach((n=>{const s=t.get(n)||t.get(n+"[0]");s&&function(e,t,i,n){if(null===n||null==i)return!1;const{info:s}=n;switch(s.type){case r.Se.FLOAT:s.size>1?e.setUniform1fv(t,i):e.setUniform1f(t,i);break;case r.Se.FLOAT_VEC2:e.setUniform2fv(t,i);break;case r.Se.FLOAT_VEC3:e.setUniform3fv(t,i);break;case r.Se.FLOAT_VEC4:e.setUniform4fv(t,i);break;case r.Se.FLOAT_MAT3:e.setUniformMatrix3fv(t,i);break;case r.Se.FLOAT_MAT4:e.setUniformMatrix4fv(t,i);break;case r.Se.INT:s.size>1?e.setUniform1iv(t,i):e.setUniform1i(t,i);break;case r.Se.BOOL:e.setUniform1i(t,i?1:0);break;case r.Se.INT_VEC2:case r.Se.BOOL_VEC2:e.setUniform2iv(t,i);break;case r.Se.INT_VEC3:case r.Se.BOOL_VEC3:e.setUniform3iv(t,i);break;case r.Se.INT_VEC4:case r.Se.BOOL_VEC4:e.setUniform4iv(t,i);break;default:return!1}}(e,n,i[n],s)}))}function y(e,t,i,n){i.length===n.length&&(n.some((e=>null==e))||i.some((e=>null==e))||i.forEach(((i,s)=>{t.setUniform1i(i,s),e.bindTexture(n[s],s)})))}},36207:(e,t,i)=>{i.d(t,{BK:()=>c,LZ:()=>h,if:()=>r,jp:()=>z,sg:()=>l,sm:()=>b,wK:()=>a,zp:()=>u});var n=i(68401),s=i(8548);function r(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.db.ADD,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function a(e,t,i,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:s.db.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:s.db.ADD,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:n,opRgb:r,opAlpha:a,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const o={face:s.LR.BACK,mode:s.Wf.CCW},l={face:s.LR.FRONT,mode:s.Wf.CCW},u=e=>e===n.Vr.Back?o:e===n.Vr.Front?l:null,h={zNear:0,zFar:1},c={r:!0,g:!0,b:!0,a:!0};function d(e){return E.intern(e)}function p(e){return I.intern(e)}function _(e){return A.intern(e)}function f(e){return V.intern(e)}function g(e){return P.intern(e)}function m(e){return R.intern(e)}function y(e){return L.intern(e)}function v(e){return N.intern(e)}function w(e){return F.intern(e)}function b(e){return W.intern(e)}class S{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){var t;if(!e)return null;const i=this._makeKey(e),n=this._interns;return n.has(i)||n.set(i,this._makeRef(e)),null!==(t=n.get(i))&&void 0!==t?t:null}}function T(e){return"["+e.join(",")+"]"}const E=new S(x,(e=>({__tag:"Blending",...e})));function x(e){return e?T([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const I=new S(C,(e=>({__tag:"Culling",...e})));function C(e){return e?T([e.face,e.mode]):null}const A=new S(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?T([e.factor,e.units]):null}const V=new S(D,(e=>({__tag:"DepthTest",...e})));function D(e){return e?T([e.func]):null}const P=new S(M,(e=>({__tag:"StencilTest",...e})));function M(e){return e?T([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const R=new S(U,(e=>({__tag:"DepthWrite",...e})));function U(e){return e?T([e.zNear,e.zFar]):null}const L=new S(B,(e=>({__tag:"ColorWrite",...e})));function B(e){return e?T([e.r,e.g,e.b,e.a]):null}const N=new S(k,(e=>({__tag:"StencilWrite",...e})));function k(e){return e?T([e.mask]):null}const F=new S(G,(e=>({__tag:"DrawBuffers",...e})));function G(e){return e?T(e.buffers):null}const W=new S((function(e){return e?T([x(e.blending),C(e.culling),O(e.polygonOffset),D(e.depthTest),M(e.stencilTest),U(e.depthWrite),B(e.colorWrite),k(e.stencilWrite),G(e.drawBuffers)]):null}),(e=>({blending:d(e.blending),culling:p(e.culling),polygonOffset:_(e.polygonOffset),depthTest:f(e.depthTest),stencilTest:g(e.stencilTest),depthWrite:m(e.depthWrite),colorWrite:y(e.colorWrite),stencilWrite:v(e.stencilWrite),drawBuffers:w(e.drawBuffers)})));class z{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,i,n){return(i||e!==t)&&(n(e),this._pipelineInvalid=!0),e}}},39416:(e,t,i)=>{i.d(t,{d:()=>c});var n=i(61441),s=i(44070),r=i(8548),a=i(53634),o=i(57808),l=i(52311),u=i(45412),h=i(81152);class c extends h.G{constructor(e){super(),this._rctx=e;this._program=e.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(e){const t=this._rctx;if(!t.gl)return e.dispose(),!0;const i=new l.X(1);i.wrapMode=r.e8.CLAMP_TO_EDGE,i.samplingMode=r.cw.NEAREST;const h=new a.X(t,i),c=s.f.createVertex(t,r.l1.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),p=new u.U(t,new Map([["a_pos",0]]),n.cD,{geometry:c}),_=new l.X;_.samplingMode=r.cw.LINEAR,_.wrapMode=r.e8.CLAMP_TO_EDGE;const f=new o.x(t,_,d);t.useProgram(e),t.bindTexture(f,0),e.setUniform1i("u_texture",0);const g=t.getBoundFramebufferObject(),{x:m,y:y,width:v,height:w}=t.getViewport();t.bindFramebuffer(h),t.setViewport(0,0,1,1),t.setClearColor(0,0,0,0),t.setBlendingEnabled(!1),t.clearSafe(r.lk.COLOR_BUFFER_BIT),t.bindVAO(p),t.drawArrays(r.MX.TRIANGLE_STRIP,0,4);const b=new Uint8Array(4);return h.readPixels(0,0,1,1,r.VI.RGBA,r.Br.UNSIGNED_BYTE,b),p.dispose(),h.dispose(),f.dispose(),t.setViewport(m,y,v,w),t.bindFramebuffer(g),255!==b[0]}}const d=new Image;d.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",d.width=5,d.height=5,d.decode()}}]);
//# sourceMappingURL=929.0ad71752.chunk.js.map