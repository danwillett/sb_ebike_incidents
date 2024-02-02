"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[5738],{9849:(e,t,i)=>{i.d(t,{s:()=>c});var s=i(65156),r=i(23588),a=i(45956),n=i(72900);class l extends n.I{constructor(e,t,i,s,r,n){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,r,n),this.bitmap=new a.eY(l),this.bitmap.coordScale=[r,n],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var h=i(62272),o=i(80613),d=i(55067);class c extends d.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),[r,a]=this._tileInfoView.tileInfo.size;return new l(e,i,t[0],t[3],r,a)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[h.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:o.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.jx.MAP&&super.doRender(e)}}},55067:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(93169),r=i(80613),a=i(64510),n=i(52424),l=i(40655);const h=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class o extends a.Z{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(h),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[l.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},72900:(e,t,i)=>{i.d(t,{I:()=>n});var s=i(22753),r=i(87422),a=i(73828);class n extends r.s{constructor(e,t,i,s,r,n){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new a.Z(e),this.resolution=t,this.x=i,this.y=s,this.width=r,this.height=n,this.rangeX=l,this.rangeY=h}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*t,l=this.height/this.rangeY*t;(0,s.s)(i,n,0,0,0,l,0,r,a,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,i)}}},4321:(e,t,i)=>{i.d(t,{Y:()=>n});var s=i(27366),r=(i(32718),i(25243),i(63780),i(93169),i(10064),i(69912)),a=i(9849);const n=e=>{let t=class extends e{attach(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new a.s(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null!==(e=this._bitmapView)&&void 0!==e&&e.removeAllChildren(),this._bitmapView=null}};return t=(0,s._)([(0,r.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},5738:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var s=i(27366),r=i(32718),a=i(66978),n=i(49861),l=(i(25243),i(63780),i(93169),i(69912)),h=i(92975),o=i(4321),d=i(95986),c=i(34622),u=i(37995),f=i(73828),p=i(32344),g=i(85269),m=i(67581),v=i(13107);const w=new Set([102113,102100,3857,3785,900913]),y=[0,0];let _=class extends((0,v.Z)((0,o.Y)((0,d.y)(m.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var e;const t=null===(e=this.tileMatrixSet)||void 0===e?void 0:e.tileInfo;t&&(this._tileInfoView=new u.Z(t),this._fetchQueue=new p.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new g.Z({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add((()=>{var e;return[null===(e=this.layer)||void 0===e||null===(e=e.activeLayer)||void 0===e?void 0:e.styleId,this.tileMatrixSet]}),(()=>this.doRefresh()))),super.attach())}detach(){var e,t;super.detach(),null!==(e=this._tileStrategy)&&void 0!==e&&e.destroy(),null!==(t=this._fetchQueue)&&void 0!==t&&t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t,i;return null!==(t=null===(i=this.layer.activeLayer.tileMatrixSets)||void 0===i?void 0:i.some((t=>{var i;return(0,h.fS)(null===(i=t.tileInfo)||void 0===i?void 0:i.spatialReference,e)})))&&void 0!==t&&t}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(y,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const n=new f.Z(0,0,0,0);let l;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:s}),l=await this._fetchImage(n,s)}catch(h){if((0,a.D_)(h))throw h;if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new f.Z(i),a=await this.fetchTile(s,{...t,resamplingLevel:r+1});return(0,c.i)(this._tileInfoView,a,s,e)}}throw h}return(0,c.i)(this._tileInfoView,l,n,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,a.D_)(t)||r.Z.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>{var i;return(0,h.fS)(null===(i=e.tileInfo)||void 0===i?void 0:i.spatialReference,t)}));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>{var t,i;return w.has(null!==(t=null===(i=e.tileInfo)||void 0===i?void 0:i.spatialReference.wkid)&&void 0!==t?t:-1)}))),i}};(0,s._)([(0,n.Cb)({readOnly:!0})],_.prototype,"tileMatrixSet",null),_=(0,s._)([(0,l.j)("esri.views.2d.layers.WMTSLayerView2D")],_);const I=_},34622:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const a=e.tileInfo.size,n=e.getTileResolution(i.level),l=e.getTileResolution(s.level);let h=e.getLODInfoAt(s.level);const o=h.getXForColumn(s.col),d=h.getYForRow(s.row);h=e.getLODInfoAt(i.level);const c=h.getXForColumn(i.col),u=h.getYForRow(i.row),f=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/a[0],p=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/a[1],g=Math.round(f*((o-c)/n)),m=Math.round(p*(-(d-u)/n)),v=Math.round(f*a[0]*(l/n)),w=Math.round(p*a[1]*(l/n)),y=r(a);return y.getContext("2d").drawImage(t,g,m,v,w,0,0,a[0],a[1]),y}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{V:()=>r,i:()=>s})},13107:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(27366),r=i(32718),a=i(66978),n=i(94172),l=i(49861),h=(i(25243),i(63780),i(93169),i(69912));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,l.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=5738.a0925dc7.chunk.js.map