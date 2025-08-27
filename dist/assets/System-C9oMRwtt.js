import{u as _s,a as ha,b as li,r as G,j as C,c as E,L as Tr,D as la,S as ua,F as da,d as Ar}from"./index-BTBWbdQS.js";const fa=()=>{};var Nr={};/**
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
 */const bs=function(n){const e=[];let i=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[i++]=a:a<2048?(e[i++]=a>>6|192,e[i++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[i++]=a>>18|240,e[i++]=a>>12&63|128,e[i++]=a>>6&63|128,e[i++]=a&63|128):(e[i++]=a>>12|224,e[i++]=a>>6&63|128,e[i++]=a&63|128)}return e},pa=function(n){const e=[];let i=0,s=0;for(;i<n.length;){const a=n[i++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const h=n[i++];e[s++]=String.fromCharCode((a&31)<<6|h&63)}else if(a>239&&a<365){const h=n[i++],u=n[i++],m=n[i++],b=((a&7)<<18|(h&63)<<12|(u&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(b>>10)),e[s++]=String.fromCharCode(56320+(b&1023))}else{const h=n[i++],u=n[i++];e[s++]=String.fromCharCode((a&15)<<12|(h&63)<<6|u&63)}}return e.join("")},Is={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const h=n[a],u=a+1<n.length,m=u?n[a+1]:0,b=a+2<n.length,I=b?n[a+2]:0,P=h>>2,O=(h&3)<<4|m>>4;let N=(m&15)<<2|I>>6,T=I&63;b||(T=64,u||(N=64)),s.push(i[P],i[O],i[N],i[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const h=i[n.charAt(a++)],m=a<n.length?i[n.charAt(a)]:0;++a;const I=a<n.length?i[n.charAt(a)]:64;++a;const O=a<n.length?i[n.charAt(a)]:64;if(++a,h==null||m==null||I==null||O==null)throw new ga;const N=h<<2|m>>4;if(s.push(N),I!==64){const T=m<<4&240|I>>2;if(s.push(T),O!==64){const A=I<<6&192|O;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ga extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ma=function(n){const e=bs(n);return Is.encodeByteArray(e,!0)},Ss=function(n){return ma(n).replace(/\./g,"")},Es=function(n){try{return Is.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ya(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wa=()=>ya().__FIREBASE_DEFAULTS__,va=()=>{if(typeof process>"u"||typeof Nr>"u")return;const n=Nr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_a=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Es(n[1]);return e&&JSON.parse(e)},Ts=()=>{try{return fa()||wa()||va()||_a()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},As=()=>{var n;return(n=Ts())==null?void 0:n.config},ba=n=>{var e;return(e=Ts())==null?void 0:e[`_${n}`]};/**
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
 */class Ia{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,s))}}}/**
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
 */function Ns(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Ea(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ta(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Aa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ks(){try{return typeof indexedDB=="object"}catch{return!1}}function Cs(){return new Promise((n,e)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),i||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{i=!1},a.onerror=()=>{var h;e(((h=a.error)==null?void 0:h.message)||"")}}catch(i){e(i)}})}function Na(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ka="FirebaseError";class Ee extends Error{constructor(e,i,s){super(i),this.code=e,this.customData=s,this.name=ka,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qe.prototype.create)}}class qe{constructor(e,i,s){this.service=e,this.serviceName=i,this.errors=s}create(e,...i){const s=i[0]||{},a=`${this.service}/${e}`,h=this.errors[e],u=h?Ca(h,s):"Error",m=`${this.serviceName}: ${u} (${a}).`;return new Ee(a,m,s)}}function Ca(n,e){return n.replace(Da,(i,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Da=/\{\$([^}]+)}/g;function ti(n,e){if(n===e)return!0;const i=Object.keys(n),s=Object.keys(e);for(const a of i){if(!s.includes(a))return!1;const h=n[a],u=e[a];if(kr(h)&&kr(u)){if(!ti(h,u))return!1}else if(h!==u)return!1}for(const a of s)if(!i.includes(a))return!1;return!0}function kr(n){return n!==null&&typeof n=="object"}/**
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
 */function Ds(n){const e=[];for(const[i,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pa(n,e){const i=new Ra(n,e);return i.subscribe.bind(i)}class Ra{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,s){let a;if(e===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");Oa(e,["next","error","complete"])?a=e:a={next:e,error:i,complete:s},a.next===void 0&&(a.next=Vn),a.error===void 0&&(a.error=Vn),a.complete===void 0&&(a.complete=Vn);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Oa(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Vn(){}/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class le{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Le="[DEFAULT]";/**
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
 */class xa{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const s=new Ia;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:i});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ma(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:a});s.resolve(h)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[h,u]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(h);s===m&&u.resolve(a)}return a}onInit(e,i){const s=this.normalizeInstanceIdentifier(i),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const h=this.instances.get(s);return h&&e(h,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,i){const s=this.onInitCallbacks.get(i);if(s)for(const a of s)try{a(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:La(e),options:i}),this.instances.set(e,s),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function La(n){return n===Le?void 0:n}function Ma(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ua{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new xa(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Fa={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Va=U.INFO,ja={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Ba=(n,e,...i)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=ja[e];if(a)console[a](`[${s}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ui{constructor(e){this.name=e,this._logLevel=Va,this._logHandler=Ba,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const $a=(n,e)=>e.some(i=>n instanceof i);let Cr,Dr;function Ha(){return Cr||(Cr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function za(){return Dr||(Dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ps=new WeakMap,ni=new WeakMap,Rs=new WeakMap,jn=new WeakMap,di=new WeakMap;function Wa(n){const e=new Promise((i,s)=>{const a=()=>{n.removeEventListener("success",h),n.removeEventListener("error",u)},h=()=>{i(Ie(n.result)),a()},u=()=>{s(n.error),a()};n.addEventListener("success",h),n.addEventListener("error",u)});return e.then(i=>{i instanceof IDBCursor&&Ps.set(i,n)}).catch(()=>{}),di.set(e,n),e}function qa(n){if(ni.has(n))return;const e=new Promise((i,s)=>{const a=()=>{n.removeEventListener("complete",h),n.removeEventListener("error",u),n.removeEventListener("abort",u)},h=()=>{i(),a()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",h),n.addEventListener("error",u),n.addEventListener("abort",u)});ni.set(n,e)}let ii={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return ni.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rs.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ie(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ga(n){ii=n(ii)}function Ka(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const s=n.call(Bn(this),e,...i);return Rs.set(s,e.sort?e.sort():[e]),Ie(s)}:za().includes(n)?function(...e){return n.apply(Bn(this),e),Ie(Ps.get(this))}:function(...e){return Ie(n.apply(Bn(this),e))}}function Ja(n){return typeof n=="function"?Ka(n):(n instanceof IDBTransaction&&qa(n),$a(n,Ha())?new Proxy(n,ii):n)}function Ie(n){if(n instanceof IDBRequest)return Wa(n);if(jn.has(n))return jn.get(n);const e=Ja(n);return e!==n&&(jn.set(n,e),di.set(e,n)),e}const Bn=n=>di.get(n);function an(n,e,{blocked:i,upgrade:s,blocking:a,terminated:h}={}){const u=indexedDB.open(n,e),m=Ie(u);return s&&u.addEventListener("upgradeneeded",b=>{s(Ie(u.result),b.oldVersion,b.newVersion,Ie(u.transaction),b)}),i&&u.addEventListener("blocked",b=>i(b.oldVersion,b.newVersion,b)),m.then(b=>{h&&b.addEventListener("close",()=>h()),a&&b.addEventListener("versionchange",I=>a(I.oldVersion,I.newVersion,I))}).catch(()=>{}),m}function $n(n,{blocked:e}={}){const i=indexedDB.deleteDatabase(n);return e&&i.addEventListener("blocked",s=>e(s.oldVersion,s)),Ie(i).then(()=>{})}const Xa=["get","getKey","getAll","getAllKeys","count"],Ya=["put","add","delete","clear"],Hn=new Map;function Pr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hn.get(e))return Hn.get(e);const i=e.replace(/FromIndex$/,""),s=e!==i,a=Ya.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Xa.includes(i)))return;const h=async function(u,...m){const b=this.transaction(u,a?"readwrite":"readonly");let I=b.store;return s&&(I=I.index(m.shift())),(await Promise.all([I[i](...m),a&&b.done]))[0]};return Hn.set(e,h),h}Ga(n=>({...n,get:(e,i,s)=>Pr(e,i)||n.get(e,i,s),has:(e,i)=>!!Pr(e,i)||n.has(e,i)}));/**
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
 */class Qa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Za(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function Za(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",Rr="0.14.1";/**
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
 */const Se=new ui("@firebase/app"),ec="@firebase/app-compat",tc="@firebase/analytics-compat",nc="@firebase/analytics",ic="@firebase/app-check-compat",rc="@firebase/app-check",sc="@firebase/auth",oc="@firebase/auth-compat",ac="@firebase/database",cc="@firebase/data-connect",hc="@firebase/database-compat",lc="@firebase/functions",uc="@firebase/functions-compat",dc="@firebase/installations",fc="@firebase/installations-compat",pc="@firebase/messaging",gc="@firebase/messaging-compat",mc="@firebase/performance",yc="@firebase/performance-compat",wc="@firebase/remote-config",vc="@firebase/remote-config-compat",_c="@firebase/storage",bc="@firebase/storage-compat",Ic="@firebase/firestore",Sc="@firebase/ai",Ec="@firebase/firestore-compat",Tc="firebase",Ac="12.1.0";/**
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
 */const si="[DEFAULT]",Nc={[ri]:"fire-core",[ec]:"fire-core-compat",[nc]:"fire-analytics",[tc]:"fire-analytics-compat",[rc]:"fire-app-check",[ic]:"fire-app-check-compat",[sc]:"fire-auth",[oc]:"fire-auth-compat",[ac]:"fire-rtdb",[cc]:"fire-data-connect",[hc]:"fire-rtdb-compat",[lc]:"fire-fn",[uc]:"fire-fn-compat",[dc]:"fire-iid",[fc]:"fire-iid-compat",[pc]:"fire-fcm",[gc]:"fire-fcm-compat",[mc]:"fire-perf",[yc]:"fire-perf-compat",[wc]:"fire-rc",[vc]:"fire-rc-compat",[_c]:"fire-gcs",[bc]:"fire-gcs-compat",[Ic]:"fire-fst",[Ec]:"fire-fst-compat",[Sc]:"fire-vertex","fire-js":"fire-js",[Tc]:"fire-js-all"};/**
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
 */const Yt=new Map,kc=new Map,oi=new Map;function Or(n,e){try{n.container.addComponent(e)}catch(i){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function me(n){const e=n.name;if(oi.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;oi.set(e,n);for(const i of Yt.values())Or(i,n);for(const i of kc.values())Or(i,n);return!0}function fi(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Cc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new qe("app","Firebase",Cc);/**
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
 */class Dc{constructor(e,i,s){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const cn=Ac;function Os(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const s={name:si,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw De.create("bad-app-name",{appName:String(a)});if(i||(i=As()),!i)throw De.create("no-options");const h=Yt.get(a);if(h){if(ti(i,h.options)&&ti(s,h.config))return h;throw De.create("duplicate-app",{appName:a})}const u=new Ua(a);for(const b of oi.values())u.addComponent(b);const m=new Dc(i,s,u);return Yt.set(a,m),m}function Pc(n=si){const e=Yt.get(n);if(!e&&n===si&&As())return Os();if(!e)throw De.create("no-app",{appName:n});return e}function oe(n,e,i){let s=Nc[n]??n;i&&(s+=`-${i}`);const a=s.match(/\s|\//),h=e.match(/\s|\//);if(a||h){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&h&&u.push("and"),h&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(u.join(" "));return}me(new le(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Rc="firebase-heartbeat-database",Oc=1,Et="firebase-heartbeat-store";let zn=null;function xs(){return zn||(zn=an(Rc,Oc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Et)}catch(i){console.warn(i)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),zn}async function xc(n){try{const i=(await xs()).transaction(Et),s=await i.objectStore(Et).get(Ls(n));return await i.done,s}catch(e){if(e instanceof Ee)Se.warn(e.message);else{const i=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Se.warn(i.message)}}}async function xr(n,e){try{const s=(await xs()).transaction(Et,"readwrite");await s.objectStore(Et).put(e,Ls(n)),await s.done}catch(i){if(i instanceof Ee)Se.warn(i.message);else{const s=De.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Se.warn(s.message)}}}function Ls(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Lc=1024,Mc=30;class Uc{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Vc(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,i;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=Lr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(u=>u.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:a}),this._heartbeatsCache.heartbeats.length>Mc){const u=jc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Se.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Lr(),{heartbeatsToSend:s,unsentEntries:a}=Fc(this._heartbeatsCache.heartbeats),h=Ss(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return Se.warn(i),""}}}function Lr(){return new Date().toISOString().substring(0,10)}function Fc(n,e=Lc){const i=[];let s=n.slice();for(const a of n){const h=i.find(u=>u.agent===a.agent);if(h){if(h.dates.push(a.date),Mr(i)>e){h.dates.pop();break}}else if(i.push({agent:a.agent,dates:[a.date]}),Mr(i)>e){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Vc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ks()?Cs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await xc(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mr(n){return Ss(JSON.stringify({version:2,heartbeats:n})).length}function jc(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let s=1;s<n.length;s++)n[s].date<i&&(i=n[s].date,e=s);return e}/**
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
 */function Bc(n){me(new le("platform-logger",e=>new Qa(e),"PRIVATE")),me(new le("heartbeat",e=>new Uc(e),"PRIVATE")),oe(ri,Rr,n),oe(ri,Rr,"esm2020"),oe("fire-js","")}Bc("");var $c="firebase",Hc="12.1.0";/**
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
 */oe($c,Hc,"app");function Ms(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zc=Ms,Us=new qe("auth","Firebase",Ms());/**
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
 */const Qt=new ui("@firebase/auth");function Wc(n,...e){Qt.logLevel<=U.WARN&&Qt.warn(`Auth (${cn}): ${n}`,...e)}function Kt(n,...e){Qt.logLevel<=U.ERROR&&Qt.error(`Auth (${cn}): ${n}`,...e)}/**
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
 */function Ur(n,...e){throw pi(n,...e)}function Fs(n,...e){return pi(n,...e)}function Vs(n,e,i){const s={...zc(),[e]:i};return new qe("auth","Firebase",s).create(e,{appName:n.name})}function Jt(n){return Vs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pi(n,...e){if(typeof n!="string"){const i=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(i,...s)}return Us.create(n,...e)}function x(n,e,...i){if(!n)throw pi(e,...i)}function vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kt(e),new Error(e)}function Zt(n,e){n||vt(e)}function qc(){return Fr()==="http:"||Fr()==="https:"}function Fr(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Gc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qc()||Ta()||"connection"in navigator)?navigator.onLine:!0}function Kc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Nt{constructor(e,i){this.shortDelay=e,this.longDelay=i,Zt(i>e,"Short delay should be less than long delay!"),this.isMobile=Sa()||Aa()}get(){return Gc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jc(n,e){Zt(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class js{static initialize(e,i,s){this.fetchImpl=e,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qc=new Nt(3e4,6e4);function Bs(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function hn(n,e,i,s,a={}){return $s(n,a,async()=>{let h={},u={};s&&(e==="GET"?u=s:h={body:JSON.stringify(s)});const m=Ds({key:n.config.apiKey,...u}).slice(1),b=await n._getAdditionalHeaders();b["Content-Type"]="application/json",n.languageCode&&(b["X-Firebase-Locale"]=n.languageCode);const I={method:e,headers:b,...h};return Ea()||(I.referrerPolicy="no-referrer"),n.emulatorConfig&&Ns(n.emulatorConfig.host)&&(I.credentials="include"),js.fetch()(await Hs(n,n.config.apiHost,i,m),I)})}async function $s(n,e,i){n._canInitEmulator=!1;const s={...Xc,...e};try{const a=new Zc(n),h=await Promise.race([i(),a.promise]);a.clearNetworkTimeout();const u=await h.json();if("needConfirmation"in u)throw Wt(n,"account-exists-with-different-credential",u);if(h.ok&&!("errorMessage"in u))return u;{const m=h.ok?u.errorMessage:u.error.message,[b,I]=m.split(" : ");if(b==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wt(n,"credential-already-in-use",u);if(b==="EMAIL_EXISTS")throw Wt(n,"email-already-in-use",u);if(b==="USER_DISABLED")throw Wt(n,"user-disabled",u);const P=s[b]||b.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw Vs(n,P,I);Ur(n,P)}}catch(a){if(a instanceof Ee)throw a;Ur(n,"network-request-failed",{message:String(a)})}}async function Hs(n,e,i,s){const a=`${e}${i}?${s}`,h=n,u=h.config.emulator?Jc(n.config,a):`${n.config.apiScheme}://${a}`;return Yc.includes(i)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(u).toString():u}class Zc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(Fs(this.auth,"network-request-failed")),Qc.get())})}}function Wt(n,e,i){const s={appName:n.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const a=Fs(n,e,s);return a.customData._tokenResponse=i,a}/**
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
 */async function eh(n,e){return hn(n,"POST","/v1/accounts:delete",e)}async function en(n,e){return hn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function _t(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function th(n,e=!1){const i=Ge(n),s=await i.getIdToken(e),a=zs(s);x(a&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error");const h=typeof a.firebase=="object"?a.firebase:void 0,u=h==null?void 0:h.sign_in_provider;return{claims:a,token:s,authTime:_t(Wn(a.auth_time)),issuedAtTime:_t(Wn(a.iat)),expirationTime:_t(Wn(a.exp)),signInProvider:u||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function Wn(n){return Number(n)*1e3}function zs(n){const[e,i,s]=n.split(".");if(e===void 0||i===void 0||s===void 0)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{const a=Es(i);return a?JSON.parse(a):(Kt("Failed to decode base64 JWT payload"),null)}catch(a){return Kt("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Vr(n){const e=zs(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ai(n,e,i=!1){if(i)return e;try{return await e}catch(s){throw s instanceof Ee&&nh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function nh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ih{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ci{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=_t(this.lastLoginAt),this.creationTime=_t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tn(n){var O;const e=n.auth,i=await n.getIdToken(),s=await ai(n,en(e,{idToken:i}));x(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const h=(O=a.providerUserInfo)!=null&&O.length?Ws(a.providerUserInfo):[],u=sh(n.providerData,h),m=n.isAnonymous,b=!(n.email&&a.passwordHash)&&!(u!=null&&u.length),I=m?b:!1,P={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ci(a.createdAt,a.lastLoginAt),isAnonymous:I};Object.assign(n,P)}async function rh(n){const e=Ge(n);await tn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sh(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Ws(n){return n.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function oh(n,e){const i=await $s(n,{},async()=>{const s=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:h}=n.config,u=await Hs(n,a,"/v1/token",`key=${h}`),m=await n._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const b={method:"POST",headers:m,body:s};return n.emulatorConfig&&Ns(n.emulatorConfig.host)&&(b.credentials="include"),js.fetch()(u,b)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function ah(n,e){return hn(n,"POST","/v2/accounts:revokeToken",Bs(n,e))}/**
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
 */class Ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){x(e.length!==0,"internal-error");const i=Vr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:s,refreshToken:a,expiresIn:h}=await oh(e,i);this.updateTokensAndExpiration(s,a,Number(h))}updateTokensAndExpiration(e,i,s){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,i){const{refreshToken:s,accessToken:a,expirationTime:h}=i,u=new Ze;return s&&(x(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(x(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),h&&(x(typeof h=="number","internal-error",{appName:e}),u.expirationTime=h),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ze,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
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
 */function Ce(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fe{constructor({uid:e,auth:i,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new ih(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ci(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const i=await ai(this,this.stsTokenManager.getToken(this.auth,e));return x(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return th(this,e)}reload(){return rh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new fe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),i&&await tn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await ai(this,eh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const s=i.displayName??void 0,a=i.email??void 0,h=i.phoneNumber??void 0,u=i.photoURL??void 0,m=i.tenantId??void 0,b=i._redirectEventId??void 0,I=i.createdAt??void 0,P=i.lastLoginAt??void 0,{uid:O,emailVerified:N,isAnonymous:T,providerData:A,stsTokenManager:k}=i;x(O&&k,e,"internal-error");const V=Ze.fromJSON(this.name,k);x(typeof O=="string",e,"internal-error"),Ce(s,e.name),Ce(a,e.name),x(typeof N=="boolean",e,"internal-error"),x(typeof T=="boolean",e,"internal-error"),Ce(h,e.name),Ce(u,e.name),Ce(m,e.name),Ce(b,e.name),Ce(I,e.name),Ce(P,e.name);const re=new fe({uid:O,auth:e,email:a,emailVerified:N,displayName:s,isAnonymous:T,photoURL:u,phoneNumber:h,tenantId:m,stsTokenManager:V,createdAt:I,lastLoginAt:P});return A&&Array.isArray(A)&&(re.providerData=A.map(te=>({...te}))),b&&(re._redirectEventId=b),re}static async _fromIdTokenResponse(e,i,s=!1){const a=new Ze;a.updateFromServerResponse(i);const h=new fe({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await tn(h),h}static async _fromGetAccountInfoResponse(e,i,s){const a=i.users[0];x(a.localId!==void 0,"internal-error");const h=a.providerUserInfo!==void 0?Ws(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(h!=null&&h.length),m=new Ze;m.updateFromIdToken(s);const b=new fe({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:u}),I={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new ci(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(h!=null&&h.length)};return Object.assign(b,I),b}}/**
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
 */const jr=new Map;function Fe(n){Zt(n instanceof Function,"Expected a class definition");let e=jr.get(n);return e?(Zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jr.set(n,e),e)}/**
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
 */class qs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}qs.type="NONE";const Br=qs;/**
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
 */function qn(n,e,i){return`firebase:${n}:${e}:${i}`}class et{constructor(e,i,s){this.persistence=e,this.auth=i,this.userKey=s;const{config:a,name:h}=this.auth;this.fullUserKey=qn(this.userKey,a.apiKey,h),this.fullPersistenceKey=qn("persistence",a.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await en(this.auth,{idToken:e}).catch(()=>{});return i?fe._fromGetAccountInfoResponse(this.auth,i,e):null}return fe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,s="authUser"){if(!i.length)return new et(Fe(Br),e,s);const a=(await Promise.all(i.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let h=a[0]||Fe(Br);const u=qn(s,e.config.apiKey,e.name);let m=null;for(const I of i)try{const P=await I._get(u);if(P){let O;if(typeof P=="string"){const N=await en(e,{idToken:P}).catch(()=>{});if(!N)break;O=await fe._fromGetAccountInfoResponse(e,N,P)}else O=fe._fromJSON(e,P);I!==h&&(m=O),h=I;break}}catch{}const b=a.filter(I=>I._shouldAllowMigration);return!h._shouldAllowMigration||!b.length?new et(h,e,s):(h=b[0],m&&await h._set(u,m.toJSON()),await Promise.all(i.map(async I=>{if(I!==h)try{await I._remove(u)}catch{}})),new et(h,e,s))}}/**
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
 */function $r(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fh(e))return"Blackberry";if(ph(e))return"Webos";if(hh(e))return"Safari";if((e.includes("chrome/")||lh(e))&&!e.includes("edge/"))return"Chrome";if(dh(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(i);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ch(n=ge()){return/firefox\//i.test(n)}function hh(n=ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lh(n=ge()){return/crios\//i.test(n)}function uh(n=ge()){return/iemobile/i.test(n)}function dh(n=ge()){return/android/i.test(n)}function fh(n=ge()){return/blackberry/i.test(n)}function ph(n=ge()){return/webos/i.test(n)}/**
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
 */function Gs(n,e=[]){let i;switch(n){case"Browser":i=$r(ge());break;case"Worker":i=`${$r(ge())}-${n}`;break;default:i=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${cn}/${s}`}/**
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
 */class gh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const s=h=>new Promise((u,m)=>{try{const b=e(h);u(b)}catch(b){m(b)}});s.onAbort=i,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const a of i)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function mh(n,e={}){return hn(n,"GET","/v2/passwordPolicy",Bs(n,e))}/**
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
 */const yh=6;class wh{constructor(e){var s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??yh,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=e.length>=s),a&&(i.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,i,s,a,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
 */class vh{constructor(e,i,s,a){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hr(this),this.idTokenSubscription=new Hr(this),this.beforeStateQueue=new gh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Us,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Fe(i)),this._initializationPromise=this.queue(async()=>{var s,a,h;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((h=this.currentUser)==null?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await en(this,{idToken:e}),s=await fe._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var h;if(Me(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(m,m))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(h=this.redirectUser)==null?void 0:h._redirectEventId,m=s==null?void 0:s._redirectEventId,b=await this.tryRedirectSignIn(e);(!u||u===m)&&(b!=null&&b.user)&&(s=b.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await tn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(Jt(this));const i=e?Ge(e):null;return i&&x(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mh(this),i=new wh(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qe("auth","Firebase",e())}onAuthStateChanged(e,i,s){return this.registerStateListener(this.authStateSubscription,e,i,s)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,s){return this.registerStateListener(this.idTokenSubscription,e,i,s)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await ah(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,i){const s=await this.getOrInitRedirectPersistenceManager(i);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Fe(e)||this._popupRedirectResolver;x(i,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[Fe(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,s;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,s,a){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let u=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(m,this,"internal-error"),m.then(()=>{u||h(this.currentUser)}),typeof i=="function"){const b=e.addObserver(i,s,a);return()=>{u=!0,b()}}else{const b=e.addObserver(i);return()=>{u=!0,b()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var i;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return e!=null&&e.error&&Wc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _h(n){return Ge(n)}class Hr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pa(i=>this.observer=i)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function bh(n,e){const i=(e==null?void 0:e.persistence)||[],s=(Array.isArray(i)?i:[i]).map(Fe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Nt(3e4,6e4);/**
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
 */new Nt(2e3,1e4);/**
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
 */new Nt(3e4,6e4);/**
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
 */new Nt(5e3,15e3);var zr="@firebase/auth",Wr="1.11.0";/**
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
 */class Ih{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Eh(n){me(new le("auth",(e,{options:i})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:u,authDomain:m}=s.options;x(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const b={apiKey:u,authDomain:m,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gs(n)},I=new vh(s,a,h,b);return bh(I,i),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,s)=>{e.getProvider("auth-internal").initialize()})),me(new le("auth-internal",e=>{const i=_h(e.getProvider("auth").getImmediate());return(s=>new Ih(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),oe(zr,Wr,Sh(n)),oe(zr,Wr,"esm2020")}/**
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
 */const Th=5*60;ba("authIdTokenMaxAge");Eh("Browser");var qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,l){function f(){}f.prototype=l.prototype,p.D=l.prototype,p.prototype=new f,p.prototype.constructor=p,p.C=function(g,y,v){for(var d=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)d[ye-2]=arguments[ye];return l.prototype[y].apply(g,d)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(p,l,f){f||(f=0);var g=Array(16);if(typeof l=="string")for(var y=0;16>y;++y)g[y]=l.charCodeAt(f++)|l.charCodeAt(f++)<<8|l.charCodeAt(f++)<<16|l.charCodeAt(f++)<<24;else for(y=0;16>y;++y)g[y]=l[f++]|l[f++]<<8|l[f++]<<16|l[f++]<<24;l=p.g[0],f=p.g[1],y=p.g[2];var v=p.g[3],d=l+(v^f&(y^v))+g[0]+3614090360&4294967295;l=f+(d<<7&4294967295|d>>>25),d=v+(y^l&(f^y))+g[1]+3905402710&4294967295,v=l+(d<<12&4294967295|d>>>20),d=y+(f^v&(l^f))+g[2]+606105819&4294967295,y=v+(d<<17&4294967295|d>>>15),d=f+(l^y&(v^l))+g[3]+3250441966&4294967295,f=y+(d<<22&4294967295|d>>>10),d=l+(v^f&(y^v))+g[4]+4118548399&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(y^l&(f^y))+g[5]+1200080426&4294967295,v=l+(d<<12&4294967295|d>>>20),d=y+(f^v&(l^f))+g[6]+2821735955&4294967295,y=v+(d<<17&4294967295|d>>>15),d=f+(l^y&(v^l))+g[7]+4249261313&4294967295,f=y+(d<<22&4294967295|d>>>10),d=l+(v^f&(y^v))+g[8]+1770035416&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(y^l&(f^y))+g[9]+2336552879&4294967295,v=l+(d<<12&4294967295|d>>>20),d=y+(f^v&(l^f))+g[10]+4294925233&4294967295,y=v+(d<<17&4294967295|d>>>15),d=f+(l^y&(v^l))+g[11]+2304563134&4294967295,f=y+(d<<22&4294967295|d>>>10),d=l+(v^f&(y^v))+g[12]+1804603682&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(y^l&(f^y))+g[13]+4254626195&4294967295,v=l+(d<<12&4294967295|d>>>20),d=y+(f^v&(l^f))+g[14]+2792965006&4294967295,y=v+(d<<17&4294967295|d>>>15),d=f+(l^y&(v^l))+g[15]+1236535329&4294967295,f=y+(d<<22&4294967295|d>>>10),d=l+(y^v&(f^y))+g[1]+4129170786&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^y&(l^f))+g[6]+3225465664&4294967295,v=l+(d<<9&4294967295|d>>>23),d=y+(l^f&(v^l))+g[11]+643717713&4294967295,y=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(y^v))+g[0]+3921069994&4294967295,f=y+(d<<20&4294967295|d>>>12),d=l+(y^v&(f^y))+g[5]+3593408605&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^y&(l^f))+g[10]+38016083&4294967295,v=l+(d<<9&4294967295|d>>>23),d=y+(l^f&(v^l))+g[15]+3634488961&4294967295,y=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(y^v))+g[4]+3889429448&4294967295,f=y+(d<<20&4294967295|d>>>12),d=l+(y^v&(f^y))+g[9]+568446438&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^y&(l^f))+g[14]+3275163606&4294967295,v=l+(d<<9&4294967295|d>>>23),d=y+(l^f&(v^l))+g[3]+4107603335&4294967295,y=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(y^v))+g[8]+1163531501&4294967295,f=y+(d<<20&4294967295|d>>>12),d=l+(y^v&(f^y))+g[13]+2850285829&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^y&(l^f))+g[2]+4243563512&4294967295,v=l+(d<<9&4294967295|d>>>23),d=y+(l^f&(v^l))+g[7]+1735328473&4294967295,y=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(y^v))+g[12]+2368359562&4294967295,f=y+(d<<20&4294967295|d>>>12),d=l+(f^y^v)+g[5]+4294588738&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^y)+g[8]+2272392833&4294967295,v=l+(d<<11&4294967295|d>>>21),d=y+(v^l^f)+g[11]+1839030562&4294967295,y=v+(d<<16&4294967295|d>>>16),d=f+(y^v^l)+g[14]+4259657740&4294967295,f=y+(d<<23&4294967295|d>>>9),d=l+(f^y^v)+g[1]+2763975236&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^y)+g[4]+1272893353&4294967295,v=l+(d<<11&4294967295|d>>>21),d=y+(v^l^f)+g[7]+4139469664&4294967295,y=v+(d<<16&4294967295|d>>>16),d=f+(y^v^l)+g[10]+3200236656&4294967295,f=y+(d<<23&4294967295|d>>>9),d=l+(f^y^v)+g[13]+681279174&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^y)+g[0]+3936430074&4294967295,v=l+(d<<11&4294967295|d>>>21),d=y+(v^l^f)+g[3]+3572445317&4294967295,y=v+(d<<16&4294967295|d>>>16),d=f+(y^v^l)+g[6]+76029189&4294967295,f=y+(d<<23&4294967295|d>>>9),d=l+(f^y^v)+g[9]+3654602809&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^y)+g[12]+3873151461&4294967295,v=l+(d<<11&4294967295|d>>>21),d=y+(v^l^f)+g[15]+530742520&4294967295,y=v+(d<<16&4294967295|d>>>16),d=f+(y^v^l)+g[2]+3299628645&4294967295,f=y+(d<<23&4294967295|d>>>9),d=l+(y^(f|~v))+g[0]+4096336452&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~y))+g[7]+1126891415&4294967295,v=l+(d<<10&4294967295|d>>>22),d=y+(l^(v|~f))+g[14]+2878612391&4294967295,y=v+(d<<15&4294967295|d>>>17),d=f+(v^(y|~l))+g[5]+4237533241&4294967295,f=y+(d<<21&4294967295|d>>>11),d=l+(y^(f|~v))+g[12]+1700485571&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~y))+g[3]+2399980690&4294967295,v=l+(d<<10&4294967295|d>>>22),d=y+(l^(v|~f))+g[10]+4293915773&4294967295,y=v+(d<<15&4294967295|d>>>17),d=f+(v^(y|~l))+g[1]+2240044497&4294967295,f=y+(d<<21&4294967295|d>>>11),d=l+(y^(f|~v))+g[8]+1873313359&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~y))+g[15]+4264355552&4294967295,v=l+(d<<10&4294967295|d>>>22),d=y+(l^(v|~f))+g[6]+2734768916&4294967295,y=v+(d<<15&4294967295|d>>>17),d=f+(v^(y|~l))+g[13]+1309151649&4294967295,f=y+(d<<21&4294967295|d>>>11),d=l+(y^(f|~v))+g[4]+4149444226&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~y))+g[11]+3174756917&4294967295,v=l+(d<<10&4294967295|d>>>22),d=y+(l^(v|~f))+g[2]+718787259&4294967295,y=v+(d<<15&4294967295|d>>>17),d=f+(v^(y|~l))+g[9]+3951481745&4294967295,p.g[0]=p.g[0]+l&4294967295,p.g[1]=p.g[1]+(y+(d<<21&4294967295|d>>>11))&4294967295,p.g[2]=p.g[2]+y&4294967295,p.g[3]=p.g[3]+v&4294967295}s.prototype.u=function(p,l){l===void 0&&(l=p.length);for(var f=l-this.blockSize,g=this.B,y=this.h,v=0;v<l;){if(y==0)for(;v<=f;)a(this,p,v),v+=this.blockSize;if(typeof p=="string"){for(;v<l;)if(g[y++]=p.charCodeAt(v++),y==this.blockSize){a(this,g),y=0;break}}else for(;v<l;)if(g[y++]=p[v++],y==this.blockSize){a(this,g),y=0;break}}this.h=y,this.o+=l},s.prototype.v=function(){var p=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);p[0]=128;for(var l=1;l<p.length-8;++l)p[l]=0;var f=8*this.o;for(l=p.length-8;l<p.length;++l)p[l]=f&255,f/=256;for(this.u(p),p=Array(16),l=f=0;4>l;++l)for(var g=0;32>g;g+=8)p[f++]=this.g[l]>>>g&255;return p};function h(p,l){var f=m;return Object.prototype.hasOwnProperty.call(f,p)?f[p]:f[p]=l(p)}function u(p,l){this.h=l;for(var f=[],g=!0,y=p.length-1;0<=y;y--){var v=p[y]|0;g&&v==l||(f[y]=v,g=!1)}this.g=f}var m={};function b(p){return-128<=p&&128>p?h(p,function(l){return new u([l|0],0>l?-1:0)}):new u([p|0],0>p?-1:0)}function I(p){if(isNaN(p)||!isFinite(p))return O;if(0>p)return V(I(-p));for(var l=[],f=1,g=0;p>=f;g++)l[g]=p/f|0,f*=4294967296;return new u(l,0)}function P(p,l){if(p.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(p.charAt(0)=="-")return V(P(p.substring(1),l));if(0<=p.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=I(Math.pow(l,8)),g=O,y=0;y<p.length;y+=8){var v=Math.min(8,p.length-y),d=parseInt(p.substring(y,y+v),l);8>v?(v=I(Math.pow(l,v)),g=g.j(v).add(I(d))):(g=g.j(f),g=g.add(I(d)))}return g}var O=b(0),N=b(1),T=b(16777216);n=u.prototype,n.m=function(){if(k(this))return-V(this).m();for(var p=0,l=1,f=0;f<this.g.length;f++){var g=this.i(f);p+=(0<=g?g:4294967296+g)*l,l*=4294967296}return p},n.toString=function(p){if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(A(this))return"0";if(k(this))return"-"+V(this).toString(p);for(var l=I(Math.pow(p,6)),f=this,g="";;){var y=W(f,l).g;f=re(f,y.j(l));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(p);if(f=y,A(f))return v+g;for(;6>v.length;)v="0"+v;g=v+g}},n.i=function(p){return 0>p?0:p<this.g.length?this.g[p]:this.h};function A(p){if(p.h!=0)return!1;for(var l=0;l<p.g.length;l++)if(p.g[l]!=0)return!1;return!0}function k(p){return p.h==-1}n.l=function(p){return p=re(this,p),k(p)?-1:A(p)?0:1};function V(p){for(var l=p.g.length,f=[],g=0;g<l;g++)f[g]=~p.g[g];return new u(f,~p.h).add(N)}n.abs=function(){return k(this)?V(this):this},n.add=function(p){for(var l=Math.max(this.g.length,p.g.length),f=[],g=0,y=0;y<=l;y++){var v=g+(this.i(y)&65535)+(p.i(y)&65535),d=(v>>>16)+(this.i(y)>>>16)+(p.i(y)>>>16);g=d>>>16,v&=65535,d&=65535,f[y]=d<<16|v}return new u(f,f[f.length-1]&-2147483648?-1:0)};function re(p,l){return p.add(V(l))}n.j=function(p){if(A(this)||A(p))return O;if(k(this))return k(p)?V(this).j(V(p)):V(V(this).j(p));if(k(p))return V(this.j(V(p)));if(0>this.l(T)&&0>p.l(T))return I(this.m()*p.m());for(var l=this.g.length+p.g.length,f=[],g=0;g<2*l;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var y=0;y<p.g.length;y++){var v=this.i(g)>>>16,d=this.i(g)&65535,ye=p.i(y)>>>16,nt=p.i(y)&65535;f[2*g+2*y]+=d*nt,te(f,2*g+2*y),f[2*g+2*y+1]+=v*nt,te(f,2*g+2*y+1),f[2*g+2*y+1]+=d*ye,te(f,2*g+2*y+1),f[2*g+2*y+2]+=v*ye,te(f,2*g+2*y+2)}for(g=0;g<l;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=l;g<2*l;g++)f[g]=0;return new u(f,0)};function te(p,l){for(;(p[l]&65535)!=p[l];)p[l+1]+=p[l]>>>16,p[l]&=65535,l++}function ne(p,l){this.g=p,this.h=l}function W(p,l){if(A(l))throw Error("division by zero");if(A(p))return new ne(O,O);if(k(p))return l=W(V(p),l),new ne(V(l.g),V(l.h));if(k(l))return l=W(p,V(l)),new ne(V(l.g),l.h);if(30<p.g.length){if(k(p)||k(l))throw Error("slowDivide_ only works with positive integers.");for(var f=N,g=l;0>=g.l(p);)f=H(f),g=H(g);var y=B(f,1),v=B(g,1);for(g=B(g,2),f=B(f,2);!A(g);){var d=v.add(g);0>=d.l(p)&&(y=y.add(f),v=d),g=B(g,1),f=B(f,1)}return l=re(p,y.j(l)),new ne(y,l)}for(y=O;0<=p.l(l);){for(f=Math.max(1,Math.floor(p.m()/l.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),v=I(f),d=v.j(l);k(d)||0<d.l(p);)f-=g,v=I(f),d=v.j(l);A(v)&&(v=N),y=y.add(v),p=re(p,d)}return new ne(y,p)}n.A=function(p){return W(this,p).h},n.and=function(p){for(var l=Math.max(this.g.length,p.g.length),f=[],g=0;g<l;g++)f[g]=this.i(g)&p.i(g);return new u(f,this.h&p.h)},n.or=function(p){for(var l=Math.max(this.g.length,p.g.length),f=[],g=0;g<l;g++)f[g]=this.i(g)|p.i(g);return new u(f,this.h|p.h)},n.xor=function(p){for(var l=Math.max(this.g.length,p.g.length),f=[],g=0;g<l;g++)f[g]=this.i(g)^p.i(g);return new u(f,this.h^p.h)};function H(p){for(var l=p.g.length+1,f=[],g=0;g<l;g++)f[g]=p.i(g)<<1|p.i(g-1)>>>31;return new u(f,p.h)}function B(p,l){var f=l>>5;l%=32;for(var g=p.g.length-f,y=[],v=0;v<g;v++)y[v]=0<l?p.i(v+f)>>>l|p.i(v+f+1)<<32-l:p.i(v+f);return new u(y,p.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=I,u.fromString=P,gi=u}).apply(typeof qr<"u"?qr:typeof self<"u"?self:typeof window<"u"?window:{});var qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){return t==Array.prototype||t==Object.prototype||(t[r]=o.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof qt=="object"&&qt];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=i(this);function a(t,r){if(r)e:{var o=s;t=t.split(".");for(var c=0;c<t.length-1;c++){var w=t[c];if(!(w in o))break e;o=o[w]}t=t[t.length-1],c=o[t],r=r(c),r!=c&&r!=null&&e(o,t,{configurable:!0,writable:!0,value:r})}}function h(t,r){t instanceof String&&(t+="");var o=0,c=!1,w={next:function(){if(!c&&o<t.length){var _=o++;return{value:r(_,t[_]),done:!1}}return c=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}a("Array.prototype.values",function(t){return t||function(){return h(this,function(r,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},m=this||self;function b(t){var r=typeof t;return r=r!="object"?r:t?Array.isArray(t)?"array":r:"null",r=="array"||r=="object"&&typeof t.length=="number"}function I(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function P(t,r,o){return t.call.apply(t.bind,arguments)}function O(t,r,o){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,c),t.apply(r,w)}}return function(){return t.apply(r,arguments)}}function N(t,r,o){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?P:O,N.apply(null,arguments)}function T(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var c=o.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function A(t,r){function o(){}o.prototype=r.prototype,t.aa=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.Qb=function(c,w,_){for(var S=Array(arguments.length-2),F=2;F<arguments.length;F++)S[F-2]=arguments[F];return r.prototype[w].apply(c,S)}}function k(t){const r=t.length;if(0<r){const o=Array(r);for(let c=0;c<r;c++)o[c]=t[c];return o}return[]}function V(t,r){for(let o=1;o<arguments.length;o++){const c=arguments[o];if(b(c)){const w=t.length||0,_=c.length||0;t.length=w+_;for(let S=0;S<_;S++)t[w+S]=c[S]}else t.push(c)}}class re{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function te(t){return/^[\s\xa0]*$/.test(t)}function ne(){var t=m.navigator;return t&&(t=t.userAgent)?t:""}function W(t){return W[" "](t),t}W[" "]=function(){};var H=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function B(t,r,o){for(const c in t)r.call(o,t[c],c,t)}function p(t,r){for(const o in t)r.call(void 0,t[o],o,t)}function l(t){const r={};for(const o in t)r[o]=t[o];return r}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,r){let o,c;for(let w=1;w<arguments.length;w++){c=arguments[w];for(o in c)t[o]=c[o];for(let _=0;_<f.length;_++)o=f[_],Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o])}}function y(t){var r=1;t=t.split(":");const o=[];for(;0<r&&t.length;)o.push(t.shift()),r--;return t.length&&o.push(t.join(":")),o}function v(t){m.setTimeout(()=>{throw t},0)}function d(){var t=fn;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class ye{constructor(){this.h=this.g=null}add(r,o){const c=nt.get();c.set(r,o),this.h?this.h.next=c:this.g=c,this.h=c}}var nt=new re(()=>new Ao,t=>t.reset());class Ao{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let it,rt=!1,fn=new ye,Ni=()=>{const t=m.Promise.resolve(void 0);it=()=>{t.then(No)}};var No=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(o){v(o)}var r=nt;r.j(t),100>r.h&&(r.h++,t.next=r.g,r.g=t)}rt=!1};function Te(){this.s=this.s,this.C=this.C}Te.prototype.s=!1,Te.prototype.ma=function(){this.s||(this.s=!0,this.N())},Te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var ko=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};m.addEventListener("test",o,r),m.removeEventListener("test",o,r)}catch{}return t}();function st(t,r){if(K.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var o=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(H){e:{try{W(r.nodeName);var w=!0;break e}catch{}w=!1}w||(r=null)}}else o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement);this.relatedTarget=r,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Co[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.aa.h.call(this)}}A(st,K);var Co={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),Do=0;function Po(t,r,o,c,w){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!c,this.ha=w,this.key=++Do,this.da=this.fa=!1}function Dt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Pt(t){this.src=t,this.g={},this.h=0}Pt.prototype.add=function(t,r,o,c,w){var _=t.toString();t=this.g[_],t||(t=this.g[_]=[],this.h++);var S=gn(t,r,c,w);return-1<S?(r=t[S],o||(r.fa=!1)):(r=new Po(r,this.src,_,!!c,w),r.fa=o,t.push(r)),r};function pn(t,r){var o=r.type;if(o in t.g){var c=t.g[o],w=Array.prototype.indexOf.call(c,r,void 0),_;(_=0<=w)&&Array.prototype.splice.call(c,w,1),_&&(Dt(r),t.g[o].length==0&&(delete t.g[o],t.h--))}}function gn(t,r,o,c){for(var w=0;w<t.length;++w){var _=t[w];if(!_.da&&_.listener==r&&_.capture==!!o&&_.ha==c)return w}return-1}var mn="closure_lm_"+(1e6*Math.random()|0),yn={};function ki(t,r,o,c,w){if(Array.isArray(r)){for(var _=0;_<r.length;_++)ki(t,r[_],o,c,w);return null}return o=Pi(o),t&&t[Ct]?t.K(r,o,I(c)?!!c.capture:!1,w):Ro(t,r,o,!1,c,w)}function Ro(t,r,o,c,w,_){if(!r)throw Error("Invalid event type");var S=I(w)?!!w.capture:!!w,F=vn(t);if(F||(t[mn]=F=new Pt(t)),o=F.add(r,o,c,S,_),o.proxy)return o;if(c=Oo(),o.proxy=c,c.src=t,c.listener=o,t.addEventListener)ko||(w=S),w===void 0&&(w=!1),t.addEventListener(r.toString(),c,w);else if(t.attachEvent)t.attachEvent(Di(r.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Oo(){function t(o){return r.call(t.src,t.listener,o)}const r=xo;return t}function Ci(t,r,o,c,w){if(Array.isArray(r))for(var _=0;_<r.length;_++)Ci(t,r[_],o,c,w);else c=I(c)?!!c.capture:!!c,o=Pi(o),t&&t[Ct]?(t=t.i,r=String(r).toString(),r in t.g&&(_=t.g[r],o=gn(_,o,c,w),-1<o&&(Dt(_[o]),Array.prototype.splice.call(_,o,1),_.length==0&&(delete t.g[r],t.h--)))):t&&(t=vn(t))&&(r=t.g[r.toString()],t=-1,r&&(t=gn(r,o,c,w)),(o=-1<t?r[t]:null)&&wn(o))}function wn(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[Ct])pn(r.i,t);else{var o=t.type,c=t.proxy;r.removeEventListener?r.removeEventListener(o,c,t.capture):r.detachEvent?r.detachEvent(Di(o),c):r.addListener&&r.removeListener&&r.removeListener(c),(o=vn(r))?(pn(o,t),o.h==0&&(o.src=null,r[mn]=null)):Dt(t)}}}function Di(t){return t in yn?yn[t]:yn[t]="on"+t}function xo(t,r){if(t.da)t=!0;else{r=new st(r,this);var o=t.listener,c=t.ha||t.src;t.fa&&wn(t),t=o.call(c,r)}return t}function vn(t){return t=t[mn],t instanceof Pt?t:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pi(t){return typeof t=="function"?t:(t[_n]||(t[_n]=function(r){return t.handleEvent(r)}),t[_n])}function J(){Te.call(this),this.i=new Pt(this),this.M=this,this.F=null}A(J,Te),J.prototype[Ct]=!0,J.prototype.removeEventListener=function(t,r,o,c){Ci(this,t,r,o,c)};function Z(t,r){var o,c=t.F;if(c)for(o=[];c;c=c.F)o.push(c);if(t=t.M,c=r.type||r,typeof r=="string")r=new K(r,t);else if(r instanceof K)r.target=r.target||t;else{var w=r;r=new K(c,t),g(r,w)}if(w=!0,o)for(var _=o.length-1;0<=_;_--){var S=r.g=o[_];w=Rt(S,c,!0,r)&&w}if(S=r.g=t,w=Rt(S,c,!0,r)&&w,w=Rt(S,c,!1,r)&&w,o)for(_=0;_<o.length;_++)S=r.g=o[_],w=Rt(S,c,!1,r)&&w}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var t=this.i,r;for(r in t.g){for(var o=t.g[r],c=0;c<o.length;c++)Dt(o[c]);delete t.g[r],t.h--}}this.F=null},J.prototype.K=function(t,r,o,c){return this.i.add(String(t),r,!1,o,c)},J.prototype.L=function(t,r,o,c){return this.i.add(String(t),r,!0,o,c)};function Rt(t,r,o,c){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();for(var w=!0,_=0;_<r.length;++_){var S=r[_];if(S&&!S.da&&S.capture==o){var F=S.listener,q=S.ha||S.src;S.fa&&pn(t.i,S),w=F.call(q,c)!==!1&&w}}return w&&!c.defaultPrevented}function Ri(t,r,o){if(typeof t=="function")o&&(t=N(t,o));else if(t&&typeof t.handleEvent=="function")t=N(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:m.setTimeout(t,r||0)}function Oi(t){t.g=Ri(()=>{t.g=null,t.i&&(t.i=!1,Oi(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class Lo extends Te{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:Oi(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){Te.call(this),this.h=t,this.g={}}A(ot,Te);var xi=[];function Li(t){B(t.g,function(r,o){this.g.hasOwnProperty(o)&&wn(r)},t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),Li(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bn=m.JSON.stringify,Mo=m.JSON.parse,Uo=class{stringify(t){return m.JSON.stringify(t,void 0)}parse(t){return m.JSON.parse(t,void 0)}};function In(){}In.prototype.h=null;function Mi(t){return t.h||(t.h=t.i())}function Fo(){}var at={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sn(){K.call(this,"d")}A(Sn,K);function En(){K.call(this,"c")}A(En,K);var Ke={},Ui=null;function Tn(){return Ui=Ui||new J}Ke.La="serverreachability";function Fi(t){K.call(this,Ke.La,t)}A(Fi,K);function ct(t){const r=Tn();Z(r,new Fi(r))}Ke.STAT_EVENT="statevent";function Vi(t,r){K.call(this,Ke.STAT_EVENT,t),this.stat=r}A(Vi,K);function ee(t){const r=Tn();Z(r,new Vi(r,t))}Ke.Ma="timingevent";function ji(t,r){K.call(this,Ke.Ma,t),this.size=r}A(ji,K);function ht(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},r)}function lt(){this.g=!0}lt.prototype.xa=function(){this.g=!1};function Vo(t,r,o,c,w,_){t.info(function(){if(t.g)if(_)for(var S="",F=_.split("&"),q=0;q<F.length;q++){var R=F[q].split("=");if(1<R.length){var X=R[0];R=R[1];var Y=X.split("_");S=2<=Y.length&&Y[1]=="type"?S+(X+"="+R+"&"):S+(X+"=redacted&")}}else S=null;else S=_;return"XMLHTTP REQ ("+c+") [attempt "+w+"]: "+r+`
`+o+`
`+S})}function jo(t,r,o,c,w,_,S){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+w+"]: "+r+`
`+o+`
`+_+" "+S})}function Je(t,r,o,c){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+$o(t,o)+(c?" "+c:"")})}function Bo(t,r){t.info(function(){return"TIMEOUT: "+r})}lt.prototype.info=function(){};function $o(t,r){if(!t.g)return r;if(!r)return null;try{var o=JSON.parse(r);if(o){for(t=0;t<o.length;t++)if(Array.isArray(o[t])){var c=o[t];if(!(2>c.length)){var w=c[1];if(Array.isArray(w)&&!(1>w.length)){var _=w[0];if(_!="noop"&&_!="stop"&&_!="close")for(var S=1;S<w.length;S++)w[S]=""}}}}return bn(o)}catch{return r}}var An={NO_ERROR:0,TIMEOUT:8},Ho={},Nn;function Ot(){}A(Ot,In),Ot.prototype.g=function(){return new XMLHttpRequest},Ot.prototype.i=function(){return{}},Nn=new Ot;function Ae(t,r,o,c){this.j=t,this.i=r,this.l=o,this.R=c||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bi}function Bi(){this.i=null,this.g="",this.h=!1}var $i={},kn={};function Cn(t,r,o){t.L=1,t.v=Ut(we(r)),t.m=o,t.P=!0,Hi(t,null)}function Hi(t,r){t.F=Date.now(),xt(t),t.A=we(t.v);var o=t.A,c=t.R;Array.isArray(c)||(c=[String(c)]),ir(o.i,"t",c),t.C=0,o=t.j.J,t.h=new Bi,t.g=br(t.j,o?r:null,!t.m),0<t.O&&(t.M=new Lo(N(t.Y,t,t.g),t.O)),r=t.U,o=t.g,c=t.ca;var w="readystatechange";Array.isArray(w)||(w&&(xi[0]=w.toString()),w=xi);for(var _=0;_<w.length;_++){var S=ki(o,w[_],c||r.handleEvent,!1,r.h||r);if(!S)break;r.g[S.key]=S}r=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,r)):(t.u="GET",t.g.ea(t.A,t.u,null,r)),ct(),Vo(t.i,t.u,t.A,t.l,t.R,t.m)}Ae.prototype.ca=function(t){t=t.target;const r=this.M;r&&ve(t)==3?r.j():this.Y(t)},Ae.prototype.Y=function(t){try{if(t==this.g)e:{const Y=ve(this.g);var r=this.g.Ba();const Qe=this.g.Z();if(!(3>Y)&&(Y!=3||this.g&&(this.h.h||this.g.oa()||lr(this.g)))){this.J||Y!=4||r==7||(r==8||0>=Qe?ct(3):ct(2)),Dn(this);var o=this.g.Z();this.X=o;t:if(zi(this)){var c=lr(this.g);t="";var w=c.length,_=ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),ut(this);var S="";break t}this.h.i=new m.TextDecoder}for(r=0;r<w;r++)this.h.h=!0,t+=this.h.i.decode(c[r],{stream:!(_&&r==w-1)});c.length=0,this.h.g+=t,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=o==200,jo(this.i,this.u,this.A,this.l,this.R,Y,o),this.o){if(this.T&&!this.K){t:{if(this.g){var F,q=this.g;if((F=q.g?q.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(F)){var R=F;break t}}R=null}if(o=R)Je(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pn(this,o);else{this.o=!1,this.s=3,ee(12),Re(this),ut(this);break e}}if(this.P){o=!0;let ae;for(;!this.J&&this.C<S.length;)if(ae=zo(this,S),ae==kn){Y==4&&(this.s=4,ee(14),o=!1),Je(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==$i){this.s=4,ee(15),Je(this.i,this.l,S,"[Invalid Chunk]"),o=!1;break}else Je(this.i,this.l,ae,null),Pn(this,ae);if(zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||S.length!=0||this.h.h||(this.s=1,ee(16),o=!1),this.o=this.o&&o,!o)Je(this.i,this.l,S,"[Invalid Chunked Response]"),Re(this),ut(this);else if(0<S.length&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.ba&&!X.M&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Un(X),X.M=!0,ee(11))}}else Je(this.i,this.l,S,null),Pn(this,S);Y==4&&Re(this),this.o&&!this.J&&(Y==4?yr(this.j,this):(this.o=!1,xt(this)))}else aa(this.g),o==400&&0<S.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Re(this),ut(this)}}}catch{}finally{}};function zi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function zo(t,r){var o=t.C,c=r.indexOf(`
`,o);return c==-1?kn:(o=Number(r.substring(o,c)),isNaN(o)?$i:(c+=1,c+o>r.length?kn:(r=r.slice(c,c+o),t.C=c+o,r)))}Ae.prototype.cancel=function(){this.J=!0,Re(this)};function xt(t){t.S=Date.now()+t.I,Wi(t,t.I)}function Wi(t,r){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ht(N(t.ba,t),r)}function Dn(t){t.B&&(m.clearTimeout(t.B),t.B=null)}Ae.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Bo(this.i,this.A),this.L!=2&&(ct(),ee(17)),Re(this),this.s=2,ut(this)):Wi(this,this.S-t)};function ut(t){t.j.G==0||t.J||yr(t.j,t)}function Re(t){Dn(t);var r=t.M;r&&typeof r.ma=="function"&&r.ma(),t.M=null,Li(t.U),t.g&&(r=t.g,t.g=null,r.abort(),r.ma())}function Pn(t,r){try{var o=t.j;if(o.G!=0&&(o.g==t||Rn(o.h,t))){if(!t.K&&Rn(o.h,t)&&o.G==3){try{var c=o.Da.g.parse(r)}catch{c=null}if(Array.isArray(c)&&c.length==3){var w=c;if(w[0]==0){e:if(!o.u){if(o.g)if(o.g.F+3e3<t.F)Ht(o),Bt(o);else break e;Mn(o),ee(18)}}else o.za=w[1],0<o.za-o.T&&37500>w[2]&&o.F&&o.v==0&&!o.C&&(o.C=ht(N(o.Za,o),6e3));if(1>=Ki(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else xe(o,11)}else if((t.K||o.g==t)&&Ht(o),!te(r))for(w=o.Da.g.parse(r),r=0;r<w.length;r++){let R=w[r];if(o.T=R[0],R=R[1],o.G==2)if(R[0]=="c"){o.K=R[1],o.ia=R[2];const X=R[3];X!=null&&(o.la=X,o.j.info("VER="+o.la));const Y=R[4];Y!=null&&(o.Aa=Y,o.j.info("SVER="+o.Aa));const Qe=R[5];Qe!=null&&typeof Qe=="number"&&0<Qe&&(c=1.5*Qe,o.L=c,o.j.info("backChannelRequestTimeoutMs_="+c)),c=o;const ae=t.g;if(ae){const zt=ae.g?ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zt){var _=c.h;_.g||zt.indexOf("spdy")==-1&&zt.indexOf("quic")==-1&&zt.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(On(_,_.h),_.h=null))}if(c.D){const Fn=ae.g?ae.g.getResponseHeader("X-HTTP-Session-Id"):null;Fn&&(c.ya=Fn,j(c.I,c.D,Fn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-t.F,o.j.info("Handshake RTT: "+o.R+"ms")),c=o;var S=t;if(c.qa=_r(c,c.J?c.ia:null,c.W),S.K){Ji(c.h,S);var F=S,q=c.L;q&&(F.I=q),F.B&&(Dn(F),xt(F)),c.g=S}else gr(c);0<o.i.length&&$t(o)}else R[0]!="stop"&&R[0]!="close"||xe(o,7);else o.G==3&&(R[0]=="stop"||R[0]=="close"?R[0]=="stop"?xe(o,7):Ln(o):R[0]!="noop"&&o.l&&o.l.ta(R),o.v=0)}}ct(4)}catch{}}var Wo=class{constructor(t,r){this.g=t,this.map=r}};function qi(t){this.l=t||10,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ki(t){return t.h?1:t.g?t.g.size:0}function Rn(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function On(t,r){t.g?t.g.add(r):t.h=r}function Ji(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}qi.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const o of t.g.values())r=r.concat(o.D);return r}return k(t.i)}function qo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(b(t)){for(var r=[],o=t.length,c=0;c<o;c++)r.push(t[c]);return r}r=[],o=0;for(c in t)r[o++]=t[c];return r}function Go(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(b(t)||typeof t=="string"){var r=[];t=t.length;for(var o=0;o<t;o++)r.push(o);return r}r=[],o=0;for(const c in t)r[o++]=c;return r}}}function Yi(t,r){if(t.forEach&&typeof t.forEach=="function")t.forEach(r,void 0);else if(b(t)||typeof t=="string")Array.prototype.forEach.call(t,r,void 0);else for(var o=Go(t),c=qo(t),w=c.length,_=0;_<w;_++)r.call(void 0,c[_],o&&o[_],t)}var Qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ko(t,r){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var c=t[o].indexOf("="),w=null;if(0<=c){var _=t[o].substring(0,c);w=t[o].substring(c+1)}else _=t[o];r(_,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Lt(this,t.j),this.o=t.o,this.g=t.g,Mt(this,t.s),this.l=t.l;var r=t.i,o=new pt;o.i=r.i,r.g&&(o.g=new Map(r.g),o.h=r.h),Zi(this,o),this.m=t.m}else t&&(r=String(t).match(Qi))?(this.h=!1,Lt(this,r[1]||"",!0),this.o=dt(r[2]||""),this.g=dt(r[3]||"",!0),Mt(this,r[4]),this.l=dt(r[5]||"",!0),Zi(this,r[6]||"",!0),this.m=dt(r[7]||"")):(this.h=!1,this.i=new pt(null,this.h))}Oe.prototype.toString=function(){var t=[],r=this.j;r&&t.push(ft(r,er,!0),":");var o=this.g;return(o||r=="file")&&(t.push("//"),(r=this.o)&&t.push(ft(r,er,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&t.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(ft(o,o.charAt(0)=="/"?Yo:Xo,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",ft(o,Zo)),t.join("")};function we(t){return new Oe(t)}function Lt(t,r,o){t.j=o?dt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Mt(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.s=r}else t.s=null}function Zi(t,r,o){r instanceof pt?(t.i=r,ea(t.i,t.h)):(o||(r=ft(r,Qo)),t.i=new pt(r,t.h))}function j(t,r,o){t.i.set(r,o)}function Ut(t){return j(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function dt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ft(t,r,o){return typeof t=="string"?(t=encodeURI(t).replace(r,Jo),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Jo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var er=/[#\/\?@]/g,Xo=/[#\?:]/g,Yo=/[#\?]/g,Qo=/[#\?@]/g,Zo=/#/g;function pt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function Ne(t){t.g||(t.g=new Map,t.h=0,t.i&&Ko(t.i,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}n=pt.prototype,n.add=function(t,r){Ne(this),this.i=null,t=Xe(this,t);var o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(r),this.h+=1,this};function tr(t,r){Ne(t),r=Xe(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function nr(t,r){return Ne(t),r=Xe(t,r),t.g.has(r)}n.forEach=function(t,r){Ne(this),this.g.forEach(function(o,c){o.forEach(function(w){t.call(r,w,c,this)},this)},this)},n.na=function(){Ne(this);const t=Array.from(this.g.values()),r=Array.from(this.g.keys()),o=[];for(let c=0;c<r.length;c++){const w=t[c];for(let _=0;_<w.length;_++)o.push(r[c])}return o},n.V=function(t){Ne(this);let r=[];if(typeof t=="string")nr(this,t)&&(r=r.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let o=0;o<t.length;o++)r=r.concat(t[o])}return r},n.set=function(t,r){return Ne(this),this.i=null,t=Xe(this,t),nr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},n.get=function(t,r){return t?(t=this.V(t),0<t.length?String(t[0]):r):r};function ir(t,r,o){tr(t,r),0<o.length&&(t.i=null,t.g.set(Xe(t,r),k(o)),t.h+=o.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(var o=0;o<r.length;o++){var c=r[o];const _=encodeURIComponent(String(c)),S=this.V(c);for(c=0;c<S.length;c++){var w=_;S[c]!==""&&(w+="="+encodeURIComponent(String(S[c]))),t.push(w)}}return this.i=t.join("&")};function Xe(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function ea(t,r){r&&!t.j&&(Ne(t),t.i=null,t.g.forEach(function(o,c){var w=c.toLowerCase();c!=w&&(tr(this,c),ir(this,w,o))},t)),t.j=r}function ta(t,r){const o=new lt;if(m.Image){const c=new Image;c.onload=T(ke,o,"TestLoadImage: loaded",!0,r,c),c.onerror=T(ke,o,"TestLoadImage: error",!1,r,c),c.onabort=T(ke,o,"TestLoadImage: abort",!1,r,c),c.ontimeout=T(ke,o,"TestLoadImage: timeout",!1,r,c),m.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else r(!1)}function na(t,r){const o=new lt,c=new AbortController,w=setTimeout(()=>{c.abort(),ke(o,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:c.signal}).then(_=>{clearTimeout(w),_.ok?ke(o,"TestPingServer: ok",!0,r):ke(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(w),ke(o,"TestPingServer: error",!1,r)})}function ke(t,r,o,c,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),c(o)}catch{}}function ia(){this.g=new Uo}function ra(t,r,o){const c=o||"";try{Yi(t,function(w,_){let S=w;I(w)&&(S=bn(w)),r.push(c+_+"="+encodeURIComponent(S))})}catch(w){throw r.push(c+"type="+encodeURIComponent("_badmap")),w}}function Ft(t){this.l=t.Ub||null,this.j=t.eb||!1}A(Ft,In),Ft.prototype.g=function(){return new Vt(this.l,this.j)},Ft.prototype.i=function(t){return function(){return t}}({});function Vt(t,r){J.call(this),this.D=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Vt,J),n=Vt.prototype,n.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=r,this.readyState=1,mt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(r.body=t),(this.D||m).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mt(this)),this.g&&(this.readyState=3,mt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rr(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function rr(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?gt(this):mt(this),this.readyState==3&&rr(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,gt(this))},n.Qa=function(t){this.g&&(this.response=t,gt(this))},n.ga=function(){this.g&&gt(this)};function gt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,mt(t)}n.setRequestHeader=function(t,r){this.u.append(t,r)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=r.next();return t.join(`\r
`)};function mt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function sr(t){let r="";return B(t,function(o,c){r+=c,r+=":",r+=o,r+=`\r
`}),r}function xn(t,r,o){e:{for(c in o){var c=!1;break e}c=!0}c||(o=sr(o),typeof t=="string"?o!=null&&encodeURIComponent(String(o)):j(t,r,o))}function $(t){J.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A($,J);var sa=/^https?$/i,oa=["POST","PUT"];n=$.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,r,o,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Mi(this.o):Mi(Nn),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(_){or(this,_);return}if(t=o||"",o=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var w in c)o.set(w,c[w]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const _ of c.keys())o.set(_,c.get(_));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(o.keys()).find(_=>_.toLowerCase()=="content-type"),w=m.FormData&&t instanceof m.FormData,!(0<=Array.prototype.indexOf.call(oa,r,void 0))||c||w||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,S]of o)this.g.setRequestHeader(_,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hr(this),this.u=!0,this.g.send(t),this.u=!1}catch(_){or(this,_)}};function or(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.m=5,ar(t),jt(t)}function ar(t){t.A||(t.A=!0,Z(t,"complete"),Z(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Z(this,"complete"),Z(this,"abort"),jt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),$.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?cr(this):this.bb())},n.bb=function(){cr(this)};function cr(t){if(t.h&&typeof u<"u"&&(!t.v[1]||ve(t)!=4||t.Z()!=2)){if(t.u&&ve(t)==4)Ri(t.Ea,0,t);else if(Z(t,"readystatechange"),ve(t)==4){t.h=!1;try{const S=t.Z();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var o;if(!(o=r)){var c;if(c=S===0){var w=String(t.D).match(Qi)[1]||null;!w&&m.self&&m.self.location&&(w=m.self.location.protocol.slice(0,-1)),c=!sa.test(w?w.toLowerCase():"")}o=c}if(o)Z(t,"complete"),Z(t,"success");else{t.m=6;try{var _=2<ve(t)?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.Z()+"]",ar(t)}}finally{jt(t)}}}}function jt(t,r){if(t.g){hr(t);const o=t.g,c=t.v[0]?()=>{}:null;t.g=null,t.v=null,r||Z(t,"ready");try{o.onreadystatechange=c}catch{}}}function hr(t){t.I&&(m.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function ve(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<ve(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),Mo(r)}};function lr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function aa(t){const r={};t=(t.g&&2<=ve(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(te(t[c]))continue;var o=y(t[c]);const w=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const _=r[w]||[];r[w]=_,_.push(o)}p(r,function(c){return c.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yt(t,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||r}function ur(t){this.Aa=0,this.i=[],this.j=new lt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yt("baseRetryDelayMs",5e3,t),this.cb=yt("retryDelaySeedMs",1e4,t),this.Wa=yt("forwardChannelMaxRetries",2,t),this.wa=yt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(t&&t.concurrentRequestLimit),this.Da=new ia,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ur.prototype,n.la=8,n.G=1,n.connect=function(t,r,o,c){ee(0),this.W=t,this.H=r||{},o&&c!==void 0&&(this.H.OSID=o,this.H.OAID=c),this.F=this.X,this.I=_r(this,null,this.W),$t(this)};function Ln(t){if(dr(t),t.G==3){var r=t.U++,o=we(t.I);if(j(o,"SID",t.K),j(o,"RID",r),j(o,"TYPE","terminate"),wt(t,o),r=new Ae(t,t.j,r),r.L=2,r.v=Ut(we(o)),o=!1,m.navigator&&m.navigator.sendBeacon)try{o=m.navigator.sendBeacon(r.v.toString(),"")}catch{}!o&&m.Image&&(new Image().src=r.v,o=!0),o||(r.g=br(r.j,null),r.g.ea(r.v)),r.F=Date.now(),xt(r)}vr(t)}function Bt(t){t.g&&(Un(t),t.g.cancel(),t.g=null)}function dr(t){Bt(t),t.u&&(m.clearTimeout(t.u),t.u=null),Ht(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&m.clearTimeout(t.s),t.s=null)}function $t(t){if(!Gi(t.h)&&!t.s){t.s=!0;var r=t.Ga;it||Ni(),rt||(it(),rt=!0),fn.add(r,t),t.B=0}}function ca(t,r){return Ki(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=r.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=ht(N(t.Ga,t,r),wr(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const w=new Ae(this,this.j,t);let _=this.o;if(this.S&&(_?(_=l(_),g(_,this.S)):_=this.S),this.m!==null||this.O||(w.H=_,_=null),this.P)e:{for(var r=0,o=0;o<this.i.length;o++){t:{var c=this.i[o];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(r+=c,4096<r){r=o;break e}if(r===4096||o===this.i.length-1){r=o+1;break e}}r=1e3}else r=1e3;r=pr(this,w,r),o=we(this.I),j(o,"RID",t),j(o,"CVER",22),this.D&&j(o,"X-HTTP-Session-Id",this.D),wt(this,o),_&&(this.O?r="headers="+encodeURIComponent(String(sr(_)))+"&"+r:this.m&&xn(o,this.m,_)),On(this.h,w),this.Ua&&j(o,"TYPE","init"),this.P?(j(o,"$req",r),j(o,"SID","null"),w.T=!0,Cn(w,o,null)):Cn(w,o,r),this.G=2}}else this.G==3&&(t?fr(this,t):this.i.length==0||Gi(this.h)||fr(this))};function fr(t,r){var o;r?o=r.l:o=t.U++;const c=we(t.I);j(c,"SID",t.K),j(c,"RID",o),j(c,"AID",t.T),wt(t,c),t.m&&t.o&&xn(c,t.m,t.o),o=new Ae(t,t.j,o,t.B+1),t.m===null&&(o.H=t.o),r&&(t.i=r.D.concat(t.i)),r=pr(t,o,1e3),o.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),On(t.h,o),Cn(o,c,r)}function wt(t,r){t.H&&B(t.H,function(o,c){j(r,c,o)}),t.l&&Yi({},function(o,c){j(r,c,o)})}function pr(t,r,o){o=Math.min(t.i.length,o);var c=t.l?N(t.l.Na,t.l,t):null;e:{var w=t.i;let _=-1;for(;;){const S=["count="+o];_==-1?0<o?(_=w[0].g,S.push("ofs="+_)):_=0:S.push("ofs="+_);let F=!0;for(let q=0;q<o;q++){let R=w[q].g;const X=w[q].map;if(R-=_,0>R)_=Math.max(0,w[q].g-100),F=!1;else try{ra(X,S,"req"+R+"_")}catch{c&&c(X)}}if(F){c=S.join("&");break e}}}return t=t.i.splice(0,o),r.D=t,c}function gr(t){if(!t.g&&!t.u){t.Y=1;var r=t.Fa;it||Ni(),rt||(it(),rt=!0),fn.add(r,t),t.v=0}}function Mn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=ht(N(t.Fa,t),wr(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,mr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ht(N(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),Bt(this),mr(this))};function Un(t){t.A!=null&&(m.clearTimeout(t.A),t.A=null)}function mr(t){t.g=new Ae(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var r=we(t.qa);j(r,"RID","rpc"),j(r,"SID",t.K),j(r,"AID",t.T),j(r,"CI",t.F?"0":"1"),!t.F&&t.ja&&j(r,"TO",t.ja),j(r,"TYPE","xmlhttp"),wt(t,r),t.m&&t.o&&xn(r,t.m,t.o),t.L&&(t.g.I=t.L);var o=t.g;t=t.ia,o.L=1,o.v=Ut(we(r)),o.m=null,o.P=!0,Hi(o,t)}n.Za=function(){this.C!=null&&(this.C=null,Bt(this),Mn(this),ee(19))};function Ht(t){t.C!=null&&(m.clearTimeout(t.C),t.C=null)}function yr(t,r){var o=null;if(t.g==r){Ht(t),Un(t),t.g=null;var c=2}else if(Rn(t.h,r))o=r.D,Ji(t.h,r),c=1;else return;if(t.G!=0){if(r.o)if(c==1){o=r.m?r.m.length:0,r=Date.now()-r.F;var w=t.B;c=Tn(),Z(c,new ji(c,o)),$t(t)}else gr(t);else if(w=r.s,w==3||w==0&&0<r.X||!(c==1&&ca(t,r)||c==2&&Mn(t)))switch(o&&0<o.length&&(r=t.h,r.i=r.i.concat(o)),w){case 1:xe(t,5);break;case 4:xe(t,10);break;case 3:xe(t,6);break;default:xe(t,2)}}}function wr(t,r){let o=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(o*=2),o*r}function xe(t,r){if(t.j.info("Error code "+r),r==2){var o=N(t.fb,t),c=t.Xa;const w=!c;c=new Oe(c||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Lt(c,"https"),Ut(c),w?ta(c.toString(),o):na(c.toString(),o)}else ee(2);t.G=0,t.l&&t.l.sa(r),vr(t),dr(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function vr(t){if(t.G=0,t.ka=[],t.l){const r=Xi(t.h);(r.length!=0||t.i.length!=0)&&(V(t.ka,r),V(t.ka,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.ra()}}function _r(t,r,o){var c=o instanceof Oe?we(o):new Oe(o);if(c.g!="")r&&(c.g=r+"."+c.g),Mt(c,c.s);else{var w=m.location;c=w.protocol,r=r?r+"."+w.hostname:w.hostname,w=+w.port;var _=new Oe(null);c&&Lt(_,c),r&&(_.g=r),w&&Mt(_,w),o&&(_.l=o),c=_}return o=t.D,r=t.ya,o&&r&&j(c,o,r),j(c,"VER",t.la),wt(t,c),c}function br(t,r,o){if(r&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Ca&&!t.pa?new $(new Ft({eb:o})):new $(t.pa),r.Ha(t.J),r}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ir(){}n=Ir.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function se(t,r){J.call(this),this.g=new ur(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(t?t["X-WebChannel-Client-Profile"]=r.va:t={"X-WebChannel-Client-Profile":r.va}),this.g.S=t,(t=r&&r.Sb)&&!te(t)&&(this.g.m=t),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!te(r)&&(this.g.D=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new Ye(this)}A(se,J),se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){Ln(this.g)},se.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.u&&(o={},o.__data__=bn(t),t=o);r.i.push(new Wo(r.Ya++,t)),r.G==3&&$t(r)},se.prototype.N=function(){this.g.l=null,delete this.j,Ln(this.g),delete this.g,se.aa.N.call(this)};function Sr(t){Sn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const o in r){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}A(Sr,Sn);function Er(){En.call(this),this.status=1}A(Er,En);function Ye(t){this.g=t}A(Ye,Ir),Ye.prototype.ua=function(){Z(this.g,"a")},Ye.prototype.ta=function(t){Z(this.g,new Sr(t))},Ye.prototype.sa=function(t){Z(this.g,new Er)},Ye.prototype.ra=function(){Z(this.g,"b")},se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,An.NO_ERROR=0,An.TIMEOUT=8,An.HTTP_ERROR=6,Ho.COMPLETE="complete",Fo.EventType=at,at.OPEN="a",at.CLOSE="b",at.ERROR="c",at.MESSAGE="d",J.prototype.listen=J.prototype.K,$.prototype.listenOnce=$.prototype.L,$.prototype.getLastError=$.prototype.Ka,$.prototype.getLastErrorCode=$.prototype.Ba,$.prototype.getStatus=$.prototype.Z,$.prototype.getResponseJson=$.prototype.Oa,$.prototype.getResponseText=$.prototype.oa,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Ha}).apply(typeof qt<"u"?qt:typeof self<"u"?self:typeof window<"u"?window:{});const Gr="@firebase/firestore",Kr="4.9.0";/**
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
 */let ln="12.0.0";/**
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
 */const nn=new ui("@firebase/firestore");function he(n,...e){if(nn.logLevel<=U.DEBUG){const i=e.map(Js);nn.debug(`Firestore (${ln}): ${n}`,...i)}}function Ks(n,...e){if(nn.logLevel<=U.ERROR){const i=e.map(Js);nn.error(`Firestore (${ln}): ${n}`,...i)}}function Js(n){if(typeof n=="string")return n;try{/**
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
 */function rn(n,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,Xs(n,s,i)}function Xs(n,e,i){let s=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{s+=" CONTEXT: "+JSON.stringify(i)}catch{s+=" CONTEXT: "+i}throw Ks(s),new Error(s)}function bt(n,e,i,s){let a="Unexpected state";typeof i=="string"?a=i:s=i,n||Xs(e,a,s)}/**
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
 */const L={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class M extends Ee{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class It{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class Ah{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(ie.UNAUTHENTICATED))}shutdown(){}}class kh{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){bt(this.o===void 0,42304);let s=this.i;const a=b=>this.i!==s?(s=this.i,i(b)):Promise.resolve();let h=new It;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new It,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const b=h;e.enqueueRetryable(async()=>{await b.promise,await a(this.currentUser)})},m=b=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=b,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(b=>m(b)),setTimeout(()=>{if(!this.auth){const b=this.t.getImmediate({optional:!0});b?m(b):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new It)}},0),u()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(bt(typeof s.accessToken=="string",31837,{l:s}),new Ah(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return bt(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class Ch{constructor(e,i,s){this.P=e,this.T=i,this.I=s,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dh{constructor(e,i,s){this.P=e,this.T=i,this.I=s}getToken(){return Promise.resolve(new Ch(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ph{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){bt(this.o===void 0,3512);const s=h=>{h.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const u=h.token!==this.m;return this.m=h.token,he("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?i(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>s(h))};const a=h=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(h=>a(h)),setTimeout(()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?a(h):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(bt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Jr(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Rh(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let s=0;s<n;s++)i[s]=Math.floor(256*Math.random());return i}/**
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
 */class Oh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Rh(40);for(let h=0;h<a.length;++h)s.length<20&&a[h]<i&&(s+=e.charAt(a[h]%62))}return s}}function Pe(n,e){return n<e?-1:n>e?1:0}function xh(n,e){const i=Math.min(n.length,e.length);for(let s=0;s<i;s++){const a=n.charAt(s),h=e.charAt(s);if(a!==h)return Gn(a)===Gn(h)?Pe(a,h):Gn(a)?1:-1}return Pe(n.length,e.length)}const Lh=55296,Mh=57343;function Gn(n){const e=n.charCodeAt(0);return e>=Lh&&e<=Mh}/**
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
 */const Xr="__name__";class ue{constructor(e,i,s){i===void 0?i=0:i>e.length&&rn(637,{offset:i,range:e.length}),s===void 0?s=e.length-i:s>e.length-i&&rn(1746,{length:s,range:e.length-i}),this.segments=e,this.offset=i,this.len=s}get length(){return this.len}isEqual(e){return ue.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof ue?e.forEach(s=>{i.push(s)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,s=this.limit();i<s;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const s=Math.min(e.length,i.length);for(let a=0;a<s;a++){const h=ue.compareSegments(e.get(a),i.get(a));if(h!==0)return h}return Pe(e.length,i.length)}static compareSegments(e,i){const s=ue.isNumericId(e),a=ue.isNumericId(i);return s&&!a?-1:!s&&a?1:s&&a?ue.extractNumericId(e).compare(ue.extractNumericId(i)):xh(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class ce extends ue{construct(e,i,s){return new ce(e,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(a=>a.length>0))}return new ce(i)}static emptyPath(){return new ce([])}}const Uh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends ue{construct(e,i,s){return new Ue(e,i,s)}static isValidIdentifier(e){return Uh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xr}static keyField(){return new Ue([Xr])}static fromServerFormat(e){const i=[];let s="",a=0;const h=()=>{if(s.length===0)throw new M(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let u=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new M(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const b=e[a+1];if(b!=="\\"&&b!=="."&&b!=="`")throw new M(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=b,a+=2}else m==="`"?(u=!u,a++):m!=="."||u?(s+=m,a++):(h(),a++)}if(h(),u)throw new M(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(i)}static emptyPath(){return new Ue([])}}/**
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
 */class Ve{constructor(e){this.path=e}static fromPath(e){return new Ve(ce.fromString(e))}static fromName(e){return new Ve(ce.fromString(e).popFirst(5))}static empty(){return new Ve(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return ce.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ve(new ce(e.slice()))}}function Fh(n,e,i,s){if(e===!0&&s===!0)throw new M(L.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function Vh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}/**
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
 */function z(n,e){const i={typeString:n};return e&&(i.value=e),i}function kt(n,e){if(!Vh(n))throw new M(L.INVALID_ARGUMENT,"JSON must be an object");let i;for(const s in e)if(e[s]){const a=e[s].typeString,h="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){i=`JSON missing required field: '${s}'`;break}const u=n[s];if(a&&typeof u!==a){i=`JSON field '${s}' must be a ${a}.`;break}if(h!==void 0&&u!==h.value){i=`Expected '${s}' field to equal '${h.value}'`;break}}if(i)throw new M(L.INVALID_ARGUMENT,i);return!0}/**
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
 */const Yr=-62135596800,Qr=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),s=Math.floor((e-1e3*i)*Qr);return new de(i,s)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Yr)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qr}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kt(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:z("string",de._jsonSchemaVersion),seconds:z("number"),nanoseconds:z("number")};function jh(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Bh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(a){try{return atob(a)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new Bh("Invalid base64 string: "+h):h}}(e);return new He(i)}static fromUint8Array(e){const i=function(a){let h="";for(let u=0;u<a.length;++u)h+=String.fromCharCode(a[u]);return h}(e);return new He(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let a=0;a<i.length;a++)s[a]=i.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Zr="(default)";class sn{constructor(e,i){this.projectId=e,this.database=i||Zr}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class $h{constructor(e,i=null,s=[],a=[],h=null,u="F",m=null,b=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=a,this.limit=h,this.limitType=u,this.startAt=m,this.endAt=b,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Hh(n){return new $h(n)}/**
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
 */var es,D;(D=es||(es={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new gi([4294967295,4294967295],0);/**
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
 */const zh=41943040;/**
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
 */const Wh=1048576;function Kn(){return typeof document<"u"?document:null}/**
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
 */class qh{constructor(e,i,s=1e3,a=1.5,h=6e4){this.Mi=e,this.timerId=i,this.d_=s,this.A_=a,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,i-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class mi{constructor(e,i,s,a,h){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=s,this.op=a,this.removalCallback=h,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,s,a,h){const u=Date.now()+s,m=new mi(e,i,u,a,h);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ts,ns;(ns=ts||(ts={})).Ma="default",ns.Cache="cache";/**
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
 */function Gh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const is=new Map;/**
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
 */const Kh="firestore.googleapis.com",rs=!0;class ss{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kh,this.ssl=rs}else this.host=e.host,this.ssl=e.ssl??rs;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Wh)throw new M(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jh{constructor(e,i,s,a){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ss({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ss(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Nh;switch(s.type){case"firstParty":return new Dh(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new M(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=is.get(i);s&&(he("ComponentProvider","Removing Datastore"),is.delete(i),s.terminate())}(this),Promise.resolve()}}/**
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
 */class yi{constructor(e,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yi(this.firestore,e,this._query)}}class pe{constructor(e,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,s){if(kt(i,pe._jsonSchema))return new pe(e,s||null,new Ve(ce.fromString(i.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:z("string",pe._jsonSchemaVersion),referencePath:z("string")};class wi extends yi{constructor(e,i,s){super(e,i,Hh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new Ve(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}/**
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
 */const os="AsyncQueue";class as{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qh(this,"async_queue_retry"),this._c=()=>{const s=Kn();s&&he(os,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const i=Kn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Kn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const i=new It;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!jh(e))throw e;he(os,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const i=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Ks("INTERNAL UNHANDLED ERROR: ",cs(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=i,i}enqueueAfterDelay(e,i,s){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const a=mi.createAndSchedule(this,e,i,s,h=>this.hc(h));return this.tc.push(a),a}uc(){this.nc&&rn(47125,{Pc:cs(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function cs(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Xh extends Jh{constructor(e,i,s,a){super(e,i,s,a),this.type="firestore",this._queue=new as,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new as(e),this._firestoreClient=void 0,await e}}}/**
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
 */class be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new be(He.fromBase64String(e))}catch(i){throw new M(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new be(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kt(e,be._jsonSchema))return be.fromBase64String(e.bytes)}}be._jsonSchemaVersion="firestore/bytes/1.0",be._jsonSchema={type:z("string",be._jsonSchemaVersion),bytes:z("string")};/**
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
 */class Ys{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new M(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Be{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new M(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new M(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(e){if(kt(e,Be._jsonSchema))return new Be(e.latitude,e.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:z("string",Be._jsonSchemaVersion),latitude:z("number"),longitude:z("number")};/**
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
 */class $e{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let h=0;h<s.length;++h)if(s[h]!==a[h])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kt(e,$e._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new $e(e.vectorValues);throw new M(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$e._jsonSchemaVersion="firestore/vectorValue/1.0",$e._jsonSchema={type:z("string",$e._jsonSchemaVersion),vectorValues:z("object")};const Yh=new RegExp("[~\\*/\\[\\]]");function Qh(n,e,i){if(e.search(Yh)>=0)throw hs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Ys(...e.split("."))._internalPath}catch{throw hs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function hs(n,e,i,s,a){let h=`Function ${e}() called with invalid data`;h+=". ";let u="";return new M(L.INVALID_ARGUMENT,h+n+u)}/**
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
 */class Qs{constructor(e,i,s,a,h){this._firestore=e,this._userDataWriter=i,this._key=s,this._document=a,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(Zs("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Zh extends Qs{data(){return super.data()}}function Zs(n,e){return typeof e=="string"?Qh(n,e):e instanceof Ys?e._internalPath:e._delegate._internalPath}class Gt{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tt extends Qs{constructor(e,i,s,a,h,u){super(e,i,s,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Xt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const s=this._document.data.field(Zs("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=tt._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}tt._jsonSchemaVersion="firestore/documentSnapshot/1.0",tt._jsonSchema={type:z("string",tt._jsonSchemaVersion),bundleSource:z("string","DocumentSnapshot"),bundleName:z("string"),bundle:z("string")};class Xt extends tt{data(e={}){return super.data(e)}}class St{constructor(e,i,s,a){this._firestore=e,this._userDataWriter=i,this._snapshot=a,this.metadata=new Gt(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(s=>{e.call(i,new Xt(this._firestore,this._userDataWriter,s.key,s,new Gt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new M(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(a,h){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(m=>{const b=new Xt(a._firestore,a._userDataWriter,m.doc.key,m.doc,new Gt(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:b,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(m=>h||m.type!==3).map(m=>{const b=new Xt(a._firestore,a._userDataWriter,m.doc.key,m.doc,new Gt(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let I=-1,P=-1;return m.type!==0&&(I=u.indexOf(m.doc.key),u=u.delete(m.doc.key)),m.type!==1&&(u=u.add(m.doc),P=u.indexOf(m.doc.key)),{type:el(m.type),doc:b,oldIndex:I,newIndex:P}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=St._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Oh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],s=[],a=[];return this.docs.forEach(h=>{h._document!==null&&(i.push(h._document),s.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),a.push(h.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function el(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rn(61501,{type:n})}}St._jsonSchemaVersion="firestore/querySnapshot/1.0",St._jsonSchema={type:z("string",St._jsonSchemaVersion),bundleSource:z("string","QuerySnapshot"),bundleName:z("string"),bundle:z("string")};(function(e,i=!0){(function(a){ln=a})(cn),me(new le("firestore",(s,{instanceIdentifier:a,options:h})=>{const u=s.getProvider("app").getImmediate(),m=new Xh(new kh(s.getProvider("auth-internal")),new Ph(u,s.getProvider("app-check-internal")),function(I,P){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new M(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(I.options.projectId,P)}(u,a),u);return h={useFetchStreams:i,...h},m._setSettings(h),m},"PUBLIC").setMultipleInstances(!0)),oe(Gr,Kr,e),oe(Gr,Kr,"esm2020")})();const eo="@firebase/installations",vi="0.6.19";/**
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
 */const to=1e4,no=`w:${vi}`,io="FIS_v2",tl="https://firebaseinstallations.googleapis.com/v1",nl=60*60*1e3,il="installations",rl="Installations";/**
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
 */const sl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ze=new qe(il,rl,sl);function ro(n){return n instanceof Ee&&n.code.includes("request-failed")}/**
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
 */function so({projectId:n}){return`${tl}/projects/${n}/installations`}function oo(n){return{token:n.token,requestStatus:2,expiresIn:al(n.expiresIn),creationTime:Date.now()}}async function ao(n,e){const s=(await e.json()).error;return ze.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function co({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ol(n,{refreshToken:e}){const i=co(n);return i.append("Authorization",cl(e)),i}async function ho(n){const e=await n();return e.status>=500&&e.status<600?n():e}function al(n){return Number(n.replace("s","000"))}function cl(n){return`${io} ${n}`}/**
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
 */async function hl({appConfig:n,heartbeatServiceProvider:e},{fid:i}){const s=so(n),a=co(n),h=e.getImmediate({optional:!0});if(h){const I=await h.getHeartbeatsHeader();I&&a.append("x-firebase-client",I)}const u={fid:i,authVersion:io,appId:n.appId,sdkVersion:no},m={method:"POST",headers:a,body:JSON.stringify(u)},b=await ho(()=>fetch(s,m));if(b.ok){const I=await b.json();return{fid:I.fid||i,registrationStatus:2,refreshToken:I.refreshToken,authToken:oo(I.authToken)}}else throw await ao("Create Installation",b)}/**
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
 */function lo(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function ll(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ul=/^[cdef][\w-]{21}$/,hi="";function dl(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const i=fl(n);return ul.test(i)?i:hi}catch{return hi}}function fl(n){return ll(n).substr(0,22)}/**
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
 */function un(n){return`${n.appName}!${n.appId}`}/**
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
 */const uo=new Map;function fo(n,e){const i=un(n);po(i,e),pl(i,e)}function po(n,e){const i=uo.get(n);if(i)for(const s of i)s(e)}function pl(n,e){const i=gl();i&&i.postMessage({key:n,fid:e}),ml()}let je=null;function gl(){return!je&&"BroadcastChannel"in self&&(je=new BroadcastChannel("[Firebase] FID Change"),je.onmessage=n=>{po(n.data.key,n.data.fid)}),je}function ml(){uo.size===0&&je&&(je.close(),je=null)}/**
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
 */const yl="firebase-installations-database",wl=1,We="firebase-installations-store";let Jn=null;function _i(){return Jn||(Jn=an(yl,wl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(We)}}})),Jn}async function on(n,e){const i=un(n),a=(await _i()).transaction(We,"readwrite"),h=a.objectStore(We),u=await h.get(i);return await h.put(e,i),await a.done,(!u||u.fid!==e.fid)&&fo(n,e.fid),e}async function go(n){const e=un(n),s=(await _i()).transaction(We,"readwrite");await s.objectStore(We).delete(e),await s.done}async function dn(n,e){const i=un(n),a=(await _i()).transaction(We,"readwrite"),h=a.objectStore(We),u=await h.get(i),m=e(u);return m===void 0?await h.delete(i):await h.put(m,i),await a.done,m&&(!u||u.fid!==m.fid)&&fo(n,m.fid),m}/**
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
 */async function bi(n){let e;const i=await dn(n.appConfig,s=>{const a=vl(s),h=_l(n,a);return e=h.registrationPromise,h.installationEntry});return i.fid===hi?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function vl(n){const e=n||{fid:dl(),registrationStatus:0};return mo(e)}function _l(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ze.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=bl(n,i);return{installationEntry:i,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Il(n)}:{installationEntry:e}}async function bl(n,e){try{const i=await hl(n,e);return on(n.appConfig,i)}catch(i){throw ro(i)&&i.customData.serverCode===409?await go(n.appConfig):await on(n.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function Il(n){let e=await ls(n.appConfig);for(;e.registrationStatus===1;)await lo(100),e=await ls(n.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await bi(n);return s||i}return e}function ls(n){return dn(n,e=>{if(!e)throw ze.create("installation-not-found");return mo(e)})}function mo(n){return Sl(n)?{fid:n.fid,registrationStatus:0}:n}function Sl(n){return n.registrationStatus===1&&n.registrationTime+to<Date.now()}/**
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
 */async function El({appConfig:n,heartbeatServiceProvider:e},i){const s=Tl(n,i),a=ol(n,i),h=e.getImmediate({optional:!0});if(h){const I=await h.getHeartbeatsHeader();I&&a.append("x-firebase-client",I)}const u={installation:{sdkVersion:no,appId:n.appId}},m={method:"POST",headers:a,body:JSON.stringify(u)},b=await ho(()=>fetch(s,m));if(b.ok){const I=await b.json();return oo(I)}else throw await ao("Generate Auth Token",b)}function Tl(n,{fid:e}){return`${so(n)}/${e}/authTokens:generate`}/**
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
 */async function Ii(n,e=!1){let i;const s=await dn(n.appConfig,h=>{if(!yo(h))throw ze.create("not-registered");const u=h.authToken;if(!e&&kl(u))return h;if(u.requestStatus===1)return i=Al(n,e),h;{if(!navigator.onLine)throw ze.create("app-offline");const m=Dl(h);return i=Nl(n,m),m}});return i?await i:s.authToken}async function Al(n,e){let i=await us(n.appConfig);for(;i.authToken.requestStatus===1;)await lo(100),i=await us(n.appConfig);const s=i.authToken;return s.requestStatus===0?Ii(n,e):s}function us(n){return dn(n,e=>{if(!yo(e))throw ze.create("not-registered");const i=e.authToken;return Pl(i)?{...e,authToken:{requestStatus:0}}:e})}async function Nl(n,e){try{const i=await El(n,e),s={...e,authToken:i};return await on(n.appConfig,s),i}catch(i){if(ro(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await go(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await on(n.appConfig,s)}throw i}}function yo(n){return n!==void 0&&n.registrationStatus===2}function kl(n){return n.requestStatus===2&&!Cl(n)}function Cl(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+nl}function Dl(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Pl(n){return n.requestStatus===1&&n.requestTime+to<Date.now()}/**
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
 */async function Rl(n){const e=n,{installationEntry:i,registrationPromise:s}=await bi(e);return s?s.catch(console.error):Ii(e).catch(console.error),i.fid}/**
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
 */async function Ol(n,e=!1){const i=n;return await xl(i),(await Ii(i,e)).token}async function xl(n){const{registrationPromise:e}=await bi(n);e&&await e}/**
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
 */function Ll(n){if(!n||!n.options)throw Xn("App Configuration");if(!n.name)throw Xn("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!n.options[i])throw Xn(i);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xn(n){return ze.create("missing-app-config-values",{valueName:n})}/**
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
 */const wo="installations",Ml="installations-internal",Ul=n=>{const e=n.getProvider("app").getImmediate(),i=Ll(e),s=fi(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Fl=n=>{const e=n.getProvider("app").getImmediate(),i=fi(e,wo).getImmediate();return{getId:()=>Rl(i),getToken:a=>Ol(i,a)}};function Vl(){me(new le(wo,Ul,"PUBLIC")),me(new le(Ml,Fl,"PRIVATE"))}Vl();oe(eo,vi);oe(eo,vi,"esm2020");/**
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
 */const jl="/firebase-messaging-sw.js",Bl="/firebase-cloud-messaging-push-scope",vo="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",$l="https://fcmregistrations.googleapis.com/v1",_o="google.c.a.c_id",Hl="google.c.a.c_l",zl="google.c.a.ts",Wl="google.c.a.e",ds=1e4;var fs;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(fs||(fs={}));/**
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
 */var Tt;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Tt||(Tt={}));/**
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
 */function _e(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ql(n){const e="=".repeat((4-n.length%4)%4),i=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(i),a=new Uint8Array(s.length);for(let h=0;h<s.length;++h)a[h]=s.charCodeAt(h);return a}/**
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
 */const Yn="fcm_token_details_db",Gl=5,ps="fcm_token_object_Store";async function Kl(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(Yn))return null;let e=null;return(await an(Yn,Gl,{upgrade:async(s,a,h,u)=>{if(a<2||!s.objectStoreNames.contains(ps))return;const m=u.objectStore(ps),b=await m.index("fcmSenderId").get(n);if(await m.clear(),!!b){if(a===2){const I=b;if(!I.auth||!I.p256dh||!I.endpoint)return;e={token:I.fcmToken,createTime:I.createTime??Date.now(),subscriptionOptions:{auth:I.auth,p256dh:I.p256dh,endpoint:I.endpoint,swScope:I.swScope,vapidKey:typeof I.vapidKey=="string"?I.vapidKey:_e(I.vapidKey)}}}else if(a===3){const I=b;e={token:I.fcmToken,createTime:I.createTime,subscriptionOptions:{auth:_e(I.auth),p256dh:_e(I.p256dh),endpoint:I.endpoint,swScope:I.swScope,vapidKey:_e(I.vapidKey)}}}else if(a===4){const I=b;e={token:I.fcmToken,createTime:I.createTime,subscriptionOptions:{auth:_e(I.auth),p256dh:_e(I.p256dh),endpoint:I.endpoint,swScope:I.swScope,vapidKey:_e(I.vapidKey)}}}}}})).close(),await $n(Yn),await $n("fcm_vapid_details_db"),await $n("undefined"),Jl(e)?e:null}function Jl(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Xl="firebase-messaging-database",Yl=1,At="firebase-messaging-store";let Qn=null;function bo(){return Qn||(Qn=an(Xl,Yl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(At)}}})),Qn}async function Ql(n){const e=Io(n),s=await(await bo()).transaction(At).objectStore(At).get(e);if(s)return s;{const a=await Kl(n.appConfig.senderId);if(a)return await Si(n,a),a}}async function Si(n,e){const i=Io(n),a=(await bo()).transaction(At,"readwrite");return await a.objectStore(At).put(e,i),await a.done,e}function Io({appConfig:n}){return n.appId}/**
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
 */const Zl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Q=new qe("messaging","Messaging",Zl);/**
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
 */async function eu(n,e){const i=await Ti(n),s=So(e),a={method:"POST",headers:i,body:JSON.stringify(s)};let h;try{h=await(await fetch(Ei(n.appConfig),a)).json()}catch(u){throw Q.create("token-subscribe-failed",{errorInfo:u==null?void 0:u.toString()})}if(h.error){const u=h.error.message;throw Q.create("token-subscribe-failed",{errorInfo:u})}if(!h.token)throw Q.create("token-subscribe-no-token");return h.token}async function tu(n,e){const i=await Ti(n),s=So(e.subscriptionOptions),a={method:"PATCH",headers:i,body:JSON.stringify(s)};let h;try{h=await(await fetch(`${Ei(n.appConfig)}/${e.token}`,a)).json()}catch(u){throw Q.create("token-update-failed",{errorInfo:u==null?void 0:u.toString()})}if(h.error){const u=h.error.message;throw Q.create("token-update-failed",{errorInfo:u})}if(!h.token)throw Q.create("token-update-no-token");return h.token}async function nu(n,e){const s={method:"DELETE",headers:await Ti(n)};try{const h=await(await fetch(`${Ei(n.appConfig)}/${e}`,s)).json();if(h.error){const u=h.error.message;throw Q.create("token-unsubscribe-failed",{errorInfo:u})}}catch(a){throw Q.create("token-unsubscribe-failed",{errorInfo:a==null?void 0:a.toString()})}}function Ei({projectId:n}){return`${$l}/projects/${n}/registrations`}async function Ti({appConfig:n,installations:e}){const i=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${i}`})}function So({p256dh:n,auth:e,endpoint:i,vapidKey:s}){const a={web:{endpoint:i,auth:e,p256dh:n}};return s!==vo&&(a.web.applicationPubKey=s),a}/**
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
 */const iu=7*24*60*60*1e3;async function ru(n){const e=await ou(n.swRegistration,n.vapidKey),i={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:_e(e.getKey("auth")),p256dh:_e(e.getKey("p256dh"))},s=await Ql(n.firebaseDependencies);if(s){if(au(s.subscriptionOptions,i))return Date.now()>=s.createTime+iu?su(n,{token:s.token,createTime:Date.now(),subscriptionOptions:i}):s.token;try{await nu(n.firebaseDependencies,s.token)}catch(a){console.warn(a)}return gs(n.firebaseDependencies,i)}else return gs(n.firebaseDependencies,i)}async function su(n,e){try{const i=await tu(n.firebaseDependencies,e),s={...e,token:i,createTime:Date.now()};return await Si(n.firebaseDependencies,s),i}catch(i){throw i}}async function gs(n,e){const s={token:await eu(n,e),createTime:Date.now(),subscriptionOptions:e};return await Si(n,s),s.token}async function ou(n,e){const i=await n.pushManager.getSubscription();return i||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ql(e)})}function au(n,e){const i=e.vapidKey===n.vapidKey,s=e.endpoint===n.endpoint,a=e.auth===n.auth,h=e.p256dh===n.p256dh;return i&&s&&a&&h}/**
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
 */function ms(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return cu(e,n),hu(e,n),lu(e,n),e}function cu(n,e){if(!e.notification)return;n.notification={};const i=e.notification.title;i&&(n.notification.title=i);const s=e.notification.body;s&&(n.notification.body=s);const a=e.notification.image;a&&(n.notification.image=a);const h=e.notification.icon;h&&(n.notification.icon=h)}function hu(n,e){e.data&&(n.data=e.data)}function lu(n,e){var a,h,u,m;if(!e.fcmOptions&&!((a=e.notification)!=null&&a.click_action))return;n.fcmOptions={};const i=((h=e.fcmOptions)==null?void 0:h.link)??((u=e.notification)==null?void 0:u.click_action);i&&(n.fcmOptions.link=i);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(n.fcmOptions.analyticsLabel=s)}/**
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
 */function uu(n){return typeof n=="object"&&!!n&&_o in n}/**
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
 */function du(n){if(!n||!n.options)throw Zn("App Configuration Object");if(!n.name)throw Zn("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:i}=n;for(const s of e)if(!i[s])throw Zn(s);return{appName:n.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function Zn(n){return Q.create("missing-app-config-values",{valueName:n})}/**
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
 */class fu{constructor(e,i,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=du(e);this.firebaseDependencies={app:e,appConfig:a,installations:i,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function pu(n){try{n.swRegistration=await navigator.serviceWorker.register(jl,{scope:Bl}),n.swRegistration.update().catch(()=>{}),await gu(n.swRegistration)}catch(e){throw Q.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function gu(n){return new Promise((e,i)=>{const s=setTimeout(()=>i(new Error(`Service worker not registered after ${ds} ms`)),ds),a=n.installing||n.waiting;n.active?(clearTimeout(s),e()):a?a.onstatechange=h=>{var u;((u=h.target)==null?void 0:u.state)==="activated"&&(a.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),i(new Error("No incoming service worker found.")))})}/**
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
 */async function mu(n,e){if(!e&&!n.swRegistration&&await pu(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Q.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function yu(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=vo)}/**
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
 */async function Eo(n,e){if(!navigator)throw Q.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Q.create("permission-blocked");return await yu(n,e==null?void 0:e.vapidKey),await mu(n,e==null?void 0:e.serviceWorkerRegistration),ru(n)}/**
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
 */async function wu(n,e,i){const s=vu(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:i[_o],message_name:i[Hl],message_time:i[zl],message_device_time:Math.floor(Date.now()/1e3)})}function vu(n){switch(n){case Tt.NOTIFICATION_CLICKED:return"notification_open";case Tt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function _u(n,e){const i=e.data;if(!i.isFirebaseMessaging)return;n.onMessageHandler&&i.messageType===Tt.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(ms(i)):n.onMessageHandler.next(ms(i)));const s=i.data;uu(s)&&s[Wl]==="1"&&await wu(n,i.messageType,s)}const ys="@firebase/messaging",ws="0.12.23";/**
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
 */const bu=n=>{const e=new fu(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",i=>_u(e,i)),e},Iu=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:s=>Eo(e,s)}};function Su(){me(new le("messaging",bu,"PUBLIC")),me(new le("messaging-internal",Iu,"PRIVATE")),oe(ys,ws),oe(ys,ws,"esm2020")}/**
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
 */async function Eu(){try{await Cs()}catch{return!1}return typeof window<"u"&&ks()&&Na()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Tu(n,e){if(!navigator)throw Q.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function Au(n=Pc()){return Eu().then(e=>{if(!e)throw Q.create("unsupported-browser")},e=>{throw Q.create("indexed-db-unsupported")}),fi(Ge(n),"messaging").getImmediate()}async function Nu(n,e){return n=Ge(n),Eo(n,e)}function ku(n,e){return n=Ge(n),Tu(n,e)}Su();const Cu={apiKey:"AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",authDomain:"digitalliberia-notification.firebaseapp.com",projectId:"digitalliberia-notification",storageBucket:"digitalliberia-notification.appspot.com",messagingSenderId:"537791418352",appId:"1:537791418352:web:378b48439b2c9bed6dd735"},Du=Os(Cu),To=Au(Du),Pu="BEICu1bx8LKW5j7cag5tU9B2qfcejWi7QPm8a95jFODSIUNRiellygLGroK9NyWt-3WsTiUZscmS311gGXiXV7Q",Ai=async()=>{try{const n=await navigator.serviceWorker.register("/firebase-messaging-sw.js");if(console.log("Service Worker registered:",n),await Notification.requestPermission()==="granted"){console.log("Notification permission granted.");const i=await Nu(To,{vapidKey:Pu,serviceWorkerRegistration:n});return i?(console.log("FCM Token:",i),localStorage.setItem("fcmToken",i),i):(console.log("No registration token available."),null)}else return console.log("Notification permission denied."),null}catch(n){return console.error("Error retrieving token:",n),null}};ku(To,n=>{if(console.log("Message received in foreground:",n),n.notification){const{title:e,body:i}=n.notification;new Notification(e,{body:i})}});const Ru=[{label:"Home",to:"/",color:"bg-blue-500/80"},{label:"System",to:"/system",color:"bg-green-500/80"},{label:"Digital Liberia",to:"/digital-liberia",color:"bg-purple-500/80"},{label:"LibPay",to:"/libpay",color:"bg-yellow-500/80"},{label:"Liberian Post",to:"/liberian-post",color:"bg-pink-500/80"}],ei=["/logos/liberianpost.png","/logos/digital.png","/logos/libmusic.png","/logos/libconnectsit.png","/logos/libpaysit.png","/logos/seal of liberia.png","/logos/liberia.png"],vs=[{id:"education",name:"Ministry of Education",description:"School management, student records, and educational resources",icon:"/logos/moe.png"},{id:"health",name:"Ministry of Health",description:"Health records, vaccination data, and medical services",icon:"/logos/moh.png"},{id:"finance",name:"Ministry of Finance",description:"Tax records, financial services, and economic data",icon:"/logos/mof.png"},{id:"justice",name:"Ministry of Justice",description:"Legal documents, court records, and law enforcement",icon:"/logos/moj.png"},{id:"transport",name:"Ministry of Transport",description:"Driver licenses, vehicle registration, and transport permits",icon:"/logos/mot.png"},{id:"foreign",name:"Ministry of Foreign Affairs",description:"Passport services and international relations",icon:"/logos/mofa.png"},{id:"agriculture",name:"Ministry of Agriculture",description:"Farming permits, agricultural data, and food security",icon:"/logos/moa.png"},{id:"internal",name:"Ministry of Internal Affairs",description:"Citizen IDs, birth certificates, and local governance",icon:"/logos/moia.png"},{id:"lands",name:"Ministry of Lands & Mines",description:"Land deeds, mining permits, and property records",icon:"/logos/mol.png"},{id:"commerce",name:"Ministry of Commerce",description:"Business registration and trade licenses",icon:"/logos/moc.png"},{id:"labour",name:"Ministry of Labour",description:"Employment records and worker rights",icon:"/logos/moll.png"},{id:"youth",name:"Ministry of Youth & Sports",description:"Youth programs and sporting events",icon:"/logos/moy.png"}],Ou=[{id:"passport",name:"Passport"},{id:"birth-certificate",name:"Birth Certificate"},{id:"drivers-license",name:"Driver's License"},{id:"citizen-id",name:"Citizen ID"},{id:"business-registration",name:"Business Registration"},{id:"vehicle-registration",name:"Vehicle Registration"},{id:"land-deed",name:"Land Deed"},{id:"tax-services",name:"Tax Services"}],xu=({onClose:n,onSuccess:e,service:i="Ministry of Education"})=>{const[s,a]=G.useState(""),[h,u]=G.useState(""),[m,b]=G.useState(!1),[I,P]=G.useState(null),[O,N]=G.useState(!1),[T,A]=G.useState(null),[k,V]=G.useState(null),re=async W=>{var H,B;try{const p=localStorage.getItem("fcmToken")||await Ai(),l=await Ar.post("/gov-services/request",{dssn:W,service:i,fcmToken:p,requestData:{timestamp:new Date().toISOString(),service:i,origin:window.location.origin}});if(!l.data.success)throw new Error(l.data.error||"Failed to initiate challenge");return l.data}catch(p){throw console.error("Error requesting DSSN challenge:",p),new Error(((B=(H=p.response)==null?void 0:H.data)==null?void 0:B.error)||p.message||"Failed to initiate DSSN challenge")}},te=async W=>{var H,B;try{const p=await Ar.get(`/gov-services/status/${W}`);if(!p.data.success)throw new Error(p.data.error||"Failed to check challenge status");return p.data}catch(p){throw console.error("Error polling challenge status:",p),new Error(((B=(H=p.response)==null?void 0:H.data)==null?void 0:B.error)||p.message||"Failed to check approval status")}};G.useEffect(()=>()=>{T&&clearInterval(T)},[T]);const ne=async W=>{if(W.preventDefault(),u(""),b(!0),V(null),!s.trim()){u("Please enter your DSSN"),b(!1);return}try{const H=await re(s);P(H.challengeId),N(!0),b(!1),H.pushNotification&&V({sent:H.pushNotification.sent,hasToken:H.pushNotification.hasToken,error:H.pushNotification.error});const B=setInterval(async()=>{try{const p=await te(H.challengeId);p.status==="approved"?(clearInterval(B),N(!1),e(p.govToken,H.challengeId)):p.status==="denied"&&(clearInterval(B),N(!1),u("Access was denied on your mobile device"))}catch(p){console.error("Error polling challenge status:",p),clearInterval(B),N(!1),u(p.message)}},3e3);A(B),setTimeout(()=>{O&&(clearInterval(B),N(!1),u("Request timed out. Please try again."))},5*60*1e3)}catch(H){u(H.message),b(!1)}};return E("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",children:C("div",{className:"bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl",children:[C("div",{className:"bg-blue-600 p-4 flex justify-between items-center",children:[C("h2",{className:"text-xl font-bold text-white",children:[i," - DSSN Verification"]}),E("button",{onClick:n,className:"text-white text-2xl hover:text-gray-200",disabled:O||m,children:"×"})]}),C("div",{className:"p-6",children:[E("div",{className:"flex justify-center mb-6",children:E("img",{src:"/logos/moe.png",alt:"MOE Logo",className:"w-20 h-20 object-contain"})}),h&&E("div",{className:"mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm",children:h}),k&&!k.sent&&E("div",{className:"mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md text-sm",children:k.hasToken?`Push notification failed: ${k.error||"Unknown error"}`:"User doesn't have the mobile app installed. Please ask them to download it."}),O?C("div",{className:"text-center",children:[E("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),E("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Waiting for Mobile Approval"}),E("p",{className:"text-gray-600 mb-4",children:"Please check your mobile app to approve this verification request."}),(k==null?void 0:k.sent)&&E("p",{className:"text-sm text-green-600 mb-2",children:"✓ Push notification sent to mobile device"}),C("p",{className:"text-sm text-gray-500",children:["Challenge ID: ",I]}),E("p",{className:"text-xs text-gray-400 mt-2",children:"This request will timeout in 5 minutes"})]}):C("form",{onSubmit:ne,children:[C("div",{className:"mb-4",children:[E("label",{className:"block text-gray-900 mb-2 font-medium",children:"Digital Social Security Number (DSSN)"}),E("input",{type:"text",value:s,onChange:W=>a(W.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900",placeholder:"Enter your DSSN",required:!0,autoFocus:!0,disabled:m}),E("p",{className:"text-sm text-gray-500 mt-1",children:"Enter your DSSN and approve the request on your mobile app"})]}),E("button",{type:"submit",disabled:m,className:`w-full py-3 px-4 rounded-md text-white font-semibold ${m?"bg-blue-400":"bg-blue-600 hover:bg-blue-700"} transition-colors flex items-center justify-center`,children:m?C(da,{children:[C("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[E("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),E("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"Verify with DSSN"})]}),E("div",{className:"mt-4 text-center text-sm border-t border-gray-200 pt-4",children:C("p",{className:"text-gray-600",children:["Don't have the mobile app? ",E("a",{href:"#",className:"text-blue-600 hover:underline",onClick:W=>{W.preventDefault(),alert("The Digital Liberia mobile app is available on the App Store and Google Play Store")},children:"Download it here"})]})})]})]})})},Uu=()=>{const{user:n,logout:e}=_s(),i=li(),[s]=G.useState(new Date);G.useEffect(()=>{Ai()},[]);const a=()=>{Object.keys(localStorage).filter(b=>b.startsWith("MOE_")).forEach(b=>localStorage.removeItem(b)),e(),i("/system")};if(G.useEffect(()=>{n||i("/system")},[n,i]),!n)return null;const h=la.filter(m=>m.requiredLevel<=n.securityLevel),u=m=>m.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return E("div",{className:"min-h-screen bg-gray-100 p-6",children:C("div",{className:"max-w-6xl mx-auto",children:[C("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6 flex justify-between items-center",children:[C("div",{children:[C("h1",{className:"text-2xl font-bold text-gray-800",children:["Welcome, ",n.username]}),E("p",{className:"text-gray-600",children:u(s)}),C("p",{className:"text-sm text-gray-500",children:["DSSN: ",localStorage.getItem("MOE_DSSN")||"Not available"]})]}),E("button",{onClick:a,className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors",children:"Logout"})]}),E("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(m=>E("div",{onClick:()=>i(m.path),className:"bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow",children:C("div",{className:"flex items-center space-x-4",children:[E("div",{className:"p-3 rounded-full bg-blue-100 text-blue-600",children:E("span",{className:"text-xl",children:m.icon})}),C("div",{children:[E("h2",{className:"font-bold text-lg",children:m.title}),m.requiredLevel>=ua.SCHOOL_ADMIN&&E("span",{className:"text-xs px-2 py-1 bg-blue-600 text-white rounded-full",children:Lu(m.requiredLevel).toUpperCase()})]})]})},m.id))})]})})},Fu=()=>{const n=li();return E("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:C("div",{className:"bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center",children:[E("div",{className:"text-red-500 mb-4",children:E("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),E("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Access Denied"}),E("p",{className:"text-gray-600 mb-6",children:"You don't have permission to access this page. Please contact your administrator if you believe this is an error."}),E("button",{onClick:()=>n(-1),className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Go Back"})]})})},Vu=()=>{var N;const{user:n}=_s(),e=ha(),i=li(),[s,a]=G.useState(0),[h,u]=G.useState(!1),[m,b]=G.useState(null);G.useEffect(()=>{const T=setInterval(()=>{a(A=>(A+1)%ei.length)},600);return()=>clearInterval(T)},[]),G.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(T=>{console.log("SW registered: ",T)}).catch(T=>{console.log("SW registration failed: ",T)}),Ai()},[]),G.useEffect(()=>{localStorage.getItem("MOE_LOGGED_IN")==="true"&&n?i("/moe-dashboard"):n||Object.keys(localStorage).filter(k=>k.startsWith("MOE_")).forEach(k=>localStorage.removeItem(k))},[n,i]);const I=async(T,A)=>{try{const k=JSON.parse(atob(T.split(".")[1]));localStorage.setItem("MOE_USER_ID",k.userId),localStorage.setItem("MOE_USERNAME","DSSN User"),localStorage.setItem("MOE_SECURITY_LEVEL","1"),localStorage.setItem("MOE_LOGGED_IN","true"),localStorage.setItem("MOE_GOV_TOKEN",T),localStorage.setItem("MOE_DSSN",k.dssn||""),localStorage.setItem("MOE_CHALLENGE_ID",A||""),localStorage.setItem("MOE_LOGIN_TIMESTAMP",new Date().toISOString()),u(!1),i("/moe-dashboard")}catch(k){console.error("Error processing DSSN login:",k),alert("Login failed. Please try again.")}},P=(T,A)=>{A.stopPropagation(),b(T),T==="education"&&n?i("/moe-dashboard"):u(!0)},O=(T,A)=>{A.stopPropagation(),alert(`${T.replace("-"," ")} service will be available soon`)};return C("div",{className:"relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden",children:[E("div",{className:"fixed inset-0 bg-blue-950 -z-50"}),E("div",{className:"fixed inset-0 flex items-center justify-center z-10 pointer-events-none",children:E("div",{className:"relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center",children:ei.map((T,A)=>C("div",{className:`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${A===s?"opacity-100":"opacity-0"}`,children:[E("img",{src:T,alt:`Logo ${A}`,className:"max-w-full max-h-full object-contain"}),E("div",{className:"absolute inset-0 bg-black/5"})]},A))})}),E("header",{className:"fixed top-0 left-0 w-full z-50",children:C("div",{className:"bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30",children:[E("div",{className:"flex items-center justify-center px-4 py-4 max-w-7xl mx-auto",children:E("nav",{className:"flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center",children:Ru.map(T=>E("div",{className:`flex-shrink-0 ${T.color} px-3 py-1 rounded-lg`,children:E(Tr,{to:T.to,className:`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${e.pathname===T.to?"text-red-500":"text-white hover:text-blue-300"}`,children:T.label})},T.to))})}),E("div",{className:"w-full bg-gradient-to-b from-blue-950 to-transparent overflow-x-auto",children:E("div",{className:"flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3",children:ei.map((T,A)=>E("div",{className:`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${A===s?"scale-110 bg-white shadow-lg":"scale-100 bg-white/90"}`,style:{animation:A===s?"heartbeat 600ms ease-in-out":"none"},children:E("img",{src:T,alt:`Logo ${A}`,className:"w-12 h-12 md:w-16 md:h-16 object-contain"})},A))})})]})}),C("main",{className:"relative z-30 pt-48 pb-20 px-4 md:px-8",children:[E("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:C("div",{className:"bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-600/10 backdrop-blur-lg rounded-xl border border-rose-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[E("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),C("div",{className:"relative",children:[E("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Social Security Number (DSSN)"}),C("div",{className:"text-white space-y-4",children:[E("p",{children:"In the Digital Liberia project, the DSSN (Digital Social Security Number) is a unique digital identifier assigned to every Liberian citizen or legal resident within the system."}),E(Tr,{to:"/dssn",className:"inline-flex items-center bg-blue-500/80 backdrop-blur-sm rounded-lg px-3 py-1 ml-2 border border-blue-400/30 cursor-pointer hover:bg-blue-600/80 transition-colors",children:"(click here to verify a DSSN)"})]})]})]})}),E("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:C("div",{className:"bg-gradient-to-br from-green-500/10 via-teal-500/10 to-emerald-600/10 backdrop-blur-lg rounded-xl border border-green-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[E("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),C("div",{className:"relative",children:[E("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Liberia System"}),E("div",{className:"text-white",children:E("p",{children:"The National Database Management System (NDMS) is the secure, centralized, and intelligent national data backbone that powers Digital Liberia."})})]})]})}),E("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:C("div",{className:"bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-purple-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[E("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),C("div",{className:"relative",children:[E("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Government Ministries"}),E("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:vs.map(T=>E("div",{onClick:A=>P(T.id,A),className:"cursor-pointer bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm relative z-20",children:C("div",{className:"flex items-center space-x-4",children:[E("img",{src:T.icon,alt:T.name,className:"w-12 h-12 object-contain"}),C("div",{children:[E("h3",{className:"font-bold text-lg",children:T.name}),E("p",{className:"text-sm text-white/80",children:T.description})]})]})},T.id))})]})]})}),E("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:C("div",{className:"bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-blue-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[E("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),C("div",{className:"relative",children:[E("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Quick Access Services"}),E("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Ou.map(T=>E("button",{onClick:A=>O(T.id,A),className:"bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm text-left",children:E("h3",{className:"font-bold text-lg",children:T.name})},T.id))})]})]})})]}),E("footer",{className:"relative z-30 py-6 text-center text-white/60 text-sm",children:C("div",{className:"border-t border-blue-700/30 pt-6",children:["© ",new Date().getFullYear()," Digital Liberia. All rights reserved."]})}),h&&E(xu,{onClose:()=>u(!1),onSuccess:I,service:m?(N=vs.find(T=>T.id===m))==null?void 0:N.name:"Ministry of Education"}),E("style",{jsx:!0,global:!0,children:`
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
      `})]})};function Lu(n){return{1:"User",2:"School Admin",3:"District Admin",4:"Ministry Admin",5:"System Admin"}[n]||"Unknown"}export{Uu as MoeDashboard,Fu as UnauthorizedPage,Vu as default};
