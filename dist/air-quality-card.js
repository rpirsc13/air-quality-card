function __decorate(e,s,o,r){var l=arguments.length,u=l<3?s:r===null?r=Object.getOwnPropertyDescriptor(s,o):r,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")u=Reflect.decorate(e,s,o,r);else for(var h=e.length-1;h>=0;h--)if(p=e[h])u=(l<3?p(u):l>3?p(s,o,u):p(s,o))||u;return l>3&&u&&Object.defineProperty(s,o,u),u}typeof SuppressedError==="function"?SuppressedError:function(e,s,o){var r=new Error(o);return r.name="SuppressedError",r.error=e,r.suppressed=s,r};const t$2=e=>(s,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,s)}):customElements.define(e,s)};const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let l=class n{constructor(e,s,r){if(this._$cssResult$=true,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const o=this.t;if(s&&void 0===e){const s=void 0!==o&&1===o.length;s&&(e=r.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(o,e))}return e}toString(){return this.cssText}};const r$4=e=>new l("string"==typeof e?e:e+"",void 0,o),i$3=(e,...s)=>{const r=1===e.length?e[0]:s.reduce((s,o,r)=>s+(e=>{if(true===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new l(r,e,o)},S$1=(o,r)=>{if(s)o.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of r){const r=document.createElement("style"),l=e.litNonce;void 0!==l&&r.setAttribute("nonce",l),r.textContent=s.cssText,o.appendChild(r)}},u=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let s="";for(const o of e.cssRules)s+=o.cssText;return r$4(s)})(e):e;const{is:p,defineProperty:h,getOwnPropertyDescriptor:m,getOwnPropertyNames:g,getOwnPropertySymbols:_,getPrototypeOf:f}=Object,v=globalThis,b=v.trustedTypes,$=b?b.emptyScript:"",w=v.reactiveElementPolyfillSupport,d$1=(e,s)=>e,A={toAttribute(e,s){switch(s){case Boolean:e=e?$:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,s){let o=e;switch(s){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},f$1=(e,s)=>!p(e,s),C={attribute:true,type:String,converter:A,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let E=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=C){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(e,s),!s.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,s);void 0!==r&&h(this.prototype,e,r)}}static getPropertyDescriptor(e,s,o){const{get:r,set:l}=m(this.prototype,e)??{get(){return this[s]},set(e){this[s]=e}};return{get:r,set(s){const u=r?.call(this);l?.call(this,s),this.requestUpdate(e,u,o)},configurable:true,enumerable:true}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const e=this.properties,s=[...g(e),..._(e)];for(const o of s)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const s=litPropertyMetadata.get(e);if(void 0!==s)for(const[e,o]of s)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const o=this._$Eu(e,s);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)s.unshift(u(e))}else void 0!==e&&s.push(u(e));return s}static _$Eu(e,s){const o=s.attribute;return false===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,o){this._$AK(e,o)}_$ET(e,s){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&true===o.reflect){const l=(void 0!==o.converter?.toAttribute?o.converter:A).toAttribute(s,o.type);this._$Em=e,null==l?this.removeAttribute(r):this.setAttribute(r,l),this._$Em=null}}_$AK(e,s){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),l="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:A;this._$Em=r;const u=l.fromAttribute(s,e.type);this[r]=u??this._$Ej?.get(r)??u,this._$Em=null}}requestUpdate(e,s,o,r=false,l){if(void 0!==e){const u=this.constructor;if(false===r&&(l=this[e]),o??=u.getPropertyOptions(e),!((o.hasChanged??f$1)(l,s)||o.useDefault&&o.reflect&&l===this._$Ej?.get(e)&&!this.hasAttribute(u._$Eu(e,o))))return;this.C(e,s,o)}false===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,s,{useDefault:o,reflect:r,wrapped:l},u){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,u??s??this[e]),true!==l||void 0!==u)||(this._$AL.has(e)||(this.hasUpdated||o||(s=void 0),this._$AL.set(e,s)),true===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=true;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,s]of this._$Ep)this[e]=s;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[s,o]of e){const{wrapped:e}=o,r=this[s];true!==e||this._$AL.has(s)||void 0===r||this.C(s,void 0,o,r)}}let e=false;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(s)):this._$EM()}catch(s){throw e=false,this._$EM(),s}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=false}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return true}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[d$1("elementProperties")]=new Map,E[d$1("finalized")]=new Map,w?.({ReactiveElement:E}),(v.reactiveElementVersions??=[]).push("2.1.2");const P={attribute:true,type:String,converter:A,reflect:false,hasChanged:f$1},r$2=(e=P,s,o)=>{const{kind:r,metadata:l}=o;let u=globalThis.litPropertyMetadata.get(l);if(void 0===u&&globalThis.litPropertyMetadata.set(l,u=new Map),"setter"===r&&((e=Object.create(e)).wrapped=true),u.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const l=s.get.call(this);s.set.call(this,o),this.requestUpdate(r,l,e,true,o)},init(s){return void 0!==s&&this.C(r,void 0,e,s),s}}}if("setter"===r){const{name:r}=o;return function(o){const l=this[r];s.call(this,o),this.requestUpdate(r,l,e,true,o)}}throw Error("Unsupported decorator location: "+r)};function n$1(e){return(s,o)=>"object"==typeof o?r$2(e,s,o):((e,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(s,o):void 0})(e,s,o)}function r$1(e){return n$1({...e,state:true,attribute:false})}const T=globalThis,i$1=e=>e,O=T.trustedTypes,F=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,B="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+q,j=`<${U}>`,W=document,c=()=>W.createComment(""),a=e=>null===e||"object"!=typeof e&&"function"!=typeof e,K=Array.isArray,d=e=>K(e)||"function"==typeof e?.[Symbol.iterator],G="[ \t\n\f\r]",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,X=/>/g,Y=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,se=/^(?:script|style|textarea|title)$/i,x=e=>(s,...o)=>({_$litType$:e,strings:s,values:o}),ie=x(1),oe=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),re=new WeakMap,ne=W.createTreeWalker(W,129);function V(e,s){if(!K(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==F?F.createHTML(s):s}const N=(e,s)=>{const o=e.length-1,r=[];let l,u=2===s?"<svg>":3===s?"<math>":"",p=Q;for(let s=0;s<o;s++){const o=e[s];let h,m,g=-1,_=0;for(;_<o.length&&(p.lastIndex=_,m=p.exec(o),null!==m);)_=p.lastIndex,p===Q?"!--"===m[1]?p=J:void 0!==m[1]?p=X:void 0!==m[2]?(se.test(m[2])&&(l=RegExp("</"+m[2],"g")),p=Y):void 0!==m[3]&&(p=Y):p===Y?">"===m[0]?(p=l??Q,g=-1):void 0===m[1]?g=-2:(g=p.lastIndex-m[2].length,h=m[1],p=void 0===m[3]?Y:'"'===m[3]?te:ee):p===te||p===ee?p=Y:p===J||p===X?p=Q:(p=Y,l=void 0);const f=p===Y&&e[s+1].startsWith("/>")?" ":"";u+=p===Q?o+j:g>=0?(r.push(h),o.slice(0,g)+B+o.slice(g)+q+f):o+q+(-2===g?s:f)}return[V(e,u+(e[o]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),r]};class S{constructor({strings:e,_$litType$:s},o){let r;this.parts=[];let l=0,u=0;const p=e.length-1,h=this.parts,[m,g]=N(e,s);if(this.el=S.createElement(m,o),ne.currentNode=this.el.content,2===s||3===s){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ne.nextNode())&&h.length<p;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(B)){const s=g[u++],o=r.getAttribute(e).split(q),p=/([.?@])?(.*)/.exec(s);h.push({type:1,index:l,name:p[2],strings:o,ctor:"."===p[1]?I:"?"===p[1]?L:"@"===p[1]?z:H}),r.removeAttribute(e)}else e.startsWith(q)&&(h.push({type:6,index:l}),r.removeAttribute(e));if(se.test(r.tagName)){const e=r.textContent.split(q),s=e.length-1;if(s>0){r.textContent=O?O.emptyScript:"";for(let o=0;o<s;o++)r.append(e[o],c()),ne.nextNode(),h.push({type:2,index:++l});r.append(e[s],c())}}}else if(8===r.nodeType)if(r.data===U)h.push({type:2,index:l});else{let e=-1;for(;-1!==(e=r.data.indexOf(q,e+1));)h.push({type:7,index:l}),e+=q.length-1}l++}}static createElement(e,s){const o=W.createElement("template");return o.innerHTML=e,o}}function M(e,s,o=e,r){if(s===oe)return s;let l=void 0!==r?o._$Co?.[r]:o._$Cl;const u=a(s)?void 0:s._$litDirective$;return l?.constructor!==u&&(l?._$AO?.(false),void 0===u?l=void 0:(l=new u(e),l._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=l:o._$Cl=l),void 0!==l&&(s=M(e,l._$AS(e,s.values),l,r)),s}class R{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:o}=this._$AD,r=(e?.creationScope??W).importNode(s,true);ne.currentNode=r;let l=ne.nextNode(),u=0,p=0,h=o[0];for(;void 0!==h;){if(u===h.index){let s;2===h.type?s=new k(l,l.nextSibling,this,e):1===h.type?s=new h.ctor(l,h.name,h.strings,this,e):6===h.type&&(s=new Z(l,this,e)),this._$AV.push(s),h=o[++p]}u!==h?.index&&(l=ne.nextNode(),u++)}return ne.currentNode=W,r}p(e){let s=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,s),s+=o.strings.length-2):o._$AI(e[s])),s++}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,o,r){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??true}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===e?.nodeType&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=M(this,e,s),a(e)?e===ae||null==e||""===e?(this._$AH!==ae&&this._$AR(),this._$AH=ae):e!==this._$AH&&e!==oe&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):d(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ae&&a(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=S.createElement(V(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(s);else{const e=new R(r,this),o=e.u(this.options);e.p(s),this.T(o),this._$AH=e}}_$AC(e){let s=re.get(e.strings);return void 0===s&&re.set(e.strings,s=new S(e)),s}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,r=0;for(const l of e)r===s.length?s.push(o=new k(this.O(c()),this.O(c()),this,this.options)):o=s[r],o._$AI(l),r++;r<s.length&&(this._$AR(o&&o._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);e!==this._$AB;){const s=i$1(e).nextSibling;i$1(e).remove(),e=s}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,o,r,l){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=l,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ae}_$AI(e,s=this,o,r){const l=this.strings;let u=false;if(void 0===l)e=M(this,e,s,0),u=!a(e)||e!==this._$AH&&e!==oe,u&&(this._$AH=e);else{const r=e;let p,h;for(e=l[0],p=0;p<l.length-1;p++)h=M(this,r[o+p],s,p),h===oe&&(h=this._$AH[p]),u||=!a(h)||h!==this._$AH[p],h===ae?e=ae:e!==ae&&(e+=(h??"")+l[p+1]),this._$AH[p]=h}u&&!r&&this.j(e)}j(e){e===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ae?void 0:e}}class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ae)}}class z extends H{constructor(e,s,o,r,l){super(e,s,o,r,l),this.type=5}_$AI(e,s=this){if((e=M(this,e,s,0)??ae)===oe)return;const o=this._$AH,r=e===ae&&o!==ae||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,l=e!==ae&&(o===ae||r);r&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Z{constructor(e,s,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const le=T.litHtmlPolyfillSupport;le?.(S,k),(T.litHtmlVersions??=[]).push("3.3.2");const D=(e,s,o)=>{const r=o?.renderBefore??s;let l=r._$litPart$;if(void 0===l){const e=o?.renderBefore??null;r._$litPart$=l=new k(s.insertBefore(c(),e),e,void 0,o??{})}return l._$AI(e),l};const ce=globalThis;class i extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=D(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false)}render(){return oe}}i._$litElement$=true,i["finalized"]=true,ce.litElementHydrateSupport?.({LitElement:i});const de=ce.litElementPolyfillSupport;de?.({LitElement:i});(ce.litElementVersions??=[]).push("4.2.2");const ue={state:{1:"Too Low",2:"Acceptable Low",3:"Ideal",4:"Ideal",5:"Acceptable High",6:"Too High"},quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},sensor:{temperature:"Temperature",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinity",cya:"Cyanuric Acid",calcium:"Calcium",phosphate:"Phosphate",alkalinity:"Alkalinity",free_chlorine:"Free Chlorine",total_chlorine:"Total Chlorine",pressure:"Filter Pressure",specific_gravity:"Specific Gravity",magnesium:"Magnesium",water_level:"Water Level",flow_rate:"Flow Rate",uv_radiation:"UV Radiation",product_volume:"Product Volume",product_weight:"Product Weight",ec:"Electrical Conductivity",bromine:"Bromine",chlorinator:"Chlorinator",pump_speed:"Pump Speed",light_brightness:"Light Brightness",heat_pump_setpoint:"Heat Pump Setpoint"},time:{seconds:"just now",minutes:"{minutes} minute ago",hours:"{hours} hour ago",days:"{days} day ago"},time_plural:{seconds:"just now",minutes:"{minutes} minutes ago",hours:"{hours} hours ago",days:"{days} days ago"}};const pe={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Trop bas",2:"Acceptable bas",3:"Idéal",4:"Idéal",5:"Acceptable élevé",6:"Trop élevé"},sensor:{temperature:"Température",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinité",cya:"Acide cyanurique",calcium:"Calcium",phosphate:"Phosphate",alkalinity:"Alcalinité",free_chlorine:"Chlore libre",total_chlorine:"Chlore total",pressure:"Pression du filtre",specific_gravity:"Densité spécifique",magnesium:"Magnésium",water_level:"Niveau d'eau",flow_rate:"Débit",uv_radiation:"Radiation UV",product_volume:"Volume Produit",product_weight:"Poids Produit",ec:"Conductivité Électrique",bromine:"Brome",chlorinator:"Réglage du chlorateur",pump_speed:"Vitesse de pompe",light_brightness:"Luminosité éclairage",heat_pump_setpoint:"Consigne PAC"},time:{seconds:"à l'instant",minutes:"il y a {minutes} minute",hours:"il y a {hours} heure",days:"il y a {days} jour"},time_plural:{seconds:"à l'instant",minutes:"il y a {minutes} minutes",hours:"il y a {hours} heures",days:"il y a {days} jours"}};const he={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Demasiado bajo",2:"Aceptable bajo",3:"Perfecto",4:"Perfecto",5:"Aceptable alto",6:"Demasiado alto"},sensor:{temperature:"Temperatura",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinidad",cya:"Acido cianúrico",calcium:"Calcio",phosphate:"Fosfato",alkalinity:"Alcalinidad",free_chlorine:"Cloro libre",total_chlorine:"Cloro total",pressure:"Pressione du filter relativa",specific_gravity:"Densidad relativa",magnesium:"Magnesio",water_level:"Nivel de agua",flow_rate:"Caudal",uv_radiation:"Radiación UV",product_volume:"Volumen Producto",product_weight:"Peso Producto",ec:"Conductividad Eléctrica",bromine:"Bromo",chlorinator:"Ajuste de clorador",pump_speed:"Velocidad de bomba",light_brightness:"Brillo de luz",heat_pump_setpoint:"Consigna bomba de calor"},time:{seconds:"justo ahora",minutes:"hace {minutes} minuto",hours:"hace {hours} hora",days:"hace {days} día"},time_plural:{seconds:"justo ahora",minutes:"hace {minutes} minutos",hours:"hace {hours} horas",days:"hace {days} días"}};const me={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Zu niedrig",2:"Akzeptabler Tiefstwert",3:"Ideal",4:"Ideal",5:"Akzeptabler Hochwert",6:"Zu hoch"},sensor:{temperature:"Temperatur",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salzgehalt",cya:"Cyanursäure",calcium:"Kalzium",phosphate:"Phosphat",alkalinity:"Alkalinität",free_chlorine:"Freies Chlor",total_chlorine:"Gesamtchlor",pressure:"Sandfilterdruck",specific_gravity:"Spezifisches Gewicht",magnesium:"Magnesium",water_level:"Wasserstand",flow_rate:"Durchfluss",uv_radiation:"UV-Strahlung",product_volume:"Produktvolumen",product_weight:"Produktgewicht",ec:"Elektrische Leitfähigkeit",bromine:"Brom",chlorinator:"Chlorator-Einstellung",pump_speed:"Pumpengeschwindigkeit",light_brightness:"Lichthelligkeit",heat_pump_setpoint:"Wärmepumpe Sollwert"},time:{seconds:"gerade erst",minutes:"vor {minutes} Minute",hours:"vor {hours} Stunde",days:"vor {days} Tag"},time_plural:{seconds:"gerade erst",minutes:"vor {minutes} Minuten",hours:"vor {hours} Stunden",days:"vor {days} Tagen"}};const ge={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Troppo basso",2:"Accettabile basso",3:"Ideale",4:"Ideale",5:"Accettabile alto",6:"Troppo alto"},sensor:{temperature:"Temperatura",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinità",cya:"Acido cianurico",calcium:"Calcio",phosphate:"Fosfato",alkalinity:"Alcalinità",free_chlorine:"Cloro libero",total_chlorine:"Cloro totale",pressure:"Pressione filtro",specific_gravity:"Gravità specifica",magnesium:"Magnesio",water_level:"Livello dell'acqua",flow_rate:"Portata",uv_radiation:"Radiazione UV",product_volume:"Volume prodotto",product_weight:"Peso prodotto",ec:"Conducibilità Elettrica",bromine:"Bromo",chlorinator:"Impostazione clorinatore",pump_speed:"Velocità pompa",light_brightness:"Luminosità luce",heat_pump_setpoint:"Setpoint pompa di calore"},time:{seconds:"proprio ora",minutes:"{minutes} minuto fa",hours:"{hours} ora fa",days:"{days} giorno fa"},time_plural:{seconds:"proprio ora",minutes:"{minutes} minuti fa",hours:"{hours} ore fa",days:"{days} giorni fa"}};const _e={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Te laag",2:"Acceptabel laag",3:"Ideaal",4:"Ideaal",5:"Acceptabel hoog",6:"Te hoog"},sensor:{temperature:"Temperatuur",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Zoutgehalte",cya:"Cyanuurzuur",calcium:"Calcium",phosphate:"Fosfaat",alkalinity:"Alkaliteit",free_chlorine:"Vrij chloor",total_chlorine:"Totaal chloor",pressure:"Filterdruk",specific_gravity:"Soortelijk gewicht",magnesium:"Magnesium",water_level:"Waterniveau",flow_rate:"Debiet",uv_radiation:"UV-straling",product_volume:"Productvolume",product_weight:"Productgewicht",ec:"Elektrische Geleidbaarheid",bromine:"Broom",chlorinator:"Chloormaker instelling",pump_speed:"Pompsnelheid",light_brightness:"Lichthelderheid",heat_pump_setpoint:"Warmtepomp instelpunt"},time:{seconds:"zojuist",minutes:"{minutes} minuut geleden",hours:"{hours} uur geleden",days:"{days} dag geleden"},time_plural:{seconds:"zojuist",minutes:"{minutes} minuten geleden",hours:"{hours} uur geleden",days:"{days} dagen geleden"}};const ye={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Muito Baixo",2:"Torelavel mas Baixo",3:"Ideal",4:"Ideal",5:"Toleravel mas Alto",6:"Muito Alto"},sensor:{temperature:"Temperatura",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinidade",cya:"Ácido cianúrico",calcium:"Calcio",phosphate:"Fosfato",alkalinity:"Alcalinidade",free_chlorine:"Cloro livres",total_chlorine:"Cloro total",pressure:"Pressão do filtro",specific_gravity:"Gravidade específica",magnesium:"Magnésio",water_level:"Nivel de agua",flow_rate:"Caudal",uv_radiation:"Radiação UV",product_volume:"Volume Produto",product_weight:"Peso Produto",ec:"Condutividade Elétrica",bromine:"Bromo",chlorinator:"Configuração do clorador",pump_speed:"Velocidade da bomba",light_brightness:"Brilho da luz",heat_pump_setpoint:"Ponto de ajuste bomba de calor"},time:{seconds:"agora mesmo",minutes:"há {minutes} minuto",hours:"há {hours} hora",days:"há {days} dia"},time_plural:{seconds:"agora mesmo",minutes:"há {minutes} minutos",hours:"há {hours} horas",days:"há {days} dias"}};const fe={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Muito Baixo",2:"Aceitavel Baixo",3:"Ideal",4:"Ideal",5:"Aceitavel Alto",6:"Muito Alto"},sensor:{temperature:"Temperatura",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinidade",cya:"Acido Cianurico",calcium:"Calcio",phosphate:"Fosfato",alkalinity:"Alcalinidade",free_chlorine:"Cloro Livre",total_chlorine:"Cloro Total",pressure:"Pressão no Filtro",specific_gravity:"Gravidade específica",magnesium:"Magnésio",water_level:"Nivel de agua",flow_rate:"Caudal",uv_radiation:"Radiação UV",product_volume:"Volume Produto",product_weight:"Peso Produto",ec:"Condutividade Elétrica",bromine:"Bromo",chlorinator:"Configuração do clorador",pump_speed:"Velocidade da bomba",light_brightness:"Brilho da luz",heat_pump_setpoint:"Ponto de ajuste bomba de calor"},time:{seconds:"agora mesmo",minutes:"há {minutes} minuto",hours:"há {hours} hora",days:"há {days} dia"},time_plural:{seconds:"agora mesmo",minutes:"há {minutes} minutos",hours:"há {hours} horas",days:"há {days} dias"}};const ve={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Prea mic",2:"Mic",3:"Ideal",4:"Ideal",5:"Mare",6:"Prea mare"},sensor:{temperature:"Temperatură",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinitate",cya:"Acid cianuric",calcium:"Calciu",phosphate:"Fosfat",alkalinity:"Alcalinitate",free_chlorine:"Clor liber",total_chlorine:"Clor total",pressure:"Presiune filtru",specific_gravity:"Greutate specifică",magnesium:"Magneziu",water_level:"Nivel apă",flow_rate:"Debit",uv_radiation:"Radiație UV",product_volume:"Volum produs",product_weight:"Greutate produs",ec:"Conductivitate Electrică",bromine:"Brom",chlorinator:"Setare clorinator",pump_speed:"Viteza pompei",light_brightness:"Luminozitate lumina",heat_pump_setpoint:"Punct de reglaj pompa de caldura"},time:{seconds:"chiar acum",minutes:"acum {minutes} minut",hours:"acum {hours} oră",days:"acum {days} zi"},time_plural:{seconds:"chiar acum",minutes:"acum {minutes} minute",hours:"acum {hours} ore",days:"acum {days} zile"}};const be={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Príliš nízky",2:"Akceptovateľne nízky",3:"Ideálny",4:"Ideálny",5:"Akceptovateľne vysoký",6:"Príliš vysoký"},sensor:{temperature:"Teplota",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinita",cya:"Kyselina kyanurová",calcium:"Vápnik",phosphate:"Fosfát",alkalinity:"Alkalinita",free_chlorine:"Voľný chlór",total_chlorine:"Celkový chlór",pressure:"Tlak filtra",specific_gravity:"Špecifická hmotnosť",magnesium:"Magnézium",water_level:"Úroveň vody",flow_rate:"Prietok",uv_radiation:"UV žiarenie",product_volume:"Objem produktu",product_weight:"Hmotnosť produktu",ec:"Elektrická Vodivosť",bromine:"Bróm",chlorinator:"Nastavenie chlórovača",pump_speed:"Rýchlosť čerpadla",light_brightness:"Jas svetla",heat_pump_setpoint:"Nastavená teplota tepelného čerpadla"},time:{seconds:"práve teraz",minutes:"pred {minutes} minútou",hours:"pred {hours} hodinou",days:"pred {days} dňom"},time_plural:{seconds:"práve teraz",minutes:"pred {minutes} minútami",hours:"pred {hours} hodinami",days:"pred {days} dňami"}};const $e={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"נמוך מדי",2:"נמוך מאוד",3:"אידיאלי",4:"אידיאלי",5:"גבוה מאוד",6:"גבוה מדי"},sensor:{temperature:"טמפרטורה",ph:"PH",orp:"ORP",tds:"TDS",salinity:"מליחות",cya:"חומצה ציאנורית",calcium:"סידן",phosphate:"פוספט",alkalinity:"אלקליניות",free_chlorine:"כלור חופשי",total_chlorine:"כלור כולל",pressure:"לחץ מסנן",specific_gravity:"משקל סגולי",magnesium:"מגנזיום",water_level:"מפלס מים",flow_rate:"קצב זרימה",uv_radiation:"קרינת UV",product_volume:"נפח מוצר",product_weight:"משקל מוצר",ec:"מוליכות חשמלית",bromine:"ברום",chlorinator:"הגדרת מחלור",pump_speed:"מהירות משאבה",light_brightness:"בהירות תאורה",heat_pump_setpoint:"נקודת כיוון משאבת חום"},time:{seconds:"כרגע",minutes:"לפני {minutes} דקה",hours:"לפני {hours} שעה",days:"לפני {days} יום"},time_plural:{seconds:"כרגע",minutes:"לפני {minutes} דקות",hours:"לפני {hours} שעות",days:"לפני {days} ימים"}};const we={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Слишком низкий",2:"Приемлемо низкий",3:"Идеальный",4:"Идеальный",5:"Приемлемо высокий",6:"Слишком высокий"},sensor:{temperature:"Температура",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Соленость",cya:"Циануровая кислота",calcium:"Кальций",phosphate:"Фосфаты",alkalinity:"Щелочность",free_chlorine:"Свободный хлор",total_chlorine:"Общий хлор",pressure:"Давление фильтра",specific_gravity:"Удельный вес",magnesium:"Магний",water_level:"Уровень воды",flow_rate:"Расход воды",uv_radiation:"УФ-излучение",product_volume:"Объем продукта",product_weight:"Вес продукта",ec:"Электропроводность",bromine:"Бром",chlorinator:"Настройка хлоратора",pump_speed:"Скорость насоса",light_brightness:"Яркость освещения",heat_pump_setpoint:"Уставка теплового насоса"},time:{seconds:"только что",minutes:"{minutes} минуту назад",hours:"{hours} час назад",days:"{days} день назад"},time_plural:{seconds:"только что",minutes:"{minutes} минут назад",hours:"{hours} часов назад",days:"{days} дней назад"}};const xe={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Túl alacsony",2:"Elfogadhatóan alacsony",3:"Ideális",4:"Ideális",5:"Elfogadhatóan magas",6:"Túl magas"},sensor:{temperature:"Hőmérséklet",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Sótartalom",cya:"Cianursav",calcium:"Kalcium",phosphate:"Foszfát",alkalinity:"Lúgosság",free_chlorine:"Szabad klór",total_chlorine:"Összes klór",pressure:"Szűrő nyomás",specific_gravity:"Fajsúly",magnesium:"Magnézium",water_level:"Vízszint",flow_rate:"Áramlási sebesség",uv_radiation:"UV sugárzás",product_volume:"Termék térfogat",product_weight:"Termék tömeg",ec:"Elektromos vezetőképesség",bromine:"Bróm",chlorinator:"Klórozó beállítás",pump_speed:"Szivattyú sebesség",light_brightness:"Fény fényerő",heat_pump_setpoint:"Hőszivattyú beállítás"},time:{seconds:"éppen most",minutes:"{minutes} perce",hours:"{hours} órája",days:"{days} napja"},time_plural:{seconds:"éppen most",minutes:"{minutes} perce",hours:"{hours} órája",days:"{days} napja"}};const ke={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"För Lågt",2:"Lågt, Acceptabelt",3:"Idealt",4:"Idealt",5:"Högt, Acceptabelt",6:"För Högt"},sensor:{temperature:"Temperatur",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salthalt",cya:"Cyanursyra",calcium:"Kalcium",phosphate:"Fosfat",alkalinity:"Alkalinitet",free_chlorine:"Klor Fritt",total_chlorine:"Klor Total",pressure:"Tryck Filter",specific_gravity:"Densitet",magnesium:"Magnesium",water_level:"Vattennivå",flow_rate:"Flödeshastighet",uv_radiation:"UV-Strålning",product_volume:"Produkt Volym",product_weight:"Produkt Vikt",ec:"Elektrisk Ledningsförmåga",bromine:"Brom",chlorinator:"Kloratorinställning",pump_speed:"Pumphastighet",light_brightness:"Ljusstyrka",heat_pump_setpoint:"Värmepump börvärde"},time:{seconds:"nu",minutes:"{minutes} minut tillbaka",hours:"{hours} timme tillbaka",days:"{days} dag tillbaka"},time_plural:{seconds:"nu",minutes:"{minutes} minuter tillbaka",hours:"{hours} timmar tillbaka",days:"{days} dagar tillbaka"}};const Se={quality:{1:"Perfect",2:"OK",3:"Warning",4:"Bad",5:"Hazardous"},state:{1:"Příliš nízká",2:"Přijatelně nízká",3:"Ideální",4:"Ideální",5:"Přijatelně vysoká",6:"Příliš vysoká"},sensor:{temperature:"Teplota",ph:"pH",orp:"ORP",tds:"TDS",salinity:"Salinita",cya:"Kyselina kyanurová",calcium:"Vápník",phosphate:"Fosfát",alkalinity:"Alkalita",free_chlorine:"Volný chlór",total_chlorine:"Celkový chlór",pressure:"Tlak filtrace",specific_gravity:"Měrná hmotnost",magnesium:"Hořčík",water_level:"Hladina vody",flow_rate:"Průtok",uv_radiation:"UV záření",product_volume:"Objem přípravku",product_weight:"Hmotnost přípravku",ec:"Elektrická vodivost",bromine:"Brom",chlorinator:"Nastavení chlorátoru",pump_speed:"Rychlost čerpadla",light_brightness:"Jas světla",heat_pump_setpoint:"Nastavená hodnota tepelného čerpadla"},time:{seconds:"právě nyní",minutes:"před {minutes} minutou",hours:"před {hours} hodinou",days:"před {days} dnem"},time_plural:{seconds:"právě nyní",minutes:"před {minutes} minutami",hours:"před {hours} hodinami",days:"před {days} dny"}};const Ae={en:ue,fr:pe,es:he,de:me,it:ge,nl:_e,pt:ye,"pt-br":fe,ro:ve,sk:be,he:$e,ru:we,hu:xe,sv:ke,cs:Se};const getTranslation=(e,s)=>{const o=s.split(".");let r=Ae[e]||Ae.en;for(const e of o)if(r&&typeof r==="object")r=r[e];else return s;return r||s};const formatTranslation=(e,s)=>{if(!s)return e;return Object.entries(s).reduce((e,[s,o])=>e.replace(`{${s}}`,String(o)),e)};const Ce=i$3`
  /** Host element styles */
  :host {
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: var(--ha-card-border-radius, 12px);
    border-width: var(--ha-card-border-width, 4px);
    box-shadow: var(--ha-card-box-shadow);
    color: var(--primary-text-color);
    display: block;
    overflow: hidden;
    transition: all 0.3s ease-out 0s;
    position: relative;
    padding-top: 25px;
  }

  /** Section layouts */
  .section {
    padding-bottom: 10px;
    padding: 0px;
  }

  .section.disabled,
  .section-compact.disabled {
    opacity: 0.4;
    filter: grayscale(0.8);
    pointer-events: none;
  }

  @keyframes blinker {
    50% { opacity: 0.3; }
  }

  .blink {
    animation: blinker 2s linear infinite;
  }

  .section-compact {
    padding-bottom: 5px;
    padding: 0px;
  }

  /** Title styles */
  .pool-monitor-title {
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 15px;
    padding-bottom: 15px;
    margin: 0;
  }

  /** Entity image container */
  .pool-monitor-entity-img {
    text-align: right;
    width: 10%;
    flex-shrink: 0;
    margin-top: 35px;
  }

  .section-compact .pool-monitor-entity-img {
    margin-top: 0;
  }

  .section-row {
    display: flex;
    align-items: flex-start;
  }

  /** Unified gauge container — marker, bar, labels share same coordinate space */
  .sensor-gauge {
    flex: 1;
    min-width: 0;
  }

  .gauge-marker-zone {
    position: relative;
    height: 35px;
  }

  .gauge-marker-zone .marker {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 20px;
    padding: 2px 8px;
    border-radius: 5px;
    position: absolute;
    top: 0;
    z-index: 2;
    white-space: nowrap;
    font-size: 13px;
    font-weight: 600;
  }

  .gauge-marker-zone .marker-state {
    font-size: 0.85em;
    font-weight: 400;
    opacity: 0.9;
  }

  .gauge-marker-zone .triangle {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    bottom: 0px;
    z-index: 2;
  }

  /** Main container layouts */
  .pool-monitor-container {
    display: grid;
    padding: 5px 0;
    height: 15px;
    position: relative;
  }

  .gauge-labels {
    position: relative;
    height: 18px;
    margin-top: -5px;
  }

  .gauge-label {
    position: absolute;
    transform: translateX(-50%);
    font-size: 0.8em;
    white-space: nowrap;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0;
    grid-template-rows: 15px;
    line-height: 15px;
    position: relative;
    margin: 0px;
  }

  .grid-container.quality-mode {
    grid-template-columns: repeat(5, 1fr);
  }

  .grid-item {
    padding: 7px 0;
    margin: 0;
  }

  .grid-item-text-box {
    font-size: 0.8em;
    text-align: center;
    font-weight: 700;
  }

  .item-row {
    grid-row: 1;
  }

  .cursor {
    text-align: center;
    justify-self: center;
    font-size: 13px;
    font-weight: 600;
    color: black;
    position: absolute;
    z-index: 1;
  }

  .cursor-text {
    position: absolute;
    width: 200px;
    height: 15px;
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 0px;
    top: 5px;
    font-size: 11px;
    font-weight: 500;
    text-align: right;
    color: black;
    z-index: 1;
  }

  .progress-bar-child {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }

  .sensor-monitor-container {
    position: relative;
    height: 20px;
    margin: 0px 0px 0px 0px;
    border-radius: 5px;
    overflow: hidden;
  }

  .status-container {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 15px 10px;
    cursor: pointer;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.85em;
    font-weight: 600;
    color: white;
    text-transform: capitalize;
  }

  .status-badge ha-icon {
    color: white;
  }

  .status-friendly-name {
    font-size: 0.8em;
    color: var(--secondary-text-color, #888);
  }

  .warning-message {
    background-color: var(--warning-color, rgba(255, 152, 0, 0.1));
    border-left: 4px solid var(--warning-color, #ff9800);
    border-radius: 4px;
    padding: 12px 16px;
    margin: 8px 0;
    color: var(--warning-text-color, var(--primary-text-color));
    font-size: 0.95em;
    line-height: 1.4;
    display: flex;
    align-items: center;
    animation: fadeIn 0.3s ease-in-out;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .warning-message ha-icon {
    color: var(--warning-color, #ff9800);
    margin-right: 12px;
    flex-shrink: 0;
  }

  .battery-indicator {
    font-size: 9px;
    vertical-align: middle;
    margin-left: 4px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;class cardContent{static generateTitle(e){const s=e.title!==void 0?ie` <h1 class="pool-monitor-title">${e.title}</h1> `:ie``;return ie`${s}`}static generateStatusBadge(e){return ie`
      <div class="status-container" @click=${()=>cardContent._moreinfo(e.entity_id)}>
        <span class="status-badge" style="background-color: ${e.color};">
          <ha-icon icon="${e.icon}" style="--mdc-icon-size: 16px;"></ha-icon>
          ${e.label}
        </span>
        ${e.friendly_name?ie`<span class="status-friendly-name">${e.friendly_name}</span>`:""}
      </div>
    `}static generateBody(e,s){if(!s)return ie` <div class="warning-message">No sensor data available</div> `;const o=s.pct_marker;const r=o<=1?"translateX(0)":o>=99?"translateX(-100%)":"translateX(-50%)";return ie`
      <!-- ##### ${s.name} section ##### -->
      <div
        class="${s.disabled?"section disabled":"section"} ${s.blink?"blink":""}"
        @click=${()=>cardContent._moreinfo(s.entity)}
      >
        <div class="section-row">
          ${!s.hide_icon?ie`
                <div class="pool-monitor-entity-img">
                  ${s.is_mdi?ie`
                        <ha-icon
                          icon="${s.mdi_icon}"
                          style="width: 32px; height: 32px;"
                        ></ha-icon>
                      `:ie` <img src="${s.img_src}" style="width: 32px; height: 32px;" /> `}
                </div>
              `:""}
          <div class="sensor-gauge">
            <div class="gauge-marker-zone">
              <div
                class="marker"
                style="background-color: ${s.color};color: black;left: ${o}%;transform: ${r};"
              >
                ${s.side_align==="right"&&s.state?ie`<span class="marker-state">${s.state}</span>`:""}
                ${s.value!=null?`${s.value} ${s.unit}`:"—"}
                ${s.side_align==="left"&&s.state?ie`<span class="marker-state">${s.state}</span>`:""}
              </div>
              <div
                class="triangle"
                style="border-top: 8px solid ${s.color};left: ${o}%;transform: ${r};"
              ></div>
            </div>
            <div class="pool-monitor-container">
              ${e.display.gradient?ie`
                    <div
                      class="progress-bar-child"
                      style="background: linear-gradient(to right,
                  ${s.mode==="quality"?`${e.colors.cool} 10%,\n                     ${e.colors.normal} 30%,\n                     ${e.colors.low} 50%,\n                     ${e.colors.warn} 70%,\n                     ${e.colors.hazardous} 90%`:s.mode==="heatflow"?`${e.colors.cool} 15%,\n                       ${e.colors.low} 50%,\n                       ${e.colors.warn} 85%`:`${e.colors.warn} 5%,\n                       ${e.colors.low} 30%,\n                       ${e.colors.normal},\n                       ${e.colors.normal},\n                       ${e.colors.low} 70%,\n                       ${e.colors.warn} 95%`}
                );"
                    ></div>
                  `:ie`
                    <div class="grid-container ${s.mode==="quality"?"quality-mode":""}">
                      ${s.mode==="quality"?ie`
                            <div
                              style="background-color: ${e.colors.cool}; grid-column: 1; border-radius: 5px 0px 0px 5px"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.normal}; grid-column: 2;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.low}; grid-column: 3;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.warn}; grid-column: 4;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.hazardous}; grid-column: 5; border-radius: 0px 5px 5px 0px;"
                              class="grid-item item-row"
                            ></div>
                          `:ie`
                            <div
                              style="background-color: ${e.colors.warn}; grid-column: 1; border-radius: 5px 0px 0px 5px"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.low}; grid-column: 2;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.normal}; grid-column: 3;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.normal}; grid-column: 4;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.low}; grid-column: 5;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.warn}; grid-column: 6; border-radius: 0px 5px 5px 0px;"
                              class="grid-item item-row"
                            ></div>
                          `}
                    </div>
                    <div
                      style="display: flex; justify-content: space-between; margin: 0 10px; font-size: 0.7em; color: var(--secondary-text-color);"
                    >
                      <span>${s.min}</span>
                      <span>${s.max}</span>
                    </div>
                  `}
              ${s.pct_min!==s.pct_cursor?ie`<div
                    class="cursor-text"
                    style="border-left: 2px solid ${e.colors.hi_low}; border-top: 2px solid ${e.colors.hi_low}; border-bottom: 2px solid ${e.colors.hi_low}; width: 2px; height: 12px; text-align:${s.side_align}; background-color:transparent; ${s.side_align}: ${s.pct_min}%;"
                  ></div>`:""}
              ${s.pct_max!==s.pct_cursor?ie`<div
                    class="cursor-text"
                    style="border-right: 2px solid ${e.colors.hi_low}; border-top: 2px solid ${e.colors.hi_low}; border-bottom: 2px solid ${e.colors.hi_low}; width: 2px; height: 12px; text-align:${s.side_align}; background-color:transparent; ${s.side_align}: ${s.pct_max}%;"
                  ></div>`:""}
            </div>
            <div class="gauge-labels">
              <span class="gauge-label" style="left: ${s.label_positions[0]}%"
                >${s.setpoint_class[0]}</span
              >
              <span class="gauge-label" style="left: ${s.label_positions[1]}%"
                >${s.setpoint_class[1]}</span
              >
              <span
                class="gauge-label"
                style="left: ${s.label_positions[2]}%;color:${e.colors.normal}"
                >${s.setpoint_class[2]}</span
              >
              <span class="gauge-label" style="left: ${s.label_positions[3]}%"
                >${s.setpoint_class[3]}</span
              >
              <span class="gauge-label" style="left: ${s.label_positions[4]}%"
                >${s.setpoint_class[4]}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        style="display:flex;justify-content:space-between;align-items:center;padding:0 15px;margin-top:-5px;font-size:0.8em;color:var(--secondary-text-color);"
      >
        <span>
          ${s.title}
          ${s.battery_icon?ie`<span class="battery-indicator" style="color: ${s.battery_color};">
                <ha-icon icon="${s.battery_icon}" style="--mdc-icon-size: 14px;"></ha-icon>
                ${s.battery_level!=null?ie`${s.battery_level}%`:""}
              </span>`:""}
        </span>
        ${s.last_updated?ie`<span style="font-size:0.85em;opacity:0.7;">${s.last_updated}</span>`:""}
      </div>
    `}static generateCompactBody(e,s){if(!s)return ie` <div class="warning-message">No sensor data available</div> `;return ie`
      <!-- ##### ${s.name} section ##### -->
      <div class="section-compact ${s.disabled?"disabled":""} ${s.blink?"blink":""}" @click=${()=>cardContent._moreinfo(s.entity)}>
        <div class="section-row">
          ${!s.hide_icon?ie`
                <div class="pool-monitor-entity-img">
                  ${s.is_mdi?ie`
                        <ha-icon
                          icon="${s.mdi_icon}"
                          style="width: 24px; height: 24px;"
                        ></ha-icon>
                      `:ie` <img src="${s.img_src}" style="width: 24px; height: 24px;" /> `}
                </div>
              `:""}
          <div class="sensor-gauge">
            <div class="pool-monitor-container">
              ${e.display.gradient?ie`
                    <div
                      class="progress-bar-child"
                      style="background: linear-gradient(to right,
                  ${s.mode==="quality"?`${e.colors.cool} 10%,\n                     ${e.colors.normal} 30%,\n                     ${e.colors.low} 50%,\n                     ${e.colors.warn} 70%,\n                     ${e.colors.hazardous} 90%`:s.mode==="heatflow"?`${e.colors.cool} 15%,\n                       ${e.colors.low} 50%,\n                       ${e.colors.warn} 85%`:`${e.colors.warn} 5%,\n                       ${e.colors.low} 30%,\n                       ${e.colors.normal},\n                       ${e.colors.normal},\n                       ${e.colors.low} 70%,\n                       ${e.colors.warn} 95%`}
                );"
                    ></div>
                  `:ie`
                    <div class="grid-container ${s.mode==="quality"?"quality-mode":""}">
                      ${s.mode==="quality"?ie`
                            <div
                              style="background-color: ${e.colors.cool}; grid-column: 1; border-radius: 5px 0px 0px 5px"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.normal}; grid-column: 2;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.low}; grid-column: 3;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.warn}; grid-column: 4;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.hazardous}; grid-column: 5; border-radius: 0px 5px 5px 0px;"
                              class="grid-item item-row"
                            ></div>
                          `:ie`
                            <div
                              style="background-color: ${e.colors.warn}; grid-column: 1; border-radius: 5px 0px 0px 5px"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.low}; grid-column: 2;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.normal}; grid-column: 3;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.normal}; grid-column: 4;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.low}; grid-column: 5;"
                              class="grid-item item-row"
                            ></div>
                            <div
                              style="background-color: ${e.colors.warn}; grid-column: 6; border-radius: 0px 5px 5px 0px;"
                              class="grid-item item-row"
                            ></div>
                          `}
                    </div>
                    <div
                      style="display: flex; justify-content: space-between; margin: 0 10px; font-size: 0.7em; color: var(--secondary-text-color);"
                    >
                      <span>${s.min}</span>
                      <span>${s.max}</span>
                    </div>
                  `}
              <div
                class="cursor-text"
                style="border-${s.side_align}: 5px solid ${e.colors.marker}; text-align:${s.side_align};background-color:transparent ;${s.side_align}: ${s.pct_cursor}%;"
              >
                &nbsp; ${s.title} ${s.value!=null?`${s.value} ${s.unit}`:"—"}
                ${s.separator} ${s.state}
                ${s.battery_icon?ie`<ha-icon
                        icon="${s.battery_icon}"
                        style="--mdc-icon-size: 12px; color: ${s.battery_color};"
                      ></ha-icon
                      >${s.battery_level!=null?ie`${s.battery_level}%`:""}`:""}
                &nbsp;
              </div>
              ${s.pct_min!==s.pct_cursor?ie`<div
                    class="cursor-text"
                    style="border-left: 2px solid ${e.colors.hi_low}; border-top: 2px solid ${e.colors.hi_low}; border-bottom: 2px solid ${e.colors.hi_low}; width: 2px; height: 12px; text-align:${s.side_align}; background-color:transparent; ${s.side_align}: ${s.pct_min}%;"
                  ></div>`:""}
              ${s.pct_max!==s.pct_cursor?ie`<div
                    class="cursor-text"
                    style="border-right: 2px solid ${e.colors.hi_low}; border-top: 2px solid ${e.colors.hi_low}; border-bottom: 2px solid ${e.colors.hi_low}; width: 2px; height: 12px; text-align:${s.side_align}; background-color:transparent; ${s.side_align}: ${s.pct_max}%;"
                  ></div>`:""}
            </div>
            <div class="gauge-labels">
              <span class="gauge-label" style="left: ${s.label_positions[0]}%"
                >${s.setpoint_class[0]}</span
              >
              <span class="gauge-label" style="left: ${s.label_positions[1]}%"
                >${s.setpoint_class[1]}</span
              >
              <span
                class="gauge-label"
                style="left: ${s.label_positions[2]}%;color:${e.colors.normal}"
                >${s.setpoint_class[2]}</span
              >
              <span class="gauge-label" style="left: ${s.label_positions[3]}%"
                >${s.setpoint_class[3]}</span
              >
              <span class="gauge-label" style="left: ${s.label_positions[4]}%"
                >${s.setpoint_class[4]}</span
              >
            </div>
          </div>
        </div>
      </div>
    `}static _moreinfo(e){const s=new Event("hass-more-info",{bubbles:true,composed:true});s.detail={entityId:e};const o=document.querySelector("home-assistant");if(o)o.dispatchEvent(s)}}const Ee={compact:false,show_names:true,show_labels:true,show_last_updated:false,show_icons:true,show_units:true,gradient:true,language:"en"};const Pe={low:"#fdcb6e",warn:"#e17055",normal:"#00b894",cool:"#00BFFF",hazardous:"#8e44ad",marker:"#000000",hi_low:"#00000099"};function getDisplayConfig(){return{...Ee}}function getColorConfig(){return{...Pe}}function getSensorConfig(e,s){if(!s[e])return{};return{...s[e]}}class MonitorCardBase extends i{static{this.SENSORS={}}static{this.IMAGE_BASE_URL=""}static{this.styles=Ce}render(){const e=this.getConfig();const s=this.processData();const o=this.resolveStatus();const r=e.display.compact?cardContent.generateCompactBody:cardContent.generateBody;if(!s||Object.keys(s).length===0)return ie` <div id="pool-monitor-card">
        <div class="warning-message">
          <ha-icon icon="mdi:alert"></ha-icon>
          <span>No valid sensor data available</span>
        </div>
      </div>`;return ie` <div id="pool-monitor-card">
      ${cardContent.generateTitle(e)} ${o?cardContent.generateStatusBadge(o):""}
      ${Object.values(s).map(s=>{if(s?.invalid)return ie`
            <div class="warning-message">
              <ha-icon icon="mdi:alert"></ha-icon>
              <span
                >Sensor ${s?.name||"unknown"} is not supported. Please verify its
                configuration and ensure it is compatible with the card.</span
              >
            </div>
          `;else if(s?.not_found)return ie`
            <div class="warning-message">
              <ha-icon icon="mdi:alert"></ha-icon>
              <span
                >Entity ${s?.entity||"unknown"} could not be found. Please verify its
                name and ensure the entity is properly configured.</span
              >
            </div>
          `;return r(e,s)})}
    </div>`}getCardSize(){if(!this.config?.sensors)return 3;const e=Object.values(this.config.sensors).reduce((e,s)=>e+(Array.isArray(s)?s.length:1),0);const s=this.config?.display?.compact;const o=this.config?.title?1:0;return o+e*(s?2:3)}getGridOptions(){const e=this.getCardSize();return{rows:e,min_rows:Math.max(2,Math.ceil(e/2)),columns:12,min_columns:6}}processData(){const e={};const s=this.getConfig();Object.entries(s.sensors).forEach(([s,o])=>{const r=Array.isArray(o)?o:[o];r.forEach((o,r)=>{const l=`${s}_${r+1}`;e[l]=this.calculateData(s,o.title||this.getTranslatedText("sensor."+s),o.entity,o.min,o.max,o.setpoint,o.step,o.unit,o.icon,o.image_url,o.mode,o.min_limit,o.override_value,o.override,o.invalid,o.step_low,o.step_high,o.last_updated_entity,o.last_updated_attribute,o.setpoint_entity,o.min_limit_entity,o.limits,o.blink_threshold);if(o.availability_entity){const s=this.hass?.states?.[o.availability_entity]?.state;e[l].disabled=s==="off"||s==="unavailable"}if(o.battery_entity){const s=this.hass?.states?.[o.battery_entity];if(!s||s.state==="unavailable"||s.state==="unknown"){e[l].battery_level=null;e[l].battery_icon="mdi:battery-unknown";e[l].battery_color="var(--disabled-text-color, #bdbdbd)"}else{const o=parseFloat(s.state);if(isNaN(o)){e[l].battery_level=null;e[l].battery_icon="mdi:battery-unknown";e[l].battery_color="var(--disabled-text-color, #bdbdbd)"}else{e[l].battery_level=o;e[l].battery_icon=o>50?"mdi:battery":o>=20?"mdi:battery-50":"mdi:battery-20";e[l].battery_color=o>50?"var(--state-sensor-battery-high-color, #4caf50)":o>=20?"var(--state-sensor-battery-medium-color, #ff9800)":"var(--state-sensor-battery-low-color, #f44336)"}}}})});return e}getTranslatedText(e,s){const o=this.config?.display.language||"en";const r=getTranslation(o,e);return formatTranslation(r,s)}calculateData(e,s,o,r,l,u,p,h,m,g,_,f,v,b,$,w,A,C,E,P,T,O,F){const B={};const q=this.getConfig();const U=this.constructor.SENSORS||{};const j=getSensorConfig(e,U);const W=this.constructor.IMAGE_BASE_URL||"";B.name=e;B.invalid=$;B.mode=_;B.title=q.display.show_names?s:ie`&nbsp;`;B.hide_icon=false;B.is_mdi=false;if(!q.display.show_icons)B.hide_icon=true;else{const s=m||"";const o=g||"";if(s==="hide")B.hide_icon=true;else if(o)B.img_src=o;else if(s&&typeof s==="string"&&s.startsWith("mdi:")){B.is_mdi=true;B.mdi_icon=s}else if(W)B.img_src=`${W}/${e}.png`;else{B.is_mdi=true;B.mdi_icon="mdi:gauge"}}if(!this.hass||!this.hass.states||!this.hass.states[o]){console.warn(`Entity not found: ${o}`);B.value=null;B.entity=o;B.not_found=true;B.label_positions=[0,25,50,75,100];return B}const K=this.hass.states[o];const G=this.hass.entities?.[o];const Q=G?.display_precision??K.attributes?.display_precision??K.attributes?.precision??this.countDecimals(parseFloat(K.state));const J=parseFloat(K.state);B.entity=o;if(isNaN(J)){B.value=null;B.state="";B.color="var(--disabled-text-color, #bdbdbd)";B.pct="50";B.pct_min="50";B.pct_max="50";B.pct_cursor="50";B.pct_marker="50";B.pct_state_step="50";B.side_align="left";B.separator="";B.unit="";B.setpoint_class=["","","","",""];B.label_positions=[0,25,50,75,100];B.progressClass="";if(q.display.show_last_updated)B.last_updated=this.resolveLastUpdated(K,C,E);return B}B.value=Number(J.toFixed(Q));if(q.display.show_last_updated)B.last_updated=this.resolveLastUpdated(K,C,E);B.unit=q.display.show_units?h||j.unit||"":"";if(b)B.value=v||j.override;B.min_value=r!==void 0&&this.hass.states[r]&&!isNaN(parseFloat(this.hass.states[r].state))?parseFloat(this.hass.states[r].state):B.value;B.max_value=l!==void 0&&this.hass.states[l]&&!isNaN(parseFloat(this.hass.states[l].state))?parseFloat(this.hass.states[l].state):B.value;const X=this.resolveEntityNumber(P);const Y=X!=null?X:u!=null?parseFloat(String(u)):j.setpoint!=null?parseFloat(String(j.setpoint)):B.value;const ee=p!=null?parseFloat(String(p)):j.step!=null?parseFloat(String(j.step)):.1;const te=w!=null?parseFloat(String(w)):j.step_low!=null?parseFloat(String(j.step_low)):ee;const se=A!=null?parseFloat(String(A)):j.step_high!=null?parseFloat(String(j.step_high)):ee;const oe=Math.max(this.countDecimals(Y),this.countDecimals(te),this.countDecimals(se));B.setpoint=Y;const ae=this.resolveEntityNumber(T);const re=ae!=null?ae:f!==void 0?Number(f):-1/0;let ne,le,ce,de,ue;if(_==="quality"&&O&&O.length===4){ne=Math.max(re,0);le=Math.max(re,O[0]);ce=Math.max(re,O[1]);de=Math.max(re,O[2]);ue=Math.max(re,O[3])}else{ne=Math.max(re,Y-2*te);le=Math.max(re,Y-te);ce=Math.max(re,Y);de=Math.max(re,Y+se);ue=Math.max(re,Y+2*se)}B.setpoint_class=[ne.toFixed(oe),le.toFixed(oe),ce.toFixed(oe),de.toFixed(oe),ue.toFixed(oe)];B.separator=q.display.show_labels?"-":"";B.color="transparent";if(B.value!==null)B.value=Math.max(re,B.value);let pe="";if(_==="quality"&&O&&O.length===4)if(Number(B.value)<Number(B.setpoint_class[1])){B.state=q.display.show_labels?this.getTranslatedText("quality.1"):"";B.color=q.colors.cool;pe="perfect"}else if(Number(B.value)<Number(B.setpoint_class[2])){B.state=q.display.show_labels?this.getTranslatedText("quality.2"):"";B.color=q.colors.normal;pe="ok"}else if(Number(B.value)<Number(B.setpoint_class[3])){B.state=q.display.show_labels?this.getTranslatedText("quality.3"):"";B.color=q.colors.low;pe="warning"}else if(Number(B.value)<Number(B.setpoint_class[4])){B.state=q.display.show_labels?this.getTranslatedText("quality.4"):"";B.color=q.colors.warn;pe="bad"}else{B.state=q.display.show_labels?this.getTranslatedText("quality.5"):"";B.color=q.colors.hazardous;pe="hazardous"}else if(_==="heatflow")if(Number(B.value)<Number(B.setpoint_class[1])){B.state=q.display.show_labels?this.getTranslatedText("state.1"):"";B.color=q.colors.cool}else if(Number(B.value)>=Number(B.setpoint_class[1])&&Number(B.value)<Number(B.setpoint_class[3])){B.state=q.display.show_labels?this.getTranslatedText("state.3"):"";B.color=q.colors.normal}else{B.state=q.display.show_labels?this.getTranslatedText("state.5"):"";B.color=q.colors.warn}else if(Number(B.value)<Number(B.setpoint_class[0])){B.state=q.display.show_labels?this.getTranslatedText("state.1"):"";B.color=q.colors.warn}else if(Number(B.value)>=Number(B.setpoint_class[0])&&Number(B.value)<Number(B.setpoint_class[1])){B.state=q.display.show_labels?this.getTranslatedText("state.2"):"";B.color=q.colors.low}else if(Number(B.value)>=Number(B.setpoint_class[1])&&Number(B.value)<Number(B.setpoint_class[2])){B.state=q.display.show_labels?this.getTranslatedText("state.3"):"";B.color=q.colors.normal}else if(Number(B.value)>=Number(B.setpoint_class[2])&&Number(B.value)<Number(B.setpoint_class[3])){B.state=q.display.show_labels?this.getTranslatedText("state.4"):"";B.color=q.colors.normal}else if(Number(B.value)>=Number(B.setpoint_class[3])&&Number(B.value)<Number(B.setpoint_class[4])){B.state=q.display.show_labels?this.getTranslatedText("state.5"):"";B.color=q.colors.low}else if(Number(B.value)>=Number(B.setpoint_class[4])){B.state=q.display.show_labels?this.getTranslatedText("state.6"):"";B.color=q.colors.warn}B.progressClass=e==="temperature"?"progress-temp":"progress";B.blink=false;if(F)if(F==="warning"){if(pe==="warning"||pe==="bad"||pe==="hazardous")B.blink=true}else if(F==="bad"){if(pe==="bad"||pe==="hazardous")B.blink=true}else if(F==="hazardous")if(pe==="hazardous")B.blink=true;let he,me;let ge;if(_==="quality"&&O&&O.length===4){const e=[0,O[0],O[1],O[2],O[3],O[3]+(O[3]-O[2])];ge=s=>{if(s<=e[0])return 0;if(s>=e[5])return 1;for(let o=0;o<5;o++)if(s>=e[o]&&s<=e[o+1]){const r=e[o+1]-e[o];const l=r>0?(s-e[o])/r:0;return o*.2+l*.2}return 1}}else{he=Y-3*te;me=3*te+3*se;const clamp01=e=>Math.max(0,Math.min(1,e));ge=e=>me>0?clamp01((e-he)/me):0}const _e=ge(B.value);B.pct=(_e*100).toFixed(1);B.pct_marker=_e*100;B.side_align=_==="quality"?"left":B.value>Y?"right":"left";B.pct_cursor=_==="quality"?_e*100:B.value>Y?100-_e*100:_e*100;B.pct_state_step=_==="quality"?_e*100+1:B.value>Y?100-_e*100+1:_e*100+1;const ye=ge(B.min_value)*100;const fe=ge(B.max_value)*100;B.pct_min=_==="quality"?ye:B.value>Y?100-ye:ye;B.pct_max=_==="quality"?fe:B.value>Y?100-fe:fe;B.label_positions=[ge(ne)*100,ge(le)*100,ge(ce)*100,ge(de)*100,ge(ue)*100];return B}countDecimals(e){if(e===void 0||e===null)return 0;if(Math.floor(e)===e)return 0;const s=e.toString();if(s.includes("."))return s.split(".")[1].length||0;return 0}resolveStatus(){const e=this.getConfig();const s=e.status_entity;if(!s)return null;const o=this.hass?.states?.[s];if(!o)return null;const r=o.state;if(r==="unavailable"||r==="unknown")return null;const l=e.colors;const u=o.attributes?.friendly_name;const p=parseFloat(r);let h;if(!isNaN(p))h=p<=33?"danger":p<=66?"warning":"good";else{const e=r.toLowerCase();const s=["safe","good","ok","healthy","optimal"];const o=["warning","caution","moderate"];const l=["danger","critical","bad","poor","unsafe"];if(s.includes(e))h="good";else if(o.includes(e))h="warning";else if(l.includes(e))h="danger";else h="unknown"}const m={good:l.normal,warning:l.low,danger:l.warn,unknown:"var(--disabled-text-color, #bdbdbd)"};const g={good:"mdi:check-circle",warning:"mdi:alert",danger:"mdi:alert-octagon",unknown:"mdi:help-circle"};return{label:r,color:m[h],icon:g[h],friendly_name:u,entity_id:s}}resolveEntityNumber(e){if(!e)return null;const s=this.hass?.states?.[e];if(!s)return null;const o=parseFloat(s.state);return isNaN(o)?null:o}resolveLastUpdated(e,s,o){const r=s?this.hass?.states?.[s]:e;if(!r)return this.timeFromNow(e.last_updated);if(o){const e=r.attributes?.[o];if(e)return this.timeFromNow(String(e))}return this.timeFromNow(r.last_updated)}timeFromNow(e){const s=new Date(e);const o=Date.now()-s.getTime();const t=(e,s)=>{const o=s===1?"time":"time_plural";const r={[e]:s};return this.getTranslatedText(`${o}.${e}`,r)};const r=Math.floor(o/6e4);const l=Math.floor(r/60);const u=Math.floor(l/24);if(r<1)return t("seconds",0);if(r<60)return t("minutes",r);if(l<24)return t("hours",l);return t("days",u)}getConfig(){return this.config}setConfig(e){const s=this.constructor.SENSORS||{};const o=Object.keys(s);const r={display:getDisplayConfig(),colors:getColorConfig()};const l={...e,status_entity:e.status_entity,display:{...r.display,...e.display||{}},colors:{...r.colors,...e.colors||{}},sensors:{}};if(!e.sensors)throw new Error('Configuration requires sensors to be defined under the "sensors" key.');Object.entries(e.sensors).forEach(([e,r])=>{const u=s[e]||{};const p=Array.isArray(r)?[...r]:[{...r}];if(p.length===0)throw new Error(`Empty sensor array for ${e}`);const h=p.map(e=>({...u,...e,nameDefinedByUser:!!e.name}));h.forEach((s,r)=>{if(!s.entity)throw new Error(`Missing entity for ${e}[${r}]`);if(s.nameDefinedByUser)s.title=s.name;if(o.length>0&&!o.includes(e))s.invalid=true;else s.invalid=false});l.sensors[e]=h});this.config=l}}__decorate([n$1({attribute:false})],MonitorCardBase.prototype,"hass",void 0);__decorate([n$1({attribute:false})],MonitorCardBase.prototype,"config",void 0);const Te={temperature:{name:"Temperature",unit:"°C",setpoint:21,step:1,mode:"heatflow"},humidity:{name:"Humidity",unit:"%",setpoint:45,step:5,mode:"centric",min_limit:0},co2:{name:"CO2",unit:"ppm",setpoint:800,step:200,mode:"quality",min_limit:0,limits:[500,800,1200,2500]},pm25:{name:"PM2.5",unit:"µg/m³",setpoint:12,step:6,mode:"quality",min_limit:0,limits:[2,5,10,15]},pm10:{name:"PM10",unit:"µg/m³",setpoint:25,step:12,mode:"quality",min_limit:0,limits:[10,20,35,50]},voc:{name:"VOC",unit:"ppb",setpoint:250,step:100,mode:"quality",min_limit:0,limits:[100,200,250,400]},tvoc:{name:"TVOC",unit:"µg/m³",setpoint:300,step:100,mode:"quality",min_limit:0,limits:[100,200,250,400]},formaldehyde:{name:"Formaldehyde",unit:"µg/m³",setpoint:30,step:15,mode:"quality",min_limit:0,limits:[10,30,50,100]},radon:{name:"Radon",unit:"Bq/m³",setpoint:100,step:50,mode:"quality",min_limit:0,limits:[10,50,100,200]},aqi:{name:"Air Quality Index",unit:"AQI",setpoint:50,step:25,mode:"centric",min_limit:0},pressure:{name:"Atmospheric Pressure",unit:"hPa",setpoint:1013,step:10,mode:"centric"},noise:{name:"Noise Level",unit:"dB",setpoint:40,step:10,mode:"centric",min_limit:0}};const ze="0.8.1";const Me="2026-04-21-08-26";const Ne=`${ze} (${Me})`;console.info(`%c AIR-QUALITY-CARD %c ${Ne} `,"color: white; background: #00b894; font-weight: 700;","color: #00b894; background: white; font-weight: 700;");window.customCards=window.customCards||[];window.customCards.push({type:"air-quality-card",name:"Air Quality Card",description:"Monitor indoor air quality (CO2, PM2.5, VOC, humidity, temperature, etc.)",preview:true,documentationURL:"https://github.com/wilsto/air-quality-card"});let Oe=class AirQualityCard extends MonitorCardBase{static{this.CARD_INFO={cardType:"air-quality-card",cardName:"Air Quality Card",cardDescription:"A Home Assistant card for monitoring indoor and outdoor air quality (CO2, PM2.5, VOC, humidity, etc.)"}}static{this.SENSORS=Te}static{this.IMAGE_BASE_URL="https://raw.githubusercontent.com/wilsto/air-quality-card/master/resources"}static async getConfigElement(){await Promise.resolve().then(()=>Ue);return document.createElement("air-quality-card-editor")}static getStubConfig(){return{sensors:{co2:{entity:""}}}}};Oe=__decorate([t$2("air-quality-card")],Oe);function fireEvent(e,s,o){e.dispatchEvent(new CustomEvent(s,{bubbles:true,composed:true,detail:o}))}const He=[{name:"title",selector:{text:{}}},{name:"status_entity",label:"Status entity",selector:{entity:{}}}];const Fe=[{name:"compact",selector:{boolean:{}}},{name:"show_names",selector:{boolean:{}}},{name:"show_labels",selector:{boolean:{}}},{name:"show_last_updated",selector:{boolean:{}}},{name:"show_icons",selector:{boolean:{}}},{name:"show_units",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"language",selector:{select:{options:[{value:"en",label:"English"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"es",label:"Español"},{value:"it",label:"Italiano"},{value:"pt",label:"Português"},{value:"nl",label:"Nederlands"},{value:"pl",label:"Polski"},{value:"sk",label:"Slovenčina"},{value:"pt-br",label:"Português (Brasil)"},{value:"zh-cn",label:"中文 (简体)"},{value:"zh-tw",label:"中文 (繁體)"}]}}}];const Re=[{name:"low",label:"Low",selector:{text:{}}},{name:"warn",label:"Warn",selector:{text:{}}},{name:"normal",label:"Normal",selector:{text:{}}},{name:"cool",label:"Cool",selector:{text:{}}},{name:"marker",label:"Marker",selector:{text:{}}},{name:"hi_low",label:"Hi/Low",selector:{text:{}}}];const Be=i$3`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .section-header {
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-text-color);
    margin-bottom: 4px;
  }

  ha-expansion-panel {
    --expansion-panel-summary-padding: 0 16px;
    --expansion-panel-content-padding: 0 16px 16px;
  }

  /* Sensor editor styles */
  .sensor-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sensor-row {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    overflow: hidden;
  }

  .sensor-row-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    cursor: pointer;
    background: var(--secondary-background-color);
  }

  .sensor-row-header:hover {
    background: var(--primary-background-color);
  }

  .sensor-row-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
  }

  .sensor-row-actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .sensor-row-content {
    padding: 8px 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-top: 1px solid var(--divider-color);
  }

  .sensor-row-entity {
    display: flex;
    gap: 8px;
    align-items: flex-end;
  }

  .sensor-row-entity ha-entity-picker {
    flex: 1;
  }

  .sensor-advanced {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 8px;
    border-top: 1px dashed var(--divider-color);
  }

  .sensor-field-row {
    display: flex;
    gap: 8px;
  }

  .sensor-field-row > * {
    flex: 1;
  }

  .add-sensor-row {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .add-sensor-row > *:first-child {
    flex: 1;
  }

  .freeform-input {
    display: flex;
    gap: 8px;
    align-items: flex-end;
  }

  .freeform-input ha-textfield {
    flex: 1;
  }

  ha-icon-button {
    --mdc-icon-button-size: 36px;
    --mdc-icon-size: 20px;
  }

  .delete-btn {
    color: var(--error-color);
  }

  .expand-btn {
    color: var(--secondary-text-color);
  }

  .empty-message {
    padding: 16px;
    text-align: center;
    color: var(--secondary-text-color);
    font-style: italic;
  }
`;class MonitorEditorBase extends i{static{this.styles=Be}setConfig(e){this._config={...e,display:{...Ee,...e.display},colors:{...Pe,...e.colors},sensors:e.sensors||{}}}render(){if(!this.hass||!this._config)return ie``;return ie`
      <div class="card-config">
        <div class="section">
          <ha-form
            .hass=${this.hass}
            .data=${{title:this._config.title||"",status_entity:this._config.status_entity||""}}
            .schema=${He}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._generalChanged}
          ></ha-form>
        </div>

        <div class="section">
          <div class="section-header">Sensors</div>
          ${this.renderSensorSection()}
        </div>

        <ha-expansion-panel .header=${"Display Options"}>
          <ha-form
            .hass=${this.hass}
            .data=${this._config.display}
            .schema=${Fe}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._displayChanged}
          ></ha-form>
        </ha-expansion-panel>

        <ha-expansion-panel .header=${"Colors"}>
          <ha-form
            .hass=${this.hass}
            .data=${this._config.colors}
            .schema=${Re}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._colorsChanged}
          ></ha-form>
        </ha-expansion-panel>
      </div>
    `}_generalChanged(e){e.stopPropagation();const s=e.detail.value;this._config={...this._config,title:s.title||void 0,status_entity:s.status_entity||void 0};this._fireConfigChanged()}_displayChanged(e){e.stopPropagation();this._config={...this._config,display:{...this._config.display,...e.detail.value}};this._fireConfigChanged()}_colorsChanged(e){e.stopPropagation();this._config={...this._config,colors:{...this._config.colors,...e.detail.value}};this._fireConfigChanged()}_sensorsChanged(e){e.stopPropagation();this._config={...this._config,sensors:e.detail.sensors};this._fireConfigChanged()}_fireConfigChanged(){fireEvent(this,"config-changed",{config:this._config})}_computeLabel(e){const s=e.label||e.name;return s.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}}__decorate([n$1({attribute:false})],MonitorEditorBase.prototype,"hass",void 0);__decorate([r$1()],MonitorEditorBase.prototype,"_config",void 0);class MonitorSensorEditor extends i{constructor(){super(...arguments);this.sensors={};this.registry={};this.freeform=false;this._expanded={};this._newSensorType=""}static{this.styles=Be}render(){const e=Object.entries(this.sensors);return ie`
      <div class="sensor-list">
        ${e.length===0?ie`<div class="empty-message">No sensors configured. Add one below.</div>`:e.map(([e,s])=>this._renderSensorType(e,s))}
        ${this._renderAddSensor()}
      </div>
    `}_renderSensorType(e,s){if(Array.isArray(s))return ie`${s.map((o,r)=>this._renderSensorRow(e,o,r,s.length>1))}`;return this._renderSensorRow(e,s,0,false)}_renderSensorRow(e,s,o,r){const l=r?`${e}-${o}`:e;const u=this._expanded[l]||false;const p=this.registry[e];const h=p?.name||e;const m=r?`${h} #${o+1}`:h;return ie`
      <div class="sensor-row">
        <div class="sensor-row-header" @click=${()=>this._toggleExpand(l)}>
          <div class="sensor-row-title">
            <ha-icon icon=${u?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            <span>${m}</span>
            ${s.entity?ie`<span
                  style="color: var(--secondary-text-color); font-weight: normal; font-size: 12px;"
                  >${s.entity}</span
                >`:ae}
          </div>
          <div class="sensor-row-actions">
            <ha-icon-button
              class="delete-btn"
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              @click=${s=>{s.stopPropagation();this._removeSensor(e,o)}}
            ></ha-icon-button>
          </div>
        </div>
        ${u?this._renderSensorFields(e,s,o):ae}
      </div>
    `}_renderSensorFields(e,s,o){return ie`
      <div class="sensor-row-content">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${s.entity||""}
          .label=${"Entity"}
          allow-custom-entity
          @value-changed=${s=>this._updateField(e,o,"entity",s.detail.value)}
        ></ha-entity-picker>

        <div class="sensor-field-row">
          <ha-textfield
            .label=${"Name override"}
            .value=${s.name||""}
            @change=${s=>this._updateField(e,o,"name",s.target.value||void 0)}
          ></ha-textfield>
          <ha-textfield
            .label=${"Unit override"}
            .value=${s.unit||""}
            @change=${s=>this._updateField(e,o,"unit",s.target.value||void 0)}
          ></ha-textfield>
        </div>

        <div class="sensor-field-row">
          <ha-textfield
            .label=${"Setpoint"}
            .value=${s.setpoint!=null?String(s.setpoint):""}
            type="number"
            @change=${s=>{const r=s.target.value;this._updateField(e,o,"setpoint",r?Number(r):void 0)}}
          ></ha-textfield>
          <ha-textfield
            .label=${"Step"}
            .value=${s.step!=null?String(s.step):""}
            type="number"
            @change=${s=>{const r=s.target.value;this._updateField(e,o,"step",r?Number(r):void 0)}}
          ></ha-textfield>
          <ha-textfield
            .label=${"Min limit"}
            .value=${s.min_limit!=null?String(s.min_limit):""}
            type="number"
            @change=${s=>{const r=s.target.value;this._updateField(e,o,"min_limit",r?Number(r):void 0)}}
          ></ha-textfield>
        </div>

        <div class="sensor-field-row">
          <ha-textfield
            .label=${"Step low"}
            .value=${s.step_low!=null?String(s.step_low):""}
            type="number"
            @change=${s=>{const r=s.target.value;this._updateField(e,o,"step_low",r?Number(r):void 0)}}
          ></ha-textfield>
          <ha-textfield
            .label=${"Step high"}
            .value=${s.step_high!=null?String(s.step_high):""}
            type="number"
            @change=${s=>{const r=s.target.value;this._updateField(e,o,"step_high",r?Number(r):void 0)}}
          ></ha-textfield>
        </div>

        <div class="sensor-field-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${s.min||""}
            .label=${"Min entity"}
            allow-custom-entity
            @value-changed=${s=>this._updateField(e,o,"min",s.detail.value||void 0)}
          ></ha-entity-picker>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${s.max||""}
            .label=${"Max entity"}
            allow-custom-entity
            @value-changed=${s=>this._updateField(e,o,"max",s.detail.value||void 0)}
          ></ha-entity-picker>
        </div>

        <div class="sensor-field-row">
          <ha-icon-picker
            .hass=${this.hass}
            .value=${s.icon||""}
            .label=${"Icon"}
            @value-changed=${s=>this._updateField(e,o,"icon",s.detail.value||void 0)}
          ></ha-icon-picker>
          <ha-textfield
            .label=${"Image URL"}
            .value=${s.image_url||""}
            @change=${s=>this._updateField(e,o,"image_url",s.target.value||void 0)}
          ></ha-textfield>
        </div>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${s.availability_entity||""}
          .label=${"Availability entity (optional — grays out when off)"}
          .includeDomains=${["binary_sensor","switch","input_boolean"]}
          allow-custom-entity
          @value-changed=${s=>this._updateField(e,o,"availability_entity",s.detail.value||void 0)}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${s.battery_entity||""}
          .label=${"Battery entity (optional — shows battery level)"}
          .includeDomains=${["sensor"]}
          allow-custom-entity
          @value-changed=${s=>this._updateField(e,o,"battery_entity",s.detail.value||void 0)}
        ></ha-entity-picker>

        <div class="sensor-field-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${s.last_updated_entity||""}
            .label=${"Last updated entity (optional)"}
            allow-custom-entity
            @value-changed=${s=>this._updateField(e,o,"last_updated_entity",s.detail.value||void 0)}
          ></ha-entity-picker>
          <ha-textfield
            .label=${"Last updated attribute"}
            .value=${s.last_updated_attribute||""}
            @change=${s=>this._updateField(e,o,"last_updated_attribute",s.target.value||void 0)}
          ></ha-textfield>
        </div>

        <div class="sensor-field-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${s.setpoint_entity||""}
            .label=${"Setpoint entity (optional — overrides static setpoint)"}
            .includeDomains=${["input_number","number","sensor"]}
            allow-custom-entity
            @value-changed=${s=>this._updateField(e,o,"setpoint_entity",s.detail.value||void 0)}
          ></ha-entity-picker>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${s.min_limit_entity||""}
            .label=${"Min limit entity (optional — overrides static min_limit)"}
            .includeDomains=${["input_number","number","sensor"]}
            allow-custom-entity
            @value-changed=${s=>this._updateField(e,o,"min_limit_entity",s.detail.value||void 0)}
          ></ha-entity-picker>
        </div>

        ${this.freeform||!this.registry[e]||s.mode==="quality"?ie`
              <div class="sensor-field-row">
                <ha-select
                  .label=${"Mode"}
                  .value=${s.mode||"centric"}
                  @selected=${s=>this._updateField(e,o,"mode",s.target.value)}
                >
                  <mwc-list-item value="centric">Centric</mwc-list-item>
                  <mwc-list-item value="heatflow">Heatflow</mwc-list-item>
                  <mwc-list-item value="quality">Quality</mwc-list-item>
                </ha-select>
              </div>
              ${s.mode==="quality"?ie`
                    <div class="sensor-field-row">
                      <ha-textfield
                        .label=${"Limits (comma-separated, e.g. 10,20,35,50)"}
                        .value=${s.limits?s.limits.join(","):""}
                        @change=${s=>{const r=s.target.value;const l=r?r.split(",").map(e=>Number(e.trim())).filter(e=>!isNaN(e)):void 0;this._updateField(e,o,"limits",l)}}
                      ></ha-textfield>
                    </div>
                  `:ae}
            `:ae}

        <div class="sensor-field-row">
          <ha-select
            .label=${"Blink Threshold"}
            .value=${s.blink_threshold||""}
            @selected=${s=>{const r=s.target.value;this._updateField(e,o,"blink_threshold",r===""?void 0:r)}}
          >
            <mwc-list-item value="">None</mwc-list-item>
            <mwc-list-item value="warning">Warning or worse</mwc-list-item>
            <mwc-list-item value="bad">Bad or worse</mwc-list-item>
            <mwc-list-item value="hazardous">Hazardous</mwc-list-item>
          </ha-select>
        </div>
      </div>
    `}_renderAddSensor(){if(this.freeform)return ie`
        <div class="freeform-input">
          <ha-textfield
            .label=${"Sensor type key"}
            .value=${this._newSensorType}
            @input=${e=>{this._newSensorType=e.target.value}}
          ></ha-textfield>
          <ha-icon-button
            .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
            @click=${this._addFreeformSensor}
          ></ha-icon-button>
        </div>
      `;const e=Object.entries(this.registry).filter(([e])=>!this.sensors[e]).map(([e,s])=>({value:e,label:s.name,category:s.category||"other"}));if(e.length===0)return ie`<div class="empty-message">All sensor types are configured.</div>`;const s={water_chemistry:"Essential Water Chemistry",chemical_balance:"Chemical Balance",treatment:"Treatment & Sanitization",equipment:"Equipment & Maintenance",other:"Other"};const o=e.reduce((e,s)=>{const o=s.category;if(!e[o])e[o]=[];e[o].push(s);return e},{});const r=["water_chemistry","chemical_balance","treatment","equipment","other"];return ie`
      <div class="add-sensor-row">
        <ha-select
          .label=${"Add sensor"}
          .value=${""}
          @selected=${e=>{const s=e.target.value;if(s)this._addPresetSensor(s)}}
        >
          ${r.filter(e=>o[e]?.length>0).map(e=>ie`
                <mwc-list-item disabled value="" style="opacity: 0.6; font-weight: bold;">
                  — ${s[e]} —
                </mwc-list-item>
                ${o[e].map(e=>ie`<mwc-list-item .value=${e.value}>${e.label}</mwc-list-item>`)}
              `)}
        </ha-select>
      </div>
    `}_toggleExpand(e){this._expanded={...this._expanded,[e]:!this._expanded[e]}}_addPresetSensor(e){const s={...this.sensors,[e]:{entity:""}};this._expanded={...this._expanded,[e]:true};this._fireSensorsChanged(s)}_addFreeformSensor(){const e=this._newSensorType.trim().toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"");if(!e)return;if(this.sensors[e]){const s=this.sensors[e];const o=Array.isArray(s)?[...s]:[s];o.push({entity:""});const r={...this.sensors,[e]:o};const l=`${e}-${o.length-1}`;this._expanded={...this._expanded,[l]:true};this._fireSensorsChanged(r)}else{const s={...this.sensors,[e]:{entity:""}};this._expanded={...this._expanded,[e]:true};this._fireSensorsChanged(s)}this._newSensorType=""}_removeSensor(e,s){const o=this.sensors[e];if(Array.isArray(o)){const r=o.filter((e,o)=>o!==s);if(r.length===0){const{[e]:s,...o}=this.sensors;this._fireSensorsChanged(o)}else if(r.length===1)this._fireSensorsChanged({...this.sensors,[e]:r[0]});else this._fireSensorsChanged({...this.sensors,[e]:r})}else{const{[e]:s,...o}=this.sensors;this._fireSensorsChanged(o)}}_updateField(e,s,o,r){const l=this.sensors[e];if(Array.isArray(l)){const u=[...l];u[s]={...u[s],[o]:r};if(r===void 0||r==="")delete u[s][o];this._fireSensorsChanged({...this.sensors,[e]:u})}else{const s={...l,[o]:r};if(r===void 0||r==="")delete s[o];this._fireSensorsChanged({...this.sensors,[e]:s})}}_fireSensorsChanged(e){this.dispatchEvent(new CustomEvent("sensors-changed",{bubbles:true,composed:true,detail:{sensors:e}}))}}__decorate([n$1({attribute:false})],MonitorSensorEditor.prototype,"hass",void 0);__decorate([n$1({attribute:false})],MonitorSensorEditor.prototype,"sensors",void 0);__decorate([n$1({attribute:false})],MonitorSensorEditor.prototype,"registry",void 0);__decorate([n$1({type:Boolean})],MonitorSensorEditor.prototype,"freeform",void 0);__decorate([r$1()],MonitorSensorEditor.prototype,"_expanded",void 0);__decorate([r$1()],MonitorSensorEditor.prototype,"_newSensorType",void 0);if(!customElements.get("monitor-sensor-editor"))customElements.define("monitor-sensor-editor",MonitorSensorEditor);let qe=class AirQualityCardEditor extends MonitorEditorBase{get sensorsRegistry(){return Te}get hasPresets(){return true}renderSensorSection(){return ie`
      <monitor-sensor-editor
        .hass=${this.hass}
        .sensors=${this._config.sensors||{}}
        .registry=${this.sensorsRegistry}
        @sensors-changed=${this._sensorsChanged}
      ></monitor-sensor-editor>
    `}};qe=__decorate([t$2("air-quality-card-editor")],qe);const Ue=Object.freeze(Object.defineProperty({__proto__:null,get AirQualityCardEditor(){return qe}},Symbol.toStringTag,{value:"Module"}));export{Oe as AirQualityCard};
