"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[5569],{22526:(e,t,n)=>{n.d(t,{H:()=>r,a:()=>i});var s=n(55158);function r(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new s.Gw(e.layout)}}function i(e){return new s.pV(e.layout).createView(e.buffer)}},95569:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(22526),r=n(67009),i=n(10662),a=n(83715);class c{async extract(e){const t=o(e),n=(0,a.Kl)(t),s=[t.data.buffer];return{result:u(n,s),transferList:s}}async extractComponentsEdgeLocations(e){const t=o(e),n=(0,a.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),r=(0,i.n)(n,f,d),c=[];return{result:(0,s.H)(r.regular.instancesData,c),transferList:c}}async extractEdgeLocations(e){const t=o(e),n=(0,a.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),r=(0,i.n)(n,l,d),c=[];return{result:(0,s.H)(r.regular.instancesData,c),transferList:c}}}function o(e){return{data:r.tf.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function u(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:(0,s.H)(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:(0,s.H)(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const l=new class{allocate(e){return a.Yr.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}},f=new class{allocate(e){return a.n_.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}},d={allocate:()=>null,write:()=>{},trim:()=>null}}}]);
//# sourceMappingURL=5569.d896e3df.chunk.js.map