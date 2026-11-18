(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.oE(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jK(b)
return new s(c,this)}:function(){if(s===null)s=A.jK(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jK(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
jP(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jM(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.jN==null){A.oq()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.j(A.kk("Return interceptor for "+A.D(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.fu
if(o==null)o=$.fu=A.iJ(n)
p=q[o]}if(p!=null)return p
p=A.ov(a)
if(p!=null)return p
if(typeof a=="function")return B.a4
s=Object.getPrototypeOf(a)
if(s==null)return B.R
if(s===Object.prototype)return B.R
if(typeof q=="function"){o=$.fu
if(o==null)o=$.fu=A.iJ(n)
Object.defineProperty(q,o,{value:B.H,enumerable:false,writable:true,configurable:true})
return B.H}return B.H},
m3(a,b){if(a<0||a>4294967295)throw A.j(A.ap(a,0,4294967295,"length",null))
return J.m4(new Array(a),b)},
m4(a,b){var s=A.c(a,b.h("S<0>"))
s.$flags=1
return s},
k1(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
m5(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.k1(r))break;++b}return b},
k2(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.n(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.k1(q))break}return b},
aL(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cd.prototype
return J.dq.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.ce.prototype
if(typeof a=="boolean")return J.dp.prototype
if(Array.isArray(a))return J.S.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
if(typeof a=="symbol")return J.ci.prototype
if(typeof a=="bigint")return J.cg.prototype
return a}if(a instanceof A.J)return a
return J.jM(a)},
ei(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(Array.isArray(a))return J.S.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
if(typeof a=="symbol")return J.ci.prototype
if(typeof a=="bigint")return J.cg.prototype
return a}if(a instanceof A.J)return a
return J.jM(a)},
jL(a){if(a==null)return a
if(Array.isArray(a))return J.S.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
if(typeof a=="symbol")return J.ci.prototype
if(typeof a=="bigint")return J.cg.prototype
return a}if(a instanceof A.J)return a
return J.jM(a)},
ol(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.bJ.prototype
return a},
as(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aL(a).P(a,b)},
c_(a,b){return J.jL(a).k(a,b)},
jR(a,b){return J.ol(a).bh(a,b)},
lL(a,b){return J.jL(a).M(a,b)},
aM(a){return J.aL(a).gE(a)},
aN(a){return J.jL(a).gu(a)},
c0(a){return J.ei(a).gn(a)},
lM(a){return J.aL(a).gF(a)},
aI(a){return J.aL(a).m(a)},
dm:function dm(){},
dp:function dp(){},
ce:function ce(){},
ch:function ch(){},
b_:function b_(){},
dE:function dE(){},
bJ:function bJ(){},
aP:function aP(){},
cg:function cg(){},
ci:function ci(){},
S:function S(a){this.$ti=a},
dn:function dn(){},
eS:function eS(a){this.$ti=a},
be:function be(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cf:function cf(){},
cd:function cd(){},
dq:function dq(){},
bi:function bi(){}},A={ji:function ji(){},
k5(a){return new A.aK("Field '"+a+"' has been assigned during initialization.")},
m8(a){return new A.aK("Field '"+a+"' has not been initialized.")},
ma(a){return new A.aK("Local '"+a+"' has not been initialized.")},
m7(a){return new A.aK("Field '"+a+"' has already been initialized.")},
m9(a){return new A.aK("Local '"+a+"' has already been initialized.")},
iK(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b5(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
js(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
le(a,b,c){return a},
jO(a){var s,r
for(s=$.ar.length,r=0;r<s;++r)if(a===$.ar[r])return!0
return!1},
ka(a,b,c,d){if(t.gw.b(a))return new A.c7(a,b,c.h("@<0>").O(d).h("c7<1,2>"))
return new A.bk(a,b,c.h("@<0>").O(d).h("bk<1,2>"))},
m1(){return new A.bI("No element")},
aK:function aK(a){this.a=a},
bz:function bz(a){this.a=a},
fe:function fe(){},
z:function z(){},
B:function B(){},
G:function G(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
ah:function ah(){},
bm:function bm(){},
bK:function bK(){},
N:function N(a,b){this.a=a
this.$ti=b},
bg(a,b,c){var s,r,q,p,o,n,m,l=A.jl(a.gI(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.bd)(l),++j,p=o){r=l[j]
c.a(a.p(0,r))
o=p+1
q[r]=p}n=A.jl(a.ga7(),!0,c)
m=new A.a_(q,n,b.h("@<0>").O(c).h("a_<1,2>"))
m.$keys=l
return m}return new A.c3(A.k8(a,b,c),b.h("@<0>").O(c).h("c3<1,2>"))},
lU(){throw A.j(A.bn("Cannot modify unmodifiable Map"))},
lV(){throw A.j(A.bn("Cannot modify constant Set"))},
lr(a){var s=A.lq(a)
if(s!=null)return s
return"minified:"+a},
p7(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
D(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aI(a)
return s},
dF(a){var s,r=$.kb
if(r==null)r=$.kb=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jn(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.n(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
dG(a){var s,r,q,p
if(a instanceof A.J)return A.aq(A.bW(a),null)
s=J.aL(a)
if(s===B.a2||s===B.a5||t.ak.b(a)){r=B.J(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aq(A.bW(a),null)},
kc(a){var s,r,q
if(a==null||typeof a=="number"||A.jE(a))return J.aI(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aX)return a.m(0)
if(a instanceof A.bs)return a.bf(!0)
s=$.lI()
for(r=0;r<1;++r){q=s[r].cW(a)
if(q!=null)return q}return"Instance of '"+A.dG(a)+"'"},
mg(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
Z(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.n.aK(s,10)|55296)>>>0,s&1023|56320)}}throw A.j(A.ap(a,0,1114111,null,null))},
oo(a){throw A.j(A.l9(a))},
n(a,b){if(a==null)J.c0(a)
throw A.j(A.iH(a,b))},
iH(a,b){var s,r="index"
if(!A.kT(b))return new A.aJ(!0,b,r,null)
s=J.c0(a)
if(b<0||b>=s)return A.k0(b,s,a,r)
return new A.cv(null,null,!0,b,r,"Value not in range")},
oh(a,b,c){if(a>c)return A.ap(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ap(b,a,c,"end",null)
return new A.aJ(!0,b,"end",null)},
l9(a){return new A.aJ(!0,a,null,null)},
j(a){return A.a6(a,new Error())},
a6(a,b){var s
if(a==null)a=new A.cG()
b.dartException=a
s=A.oG
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
oG(){return J.aI(this.dartException)},
Q(a,b){throw A.a6(a,b==null?new Error():b)},
ax(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.Q(A.nl(a,b,c),s)},
nl(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.c.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.cH("'"+s+"': Cannot "+o+" "+l+k+n)},
bd(a){throw A.j(A.ak(a))},
aU(a){var s,r,q,p,o,n
a=A.lo(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.fg(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
fh(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kj(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jj(a,b){var s=b==null,r=s?null:b.method
return new A.dr(a,r,s?null:b.receiver)},
bZ(a){if(a==null)return new A.f0(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bx(a,a.dartException)
return A.o0(a)},
bx(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
o0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.n.aK(r,16)&8191)===10)switch(q){case 438:return A.bx(a,A.jj(A.D(s)+" (Error "+q+")",null))
case 445:case 5007:A.D(s)
return A.bx(a,new A.ct())}}if(a instanceof TypeError){p=$.lt()
o=$.lu()
n=$.lv()
m=$.lw()
l=$.lz()
k=$.lA()
j=$.ly()
$.lx()
i=$.lC()
h=$.lB()
g=p.V(s)
if(g!=null)return A.bx(a,A.jj(A.v(s),g))
else{g=o.V(s)
if(g!=null){g.method="call"
return A.bx(a,A.jj(A.v(s),g))}else if(n.V(s)!=null||m.V(s)!=null||l.V(s)!=null||k.V(s)!=null||j.V(s)!=null||m.V(s)!=null||i.V(s)!=null||h.V(s)!=null){A.v(s)
return A.bx(a,new A.ct())}}return A.bx(a,new A.dR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cE()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bx(a,new A.aJ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cE()
return a},
ej(a){var s
if(a==null)return new A.cT(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cT(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
lk(a){if(a==null)return J.aM(a)
if(typeof a=="object")return A.dF(a)
return J.aM(a)},
oj(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
ok(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
nw(a,b,c,d,e,f){t.Z.a(a)
switch(A.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.j(new A.ft("Unsupported number of arguments for wrapped closure"))},
iG(a,b){var s=a.$identity
if(!!s)return s
s=A.oe(a,b)
a.$identity=s
return s},
oe(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.nw)},
lT(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dM().constructor.prototype):Object.create(new A.by(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jX(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lP(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jX(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lP(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.j("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.lN)}throw A.j("Error in functionType of tearoff")},
lQ(a,b,c,d){var s=A.jW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jX(a,b,c,d){if(c)return A.lS(a,b,d)
return A.lQ(b.length,d,a,b)},
lR(a,b,c,d){var s=A.jW,r=A.lO
switch(b?-1:a){case 0:throw A.j(new A.dJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lS(a,b,c){var s,r
if($.jU==null)$.jU=A.jT("interceptor")
if($.jV==null)$.jV=A.jT("receiver")
s=b.length
r=A.lR(s,c,a,b)
return r},
jK(a){return A.lT(a)},
lN(a,b){return A.d_(v.typeUniverse,A.bW(a.a),b)},
jW(a){return a.a},
lO(a){return a.b},
jT(a){var s,r,q,p=new A.by("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.j(A.ae("Field name "+a+" not found."))},
iJ(a){return v.getIsolateTag(a)},
ov(a){var s,r,q,p,o,n=A.v($.lh.$1(a)),m=$.iI[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iO[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aw($.l7.$2(a,n))
if(q!=null){m=$.iI[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iO[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jb(s)
$.iI[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iO[n]=s
return s}if(p==="-"){o=A.jb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.lm(a,s)
if(p==="*")throw A.j(A.kk(n))
if(v.leafTags[n]===true){o=A.jb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.lm(a,s)},
lm(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jP(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jb(a){return J.jP(a,!1,null,!!a.$ian)},
ox(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jb(s)
else return J.jP(s,c,null,null)},
oq(){if(!0===$.jN)return
$.jN=!0
A.or()},
or(){var s,r,q,p,o,n,m,l
$.iI=Object.create(null)
$.iO=Object.create(null)
A.op()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ln.$1(o)
if(n!=null){m=A.ox(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
op(){var s,r,q,p,o,n,m=B.U()
m=A.bU(B.V,A.bU(B.W,A.bU(B.K,A.bU(B.K,A.bU(B.X,A.bU(B.Y,A.bU(B.Z(B.J),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lh=new A.iL(p)
$.l7=new A.iM(o)
$.ln=new A.iN(n)},
bU(a,b){return a(b)||b},
og(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
k3(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.j(A.a9("Illegal RegExp pattern ("+String(o)+")",a,null))},
oB(a,b,c){var s=a.indexOf(b,c)
return s>=0},
lg(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lo(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
L(a,b,c){var s
if(typeof b=="string")return A.oD(a,b,c)
if(b instanceof A.bB){s=b.gb5()
s.lastIndex=0
return a.replace(s,A.lg(c))}return A.oC(a,b,c)},
oC(a,b,c){var s,r,q,p
for(s=J.jR(b,a),s=s.gu(s),r=0,q="";s.l();){p=s.gt()
q=q+a.substring(r,p.gau())+c
r=p.gal()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
oD(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.lo(b),"g"),A.lg(c))},
cR:function cR(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.$ti=b},
c2:function c2(){},
a_:function a_(a,b,c){this.a=a
this.b=b
this.$ti=c},
bo:function bo(a,b){this.a=a
this.$ti=b},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c4:function c4(){},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cA:function cA(){},
fg:function fg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ct:function ct(){},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a},
f0:function f0(a){this.a=a},
cT:function cT(a){this.a=a
this.b=null},
aX:function aX(){},
da:function da(){},
db:function db(){},
dP:function dP(){},
dM:function dM(){},
by:function by(a,b){this.a=a
this.b=b},
dJ:function dJ(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eT:function eT(a){this.a=a},
eW:function eW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
az:function az(a,b){this.a=a
this.$ti=b},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aj:function aj(a,b){this.a=a
this.$ti=b},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ai:function ai(a,b){this.a=a
this.$ti=b},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
bs:function bs(){},
bN:function bN(){},
bB:function bB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
e6:function e6(a){this.b=a},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dN:function dN(a,b){this.a=a
this.c=b},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
oE(a){throw A.a6(A.k5(a),new Error())},
bY(){throw A.a6(A.m8(""),new Error())},
d6(){throw A.a6(A.m7(""),new Error())},
lp(){throw A.a6(A.k5(""),new Error())},
dZ(){var s=new A.fr()
return s.b=s},
fr:function fr(){this.b=null},
nm(a){return a},
me(a){return new Uint8Array(a)},
aW(a,b,c){if(a>>>0!==a||a>=c)throw A.j(A.iH(b,a))},
ni(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.j(A.oh(a,b,c))
return b},
bF:function bF(){},
cq:function cq(){},
dv:function dv(){},
af:function af(){},
co:function co(){},
cp:function cp(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
cr:function cr(){},
cs:function cs(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
jq(a,b){var s=b.c
return s==null?b.c=A.cY(a,"jZ",[b.x]):s},
kf(a){var s=a.w
if(s===6||s===7)return A.kf(a.x)
return s===11||s===12},
mn(a){return a.as},
aG(a){return A.fS(v.typeUniverse,a,!1)},
bu(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bu(a1,s,a3,a4)
if(r===s)return a2
return A.ky(a1,r,!0)
case 7:s=a2.x
r=A.bu(a1,s,a3,a4)
if(r===s)return a2
return A.kx(a1,r,!0)
case 8:q=a2.y
p=A.bS(a1,q,a3,a4)
if(p===q)return a2
return A.cY(a1,a2.x,p)
case 9:o=a2.x
n=A.bu(a1,o,a3,a4)
m=a2.y
l=A.bS(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.jw(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bS(a1,j,a3,a4)
if(i===j)return a2
return A.kz(a1,k,i)
case 11:h=a2.x
g=A.bu(a1,h,a3,a4)
f=a2.y
e=A.nY(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.kw(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bS(a1,d,a3,a4)
o=a2.x
n=A.bu(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.jx(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.j(A.d8("Attempted to substitute unexpected RTI kind "+a0))}},
bS(a,b,c,d){var s,r,q,p,o=b.length,n=A.fX(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bu(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
nZ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fX(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bu(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
nY(a,b,c,d){var s,r=b.a,q=A.bS(a,r,c,d),p=b.b,o=A.bS(a,p,c,d),n=b.c,m=A.nZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.e1()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
lf(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.on(s)
return a.$S()}return null},
os(a,b){var s
if(A.kf(b))if(a instanceof A.aX){s=A.lf(a)
if(s!=null)return s}return A.bW(a)},
bW(a){if(a instanceof A.J)return A.y(a)
if(Array.isArray(a))return A.P(a)
return A.jD(J.aL(a))},
P(a){var s=a[v.arrayRti],r=t.v
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
y(a){var s=a.$ti
return s!=null?s:A.jD(a)},
jD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.nv(a,s)},
nv(a,b){var s=a instanceof A.aX?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.mS(v.typeUniverse,s.name)
b.$ccache=r
return r},
on(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
om(a){return A.bc(A.y(a))},
jH(a){var s
if(a instanceof A.bs)return A.oi(a.$r,a.b0())
s=a instanceof A.aX?A.lf(a):null
if(s!=null)return s
if(t.dm.b(a))return J.lM(a).a
if(Array.isArray(a))return A.P(a)
return A.bW(a)},
bc(a){var s=a.r
return s==null?a.r=new A.fE(a):s},
oi(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.n(q,0)
s=A.d_(v.typeUniverse,A.jH(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.n(q,r)
s=A.kB(v.typeUniverse,s,A.jH(q[r]))}return A.d_(v.typeUniverse,s,a)},
aH(a){return A.bc(A.fS(v.typeUniverse,a,!1))},
nu(a){var s=this
s.b=A.nW(s)
return s.b(a)},
nW(a){var s,r,q,p,o
if(a===t.K)return A.nC
if(A.bv(a))return A.nG
s=a.w
if(s===6)return A.nq
if(s===1)return A.kV
if(s===7)return A.nx
r=A.nV(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.bv)){a.f="$i"+q
if(q==="E")return A.nA
if(a===t.m)return A.nz
return A.nF}}else if(s===10){p=A.og(a.x,a.y)
o=p==null?A.kV:p
return o==null?A.ef(o):o}return A.no},
nV(a){if(a.w===8){if(a===t.S)return A.kT
if(a===t.i||a===t.p)return A.nB
if(a===t.N)return A.nE
if(a===t.y)return A.jE}return null},
nt(a){var s=this,r=A.nn
if(A.bv(s))r=A.nc
else if(s===t.K)r=A.ef
else if(A.bX(s)){r=A.np
if(s===t.h6)r=A.na
else if(s===t.dk)r=A.aw
else if(s===t.fQ)r=A.n8
else if(s===t.cg)r=A.kN
else if(s===t.cD)r=A.n9
else if(s===t.an)r=A.x}else if(s===t.S)r=A.T
else if(s===t.N)r=A.v
else if(s===t.y)r=A.ad
else if(s===t.p)r=A.nb
else if(s===t.i)r=A.kM
else if(s===t.m)r=A.q
s.a=r
return s.a(a)},
no(a){var s=this
if(a==null)return A.bX(s)
return A.ou(v.typeUniverse,A.os(a,s),s)},
nq(a){if(a==null)return!0
return this.x.b(a)},
nF(a){var s,r=this
if(a==null)return A.bX(r)
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.aL(a)[s]},
nA(a){var s,r=this
if(a==null)return A.bX(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.aL(a)[s]},
nz(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.J)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
kU(a){if(typeof a=="object"){if(a instanceof A.J)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
nn(a){var s=this
if(a==null){if(A.bX(s))return a}else if(s.b(a))return a
throw A.a6(A.kO(a,s),new Error())},
np(a){var s=this
if(a==null||s.b(a))return a
throw A.a6(A.kO(a,s),new Error())},
kO(a,b){return new A.cV("TypeError: "+A.kq(a,A.aq(b,null)))},
kq(a,b){return A.dh(a)+": type '"+A.aq(A.jH(a),null)+"' is not a subtype of type '"+b+"'"},
av(a,b){return new A.cV("TypeError: "+A.kq(a,b))},
nx(a){var s=this
return s.x.b(a)||A.jq(v.typeUniverse,s).b(a)},
nC(a){return a!=null},
ef(a){if(a!=null)return a
throw A.a6(A.av(a,"Object"),new Error())},
nG(a){return!0},
nc(a){return a},
kV(a){return!1},
jE(a){return!0===a||!1===a},
ad(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a6(A.av(a,"bool"),new Error())},
n8(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a6(A.av(a,"bool?"),new Error())},
kM(a){if(typeof a=="number")return a
throw A.a6(A.av(a,"double"),new Error())},
n9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a6(A.av(a,"double?"),new Error())},
kT(a){return typeof a=="number"&&Math.floor(a)===a},
T(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a6(A.av(a,"int"),new Error())},
na(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a6(A.av(a,"int?"),new Error())},
nB(a){return typeof a=="number"},
nb(a){if(typeof a=="number")return a
throw A.a6(A.av(a,"num"),new Error())},
kN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a6(A.av(a,"num?"),new Error())},
nE(a){return typeof a=="string"},
v(a){if(typeof a=="string")return a
throw A.a6(A.av(a,"String"),new Error())},
aw(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a6(A.av(a,"String?"),new Error())},
q(a){if(A.kU(a))return a
throw A.a6(A.av(a,"JSObject"),new Error())},
x(a){if(a==null)return a
if(A.kU(a))return a
throw A.a6(A.av(a,"JSObject?"),new Error())},
kZ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aq(a[q],b)
return s},
nL(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.kZ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aq(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
kQ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.c([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.d.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.n(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aq(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aq(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aq(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aq(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aq(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aq(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aq(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aq(a.x,b)+">"
if(l===8){p=A.o_(a.x)
o=a.y
return o.length>0?p+("<"+A.kZ(o,b)+">"):p}if(l===10)return A.nL(a,b)
if(l===11)return A.kQ(a,b,null)
if(l===12)return A.kQ(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.n(b,n)
return b[n]}return"?"},
o_(a){var s=A.lq(a)
if(s!=null)return s
return"minified:"+a},
mT(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
mS(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fS(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cZ(a,5,"#")
q=A.fX(s)
for(p=0;p<s;++p)q[p]=r
o=A.cY(a,b,q)
n[b]=o
return o}else return m},
mR(a,b){return A.kK(a.tR,b)},
mQ(a,b){return A.kK(a.eT,b)},
fS(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.kA(a,null,b,!1)
r.set(b,s)
return s},
d_(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.kA(a,b,c,!0)
q.set(c,r)
return r},
kB(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.jw(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
kA(a,b,c,d){return A.mI(A.mC(a,b,c,d))},
ba(a,b){b.a=A.nt
b.b=A.nu
return b},
cZ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aE(null,null)
s.w=b
s.as=c
r=A.ba(a,s)
a.eC.set(c,r)
return r},
ky(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.mO(a,b,r,c)
a.eC.set(r,s)
return s},
mO(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.bv(b))if(!(b===t.a||b===t.T))if(s!==6)r=s===7&&A.bX(b.x)
if(r)return b
else if(s===1)return t.a}q=new A.aE(null,null)
q.w=6
q.x=b
q.as=c
return A.ba(a,q)},
kx(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.mM(a,b,r,c)
a.eC.set(r,s)
return s},
mM(a,b,c,d){var s,r
if(d){s=b.w
if(A.bv(b)||b===t.K)return b
else if(s===1)return A.cY(a,"jZ",[b])
else if(b===t.a||b===t.T)return t.eH}r=new A.aE(null,null)
r.w=7
r.x=b
r.as=c
return A.ba(a,r)},
mP(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aE(null,null)
s.w=13
s.x=b
s.as=q
r=A.ba(a,s)
a.eC.set(q,r)
return r},
cX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
mL(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
cY(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cX(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aE(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ba(a,r)
a.eC.set(p,q)
return q},
jw(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.cX(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aE(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ba(a,o)
a.eC.set(q,n)
return n},
kz(a,b,c){var s,r,q="+"+(b+"("+A.cX(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aE(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ba(a,s)
a.eC.set(q,r)
return r},
kw(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cX(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cX(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.mL(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aE(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ba(a,p)
a.eC.set(r,o)
return o},
jx(a,b,c,d){var s,r=b.as+("<"+A.cX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.mN(a,b,c,r,d)
a.eC.set(r,s)
return s},
mN(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fX(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bu(a,b,r,0)
m=A.bS(a,c,r,0)
return A.jx(a,n,m,c!==m)}}l=new A.aE(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ba(a,l)},
mC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mI(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.mE(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ks(a,r,l,k,!1)
else if(q===46)r=A.ks(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.br(a.u,a.e,k.pop()))
break
case 94:k.push(A.mP(a.u,k.pop()))
break
case 35:k.push(A.cZ(a.u,5,"#"))
break
case 64:k.push(A.cZ(a.u,2,"@"))
break
case 126:k.push(A.cZ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.mG(a,k)
break
case 38:A.mF(a,k)
break
case 63:p=a.u
k.push(A.ky(p,A.br(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.kx(p,A.br(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.mD(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.kt(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.mJ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.br(a.u,a.e,m)},
mE(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ks(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.mT(s,o.x)[p]
if(n==null)A.Q('No "'+p+'" in "'+A.mn(o)+'"')
d.push(A.d_(s,o,n))}else d.push(p)
return m},
mG(a,b){var s,r=a.u,q=A.kr(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cY(r,p,q))
else{s=A.br(r,a.e,p)
switch(s.w){case 11:b.push(A.jx(r,s,q,a.n))
break
default:b.push(A.jw(r,s,q))
break}}},
mD(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.kr(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.br(p,a.e,o)
q=new A.e1()
q.a=s
q.b=n
q.c=m
b.push(A.kw(p,r,q))
return
case-4:b.push(A.kz(p,b.pop(),s))
return
default:throw A.j(A.d8("Unexpected state under `()`: "+A.D(o)))}},
mF(a,b){var s=b.pop()
if(0===s){b.push(A.cZ(a.u,1,"0&"))
return}if(1===s){b.push(A.cZ(a.u,4,"1&"))
return}throw A.j(A.d8("Unexpected extended operation "+A.D(s)))},
kr(a,b){var s=b.splice(a.p)
A.kt(a.u,a.e,s)
a.p=b.pop()
return s},
br(a,b,c){if(typeof c=="string")return A.cY(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.mH(a,b,c)}else return c},
kt(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.br(a,b,c[s])},
mJ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.br(a,b,c[s])},
mH(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.j(A.d8("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.j(A.d8("Bad index "+c+" for "+b.m(0)))},
ou(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a8(a,b,null,c,null)
r.set(c,s)}return s},
a8(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.bv(d))return!0
s=b.w
if(s===4)return!0
if(A.bv(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a8(a,c[b.x],c,d,e))return!0
q=d.w
p=t.a
if(b===p||b===t.T){if(q===7)return A.a8(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.a8(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a8(a,b.x,c,d,e))return!1
return A.a8(a,A.jq(a,b),c,d,e)}if(s===6)return A.a8(a,p,c,d,e)&&A.a8(a,b.x,c,d,e)
if(q===7){if(A.a8(a,b,c,d.x,e))return!0
return A.a8(a,b,c,A.jq(a,d),e)}if(q===6)return A.a8(a,b,c,p,e)||A.a8(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t._)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.a8(a,j,c,i,e)||!A.a8(a,i,e,j,c))return!1}return A.kS(a,b.x,c,d.x,e)}if(q===11){if(b===t._)return!0
if(p)return!1
return A.kS(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ny(a,b,c,d,e)}if(o&&q===10)return A.nD(a,b,c,d,e)
return!1},
kS(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a8(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.a8(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a8(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a8(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.a8(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
ny(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.d_(a,b,r[o])
return A.kL(a,p,null,c,d.y,e)}return A.kL(a,b.y,null,c,d.y,e)},
kL(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a8(a,b[s],d,e[s],f))return!1
return!0},
nD(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a8(a,r[s],c,q[s],e))return!1
return!0},
bX(a){var s=a.w,r=!0
if(!(a===t.a||a===t.T))if(!A.bv(a))if(s!==6)r=s===7&&A.bX(a.x)
return r},
bv(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
kK(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fX(a){return a>0?new Array(a):v.typeUniverse.sEA},
aE:function aE(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
e1:function e1(){this.c=this.b=this.a=null},
fE:function fE(a){this.a=a},
e0:function e0(){},
cV:function cV(a){this.a=a},
mw(){var s,r,q
if(self.scheduleImmediate!=null)return A.o5()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.iG(new A.fo(s),1)).observe(r,{childList:true})
return new A.fn(s,r,q)}else if(self.setImmediate!=null)return A.o6()
return A.o7()},
mx(a){self.scheduleImmediate(A.iG(new A.fp(t.M.a(a)),0))},
my(a){self.setImmediate(A.iG(new A.fq(t.M.a(a)),0))},
mz(a){t.M.a(a)
A.mK(0,a)},
mK(a,b){var s=new A.fC()
s.bD(a,b)
return s},
kv(a,b,c){return 0},
nI(){var s,r
for(s=$.bR;s!=null;s=$.bR){$.d4=null
r=s.b
$.bR=r
if(r==null)$.d3=null
s.a.$0()}},
nX(){$.jF=!0
try{A.nI()}finally{$.d4=null
$.jF=!1
if($.bR!=null)$.jQ().$1(A.la())}},
l1(a){var s=new A.dY(a),r=$.d3
if(r==null){$.bR=$.d3=s
if(!$.jF)$.jQ().$1(A.la())}else $.d3=r.b=s},
nU(a){var s,r,q,p=$.bR
if(p==null){A.l1(a)
$.d4=$.d3
return}s=new A.dY(a)
r=$.d4
if(r==null){s.b=p
$.bR=$.d4=s}else{q=r.b
s.b=q
$.d4=r.b=s
if(q==null)$.d3=s}},
oz(a){var s=null,r=$.dV
if(B.u===r){A.kY(s,s,B.u,a)
return}A.kY(s,s,r,t.M.a(r.bi(a)))},
nO(a,b){A.nU(new A.h6(a,b))},
nP(a,b,c,d,e){var s,r=$.dV
if(r===c)return d.$0()
$.dV=c
s=r
try{r=d.$0()
return r}finally{$.dV=s}},
kY(a,b,c,d){t.M.a(d)
if(B.u!==c){d=c.bi(d)
d=d}A.l1(d)},
fo:function fo(a){this.a=a},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fC:function fC(){},
fD:function fD(a,b){this.a=a
this.b=b},
cU:function cU(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
b9:function b9(a,b){this.a=a
this.$ti=b},
dY:function dY(a){this.a=a
this.b=null},
ee:function ee(){},
e8:function e8(){},
fB:function fB(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
k7(a,b){return new A.aQ(a.h("@<0>").O(b).h("aQ<1,2>"))},
a(a,b,c){return b.h("@<0>").O(c).h("k6<1,2>").a(A.oj(a,new A.aQ(b.h("@<0>").O(c).h("aQ<1,2>"))))},
h(a,b){return new A.aQ(a.h("@<0>").O(b).h("aQ<1,2>"))},
mb(a){return new A.aV(a.h("aV<0>"))},
al(a){return new A.aV(a.h("aV<0>"))},
mc(a,b){return b.h("k9<0>").a(A.ok(a,new A.aV(b.h("aV<0>"))))},
jv(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fz(a,b,c){var s=new A.bq(a,b,c.h("bq<0>"))
s.c=a.e
return s},
k8(a,b,c){var s=A.k7(b,c)
a.T(0,new A.eX(s,b,c))
return s},
bj(a,b,c){var s=A.k7(b,c)
s.R(0,a)
return s},
jm(a){var s,r
if(A.jO(a))return"{...}"
s=new A.ac("")
try{r={}
B.d.k($.ar,a)
s.a+="{"
r.a=!0
a.T(0,new A.eZ(r,s))
s.a+="}"}finally{if(0>=$.ar.length)return A.n($.ar,-1)
$.ar.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aV:function aV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e4:function e4(a){this.a=a
this.c=this.b=null},
bq:function bq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
R:function R(){},
a2:function a2(){},
eY:function eY(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.$ti=b},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
d0:function d0(){},
bD:function bD(){},
b7:function b7(a,b){this.a=a
this.$ti=b},
b4:function b4(){},
cS:function cS(){},
bO:function bO(){},
nK(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.bZ(r)
q=A.a9(String(s),null,null)
throw A.j(q)}q=A.fY(p)
return q},
fY(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.e2(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.fY(a[s])
return a},
n6(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.lH()
else s=new Uint8Array(o)
for(r=J.ei(a),q=0;q<o;++q){p=r.p(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
n5(a,b,c,d){var s=a?$.lG():$.lF()
if(s==null)return null
if(0===c&&d===b.length)return A.kJ(s,b)
return A.kJ(s,b.subarray(c,d))},
kJ(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
jS(a,b,c,d,e,f){if(B.n.W(f,4)!==0)throw A.j(A.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.j(A.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.j(A.a9("Invalid base64 padding, more than two '=' characters",a,b))},
k4(a,b,c){return new A.cj(a,b)},
nk(a){return a.d0()},
mA(a,b){return new A.fw(a,[],A.of())},
mB(a,b,c){var s,r=new A.ac(""),q=A.mA(r,b)
q.ar(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
n7(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
e2:function e2(a,b){this.a=a
this.b=b
this.c=null},
fv:function fv(a){this.a=a},
e3:function e3(a){this.a=a},
fV:function fV(){},
fU:function fU(){},
d9:function d9(){},
ek:function ek(){},
bf:function bf(){},
dd:function dd(){},
dg:function dg(){},
cj:function cj(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
ds:function ds(){},
eV:function eV(a){this.b=a},
eU:function eU(a){this.a=a},
fx:function fx(){},
fy:function fy(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c){this.c=a
this.a=b
this.b=c},
dU:function dU(){},
fm:function fm(){},
fW:function fW(a){this.b=0
this.c=a},
fl:function fl(a){this.a=a},
fT:function fT(a){this.a=a
this.b=16
this.c=0},
jY(a){},
ot(a){var s=A.jn(a,null)
if(s!=null)return s
throw A.j(A.a9(a,null,null))},
lW(a,b){a=A.a6(a,new Error())
if(a==null)a=A.ef(a)
a.stack=b.m(0)
throw a},
jk(a,b,c,d){var s,r=J.m3(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
jl(a,b,c){var s,r=A.c([],c.h("S<0>"))
for(s=J.aN(a);s.l();)B.d.k(r,c.a(s.gt()))
if(b)return r
r.$flags=1
return r},
bC(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.h("S<0>"))
s=A.c([],b.h("S<0>"))
for(r=J.aN(a);r.l();)B.d.k(s,r.gt())
return s},
e(a,b){var s=A.jl(a,!1,b)
s.$flags=3
return s},
ki(a,b,c){var s,r
A.kd(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.j(A.ap(c,b,null,"end",null))
if(s===0)return""}r=A.mp(a,b,c)
return r},
mp(a,b,c){var s=a.length
if(b>=s)return""
return A.mg(a,b,c==null||c>s?s:c)},
b1(a,b){return new A.bB(a,A.k3(a,!1,b,!1,!1,""))},
kh(a,b,c){var s=J.aN(b)
if(!s.l())return a
if(c.length===0){do a+=A.D(s.gt())
while(s.l())}else{a+=A.D(s.gt())
while(s.l())a=a+c+A.D(s.gt())}return a},
n4(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.p){s=$.lE()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.a0.a_(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.Z(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
dh(a){if(typeof a=="number"||A.jE(a)||a==null)return J.aI(a)
if(typeof a=="string")return JSON.stringify(a)
return A.kc(a)},
di(a,b){A.le(a,"error",t.K)
A.le(b,"stackTrace",t.l)
A.lW(a,b)},
d8(a){return new A.d7(a)},
ae(a){return new A.aJ(!1,null,null,a)},
O(a,b,c){return new A.aJ(!0,a,b,c)},
ap(a,b,c,d,e){return new A.cv(b,c,!0,a,d,"Invalid value")},
cw(a,b,c){if(0>a||a>c)throw A.j(A.ap(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.j(A.ap(b,a,c,"end",null))
return b}return c},
kd(a,b){if(a<0)throw A.j(A.ap(a,0,null,b,null))
return a},
k0(a,b,c,d){return new A.dl(b,!0,a,d,"Index out of range")},
bn(a){return new A.cH(a)},
kk(a){return new A.dQ(a)},
C(a){return new A.bI(a)},
ak(a){return new A.dc(a)},
a9(a,b,c){return new A.aO(a,b,c)},
m2(a,b,c){var s,r
if(A.jO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.d.k($.ar,a)
try{A.nH(a,s)}finally{if(0>=$.ar.length)return A.n($.ar,-1)
$.ar.pop()}r=A.kh(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jh(a,b,c){var s,r
if(A.jO(a))return b+"..."+c
s=new A.ac(b)
B.d.k($.ar,a)
try{r=s
r.a=A.kh(r.a,a,", ")}finally{if(0>=$.ar.length)return A.n($.ar,-1)
$.ar.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
nH(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.D(l.gt())
B.d.k(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.n(b,-1)
r=b.pop()
if(0>=b.length)return A.n(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.l()){if(j<=4){B.d.k(b,A.D(p))
return}r=A.D(p)
if(0>=b.length)return A.n(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.l();p=o,o=n){n=l.gt();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.n(b,-1)
k-=b.pop().length+2;--j}B.d.k(b,"...")
return}}q=A.D(p)
r=A.D(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.n(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.d.k(b,m)
B.d.k(b,q)
B.d.k(b,r)},
mf(a,b,c,d){var s
if(B.z===c){s=B.n.gE(a)
b=J.aM(b)
return A.js(A.b5(A.b5($.jg(),s),b))}if(B.z===d){s=B.n.gE(a)
b=J.aM(b)
c=J.aM(c)
return A.js(A.b5(A.b5(A.b5($.jg(),s),b),c))}s=B.n.gE(a)
b=J.aM(b)
c=J.aM(c)
d=J.aM(d)
d=A.js(A.b5(A.b5(A.b5(A.b5($.jg(),s),b),c),d))
return d},
b8(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.n(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.kl(a4<a4?B.c.q(a5,0,a4):a5,5,a3).gbu()
else if(s===32)return A.kl(B.c.q(a5,5,a4),0,a3).gbu()}r=A.jk(8,0,!1,t.S)
B.d.j(r,0,0)
B.d.j(r,1,-1)
B.d.j(r,2,-1)
B.d.j(r,7,-1)
B.d.j(r,3,0)
B.d.j(r,4,0)
B.d.j(r,5,a4)
B.d.j(r,6,a4)
if(A.l0(a5,0,a4,0,r)>=14)B.d.j(r,7,a4)
q=r[1]
if(q>=0)if(A.l0(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.c.A(a5,"\\",n))if(p>0)h=B.c.A(a5,"\\",p-1)||B.c.A(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.A(a5,"..",n)))h=m>n+2&&B.c.A(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.A(a5,"file",0)){if(p<=0){if(!B.c.A(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.q(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.a2(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.A(a5,"http",0)){if(i&&o+3===n&&B.c.A(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.a2(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.A(a5,"https",0)){if(i&&o+4===n&&B.c.A(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.a2(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.au(a4<a5.length?B.c.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.jA(a5,0,q)
else{if(q===0)A.bP(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.n0(a5,c,p-1):""
a=A.mY(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jn(B.c.q(a5,i,n),a3)
d=A.jz(a0==null?A.Q(A.a9("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.mZ(a5,n,m,a3,j,a!=null)
a2=m<l?A.n_(a5,m+1,l,a3):a3
return A.ec(j,b,a,d,a1,a2,l<a4?A.mX(a5,l+1,a4):a3)},
kn(a){var s=t.N
return B.d.cu(A.c(a.split("&"),t.s),A.h(s,s),new A.fk(B.p),t.d)},
dT(a,b,c){throw A.j(A.a9("Illegal IPv4 address, "+a,b,c))},
mt(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.n(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.dT("each part must be in the range 0..255",a,r)}A.dT("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.dT(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.ax(d)
if(!(k<16))return A.n(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.dT(j,a,q)
p=l}A.dT("IPv4 address should contain exactly 4 parts",a,q)},
mu(a,b,c){var s
if(b===c)throw A.j(A.a9("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.n(a,b)
if(a.charCodeAt(b)===118){s=A.mv(a,b,c)
if(s!=null)throw A.j(s)
return!1}A.km(a,b,c)
return!0},
mv(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.S;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.n(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.aO(n,a,q)
r=q
break}return new A.aO("Unexpected character",a,q-1)}if(r-1===b)return new A.aO(n,a,r)
return new A.aO("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.aO("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.n(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.n(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.aO("Invalid IPvFuture address character",a,r)}},
km(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.fj(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.n(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.n(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.n(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.mt(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.n.aK(l,8)
if(!(o<16))return A.n(s,o)
s[o]=e;++o
if(!(o<16))return A.n(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.O.bx(s,a0,16,s,a)
B.O.ct(s,a,a0,0)}}return s},
ec(a,b,c,d,e,f,g){return new A.d1(a,b,c,d,e,f,g)},
kC(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bP(a,b,c){throw A.j(A.a9(c,a,b))},
jz(a,b){if(a!=null&&a===A.kC(b))return null
return a},
mY(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.n(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.n(a,r)
if(a.charCodeAt(r)!==93)A.bP(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.n(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.mV(a,q,r)
if(o<r){n=o+1
p=A.kI(a,B.c.A(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.mu(a,q,o)
l=B.c.q(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.n(a,k)
if(a.charCodeAt(k)===58){o=B.c.ap(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.kI(a,B.c.A(a,"25",n)?o+3:n,c,"%25")}else p=""
A.km(a,b,o)
return"["+B.c.q(a,b,o)+p+"]"}}return A.n2(a,b,c)},
mV(a,b,c){var s=B.c.ap(a,"%",b)
return s>=b&&s<c?s:c},
kI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.ac(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.n(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.jB(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.ac("")
l=h.a+=B.c.q(a,q,r)
if(m)n=B.c.q(a,r,r+3)
else if(n==="%")A.bP(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.S.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.ac("")
if(q<r){h.a+=B.c.q(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.n(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.q(a,q,r)
if(h==null){h=new A.ac("")
m=h}else m=h
m.a+=i
l=A.jy(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.q(a,b,c)
if(q<c){i=B.c.q(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
n2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.S
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.n(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.jB(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.ac("")
k=B.c.q(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.q(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.ac("")
if(q<r){p.a+=B.c.q(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.bP(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.n(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.q(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.ac("")
l=p}else l=p
l.a+=k
j=A.jy(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.q(a,b,c)
if(q<c){k=B.c.q(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
jA(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.n(a,b)
if(!A.kE(a.charCodeAt(b)))A.bP(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.n(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.S.charCodeAt(p)&8)!==0))A.bP(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.q(a,b,c)
return A.mU(q?a.toLowerCase():a)},
mU(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n0(a,b,c){return A.d2(a,b,c,16,!1,!1)},
mZ(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.d2(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.c.v(s,"/"))s="/"+s
return A.n1(s,e,f)},
n1(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.v(a,"/")&&!B.c.v(a,"\\"))return A.kH(a,!s||c)
return A.bQ(a)},
n_(a,b,c,d){if(a!=null)return A.d2(a,b,c,256,!0,!1)
return null},
mX(a,b,c){return A.d2(a,b,c,256,!0,!1)},
jB(a,b,c){var s,r,q,p,o,n,m=u.S,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.n(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.n(a,l)
q=a.charCodeAt(l)
p=A.iK(r)
o=A.iK(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.n(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.Z(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.q(a,b,b+3).toUpperCase()
return null},
jy(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.n(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.n.cd(a,6*p)&63|q
if(!(o<r))return A.n(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.n(k,l)
if(!(m<r))return A.n(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.n(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.ki(s,0,null)},
d2(a,b,c,d,e,f){var s=A.kG(a,b,c,d,e,f)
return s==null?B.c.q(a,b,c):s},
kG(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.S
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.n(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.jB(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.bP(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.n(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.jy(n)}if(o==null){o=new A.ac("")
k=o}else k=o
k.a=(k.a+=B.c.q(a,p,q))+l
if(typeof m!=="number")return A.oo(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.q(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
kF(a){if(B.c.v(a,"."))return!0
return B.c.aR(a,"/.")!==-1},
bQ(a){var s,r,q,p,o,n,m
if(!A.kF(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.n(s,-1)
s.pop()
if(s.length===0)B.d.k(s,"")}p=!0}else{p="."===n
if(!p)B.d.k(s,n)}}if(p)B.d.k(s,"")
return B.d.J(s,"/")},
kH(a,b){var s,r,q,p,o,n
if(!A.kF(a))return!b?A.kD(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.d.gX(s)!==".."){if(0>=s.length)return A.n(s,-1)
s.pop()}else B.d.k(s,"..")
p=!0}else{p="."===n
if(!p)B.d.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.d.k(s,"")
if(!b){if(0>=s.length)return A.n(s,0)
B.d.j(s,0,A.kD(s[0]))}return B.d.J(s,"/")},
kD(a){var s,r,q,p=u.S,o=a.length
if(o>=2&&A.kE(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.q(a,0,s)+"%3A"+B.c.G(a,s+1)
if(r<=127){if(!(r<128))return A.n(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
n3(a,b){if(a.cz("package")&&a.c==null)return A.l2(b,0,b.length)
return-1},
mW(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.n(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.j(A.ae("Invalid URL encoding"))}}return r},
ed(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.n(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.p===d)return B.c.q(a,b,c)
else p=new A.bz(B.c.q(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.n(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.j(A.ae("Illegal percent encoding in URI"))
if(r===37){if(n+3>o)throw A.j(A.ae("Truncated URI"))
B.d.k(p,A.mW(a,n+1))
n+=2}else if(e&&r===43)B.d.k(p,32)
else B.d.k(p,r)}}t.V.a(p)
return B.aG.a_(p)},
kE(a){var s=a|32
return 97<=s&&s<=122},
kl(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.j(A.a9(k,a,r))}}if(q<0&&r>b)throw A.j(A.a9(k,a,r))
while(p!==44){B.d.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.n(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.d.k(j,o)
else{n=B.d.gX(j)
if(p!==44||r!==n+7||!B.c.A(a,"base64",n+1))throw A.j(A.a9("Expecting '='",a,r))
break}}B.d.k(j,r)
m=r+1
if((j.length&1)===1)a=B.T.cD(a,m,s)
else{l=A.kG(a,m,s,256,!0,!1)
if(l!=null)a=B.c.a2(a,m,s,l)}return new A.fi(a,j,c)},
l0(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.n(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.n(n,p)
o=n.charCodeAt(p)
d=o&31
B.d.j(e,o>>>5,r)}return d},
ku(a){if(a.b===7&&B.c.v(a.a,"package")&&a.c<=0)return A.l2(a.a,a.e,a.f)
return-1},
l2(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.n(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
nh(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.n(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
fs:function fs(){},
Y:function Y(){},
d7:function d7(a){this.a=a},
cG:function cG(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cv:function cv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dl:function dl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cH:function cH(a){this.a=a},
dQ:function dQ(a){this.a=a},
bI:function bI(a){this.a=a},
dc:function dc(a){this.a=a},
dD:function dD(){},
cE:function cE(){},
ft:function ft(a){this.a=a},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
ao:function ao(){},
J:function J(){},
ac:function ac(a){this.a=a},
fk:function fk(a){this.a=a},
fj:function fj(a){this.a=a},
d1:function d1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
e_:function e_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
dj:function dj(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt(a){var s,r,q,p,o,n,m,l=null,k=null
for(p=A.P(a).h("N<1>"),o=new A.N(a,p),o=new A.G(o,o.gn(0),p.h("G<B.E>")),p=p.h("B.E");o.l();){n=o.d
s=n==null?p.a(n):n
try{s.$0()}catch(m){r=A.bZ(m)
q=A.ej(m)
if(l==null)l=r
if(k==null)k=q}}B.d.S(a)
if(l!=null){p=l
o=k
o.toString
A.di(p,o)}},
l3(a){var s=a==null?null:J.aI(a)
return s==null?"":s},
ne(a){var s
if(a==null||J.as(a,!1))return null
s=J.aL(a)
return s.P(a,!0)?"":s.m(a)},
eR:function eR(a,b){this.a=a
this.b=b},
dk:function dk(){},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a){this.a=a},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eG:function eG(a){this.a=a},
eI:function eI(a){this.a=a},
eJ:function eJ(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
eL:function eL(a){this.a=a},
eM:function eM(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a},
eC:function eC(a){this.a=a},
eD:function eD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eA:function eA(a){this.a=a},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
ml(a,b){var s=A.e(b,t.j),r=A.P(s)
r=A.e(new A.aa(s,r.h("b3(1)").a(new A.f6()),r.h("aa<1,b3>")),t.eV)
A.o3(r)
return A.mk(a,A.oy(),new A.f9(r),s)},
mk(a,b,c,d){var s,r,q,p=t.z
p=A.h(p,p)
for(s=d.length,r=0;r<s;++r){q=d[r]
p.j(0,q.a.a,q)}return new A.f5(c,a,b,A.bg(p,t.N,t.j),new A.dO())},
nj(a){var s=null
t.O.a(a)
return A.k_(s,"The requested page was not found.",B.M,"en",s,B.A,s,B.ap,"Not Found",s)},
aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
f6:function f6(){},
dH(a){var s=A.jG(a),r=A.P(s),q=r.h("aa<1,r>")
s=A.bC(new A.aa(s,r.h("r(1)").a(new A.f7()),q),q.h("B.E"))
s.$flags=1
return new A.b3(a,s)},
eh(a){var s,r,q,p,o,n,m,l,k,j="path"
if(!B.c.v(a,"/")||B.c.v(a,"//"))throw A.j(A.O(a,j,"Route paths must start with /."))
s=A.b8(a)
if(s.gac()||s.gab())throw A.j(A.O(a,j,"Route definitions cannot include a query or fragment."))
r=A.h1(s.gN())
q=A.al(t.N)
for(p=A.jG(r),o=p.length,n=0;n<p.length;p.length===o||(0,A.bd)(p),++n){m=p[n]
l=B.c.v(m,":")
if(l){k=A.b1("^:[A-Za-z_][A-Za-z0-9_]*$",!0)
k=!k.b.test(m)}else k=!1
if(k)throw A.j(A.O(a,j,"Invalid parameter segment."))
if(l&&!q.k(0,B.c.G(m,1)))throw A.j(A.O(a,j,"Route parameter names must be unique."))}return r},
o3(a){var s,r,q,p,o,n
for(s=a.length,r=0;r<s;++r){q=a[r]
for(p=q.b,o=0;o<r;++o){n=a[o]
if(A.nT(q,n))throw A.j(A.ae('Duplicate route definitions: "'+n.a+'" and "'+q.a+'".'))
if(q.gaL()===n.gaL()&&A.nQ(p,n.b))throw A.j(A.ae('Ambiguous route definitions: "'+n.a+'" and "'+q.a+'" match the same path with equal specificity.'))}}},
nT(a,b){var s,r,q,p,o=a.b,n=o.length,m=b.b,l=m.length
if(n!==l)return!1
for(s=0;s<n;++s){r=o[s]
if(!(s<l))return A.n(m,s)
q=m[s]
p=B.c.v(r,":")
if(p!==B.c.v(q,":"))return!1
if(!p&&r!==q)return!1}return!0},
nQ(a,b){var s,r,q,p=a.length,o=b.length
if(p!==o)return!1
for(s=0;s<p;++s){r=a[s]
if(!(s<o))return A.n(b,s)
q=b[s]
if(!B.c.v(r,":")&&!B.c.v(q,":")&&r!==q)return!1}return!0},
h1(a){var s,r=a.length===0?"/":a
if(!B.c.v(r,"/"))r="/"+r
for(;;){s=r.length
if(!(s>1&&B.c.cr(r,"/")))break
r=B.c.q(r,0,s-1)}return r},
jG(a){var s=A.h1(a)
if(s==="/")return B.j
return A.c(B.c.G(s,1).split("/"),t.s)},
b3:function b3(a,b){this.a=a
this.b=b},
f7:function f7(){},
f8:function f8(){},
aT:function aT(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.f=d},
f9:function f9(a){this.a=a},
cz:function cz(a,b,c,d,e,f,g){var _=this
_.Q=a
_.ax=b
_.ay=c
_.ch=d
_.d=_.c=_.cy=_.cx=_.CW=null
_.e=e
_.f=f
_.r=g
_.w=null
_.z=_.y=_.x=!1},
fa:function fa(a,b){this.a=a
this.b=b},
mm(a){var s=a.b,r=t.N,q=t.dw
q=new A.dI(s,!0,A.h(r,q),A.h(r,q))
q.bC(s,!0)
return q},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.y=_.x=_.w=$
_.z=!1},
fb:function fb(a){this.a=a},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
k_(a,b,c,d,e,f,g,h,i,j){var s=A.e(f,t.k),r=A.e(c,t.F)
if(B.c.a3(d).length===0)A.Q(A.O(d,"language","Cannot be empty."))
return new A.ca(i,b,a,s,r,g,j,h,d,e)},
cb(a){var s="A web application built with SparrowKit.",r=null,q="property",p="name"
return A.k_(r,s,B.M,"en",r,A.c([new A.aC(q,"og:title",a),new A.aC(q,"og:type","website"),new A.aC(q,"og:description",s),new A.aC(p,"twitter:card","summary"),new A.aC(p,"twitter:title",a),new A.aC(p,"twitter:description",s)],t.r),r,r,a,r)},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
W(a,b,c,d,e,f,g,h){var s,r,q,p,o=t.N,n=A.bg(b,o,t.X),m=A.nJ(d),l=A.bg(e,o,t.o),k=A.bg(g,o,t.D),j=A.bg(c,o,t.dz)
o=A.e(f,o)
s=A.b1("^[A-Za-z][A-Za-z0-9-]*$",!0)
if(!s.b.test(a))A.Q(A.O(a,"tag","Invalid HTML tag name."))
r=a.toLowerCase()
q=b.p(0,"type")
p=r==="input"&&typeof q=="string"&&q.toLowerCase()==="range"
if(h!=null&&r!=="select"&&!p)A.Q(A.O(a,"tag","Value signals are only supported on select and range input elements."))
return new A.aA(a,n,m,l,k,j,h,o)},
md(a,b,c,d,e){var s,r=A.jI(a.$0())
A.o4(b)
s=$.lK()
if(!s.b.test(c)||B.G.B(0,c.toLowerCase()))A.Q(A.O(c,"itemTag","Invalid item element tag."))
return new A.aB(b,c,d,r,e,a)},
d5(a){var s=t.N,r=A.mc(['*,*::before,*::after{box-sizing:border-box}body{margin:0}button {\n  -webkit-appearance: none;\n  appearance: none;\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  margin: 0;\n  padding: 8px 12px;\n  border: 0;\n  border-radius: 4px;\n  background-color: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: center;\n  text-decoration: none;\n}\nbutton:not(:disabled) {\n  cursor: pointer;\n}\nbutton:focus-visible,\n[role="button"]:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\nbutton:not(:disabled):hover,\n[role="button"][data-sparrow-inkwell]:hover {\n  background-color: rgba(0, 0, 0, 0.06);\n}\nbutton:not(:disabled):active,\n[role="button"][data-sparrow-inkwell]:active {\n  background-color: rgba(0, 0, 0, 0.12);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\nbutton[data-sparrow-variant="elevated"] {\n  background-color: rgba(0, 0, 0, 0.08);\n}\nbutton[data-sparrow-variant="elevated"]:hover:not(:disabled) {\n  background-color: rgba(0, 0, 0, 0.12);\n}\nbutton[data-sparrow-variant="elevated"]:active:not(:disabled) {\n  background-color: rgba(0, 0, 0, 0.16);\n}\nbutton[data-sparrow-variant="icon"] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  min-height: 44px;\n  padding: 0;\n  flex: 0 0 44px;\n  border-radius: 50%;\n}\n.sparrow-field {\n  display: grid;\n  gap: 4px;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n}\n.sparrow-field__label {\n  display: block;\n}\n.sparrow-field[data-disabled="true"] .sparrow-field__label,\n.sparrow-field[data-disabled="true"] .sparrow-field__helper {\n  opacity: 0.62;\n}\n.sparrow-field__control {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  padding: 0 12px;\n  border: var(--sparrow-field-border, 1px solid #767676);\n  border-radius: var(--sparrow-field-radius, 4px);\n  background-color: var(--sparrow-field-fill, transparent);\n}\n.sparrow-field__control:focus-within {\n  border: var(\n    --sparrow-field-focused-border,\n    var(--sparrow-field-border, 1px solid #767676)\n  );\n  border-radius: var(\n    --sparrow-field-focused-radius,\n    var(--sparrow-field-radius, 4px)\n  );\n}\n.sparrow-field__control:hover:not(:focus-within):not([aria-disabled="true"]):not([aria-invalid="true"]) {\n  border-color: var(--sparrow-field-hover-color, #8A96A6);\n}\n.sparrow-field__control[aria-invalid="true"] {\n  border: var(--sparrow-field-error-border, 1px solid #B3261E);\n  border-radius: var(\n    --sparrow-field-error-radius,\n    var(--sparrow-field-radius, 4px)\n  );\n}\n.sparrow-field__control[aria-invalid="true"]:focus-within {\n  border: var(\n    --sparrow-field-focused-error-border,\n    var(\n      --sparrow-field-focused-border,\n      var(--sparrow-field-error-border, 1px solid #B3261E)\n    )\n  );\n  border-radius: var(\n    --sparrow-field-focused-error-radius,\n    var(\n      --sparrow-field-focused-radius,\n      var(--sparrow-field-error-radius, 4px)\n    )\n  );\n}\n.sparrow-field__control input {\n  box-sizing: border-box;\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n  padding: 10px 0;\n  border: 0;\n  border-radius: 0;\n  outline: 0;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n}\n.sparrow-field__control input:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 1px;\n}\n.sparrow-field__control input:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.sparrow-field__control input::placeholder {\n  color: var(--sparrow-field-hint-color, #737E8D);\n  font-family: var(--sparrow-field-hint-font-family, inherit);\n  font-size: var(--sparrow-field-hint-font-size, inherit);\n  font-style: var(--sparrow-field-hint-font-style, inherit);\n  font-weight: var(--sparrow-field-hint-font-weight, inherit);\n  letter-spacing: var(--sparrow-field-hint-letter-spacing, inherit);\n  line-height: var(--sparrow-field-hint-line-height, inherit);\n  text-decoration: var(--sparrow-field-hint-text-decoration, none);\n  opacity: 1;\n}\n.sparrow-field__prefix,\n.sparrow-field__suffix {\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.sparrow-field__helper {\n  font-size: 0.875em;\n}\n.sparrow-field__error {\n  color: #b3261e;\n  font-size: 0.875em;\n}\n[role="button"] {\n  cursor: pointer;\n}\n[role="button"][data-sparrow-inkwell] {\n  user-select: none;\n  border-radius: 4px;\n}\n'],s)
new A.iE(r).$1(a)
return A.e(r,s)},
jd(a,b){if(a===b)return!0
if(a instanceof A.a7)return b instanceof A.a7&&a.a===b.a
if(a instanceof A.bl)return!1
if(a instanceof A.aB)return b instanceof A.aB&&A.nS(a,b)
if(a instanceof A.aA)return b instanceof A.aA&&A.nR(a,b)
return!1},
lj(a){var s,r,q,p,o
for(s=new A.bz(a),r=t.e8,s=new A.G(s,s.gn(0),r.h("G<R.E>")),r=r.h("R.E"),q=17,p=29;s.l();){o=s.d
if(o==null)o=r.a(o)
q=B.n.W(q*31+o,2147483647)
p=B.n.W(p*37+o,2147483629)}return"sparrow-responsive-"+B.n.bt(q,36)+"-"+B.n.bt(p,36)},
nJ(a){var s,r,q,p,o=A.c([],t.E)
for(s=J.aN(a),r=t.ah;s.l();){q=s.gt()
if(q instanceof A.a7){p=q.a
if(p.length===0)continue
if(o.length!==0&&B.d.gX(o) instanceof A.a7){if(0>=o.length)return A.n(o,-1)
B.d.k(o,new A.a7(r.a(o.pop()).a+p))}else B.d.k(o,q)}else B.d.k(o,q)}return A.e(o,t.eT)},
jI(a){var s,r,q,p=A.al(t.N),o=A.c([],t.I)
for(s=J.aN(a);s.l();){r=s.gt()
q=r.a
if(q.length===0)throw A.j(A.O(q,"key","Keys cannot be empty."))
if(!p.k(0,q))throw A.j(A.C('Duplicate keyed child key "'+q+'".'))
B.d.k(o,r)}return A.e(o,t.fV)},
nS(a,b){var s,r,q,p,o,n,m
if(a.a!==b.a||a.b!==b.b||a.c!==b.c||a.d.length!==b.d.length)return!1
for(s=a.d,r=s.length,q=b.d,p=q.length,o=0;o<r;++o){n=s[o]
if(!(o<p))return A.n(q,o)
m=q[o]
if(n.a!==m.a||!A.jd(n.b,m.b))return!1}return!0},
nR(a,b){var s,r,q,p,o,n=!0
if(a.a===b.a){s=a.b
r=b.b
if(s.gn(s)===r.gn(r)){s=a.d
r=b.d
if(s.gn(s)===r.gn(r)){s=a.e
r=b.e
if(s.gn(s)===r.gn(r)){n=a.f
s=b.f
n=n.gn(n)!==s.gn(s)||!A.l_(a.r,b.r)||a.c.length!==b.c.length||a.w.length!==b.w.length}}}}if(n)return!1
for(n=a.b.gD(),n=n.gu(n),s=b.b;n.l();){r=n.gt()
q=r.a
if(!s.H(q)||!A.l_(r.b,s.p(0,q)))return!1}for(n=a.d.gD(),n=n.gu(n),s=b.d;n.l();){r=n.gt()
if(r.b!==s.p(0,r.a))return!1}for(n=a.e.gD(),n=n.gu(n),s=b.e;n.l();){r=n.gt()
if(r.b!==s.p(0,r.a))return!1}for(n=a.f.gD(),n=n.gu(n),s=b.f;n.l();){r=n.gt()
if(r.b!==s.p(0,r.a))return!1}for(n=a.c,s=n.length,r=b.c,q=r.length,p=0;p<s;++p){o=n[p]
if(!(p<q))return A.n(r,p)
if(!A.jd(o,r[p]))return!1}for(n=a.w,s=n.length,r=b.w,q=r.length,p=0;p<s;++p){o=n[p]
if(!(p<q))return A.n(r,p)
if(o!==r[p])return!1}return!0},
l_(a,b){if(a==null?b==null:a===b)return!0
return!1},
o4(a){var s=A.b1("^[A-Za-z_][A-Za-z0-9_]*$",!0)
if(!s.b.test(a))throw A.j(A.O(a,"id","Invalid signal identifier."))},
f_:function f_(a,b){this.a=a
this.c=b},
a4:function a4(){},
a7:function a7(a){this.a=a},
bl:function bl(){},
cC:function cC(){},
aA:function aA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b0:function b0(a,b){this.a=a
this.b=b},
aB:function aB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iE:function iE(a){this.a=a},
iF:function iF(){},
jC(a,b,c){if(a.H(b)&&!J.as(a.p(0,b),c))throw A.j(A.C('Conflicting initial values for signal "'+b+'".'))
a.j(0,b,c)},
bb(a){var s=A.L(a,"&","&amp;")
s=A.L(s,"<","&lt;")
return A.L(s,">","&gt;")},
dO:function dO(){},
ff:function ff(){},
ke(a){if(a.d)return
$.bG.k(0,a)
A.jp()},
jp(){if($.bG.a===0||$.jo||$.f2)return
$.jo=!0
A.oz(A.oA())},
mh(){var s,r,q,p,o,n,m,l,k,j,i
$.jo=!1
m=$.f2
if(m){A.jp()
return}$.f2=!0
s=null
r=null
try{for(m=A.y($.bG).c;$.bG.a!==0;){l=A.bC($.bG,m)
l.$flags=1
q=l
$.bG.S(0)
for(l=q,k=l.length,j=0;j<l.length;l.length===k||(0,A.bd)(l),++j){p=l[j]
try{p.ba()}catch(i){o=A.bZ(i)
n=A.ej(i)
if(s==null)s=o
if(r==null)r=n}}}}finally{$.f2=!1
A.jp()}if(s!=null){m=s
l=r
l.toString
A.di(m,l)}},
mi(a,b,c){var s
B.d.k($.aR,a)
try{s=b.$0()
return s}finally{if(0>=$.aR.length)return A.n($.aR,-1)
$.aR.pop()}},
bH(a,b){var s,r,q=$.aS.length
if(q===0)r=null
else{if(0>=q)return A.n($.aS,-1)
r=$.aS.pop()}s=r
try{q=a.$0()
return q}finally{if(s!=null)B.d.k($.aS,s)}},
bV(a){var s,r,q=new A.bM(a,A.al(t.af))
try{q.ba()}catch(s){q.K()
throw s}r=q.ga6()
if($.aR.length!==0)B.d.k(B.d.gX($.aR),r)
return q.ga6()},
a5:function a5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=!1},
aY:function aY(){},
el:function el(a){this.a=a},
o8(a,b){return A.bV(new A.hj(a,b))},
ll(a,b,c){var s=A.nd(c)
if(A.aw(a.getAttribute(b))==s)return
if(s==null)a.removeAttribute(b)
else a.setAttribute(b,s)},
lb(a,b,c){return A.bV(new A.h8(a,b,c))},
ld(a,b){return A.bV(new A.hi(b,a))},
lc(a){var s,r=A.aw(a.getAttribute("data-sparrow-material-navigation"))
if(r==null)return new A.h9()
s=A.am(new A.ha(r,a))
a.addEventListener("keydown",s)
return new A.hb(a,s)},
li(a){var s
if(!B.ar.B(0,A.v(a.type)))return a
s=A.v(a.key)
A.ad(a.shiftKey)
return new A.f_(s,new A.jc(a))},
jJ(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=A.x(a.querySelector("[data-sparrow-material-dialog]")),g=A.x(a.querySelector("[data-sparrow-material-menu]")),f=A.x(a.querySelector("[data-sparrow-material-snackbar]")),e=h==null
if(e&&g==null&&f==null)return new A.hc()
s=v.G
r=A.x(A.q(s.document).activeElement)
q=!e||g!=null?A.T(A.q(s.window).setTimeout(A.kR(new A.hd(a,h,g)),0)):i
p=A.c([],t.Y)
if(!e)p.push(h)
o=A.c([],t.fq)
for(e=p.length,n=0;n<p.length;p.length===e||(0,A.bd)(p),++n){m=p[n]
l=A.am(new A.he(m))
m.addEventListener("keydown",l)
B.d.k(o,new A.cR(m,l))}e=g==null
k=e?i:A.am(new A.hf(g))
if(!e&&k!=null)g.addEventListener("keydown",k)
e=f==null
p=e?i:A.aw(f.getAttribute("data-sparrow-material-snackbar-duration"))
j=A.jn(p==null?"":p,i)
return new A.hg(q,j==null||j<=0||e?i:A.T(A.q(s.window).setTimeout(A.kR(new A.hh(f)),j)),o,g,k,r)},
nd(a){var s
if(a==null||J.as(a,!1))return null
s=J.aL(a)
return s.P(a,!0)?"":s.m(a)},
hj:function hj(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
jc:function jc(a){this.a=a},
hc:function hc(){},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
hh:function hh(a){this.a=a},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='Conflicting generated stylesheet "',d={},c=A.c([],t.s)
try{for(l=a.length,k=v.G,j=0;j<l;++j){s=a[j]
r=A.lj(s)
q=$.h7.p(0,r)
if(q==null){p=A.x(A.q(k.document).getElementById(r))
o=null
n=null
if(p!=null){i=!0
if(A.ad(p.hasAttribute("data-sparrow-stylesheet"))){i=A.aw(p.textContent)
h=s
h=i==null?h!=null:i!==h
i=h}if(i){l=A.C(e+A.D(r)+'".')
throw A.j(l)}o=p
n=!1}else{m=A.x(A.q(k.document).head)
if(m==null){l=A.C("The document has no head element.")
throw A.j(l)}g=A.q(A.q(k.document).createElement("style"))
g.id=r
g.setAttribute("data-sparrow-stylesheet","")
g.textContent=s
o=g
A.q(m.appendChild(o))
n=!0}q=new A.eb(o,A.ad(n))
$.h7.j(0,r,q)}else{i=A.aw(q.a.textContent)
h=s
if(i==null?h!=null:i!==h){l=A.C(e+A.D(r)+'".')
throw A.j(l)}}++q.c
J.c_(c,r)}}catch(f){A.kX(c)
throw f}d.a=!1
return new A.h_(d,c)},
kX(a){var s,r,q,p
for(s=A.P(a).h("N<1>"),r=new A.N(a,s),r=new A.G(r,r.gn(0),s.h("G<B.E>")),s=s.h("B.E");r.l();){q=r.d
if(q==null)q=s.a(q)
p=$.h7.p(0,q)
if(p==null)continue
if(--p.c!==0)continue
if(p.b)p.a.remove()
$.h7.a1(0,q)}},
h_:function h_(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b
this.c=0},
l8(a,b){var s,r,q,p,o,n,m,l,k,j=new A.dO().cO(new A.e5(a),null,"sparrow-fragment"),i=A.x(A.q(A.q(new v.G.DOMParser()).parseFromString(j,"text/html")).getElementById("sparrow-fragment"))
if(i==null)throw A.j(A.C("Could not render a markup fragment."))
s=A.c([],t.Y)
try{r=A.x(i.firstChild)
while(r!=null){q=A.x(r.nextSibling)
p=A.q(r.cloneNode(!0))
A.q(b.appendChild(p))
J.c_(s,p)
r=q}}catch(n){for(m=s,l=A.P(m).h("N<1>"),m=new A.N(m,l),m=new A.G(m,m.gn(0),l.h("G<B.E>")),l=l.h("B.E");m.l();){k=m.d
o=k==null?l.a(k):k
k=A.x(o.parentNode)
if(k!=null)A.q(k.removeChild(o))}throw n}},
e5:function e5(a){this.a=a},
df:function df(a){this.a=a
this.b=null
this.c=!1},
ey:function ey(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ex:function ex(a){this.a=a},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
en:function en(a){this.a=a},
eo:function eo(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
er:function er(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
d(a,b,c){return new A.b6(a,b,c)},
jt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){return new A.cF(r,a0,a4,a7,a1,q,o,g,a6,a9,p,h,s,a5,a8,!0,!0,i,b,k,e,m,c,l,f,n,a2,a3,a)},
f(a,b,c,d,e,f,g,h,i,j){A.H(j,"width")
A.H(e,"height")
A.H(h,"padding")
A.H(null,"margin")
A.H(c,"borderRadius")
A.H(g,"minWidth")
A.H(f,"maxWidth")
if(b!=null&&B.c.B(b,";"))A.Q(A.O(b,"backgroundColor",u.w))
return new A.c5(d,i,j,e,h,b,c,g,f,a)},
A(a,b){var s=new A.cy(a,b)
s.bB(B.b,a,"div",b)
return s},
m(a,b){A.o1(b,"padding",!1)
return new A.cu(a,b)},
I(a,b){if(b<1)A.Q(A.O(b,"flex","Must be at least 1."))
return new A.c8(a,b)},
b(a,b,c){A.H(c,"width")
A.H(b,"height")
if(c==null&&b==null&&a==null)A.Q(A.ae("SizedBox requires a width, height, or child."))
return new A.cD(c,b,a)},
cK(a,b,c,d,e,f){var s=A.e(b,t.g)
A.H(f,"spacing")
A.H(e,"runSpacing")
return new A.cJ(s,f,e,a,d,c)},
dK(a,b){var s=[]
s.push(a)
B.d.R(s,B.aa)
s=A.e(s,t.g)
if(s.length!==1)A.Q(A.ae("A scroll view must have one child or a child list."))
return new A.cB(s,!1)},
de(a,b,c,d,e){A.H(e,"thickness")
A.H(c,"height")
A.H(d,"indent")
A.H(b,"endIndent")
if(B.c.B(a,";"))A.Q(A.O(a,"color",u.w))
return new A.c6(a,e,c,d,b)},
M(a,b,c,d,e){var s=A.e(a,t.g)
if(b<1)A.Q(A.O(b,"columns","Must be at least one column."))
A.H(c,"gap")
A.H(null,"rowGap")
A.H(null,"columnGap")
A.o2(d)
A.l6(e,"gap",!1)
return new A.c9(s,b,c,d,e)},
w(a,b,c){if(a<1||a>6)A.Q(A.O(a,"level","Heading level must be 1-6."))
return new A.cc(a,b,c)},
oF(a){var s=t.N,r=new A.fF(A.h(s,s)),q=r.a_(a),p=r.gZ()
if(p==null)return q
if(!(q instanceof A.aA))throw A.j(A.C("A UI tree must lower to an HTML element."))
s=A.bC(q.w,s)
s.push(p)
return A.W(q.a,q.b,q.f,q.c,q.d,s,q.e,null)},
nN(a,b){var s,r,q,p,o,n,m,l=new A.ac("")
for(s=a+"{",r=0;r<3;++r){q=B.L[r]
p=b.p(0,q)
if(p==null)continue
o=s+p+";}"
n=q.c
m=l.a
l.a=(n==null?l.a=m+o:l.a=m+("@media (min-width: "+A.D(n)+"px){"+o+"}"))+"\n"}s=l.a
return B.c.cV(s.charCodeAt(0)==0?s:s)},
ns(a,b){return A.fZ(a.a,b)+" "+A.fZ(a.b,b)+" "+A.fZ(a.c,b)+" "+A.fZ(a.d,b)},
nr(a,b,c,d){var s
A.H(c,"value")
s=A.a3(c)
return"display:grid;grid-template-columns:"+("repeat("+b+",minmax(0,1fr))")+";"+("gap:"+(s+"px"))},
bT(a,b){var s=A.bj(a,t.N,t.X)
if(b.length!==0)s.j(0,"style",A.h0(a.p(0,"style"),b))
return s},
kW(a,b){if(a.gI().a5(0,new A.h5()))throw A.j(A.ae(b+" responsive values manage their own inline styles."))},
nM(a,b,c){var s,r,q=a.gD()
q=q.gu(q)
for(;;){if(!q.l()){s=null
break}r=q.gt()
if(r.a.toLowerCase()==="style"){s=r.b
break}}if(s==null)return
if(typeof s!="string")throw A.j(A.O(s,"style",c+" styles must be static strings."))
if(B.d.a5(A.c(s.split(";"),t.s),new A.h2(b)))throw A.j(A.ae(c+" responsive values manage the "+b+" property."))},
h3(a,b){if(a.gI().a5(0,new A.h4()))throw A.j(A.ae(b+" uses the reserved data-sparrow-layout attribute."))},
kP(a,b,c,d){A.H(c,"gap")
A.H(c,"value")
return"display:flex;flex-direction:"+b+";gap:"+(A.a3(c)+"px")+";justify-content:"+d.c+";align-items:"+a.c+";min-width:0;min-height:0"},
h0(a,b){var s,r=a==null
if(!r&&typeof a!="string")throw A.j(A.O(a,"style","Layout styles must be static strings."))
A.aw(a)
s=r?null:B.c.a3(a)
if(s==null)s=""
if(s.length===0)return b
return s+";"+b},
fZ(a,b){A.l5(a,"value")
return A.a3(a)+"px"},
a3(a){if(a===0)return"0"
return a===B.n.cR(a)?B.n.m(B.n.cU(a)):B.n.m(a)},
o1(a,b,c){var s,r,q,p,o
for(s=A.a(["top",a.a,"right",a.b,"bottom",a.c,"left",a.d],t.N,t.i),s=new A.ai(s,A.y(s).h("ai<1,2>")).gu(0),r=b+".";s.l();){q=s.d
p=q.b
o=r+q.a
if(!isFinite(p))A.Q(A.O(p,o,"Must be a finite CSS length."))
if(p<0)throw A.j(A.O(p,o,"Must be a non-negative value."))}},
l6(a,b,c){var s,r,q,p,o,n=A.h(t.b,t.i)
n.j(0,B.t,a.a)
s=a.b
if(s!=null)n.j(0,B.r,s)
n.j(0,B.q,a.c)
n=new A.ai(n,n.$ti.h("ai<1,2>")).gu(0)
r=b+"."
while(n.l()){q=n.d
p=q.b
o=r+q.a.b
if(!isFinite(p))A.Q(A.O(p,o,"Must be a finite CSS length."))
if(p<0)throw A.j(A.O(p,o,"Must be a non-negative value."))}},
o2(a){var s,r,q,p,o=A.h(t.b,t.S)
o.j(0,B.t,a.a)
s=a.b
if(s!=null)o.j(0,B.r,s)
o.j(0,B.q,a.c)
o=new A.ai(o,o.$ti.h("ai<1,2>")).gu(0)
while(o.l()){r=o.d
q=r.b
p=r.a
if(q<1)A.Q(A.O(q,"columns."+p.b,"Must be at least one column."))}},
l5(a,b){if(a!=null&&!isFinite(a))throw A.j(A.O(a,b,"Must be a finite CSS length."))},
H(a,b){A.l5(a,b)},
l4(a){var s=a==null?null:a
return s==null?"":s},
du:function du(a,b,c){this.c=a
this.a=b
this.b=c},
bA:function bA(a,b,c){this.c=a
this.a=b
this.b=c},
X:function X(){},
b6:function b6(a,b,c){this.a=a
this.f=b
this.r=c},
t:function t(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cF:function cF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6
_.go=a7
_.id=a8
_.k1=a9},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o:function o(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
i:function i(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
F:function F(a){this.a=a},
c5:function c5(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j},
cy:function cy(a,b){this.a=a
this.b=b},
f3:function f3(){},
l:function l(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k:function k(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cu:function cu(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cB:function cB(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c9:function c9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.w=e},
b2:function b2(a,b,c){this.c=a
this.a=b
this.b=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
fF:function fF(a){this.a=a},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(){},
fN:function fN(){},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fG:function fG(a){this.a=a},
fH:function fH(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
h5:function h5(){},
h2:function h2(a){this.a=a},
h4:function h4(){},
ow(){var s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.x(A.q(h.document).getElementById("__FRAMEWORK_STATE__"))
if(!t.m.b(g))A.Q(A.C("Serialized framework state was not found."))
s=A.aw(g.textContent)
r=B.y.cn(s==null?"":s,null)
if(!t.e.b(r))A.Q(A.a9("Serialized framework state must be a JSON object.",null,null))
s=t.N
q=t.X
p=new A.eR(A.bg(A.k8(r,s,q),s,q),A.h(s,t.bS))
o=A.dZ()
n=A.ml(new A.j_(),A.c([new A.aD(A.dH(A.eh("/")),new A.j0(p,o),new A.j1()),new A.aD(A.dH(A.eh("/services")),new A.j3(p,o),new A.j4()),new A.aD(A.dH(A.eh("/solutions")),new A.j5(p,o),new A.j6()),new A.aD(A.dH(A.eh("/about")),new A.j7(p,o),new A.j8()),new A.aD(A.dH(A.eh("/contact")),new A.j9(p,o),new A.ja())],t.d3))
o.sam(A.mm(n))
s=o.C()
q=A.c([],t.u)
m=t.A
l=A.c([],m)
m=A.c([],m)
A.e(B.a8,t.K)
k=new A.cz(s,n,!0,!1,q,l,m)
if(s.a!==n.b)A.Q(A.ae("Create the router with Router.fromCatalog(catalog) to share routes."))
j=A.x(A.q(h.document).querySelector("#app"))
if(j==null)A.Q(A.C('No element found for selector "#app".'))
s=A.x(j.firstChild)
if(s!=null)k.CW=j
k.bz(j)
i=A.dZ()
i.sam(A.am(new A.j2(i,k,o)))
s=A.q(h.window)
s.addEventListener("pagehide",i.C())
s.addEventListener("beforeunload",i.C())
h=A.x(A.q(h.document).body)
if(h!=null)h.setAttribute("data-sparrow-hydrated","true")},
j0:function j0(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
j1:function j1(){},
j3:function j3(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
j4:function j4(){},
j5:function j5(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a},
j6:function j6(){},
j7:function j7(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a},
j8:function j8(){},
j9:function j9(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a},
ja:function ja(){},
j_:function j_(){},
iZ:function iZ(){},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
o9(a,b,c){var s=null
return A.f(B.w,s,s,new A.hB(a,b).$0(),s,s,s,s,"div",s)},
oa(a,b,c){var s=null
return A.f(B.w,s,s,new A.hR(a,b).$0(),s,s,s,s,"div",s)},
ob(a,b,c){var s=null
return A.f(B.w,s,s,new A.i6(a,b).$0(),s,s,s,s,"div",s)},
oc(a,b,c){var s=null
return A.f(B.w,s,s,new A.io(a,b).$0(),s,s,s,s,"div",s)},
od(a,b,c){var s=null
return A.f(B.w,s,s,new A.iD(a,b).$0(),s,s,s,s,"div",s)},
hB:function hB(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
hm:function hm(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a){this.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(a){this.a=a},
hU:function hU(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a},
i5:function i5(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(a){this.a=a},
i9:function i9(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(a){this.a=a},
ir:function ir(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a){this.a=a},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
lq(a){return v.mangledGlobalNames[a]},
kR(a){var s
if(typeof a=="function")throw A.j(A.ae("Attempting to rewrap a JS function."))
s=function(b,c){return function(){return b(c)}}(A.nf,a)
s[$.je()]=a
return s},
am(a){var s
if(typeof a=="function")throw A.j(A.ae("Attempting to rewrap a JS function."))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ng,a)
s[$.je()]=a
return s},
nf(a){return t.Z.a(a).$0()},
ng(a,b,c){t.Z.a(a)
if(A.T(c)>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.ji.prototype={}
J.dm.prototype={
P(a,b){return a===b},
gE(a){return A.dF(a)},
m(a){return"Instance of '"+A.dG(a)+"'"},
gF(a){return A.bc(A.jD(this))}}
J.dp.prototype={
m(a){return String(a)},
gE(a){return a?519018:218159},
gF(a){return A.bc(t.y)},
$iU:1,
$iag:1}
J.ce.prototype={
P(a,b){return null==b},
m(a){return"null"},
gE(a){return 0},
$iU:1}
J.ch.prototype={$iV:1}
J.b_.prototype={
gE(a){return 0},
m(a){return String(a)}}
J.dE.prototype={}
J.bJ.prototype={}
J.aP.prototype={
m(a){var s=a[$.ls()]
if(s==null)s=a[$.je()]
if(s==null)return this.bA(a)
return"JavaScript function for "+J.aI(s)},
$ibh:1}
J.cg.prototype={
gE(a){return 0},
m(a){return String(a)}}
J.ci.prototype={
gE(a){return 0},
m(a){return String(a)}}
J.S.prototype={
k(a,b){A.P(a).c.a(b)
a.$flags&1&&A.ax(a,29)
a.push(b)},
R(a,b){var s
A.P(a).h("u<1>").a(b)
a.$flags&1&&A.ax(a,"addAll",2)
if(Array.isArray(b)){this.bH(a,b)
return}for(s=J.aN(b);s.l();)a.push(s.gt())},
bH(a,b){var s,r
t.v.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.j(A.ak(a))
for(r=0;r<s;++r)a.push(b[r])},
S(a){a.$flags&1&&A.ax(a,"clear","clear")
a.length=0},
J(a,b){var s,r=A.jk(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.D(a[s]))
return r.join(b)},
cu(a,b,c,d){var s,r,q
d.a(b)
A.P(a).O(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.j(A.ak(a))}return r},
M(a,b){if(!(b>=0&&b<a.length))return A.n(a,b)
return a[b]},
gX(a){var s=a.length
if(s>0)return a[s-1]
throw A.j(A.m1())},
a5(a,b){var s,r
A.P(a).h("ag(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.j(A.ak(a))}return!1},
B(a,b){var s
for(s=0;s<a.length;++s)if(J.as(a[s],b))return!0
return!1},
gbp(a){return a.length!==0},
m(a){return A.jh(a,"[","]")},
gu(a){return new J.be(a,a.length,A.P(a).h("be<1>"))},
gE(a){return A.dF(a)},
gn(a){return a.length},
p(a,b){if(!(b>=0&&b<a.length))throw A.j(A.iH(a,b))
return a[b]},
j(a,b,c){A.P(a).c.a(c)
a.$flags&2&&A.ax(a)
if(!(b>=0&&b<a.length))throw A.j(A.iH(a,b))
a[b]=c},
$iz:1,
$iu:1,
$iE:1}
J.dn.prototype={
cW(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.dG(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.eS.prototype={}
J.be.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.bd(q)
throw A.j(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia1:1}
J.cf.prototype={
cU(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.j(A.bn(""+a+".toInt()"))},
cR(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bt(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.j(A.ap(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.n(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.Q(A.bn("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.n(p,1)
s=p[1]
if(3>=r)return A.n(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.aV("0",o)},
m(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
W(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cf(a,b){return(a|0)===a?a/b|0:this.cg(a,b)},
cg(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.j(A.bn("Result of truncating division is "+A.D(s)+": "+A.D(a)+" ~/ "+b))},
aK(a,b){var s
if(a>0)s=this.bb(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cd(a,b){if(0>b)throw A.j(A.l9(b))
return this.bb(a,b)},
bb(a,b){return b>31?0:a>>>b},
gF(a){return A.bc(t.p)},
$iK:1,
$ibw:1}
J.cd.prototype={
gF(a){return A.bc(t.S)},
$iU:1,
$ip:1}
J.dq.prototype={
gF(a){return A.bc(t.i)},
$iU:1}
J.bi.prototype={
bh(a,b){return new A.e9(b,a,0)},
cr(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.G(a,r-s)},
by(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.bB){s=b.e
s=!(s==null?b.e=b.bK():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.bT(a,b)}},
a2(a,b,c,d){var s=A.cw(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
bT(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.jR(b,a),s=s.gu(s),r=0,q=1;s.l();){p=s.gt()
o=p.gau()
n=p.gal()
q=n-o
if(q===0&&r===o)continue
B.d.k(m,this.q(a,r,o))
r=n}if(r<a.length||q>0)B.d.k(m,this.G(a,r))
return m},
A(a,b,c){var s
if(c<0||c>a.length)throw A.j(A.ap(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
v(a,b){return this.A(a,b,0)},
q(a,b,c){return a.substring(b,A.cw(b,c,a.length))},
G(a,b){return this.q(a,b,null)},
a3(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.n(p,0)
if(p.charCodeAt(0)===133){s=J.m5(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.n(p,r)
q=p.charCodeAt(r)===133?J.k2(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
cV(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.n(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.k2(r,s))},
aV(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.j(B.a_)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ap(a,b,c){var s
if(c<0||c>a.length)throw A.j(A.ap(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
aR(a,b){return this.ap(a,b,0)},
bq(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.j(A.ap(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
cA(a,b){return this.bq(a,b,null)},
B(a,b){return A.oB(a,b,0)},
m(a){return a},
gE(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return A.bc(t.N)},
gn(a){return a.length},
$iU:1,
$if1:1,
$ir:1}
A.aK.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.bz.prototype={
gn(a){return this.a.length},
p(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.n(s,b)
return s.charCodeAt(b)}}
A.fe.prototype={}
A.z.prototype={}
A.B.prototype={
gu(a){var s=this
return new A.G(s,s.gn(s),A.y(s).h("G<B.E>"))},
gU(a){return this.gn(this)===0},
a5(a,b){var s,r,q=this
A.y(q).h("ag(B.E)").a(b)
s=q.gn(q)
for(r=0;r<s;++r){if(b.$1(q.M(0,r)))return!0
if(s!==q.gn(q))throw A.j(A.ak(q))}return!1},
J(a,b){var s,r,q,p=this,o=p.gn(p)
if(b.length!==0){if(o===0)return""
s=A.D(p.M(0,0))
if(o!==p.gn(p))throw A.j(A.ak(p))
for(r=s,q=1;q<o;++q){r=r+b+A.D(p.M(0,q))
if(o!==p.gn(p))throw A.j(A.ak(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.D(p.M(0,q))
if(o!==p.gn(p))throw A.j(A.ak(p))}return r.charCodeAt(0)==0?r:r}},
aT(a,b,c){var s=A.y(this)
return new A.aa(this,s.O(c).h("1(B.E)").a(b),s.h("@<B.E>").O(c).h("aa<1,2>"))}}
A.G.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.ei(q),o=p.gn(q)
if(r.b!==o)throw A.j(A.ak(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.M(q,s);++r.c
return!0},
$ia1:1}
A.bk.prototype={
gu(a){return new A.cn(J.aN(this.a),this.b,A.y(this).h("cn<1,2>"))},
gn(a){return J.c0(this.a)}}
A.c7.prototype={$iz:1}
A.cn.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia1:1}
A.aa.prototype={
gn(a){return J.c0(this.a)},
M(a,b){return this.b.$1(J.lL(this.a,b))}}
A.at.prototype={
gu(a){return new A.cI(J.aN(this.a),this.b,this.$ti.h("cI<1>"))}}
A.cI.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$ia1:1}
A.ah.prototype={}
A.bm.prototype={
j(a,b,c){A.y(this).h("bm.E").a(c)
throw A.j(A.bn("Cannot modify an unmodifiable list"))}}
A.bK.prototype={}
A.N.prototype={
gn(a){return J.c0(this.a)},
M(a,b){var s=this.a,r=J.ei(s)
return r.M(s,r.gn(s)-1-b)}}
A.cR.prototype={$r:"+(1,2)",$s:1}
A.c3.prototype={}
A.c2.prototype={
gU(a){return this.gn(this)===0},
m(a){return A.jm(this)},
j(a,b,c){var s=A.y(this)
s.c.a(b)
s.y[1].a(c)
A.lU()},
gD(){return new A.b9(this.cs(),A.y(this).h("b9<ab<1,2>>"))},
cs(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gD(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gI(),o=o.gu(o),n=A.y(s),m=n.y[1],n=n.h("ab<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gt()
k=s.p(0,l)
r=4
return a.b=new A.ab(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ia0:1}
A.a_.prototype={
gn(a){return this.b.length},
gb3(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
H(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
p(a,b){if(!this.H(b))return null
return this.b[this.a[b]]},
T(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gb3()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gI(){return new A.bo(this.gb3(),this.$ti.h("bo<1>"))},
ga7(){return new A.bo(this.b,this.$ti.h("bo<2>"))}}
A.bo.prototype={
gn(a){return this.a.length},
gu(a){var s=this.a
return new A.bp(s,s.length,this.$ti.h("bp<1>"))}}
A.bp.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia1:1}
A.c4.prototype={
k(a,b){A.y(this).c.a(b)
A.lV()}}
A.aZ.prototype={
gn(a){return this.b},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.bp(s,s.length,r.$ti.h("bp<1>"))},
B(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cA.prototype={}
A.fg.prototype={
V(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.ct.prototype={
m(a){return"Null check operator used on a null value"}}
A.dr.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dR.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.f0.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cT.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ikg:1}
A.aX.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.lr(r==null?"unknown":r)+"'"},
$ibh:1,
gcZ(){return this},
$C:"$1",
$R:1,
$D:null}
A.da.prototype={$C:"$0",$R:0}
A.db.prototype={$C:"$2",$R:2}
A.dP.prototype={}
A.dM.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.lr(s)+"'"}}
A.by.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.by))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.lk(this.a)^A.dF(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.dG(this.a)+"'")}}
A.dJ.prototype={
m(a){return"RuntimeError: "+this.a}}
A.aQ.prototype={
gn(a){return this.a},
gU(a){return this.a===0},
gI(){return new A.az(this,A.y(this).h("az<1>"))},
ga7(){return new A.aj(this,A.y(this).h("aj<2>"))},
gD(){return new A.ai(this,A.y(this).h("ai<1,2>"))},
H(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
R(a,b){A.y(this).h("a0<1,2>").a(b).T(0,new A.eT(this))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cv(b)},
cv(a){var s,r,q=this.d
if(q==null)return null
s=this.bZ(q,a)
r=this.bo(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.y(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.aW(s==null?q.b=q.aH():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.aW(r==null?q.c=q.aH():r,b,c)}else q.cw(b,c)},
cw(a,b){var s,r,q,p,o=this,n=A.y(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.aH()
r=o.bn(a)
q=s[r]
if(q==null)s[r]=[o.aI(a,b)]
else{p=o.bo(q,a)
if(p>=0)q[p].b=b
else q.push(o.aI(a,b))}},
cM(a,b){var s,r,q=this,p=A.y(q)
p.c.a(a)
p.h("2()").a(b)
if(q.H(a)){s=q.p(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
a1(a,b){var s=this.bE(this.b,b)
return s},
S(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aG()}},
T(a,b){var s,r,q=this
A.y(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.j(A.ak(q))
s=s.c}},
aW(a,b,c){var s,r=A.y(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aI(b,c)
else s.b=c},
bE(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.bF(s)
delete a[b]
return s.b},
aG(){this.r=this.r+1&1073741823},
aI(a,b){var s=this,r=A.y(s),q=new A.eW(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.aG()
return q},
bF(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.aG()},
bn(a){return J.aM(a)&1073741823},
bZ(a,b){return a[this.bn(b)]},
bo(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.as(a[r].a,b))return r
return-1},
m(a){return A.jm(this)},
aH(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ik6:1}
A.eT.prototype={
$2(a,b){var s=this.a,r=A.y(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.y(this.a).h("~(1,2)")}}
A.eW.prototype={}
A.az.prototype={
gn(a){return this.a.a},
gU(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cl(s,s.r,s.e,this.$ti.h("cl<1>"))},
B(a,b){return this.a.H(b)}}
A.cl.prototype={
gt(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.j(A.ak(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia1:1}
A.aj.prototype={
gn(a){return this.a.a},
gu(a){var s=this.a
return new A.cm(s,s.r,s.e,this.$ti.h("cm<1>"))}}
A.cm.prototype={
gt(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.j(A.ak(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia1:1}
A.ai.prototype={
gn(a){return this.a.a},
gu(a){var s=this.a
return new A.ck(s,s.r,s.e,this.$ti.h("ck<1,2>"))}}
A.ck.prototype={
gt(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.j(A.ak(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.ab(s.a,s.b,r.$ti.h("ab<1,2>"))
r.c=s.c
return!0}},
$ia1:1}
A.iL.prototype={
$1(a){return this.a(a)},
$S:14}
A.iM.prototype={
$2(a,b){return this.a(a,b)},
$S:19}
A.iN.prototype={
$1(a){return this.a(A.v(a))},
$S:15}
A.bs.prototype={
m(a){return this.bf(!1)},
bf(a){var s,r,q,p,o,n=this.bX(),m=this.b0(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.n(m,q)
o=m[q]
l=a?l+A.kc(o):l+A.D(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bX(){var s,r=this.$s
while($.fA.length<=r)B.d.k($.fA,null)
s=$.fA[r]
if(s==null){s=this.bJ()
B.d.j($.fA,r,s)}return s},
bJ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.c(new Array(l),t.R)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.d.j(k,q,r[s])}}return A.e(k,t.K)}}
A.bN.prototype={
b0(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.bN&&this.$s===b.$s&&J.as(this.a,b.a)&&J.as(this.b,b.b)},
gE(a){return A.mf(this.$s,this.a,this.b,B.z)}}
A.bB.prototype={
m(a){return"RegExp/"+this.a+"/"+this.b.flags},
gb5(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.k3(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
bK(){var s,r=this.a
if(!B.c.B(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
bh(a,b){return new A.dW(this,b,0)},
bW(a,b){var s,r=this.gb5()
if(r==null)r=A.ef(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.e6(s)},
$if1:1,
$imj:1}
A.e6.prototype={
gau(){return this.b.index},
gal(){var s=this.b
return s.index+s[0].length},
$ibE:1,
$icx:1}
A.dW.prototype={
gu(a){return new A.dX(this.a,this.b,this.c)}}
A.dX.prototype={
gt(){var s=this.d
return s==null?t.cz.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bW(l,s)
if(p!=null){m.d=p
o=p.gal()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.n(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.n(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia1:1}
A.dN.prototype={
gal(){return this.a+this.c.length},
$ibE:1,
gau(){return this.a}}
A.e9.prototype={
gu(a){return new A.ea(this.a,this.b,this.c)}}
A.ea.prototype={
l(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dN(s,o)
q.c=r===q.c?r+1:r
return!0},
gt(){var s=this.d
s.toString
return s},
$ia1:1}
A.fr.prototype={
C(){var s=this.b
if(s===this)throw A.j(new A.aK("Local '' has not been initialized."))
return s},
sam(a){if(this.b!==this)throw A.j(new A.aK("Local '' has already been initialized."))
this.b=a}}
A.bF.prototype={
gF(a){return B.au},
$iU:1}
A.cq.prototype={
c1(a,b,c,d){var s=A.ap(b,0,c,d,null)
throw A.j(s)},
aY(a,b,c,d){if(b>>>0!==b||b>c)this.c1(a,b,c,d)}}
A.dv.prototype={
gF(a){return B.av},
$iU:1}
A.af.prototype={
gn(a){return a.length},
$ian:1}
A.co.prototype={
p(a,b){A.aW(b,a,a.length)
return a[b]},
j(a,b,c){A.kM(c)
a.$flags&2&&A.ax(a)
A.aW(b,a,a.length)
a[b]=c},
$iz:1,
$iu:1,
$iE:1}
A.cp.prototype={
j(a,b,c){A.T(c)
a.$flags&2&&A.ax(a)
A.aW(b,a,a.length)
a[b]=c},
bx(a,b,c,d,e){var s,r,q
t.hb.a(d)
a.$flags&2&&A.ax(a,5)
s=a.length
this.aY(a,b,s,"start")
this.aY(a,c,s,"end")
if(b>c)A.Q(A.ap(b,0,c,null,null))
r=c-b
if(e<0)A.Q(A.ae(e))
if(16-e<r)A.Q(A.C("Not enough elements"))
q=e!==0||16!==r?d.subarray(e,e+r):d
a.set(q,b)
return},
$iz:1,
$iu:1,
$iE:1}
A.dw.prototype={
gF(a){return B.aw},
$iU:1}
A.dx.prototype={
gF(a){return B.ax},
$iU:1}
A.dy.prototype={
gF(a){return B.ay},
p(a,b){A.aW(b,a,a.length)
return a[b]},
$iU:1}
A.dz.prototype={
gF(a){return B.az},
p(a,b){A.aW(b,a,a.length)
return a[b]},
$iU:1}
A.dA.prototype={
gF(a){return B.aA},
p(a,b){A.aW(b,a,a.length)
return a[b]},
$iU:1}
A.dB.prototype={
gF(a){return B.aC},
p(a,b){A.aW(b,a,a.length)
return a[b]},
$iU:1}
A.dC.prototype={
gF(a){return B.aD},
p(a,b){A.aW(b,a,a.length)
return a[b]},
$iU:1}
A.cr.prototype={
gF(a){return B.aE},
gn(a){return a.length},
p(a,b){A.aW(b,a,a.length)
return a[b]},
$iU:1}
A.cs.prototype={
gF(a){return B.aF},
gn(a){return a.length},
p(a,b){A.aW(b,a,a.length)
return a[b]},
$iU:1,
$iju:1}
A.cN.prototype={}
A.cO.prototype={}
A.cP.prototype={}
A.cQ.prototype={}
A.aE.prototype={
h(a){return A.d_(v.typeUniverse,this,a)},
O(a){return A.kB(v.typeUniverse,this,a)}}
A.e1.prototype={}
A.fE.prototype={
m(a){return A.aq(this.a,null)}}
A.e0.prototype={
m(a){return this.a}}
A.cV.prototype={}
A.fo.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:20}
A.fn.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:21}
A.fp.prototype={
$0(){this.a.$0()},
$S:11}
A.fq.prototype={
$0(){this.a.$0()},
$S:11}
A.fC.prototype={
bD(a,b){if(self.setTimeout!=null)self.setTimeout(A.iG(new A.fD(this,b),0),a)
else throw A.j(A.bn("`setTimeout()` not found."))}}
A.fD.prototype={
$0(){this.b.$0()},
$S:1}
A.cU.prototype={
gt(){var s=this.b
return s==null?this.$ti.c.a(s):s},
cc(a,b){var s,r,q
a=A.T(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gt()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.cc(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.kv
return!1}if(0>=p.length)return A.n(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.kv
throw n
return!1}if(0>=p.length)return A.n(p,-1)
o.a=p.pop()
m=1
continue}throw A.j(A.C("sync*"))}return!1},
d_(a){var s,r,q=this
if(a instanceof A.b9){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.d.k(r,q.a)
q.a=s
return 2}else{q.d=J.aN(a)
return 2}},
$ia1:1}
A.b9.prototype={
gu(a){return new A.cU(this.a(),this.$ti.h("cU<1>"))}}
A.dY.prototype={}
A.ee.prototype={$iko:1}
A.e8.prototype={
cT(a){var s,r,q
t.M.a(a)
try{if(B.u===$.dV){a.$0()
return}A.nP(null,null,this,a,t.H)}catch(q){s=A.bZ(q)
r=A.ej(q)
A.nO(A.ef(s),t.l.a(r))}},
bi(a){return new A.fB(this,t.M.a(a))}}
A.fB.prototype={
$0(){return this.a.cT(this.b)},
$S:1}
A.h6.prototype={
$0(){A.di(this.a,this.b)},
$S:1}
A.aV.prototype={
gu(a){var s=this,r=new A.bq(s,s.r,A.y(s).h("bq<1>"))
r.c=s.e
return r},
gn(a){return this.a},
B(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.W.a(s[b])!=null}else{r=this.bM(b)
return r}},
bM(a){var s=this.d
if(s==null)return!1
return this.aF(s[this.aB(a)],a)>=0},
k(a,b){var s,r,q=this
A.y(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aZ(s==null?q.b=A.jv():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aZ(r==null?q.c=A.jv():r,b)}else return q.bG(b)},
bG(a){var s,r,q,p=this
A.y(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.jv()
r=p.aB(a)
q=s[r]
if(q==null)s[r]=[p.aA(a)]
else{if(p.aF(q,a)>=0)return!1
q.push(p.aA(a))}return!0},
a1(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.b8(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.b8(s.c,b)
else return s.c6(b)},
c6(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aB(a)
r=n[s]
q=o.aF(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.bg(p)
return!0},
S(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.az()}},
aZ(a,b){A.y(this).c.a(b)
if(t.W.a(a[b])!=null)return!1
a[b]=this.aA(b)
return!0},
b8(a,b){var s
if(a==null)return!1
s=t.W.a(a[b])
if(s==null)return!1
this.bg(s)
delete a[b]
return!0},
az(){this.r=this.r+1&1073741823},
aA(a){var s,r=this,q=new A.e4(A.y(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.az()
return q},
bg(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.az()},
aB(a){return J.aM(a)&1073741823},
aF(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.as(a[r].a,b))return r
return-1},
$ik9:1}
A.e4.prototype={}
A.bq.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.j(A.ak(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$ia1:1}
A.eX.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:22}
A.R.prototype={
gu(a){return new A.G(a,this.gn(a),A.bW(a).h("G<R.E>"))},
M(a,b){return this.p(a,b)},
gbp(a){return this.gn(a)!==0},
ct(a,b,c,d){var s
A.bW(a).h("R.E?").a(d)
A.cw(b,c,this.gn(a))
for(s=b;s<c;++s)this.j(a,s,d)},
m(a){return A.jh(a,"[","]")},
$iz:1,
$iu:1,
$iE:1}
A.a2.prototype={
T(a,b){var s,r,q,p=A.y(this)
p.h("~(a2.K,a2.V)").a(b)
for(s=this.gI(),s=s.gu(s),p=p.h("a2.V");s.l();){r=s.gt()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
gD(){return this.gI().aT(0,new A.eY(this),A.y(this).h("ab<a2.K,a2.V>"))},
H(a){return this.gI().B(0,a)},
gn(a){var s=this.gI()
return s.gn(s)},
gU(a){var s=this.gI()
return s.gU(s)},
ga7(){return new A.cL(this,A.y(this).h("cL<a2.K,a2.V>"))},
m(a){return A.jm(this)},
$ia0:1}
A.eY.prototype={
$1(a){var s=this.a,r=A.y(s)
r.h("a2.K").a(a)
s=s.p(0,a)
if(s==null)s=r.h("a2.V").a(s)
return new A.ab(a,s,r.h("ab<a2.K,a2.V>"))},
$S(){return A.y(this.a).h("ab<a2.K,a2.V>(a2.K)")}}
A.eZ.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.D(a)
r.a=(r.a+=s)+": "
s=A.D(b)
r.a+=s},
$S:16}
A.cL.prototype={
gn(a){var s=this.a
return s.gn(s)},
gu(a){var s=this.a,r=s.gI()
return new A.cM(r.gu(r),s,this.$ti.h("cM<1,2>"))}}
A.cM.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.p(0,r.gt())
return!0}s.c=null
return!1},
gt(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia1:1}
A.d0.prototype={
j(a,b,c){var s=A.y(this)
s.c.a(b)
s.y[1].a(c)
throw A.j(A.bn("Cannot modify unmodifiable map"))}}
A.bD.prototype={
p(a,b){return this.a.p(0,b)},
j(a,b,c){var s=A.y(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
H(a){return this.a.H(a)},
T(a,b){this.a.T(0,A.y(this).h("~(1,2)").a(b))},
gU(a){var s=this.a
return s.gU(s)},
gn(a){var s=this.a
return s.gn(s)},
gI(){return this.a.gI()},
m(a){return this.a.m(0)},
ga7(){return this.a.ga7()},
gD(){return this.a.gD()},
$ia0:1}
A.b7.prototype={}
A.b4.prototype={
R(a,b){var s
for(s=J.aN(A.y(this).h("u<1>").a(b));s.l();)this.k(0,s.gt())},
m(a){return A.jh(this,"{","}")},
$iz:1,
$iu:1,
$idL:1}
A.cS.prototype={}
A.bO.prototype={}
A.e2.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.c4(b):s}},
gn(a){return this.b==null?this.c.a:this.a4().length},
gU(a){return this.gn(0)===0},
gI(){if(this.b==null){var s=this.c
return new A.az(s,A.y(s).h("az<1>"))}return new A.e3(this)},
ga7(){var s,r=this
if(r.b==null){s=r.c
return new A.aj(s,A.y(s).h("aj<2>"))}return A.ka(r.a4(),new A.fv(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.H(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.cj().j(0,b,c)},
H(a){if(this.b==null)return this.c.H(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
T(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.T(0,b)
s=o.a4()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.fY(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.j(A.ak(o))}},
a4(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
cj(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.h(t.N,t.z)
r=n.a4()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.p(0,o))}if(p===0)B.d.k(r,"")
else B.d.S(r)
n.a=n.b=null
return n.c=s},
c4(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.fY(this.a[a])
return this.b[a]=s}}
A.fv.prototype={
$1(a){return this.a.p(0,A.v(a))},
$S:15}
A.e3.prototype={
gn(a){return this.a.gn(0)},
M(a,b){var s=this.a
if(s.b==null)s=s.gI().M(0,b)
else{s=s.a4()
if(!(b>=0&&b<s.length))return A.n(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gI()
s=s.gu(s)}else{s=s.a4()
s=new J.be(s,s.length,A.P(s).h("be<1>"))}return s},
B(a,b){return this.a.H(b)}}
A.fV.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:4}
A.fU.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:4}
A.d9.prototype={
cD(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.cw(a4,a5,a2)
s=$.lD()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.n(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.n(a3,k)
h=A.iK(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.n(a3,g)
f=A.iK(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.n(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.n(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.ac("")
g=o}else g=o
g.a+=B.c.q(a3,p,q)
c=A.Z(j)
g.a+=c
p=k
continue}}throw A.j(A.a9("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.q(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.jS(a3,m,a5,n,l,r)
else{b=B.n.W(r-1,4)+1
if(b===1)throw A.j(A.a9(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.a2(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.jS(a3,m,a5,n,l,a)
else{b=B.n.W(a,4)
if(b===1)throw A.j(A.a9(a1,a3,a5))
if(b>1)a3=B.c.a2(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ek.prototype={}
A.bf.prototype={}
A.dd.prototype={}
A.dg.prototype={}
A.cj.prototype={
m(a){var s=A.dh(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.dt.prototype={
m(a){return"Cyclic error in JSON stringify"}}
A.ds.prototype={
cn(a,b){var s=A.nK(a,this.gcp().a)
return s},
bj(a,b){var s=A.mB(a,this.gcq().b,null)
return s},
gcq(){return B.a7},
gcp(){return B.a6}}
A.eV.prototype={}
A.eU.prototype={}
A.fx.prototype={
bw(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.q(a,r,q)
r=q+1
o=A.Z(92)
s.a+=o
o=A.Z(117)
s.a+=o
o=A.Z(100)
s.a+=o
o=p>>>8&15
o=A.Z(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.Z(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.Z(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.q(a,r,q)
r=q+1
o=A.Z(92)
s.a+=o
switch(p){case 8:o=A.Z(98)
s.a+=o
break
case 9:o=A.Z(116)
s.a+=o
break
case 10:o=A.Z(110)
s.a+=o
break
case 12:o=A.Z(102)
s.a+=o
break
case 13:o=A.Z(114)
s.a+=o
break
default:o=A.Z(117)
s.a+=o
o=A.Z(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.Z(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.Z(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.q(a,r,q)
r=q+1
o=A.Z(92)
s.a+=o
o=A.Z(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.q(a,r,m)},
aw(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.j(new A.dt(a,null))}B.d.k(s,a)},
ar(a){var s,r,q,p,o=this
if(o.bv(a))return
o.aw(a)
try{s=o.b.$1(a)
if(!o.bv(s)){q=A.k4(a,null,o.gb7())
throw A.j(q)}q=o.a
if(0>=q.length)return A.n(q,-1)
q.pop()}catch(p){r=A.bZ(p)
q=A.k4(a,r,o.gb7())
throw A.j(q)}},
bv(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.a3.m(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bw(a)
s.a+='"'
return!0}else if(t.c.b(a)){q.aw(a)
q.cX(a)
s=q.a
if(0>=s.length)return A.n(s,-1)
s.pop()
return!0}else if(t.e.b(a)){q.aw(a)
r=q.cY(a)
s=q.a
if(0>=s.length)return A.n(s,-1)
s.pop()
return r}else return!1},
cX(a){var s,r,q=this.c
q.a+="["
s=J.ei(a)
if(s.gbp(a)){this.ar(s.p(a,0))
for(r=1;r<s.gn(a);++r){q.a+=","
this.ar(s.p(a,r))}}q.a+="]"},
cY(a){var s,r,q,p,o,n,m=this,l={}
if(a.gU(a)){m.c.a+="{}"
return!0}s=a.gn(a)*2
r=A.jk(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.T(0,new A.fy(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bw(A.v(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.n(r,n)
m.ar(r[n])}p.a+="}"
return!0}}
A.fy.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.d.j(s,r.a++,a)
B.d.j(s,r.a++,b)},
$S:16}
A.fw.prototype={
gb7(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dU.prototype={}
A.fm.prototype={
a_(a){var s,r,q,p,o=a.length,n=A.cw(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.fW(r)
if(q.bY(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.n(a,p)
q.aO()}return new Uint8Array(r.subarray(0,A.ni(0,q.b,s)))}}
A.fW.prototype={
aO(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.ax(q)
s=q.length
if(!(p<s))return A.n(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.n(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.n(q,p)
q[p]=189},
cl(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.ax(r)
o=r.length
if(!(q<o))return A.n(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.n(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.n(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.n(r,p)
r[p]=s&63|128
return!0}else{n.aO()
return!1}},
bY(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.n(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.n(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.ax(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.n(a,m)
if(k.cl(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.aO()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.ax(s)
if(!(m<q))return A.n(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.ax(s)
if(!(m<q))return A.n(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.n(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.n(s,m)
s[m]=n&63|128}}}return o}}
A.fl.prototype={
a_(a){return new A.fT(this.a).bP(t.V.a(a),0,null,!0)}}
A.fT.prototype={
bP(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.V.a(a)
s=A.cw(b,c,J.c0(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.n6(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.n5(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.aC(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.n7(o)
l.b=0
throw A.j(A.a9(m,a,p+l.c))}return n},
aC(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.n.cf(b+c,2)
r=q.aC(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.aC(a,s,c,d)}return q.co(a,b,c,d)},
co(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.ac(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.n(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.n(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.n(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.Z(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.Z(h)
e.a+=p
break
case 65:p=A.Z(h)
e.a+=p;--d
break
default:p=A.Z(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.n(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.n(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.n(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.n(a,l)
p=A.Z(a[l])
e.a+=p}else{p=A.ki(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.Z(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.fs.prototype={
m(a){return this.aj()}}
A.Y.prototype={}
A.d7.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dh(s)
return"Assertion failed"}}
A.cG.prototype={}
A.aJ.prototype={
gaE(){return"Invalid argument"+(!this.a?"(s)":"")},
gaD(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.D(p),n=s.gaE()+q+o
if(!s.a)return n
return n+s.gaD()+": "+A.dh(s.gaS())},
gaS(){return this.b}}
A.cv.prototype={
gaS(){return A.kN(this.b)},
gaE(){return"RangeError"},
gaD(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.D(q):""
else if(q==null)s=": Not greater than or equal to "+A.D(r)
else if(q>r)s=": Not in inclusive range "+A.D(r)+".."+A.D(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.D(r)
return s}}
A.dl.prototype={
gaS(){return A.T(this.b)},
gaE(){return"RangeError"},
gaD(){if(A.T(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.cH.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.dQ.prototype={
m(a){return"UnimplementedError: "+this.a}}
A.bI.prototype={
m(a){return"Bad state: "+this.a}}
A.dc.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dh(s)+"."}}
A.dD.prototype={
m(a){return"Out of Memory"},
$iY:1}
A.cE.prototype={
m(a){return"Stack Overflow"},
$iY:1}
A.ft.prototype={
m(a){return"Exception: "+this.a}}
A.aO.prototype={
m(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.q(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.n(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.n(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.c.q(e,i,j)+k+"\n"+B.c.aV(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.D(f)+")"):g}}
A.u.prototype={
aT(a,b,c){var s=A.y(this)
return A.ka(this,s.O(c).h("1(u.E)").a(b),s.h("u.E"),c)},
J(a,b){var s,r,q=this.gu(this)
if(!q.l())return""
s=J.aI(q.gt())
if(!q.l())return s
if(b.length===0){r=s
do r+=J.aI(q.gt())
while(q.l())}else{r=s
do r=r+b+J.aI(q.gt())
while(q.l())}return r.charCodeAt(0)==0?r:r},
a5(a,b){var s
A.y(this).h("ag(u.E)").a(b)
for(s=this.gu(this);s.l();)if(b.$1(s.gt()))return!0
return!1},
gn(a){var s,r=this.gu(this)
for(s=0;r.l();)++s
return s},
M(a,b){var s,r
A.kd(b,"index")
s=this.gu(this)
for(r=b;s.l();){if(r===0)return s.gt();--r}throw A.j(A.k0(b,b-r,this,"index"))},
m(a){return A.m2(this,"(",")")}}
A.ab.prototype={
m(a){return"MapEntry("+A.D(this.a)+": "+A.D(this.b)+")"}}
A.ao.prototype={
gE(a){return A.J.prototype.gE.call(this,0)},
m(a){return"null"}}
A.J.prototype={$iJ:1,
P(a,b){return this===b},
gE(a){return A.dF(this)},
m(a){return"Instance of '"+A.dG(this)+"'"},
gF(a){return A.om(this)},
toString(){return this.m(this)}}
A.ac.prototype={
gn(a){return this.a.length},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$imo:1}
A.fk.prototype={
$2(a,b){var s,r,q,p
t.d.a(a)
A.v(b)
s=B.c.aR(b,"=")
if(s===-1){if(b!=="")a.j(0,A.ed(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.q(b,0,s)
q=B.c.G(b,s+1)
p=this.a
a.j(0,A.ed(r,0,r.length,p,!0),A.ed(q,0,q.length,p,!0))}return a},
$S:23}
A.fj.prototype={
$2(a,b){throw A.j(A.a9("Illegal IPv6 address, "+a,this.a,b))},
$S:24}
A.d1.prototype={
gbc(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.D(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gE(a){var s,r=this,q=r.y
if(q===$){s=B.c.gE(r.gbc())
r.y!==$&&A.lp()
r.y=s
q=s}return q},
gbr(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.kn(s==null?"":s)
r.z!==$&&A.lp()
q=r.z=new A.b7(s,t.h)}return q},
gaU(){return this.b},
gao(){var s=this.c
if(s==null)return""
if(B.c.v(s,"[")&&!B.c.A(s,"v",1))return B.c.q(s,1,s.length-1)
return s},
gaf(){var s=this.d
return s==null?A.kC(this.a):s},
gY(){var s=this.f
return s==null?"":s},
ga0(){var s=this.r
return s==null?"":s},
cz(a){var s=this.a
if(a.length!==s.length)return!1
return A.nh(a,s,0)>=0},
bs(a){var s,r,q,p,o,n,m,l=this
a=A.jA(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.jz(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.c.v(o,"/"))o="/"+o
m=o
return A.ec(a,r,p,q,m,l.f,l.r)},
b4(a,b){var s,r,q,p,o,n,m,l,k
for(s=0,r=0;B.c.A(b,"../",r);){r+=3;++s}q=B.c.cA(a,"/")
p=a.length
for(;;){if(!(q>0&&s>0))break
o=B.c.bq(a,"/",q-1)
if(o<0)break
n=q-o
m=n!==2
l=!1
if(!m||n===3){k=o+1
if(!(k<p))return A.n(a,k)
if(a.charCodeAt(k)===46)if(m){m=o+2
if(!(m<p))return A.n(a,m)
m=a.charCodeAt(m)===46}else m=!0
else m=l}else m=l
if(m)break;--s
q=o}return B.c.a2(a,q+1,null,B.c.G(b,r-3*s))},
ah(a){return this.ai(A.b8(a))},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.ga8().length!==0)return a
else{s=h.a
if(a.gan()){r=a.bs(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gbk())m=a.gac()?a.gY():h.f
else{l=A.n3(h,n)
if(l>0){k=B.c.q(n,0,l)
n=a.gaP()?k+A.bQ(a.gN()):k+A.bQ(h.b4(B.c.G(n,k.length),a.gN()))}else if(a.gaP())n=A.bQ(a.gN())
else if(n.length===0)if(p==null)n=s.length===0?a.gN():A.bQ(a.gN())
else n=A.bQ("/"+a.gN())
else{j=h.b4(n,a.gN())
r=s.length===0
if(!r||p!=null||B.c.v(n,"/"))n=A.bQ(j)
else n=A.kH(j,!r||p!=null)}m=a.gac()?a.gY():null}}}i=a.gab()?a.ga0():null
return A.ec(s,q,p,o,n,m,i)},
gbl(){return this.a.length!==0},
gan(){return this.c!=null},
gac(){return this.f!=null},
gab(){return this.r!=null},
gbk(){return this.e.length===0},
gaP(){return B.c.v(this.e,"/")},
gad(){var s,r,q=this,p=q.a
if(p==="")throw A.j(A.C("Cannot use origin without a scheme: "+q.m(0)))
if(p!=="http"&&p!=="https")throw A.j(A.C("Origin is only applicable schemes http and https: "+q.m(0)))
s=q.c
if(s==null||s==="")throw A.j(A.C("A "+p+u.K+q.m(0)))
r=q.d
if(r==null)return p+"://"+s
return p+"://"+s+":"+A.D(r)},
m(a){return this.gbc()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.C.b(b))if(p.a===b.ga8())if(p.c!=null===b.gan())if(p.b===b.gaU())if(p.gao()===b.gao())if(p.gaf()===b.gaf())if(p.e===b.gN()){r=p.f
q=r==null
if(!q===b.gac()){if(q)r=""
if(r===b.gY()){r=p.r
q=r==null
if(!q===b.gab()){s=q?"":r
s=s===b.ga0()}}}}return s},
$idS:1,
ga8(){return this.a},
gN(){return this.e}}
A.fi.prototype={
gbu(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.n(m,0)
s=o.a
m=m[0]+1
r=B.c.ap(s,"?",m)
q=s.length
if(r>=0){p=A.d2(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.e_("data","",n,n,A.d2(s,m,q,128,!1,!1),p,n)}return m},
m(a){var s,r=this.b
if(0>=r.length)return A.n(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.au.prototype={
gbl(){return this.b>0},
gan(){return this.c>0},
gaQ(){return this.c>0&&this.d+1<this.e},
gac(){return this.f<this.r},
gab(){return this.r<this.a.length},
gaP(){return B.c.A(this.a,"/",this.e)},
gbk(){return this.e===this.f},
ga8(){var s=this.w
return s==null?this.w=this.bL():s},
bL(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.v(r.a,"http"))return"http"
if(q===5&&B.c.v(r.a,"https"))return"https"
if(s&&B.c.v(r.a,"file"))return"file"
if(q===7&&B.c.v(r.a,"package"))return"package"
return B.c.q(r.a,0,q)},
gaU(){var s=this.c,r=this.b+3
return s>r?B.c.q(this.a,r,s-1):""},
gao(){var s=this.c
return s>0?B.c.q(this.a,s,this.d):""},
gaf(){var s,r=this
if(r.gaQ())return A.ot(B.c.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.v(r.a,"http"))return 80
if(s===5&&B.c.v(r.a,"https"))return 443
return 0},
gN(){return B.c.q(this.a,this.e,this.f)},
gY(){var s=this.f,r=this.r
return s<r?B.c.q(this.a,s+1,r):""},
ga0(){var s=this.r,r=this.a
return s<r.length?B.c.G(r,s+1):""},
gad(){var s,r,q=this,p=q.b,o=p===4&&B.c.v(q.a,"http")
if(p<0)throw A.j(A.C("Cannot use origin without a scheme: "+q.m(0)))
if(!o)s=!(p===5&&B.c.v(q.a,"https"))
else s=!1
if(s)throw A.j(A.C("Origin is only applicable to schemes http and https: "+q.m(0)))
s=q.c
if(s===q.d)throw A.j(A.C("A "+q.ga8()+u.K+q.m(0)))
p+=3
if(s===p)return B.c.q(q.a,0,q.e)
r=q.a
return B.c.q(r,0,p)+B.c.q(r,s,q.e)},
gbr(){if(this.f>=this.r)return B.N
return new A.b7(A.kn(this.gY()),t.h)},
b2(a){var s=this.d+1
return s+a.length===this.e&&B.c.A(this.a,a,s)},
cN(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.au(B.c.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
bs(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.jA(a,0,a.length)
s=!(h.b===a.length&&B.c.v(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.c.q(h.a,h.b+3,q):""
o=h.gaQ()?h.gaf():g
if(s)o=A.jz(o,a)
q=h.c
if(q>0)n=B.c.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.c.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.c.v(l,"/"))l="/"+l
k=h.r
j=m<k?B.c.q(q,m+1,k):g
m=h.r
i=m<q.length?B.c.G(q,m+1):g
return A.ec(a,p,n,o,l,j,i)},
ah(a){return this.ai(A.b8(a))},
ai(a){if(a instanceof A.au)return this.ce(this,a)
return this.be().ai(a)},
ce(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.c.v(a.a,"file"))p=b.e!==b.f
else if(q&&B.c.v(a.a,"http"))p=!b.b2("80")
else p=!(r===5&&B.c.v(a.a,"https"))||!b.b2("443")
if(p){o=r+1
return new A.au(B.c.q(a.a,0,o)+B.c.G(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.be().ai(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.au(B.c.q(a.a,0,r)+B.c.G(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.au(B.c.q(a.a,0,r)+B.c.G(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.cN()}s=b.a
if(B.c.A(s,"/",n)){m=a.e
l=A.ku(this)
k=l>0?l:m
o=k-n
return new A.au(B.c.q(a.a,0,k)+B.c.G(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.c.A(s,"../",n))n+=3
o=j-n+1
return new A.au(B.c.q(a.a,0,j)+"/"+B.c.G(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.ku(this)
if(l>=0)g=l
else for(g=j;B.c.A(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.c.A(s,"../",n)))break;++f
n=e}for(r=h.length,d="";i>g;){--i
if(!(i>=0&&i<r))return A.n(h,i)
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.c.A(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.au(B.c.q(h,0,i)+d+B.c.G(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
gE(a){var s=this.x
return s==null?this.x=B.c.gE(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.C.b(b)&&this.a===b.m(0)},
be(){var s=this,r=null,q=s.ga8(),p=s.gaU(),o=s.c>0?s.gao():r,n=s.gaQ()?s.gaf():r,m=s.a,l=s.f,k=B.c.q(m,s.e,l),j=s.r
l=l<j?s.gY():r
return A.ec(q,p,o,n,k,l,j<m.length?s.ga0():r)},
m(a){return this.a},
$idS:1}
A.e_.prototype={}
A.dj.prototype={
j(a,b,c){this.$ti.h("1?").a(c)
this.a.set(b,c)},
m(a){return"Expando:"+this.b}}
A.eR.prototype={
a9(a,b,c){var s,r,q,p,o,n
c.a(!1)
s=this.b
r=s.p(0,a)
if(r!=null){if(!c.h("a5<0>").b(r))throw A.j(A.C('Hydration signal "'+a+'" was requested with inconsistent types.'))
return r}q=this.a
p=q.p(0,a)
if(q.H(a))o=p
else o=!1
if(!c.b(o))throw A.j(A.a9('Serialized value for hydration signal "'+a+'" is not a '+A.bc(c).m(0)+".",null,null))
n=new A.a5(o,A.al(t.B),c.h("a5<0>"))
s.j(0,a,n)
return n}}
A.dk.prototype={
bm(a,b){var s,r,q,p,o,n,m,l,k={},j=$.jf()
A.jY(a)
if(j.a.get(a)!=null)throw A.j(A.C("This container is already being hydrated."))
m=new A.J()
j.j(0,a,m)
s=A.c([],t.u)
try{J.c_(s,A.eg(A.d5(b)))
r=this.ak(A.x(a.firstChild),b,s,"root")
if(r!=null){j=A.C("Unexpected DOM node after the hydrated root.")
throw A.j(j)}}catch(l){q=A.bZ(l)
p=A.ej(l)
$.jf().j(0,a,null)
try{A.bt(s)}catch(l){o=A.bZ(l)
n=A.ej(l)
A.di(new A.bI("Hydration failed: "+A.D(q)+". Cleanup also failed: "+A.D(o)+"."),n)}A.di(q,p)}k.a=!1
return new A.eQ(k,s,a,m)},
ak(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="Signal text marker mismatch at ",a7="Signal text end marker mismatch at "
t.q.a(b0)
if(a8==null)throw A.j(A.C("Missing server-rendered node at "+b1+"."))
s=a9 instanceof A.a7
r=s?a9.a:a5
if(s){s=A.v(a8.data)
if(s!==r)throw A.j(A.C("Text mismatch at "+b1+"."))
return A.x(a8.nextSibling)}q={}
q.a=q.b=null
s=a9 instanceof A.bl
if(s){p=a9.a
q.b=a9.b
q.a=a9.c}else p=a5
if(s){s={}
o=v.G
if(A.T(a8.nodeType)!==A.T(o.Node.COMMENT_NODE))throw A.j(A.C(a6+b1+"."))
if(A.v(a8.data)!=="fw:text:"+A.D(p))throw A.j(A.C(a6+b1+"."))
n=A.x(a8.nextSibling)
m=n==null
l=m?a5:A.T(n.nodeType)
if(l===A.T(o.Node.TEXT_NODE)){k=m?A.q(n):n
j=A.x(k.nextSibling)}else{j=n
k=a5}m=j==null
l=m?a5:A.T(j.nodeType)
if(l!==A.T(o.Node.COMMENT_NODE))throw A.j(A.C(a7+b1+"."))
i=m?A.q(j):j
if(A.v(i.data)!=="fw:/text:"+A.D(p))throw A.j(A.C(a7+b1+"."))
h=A.bH(new A.eE(q),t.z)
g=A.l3(h)
o=k==null
if(o&&g.length!==0)throw A.j(A.C("Missing signal text node at "+b1+"."))
if(!o&&A.v(k.data)!==g)throw A.j(A.C("Signal text value mismatch at "+b1+"."))
s.a=k
B.d.k(b0,A.bV(new A.eF(q,s,a8,b1,i)))
return A.x(i.nextSibling)}if(a9 instanceof A.aB)return this.c0(a8,a9,b0,b1)
f={}
f.a=f.b=null
s=a9 instanceof A.aA
e=a5
d=a5
c=a5
b=a5
a=a5
if(s){o=f.b=a9.a
e=a9.b
d=a9.c
c=a9.d
b=a9.e
a=a9.f
f.a=a9.r}else o=a5
if(s){s=A.v(a8.localName)
m=o.toLowerCase()
if(s!==m){s=A.v(a8.localName)
throw A.j(A.C("Expected <"+o+"> at "+b1+", found "+("<"+s+">")+"."))}for(s=e.gD(),s=s.gu(s),o=t.z;s.l();){m=s.gt()
r=m.b
l=r instanceof A.cC
h=l?A.bH(new A.eG(r),o):r
m=m.a
if(A.aw(a8.getAttribute(m))!=A.ne(h))throw A.j(A.C('Attribute mismatch for "'+m+'" at '+b1+"."))
if(l)this.bI(a8,m,r,b0)}a0=A.x(a8.firstChild)
for(s=d.length,o=b1+"/",a1=0;a1<s;++a1)a0=this.ak(a0,d[a1],b0,o+f.b+"["+a1+"]")
if(a0!=null)throw A.j(A.C("Unexpected child node at "+b1+"."))
if(f.a!=null){a2=A.bH(new A.eI(f),t.N)
if(A.v(a8.value)!==a2)throw A.j(A.C("Select value mismatch at "+b1+"."))
B.d.k(b0,A.ld(a8,f.a.b))}for(s=c.gD(),s=s.gu(s);s.l();){o=s.gt()
a3=A.am(new A.eJ(f,o))
m=o.a
a8.addEventListener(m,a3)
B.d.k(b0,new A.eK(a8,o,a3))
if(m==="click"&&J.as(e.p(0,"role"),"button")){a4=A.am(new A.eL(o))
a8.addEventListener("keydown",a4)
B.d.k(b0,new A.eM(a8,a4))}}for(s=b.gD(),s=s.gu(s);s.l();){o=s.gt()
a3=A.am(new A.eN(a8,o))
a8.addEventListener(o.a,a3)
B.d.k(b0,new A.eO(a8,o,a3))}for(s=a.gD(),s=s.gu(s);s.l();){o=s.gt()
a3=A.am(new A.eP(a8,o))
a8.addEventListener(o.a,a3)
B.d.k(b0,new A.eH(a8,o,a3))}if(e.H("data-sparrow-material-navigation"))B.d.k(b0,A.lc(a8))
return A.x(a8.nextSibling)}},
c0(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b={}
t.c5.a(a0)
t.q.a(a1)
o=A.v(a.data)
n=a0.a
if(o!=="fw:children:"+n)throw A.j(A.C("Keyed children marker mismatch at "+a2+"."))
m=A.h(t.N,t.cN)
B.d.k(a1,new A.eB(m))
b.a=a0.gZ()
b.b=null
B.d.k(a1,new A.eC(b))
s=A.x(a.nextSibling)
for(o=a0.d,l=o.length,k=a2+"/"+n+"[",j=t.u,i=t.m,h=a0.b,g=0;g<l;++g){r=o[g]
if(!i.b(s)||A.v(s.localName)!==h.toLowerCase()||A.aw(s.getAttribute("data-sparrow-key"))!==r.a)throw A.j(A.C('Keyed child "'+r.a+'" mismatch at '+a2+"."))
q=A.c([],j)
p=A.dZ()
try{f=p
e=this.ak(A.x(s.firstChild),r.b,q,k+r.a+"]")
d=f.b
if(d==null?f!=null:d!==f)A.Q(A.m9(""))
f.b=e}catch(c){A.bt(q)
throw c}f=p
e=f.b
if(e==null?f==null:e===f)A.Q(A.ma(""))
if(e!=null){A.bt(q)
throw A.j(A.C('Unexpected child node for keyed child "'+r.a+'" at '+a2+"."))}m.j(0,r.a,new A.bL(s,r.b,q))
J.c_(q,A.jJ(s))
s=A.x(s.nextSibling)}if(!i.b(s)||A.v(s.data)!=="fw:/children:"+n)throw A.j(A.C("Keyed children end marker mismatch at "+a2+"."))
o=s
B.d.k(a1,A.bV(new A.eD(b,this,a0,m,o,a2)))
return A.x(o.nextSibling)},
c5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
t.eI.a(b)
t.cO.a(c)
s=A.al(t.N)
for(r=b.length,q=0;q<r;++q)s.k(0,b[q].a)
p=A.x(d.parentNode)
if(p==null)throw A.j(A.C("Keyed children were detached at "+e+"."))
o=A.y(c).h("az<1>")
o=A.bC(new A.az(c,o),o.h("u.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.bd)(o),++q){m=o[q]
if(s.B(0,m))continue
l=c.a1(0,m)
A.bt(l.c)
l.a.remove()}for(q=0;q<r;++q){k=b[q]
s=k.a
j=c.p(0,s)
if(j==null)c.j(0,s,this.b1(a,k,e))
else{s=k.b
if(!A.jd(j.b,s)){i=this.b1(a,k,e)
A.bt(j.c)
for(o=j.a;A.x(o.firstChild)!=null;){n=A.x(o.firstChild)
n.toString
A.q(o.removeChild(n))}for(n=i.a;A.x(n.firstChild)!=null;){h=A.x(n.firstChild)
h.toString
A.q(o.appendChild(h))}j.b=s
j.scm(i.c)}}}for(s=A.P(b).h("N<1>"),r=new A.N(b,s),r=new A.G(r,r.gn(0),s.h("G<B.E>")),s=s.h("B.E"),g=d;r.l();g=f){o=r.d
f=c.p(0,(o==null?s.a(o):o).a).a
if(A.x(f.nextSibling)!==g)A.q(p.insertBefore(f,g))}},
b1(a,b,c){var s,r,q,p,o=A.q(A.q(v.G.document).createElement(a.b)),n=b.a
o.setAttribute("data-sparrow-key",n)
s=A.c([],t.u)
try{q=b.b
J.c_(s,A.eg(A.d5(q)))
A.l8(q,o)
r=this.ak(A.x(o.firstChild),q,s,c+"/"+a.a+"["+n+"]")
if(r!=null){n=A.C('Unexpected child node for keyed child "'+n+'" at '+c+".")
throw A.j(n)}J.c_(s,A.jJ(o))
return new A.bL(o,q,s)}catch(p){A.bt(s)
o.remove()
throw p}},
bI(a,b,c,d){B.d.k(t.q.a(d),A.lb(a,b,new A.eA(c)))}}
A.eQ.prototype={
$0(){var s,r=this,q=r.a
if(q.a)return
q.a=!0
try{A.bt(r.b)}finally{q=$.jf()
s=r.c
A.jY(s)
if(q.a.get(s)===r.d)q.j(0,s,null)}},
$S:1}
A.eE.prototype={
$0(){return this.a.b.gi()},
$S:4}
A.eF.prototype={
$0(){var s,r,q=this,p=A.l3(q.a.b.gi()),o=q.b,n=o.a
if(n!=null)n.data=p
else if(p.length!==0){s=A.x(q.c.parentNode)
if(s==null)throw A.j(A.C("Signal text markers are detached at "+q.d+"."))
r=A.q(A.q(v.G.document).createTextNode(p))
A.q(s.insertBefore(r,q.e))
o.a=r}},
$S:1}
A.eG.prototype={
$0(){var s=this.a,r=s.c
r=r==null?null:r.$1(s.b.gi())
return r==null?s.b.gi():r},
$S:4}
A.eI.prototype={
$0(){this.a.a.b.gi().m(0)
return""},
$S:17}
A.eJ.prototype={
$1(a){A.q(a)
if(this.a.b==="form"&&this.b.a==="submit")a.preventDefault()
this.b.b.$1(A.li(a))},
$S:2}
A.eK.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eL.prototype={
$1(a){var s
A.q(a)
s=A.v(a.key)==="Enter"||A.v(a.key)===" "
if(s){a.preventDefault()
this.a.b.$1(a)}},
$S:2}
A.eM.prototype={
$0(){return this.a.removeEventListener("keydown",this.b)},
$S:1}
A.eN.prototype={
$1(a){var s,r,q,p
A.q(a)
s=A.v(this.a.value)
r=this.b
q=r.a
if(q==="input"||q==="change")r.b.$1(s)
else{p=!1
if(q==="keydown")q=A.v(a.key)==="Enter"
else q=p
if(q)r.b.$1(s)}},
$S:2}
A.eO.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eP.prototype={
$1(a){A.q(a)
this.b.b.$1(A.ad(this.a.checked))},
$S:2}
A.eH.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eB.prototype={
$0(){var s,r,q=this.a,p=A.y(q).h("aj<2>")
p=A.bC(new A.aj(q,p),p.h("u.E"))
s=A.P(p).h("N<1>")
p=new A.N(p,s)
p=new A.G(p,p.gn(0),s.h("G<B.E>"))
s=s.h("B.E")
while(p.l()){r=p.d
A.bt((r==null?s.a(r):r).c)}q.S(0)},
$S:1}
A.eC.prototype={
$0(){var s=this.a.b
return s==null?null:s.$0()},
$S:1}
A.eD.prototype={
$0(){var s,r=this,q=r.c,p=A.jI(q.f.$0()),o=q.gZ(),n=r.a
if(o!=n.a){s=n.b
if(s!=null)s.$0()
n.b=o==null||o.length===0?null:A.eg(A.d5(A.W("div",B.b,B.k,B.v,B.m,A.c([o],t.s),B.l,null)))
n.a=o}r.b.c5(q,p,r.d,r.e,r.f)},
$S:1}
A.eA.prototype={
$0(){var s=this.a,r=s.c
r=r==null?null:r.$1(s.b.gi())
return r==null?s.b.gi():r},
$S:4}
A.bL.prototype={
scm(a){this.c=t.q.a(a)}}
A.aD.prototype={}
A.f5.prototype={
cS(a){var s=a.b
return s==null?null:this.e.p(0,s.a)}}
A.f6.prototype={
$1(a){return t.j.a(a).a},
$S:25}
A.b3.prototype={
gaL(){var s=this.b,r=A.P(s)
return new A.at(s,r.h("ag(1)").a(new A.f8()),r.h("at<1>")).gn(0)},
cB(a){var s,r,q,p,o,n,m=A.jG(A.h1(a)),l=this.b
if(m.length!==l.length)return null
s=t.N
r=A.h(s,s)
for(q=0;q<l.length;++q){p=l[q]
if(!(q<m.length))return A.n(m,q)
o=m[q]
n=A.ed(o,0,o.length,B.p,!1)
if(B.c.v(p,":"))r.j(0,B.c.G(p,1),n)
else if(p!==n)return null}return A.bg(r,s,s)}}
A.f7.prototype={
$1(a){A.v(a)
return B.c.v(a,":")?a:A.ed(a,0,a.length,B.p,!1)},
$S:26}
A.f8.prototype={
$1(a){return!B.c.v(A.v(a),":")},
$S:3}
A.aT.prototype={}
A.f9.prototype={
ah(a){var s,r,q,p,o,n,m,l,k,j,i=A.b8(a),h=A.h1(i.gN())
for(s=this.a,r=s.length,q=null,p=null,o=-1,n=0;n<r;++n){m=s[n]
l=m.cB(h)
if(l==null)continue
k=m.gaL()
if(k>o){o=k
p=l
q=m}}s=p==null?B.N:p
r=i.gbr()
i.ga0()
j=t.N
return new A.aT(q,s,A.bg(r,j,j),q==null)}}
A.cz.prototype={
aq(){var s=this.Q.c
s===$&&A.bY()
return A.bH(new A.fa(this,s.gi()),t.m)},
cH(){return},
cF(){var s=this,r=s.cy
if(r!=null)r.$0()
s.cy=null
r=s.cx
if(r!=null)r.K()
s.cx=null}}
A.fa.prototype={
$0(){var s,r,q,p=this.a,o=p.ax,n=this.b,m=o.cS(n),l=(m==null?o.c.$1(n):m.b.$1(n)).aq(),k=p.CW
if(k!=null){s=A.x(k.firstChild)
if(s==null)throw A.j(A.C("Server-rendered route markup was not found."))
r=new A.dk().bm(k,l)
p.CW=null
if($.aR.length!==0)B.d.k(B.d.gX($.aR),r)
return s}q=new A.df(A.c([],t.u))
s=q.cP(l)
if($.aR.length!==0)B.d.k(B.d.gX($.aR),q.ga6())
return s},
$S:18}
A.dI.prototype={
bC(a,b){var s,r,q=this,p=q.a.ah(q.gaX()),o=t.B,n=t.cH
n=n.a(new A.a5(p,A.al(o),n))
q.c!==$&&A.d6()
q.c=n
n=t.c7
s=n.a(new A.a5(p.c,A.al(o),n))
q.d!==$&&A.d6()
q.d=s
n=n.a(new A.a5(p.d,A.al(o),n))
q.e!==$&&A.d6()
q.e=n
n=A.am(new A.fb(q))
q.w!==$&&A.d6()
q.w=n
o=A.am(new A.fc(q))
q.x!==$&&A.d6()
q.x=o
s=A.am(new A.fd(q))
q.y!==$&&A.d6()
q.y=s
r=v.G
A.q(r.window).addEventListener("popstate",n)
A.q(r.window).addEventListener("hashchange",o)
A.q(r.document).addEventListener("click",s)},
cL(a){var s,r
if(this.z)throw A.j(A.C("A disposed router cannot navigate."))
s=A.b8(a)
if(s.gbl()||s.gan())throw A.j(A.O(a,"path","Expected a same-origin path."))
r=A.b8(A.v(A.q(A.q(v.G.window).location).href))
this.b6(r.ah(B.c.v(a,"/")||B.c.v(a,"?")||B.c.v(a,"#")?a:"/"+a))},
cK(){if(this.z)throw A.j(A.C("A disposed router cannot navigate."))
A.q(A.q(v.G.window).history).back()},
K(){var s,r,q,p=this
if(p.z)return
p.z=!0
s=v.G
r=A.q(s.window)
q=p.w
q===$&&A.bY()
r.removeEventListener("popstate",q)
q=A.q(s.window)
r=p.x
r===$&&A.bY()
q.removeEventListener("hashchange",r)
s=A.q(s.document)
r=p.y
r===$&&A.bY()
s.removeEventListener("click",r)},
aM(){var s,r,q,p,o,n=this
if(n.z)return
s=n.a.ah(n.gaX())
for(r=n.f,r=new A.ai(r,A.y(r).h("ai<1,2>")).gu(0),q=s.c;r.l();){p=r.d
p.b.si(q.p(0,p.a))}for(r=n.r,r=new A.ai(r,A.y(r).h("ai<1,2>")).gu(0),o=s.d;r.l();){p=r.d
p.b.si(o.p(0,p.a))}r=n.d
r===$&&A.bY()
r.si(q)
q=n.e
q===$&&A.bY()
q.si(o)
o=n.c
o===$&&A.bY()
o.si(s)},
gaX(){var s=A.q(A.q(v.G.window).location)
return A.v(s.pathname)+A.v(s.search)+A.v(s.hash)},
c_(a){var s,r,q,p,o,n
if(this.z||A.ad(a.defaultPrevented)||A.T(a.button)!==0||A.ad(a.metaKey)||A.ad(a.ctrlKey)||A.ad(a.shiftKey)||A.ad(a.altKey))return
s=A.x(a.target)
r=t.m
if(!r.b(s))return
q=A.x(s.closest("a[href]"))
p=!0
if(r.b(q))if(!A.ad(q.hasAttribute("download")))if(!B.d.B(B.c.by(A.v(q.rel).toLowerCase(),A.b1("\\s+",!0)),"external"))r=A.v(q.target).length!==0&&A.v(q.target).toLowerCase()!=="_self"
else r=p
else r=p
else r=p
if(r)return
o=A.b8(A.v(q.href))
n=A.b8(A.v(A.q(A.q(v.G.window).location).href))
if(o.gad()!==n.gad())return
if(o.gN()===n.gN()&&o.gY()===n.gY()){if(o.ga0()!==n.ga0())return
a.preventDefault()
return}if(o.gab())return
a.preventDefault()
this.b6(o)},
b6(a){var s=v.G,r=A.b8(A.v(A.q(A.q(s.window).location).href))
if(a.gad()!==r.gad())throw A.j(A.O(a,"destination","Expected a same-origin URL."))
A.q(A.q(s.window).history).pushState(null,"",a.m(0))
this.aM()}}
A.fb.prototype={
$1(a){A.q(a)
return this.a.aM()},
$S:12}
A.fc.prototype={
$1(a){A.q(a)
return this.a.aM()},
$S:12}
A.fd.prototype={
$1(a){return this.a.c_(A.q(a))},
$S:12}
A.aC.prototype={}
A.ca.prototype={
gcQ(){var s,r,q,p,o,n=this,m=!1
m=n.w==null
if(m)return n.d
m=t.k
s=A.h(t.N,m)
for(r=n.d,q=r.length,p=0;p<q;++p){o=r[p]
s.j(0,o.a+":"+o.b,o)}p=0
for(;p<0;++p){o=B.A[p]
s.j(0,o.a+":"+o.b,o)}p=0
for(;p<0;++p){o=B.A[p]
s.j(0,o.a+":"+o.b,o)}r=n.w
if(r!=null){r=r.a?"index":"noindex"
r=A.c([r,"follow"],t.s)
s.j(0,"name:robots",new A.aC("name","robots",B.d.J(r,", ")))}return A.e(new A.aj(s,s.$ti.h("aj<2>")),m)}}
A.f4.prototype={}
A.f_.prototype={}
A.a4.prototype={}
A.a7.prototype={}
A.bl.prototype={}
A.cC.prototype={}
A.aA.prototype={}
A.b0.prototype={}
A.aB.prototype={
gZ(){var s=this.e
return s==null?null:s.$0()}}
A.iE.prototype={
$1(a){var s,r,q,p,o,n,m=this
A:{s=a instanceof A.aA
r=s?a:null
if(s){s=r.w
q=A.P(s)
m.a.R(0,new A.at(s,q.h("ag(1)").a(new A.iF()),q.h("at<1>")))
for(s=r.c,q=s.length,p=0;p<q;++p)m.$1(s[p])
break A}s=a instanceof A.aB
o=s?a.d:null
if(s){for(s=o.length,p=0;p<s;++p)m.$1(o[p].b)
n=a.gZ()
if(n!=null&&n.length!==0)m.a.k(0,n)
break A}if(a instanceof A.a7||a instanceof A.bl)return}},
$S:28}
A.iF.prototype={
$1(a){return A.v(a).length!==0},
$S:3}
A.dO.prototype={
cO(a,b,c){var s,r,q,p,o,n,m,l='"',k="&quot;",j="'",i="&#39;",h=A.h(t.N,t.X),g=new A.ac(""),f=a.a,e=A.cb("SparrowKit Application"),d=A.bb(e.x)
d=A.L(d,l,k)
d='<!doctype html><html lang="'+A.L(d,j,i)+'"><head>'
g.a=d
d+='<meta charset="utf-8">'
g.a=d
g.a=d+("<title>"+A.bb(e.a)+"</title>")
s=e.gcQ()
for(d=s.length,r=null,q=0;q<d;++q){p=s[q]
if(p.a.toLowerCase()==="name"&&p.b.toLowerCase()==="viewport")r=p}if(r==null)g.a+='<meta name="viewport" content="width=device-width, initial-scale=1">'
else{o=r.a
n=A.bb(r.b)
n=A.L(n,l,k)
n=A.L(n,j,i)
m=A.bb(r.c)
m=A.L(m,l,k)
o="<meta "+o+'="'+n+'" content="'+A.L(m,j,i)+'">'
g.a+=o}o=A.bb(e.b)
o=A.L(o,l,k)
o='<meta name="description" content="'+A.L(o,j,i)+'">'
g.a+=o
for(q=0;q<d;++q){p=s[q]
o=p.a
if(o.toLowerCase()==="name"&&p.b.toLowerCase()==="viewport")continue
n=A.L(p.b,"&","&amp;")
n=A.L(n,"<","&lt;")
n=A.L(n,">","&gt;")
n=A.L(n,l,k)
n=A.L(n,j,i)
m=A.L(p.c,"&","&amp;")
m=A.L(m,"<","&lt;")
m=A.L(m,">","&gt;")
m=A.L(m,l,k)
o="<meta "+o+'="'+n+'" content="'+A.L(m,j,i)+'">'
g.a+=o}for(d=e.e,o=d.length,q=0;q<o;++q){n=B.y.bj(d[q].d1(),null)
n='<script type="application/ld+json">'+A.L(n,"<","\\u003C")+"</script>"
g.a+=n}this.ck(g,f,B.j)
d=A.bb(c)
d=A.L(d,l,k)
d='</head><body><div id="'+A.L(d,j,i)+'">'
g.a+=d
this.aN(g,f,h)
g.a+="</div>"
d=B.y.bj(h,null)
d='<script id="__FRAMEWORK_STATE__" type="application/json">'+A.L(d,"<","\\u003C")+"</script>"
d=g.a+=d
d=g.a=d+"</body></html>"
return d.charCodeAt(0)==0?d:d},
aN(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5="&quot;",a6="&#39;",a7="attribute"
t.f.a(b0)
A:{s=a9 instanceof A.a7
r=s?a9.a:a4
if(s){s=A.bb(r)
a8.a+=s
break A}q=a9 instanceof A.bl
p=a4
if(q){o=a9.a
p=a9.b
n=o}else n=a4
if(q){A.jC(b0,n,p.gi())
s="<!--fw:text:"+A.D(n)+"-->"
a8.a+=s
s=p.gi()
s.m(0)
s=A.bb("")
a8.a+=s
s="<!--fw:/text:"+A.D(n)+"-->"
a8.a+=s
break A}q=a9 instanceof A.aB
m=a4
l=a4
k=a4
if(q){o=a9.a
m=a9.b
l=a9.d
k=a9.c
n=o}else n=a4
if(q){A.jC(b0,n,k.gi())
s=A.D(n)
j=a8.a+="<!--fw:children:"+s+"-->"
for(i=l.length,h=A.D(m),g="</"+h+">",h="<"+h+' data-sparrow-key="',f=0;f<i;++f){e=l[f]
j=A.L(e.a,"&","&amp;")
j=A.L(j,"<","&lt;")
j=A.L(j,">","&gt;")
j=A.L(j,'"',a5)
j=h+A.L(j,"'",a6)+'">'
a8.a+=j
this.aN(a8,e.b,b0)
j=a8.a+=g}a8.a=j+("<!--fw:/children:"+s+"-->")
break A}s=a9 instanceof A.aA
d=a4
c=a4
b=a4
if(s){a=a9.a
d=a9.b
c=a9.c
b=a9.r}else a=a4
if(s){a0=B.G.B(0,a.toLowerCase())
if(a0&&c.length!==0)throw A.j(A.ae("Void element <"+A.D(a)+"> cannot have children."))
s=b!=null
if(s)A.jC(b0,b.a,b.b.gi())
j=A.D(a)
a8.a+="<"+j
for(i=d.gD(),i=i.gu(i);i.l();){h=i.gt()
g=$.lJ()
a1=h.a
if(!g.b.test(a1))throw A.j(A.O(a1,a7,"Invalid HTML attribute name."))
if(B.c.v(a1.toLowerCase(),"on"))throw A.j(A.O(a1,a7,u.i))
a2=h.b
h=a2 instanceof A.cC
a3=h?a2.b.gi():a4
if(h){g=a2.c
g=g==null?a4:g.$1(a3)
r=g==null?a3:g}else r=a2
if(h){h=a2.a
if(b0.H(h)&&!J.as(b0.p(0,h),a3))A.Q(A.C('Conflicting initial values for signal "'+h+'".'))
b0.j(0,h,a3)}if(r==null||J.as(r,!1))continue
a8.a+=" "+a1+'="'
h=J.aL(r)
if(h.P(r,!0))h=""
else{h=h.m(r)
h=A.L(h,"&","&amp;")
h=A.L(h,"<","&lt;")
h=A.L(h,">","&gt;")
h=A.L(h,'"',a5)
h=A.L(h,"'",a6)}a8.a=(a8.a+=h)+'"'}if(s&&a.toLowerCase()==="input"){a8.a+=' value="'
b.b.gi().m(0)
s=A.bb("")
s=A.L(s,'"',a5)
s=A.L(s,"'",a6)
a8.a=(a8.a+=s)+'"'}if(a0){a8.a+=">"
return}a8.a+=">"
for(s=c.length,f=0;f<s;++f)this.aN(a8,c[f],b0)
a8.a+="</"+j+">"}}},
ck(a,b,c){var s,r,q,p
t.cs.a(c)
s=A.d5(b)
r=A.mb(t.N)
r.R(0,s)
s=A.P(c)
r.R(0,new A.at(c,s.h("ag(1)").a(new A.ff()),s.h("at<1>")))
for(s=A.fz(r,r.r,A.y(r).c),r=s.$ti.c;s.l();){q=s.d
if(q==null)q=r.a(q)
p='<style id="'+A.lj(q)+'" data-sparrow-stylesheet>'
a.a+=p
p=A.b1("</style",!1)
q=A.L(q,p,"<\\/style")
a.a=(a.a+=q)+"</style>"}}}
A.ff.prototype={
$1(a){return A.v(a).length!==0},
$S:3}
A.a5.prototype={
gi(){var s=$.aS.length===0?null:B.d.gX($.aS)
if(s!=null)s.bU(this)
return this.a},
si(a){var s,r,q,p=this
p.$ti.c.a(a)
if(J.as(p.a,a))return
p.a=a
for(s=p.b,s=A.fz(s,s.r,A.y(s).c),r=s.$ti.c;s.l();){q=s.d;(q==null?r.a(q):q).c2()}},
$ikp:1}
A.bM.prototype={
bU(a){if(this.d)return
if(this.b.k(0,a))a.b.k(0,this)},
c2(){var s=this
if(s.d)return
if(s.c)s.e=!0
else A.ke(s)},
ba(){var s,r,q,p,o=this
if(o.d||o.c)return
o.c=!0
o.e=!1
for(s=o.b,r=A.fz(s,s.r,A.y(s).c),q=r.$ti.c;r.l();){p=r.d;(p==null?q.a(p):p).b.a1(0,o)}s.S(0)
B.d.k($.aS,o)
try{o.a.$0()}finally{if(0>=$.aS.length)return A.n($.aS,-1)
$.aS.pop()
o.c=!1
if(o.e){o.e=!1
A.ke(o)}}},
K(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
$.bG.a1(0,o)
for(s=o.b,r=A.fz(s,s.r,A.y(s).c),q=r.$ti.c;r.l();){p=r.d;(p==null?q.a(p):p).b.a1(0,o)}s.S(0)}}
A.aY.prototype={
cJ(){},
cC(a){var s,r=this
if(r.x)throw A.j(A.C("A disposed component cannot be mounted."))
if(r.w!=null)throw A.j(A.C("A component can only be mounted once."))
r.d=a
s=$.c1.length===0
if(!s)B.d.k(B.d.gX($.c1).f,r)
r.w=A.bV(r.gc7())
if(s)r.av()},
K(){var s,r,q=this
if(q.x)return
q.x=!0
s=q.w
if(s!=null)s.$0()
q.w=null
q.bV()
r=q.c
if(r!=null){s=A.x(r.parentNode)
if(s!=null)A.q(s.removeChild(r))}q.c=null
if(q.y){q.y=!1
A.bH(q.gcE(),t.H)}},
c8(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e,f=h.r,e=h.f,d=A.c([],t.u),c=A.c([],t.A)
h.f=c
s=A.dZ()
try{s.sam(A.mi(d,new A.el(h),t.m))}catch(l){h.f=e
for(k=c,j=A.P(k).h("N<1>"),k=new A.N(k,j),k=new A.G(k,k.gn(0),j.h("G<B.E>")),j=j.h("B.E");k.l();){i=k.d
r=i==null?j.a(i):i
r.K()}for(k=d,j=A.P(k).h("N<1>"),k=new A.N(k,j),k=new A.G(k,k.gn(0),j.h("G<B.E>")),j=j.h("B.E");k.l();){m=k.d
q=m==null?j.a(m):m
q.$0()}throw l}p=h.c
try{if(p==null){k=h.d
k.toString
A.q(k.appendChild(s.C()))}else{o=A.x(p.parentNode)
if(s.C()!==p)if(o==null){k=h.d
k.toString
A.q(k.appendChild(s.C()))}else A.q(o.replaceChild(s.C(),p))}}catch(l){h.f=e
for(k=c,j=A.P(k).h("N<1>"),k=new A.N(k,j),k=new A.G(k,k.gn(0),j.h("G<B.E>")),j=j.h("B.E");k.l();){i=k.d
n=i==null?j.a(i):i
n.K()}for(k=d,j=A.P(k).h("N<1>"),k=new A.N(k,j),k=new A.G(k,k.gn(0),j.h("G<B.E>")),j=j.h("B.E");k.l();){q=k.d
m=q==null?j.a(q):q
m.$0()}throw l}for(k=A.P(f).h("N<1>"),j=new A.N(f,k),j=new A.G(j,j.gn(0),k.h("G<B.E>")),k=k.h("B.E");j.l();){i=j.d;(i==null?k.a(i):i).K()}for(k=A.P(g).h("N<1>"),j=new A.N(g,k),j=new A.G(j,j.gn(0),k.h("G<B.E>")),k=k.h("B.E");j.l();){q=j.d;(q==null?k.a(q):q).$0()}h.c=s.C()
h.e=d
h.r=c
if(h.y)A.bH(h.gcI(),t.H)
k=h.z=!0
if(!A.ad(h.d.isConnected)?h.y:k)h.av()},
av(){var s,r,q,p=this
if(!p.z||p.x)return
if(!p.y){p.y=!0
A.bH(p.gcG(),t.H)}for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.bd)(s),++q)s[q].av()},
bV(){var s,r,q,p,o=this
for(s=o.r,r=A.P(s).h("N<1>"),s=new A.N(s,r),s=new A.G(s,s.gn(0),r.h("G<B.E>")),r=r.h("B.E");s.l();){q=s.d;(q==null?r.a(q):q).K()}o.r=A.c([],t.A)
for(s=o.e,r=A.P(s).h("N<1>"),s=new A.N(s,r),s=new A.G(s,s.gn(0),r.h("G<B.E>")),r=r.h("B.E");s.l();){p=s.d;(p==null?r.a(p):p).$0()}o.e=A.c([],t.u)}}
A.el.prototype={
$0(){var s=this.a
B.d.k($.c1,s)
try{s=s.aq()
return s}finally{if(0>=$.c1.length)return A.n($.c1,-1)
$.c1.pop()}},
$S:18}
A.hj.prototype={
$0(){var s=this.a,r=this.b.$0(),q=r==null?null:J.aI(r)
if(q==null)q=""
if(A.v(s.data)!==q)s.data=q
return null},
$S:1}
A.h8.prototype={
$0(){return A.ll(this.a,this.b,this.c.$0())},
$S:1}
A.hi.prototype={
$0(){this.a.gi().m(0)
var s=this.b
if(A.v(s.value)!=="")s.value=""},
$S:1}
A.h9.prototype={
$0(){},
$S:1}
A.ha.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.q(a)
s=this.a==="navigation-rail"
r=s?"ArrowDown":"ArrowRight"
q=s?"ArrowUp":"ArrowLeft"
if(A.v(a.key)!==r&&A.v(a.key)!==q&&A.v(a.key)!=="Home"&&A.v(a.key)!=="End")return
p=A.q(this.b.querySelectorAll("button[data-sparrow-material-navigation-item]:not(:disabled)"))
if(A.T(p.length)===0)return
o=A.x(A.q(v.G.document).activeElement)
m=0
for(;;){if(!(m<A.T(p.length))){n=-1
break}l=A.x(p.item(m))
if(l==null?o==null:l===o){n=m
break}++m}if(n<0)for(l=t.m,m=0;m<A.T(p.length);++m){k=A.x(p.item(m))
if(l.b(k))j=A.aw(k.getAttribute("aria-selected"))==="true"||A.aw(k.getAttribute("aria-current"))==="page"
else j=!1
if(j){n=m
break}}if(A.v(a.key)==="Home")n=0
else if(A.v(a.key)==="End")n=A.T(p.length)-1
else n=A.v(a.key)===r?B.n.W(n+1,A.T(p.length)):B.n.W(n-1+A.T(p.length),A.T(p.length))
a.preventDefault()
k=A.x(p.item(n))
if(t.m.b(k)){k.focus()
k.click()}},
$S:2}
A.hb.prototype={
$0(){return this.a.removeEventListener("keydown",this.b)},
$S:1}
A.jc.prototype={
$0(){return this.a.preventDefault()},
$S:1}
A.hc.prototype={
$0(){},
$S:1}
A.hd.prototype={
$0(){var s,r,q
if(!A.ad(this.a.isConnected))return
s=this.b
if(s==null)s=this.c
r=A.x(s.querySelector(u.V))
q=t.m.b(r)?r:s
q.focus()},
$S:11}
A.he.prototype={
$1(a){var s,r,q,p,o,n,m
A.q(a)
s=A.v(a.key)
if(s!=="Tab")return
s=this.a
r=A.q(s.querySelectorAll(u.V))
if(A.T(r.length)===0){a.preventDefault()
s.focus()
return}q=A.x(A.q(v.G.document).activeElement)
o=0
for(;;){if(!(o<A.T(r.length))){p=-1
break}s=A.x(r.item(o))
if(s==null?q==null:s===q){p=o
break}++o}if(A.ad(a.shiftKey)&&p<=0){a.preventDefault()
n=A.x(r.item(A.T(r.length)-1))
if(t.m.b(n))n.focus()}else if(!A.ad(a.shiftKey)&&p===A.T(r.length)-1){a.preventDefault()
m=A.x(r.item(0))
if(t.m.b(m))m.focus()}},
$S:2}
A.hf.prototype={
$1(a){var s,r,q,p,o,n
A.q(a)
if(!B.as.B(0,A.v(a.key)))return
s=A.q(this.a.querySelectorAll('[role="menuitem"]:not(:disabled)'))
if(A.T(s.length)===0)return
r=A.x(A.q(v.G.document).activeElement)
p=0
for(;;){if(!(p<A.T(s.length))){q=-1
break}o=A.x(s.item(p))
if(o==null?r==null:o===r){q=p
break}++p}if(A.v(a.key)==="Home")q=0
else if(A.v(a.key)==="End")q=A.T(s.length)-1
else q=A.v(a.key)==="ArrowDown"?B.n.W(q+1,A.T(s.length)):B.n.W(q-1+A.T(s.length),A.T(s.length))
a.preventDefault()
n=A.x(s.item(q))
if(t.m.b(n))n.focus()},
$S:2}
A.hh.prototype={
$0(){var s=this.a
if(A.ad(s.isConnected))A.ad(s.dispatchEvent(A.q(new v.G.Event("sparrow-snackbar-timeout"))))},
$S:11}
A.hg.prototype={
$0(){var s,r,q,p=this,o=p.a
if(o!=null)A.q(v.G.window).clearTimeout(o)
o=p.b
if(o!=null)A.q(v.G.window).clearTimeout(o)
for(o=p.c,s=o.length,r=0;r<o.length;o.length===s||(0,A.bd)(o),++r){q=o[r]
q.a.removeEventListener("keydown",q.b)}o=p.d
if(o!=null&&p.e!=null)o.removeEventListener("keydown",p.e)
o=p.f
if(t.m.b(o)&&A.ad(o.isConnected))o.focus()},
$S:1}
A.h_.prototype={
$0(){var s=this.a
if(s.a)return
s.a=!0
A.kX(this.b)},
$S:1}
A.eb.prototype={}
A.e5.prototype={
aq(){return this.a},
$ijr:1}
A.df.prototype={
cP(a){var s,r,q=this
if(q.b!=null)throw A.j(A.C("A UI renderer can only render once."))
try{B.d.k(q.a,A.eg(A.d5(a)))
s=q.b9(a)
q.b=s
return s}catch(r){q.K()
throw r}},
K(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.a,r=A.P(s).h("N<1>"),q=new A.N(s,r),q=new A.G(q,q.gn(0),r.h("G<B.E>")),r=r.h("B.E");q.l();){p=q.d;(p==null?r.a(p):p).$0()}B.d.S(s)
s=o.b
if(s!=null){r=A.x(s.parentNode)
if(r!=null)A.q(r.removeChild(s))}o.b=null},
b9(a){var s
A:{if(a instanceof A.a7){s=A.q(A.q(v.G.document).createTextNode(a.a))
break A}if(a instanceof A.bl){s=this.cb(a.b,a.c)
break A}if(a instanceof A.aB){s=this.ca(a)
break A}if(a instanceof A.aA){s=this.c9(a.a,a.b,a.c,a.d,a.e,a.f,a.r)
break A}s=null}return s},
ca(a){var s,r,q,p,o,n={},m=v.G,l=A.q(A.q(m.document).createDocumentFragment()),k=a.a,j=A.q(A.q(m.document).createComment("fw:children:"+k)),i=A.q(A.q(m.document).createComment("fw:/children:"+k))
A.q(l.appendChild(j))
A.q(l.appendChild(i))
p=A.h(t.N,t.cV)
n.a=a.gZ()
n.b=null
s=new A.ey(n,this,a,i,p)
r=new A.ex(p)
q=A.dZ()
try{q.sam(A.bV(s))}catch(o){r.$0()
throw o}B.d.k(this.a,new A.ew(n,q,r))
return l},
b_(a,b){var s,r,q=A.q(A.q(v.G.document).createElement(a.b))
q.setAttribute("data-sparrow-key",b.a)
s=b.b
A.l8(s,q)
r=new A.dk().bm(q,s)
return new A.e7(q,s,new A.em(A.jJ(q),r))},
cb(a,b){var s=A.q(A.q(v.G.document).createTextNode(""))
B.d.k(this.a,A.o8(s,new A.ez(b,a)))
return s},
c9(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j,i="attribute"
t.f.a(b)
t.fW.a(c)
t.cT.a(d)
t.ee.a(e)
t.d2.a(f)
s=A.q(A.q(v.G.document).createElement(a))
if(B.G.B(0,a.toLowerCase())&&c.length!==0)throw A.j(A.ae("Void element <"+a+"> cannot have children."))
for(r=b.gD(),r=r.gu(r),q=this.a;r.l();){p=r.gt()
o=p.a
n=A.b1("^[A-Za-z_:][A-Za-z0-9:._-]*$",!0)
if(!n.b.test(o))A.Q(A.O(o,i,"Invalid HTML attribute name."))
if(B.c.v(o.toLowerCase(),"on"))throw A.j(A.O(o,i,u.i))
m=p.b
if(m instanceof A.cC)B.d.k(q,A.lb(s,o,new A.en(m)))
else A.ll(s,o,m)}for(r=c.length,l=0;l<r;++l)A.q(s.appendChild(this.b9(c[l])))
if(g!=null)B.d.k(q,A.ld(s,g.b))
for(r=d.gD(),r=r.gu(r);r.l();){p=r.gt()
k=A.am(new A.eo(a,p))
o=p.a
s.addEventListener(o,k)
B.d.k(q,new A.ep(s,p,k))
if(o==="click"&&J.as(b.p(0,"role"),"button")){j=A.am(new A.eq(p))
s.addEventListener("keydown",j)
B.d.k(q,new A.er(s,j))}}for(r=e.gD(),r=r.gu(r);r.l();){p=r.gt()
k=A.am(new A.es(s,p))
s.addEventListener(p.a,k)
B.d.k(q,new A.et(s,p,k))}for(r=f.gD(),r=r.gu(r);r.l();){p=r.gt()
k=A.am(new A.eu(s,p))
s.addEventListener(p.a,k)
B.d.k(q,new A.ev(s,p,k))}if(b.H("data-sparrow-material-navigation"))B.d.k(q,A.lc(s))
return s}}
A.ey.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.c,b=A.jI(c.f.$0()),a=c.gZ(),a0=d.a
if(a!=a0.a){s=a0.b
if(s!=null)s.$0()
a0.b=a==null||a.length===0?null:A.eg(A.d5(A.W("div",B.b,B.k,B.v,B.m,A.c([a],t.s),B.l,null)))
a0.a=a}a0=A.al(t.N)
for(s=b.length,r=0;r<s;++r)a0.k(0,b[r].a)
q=d.d
p=A.x(q.parentNode)
if(p==null)throw A.j(A.C("Keyed children were detached before rendering."))
o=d.e
n=A.y(o).h("az<1>")
n=A.bC(new A.az(o,n),n.h("u.E"))
m=n.length
r=0
for(;r<n.length;n.length===m||(0,A.bd)(n),++r){l=n[r]
if(a0.B(0,l))continue
k=o.a1(0,l)
k.c.$0()
k.a.remove()}for(a0=d.b,r=0;r<s;++r){j=b[r]
n=j.a
i=o.p(0,n)
if(i==null)o.j(0,n,a0.b_(c,j))
else{n=j.b
if(!A.jd(i.b,n)){h=a0.b_(c,j)
i.c.$0()
for(m=i.a;A.x(m.firstChild)!=null;){g=A.x(m.firstChild)
g.toString
A.q(m.removeChild(g))}for(g=h.a;A.x(g.firstChild)!=null;){f=A.x(g.firstChild)
f.toString
A.q(m.appendChild(f))}i.b=n
i.sa6(h.c)}}}for(c=A.P(b).h("N<1>"),a0=new A.N(b,c),a0=new A.G(a0,a0.gn(0),c.h("G<B.E>")),c=c.h("B.E");a0.l();q=e){s=a0.d
e=o.p(0,(s==null?c.a(s):s).a).a
if(A.x(e.nextSibling)!==q)A.q(p.insertBefore(e,q))}},
$S:1}
A.ex.prototype={
$0(){var s,r,q=this.a,p=A.y(q).h("aj<2>")
p=A.bC(new A.aj(q,p),p.h("u.E"))
s=A.P(p).h("N<1>")
p=new A.N(p,s)
p=new A.G(p,p.gn(0),s.h("G<B.E>"))
s=s.h("B.E")
while(p.l()){r=p.d;(r==null?s.a(r):r).c.$0()}q.S(0)},
$S:1}
A.ew.prototype={
$0(){this.b.C().$0()
var s=this.a.b
if(s!=null)s.$0()
this.c.$0()},
$S:1}
A.em.prototype={
$0(){this.a.$0()
this.b.$0()},
$S:1}
A.ez.prototype={
$0(){var s=this.b.gi()
return s},
$S:4}
A.en.prototype={
$0(){var s=this.a,r=s.c
r=r==null?null:r.$1(s.b.gi())
return r==null?s.b.gi():r},
$S:4}
A.eo.prototype={
$1(a){A.q(a)
if(this.a==="form"&&this.b.a==="submit")a.preventDefault()
this.b.b.$1(A.li(a))},
$S:2}
A.ep.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eq.prototype={
$1(a){var s
A.q(a)
s=A.v(a.key)==="Enter"||A.v(a.key)===" "
if(s){a.preventDefault()
this.a.b.$1(a)}},
$S:2}
A.er.prototype={
$0(){return this.a.removeEventListener("keydown",this.b)},
$S:1}
A.es.prototype={
$1(a){var s,r,q,p
A.q(a)
s=A.v(this.a.value)
r=this.b
q=r.a
if(q==="input"||q==="change")r.b.$1(s)
else{p=!1
if(q==="keydown")q=A.v(a.key)==="Enter"
else q=p
if(q)r.b.$1(s)}},
$S:2}
A.et.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eu.prototype={
$1(a){A.q(a)
this.b.b.$1(A.ad(this.a.checked))},
$S:2}
A.ev.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.e7.prototype={
sa6(a){this.c=t.M.a(a)}}
A.du.prototype={
aj(){return"MainAxisAlignment."+this.b}}
A.bA.prototype={
aj(){return"CrossAxisAlignment."+this.b}}
A.X.prototype={}
A.b6.prototype={}
A.t.prototype={}
A.cF.prototype={}
A.ay.prototype={}
A.o.prototype={}
A.i.prototype={}
A.F.prototype={}
A.c5.prototype={}
A.cy.prototype={
bB(a,b,c,d){if(B.b.gI().a5(0,new A.f3()))throw A.j(A.ae("ResponsiveVisibility manages its visibility styles and marker."))}}
A.f3.prototype={
$1(a){A.v(a)
return a.toLowerCase()==="style"||a.toLowerCase()==="data-sparrow-layout"},
$S:3}
A.l.prototype={}
A.k.prototype={}
A.cu.prototype={}
A.c8.prototype={}
A.cD.prototype={}
A.cJ.prototype={}
A.cB.prototype={}
A.c6.prototype={}
A.c9.prototype={}
A.b2.prototype={
aj(){return"ResponsiveBreakpoint."+this.b}}
A.cc.prototype={}
A.aF.prototype={
aq(){return A.oF(this.a.$0())},
$ijr:1}
A.cW.prototype={
aj(){return"_UiChildContext."+this.b}}
A.fF.prototype={
gZ(){var s=this.a
return s.a===0?null:new A.aj(s,A.y(s).h("aj<2>")).J(0,"\n")},
L(c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="ResponsiveText",b6="value",b7="data-sparrow-layout",b8="ResponsiveVisibility",b9="visible",c0="hidden",c1="div",c2="style",c3="box-sizing:border-box"
A:{s=c4 instanceof A.b6
r=b4
q=b4
p=b4
o=b4
n=b4
m=!1
if(s){l=c4.a
p=c4.r
q=c4.f
m=p!=null
n=q
r="span"
o="span"
k=l}else{k=b4
l=k}if(m){t.f.a(n)
t.x.a(p)
A.v(o)
A.h3(n,b5)
A.nM(n,"font-size",b5)
A.l6(p,"fontSize",!1)
m=t.N
j=A.h(t.b,m)
i=p.a
A.H(i,b6)
j.j(0,B.t,"font-size:"+(A.a3(i)+"px"))
h=p.b
if(h!=null){A.H(h,b6)
j.j(0,B.r,"font-size:"+(A.a3(h)+"px"))}g=p.c
A.H(g,b6)
j.j(0,B.q,"font-size:"+(A.a3(g)+"px"))
f=b3.aJ("text:font-size",j)
m=A.bj(n,m,t.X)
m.j(0,b7,f)
j=A.c([],t.E)
j.push(new A.a7(A.l4(k)))
m=A.W(o,m,B.k,j,B.m,B.j,B.l,b4)
break A}if(s){m=A.c([],t.E)
m.push(new A.a7(A.l4(l)))
m=A.W(r,q,B.k,m,B.m,B.j,B.l,b4)
break A}if(c4 instanceof A.cy){t.f.a(B.b)
m=t.P.a(c4.b)
A.h3(B.b,b8)
A.kW(B.b,b8)
j=t.N
i=A.h(t.b,j)
i.j(0,B.t,"visibility:"+(m.a?b9:c0))
h=m.b
if(h!=null)i.j(0,B.r,"visibility:"+(h?b9:c0))
i.j(0,B.q,"visibility:"+(m.c?b9:c0))
f=b3.aJ("visibility",i)
m=A.bj(B.b,j,t.X)
m.j(0,b7,f)
m=A.W(c1,m,B.k,A.c([b3.L(c4.a,B.o)],t.E),B.m,B.j,B.l,b4)
break A}if(c4 instanceof A.t){e=c4.b
d=c4.c
r=c4.d
c=c4.e
m=t.N
j=t.X
i=A.h(m,j)
b=r==="button"
if(b)i.j(0,"type","button")
if(r==="div"&&e==="click"&&d!=null&&!c)i.R(0,A.a(["role","button","tabindex","0"],m,j))
i.R(0,c4.f)
if(c&&b)i.j(0,"disabled","")
j=A.c([b3.L(c4.a,B.o)],t.E)
m=A.h(m,t.o)
if(d!=null)m.j(0,e,d)
m=A.W(r,i,B.k,j,m,B.j,B.l,b4)
break A}if(c4 instanceof A.cF){m=b3.bS(c4.k1,c4.cx,c4.dy,!0,c4.db,c4.fx,c4.w,c4.Q,c4.CW,!0,c4.cy,c4.fr,c4.dx,c4.fy,c4.r,c4.z,c4.f,c4.a,c4.as,c4.b,c4.e,c4.go,c4.id,c4.c,c4.at,c4.x,c4.d,c4.ax,c4.y)
break A}if(c4 instanceof A.ay){m=b3.bN(c4.b,c4.c,c4.a,c4.d,c4.e)
break A}if(c4 instanceof A.o){a=c4.a
q=c4.e
m=A.bj(q,t.N,t.X)
m.j(0,c2,A.h0(q.p(0,c2),A.kP(c4.d,"row",0,c4.c)))
j=A.P(a)
j=A.W(c1,m,B.k,new A.aa(a,j.h("a4(1)").a(new A.fO(b3)),j.h("aa<1,a4>")),B.m,B.j,B.l,b4)
m=j
break A}if(c4 instanceof A.i){a=c4.a
q=c4.e
m=A.bj(q,t.N,t.X)
m.j(0,c2,A.h0(q.p(0,c2),A.kP(c4.d,"column",0,c4.c)))
j=A.P(a)
j=A.W(c1,m,B.k,new A.aa(a,j.h("a4(1)").a(new A.fP(b3)),j.h("aa<1,a4>")),B.m,B.j,B.l,b4)
m=j
break A}if(c4 instanceof A.F){m=A.W(c1,A.bT(B.b,c5===B.S?"display:grid;place-items:center;min-height:100vh;box-sizing:border-box":"display:grid;place-items:center;box-sizing:border-box"),B.k,A.c([b3.L(c4.a,B.o)],t.E),B.m,B.j,B.l,b4)
break A}if(c4 instanceof A.cJ){a=c4.a
a0=c4.b
a1=c4.c
A.H(a0,b6)
m=A.a3(a0)
A.H(a1,b6)
j=A.P(a)
j=A.W(c1,A.bT(B.b,"display:flex;flex-wrap:wrap;column-gap:"+(m+"px")+";row-gap:"+(A.a3(a1)+"px")+";justify-content:"+c4.d.c+";align-content:"+c4.e.c+";align-items:"+c4.f.c+";min-width:0;min-height:0"),B.k,new A.aa(a,j.h("a4(1)").a(new A.fQ(b3)),j.h("aa<1,a4>")),B.m,B.j,B.l,b4)
m=j
break A}m={}
m.a=null
if(c4 instanceof A.cB){a=c4.a
m.a=!1
j=A.c(["width:100%",c3,"max-width:100%","min-width:0","min-height:0","height:100%","max-height:100%","overscroll-behavior-x:contain","overscroll-behavior-y:auto"],t.s)
j.push("overflow-x:hidden;overflow-y:auto")
i=A.P(a)
i=A.W(c1,A.bT(B.b,B.d.J(j,";")),B.k,new A.aa(a,i.h("a4(1)").a(new A.fR(m,b3)),i.h("aa<1,a4>")),B.m,B.j,B.l,b4)
m=i
break A}if(c4 instanceof A.c6){a2=c4.b
a3=c4.c
a4=c4.d
a5=c4.e
A.H(a2,b6)
m=A.a3(a2)
A.H(a3,b6)
j=A.a3(a3)
A.H(a5,b6)
i=A.a3(a5)
A.H(a4,b6)
i=A.W("hr",A.bT(B.b,"box-sizing:border-box;border:0;border-top:"+(m+"px")+" solid "+c4.a+";height:"+(j+"px")+";margin:0 "+(i+"px")+" 0 "+(A.a3(a4)+"px")),B.k,B.v,B.m,B.j,B.l,b4)
m=i
break A}if(c4 instanceof A.c5){a6=c4.c
a3=c4.d
a7=c4.e
a8=c4.r
a9=c4.w
b0=c4.y
q=c4.z
m=A.bj(q,t.N,t.X)
j=q.p(0,c2)
b1=A.c([c3],t.s)
if(a6!=null){A.H(a6,b6)
B.d.k(b1,"width:"+(A.a3(a6)+"px"))}else if(b0!=null)B.d.k(b1,"width:100%")
if(a3!=null){A.H(a3,b6)
B.d.k(b1,"height:"+(A.a3(a3)+"px"))}if(a7!=null){A.H(a7,b6)
B.d.k(b1,"padding:"+(A.a3(a7)+"px"))}if(a8!=null)B.d.k(b1,"background-color:"+a8)
if(a9!=null){A.H(a9,b6)
B.d.k(b1,"border-radius:"+(A.a3(a9)+"px"))}if(b0!=null){A.H(b0,b6)
B.d.k(b1,"max-width:"+(A.a3(b0)+"px"))}m.j(0,c2,A.h0(j,B.d.J(b1,";")))
m=A.W(c4.b,m,B.k,A.c([b3.L(c4.a,B.o)],t.E),B.m,B.j,B.l,b4)
break A}if(c4 instanceof A.cu){m=b3.bR(!1,B.b,c4.a,c4.b,"padding",b4,c1)
break A}if(c4 instanceof A.c8){m=b3.bO(B.b,c4.a,"Expanded",c5,"flex-grow:"+c4.b+";flex-shrink:1;flex-basis:0%;min-width:0;min-height:0",c1)
break A}if(c4 instanceof A.cD){a6=c4.a
a3=c4.b
b2=c4.c
b1=A.c([c3],t.s)
if(a6!=null){A.H(a6,b6)
B.d.k(b1,"width:"+(A.a3(a6)+"px"))}if(a3!=null){A.H(a3,b6)
B.d.k(b1,"height:"+(A.a3(a3)+"px"))}m=A.bT(B.b,B.d.J(b1,";"))
j=A.c([],t.E)
if(b2!=null)j.push(b3.L(b2,B.o))
m=A.W(c1,m,B.k,j,B.m,B.j,B.l,b4)
break A}if(c4 instanceof A.c9){m=b3.bQ(B.b,b4,c4.a,b4,c4.b,c4.c,c4.r,c4.w,b4,c1)
break A}if(c4 instanceof A.cc){m=A.W("h"+c4.a,c4.c,B.k,A.c([new A.a7(c4.b)],t.E),B.m,B.j,B.l,b4)
break A}m=b4}return m},
a_(a){return this.L(a,B.S)},
bR(a,b,c,d,e,f,g){var s
t.f.a(b)
A.h3(b,e)
s=A.W(g,A.bT(b,e+":"+A.ns(d,a)),B.k,A.c([this.L(c,B.o)],t.E),B.m,B.j,B.l,null)
return s},
bS(c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="aria-describedby",b2="value",b3="style",b4="class",b5="data-sparrow-material-control",b6=";",b7="Invalid CSS border.",b8="data-sparrow-material-filled",b9="data-sparrow-material-custom-border",c0="sparrow-field__label",c1=t.n
c1.a(e8)
c1.a(e2)
c1.a(d8)
c1.a(d6)
c1.a(c8)
t.f.a(c2)
if(d9==null){c1=c2.p(0,"id")
s=c1==null?b0:J.aI(c1)}else s=d9
c1=s==null
r=c1?b0:s+"-helper"
q=t.s
p=A.c([],q)
o=c2.p(0,b1)
if(typeof o=="string")p.push(B.c.a3(o))
n=r!=null
if(n)p.push(r)
m=t.bB
l=t.cc
k=new A.at(p,m.a(new A.fK()),l).J(0," ")
p=t.N
j=t.X
i=A.bj(c2,p,j)
h=!c1
if(h)i.j(0,"id",s)
g=c2.p(0,"type")
i.j(0,"type",g==null?"text":g)
i.j(0,"placeholder",e5)
if(k.length!==0)i.j(0,b1,k)
f=a9.c3(c2.p(0,b3),e8)
if(f!=null)i.j(0,b3,f)
g=A.c([],q)
e=c2.p(0,b4)
if(typeof e=="string")g.push(B.c.a3(e))
g.push("sparrow-field__input")
i.j(0,b4,new A.at(g,m.a(new A.fL()),l).J(0," "))
d=A.W("input",i,B.k,B.v,B.m,B.j,A.h(p,t.D),b0)
c=c2.p(0,b5)
A:{if(typeof c=="string"){B.c.v(c,"text-")
break A}break A}b=A.c([],q)
if(B.c.B(d0,b6))A.Q(A.O(d0,"fillColor","Invalid CSS color."))
B.d.k(b,"--sparrow-field-fill:"+d0)
if(B.c.B(c3,b6))A.Q(A.O(c3,"border",b7))
B.d.k(b,"--sparrow-field-border:"+c3)
if(B.c.B(d2,b6))A.Q(A.O(d2,"focusedBorder",b7))
B.d.k(b,"--sparrow-field-focused-border:"+d2)
if(B.c.B(c6,b6))A.Q(A.O(c6,"errorBorder",b7))
B.d.k(b,"--sparrow-field-error-border:"+c6)
if(B.c.B(d4,b6))A.Q(A.O(d4,"focusedErrorBorder",b7))
B.d.k(b,"--sparrow-field-focused-error-border:"+d4)
if(c4!=null){A.H(c4,b2)
B.d.k(b,"--sparrow-field-radius:"+(A.a3(c4)+"px"))}A.H(d3,b2)
B.d.k(b,"--sparrow-field-focused-radius:"+(A.a3(d3)+"px"))
A.H(c7,b2)
B.d.k(b,"--sparrow-field-error-radius:"+(A.a3(c7)+"px"))
A.H(d5,b2)
B.d.k(b,"--sparrow-field-focused-error-radius:"+(A.a3(d5)+"px"))
o=a9.aa(e8)
if(o!=null)B.d.k(b,o)
B.d.R(b,a9.bd(d8))
a=B.d.J(b,b6)
q=A.h(p,j)
q.j(0,b4,"sparrow-field__control")
a0=c2.p(0,b5)
if(typeof a0=="string")q.j(0,b5,a0)
a1=c2.p(0,b8)
if(typeof a1=="string")q.j(0,b8,a1)
if(c2.p(0,b9)!=null)q.j(0,b9,"")
if(a.length!==0)q.j(0,b3,a)
m=t.E
l=A.c([],m)
l.push(d)
a2=A.W("span",q,B.k,l,B.m,B.j,B.l,b0)
if(e1==null)a3=b0
else{q=A.h(p,j)
q.j(0,b4,c0)
if(h)q.j(0,"for",s)
a4=a9.aa(e2)
if(a4!=null)q.j(0,b3,a4)
a3=A.W("label",q,B.k,A.c([new A.a7(e1)],m),B.m,B.j,B.l,b0)}q=a3!=null
if(q&&c1){c1=A.h(p,j)
c1.j(0,b4,c0)
a5=a9.aa(e2)
if(a5!=null)c1.j(0,b3,a5)
e1.toString
a6=A.W("label",c1,B.k,A.c([new A.a7(e1),a2],m),B.m,B.j,B.l,b0)}else a6=b0
c1=A.h(p,j)
c1.j(0,b4,"sparrow-field")
a7=c2.p(0,b5)
if(typeof a7=="string")c1.j(0,b5,a7)
l=A.c([],m)
if(q&&a6==null)l.push(a3)
if(a6!=null)l.push(a6)
else l.push(a2)
q=A.h(p,j)
q.j(0,b4,"sparrow-field__helper")
if(n)q.j(0,"id",r)
a8=a9.aa(d6)
if(a8!=null)q.j(0,b3,a8)
l.push(A.W("div",q,B.k,A.c([new A.a7(d7)],m),B.m,B.j,B.l,b0))
return A.W("div",c1,B.k,l,B.m,B.j,B.l,b0)},
aa(a){t.n.a(a)
if(a==null||a.gU(a))return null
return a.gD().aT(0,new A.fN(),t.N).J(0,";")},
c3(a,b){var s=this.aa(t.n.a(b))
if(s==null)return typeof a=="string"?a:null
if(typeof a!="string"||B.c.a3(a).length===0)return s
return B.c.a3(a)+";"+s},
bd(a){return new A.b9(this.ci(t.n.a(a)),t.dj)},
ci(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m
return function $async$bd(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.gD(),o=o.gu(o)
case 2:if(!o.l()){r=3
break}n=o.gt()
m=n.a
r=B.aq.B(0,m)?4:5
break
case 4:r=6
return b.b="--sparrow-field-hint-"+m+":"+n.b,1
case 6:case 5:r=2
break
case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
bN(a,b,c,d,e){t.L.a(d)
return A.W("div",B.ae,B.k,A.c([this.a_(a),A.md(new A.fI(this,d,e,b),c,"div",d,null)],t.E),B.m,B.j,B.l,null)},
bO(a,b,c,d,e,f){t.f.a(a)
if(d!==B.I)throw A.j(A.C(c+" must be a direct child of Row, Column, or Responsive."))
return A.W(f,A.bT(a,e),B.k,A.c([this.L(b,B.o)],t.E),B.m,B.j,B.l,null)},
bQ(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
t.gS.a(a3)
t.b9.a(a7)
t.cd.a(a8)
t.f.a(a1)
A.h3(a1,"Grid")
s=A.P(a3)
r=s.h("a4(1)").a(new A.fJ(this,a2))
A.kW(a1,"Grid")
q=a7.a
p=a8.a
o=t.N
n=A.a([B.t,A.nr(a0,q,p,a0)],t.b,o)
for(m=[B.r,B.q],l=t.s,k=a7.c,j=a7.b,i=a8.c,h=a8.b,g=0;g<2;++g){f=m[g]
e=f.a
d=a0
switch(e){case 1:d=j
break
case 2:d=k
break
case 0:break}c=a0
switch(e){case 1:e=h
break
case 2:e=i
break
case 0:e=c
break
default:e=c}c=d==null
if(c&&e==null)continue
b=A.c([],l)
if(!c)b.push("grid-template-columns:"+("repeat("+A.D(d)+",minmax(0,1fr))"))
if(e!=null){if(!isFinite(e))A.Q(A.O(e,"value","Must be a finite CSS length."))
b.push("gap:"+(A.a3(e)+"px"))}n.j(0,f,B.d.J(b,";"))}a=this.aJ("grid",n)
o=A.bj(a1,o,t.X)
o.j(0,"data-sparrow-layout",a)
return A.W(b0,o,B.k,new A.aa(a3,r,s.h("aa<1,a4>")),B.m,B.j,B.l,a0)},
aJ(a,b){var s,r,q,p,o
t.bH.a(b)
s=A.c([a],t.s)
for(r=0;r<3;++r){q=B.L[r]
p=b.p(0,q)
if(p!=null)s.push(q.b+":"+p)}o=A.n4(2,B.d.J(s,"|"),B.p,!1)
this.a.cM(a+":"+o,new A.fM('[data-sparrow-layout="'+o+'"]',b))
return o}}
A.fO.prototype={
$1(a){return this.a.L(t.g.a(a),B.I)},
$S:7}
A.fP.prototype={
$1(a){return this.a.L(t.g.a(a),B.I)},
$S:7}
A.fQ.prototype={
$1(a){return this.a.L(t.g.a(a),B.o)},
$S:7}
A.fR.prototype={
$1(a){var s=this.b.L(t.g.a(a),B.o)
return s},
$S:7}
A.fK.prototype={
$1(a){return A.v(a).length!==0},
$S:3}
A.fL.prototype={
$1(a){return A.v(a).length!==0},
$S:3}
A.fN.prototype={
$1(a){t.fK.a(a)
return a.a+":"+a.b},
$S:29}
A.fI.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l.gi()){s=t.N
r=t.o
q=A.W("button",B.ac,B.k,B.v,A.a(["click",new A.fG(l)],s,r),B.j,B.l,m)
p=n.c
A.H(p,"value")
o=t.E
o=A.c([new A.b0("open",A.W("div",B.ab,B.k,A.c([q,A.W("aside",A.a(["role","navigation","style","position:relative;z-index:1;width:"+(A.a3(p)+"px")+";max-width:85vw;height:100%;overflow:auto;background:white"],s,t.X),B.k,A.c([A.W("button",B.ad,B.k,A.c([new A.a7("Close")],o),A.a(["click",new A.fH(l)],s,r),B.j,B.l,m),n.a.a_(n.d)],o),B.m,B.j,B.l,m)],o),B.m,B.j,B.l,m))],t.I)
l=o}else l=B.a9
return l},
$S:30}
A.fG.prototype={
$1(a){this.a.si(!1)
return!1},
$S:0}
A.fH.prototype={
$1(a){this.a.si(!1)
return!1},
$S:0}
A.fJ.prototype={
$1(a){var s=this.a.L(t.g.a(a),B.o)
return s},
$S:7}
A.fM.prototype={
$0(){return A.nN(this.a,this.b)},
$S:17}
A.h5.prototype={
$1(a){return A.v(a).toLowerCase()==="style"},
$S:3}
A.h2.prototype={
$1(a){var s
A.v(a)
s=B.c.aR(a,":")
return s>0&&B.c.a3(B.c.q(a,0,s)).toLowerCase()===this.a},
$S:3}
A.h4.prototype={
$1(a){return A.v(a).toLowerCase()==="data-sparrow-layout"},
$S:3}
A.j0.prototype={
$1(a){return new A.aF(new A.iY(this.a,this.b))},
$S:5}
A.iY.prototype={
$0(){var s=this.b
return A.o9(new A.iT(this.a),s.C().gag(),s.C().gae())},
$S:8}
A.iT.prototype={
$1$2(a,b,c){return this.a.a9(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:9}
A.j1.prototype={
$1(a){t.O.a(a)
return A.cb(u.r)},
$S:6}
A.j3.prototype={
$1(a){return new A.aF(new A.iX(this.a,this.b))},
$S:5}
A.iX.prototype={
$0(){var s=this.b
return A.oa(new A.iS(this.a),s.C().gag(),s.C().gae())},
$S:8}
A.iS.prototype={
$1$2(a,b,c){return this.a.a9(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:9}
A.j4.prototype={
$1(a){t.O.a(a)
return A.cb(u.r)},
$S:6}
A.j5.prototype={
$1(a){return new A.aF(new A.iW(this.a,this.b))},
$S:5}
A.iW.prototype={
$0(){var s=this.b
return A.ob(new A.iR(this.a),s.C().gag(),s.C().gae())},
$S:8}
A.iR.prototype={
$1$2(a,b,c){return this.a.a9(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:9}
A.j6.prototype={
$1(a){t.O.a(a)
return A.cb(u.r)},
$S:6}
A.j7.prototype={
$1(a){return new A.aF(new A.iV(this.a,this.b))},
$S:5}
A.iV.prototype={
$0(){var s=this.b
return A.oc(new A.iQ(this.a),s.C().gag(),s.C().gae())},
$S:8}
A.iQ.prototype={
$1$2(a,b,c){return this.a.a9(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:9}
A.j8.prototype={
$1(a){t.O.a(a)
return A.cb(u.r)},
$S:6}
A.j9.prototype={
$1(a){return new A.aF(new A.iU(this.a,this.b))},
$S:5}
A.iU.prototype={
$0(){var s=this.b
return A.od(new A.iP(this.a),s.C().gag(),s.C().gae())},
$S:8}
A.iP.prototype={
$1$2(a,b,c){return this.a.a9(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:9}
A.ja.prototype={
$1(a){t.O.a(a)
return A.cb(u.r)},
$S:6}
A.j_.prototype={
$1(a){return new A.aF(new A.iZ())},
$S:5}
A.iZ.prototype={
$0(){return B.at},
$S:31}
A.j2.prototype={
$1(a){var s,r
A.q(a)
s=A.q(v.G.window)
r=this.a
s.removeEventListener("pagehide",r.C())
s.removeEventListener("beforeunload",r.C())
this.b.K()
this.c.C().K()},
$S:2}
A.hB.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="#F5F3EE",a4="div",a5="#10213A",a6="DIGITAL STUDIO",a7="height:fit-content",a8="click",a9="data-sparrow-inkwell",b0="#4E79E8",b1=u.q,b2=u.e,b3=u.a,b4="\u2197",b5=u.x,b6="width:fit-content",b7="#315ED1",b8=u.L,b9=u.l,c0=u.J,c1="#34445B",c2='font-family:"Manrope",sans-serif;font-size:11px;font-weight:700;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#86A7F2',c3='font-family:"Manrope",sans-serif;font-size:13px;font-weight:600;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#F6F4EF',c4=1220,c5="#D8DCE1",c6="Understand",c7='font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:22px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',c8=u.M,c9=u.v,d0=u.G,d1=u.R,d2="#FCFBF8",d3=u.B,d4="#233952",d5="#7488A2",d6=u.h,d7=u.A,d8="Contact",d9=u.I,e0="Services",e1="Solutions",e2=u.o,e3="CURRENT",e4=u.X,e5=u.t,e6=this.a.$1$2("sk_state_67471c63_5000",!1,t.y)
if(e6==null)e6=new A.a5(!1,A.al(t.B),t.L)
s=t.N
r=t.X
q=A.a(["role","banner","style",u.u],s,r)
p=A.b(a2,1,16)
o=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.g],s,r),a2)),34,a2,a2,a2,a4,34)
n=A.b(a2,a2,11)
m=t.U
l=A.c([A.d("SPARROW",A.a(["style",u._],s,r),a2),A.d(a6,A.a(["style",u.E],s,r),a2)],m)
k=A.a(["style",a7],s,r)
j=t.g
i=this.b
k=A.I(new A.t(new A.o(A.e(A.c([o,n,new A.i(A.e(l,j),B.a,B.f,k)],m),j),B.a,B.e,A.h(s,r)),a8,new A.hk(e6,i),a4,!1,A.a([a9,""],s,r)),1)
l=A.c([A.f(B.b,a5,a2,A.b(a2,0,0),2,a2,a2,a2,a4,17),A.b(a2,4,a2),A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,12)],m)
n=A.a(["style",a7],s,r)
n=A.f(q,a3,a2,new A.o(A.e(A.c([p,k,new A.o(A.e(A.c([new A.t(A.m(new A.o(A.e(A.c([new A.i(A.e(l,j),B.a,B.f,n),A.b(a2,a2,8),A.d("MENU",A.a(["style",u.s],s,r),a2)],m),j),B.a,B.e,A.h(s,r)),new A.l(10,8,10,8)),a8,new A.hl(e6),a4,!1,A.a([a9,""],s,r)),A.b(a2,a2,18)],m),j),B.a,B.h,B.b)],m),j),B.a,B.e,B.b),78,a2,a2,16,"header",a2)
l=A.d("INDEPENDENT THINKING. LASTING IMPACT.",A.a(["style",b1],s,r),a2)
k=A.b(a2,25,a2)
p=A.w(1,"Thoughtful software,\nbuilt to last.",A.a(["style",u.Q],s,r))
q=A.b(a2,22,a2)
o=t.x
h=A.d("This demonstration explores how teams can turn complex challenges into clear, dependable digital products.",A.a(["style",b2],s,r),new A.k(17,17,17,o))
g=A.b(a2,28,a2)
f=A.c([A.d("Start a conversation",A.a(["style",b3],s,r),a2),A.b(a2,a2,14),A.d(b4,A.a(["style",b5],s,r),a2)],m)
e=A.a(["style",b6],s,r)
e=A.m(new A.o(A.e(f,j),B.a,B.e,e),new A.l(13,18,13,18))
e=A.f(A.a(["style",b8],s,r),b7,5,e,a2,a2,a2,a2,a4,a2)
f=A.a([a9,""],s,r)
d=A.c([A.d("Explore services",A.a(["style",'font-family:"Manrope",sans-serif;font-size:12px;font-weight:700;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#10213A'],s,r),a2),A.b(a2,a2,12),A.d("\u2192",A.a(["style",'font-family:"Manrope",sans-serif;font-size:14px;font-weight:var(--sparrow-material-text-body-medium-font-weight,400);letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#315ED1'],s,r),a2)],m)
c=A.a(["style",b6],s,r)
c=A.m(new A.o(A.e(d,j),B.a,B.e,c),new A.l(12,18,12,18))
c=A.e(A.c([l,k,p,q,h,g,A.cK(B.a,A.c([new A.t(e,a8,new A.hm(e6,i),a4,!1,f),new A.t(A.f(A.a(["style","border:1px solid #AFBAC8"],s,r),a2,5,c,a2,a2,a2,a2,a4,a2),a8,new A.ht(e6,i),a4,!1,A.a([a9,""],s,r))],m),B.f,B.a,12,12),A.b(a2,31,a2),A.d("STRATEGY     /     DESIGN     /     ENGINEERING",A.a(["style",b1],s,r),a2)],m),j)
f=A.m(new A.i(A.e(A.c([new A.o(A.e(A.c([A.d("A SYSTEMS VIEW",A.a(["style",b9],s,r),a2),A.d("S / 01",A.a(["style",'font-family:"Manrope",sans-serif;font-size:10px;font-weight:600;letter-spacing:1px;line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#8898AD'],s,r),a2)],m),j),B.i,B.e,A.h(s,r)),A.b(a2,35,a2),A.w(2,"Make complexity\nuseful.",A.a(["style",'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:28px;letter-spacing:-0.8px;line-height:1.14;color:#F8F7F2;font-weight:600'],s,r)),A.b(a2,9,a2),A.d("A considered path from challenge to product.",A.a(["style",c0],s,r),a2),A.b(a2,25,a2),A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.m(new A.o(A.e(A.c([A.d("01",A.a(["style",c2],s,r),a2),A.b(a2,a2,17),A.I(new A.i(A.e(A.c([A.d("Understand the challenge",A.a(["style",c3],s,r),a2),A.b(a2,5,a2),A.d("People \xb7 context \xb7 outcomes",A.a(["style",c0],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r)),new A.l(14,0,14,0)),A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.m(new A.o(A.e(A.c([A.d("02",A.a(["style",c2],s,r),a2),A.b(a2,a2,17),A.I(new A.i(A.e(A.c([A.d("Design with intention",A.a(["style",c3],s,r),a2),A.b(a2,5,a2),A.d("Structure \xb7 experience \xb7 decisions",A.a(["style",c0],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r)),new A.l(14,0,14,0)),A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.m(new A.o(A.e(A.c([A.d("03",A.a(["style",c2],s,r),a2),A.b(a2,a2,17),A.I(new A.i(A.e(A.c([A.d("Build for the long term",A.a(["style",c3],s,r),a2),A.b(a2,5,a2),A.d("Care \xb7 clarity \xb7 improvement",A.a(["style",c0],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r)),new A.l(14,0,14,0))],m),j),B.a,B.h,A.h(s,r)),new A.l(26,26,26,26))
e=t.G
f=A.f(B.b,a3,a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([new A.i(c,B.a,B.f,A.h(s,r)),A.f(A.a(["style","border:1px solid #253953;box-shadow:0px 15px 28px 0px rgba(16, 33, 58, 0.10980392156862745);background-image:linear-gradient(to bottom right, #13243D 0%, #0A1424 100%)"],s,r),a2,9,f,a2,a2,a2,a2,a4,a2)],m),1,38,new A.k(1,2,2,e),new A.k(38,38,70,o)),new A.l(54,28,54,28)),a2,c4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
c=A.f(B.b,d2,a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.d("STRATEGY  /  DESIGN  /  ENGINEERING",A.a(["style",b1],s,r),a2),A.b(a2,15,a2),A.w(2,"One thoughtful practice.\nThree connected disciplines.",A.a(["style",'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:34px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600'],s,r)),A.b(a2,16,a2),A.d(u.U,A.a(["style",b2],s,r),new A.k(16,16,16,o)),A.b(a2,44,a2),A.M(A.c([new A.i(A.e(A.c([A.f(B.b,c5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.d("01",A.a(["style",b1],s,r),a2),A.b(a2,22,a2),A.w(3,c6,A.a(["style",c7],s,r)),A.b(a2,9,a2),A.d(c8,A.a(["style",c9],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,c5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.d("02",A.a(["style",b1],s,r),a2),A.b(a2,22,a2),A.w(3,"Shape",A.a(["style",c7],s,r)),A.b(a2,9,a2),A.d(d0,A.a(["style",c9],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,c5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.d("03",A.a(["style",b1],s,r),a2),A.b(a2,22,a2),A.w(3,"Deliver",A.a(["style",c7],s,r)),A.b(a2,9,a2),A.d(d1,A.a(["style",c9],s,r),a2)],m),j),B.a,B.f,A.h(s,r))],m),1,25,new A.k(1,3,3,e),new A.k(25,26,42,o))],m),j),B.a,B.h,A.h(s,r)),new A.l(82,28,82,28)),a2,c4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
g=A.f(B.b,"#0D192B",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.d("THE SPARROW APPROACH",A.a(["style",b9],s,r),a2),A.b(a2,18,a2),A.w(2,"A clear path from idea to impact.",A.a(["style",u.d9],s,r)),A.b(a2,12,a2),A.d(u.D,A.a(["style",u.C],s,r),new A.k(16,16,16,o)),A.b(a2,42,a2),A.M(A.c([new A.i(A.e(A.c([A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("01 / DISCOVER",A.a(["style",b9],s,r),a2),A.b(a2,20,a2),A.w(3,c6,A.a(["style",d3],s,r)),A.b(a2,8,a2),A.d(c8,A.a(["style",c0],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("02 / DEFINE",A.a(["style",b9],s,r),a2),A.b(a2,20,a2),A.w(3,"Shape",A.a(["style",d3],s,r)),A.b(a2,8,a2),A.d(d0,A.a(["style",c0],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("03 / BUILD",A.a(["style",b9],s,r),a2),A.b(a2,20,a2),A.w(3,"Deliver",A.a(["style",d3],s,r)),A.b(a2,8,a2),A.d(d1,A.a(["style",c0],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("04 / EVOLVE",A.a(["style",b9],s,r),a2),A.b(a2,20,a2),A.w(3,"Improve",A.a(["style",d3],s,r)),A.b(a2,8,a2),A.d(u.W,A.a(["style",c0],s,r),a2)],m),j),B.a,B.f,A.h(s,r))],m),1,26,new A.k(1,2,4,e),new A.k(26,25,28,o))],m),j),B.a,B.h,A.h(s,r)),new A.l(82,28,82,28)),a2,c4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
h=A.d("DEMONSTRATION CONCEPTS",A.a(["style",b1],s,r),a2)
q=A.b(a2,15,a2)
p=A.e(A.c([A.f(B.b,"#14243B",7,A.m(new A.o(A.e(A.c([A.f(B.b,"#20344F",4,A.m(new A.i(A.e(A.c([A.f(B.b,"#8DAAF2",a2,A.b(a2,0,0),15,a2,a2,a2,a4,15),A.b(a2,15,a2),A.f(B.b,"#526780",a2,A.b(a2,0,0),2,a2,a2,a2,a4,15),A.b(a2,12,a2),A.f(B.b,"#526780",a2,A.b(a2,0,0),2,a2,a2,a2,a4,15)],m),j),B.a,B.e,A.h(s,r)),new A.l(16,0,16,0)),a2,a2,a2,a2,a4,44),A.b(a2,a2,16),A.I(new A.i(A.e(A.c([A.d("WORKSPACE / OVERVIEW",A.a(["style",u.y],s,r),a2),A.b(a2,16,a2),A.b(new A.o(A.e(A.c([A.I(A.f(B.b,d4,a2,A.b(a2,0,0),a2,a2,a2,a2,a4,a2),1),A.b(a2,a2,8),A.I(A.f(B.b,d4,a2,A.b(a2,0,0),a2,a2,a2,a2,a4,a2),1),A.b(a2,a2,8),A.I(A.f(B.b,d4,a2,A.b(a2,0,0),a2,a2,a2,a2,a4,a2),1)],m),j),B.a,B.e,A.h(s,r)),35,a2),A.b(a2,12,a2),A.f(B.b,"#34475F",a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,14,a2),A.f(B.b,d5,a2,A.b(a2,0,0),5,a2,a2,a2,a4,86),A.b(a2,10,a2),A.f(B.b,d5,a2,A.b(a2,0,0),5,a2,a2,a2,a4,64),A.b(a2,10,a2),A.f(B.b,d5,a2,A.b(a2,0,0),5,a2,a2,a2,a4,76),A.b(a2,10,a2),A.f(B.b,d5,a2,A.b(a2,0,0),5,a2,a2,a2,a4,48)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.e,A.h(s,r)),new A.l(18,18,18,18)),220,a2,a2,a2,a4,a2),A.b(a2,22,a2),A.d("DEMO / OPERATIONS",A.a(["style",b1],s,r),a2),A.b(a2,10,a2),A.w(3,"A clearer view of work",A.a(["style",d6],s,r)),A.b(a2,8,a2),A.d(u.p,A.a(["style",c9],s,r),a2)],m),j)
k=A.m(new A.i(A.e(A.c([A.d("YOUR SERVICES",A.a(["style",b1],s,r),a2),A.b(a2,13,a2),A.w(4,"How can we help?",A.a(["style",u.z],s,r)),A.b(a2,12,a2),A.f(B.b,d5,a2,A.b(a2,0,0),5,a2,a2,a2,a4,90),A.b(a2,7,a2),A.f(B.b,d5,a2,A.b(a2,0,0),5,a2,a2,a2,a4,68),A.b(a2,15,a2),new A.o(A.e(A.c([A.I(A.b(A.f(B.b,b7,a2,A.b(a2,0,0),a2,a2,a2,a2,a4,a2),30,a2),1),A.b(a2,a2,7),A.I(A.b(A.f(B.b,"#E8ECF2",a2,A.b(a2,0,0),a2,a2,a2,a2,a4,a2),30,a2),1)],m),j),B.a,B.e,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.l(16,16,16,16))
k=A.f(B.b,"#EBEEF1",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([h,q,A.M(A.c([new A.i(p,B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,"#E0E6EC",7,new A.F(A.f(A.a(["style",u.P],s,r),d2,5,k,a2,a2,a2,a2,a4,205)),220,a2,a2,a2,a4,a2),A.b(a2,22,a2),A.d("DEMO / CUSTOMER EXPERIENCE",A.a(["style",b1],s,r),a2),A.b(a2,10,a2),A.w(3,"Services made more accessible",A.a(["style",d6],s,r)),A.b(a2,8,a2),A.d(u.O,A.a(["style",c9],s,r),a2)],m),j),B.a,B.f,A.h(s,r))],m),1,34,new A.k(1,2,2,e),new A.k(34,28,40,o)),A.b(a2,24,a2),A.d(u.m,A.a(["style",c9],s,r),a2)],m),j),B.a,B.h,A.h(s,r)),new A.l(82,28,82,28)),a2,c4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
p=A.f(B.b,d2,a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.d("FAQ",A.a(["style",b1],s,r),a2),A.b(a2,13,a2),A.w(2,"A few useful answers.",A.a(["style",u.F],s,r)),A.b(a2,28,a2),A.m(new A.i(A.e(A.c([A.f(B.b,c5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.M(A.c([A.d("01",A.a(["style",b1],s,r),a2),A.w(3,u.n,A.a(["style",d7],s,r)),A.d(u.k,A.a(["style",c9],s,r),a2)],m),1,8,new A.k(1,3,3,e),new A.k(8,22,30,o))],m),j),B.a,B.h,A.h(s,r)),new A.l(18,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,c5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.M(A.c([A.d("02",A.a(["style",b1],s,r),a2),A.w(3,"Can you work with an existing product?",A.a(["style",d7],s,r)),A.d(u.d,A.a(["style",c9],s,r),a2)],m),1,8,new A.k(1,3,3,e),new A.k(8,22,30,o))],m),j),B.a,B.h,A.h(s,r)),new A.l(18,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,c5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.M(A.c([A.d("03",A.a(["style",b1],s,r),a2),A.w(3,"What happens after launch?",A.a(["style",d7],s,r)),A.d(u.j,A.a(["style",c9],s,r),a2)],m),1,8,new A.k(1,3,3,e),new A.k(8,22,30,o))],m),j),B.a,B.h,A.h(s,r)),new A.l(18,0,0,0))],m),j),B.a,B.h,A.h(s,r)),new A.l(75,28,75,28)),a2,c4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
q=A.e(A.c([A.d("NEXT STEP",A.a(["style",b1],s,r),a2),A.b(a2,12,a2),A.w(2,"Have something in mind?",A.a(["style",u.c],s,r))],m),j)
h=A.d(u.b,A.a(["style",b2],s,r),new A.k(14,14,14,o))
l=A.b(a2,16,a2)
d=A.c([A.d(d8,A.a(["style",b3],s,r),a2),A.b(a2,a2,14),A.d(b4,A.a(["style",b5],s,r),a2)],m)
b=A.a(["style",b6],s,r)
b=A.m(new A.o(A.e(d,j),B.a,B.e,b),new A.l(13,18,13,18))
b=A.e(A.c([f,c,g,k,p,A.f(B.b,"#E8ECF1",a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([new A.i(q,B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([h,l,new A.t(A.f(A.a(["style",b8],s,r),b7,5,b,a2,a2,a2,a2,a4,a2),a8,new A.hu(e6,i),a4,!1,A.a([a9,""],s,r))],m),j),B.a,B.f,A.h(s,r))],m),1,24,new A.k(1,2,2,e),new A.k(24,a2,36,o)),new A.l(62,28,62,28)),a2,c4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j)
l=A.e(A.c([A.d("SPARROW KIT",A.a(["style",b9],s,r),a2),A.b(a2,8,a2),A.d("Thoughtful software, built to last.",A.a(["style",c0],s,r),a2)],m),j)
h=t.P
q=A.c([A.d("Home",A.a(["style",d9],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,h))],m)
p=A.a(["style",a7],s,r)
p=A.m(new A.i(A.e(q,j),B.a,B.e,p),new A.l(10,10,10,10))
q=A.a([a9,""],s,r)
k=A.c([A.d(e0,A.a(["style",d9],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,h))],m)
g=A.a(["style",a7],s,r)
g=A.m(new A.i(A.e(k,j),B.a,B.e,g),new A.l(10,10,10,10))
k=A.a([a9,""],s,r)
c=A.c([A.d(e1,A.a(["style",d9],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,h))],m)
f=A.a(["style",a7],s,r)
f=A.m(new A.i(A.e(c,j),B.a,B.e,f),new A.l(10,10,10,10))
c=A.a([a9,""],s,r)
d=A.c([A.d("About",A.a(["style",d9],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,h))],m)
a=A.a(["style",a7],s,r)
a=A.m(new A.i(A.e(d,j),B.a,B.e,a),new A.l(10,10,10,10))
d=A.a([a9,""],s,r)
a0=A.c([A.d(d8,A.a(["style",d9],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,h))],m)
a1=A.a(["style",a7],s,r)
o=A.c([n,A.dK(new A.i(A.e(A.c([new A.i(b,B.a,B.h,A.h(s,r)),A.f(B.b,"#0D192B",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.M(A.c([new A.i(l,B.a,B.f,A.h(s,r)),A.cK(B.a,A.c([new A.t(p,a8,new A.hv(e6,i),a4,!1,q),new A.t(g,a8,new A.hw(e6,i),a4,!1,k),new A.t(f,a8,new A.hx(e6,i),a4,!1,c),new A.t(a,a8,new A.hy(e6,i),a4,!1,d),new A.t(A.m(new A.i(A.e(a0,j),B.a,B.e,a1),new A.l(10,10,10,10)),a8,new A.hz(e6,i),a4,!1,A.a([a9,""],s,r))],m),B.f,B.a,6,6)],m),1,20,new A.k(1,2,2,e),new A.k(20,a2,28,o)),A.b(a2,30,a2),A.f(B.b,c1,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.d(u.H,A.a(["style",c0],s,r),a2)],m),j),B.a,B.h,A.h(s,r)),new A.l(38,28,38,28)),a2,c4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j),B.a,B.h,A.h(s,r)),!1)],m)
e=A.a(["style","background-color:#F5F3EE"],s,r)
o=A.e(o,j)
a1=A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r)
a0=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.Y],s,r),a2)),34,a2,a2,a2,a4,34)
d=A.b(a2,a2,11)
a=A.c([A.d("SPARROW",A.a(["style",u.Z],s,r),a2),A.d(a6,A.a(["style",u.f],s,r),a2)],m)
c=A.a(["style",a7],s,r)
return new A.ay("sk_state_66471ad0_5001",new A.i(o,B.a,B.h,e),A.f(a1,a3,a2,new A.i(A.e(A.c([A.m(new A.o(A.e(A.c([new A.t(new A.o(A.e(A.c([a0,d,new A.i(A.e(a,j),B.a,B.f,c)],m),j),B.a,B.e,A.h(s,r)),a8,new A.hA(e6,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(A.d("CLOSE",A.a(["style",u.T],s,r),a2),new A.l(10,10,10,10)),a8,new A.hn(e6),a4,!1,A.a([a9,""],s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(28,20,24,26)),A.de("#D9DDE2",0,1,0,1),A.b(a2,16,a2),new A.t(A.m(new A.o(A.e(A.c([A.d("Home",A.a(["style",e2],s,r),a2),new A.o(A.e(A.c([A.A(A.d(e3,A.a(["style",e4],s,r),a2),new A.k(!0,!0,!0,h)),A.b(a2,a2,8),A.d(b4,A.a(["style",e5],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.ho(e6,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(e0,A.a(["style",e2],s,r),a2),new A.o(A.e(A.c([A.A(A.d(e3,A.a(["style",e4],s,r),a2),new A.k(!1,!1,!1,h)),A.b(a2,a2,8),A.d(b4,A.a(["style",e5],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hp(e6,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(e1,A.a(["style",e2],s,r),a2),new A.o(A.e(A.c([A.A(A.d(e3,A.a(["style",e4],s,r),a2),new A.k(!1,!1,!1,h)),A.b(a2,a2,8),A.d(b4,A.a(["style",e5],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hq(e6,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d("About",A.a(["style",e2],s,r),a2),new A.o(A.e(A.c([A.A(A.d(e3,A.a(["style",e4],s,r),a2),new A.k(!1,!1,!1,h)),A.b(a2,a2,8),A.d(b4,A.a(["style",e5],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hr(e6,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(d8,A.a(["style",e2],s,r),a2),new A.o(A.e(A.c([A.A(A.d(e3,A.a(["style",e4],s,r),a2),new A.k(!1,!1,!1,h)),A.b(a2,a2,8),A.d(b4,A.a(["style",e5],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hs(e6,i),a4,!1,A.a([a9,""],s,r)),A.b(a2,34,a2),A.m(A.d("THOUGHTFUL SOFTWARE, BUILT TO LAST.",A.a(["style",b1],s,r),a2),new A.l(26,26,26,26))],m),j),B.a,B.h,A.h(s,r)),a2,a2,a2,a2,"aside",340),e6,304)},
$S:10}
A.hk.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hl.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.hm.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.ht.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hu.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hv.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hw.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hx.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hy.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hz.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hA.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hn.prototype={
$1(a){this.a.si(!1)},
$S:0}
A.ho.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hp.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hq.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hr.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hs.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hR.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="#F5F3EE",a4="div",a5="#10213A",a6="DIGITAL STUDIO",a7="height:fit-content",a8="click",a9="data-sparrow-inkwell",b0="#4E79E8",b1=u.q,b2=u.U,b3=u.e,b4=1220,b5="#D8DCE1",b6='font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:20px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',b7=u.v,b8=u.l,b9="#34445B",c0=u.B,c1=u.J,c2="Contact",c3="\u2197",c4=u.I,c5="Services",c6="Solutions",c7=u.o,c8="CURRENT",c9=u.X,d0=u.t,d1=this.a.$1$2("sk_state_e8b6a0d6_5000",!1,t.y)
if(d1==null)d1=new A.a5(!1,A.al(t.B),t.L)
s=t.N
r=t.X
q=A.a(["role","banner","style",u.u],s,r)
p=A.b(a2,1,16)
o=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.g],s,r),a2)),34,a2,a2,a2,a4,34)
n=A.b(a2,a2,11)
m=t.U
l=A.c([A.d("SPARROW",A.a(["style",u._],s,r),a2),A.d(a6,A.a(["style",u.E],s,r),a2)],m)
k=A.a(["style",a7],s,r)
j=t.g
i=this.b
k=A.I(new A.t(new A.o(A.e(A.c([o,n,new A.i(A.e(l,j),B.a,B.f,k)],m),j),B.a,B.e,A.h(s,r)),a8,new A.hC(d1,i),a4,!1,A.a([a9,""],s,r)),1)
l=A.c([A.f(B.b,a5,a2,A.b(a2,0,0),2,a2,a2,a2,a4,17),A.b(a2,4,a2),A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,12)],m)
n=A.a(["style",a7],s,r)
n=A.f(q,a3,a2,new A.o(A.e(A.c([p,k,new A.o(A.e(A.c([new A.t(A.m(new A.o(A.e(A.c([new A.i(A.e(l,j),B.a,B.f,n),A.b(a2,a2,8),A.d("MENU",A.a(["style",u.s],s,r),a2)],m),j),B.a,B.e,A.h(s,r)),new A.l(10,8,10,8)),a8,new A.hD(d1),a4,!1,A.a([a9,""],s,r)),A.b(a2,a2,18)],m),j),B.a,B.h,B.b)],m),j),B.a,B.e,B.b),78,a2,a2,16,"header",a2)
l=t.x
k=t.G
p=A.f(B.b,a3,a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([new A.i(A.e(A.c([A.d("CAPABILITIES",A.a(["style",b1],s,r),a2),A.b(a2,18,a2),A.w(1,"The right expertise, at every stage.",A.a(["style",u.Q],s,r))],m),j),B.a,B.f,A.h(s,r)),A.m(A.d(b2,A.a(["style",b3],s,r),new A.k(17,17,17,l)),new A.l(38,0,0,0))],m),1,22,new A.k(1,2,2,k),new A.k(22,32,64,l)),new A.l(70,28,70,28)),a2,b4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
q=A.f(B.b,"#FCFBF8",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.d("OUR SERVICES",A.a(["style",b1],s,r),a2),A.b(a2,14,a2),A.w(2,"Connected expertise across the work.",A.a(["style",u.N],s,r)),A.b(a2,12,a2),A.d(b2,A.a(["style",b3],s,r),new A.k(16,16,16,l)),A.b(a2,38,a2),A.M(A.c([new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),new A.o(A.e(A.c([A.d("01",A.a(["style",b1],s,r),a2),A.b(a2,a2,18),A.I(new A.i(A.e(A.c([A.w(3,"Custom software",A.a(["style",b6],s,r)),A.b(a2,8,a2),A.d("Purpose-built applications that fit the way your business works.",A.a(["style",b7],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),new A.o(A.e(A.c([A.d("02",A.a(["style",b1],s,r),a2),A.b(a2,a2,18),A.I(new A.i(A.e(A.c([A.w(3,"Web applications",A.a(["style",b6],s,r)),A.b(a2,8,a2),A.d("Accessible, responsive digital experiences for modern teams.",A.a(["style",b7],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),new A.o(A.e(A.c([A.d("03",A.a(["style",b1],s,r),a2),A.b(a2,a2,18),A.I(new A.i(A.e(A.c([A.w(3,"Mobile applications",A.a(["style",b6],s,r)),A.b(a2,8,a2),A.d("Useful, intuitive experiences for people on the move.",A.a(["style",b7],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),new A.o(A.e(A.c([A.d("04",A.a(["style",b1],s,r),a2),A.b(a2,a2,18),A.I(new A.i(A.e(A.c([A.w(3,"UI / UX design",A.a(["style",b6],s,r)),A.b(a2,8,a2),A.d("Research-led interfaces that make complexity feel simple.",A.a(["style",b7],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),new A.o(A.e(A.c([A.d("05",A.a(["style",b1],s,r),a2),A.b(a2,a2,18),A.I(new A.i(A.e(A.c([A.w(3,"Enterprise solutions",A.a(["style",b6],s,r)),A.b(a2,8,a2),A.d("Connected systems designed around real operational needs.",A.a(["style",b7],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),new A.o(A.e(A.c([A.d("06",A.a(["style",b1],s,r),a2),A.b(a2,a2,18),A.I(new A.i(A.e(A.c([A.w(3,"Technical consulting",A.a(["style",b6],s,r)),A.b(a2,8,a2),A.d("Clear guidance for architecture, delivery and technology decisions.",A.a(["style",b7],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.f,A.h(s,r))],m),j),B.a,B.f,A.h(s,r))],m),1,25,new A.k(1,2,2,k),new A.k(25,25,34,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(72,28,72,28)),a2,b4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
o=A.f(B.b,"#0D192B",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.d("THE SPARROW APPROACH",A.a(["style",b8],s,r),a2),A.b(a2,18,a2),A.w(2,"A clear path from idea to impact.",A.a(["style",u.d9],s,r)),A.b(a2,12,a2),A.d(u.D,A.a(["style",u.C],s,r),new A.k(16,16,16,l)),A.b(a2,42,a2),A.M(A.c([new A.i(A.e(A.c([A.f(B.b,b9,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("01 / DISCOVER",A.a(["style",b8],s,r),a2),A.b(a2,20,a2),A.w(3,"Understand",A.a(["style",c0],s,r)),A.b(a2,8,a2),A.d(u.M,A.a(["style",c1],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b9,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("02 / DEFINE",A.a(["style",b8],s,r),a2),A.b(a2,20,a2),A.w(3,"Shape",A.a(["style",c0],s,r)),A.b(a2,8,a2),A.d(u.G,A.a(["style",c1],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b9,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("03 / BUILD",A.a(["style",b8],s,r),a2),A.b(a2,20,a2),A.w(3,"Deliver",A.a(["style",c0],s,r)),A.b(a2,8,a2),A.d(u.R,A.a(["style",c1],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,b9,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.d("04 / EVOLVE",A.a(["style",b8],s,r),a2),A.b(a2,20,a2),A.w(3,"Improve",A.a(["style",c0],s,r)),A.b(a2,8,a2),A.d(u.W,A.a(["style",c1],s,r),a2)],m),j),B.a,B.f,A.h(s,r))],m),1,26,new A.k(1,2,4,k),new A.k(26,25,28,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(82,28,82,28)),a2,b4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
h=A.e(A.c([A.d("NEXT STEP",A.a(["style",b1],s,r),a2),A.b(a2,12,a2),A.w(2,"Have something in mind?",A.a(["style",u.c],s,r))],m),j)
g=A.d(u.b,A.a(["style",b3],s,r),new A.k(14,14,14,l))
f=A.b(a2,16,a2)
e=A.c([A.d(c2,A.a(["style",u.a],s,r),a2),A.b(a2,a2,14),A.d(c3,A.a(["style",u.x],s,r),a2)],m)
d=A.a(["style","width:fit-content"],s,r)
d=A.m(new A.o(A.e(e,j),B.a,B.e,d),new A.l(13,18,13,18))
d=A.e(A.c([p,q,o,A.f(B.b,"#E8ECF1",a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([new A.i(h,B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([g,f,new A.t(A.f(A.a(["style",u.L],s,r),"#315ED1",5,d,a2,a2,a2,a2,a4,a2),a8,new A.hE(d1,i),a4,!1,A.a([a9,""],s,r))],m),j),B.a,B.f,A.h(s,r))],m),1,24,new A.k(1,2,2,k),new A.k(24,a2,36,l)),new A.l(62,28,62,28)),a2,b4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j)
f=A.e(A.c([A.d("SPARROW KIT",A.a(["style",b8],s,r),a2),A.b(a2,8,a2),A.d("Thoughtful software, built to last.",A.a(["style",c1],s,r),a2)],m),j)
g=t.P
h=A.c([A.d("Home",A.a(["style",c4],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,g))],m)
o=A.a(["style",a7],s,r)
o=A.m(new A.i(A.e(h,j),B.a,B.e,o),new A.l(10,10,10,10))
h=A.a([a9,""],s,r)
q=A.c([A.d(c5,A.a(["style",c4],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,g))],m)
p=A.a(["style",a7],s,r)
p=A.m(new A.i(A.e(q,j),B.a,B.e,p),new A.l(10,10,10,10))
q=A.a([a9,""],s,r)
e=A.c([A.d(c6,A.a(["style",c4],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,g))],m)
c=A.a(["style",a7],s,r)
c=A.m(new A.i(A.e(e,j),B.a,B.e,c),new A.l(10,10,10,10))
e=A.a([a9,""],s,r)
b=A.c([A.d("About",A.a(["style",c4],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,g))],m)
a=A.a(["style",a7],s,r)
a=A.m(new A.i(A.e(b,j),B.a,B.e,a),new A.l(10,10,10,10))
b=A.a([a9,""],s,r)
a0=A.c([A.d(c2,A.a(["style",c4],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,g))],m)
a1=A.a(["style",a7],s,r)
l=A.c([n,A.dK(new A.i(A.e(A.c([new A.i(d,B.a,B.h,A.h(s,r)),A.f(B.b,"#0D192B",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.M(A.c([new A.i(f,B.a,B.f,A.h(s,r)),A.cK(B.a,A.c([new A.t(o,a8,new A.hJ(d1,i),a4,!1,h),new A.t(p,a8,new A.hK(d1,i),a4,!1,q),new A.t(c,a8,new A.hL(d1,i),a4,!1,e),new A.t(a,a8,new A.hM(d1,i),a4,!1,b),new A.t(A.m(new A.i(A.e(a0,j),B.a,B.e,a1),new A.l(10,10,10,10)),a8,new A.hN(d1,i),a4,!1,A.a([a9,""],s,r))],m),B.f,B.a,6,6)],m),1,20,new A.k(1,2,2,k),new A.k(20,a2,28,l)),A.b(a2,30,a2),A.f(B.b,b9,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.d(u.H,A.a(["style",c1],s,r),a2)],m),j),B.a,B.h,A.h(s,r)),new A.l(38,28,38,28)),a2,b4,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j),B.a,B.h,A.h(s,r)),!1)],m)
k=A.a(["style","background-color:#F5F3EE"],s,r)
l=A.e(l,j)
a1=A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r)
a0=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.Y],s,r),a2)),34,a2,a2,a2,a4,34)
b=A.b(a2,a2,11)
a=A.c([A.d("SPARROW",A.a(["style",u.Z],s,r),a2),A.d(a6,A.a(["style",u.f],s,r),a2)],m)
e=A.a(["style",a7],s,r)
return new A.ay("sk_state_e9b6a269_5001",new A.i(l,B.a,B.h,k),A.f(a1,a3,a2,new A.i(A.e(A.c([A.m(new A.o(A.e(A.c([new A.t(new A.o(A.e(A.c([a0,b,new A.i(A.e(a,j),B.a,B.f,e)],m),j),B.a,B.e,A.h(s,r)),a8,new A.hO(d1,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(A.d("CLOSE",A.a(["style",u.T],s,r),a2),new A.l(10,10,10,10)),a8,new A.hP(d1),a4,!1,A.a([a9,""],s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(28,20,24,26)),A.de("#D9DDE2",0,1,0,1),A.b(a2,16,a2),new A.t(A.m(new A.o(A.e(A.c([A.d("Home",A.a(["style",c7],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c8,A.a(["style",c9],s,r),a2),new A.k(!1,!1,!1,g)),A.b(a2,a2,8),A.d(c3,A.a(["style",d0],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hQ(d1,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(c5,A.a(["style",c7],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c8,A.a(["style",c9],s,r),a2),new A.k(!0,!0,!0,g)),A.b(a2,a2,8),A.d(c3,A.a(["style",d0],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hF(d1,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(c6,A.a(["style",c7],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c8,A.a(["style",c9],s,r),a2),new A.k(!1,!1,!1,g)),A.b(a2,a2,8),A.d(c3,A.a(["style",d0],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hG(d1,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d("About",A.a(["style",c7],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c8,A.a(["style",c9],s,r),a2),new A.k(!1,!1,!1,g)),A.b(a2,a2,8),A.d(c3,A.a(["style",d0],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hH(d1,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(c2,A.a(["style",c7],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c8,A.a(["style",c9],s,r),a2),new A.k(!1,!1,!1,g)),A.b(a2,a2,8),A.d(c3,A.a(["style",d0],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.hI(d1,i),a4,!1,A.a([a9,""],s,r)),A.b(a2,34,a2),A.m(A.d("THOUGHTFUL SOFTWARE, BUILT TO LAST.",A.a(["style",b1],s,r),a2),new A.l(26,26,26,26))],m),j),B.a,B.h,A.h(s,r)),a2,a2,a2,a2,"aside",340),d1,304)},
$S:10}
A.hC.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hD.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.hE.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hJ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hK.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hL.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hM.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hN.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hO.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hP.prototype={
$1(a){this.a.si(!1)},
$S:0}
A.hQ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hF.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hG.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hH.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hI.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.i6.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="#F5F3EE",b5="div",b6="#10213A",b7="DIGITAL STUDIO",b8="height:fit-content",b9="click",c0="data-sparrow-inkwell",c1="#4E79E8",c2="SOLUTION CONCEPTS",c3=u.q,c4="These concepts show how software can help people make decisions, serve customers and move work forward.",c5=u.e,c6=1220,c7="#D8DCE1",c8='font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:25px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',c9=u.v,d0="#526780",d1="WORKSPACE / OVERVIEW",d2=u.y,d3="#233952",d4="#7488A2",d5="#14243B",d6="YOUR SERVICES",d7="How can we help?",d8=u.z,d9="#315ED1",e0="#FCFBF8",e1=u.P,e2=u.l,e3="#638BEA",e4="display:grid;align-items:end;justify-items:center;min-width:0;min-height:0",e5=u.J,e6=u.h,e7="Contact",e8="\u2197",e9=u.I,f0="Services",f1="Solutions",f2=u.o,f3="CURRENT",f4=u.X,f5=u.t,f6=this.a.$1$2("sk_state_eebf4dc6_5000",!1,t.y)
if(f6==null)f6=new A.a5(!1,A.al(t.B),t.L)
s=t.N
r=t.X
q=A.a(["role","banner","style",u.u],s,r)
p=A.b(b3,1,16)
o=A.f(B.b,b6,5,new A.F(A.d("S",A.a(["style",u.g],s,r),b3)),34,b3,b3,b3,b5,34)
n=A.b(b3,b3,11)
m=t.U
l=A.c([A.d("SPARROW",A.a(["style",u._],s,r),b3),A.d(b7,A.a(["style",u.E],s,r),b3)],m)
k=A.a(["style",b8],s,r)
j=t.g
i=this.b
k=A.I(new A.t(new A.o(A.e(A.c([o,n,new A.i(A.e(l,j),B.a,B.f,k)],m),j),B.a,B.e,A.h(s,r)),b9,new A.hS(f6,i),b5,!1,A.a([c0,""],s,r)),1)
l=A.c([A.f(B.b,b6,b3,A.b(b3,0,0),2,b3,b3,b3,b5,17),A.b(b3,4,b3),A.f(B.b,c1,b3,A.b(b3,0,0),2,b3,b3,b3,b5,12)],m)
n=A.a(["style",b8],s,r)
n=A.f(q,b4,b3,new A.o(A.e(A.c([p,k,new A.o(A.e(A.c([new A.t(A.m(new A.o(A.e(A.c([new A.i(A.e(l,j),B.a,B.f,n),A.b(b3,b3,8),A.d("MENU",A.a(["style",u.s],s,r),b3)],m),j),B.a,B.e,A.h(s,r)),new A.l(10,8,10,8)),b9,new A.hT(f6),b5,!1,A.a([c0,""],s,r)),A.b(b3,b3,18)],m),j),B.a,B.h,B.b)],m),j),B.a,B.e,B.b),78,b3,b3,16,"header",b3)
l=t.x
k=t.G
p=A.f(B.b,b4,b3,new A.F(A.f(B.b,b3,b3,A.m(A.M(A.c([new A.i(A.e(A.c([A.d(c2,A.a(["style",c3],s,r),b3),A.b(b3,18,b3),A.w(1,"Technology with a clear purpose.",A.a(["style",u.Q],s,r))],m),j),B.a,B.f,A.h(s,r)),A.m(A.d(c4,A.a(["style",c5],s,r),new A.k(17,17,17,l)),new A.l(38,0,0,0))],m),1,22,new A.k(1,2,2,k),new A.k(22,32,64,l)),new A.l(70,28,70,28)),b3,c6,b3,b3,b5,b3)),b3,b3,b3,b3,b5,b3)
q=A.d(c2,A.a(["style",c3],s,r),b3)
o=A.b(b3,14,b3)
h=A.w(2,"Ideas organized around real needs.",A.a(["style",u.N],s,r))
g=A.b(b3,13,b3)
f=A.d(c4,A.a(["style",c5],s,r),new A.k(16,16,16,l))
e=A.b(b3,39,b3)
d=A.e(A.c([A.f(B.b,c7,b3,A.b(b3,0,0),1,b3,b3,b3,b5,b3),A.b(b3,20,b3),A.M(A.c([new A.i(A.e(A.c([A.d("01",A.a(["style",c3],s,r),b3),A.b(b3,13,b3),A.w(3,"Operations platforms",A.a(["style",c8],s,r)),A.b(b3,10,b3),A.d("Bring processes, teams and information together in one place.",A.a(["style",c9],s,r),b3)],m),j),B.a,B.f,A.h(s,r)),A.f(B.b,d5,7,A.m(new A.o(A.e(A.c([A.f(B.b,"#20344F",4,A.m(new A.i(A.e(A.c([A.f(B.b,"#8DAAF2",b3,A.b(b3,0,0),15,b3,b3,b3,b5,15),A.b(b3,15,b3),A.f(B.b,d0,b3,A.b(b3,0,0),2,b3,b3,b3,b5,15),A.b(b3,12,b3),A.f(B.b,d0,b3,A.b(b3,0,0),2,b3,b3,b3,b5,15)],m),j),B.a,B.e,A.h(s,r)),new A.l(16,0,16,0)),b3,b3,b3,b3,b5,44),A.b(b3,b3,16),A.I(new A.i(A.e(A.c([A.d(d1,A.a(["style",d2],s,r),b3),A.b(b3,16,b3),A.b(new A.o(A.e(A.c([A.I(A.f(B.b,d3,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),1),A.b(b3,b3,8),A.I(A.f(B.b,d3,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),1),A.b(b3,b3,8),A.I(A.f(B.b,d3,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),1)],m),j),B.a,B.e,A.h(s,r)),35,b3),A.b(b3,12,b3),A.f(B.b,"#34475F",b3,A.b(b3,0,0),1,b3,b3,b3,b5,b3),A.b(b3,14,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,86),A.b(b3,10,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,64),A.b(b3,10,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,76),A.b(b3,10,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,48)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.e,A.h(s,r)),new A.l(18,18,18,18)),220,b3,b3,b3,b5,b3)],m),1,20,new A.k(1,2,2,k),new A.k(20,b3,40,l))],m),j)
c=A.b(b3,31,b3)
b=A.f(B.b,c7,b3,A.b(b3,0,0),1,b3,b3,b3,b5,b3)
a=A.b(b3,20,b3)
a0=A.e(A.c([A.d("02",A.a(["style",c3],s,r),b3),A.b(b3,13,b3),A.w(3,"Customer experiences",A.a(["style",c8],s,r)),A.b(b3,10,b3),A.d("Make essential services easier to find, use and trust.",A.a(["style",c9],s,r),b3)],m),j)
a1=A.m(new A.i(A.e(A.c([A.d(d6,A.a(["style",c3],s,r),b3),A.b(b3,13,b3),A.w(4,d7,A.a(["style",d8],s,r)),A.b(b3,12,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,90),A.b(b3,7,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,68),A.b(b3,15,b3),new A.o(A.e(A.c([A.I(A.b(A.f(B.b,d9,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),30,b3),1),A.b(b3,b3,7),A.I(A.b(A.f(B.b,"#E8ECF2",b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),30,b3),1)],m),j),B.a,B.e,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.l(16,16,16,16))
a1=A.e(A.c([b,a,A.M(A.c([new A.i(a0,B.a,B.f,A.h(s,r)),A.f(B.b,"#E0E6EC",7,new A.F(A.f(A.a(["style",e1],s,r),e0,5,a1,b3,b3,b3,b3,b5,205)),220,b3,b3,b3,b5,b3)],m),1,20,new A.k(1,2,2,k),new A.k(20,b3,40,l))],m),j)
a0=A.b(b3,31,b3)
a=A.f(B.b,c7,b3,A.b(b3,0,0),1,b3,b3,b3,b5,b3)
b=A.b(b3,20,b3)
a2=A.e(A.c([A.d("03",A.a(["style",c3],s,r),b3),A.b(b3,13,b3),A.w(3,"Data and reporting",A.a(["style",c8],s,r)),A.b(b3,10,b3),A.d("Turn operational data into useful, understandable insight.",A.a(["style",c9],s,r),b3)],m),j)
a3=A.d("REPORTING / OVERVIEW",A.a(["style",e2],s,r),b3)
a4=A.b(b3,16,b3)
a5=A.f(B.b,e3,2,A.b(b3,0,0),36,b3,b3,b3,b5,b3)
a5=A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,a5,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)
a6=A.f(B.b,e3,2,A.b(b3,0,0),62,b3,b3,b3,b5,b3)
a6=A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,a6,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)
a7=A.f(B.b,e3,2,A.b(b3,0,0),49,b3,b3,b3,b5,b3)
a7=A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,a7,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)
a8=A.f(B.b,e3,2,A.b(b3,0,0),88,b3,b3,b3,b5,b3)
a8=A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,a8,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)
a9=A.f(B.b,e3,2,A.b(b3,0,0),70,b3,b3,b3,b5,b3)
a9=A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,a9,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)
b0=A.f(B.b,e3,2,A.b(b3,0,0),104,b3,b3,b3,b5,b3)
b0=A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,b0,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)
b1=A.f(B.b,e3,2,A.b(b3,0,0),76,b3,b3,b3,b5,b3)
b1=A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,b1,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)
b2=A.f(B.b,e3,2,A.b(b3,0,0),120,b3,b3,b3,b5,b3)
b2=A.f(B.b,e0,b3,new A.F(A.f(B.b,b3,b3,A.m(new A.i(A.e(A.c([q,o,h,g,f,e,new A.i(d,B.a,B.h,A.h(s,r)),c,new A.i(a1,B.a,B.h,A.h(s,r)),a0,new A.i(A.e(A.c([a,b,A.M(A.c([new A.i(a2,B.a,B.f,A.h(s,r)),A.f(B.b,d5,7,A.m(new A.i(A.e(A.c([a3,a4,A.I(new A.o(A.e(A.c([a5,a6,a7,a8,a9,b0,b1,A.I(A.m(A.f(A.a(["style",e4],s,r),b3,b3,b2,b3,b3,b3,b3,b5,b3),new A.l(0,3,0,3)),1)],m),j),B.a,B.a1,A.h(s,r)),1),A.b(b3,13,b3),A.f(B.b,"#42536A",b3,A.b(b3,0,0),1,b3,b3,b3,b5,b3),A.b(b3,10,b3),A.d("A clearer view of what matters.",A.a(["style",e5],s,r),b3)],m),j),B.a,B.f,A.h(s,r)),new A.l(20,20,20,20)),190,b3,b3,b3,b5,b3)],m),1,20,new A.k(1,2,2,k),new A.k(20,b3,40,l))],m),j),B.a,B.h,A.h(s,r))],m),j),B.a,B.h,A.h(s,r)),new A.l(75,28,75,28)),b3,c6,b3,b3,b5,b3)),b3,b3,b3,b3,b5,b3)
b1=A.d("DEMONSTRATION CONCEPTS",A.a(["style",c3],s,r),b3)
b0=A.b(b3,15,b3)
a9=A.e(A.c([A.f(B.b,d5,7,A.m(new A.o(A.e(A.c([A.f(B.b,"#20344F",4,A.m(new A.i(A.e(A.c([A.f(B.b,"#8DAAF2",b3,A.b(b3,0,0),15,b3,b3,b3,b5,15),A.b(b3,15,b3),A.f(B.b,d0,b3,A.b(b3,0,0),2,b3,b3,b3,b5,15),A.b(b3,12,b3),A.f(B.b,d0,b3,A.b(b3,0,0),2,b3,b3,b3,b5,15)],m),j),B.a,B.e,A.h(s,r)),new A.l(16,0,16,0)),b3,b3,b3,b3,b5,44),A.b(b3,b3,16),A.I(new A.i(A.e(A.c([A.d(d1,A.a(["style",d2],s,r),b3),A.b(b3,16,b3),A.b(new A.o(A.e(A.c([A.I(A.f(B.b,d3,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),1),A.b(b3,b3,8),A.I(A.f(B.b,d3,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),1),A.b(b3,b3,8),A.I(A.f(B.b,d3,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),1)],m),j),B.a,B.e,A.h(s,r)),35,b3),A.b(b3,12,b3),A.f(B.b,"#34475F",b3,A.b(b3,0,0),1,b3,b3,b3,b5,b3),A.b(b3,14,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,86),A.b(b3,10,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,64),A.b(b3,10,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,76),A.b(b3,10,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,48)],m),j),B.a,B.f,A.h(s,r)),1)],m),j),B.a,B.e,A.h(s,r)),new A.l(18,18,18,18)),220,b3,b3,b3,b5,b3),A.b(b3,22,b3),A.d("DEMO / OPERATIONS",A.a(["style",c3],s,r),b3),A.b(b3,10,b3),A.w(3,"A clearer view of work",A.a(["style",e6],s,r)),A.b(b3,8,b3),A.d(u.p,A.a(["style",c9],s,r),b3)],m),j)
a8=A.m(new A.i(A.e(A.c([A.d(d6,A.a(["style",c3],s,r),b3),A.b(b3,13,b3),A.w(4,d7,A.a(["style",d8],s,r)),A.b(b3,12,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,90),A.b(b3,7,b3),A.f(B.b,d4,b3,A.b(b3,0,0),5,b3,b3,b3,b5,68),A.b(b3,15,b3),new A.o(A.e(A.c([A.I(A.b(A.f(B.b,d9,b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),30,b3),1),A.b(b3,b3,7),A.I(A.b(A.f(B.b,"#E8ECF2",b3,A.b(b3,0,0),b3,b3,b3,b3,b5,b3),30,b3),1)],m),j),B.a,B.e,A.h(s,r))],m),j),B.a,B.f,A.h(s,r)),new A.l(16,16,16,16))
a8=A.f(B.b,"#EBEEF1",b3,new A.F(A.f(B.b,b3,b3,A.m(new A.i(A.e(A.c([b1,b0,A.M(A.c([new A.i(a9,B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([A.f(B.b,"#E0E6EC",7,new A.F(A.f(A.a(["style",e1],s,r),e0,5,a8,b3,b3,b3,b3,b5,205)),220,b3,b3,b3,b5,b3),A.b(b3,22,b3),A.d("DEMO / CUSTOMER EXPERIENCE",A.a(["style",c3],s,r),b3),A.b(b3,10,b3),A.w(3,"Services made more accessible",A.a(["style",e6],s,r)),A.b(b3,8,b3),A.d(u.O,A.a(["style",c9],s,r),b3)],m),j),B.a,B.f,A.h(s,r))],m),1,34,new A.k(1,2,2,k),new A.k(34,28,40,l)),A.b(b3,24,b3),A.d(u.m,A.a(["style",c9],s,r),b3)],m),j),B.a,B.h,A.h(s,r)),new A.l(82,28,82,28)),b3,c6,b3,b3,b5,b3)),b3,b3,b3,b3,b5,b3)
a9=A.e(A.c([A.d("NEXT STEP",A.a(["style",c3],s,r),b3),A.b(b3,12,b3),A.w(2,"Have something in mind?",A.a(["style",u.c],s,r))],m),j)
b0=A.d(u.b,A.a(["style",c5],s,r),new A.k(14,14,14,l))
b1=A.b(b3,16,b3)
a7=A.c([A.d(e7,A.a(["style",u.a],s,r),b3),A.b(b3,b3,14),A.d(e8,A.a(["style",u.x],s,r),b3)],m)
a6=A.a(["style","width:fit-content"],s,r)
a6=A.m(new A.o(A.e(a7,j),B.a,B.e,a6),new A.l(13,18,13,18))
a6=A.e(A.c([p,b2,a8,A.f(B.b,"#E8ECF1",b3,new A.F(A.f(B.b,b3,b3,A.m(A.M(A.c([new A.i(a9,B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([b0,b1,new A.t(A.f(A.a(["style",u.L],s,r),d9,5,a6,b3,b3,b3,b3,b5,b3),b9,new A.hU(f6,i),b5,!1,A.a([c0,""],s,r))],m),j),B.a,B.f,A.h(s,r))],m),1,24,new A.k(1,2,2,k),new A.k(24,b3,36,l)),new A.l(62,28,62,28)),b3,c6,b3,b3,b5,b3)),b3,b3,b3,b3,b5,b3)],m),j)
b1=A.e(A.c([A.d("SPARROW KIT",A.a(["style",e2],s,r),b3),A.b(b3,8,b3),A.d("Thoughtful software, built to last.",A.a(["style",e5],s,r),b3)],m),j)
b0=t.P
a9=A.c([A.d("Home",A.a(["style",e9],s,r),b3),A.b(b3,5,b3),A.A(A.f(B.b,c1,b3,A.b(b3,0,0),2,b3,b3,b3,b5,18),new A.k(!1,!1,!1,b0))],m)
a8=A.a(["style",b8],s,r)
a8=A.m(new A.i(A.e(a9,j),B.a,B.e,a8),new A.l(10,10,10,10))
a9=A.a([c0,""],s,r)
b2=A.c([A.d(f0,A.a(["style",e9],s,r),b3),A.b(b3,5,b3),A.A(A.f(B.b,c1,b3,A.b(b3,0,0),2,b3,b3,b3,b5,18),new A.k(!1,!1,!1,b0))],m)
p=A.a(["style",b8],s,r)
p=A.m(new A.i(A.e(b2,j),B.a,B.e,p),new A.l(10,10,10,10))
b2=A.a([c0,""],s,r)
a7=A.c([A.d(f1,A.a(["style",e9],s,r),b3),A.b(b3,5,b3),A.A(A.f(B.b,c1,b3,A.b(b3,0,0),2,b3,b3,b3,b5,18),new A.k(!1,!1,!1,b0))],m)
a5=A.a(["style",b8],s,r)
a5=A.m(new A.i(A.e(a7,j),B.a,B.e,a5),new A.l(10,10,10,10))
a7=A.a([c0,""],s,r)
a4=A.c([A.d("About",A.a(["style",e9],s,r),b3),A.b(b3,5,b3),A.A(A.f(B.b,c1,b3,A.b(b3,0,0),2,b3,b3,b3,b5,18),new A.k(!1,!1,!1,b0))],m)
a3=A.a(["style",b8],s,r)
a3=A.m(new A.i(A.e(a4,j),B.a,B.e,a3),new A.l(10,10,10,10))
a4=A.a([c0,""],s,r)
a2=A.c([A.d(e7,A.a(["style",e9],s,r),b3),A.b(b3,5,b3),A.A(A.f(B.b,c1,b3,A.b(b3,0,0),2,b3,b3,b3,b5,18),new A.k(!1,!1,!1,b0))],m)
b=A.a(["style",b8],s,r)
l=A.c([n,A.dK(new A.i(A.e(A.c([new A.i(a6,B.a,B.h,A.h(s,r)),A.f(B.b,"#0D192B",b3,new A.F(A.f(B.b,b3,b3,A.m(new A.i(A.e(A.c([A.M(A.c([new A.i(b1,B.a,B.f,A.h(s,r)),A.cK(B.a,A.c([new A.t(a8,b9,new A.hZ(f6,i),b5,!1,a9),new A.t(p,b9,new A.i_(f6,i),b5,!1,b2),new A.t(a5,b9,new A.i0(f6,i),b5,!1,a7),new A.t(a3,b9,new A.i1(f6,i),b5,!1,a4),new A.t(A.m(new A.i(A.e(a2,j),B.a,B.e,b),new A.l(10,10,10,10)),b9,new A.i2(f6,i),b5,!1,A.a([c0,""],s,r))],m),B.f,B.a,6,6)],m),1,20,new A.k(1,2,2,k),new A.k(20,b3,28,l)),A.b(b3,30,b3),A.f(B.b,"#34445B",b3,A.b(b3,0,0),1,b3,b3,b3,b5,b3),A.b(b3,16,b3),A.d(u.H,A.a(["style",e5],s,r),b3)],m),j),B.a,B.h,A.h(s,r)),new A.l(38,28,38,28)),b3,c6,b3,b3,b5,b3)),b3,b3,b3,b3,b5,b3)],m),j),B.a,B.h,A.h(s,r)),!1)],m)
k=A.a(["style","background-color:#F5F3EE"],s,r)
l=A.e(l,j)
b=A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r)
a2=A.f(B.b,b6,5,new A.F(A.d("S",A.a(["style",u.Y],s,r),b3)),34,b3,b3,b3,b5,34)
a4=A.b(b3,b3,11)
a3=A.c([A.d("SPARROW",A.a(["style",u.Z],s,r),b3),A.d(b7,A.a(["style",u.f],s,r),b3)],m)
a7=A.a(["style",b8],s,r)
return new A.ay("sk_state_efbf4f59_5001",new A.i(l,B.a,B.h,k),A.f(b,b4,b3,new A.i(A.e(A.c([A.m(new A.o(A.e(A.c([new A.t(new A.o(A.e(A.c([a2,a4,new A.i(A.e(a3,j),B.a,B.f,a7)],m),j),B.a,B.e,A.h(s,r)),b9,new A.i3(f6,i),b5,!1,A.a([c0,""],s,r)),new A.t(A.m(A.d("CLOSE",A.a(["style",u.T],s,r),b3),new A.l(10,10,10,10)),b9,new A.i4(f6),b5,!1,A.a([c0,""],s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(28,20,24,26)),A.de("#D9DDE2",0,1,0,1),A.b(b3,16,b3),new A.t(A.m(new A.o(A.e(A.c([A.d("Home",A.a(["style",f2],s,r),b3),new A.o(A.e(A.c([A.A(A.d(f3,A.a(["style",f4],s,r),b3),new A.k(!1,!1,!1,b0)),A.b(b3,b3,8),A.d(e8,A.a(["style",f5],s,r),b3)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),b9,new A.i5(f6,i),b5,!1,A.a([c0,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(f0,A.a(["style",f2],s,r),b3),new A.o(A.e(A.c([A.A(A.d(f3,A.a(["style",f4],s,r),b3),new A.k(!1,!1,!1,b0)),A.b(b3,b3,8),A.d(e8,A.a(["style",f5],s,r),b3)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),b9,new A.hV(f6,i),b5,!1,A.a([c0,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(f1,A.a(["style",f2],s,r),b3),new A.o(A.e(A.c([A.A(A.d(f3,A.a(["style",f4],s,r),b3),new A.k(!0,!0,!0,b0)),A.b(b3,b3,8),A.d(e8,A.a(["style",f5],s,r),b3)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),b9,new A.hW(f6,i),b5,!1,A.a([c0,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d("About",A.a(["style",f2],s,r),b3),new A.o(A.e(A.c([A.A(A.d(f3,A.a(["style",f4],s,r),b3),new A.k(!1,!1,!1,b0)),A.b(b3,b3,8),A.d(e8,A.a(["style",f5],s,r),b3)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),b9,new A.hX(f6,i),b5,!1,A.a([c0,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(e7,A.a(["style",f2],s,r),b3),new A.o(A.e(A.c([A.A(A.d(f3,A.a(["style",f4],s,r),b3),new A.k(!1,!1,!1,b0)),A.b(b3,b3,8),A.d(e8,A.a(["style",f5],s,r),b3)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),b9,new A.hY(f6,i),b5,!1,A.a([c0,""],s,r)),A.b(b3,34,b3),A.m(A.d("THOUGHTFUL SOFTWARE, BUILT TO LAST.",A.a(["style",c3],s,r),b3),new A.l(26,26,26,26))],m),j),B.a,B.h,A.h(s,r)),b3,b3,b3,b3,"aside",340),f6,304)},
$S:10}
A.hS.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hT.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.hU.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hZ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.i_.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.i0.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.i1.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.i2.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.i3.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.i4.prototype={
$1(a){this.a.si(!1)},
$S:0}
A.i5.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hV.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hW.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hX.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hY.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.io.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="#F5F3EE",a4="div",a5="#10213A",a6="DIGITAL STUDIO",a7="height:fit-content",a8="click",a9="data-sparrow-inkwell",b0="#4E79E8",b1=u.q,b2=u.e,b3=1220,b4=u.l,b5="#D8DCE1",b6='font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:18px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',b7=u.v,b8=u.A,b9="Contact",c0="\u2197",c1=u.J,c2=u.I,c3="Services",c4="Solutions",c5=u.o,c6="CURRENT",c7=u.X,c8=u.t,c9=this.a.$1$2("sk_state_993a72d0_5000",!1,t.y)
if(c9==null)c9=new A.a5(!1,A.al(t.B),t.L)
s=t.N
r=t.X
q=A.a(["role","banner","style",u.u],s,r)
p=A.b(a2,1,16)
o=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.g],s,r),a2)),34,a2,a2,a2,a4,34)
n=A.b(a2,a2,11)
m=t.U
l=A.c([A.d("SPARROW",A.a(["style",u._],s,r),a2),A.d(a6,A.a(["style",u.E],s,r),a2)],m)
k=A.a(["style",a7],s,r)
j=t.g
i=this.b
k=A.I(new A.t(new A.o(A.e(A.c([o,n,new A.i(A.e(l,j),B.a,B.f,k)],m),j),B.a,B.e,A.h(s,r)),a8,new A.i7(c9,i),a4,!1,A.a([a9,""],s,r)),1)
l=A.c([A.f(B.b,a5,a2,A.b(a2,0,0),2,a2,a2,a2,a4,17),A.b(a2,4,a2),A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,12)],m)
n=A.a(["style",a7],s,r)
n=A.f(q,a3,a2,new A.o(A.e(A.c([p,k,new A.o(A.e(A.c([new A.t(A.m(new A.o(A.e(A.c([new A.i(A.e(l,j),B.a,B.f,n),A.b(a2,a2,8),A.d("MENU",A.a(["style",u.s],s,r),a2)],m),j),B.a,B.e,A.h(s,r)),new A.l(10,8,10,8)),a8,new A.i8(c9),a4,!1,A.a([a9,""],s,r)),A.b(a2,a2,18)],m),j),B.a,B.h,B.b)],m),j),B.a,B.e,B.b),78,a2,a2,16,"header",a2)
l=t.x
k=t.G
p=A.f(B.b,a3,a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([new A.i(A.e(A.c([A.d("ABOUT SPARROW KIT",A.a(["style",b1],s,r),a2),A.b(a2,18,a2),A.w(1,"Technology should make work better.",A.a(["style",u.Q],s,r))],m),j),B.a,B.f,A.h(s,r)),A.m(A.d("Sparrow Kit is a technology company concept built around a simple belief: the best digital products combine human understanding with disciplined engineering.",A.a(["style",b2],s,r),new A.k(17,17,17,l)),new A.l(38,0,0,0))],m),1,22,new A.k(1,2,2,k),new A.k(22,32,64,l)),new A.l(70,28,70,28)),a2,b3,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
q=A.f(B.b,"#0D192B",a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([A.d("A POINT OF VIEW",A.a(["style",b4],s,r),a2),new A.i(A.e(A.c([A.w(2,"People first.\nSystems with purpose.",A.a(["style",'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:33px;letter-spacing:-0.8px;line-height:1.14;color:#F8F7F2;font-weight:600'],s,r)),A.b(a2,18,a2),A.d("Our philosophy is to listen carefully, communicate openly and build with the people who will use and maintain the result in mind.",A.a(["style",u.C],s,r),new A.k(16,16,16,l))],m),j),B.a,B.f,A.h(s,r))],m),1,24,new A.k(1,2,2,k),new A.k(24,a2,56,l)),new A.l(82,28,82,28)),a2,b3,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
o=A.f(B.b,a3,a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.d("OUR APPROACH",A.a(["style",b1],s,r),a2),A.b(a2,14,a2),A.w(2,"Built for today. Ready for tomorrow.",A.a(["style",u.N],s,r)),A.b(a2,12,a2),A.d(u.D,A.a(["style",b2],s,r),new A.k(16,16,16,l)),A.b(a2,36,a2),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.M(A.c([A.d("01",A.a(["style",b1],s,r),a2),A.w(3,"Engineering quality",A.a(["style",b6],s,r)),A.d("Careful implementation and testing are part of the work, not an afterthought.",A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,20,28,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(19,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.M(A.c([A.d("02",A.a(["style",b1],s,r),a2),A.w(3,"Scalable architecture",A.a(["style",b6],s,r)),A.d("Practical foundations leave room for products and teams to grow.",A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,20,28,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(19,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.M(A.c([A.d("03",A.a(["style",b1],s,r),a2),A.w(3,"Business-first delivery",A.a(["style",b6],s,r)),A.d("Technical choices are grounded in the outcome you need.",A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,20,28,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(19,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.M(A.c([A.d("04",A.a(["style",b1],s,r),a2),A.w(3,"Reliable collaboration",A.a(["style",b6],s,r)),A.d("Open communication keeps decisions clear and progress visible.",A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,20,28,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(19,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,15,a2),A.M(A.c([A.d("05",A.a(["style",b1],s,r),a2),A.w(3,"Long-term maintainability",A.a(["style",b6],s,r)),A.d("Readable systems and thoughtful handovers support what comes next.",A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,20,28,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(19,0,0,0))],m),j),B.a,B.h,A.h(s,r)),new A.l(76,28,76,28)),a2,b3,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
h=A.f(B.b,"#FCFBF8",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.d("FAQ",A.a(["style",b1],s,r),a2),A.b(a2,13,a2),A.w(2,"A few useful answers.",A.a(["style",u.F],s,r)),A.b(a2,28,a2),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.M(A.c([A.d("01",A.a(["style",b1],s,r),a2),A.w(3,u.n,A.a(["style",b8],s,r)),A.d(u.k,A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,22,30,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(18,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.M(A.c([A.d("02",A.a(["style",b1],s,r),a2),A.w(3,"Can you work with an existing product?",A.a(["style",b8],s,r)),A.d(u.d,A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,22,30,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(18,0,0,0)),A.m(new A.i(A.e(A.c([A.f(B.b,b5,a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.M(A.c([A.d("03",A.a(["style",b1],s,r),a2),A.w(3,"What happens after launch?",A.a(["style",b8],s,r)),A.d(u.j,A.a(["style",b7],s,r),a2)],m),1,8,new A.k(1,3,3,k),new A.k(8,22,30,l))],m),j),B.a,B.h,A.h(s,r)),new A.l(18,0,0,0))],m),j),B.a,B.h,A.h(s,r)),new A.l(75,28,75,28)),a2,b3,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
g=A.e(A.c([A.d("NEXT STEP",A.a(["style",b1],s,r),a2),A.b(a2,12,a2),A.w(2,"Have something in mind?",A.a(["style",u.c],s,r))],m),j)
f=A.d(u.b,A.a(["style",b2],s,r),new A.k(14,14,14,l))
e=A.b(a2,16,a2)
d=A.c([A.d(b9,A.a(["style",u.a],s,r),a2),A.b(a2,a2,14),A.d(c0,A.a(["style",u.x],s,r),a2)],m)
c=A.a(["style","width:fit-content"],s,r)
c=A.m(new A.o(A.e(d,j),B.a,B.e,c),new A.l(13,18,13,18))
c=A.e(A.c([p,q,o,h,A.f(B.b,"#E8ECF1",a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([new A.i(g,B.a,B.f,A.h(s,r)),new A.i(A.e(A.c([f,e,new A.t(A.f(A.a(["style",u.L],s,r),"#315ED1",5,c,a2,a2,a2,a2,a4,a2),a8,new A.i9(c9,i),a4,!1,A.a([a9,""],s,r))],m),j),B.a,B.f,A.h(s,r))],m),1,24,new A.k(1,2,2,k),new A.k(24,a2,36,l)),new A.l(62,28,62,28)),a2,b3,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j)
e=A.e(A.c([A.d("SPARROW KIT",A.a(["style",b4],s,r),a2),A.b(a2,8,a2),A.d("Thoughtful software, built to last.",A.a(["style",c1],s,r),a2)],m),j)
f=t.P
g=A.c([A.d("Home",A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,f))],m)
h=A.a(["style",a7],s,r)
h=A.m(new A.i(A.e(g,j),B.a,B.e,h),new A.l(10,10,10,10))
g=A.a([a9,""],s,r)
o=A.c([A.d(c3,A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,f))],m)
q=A.a(["style",a7],s,r)
q=A.m(new A.i(A.e(o,j),B.a,B.e,q),new A.l(10,10,10,10))
o=A.a([a9,""],s,r)
p=A.c([A.d(c4,A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,f))],m)
d=A.a(["style",a7],s,r)
d=A.m(new A.i(A.e(p,j),B.a,B.e,d),new A.l(10,10,10,10))
p=A.a([a9,""],s,r)
b=A.c([A.d("About",A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,f))],m)
a=A.a(["style",a7],s,r)
a=A.m(new A.i(A.e(b,j),B.a,B.e,a),new A.l(10,10,10,10))
b=A.a([a9,""],s,r)
a0=A.c([A.d(b9,A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,f))],m)
a1=A.a(["style",a7],s,r)
l=A.c([n,A.dK(new A.i(A.e(A.c([new A.i(c,B.a,B.h,A.h(s,r)),A.f(B.b,"#0D192B",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.M(A.c([new A.i(e,B.a,B.f,A.h(s,r)),A.cK(B.a,A.c([new A.t(h,a8,new A.ie(c9,i),a4,!1,g),new A.t(q,a8,new A.ig(c9,i),a4,!1,o),new A.t(d,a8,new A.ih(c9,i),a4,!1,p),new A.t(a,a8,new A.ii(c9,i),a4,!1,b),new A.t(A.m(new A.i(A.e(a0,j),B.a,B.e,a1),new A.l(10,10,10,10)),a8,new A.ij(c9,i),a4,!1,A.a([a9,""],s,r))],m),B.f,B.a,6,6)],m),1,20,new A.k(1,2,2,k),new A.k(20,a2,28,l)),A.b(a2,30,a2),A.f(B.b,"#34445B",a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.d(u.H,A.a(["style",c1],s,r),a2)],m),j),B.a,B.h,A.h(s,r)),new A.l(38,28,38,28)),a2,b3,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j),B.a,B.h,A.h(s,r)),!1)],m)
k=A.a(["style","background-color:#F5F3EE"],s,r)
l=A.e(l,j)
a1=A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r)
a0=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.Y],s,r),a2)),34,a2,a2,a2,a4,34)
b=A.b(a2,a2,11)
a=A.c([A.d("SPARROW",A.a(["style",u.Z],s,r),a2),A.d(a6,A.a(["style",u.f],s,r),a2)],m)
p=A.a(["style",a7],s,r)
return new A.ay("sk_state_9a3a7463_5001",new A.i(l,B.a,B.h,k),A.f(a1,a3,a2,new A.i(A.e(A.c([A.m(new A.o(A.e(A.c([new A.t(new A.o(A.e(A.c([a0,b,new A.i(A.e(a,j),B.a,B.f,p)],m),j),B.a,B.e,A.h(s,r)),a8,new A.ik(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(A.d("CLOSE",A.a(["style",u.T],s,r),a2),new A.l(10,10,10,10)),a8,new A.il(c9),a4,!1,A.a([a9,""],s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(28,20,24,26)),A.de("#D9DDE2",0,1,0,1),A.b(a2,16,a2),new A.t(A.m(new A.o(A.e(A.c([A.d("Home",A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,f)),A.b(a2,a2,8),A.d(c0,A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.im(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(c3,A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,f)),A.b(a2,a2,8),A.d(c0,A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.ia(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(c4,A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,f)),A.b(a2,a2,8),A.d(c0,A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.ib(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d("About",A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!0,!0,!0,f)),A.b(a2,a2,8),A.d(c0,A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.ic(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(b9,A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,f)),A.b(a2,a2,8),A.d(c0,A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.id(c9,i),a4,!1,A.a([a9,""],s,r)),A.b(a2,34,a2),A.m(A.d("THOUGHTFUL SOFTWARE, BUILT TO LAST.",A.a(["style",b1],s,r),a2),new A.l(26,26,26,26))],m),j),B.a,B.h,A.h(s,r)),a2,a2,a2,a2,"aside",340),c9,304)},
$S:10}
A.i7.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.i8.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.i9.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.ie.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.ig.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.ih.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.ii.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.ij.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.ik.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.il.prototype={
$1(a){this.a.si(!1)},
$S:0}
A.im.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.ia.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.ib.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.ic.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.id.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.iD.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="#F5F3EE",a4="div",a5="#10213A",a6="DIGITAL STUDIO",a7="height:fit-content",a8="click",a9="data-sparrow-inkwell",b0="#4E79E8",b1=u.q,b2=u.l,b3=u.J,b4="#FCFBF8",b5="1px solid #CCD2DA",b6="2px solid #315ED1",b7="1px solid #B3261E",b8="2px solid #B3261E",b9="data-sparrow-material-control",c0="data-sparrow-material-filled",c1="data-sparrow-material-custom-border",c2=u.I,c3="Services",c4="Solutions",c5=u.o,c6="CURRENT",c7=u.X,c8=u.t,c9=this.a.$1$2("sk_state_b4c213b2_5000",!1,t.y)
if(c9==null)c9=new A.a5(!1,A.al(t.B),t.L)
s=t.N
r=t.X
q=A.a(["role","banner","style",u.u],s,r)
p=A.b(a2,1,16)
o=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.g],s,r),a2)),34,a2,a2,a2,a4,34)
n=A.b(a2,a2,11)
m=t.U
l=A.c([A.d("SPARROW",A.a(["style",u._],s,r),a2),A.d(a6,A.a(["style",u.E],s,r),a2)],m)
k=A.a(["style",a7],s,r)
j=t.g
i=this.b
k=A.I(new A.t(new A.o(A.e(A.c([o,n,new A.i(A.e(l,j),B.a,B.f,k)],m),j),B.a,B.e,A.h(s,r)),a8,new A.ip(c9,i),a4,!1,A.a([a9,""],s,r)),1)
l=A.c([A.f(B.b,a5,a2,A.b(a2,0,0),2,a2,a2,a2,a4,17),A.b(a2,4,a2),A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,12)],m)
n=A.a(["style",a7],s,r)
n=A.f(q,a3,a2,new A.o(A.e(A.c([p,k,new A.o(A.e(A.c([new A.t(A.m(new A.o(A.e(A.c([new A.i(A.e(l,j),B.a,B.f,n),A.b(a2,a2,8),A.d("MENU",A.a(["style",u.s],s,r),a2)],m),j),B.a,B.e,A.h(s,r)),new A.l(10,8,10,8)),a8,new A.iq(c9),a4,!1,A.a([a9,""],s,r)),A.b(a2,a2,18)],m),j),B.a,B.h,B.b)],m),j),B.a,B.e,B.b),78,a2,a2,16,"header",a2)
l=t.x
k=t.G
p=A.f(B.b,a3,a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([new A.i(A.e(A.c([A.d("CONTACT",A.a(["style",b1],s,r),a2),A.b(a2,18,a2),A.w(1,"Have something in mind?",A.a(["style",u.Q],s,r))],m),j),B.a,B.f,A.h(s,r)),A.m(A.d("Tell us about the challenge, the opportunity or the idea you are exploring. This page and its form are a demonstration only.",A.a(["style",u.e],s,r),new A.k(17,17,17,l)),new A.l(38,0,0,0))],m),1,22,new A.k(1,2,2,k),new A.k(22,32,64,l)),new A.l(70,28,70,28)),a2,1220,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)
q=A.f(B.b,"#0D192B",7,A.m(new A.i(A.e(A.c([A.d("A NOTE BEFORE YOU WRITE",A.a(["style",b2],s,r),a2),A.b(a2,18,a2),A.w(2,"A clear starting point.",A.a(["style",'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:25px;letter-spacing:-0.8px;line-height:1.14;color:#F8F7F2;font-weight:600'],s,r)),A.b(a2,13,a2),A.d("The details below are placeholders. This demonstration does not send or store messages.",A.a(["style",u.C],s,r),new A.k(14,14,14,l)),A.b(a2,25,a2),A.f(B.b,"#34445B",a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,17,a2),A.d("EMAIL",A.a(["style",b2],s,r),a2),A.b(a2,6,a2),A.d("contact@example.com",A.a(["style",'font-family:"Manrope",sans-serif;font-size:14px;font-weight:600;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#F5F3EE'],s,r),a2),A.b(a2,19,a2),A.d("BUSINESS CONTACT",A.a(["style",b2],s,r),a2),A.b(a2,6,a2),A.d("Placeholder contact",A.a(["style",b3],s,r),a2)],m),j),B.a,B.f,A.h(s,r)),new A.l(27,27,27,27)),a2,a2,a2,a2,a4,a2)
o=A.m(new A.i(A.e(A.c([A.d("FORM PREVIEW",A.a(["style",b1],s,r),a2),A.b(a2,12,a2),A.w(2,"Contact form preview",A.a(["style",u.h],s,r)),A.b(a2,8,a2),A.d("This form is a visual preview and is not connected to a service.",A.a(["style",u.v],s,r),a2),A.b(a2,22,a2),A.jt(A.a(["type","text",b9,"text-field",c0,"true",c1,""],s,r),b5,4,!0,b7,4,B.D,a2,b4,!0,b6,4,b8,4,B.C,"A name helps illustrate the form layout.",B.B,"sk_state_3ff11a01_5504",a2,"Name",B.E,a2,a2,"Your name",a2,a2,B.F,a2,a2),A.b(a2,13,a2),A.jt(A.a(["type","email",b9,"text-field",c0,"true",c1,""],s,r),b5,4,!0,b7,4,B.D,a2,b4,!0,b6,4,b8,4,B.C,"No address is sent or stored.",B.B,"sk_state_9d7f85a9_5504",a2,"Email",B.E,a2,a2,"you@example.com",a2,a2,B.F,a2,a2),A.b(a2,13,a2),A.jt(A.a(["type","text",b9,"text-field",c0,"true",c1,""],s,r),b5,4,!0,b7,4,B.D,a2,b4,!0,b6,4,b8,4,B.C,"This example field does not submit.",B.B,"sk_state_a7f5b3c4_5504",a2,"Project",B.E,a2,a2,"What are you considering?",a2,a2,B.F,a2,a2),A.b(a2,17,a2),new A.t(A.d("Sending is not enabled",A.a(["style",'font-family:"Manrope",sans-serif;font-size:12px;font-weight:600;letter-spacing:var(--sparrow-material-text-label-large-letter-spacing,0px);line-height:var(--sparrow-material-text-label-large-line-height,normal);color:inherit'],s,r),a2),a8,a2,"button",!0,A.a(["data-sparrow-variant","outlined","data-sparrow-material-button","outlined"],s,r))],m),j),B.a,B.f,A.h(s,r)),new A.l(27,27,27,27))
o=A.e(A.c([p,A.f(B.b,"#EBEEF1",a2,new A.F(A.f(B.b,a2,a2,A.m(A.M(A.c([q,A.f(A.a(["style","border:1px solid #D9DDE2"],s,r),b4,7,o,a2,a2,a2,a2,a4,a2)],m),1,20,new A.k(1,2,2,k),new A.k(20,24,34,l)),new A.l(60,28,60,28)),a2,1220,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j)
q=A.e(A.c([A.d("SPARROW KIT",A.a(["style",b2],s,r),a2),A.b(a2,8,a2),A.d("Thoughtful software, built to last.",A.a(["style",b3],s,r),a2)],m),j)
p=t.P
h=A.c([A.d("Home",A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,p))],m)
g=A.a(["style",a7],s,r)
g=A.m(new A.i(A.e(h,j),B.a,B.e,g),new A.l(10,10,10,10))
h=A.a([a9,""],s,r)
f=A.c([A.d(c3,A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,p))],m)
e=A.a(["style",a7],s,r)
e=A.m(new A.i(A.e(f,j),B.a,B.e,e),new A.l(10,10,10,10))
f=A.a([a9,""],s,r)
d=A.c([A.d(c4,A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,p))],m)
c=A.a(["style",a7],s,r)
c=A.m(new A.i(A.e(d,j),B.a,B.e,c),new A.l(10,10,10,10))
d=A.a([a9,""],s,r)
b=A.c([A.d("About",A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,p))],m)
a=A.a(["style",a7],s,r)
a=A.m(new A.i(A.e(b,j),B.a,B.e,a),new A.l(10,10,10,10))
b=A.a([a9,""],s,r)
a0=A.c([A.d("Contact",A.a(["style",c2],s,r),a2),A.b(a2,5,a2),A.A(A.f(B.b,b0,a2,A.b(a2,0,0),2,a2,a2,a2,a4,18),new A.k(!1,!1,!1,p))],m)
a1=A.a(["style",a7],s,r)
l=A.c([n,A.dK(new A.i(A.e(A.c([new A.i(o,B.a,B.h,A.h(s,r)),A.f(B.b,"#0D192B",a2,new A.F(A.f(B.b,a2,a2,A.m(new A.i(A.e(A.c([A.M(A.c([new A.i(q,B.a,B.f,A.h(s,r)),A.cK(B.a,A.c([new A.t(g,a8,new A.ir(c9,i),a4,!1,h),new A.t(e,a8,new A.iv(c9,i),a4,!1,f),new A.t(c,a8,new A.iw(c9,i),a4,!1,d),new A.t(a,a8,new A.ix(c9,i),a4,!1,b),new A.t(A.m(new A.i(A.e(a0,j),B.a,B.e,a1),new A.l(10,10,10,10)),a8,new A.iy(c9,i),a4,!1,A.a([a9,""],s,r))],m),B.f,B.a,6,6)],m),1,20,new A.k(1,2,2,k),new A.k(20,a2,28,l)),A.b(a2,30,a2),A.f(B.b,"#34445B",a2,A.b(a2,0,0),1,a2,a2,a2,a4,a2),A.b(a2,16,a2),A.d(u.H,A.a(["style",b3],s,r),a2)],m),j),B.a,B.h,A.h(s,r)),new A.l(38,28,38,28)),a2,1220,a2,a2,a4,a2)),a2,a2,a2,a2,a4,a2)],m),j),B.a,B.h,A.h(s,r)),!1)],m)
k=A.a(["style","background-color:#F5F3EE"],s,r)
l=A.e(l,j)
a1=A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r)
a0=A.f(B.b,a5,5,new A.F(A.d("S",A.a(["style",u.Y],s,r),a2)),34,a2,a2,a2,a4,34)
b=A.b(a2,a2,11)
a=A.c([A.d("SPARROW",A.a(["style",u.Z],s,r),a2),A.d(a6,A.a(["style",u.f],s,r),a2)],m)
d=A.a(["style",a7],s,r)
return new A.ay("sk_state_b5c21545_5001",new A.i(l,B.a,B.h,k),A.f(a1,a3,a2,new A.i(A.e(A.c([A.m(new A.o(A.e(A.c([new A.t(new A.o(A.e(A.c([a0,b,new A.i(A.e(a,j),B.a,B.f,d)],m),j),B.a,B.e,A.h(s,r)),a8,new A.iz(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(A.d("CLOSE",A.a(["style",u.T],s,r),a2),new A.l(10,10,10,10)),a8,new A.iA(c9),a4,!1,A.a([a9,""],s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(28,20,24,26)),A.de("#D9DDE2",0,1,0,1),A.b(a2,16,a2),new A.t(A.m(new A.o(A.e(A.c([A.d("Home",A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,p)),A.b(a2,a2,8),A.d("\u2197",A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.iB(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(c3,A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,p)),A.b(a2,a2,8),A.d("\u2197",A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.iC(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d(c4,A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,p)),A.b(a2,a2,8),A.d("\u2197",A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.is(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d("About",A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!1,!1,!1,p)),A.b(a2,a2,8),A.d("\u2197",A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.it(c9,i),a4,!1,A.a([a9,""],s,r)),new A.t(A.m(new A.o(A.e(A.c([A.d("Contact",A.a(["style",c5],s,r),a2),new A.o(A.e(A.c([A.A(A.d(c6,A.a(["style",c7],s,r),a2),new A.k(!0,!0,!0,p)),A.b(a2,a2,8),A.d("\u2197",A.a(["style",c8],s,r),a2)],m),j),B.a,B.e,A.h(s,r))],m),j),B.i,B.e,A.h(s,r)),new A.l(16,28,16,28)),a8,new A.iu(c9,i),a4,!1,A.a([a9,""],s,r)),A.b(a2,34,a2),A.m(A.d("THOUGHTFUL SOFTWARE, BUILT TO LAST.",A.a(["style",b1],s,r),a2),new A.l(26,26,26,26))],m),j),B.a,B.h,A.h(s,r)),a2,a2,a2,a2,"aside",340),c9,304)},
$S:10}
A.ip.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.iq.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.ir.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.iv.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.iw.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.ix.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.iy.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.iz.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.iA.prototype={
$1(a){this.a.si(!1)},
$S:0}
A.iB.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.iC.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.is.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.it.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.iu.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0};(function aliases(){var s=J.b_.prototype
s.bA=s.m
s=A.aY.prototype
s.bz=s.cC})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"o5","mx",13)
s(A,"o6","my",13)
s(A,"o7","mz",13)
r(A,"la","nX",1)
s(A,"of","nk",14)
s(A,"oy","nj",6)
var o
q(o=A.cz.prototype,"gcG","cH",1)
q(o,"gcE","cF",1)
p(o=A.dI.prototype,"gag","cL",27)
q(o,"gae","cK",1)
r(A,"oA","mh",1)
q(A.bM.prototype,"ga6","K",1)
q(o=A.aY.prototype,"gcI","cJ",1)
q(o,"gc7","c8",1)
q(A.df.prototype,"ga6","K",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.J,null)
q(A.J,[A.ji,J.dm,A.cA,J.be,A.Y,A.R,A.fe,A.u,A.G,A.cn,A.cI,A.ah,A.bm,A.bs,A.bD,A.c2,A.bp,A.b4,A.fg,A.f0,A.cT,A.aX,A.a2,A.eW,A.cl,A.cm,A.ck,A.bB,A.e6,A.dX,A.dN,A.ea,A.fr,A.aE,A.e1,A.fE,A.fC,A.cU,A.dY,A.ee,A.e4,A.bq,A.cM,A.d0,A.bf,A.dd,A.fx,A.fW,A.fT,A.fs,A.dD,A.cE,A.ft,A.aO,A.ab,A.ao,A.ac,A.d1,A.fi,A.au,A.dj,A.eR,A.dk,A.bL,A.aD,A.f5,A.b3,A.aT,A.f9,A.aY,A.dI,A.aC,A.ca,A.f4,A.f_,A.a4,A.cC,A.b0,A.dO,A.a5,A.bM,A.eb,A.e5,A.df,A.e7,A.X,A.l,A.k,A.aF,A.fF])
q(J.dm,[J.dp,J.ce,J.ch,J.cg,J.ci,J.cf,J.bi])
q(J.ch,[J.b_,J.S,A.bF,A.cq])
q(J.b_,[J.dE,J.bJ,J.aP])
r(J.dn,A.cA)
r(J.eS,J.S)
q(J.cf,[J.cd,J.dq])
q(A.Y,[A.aK,A.cG,A.dr,A.dR,A.dJ,A.e0,A.cj,A.d7,A.aJ,A.cH,A.dQ,A.bI,A.dc])
r(A.bK,A.R)
r(A.bz,A.bK)
q(A.u,[A.z,A.bk,A.at,A.bo,A.dW,A.e9,A.b9])
q(A.z,[A.B,A.az,A.aj,A.ai,A.cL])
r(A.c7,A.bk)
q(A.B,[A.aa,A.N,A.e3])
r(A.bN,A.bs)
r(A.cR,A.bN)
r(A.bO,A.bD)
r(A.b7,A.bO)
r(A.c3,A.b7)
r(A.a_,A.c2)
q(A.b4,[A.c4,A.cS])
r(A.aZ,A.c4)
r(A.ct,A.cG)
q(A.aX,[A.da,A.db,A.dP,A.iL,A.iN,A.fo,A.fn,A.eY,A.fv,A.eJ,A.eL,A.eN,A.eP,A.f6,A.f7,A.f8,A.fb,A.fc,A.fd,A.iE,A.iF,A.ff,A.ha,A.he,A.hf,A.eo,A.eq,A.es,A.eu,A.f3,A.fO,A.fP,A.fQ,A.fR,A.fK,A.fL,A.fN,A.fG,A.fH,A.fJ,A.h5,A.h2,A.h4,A.j0,A.iT,A.j1,A.j3,A.iS,A.j4,A.j5,A.iR,A.j6,A.j7,A.iQ,A.j8,A.j9,A.iP,A.ja,A.j_,A.j2,A.hk,A.hl,A.hm,A.ht,A.hu,A.hv,A.hw,A.hx,A.hy,A.hz,A.hA,A.hn,A.ho,A.hp,A.hq,A.hr,A.hs,A.hC,A.hD,A.hE,A.hJ,A.hK,A.hL,A.hM,A.hN,A.hO,A.hP,A.hQ,A.hF,A.hG,A.hH,A.hI,A.hS,A.hT,A.hU,A.hZ,A.i_,A.i0,A.i1,A.i2,A.i3,A.i4,A.i5,A.hV,A.hW,A.hX,A.hY,A.i7,A.i8,A.i9,A.ie,A.ig,A.ih,A.ii,A.ij,A.ik,A.il,A.im,A.ia,A.ib,A.ic,A.id,A.ip,A.iq,A.ir,A.iv,A.iw,A.ix,A.iy,A.iz,A.iA,A.iB,A.iC,A.is,A.it,A.iu])
q(A.dP,[A.dM,A.by])
q(A.a2,[A.aQ,A.e2])
q(A.db,[A.eT,A.iM,A.eX,A.eZ,A.fy,A.fk,A.fj])
q(A.cq,[A.dv,A.af])
q(A.af,[A.cN,A.cP])
r(A.cO,A.cN)
r(A.co,A.cO)
r(A.cQ,A.cP)
r(A.cp,A.cQ)
q(A.co,[A.dw,A.dx])
q(A.cp,[A.dy,A.dz,A.dA,A.dB,A.dC,A.cr,A.cs])
r(A.cV,A.e0)
q(A.da,[A.fp,A.fq,A.fD,A.fB,A.h6,A.fV,A.fU,A.eQ,A.eE,A.eF,A.eG,A.eI,A.eK,A.eM,A.eO,A.eH,A.eB,A.eC,A.eD,A.eA,A.fa,A.el,A.hj,A.h8,A.hi,A.h9,A.hb,A.jc,A.hc,A.hd,A.hh,A.hg,A.h_,A.ey,A.ex,A.ew,A.em,A.ez,A.en,A.ep,A.er,A.et,A.ev,A.fI,A.fM,A.iY,A.iX,A.iW,A.iV,A.iU,A.iZ,A.hB,A.hR,A.i6,A.io,A.iD])
r(A.e8,A.ee)
r(A.aV,A.cS)
q(A.bf,[A.d9,A.dg,A.ds])
q(A.dd,[A.ek,A.eV,A.eU,A.fm,A.fl])
r(A.dt,A.cj)
r(A.fw,A.fx)
r(A.dU,A.dg)
q(A.aJ,[A.cv,A.dl])
r(A.e_,A.d1)
r(A.cz,A.aY)
q(A.a4,[A.a7,A.bl,A.aA,A.aB])
q(A.fs,[A.du,A.bA,A.b2,A.cW])
q(A.X,[A.b6,A.t,A.cF,A.ay,A.o,A.i,A.F,A.c5,A.cy,A.cu,A.c8,A.cD,A.cJ,A.cB,A.c6,A.c9,A.cc])
s(A.bK,A.bm)
s(A.cN,A.R)
s(A.cO,A.ah)
s(A.cP,A.R)
s(A.cQ,A.ah)
s(A.bO,A.d0)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",K:"double",bw:"num",r:"String",ag:"bool",ao:"Null",E:"List",J:"Object",a0:"Map",V:"JSObject"},mangledNames:{},types:["~(J?)","~()","ao(V)","ag(r)","@()","aF(aT)","ca(aT)","a4(X)","X()","a5<0^>(r,0^)<J?>","ay()","ao()","~(V)","~(~())","@(@)","@(r)","~(J?,J?)","r()","V()","@(@,r)","ao(@)","ao(~())","~(@,@)","a0<r,r>(a0<r,r>,r)","0&(r,p?)","b3(aD)","r(r)","~(r)","~(a4)","r(ab<r,r>)","E<b0>()","b6()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.cR&&a.b(c.a)&&b.b(c.b)}}
A.mR(v.typeUniverse,JSON.parse('{"aP":"b_","dE":"b_","bJ":"b_","oM":"bF","dp":{"ag":[],"U":[]},"ce":{"U":[]},"ch":{"V":[]},"b_":{"V":[]},"S":{"E":["1"],"z":["1"],"V":[],"u":["1"]},"dn":{"cA":[]},"eS":{"S":["1"],"E":["1"],"z":["1"],"V":[],"u":["1"]},"be":{"a1":["1"]},"cf":{"K":[],"bw":[]},"cd":{"K":[],"p":[],"bw":[],"U":[]},"dq":{"K":[],"bw":[],"U":[]},"bi":{"r":[],"f1":[],"U":[]},"aK":{"Y":[]},"bz":{"R":["p"],"bm":["p"],"E":["p"],"z":["p"],"u":["p"],"R.E":"p","bm.E":"p"},"z":{"u":["1"]},"B":{"z":["1"],"u":["1"]},"G":{"a1":["1"]},"bk":{"u":["2"],"u.E":"2"},"c7":{"bk":["1","2"],"z":["2"],"u":["2"],"u.E":"2"},"cn":{"a1":["2"]},"aa":{"B":["2"],"z":["2"],"u":["2"],"B.E":"2","u.E":"2"},"at":{"u":["1"],"u.E":"1"},"cI":{"a1":["1"]},"bK":{"R":["1"],"bm":["1"],"E":["1"],"z":["1"],"u":["1"]},"N":{"B":["1"],"z":["1"],"u":["1"],"B.E":"1","u.E":"1"},"cR":{"bN":[],"bs":[]},"c3":{"b7":["1","2"],"bO":["1","2"],"bD":["1","2"],"d0":["1","2"],"a0":["1","2"]},"c2":{"a0":["1","2"]},"a_":{"c2":["1","2"],"a0":["1","2"]},"bo":{"u":["1"],"u.E":"1"},"bp":{"a1":["1"]},"c4":{"b4":["1"],"dL":["1"],"z":["1"],"u":["1"]},"aZ":{"c4":["1"],"b4":["1"],"dL":["1"],"z":["1"],"u":["1"]},"ct":{"Y":[]},"dr":{"Y":[]},"dR":{"Y":[]},"cT":{"kg":[]},"aX":{"bh":[]},"da":{"bh":[]},"db":{"bh":[]},"dP":{"bh":[]},"dM":{"bh":[]},"by":{"bh":[]},"dJ":{"Y":[]},"aQ":{"a2":["1","2"],"k6":["1","2"],"a0":["1","2"],"a2.K":"1","a2.V":"2"},"az":{"z":["1"],"u":["1"],"u.E":"1"},"cl":{"a1":["1"]},"aj":{"z":["1"],"u":["1"],"u.E":"1"},"cm":{"a1":["1"]},"ai":{"z":["ab<1,2>"],"u":["ab<1,2>"],"u.E":"ab<1,2>"},"ck":{"a1":["ab<1,2>"]},"bN":{"bs":[]},"bB":{"mj":[],"f1":[]},"e6":{"cx":[],"bE":[]},"dW":{"u":["cx"],"u.E":"cx"},"dX":{"a1":["cx"]},"dN":{"bE":[]},"e9":{"u":["bE"],"u.E":"bE"},"ea":{"a1":["bE"]},"bF":{"V":[],"U":[]},"cq":{"V":[]},"dv":{"V":[],"U":[]},"af":{"an":["1"],"V":[]},"co":{"R":["K"],"af":["K"],"E":["K"],"an":["K"],"z":["K"],"V":[],"u":["K"],"ah":["K"]},"cp":{"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"]},"dw":{"R":["K"],"af":["K"],"E":["K"],"an":["K"],"z":["K"],"V":[],"u":["K"],"ah":["K"],"U":[],"R.E":"K"},"dx":{"R":["K"],"af":["K"],"E":["K"],"an":["K"],"z":["K"],"V":[],"u":["K"],"ah":["K"],"U":[],"R.E":"K"},"dy":{"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"],"U":[],"R.E":"p"},"dz":{"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"],"U":[],"R.E":"p"},"dA":{"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"],"U":[],"R.E":"p"},"dB":{"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"],"U":[],"R.E":"p"},"dC":{"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"],"U":[],"R.E":"p"},"cr":{"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"],"U":[],"R.E":"p"},"cs":{"ju":[],"R":["p"],"af":["p"],"E":["p"],"an":["p"],"z":["p"],"V":[],"u":["p"],"ah":["p"],"U":[],"R.E":"p"},"e0":{"Y":[]},"cV":{"Y":[]},"cU":{"a1":["1"]},"b9":{"u":["1"],"u.E":"1"},"ee":{"ko":[]},"e8":{"ko":[]},"aV":{"b4":["1"],"k9":["1"],"dL":["1"],"z":["1"],"u":["1"]},"bq":{"a1":["1"]},"R":{"E":["1"],"z":["1"],"u":["1"]},"a2":{"a0":["1","2"]},"cL":{"z":["2"],"u":["2"],"u.E":"2"},"cM":{"a1":["2"]},"bD":{"a0":["1","2"]},"b7":{"bO":["1","2"],"bD":["1","2"],"d0":["1","2"],"a0":["1","2"]},"b4":{"dL":["1"],"z":["1"],"u":["1"]},"cS":{"b4":["1"],"dL":["1"],"z":["1"],"u":["1"]},"e2":{"a2":["r","@"],"a0":["r","@"],"a2.K":"r","a2.V":"@"},"e3":{"B":["r"],"z":["r"],"u":["r"],"B.E":"r","u.E":"r"},"d9":{"bf":["E<p>","r"]},"dg":{"bf":["r","E<p>"]},"cj":{"Y":[]},"dt":{"Y":[]},"ds":{"bf":["J?","r"]},"dU":{"bf":["r","E<p>"]},"K":{"bw":[]},"p":{"bw":[]},"E":{"z":["1"],"u":["1"]},"cx":{"bE":[]},"r":{"f1":[]},"d7":{"Y":[]},"cG":{"Y":[]},"aJ":{"Y":[]},"cv":{"Y":[]},"dl":{"Y":[]},"cH":{"Y":[]},"dQ":{"Y":[]},"bI":{"Y":[]},"dc":{"Y":[]},"dD":{"Y":[]},"cE":{"Y":[]},"ac":{"mo":[]},"d1":{"dS":[]},"au":{"dS":[]},"e_":{"dS":[]},"cz":{"aY":["~"],"aY.P":"~"},"a7":{"a4":[]},"aA":{"a4":[]},"aB":{"a4":[]},"a5":{"kp":[]},"e5":{"jr":[]},"b6":{"X":[]},"ay":{"X":[]},"aF":{"jr":[]},"t":{"X":[]},"cF":{"X":[]},"o":{"X":[]},"i":{"X":[]},"F":{"X":[]},"c5":{"X":[]},"cy":{"X":[]},"cu":{"X":[]},"c8":{"X":[]},"cD":{"X":[]},"cJ":{"X":[]},"cB":{"X":[]},"c6":{"X":[]},"c9":{"X":[]},"cc":{"X":[]},"m0":{"E":["p"],"z":["p"],"u":["p"]},"ju":{"E":["p"],"z":["p"],"u":["p"]},"ms":{"E":["p"],"z":["p"],"u":["p"]},"lZ":{"E":["p"],"z":["p"],"u":["p"]},"mq":{"E":["p"],"z":["p"],"u":["p"]},"m_":{"E":["p"],"z":["p"],"u":["p"]},"mr":{"E":["p"],"z":["p"],"u":["p"]},"lX":{"E":["K"],"z":["K"],"u":["K"]},"lY":{"E":["K"],"z":["K"],"u":["K"]}}'))
A.mQ(v.typeUniverse,JSON.parse('{"z":1,"bK":1,"af":1,"cS":1,"dd":2}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",K:": URI should have a non-empty host name: ",w:"A CSS declaration separator is not allowed.",O:"A conceptual customer portal that makes everyday requests easier to navigate and manage.",p:"A conceptual workspace for coordinating projects, priorities and decisions across a growing team.",d:"A typical engagement can start with an assessment of the existing system and its priorities.",M:"Align on the problem, people and desired outcomes.",R:"Design, build and test in clear, collaborative stages.",k:"Early involvement can clarify scope, validate assumptions and help avoid costly rework.",b:"Explore the contact page and its clearly marked form preview.",D:"Good software is not just delivered. It is understood, maintained and improved over time.",m:"Illustrative demo concepts only. These are not client case studies.",U:"Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.",i:"Inline event attributes are not supported.",j:"Maintenance, documentation and ongoing improvements should be planned alongside delivery.",r:"Sparrow Kit | Thoughtful software, built to last",W:"Support, maintain and refine as needs change.",G:"Turn insights into a focused plan and design direction.",n:"When should we involve a technical partner?",L:"box-shadow:0px 6px 16px 0px rgba(49, 94, 209, 0.13333333333333333)",P:"box-shadow:0px 7px 18px 0px rgba(16, 33, 58, 0.09411764705882353)",u:"box-shadow:none;--sparrow-material-text-color:var(--sparrow-material-appbar-foreground)",V:'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',s:'font-family:"Manrope",sans-serif;font-size:10px;font-weight:700;letter-spacing:1.1px;line-height:var(--sparrow-material-text-label-large-line-height,normal);color:#10213A',q:'font-family:"Manrope",sans-serif;font-size:10px;font-weight:700;letter-spacing:1.5px;line-height:1.5;color:#315ED1',l:'font-family:"Manrope",sans-serif;font-size:10px;font-weight:700;letter-spacing:1.5px;line-height:1.5;color:#9EB9E9',T:'font-family:"Manrope",sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#647084',v:'font-family:"Manrope",sans-serif;font-size:12px;font-weight:400;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:1.65;color:#778294',J:'font-family:"Manrope",sans-serif;font-size:12px;font-weight:400;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:1.65;color:#ADB9C9',I:'font-family:"Manrope",sans-serif;font-size:12px;font-weight:500;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#465267',a:'font-family:"Manrope",sans-serif;font-size:12px;font-weight:700;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#FFFFFF',Z:'font-family:"Manrope",sans-serif;font-size:13px;font-weight:700;letter-spacing:1.1px;line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#10213A',_:'font-family:"Manrope",sans-serif;font-size:13px;font-weight:700;letter-spacing:1.1px;line-height:var(--sparrow-material-text-title-large-line-height,normal);color:#10213A',x:'font-family:"Manrope",sans-serif;font-size:14px;font-weight:600;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#FFFFFF',t:'font-family:"Manrope",sans-serif;font-size:16px;font-weight:var(--sparrow-material-text-body-medium-font-weight,400);letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#4E79E8',o:'font-family:"Manrope",sans-serif;font-size:17px;font-weight:500;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#10213A',Y:'font-family:"Manrope",sans-serif;font-size:20px;font-weight:700;letter-spacing:var(--sparrow-material-text-body-medium-letter-spacing,0px);line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#F5F3EE',g:'font-family:"Manrope",sans-serif;font-size:20px;font-weight:700;letter-spacing:var(--sparrow-material-text-title-large-letter-spacing,0px);line-height:var(--sparrow-material-text-title-large-line-height,normal);color:#F5F3EE',X:'font-family:"Manrope",sans-serif;font-size:8px;font-weight:700;letter-spacing:0.8px;line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#315ED1',y:'font-family:"Manrope",sans-serif;font-size:9px;font-weight:600;letter-spacing:0.8px;line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#A8B7CA',f:'font-family:"Manrope",sans-serif;font-size:9px;font-weight:600;letter-spacing:1.1px;line-height:var(--sparrow-material-text-body-medium-line-height,normal);color:#778294',E:'font-family:"Manrope",sans-serif;font-size:9px;font-weight:600;letter-spacing:1.1px;line-height:var(--sparrow-material-text-title-large-line-height,normal);color:#778294',e:'font-family:"Manrope",sans-serif;line-height:1.75;color:#596579',C:'font-family:"Manrope",sans-serif;line-height:1.75;color:#CED6E2',z:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:15px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',A:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:17px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',B:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:21px;letter-spacing:-0.8px;line-height:1.14;color:#F8F7F2;font-weight:600',h:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:23px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',c:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:28px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',F:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:31px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',N:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:33px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',d9:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:36px;letter-spacing:-0.8px;line-height:1.14;color:#F8F7F2;font-weight:600',Q:'font:inherit;margin:0;font-family:"Manrope",sans-serif;font-size:43px;letter-spacing:-0.8px;line-height:1.14;color:#10213A;font-weight:600',H:"\xa9 2026 Sparrow Kit. Demonstration website. Contact details are placeholders."}
var t=(function rtii(){var s=A.aG
return{e8:s("bz"),w:s("a_<r,r>"),J:s("a_<r,J?>"),Q:s("aZ<r>"),gw:s("z<@>"),bU:s("Y"),Z:s("bh"),cs:s("u<r>"),hf:s("u<@>"),hb:s("u<p>"),A:s("S<aY<@>>"),Y:s("S<V>"),I:s("S<b0>"),E:s("S<a4>"),r:s("S<aC>"),R:s("S<J>"),fq:s("S<+(V,aP)>"),d3:s("S<aD>"),s:s("S<r>"),U:s("S<X>"),v:s("S<@>"),t:s("S<p>"),u:s("S<~()>"),T:s("ce"),m:s("V"),_:s("aP"),aU:s("an<@>"),F:s("m6"),eI:s("E<b0>"),fW:s("E<a4>"),gS:s("E<X>"),c:s("E<@>"),V:s("E<p>"),q:s("E<~()>"),fK:s("ab<r,r>"),bH:s("a0<b2,r>"),d:s("a0<r,r>"),cO:s("a0<r,bL>"),e:s("a0<@,@>"),f:s("a0<r,J?>"),ee:s("a0<r,~(r)>"),d2:s("a0<r,~(ag)>"),cT:s("a0<r,~(J?)>"),c5:s("aB"),fV:s("b0"),eT:s("a4"),ah:s("a7"),k:s("aC"),a:s("ao"),K:s("J"),gT:s("oN"),bQ:s("+()"),cz:s("cx"),b:s("b2"),P:s("k<ag>"),x:s("k<K>"),G:s("k<p>"),j:s("aD"),eV:s("b3"),O:s("aT"),c7:s("a5<a0<r,r>>"),cH:s("a5<aT>"),L:s("a5<ag>"),bS:s("a5<@>"),dw:s("a5<r?>"),l:s("kg"),N:s("r"),dm:s("U"),g:s("X"),ak:s("bJ"),h:s("b7<r,r>"),C:s("dS"),cc:s("at<r>"),af:s("kp"),cN:s("bL"),B:s("bM"),cV:s("e7"),dj:s("b9<r>"),y:s("ag"),bB:s("ag(r)"),i:s("K"),z:s("@"),S:s("p"),eH:s("jZ<ao>?"),an:s("V?"),bM:s("E<@>?"),n:s("a0<r,r>?"),X:s("J?"),cd:s("k<K>?"),b9:s("k<p>?"),dk:s("r?"),W:s("e4?"),fQ:s("ag?"),cD:s("K?"),h6:s("p?"),cg:s("bw?"),p:s("bw"),H:s("~"),M:s("~()"),D:s("~(r)"),cA:s("~(r,@)"),dz:s("~(ag)"),o:s("~(J?)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a2=J.dm.prototype
B.d=J.S.prototype
B.n=J.cd.prototype
B.a3=J.cf.prototype
B.c=J.bi.prototype
B.a4=J.aP.prototype
B.a5=J.ch.prototype
B.O=A.cs.prototype
B.R=J.dE.prototype
B.H=J.bJ.prototype
B.aH=new A.ek()
B.T=new A.d9()
B.J=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.U=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.Z=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.V=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.Y=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.X=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.W=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.K=function(hooks) { return hooks; }

B.y=new A.ds()
B.a_=new A.dD()
B.z=new A.fe()
B.p=new A.dU()
B.a0=new A.fm()
B.u=new A.e8()
B.a1=new A.bA("flex-end",2,"end")
B.e=new A.bA("center",1,"center")
B.h=new A.bA("stretch",3,"stretch")
B.f=new A.bA("flex-start",0,"start")
B.aI=new A.l(0,0,0,0)
B.a6=new A.eU(null)
B.a7=new A.eV(null)
B.t=new A.b2(null,0,"mobile")
B.r=new A.b2(600,1,"tablet")
B.q=new A.b2(1024,2,"desktop")
B.L=s([B.t,B.r,B.q],A.aG("S<b2>"))
B.M=s([],A.aG("S<m6>"))
B.a9=s([],t.I)
B.v=s([],t.E)
B.A=s([],t.r)
B.a8=s([],t.R)
B.j=s([],t.s)
B.aa=s([],t.U)
B.i=new A.du("space-between",3,"spaceBetween")
B.a=new A.du("flex-start",0,"start")
B.ak={"font-family":0,"font-size":1,color:2}
B.B=new A.a_(B.ak,['"Manrope",sans-serif',"14px","#8994A3"],t.w)
B.am={style:0,role:1}
B.ab=new A.a_(B.am,["position:fixed;inset:0;z-index:1000;display:flex","presentation"],t.J)
B.Q={"font-family":0,"font-size":1,"line-height":2,color:3}
B.C=new A.a_(B.Q,['"Manrope",sans-serif',"11px","1.35","#738096"],t.w)
B.D=new A.a_(B.Q,['"Manrope",sans-serif',"11px","1.35","#B3261E"],t.w)
B.P={"font-family":0,"font-size":1,color:2,"font-weight":3}
B.E=new A.a_(B.P,['"Manrope",sans-serif',"12px","#526176","600"],t.w)
B.F=new A.a_(B.P,['"Manrope",sans-serif',"14px","#10213A","500"],t.w)
B.ah={type:0,"aria-label":1,style:2}
B.ac=new A.a_(B.ah,["button","Close navigation","position:absolute;inset:0;width:100%;height:100%;border:0;background:rgba(0,0,0,.4)"],t.J)
B.x={}
B.l=new A.a_(B.x,[],A.aG("a_<r,~(r)>"))
B.k=new A.a_(B.x,[],A.aG("a_<r,~(ag)>"))
B.m=new A.a_(B.x,[],A.aG("a_<r,~(J?)>"))
B.N=new A.a_(B.x,[],t.w)
B.b=new A.a_(B.x,[],t.J)
B.ag={type:0,"aria-label":1}
B.ad=new A.a_(B.ag,["button","Close navigation"],t.J)
B.aj={"data-sparrow-material-theme":0,"data-sparrow-material-theme-mode":1}
B.w=new A.a_(B.aj,["sk_material_4587b3a9","system"],t.J)
B.al={style:0}
B.ae=new A.a_(B.al,["position:relative;min-height:100%"],t.J)
B.ap=new A.f4(!1,!0,!0,!0,!0)
B.af={area:0,base:1,br:2,col:3,embed:4,hr:5,img:6,input:7,link:8,meta:9,param:10,source:11,track:12,wbr:13}
B.G=new A.aZ(B.af,14,t.Q)
B.an={color:0,"font-family":1,"font-size":2,"font-weight":3,"font-style":4,"letter-spacing":5,"line-height":6,"text-decoration":7}
B.aq=new A.aZ(B.an,8,t.Q)
B.ao={keydown:0,keypress:1,keyup:2}
B.ar=new A.aZ(B.ao,3,t.Q)
B.ai={ArrowDown:0,ArrowUp:1,Home:2,End:3}
B.as=new A.aZ(B.ai,4,t.Q)
B.at=new A.b6("Not Found",B.b,null)
B.au=A.aH("oH")
B.av=A.aH("oI")
B.aw=A.aH("lX")
B.ax=A.aH("lY")
B.ay=A.aH("lZ")
B.az=A.aH("m_")
B.aA=A.aH("m0")
B.aB=A.aH("J")
B.aC=A.aH("mq")
B.aD=A.aH("mr")
B.aE=A.aH("ms")
B.aF=A.aH("ju")
B.aG=new A.fl(!1)
B.S=new A.cW(0,"root")
B.o=new A.cW(1,"ordinary")
B.I=new A.cW(2,"flex")})();(function staticFields(){$.fu=null
$.ar=A.c([],t.R)
$.kb=null
$.jV=null
$.jU=null
$.lh=null
$.l7=null
$.ln=null
$.iI=null
$.iO=null
$.jN=null
$.fA=A.c([],A.aG("S<E<J>?>"))
$.bR=null
$.d3=null
$.d4=null
$.jF=!1
$.dV=B.u
$.aS=A.c([],A.aG("S<bM>"))
$.aR=A.c([],A.aG("S<E<~()>>"))
$.bG=A.al(t.B)
$.jo=!1
$.f2=!1
$.c1=A.c([],t.A)
$.h7=A.h(t.N,A.aG("eb"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"oK","ls",()=>A.iJ("_$dart_dartClosure"))
s($,"oJ","je",()=>A.iJ("_$dart_dartClosure_dartJSInterop"))
s($,"p4","lI",()=>A.c([new J.dn()],A.aG("S<cA>")))
s($,"oO","lt",()=>A.aU(A.fh({
toString:function(){return"$receiver$"}})))
s($,"oP","lu",()=>A.aU(A.fh({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"oQ","lv",()=>A.aU(A.fh(null)))
s($,"oR","lw",()=>A.aU(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"oU","lz",()=>A.aU(A.fh(void 0)))
s($,"oV","lA",()=>A.aU(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"oT","ly",()=>A.aU(A.kj(null)))
s($,"oS","lx",()=>A.aU(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"oX","lC",()=>A.aU(A.kj(void 0)))
s($,"oW","lB",()=>A.aU(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"oY","jQ",()=>A.mw())
s($,"p2","lH",()=>A.me(4096))
s($,"p0","lF",()=>new A.fV().$0())
s($,"p1","lG",()=>new A.fU().$0())
s($,"oZ","lD",()=>new Int8Array(A.nm(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"p_","lE",()=>A.b1("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"p3","jg",()=>A.lk(B.aB))
s($,"oL","jf",()=>new A.dj(new WeakMap(),"SparrowKit active hydration",A.aG("dj<J>")))
s($,"p6","lK",()=>A.b1("^[A-Za-z][A-Za-z0-9-]*$",!0))
s($,"p5","lJ",()=>A.b1("^[A-Za-z_:][A-Za-z0-9:._-]*$",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bF,SharedArrayBuffer:A.bF,ArrayBufferView:A.cq,DataView:A.dv,Float32Array:A.dw,Float64Array:A.dx,Int16Array:A.dy,Int32Array:A.dz,Int8Array:A.dA,Uint16Array:A.dB,Uint32Array:A.dC,Uint8ClampedArray:A.cr,CanvasPixelArray:A.cr,Uint8Array:A.cs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.af.$nativeSuperclassTag="ArrayBufferView"
A.cN.$nativeSuperclassTag="ArrayBufferView"
A.cO.$nativeSuperclassTag="ArrayBufferView"
A.co.$nativeSuperclassTag="ArrayBufferView"
A.cP.$nativeSuperclassTag="ArrayBufferView"
A.cQ.$nativeSuperclassTag="ArrayBufferView"
A.cp.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.ow
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()