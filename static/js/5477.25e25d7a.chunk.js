"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[5477],{95477:(e,t,s)=>{s.r(t),s.d(t,{toBinaryGLTF:()=>J});var n,i=s(35995),r=s(585);!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(n||(n={}));class _{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=_.HEADER_SIZE,this._length+=_.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=_.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const i=this._writeChunk(s,12,n.JSON,32);t&&this._writeChunk(t,i,n.BIN)}_writeHeader(){this._outView.setUint32(0,_.MAGIC,!0),this._outView.setUint32(4,_.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,i,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)n&&this._outView.setUint8(t,n),t++;return t}_writeArrayBuffer(e,t,s,n,i){new Uint8Array(e,s,i).set(new Uint8Array(t,n,i),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}_.HEADER_SIZE=12,_.CHUNK_HEADER_SIZE=8,_.MAGIC=1179937895,_.VERSION=2;var a,o,E,T,A,R,c,f=s(10064),h=s(32718),u=s(77427),N=s(16889),l=s(68860),S=s(14226),O=s(81949),I=s(48976),C=s(98131),d=s(11186),L=s(71353),M=s(80880),g=s(8623),D=s(11587),p=s(57898);!function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(a||(a={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(o||(o={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(E||(E={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(T||(T={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(A||(A={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(R||(R={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(c||(c={}));var m=s(8548);class B{constructor(e,t,s,n,i){this._buffer=e,this._componentType=s,this._dataType=n,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:i};const r=this._getElementSize();r>=4&&i!==E.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=r),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,n=this._accessorMin[s];this._accessorMin[s]="number"!=typeof n?e:Math.min(n,e);const i=this._accessorMax[s];this._accessorMax[s]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case m.g.BYTE:return new Int8Array(e,t);case m.g.FLOAT:return new Float32Array(e,t);case m.g.SHORT:return new Int16Array(e,t);case m.g.UNSIGNED_BYTE:return new Uint8Array(e,t);case m.g.UNSIGNED_INT:return new Uint32Array(e,t);case m.g.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this._data.push(t[s]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let i=0;i<this._accessorMin.length;++i)"number"!=typeof this._accessorMin[i]&&(this._accessorMin[i]=0),"number"!=typeof this._accessorMax[i]&&(this._accessorMax[i]=0);const n={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case m.g.UNSIGNED_BYTE:case m.g.UNSIGNED_SHORT:n.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,n}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case m.g.BYTE:case m.g.UNSIGNED_BYTE:return 1;case m.g.SHORT:case m.g.UNSIGNED_SHORT:return 2;case m.g.UNSIGNED_INT:case m.g.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case T.SCALAR:return 1;case T.VEC2:return 2;case T.VEC3:return 3;case T.VEC4:case T.MAT2:return 4;case T.MAT3:return 9;case T.MAT4:return 16}}}class P{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const n=new B(this,this._gltf,e,t,s);return this._bufferViews.push(n),n}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const n of this._bufferViews)n.writeOutToBuffer(t,s),s+=n.byteSize;return t}finalize(){var e;if(this._finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),null!==(e=this._gltf.extras)&&void 0!==e&&e.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function U(e,t){null==t.normal&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:n,normal:i}=t,r=s.length/3;for(let _=0;_<r;++_){const e=3*s[3*_],t=3*s[3*_+1],r=3*s[3*_+2],a=(0,d.s)(G,n[e],n[e+1],n[e+2]),o=(0,d.s)(F,n[t],n[t+1],n[t+2]),E=(0,d.s)(w,n[r],n[r+1],n[r+2]),T=(0,d.f)(o,o,a),A=(0,d.f)(E,E,a),R=(0,d.b)(T,T,A);i[e]+=R[0],i[e+1]+=R[1],i[e+2]+=R[2],i[t]+=R[0],i[t+1]+=R[1],i[t+2]+=R[2],i[r]+=R[0],i[r+1]+=R[1],i[r+2]+=R[2]}for(let _=0;_<i.length;_+=3)(0,d.s)(b,i[_],i[_+1],i[_+2]),(0,d.n)(b,b),i[_]=b[0],i[_+1]=b[1],i[_+2]=b[2]}const G=(0,L.c)(),F=(0,L.c)(),w=(0,L.c)(),b=(0,L.c)();var y=s(91958),H=s(57661);const x=h.Z.getLogger("gltf");class V{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===a.GLB||t.options.imageOutputType===o.GLB;s&&(t.binChunkBuffer=new P(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e))})),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,d.h)(s,L.Z)||(t.translation=(0,L.g)(s));const n=e.rotation;(0,I.j)(n,C.I)||(t.rotation=(0,C.b)(n));const i=e.scale;(0,d.h)(i,L.O)||(t.scale=(0,L.g)(i));const r=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const s=this._createMeshes(e.mesh),n=[r];if(1===s.length)this._addMesh(t,s[0]);else for(const e of s){const t={};this._addMesh(t,e),n.push(this.gltf.nodes.length),this.gltf.nodes.push(t)}return n}return e.forEachNode((e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e))})),[r]}_addMesh(e,t){var s,n;null!==(n=(s=this.gltf).meshes)&&void 0!==n||(s.meshes=[]);const i=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=i}_createMeshes(e){const t=this.gltf.extras,s=t.options.bufferOutputType===a.GLB;let n;n=s?t.binChunkBuffer:new P(this.gltf),this.params.origin||(this.params.origin=function(e){const{vertexSpace:t}=e;if(t.isRelative)return t.getOriginPoint(e.spatialReference);const{extent:s}=e,n=s.xmax-s.width/2,i=s.ymax-s.height/2,_=s.zmin;return new r.Z({x:n,y:i,z:_,spatialReference:s.spatialReference})}(e));const{ignoreLocalTransform:i}=this.params,_=i?null:e.transform,{vertexSpace:o,spatialReference:A}=e,R=e.vertexAttributes;let c=null;if("local"===o.type){var h;const e=(0,l.r6)(A);(0,S.b)(Y,null!==(h=null===_||void 0===_?void 0:_.localMatrix)&&void 0!==h?h:O.I,[e,e,e]),c=(0,p.Ne)(R,Y)}else{const e=i?o.isRelative?new M.Z({origin:(0,L.g)(o.origin)}):new g.Z:o;c=(0,p.Yq)(R,e,_,this.params.origin,{geographic:this.params.geographic,unit:"meters"})}if(null==c)throw new f.Z("Error during gltf export.");R.position&&c.position===R.position&&(c.position=R.position.slice()),R.normal&&c.normal===R.normal&&(c.normal=R.normal.slice()),R.tangent&&c.tangent===R.tangent&&(c.tangent=R.tangent.slice()),function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&U(s,t)}(e,c),this._flipYZAxis(c);const u=n.addBufferView(m.g.FLOAT,T.VEC3,E.ARRAY_BUFFER);let N,I,C,d;c.normal&&(N=n.addBufferView(m.g.FLOAT,T.VEC3,E.ARRAY_BUFFER)),R.uv&&(I=n.addBufferView(m.g.FLOAT,T.VEC2,E.ARRAY_BUFFER)),c.tangent&&(C=n.addBufferView(m.g.FLOAT,T.VEC4,E.ARRAY_BUFFER)),R.color&&(d=n.addBufferView(m.g.UNSIGNED_BYTE,T.VEC4,E.ARRAY_BUFFER)),u.startAccessor("POSITION"),N&&N.startAccessor("NORMAL"),I&&I.startAccessor("TEXCOORD_0"),C&&C.startAccessor("TANGENT"),d&&d.startAccessor("COLOR_0");const D=c.position.length/3,{position:B,normal:G,tangent:F}=c,{color:w,uv:b}=R;for(let r=0;r<D;++r)u.push(B[3*r]),u.push(B[3*r+1]),u.push(B[3*r+2]),N&&null!=G&&(N.push(G[3*r]),N.push(G[3*r+1]),N.push(G[3*r+2])),I&&null!=b&&(I.push(b[2*r]),I.push(b[2*r+1])),C&&null!=F&&(C.push(F[4*r]),C.push(F[4*r+1]),C.push(F[4*r+2]),C.push(F[4*r+3])),d&&null!=w&&(d.push(w[4*r]),d.push(w[4*r+1]),d.push(w[4*r+2]),d.push(w[4*r+3]));const y=u.endAccessor(),H=this._addAccessor(u.index,y);let x,V,v,z,X;if(N){const e=N.endAccessor();x=this._addAccessor(N.index,e)}if(I){const e=I.endAccessor();V=this._addAccessor(I.index,e)}if(C){const e=C.endAccessor();v=this._addAccessor(C.index,e)}if(d){const e=d.endAccessor();z=this._addAccessor(d.index,e)}const W=[];return e.components&&e.components.length>0&&e.components[0].faces?(X=n.addBufferView(m.g.UNSIGNED_INT,T.SCALAR,E.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(X,e.components,W,H,x,V,v,z)):this._addMeshVertexNonIndexed(e.components,W,H,x,V,v,z),u.finalize(),N&&N.finalize(),I&&I.finalize(),C&&C.finalize(),X&&X.finalize(),d&&d.finalize(),s||n.finalize(),W}_flipYZAxis(e){let{position:t,normal:s,tangent:n}=e;this._flipYZBuffer(t,3),this._flipYZBuffer(s,3),this._flipYZBuffer(n,4)}_flipYZBuffer(e,t){if(null!=e)for(let s=1,n=2;s<e.length;s+=t,n+=t){const t=e[s],i=e[n];e[s]=i,e[n]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=R.MASK;break;case"auto":case"blend":s.alphaMode=R.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const n=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=n(t[0]/255),t[1]=n(t[1]/255),t[2]=n(t[2]/255),t};if(null!=e.color&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),null!=e.colorTexture&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof D.Z){if(null!=e.emissiveTexture&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}null!=e.occlusionTexture&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,x.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const r=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),r}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t?(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:(0,N.Vl)(t.rotation)},s):s}_addTexture(e){var t;const s=null!==(t=this.gltf.textures)&&void 0!==t?t:[];return this.gltf.textures=s,(0,u.s1)(this._textureMap,e,(()=>{const t={sampler:this._addSampler(e),source:this._addImage(e)},n=s.length;return s.push(t),n}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const n=this.gltf.extras;switch(n.options.imageOutputType){case o.GLB:{const e=n.binChunkBuffer.addBufferView(m.g.UNSIGNED_BYTE,T.SCALAR);if((0,H.$A)(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else{const n=(0,y.lW)(t).then((e=>{let{data:t,type:n}=e;return s.mimeType=n,t}));e.writeAsync(n).then((()=>{e.finalize()}))}s.bufferView=e.index;break}case o.DataURI:if((0,H.$A)(t)){x.warnOnce("Image export for basis compressed textures not available.");break}s.uri=(0,y.$e)(t);break;default:if((0,H.$A)(t)){x.warnOnce("Image export for basis compressed textures not available.");break}n.promises.push((0,y.lW)(t).then((e=>{let{data:t,type:n}=e;s.uri=t,s.mimeType=n})))}}const n=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,n),n}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=m.e8.REPEAT,s=m.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=m.e8.CLAMP_TO_EDGE,s=m.e8.CLAMP_TO_EDGE;break;case"mirror":t=m.e8.MIRRORED_REPEAT,s=m.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=m.e8.CLAMP_TO_EDGE;break;case"mirror":s=m.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=m.e8.CLAMP_TO_EDGE;break;case"mirror":t=m.e8.MIRRORED_REPEAT}}const n={wrapS:t,wrapT:s};for(let r=0;r<this.gltf.samplers.length;++r)if(JSON.stringify(n)===JSON.stringify(this.gltf.samplers[r]))return r;const i=this.gltf.samplers.length;return this.gltf.samplers.push(n),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const n=this.gltf.accessors.length;return this.gltf.accessors.push(s),n}_addMeshVertexIndexed(e,t,s,n,i,r,_,a){const o=new Map;for(const E of t){e.startAccessor("INDICES");for(let s=0;s<E.faces.length;++s)e.push(E.faces[s]);const t=e.endAccessor(),T={attributes:{POSITION:n},indices:this._addAccessor(e.index,t),material:this._addMaterial(E.material)};i&&"flat"!==E.shading&&(T.attributes.NORMAL=i),r&&(T.attributes.TEXCOORD_0=r),_&&"flat"!==E.shading&&(T.attributes.TANGENT=_),a&&(T.attributes.COLOR_0=a);const A=o.get(E.name);if(A)A.primitives.push(T);else{const e={name:E.name,primitives:[T]};o.set(E.name,e),s.push(e)}}}_addMeshVertexNonIndexed(e,t,s,n,i,r,_){const a={primitives:[]};t.push(a);const o={attributes:{POSITION:s}};n&&(o.attributes.NORMAL=n),i&&(o.attributes.TEXCOORD_0=i),r&&(o.attributes.TANGENT=r),_&&(o.attributes.COLOR_0=_),e&&(o.material=this._addMaterial(e[0].material)),a.primitives.push(o)}}const Y=(0,O.a)();var v=s(63780);class z{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){(0,v.Od)(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class X{constructor(e){this.mesh=e,this.name="",this.translation=(0,L.c)(),this.rotation=(0,C.a)(),this.scale=(0,L.g)(L.O),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){(0,I.k)(this.rotation,e[0],e[1],e[2])}}const W="model.gltf",Z="model.glb";async function k(e,t,s){var n,i;const E=new V(e,t=t||{},s);let T=E.params;T?T.origin||(T.origin=new r.Z({x:-1,y:-1,z:-1})):T={origin:new r.Z({x:-1,y:-1,z:-1})};const A=T.origin,R=E.gltf,c=null!==(n=null===(i=R.extras)||void 0===i?void 0:i.promises)&&void 0!==n?n:[];let f=1,h=1,u=null;await Promise.allSettled(c);const N={origin:A};delete R.extras;const l="number"==typeof t.jsonSpacing?t.jsonSpacing:4,S=JSON.stringify(R,((e,s)=>{if("extras"!==e){if(s instanceof ArrayBuffer){if((0,y.$7)(s))switch(t.imageOutputType){case o.DataURI:case o.GLB:break;case o.External:default:{const e="img".concat(h,".png");return h++,N[e]=s,e}}switch(t.bufferOutputType){case a.DataURI:return(0,y.N5)(s);case a.GLB:if(u)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(u=s);case a.External:default:{const e="data".concat(f,".bin");return f++,N[e]=s,e}}}return s}}),l);return t.bufferOutputType===a.GLB||t.imageOutputType===o.GLB?N[Z]=new _(S,u).buffer:N[W]=S,N}class K{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class j{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){(0,i.io)(new Blob([this._file.data],{type:this._file.type}),e)}}function J(e,t){const s=new z,n=new K;return s.addScene(n),n.addNode(new X(e)),function(e,t){return k(e,{bufferOutputType:a.GLB,imageOutputType:o.GLB,jsonSpacing:0},t)}(s,t).then((e=>new j(e[Z],e.origin)))}},91958:(e,t,s)=>{s.d(t,{$7:()=>E,$e:()=>r,E0:()=>a,N5:()=>o,lW:()=>_});s(93169);var n=s(10064),i=s(35995);function r(e){const t=a(e);return null!=t?t.toDataURL():""}async function _(e){const t=a(e);if(null==t)throw new n.Z("imageToArrayBuffer","Unsupported image type");const s=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,i.HK)(t)){const e=(0,i.sJ)(t);return"image/jpeg"===(null===e||void 0===e?void 0:e.mediaType)?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),r=await new Promise((e=>t.toBlob(e,s)));if(!r)throw new n.Z("imageToArrayBuffer","Failed to encode image");return{data:await r.arrayBuffer(),type:s}}function a(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),t}function o(e){const t=[],s=new Uint8Array(e);for(let n=0;n<s.length;n++)t.push(String.fromCharCode(s[n]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function E(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},57661:(e,t,s)=>{s.d(t,{$A:()=>_,Ml:()=>o,NM:()=>r,i$:()=>a});var n=s(93169),i=s(68401);class r{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=i.Ti.KTX2_ENCODING}}function _(e){return"encoded-mesh-texture"===(null===e||void 0===e?void 0:e.type)}async function a(e){const t=new Blob([e]),s=await t.text();return JSON.parse(s)}async function o(e,t){if(t===i.Ti.KTX2_ENCODING)return new r(e);const s=new Blob([e],{type:t}),_=URL.createObjectURL(s),a=new Image;if((0,n.Z)("esri-iPhone"))return new Promise(((e,t)=>{const s=()=>{i(),e(a)},n=e=>{i(),t(e)},i=()=>{URL.revokeObjectURL(_),a.removeEventListener("load",s),a.removeEventListener("error",n)};a.addEventListener("load",s),a.addEventListener("error",n),a.src=_}));try{a.src=_,await a.decode()}catch(o){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(_),a}},8548:(e,t,s)=>{var n,i,r,_,a,o,E,T,A,R,c,f,h,u,N,l,S,O,I,C;s.d(t,{Br:()=>l,Ho:()=>I,LR:()=>o,Lu:()=>D,MX:()=>i,No:()=>h,Se:()=>m,Tg:()=>S,V1:()=>d,V7:()=>G,VI:()=>u,VY:()=>M,Wf:()=>E,Xg:()=>g,Y5:()=>U,_g:()=>L,cw:()=>c,db:()=>_,e8:()=>f,g:()=>T,l1:()=>O,lP:()=>N,lk:()=>n,q_:()=>p,qi:()=>C,w0:()=>a,wb:()=>A,xS:()=>R,zi:()=>r}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(n||(n={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(i||(i={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(r||(r={})),function(e){e[e.ADD=32774]="ADD",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(_||(_={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(a||(a={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(o||(o={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(E||(E={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(T||(T={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(A||(A={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(R||(R={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(f||(f={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(h||(h={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(u||(u={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(N||(N={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(l||(l={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(S||(S={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(O||(O={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(I||(I={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(C||(C={}));const d=33984;var L,M,g;!function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.UNCOUNTED=8]="UNCOUNTED",e[e.LinesOfCode=8]="LinesOfCode",e[e.Uniform=9]="Uniform",e[e.COUNT=10]="COUNT"}(L||(L={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(M||(M={})),function(e){e[e.NONE=0]="NONE",e[e.BACK=1029]="BACK"}(g||(g={}));const D=33306;var p,m,B,P,U,G,F;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(p||(p={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(m||(m={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(P||(P={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(U||(U={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(G||(G={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(F||(F={}))}}]);
//# sourceMappingURL=5477.25e25d7a.chunk.js.map