import{u as ea,a as ta,b as na,r as ee,j as L,c as T,L as vr,F as ia,d as br}from"./index-uDW1mizO.js";const ra=()=>{};var Ir={};/**
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
 */const ps=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[i++]=a:a<2048?(e[i++]=a>>6|192,e[i++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=a>>18|240,e[i++]=a>>12&63|128,e[i++]=a>>6&63|128,e[i++]=a&63|128):(e[i++]=a>>12|224,e[i++]=a>>6&63|128,e[i++]=a&63|128)}return e},sa=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const a=n[i++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const h=n[i++];e[r++]=String.fromCharCode((a&31)<<6|h&63)}else if(a>239&&a<365){const h=n[i++],l=n[i++],b=n[i++],I=((a&7)<<18|(h&63)<<12|(l&63)<<6|b&63)-65536;e[r++]=String.fromCharCode(55296+(I>>10)),e[r++]=String.fromCharCode(56320+(I&1023))}else{const h=n[i++],l=n[i++];e[r++]=String.fromCharCode((a&15)<<12|(h&63)<<6|l&63)}}return e.join("")},gs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const h=n[a],l=a+1<n.length,b=l?n[a+1]:0,I=a+2<n.length,v=I?n[a+2]:0,k=h>>2,N=(h&3)<<4|b>>4;let H=(b&15)<<2|v>>6,z=v&63;I||(z=64,l||(H=64)),r.push(i[k],i[N],i[H],i[z])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ps(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const h=i[n.charAt(a++)],b=a<n.length?i[n.charAt(a)]:0;++a;const v=a<n.length?i[n.charAt(a)]:64;++a;const N=a<n.length?i[n.charAt(a)]:64;if(++a,h==null||b==null||v==null||N==null)throw new oa;const H=h<<2|b>>4;if(r.push(H),v!==64){const z=b<<4&240|v>>2;if(r.push(z),N!==64){const F=v<<6&192|N;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aa=function(n){const e=ps(n);return gs.encodeByteArray(e,!0)},ms=function(n){return aa(n).replace(/\./g,"")},ys=function(n){try{return gs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ca(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ha=()=>ca().__FIREBASE_DEFAULTS__,la=()=>{if(typeof process>"u"||typeof Ir>"u")return;const n=Ir.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ua=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ys(n[1]);return e&&JSON.parse(e)},ws=()=>{try{return ra()||ha()||la()||ua()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_s=()=>{var n;return(n=ws())==null?void 0:n.config},da=n=>{var e;return(e=ws())==null?void 0:e[`_${n}`]};/**
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
 */class fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function vs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function ga(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ma(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ya(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bs(){try{return typeof indexedDB=="object"}catch{return!1}}function Is(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{i=!1},a.onerror=()=>{var h;e(((h=a.error)==null?void 0:h.message)||"")}}catch(i){e(i)}})}function wa(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _a="FirebaseError";class be extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=_a,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},a=`${this.service}/${e}`,h=this.errors[e],l=h?va(h,r):"Error",b=`${this.serviceName}: ${l} (${a}).`;return new be(a,b,r)}}function va(n,e){return n.replace(ba,(i,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const ba=/\{\$([^}]+)}/g;function Yn(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const a of i){if(!r.includes(a))return!1;const h=n[a],l=e[a];if(Sr(h)&&Sr(l)){if(!Yn(h,l))return!1}else if(h!==l)return!1}for(const a of r)if(!i.includes(a))return!1;return!0}function Sr(n){return n!==null&&typeof n=="object"}/**
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
 */function Ss(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ia(n,e){const i=new Sa(n,e);return i.subscribe.bind(i)}class Sa{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let a;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");Ea(e,["next","error","complete"])?a=e:a={next:e,error:i,complete:r},a.next===void 0&&(a.next=Ln),a.error===void 0&&(a.error=Ln),a.complete===void 0&&(a.complete=Ln);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ea(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Ln(){}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class ce{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xe="[DEFAULT]";/**
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
 */class Ta{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new fa;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:i});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Na(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:a});r.resolve(h)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[h,l]of this.instancesDeferred.entries()){const b=this.normalizeInstanceIdentifier(h);r===b&&l.resolve(a)}return a}onInit(e,i){const r=this.normalizeInstanceIdentifier(i),a=this.onInitCallbacks.get(r)??new Set;a.add(e),this.onInitCallbacks.set(r,a);const h=this.instances.get(r);return h&&e(h,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const a of r)try{a(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Aa(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aa(n){return n===xe?void 0:n}function Na(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ca{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Ta(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const ka={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Pa=x.INFO,Da={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Ra=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=Da[e];if(a)console[a](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oi{constructor(e){this.name=e,this._logLevel=Pa,this._logHandler=Ra,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ka[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Oa=(n,e)=>e.some(i=>n instanceof i);let Er,Tr;function Ma(){return Er||(Er=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function La(){return Tr||(Tr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Es=new WeakMap,Qn=new WeakMap,Ts=new WeakMap,xn=new WeakMap,ai=new WeakMap;function xa(n){const e=new Promise((i,r)=>{const a=()=>{n.removeEventListener("success",h),n.removeEventListener("error",l)},h=()=>{i(_e(n.result)),a()},l=()=>{r(n.error),a()};n.addEventListener("success",h),n.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&Es.set(i,n)}).catch(()=>{}),ai.set(e,n),e}function Ua(n){if(Qn.has(n))return;const e=new Promise((i,r)=>{const a=()=>{n.removeEventListener("complete",h),n.removeEventListener("error",l),n.removeEventListener("abort",l)},h=()=>{i(),a()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",h),n.addEventListener("error",l),n.addEventListener("abort",l)});Qn.set(n,e)}let Zn={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return Qn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ts.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return _e(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fa(n){Zn=n(Zn)}function Va(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(Un(this),e,...i);return Ts.set(r,e.sort?e.sort():[e]),_e(r)}:La().includes(n)?function(...e){return n.apply(Un(this),e),_e(Es.get(this))}:function(...e){return _e(n.apply(Un(this),e))}}function ja(n){return typeof n=="function"?Va(n):(n instanceof IDBTransaction&&Ua(n),Oa(n,Ma())?new Proxy(n,Zn):n)}function _e(n){if(n instanceof IDBRequest)return xa(n);if(xn.has(n))return xn.get(n);const e=ja(n);return e!==n&&(xn.set(n,e),ai.set(e,n)),e}const Un=n=>ai.get(n);function nn(n,e,{blocked:i,upgrade:r,blocking:a,terminated:h}={}){const l=indexedDB.open(n,e),b=_e(l);return r&&l.addEventListener("upgradeneeded",I=>{r(_e(l.result),I.oldVersion,I.newVersion,_e(l.transaction),I)}),i&&l.addEventListener("blocked",I=>i(I.oldVersion,I.newVersion,I)),b.then(I=>{h&&I.addEventListener("close",()=>h()),a&&I.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),b}function Fn(n,{blocked:e}={}){const i=indexedDB.deleteDatabase(n);return e&&i.addEventListener("blocked",r=>e(r.oldVersion,r)),_e(i).then(()=>{})}const Ba=["get","getKey","getAll","getAllKeys","count"],$a=["put","add","delete","clear"],Vn=new Map;function Ar(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vn.get(e))return Vn.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,a=$a.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Ba.includes(i)))return;const h=async function(l,...b){const I=this.transaction(l,a?"readwrite":"readonly");let v=I.store;return r&&(v=v.index(b.shift())),(await Promise.all([v[i](...b),a&&I.done]))[0]};return Vn.set(e,h),h}Fa(n=>({...n,get:(e,i,r)=>Ar(e,i)||n.get(e,i,r),has:(e,i)=>!!Ar(e,i)||n.has(e,i)}));/**
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
 */class Ha{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(za(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function za(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ei="@firebase/app",Nr="0.14.4";/**
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
 */const ve=new oi("@firebase/app"),qa="@firebase/app-compat",Ga="@firebase/analytics-compat",Wa="@firebase/analytics",Ka="@firebase/app-check-compat",Ja="@firebase/app-check",Xa="@firebase/auth",Ya="@firebase/auth-compat",Qa="@firebase/database",Za="@firebase/data-connect",ec="@firebase/database-compat",tc="@firebase/functions",nc="@firebase/functions-compat",ic="@firebase/installations",rc="@firebase/installations-compat",sc="@firebase/messaging",oc="@firebase/messaging-compat",ac="@firebase/performance",cc="@firebase/performance-compat",hc="@firebase/remote-config",lc="@firebase/remote-config-compat",uc="@firebase/storage",dc="@firebase/storage-compat",fc="@firebase/firestore",pc="@firebase/ai",gc="@firebase/firestore-compat",mc="firebase",yc="12.4.0";/**
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
 */const ti="[DEFAULT]",wc={[ei]:"fire-core",[qa]:"fire-core-compat",[Wa]:"fire-analytics",[Ga]:"fire-analytics-compat",[Ja]:"fire-app-check",[Ka]:"fire-app-check-compat",[Xa]:"fire-auth",[Ya]:"fire-auth-compat",[Qa]:"fire-rtdb",[Za]:"fire-data-connect",[ec]:"fire-rtdb-compat",[tc]:"fire-fn",[nc]:"fire-fn-compat",[ic]:"fire-iid",[rc]:"fire-iid-compat",[sc]:"fire-fcm",[oc]:"fire-fcm-compat",[ac]:"fire-perf",[cc]:"fire-perf-compat",[hc]:"fire-rc",[lc]:"fire-rc-compat",[uc]:"fire-gcs",[dc]:"fire-gcs-compat",[fc]:"fire-fst",[gc]:"fire-fst-compat",[pc]:"fire-vertex","fire-js":"fire-js",[mc]:"fire-js-all"};/**
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
 */const Wt=new Map,_c=new Map,ni=new Map;function Cr(n,e){try{n.container.addComponent(e)}catch(i){ve.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function me(n){const e=n.name;if(ni.has(e))return ve.debug(`There were multiple attempts to register component ${e}.`),!1;ni.set(e,n);for(const i of Wt.values())Cr(i,n);for(const i of _c.values())Cr(i,n);return!0}function ci(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ke=new We("app","Firebase",vc);/**
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
 */class bc{constructor(e,i,r){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
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
 */const rn=yc;function As(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r={name:ti,automaticDataCollectionEnabled:!0,...e},a=r.name;if(typeof a!="string"||!a)throw ke.create("bad-app-name",{appName:String(a)});if(i||(i=_s()),!i)throw ke.create("no-options");const h=Wt.get(a);if(h){if(Yn(i,h.options)&&Yn(r,h.config))return h;throw ke.create("duplicate-app",{appName:a})}const l=new Ca(a);for(const I of ni.values())l.addComponent(I);const b=new bc(i,r,l);return Wt.set(a,b),b}function Ic(n=ti){const e=Wt.get(n);if(!e&&n===ti&&_s())return As();if(!e)throw ke.create("no-app",{appName:n});return e}function se(n,e,i){let r=wc[n]??n;i&&(r+=`-${i}`);const a=r.match(/\s|\//),h=e.match(/\s|\//);if(a||h){const l=[`Unable to register library "${r}" with version "${e}":`];a&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&h&&l.push("and"),h&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ve.warn(l.join(" "));return}me(new ce(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Sc="firebase-heartbeat-database",Ec=1,St="firebase-heartbeat-store";let jn=null;function Ns(){return jn||(jn=nn(Sc,Ec,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(St)}catch(i){console.warn(i)}}}}).catch(n=>{throw ke.create("idb-open",{originalErrorMessage:n.message})})),jn}async function Tc(n){try{const i=(await Ns()).transaction(St),r=await i.objectStore(St).get(Cs(n));return await i.done,r}catch(e){if(e instanceof be)ve.warn(e.message);else{const i=ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ve.warn(i.message)}}}async function kr(n,e){try{const r=(await Ns()).transaction(St,"readwrite");await r.objectStore(St).put(e,Cs(n)),await r.done}catch(i){if(i instanceof be)ve.warn(i.message);else{const r=ke.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});ve.warn(r.message)}}}function Cs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ac=1024,Nc=30;class Cc{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Pc(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=Pr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(l=>l.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:a}),this._heartbeatsCache.heartbeats.length>Nc){const l=Dc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ve.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Pr(),{heartbeatsToSend:r,unsentEntries:a}=kc(this._heartbeatsCache.heartbeats),h=ms(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return ve.warn(i),""}}}function Pr(){return new Date().toISOString().substring(0,10)}function kc(n,e=Ac){const i=[];let r=n.slice();for(const a of n){const h=i.find(l=>l.agent===a.agent);if(h){if(h.dates.push(a.date),Dr(i)>e){h.dates.pop();break}}else if(i.push({agent:a.agent,dates:[a.date]}),Dr(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Pc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bs()?Is().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Tc(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Dr(n){return ms(JSON.stringify({version:2,heartbeats:n})).length}function Dc(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let r=1;r<n.length;r++)n[r].date<i&&(i=n[r].date,e=r);return e}/**
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
 */function Rc(n){me(new ce("platform-logger",e=>new Ha(e),"PRIVATE")),me(new ce("heartbeat",e=>new Cc(e),"PRIVATE")),se(ei,Nr,n),se(ei,Nr,"esm2020"),se("fire-js","")}Rc("");var Oc="firebase",Mc="12.4.0";/**
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
 */se(Oc,Mc,"app");function ks(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lc=ks,Ps=new We("auth","Firebase",ks());/**
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
 */const Kt=new oi("@firebase/auth");function xc(n,...e){Kt.logLevel<=x.WARN&&Kt.warn(`Auth (${rn}): ${n}`,...e)}function zt(n,...e){Kt.logLevel<=x.ERROR&&Kt.error(`Auth (${rn}): ${n}`,...e)}/**
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
 */function Rr(n,...e){throw hi(n,...e)}function Ds(n,...e){return hi(n,...e)}function Rs(n,e,i){const r={...Lc(),[e]:i};return new We("auth","Firebase",r).create(e,{appName:n.name})}function qt(n){return Rs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hi(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return Ps.create(n,...e)}function R(n,e,...i){if(!n)throw hi(e,...i)}function wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zt(e),new Error(e)}function Jt(n,e){n||wt(e)}function Uc(){return Or()==="http:"||Or()==="https:"}function Or(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Fc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uc()||ma()||"connection"in navigator)?navigator.onLine:!0}function Vc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class At{constructor(e,i){this.shortDelay=e,this.longDelay=i,Jt(i>e,"Short delay should be less than long delay!"),this.isMobile=pa()||ya()}get(){return Fc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jc(n,e){Jt(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Os{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $c=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hc=new At(3e4,6e4);function Ms(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function sn(n,e,i,r,a={}){return Ls(n,a,async()=>{let h={},l={};r&&(e==="GET"?l=r:h={body:JSON.stringify(r)});const b=Ss({key:n.config.apiKey,...l}).slice(1),I=await n._getAdditionalHeaders();I["Content-Type"]="application/json",n.languageCode&&(I["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:I,...h};return ga()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&vs(n.emulatorConfig.host)&&(v.credentials="include"),Os.fetch()(await xs(n,n.config.apiHost,i,b),v)})}async function Ls(n,e,i){n._canInitEmulator=!1;const r={...Bc,...e};try{const a=new zc(n),h=await Promise.race([i(),a.promise]);a.clearNetworkTimeout();const l=await h.json();if("needConfirmation"in l)throw jt(n,"account-exists-with-different-credential",l);if(h.ok&&!("errorMessage"in l))return l;{const b=h.ok?l.errorMessage:l.error.message,[I,v]=b.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw jt(n,"credential-already-in-use",l);if(I==="EMAIL_EXISTS")throw jt(n,"email-already-in-use",l);if(I==="USER_DISABLED")throw jt(n,"user-disabled",l);const k=r[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Rs(n,k,v);Rr(n,k)}}catch(a){if(a instanceof be)throw a;Rr(n,"network-request-failed",{message:String(a)})}}async function xs(n,e,i,r){const a=`${e}${i}?${r}`,h=n,l=h.config.emulator?jc(n.config,a):`${n.config.apiScheme}://${a}`;return $c.includes(i)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(l).toString():l}class zc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(Ds(this.auth,"network-request-failed")),Hc.get())})}}function jt(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const a=Ds(n,e,r);return a.customData._tokenResponse=i,a}/**
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
 */async function qc(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function Xt(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function _t(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gc(n,e=!1){const i=Ke(n),r=await i.getIdToken(e),a=Us(r);R(a&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error");const h=typeof a.firebase=="object"?a.firebase:void 0,l=h==null?void 0:h.sign_in_provider;return{claims:a,token:r,authTime:_t(Bn(a.auth_time)),issuedAtTime:_t(Bn(a.iat)),expirationTime:_t(Bn(a.exp)),signInProvider:l||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function Bn(n){return Number(n)*1e3}function Us(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return zt("JWT malformed, contained fewer than 3 sections"),null;try{const a=ys(i);return a?JSON.parse(a):(zt("Failed to decode base64 JWT payload"),null)}catch(a){return zt("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Mr(n){const e=Us(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ii(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof be&&Wc(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Kc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ri{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=_t(this.lastLoginAt),this.creationTime=_t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yt(n){var N;const e=n.auth,i=await n.getIdToken(),r=await ii(n,Xt(e,{idToken:i}));R(r==null?void 0:r.users.length,e,"internal-error");const a=r.users[0];n._notifyReloadListener(a);const h=(N=a.providerUserInfo)!=null&&N.length?Fs(a.providerUserInfo):[],l=Xc(n.providerData,h),b=n.isAnonymous,I=!(n.email&&a.passwordHash)&&!(l!=null&&l.length),v=b?I:!1,k={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new ri(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,k)}async function Jc(n){const e=Ke(n);await Yt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xc(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function Fs(n){return n.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Yc(n,e){const i=await Ls(n,{},async()=>{const r=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:h}=n.config,l=await xs(n,a,"/v1/token",`key=${h}`),b=await n._getAdditionalHeaders();b["Content-Type"]="application/x-www-form-urlencoded";const I={method:"POST",headers:b,body:r};return n.emulatorConfig&&vs(n.emulatorConfig.host)&&(I.credentials="include"),Os.fetch()(l,I)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Qc(n,e){return sn(n,"POST","/v2/accounts:revokeToken",Ms(n,e))}/**
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
 */class Ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){R(e.length!==0,"internal-error");const i=Mr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:a,expiresIn:h}=await Yc(e,i);this.updateTokensAndExpiration(r,a,Number(h))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:a,expirationTime:h}=i,l=new Ze;return r&&(R(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),a&&(R(typeof a=="string","internal-error",{appName:e}),l.accessToken=a),h&&(R(typeof h=="number","internal-error",{appName:e}),l.expirationTime=h),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ze,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
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
 */function Ce(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fe{constructor({uid:e,auth:i,stsTokenManager:r,...a}){this.providerId="firebase",this.proactiveRefresh=new Kc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ri(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const i=await ii(this,this.stsTokenManager.getToken(this.auth,e));return R(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Gc(this,e)}reload(){return Jc(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new fe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await Yt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(qt(this.auth));const e=await this.getIdToken();return await ii(this,qc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const r=i.displayName??void 0,a=i.email??void 0,h=i.phoneNumber??void 0,l=i.photoURL??void 0,b=i.tenantId??void 0,I=i._redirectEventId??void 0,v=i.createdAt??void 0,k=i.lastLoginAt??void 0,{uid:N,emailVerified:H,isAnonymous:z,providerData:F,stsTokenManager:E}=i;R(N&&E,e,"internal-error");const A=Ze.fromJSON(this.name,E);R(typeof N=="string",e,"internal-error"),Ce(r,e.name),Ce(a,e.name),R(typeof H=="boolean",e,"internal-error"),R(typeof z=="boolean",e,"internal-error"),Ce(h,e.name),Ce(l,e.name),Ce(b,e.name),Ce(I,e.name),Ce(v,e.name),Ce(k,e.name);const D=new fe({uid:N,auth:e,email:a,emailVerified:H,displayName:r,isAnonymous:z,photoURL:l,phoneNumber:h,tenantId:b,stsTokenManager:A,createdAt:v,lastLoginAt:k});return F&&Array.isArray(F)&&(D.providerData=F.map(B=>({...B}))),I&&(D._redirectEventId=I),D}static async _fromIdTokenResponse(e,i,r=!1){const a=new Ze;a.updateFromServerResponse(i);const h=new fe({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Yt(h),h}static async _fromGetAccountInfoResponse(e,i,r){const a=i.users[0];R(a.localId!==void 0,"internal-error");const h=a.providerUserInfo!==void 0?Fs(a.providerUserInfo):[],l=!(a.email&&a.passwordHash)&&!(h!=null&&h.length),b=new Ze;b.updateFromIdToken(r);const I=new fe({uid:a.localId,auth:e,stsTokenManager:b,isAnonymous:l}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new ri(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(h!=null&&h.length)};return Object.assign(I,v),I}}/**
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
 */const Lr=new Map;function Ve(n){Jt(n instanceof Function,"Expected a class definition");let e=Lr.get(n);return e?(Jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Lr.set(n,e),e)}/**
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
 */class Vs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Vs.type="NONE";const xr=Vs;/**
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
 */function $n(n,e,i){return`firebase:${n}:${e}:${i}`}class et{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:a,name:h}=this.auth;this.fullUserKey=$n(this.userKey,a.apiKey,h),this.fullPersistenceKey=$n("persistence",a.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Xt(this.auth,{idToken:e}).catch(()=>{});return i?fe._fromGetAccountInfoResponse(this.auth,i,e):null}return fe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new et(Ve(xr),e,r);const a=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let h=a[0]||Ve(xr);const l=$n(r,e.config.apiKey,e.name);let b=null;for(const v of i)try{const k=await v._get(l);if(k){let N;if(typeof k=="string"){const H=await Xt(e,{idToken:k}).catch(()=>{});if(!H)break;N=await fe._fromGetAccountInfoResponse(e,H,k)}else N=fe._fromJSON(e,k);v!==h&&(b=N),h=v;break}}catch{}const I=a.filter(v=>v._shouldAllowMigration);return!h._shouldAllowMigration||!I.length?new et(h,e,r):(h=I[0],b&&await h._set(l,b.toJSON()),await Promise.all(i.map(async v=>{if(v!==h)try{await v._remove(l)}catch{}})),new et(h,e,r))}}/**
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
 */function Ur(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rh(e))return"Blackberry";if(sh(e))return"Webos";if(eh(e))return"Safari";if((e.includes("chrome/")||th(e))&&!e.includes("edge/"))return"Chrome";if(ih(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zc(n=ge()){return/firefox\//i.test(n)}function eh(n=ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function th(n=ge()){return/crios\//i.test(n)}function nh(n=ge()){return/iemobile/i.test(n)}function ih(n=ge()){return/android/i.test(n)}function rh(n=ge()){return/blackberry/i.test(n)}function sh(n=ge()){return/webos/i.test(n)}/**
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
 */function js(n,e=[]){let i;switch(n){case"Browser":i=Ur(ge());break;case"Worker":i=`${Ur(ge())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${rn}/${r}`}/**
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
 */class oh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=h=>new Promise((l,b)=>{try{const I=e(h);l(I)}catch(I){b(I)}});r.onAbort=i,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const a of i)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ah(n,e={}){return sn(n,"GET","/v2/passwordPolicy",Ms(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const ch=6;class hh{constructor(e){var r;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??ch,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),a&&(i.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,a,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
 */class lh{constructor(e,i,r,a){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fr(this),this.idTokenSubscription=new Fr(this),this.beforeStateQueue=new oh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ps,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Ve(i)),this._initializationPromise=this.queue(async()=>{var r,a,h;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((h=this.currentUser)==null?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Xt(this,{idToken:e}),r=await fe._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var h;if(Ue(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(b=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(b,b))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(h=this.redirectUser)==null?void 0:h._redirectEventId,b=r==null?void 0:r._redirectEventId,I=await this.tryRedirectSignIn(e);(!l||l===b)&&(I!=null&&I.user)&&(r=I.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Yt(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(qt(this));const i=e?Ke(e):null;return i&&R(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ve(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ah(this),i=new hh(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new We("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Ve(e)||this._popupRedirectResolver;R(i,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[Ve(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,a){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let l=!1;const b=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(b,this,"internal-error"),b.then(()=>{l||h(this.currentUser)}),typeof i=="function"){const I=e.addObserver(i,r,a);return()=>{l=!0,I()}}else{const I=e.addObserver(i);return()=>{l=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=js(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var i;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return e!=null&&e.error&&xc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function uh(n){return Ke(n)}class Fr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ia(i=>this.observer=i)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dh(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Ve);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new At(3e4,6e4);/**
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
 */new At(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new At(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new At(5e3,15e3);var Vr="@firebase/auth",jr="1.11.0";/**
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
 */class fh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ph(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gh(n){me(new ce("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:l,authDomain:b}=r.options;R(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const I={apiKey:l,authDomain:b,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:js(n)},v=new lh(r,a,h,I);return dh(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),me(new ce("auth-internal",e=>{const i=uh(e.getProvider("auth").getImmediate());return(r=>new fh(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),se(Vr,jr,ph(n)),se(Vr,jr,"esm2020")}/**
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
 */const mh=5*60;da("authIdTokenMaxAge");gh("Browser");var Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var li;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,u){function d(){}d.prototype=u.prototype,p.F=u.prototype,p.prototype=new d,p.prototype.constructor=p,p.D=function(m,g,w){for(var f=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)f[Z-2]=arguments[Z];return u.prototype[g].apply(m,f)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,i),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(p,u,d){d||(d=0);const m=Array(16);if(typeof u=="string")for(var g=0;g<16;++g)m[g]=u.charCodeAt(d++)|u.charCodeAt(d++)<<8|u.charCodeAt(d++)<<16|u.charCodeAt(d++)<<24;else for(g=0;g<16;++g)m[g]=u[d++]|u[d++]<<8|u[d++]<<16|u[d++]<<24;u=p.g[0],d=p.g[1],g=p.g[2];let w=p.g[3],f;f=u+(w^d&(g^w))+m[0]+3614090360&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[1]+3905402710&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[2]+606105819&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[3]+3250441966&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(w^d&(g^w))+m[4]+4118548399&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[5]+1200080426&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[6]+2821735955&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[7]+4249261313&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(w^d&(g^w))+m[8]+1770035416&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[9]+2336552879&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[10]+4294925233&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[11]+2304563134&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(w^d&(g^w))+m[12]+1804603682&4294967295,u=d+(f<<7&4294967295|f>>>25),f=w+(g^u&(d^g))+m[13]+4254626195&4294967295,w=u+(f<<12&4294967295|f>>>20),f=g+(d^w&(u^d))+m[14]+2792965006&4294967295,g=w+(f<<17&4294967295|f>>>15),f=d+(u^g&(w^u))+m[15]+1236535329&4294967295,d=g+(f<<22&4294967295|f>>>10),f=u+(g^w&(d^g))+m[1]+4129170786&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[6]+3225465664&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[11]+643717713&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[0]+3921069994&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(g^w&(d^g))+m[5]+3593408605&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[10]+38016083&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[15]+3634488961&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[4]+3889429448&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(g^w&(d^g))+m[9]+568446438&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[14]+3275163606&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[3]+4107603335&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[8]+1163531501&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(g^w&(d^g))+m[13]+2850285829&4294967295,u=d+(f<<5&4294967295|f>>>27),f=w+(d^g&(u^d))+m[2]+4243563512&4294967295,w=u+(f<<9&4294967295|f>>>23),f=g+(u^d&(w^u))+m[7]+1735328473&4294967295,g=w+(f<<14&4294967295|f>>>18),f=d+(w^u&(g^w))+m[12]+2368359562&4294967295,d=g+(f<<20&4294967295|f>>>12),f=u+(d^g^w)+m[5]+4294588738&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[8]+2272392833&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[11]+1839030562&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[14]+4259657740&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(d^g^w)+m[1]+2763975236&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[4]+1272893353&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[7]+4139469664&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[10]+3200236656&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(d^g^w)+m[13]+681279174&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[0]+3936430074&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[3]+3572445317&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[6]+76029189&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(d^g^w)+m[9]+3654602809&4294967295,u=d+(f<<4&4294967295|f>>>28),f=w+(u^d^g)+m[12]+3873151461&4294967295,w=u+(f<<11&4294967295|f>>>21),f=g+(w^u^d)+m[15]+530742520&4294967295,g=w+(f<<16&4294967295|f>>>16),f=d+(g^w^u)+m[2]+3299628645&4294967295,d=g+(f<<23&4294967295|f>>>9),f=u+(g^(d|~w))+m[0]+4096336452&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[7]+1126891415&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[14]+2878612391&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[5]+4237533241&4294967295,d=g+(f<<21&4294967295|f>>>11),f=u+(g^(d|~w))+m[12]+1700485571&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[3]+2399980690&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[10]+4293915773&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[1]+2240044497&4294967295,d=g+(f<<21&4294967295|f>>>11),f=u+(g^(d|~w))+m[8]+1873313359&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[15]+4264355552&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[6]+2734768916&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[13]+1309151649&4294967295,d=g+(f<<21&4294967295|f>>>11),f=u+(g^(d|~w))+m[4]+4149444226&4294967295,u=d+(f<<6&4294967295|f>>>26),f=w+(d^(u|~g))+m[11]+3174756917&4294967295,w=u+(f<<10&4294967295|f>>>22),f=g+(u^(w|~d))+m[2]+718787259&4294967295,g=w+(f<<15&4294967295|f>>>17),f=d+(w^(g|~u))+m[9]+3951481745&4294967295,p.g[0]=p.g[0]+u&4294967295,p.g[1]=p.g[1]+(g+(f<<21&4294967295|f>>>11))&4294967295,p.g[2]=p.g[2]+g&4294967295,p.g[3]=p.g[3]+w&4294967295}r.prototype.v=function(p,u){u===void 0&&(u=p.length);const d=u-this.blockSize,m=this.C;let g=this.h,w=0;for(;w<u;){if(g==0)for(;w<=d;)a(this,p,w),w+=this.blockSize;if(typeof p=="string"){for(;w<u;)if(m[g++]=p.charCodeAt(w++),g==this.blockSize){a(this,m),g=0;break}}else for(;w<u;)if(m[g++]=p[w++],g==this.blockSize){a(this,m),g=0;break}}this.h=g,this.o+=u},r.prototype.A=function(){var p=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);p[0]=128;for(var u=1;u<p.length-8;++u)p[u]=0;u=this.o*8;for(var d=p.length-8;d<p.length;++d)p[d]=u&255,u/=256;for(this.v(p),p=Array(16),u=0,d=0;d<4;++d)for(let m=0;m<32;m+=8)p[u++]=this.g[d]>>>m&255;return p};function h(p,u){var d=b;return Object.prototype.hasOwnProperty.call(d,p)?d[p]:d[p]=u(p)}function l(p,u){this.h=u;const d=[];let m=!0;for(let g=p.length-1;g>=0;g--){const w=p[g]|0;m&&w==u||(d[g]=w,m=!1)}this.g=d}var b={};function I(p){return-128<=p&&p<128?h(p,function(u){return new l([u|0],u<0?-1:0)}):new l([p|0],p<0?-1:0)}function v(p){if(isNaN(p)||!isFinite(p))return N;if(p<0)return A(v(-p));const u=[];let d=1;for(let m=0;p>=d;m++)u[m]=p/d|0,d*=4294967296;return new l(u,0)}function k(p,u){if(p.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(p.charAt(0)=="-")return A(k(p.substring(1),u));if(p.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=v(Math.pow(u,8));let m=N;for(let w=0;w<p.length;w+=8){var g=Math.min(8,p.length-w);const f=parseInt(p.substring(w,w+g),u);g<8?(g=v(Math.pow(u,g)),m=m.j(g).add(v(f))):(m=m.j(d),m=m.add(v(f)))}return m}var N=I(0),H=I(1),z=I(16777216);n=l.prototype,n.m=function(){if(E(this))return-A(this).m();let p=0,u=1;for(let d=0;d<this.g.length;d++){const m=this.i(d);p+=(m>=0?m:4294967296+m)*u,u*=4294967296}return p},n.toString=function(p){if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(F(this))return"0";if(E(this))return"-"+A(this).toString(p);const u=v(Math.pow(p,6));var d=this;let m="";for(;;){const g=K(d,u).g;d=D(d,g.j(u));let w=((d.g.length>0?d.g[0]:d.h)>>>0).toString(p);if(d=g,F(d))return w+m;for(;w.length<6;)w="0"+w;m=w+m}},n.i=function(p){return p<0?0:p<this.g.length?this.g[p]:this.h};function F(p){if(p.h!=0)return!1;for(let u=0;u<p.g.length;u++)if(p.g[u]!=0)return!1;return!0}function E(p){return p.h==-1}n.l=function(p){return p=D(this,p),E(p)?-1:F(p)?0:1};function A(p){const u=p.g.length,d=[];for(let m=0;m<u;m++)d[m]=~p.g[m];return new l(d,~p.h).add(H)}n.abs=function(){return E(this)?A(this):this},n.add=function(p){const u=Math.max(this.g.length,p.g.length),d=[];let m=0;for(let g=0;g<=u;g++){let w=m+(this.i(g)&65535)+(p.i(g)&65535),f=(w>>>16)+(this.i(g)>>>16)+(p.i(g)>>>16);m=f>>>16,w&=65535,f&=65535,d[g]=f<<16|w}return new l(d,d[d.length-1]&-2147483648?-1:0)};function D(p,u){return p.add(A(u))}n.j=function(p){if(F(this)||F(p))return N;if(E(this))return E(p)?A(this).j(A(p)):A(A(this).j(p));if(E(p))return A(this.j(A(p)));if(this.l(z)<0&&p.l(z)<0)return v(this.m()*p.m());const u=this.g.length+p.g.length,d=[];for(var m=0;m<2*u;m++)d[m]=0;for(m=0;m<this.g.length;m++)for(let g=0;g<p.g.length;g++){const w=this.i(m)>>>16,f=this.i(m)&65535,Z=p.i(g)>>>16,De=p.i(g)&65535;d[2*m+2*g]+=f*De,B(d,2*m+2*g),d[2*m+2*g+1]+=w*De,B(d,2*m+2*g+1),d[2*m+2*g+1]+=f*Z,B(d,2*m+2*g+1),d[2*m+2*g+2]+=w*Z,B(d,2*m+2*g+2)}for(p=0;p<u;p++)d[p]=d[2*p+1]<<16|d[2*p];for(p=u;p<2*u;p++)d[p]=0;return new l(d,0)};function B(p,u){for(;(p[u]&65535)!=p[u];)p[u+1]+=p[u]>>>16,p[u]&=65535,u++}function te(p,u){this.g=p,this.h=u}function K(p,u){if(F(u))throw Error("division by zero");if(F(p))return new te(N,N);if(E(p))return u=K(A(p),u),new te(A(u.g),A(u.h));if(E(u))return u=K(p,A(u)),new te(A(u.g),u.h);if(p.g.length>30){if(E(p)||E(u))throw Error("slowDivide_ only works with positive integers.");for(var d=H,m=u;m.l(p)<=0;)d=ne(d),m=ne(m);var g=j(d,1),w=j(m,1);for(m=j(m,2),d=j(d,2);!F(m);){var f=w.add(m);f.l(p)<=0&&(g=g.add(d),w=f),m=j(m,1),d=j(d,1)}return u=D(p,g.j(u)),new te(g,u)}for(g=N;p.l(u)>=0;){for(d=Math.max(1,Math.floor(p.m()/u.m())),m=Math.ceil(Math.log(d)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),w=v(d),f=w.j(u);E(f)||f.l(p)>0;)d-=m,w=v(d),f=w.j(u);F(w)&&(w=H),g=g.add(w),p=D(p,f)}return new te(g,p)}n.B=function(p){return K(this,p).h},n.and=function(p){const u=Math.max(this.g.length,p.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)&p.i(m);return new l(d,this.h&p.h)},n.or=function(p){const u=Math.max(this.g.length,p.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)|p.i(m);return new l(d,this.h|p.h)},n.xor=function(p){const u=Math.max(this.g.length,p.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)^p.i(m);return new l(d,this.h^p.h)};function ne(p){const u=p.g.length+1,d=[];for(let m=0;m<u;m++)d[m]=p.i(m)<<1|p.i(m-1)>>>31;return new l(d,p.h)}function j(p,u){const d=u>>5;u%=32;const m=p.g.length-d,g=[];for(let w=0;w<m;w++)g[w]=u>0?p.i(w+d)>>>u|p.i(w+d+1)<<32-u:p.i(w+d);return new l(g,p.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=v,l.fromString=k,li=l}).apply(typeof Br<"u"?Br:typeof self<"u"?self:typeof window<"u"?window:{});var Bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bt=="object"&&Bt];for(var s=0;s<t.length;++s){var o=t[s];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var r=i(this);function a(t,s){if(s)e:{var o=r;t=t.split(".");for(var c=0;c<t.length-1;c++){var y=t[c];if(!(y in o))break e;o=o[y]}t=t[t.length-1],c=o[t],s=s(c),s!=c&&s!=null&&e(o,t,{configurable:!0,writable:!0,value:s})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(s){var o=[],c;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&o.push([c,s[c]]);return o}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},l=this||self;function b(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function I(t,s,o){return t.call.apply(t.bind,arguments)}function v(t,s,o){return v=I,v.apply(null,arguments)}function k(t,s){var o=Array.prototype.slice.call(arguments,1);return function(){var c=o.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function N(t,s){function o(){}o.prototype=s.prototype,t.Z=s.prototype,t.prototype=new o,t.prototype.constructor=t,t.Ob=function(c,y,_){for(var S=Array(arguments.length-2),C=2;C<arguments.length;C++)S[C-2]=arguments[C];return s.prototype[y].apply(c,S)}}var H=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function z(t){const s=t.length;if(s>0){const o=Array(s);for(let c=0;c<s;c++)o[c]=t[c];return o}return[]}function F(t,s){for(let c=1;c<arguments.length;c++){const y=arguments[c];var o=typeof y;if(o=o!="object"?o:y?Array.isArray(y)?"array":o:"null",o=="array"||o=="object"&&typeof y.length=="number"){o=t.length||0;const _=y.length||0;t.length=o+_;for(let S=0;S<_;S++)t[o+S]=y[S]}else t.push(y)}}class E{constructor(s,o){this.i=s,this.j=o,this.h=0,this.g=null}get(){let s;return this.h>0?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function A(t){l.setTimeout(()=>{throw t},0)}function D(){var t=p;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class B{constructor(){this.h=this.g=null}add(s,o){const c=te.get();c.set(s,o),this.h?this.h.next=c:this.g=c,this.h=c}}var te=new E(()=>new K,t=>t.reset());class K{constructor(){this.next=this.g=this.h=null}set(s,o){this.h=s,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,j=!1,p=new B,u=()=>{const t=Promise.resolve(void 0);ne=()=>{t.then(d)}};function d(){for(var t;t=D();){try{t.h.call(t.g)}catch(o){A(o)}var s=te;s.j(t),s.h<100&&(s.h++,t.next=s.g,s.g=t)}j=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};l.addEventListener("test",o,s),l.removeEventListener("test",o,s)}catch{}return t}();function f(t){return/^[\s\xa0]*$/.test(t)}function Z(t,s){g.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,s)}N(Z,g),Z.prototype.init=function(t,s){const o=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget,s||(o=="mouseover"?s=t.fromElement:o=="mouseout"&&(s=t.toElement)),this.relatedTarget=s,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var De="closure_listenable_"+(Math.random()*1e6|0),vo=0;function bo(t,s,o,c,y){this.listener=t,this.proxy=null,this.src=s,this.type=o,this.capture=!!c,this.ha=y,this.key=++vo,this.da=this.fa=!1}function Ct(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function kt(t,s,o){for(const c in t)s.call(o,t[c],c,t)}function Io(t,s){for(const o in t)s.call(void 0,t[o],o,t)}function bi(t){const s={};for(const o in t)s[o]=t[o];return s}const Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Si(t,s){let o,c;for(let y=1;y<arguments.length;y++){c=arguments[y];for(o in c)t[o]=c[o];for(let _=0;_<Ii.length;_++)o=Ii[_],Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o])}}function Pt(t){this.src=t,this.g={},this.h=0}Pt.prototype.add=function(t,s,o,c,y){const _=t.toString();t=this.g[_],t||(t=this.g[_]=[],this.h++);const S=ln(t,s,c,y);return S>-1?(s=t[S],o||(s.fa=!1)):(s=new bo(s,this.src,_,!!c,y),s.fa=o,t.push(s)),s};function hn(t,s){const o=s.type;if(o in t.g){var c=t.g[o],y=Array.prototype.indexOf.call(c,s,void 0),_;(_=y>=0)&&Array.prototype.splice.call(c,y,1),_&&(Ct(s),t.g[o].length==0&&(delete t.g[o],t.h--))}}function ln(t,s,o,c){for(let y=0;y<t.length;++y){const _=t[y];if(!_.da&&_.listener==s&&_.capture==!!o&&_.ha==c)return y}return-1}var un="closure_lm_"+(Math.random()*1e6|0),dn={};function Ei(t,s,o,c,y){if(Array.isArray(s)){for(let _=0;_<s.length;_++)Ei(t,s[_],o,c,y);return null}return o=Ni(o),t&&t[De]?t.J(s,o,b(c)?!!c.capture:!1,y):So(t,s,o,!1,c,y)}function So(t,s,o,c,y,_){if(!s)throw Error("Invalid event type");const S=b(y)?!!y.capture:!!y;let C=pn(t);if(C||(t[un]=C=new Pt(t)),o=C.add(s,o,c,S,_),o.proxy)return o;if(c=Eo(),o.proxy=c,c.src=t,c.listener=o,t.addEventListener)w||(y=S),y===void 0&&(y=!1),t.addEventListener(s.toString(),c,y);else if(t.attachEvent)t.attachEvent(Ai(s.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Eo(){function t(o){return s.call(t.src,t.listener,o)}const s=To;return t}function Ti(t,s,o,c,y){if(Array.isArray(s))for(var _=0;_<s.length;_++)Ti(t,s[_],o,c,y);else c=b(c)?!!c.capture:!!c,o=Ni(o),t&&t[De]?(t=t.i,_=String(s).toString(),_ in t.g&&(s=t.g[_],o=ln(s,o,c,y),o>-1&&(Ct(s[o]),Array.prototype.splice.call(s,o,1),s.length==0&&(delete t.g[_],t.h--)))):t&&(t=pn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=ln(s,o,c,y)),(o=t>-1?s[t]:null)&&fn(o))}function fn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[De])hn(s.i,t);else{var o=t.type,c=t.proxy;s.removeEventListener?s.removeEventListener(o,c,t.capture):s.detachEvent?s.detachEvent(Ai(o),c):s.addListener&&s.removeListener&&s.removeListener(c),(o=pn(s))?(hn(o,t),o.h==0&&(o.src=null,s[un]=null)):Ct(t)}}}function Ai(t){return t in dn?dn[t]:dn[t]="on"+t}function To(t,s){if(t.da)t=!0;else{s=new Z(s,this);const o=t.listener,c=t.ha||t.src;t.fa&&fn(t),t=o.call(c,s)}return t}function pn(t){return t=t[un],t instanceof Pt?t:null}var gn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ni(t){return typeof t=="function"?t:(t[gn]||(t[gn]=function(s){return t.handleEvent(s)}),t[gn])}function J(){m.call(this),this.i=new Pt(this),this.M=this,this.G=null}N(J,m),J.prototype[De]=!0,J.prototype.removeEventListener=function(t,s,o,c){Ti(this,t,s,o,c)};function Y(t,s){var o,c=t.G;if(c)for(o=[];c;c=c.G)o.push(c);if(t=t.M,c=s.type||s,typeof s=="string")s=new g(s,t);else if(s instanceof g)s.target=s.target||t;else{var y=s;s=new g(c,t),Si(s,y)}y=!0;let _,S;if(o)for(S=o.length-1;S>=0;S--)_=s.g=o[S],y=Dt(_,c,!0,s)&&y;if(_=s.g=t,y=Dt(_,c,!0,s)&&y,y=Dt(_,c,!1,s)&&y,o)for(S=0;S<o.length;S++)_=s.g=o[S],y=Dt(_,c,!1,s)&&y}J.prototype.N=function(){if(J.Z.N.call(this),this.i){var t=this.i;for(const s in t.g){const o=t.g[s];for(let c=0;c<o.length;c++)Ct(o[c]);delete t.g[s],t.h--}}this.G=null},J.prototype.J=function(t,s,o,c){return this.i.add(String(t),s,!1,o,c)},J.prototype.K=function(t,s,o,c){return this.i.add(String(t),s,!0,o,c)};function Dt(t,s,o,c){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();let y=!0;for(let _=0;_<s.length;++_){const S=s[_];if(S&&!S.da&&S.capture==o){const C=S.listener,G=S.ha||S.src;S.fa&&hn(t.i,S),y=C.call(G,c)!==!1&&y}}return y&&!c.defaultPrevented}function Ao(t,s){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=v(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(s)>2147483647?-1:l.setTimeout(t,s||0)}function Ci(t){t.g=Ao(()=>{t.g=null,t.i&&(t.i=!1,Ci(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class No extends m{constructor(s,o){super(),this.m=s,this.l=o,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ci(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(t){m.call(this),this.h=t,this.g={}}N(nt,m);var ki=[];function Pi(t){kt(t.g,function(s,o){this.g.hasOwnProperty(o)&&fn(s)},t),t.g={}}nt.prototype.N=function(){nt.Z.N.call(this),Pi(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mn=l.JSON.stringify,Co=l.JSON.parse,ko=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function Di(){}function Po(){}var it={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yn(){g.call(this,"d")}N(yn,g);function wn(){g.call(this,"c")}N(wn,g);var Je={},Ri=null;function _n(){return Ri=Ri||new J}Je.Ia="serverreachability";function Oi(t){g.call(this,Je.Ia,t)}N(Oi,g);function rt(t){const s=_n();Y(s,new Oi(s))}Je.STAT_EVENT="statevent";function Mi(t,s){g.call(this,Je.STAT_EVENT,t),this.stat=s}N(Mi,g);function Q(t){const s=_n();Y(s,new Mi(s,t))}Je.Ja="timingevent";function Li(t,s){g.call(this,Je.Ja,t),this.size=s}N(Li,g);function st(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){t()},s)}function ot(){this.g=!0}ot.prototype.ua=function(){this.g=!1};function Do(t,s,o,c,y,_){t.info(function(){if(t.g)if(_){var S="",C=_.split("&");for(let U=0;U<C.length;U++){var G=C[U].split("=");if(G.length>1){const W=G[0];G=G[1];const le=W.split("_");S=le.length>=2&&le[1]=="type"?S+(W+"="+G+"&"):S+(W+"=redacted&")}}}else S=null;else S=_;return"XMLHTTP REQ ("+c+") [attempt "+y+"]: "+s+`
`+o+`
`+S})}function Ro(t,s,o,c,y,_,S){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+y+"]: "+s+`
`+o+`
`+_+" "+S})}function Xe(t,s,o,c){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Mo(t,o)+(c?" "+c:"")})}function Oo(t,s){t.info(function(){return"TIMEOUT: "+s})}ot.prototype.info=function(){};function Mo(t,s){if(!t.g)return s;if(!s)return null;try{const _=JSON.parse(s);if(_){for(t=0;t<_.length;t++)if(Array.isArray(_[t])){var o=_[t];if(!(o.length<2)){var c=o[1];if(Array.isArray(c)&&!(c.length<1)){var y=c[0];if(y!="noop"&&y!="stop"&&y!="close")for(let S=1;S<c.length;S++)c[S]=""}}}}return mn(_)}catch{return s}}var vn={NO_ERROR:0,TIMEOUT:8},Lo={},xi;function bn(){}N(bn,Di),bn.prototype.g=function(){return new XMLHttpRequest},xi=new bn;function at(t){return encodeURIComponent(String(t))}function xo(t){var s=1;t=t.split(":");const o=[];for(;s>0&&t.length;)o.push(t.shift()),s--;return t.length&&o.push(t.join(":")),o}function Ie(t,s,o,c){this.j=t,this.i=s,this.l=o,this.S=c||1,this.V=new nt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ui}function Ui(){this.i=null,this.g="",this.h=!1}var Fi={},In={};function Sn(t,s,o){t.M=1,t.A=Ot(he(s)),t.u=o,t.R=!0,Vi(t,null)}function Vi(t,s){t.F=Date.now(),Rt(t),t.B=he(t.A);var o=t.B,c=t.S;Array.isArray(c)||(c=[String(c)]),Qi(o.i,"t",c),t.C=0,o=t.j.L,t.h=new Ui,t.g=mr(t.j,o?s:null,!t.u),t.P>0&&(t.O=new No(v(t.Y,t,t.g),t.P)),s=t.V,o=t.g,c=t.ba;var y="readystatechange";Array.isArray(y)||(y&&(ki[0]=y.toString()),y=ki);for(let _=0;_<y.length;_++){const S=Ei(o,y[_],c||s.handleEvent,!1,s.h||s);if(!S)break;s.g[S.key]=S}s=t.J?bi(t.J):{},t.u?(t.v||(t.v="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,s)):(t.v="GET",t.g.ea(t.B,t.v,null,s)),rt(),Do(t.i,t.v,t.B,t.l,t.S,t.u)}Ie.prototype.ba=function(t){t=t.target;const s=this.O;s&&Te(t)==3?s.j():this.Y(t)},Ie.prototype.Y=function(t){try{if(t==this.g)e:{const C=Te(this.g),G=this.g.ya(),U=this.g.ca();if(!(C<3)&&(C!=3||this.g&&(this.h.h||this.g.la()||sr(this.g)))){this.K||C!=4||G==7||(G==8||U<=0?rt(3):rt(2)),En(this);var s=this.g.ca();this.X=s;var o=Uo(this);if(this.o=s==200,Ro(this.i,this.v,this.B,this.l,this.S,C,s),this.o){if(this.U&&!this.L){t:{if(this.g){var c,y=this.g;if((c=y.g?y.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(c)){var _=c;break t}}_=null}if(t=_)Xe(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tn(this,t);else{this.o=!1,this.m=3,Q(12),Re(this),ct(this);break e}}if(this.R){t=!0;let W;for(;!this.K&&this.C<o.length;)if(W=Fo(this,o),W==In){C==4&&(this.m=4,Q(14),t=!1),Xe(this.i,this.l,null,"[Incomplete Response]");break}else if(W==Fi){this.m=4,Q(15),Xe(this.i,this.l,o,"[Invalid Chunk]"),t=!1;break}else Xe(this.i,this.l,W,null),Tn(this,W);if(ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),C!=4||o.length!=0||this.h.h||(this.m=1,Q(16),t=!1),this.o=this.o&&t,!t)Xe(this.i,this.l,o,"[Invalid Chunked Response]"),Re(this),ct(this);else if(o.length>0&&!this.W){this.W=!0;var S=this.j;S.g==this&&S.aa&&!S.P&&(S.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),On(S),S.P=!0,Q(11))}}else Xe(this.i,this.l,o,null),Tn(this,o);C==4&&Re(this),this.o&&!this.K&&(C==4?dr(this.j,this):(this.o=!1,Rt(this)))}else Qo(this.g),s==400&&o.indexOf("Unknown SID")>0?(this.m=3,Q(12)):(this.m=0,Q(13)),Re(this),ct(this)}}}catch{}finally{}};function Uo(t){if(!ji(t))return t.g.la();const s=sr(t.g);if(s==="")return"";let o="";const c=s.length,y=Te(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Re(t),ct(t),"";t.h.i=new l.TextDecoder}for(let _=0;_<c;_++)t.h.h=!0,o+=t.h.i.decode(s[_],{stream:!(y&&_==c-1)});return s.length=0,t.h.g+=o,t.C=0,t.h.g}function ji(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function Fo(t,s){var o=t.C,c=s.indexOf(`
`,o);return c==-1?In:(o=Number(s.substring(o,c)),isNaN(o)?Fi:(c+=1,c+o>s.length?In:(s=s.slice(c,c+o),t.C=c+o,s)))}Ie.prototype.cancel=function(){this.K=!0,Re(this)};function Rt(t){t.T=Date.now()+t.H,Bi(t,t.H)}function Bi(t,s){if(t.D!=null)throw Error("WatchDog timer not null");t.D=st(v(t.aa,t),s)}function En(t){t.D&&(l.clearTimeout(t.D),t.D=null)}Ie.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Oo(this.i,this.B),this.M!=2&&(rt(),Q(17)),Re(this),this.m=2,ct(this)):Bi(this,this.T-t)};function ct(t){t.j.I==0||t.K||dr(t.j,t)}function Re(t){En(t);var s=t.O;s&&typeof s.dispose=="function"&&s.dispose(),t.O=null,Pi(t.V),t.g&&(s=t.g,t.g=null,s.abort(),s.dispose())}function Tn(t,s){try{var o=t.j;if(o.I!=0&&(o.g==t||An(o.h,t))){if(!t.L&&An(o.h,t)&&o.I==3){try{var c=o.Ba.g.parse(s)}catch{c=null}if(Array.isArray(c)&&c.length==3){var y=c;if(y[0]==0){e:if(!o.v){if(o.g)if(o.g.F+3e3<t.F)Ft(o),xt(o);else break e;Rn(o),Q(18)}}else o.xa=y[1],0<o.xa-o.K&&y[2]<37500&&o.F&&o.A==0&&!o.C&&(o.C=st(v(o.Va,o),6e3));zi(o.h)<=1&&o.ta&&(o.ta=void 0)}else Me(o,11)}else if((t.L||o.g==t)&&Ft(o),!f(s))for(y=o.Ba.g.parse(s),s=0;s<y.length;s++){let U=y[s];const W=U[0];if(!(W<=o.K))if(o.K=W,U=U[1],o.I==2)if(U[0]=="c"){o.M=U[1],o.ba=U[2];const le=U[3];le!=null&&(o.ka=le,o.j.info("VER="+o.ka));const Le=U[4];Le!=null&&(o.za=Le,o.j.info("SVER="+o.za));const Ae=U[5];Ae!=null&&typeof Ae=="number"&&Ae>0&&(c=1.5*Ae,o.O=c,o.j.info("backChannelRequestTimeoutMs_="+c)),c=o;const Ne=t.g;if(Ne){const Vt=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vt){var _=c.h;_.g||Vt.indexOf("spdy")==-1&&Vt.indexOf("quic")==-1&&Vt.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(Nn(_,_.h),_.h=null))}if(c.G){const Mn=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;Mn&&(c.wa=Mn,V(c.J,c.G,Mn))}}o.I=3,o.l&&o.l.ra(),o.aa&&(o.T=Date.now()-t.F,o.j.info("Handshake RTT: "+o.T+"ms")),c=o;var S=t;if(c.na=gr(c,c.L?c.ba:null,c.W),S.L){qi(c.h,S);var C=S,G=c.O;G&&(C.H=G),C.D&&(En(C),Rt(C)),c.g=S}else lr(c);o.i.length>0&&Ut(o)}else U[0]!="stop"&&U[0]!="close"||Me(o,7);else o.I==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Me(o,7):Dn(o):U[0]!="noop"&&o.l&&o.l.qa(U),o.A=0)}}rt(4)}catch{}}var Vo=class{constructor(t,s){this.g=t,this.map=s}};function $i(t){this.l=t||10,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zi(t){return t.h?1:t.g?t.g.size:0}function An(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Nn(t,s){t.g?t.g.add(s):t.h=s}function qi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}$i.prototype.cancel=function(){if(this.i=Gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gi(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const o of t.g.values())s=s.concat(o.G);return s}return z(t.i)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jo(t,s){if(t){t=t.split("&");for(let o=0;o<t.length;o++){const c=t[o].indexOf("=");let y,_=null;c>=0?(y=t[o].substring(0,c),_=t[o].substring(c+1)):y=t[o],s(y,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function Se(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let s;t instanceof Se?(this.l=t.l,ht(this,t.j),this.o=t.o,this.g=t.g,lt(this,t.u),this.h=t.h,Cn(this,Zi(t.i)),this.m=t.m):t&&(s=String(t).match(Wi))?(this.l=!1,ht(this,s[1]||"",!0),this.o=ut(s[2]||""),this.g=ut(s[3]||"",!0),lt(this,s[4]),this.h=ut(s[5]||"",!0),Cn(this,s[6]||"",!0),this.m=ut(s[7]||"")):(this.l=!1,this.i=new ft(null,this.l))}Se.prototype.toString=function(){const t=[];var s=this.j;s&&t.push(dt(s,Ki,!0),":");var o=this.g;return(o||s=="file")&&(t.push("//"),(s=this.o)&&t.push(dt(s,Ki,!0),"@"),t.push(at(o).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.u,o!=null&&t.push(":",String(o))),(o=this.h)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(dt(o,o.charAt(0)=="/"?Ho:$o,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",dt(o,qo)),t.join("")},Se.prototype.resolve=function(t){const s=he(this);let o=!!t.j;o?ht(s,t.j):o=!!t.o,o?s.o=t.o:o=!!t.g,o?s.g=t.g:o=t.u!=null;var c=t.h;if(o)lt(s,t.u);else if(o=!!t.h){if(c.charAt(0)!="/")if(this.g&&!this.h)c="/"+c;else{var y=s.h.lastIndexOf("/");y!=-1&&(c=s.h.slice(0,y+1)+c)}if(y=c,y==".."||y==".")c="";else if(y.indexOf("./")!=-1||y.indexOf("/.")!=-1){c=y.lastIndexOf("/",0)==0,y=y.split("/");const _=[];for(let S=0;S<y.length;){const C=y[S++];C=="."?c&&S==y.length&&_.push(""):C==".."?((_.length>1||_.length==1&&_[0]!="")&&_.pop(),c&&S==y.length&&_.push("")):(_.push(C),c=!0)}c=_.join("/")}else c=y}return o?s.h=c:o=t.i.toString()!=="",o?Cn(s,Zi(t.i)):o=!!t.m,o&&(s.m=t.m),s};function he(t){return new Se(t)}function ht(t,s,o){t.j=o?ut(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function lt(t,s){if(s){if(s=Number(s),isNaN(s)||s<0)throw Error("Bad port number "+s);t.u=s}else t.u=null}function Cn(t,s,o){s instanceof ft?(t.i=s,Go(t.i,t.l)):(o||(s=dt(s,zo)),t.i=new ft(s,t.l))}function V(t,s,o){t.i.set(s,o)}function Ot(t){return V(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function ut(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dt(t,s,o){return typeof t=="string"?(t=encodeURI(t).replace(s,Bo),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Bo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ki=/[#\/\?@]/g,$o=/[#\?:]/g,Ho=/[#\?]/g,zo=/[#\?@]/g,qo=/#/g;function ft(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Oe(t){t.g||(t.g=new Map,t.h=0,t.i&&jo(t.i,function(s,o){t.add(decodeURIComponent(s.replace(/\+/g," ")),o)}))}n=ft.prototype,n.add=function(t,s){Oe(this),this.i=null,t=Ye(this,t);let o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(s),this.h+=1,this};function Ji(t,s){Oe(t),s=Ye(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Xi(t,s){return Oe(t),s=Ye(t,s),t.g.has(s)}n.forEach=function(t,s){Oe(this),this.g.forEach(function(o,c){o.forEach(function(y){t.call(s,y,c,this)},this)},this)};function Yi(t,s){Oe(t);let o=[];if(typeof s=="string")Xi(t,s)&&(o=o.concat(t.g.get(Ye(t,s))));else for(t=Array.from(t.g.values()),s=0;s<t.length;s++)o=o.concat(t[s]);return o}n.set=function(t,s){return Oe(this),this.i=null,t=Ye(this,t),Xi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},n.get=function(t,s){return t?(t=Yi(this,t),t.length>0?String(t[0]):s):s};function Qi(t,s,o){Ji(t,s),o.length>0&&(t.i=null,t.g.set(Ye(t,s),z(o)),t.h+=o.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(let c=0;c<s.length;c++){var o=s[c];const y=at(o);o=Yi(this,o);for(let _=0;_<o.length;_++){let S=y;o[_]!==""&&(S+="="+at(o[_])),t.push(S)}}return this.i=t.join("&")};function Zi(t){const s=new ft;return s.i=t.i,t.g&&(s.g=new Map(t.g),s.h=t.h),s}function Ye(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Go(t,s){s&&!t.j&&(Oe(t),t.i=null,t.g.forEach(function(o,c){const y=c.toLowerCase();c!=y&&(Ji(this,c),Qi(this,y,o))},t)),t.j=s}function Wo(t,s){const o=new ot;if(l.Image){const c=new Image;c.onload=k(Ee,o,"TestLoadImage: loaded",!0,s,c),c.onerror=k(Ee,o,"TestLoadImage: error",!1,s,c),c.onabort=k(Ee,o,"TestLoadImage: abort",!1,s,c),c.ontimeout=k(Ee,o,"TestLoadImage: timeout",!1,s,c),l.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else s(!1)}function Ko(t,s){const o=new ot,c=new AbortController,y=setTimeout(()=>{c.abort(),Ee(o,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:c.signal}).then(_=>{clearTimeout(y),_.ok?Ee(o,"TestPingServer: ok",!0,s):Ee(o,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),Ee(o,"TestPingServer: error",!1,s)})}function Ee(t,s,o,c,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),c(o)}catch{}}function Jo(){this.g=new ko}function kn(t){this.i=t.Sb||null,this.h=t.ab||!1}N(kn,Di),kn.prototype.g=function(){return new Mt(this.i,this.h)};function Mt(t,s){J.call(this),this.H=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}N(Mt,J),n=Mt.prototype,n.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=s,this.readyState=1,gt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const s={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(s.body=t),(this.H||l).fetch(new Request(this.D,s)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pt(this)),this.readyState=0},n.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gt(this)),this.g&&(this.readyState=3,gt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;er(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function er(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}n.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.B.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?pt(this):gt(this),this.readyState==3&&er(this)}},n.Oa=function(t){this.g&&(this.response=this.responseText=t,pt(this))},n.Na=function(t){this.g&&(this.response=t,pt(this))},n.ga=function(){this.g&&pt(this)};function pt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,gt(t)}n.setRequestHeader=function(t,s){this.A.append(t,s)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var o=s.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=s.next();return t.join(`\r
`)};function gt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function tr(t){let s="";return kt(t,function(o,c){s+=c,s+=":",s+=o,s+=`\r
`}),s}function Pn(t,s,o){e:{for(c in o){var c=!1;break e}c=!0}c||(o=tr(o),typeof t=="string"?o!=null&&at(o):V(t,s,o))}function $(t){J.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}N($,J);var Xo=/^https?$/i,Yo=["POST","PUT"];n=$.prototype,n.Fa=function(t){this.H=t},n.ea=function(t,s,o,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xi.g(),this.g.onreadystatechange=H(v(this.Ca,this));try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(_){nr(this,_);return}if(t=o||"",o=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var y in c)o.set(y,c[y]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const _ of c.keys())o.set(_,c.get(_));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(o.keys()).find(_=>_.toLowerCase()=="content-type"),y=l.FormData&&t instanceof l.FormData,!(Array.prototype.indexOf.call(Yo,s,void 0)>=0)||c||y||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,S]of o)this.g.setRequestHeader(_,S);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(_){nr(this,_)}};function nr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.o=5,ir(t),Lt(t)}function ir(t){t.A||(t.A=!0,Y(t,"complete"),Y(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,Y(this,"complete"),Y(this,"abort"),Lt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lt(this,!0)),$.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?rr(this):this.Xa())},n.Xa=function(){rr(this)};function rr(t){if(t.h&&typeof h<"u"){if(t.v&&Te(t)==4)setTimeout(t.Ca.bind(t),0);else if(Y(t,"readystatechange"),Te(t)==4){t.h=!1;try{const _=t.ca();e:switch(_){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var o;if(!(o=s)){var c;if(c=_===0){let S=String(t.D).match(Wi)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),c=!Xo.test(S?S.toLowerCase():"")}o=c}if(o)Y(t,"complete"),Y(t,"success");else{t.o=6;try{var y=Te(t)>2?t.g.statusText:""}catch{y=""}t.l=y+" ["+t.ca()+"]",ir(t)}}finally{Lt(t)}}}}function Lt(t,s){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const o=t.g;t.g=null,s||Y(t,"ready");try{o.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Te(t){return t.g?t.g.readyState:0}n.ca=function(){try{return Te(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),Co(s)}};function sr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Qo(t){const s={};t=(t.g&&Te(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(f(t[c]))continue;var o=xo(t[c]);const y=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const _=s[y]||[];s[y]=_,_.push(o)}Io(s,function(c){return c.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mt(t,s,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||s}function or(t){this.za=0,this.i=[],this.j=new ot,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mt("baseRetryDelayMs",5e3,t),this.Za=mt("retryDelaySeedMs",1e4,t),this.Ta=mt("forwardChannelMaxRetries",2,t),this.va=mt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new $i(t&&t.concurrentRequestLimit),this.Ba=new Jo,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=or.prototype,n.ka=8,n.I=1,n.connect=function(t,s,o,c){Q(0),this.W=t,this.H=s||{},o&&c!==void 0&&(this.H.OSID=o,this.H.OAID=c),this.F=this.X,this.J=gr(this,null,this.W),Ut(this)};function Dn(t){if(ar(t),t.I==3){var s=t.V++,o=he(t.J);if(V(o,"SID",t.M),V(o,"RID",s),V(o,"TYPE","terminate"),yt(t,o),s=new Ie(t,t.j,s),s.M=2,s.A=Ot(he(o)),o=!1,l.navigator&&l.navigator.sendBeacon)try{o=l.navigator.sendBeacon(s.A.toString(),"")}catch{}!o&&l.Image&&(new Image().src=s.A,o=!0),o||(s.g=mr(s.j,null),s.g.ea(s.A)),s.F=Date.now(),Rt(s)}pr(t)}function xt(t){t.g&&(On(t),t.g.cancel(),t.g=null)}function ar(t){xt(t),t.v&&(l.clearTimeout(t.v),t.v=null),Ft(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&l.clearTimeout(t.m),t.m=null)}function Ut(t){if(!Hi(t.h)&&!t.m){t.m=!0;var s=t.Ea;ne||u(),j||(ne(),j=!0),p.add(s,t),t.D=0}}function Zo(t,s){return zi(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=s.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=st(v(t.Ea,t,s),fr(t,t.D)),t.D++,!0)}n.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const y=new Ie(this,this.j,t);let _=this.o;if(this.U&&(_?(_=bi(_),Si(_,this.U)):_=this.U),this.u!==null||this.R||(y.J=_,_=null),this.S)e:{for(var s=0,o=0;o<this.i.length;o++){t:{var c=this.i[o];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(s+=c,s>4096){s=o;break e}if(s===4096||o===this.i.length-1){s=o+1;break e}}s=1e3}else s=1e3;s=hr(this,y,s),o=he(this.J),V(o,"RID",t),V(o,"CVER",22),this.G&&V(o,"X-HTTP-Session-Id",this.G),yt(this,o),_&&(this.R?s="headers="+at(tr(_))+"&"+s:this.u&&Pn(o,this.u,_)),Nn(this.h,y),this.Ra&&V(o,"TYPE","init"),this.S?(V(o,"$req",s),V(o,"SID","null"),y.U=!0,Sn(y,o,null)):Sn(y,o,s),this.I=2}}else this.I==3&&(t?cr(this,t):this.i.length==0||Hi(this.h)||cr(this))};function cr(t,s){var o;s?o=s.l:o=t.V++;const c=he(t.J);V(c,"SID",t.M),V(c,"RID",o),V(c,"AID",t.K),yt(t,c),t.u&&t.o&&Pn(c,t.u,t.o),o=new Ie(t,t.j,o,t.D+1),t.u===null&&(o.J=t.o),s&&(t.i=s.G.concat(t.i)),s=hr(t,o,1e3),o.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Nn(t.h,o),Sn(o,c,s)}function yt(t,s){t.H&&kt(t.H,function(o,c){V(s,c,o)}),t.l&&kt({},function(o,c){V(s,c,o)})}function hr(t,s,o){o=Math.min(t.i.length,o);const c=t.l?v(t.l.Ka,t.l,t):null;e:{var y=t.i;let C=-1;for(;;){const G=["count="+o];C==-1?o>0?(C=y[0].g,G.push("ofs="+C)):C=0:G.push("ofs="+C);let U=!0;for(let W=0;W<o;W++){var _=y[W].g;const le=y[W].map;if(_-=C,_<0)C=Math.max(0,y[W].g-100),U=!1;else try{_="req"+_+"_"||"";try{var S=le instanceof Map?le:Object.entries(le);for(const[Le,Ae]of S){let Ne=Ae;b(Ae)&&(Ne=mn(Ae)),G.push(_+Le+"="+encodeURIComponent(Ne))}}catch(Le){throw G.push(_+"type="+encodeURIComponent("_badmap")),Le}}catch{c&&c(le)}}if(U){S=G.join("&");break e}}S=void 0}return t=t.i.splice(0,o),s.G=t,S}function lr(t){if(!t.g&&!t.v){t.Y=1;var s=t.Da;ne||u(),j||(ne(),j=!0),p.add(s,t),t.A=0}}function Rn(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=st(v(t.Da,t),fr(t,t.A)),t.A++,!0)}n.Da=function(){if(this.v=null,ur(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=st(v(this.Wa,this),t)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Q(10),xt(this),ur(this))};function On(t){t.B!=null&&(l.clearTimeout(t.B),t.B=null)}function ur(t){t.g=new Ie(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var s=he(t.na);V(s,"RID","rpc"),V(s,"SID",t.M),V(s,"AID",t.K),V(s,"CI",t.F?"0":"1"),!t.F&&t.ia&&V(s,"TO",t.ia),V(s,"TYPE","xmlhttp"),yt(t,s),t.u&&t.o&&Pn(s,t.u,t.o),t.O&&(t.g.H=t.O);var o=t.g;t=t.ba,o.M=1,o.A=Ot(he(s)),o.u=null,o.R=!0,Vi(o,t)}n.Va=function(){this.C!=null&&(this.C=null,xt(this),Rn(this),Q(19))};function Ft(t){t.C!=null&&(l.clearTimeout(t.C),t.C=null)}function dr(t,s){var o=null;if(t.g==s){Ft(t),On(t),t.g=null;var c=2}else if(An(t.h,s))o=s.G,qi(t.h,s),c=1;else return;if(t.I!=0){if(s.o)if(c==1){o=s.u?s.u.length:0,s=Date.now()-s.F;var y=t.D;c=_n(),Y(c,new Li(c,o)),Ut(t)}else lr(t);else if(y=s.m,y==3||y==0&&s.X>0||!(c==1&&Zo(t,s)||c==2&&Rn(t)))switch(o&&o.length>0&&(s=t.h,s.i=s.i.concat(o)),y){case 1:Me(t,5);break;case 4:Me(t,10);break;case 3:Me(t,6);break;default:Me(t,2)}}}function fr(t,s){let o=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(o*=2),o*s}function Me(t,s){if(t.j.info("Error code "+s),s==2){var o=v(t.bb,t),c=t.Ua;const y=!c;c=new Se(c||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ht(c,"https"),Ot(c),y?Wo(c.toString(),o):Ko(c.toString(),o)}else Q(2);t.I=0,t.l&&t.l.pa(s),pr(t),ar(t)}n.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function pr(t){if(t.I=0,t.ja=[],t.l){const s=Gi(t.h);(s.length!=0||t.i.length!=0)&&(F(t.ja,s),F(t.ja,t.i),t.h.i.length=0,z(t.i),t.i.length=0),t.l.oa()}}function gr(t,s,o){var c=o instanceof Se?he(o):new Se(o);if(c.g!="")s&&(c.g=s+"."+c.g),lt(c,c.u);else{var y=l.location;c=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;const _=new Se(null);c&&ht(_,c),s&&(_.g=s),y&&lt(_,y),o&&(_.h=o),c=_}return o=t.G,s=t.wa,o&&s&&V(c,o,s),V(c,"VER",t.ka),yt(t,c),c}function mr(t,s,o){if(s&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Aa&&!t.ma?new $(new kn({ab:o})):new $(t.ma),s.Fa(t.L),s}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yr(){}n=yr.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function re(t,s){J.call(this),this.g=new or(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.sa&&(t?t["X-WebChannel-Client-Profile"]=s.sa:t={"X-WebChannel-Client-Profile":s.sa}),this.g.U=t,(t=s&&s.Qb)&&!f(t)&&(this.g.u=t),this.A=s&&s.supportsCrossDomainXhr||!1,this.v=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!f(s)&&(this.g.G=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Qe(this)}N(re,J),re.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},re.prototype.close=function(){Dn(this.g)},re.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.v&&(o={},o.__data__=mn(t),t=o);s.i.push(new Vo(s.Ya++,t)),s.I==3&&Ut(s)},re.prototype.N=function(){this.g.l=null,delete this.j,Dn(this.g),delete this.g,re.Z.N.call(this)};function wr(t){yn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const o in s){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}N(wr,yn);function _r(){wn.call(this),this.status=1}N(_r,wn);function Qe(t){this.g=t}N(Qe,yr),Qe.prototype.ra=function(){Y(this.g,"a")},Qe.prototype.qa=function(t){Y(this.g,new wr(t))},Qe.prototype.pa=function(t){Y(this.g,new _r)},Qe.prototype.oa=function(){Y(this.g,"b")},re.prototype.send=re.prototype.o,re.prototype.open=re.prototype.m,re.prototype.close=re.prototype.close,vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,Lo.COMPLETE="complete",Po.EventType=it,it.OPEN="a",it.CLOSE="b",it.ERROR="c",it.MESSAGE="d",J.prototype.listen=J.prototype.J,$.prototype.listenOnce=$.prototype.K,$.prototype.getLastError=$.prototype.Ha,$.prototype.getLastErrorCode=$.prototype.ya,$.prototype.getStatus=$.prototype.ca,$.prototype.getResponseJson=$.prototype.La,$.prototype.getResponseText=$.prototype.la,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Fa}).apply(typeof Bt<"u"?Bt:typeof self<"u"?self:typeof window<"u"?window:{});const $r="@firebase/firestore",Hr="4.9.2";/**
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
 */class ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
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
 */let on="12.3.0";/**
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
 */const Qt=new oi("@firebase/firestore");function ae(n,...e){if(Qt.logLevel<=x.DEBUG){const i=e.map($s);Qt.debug(`Firestore (${on}): ${n}`,...i)}}function Bs(n,...e){if(Qt.logLevel<=x.ERROR){const i=e.map($s);Qt.error(`Firestore (${on}): ${n}`,...i)}}function $s(n){if(typeof n=="string")return n;try{/**
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
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
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
 */function Zt(n,e,i){let r="Unexpected state";typeof e=="string"?r=e:i=e,Hs(n,r,i)}function Hs(n,e,i){let r=`FIRESTORE (${on}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{r+=" CONTEXT: "+JSON.stringify(i)}catch{r+=" CONTEXT: "+i}throw Bs(r),new Error(r)}function vt(n,e,i,r){let a="Unexpected state";typeof i=="string"?a=i:r=i,n||Hs(e,a,r)}/**
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
 */const O={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class M extends be{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class yh{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(ie.UNAUTHENTICATED))}shutdown(){}}class _h{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){vt(this.o===void 0,42304);let r=this.i;const a=I=>this.i!==r?(r=this.i,i(I)):Promise.resolve();let h=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new bt,e.enqueueRetryable(()=>a(this.currentUser))};const l=()=>{const I=h;e.enqueueRetryable(async()=>{await I.promise,await a(this.currentUser)})},b=I=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(I=>b(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?b(I):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new bt)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string",31837,{l:r}),new yh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return vt(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class vh{constructor(e,i,r){this.P=e,this.T=i,this.I=r,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bh{constructor(e,i,r){this.P=e,this.T=i,this.I=r}getToken(){return Promise.resolve(new vh(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ih{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){vt(this.o===void 0,3512);const r=h=>{h.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const l=h.token!==this.m;return this.m=h.token,ae("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>r(h))};const a=h=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(h=>a(h)),setTimeout(()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?a(h):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new zr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(vt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new zr(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sh(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let r=0;r<n;r++)i[r]=Math.floor(256*Math.random());return i}/**
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
 */class Eh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=Sh(40);for(let h=0;h<a.length;++h)r.length<20&&a[h]<i&&(r+=e.charAt(a[h]%62))}return r}}function Pe(n,e){return n<e?-1:n>e?1:0}function Th(n,e){const i=Math.min(n.length,e.length);for(let r=0;r<i;r++){const a=n.charAt(r),h=e.charAt(r);if(a!==h)return Hn(a)===Hn(h)?Pe(a,h):Hn(a)?1:-1}return Pe(n.length,e.length)}const Ah=55296,Nh=57343;function Hn(n){const e=n.charCodeAt(0);return e>=Ah&&e<=Nh}/**
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
 */const qr="__name__";class ue{constructor(e,i,r){i===void 0?i=0:i>e.length&&Zt(637,{offset:i,range:e.length}),r===void 0?r=e.length-i:r>e.length-i&&Zt(1746,{length:r,range:e.length-i}),this.segments=e,this.offset=i,this.len=r}get length(){return this.len}isEqual(e){return ue.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof ue?e.forEach(r=>{i.push(r)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,r=this.limit();i<r;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const r=Math.min(e.length,i.length);for(let a=0;a<r;a++){const h=ue.compareSegments(e.get(a),i.get(a));if(h!==0)return h}return Pe(e.length,i.length)}static compareSegments(e,i){const r=ue.isNumericId(e),a=ue.isNumericId(i);return r&&!a?-1:!r&&a?1:r&&a?ue.extractNumericId(e).compare(ue.extractNumericId(i)):Th(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return li.fromString(e.substring(4,e.length-2))}}class oe extends ue{construct(e,i,r){return new oe(e,i,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);i.push(...r.split("/").filter(a=>a.length>0))}return new oe(i)}static emptyPath(){return new oe([])}}const Ch=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends ue{construct(e,i,r){return new Fe(e,i,r)}static isValidIdentifier(e){return Ch.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qr}static keyField(){return new Fe([qr])}static fromServerFormat(e){const i=[];let r="",a=0;const h=()=>{if(r.length===0)throw new M(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(r),r=""};let l=!1;for(;a<e.length;){const b=e[a];if(b==="\\"){if(a+1===e.length)throw new M(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const I=e[a+1];if(I!=="\\"&&I!=="."&&I!=="`")throw new M(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=I,a+=2}else b==="`"?(l=!l,a++):b!=="."||l?(r+=b,a++):(h(),a++)}if(h(),l)throw new M(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(i)}static emptyPath(){return new Fe([])}}/**
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
 */class je{constructor(e){this.path=e}static fromPath(e){return new je(oe.fromString(e))}static fromName(e){return new je(oe.fromString(e).popFirst(5))}static empty(){return new je(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return oe.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new je(new oe(e.slice()))}}function kh(n,e,i,r){if(e===!0&&r===!0)throw new M(O.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function Ph(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function q(n,e){const i={typeString:n};return e&&(i.value=e),i}function Nt(n,e){if(!Ph(n))throw new M(O.INVALID_ARGUMENT,"JSON must be an object");let i;for(const r in e)if(e[r]){const a=e[r].typeString,h="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){i=`JSON missing required field: '${r}'`;break}const l=n[r];if(a&&typeof l!==a){i=`JSON field '${r}' must be a ${a}.`;break}if(h!==void 0&&l!==h.value){i=`Expected '${r}' field to equal '${h.value}'`;break}}if(i)throw new M(O.INVALID_ARGUMENT,i);return!0}/**
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
 */const Gr=-62135596800,Wr=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),r=Math.floor((e-1e3*i)*Wr);return new de(i,r)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new M(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new M(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Gr)throw new M(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wr}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nt(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:q("string",de._jsonSchemaVersion),seconds:q("number"),nanoseconds:q("number")};function Dh(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Rh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(a){try{return atob(a)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new Rh("Invalid base64 string: "+h):h}}(e);return new ze(i)}static fromUint8Array(e){const i=function(a){let h="";for(let l=0;l<a.length;++l)h+=String.fromCharCode(a[l]);return h}(e);return new ze(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const r=new Uint8Array(i.length);for(let a=0;a<i.length;a++)r[a]=i.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const Kr="(default)";class en{constructor(e,i){this.projectId=e,this.database=i||Kr}static empty(){return new en("","")}get isDefaultDatabase(){return this.database===Kr}isEqual(e){return e instanceof en&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Oh{constructor(e,i=null,r=[],a=[],h=null,l="F",b=null,I=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=r,this.filters=a,this.limit=h,this.limitType=l,this.startAt=b,this.endAt=I,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Mh(n){return new Oh(n)}/**
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
 */var Jr,P;(P=Jr||(Jr={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new li([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Lh=41943040;/**
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
 */const xh=1048576;function zn(){return typeof document<"u"?document:null}/**
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
 */class Uh{constructor(e,i,r=1e3,a=1.5,h=6e4){this.Mi=e,this.timerId=i,this.d_=r,this.A_=a,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),a=Math.max(0,i-r);a>0&&ae("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class ui{constructor(e,i,r,a,h){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=a,this.removalCallback=h,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,a,h){const l=Date.now()+r,b=new ui(e,i,l,a,h);return b.start(r),b}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Xr,Yr;(Yr=Xr||(Xr={})).Ma="default",Yr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Fh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Qr=new Map;/**
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
 */const Vh="firestore.googleapis.com",Zr=!0;class es{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vh,this.ssl=Zr}else this.host=e.host,this.ssl=e.ssl??Zr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Lh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xh)throw new M(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,i,r,a){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new es({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new es(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wh;switch(r.type){case"firstParty":return new bh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=Qr.get(i);r&&(ae("ComponentProvider","Removing Datastore"),Qr.delete(i),r.terminate())}(this),Promise.resolve()}}/**
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
 */class di{constructor(e,i,r){this.converter=i,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class pe{constructor(e,i,r){this.converter=i,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,r){if(Nt(i,pe._jsonSchema))return new pe(e,r||null,new je(oe.fromString(i.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:q("string",pe._jsonSchemaVersion),referencePath:q("string")};class fi extends di{constructor(e,i,r){super(e,i,Mh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new je(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}/**
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
 */const ts="AsyncQueue";class ns{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Uh(this,"async_queue_retry"),this._c=()=>{const r=zn();r&&ae(ts,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const i=zn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=zn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const i=new bt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Dh(e))throw e;ae(ts,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const i=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Bs("INTERNAL UNHANDLED ERROR: ",is(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=i,i}enqueueAfterDelay(e,i,r){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const a=ui.createAndSchedule(this,e,i,r,h=>this.hc(h));return this.tc.push(a),a}uc(){this.nc&&Zt(47125,{Pc:is(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function is(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Bh extends jh{constructor(e,i,r,a){super(e,i,r,a),this.type="firestore",this._queue=new ns,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ns(e),this._firestoreClient=void 0,await e}}}/**
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
 */class we{constructor(e){this._byteString=e}static fromBase64String(e){try{return new we(ze.fromBase64String(e))}catch(i){throw new M(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new we(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:we._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nt(e,we._jsonSchema))return we.fromBase64String(e.bytes)}}we._jsonSchemaVersion="firestore/bytes/1.0",we._jsonSchema={type:q("string",we._jsonSchemaVersion),bytes:q("string")};/**
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
 */class zs{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new M(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $e{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new M(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new M(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(e){if(Nt(e,$e._jsonSchema))return new $e(e.latitude,e.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:q("string",$e._jsonSchemaVersion),latitude:q("number"),longitude:q("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class He{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let h=0;h<r.length;++h)if(r[h]!==a[h])return!1;return!0}(this._values,e._values)}toJSON(){return{type:He._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nt(e,He._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new He(e.vectorValues);throw new M(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}He._jsonSchemaVersion="firestore/vectorValue/1.0",He._jsonSchema={type:q("string",He._jsonSchemaVersion),vectorValues:q("object")};const $h=new RegExp("[~\\*/\\[\\]]");function Hh(n,e,i){if(e.search($h)>=0)throw rs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new zs(...e.split("."))._internalPath}catch{throw rs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function rs(n,e,i,r,a){let h=`Function ${e}() called with invalid data`;h+=". ";let l="";return new M(O.INVALID_ARGUMENT,h+n+l)}/**
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
 */class qs{constructor(e,i,r,a,h){this._firestore=e,this._userDataWriter=i,this._key=r,this._document=a,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(Gs("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class zh extends qs{data(){return super.data()}}function Gs(n,e){return typeof e=="string"?Hh(n,e):e instanceof zs?e._internalPath:e._delegate._internalPath}class $t{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tt extends qs{constructor(e,i,r,a,h,l){super(e,i,r,a,l),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Gt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const r=this._document.data.field(Gs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=tt._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}tt._jsonSchemaVersion="firestore/documentSnapshot/1.0",tt._jsonSchema={type:q("string",tt._jsonSchemaVersion),bundleSource:q("string","DocumentSnapshot"),bundleName:q("string"),bundle:q("string")};class Gt extends tt{data(e={}){return super.data(e)}}class It{constructor(e,i,r,a){this._firestore=e,this._userDataWriter=i,this._snapshot=a,this.metadata=new $t(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(r=>{e.call(i,new Gt(this._firestore,this._userDataWriter,r.key,r,new $t(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new M(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(a,h){if(a._snapshot.oldDocs.isEmpty()){let l=0;return a._snapshot.docChanges.map(b=>{const I=new Gt(a._firestore,a._userDataWriter,b.doc.key,b.doc,new $t(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter);return b.doc,{type:"added",doc:I,oldIndex:-1,newIndex:l++}})}{let l=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(b=>h||b.type!==3).map(b=>{const I=new Gt(a._firestore,a._userDataWriter,b.doc.key,b.doc,new $t(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,k=-1;return b.type!==0&&(v=l.indexOf(b.doc.key),l=l.delete(b.doc.key)),b.type!==1&&(l=l.add(b.doc),k=l.indexOf(b.doc.key)),{type:qh(b.type),doc:I,oldIndex:v,newIndex:k}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=It._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Eh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],r=[],a=[];return this.docs.forEach(h=>{h._document!==null&&(i.push(h._document),r.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),a.push(h.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qh(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zt(61501,{type:n})}}It._jsonSchemaVersion="firestore/querySnapshot/1.0",It._jsonSchema={type:q("string",It._jsonSchemaVersion),bundleSource:q("string","QuerySnapshot"),bundleName:q("string"),bundle:q("string")};(function(e,i=!0){(function(a){on=a})(rn),me(new ce("firestore",(r,{instanceIdentifier:a,options:h})=>{const l=r.getProvider("app").getImmediate(),b=new Bh(new _h(r.getProvider("auth-internal")),new Ih(l,r.getProvider("app-check-internal")),function(v,k){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new M(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new en(v.options.projectId,k)}(l,a),l);return h={useFetchStreams:i,...h},b._setSettings(h),b},"PUBLIC").setMultipleInstances(!0)),se($r,Hr,e),se($r,Hr,"esm2020")})();const Ws="@firebase/installations",pi="0.6.19";/**
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
 */const Ks=1e4,Js=`w:${pi}`,Xs="FIS_v2",Gh="https://firebaseinstallations.googleapis.com/v1",Wh=60*60*1e3,Kh="installations",Jh="Installations";/**
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
 */const Xh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qe=new We(Kh,Jh,Xh);function Ys(n){return n instanceof be&&n.code.includes("request-failed")}/**
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
 */function Qs({projectId:n}){return`${Gh}/projects/${n}/installations`}function Zs(n){return{token:n.token,requestStatus:2,expiresIn:Qh(n.expiresIn),creationTime:Date.now()}}async function eo(n,e){const r=(await e.json()).error;return qe.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function to({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Yh(n,{refreshToken:e}){const i=to(n);return i.append("Authorization",Zh(e)),i}async function no(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Qh(n){return Number(n.replace("s","000"))}function Zh(n){return`${Xs} ${n}`}/**
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
 */async function el({appConfig:n,heartbeatServiceProvider:e},{fid:i}){const r=Qs(n),a=to(n),h=e.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&a.append("x-firebase-client",v)}const l={fid:i,authVersion:Xs,appId:n.appId,sdkVersion:Js},b={method:"POST",headers:a,body:JSON.stringify(l)},I=await no(()=>fetch(r,b));if(I.ok){const v=await I.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:Zs(v.authToken)}}else throw await eo("Create Installation",I)}/**
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
 */function io(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function tl(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nl=/^[cdef][\w-]{21}$/,si="";function il(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const i=rl(n);return nl.test(i)?i:si}catch{return si}}function rl(n){return tl(n).substr(0,22)}/**
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
 */function an(n){return`${n.appName}!${n.appId}`}/**
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
 */const ro=new Map;function so(n,e){const i=an(n);oo(i,e),sl(i,e)}function oo(n,e){const i=ro.get(n);if(i)for(const r of i)r(e)}function sl(n,e){const i=ol();i&&i.postMessage({key:n,fid:e}),al()}let Be=null;function ol(){return!Be&&"BroadcastChannel"in self&&(Be=new BroadcastChannel("[Firebase] FID Change"),Be.onmessage=n=>{oo(n.data.key,n.data.fid)}),Be}function al(){ro.size===0&&Be&&(Be.close(),Be=null)}/**
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
 */const cl="firebase-installations-database",hl=1,Ge="firebase-installations-store";let qn=null;function gi(){return qn||(qn=nn(cl,hl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ge)}}})),qn}async function tn(n,e){const i=an(n),a=(await gi()).transaction(Ge,"readwrite"),h=a.objectStore(Ge),l=await h.get(i);return await h.put(e,i),await a.done,(!l||l.fid!==e.fid)&&so(n,e.fid),e}async function ao(n){const e=an(n),r=(await gi()).transaction(Ge,"readwrite");await r.objectStore(Ge).delete(e),await r.done}async function cn(n,e){const i=an(n),a=(await gi()).transaction(Ge,"readwrite"),h=a.objectStore(Ge),l=await h.get(i),b=e(l);return b===void 0?await h.delete(i):await h.put(b,i),await a.done,b&&(!l||l.fid!==b.fid)&&so(n,b.fid),b}/**
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
 */async function mi(n){let e;const i=await cn(n.appConfig,r=>{const a=ll(r),h=ul(n,a);return e=h.registrationPromise,h.installationEntry});return i.fid===si?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function ll(n){const e=n||{fid:il(),registrationStatus:0};return co(e)}function ul(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(qe.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dl(n,i);return{installationEntry:i,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fl(n)}:{installationEntry:e}}async function dl(n,e){try{const i=await el(n,e);return tn(n.appConfig,i)}catch(i){throw Ys(i)&&i.customData.serverCode===409?await ao(n.appConfig):await tn(n.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function fl(n){let e=await ss(n.appConfig);for(;e.registrationStatus===1;)await io(100),e=await ss(n.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:r}=await mi(n);return r||i}return e}function ss(n){return cn(n,e=>{if(!e)throw qe.create("installation-not-found");return co(e)})}function co(n){return pl(n)?{fid:n.fid,registrationStatus:0}:n}function pl(n){return n.registrationStatus===1&&n.registrationTime+Ks<Date.now()}/**
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
 */async function gl({appConfig:n,heartbeatServiceProvider:e},i){const r=ml(n,i),a=Yh(n,i),h=e.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&a.append("x-firebase-client",v)}const l={installation:{sdkVersion:Js,appId:n.appId}},b={method:"POST",headers:a,body:JSON.stringify(l)},I=await no(()=>fetch(r,b));if(I.ok){const v=await I.json();return Zs(v)}else throw await eo("Generate Auth Token",I)}function ml(n,{fid:e}){return`${Qs(n)}/${e}/authTokens:generate`}/**
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
 */async function yi(n,e=!1){let i;const r=await cn(n.appConfig,h=>{if(!ho(h))throw qe.create("not-registered");const l=h.authToken;if(!e&&_l(l))return h;if(l.requestStatus===1)return i=yl(n,e),h;{if(!navigator.onLine)throw qe.create("app-offline");const b=bl(h);return i=wl(n,b),b}});return i?await i:r.authToken}async function yl(n,e){let i=await os(n.appConfig);for(;i.authToken.requestStatus===1;)await io(100),i=await os(n.appConfig);const r=i.authToken;return r.requestStatus===0?yi(n,e):r}function os(n){return cn(n,e=>{if(!ho(e))throw qe.create("not-registered");const i=e.authToken;return Il(i)?{...e,authToken:{requestStatus:0}}:e})}async function wl(n,e){try{const i=await gl(n,e),r={...e,authToken:i};return await tn(n.appConfig,r),i}catch(i){if(Ys(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await ao(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await tn(n.appConfig,r)}throw i}}function ho(n){return n!==void 0&&n.registrationStatus===2}function _l(n){return n.requestStatus===2&&!vl(n)}function vl(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Wh}function bl(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Il(n){return n.requestStatus===1&&n.requestTime+Ks<Date.now()}/**
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
 */async function Sl(n){const e=n,{installationEntry:i,registrationPromise:r}=await mi(e);return r?r.catch(console.error):yi(e).catch(console.error),i.fid}/**
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
 */async function El(n,e=!1){const i=n;return await Tl(i),(await yi(i,e)).token}async function Tl(n){const{registrationPromise:e}=await mi(n);e&&await e}/**
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
 */function Al(n){if(!n||!n.options)throw Gn("App Configuration");if(!n.name)throw Gn("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!n.options[i])throw Gn(i);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Gn(n){return qe.create("missing-app-config-values",{valueName:n})}/**
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
 */const lo="installations",Nl="installations-internal",Cl=n=>{const e=n.getProvider("app").getImmediate(),i=Al(e),r=ci(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},kl=n=>{const e=n.getProvider("app").getImmediate(),i=ci(e,lo).getImmediate();return{getId:()=>Sl(i),getToken:a=>El(i,a)}};function Pl(){me(new ce(lo,Cl,"PUBLIC")),me(new ce(Nl,kl,"PRIVATE"))}Pl();se(Ws,pi);se(Ws,pi,"esm2020");/**
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
 */const Dl="/firebase-messaging-sw.js",Rl="/firebase-cloud-messaging-push-scope",uo="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ol="https://fcmregistrations.googleapis.com/v1",fo="google.c.a.c_id",Ml="google.c.a.c_l",Ll="google.c.a.ts",xl="google.c.a.e",as=1e4;var cs;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(cs||(cs={}));/**
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
 */var Et;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Et||(Et={}));/**
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
 */function ye(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ul(n){const e="=".repeat((4-n.length%4)%4),i=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(i),a=new Uint8Array(r.length);for(let h=0;h<r.length;++h)a[h]=r.charCodeAt(h);return a}/**
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
 */const Wn="fcm_token_details_db",Fl=5,hs="fcm_token_object_Store";async function Vl(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(Wn))return null;let e=null;return(await nn(Wn,Fl,{upgrade:async(r,a,h,l)=>{if(a<2||!r.objectStoreNames.contains(hs))return;const b=l.objectStore(hs),I=await b.index("fcmSenderId").get(n);if(await b.clear(),!!I){if(a===2){const v=I;if(!v.auth||!v.p256dh||!v.endpoint)return;e={token:v.fcmToken,createTime:v.createTime??Date.now(),subscriptionOptions:{auth:v.auth,p256dh:v.p256dh,endpoint:v.endpoint,swScope:v.swScope,vapidKey:typeof v.vapidKey=="string"?v.vapidKey:ye(v.vapidKey)}}}else if(a===3){const v=I;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:ye(v.auth),p256dh:ye(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:ye(v.vapidKey)}}}else if(a===4){const v=I;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:ye(v.auth),p256dh:ye(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:ye(v.vapidKey)}}}}}})).close(),await Fn(Wn),await Fn("fcm_vapid_details_db"),await Fn("undefined"),jl(e)?e:null}function jl(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Bl="firebase-messaging-database",$l=1,Tt="firebase-messaging-store";let Kn=null;function po(){return Kn||(Kn=nn(Bl,$l,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Tt)}}})),Kn}async function Hl(n){const e=go(n),r=await(await po()).transaction(Tt).objectStore(Tt).get(e);if(r)return r;{const a=await Vl(n.appConfig.senderId);if(a)return await wi(n,a),a}}async function wi(n,e){const i=go(n),a=(await po()).transaction(Tt,"readwrite");return await a.objectStore(Tt).put(e,i),await a.done,e}function go({appConfig:n}){return n.appId}/**
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
 */const zl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},X=new We("messaging","Messaging",zl);/**
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
 */async function ql(n,e){const i=await vi(n),r=mo(e),a={method:"POST",headers:i,body:JSON.stringify(r)};let h;try{h=await(await fetch(_i(n.appConfig),a)).json()}catch(l){throw X.create("token-subscribe-failed",{errorInfo:l==null?void 0:l.toString()})}if(h.error){const l=h.error.message;throw X.create("token-subscribe-failed",{errorInfo:l})}if(!h.token)throw X.create("token-subscribe-no-token");return h.token}async function Gl(n,e){const i=await vi(n),r=mo(e.subscriptionOptions),a={method:"PATCH",headers:i,body:JSON.stringify(r)};let h;try{h=await(await fetch(`${_i(n.appConfig)}/${e.token}`,a)).json()}catch(l){throw X.create("token-update-failed",{errorInfo:l==null?void 0:l.toString()})}if(h.error){const l=h.error.message;throw X.create("token-update-failed",{errorInfo:l})}if(!h.token)throw X.create("token-update-no-token");return h.token}async function Wl(n,e){const r={method:"DELETE",headers:await vi(n)};try{const h=await(await fetch(`${_i(n.appConfig)}/${e}`,r)).json();if(h.error){const l=h.error.message;throw X.create("token-unsubscribe-failed",{errorInfo:l})}}catch(a){throw X.create("token-unsubscribe-failed",{errorInfo:a==null?void 0:a.toString()})}}function _i({projectId:n}){return`${Ol}/projects/${n}/registrations`}async function vi({appConfig:n,installations:e}){const i=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${i}`})}function mo({p256dh:n,auth:e,endpoint:i,vapidKey:r}){const a={web:{endpoint:i,auth:e,p256dh:n}};return r!==uo&&(a.web.applicationPubKey=r),a}/**
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
 */const Kl=7*24*60*60*1e3;async function Jl(n){const e=await Yl(n.swRegistration,n.vapidKey),i={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ye(e.getKey("auth")),p256dh:ye(e.getKey("p256dh"))},r=await Hl(n.firebaseDependencies);if(r){if(Ql(r.subscriptionOptions,i))return Date.now()>=r.createTime+Kl?Xl(n,{token:r.token,createTime:Date.now(),subscriptionOptions:i}):r.token;try{await Wl(n.firebaseDependencies,r.token)}catch(a){console.warn(a)}return ls(n.firebaseDependencies,i)}else return ls(n.firebaseDependencies,i)}async function Xl(n,e){try{const i=await Gl(n.firebaseDependencies,e),r={...e,token:i,createTime:Date.now()};return await wi(n.firebaseDependencies,r),i}catch(i){throw i}}async function ls(n,e){const r={token:await ql(n,e),createTime:Date.now(),subscriptionOptions:e};return await wi(n,r),r.token}async function Yl(n,e){const i=await n.pushManager.getSubscription();return i||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ul(e)})}function Ql(n,e){const i=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,a=e.auth===n.auth,h=e.p256dh===n.p256dh;return i&&r&&a&&h}/**
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
 */function us(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Zl(e,n),eu(e,n),tu(e,n),e}function Zl(n,e){if(!e.notification)return;n.notification={};const i=e.notification.title;i&&(n.notification.title=i);const r=e.notification.body;r&&(n.notification.body=r);const a=e.notification.image;a&&(n.notification.image=a);const h=e.notification.icon;h&&(n.notification.icon=h)}function eu(n,e){e.data&&(n.data=e.data)}function tu(n,e){var a,h,l,b;if(!e.fcmOptions&&!((a=e.notification)!=null&&a.click_action))return;n.fcmOptions={};const i=((h=e.fcmOptions)==null?void 0:h.link)??((l=e.notification)==null?void 0:l.click_action);i&&(n.fcmOptions.link=i);const r=(b=e.fcmOptions)==null?void 0:b.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
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
 */function nu(n){return typeof n=="object"&&!!n&&fo in n}/**
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
 */function iu(n){if(!n||!n.options)throw Jn("App Configuration Object");if(!n.name)throw Jn("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:i}=n;for(const r of e)if(!i[r])throw Jn(r);return{appName:n.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function Jn(n){return X.create("missing-app-config-values",{valueName:n})}/**
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
 */class ru{constructor(e,i,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=iu(e);this.firebaseDependencies={app:e,appConfig:a,installations:i,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function su(n){try{n.swRegistration=await navigator.serviceWorker.register(Dl,{scope:Rl}),n.swRegistration.update().catch(()=>{}),await ou(n.swRegistration)}catch(e){throw X.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function ou(n){return new Promise((e,i)=>{const r=setTimeout(()=>i(new Error(`Service worker not registered after ${as} ms`)),as),a=n.installing||n.waiting;n.active?(clearTimeout(r),e()):a?a.onstatechange=h=>{var l;((l=h.target)==null?void 0:l.state)==="activated"&&(a.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),i(new Error("No incoming service worker found.")))})}/**
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
 */async function au(n,e){if(!e&&!n.swRegistration&&await su(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw X.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function cu(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=uo)}/**
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
 */async function yo(n,e){if(!navigator)throw X.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw X.create("permission-blocked");return await cu(n,e==null?void 0:e.vapidKey),await au(n,e==null?void 0:e.serviceWorkerRegistration),Jl(n)}/**
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
 */async function hu(n,e,i){const r=lu(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:i[fo],message_name:i[Ml],message_time:i[Ll],message_device_time:Math.floor(Date.now()/1e3)})}function lu(n){switch(n){case Et.NOTIFICATION_CLICKED:return"notification_open";case Et.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function uu(n,e){const i=e.data;if(!i.isFirebaseMessaging)return;n.onMessageHandler&&i.messageType===Et.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(us(i)):n.onMessageHandler.next(us(i)));const r=i.data;nu(r)&&r[xl]==="1"&&await hu(n,i.messageType,r)}const ds="@firebase/messaging",fs="0.12.23";/**
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
 */const du=n=>{const e=new ru(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",i=>uu(e,i)),e},fu=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>yo(e,r)}};function pu(){me(new ce("messaging",du,"PUBLIC")),me(new ce("messaging-internal",fu,"PRIVATE")),se(ds,fs),se(ds,fs,"esm2020")}/**
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
 */async function gu(){try{await Is()}catch{return!1}return typeof window<"u"&&bs()&&wa()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function mu(n,e){if(!navigator)throw X.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function yu(n=Ic()){return gu().then(e=>{if(!e)throw X.create("unsupported-browser")},e=>{throw X.create("indexed-db-unsupported")}),ci(Ke(n),"messaging").getImmediate()}async function wu(n,e){return n=Ke(n),yo(n,e)}function _u(n,e){return n=Ke(n),mu(n,e)}pu();const vu={apiKey:"AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",authDomain:"digitalliberia-notification.firebaseapp.com",projectId:"digitalliberia-notification",storageBucket:"digitalliberia-notification.appspot.com",messagingSenderId:"537791418352",appId:"1:537791418352:web:378b48439b2c9bed6dd735"},bu=As(vu),wo=yu(bu),Iu="BEICu1bx8LKW5j7cag5tU9B2qfcejWi7QPm8a95jFODSIUNRiellygLGroK9NyWt-3WsTiUZscmS311gGXiXV7Q",_o=async()=>{try{const n=await navigator.serviceWorker.register("/firebase-messaging-sw.js");if(console.log("Service Worker registered:",n),await Notification.requestPermission()==="granted"){console.log("Notification permission granted.");const i=await wu(wo,{vapidKey:Iu,serviceWorkerRegistration:n});return i?(console.log("FCM Token:",i),localStorage.setItem("fcmToken",i),i):(console.log("No registration token available."),null)}else return console.log("Notification permission denied."),null}catch(n){return console.error("Error retrieving token:",n),null}};_u(wo,n=>{if(console.log("Message received in foreground:",n),n.notification){const{title:e,body:i}=n.notification;new Notification(e,{body:i})}});const Su=[{label:"Home",to:"/",color:"bg-blue-500/80"},{label:"System",to:"/system",color:"bg-green-500/80"},{label:"Digital Liberia",to:"/digital-liberia",color:"bg-purple-500/80"},{label:"LibPay",to:"/libpay",color:"bg-yellow-500/80"},{label:"Liberian Post",to:"/liberian-post",color:"bg-pink-500/80"}],Xn=["/logos/liberianpost.png","/logos/digital.png","/logos/libmusic.png","/logos/libconnectsit.png","/logos/libpaysit.png","/logos/seal of liberia.png","/logos/liberia.png"],Ht=[{id:"education",name:"Ministry of Education",description:"School management, student records, and educational resources",icon:"/logos/moe.png",path:"/moe/dashboard"},{id:"health",name:"Ministry of Health",description:"Health records, vaccination data, and medical services",icon:"/logos/moh.png",path:"/moh/dashboard"},{id:"finance",name:"Ministry of Finance",description:"Tax records, financial services, and economic data",icon:"/logos/mof.png",path:"/mof/dashboard"},{id:"justice",name:"Ministry of Justice",description:"Legal documents, court records, and law enforcement",icon:"/logos/moj.png",path:"/moj/dashboard"},{id:"transport",name:"Ministry of Transport",description:"Driver licenses, vehicle registration, and transport permits",icon:"/logos/mot.png",path:"/mot/dashboard"},{id:"foreign",name:"Ministry of Foreign Affairs",description:"Passport services and international relations",icon:"/logos/mofa.png",path:"/mofa/dashboard"},{id:"agriculture",name:"Ministry of Agriculture",description:"Farming permits, agricultural data, and food security",icon:"/logos/moa.png",path:"/moa/dashboard"},{id:"internal",name:"Ministry of Internal Affairs",description:"Citizen IDs, birth certificates, and local governance",icon:"/logos/moia.png",path:"/moia/dashboard"},{id:"lands",name:"Ministry of Mines and Energy",description:"Mining permits, energy resources, and mineral records",icon:"/logos/mol.png",path:"/mol/dashboard"},{id:"commerce",name:"Ministry of Commerce",description:"Business registration and trade licenses",icon:"/logos/moc.png",path:"/moc/dashboard"},{id:"labour",name:"Ministry of Labour",description:"Employment records and worker rights",icon:"/logos/moll.png",path:"/moll/dashboard"},{id:"youth",name:"Ministry of Youth & Sports",description:"Youth programs and sporting events",icon:"/logos/moy.png",path:"/moy/dashboard"},{id:"land-authority",name:"Liberia Land Authority",description:"Land deeds, property records, and land administration",icon:"/logos/lla.png",path:"/lla/dashboard"}],Eu=[{id:"passport",name:"Passport"},{id:"birth-certificate",name:"Birth Certificate"},{id:"drivers-license",name:"Driver's License"},{id:"citizen-id",name:"Citizen ID"},{id:"business-registration",name:"Business Registration"},{id:"vehicle-registration",name:"Vehicle Registration"},{id:"land-deed",name:"Land Deed"},{id:"tax-services",name:"Tax Services"}],Tu=({onClose:n,onSuccess:e,service:i="Ministry of Education",onGuestAccess:r,ministryIcon:a})=>{const[h,l]=ee.useState(""),[b,I]=ee.useState(""),[v,k]=ee.useState(!1),[N,H]=ee.useState(null),[z,F]=ee.useState(!1),[E,A]=ee.useState(null),[D,B]=ee.useState(null),te=async j=>{var p,u;try{const d=localStorage.getItem("fcmToken")||await _o(),m=await br.post("/gov-services/request",{dssn:j,service:i,fcmToken:d,requestData:{timestamp:new Date().toISOString(),service:i,origin:window.location.origin}});if(!m.data.success)throw new Error(m.data.error||"Failed to initiate challenge");return m.data}catch(d){throw console.error("Error requesting DSSN challenge:",d),new Error(((u=(p=d.response)==null?void 0:p.data)==null?void 0:u.error)||d.message||"Failed to initiate DSSN challenge")}},K=async j=>{var p,u;try{const d=await br.get(`/gov-services/status/${j}`);if(!d.data.success)throw new Error(d.data.error||"Failed to check challenge status");return d.data}catch(d){throw console.error("Error polling challenge status:",d),new Error(((u=(p=d.response)==null?void 0:p.data)==null?void 0:u.error)||d.message||"Failed to check approval status")}};ee.useEffect(()=>()=>{E&&clearInterval(E)},[E]);const ne=async j=>{if(j.preventDefault(),I(""),k(!0),B(null),!h.trim()){I("Please enter your DSSN"),k(!1);return}try{const p=await te(h);H(p.challengeId),F(!0),k(!1),p.pushNotification&&B({sent:p.pushNotification.sent,hasToken:p.pushNotification.hasToken,error:p.pushNotification.error});const u=setInterval(async()=>{try{const d=await K(p.challengeId);d.status==="approved"?(clearInterval(u),F(!1),e(d.govToken,p.challengeId)):d.status==="denied"&&(clearInterval(u),F(!1),I("Access was denied on your mobile device"))}catch(d){console.error("Error polling challenge status:",d),clearInterval(u),F(!1),I(d.message)}},3e3);A(u),setTimeout(()=>{z&&(clearInterval(u),F(!1),I("Request timed out. Please try again."))},5*60*1e3)}catch(p){I(p.message),k(!1)}};return T("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",children:L("div",{className:"bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl",children:[L("div",{className:"bg-blue-600 p-4 flex justify-between items-center",children:[L("h2",{className:"text-xl font-bold text-white",children:[i," - DSSN Verification"]}),T("button",{onClick:n,className:"text-white text-2xl hover:text-gray-200",disabled:z||v,children:"×"})]}),L("div",{className:"p-6",children:[T("div",{className:"flex justify-center mb-6",children:T("img",{src:a||"/logos/moe.png",alt:"Ministry Logo",className:"w-20 h-20 object-contain"})}),b&&T("div",{className:"mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm",children:b}),D&&!D.sent&&T("div",{className:"mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md text-sm",children:D.hasToken?`Push notification failed: ${D.error||"Unknown error"}`:"User doesn't have the mobile app installed. Please ask them to download it."}),z?L("div",{className:"text-center",children:[T("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),T("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Waiting for Mobile Approval"}),T("p",{className:"text-gray-600 mb-4",children:"Please check your mobile app to approve this verification request."}),(D==null?void 0:D.sent)&&T("p",{className:"text-sm text-green-600 mb-2",children:"✓ Push notification sent to mobile device"}),L("p",{className:"text-sm text-gray-500",children:["Challenge ID: ",N]}),T("p",{className:"text-xs text-gray-400 mt-2",children:"This request will timeout in 5 minutes"})]}):L("form",{onSubmit:ne,children:[L("div",{className:"mb-4",children:[T("label",{className:"block text-gray-900 mb-2 font-medium",children:"Digital Social Security Number (DSSN)"}),T("input",{type:"text",value:h,onChange:j=>l(j.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900",placeholder:"Enter your DSSN",required:!0,autoFocus:!0,disabled:v}),T("p",{className:"text-sm text-gray-500 mt-1",children:"Enter your DSSN and approve the request on your mobile app"})]}),T("button",{type:"submit",disabled:v,className:`w-full py-3 px-4 rounded-md text-white font-semibold ${v?"bg-blue-400":"bg-blue-600 hover:bg-blue-700"} transition-colors flex items-center justify-center`,children:v?L(ia,{children:[L("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[T("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),T("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"Verify with DSSN"})]}),L("div",{className:"mt-6 text-center text-sm border-t border-gray-200 pt-4",children:[L("p",{className:"text-gray-600 mb-4",children:["Don't have the mobile app? ",T("a",{href:"#",className:"text-blue-600 hover:underline",onClick:j=>{j.preventDefault(),alert("The Digital Liberia mobile app is available on the App Store and Google Play Store")},children:"Download it here"})]}),L("div",{className:"mt-4 pt-4 border-t border-gray-200",children:[T("p",{className:"text-gray-500 text-sm mb-3",children:"Or continue as a guest with limited access"}),T("button",{onClick:r,className:"w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors font-medium",children:"I am a guest"})]})]})]})]})})},Nu=()=>{const{user:n}=ea(),e=ta(),i=na(),[r,a]=ee.useState(0),[h,l]=ee.useState(!1),[b,I]=ee.useState(null),[v,k]=ee.useState(null);ee.useEffect(()=>{const E=setInterval(()=>{a(A=>(A+1)%Xn.length)},600);return()=>clearInterval(E)},[]),ee.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(E=>{console.log("SW registered: ",E)}).catch(E=>{console.log("SW registration failed: : ",E)}),_o()},[]);const N=async(E,A,D)=>{try{const B=JSON.parse(atob(E.split(".")[1])),K={education:"MOE",health:"MOH",finance:"MOF",justice:"MOJ",transport:"MOT",foreign:"MOFA",agriculture:"MOA",internal:"MOIA",lands:"MOL",commerce:"MOC",labour:"MOLL",youth:"MOY","land-authority":"LLA"}[D];localStorage.setItem(`${K}_USER_ID`,B.userId),localStorage.setItem(`${K}_USERNAME`,"DSSN User"),localStorage.setItem(`${K}_LOGGED_IN`,"true"),localStorage.setItem(`${K}_GOV_TOKEN`,E),localStorage.setItem(`${K}_DSSN`,B.dssn||""),localStorage.setItem(`${K}_CHALLENGE_ID`,A||""),localStorage.setItem(`${K}_LOGIN_TIMESTAMP`,new Date().toISOString()),l(!1);const ne=Ht.find(j=>j.id===D);ne?i(ne.path):console.error(`Ministry with ID ${D} not found`)}catch(B){console.error("Error processing DSSN login:",B),alert("Login failed. Please try again.")}},H=E=>{const D={education:"MOE",health:"MOH",finance:"MOF",justice:"MOJ",transport:"MOT",foreign:"MOFA",agriculture:"MOA",internal:"MOIA",lands:"MOL",commerce:"MOC",labour:"MOLL",youth:"MOY","land-authority":"LLA"}[E];localStorage.setItem(`${D}_USER_ID`,"guest_user"),localStorage.setItem(`${D}_USERNAME`,"Guest User"),localStorage.setItem(`${D}_LOGGED_IN`,"true"),localStorage.setItem(`${D}_IS_GUEST`,"true"),localStorage.setItem(`${D}_LOGIN_TIMESTAMP`,new Date().toISOString()),l(!1);const B=Ht.find(te=>te.id===E);B?i(B.path):console.error(`Ministry with ID ${E} not found`)},z=(E,A)=>{A.stopPropagation();const D=Ht.find(B=>B.id===E);D&&(I(E),k(D),l(!0))},F=(E,A)=>{A.stopPropagation(),alert(`${E.replace("-"," ")} service will be available soon`)};return L("div",{className:"relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden",children:[T("div",{className:"fixed inset-0 bg-blue-950 -z-50"}),T("div",{className:"fixed inset-0 flex items-center justify-center z-10 pointer-events-none",children:T("div",{className:"relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center",children:Xn.map((E,A)=>L("div",{className:`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${A===r?"opacity-100":"opacity-0"}`,children:[T("img",{src:E,alt:`Logo ${A}`,className:"max-w-full max-h-full object-contain"}),T("div",{className:"absolute inset-0 bg-black/5"})]},A))})}),T("header",{className:"fixed top-0 left-0 w-full z-50",children:L("div",{className:"bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30",children:[T("div",{className:"flex items-center justify-center px-4 py-4 max-w-7xl mx-auto",children:T("nav",{className:"flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center",children:Su.map(E=>T("div",{className:`flex-shrink-0 ${E.color} px-3 py-1 rounded-lg`,children:T(vr,{to:E.to,className:`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${e.pathname===E.to?"text-red-500":"text-white hover:text-blue-300"}`,children:E.label})},E.to))})}),T("div",{className:"w-full bg-gradient-to-b from-blue-950 to-transparent overflow-x-auto",children:T("div",{className:"flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3",children:Xn.map((E,A)=>T("div",{className:`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${A===r?"scale-110 bg-white shadow-lg":"scale-100 bg-white/90"}`,style:{animation:A===r?"heartbeat 600ms ease-in-out":"none"},children:T("img",{src:E,alt:`Logo ${A}`,className:"w-12 h-12 md:w-16 md:h-16 object-contain"})},A))})})]})}),L("main",{className:"relative z-30 pt-48 pb-20 px-4 md:px-8",children:[T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:L("div",{className:"bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-600/10 backdrop-blur-lg rounded-xl border border-rose-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),L("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Social Security Number (DSSN)"}),L("div",{className:"text-white space-y-4",children:[T("p",{children:"In the Digital Liberia project, the DSSN (Digital Social Security Number) is a unique digital identifier assigned to every Liberian citizen or legal resident within the system."}),T(vr,{to:"/dssn",className:"inline-flex items-center bg-blue-500/80 backdrop-blur-sm rounded-lg px-3 py-1 ml-2 border border-blue-400/30 cursor-pointer hover:bg-blue-600/80 transition-colors",children:"(click here to verify a DSSN)"})]})]})]})}),T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:L("div",{className:"bg-gradient-to-br from-green-500/10 via-teal-500/10 to-emerald-600/10 backdrop-blur-lg rounded-xl border border-green-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),L("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Liberia System"}),T("div",{className:"text-white",children:T("p",{children:"The National Database Management System (NDMS) is the secure, centralized, and intelligent national data backbone that powers Digital Liberia."})})]})]})}),T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:L("div",{className:"bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-purple-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),L("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Government Ministries"}),T("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Ht.map(E=>T("div",{onClick:A=>z(E.id,A),className:"cursor-pointer bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm relative z-20",children:L("div",{className:"flex items-center space-x-4",children:[T("img",{src:E.icon,alt:E.name,className:"w-12 h-12 object-contain"}),L("div",{children:[T("h3",{className:"font-bold text-lg",children:E.name}),T("p",{className:"text-sm text-white/80",children:E.description})]})]})},E.id))})]})]})}),T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:L("div",{className:"bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-blue-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),L("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Quick Access Services"}),T("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Eu.map(E=>T("button",{onClick:A=>F(E.id,A),className:"bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm text-left",children:T("h3",{className:"font-bold text-lg",children:E.name})},E.id))})]})]})})]}),T("footer",{className:"relative z-30 py-6 text-center text-white/60 text-sm",children:L("div",{className:"border-t border-blue-700/30 pt-6",children:["© ",new Date().getFullYear()," Digital Liberia. All rights reserved."]})}),h&&v&&T(Tu,{onClose:()=>l(!1),onSuccess:(E,A)=>N(E,A,b),onGuestAccess:()=>H(b),service:v.name,ministryIcon:v.icon}),T("style",{jsx:!0,global:!0,children:`
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
      `})]})};export{Nu as default};
