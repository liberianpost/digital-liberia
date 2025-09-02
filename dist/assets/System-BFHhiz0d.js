import{u as aa,a as ca,b as ha,r as ne,j as U,c as T,L as Er,F as la,d as Tr}from"./index-XzuIUArE.js";const ua=()=>{};var Ar={};/**
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
 */const ws=function(n){const e=[];let i=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[i++]=a:a<2048?(e[i++]=a>>6|192,e[i++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[i++]=a>>18|240,e[i++]=a>>12&63|128,e[i++]=a>>6&63|128,e[i++]=a&63|128):(e[i++]=a>>12|224,e[i++]=a>>6&63|128,e[i++]=a&63|128)}return e},da=function(n){const e=[];let i=0,s=0;for(;i<n.length;){const a=n[i++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const h=n[i++];e[s++]=String.fromCharCode((a&31)<<6|h&63)}else if(a>239&&a<365){const h=n[i++],d=n[i++],w=n[i++],I=((a&7)<<18|(h&63)<<12|(d&63)<<6|w&63)-65536;e[s++]=String.fromCharCode(55296+(I>>10)),e[s++]=String.fromCharCode(56320+(I&1023))}else{const h=n[i++],d=n[i++];e[s++]=String.fromCharCode((a&15)<<12|(h&63)<<6|d&63)}}return e.join("")},_s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const h=n[a],d=a+1<n.length,w=d?n[a+1]:0,I=a+2<n.length,b=I?n[a+2]:0,k=h>>2,x=(h&3)<<4|w>>4;let P=(w&15)<<2|b>>6,H=b&63;I||(H=64,d||(P=64)),s.push(i[k],i[x],i[P],i[H])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ws(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):da(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const h=i[n.charAt(a++)],w=a<n.length?i[n.charAt(a)]:0;++a;const b=a<n.length?i[n.charAt(a)]:64;++a;const x=a<n.length?i[n.charAt(a)]:64;if(++a,h==null||w==null||b==null||x==null)throw new fa;const P=h<<2|w>>4;if(s.push(P),b!==64){const H=w<<4&240|b>>2;if(s.push(H),x!==64){const N=b<<6&192|x;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pa=function(n){const e=ws(n);return _s.encodeByteArray(e,!0)},vs=function(n){return pa(n).replace(/\./g,"")},bs=function(n){try{return _s.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ga(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ma=()=>ga().__FIREBASE_DEFAULTS__,ya=()=>{if(typeof process>"u"||typeof Ar>"u")return;const n=Ar.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bs(n[1]);return e&&JSON.parse(e)},Is=()=>{try{return ua()||ma()||ya()||wa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ss=()=>{var n;return(n=Is())==null?void 0:n.config},_a=n=>{var e;return(e=Is())==null?void 0:e[`_${n}`]};/**
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
 */class va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,s))}}}/**
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
 */function Es(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ba(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Ia(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ea(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ts(){try{return typeof indexedDB=="object"}catch{return!1}}function As(){return new Promise((n,e)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),i||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{i=!1},a.onerror=()=>{var h;e(((h=a.error)==null?void 0:h.message)||"")}}catch(i){e(i)}})}function Ta(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Aa="FirebaseError";class Ee extends Error{constructor(e,i,s){super(i),this.code=e,this.customData=s,this.name=Aa,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qe.prototype.create)}}class qe{constructor(e,i,s){this.service=e,this.serviceName=i,this.errors=s}create(e,...i){const s=i[0]||{},a=`${this.service}/${e}`,h=this.errors[e],d=h?Na(h,s):"Error",w=`${this.serviceName}: ${d} (${a}).`;return new Ee(a,w,s)}}function Na(n,e){return n.replace(ka,(i,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const ka=/\{\$([^}]+)}/g;function ni(n,e){if(n===e)return!0;const i=Object.keys(n),s=Object.keys(e);for(const a of i){if(!s.includes(a))return!1;const h=n[a],d=e[a];if(Nr(h)&&Nr(d)){if(!ni(h,d))return!1}else if(h!==d)return!1}for(const a of s)if(!i.includes(a))return!1;return!0}function Nr(n){return n!==null&&typeof n=="object"}/**
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
 */function Ns(n){const e=[];for(const[i,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ca(n,e){const i=new Pa(n,e);return i.subscribe.bind(i)}class Pa{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,s){let a;if(e===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");Da(e,["next","error","complete"])?a=e:a={next:e,error:i,complete:s},a.next===void 0&&(a.next=jn),a.error===void 0&&(a.error=jn),a.complete===void 0&&(a.complete=jn);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Da(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function jn(){}/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}class he{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ra{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const s=new va;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:i});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ma(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:a});s.resolve(h)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[h,d]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(h);s===w&&d.resolve(a)}return a}onInit(e,i){const s=this.normalizeInstanceIdentifier(i),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const h=this.instances.get(s);return h&&e(h,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,i){const s=this.onInitCallbacks.get(i);if(s)for(const a of s)try{a(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Oa(e),options:i}),this.instances.set(e,s),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oa(n){return n===Le?void 0:n}function Ma(n){return n.instantiationMode==="EAGER"}/**
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
 */class La{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Ra(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const xa={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Ua=F.INFO,Fa={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Va=(n,e,...i)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=Fa[e];if(a)console[a](`[${s}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ui{constructor(e){this.name=e,this._logLevel=Ua,this._logHandler=Va,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const ja=(n,e)=>e.some(i=>n instanceof i);let kr,Cr;function Ba(){return kr||(kr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $a(){return Cr||(Cr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ks=new WeakMap,ii=new WeakMap,Cs=new WeakMap,Bn=new WeakMap,di=new WeakMap;function Ha(n){const e=new Promise((i,s)=>{const a=()=>{n.removeEventListener("success",h),n.removeEventListener("error",d)},h=()=>{i(Ie(n.result)),a()},d=()=>{s(n.error),a()};n.addEventListener("success",h),n.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&ks.set(i,n)}).catch(()=>{}),di.set(e,n),e}function za(n){if(ii.has(n))return;const e=new Promise((i,s)=>{const a=()=>{n.removeEventListener("complete",h),n.removeEventListener("error",d),n.removeEventListener("abort",d)},h=()=>{i(),a()},d=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",h),n.addEventListener("error",d),n.addEventListener("abort",d)});ii.set(n,e)}let ri={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return ii.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cs.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ie(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ga(n){ri=n(ri)}function qa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const s=n.call($n(this),e,...i);return Cs.set(s,e.sort?e.sort():[e]),Ie(s)}:$a().includes(n)?function(...e){return n.apply($n(this),e),Ie(ks.get(this))}:function(...e){return Ie(n.apply($n(this),e))}}function Wa(n){return typeof n=="function"?qa(n):(n instanceof IDBTransaction&&za(n),ja(n,Ba())?new Proxy(n,ri):n)}function Ie(n){if(n instanceof IDBRequest)return Ha(n);if(Bn.has(n))return Bn.get(n);const e=Wa(n);return e!==n&&(Bn.set(n,e),di.set(e,n)),e}const $n=n=>di.get(n);function cn(n,e,{blocked:i,upgrade:s,blocking:a,terminated:h}={}){const d=indexedDB.open(n,e),w=Ie(d);return s&&d.addEventListener("upgradeneeded",I=>{s(Ie(d.result),I.oldVersion,I.newVersion,Ie(d.transaction),I)}),i&&d.addEventListener("blocked",I=>i(I.oldVersion,I.newVersion,I)),w.then(I=>{h&&I.addEventListener("close",()=>h()),a&&I.addEventListener("versionchange",b=>a(b.oldVersion,b.newVersion,b))}).catch(()=>{}),w}function Hn(n,{blocked:e}={}){const i=indexedDB.deleteDatabase(n);return e&&i.addEventListener("blocked",s=>e(s.oldVersion,s)),Ie(i).then(()=>{})}const Ka=["get","getKey","getAll","getAllKeys","count"],Ja=["put","add","delete","clear"],zn=new Map;function Pr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zn.get(e))return zn.get(e);const i=e.replace(/FromIndex$/,""),s=e!==i,a=Ja.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Ka.includes(i)))return;const h=async function(d,...w){const I=this.transaction(d,a?"readwrite":"readonly");let b=I.store;return s&&(b=b.index(w.shift())),(await Promise.all([b[i](...w),a&&I.done]))[0]};return zn.set(e,h),h}Ga(n=>({...n,get:(e,i,s)=>Pr(e,i)||n.get(e,i,s),has:(e,i)=>!!Pr(e,i)||n.has(e,i)}));/**
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
 */class Xa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Ya(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function Ya(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const si="@firebase/app",Dr="0.14.2";/**
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
 */const Se=new ui("@firebase/app"),Qa="@firebase/app-compat",Za="@firebase/analytics-compat",ec="@firebase/analytics",tc="@firebase/app-check-compat",nc="@firebase/app-check",ic="@firebase/auth",rc="@firebase/auth-compat",sc="@firebase/database",oc="@firebase/data-connect",ac="@firebase/database-compat",cc="@firebase/functions",hc="@firebase/functions-compat",lc="@firebase/installations",uc="@firebase/installations-compat",dc="@firebase/messaging",fc="@firebase/messaging-compat",pc="@firebase/performance",gc="@firebase/performance-compat",mc="@firebase/remote-config",yc="@firebase/remote-config-compat",wc="@firebase/storage",_c="@firebase/storage-compat",vc="@firebase/firestore",bc="@firebase/ai",Ic="@firebase/firestore-compat",Sc="firebase",Ec="12.2.0";/**
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
 */const oi="[DEFAULT]",Tc={[si]:"fire-core",[Qa]:"fire-core-compat",[ec]:"fire-analytics",[Za]:"fire-analytics-compat",[nc]:"fire-app-check",[tc]:"fire-app-check-compat",[ic]:"fire-auth",[rc]:"fire-auth-compat",[sc]:"fire-rtdb",[oc]:"fire-data-connect",[ac]:"fire-rtdb-compat",[cc]:"fire-fn",[hc]:"fire-fn-compat",[lc]:"fire-iid",[uc]:"fire-iid-compat",[dc]:"fire-fcm",[fc]:"fire-fcm-compat",[pc]:"fire-perf",[gc]:"fire-perf-compat",[mc]:"fire-rc",[yc]:"fire-rc-compat",[wc]:"fire-gcs",[_c]:"fire-gcs-compat",[vc]:"fire-fst",[Ic]:"fire-fst-compat",[bc]:"fire-vertex","fire-js":"fire-js",[Sc]:"fire-js-all"};/**
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
 */const Qt=new Map,Ac=new Map,ai=new Map;function Rr(n,e){try{n.container.addComponent(e)}catch(i){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function ge(n){const e=n.name;if(ai.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;ai.set(e,n);for(const i of Qt.values())Rr(i,n);for(const i of Ac.values())Rr(i,n);return!0}function fi(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function xe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Nc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pe=new qe("app","Firebase",Nc);/**
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
 */class kc{constructor(e,i,s){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new he("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
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
 */const hn=Ec;function Ps(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const s={name:oi,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Pe.create("bad-app-name",{appName:String(a)});if(i||(i=Ss()),!i)throw Pe.create("no-options");const h=Qt.get(a);if(h){if(ni(i,h.options)&&ni(s,h.config))return h;throw Pe.create("duplicate-app",{appName:a})}const d=new La(a);for(const I of ai.values())d.addComponent(I);const w=new kc(i,s,d);return Qt.set(a,w),w}function Cc(n=oi){const e=Qt.get(n);if(!e&&n===oi&&Ss())return Ps();if(!e)throw Pe.create("no-app",{appName:n});return e}function se(n,e,i){let s=Tc[n]??n;i&&(s+=`-${i}`);const a=s.match(/\s|\//),h=e.match(/\s|\//);if(a||h){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(d.join(" "));return}ge(new he(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Pc="firebase-heartbeat-database",Dc=1,Et="firebase-heartbeat-store";let Gn=null;function Ds(){return Gn||(Gn=cn(Pc,Dc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Et)}catch(i){console.warn(i)}}}}).catch(n=>{throw Pe.create("idb-open",{originalErrorMessage:n.message})})),Gn}async function Rc(n){try{const i=(await Ds()).transaction(Et),s=await i.objectStore(Et).get(Rs(n));return await i.done,s}catch(e){if(e instanceof Ee)Se.warn(e.message);else{const i=Pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Se.warn(i.message)}}}async function Or(n,e){try{const s=(await Ds()).transaction(Et,"readwrite");await s.objectStore(Et).put(e,Rs(n)),await s.done}catch(i){if(i instanceof Ee)Se.warn(i.message);else{const s=Pe.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Se.warn(s.message)}}}function Rs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Oc=1024,Mc=30;class Lc{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Uc(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,i;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=Mr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(d=>d.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:a}),this._heartbeatsCache.heartbeats.length>Mc){const d=Fc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Se.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Mr(),{heartbeatsToSend:s,unsentEntries:a}=xc(this._heartbeatsCache.heartbeats),h=vs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return Se.warn(i),""}}}function Mr(){return new Date().toISOString().substring(0,10)}function xc(n,e=Oc){const i=[];let s=n.slice();for(const a of n){const h=i.find(d=>d.agent===a.agent);if(h){if(h.dates.push(a.date),Lr(i)>e){h.dates.pop();break}}else if(i.push({agent:a.agent,dates:[a.date]}),Lr(i)>e){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Uc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ts()?As().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Rc(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lr(n){return vs(JSON.stringify({version:2,heartbeats:n})).length}function Fc(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let s=1;s<n.length;s++)n[s].date<i&&(i=n[s].date,e=s);return e}/**
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
 */function Vc(n){ge(new he("platform-logger",e=>new Xa(e),"PRIVATE")),ge(new he("heartbeat",e=>new Lc(e),"PRIVATE")),se(si,Dr,n),se(si,Dr,"esm2020"),se("fire-js","")}Vc("");var jc="firebase",Bc="12.2.1";/**
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
 */se(jc,Bc,"app");function Os(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $c=Os,Ms=new qe("auth","Firebase",Os());/**
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
 */const Zt=new ui("@firebase/auth");function Hc(n,...e){Zt.logLevel<=F.WARN&&Zt.warn(`Auth (${hn}): ${n}`,...e)}function Jt(n,...e){Zt.logLevel<=F.ERROR&&Zt.error(`Auth (${hn}): ${n}`,...e)}/**
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
 */function xr(n,...e){throw pi(n,...e)}function Ls(n,...e){return pi(n,...e)}function xs(n,e,i){const s={...$c(),[e]:i};return new qe("auth","Firebase",s).create(e,{appName:n.name})}function Xt(n){return xs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pi(n,...e){if(typeof n!="string"){const i=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(i,...s)}return Ms.create(n,...e)}function O(n,e,...i){if(!n)throw pi(e,...i)}function _t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jt(e),new Error(e)}function en(n,e){n||_t(e)}function zc(){return Ur()==="http:"||Ur()==="https:"}function Ur(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Gc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zc()||Sa()||"connection"in navigator)?navigator.onLine:!0}function qc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Nt{constructor(e,i){this.shortDelay=e,this.longDelay=i,en(i>e,"Short delay should be less than long delay!"),this.isMobile=ba()||Ea()}get(){return Gc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wc(n,e){en(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Us{static initialize(e,i,s){this.fetchImpl=e,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Jc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xc=new Nt(3e4,6e4);function Fs(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ln(n,e,i,s,a={}){return Vs(n,a,async()=>{let h={},d={};s&&(e==="GET"?d=s:h={body:JSON.stringify(s)});const w=Ns({key:n.config.apiKey,...d}).slice(1),I=await n._getAdditionalHeaders();I["Content-Type"]="application/json",n.languageCode&&(I["X-Firebase-Locale"]=n.languageCode);const b={method:e,headers:I,...h};return Ia()||(b.referrerPolicy="no-referrer"),n.emulatorConfig&&Es(n.emulatorConfig.host)&&(b.credentials="include"),Us.fetch()(await js(n,n.config.apiHost,i,w),b)})}async function Vs(n,e,i){n._canInitEmulator=!1;const s={...Kc,...e};try{const a=new Yc(n),h=await Promise.race([i(),a.promise]);a.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw Gt(n,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const w=h.ok?d.errorMessage:d.error.message,[I,b]=w.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gt(n,"credential-already-in-use",d);if(I==="EMAIL_EXISTS")throw Gt(n,"email-already-in-use",d);if(I==="USER_DISABLED")throw Gt(n,"user-disabled",d);const k=s[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(b)throw xs(n,k,b);xr(n,k)}}catch(a){if(a instanceof Ee)throw a;xr(n,"network-request-failed",{message:String(a)})}}async function js(n,e,i,s){const a=`${e}${i}?${s}`,h=n,d=h.config.emulator?Wc(n.config,a):`${n.config.apiScheme}://${a}`;return Jc.includes(i)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(d).toString():d}class Yc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(Ls(this.auth,"network-request-failed")),Xc.get())})}}function Gt(n,e,i){const s={appName:n.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const a=Ls(n,e,s);return a.customData._tokenResponse=i,a}/**
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
 */async function Qc(n,e){return ln(n,"POST","/v1/accounts:delete",e)}async function tn(n,e){return ln(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zc(n,e=!1){const i=We(n),s=await i.getIdToken(e),a=Bs(s);O(a&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error");const h=typeof a.firebase=="object"?a.firebase:void 0,d=h==null?void 0:h.sign_in_provider;return{claims:a,token:s,authTime:vt(qn(a.auth_time)),issuedAtTime:vt(qn(a.iat)),expirationTime:vt(qn(a.exp)),signInProvider:d||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function qn(n){return Number(n)*1e3}function Bs(n){const[e,i,s]=n.split(".");if(e===void 0||i===void 0||s===void 0)return Jt("JWT malformed, contained fewer than 3 sections"),null;try{const a=bs(i);return a?JSON.parse(a):(Jt("Failed to decode base64 JWT payload"),null)}catch(a){return Jt("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Fr(n){const e=Bs(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ci(n,e,i=!1){if(i)return e;try{return await e}catch(s){throw s instanceof Ee&&eh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function eh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class th{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hi{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=vt(this.lastLoginAt),this.creationTime=vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nn(n){var x;const e=n.auth,i=await n.getIdToken(),s=await ci(n,tn(e,{idToken:i}));O(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const h=(x=a.providerUserInfo)!=null&&x.length?$s(a.providerUserInfo):[],d=ih(n.providerData,h),w=n.isAnonymous,I=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),b=w?I:!1,k={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new hi(a.createdAt,a.lastLoginAt),isAnonymous:b};Object.assign(n,k)}async function nh(n){const e=We(n);await nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ih(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function $s(n){return n.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function rh(n,e){const i=await Vs(n,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:h}=n.config,d=await js(n,a,"/v1/token",`key=${h}`),w=await n._getAdditionalHeaders();w["Content-Type"]="application/x-www-form-urlencoded";const I={method:"POST",headers:w,body:s};return n.emulatorConfig&&Es(n.emulatorConfig.host)&&(I.credentials="include"),Us.fetch()(d,I)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function sh(n,e){return ln(n,"POST","/v2/accounts:revokeToken",Fs(n,e))}/**
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
 */class Ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){O(e.length!==0,"internal-error");const i=Fr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:s,refreshToken:a,expiresIn:h}=await rh(e,i);this.updateTokensAndExpiration(s,a,Number(h))}updateTokensAndExpiration(e,i,s){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,i){const{refreshToken:s,accessToken:a,expirationTime:h}=i,d=new Ze;return s&&(O(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(O(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),h&&(O(typeof h=="number","internal-error",{appName:e}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ze,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
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
 */function Ce(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class de{constructor({uid:e,auth:i,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new th(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new hi(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const i=await ci(this,this.stsTokenManager.getToken(this.auth,e));return O(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Zc(this,e)}reload(){return nh(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new de({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),i&&await nn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await ci(this,Qc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const s=i.displayName??void 0,a=i.email??void 0,h=i.phoneNumber??void 0,d=i.photoURL??void 0,w=i.tenantId??void 0,I=i._redirectEventId??void 0,b=i.createdAt??void 0,k=i.lastLoginAt??void 0,{uid:x,emailVerified:P,isAnonymous:H,providerData:N,stsTokenManager:E}=i;O(x&&E,e,"internal-error");const A=Ze.fromJSON(this.name,E);O(typeof x=="string",e,"internal-error"),Ce(s,e.name),Ce(a,e.name),O(typeof P=="boolean",e,"internal-error"),O(typeof H=="boolean",e,"internal-error"),Ce(h,e.name),Ce(d,e.name),Ce(w,e.name),Ce(I,e.name),Ce(b,e.name),Ce(k,e.name);const R=new de({uid:x,auth:e,email:a,emailVerified:P,displayName:s,isAnonymous:H,photoURL:d,phoneNumber:h,tenantId:w,stsTokenManager:A,createdAt:b,lastLoginAt:k});return N&&Array.isArray(N)&&(R.providerData=N.map(j=>({...j}))),I&&(R._redirectEventId=I),R}static async _fromIdTokenResponse(e,i,s=!1){const a=new Ze;a.updateFromServerResponse(i);const h=new de({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await nn(h),h}static async _fromGetAccountInfoResponse(e,i,s){const a=i.users[0];O(a.localId!==void 0,"internal-error");const h=a.providerUserInfo!==void 0?$s(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(h!=null&&h.length),w=new Ze;w.updateFromIdToken(s);const I=new de({uid:a.localId,auth:e,stsTokenManager:w,isAnonymous:d}),b={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new hi(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(h!=null&&h.length)};return Object.assign(I,b),I}}/**
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
 */const Vr=new Map;function Fe(n){en(n instanceof Function,"Expected a class definition");let e=Vr.get(n);return e?(en(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vr.set(n,e),e)}/**
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
 */class Hs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Hs.type="NONE";const jr=Hs;/**
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
 */function Wn(n,e,i){return`firebase:${n}:${e}:${i}`}class et{constructor(e,i,s){this.persistence=e,this.auth=i,this.userKey=s;const{config:a,name:h}=this.auth;this.fullUserKey=Wn(this.userKey,a.apiKey,h),this.fullPersistenceKey=Wn("persistence",a.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await tn(this.auth,{idToken:e}).catch(()=>{});return i?de._fromGetAccountInfoResponse(this.auth,i,e):null}return de._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,s="authUser"){if(!i.length)return new et(Fe(jr),e,s);const a=(await Promise.all(i.map(async b=>{if(await b._isAvailable())return b}))).filter(b=>b);let h=a[0]||Fe(jr);const d=Wn(s,e.config.apiKey,e.name);let w=null;for(const b of i)try{const k=await b._get(d);if(k){let x;if(typeof k=="string"){const P=await tn(e,{idToken:k}).catch(()=>{});if(!P)break;x=await de._fromGetAccountInfoResponse(e,P,k)}else x=de._fromJSON(e,k);b!==h&&(w=x),h=b;break}}catch{}const I=a.filter(b=>b._shouldAllowMigration);return!h._shouldAllowMigration||!I.length?new et(h,e,s):(h=I[0],w&&await h._set(d,w.toJSON()),await Promise.all(i.map(async b=>{if(b!==h)try{await b._remove(d)}catch{}})),new et(h,e,s))}}/**
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
 */function Br(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uh(e))return"Blackberry";if(dh(e))return"Webos";if(ah(e))return"Safari";if((e.includes("chrome/")||ch(e))&&!e.includes("edge/"))return"Chrome";if(lh(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(i);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function oh(n=pe()){return/firefox\//i.test(n)}function ah(n=pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ch(n=pe()){return/crios\//i.test(n)}function hh(n=pe()){return/iemobile/i.test(n)}function lh(n=pe()){return/android/i.test(n)}function uh(n=pe()){return/blackberry/i.test(n)}function dh(n=pe()){return/webos/i.test(n)}/**
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
 */function zs(n,e=[]){let i;switch(n){case"Browser":i=Br(pe());break;case"Worker":i=`${Br(pe())}-${n}`;break;default:i=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${hn}/${s}`}/**
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
 */class fh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const s=h=>new Promise((d,w)=>{try{const I=e(h);d(I)}catch(I){w(I)}});s.onAbort=i,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const a of i)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ph(n,e={}){return ln(n,"GET","/v2/passwordPolicy",Fs(n,e))}/**
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
 */const gh=6;class mh{constructor(e){var s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??gh,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=e.length>=s),a&&(i.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,i,s,a,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
 */class yh{constructor(e,i,s,a){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $r(this),this.idTokenSubscription=new $r(this),this.beforeStateQueue=new fh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ms,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Fe(i)),this._initializationPromise=this.queue(async()=>{var s,a,h;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((h=this.currentUser)==null?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await tn(this,{idToken:e}),s=await de._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var h;if(xe(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(w=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(w,w))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(h=this.redirectUser)==null?void 0:h._redirectEventId,w=s==null?void 0:s._redirectEventId,I=await this.tryRedirectSignIn(e);(!d||d===w)&&(I!=null&&I.user)&&(s=I.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await nn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(Xt(this));const i=e?We(e):null;return i&&O(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ph(this),i=new mh(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qe("auth","Firebase",e())}onAuthStateChanged(e,i,s){return this.registerStateListener(this.authStateSubscription,e,i,s)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,s){return this.registerStateListener(this.idTokenSubscription,e,i,s)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await sh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,i){const s=await this.getOrInitRedirectPersistenceManager(i);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Fe(e)||this._popupRedirectResolver;O(i,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[Fe(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,s;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,s,a){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(w,this,"internal-error"),w.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const I=e.addObserver(i,s,a);return()=>{d=!0,I()}}else{const I=e.addObserver(i);return()=>{d=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var i;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return e!=null&&e.error&&Hc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function wh(n){return We(n)}class $r{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ca(i=>this.observer=i)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _h(n,e){const i=(e==null?void 0:e.persistence)||[],s=(Array.isArray(i)?i:[i]).map(Fe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Nt(3e4,6e4);/**
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
 */new Nt(5e3,15e3);var Hr="@firebase/auth",zr="1.11.0";/**
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
 */class vh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ih(n){ge(new he("auth",(e,{options:i})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:d,authDomain:w}=s.options;O(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const I={apiKey:d,authDomain:w,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zs(n)},b=new yh(s,a,h,I);return _h(b,i),b},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,s)=>{e.getProvider("auth-internal").initialize()})),ge(new he("auth-internal",e=>{const i=wh(e.getProvider("auth").getImmediate());return(s=>new vh(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),se(Hr,zr,bh(n)),se(Hr,zr,"esm2020")}/**
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
 */const Sh=5*60;_a("authIdTokenMaxAge");Ih("Browser");var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function u(){}u.prototype=l.prototype,g.D=l.prototype,g.prototype=new u,g.prototype.constructor=g,g.C=function(p,m,_){for(var f=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)f[ye-2]=arguments[ye];return l.prototype[m].apply(p,f)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(g,l,u){u||(u=0);var p=Array(16);if(typeof l=="string")for(var m=0;16>m;++m)p[m]=l.charCodeAt(u++)|l.charCodeAt(u++)<<8|l.charCodeAt(u++)<<16|l.charCodeAt(u++)<<24;else for(m=0;16>m;++m)p[m]=l[u++]|l[u++]<<8|l[u++]<<16|l[u++]<<24;l=g.g[0],u=g.g[1],m=g.g[2];var _=g.g[3],f=l+(_^u&(m^_))+p[0]+3614090360&4294967295;l=u+(f<<7&4294967295|f>>>25),f=_+(m^l&(u^m))+p[1]+3905402710&4294967295,_=l+(f<<12&4294967295|f>>>20),f=m+(u^_&(l^u))+p[2]+606105819&4294967295,m=_+(f<<17&4294967295|f>>>15),f=u+(l^m&(_^l))+p[3]+3250441966&4294967295,u=m+(f<<22&4294967295|f>>>10),f=l+(_^u&(m^_))+p[4]+4118548399&4294967295,l=u+(f<<7&4294967295|f>>>25),f=_+(m^l&(u^m))+p[5]+1200080426&4294967295,_=l+(f<<12&4294967295|f>>>20),f=m+(u^_&(l^u))+p[6]+2821735955&4294967295,m=_+(f<<17&4294967295|f>>>15),f=u+(l^m&(_^l))+p[7]+4249261313&4294967295,u=m+(f<<22&4294967295|f>>>10),f=l+(_^u&(m^_))+p[8]+1770035416&4294967295,l=u+(f<<7&4294967295|f>>>25),f=_+(m^l&(u^m))+p[9]+2336552879&4294967295,_=l+(f<<12&4294967295|f>>>20),f=m+(u^_&(l^u))+p[10]+4294925233&4294967295,m=_+(f<<17&4294967295|f>>>15),f=u+(l^m&(_^l))+p[11]+2304563134&4294967295,u=m+(f<<22&4294967295|f>>>10),f=l+(_^u&(m^_))+p[12]+1804603682&4294967295,l=u+(f<<7&4294967295|f>>>25),f=_+(m^l&(u^m))+p[13]+4254626195&4294967295,_=l+(f<<12&4294967295|f>>>20),f=m+(u^_&(l^u))+p[14]+2792965006&4294967295,m=_+(f<<17&4294967295|f>>>15),f=u+(l^m&(_^l))+p[15]+1236535329&4294967295,u=m+(f<<22&4294967295|f>>>10),f=l+(m^_&(u^m))+p[1]+4129170786&4294967295,l=u+(f<<5&4294967295|f>>>27),f=_+(u^m&(l^u))+p[6]+3225465664&4294967295,_=l+(f<<9&4294967295|f>>>23),f=m+(l^u&(_^l))+p[11]+643717713&4294967295,m=_+(f<<14&4294967295|f>>>18),f=u+(_^l&(m^_))+p[0]+3921069994&4294967295,u=m+(f<<20&4294967295|f>>>12),f=l+(m^_&(u^m))+p[5]+3593408605&4294967295,l=u+(f<<5&4294967295|f>>>27),f=_+(u^m&(l^u))+p[10]+38016083&4294967295,_=l+(f<<9&4294967295|f>>>23),f=m+(l^u&(_^l))+p[15]+3634488961&4294967295,m=_+(f<<14&4294967295|f>>>18),f=u+(_^l&(m^_))+p[4]+3889429448&4294967295,u=m+(f<<20&4294967295|f>>>12),f=l+(m^_&(u^m))+p[9]+568446438&4294967295,l=u+(f<<5&4294967295|f>>>27),f=_+(u^m&(l^u))+p[14]+3275163606&4294967295,_=l+(f<<9&4294967295|f>>>23),f=m+(l^u&(_^l))+p[3]+4107603335&4294967295,m=_+(f<<14&4294967295|f>>>18),f=u+(_^l&(m^_))+p[8]+1163531501&4294967295,u=m+(f<<20&4294967295|f>>>12),f=l+(m^_&(u^m))+p[13]+2850285829&4294967295,l=u+(f<<5&4294967295|f>>>27),f=_+(u^m&(l^u))+p[2]+4243563512&4294967295,_=l+(f<<9&4294967295|f>>>23),f=m+(l^u&(_^l))+p[7]+1735328473&4294967295,m=_+(f<<14&4294967295|f>>>18),f=u+(_^l&(m^_))+p[12]+2368359562&4294967295,u=m+(f<<20&4294967295|f>>>12),f=l+(u^m^_)+p[5]+4294588738&4294967295,l=u+(f<<4&4294967295|f>>>28),f=_+(l^u^m)+p[8]+2272392833&4294967295,_=l+(f<<11&4294967295|f>>>21),f=m+(_^l^u)+p[11]+1839030562&4294967295,m=_+(f<<16&4294967295|f>>>16),f=u+(m^_^l)+p[14]+4259657740&4294967295,u=m+(f<<23&4294967295|f>>>9),f=l+(u^m^_)+p[1]+2763975236&4294967295,l=u+(f<<4&4294967295|f>>>28),f=_+(l^u^m)+p[4]+1272893353&4294967295,_=l+(f<<11&4294967295|f>>>21),f=m+(_^l^u)+p[7]+4139469664&4294967295,m=_+(f<<16&4294967295|f>>>16),f=u+(m^_^l)+p[10]+3200236656&4294967295,u=m+(f<<23&4294967295|f>>>9),f=l+(u^m^_)+p[13]+681279174&4294967295,l=u+(f<<4&4294967295|f>>>28),f=_+(l^u^m)+p[0]+3936430074&4294967295,_=l+(f<<11&4294967295|f>>>21),f=m+(_^l^u)+p[3]+3572445317&4294967295,m=_+(f<<16&4294967295|f>>>16),f=u+(m^_^l)+p[6]+76029189&4294967295,u=m+(f<<23&4294967295|f>>>9),f=l+(u^m^_)+p[9]+3654602809&4294967295,l=u+(f<<4&4294967295|f>>>28),f=_+(l^u^m)+p[12]+3873151461&4294967295,_=l+(f<<11&4294967295|f>>>21),f=m+(_^l^u)+p[15]+530742520&4294967295,m=_+(f<<16&4294967295|f>>>16),f=u+(m^_^l)+p[2]+3299628645&4294967295,u=m+(f<<23&4294967295|f>>>9),f=l+(m^(u|~_))+p[0]+4096336452&4294967295,l=u+(f<<6&4294967295|f>>>26),f=_+(u^(l|~m))+p[7]+1126891415&4294967295,_=l+(f<<10&4294967295|f>>>22),f=m+(l^(_|~u))+p[14]+2878612391&4294967295,m=_+(f<<15&4294967295|f>>>17),f=u+(_^(m|~l))+p[5]+4237533241&4294967295,u=m+(f<<21&4294967295|f>>>11),f=l+(m^(u|~_))+p[12]+1700485571&4294967295,l=u+(f<<6&4294967295|f>>>26),f=_+(u^(l|~m))+p[3]+2399980690&4294967295,_=l+(f<<10&4294967295|f>>>22),f=m+(l^(_|~u))+p[10]+4293915773&4294967295,m=_+(f<<15&4294967295|f>>>17),f=u+(_^(m|~l))+p[1]+2240044497&4294967295,u=m+(f<<21&4294967295|f>>>11),f=l+(m^(u|~_))+p[8]+1873313359&4294967295,l=u+(f<<6&4294967295|f>>>26),f=_+(u^(l|~m))+p[15]+4264355552&4294967295,_=l+(f<<10&4294967295|f>>>22),f=m+(l^(_|~u))+p[6]+2734768916&4294967295,m=_+(f<<15&4294967295|f>>>17),f=u+(_^(m|~l))+p[13]+1309151649&4294967295,u=m+(f<<21&4294967295|f>>>11),f=l+(m^(u|~_))+p[4]+4149444226&4294967295,l=u+(f<<6&4294967295|f>>>26),f=_+(u^(l|~m))+p[11]+3174756917&4294967295,_=l+(f<<10&4294967295|f>>>22),f=m+(l^(_|~u))+p[2]+718787259&4294967295,m=_+(f<<15&4294967295|f>>>17),f=u+(_^(m|~l))+p[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(m+(f<<21&4294967295|f>>>11))&4294967295,g.g[2]=g.g[2]+m&4294967295,g.g[3]=g.g[3]+_&4294967295}s.prototype.u=function(g,l){l===void 0&&(l=g.length);for(var u=l-this.blockSize,p=this.B,m=this.h,_=0;_<l;){if(m==0)for(;_<=u;)a(this,g,_),_+=this.blockSize;if(typeof g=="string"){for(;_<l;)if(p[m++]=g.charCodeAt(_++),m==this.blockSize){a(this,p),m=0;break}}else for(;_<l;)if(p[m++]=g[_++],m==this.blockSize){a(this,p),m=0;break}}this.h=m,this.o+=l},s.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;var u=8*this.o;for(l=g.length-8;l<g.length;++l)g[l]=u&255,u/=256;for(this.u(g),g=Array(16),l=u=0;4>l;++l)for(var p=0;32>p;p+=8)g[u++]=this.g[l]>>>p&255;return g};function h(g,l){var u=w;return Object.prototype.hasOwnProperty.call(u,g)?u[g]:u[g]=l(g)}function d(g,l){this.h=l;for(var u=[],p=!0,m=g.length-1;0<=m;m--){var _=g[m]|0;p&&_==l||(u[m]=_,p=!1)}this.g=u}var w={};function I(g){return-128<=g&&128>g?h(g,function(l){return new d([l|0],0>l?-1:0)}):new d([g|0],0>g?-1:0)}function b(g){if(isNaN(g)||!isFinite(g))return x;if(0>g)return A(b(-g));for(var l=[],u=1,p=0;g>=u;p++)l[p]=g/u|0,u*=4294967296;return new d(l,0)}function k(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return A(k(g.substring(1),l));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=b(Math.pow(l,8)),p=x,m=0;m<g.length;m+=8){var _=Math.min(8,g.length-m),f=parseInt(g.substring(m,m+_),l);8>_?(_=b(Math.pow(l,_)),p=p.j(_).add(b(f))):(p=p.j(u),p=p.add(b(f)))}return p}var x=I(0),P=I(1),H=I(16777216);n=d.prototype,n.m=function(){if(E(this))return-A(this).m();for(var g=0,l=1,u=0;u<this.g.length;u++){var p=this.i(u);g+=(0<=p?p:4294967296+p)*l,l*=4294967296}return g},n.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(N(this))return"0";if(E(this))return"-"+A(this).toString(g);for(var l=b(Math.pow(g,6)),u=this,p="";;){var m=q(u,l).g;u=R(u,m.j(l));var _=((0<u.g.length?u.g[0]:u.h)>>>0).toString(g);if(u=m,N(u))return _+p;for(;6>_.length;)_="0"+_;p=_+p}},n.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function N(g){if(g.h!=0)return!1;for(var l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function E(g){return g.h==-1}n.l=function(g){return g=R(this,g),E(g)?-1:N(g)?0:1};function A(g){for(var l=g.g.length,u=[],p=0;p<l;p++)u[p]=~g.g[p];return new d(u,~g.h).add(P)}n.abs=function(){return E(this)?A(this):this},n.add=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],p=0,m=0;m<=l;m++){var _=p+(this.i(m)&65535)+(g.i(m)&65535),f=(_>>>16)+(this.i(m)>>>16)+(g.i(m)>>>16);p=f>>>16,_&=65535,f&=65535,u[m]=f<<16|_}return new d(u,u[u.length-1]&-2147483648?-1:0)};function R(g,l){return g.add(A(l))}n.j=function(g){if(N(this)||N(g))return x;if(E(this))return E(g)?A(this).j(A(g)):A(A(this).j(g));if(E(g))return A(this.j(A(g)));if(0>this.l(H)&&0>g.l(H))return b(this.m()*g.m());for(var l=this.g.length+g.g.length,u=[],p=0;p<2*l;p++)u[p]=0;for(p=0;p<this.g.length;p++)for(var m=0;m<g.g.length;m++){var _=this.i(p)>>>16,f=this.i(p)&65535,ye=g.i(m)>>>16,nt=g.i(m)&65535;u[2*p+2*m]+=f*nt,j(u,2*p+2*m),u[2*p+2*m+1]+=_*nt,j(u,2*p+2*m+1),u[2*p+2*m+1]+=f*ye,j(u,2*p+2*m+1),u[2*p+2*m+2]+=_*ye,j(u,2*p+2*m+2)}for(p=0;p<l;p++)u[p]=u[2*p+1]<<16|u[2*p];for(p=l;p<2*l;p++)u[p]=0;return new d(u,0)};function j(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function W(g,l){this.g=g,this.h=l}function q(g,l){if(N(l))throw Error("division by zero");if(N(g))return new W(x,x);if(E(g))return l=q(A(g),l),new W(A(l.g),A(l.h));if(E(l))return l=q(g,A(l)),new W(A(l.g),l.h);if(30<g.g.length){if(E(g)||E(l))throw Error("slowDivide_ only works with positive integers.");for(var u=P,p=l;0>=p.l(g);)u=me(u),p=me(p);var m=$(u,1),_=$(p,1);for(p=$(p,2),u=$(u,2);!N(p);){var f=_.add(p);0>=f.l(g)&&(m=m.add(u),_=f),p=$(p,1),u=$(u,1)}return l=R(g,m.j(l)),new W(m,l)}for(m=x;0<=g.l(l);){for(u=Math.max(1,Math.floor(g.m()/l.m())),p=Math.ceil(Math.log(u)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),_=b(u),f=_.j(l);E(f)||0<f.l(g);)u-=p,_=b(u),f=_.j(l);N(_)&&(_=P),m=m.add(_),g=R(g,f)}return new W(m,g)}n.A=function(g){return q(this,g).h},n.and=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],p=0;p<l;p++)u[p]=this.i(p)&g.i(p);return new d(u,this.h&g.h)},n.or=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],p=0;p<l;p++)u[p]=this.i(p)|g.i(p);return new d(u,this.h|g.h)},n.xor=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],p=0;p<l;p++)u[p]=this.i(p)^g.i(p);return new d(u,this.h^g.h)};function me(g){for(var l=g.g.length+1,u=[],p=0;p<l;p++)u[p]=g.i(p)<<1|g.i(p-1)>>>31;return new d(u,g.h)}function $(g,l){var u=l>>5;l%=32;for(var p=g.g.length-u,m=[],_=0;_<p;_++)m[_]=0<l?g.i(_+u)>>>l|g.i(_+u+1)<<32-l:g.i(_+u);return new d(m,g.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=b,d.fromString=k,gi=d}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});var qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){return t==Array.prototype||t==Object.prototype||(t[r]=o.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof qt=="object"&&qt];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=i(this);function a(t,r){if(r)e:{var o=s;t=t.split(".");for(var c=0;c<t.length-1;c++){var y=t[c];if(!(y in o))break e;o=o[y]}t=t[t.length-1],c=o[t],r=r(c),r!=c&&r!=null&&e(o,t,{configurable:!0,writable:!0,value:r})}}function h(t,r){t instanceof String&&(t+="");var o=0,c=!1,y={next:function(){if(!c&&o<t.length){var v=o++;return{value:r(v,t[v]),done:!1}}return c=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}a("Array.prototype.values",function(t){return t||function(){return h(this,function(r,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},w=this||self;function I(t){var r=typeof t;return r=r!="object"?r:t?Array.isArray(t)?"array":r:"null",r=="array"||r=="object"&&typeof t.length=="number"}function b(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function k(t,r,o){return t.call.apply(t.bind,arguments)}function x(t,r,o){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,c),t.apply(r,y)}}return function(){return t.apply(r,arguments)}}function P(t,r,o){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:x,P.apply(null,arguments)}function H(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var c=o.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function N(t,r){function o(){}o.prototype=r.prototype,t.aa=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.Qb=function(c,y,v){for(var S=Array(arguments.length-2),V=2;V<arguments.length;V++)S[V-2]=arguments[V];return r.prototype[y].apply(c,S)}}function E(t){const r=t.length;if(0<r){const o=Array(r);for(let c=0;c<r;c++)o[c]=t[c];return o}return[]}function A(t,r){for(let o=1;o<arguments.length;o++){const c=arguments[o];if(I(c)){const y=t.length||0,v=c.length||0;t.length=y+v;for(let S=0;S<v;S++)t[y+S]=c[S]}else t.push(c)}}class R{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function j(t){return/^[\s\xa0]*$/.test(t)}function W(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function q(t){return q[" "](t),t}q[" "]=function(){};var me=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function $(t,r,o){for(const c in t)r.call(o,t[c],c,t)}function g(t,r){for(const o in t)r.call(void 0,t[o],o,t)}function l(t){const r={};for(const o in t)r[o]=t[o];return r}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,r){let o,c;for(let y=1;y<arguments.length;y++){c=arguments[y];for(o in c)t[o]=c[o];for(let v=0;v<u.length;v++)o=u[v],Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o])}}function m(t){var r=1;t=t.split(":");const o=[];for(;0<r&&t.length;)o.push(t.shift()),r--;return t.length&&o.push(t.join(":")),o}function _(t){w.setTimeout(()=>{throw t},0)}function f(){var t=pn;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class ye{constructor(){this.h=this.g=null}add(r,o){const c=nt.get();c.set(r,o),this.h?this.h.next=c:this.g=c,this.h=c}}var nt=new R(()=>new Eo,t=>t.reset());class Eo{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let it,rt=!1,pn=new ye,Ai=()=>{const t=w.Promise.resolve(void 0);it=()=>{t.then(To)}};var To=()=>{for(var t;t=f();){try{t.h.call(t.g)}catch(o){_(o)}var r=nt;r.j(t),100>r.h&&(r.h++,t.next=r.g,r.g=t)}rt=!1};function Te(){this.s=this.s,this.C=this.C}Te.prototype.s=!1,Te.prototype.ma=function(){this.s||(this.s=!0,this.N())},Te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Ao=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};w.addEventListener("test",o,r),w.removeEventListener("test",o,r)}catch{}return t}();function st(t,r){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var o=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(me){e:{try{q(r.nodeName);var y=!0;break e}catch{}y=!1}y||(r=null)}}else o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement);this.relatedTarget=r,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:No[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.aa.h.call(this)}}N(st,J);var No={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),ko=0;function Co(t,r,o,c,y){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!c,this.ha=y,this.key=++ko,this.da=this.fa=!1}function Pt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Dt(t){this.src=t,this.g={},this.h=0}Dt.prototype.add=function(t,r,o,c,y){var v=t.toString();t=this.g[v],t||(t=this.g[v]=[],this.h++);var S=mn(t,r,c,y);return-1<S?(r=t[S],o||(r.fa=!1)):(r=new Co(r,this.src,v,!!c,y),r.fa=o,t.push(r)),r};function gn(t,r){var o=r.type;if(o in t.g){var c=t.g[o],y=Array.prototype.indexOf.call(c,r,void 0),v;(v=0<=y)&&Array.prototype.splice.call(c,y,1),v&&(Pt(r),t.g[o].length==0&&(delete t.g[o],t.h--))}}function mn(t,r,o,c){for(var y=0;y<t.length;++y){var v=t[y];if(!v.da&&v.listener==r&&v.capture==!!o&&v.ha==c)return y}return-1}var yn="closure_lm_"+(1e6*Math.random()|0),wn={};function Ni(t,r,o,c,y){if(Array.isArray(r)){for(var v=0;v<r.length;v++)Ni(t,r[v],o,c,y);return null}return o=Pi(o),t&&t[Ct]?t.K(r,o,b(c)?!!c.capture:!1,y):Po(t,r,o,!1,c,y)}function Po(t,r,o,c,y,v){if(!r)throw Error("Invalid event type");var S=b(y)?!!y.capture:!!y,V=vn(t);if(V||(t[yn]=V=new Dt(t)),o=V.add(r,o,c,S,v),o.proxy)return o;if(c=Do(),o.proxy=c,c.src=t,c.listener=o,t.addEventListener)Ao||(y=S),y===void 0&&(y=!1),t.addEventListener(r.toString(),c,y);else if(t.attachEvent)t.attachEvent(Ci(r.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Do(){function t(o){return r.call(t.src,t.listener,o)}const r=Ro;return t}function ki(t,r,o,c,y){if(Array.isArray(r))for(var v=0;v<r.length;v++)ki(t,r[v],o,c,y);else c=b(c)?!!c.capture:!!c,o=Pi(o),t&&t[Ct]?(t=t.i,r=String(r).toString(),r in t.g&&(v=t.g[r],o=mn(v,o,c,y),-1<o&&(Pt(v[o]),Array.prototype.splice.call(v,o,1),v.length==0&&(delete t.g[r],t.h--)))):t&&(t=vn(t))&&(r=t.g[r.toString()],t=-1,r&&(t=mn(r,o,c,y)),(o=-1<t?r[t]:null)&&_n(o))}function _n(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[Ct])gn(r.i,t);else{var o=t.type,c=t.proxy;r.removeEventListener?r.removeEventListener(o,c,t.capture):r.detachEvent?r.detachEvent(Ci(o),c):r.addListener&&r.removeListener&&r.removeListener(c),(o=vn(r))?(gn(o,t),o.h==0&&(o.src=null,r[yn]=null)):Pt(t)}}}function Ci(t){return t in wn?wn[t]:wn[t]="on"+t}function Ro(t,r){if(t.da)t=!0;else{r=new st(r,this);var o=t.listener,c=t.ha||t.src;t.fa&&_n(t),t=o.call(c,r)}return t}function vn(t){return t=t[yn],t instanceof Dt?t:null}var bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pi(t){return typeof t=="function"?t:(t[bn]||(t[bn]=function(r){return t.handleEvent(r)}),t[bn])}function X(){Te.call(this),this.i=new Dt(this),this.M=this,this.F=null}N(X,Te),X.prototype[Ct]=!0,X.prototype.removeEventListener=function(t,r,o,c){ki(this,t,r,o,c)};function ee(t,r){var o,c=t.F;if(c)for(o=[];c;c=c.F)o.push(c);if(t=t.M,c=r.type||r,typeof r=="string")r=new J(r,t);else if(r instanceof J)r.target=r.target||t;else{var y=r;r=new J(c,t),p(r,y)}if(y=!0,o)for(var v=o.length-1;0<=v;v--){var S=r.g=o[v];y=Rt(S,c,!0,r)&&y}if(S=r.g=t,y=Rt(S,c,!0,r)&&y,y=Rt(S,c,!1,r)&&y,o)for(v=0;v<o.length;v++)S=r.g=o[v],y=Rt(S,c,!1,r)&&y}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var t=this.i,r;for(r in t.g){for(var o=t.g[r],c=0;c<o.length;c++)Pt(o[c]);delete t.g[r],t.h--}}this.F=null},X.prototype.K=function(t,r,o,c){return this.i.add(String(t),r,!1,o,c)},X.prototype.L=function(t,r,o,c){return this.i.add(String(t),r,!0,o,c)};function Rt(t,r,o,c){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();for(var y=!0,v=0;v<r.length;++v){var S=r[v];if(S&&!S.da&&S.capture==o){var V=S.listener,K=S.ha||S.src;S.fa&&gn(t.i,S),y=V.call(K,c)!==!1&&y}}return y&&!c.defaultPrevented}function Di(t,r,o){if(typeof t=="function")o&&(t=P(t,o));else if(t&&typeof t.handleEvent=="function")t=P(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:w.setTimeout(t,r||0)}function Ri(t){t.g=Di(()=>{t.g=null,t.i&&(t.i=!1,Ri(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class Oo extends Te{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:Ri(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){Te.call(this),this.h=t,this.g={}}N(ot,Te);var Oi=[];function Mi(t){$(t.g,function(r,o){this.g.hasOwnProperty(o)&&_n(r)},t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),Mi(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var In=w.JSON.stringify,Mo=w.JSON.parse,Lo=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function Sn(){}Sn.prototype.h=null;function Li(t){return t.h||(t.h=t.i())}function xo(){}var at={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function En(){J.call(this,"d")}N(En,J);function Tn(){J.call(this,"c")}N(Tn,J);var Ke={},xi=null;function An(){return xi=xi||new X}Ke.La="serverreachability";function Ui(t){J.call(this,Ke.La,t)}N(Ui,J);function ct(t){const r=An();ee(r,new Ui(r))}Ke.STAT_EVENT="statevent";function Fi(t,r){J.call(this,Ke.STAT_EVENT,t),this.stat=r}N(Fi,J);function te(t){const r=An();ee(r,new Fi(r,t))}Ke.Ma="timingevent";function Vi(t,r){J.call(this,Ke.Ma,t),this.size=r}N(Vi,J);function ht(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},r)}function lt(){this.g=!0}lt.prototype.xa=function(){this.g=!1};function Uo(t,r,o,c,y,v){t.info(function(){if(t.g)if(v)for(var S="",V=v.split("&"),K=0;K<V.length;K++){var D=V[K].split("=");if(1<D.length){var Y=D[0];D=D[1];var Q=Y.split("_");S=2<=Q.length&&Q[1]=="type"?S+(Y+"="+D+"&"):S+(Y+"=redacted&")}}else S=null;else S=v;return"XMLHTTP REQ ("+c+") [attempt "+y+"]: "+r+`
`+o+`
`+S})}function Fo(t,r,o,c,y,v,S){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+y+"]: "+r+`
`+o+`
`+v+" "+S})}function Je(t,r,o,c){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+jo(t,o)+(c?" "+c:"")})}function Vo(t,r){t.info(function(){return"TIMEOUT: "+r})}lt.prototype.info=function(){};function jo(t,r){if(!t.g)return r;if(!r)return null;try{var o=JSON.parse(r);if(o){for(t=0;t<o.length;t++)if(Array.isArray(o[t])){var c=o[t];if(!(2>c.length)){var y=c[1];if(Array.isArray(y)&&!(1>y.length)){var v=y[0];if(v!="noop"&&v!="stop"&&v!="close")for(var S=1;S<y.length;S++)y[S]=""}}}}return In(o)}catch{return r}}var Nn={NO_ERROR:0,TIMEOUT:8},Bo={},kn;function Ot(){}N(Ot,Sn),Ot.prototype.g=function(){return new XMLHttpRequest},Ot.prototype.i=function(){return{}},kn=new Ot;function Ae(t,r,o,c){this.j=t,this.i=r,this.l=o,this.R=c||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ji}function ji(){this.i=null,this.g="",this.h=!1}var Bi={},Cn={};function Pn(t,r,o){t.L=1,t.v=Ut(we(r)),t.m=o,t.P=!0,$i(t,null)}function $i(t,r){t.F=Date.now(),Mt(t),t.A=we(t.v);var o=t.A,c=t.R;Array.isArray(c)||(c=[String(c)]),nr(o.i,"t",c),t.C=0,o=t.j.J,t.h=new ji,t.g=vr(t.j,o?r:null,!t.m),0<t.O&&(t.M=new Oo(P(t.Y,t,t.g),t.O)),r=t.U,o=t.g,c=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Oi[0]=y.toString()),y=Oi);for(var v=0;v<y.length;v++){var S=Ni(o,y[v],c||r.handleEvent,!1,r.h||r);if(!S)break;r.g[S.key]=S}r=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,r)):(t.u="GET",t.g.ea(t.A,t.u,null,r)),ct(),Uo(t.i,t.u,t.A,t.l,t.R,t.m)}Ae.prototype.ca=function(t){t=t.target;const r=this.M;r&&_e(t)==3?r.j():this.Y(t)},Ae.prototype.Y=function(t){try{if(t==this.g)e:{const Q=_e(this.g);var r=this.g.Ba();const Qe=this.g.Z();if(!(3>Q)&&(Q!=3||this.g&&(this.h.h||this.g.oa()||hr(this.g)))){this.J||Q!=4||r==7||(r==8||0>=Qe?ct(3):ct(2)),Dn(this);var o=this.g.Z();this.X=o;t:if(Hi(this)){var c=hr(this.g);t="";var y=c.length,v=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),ut(this);var S="";break t}this.h.i=new w.TextDecoder}for(r=0;r<y;r++)this.h.h=!0,t+=this.h.i.decode(c[r],{stream:!(v&&r==y-1)});c.length=0,this.h.g+=t,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=o==200,Fo(this.i,this.u,this.A,this.l,this.R,Q,o),this.o){if(this.T&&!this.K){t:{if(this.g){var V,K=this.g;if((V=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(V)){var D=V;break t}}D=null}if(o=D)Je(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rn(this,o);else{this.o=!1,this.s=3,te(12),Re(this),ut(this);break e}}if(this.P){o=!0;let oe;for(;!this.J&&this.C<S.length;)if(oe=$o(this,S),oe==Cn){Q==4&&(this.s=4,te(14),o=!1),Je(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==Bi){this.s=4,te(15),Je(this.i,this.l,S,"[Invalid Chunk]"),o=!1;break}else Je(this.i,this.l,oe,null),Rn(this,oe);if(Hi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||S.length!=0||this.h.h||(this.s=1,te(16),o=!1),this.o=this.o&&o,!o)Je(this.i,this.l,S,"[Invalid Chunked Response]"),Re(this),ut(this);else if(0<S.length&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.ba&&!Y.M&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Fn(Y),Y.M=!0,te(11))}}else Je(this.i,this.l,S,null),Rn(this,S);Q==4&&Re(this),this.o&&!this.J&&(Q==4?mr(this.j,this):(this.o=!1,Mt(this)))}else sa(this.g),o==400&&0<S.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),Re(this),ut(this)}}}catch{}finally{}};function Hi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function $o(t,r){var o=t.C,c=r.indexOf(`
`,o);return c==-1?Cn:(o=Number(r.substring(o,c)),isNaN(o)?Bi:(c+=1,c+o>r.length?Cn:(r=r.slice(c,c+o),t.C=c+o,r)))}Ae.prototype.cancel=function(){this.J=!0,Re(this)};function Mt(t){t.S=Date.now()+t.I,zi(t,t.I)}function zi(t,r){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ht(P(t.ba,t),r)}function Dn(t){t.B&&(w.clearTimeout(t.B),t.B=null)}Ae.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Vo(this.i,this.A),this.L!=2&&(ct(),te(17)),Re(this),this.s=2,ut(this)):zi(this,this.S-t)};function ut(t){t.j.G==0||t.J||mr(t.j,t)}function Re(t){Dn(t);var r=t.M;r&&typeof r.ma=="function"&&r.ma(),t.M=null,Mi(t.U),t.g&&(r=t.g,t.g=null,r.abort(),r.ma())}function Rn(t,r){try{var o=t.j;if(o.G!=0&&(o.g==t||On(o.h,t))){if(!t.K&&On(o.h,t)&&o.G==3){try{var c=o.Da.g.parse(r)}catch{c=null}if(Array.isArray(c)&&c.length==3){var y=c;if(y[0]==0){e:if(!o.u){if(o.g)if(o.g.F+3e3<t.F)Ht(o),Bt(o);else break e;Un(o),te(18)}}else o.za=y[1],0<o.za-o.T&&37500>y[2]&&o.F&&o.v==0&&!o.C&&(o.C=ht(P(o.Za,o),6e3));if(1>=Wi(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else Me(o,11)}else if((t.K||o.g==t)&&Ht(o),!j(r))for(y=o.Da.g.parse(r),r=0;r<y.length;r++){let D=y[r];if(o.T=D[0],D=D[1],o.G==2)if(D[0]=="c"){o.K=D[1],o.ia=D[2];const Y=D[3];Y!=null&&(o.la=Y,o.j.info("VER="+o.la));const Q=D[4];Q!=null&&(o.Aa=Q,o.j.info("SVER="+o.Aa));const Qe=D[5];Qe!=null&&typeof Qe=="number"&&0<Qe&&(c=1.5*Qe,o.L=c,o.j.info("backChannelRequestTimeoutMs_="+c)),c=o;const oe=t.g;if(oe){const zt=oe.g?oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zt){var v=c.h;v.g||zt.indexOf("spdy")==-1&&zt.indexOf("quic")==-1&&zt.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Mn(v,v.h),v.h=null))}if(c.D){const Vn=oe.g?oe.g.getResponseHeader("X-HTTP-Session-Id"):null;Vn&&(c.ya=Vn,B(c.I,c.D,Vn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-t.F,o.j.info("Handshake RTT: "+o.R+"ms")),c=o;var S=t;if(c.qa=_r(c,c.J?c.ia:null,c.W),S.K){Ki(c.h,S);var V=S,K=c.L;K&&(V.I=K),V.B&&(Dn(V),Mt(V)),c.g=S}else pr(c);0<o.i.length&&$t(o)}else D[0]!="stop"&&D[0]!="close"||Me(o,7);else o.G==3&&(D[0]=="stop"||D[0]=="close"?D[0]=="stop"?Me(o,7):xn(o):D[0]!="noop"&&o.l&&o.l.ta(D),o.v=0)}}ct(4)}catch{}}var Ho=class{constructor(t,r){this.g=t,this.map=r}};function Gi(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wi(t){return t.h?1:t.g?t.g.size:0}function On(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function Mn(t,r){t.g?t.g.add(r):t.h=r}function Ki(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}Gi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ji(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const o of t.g.values())r=r.concat(o.D);return r}return E(t.i)}function zo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var r=[],o=t.length,c=0;c<o;c++)r.push(t[c]);return r}r=[],o=0;for(c in t)r[o++]=t[c];return r}function Go(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var r=[];t=t.length;for(var o=0;o<t;o++)r.push(o);return r}r=[],o=0;for(const c in t)r[o++]=c;return r}}}function Xi(t,r){if(t.forEach&&typeof t.forEach=="function")t.forEach(r,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,r,void 0);else for(var o=Go(t),c=zo(t),y=c.length,v=0;v<y;v++)r.call(void 0,c[v],o&&o[v],t)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qo(t,r){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var c=t[o].indexOf("="),y=null;if(0<=c){var v=t[o].substring(0,c);y=t[o].substring(c+1)}else v=t[o];r(v,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Lt(this,t.j),this.o=t.o,this.g=t.g,xt(this,t.s),this.l=t.l;var r=t.i,o=new pt;o.i=r.i,r.g&&(o.g=new Map(r.g),o.h=r.h),Qi(this,o),this.m=t.m}else t&&(r=String(t).match(Yi))?(this.h=!1,Lt(this,r[1]||"",!0),this.o=dt(r[2]||""),this.g=dt(r[3]||"",!0),xt(this,r[4]),this.l=dt(r[5]||"",!0),Qi(this,r[6]||"",!0),this.m=dt(r[7]||"")):(this.h=!1,this.i=new pt(null,this.h))}Oe.prototype.toString=function(){var t=[],r=this.j;r&&t.push(ft(r,Zi,!0),":");var o=this.g;return(o||r=="file")&&(t.push("//"),(r=this.o)&&t.push(ft(r,Zi,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&t.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(ft(o,o.charAt(0)=="/"?Jo:Ko,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",ft(o,Yo)),t.join("")};function we(t){return new Oe(t)}function Lt(t,r,o){t.j=o?dt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function xt(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.s=r}else t.s=null}function Qi(t,r,o){r instanceof pt?(t.i=r,Qo(t.i,t.h)):(o||(r=ft(r,Xo)),t.i=new pt(r,t.h))}function B(t,r,o){t.i.set(r,o)}function Ut(t){return B(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function dt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ft(t,r,o){return typeof t=="string"?(t=encodeURI(t).replace(r,Wo),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Wo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zi=/[#\/\?@]/g,Ko=/[#\?:]/g,Jo=/[#\?]/g,Xo=/[#\?@]/g,Yo=/#/g;function pt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function Ne(t){t.g||(t.g=new Map,t.h=0,t.i&&qo(t.i,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}n=pt.prototype,n.add=function(t,r){Ne(this),this.i=null,t=Xe(this,t);var o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(r),this.h+=1,this};function er(t,r){Ne(t),r=Xe(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function tr(t,r){return Ne(t),r=Xe(t,r),t.g.has(r)}n.forEach=function(t,r){Ne(this),this.g.forEach(function(o,c){o.forEach(function(y){t.call(r,y,c,this)},this)},this)},n.na=function(){Ne(this);const t=Array.from(this.g.values()),r=Array.from(this.g.keys()),o=[];for(let c=0;c<r.length;c++){const y=t[c];for(let v=0;v<y.length;v++)o.push(r[c])}return o},n.V=function(t){Ne(this);let r=[];if(typeof t=="string")tr(this,t)&&(r=r.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let o=0;o<t.length;o++)r=r.concat(t[o])}return r},n.set=function(t,r){return Ne(this),this.i=null,t=Xe(this,t),tr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},n.get=function(t,r){return t?(t=this.V(t),0<t.length?String(t[0]):r):r};function nr(t,r,o){er(t,r),0<o.length&&(t.i=null,t.g.set(Xe(t,r),E(o)),t.h+=o.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(var o=0;o<r.length;o++){var c=r[o];const v=encodeURIComponent(String(c)),S=this.V(c);for(c=0;c<S.length;c++){var y=v;S[c]!==""&&(y+="="+encodeURIComponent(String(S[c]))),t.push(y)}}return this.i=t.join("&")};function Xe(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function Qo(t,r){r&&!t.j&&(Ne(t),t.i=null,t.g.forEach(function(o,c){var y=c.toLowerCase();c!=y&&(er(this,c),nr(this,y,o))},t)),t.j=r}function Zo(t,r){const o=new lt;if(w.Image){const c=new Image;c.onload=H(ke,o,"TestLoadImage: loaded",!0,r,c),c.onerror=H(ke,o,"TestLoadImage: error",!1,r,c),c.onabort=H(ke,o,"TestLoadImage: abort",!1,r,c),c.ontimeout=H(ke,o,"TestLoadImage: timeout",!1,r,c),w.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else r(!1)}function ea(t,r){const o=new lt,c=new AbortController,y=setTimeout(()=>{c.abort(),ke(o,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:c.signal}).then(v=>{clearTimeout(y),v.ok?ke(o,"TestPingServer: ok",!0,r):ke(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(y),ke(o,"TestPingServer: error",!1,r)})}function ke(t,r,o,c,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),c(o)}catch{}}function ta(){this.g=new Lo}function na(t,r,o){const c=o||"";try{Xi(t,function(y,v){let S=y;b(y)&&(S=In(y)),r.push(c+v+"="+encodeURIComponent(S))})}catch(y){throw r.push(c+"type="+encodeURIComponent("_badmap")),y}}function Ft(t){this.l=t.Ub||null,this.j=t.eb||!1}N(Ft,Sn),Ft.prototype.g=function(){return new Vt(this.l,this.j)},Ft.prototype.i=function(t){return function(){return t}}({});function Vt(t,r){X.call(this),this.D=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Vt,X),n=Vt.prototype,n.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=r,this.readyState=1,mt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(r.body=t),(this.D||w).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mt(this)),this.g&&(this.readyState=3,mt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ir(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ir(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?gt(this):mt(this),this.readyState==3&&ir(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,gt(this))},n.Qa=function(t){this.g&&(this.response=t,gt(this))},n.ga=function(){this.g&&gt(this)};function gt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,mt(t)}n.setRequestHeader=function(t,r){this.u.append(t,r)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=r.next();return t.join(`\r
`)};function mt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function rr(t){let r="";return $(t,function(o,c){r+=c,r+=":",r+=o,r+=`\r
`}),r}function Ln(t,r,o){e:{for(c in o){var c=!1;break e}c=!0}c||(o=rr(o),typeof t=="string"?o!=null&&encodeURIComponent(String(o)):B(t,r,o))}function z(t){X.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(z,X);var ia=/^https?$/i,ra=["POST","PUT"];n=z.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,r,o,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Li(this.o):Li(kn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(v){sr(this,v);return}if(t=o||"",o=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var y in c)o.set(y,c[y]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const v of c.keys())o.set(v,c.get(v));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(o.keys()).find(v=>v.toLowerCase()=="content-type"),y=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(ra,r,void 0))||c||y||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,S]of o)this.g.setRequestHeader(v,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cr(this),this.u=!0,this.g.send(t),this.u=!1}catch(v){sr(this,v)}};function sr(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.m=5,or(t),jt(t)}function or(t){t.A||(t.A=!0,ee(t,"complete"),ee(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,ee(this,"complete"),ee(this,"abort"),jt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ar(this):this.bb())},n.bb=function(){ar(this)};function ar(t){if(t.h&&typeof d<"u"&&(!t.v[1]||_e(t)!=4||t.Z()!=2)){if(t.u&&_e(t)==4)Di(t.Ea,0,t);else if(ee(t,"readystatechange"),_e(t)==4){t.h=!1;try{const S=t.Z();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var o;if(!(o=r)){var c;if(c=S===0){var y=String(t.D).match(Yi)[1]||null;!y&&w.self&&w.self.location&&(y=w.self.location.protocol.slice(0,-1)),c=!ia.test(y?y.toLowerCase():"")}o=c}if(o)ee(t,"complete"),ee(t,"success");else{t.m=6;try{var v=2<_e(t)?t.g.statusText:""}catch{v=""}t.l=v+" ["+t.Z()+"]",or(t)}}finally{jt(t)}}}}function jt(t,r){if(t.g){cr(t);const o=t.g,c=t.v[0]?()=>{}:null;t.g=null,t.v=null,r||ee(t,"ready");try{o.onreadystatechange=c}catch{}}}function cr(t){t.I&&(w.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function _e(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),Mo(r)}};function hr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function sa(t){const r={};t=(t.g&&2<=_e(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(j(t[c]))continue;var o=m(t[c]);const y=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const v=r[y]||[];r[y]=v,v.push(o)}g(r,function(c){return c.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yt(t,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||r}function lr(t){this.Aa=0,this.i=[],this.j=new lt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yt("baseRetryDelayMs",5e3,t),this.cb=yt("retryDelaySeedMs",1e4,t),this.Wa=yt("forwardChannelMaxRetries",2,t),this.wa=yt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(t&&t.concurrentRequestLimit),this.Da=new ta,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=lr.prototype,n.la=8,n.G=1,n.connect=function(t,r,o,c){te(0),this.W=t,this.H=r||{},o&&c!==void 0&&(this.H.OSID=o,this.H.OAID=c),this.F=this.X,this.I=_r(this,null,this.W),$t(this)};function xn(t){if(ur(t),t.G==3){var r=t.U++,o=we(t.I);if(B(o,"SID",t.K),B(o,"RID",r),B(o,"TYPE","terminate"),wt(t,o),r=new Ae(t,t.j,r),r.L=2,r.v=Ut(we(o)),o=!1,w.navigator&&w.navigator.sendBeacon)try{o=w.navigator.sendBeacon(r.v.toString(),"")}catch{}!o&&w.Image&&(new Image().src=r.v,o=!0),o||(r.g=vr(r.j,null),r.g.ea(r.v)),r.F=Date.now(),Mt(r)}wr(t)}function Bt(t){t.g&&(Fn(t),t.g.cancel(),t.g=null)}function ur(t){Bt(t),t.u&&(w.clearTimeout(t.u),t.u=null),Ht(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function $t(t){if(!qi(t.h)&&!t.s){t.s=!0;var r=t.Ga;it||Ai(),rt||(it(),rt=!0),pn.add(r,t),t.B=0}}function oa(t,r){return Wi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=r.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=ht(P(t.Ga,t,r),yr(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new Ae(this,this.j,t);let v=this.o;if(this.S&&(v?(v=l(v),p(v,this.S)):v=this.S),this.m!==null||this.O||(y.H=v,v=null),this.P)e:{for(var r=0,o=0;o<this.i.length;o++){t:{var c=this.i[o];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(r+=c,4096<r){r=o;break e}if(r===4096||o===this.i.length-1){r=o+1;break e}}r=1e3}else r=1e3;r=fr(this,y,r),o=we(this.I),B(o,"RID",t),B(o,"CVER",22),this.D&&B(o,"X-HTTP-Session-Id",this.D),wt(this,o),v&&(this.O?r="headers="+encodeURIComponent(String(rr(v)))+"&"+r:this.m&&Ln(o,this.m,v)),Mn(this.h,y),this.Ua&&B(o,"TYPE","init"),this.P?(B(o,"$req",r),B(o,"SID","null"),y.T=!0,Pn(y,o,null)):Pn(y,o,r),this.G=2}}else this.G==3&&(t?dr(this,t):this.i.length==0||qi(this.h)||dr(this))};function dr(t,r){var o;r?o=r.l:o=t.U++;const c=we(t.I);B(c,"SID",t.K),B(c,"RID",o),B(c,"AID",t.T),wt(t,c),t.m&&t.o&&Ln(c,t.m,t.o),o=new Ae(t,t.j,o,t.B+1),t.m===null&&(o.H=t.o),r&&(t.i=r.D.concat(t.i)),r=fr(t,o,1e3),o.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Mn(t.h,o),Pn(o,c,r)}function wt(t,r){t.H&&$(t.H,function(o,c){B(r,c,o)}),t.l&&Xi({},function(o,c){B(r,c,o)})}function fr(t,r,o){o=Math.min(t.i.length,o);var c=t.l?P(t.l.Na,t.l,t):null;e:{var y=t.i;let v=-1;for(;;){const S=["count="+o];v==-1?0<o?(v=y[0].g,S.push("ofs="+v)):v=0:S.push("ofs="+v);let V=!0;for(let K=0;K<o;K++){let D=y[K].g;const Y=y[K].map;if(D-=v,0>D)v=Math.max(0,y[K].g-100),V=!1;else try{na(Y,S,"req"+D+"_")}catch{c&&c(Y)}}if(V){c=S.join("&");break e}}}return t=t.i.splice(0,o),r.D=t,c}function pr(t){if(!t.g&&!t.u){t.Y=1;var r=t.Fa;it||Ai(),rt||(it(),rt=!0),pn.add(r,t),t.v=0}}function Un(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=ht(P(t.Fa,t),yr(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,gr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ht(P(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),Bt(this),gr(this))};function Fn(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function gr(t){t.g=new Ae(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var r=we(t.qa);B(r,"RID","rpc"),B(r,"SID",t.K),B(r,"AID",t.T),B(r,"CI",t.F?"0":"1"),!t.F&&t.ja&&B(r,"TO",t.ja),B(r,"TYPE","xmlhttp"),wt(t,r),t.m&&t.o&&Ln(r,t.m,t.o),t.L&&(t.g.I=t.L);var o=t.g;t=t.ia,o.L=1,o.v=Ut(we(r)),o.m=null,o.P=!0,$i(o,t)}n.Za=function(){this.C!=null&&(this.C=null,Bt(this),Un(this),te(19))};function Ht(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function mr(t,r){var o=null;if(t.g==r){Ht(t),Fn(t),t.g=null;var c=2}else if(On(t.h,r))o=r.D,Ki(t.h,r),c=1;else return;if(t.G!=0){if(r.o)if(c==1){o=r.m?r.m.length:0,r=Date.now()-r.F;var y=t.B;c=An(),ee(c,new Vi(c,o)),$t(t)}else pr(t);else if(y=r.s,y==3||y==0&&0<r.X||!(c==1&&oa(t,r)||c==2&&Un(t)))switch(o&&0<o.length&&(r=t.h,r.i=r.i.concat(o)),y){case 1:Me(t,5);break;case 4:Me(t,10);break;case 3:Me(t,6);break;default:Me(t,2)}}}function yr(t,r){let o=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(o*=2),o*r}function Me(t,r){if(t.j.info("Error code "+r),r==2){var o=P(t.fb,t),c=t.Xa;const y=!c;c=new Oe(c||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Lt(c,"https"),Ut(c),y?Zo(c.toString(),o):ea(c.toString(),o)}else te(2);t.G=0,t.l&&t.l.sa(r),wr(t),ur(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function wr(t){if(t.G=0,t.ka=[],t.l){const r=Ji(t.h);(r.length!=0||t.i.length!=0)&&(A(t.ka,r),A(t.ka,t.i),t.h.i.length=0,E(t.i),t.i.length=0),t.l.ra()}}function _r(t,r,o){var c=o instanceof Oe?we(o):new Oe(o);if(c.g!="")r&&(c.g=r+"."+c.g),xt(c,c.s);else{var y=w.location;c=y.protocol,r=r?r+"."+y.hostname:y.hostname,y=+y.port;var v=new Oe(null);c&&Lt(v,c),r&&(v.g=r),y&&xt(v,y),o&&(v.l=o),c=v}return o=t.D,r=t.ya,o&&r&&B(c,o,r),B(c,"VER",t.la),wt(t,c),c}function vr(t,r,o){if(r&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Ca&&!t.pa?new z(new Ft({eb:o})):new z(t.pa),r.Ha(t.J),r}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function br(){}n=br.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function re(t,r){X.call(this),this.g=new lr(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(t?t["X-WebChannel-Client-Profile"]=r.va:t={"X-WebChannel-Client-Profile":r.va}),this.g.S=t,(t=r&&r.Sb)&&!j(t)&&(this.g.m=t),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!j(r)&&(this.g.D=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new Ye(this)}N(re,X),re.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},re.prototype.close=function(){xn(this.g)},re.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.u&&(o={},o.__data__=In(t),t=o);r.i.push(new Ho(r.Ya++,t)),r.G==3&&$t(r)},re.prototype.N=function(){this.g.l=null,delete this.j,xn(this.g),delete this.g,re.aa.N.call(this)};function Ir(t){En.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const o in r){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}N(Ir,En);function Sr(){Tn.call(this),this.status=1}N(Sr,Tn);function Ye(t){this.g=t}N(Ye,br),Ye.prototype.ua=function(){ee(this.g,"a")},Ye.prototype.ta=function(t){ee(this.g,new Ir(t))},Ye.prototype.sa=function(t){ee(this.g,new Sr)},Ye.prototype.ra=function(){ee(this.g,"b")},re.prototype.send=re.prototype.o,re.prototype.open=re.prototype.m,re.prototype.close=re.prototype.close,Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Bo.COMPLETE="complete",xo.EventType=at,at.OPEN="a",at.CLOSE="b",at.ERROR="c",at.MESSAGE="d",X.prototype.listen=X.prototype.K,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha}).apply(typeof qt<"u"?qt:typeof self<"u"?self:typeof window<"u"?window:{});const qr="@firebase/firestore",Wr="4.9.1";/**
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
 */let un="12.2.0";/**
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
 */const rn=new ui("@firebase/firestore");function ce(n,...e){if(rn.logLevel<=F.DEBUG){const i=e.map(qs);rn.debug(`Firestore (${un}): ${n}`,...i)}}function Gs(n,...e){if(rn.logLevel<=F.ERROR){const i=e.map(qs);rn.error(`Firestore (${un}): ${n}`,...i)}}function qs(n){if(typeof n=="string")return n;try{/**
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
 */function sn(n,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,Ws(n,s,i)}function Ws(n,e,i){let s=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{s+=" CONTEXT: "+JSON.stringify(i)}catch{s+=" CONTEXT: "+i}throw Gs(s),new Error(s)}function bt(n,e,i,s){let a="Unexpected state";typeof i=="string"?a=i:s=i,n||Ws(e,a,s)}/**
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
 */const M={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class L extends Ee{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Eh{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Th{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(ie.UNAUTHENTICATED))}shutdown(){}}class Ah{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){bt(this.o===void 0,42304);let s=this.i;const a=I=>this.i!==s?(s=this.i,i(I)):Promise.resolve();let h=new It;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new It,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const I=h;e.enqueueRetryable(async()=>{await I.promise,await a(this.currentUser)})},w=I=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(I=>w(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?w(I):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new It)}},0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(bt(typeof s.accessToken=="string",31837,{l:s}),new Eh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return bt(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class Nh{constructor(e,i,s){this.P=e,this.T=i,this.I=s,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kh{constructor(e,i,s){this.P=e,this.T=i,this.I=s}getToken(){return Promise.resolve(new Nh(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ch{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){bt(this.o===void 0,3512);const s=h=>{h.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.m;return this.m=h.token,ce("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>s(h))};const a=h=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(h=>a(h)),setTimeout(()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?a(h):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(bt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Kr(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ph(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let s=0;s<n;s++)i[s]=Math.floor(256*Math.random());return i}/**
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
 */class Dh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Ph(40);for(let h=0;h<a.length;++h)s.length<20&&a[h]<i&&(s+=e.charAt(a[h]%62))}return s}}function De(n,e){return n<e?-1:n>e?1:0}function Rh(n,e){const i=Math.min(n.length,e.length);for(let s=0;s<i;s++){const a=n.charAt(s),h=e.charAt(s);if(a!==h)return Kn(a)===Kn(h)?De(a,h):Kn(a)?1:-1}return De(n.length,e.length)}const Oh=55296,Mh=57343;function Kn(n){const e=n.charCodeAt(0);return e>=Oh&&e<=Mh}/**
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
 */const Jr="__name__";class le{constructor(e,i,s){i===void 0?i=0:i>e.length&&sn(637,{offset:i,range:e.length}),s===void 0?s=e.length-i:s>e.length-i&&sn(1746,{length:s,range:e.length-i}),this.segments=e,this.offset=i,this.len=s}get length(){return this.len}isEqual(e){return le.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof le?e.forEach(s=>{i.push(s)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,s=this.limit();i<s;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const s=Math.min(e.length,i.length);for(let a=0;a<s;a++){const h=le.compareSegments(e.get(a),i.get(a));if(h!==0)return h}return De(e.length,i.length)}static compareSegments(e,i){const s=le.isNumericId(e),a=le.isNumericId(i);return s&&!a?-1:!s&&a?1:s&&a?le.extractNumericId(e).compare(le.extractNumericId(i)):Rh(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class ae extends le{construct(e,i,s){return new ae(e,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(M.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(a=>a.length>0))}return new ae(i)}static emptyPath(){return new ae([])}}const Lh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends le{construct(e,i,s){return new Ue(e,i,s)}static isValidIdentifier(e){return Lh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jr}static keyField(){return new Ue([Jr])}static fromServerFormat(e){const i=[];let s="",a=0;const h=()=>{if(s.length===0)throw new L(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let d=!1;for(;a<e.length;){const w=e[a];if(w==="\\"){if(a+1===e.length)throw new L(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const I=e[a+1];if(I!=="\\"&&I!=="."&&I!=="`")throw new L(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=I,a+=2}else w==="`"?(d=!d,a++):w!=="."||d?(s+=w,a++):(h(),a++)}if(h(),d)throw new L(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(i)}static emptyPath(){return new Ue([])}}/**
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
 */class Ve{constructor(e){this.path=e}static fromPath(e){return new Ve(ae.fromString(e))}static fromName(e){return new Ve(ae.fromString(e).popFirst(5))}static empty(){return new Ve(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return ae.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ve(new ae(e.slice()))}}function xh(n,e,i,s){if(e===!0&&s===!0)throw new L(M.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function Uh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}/**
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
 */function G(n,e){const i={typeString:n};return e&&(i.value=e),i}function kt(n,e){if(!Uh(n))throw new L(M.INVALID_ARGUMENT,"JSON must be an object");let i;for(const s in e)if(e[s]){const a=e[s].typeString,h="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){i=`JSON missing required field: '${s}'`;break}const d=n[s];if(a&&typeof d!==a){i=`JSON field '${s}' must be a ${a}.`;break}if(h!==void 0&&d!==h.value){i=`Expected '${s}' field to equal '${h.value}'`;break}}if(i)throw new L(M.INVALID_ARGUMENT,i);return!0}/**
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
 */const Xr=-62135596800,Yr=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),s=Math.floor((e-1e3*i)*Yr);return new ue(i,s)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Xr)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yr}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kt(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:G("string",ue._jsonSchemaVersion),seconds:G("number"),nanoseconds:G("number")};function Fh(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Vh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(a){try{return atob(a)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new Vh("Invalid base64 string: "+h):h}}(e);return new He(i)}static fromUint8Array(e){const i=function(a){let h="";for(let d=0;d<a.length;++d)h+=String.fromCharCode(a[d]);return h}(e);return new He(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let a=0;a<i.length;a++)s[a]=i.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Qr="(default)";class on{constructor(e,i){this.projectId=e,this.database=i||Qr}static empty(){return new on("","")}get isDefaultDatabase(){return this.database===Qr}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class jh{constructor(e,i=null,s=[],a=[],h=null,d="F",w=null,I=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=a,this.limit=h,this.limitType=d,this.startAt=w,this.endAt=I,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Bh(n){return new jh(n)}/**
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
 */var Zr,C;(C=Zr||(Zr={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $h=41943040;/**
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
 */const Hh=1048576;function Jn(){return typeof document<"u"?document:null}/**
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
 */class zh{constructor(e,i,s=1e3,a=1.5,h=6e4){this.Mi=e,this.timerId=i,this.d_=s,this.A_=a,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,i-s);a>0&&ce("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class mi{constructor(e,i,s,a,h){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=s,this.op=a,this.removalCallback=h,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,s,a,h){const d=Date.now()+s,w=new mi(e,i,d,a,h);return w.start(s),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var es,ts;(ts=es||(es={})).Ma="default",ts.Cache="cache";/**
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
 */const ns=new Map;/**
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
 */const qh="firestore.googleapis.com",is=!0;class rs{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qh,this.ssl=is}else this.host=e.host,this.ssl=e.ssl??is;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$h;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hh)throw new L(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wh{constructor(e,i,s,a){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rs(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Th;switch(s.type){case"firstParty":return new kh(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=ns.get(i);s&&(ce("ComponentProvider","Removing Datastore"),ns.delete(i),s.terminate())}(this),Promise.resolve()}}/**
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
 */class yi{constructor(e,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yi(this.firestore,e,this._query)}}class fe{constructor(e,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,s){if(kt(i,fe._jsonSchema))return new fe(e,s||null,new Ve(ae.fromString(i.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:G("string",fe._jsonSchemaVersion),referencePath:G("string")};class wi extends yi{constructor(e,i,s){super(e,i,Bh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new Ve(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}/**
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
 */const ss="AsyncQueue";class os{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zh(this,"async_queue_retry"),this._c=()=>{const s=Jn();s&&ce(ss,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const i=Jn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Jn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const i=new It;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Fh(e))throw e;ce(ss,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const i=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Gs("INTERNAL UNHANDLED ERROR: ",as(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=i,i}enqueueAfterDelay(e,i,s){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const a=mi.createAndSchedule(this,e,i,s,h=>this.hc(h));return this.tc.push(a),a}uc(){this.nc&&sn(47125,{Pc:as(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function as(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Kh extends Wh{constructor(e,i,s,a){super(e,i,s,a),this.type="firestore",this._queue=new os,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new os(e),this._firestoreClient=void 0,await e}}}/**
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
 */class be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new be(He.fromBase64String(e))}catch(i){throw new L(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new be(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kt(e,be._jsonSchema))return be.fromBase64String(e.bytes)}}be._jsonSchemaVersion="firestore/bytes/1.0",be._jsonSchema={type:G("string",be._jsonSchemaVersion),bytes:G("string")};/**
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
 */class Ks{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new L(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Be{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new L(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new L(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(e){if(kt(e,Be._jsonSchema))return new Be(e.latitude,e.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:G("string",Be._jsonSchemaVersion),latitude:G("number"),longitude:G("number")};/**
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
 */class $e{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let h=0;h<s.length;++h)if(s[h]!==a[h])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kt(e,$e._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new $e(e.vectorValues);throw new L(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$e._jsonSchemaVersion="firestore/vectorValue/1.0",$e._jsonSchema={type:G("string",$e._jsonSchemaVersion),vectorValues:G("object")};const Jh=new RegExp("[~\\*/\\[\\]]");function Xh(n,e,i){if(e.search(Jh)>=0)throw cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Ks(...e.split("."))._internalPath}catch{throw cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function cs(n,e,i,s,a){let h=`Function ${e}() called with invalid data`;h+=". ";let d="";return new L(M.INVALID_ARGUMENT,h+n+d)}/**
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
 */class Js{constructor(e,i,s,a,h){this._firestore=e,this._userDataWriter=i,this._key=s,this._document=a,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(Xs("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Yh extends Js{data(){return super.data()}}function Xs(n,e){return typeof e=="string"?Xh(n,e):e instanceof Ks?e._internalPath:e._delegate._internalPath}class Wt{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tt extends Js{constructor(e,i,s,a,h,d){super(e,i,s,a,d),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Yt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const s=this._document.data.field(Xs("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=tt._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}tt._jsonSchemaVersion="firestore/documentSnapshot/1.0",tt._jsonSchema={type:G("string",tt._jsonSchemaVersion),bundleSource:G("string","DocumentSnapshot"),bundleName:G("string"),bundle:G("string")};class Yt extends tt{data(e={}){return super.data(e)}}class St{constructor(e,i,s,a){this._firestore=e,this._userDataWriter=i,this._snapshot=a,this.metadata=new Wt(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(s=>{e.call(i,new Yt(this._firestore,this._userDataWriter,s.key,s,new Wt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new L(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(a,h){if(a._snapshot.oldDocs.isEmpty()){let d=0;return a._snapshot.docChanges.map(w=>{const I=new Yt(a._firestore,a._userDataWriter,w.doc.key,w.doc,new Wt(a._snapshot.mutatedKeys.has(w.doc.key),a._snapshot.fromCache),a.query.converter);return w.doc,{type:"added",doc:I,oldIndex:-1,newIndex:d++}})}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(w=>h||w.type!==3).map(w=>{const I=new Yt(a._firestore,a._userDataWriter,w.doc.key,w.doc,new Wt(a._snapshot.mutatedKeys.has(w.doc.key),a._snapshot.fromCache),a.query.converter);let b=-1,k=-1;return w.type!==0&&(b=d.indexOf(w.doc.key),d=d.delete(w.doc.key)),w.type!==1&&(d=d.add(w.doc),k=d.indexOf(w.doc.key)),{type:Qh(w.type),doc:I,oldIndex:b,newIndex:k}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=St._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],s=[],a=[];return this.docs.forEach(h=>{h._document!==null&&(i.push(h._document),s.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),a.push(h.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qh(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return sn(61501,{type:n})}}St._jsonSchemaVersion="firestore/querySnapshot/1.0",St._jsonSchema={type:G("string",St._jsonSchemaVersion),bundleSource:G("string","QuerySnapshot"),bundleName:G("string"),bundle:G("string")};(function(e,i=!0){(function(a){un=a})(hn),ge(new he("firestore",(s,{instanceIdentifier:a,options:h})=>{const d=s.getProvider("app").getImmediate(),w=new Kh(new Ah(s.getProvider("auth-internal")),new Ch(d,s.getProvider("app-check-internal")),function(b,k){if(!Object.prototype.hasOwnProperty.apply(b.options,["projectId"]))throw new L(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(b.options.projectId,k)}(d,a),d);return h={useFetchStreams:i,...h},w._setSettings(h),w},"PUBLIC").setMultipleInstances(!0)),se(qr,Wr,e),se(qr,Wr,"esm2020")})();const Ys="@firebase/installations",_i="0.6.19";/**
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
 */const Qs=1e4,Zs=`w:${_i}`,eo="FIS_v2",Zh="https://firebaseinstallations.googleapis.com/v1",el=60*60*1e3,tl="installations",nl="Installations";/**
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
 */const il={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ze=new qe(tl,nl,il);function to(n){return n instanceof Ee&&n.code.includes("request-failed")}/**
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
 */function no({projectId:n}){return`${Zh}/projects/${n}/installations`}function io(n){return{token:n.token,requestStatus:2,expiresIn:sl(n.expiresIn),creationTime:Date.now()}}async function ro(n,e){const s=(await e.json()).error;return ze.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function so({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function rl(n,{refreshToken:e}){const i=so(n);return i.append("Authorization",ol(e)),i}async function oo(n){const e=await n();return e.status>=500&&e.status<600?n():e}function sl(n){return Number(n.replace("s","000"))}function ol(n){return`${eo} ${n}`}/**
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
 */async function al({appConfig:n,heartbeatServiceProvider:e},{fid:i}){const s=no(n),a=so(n),h=e.getImmediate({optional:!0});if(h){const b=await h.getHeartbeatsHeader();b&&a.append("x-firebase-client",b)}const d={fid:i,authVersion:eo,appId:n.appId,sdkVersion:Zs},w={method:"POST",headers:a,body:JSON.stringify(d)},I=await oo(()=>fetch(s,w));if(I.ok){const b=await I.json();return{fid:b.fid||i,registrationStatus:2,refreshToken:b.refreshToken,authToken:io(b.authToken)}}else throw await ro("Create Installation",I)}/**
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
 */function ao(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function cl(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const hl=/^[cdef][\w-]{21}$/,li="";function ll(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const i=ul(n);return hl.test(i)?i:li}catch{return li}}function ul(n){return cl(n).substr(0,22)}/**
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
 */function dn(n){return`${n.appName}!${n.appId}`}/**
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
 */const co=new Map;function ho(n,e){const i=dn(n);lo(i,e),dl(i,e)}function lo(n,e){const i=co.get(n);if(i)for(const s of i)s(e)}function dl(n,e){const i=fl();i&&i.postMessage({key:n,fid:e}),pl()}let je=null;function fl(){return!je&&"BroadcastChannel"in self&&(je=new BroadcastChannel("[Firebase] FID Change"),je.onmessage=n=>{lo(n.data.key,n.data.fid)}),je}function pl(){co.size===0&&je&&(je.close(),je=null)}/**
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
 */const gl="firebase-installations-database",ml=1,Ge="firebase-installations-store";let Xn=null;function vi(){return Xn||(Xn=cn(gl,ml,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ge)}}})),Xn}async function an(n,e){const i=dn(n),a=(await vi()).transaction(Ge,"readwrite"),h=a.objectStore(Ge),d=await h.get(i);return await h.put(e,i),await a.done,(!d||d.fid!==e.fid)&&ho(n,e.fid),e}async function uo(n){const e=dn(n),s=(await vi()).transaction(Ge,"readwrite");await s.objectStore(Ge).delete(e),await s.done}async function fn(n,e){const i=dn(n),a=(await vi()).transaction(Ge,"readwrite"),h=a.objectStore(Ge),d=await h.get(i),w=e(d);return w===void 0?await h.delete(i):await h.put(w,i),await a.done,w&&(!d||d.fid!==w.fid)&&ho(n,w.fid),w}/**
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
 */async function bi(n){let e;const i=await fn(n.appConfig,s=>{const a=yl(s),h=wl(n,a);return e=h.registrationPromise,h.installationEntry});return i.fid===li?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function yl(n){const e=n||{fid:ll(),registrationStatus:0};return fo(e)}function wl(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ze.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=_l(n,i);return{installationEntry:i,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vl(n)}:{installationEntry:e}}async function _l(n,e){try{const i=await al(n,e);return an(n.appConfig,i)}catch(i){throw to(i)&&i.customData.serverCode===409?await uo(n.appConfig):await an(n.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function vl(n){let e=await hs(n.appConfig);for(;e.registrationStatus===1;)await ao(100),e=await hs(n.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await bi(n);return s||i}return e}function hs(n){return fn(n,e=>{if(!e)throw ze.create("installation-not-found");return fo(e)})}function fo(n){return bl(n)?{fid:n.fid,registrationStatus:0}:n}function bl(n){return n.registrationStatus===1&&n.registrationTime+Qs<Date.now()}/**
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
 */async function Il({appConfig:n,heartbeatServiceProvider:e},i){const s=Sl(n,i),a=rl(n,i),h=e.getImmediate({optional:!0});if(h){const b=await h.getHeartbeatsHeader();b&&a.append("x-firebase-client",b)}const d={installation:{sdkVersion:Zs,appId:n.appId}},w={method:"POST",headers:a,body:JSON.stringify(d)},I=await oo(()=>fetch(s,w));if(I.ok){const b=await I.json();return io(b)}else throw await ro("Generate Auth Token",I)}function Sl(n,{fid:e}){return`${no(n)}/${e}/authTokens:generate`}/**
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
 */async function Ii(n,e=!1){let i;const s=await fn(n.appConfig,h=>{if(!po(h))throw ze.create("not-registered");const d=h.authToken;if(!e&&Al(d))return h;if(d.requestStatus===1)return i=El(n,e),h;{if(!navigator.onLine)throw ze.create("app-offline");const w=kl(h);return i=Tl(n,w),w}});return i?await i:s.authToken}async function El(n,e){let i=await ls(n.appConfig);for(;i.authToken.requestStatus===1;)await ao(100),i=await ls(n.appConfig);const s=i.authToken;return s.requestStatus===0?Ii(n,e):s}function ls(n){return fn(n,e=>{if(!po(e))throw ze.create("not-registered");const i=e.authToken;return Cl(i)?{...e,authToken:{requestStatus:0}}:e})}async function Tl(n,e){try{const i=await Il(n,e),s={...e,authToken:i};return await an(n.appConfig,s),i}catch(i){if(to(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await uo(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await an(n.appConfig,s)}throw i}}function po(n){return n!==void 0&&n.registrationStatus===2}function Al(n){return n.requestStatus===2&&!Nl(n)}function Nl(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+el}function kl(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Cl(n){return n.requestStatus===1&&n.requestTime+Qs<Date.now()}/**
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
 */async function Pl(n){const e=n,{installationEntry:i,registrationPromise:s}=await bi(e);return s?s.catch(console.error):Ii(e).catch(console.error),i.fid}/**
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
 */async function Dl(n,e=!1){const i=n;return await Rl(i),(await Ii(i,e)).token}async function Rl(n){const{registrationPromise:e}=await bi(n);e&&await e}/**
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
 */function Ol(n){if(!n||!n.options)throw Yn("App Configuration");if(!n.name)throw Yn("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!n.options[i])throw Yn(i);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Yn(n){return ze.create("missing-app-config-values",{valueName:n})}/**
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
 */const go="installations",Ml="installations-internal",Ll=n=>{const e=n.getProvider("app").getImmediate(),i=Ol(e),s=fi(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xl=n=>{const e=n.getProvider("app").getImmediate(),i=fi(e,go).getImmediate();return{getId:()=>Pl(i),getToken:a=>Dl(i,a)}};function Ul(){ge(new he(go,Ll,"PUBLIC")),ge(new he(Ml,xl,"PRIVATE"))}Ul();se(Ys,_i);se(Ys,_i,"esm2020");/**
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
 */const Fl="/firebase-messaging-sw.js",Vl="/firebase-cloud-messaging-push-scope",mo="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",jl="https://fcmregistrations.googleapis.com/v1",yo="google.c.a.c_id",Bl="google.c.a.c_l",$l="google.c.a.ts",Hl="google.c.a.e",us=1e4;var ds;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ds||(ds={}));/**
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
 */function ve(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function zl(n){const e="=".repeat((4-n.length%4)%4),i=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(i),a=new Uint8Array(s.length);for(let h=0;h<s.length;++h)a[h]=s.charCodeAt(h);return a}/**
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
 */const Qn="fcm_token_details_db",Gl=5,fs="fcm_token_object_Store";async function ql(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(Qn))return null;let e=null;return(await cn(Qn,Gl,{upgrade:async(s,a,h,d)=>{if(a<2||!s.objectStoreNames.contains(fs))return;const w=d.objectStore(fs),I=await w.index("fcmSenderId").get(n);if(await w.clear(),!!I){if(a===2){const b=I;if(!b.auth||!b.p256dh||!b.endpoint)return;e={token:b.fcmToken,createTime:b.createTime??Date.now(),subscriptionOptions:{auth:b.auth,p256dh:b.p256dh,endpoint:b.endpoint,swScope:b.swScope,vapidKey:typeof b.vapidKey=="string"?b.vapidKey:ve(b.vapidKey)}}}else if(a===3){const b=I;e={token:b.fcmToken,createTime:b.createTime,subscriptionOptions:{auth:ve(b.auth),p256dh:ve(b.p256dh),endpoint:b.endpoint,swScope:b.swScope,vapidKey:ve(b.vapidKey)}}}else if(a===4){const b=I;e={token:b.fcmToken,createTime:b.createTime,subscriptionOptions:{auth:ve(b.auth),p256dh:ve(b.p256dh),endpoint:b.endpoint,swScope:b.swScope,vapidKey:ve(b.vapidKey)}}}}}})).close(),await Hn(Qn),await Hn("fcm_vapid_details_db"),await Hn("undefined"),Wl(e)?e:null}function Wl(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Kl="firebase-messaging-database",Jl=1,At="firebase-messaging-store";let Zn=null;function wo(){return Zn||(Zn=cn(Kl,Jl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(At)}}})),Zn}async function Xl(n){const e=_o(n),s=await(await wo()).transaction(At).objectStore(At).get(e);if(s)return s;{const a=await ql(n.appConfig.senderId);if(a)return await Si(n,a),a}}async function Si(n,e){const i=_o(n),a=(await wo()).transaction(At,"readwrite");return await a.objectStore(At).put(e,i),await a.done,e}function _o({appConfig:n}){return n.appId}/**
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
 */const Yl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Z=new qe("messaging","Messaging",Yl);/**
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
 */async function Ql(n,e){const i=await Ti(n),s=vo(e),a={method:"POST",headers:i,body:JSON.stringify(s)};let h;try{h=await(await fetch(Ei(n.appConfig),a)).json()}catch(d){throw Z.create("token-subscribe-failed",{errorInfo:d==null?void 0:d.toString()})}if(h.error){const d=h.error.message;throw Z.create("token-subscribe-failed",{errorInfo:d})}if(!h.token)throw Z.create("token-subscribe-no-token");return h.token}async function Zl(n,e){const i=await Ti(n),s=vo(e.subscriptionOptions),a={method:"PATCH",headers:i,body:JSON.stringify(s)};let h;try{h=await(await fetch(`${Ei(n.appConfig)}/${e.token}`,a)).json()}catch(d){throw Z.create("token-update-failed",{errorInfo:d==null?void 0:d.toString()})}if(h.error){const d=h.error.message;throw Z.create("token-update-failed",{errorInfo:d})}if(!h.token)throw Z.create("token-update-no-token");return h.token}async function eu(n,e){const s={method:"DELETE",headers:await Ti(n)};try{const h=await(await fetch(`${Ei(n.appConfig)}/${e}`,s)).json();if(h.error){const d=h.error.message;throw Z.create("token-unsubscribe-failed",{errorInfo:d})}}catch(a){throw Z.create("token-unsubscribe-failed",{errorInfo:a==null?void 0:a.toString()})}}function Ei({projectId:n}){return`${jl}/projects/${n}/registrations`}async function Ti({appConfig:n,installations:e}){const i=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${i}`})}function vo({p256dh:n,auth:e,endpoint:i,vapidKey:s}){const a={web:{endpoint:i,auth:e,p256dh:n}};return s!==mo&&(a.web.applicationPubKey=s),a}/**
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
 */const tu=7*24*60*60*1e3;async function nu(n){const e=await ru(n.swRegistration,n.vapidKey),i={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ve(e.getKey("auth")),p256dh:ve(e.getKey("p256dh"))},s=await Xl(n.firebaseDependencies);if(s){if(su(s.subscriptionOptions,i))return Date.now()>=s.createTime+tu?iu(n,{token:s.token,createTime:Date.now(),subscriptionOptions:i}):s.token;try{await eu(n.firebaseDependencies,s.token)}catch(a){console.warn(a)}return ps(n.firebaseDependencies,i)}else return ps(n.firebaseDependencies,i)}async function iu(n,e){try{const i=await Zl(n.firebaseDependencies,e),s={...e,token:i,createTime:Date.now()};return await Si(n.firebaseDependencies,s),i}catch(i){throw i}}async function ps(n,e){const s={token:await Ql(n,e),createTime:Date.now(),subscriptionOptions:e};return await Si(n,s),s.token}async function ru(n,e){const i=await n.pushManager.getSubscription();return i||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:zl(e)})}function su(n,e){const i=e.vapidKey===n.vapidKey,s=e.endpoint===n.endpoint,a=e.auth===n.auth,h=e.p256dh===n.p256dh;return i&&s&&a&&h}/**
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
 */function gs(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return ou(e,n),au(e,n),cu(e,n),e}function ou(n,e){if(!e.notification)return;n.notification={};const i=e.notification.title;i&&(n.notification.title=i);const s=e.notification.body;s&&(n.notification.body=s);const a=e.notification.image;a&&(n.notification.image=a);const h=e.notification.icon;h&&(n.notification.icon=h)}function au(n,e){e.data&&(n.data=e.data)}function cu(n,e){var a,h,d,w;if(!e.fcmOptions&&!((a=e.notification)!=null&&a.click_action))return;n.fcmOptions={};const i=((h=e.fcmOptions)==null?void 0:h.link)??((d=e.notification)==null?void 0:d.click_action);i&&(n.fcmOptions.link=i);const s=(w=e.fcmOptions)==null?void 0:w.analytics_label;s&&(n.fcmOptions.analyticsLabel=s)}/**
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
 */function hu(n){return typeof n=="object"&&!!n&&yo in n}/**
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
 */function lu(n){if(!n||!n.options)throw ei("App Configuration Object");if(!n.name)throw ei("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:i}=n;for(const s of e)if(!i[s])throw ei(s);return{appName:n.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function ei(n){return Z.create("missing-app-config-values",{valueName:n})}/**
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
 */class uu{constructor(e,i,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=lu(e);this.firebaseDependencies={app:e,appConfig:a,installations:i,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function du(n){try{n.swRegistration=await navigator.serviceWorker.register(Fl,{scope:Vl}),n.swRegistration.update().catch(()=>{}),await fu(n.swRegistration)}catch(e){throw Z.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function fu(n){return new Promise((e,i)=>{const s=setTimeout(()=>i(new Error(`Service worker not registered after ${us} ms`)),us),a=n.installing||n.waiting;n.active?(clearTimeout(s),e()):a?a.onstatechange=h=>{var d;((d=h.target)==null?void 0:d.state)==="activated"&&(a.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),i(new Error("No incoming service worker found.")))})}/**
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
 */async function pu(n,e){if(!e&&!n.swRegistration&&await du(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Z.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function gu(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=mo)}/**
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
 */async function bo(n,e){if(!navigator)throw Z.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Z.create("permission-blocked");return await gu(n,e==null?void 0:e.vapidKey),await pu(n,e==null?void 0:e.serviceWorkerRegistration),nu(n)}/**
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
 */async function mu(n,e,i){const s=yu(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:i[yo],message_name:i[Bl],message_time:i[$l],message_device_time:Math.floor(Date.now()/1e3)})}function yu(n){switch(n){case Tt.NOTIFICATION_CLICKED:return"notification_open";case Tt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function wu(n,e){const i=e.data;if(!i.isFirebaseMessaging)return;n.onMessageHandler&&i.messageType===Tt.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(gs(i)):n.onMessageHandler.next(gs(i)));const s=i.data;hu(s)&&s[Hl]==="1"&&await mu(n,i.messageType,s)}const ms="@firebase/messaging",ys="0.12.23";/**
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
 */const _u=n=>{const e=new uu(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",i=>wu(e,i)),e},vu=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:s=>bo(e,s)}};function bu(){ge(new he("messaging",_u,"PUBLIC")),ge(new he("messaging-internal",vu,"PRIVATE")),se(ms,ys),se(ms,ys,"esm2020")}/**
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
 */async function Iu(){try{await As()}catch{return!1}return typeof window<"u"&&Ts()&&Ta()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Su(n,e){if(!navigator)throw Z.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function Eu(n=Cc()){return Iu().then(e=>{if(!e)throw Z.create("unsupported-browser")},e=>{throw Z.create("indexed-db-unsupported")}),fi(We(n),"messaging").getImmediate()}async function Tu(n,e){return n=We(n),bo(n,e)}function Au(n,e){return n=We(n),Su(n,e)}bu();const Nu={apiKey:"AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",authDomain:"digitalliberia-notification.firebaseapp.com",projectId:"digitalliberia-notification",storageBucket:"digitalliberia-notification.appspot.com",messagingSenderId:"537791418352",appId:"1:537791418352:web:378b48439b2c9bed6dd735"},ku=Ps(Nu),Io=Eu(ku),Cu="BEICu1bx8LKW5j7cag5tU9B2qfcejWi7QPm8a95jFODSIUNRiellygLGroK9NyWt-3WsTiUZscmS311gGXiXV7Q",So=async()=>{try{const n=await navigator.serviceWorker.register("/firebase-messaging-sw.js");if(console.log("Service Worker registered:",n),await Notification.requestPermission()==="granted"){console.log("Notification permission granted.");const i=await Tu(Io,{vapidKey:Cu,serviceWorkerRegistration:n});return i?(console.log("FCM Token:",i),localStorage.setItem("fcmToken",i),i):(console.log("No registration token available."),null)}else return console.log("Notification permission denied."),null}catch(n){return console.error("Error retrieving token:",n),null}};Au(Io,n=>{if(console.log("Message received in foreground:",n),n.notification){const{title:e,body:i}=n.notification;new Notification(e,{body:i})}});const Pu=[{label:"Home",to:"/",color:"bg-blue-500/80"},{label:"System",to:"/system",color:"bg-green-500/80"},{label:"Digital Liberia",to:"/digital-liberia",color:"bg-purple-500/80"},{label:"LibPay",to:"/libpay",color:"bg-yellow-500/80"},{label:"Liberian Post",to:"/liberian-post",color:"bg-pink-500/80"}],ti=["/logos/liberianpost.png","/logos/digital.png","/logos/libmusic.png","/logos/libconnectsit.png","/logos/libpaysit.png","/logos/seal of liberia.png","/logos/liberia.png"],Kt=[{id:"education",name:"Ministry of Education",description:"School management, student records, and educational resources",icon:"/logos/moe.png",path:"/moe/dashboard"},{id:"health",name:"Ministry of Health",description:"Health records, vaccination data, and medical services",icon:"/logos/moh.png",path:"/moh/dashboard"},{id:"finance",name:"Ministry of Finance",description:"Tax records, financial services, and economic data",icon:"/logos/mof.png",path:"/mof/dashboard"},{id:"justice",name:"Ministry of Justice",description:"Legal documents, court records, and law enforcement",icon:"/logos/moj.png",path:"/moj/dashboard"},{id:"transport",name:"Ministry of Transport",description:"Driver licenses, vehicle registration, and transport permits",icon:"/logos/mot.png",path:"/mot/dashboard"},{id:"foreign",name:"Ministry of Foreign Affairs",description:"Passport services and international relations",icon:"/logos/mofa.png",path:"/mofa/dashboard"},{id:"agriculture",name:"Ministry of Agriculture",description:"Farming permits, agricultural data, and food security",icon:"/logos/moa.png",path:"/moa/dashboard"},{id:"internal",name:"Ministry of Internal Affairs",description:"Citizen IDs, birth certificates, and local governance",icon:"/logos/moia.png",path:"/moia/dashboard"},{id:"lands",name:"Ministry of Mines and Energy",description:"Mining permits, energy resources, and mineral records",icon:"/logos/mol.png",path:"/mol/dashboard"},{id:"commerce",name:"Ministry of Commerce",description:"Business registration and trade licenses",icon:"/logos/moc.png",path:"/moc/dashboard"},{id:"labour",name:"Ministry of Labour",description:"Employment records and worker rights",icon:"/logos/moll.png",path:"/moll/dashboard"},{id:"youth",name:"Ministry of Youth & Sports",description:"Youth programs and sporting events",icon:"/logos/moy.png",path:"/moy/dashboard"},{id:"land-authority",name:"Liberia Land Authority",description:"Land deeds, property records, and land administration",icon:"/logos/lla.png",path:"/lla/dashboard"}],Du=[{id:"passport",name:"Passport"},{id:"birth-certificate",name:"Birth Certificate"},{id:"drivers-license",name:"Driver's License"},{id:"citizen-id",name:"Citizen ID"},{id:"business-registration",name:"Business Registration"},{id:"vehicle-registration",name:"Vehicle Registration"},{id:"land-deed",name:"Land Deed"},{id:"tax-services",name:"Tax Services"}],Ru=({onClose:n,onSuccess:e,service:i="Ministry of Education",onGuestAccess:s,ministryIcon:a})=>{const[h,d]=ne.useState(""),[w,I]=ne.useState(""),[b,k]=ne.useState(!1),[x,P]=ne.useState(null),[H,N]=ne.useState(!1),[E,A]=ne.useState(null),[R,j]=ne.useState(null),W=async $=>{var g,l;try{const u=localStorage.getItem("fcmToken")||await So(),p=await Tr.post("/gov-services/request",{dssn:$,service:i,fcmToken:u,requestData:{timestamp:new Date().toISOString(),service:i,origin:window.location.origin}});if(!p.data.success)throw new Error(p.data.error||"Failed to initiate challenge");return p.data}catch(u){throw console.error("Error requesting DSSN challenge:",u),new Error(((l=(g=u.response)==null?void 0:g.data)==null?void 0:l.error)||u.message||"Failed to initiate DSSN challenge")}},q=async $=>{var g,l;try{const u=await Tr.get(`/gov-services/status/${$}`);if(!u.data.success)throw new Error(u.data.error||"Failed to check challenge status");return u.data}catch(u){throw console.error("Error polling challenge status:",u),new Error(((l=(g=u.response)==null?void 0:g.data)==null?void 0:l.error)||u.message||"Failed to check approval status")}};ne.useEffect(()=>()=>{E&&clearInterval(E)},[E]);const me=async $=>{if($.preventDefault(),I(""),k(!0),j(null),!h.trim()){I("Please enter your DSSN"),k(!1);return}try{const g=await W(h);P(g.challengeId),N(!0),k(!1),g.pushNotification&&j({sent:g.pushNotification.sent,hasToken:g.pushNotification.hasToken,error:g.pushNotification.error});const l=setInterval(async()=>{try{const u=await q(g.challengeId);u.status==="approved"?(clearInterval(l),N(!1),e(u.govToken,g.challengeId)):u.status==="denied"&&(clearInterval(l),N(!1),I("Access was denied on your mobile device"))}catch(u){console.error("Error polling challenge status:",u),clearInterval(l),N(!1),I(u.message)}},3e3);A(l),setTimeout(()=>{H&&(clearInterval(l),N(!1),I("Request timed out. Please try again."))},5*60*1e3)}catch(g){I(g.message),k(!1)}};return T("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",children:U("div",{className:"bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl",children:[U("div",{className:"bg-blue-600 p-4 flex justify-between items-center",children:[U("h2",{className:"text-xl font-bold text-white",children:[i," - DSSN Verification"]}),T("button",{onClick:n,className:"text-white text-2xl hover:text-gray-200",disabled:H||b,children:"×"})]}),U("div",{className:"p-6",children:[T("div",{className:"flex justify-center mb-6",children:T("img",{src:a||"/logos/moe.png",alt:"Ministry Logo",className:"w-20 h-20 object-contain"})}),w&&T("div",{className:"mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm",children:w}),R&&!R.sent&&T("div",{className:"mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md text-sm",children:R.hasToken?`Push notification failed: ${R.error||"Unknown error"}`:"User doesn't have the mobile app installed. Please ask them to download it."}),H?U("div",{className:"text-center",children:[T("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),T("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Waiting for Mobile Approval"}),T("p",{className:"text-gray-600 mb-4",children:"Please check your mobile app to approve this verification request."}),(R==null?void 0:R.sent)&&T("p",{className:"text-sm text-green-600 mb-2",children:"✓ Push notification sent to mobile device"}),U("p",{className:"text-sm text-gray-500",children:["Challenge ID: ",x]}),T("p",{className:"text-xs text-gray-400 mt-2",children:"This request will timeout in 5 minutes"})]}):U("form",{onSubmit:me,children:[U("div",{className:"mb-4",children:[T("label",{className:"block text-gray-900 mb-2 font-medium",children:"Digital Social Security Number (DSSN)"}),T("input",{type:"text",value:h,onChange:$=>d($.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900",placeholder:"Enter your DSSN",required:!0,autoFocus:!0,disabled:b}),T("p",{className:"text-sm text-gray-500 mt-1",children:"Enter your DSSN and approve the request on your mobile app"})]}),T("button",{type:"submit",disabled:b,className:`w-full py-3 px-4 rounded-md text-white font-semibold ${b?"bg-blue-400":"bg-blue-600 hover:bg-blue-700"} transition-colors flex items-center justify-center`,children:b?U(la,{children:[U("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[T("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),T("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"Verify with DSSN"})]}),U("div",{className:"mt-6 text-center text-sm border-t border-gray-200 pt-4",children:[U("p",{className:"text-gray-600 mb-4",children:["Don't have the mobile app? ",T("a",{href:"#",className:"text-blue-600 hover:underline",onClick:$=>{$.preventDefault(),alert("The Digital Liberia mobile app is available on the App Store and Google Play Store")},children:"Download it here"})]}),U("div",{className:"mt-4 pt-4 border-t border-gray-200",children:[T("p",{className:"text-gray-500 text-sm mb-3",children:"Or continue as a guest with limited access"}),T("button",{onClick:s,className:"w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors font-medium",children:"I am a guest"})]})]})]})]})})},Mu=()=>{const{user:n}=aa(),e=ca(),i=ha(),[s,a]=ne.useState(0),[h,d]=ne.useState(!1),[w,I]=ne.useState(null),[b,k]=ne.useState(null);ne.useEffect(()=>{const E=setInterval(()=>{a(A=>(A+1)%ti.length)},600);return()=>clearInterval(E)},[]),ne.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(E=>{console.log("SW registered: ",E)}).catch(E=>{console.log("SW registration failed: : ",E)}),So()},[]);const x=async(E,A,R)=>{try{const j=JSON.parse(atob(E.split(".")[1])),q={education:"MOE",health:"MOH",finance:"MOF",justice:"MOJ",transport:"MOT",foreign:"MOFA",agriculture:"MOA",internal:"MOIA",lands:"MOL",commerce:"MOC",labour:"MOLL",youth:"MOY","land-authority":"LLA"}[R];localStorage.setItem(`${q}_USER_ID`,j.userId),localStorage.setItem(`${q}_USERNAME`,"DSSN User"),localStorage.setItem(`${q}_LOGGED_IN`,"true"),localStorage.setItem(`${q}_GOV_TOKEN`,E),localStorage.setItem(`${q}_DSSN`,j.dssn||""),localStorage.setItem(`${q}_CHALLENGE_ID`,A||""),localStorage.setItem(`${q}_LOGIN_TIMESTAMP`,new Date().toISOString()),d(!1);const me=Kt.find($=>$.id===R);me?i(me.path):console.error(`Ministry with ID ${R} not found`)}catch(j){console.error("Error processing DSSN login:",j),alert("Login failed. Please try again.")}},P=E=>{const R={education:"MOE",health:"MOH",finance:"MOF",justice:"MOJ",transport:"MOT",foreign:"MOFA",agriculture:"MOA",internal:"MOIA",lands:"MOL",commerce:"MOC",labour:"MOLL",youth:"MOY","land-authority":"LLA"}[E];localStorage.setItem(`${R}_USER_ID`,"guest_user"),localStorage.setItem(`${R}_USERNAME`,"Guest User"),localStorage.setItem(`${R}_LOGGED_IN`,"true"),localStorage.setItem(`${R}_IS_GUEST`,"true"),localStorage.setItem(`${R}_LOGIN_TIMESTAMP`,new Date().toISOString()),d(!1);const j=Kt.find(W=>W.id===E);j?i(j.path):console.error(`Ministry with ID ${E} not found`)},H=(E,A)=>{A.stopPropagation();const R=Kt.find(j=>j.id===E);R&&(I(E),k(R),d(!0))},N=(E,A)=>{A.stopPropagation(),alert(`${E.replace("-"," ")} service will be available soon`)};return U("div",{className:"relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden",children:[T("div",{className:"fixed inset-0 bg-blue-950 -z-50"}),T("div",{className:"fixed inset-0 flex items-center justify-center z-10 pointer-events-none",children:T("div",{className:"relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center",children:ti.map((E,A)=>U("div",{className:`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${A===s?"opacity-100":"opacity-0"}`,children:[T("img",{src:E,alt:`Logo ${A}`,className:"max-w-full max-h-full object-contain"}),T("div",{className:"absolute inset-0 bg-black/5"})]},A))})}),T("header",{className:"fixed top-0 left-0 w-full z-50",children:U("div",{className:"bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30",children:[T("div",{className:"flex items-center justify-center px-4 py-4 max-w-7xl mx-auto",children:T("nav",{className:"flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center",children:Pu.map(E=>T("div",{className:`flex-shrink-0 ${E.color} px-3 py-1 rounded-lg`,children:T(Er,{to:E.to,className:`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${e.pathname===E.to?"text-red-500":"text-white hover:text-blue-300"}`,children:E.label})},E.to))})}),T("div",{className:"w-full bg-gradient-to-b from-blue-950 to-transparent overflow-x-auto",children:T("div",{className:"flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3",children:ti.map((E,A)=>T("div",{className:`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${A===s?"scale-110 bg-white shadow-lg":"scale-100 bg-white/90"}`,style:{animation:A===s?"heartbeat 600ms ease-in-out":"none"},children:T("img",{src:E,alt:`Logo ${A}`,className:"w-12 h-12 md:w-16 md:h-16 object-contain"})},A))})})]})}),U("main",{className:"relative z-30 pt-48 pb-20 px-4 md:px-8",children:[T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:U("div",{className:"bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-600/10 backdrop-blur-lg rounded-xl border border-rose-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),U("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Social Security Number (DSSN)"}),U("div",{className:"text-white space-y-4",children:[T("p",{children:"In the Digital Liberia project, the DSSN (Digital Social Security Number) is a unique digital identifier assigned to every Liberian citizen or legal resident within the system."}),T(Er,{to:"/dssn",className:"inline-flex items-center bg-blue-500/80 backdrop-blur-sm rounded-lg px-3 py-1 ml-2 border border-blue-400/30 cursor-pointer hover:bg-blue-600/80 transition-colors",children:"(click here to verify a DSSN)"})]})]})]})}),T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:U("div",{className:"bg-gradient-to-br from-green-500/10 via-teal-500/10 to-emerald-600/10 backdrop-blur-lg rounded-xl border border-green-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),U("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Digital Liberia System"}),T("div",{className:"text-white",children:T("p",{children:"The National Database Management System (NDMS) is the secure, centralized, and intelligent national data backbone that powers Digital Liberia."})})]})]})}),T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:U("div",{className:"bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-purple-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),U("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Government Ministries"}),T("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Kt.map(E=>T("div",{onClick:A=>H(E.id,A),className:"cursor-pointer bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm relative z-20",children:U("div",{className:"flex items-center space-x-4",children:[T("img",{src:E.icon,alt:E.name,className:"w-12 h-12 object-contain"}),U("div",{children:[T("h3",{className:"font-bold text-lg",children:E.name}),T("p",{className:"text-sm text-white/80",children:E.description})]})]})},E.id))})]})]})}),T("section",{className:"w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12",children:U("div",{className:"bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-blue-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden",children:[T("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm"}),U("div",{className:"relative",children:[T("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2",children:"Quick Access Services"}),T("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Du.map(E=>T("button",{onClick:A=>N(E.id,A),className:"bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm text-left",children:T("h3",{className:"font-bold text-lg",children:E.name})},E.id))})]})]})})]}),T("footer",{className:"relative z-30 py-6 text-center text-white/60 text-sm",children:U("div",{className:"border-t border-blue-700/30 pt-6",children:["© ",new Date().getFullYear()," Digital Liberia. All rights reserved."]})}),h&&b&&T(Ru,{onClose:()=>d(!1),onSuccess:(E,A)=>x(E,A,w),onGuestAccess:()=>P(w),service:b.name,ministryIcon:b.icon}),T("style",{jsx:!0,global:!0,children:`
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
      `})]})};export{Mu as default};
