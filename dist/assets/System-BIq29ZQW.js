import{u as ze,a as Mt,b as he,r as b,j as h,c as s,L as _e,D as Ot,S as Lt,F as Pt,d as De}from"./index-D_GxXV2B.js";const Bt=()=>{};var xe={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},Rt=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=e[n++];t[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=e[n++],i=e[n++],c=e[n++],d=((a&7)<<18|(o&63)<<12|(i&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|i&63)}}return t.join("")},Ge={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const o=e[a],i=a+1<e.length,c=i?e[a+1]:0,d=a+2<e.length,l=d?e[a+2]:0,x=o>>2,S=(o&3)<<4|c>>4;let v=(c&15)<<2|l>>6,u=l&63;d||(u=64,i||(v=64)),r.push(n[x],n[S],n[v],n[u])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ke(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Rt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const o=n[e.charAt(a++)],c=a<e.length?n[e.charAt(a)]:0;++a;const l=a<e.length?n[e.charAt(a)]:64;++a;const S=a<e.length?n[e.charAt(a)]:64;if(++a,o==null||c==null||l==null||S==null)throw new $t;const v=o<<2|c>>4;if(r.push(v),l!==64){const u=c<<4&240|l>>2;if(r.push(u),S!==64){const f=l<<6&192|S;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $t extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ft=function(e){const t=Ke(e);return Ge.encodeByteArray(t,!0)},Ye=function(e){return Ft(e).replace(/\./g,"")},jt=function(e){try{return Ge.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=()=>Ht().__FIREBASE_DEFAULTS__,Ut=()=>{if(typeof process>"u"||typeof xe>"u")return;const e=xe.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},qt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jt(e[1]);return t&&JSON.parse(t)},Wt=()=>{try{return Bt()||Vt()||Ut()||qt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Je=()=>{var e;return(e=Wt())==null?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Xe(){try{return typeof indexedDB=="object"}catch{return!1}}function Qe(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;t(((o=a.error)==null?void 0:o.message)||"")}}catch(n){t(n)}})}function Kt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="FirebaseError";class B extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Gt,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a=`${this.service}/${t}`,o=this.errors[t],i=o?Yt(o,r):"Error",c=`${this.serviceName}: ${i} (${a}).`;return new B(a,c,r)}}function Yt(e,t){return e.replace(Jt,(n,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const Jt=/\{\$([^}]+)}/g;function oe(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const o=e[a],i=t[a];if(Ae(o)&&Ae(i)){if(!oe(o,i))return!1}else if(o!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function Ae(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return e&&e._delegate?e._delegate:e}class k{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new zt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zt(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&i.resolve(a)}return a}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(r)??new Set;a.add(t),this.onInitCallbacks.set(r,a);const o=this.instances.get(r);return o&&t(o,r),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qt(e){return e===C?void 0:e}function Zt(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Xt(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(p||(p={}));const tn={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},nn=p.INFO,rn={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},an=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),a=rn[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class on{constructor(t){this.name=t,this._logLevel=nn,this._logHandler=an,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in p))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...t),this._logHandler(this,p.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...t),this._logHandler(this,p.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,p.INFO,...t),this._logHandler(this,p.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,p.WARN,...t),this._logHandler(this,p.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...t),this._logHandler(this,p.ERROR,...t)}}const sn=(e,t)=>t.some(n=>e instanceof n);let Te,ke;function cn(){return Te||(Te=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ln(){return ke||(ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ze=new WeakMap,ie=new WeakMap,et=new WeakMap,K=new WeakMap,pe=new WeakMap;function dn(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(_(e.result)),a()},i=()=>{r(e.error),a()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Ze.set(n,e)}).catch(()=>{}),pe.set(t,e),t}function un(e){if(ie.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),a()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});ie.set(e,t)}let se={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ie.get(e);if(t==="objectStoreNames")return e.objectStoreNames||et.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hn(e){se=e(se)}function fn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(G(this),t,...n);return et.set(r,t.sort?t.sort():[t]),_(r)}:ln().includes(e)?function(...t){return e.apply(G(this),t),_(Ze.get(this))}:function(...t){return _(e.apply(G(this),t))}}function pn(e){return typeof e=="function"?fn(e):(e instanceof IDBTransaction&&un(e),sn(e,cn())?new Proxy(e,se):e)}function _(e){if(e instanceof IDBRequest)return dn(e);if(K.has(e))return K.get(e);const t=pn(e);return t!==e&&(K.set(e,t),pe.set(t,e)),t}const G=e=>pe.get(e);function U(e,t,{blocked:n,upgrade:r,blocking:a,terminated:o}={}){const i=indexedDB.open(e,t),c=_(i);return r&&i.addEventListener("upgradeneeded",d=>{r(_(i.result),d.oldVersion,d.newVersion,_(i.transaction),d)}),n&&i.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),a&&d.addEventListener("versionchange",l=>a(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function Y(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),_(n).then(()=>{})}const gn=["get","getKey","getAll","getAllKeys","count"],mn=["put","add","delete","clear"],J=new Map;function Ce(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(J.get(t))return J.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=mn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||gn.includes(n)))return;const o=async function(i,...c){const d=this.transaction(i,a?"readwrite":"readonly");let l=d.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),a&&d.done]))[0]};return J.set(t,o),o}hn(e=>({...e,get:(t,n,r)=>Ce(t,n)||e.get(t,n,r),has:(t,n)=>!!Ce(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ce="@firebase/app",Me="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=new on("@firebase/app"),yn="@firebase/app-compat",vn="@firebase/analytics-compat",Sn="@firebase/analytics",In="@firebase/app-check-compat",En="@firebase/app-check",Nn="@firebase/auth",_n="@firebase/auth-compat",Dn="@firebase/database",xn="@firebase/data-connect",An="@firebase/database-compat",Tn="@firebase/functions",kn="@firebase/functions-compat",Cn="@firebase/installations",Mn="@firebase/installations-compat",On="@firebase/messaging",Ln="@firebase/messaging-compat",Pn="@firebase/performance",Bn="@firebase/performance-compat",Rn="@firebase/remote-config",$n="@firebase/remote-config-compat",Fn="@firebase/storage",jn="@firebase/storage-compat",Hn="@firebase/firestore",Vn="@firebase/ai",Un="@firebase/firestore-compat",qn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]",Wn={[ce]:"fire-core",[yn]:"fire-core-compat",[Sn]:"fire-analytics",[vn]:"fire-analytics-compat",[En]:"fire-app-check",[In]:"fire-app-check-compat",[Nn]:"fire-auth",[_n]:"fire-auth-compat",[Dn]:"fire-rtdb",[xn]:"fire-data-connect",[An]:"fire-rtdb-compat",[Tn]:"fire-fn",[kn]:"fire-fn-compat",[Cn]:"fire-iid",[Mn]:"fire-iid-compat",[On]:"fire-fcm",[Ln]:"fire-fcm-compat",[Pn]:"fire-perf",[Bn]:"fire-perf-compat",[Rn]:"fire-rc",[$n]:"fire-rc-compat",[Fn]:"fire-gcs",[jn]:"fire-gcs-compat",[Hn]:"fire-fst",[Un]:"fire-fst-compat",[Vn]:"fire-vertex","fire-js":"fire-js",[qn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=new Map,zn=new Map,de=new Map;function Oe(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O(e){const t=e.name;if(de.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;de.set(t,e);for(const n of j.values())Oe(n,e);for(const n of zn.values())Oe(n,e);return!0}function ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},A=new V("app","Firebase",Kn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new k("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw A.create("app-deleted",{appName:this._name})}}function tt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:le,automaticDataCollectionEnabled:!0,...t},a=r.name;if(typeof a!="string"||!a)throw A.create("bad-app-name",{appName:String(a)});if(n||(n=Je()),!n)throw A.create("no-options");const o=j.get(a);if(o){if(oe(n,o.options)&&oe(r,o.config))return o;throw A.create("duplicate-app",{appName:a})}const i=new en(a);for(const d of de.values())i.addComponent(d);const c=new Gn(n,r,i);return j.set(a,c),c}function Yn(e=le){const t=j.get(e);if(!t&&e===le&&Je())return tt();if(!t)throw A.create("no-app",{appName:e});return t}function T(e,t,n){let r=Wn[e]??e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const i=[`Unable to register library "${r}" with version "${t}":`];a&&i.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&o&&i.push("and"),o&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),D.warn(i.join(" "));return}O(new k(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="firebase-heartbeat-database",Xn=1,R="firebase-heartbeat-store";let X=null;function nt(){return X||(X=U(Jn,Xn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(R)}catch(n){console.warn(n)}}}}).catch(e=>{throw A.create("idb-open",{originalErrorMessage:e.message})})),X}async function Qn(e){try{const n=(await nt()).transaction(R),r=await n.objectStore(R).get(rt(e));return await n.done,r}catch(t){if(t instanceof B)D.warn(t.message);else{const n=A.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});D.warn(n.message)}}}async function Le(e,t){try{const r=(await nt()).transaction(R,"readwrite");await r.objectStore(R).put(t,rt(e)),await r.done}catch(n){if(n instanceof B)D.warn(n.message);else{const r=A.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});D.warn(r.message)}}}function rt(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=1024,er=30;class tr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Pe();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>er){const i=ar(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){D.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pe(),{heartbeatsToSend:r,unsentEntries:a}=nr(this._heartbeatsCache.heartbeats),o=Ye(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return D.warn(n),""}}}function Pe(){return new Date().toISOString().substring(0,10)}function nr(e,t=Zn){const n=[];let r=e.slice();for(const a of e){const o=n.find(i=>i.agent===a.agent);if(o){if(o.dates.push(a.date),Be(n)>t){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xe()?Qe().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Le(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Le(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Be(e){return Ye(JSON.stringify({version:2,heartbeats:e})).length}function ar(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e){O(new k("platform-logger",t=>new bn(t),"PRIVATE")),O(new k("heartbeat",t=>new tr(t),"PRIVATE")),T(ce,Me,e),T(ce,Me,"esm2020"),T("fire-js","")}or("");var ir="firebase",sr="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */T(ir,sr,"app");const at="@firebase/installations",me="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=1e4,it=`w:${me}`,st="FIS_v2",cr="https://firebaseinstallations.googleapis.com/v1",lr=60*60*1e3,dr="installations",ur="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},L=new V(dr,ur,hr);function ct(e){return e instanceof B&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt({projectId:e}){return`${cr}/projects/${e}/installations`}function dt(e){return{token:e.token,requestStatus:2,expiresIn:pr(e.expiresIn),creationTime:Date.now()}}async function ut(e,t){const r=(await t.json()).error;return L.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ht({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function fr(e,{refreshToken:t}){const n=ht(e);return n.append("Authorization",gr(t)),n}async function ft(e){const t=await e();return t.status>=500&&t.status<600?e():t}function pr(e){return Number(e.replace("s","000"))}function gr(e){return`${st} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=lt(e),a=ht(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const i={fid:n,authVersion:st,appId:e.appId,sdkVersion:it},c={method:"POST",headers:a,body:JSON.stringify(i)},d=await ft(()=>fetch(r,c));if(d.ok){const l=await d.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:dt(l.authToken)}}else throw await ut("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=/^[cdef][\w-]{21}$/,ue="";function yr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=vr(e);return wr.test(n)?n:ue}catch{return ue}}function vr(e){return br(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Map;function mt(e,t){const n=q(e);bt(n,t),Sr(n,t)}function bt(e,t){const n=gt.get(e);if(n)for(const r of n)r(t)}function Sr(e,t){const n=Ir();n&&n.postMessage({key:e,fid:t}),Er()}let M=null;function Ir(){return!M&&"BroadcastChannel"in self&&(M=new BroadcastChannel("[Firebase] FID Change"),M.onmessage=e=>{bt(e.data.key,e.data.fid)}),M}function Er(){gt.size===0&&M&&(M.close(),M=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="firebase-installations-database",_r=1,P="firebase-installations-store";let Q=null;function be(){return Q||(Q=U(Nr,_r,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(P)}}})),Q}async function H(e,t){const n=q(e),a=(await be()).transaction(P,"readwrite"),o=a.objectStore(P),i=await o.get(n);return await o.put(t,n),await a.done,(!i||i.fid!==t.fid)&&mt(e,t.fid),t}async function wt(e){const t=q(e),r=(await be()).transaction(P,"readwrite");await r.objectStore(P).delete(t),await r.done}async function W(e,t){const n=q(e),a=(await be()).transaction(P,"readwrite"),o=a.objectStore(P),i=await o.get(n),c=t(i);return c===void 0?await o.delete(n):await o.put(c,n),await a.done,c&&(!i||i.fid!==c.fid)&&mt(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(e){let t;const n=await W(e.appConfig,r=>{const a=Dr(r),o=xr(e,a);return t=o.registrationPromise,o.installationEntry});return n.fid===ue?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Dr(e){const t=e||{fid:yr(),registrationStatus:0};return yt(t)}function xr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(L.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ar(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Tr(e)}:{installationEntry:t}}async function Ar(e,t){try{const n=await mr(e,t);return H(e.appConfig,n)}catch(n){throw ct(n)&&n.customData.serverCode===409?await wt(e.appConfig):await H(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Tr(e){let t=await Re(e.appConfig);for(;t.registrationStatus===1;)await pt(100),t=await Re(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await we(e);return r||n}return t}function Re(e){return W(e,t=>{if(!t)throw L.create("installation-not-found");return yt(t)})}function yt(e){return kr(e)?{fid:e.fid,registrationStatus:0}:e}function kr(e){return e.registrationStatus===1&&e.registrationTime+ot<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr({appConfig:e,heartbeatServiceProvider:t},n){const r=Mr(e,n),a=fr(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const i={installation:{sdkVersion:it,appId:e.appId}},c={method:"POST",headers:a,body:JSON.stringify(i)},d=await ft(()=>fetch(r,c));if(d.ok){const l=await d.json();return dt(l)}else throw await ut("Generate Auth Token",d)}function Mr(e,{fid:t}){return`${lt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ye(e,t=!1){let n;const r=await W(e.appConfig,o=>{if(!vt(o))throw L.create("not-registered");const i=o.authToken;if(!t&&Pr(i))return o;if(i.requestStatus===1)return n=Or(e,t),o;{if(!navigator.onLine)throw L.create("app-offline");const c=Rr(o);return n=Lr(e,c),c}});return n?await n:r.authToken}async function Or(e,t){let n=await $e(e.appConfig);for(;n.authToken.requestStatus===1;)await pt(100),n=await $e(e.appConfig);const r=n.authToken;return r.requestStatus===0?ye(e,t):r}function $e(e){return W(e,t=>{if(!vt(t))throw L.create("not-registered");const n=t.authToken;return $r(n)?{...t,authToken:{requestStatus:0}}:t})}async function Lr(e,t){try{const n=await Cr(e,t),r={...t,authToken:n};return await H(e.appConfig,r),n}catch(n){if(ct(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wt(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await H(e.appConfig,r)}throw n}}function vt(e){return e!==void 0&&e.registrationStatus===2}function Pr(e){return e.requestStatus===2&&!Br(e)}function Br(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+lr}function Rr(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function $r(e){return e.requestStatus===1&&e.requestTime+ot<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(e){const t=e,{installationEntry:n,registrationPromise:r}=await we(t);return r?r.catch(console.error):ye(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(e,t=!1){const n=e;return await Hr(n),(await ye(n,t)).token}async function Hr(e){const{registrationPromise:t}=await we(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){if(!e||!e.options)throw Z("App Configuration");if(!e.name)throw Z("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Z(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Z(e){return L.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="installations",Ur="installations-internal",qr=e=>{const t=e.getProvider("app").getImmediate(),n=Vr(t),r=ge(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Wr=e=>{const t=e.getProvider("app").getImmediate(),n=ge(t,St).getImmediate();return{getId:()=>Fr(n),getToken:a=>jr(n,a)}};function zr(){O(new k(St,qr,"PUBLIC")),O(new k(Ur,Wr,"PRIVATE"))}zr();T(at,me);T(at,me,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="/firebase-messaging-sw.js",Gr="/firebase-cloud-messaging-push-scope",It="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Yr="https://fcmregistrations.googleapis.com/v1",Et="google.c.a.c_id",Jr="google.c.a.c_l",Xr="google.c.a.ts",Qr="google.c.a.e",Fe=1e4;var je;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(je||(je={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var $;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})($||($={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Zr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let o=0;o<r.length;++o)a[o]=r.charCodeAt(o);return a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="fcm_token_details_db",ea=5,He="fcm_token_object_Store";async function ta(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(ee))return null;let t=null;return(await U(ee,ea,{upgrade:async(r,a,o,i)=>{if(a<2||!r.objectStoreNames.contains(He))return;const c=i.objectStore(He),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(a===2){const l=d;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:l.createTime??Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:N(l.vapidKey)}}}else if(a===3){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:N(l.auth),p256dh:N(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:N(l.vapidKey)}}}else if(a===4){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:N(l.auth),p256dh:N(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:N(l.vapidKey)}}}}}})).close(),await Y(ee),await Y("fcm_vapid_details_db"),await Y("undefined"),na(t)?t:null}function na(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="firebase-messaging-database",aa=1,F="firebase-messaging-store";let te=null;function Nt(){return te||(te=U(ra,aa,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(F)}}})),te}async function oa(e){const t=_t(e),r=await(await Nt()).transaction(F).objectStore(F).get(t);if(r)return r;{const a=await ta(e.appConfig.senderId);if(a)return await ve(e,a),a}}async function ve(e,t){const n=_t(e),a=(await Nt()).transaction(F,"readwrite");return await a.objectStore(F).put(t,n),await a.done,t}function _t({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},w=new V("messaging","Messaging",ia);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(e,t){const n=await Ie(e),r=Dt(t),a={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Se(e.appConfig),a)).json()}catch(i){throw w.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw w.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw w.create("token-subscribe-no-token");return o.token}async function ca(e,t){const n=await Ie(e),r=Dt(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Se(e.appConfig)}/${t.token}`,a)).json()}catch(i){throw w.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw w.create("token-update-failed",{errorInfo:i})}if(!o.token)throw w.create("token-update-no-token");return o.token}async function la(e,t){const r={method:"DELETE",headers:await Ie(e)};try{const o=await(await fetch(`${Se(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw w.create("token-unsubscribe-failed",{errorInfo:i})}}catch(a){throw w.create("token-unsubscribe-failed",{errorInfo:a==null?void 0:a.toString()})}}function Se({projectId:e}){return`${Yr}/projects/${e}/registrations`}async function Ie({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Dt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const a={web:{endpoint:n,auth:t,p256dh:e}};return r!==It&&(a.web.applicationPubKey=r),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=7*24*60*60*1e3;async function ua(e){const t=await fa(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:N(t.getKey("auth")),p256dh:N(t.getKey("p256dh"))},r=await oa(e.firebaseDependencies);if(r){if(pa(r.subscriptionOptions,n))return Date.now()>=r.createTime+da?ha(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await la(e.firebaseDependencies,r.token)}catch(a){console.warn(a)}return Ve(e.firebaseDependencies,n)}else return Ve(e.firebaseDependencies,n)}async function ha(e,t){try{const n=await ca(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await ve(e.firebaseDependencies,r),n}catch(n){throw n}}async function Ve(e,t){const r={token:await sa(e,t),createTime:Date.now(),subscriptionOptions:t};return await ve(e,r),r.token}async function fa(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Zr(t)})}function pa(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&a&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ga(t,e),ma(t,e),ba(t,e),t}function ga(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const a=t.notification.image;a&&(e.notification.image=a);const o=t.notification.icon;o&&(e.notification.icon=o)}function ma(e,t){t.data&&(e.data=t.data)}function ba(e,t){var a,o,i,c;if(!t.fcmOptions&&!((a=t.notification)!=null&&a.click_action))return;e.fcmOptions={};const n=((o=t.fcmOptions)==null?void 0:o.link)??((i=t.notification)==null?void 0:i.click_action);n&&(e.fcmOptions.link=n);const r=(c=t.fcmOptions)==null?void 0:c.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e){return typeof e=="object"&&!!e&&Et in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e){if(!e||!e.options)throw ne("App Configuration Object");if(!e.name)throw ne("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ne(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ne(e){return w.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=ya(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(e){try{e.swRegistration=await navigator.serviceWorker.register(Kr,{scope:Gr}),e.swRegistration.update().catch(()=>{}),await Ia(e.swRegistration)}catch(t){throw w.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function Ia(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Fe} ms`)),Fe),a=e.installing||e.waiting;e.active?(clearTimeout(r),t()):a?a.onstatechange=o=>{var i;((i=o.target)==null?void 0:i.state)==="activated"&&(a.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(e,t){if(!t&&!e.swRegistration&&await Sa(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw w.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=It)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t){if(!navigator)throw w.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw w.create("permission-blocked");return await Na(e,t==null?void 0:t.vapidKey),await Ea(e,t==null?void 0:t.serviceWorkerRegistration),ua(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(e,t,n){const r=Da(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Et],message_name:n[Jr],message_time:n[Xr],message_device_time:Math.floor(Date.now()/1e3)})}function Da(e){switch(e){case $.NOTIFICATION_CLICKED:return"notification_open";case $.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===$.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ue(n)):e.onMessageHandler.next(Ue(n)));const r=n.data;wa(r)&&r[Qr]==="1"&&await _a(e,n.messageType,r)}const qe="@firebase/messaging",We="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=e=>{const t=new va(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>xa(t,n)),t},Ta=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>xt(t,r)}};function ka(){O(new k("messaging",Aa,"PUBLIC")),O(new k("messaging-internal",Ta,"PRIVATE")),T(qe,We),T(qe,We,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(){try{await Qe()}catch{return!1}return typeof window<"u"&&Xe()&&Kt()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(e,t){if(!navigator)throw w.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e=Yn()){return Ca().then(t=>{if(!t)throw w.create("unsupported-browser")},t=>{throw w.create("indexed-db-unsupported")}),ge(fe(e),"messaging").getImmediate()}async function La(e,t){return e=fe(e),xt(e,t)}function Pa(e,t){return e=fe(e),Ma(e,t)}ka();const Ba={apiKey:"AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",authDomain:"your-auth-domain",projectId:"digitalliberia-notification",storageBucket:"your-storage-bucket",messagingSenderId:"537791418352",appId:"com.company.digitalliberia"},Ra=tt(Ba),At=Oa(Ra),$a="BEICu1bx8LKW5j7cag5tU9B2qfcejWi7QPm8a95jFODSIUNRiellygLGroK9NyWt-3WsTiUZscmS311gGXiXV7Q",Ee=async()=>{try{if(await Notification.requestPermission()==="granted"){console.log("Notification permission granted.");const t=await La(At,{vapidKey:$a});return t?(console.log("FCM Token:",t),localStorage.setItem("fcmToken",t),t):(console.log("No registration token available. Request permission to generate one."),null)}else return console.log("Unable to get permission to notify."),null}catch(e){return console.error("An error occurred while retrieving token:",e),null}};Pa(At,e=>{if(console.log("Message received in foreground:",e),e.notification){const{title:t,body:n}=e.notification;new Notification(t,{body:n})}});const Fa=[{label:"Home",to:"/",color:"bg-blue-500/80"},{label:"System",to:"/system",color:"bg-green-500/80"},{label:"Digital Liberia",to:"/digital-liberia",color:"bg-purple-500/80"},{label:"LibPay",to:"/libpay",color:"bg-yellow-500/80"},{label:"Liberian Post",to:"/liberian-post",color:"bg-pink-500/80"}],re=["/logos/liberianpost.png","/logos/digital.png","/logos/libmusic.png","/logos/libconnectsit.png","/logos/libpaysit.png","/logos/seal of liberia.png","/logos/liberia.png"],ae=[{id:"education",name:"Ministry of Education",description:"School management, student records, and educational resources",icon:"/logos/moe.png"},{id:"health",name:"Ministry of Health",description:"Health records, vaccination data, and medical services",icon:"/logos/moh.png"},{id:"finance",name:"Ministry of Finance",description:"Tax records, financial services, and economic data",icon:"/logos/mof.png"},{id:"justice",name:"Ministry of Justice",description:"Legal documents, court records, and law enforcement",icon:"/logos/moj.png"},{id:"transport",name:"Ministry of Transport",description:"Driver licenses, vehicle registration, and transport permits",icon:"/logos/mot.png"},{id:"foreign",name:"Ministry of Foreign Affairs",description:"Passport services and international relations",icon:"/logos/mofa.png"},{id:"agriculture",name:"Ministry of Agriculture",description:"Farming permits, agricultural data, and food security",icon:"/logos/moa.png"},{id:"internal",name:"Ministry of Internal Affairs",description:"Citizen IDs, birth certificates, and local governance",icon:"/logos/moia.png"},{id:"lands",name:"Ministry of Lands & Mines",description:"Land deeds, mining permits, and property records",icon:"/logos/mol.png"},{id:"commerce",name:"Ministry of Commerce",description:"Business registration and trade licenses",icon:"/logos/moc.png"},{id:"labour",name:"Ministry of Labour",description:"Employment records and worker rights",icon:"/logos/moll.png"},{id:"youth",name:"Ministry of Youth & Sports",description:"Youth programs and sporting events",icon:"/logos/moy.png"}],ja=[{id:"passport",name:"Passport"},{id:"birth-certificate",name:"Birth Certificate"},{id:"drivers-license",name:"Driver's License"},{id:"citizen-id",name:"Citizen ID"},{id:"business-registration",name:"Business Registration"},{id:"vehicle-registration",name:"Vehicle Registration"},{id:"land-deed",name:"Land Deed"},{id:"tax-services",name:"Tax Services"}],Ha=({onClose:e,onSuccess:t,service:n="Ministry of Education"})=>{const[r,a]=b.useState(""),[o,i]=b.useState(""),[c,d]=b.useState(!1),[l,x]=b.useState(null),[S,v]=b.useState(!1),[u,f]=b.useState(null),[m,Ne]=b.useState(null),Tt=async E=>{var y,I;try{const g=localStorage.getItem("fcmToken")||await Ee(),z=await De.post("/gov-services/request",{dssn:E,service:n,fcmToken:g,requestData:{timestamp:new Date().toISOString(),service:n,origin:window.location.origin}});if(!z.data.success)throw new Error(z.data.error||"Failed to initiate challenge");return z.data}catch(g){throw console.error("Error requesting DSSN challenge:",g),new Error(((I=(y=g.response)==null?void 0:y.data)==null?void 0:I.error)||g.message||"Failed to initiate DSSN challenge")}},kt=async E=>{var y,I;try{const g=await De.get(`/gov-services/status/${E}`);if(!g.data.success)throw new Error(g.data.error||"Failed to check challenge status");return g.data}catch(g){throw console.error("Error polling challenge status:",g),new Error(((I=(y=g.response)==null?void 0:y.data)==null?void 0:I.error)||g.message||"Failed to check approval status")}};b.useEffect(()=>()=>{u&&clearInterval(u)},[u]);const Ct=async E=>{if(E.preventDefault(),i(""),d(!0),Ne(null),!r.trim()){i("Please enter your DSSN"),d(!1);return}try{const y=await Tt(r);x(y.challengeId),v(!0),d(!1),y.pushNotification&&Ne({sent:y.pushNotification.sent,hasToken:y.pushNotification.hasToken,error:y.pushNotification.error});const I=setInterval(async()=>{try{const g=await kt(y.challengeId);g.status==="approved"?(clearInterval(I),v(!1),t(g.govToken,y.challengeId)):g.status==="denied"&&(clearInterval(I),v(!1),i("Access was denied on your mobile device"))}catch(g){console.error("Error polling challenge status:",g),clearInterval(I),v(!1),i(g.message)}},3e3);f(I),setTimeout(()=>{S&&(clearInterval(I),v(!1),i("Request timed out. Please try again."))},5*60*1e3)}catch(y){i(y.message),d(!1)}};return s("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",children:h("div",{className:"bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl",children:[h("div",{className:"bg-blue-600 p-4 flex justify-between items-center",children:[h("h2",{className:"text-xl font-bold text-white",children:[n," - DSSN Verification"]}),s("button",{onClick:e,className:"text-white text-2xl hover:text-gray-200",disabled:S||c,children:"×"})]}),h("div",{className:"p-6",children:[s("div",{className:"flex justify-center mb-6",children:s("img",{src:"/logos/moe.png",alt:"MOE Logo",className:"w-20 h-20 object-contain"})}),o&&s("div",{className:"mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm",children:o}),m&&!m.sent&&s("div",{className:"mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md text-sm",children:m.hasToken?`Push notification failed: ${m.error||"Unknown error"}`:"User doesn't have the mobile app installed. Please ask them to download it."}),S?h("div",{className:"text-center",children:[s("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),s("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Waiting for Mobile Approval"}),s("p",{className:"text-gray-600 mb-4",children:"Please check your mobile app to approve this verification request."}),(m==null?void 0:m.sent)&&s("p",{className:"text-sm text-green-600 mb-2",children:"✓ Push notification sent to mobile device"}),h("p",{className:"text-sm text-gray-500",children:["Challenge ID: ",l]}),s("p",{className:"text-xs text-gray-400 mt-2",children:"This request will timeout in 5 minutes"})]}):h("form",{onSubmit:Ct,children:[h("div",{className:"mb-4",children:[s("label",{className:"block text-gray-900 mb-2 font-medium",children:"Digital Social Security Number (DSSN)"}),s("input",{type:"text",value:r,onChange:E=>a(E.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900",placeholder:"Enter your DSSN",required:!0,autoFocus:!0,disabled:c}),s("p",{className:"text-sm text-gray-500 mt-1",children:"Enter your DSSN and approve the request on your mobile app"})]}),s("button",{type:"submit",disabled:c,className:`w-full py-3 px-4 rounded-md text-white font-semibold ${c?"bg-blue-400":"bg-blue-600 hover:bg-blue-700"} transition-colors flex items-center justify-center`,children:c?h(Pt,{children:[h("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[s("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),s("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"Verify with DSSN"})]}),s("div",{className:"mt-4 text-center text-sm border-t border-gray-200 pt-4",children:h("p",{className:"text-gray-600",children:["Don't have the mobile app? ",s("a",{href:"#",className:"text-blue-600 hover:underline",onClick:E=>{E.preventDefault(),alert("The Digital Liberia mobile app is available on the App Store and Google Play Store")},children:"Download it here"})]})})]})]})})},qa=()=>{const{user:e,logout:t}=ze(),n=he(),[r]=b.useState(new Date);b.useEffect(()=>{Ee()},[]);const a=()=>{Object.keys(localStorage).filter(d=>d.startsWith("MOE_")).forEach(d=>localStorage.removeItem(d)),t(),n("/system")};if(b.useEffect(()=>{e||n("/system")},[e,n]),!e)return null;const o=Ot.filter(c=>c.requiredLevel<=e.securityLevel),i=c=>c.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return s("div",{className:"min-h-screen bg-gray-100 p-6",children:h("div",{className:"max-w-6xl mx-auto",children:[h("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6 flex justify-between items-center",children:[h("div",{children:[h("h1",{className:"text-2xl font-bold text-gray-800",children:["Welcome, ",e.username]}),s("p",{className:"text-gray-600",children:i(r)}),h("p",{className:"text-sm text-gray-500",children:["DSSN: ",localStorage.getItem("MOE_DSSN")||"Not available"]})]}),s("button",{onClick:a,className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors",children:"Logout"})]}),s("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map(c=>s("div",{onClick:()=>n(c.path),className:"bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow",children:h("div",{className:"flex items-center space-x-4",children:[s("div",{className:"p-3 rounded-full bg-blue-100 text-blue-600",children:s("span",{className:"text-xl",children:c.icon})}),h("div",{children:[s("h2",{className:"font-bold text-lg",children:c.title}),c.requiredLevel>=Lt.SCHOOL_ADMIN&&s("span",{className:"text-xs px-2 py-1 bg-blue-600 text-white rounded-full",children:Va(c.requiredLevel).toUpperCase()})]})]})},c.id))})]})})},Wa=()=>{const e=he();return s("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:h("div",{className:"bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center",children:[s("div",{className:"text-red-500 mb-4",children:s("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),s("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Access Denied"}),s("p",{className:"text-gray-600 mb-6",children:"You don't have permission to access this page. Please contact your administrator if you believe this is an error."}),s("button",{onClick:()=>e(-1),className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Go Back"})]})})},za=()=>{var v;const{user:e}=ze(),t=Mt(),n=he(),[r,a]=b.useState(0),[o,i]=b.useState(!1),[c,d]=b.useState(null);b.useEffect(()=>{const u=setInterval(()=>{a(f=>(f+1)%re.length)},600);return()=>clearInterval(u)},[]),b.useEffect(()=>{localStorage.getItem("MOE_LOGGED_IN")==="true"&&e?n("/moe-dashboard"):e||Object.keys(localStorage).filter(m=>m.startsWith("MOE_")).forEach(m=>localStorage.removeItem(m))},[e,n]),b.useEffect(()=>{Ee()},[]);const l=async(u,f)=>{try{const m=JSON.parse(atob(u.split(".")[1]));localStorage.setItem("MOE_USER_ID",m.userId),localStorage.setItem("MOE_USERNAME","DSSN User"),localStorage.setItem("MOE_SECURITY_LEVEL","1"),localStorage.setItem("MOE_LOGGED_IN","true"),localStorage.setItem("MOE_GOV_TOKEN",u),localStorage.setItem("MOE_DSSN",m.dssn||""),localStorage.setItem("MOE_CHALLENGE_ID",f||""),localStorage.setItem("MOE_LOGIN_TIMESTAMP",new Date().toISOString()),i(!1),n("/moe-dashboard")}catch(m){console.error("Error processing DSSN login:",m),alert("Login failed. Please try again.")}},x=(u,f)=>{f.stopPropagation(),d(u),u==="education"?e?n("/moe-dashboard"):i(!0):(ae.find(m=>m.id===u),i(!0))},S=(u,f)=>{f.stopPropagation(),alert(`${u.replace("-"," ")} service will be available soon`)};return h("div",{className:"relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden",children:[s("div",{className:"fixed inset-0 bg-blue-950 -z-50"}),s("div",{className:"fixed inset-0 flex items-center justify-center z-10 pointer-events-none",children:s("div",{className:"relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center",children:re.map((u,f)=>h("div",{className:`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${f===r?"opacity-100":"opacity-0"}`,children:[s("img",{src:u,alt:`Logo ${f}`,className:"max-w-full max-h-full object-contain"}),s("div",{className:"absolute inset-0 bg-black/5"})]},f))})}),s("header",{className:"fixed top-0 left-0 w-full z-50",children:h("div",{className:"bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30",children:[s("div",{className:"flex items-center justify-center px-4 py-4 max-w-7xl mx-auto",children:s("nav",{className:"flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center",children:Fa.map(u=>s("div",{className:`flex-shrink-0 ${u.color} px-3 py-1 rounded-lg`,children:s(_e,{to:u.to,className:`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${t.pathname===u.to?"text-red-500":"text-white hover:text-blue-300"}`,children:u.label})},u.to))})}),s("div",{className:"w-full bg-gradient-to-b from-blue-950 to-transparent overflow-x-auto",children:s("div",{className:"flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3",children:re.map((u,f)=>s("div",{className:`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${f===r?"scale-110 bg-white shadow-lg":"scale-100 bg-white/90"}`,style:{animation:f===r?"heartbeat 600ms ease-in-out":"none"},children:s("img",{src:u,alt:`Logo ${f}`,className:"w-12 h-12 md:w-16 md:h-16 object-contain"})},f))})})]})}),h("main",{className:"relative z-30 pt-48 pb-20 px-4 md:px-8",children:[s("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:h("div",{className:"bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-600/10 backdrop-blur-lg rounded-xl border border-rose-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[s("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),h("div",{className:"relative",children:[s("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Social Security Number (DSSN)"}),h("div",{className:"text-white space-y-4",children:[s("p",{children:"In the Digital Liberia project, the DSSN (Digital Social Security Number) is a unique digital identifier assigned to every Liberian citizen or legal resident within the system."}),s(_e,{to:"/dssn",className:"inline-flex items-center bg-blue-500/80 backdrop-blur-sm rounded-lg px-3 py-1 ml-2 border border-blue-400/30 cursor-pointer hover:bg-blue-600/80 transition-colors",children:"(click here to verify a DSSN)"})]})]})]})}),s("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:h("div",{className:"bg-gradient-to-br from-green-500/10 via-teal-500/10 to-emerald-600/10 backdrop-blur-lg rounded-xl border border-green-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[s("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),h("div",{className:"relative",children:[s("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Liberia System"}),s("div",{className:"text-white",children:s("p",{children:"The National Database Management System (NDMS) is the secure, centralized, and intelligent national data backbone that powers Digital Liberia."})})]})]})}),s("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:h("div",{className:"bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-purple-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[s("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),h("div",{className:"relative",children:[s("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Government Ministries"}),s("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:ae.map(u=>s("div",{onClick:f=>x(u.id,f),className:"cursor-pointer bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm relative z-20",children:h("div",{className:"flex items-center space-x-4",children:[s("img",{src:u.icon,alt:u.name,className:"w-12 h-12 object-contain"}),h("div",{children:[s("h3",{className:"font-bold text-lg",children:u.name}),s("p",{className:"text-sm text-white/80",children:u.description})]})]})},u.id))})]})]})}),s("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:h("div",{className:"bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-blue-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[s("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),h("div",{className:"relative",children:[s("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Quick Access Services"}),s("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:ja.map(u=>s("button",{onClick:f=>S(u.id,f),className:"bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm text-left",children:s("h3",{className:"font-bold text-lg",children:u.name})},u.id))})]})]})})]}),s("footer",{className:"relative z-30 py-6 text-center text-white/60 text-sm",children:h("div",{className:"border-t border-blue-700/30 pt-6",children:["© ",new Date().getFullYear()," Digital Liberia. All rights reserved."]})}),o&&s(Ha,{onClose:()=>i(!1),onSuccess:l,service:c?(v=ae.find(u=>u.id===c))==null?void 0:v.name:"Ministry of Education"}),s("style",{jsx:!0,global:!0,children:`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `})]})};function Va(e){return{1:"User",2:"School Admin",3:"District Admin",4:"Ministry Admin",5:"System Admin"}[e]||"Unknown"}export{qa as MoeDashboard,Wa as UnauthorizedPage,za as default};
