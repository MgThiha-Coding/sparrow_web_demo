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
if(a[b]!==s){A.nI(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.iR(b)
return new s(c,this)}:function(){if(s===null)s=A.iR(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.iR(a).prototype
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
iW(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iT(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.iU==null){A.nt()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.f(A.js("Return interceptor for "+A.w(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.fh
if(o==null)o=$.fh=A.i0(n)
p=q[o]}if(p!=null)return p
p=A.ny(a)
if(p!=null)return p
if(typeof a=="function")return B.W
s=Object.getPrototypeOf(a)
if(s==null)return B.H
if(s===Object.prototype)return B.H
if(typeof q=="function"){o=$.fh
if(o==null)o=$.fh=A.i0(n)
Object.defineProperty(q,o,{value:B.x,enumerable:false,writable:true,configurable:true})
return B.x}return B.x},
l6(a,b){if(a<0||a>4294967295)throw A.f(A.ag(a,0,4294967295,"length",null))
return J.l7(new Array(a),b)},
l7(a,b){var s=A.c(a,b.h("P<0>"))
s.$flags=1
return s},
ja(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
l8(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ja(r))break;++b}return b},
jb(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.l(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ja(q))break}return b},
aB(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c7.prototype
return J.dh.prototype}if(typeof a=="string")return J.b5.prototype
if(a==null)return J.c8.prototype
if(typeof a=="boolean")return J.dg.prototype
if(Array.isArray(a))return J.P.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
if(typeof a=="symbol")return J.cc.prototype
if(typeof a=="bigint")return J.ca.prototype
return a}if(a instanceof A.K)return a
return J.iT(a)},
e7(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(Array.isArray(a))return J.P.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
if(typeof a=="symbol")return J.cc.prototype
if(typeof a=="bigint")return J.ca.prototype
return a}if(a instanceof A.K)return a
return J.iT(a)},
iS(a){if(a==null)return a
if(Array.isArray(a))return J.P.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
if(typeof a=="symbol")return J.cc.prototype
if(typeof a=="bigint")return J.ca.prototype
return a}if(a instanceof A.K)return a
return J.iT(a)},
no(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof A.K))return J.bB.prototype
return a},
aD(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aB(a).P(a,b)},
e9(a,b){return J.iS(a).i(a,b)},
j_(a,b){return J.no(a).ba(a,b)},
kO(a,b){return J.iS(a).T(a,b)},
ea(a){return J.aB(a).gF(a)},
aR(a){return J.iS(a).gt(a)},
bS(a){return J.e7(a).gm(a)},
kP(a){return J.aB(a).gD(a)},
aw(a){return J.aB(a).l(a)},
de:function de(){},
dg:function dg(){},
c8:function c8(){},
cb:function cb(){},
aV:function aV(){},
dv:function dv(){},
bB:function bB(){},
aU:function aU(){},
ca:function ca(){},
cc:function cc(){},
P:function P(a){this.$ti=a},
df:function df(){},
eH:function eH(a){this.$ti=a},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c9:function c9(){},
c7:function c7(){},
dh:function dh(){},
b5:function b5(){}},A={iu:function iu(){},
je(a){return new A.az("Field '"+a+"' has been assigned during initialization.")},
lb(a){return new A.az("Field '"+a+"' has not been initialized.")},
ld(a){return new A.az("Local '"+a+"' has not been initialized.")},
la(a){return new A.az("Field '"+a+"' has already been initialized.")},
lc(a){return new A.az("Local '"+a+"' has already been initialized.")},
i1(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
kk(a,b,c){return a},
iV(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
lh(a,b,c,d){if(t.k.b(a))return new A.c1(a,b,c.h("@<0>").M(d).h("c1<1,2>"))
return new A.b7(a,b,c.h("@<0>").M(d).h("b7<1,2>"))},
l4(){return new A.bA("No element")},
az:function az(a){this.a=a},
bp:function bp(a){this.a=a},
v:function v(){},
y:function y(){},
C:function C(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
ch:function ch(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a_:function a_(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.$ti=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
ab:function ab(){},
b9:function b9(){},
bC:function bC(){},
G:function G(a,b){this.a=a
this.$ti=b},
bq(a,b,c){var s,r,q,p,o,n,m,l=A.ix(a.gK(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.bQ)(l),++j,p=o){r=l[j]
c.a(a.q(0,r))
o=p+1
q[r]=p}n=A.ix(a.gaf(),!0,c)
m=new A.a5(q,n,b.h("@<0>").M(c).h("a5<1,2>"))
m.$keys=l
return m}return new A.bW(A.le(a,b,c),b.h("@<0>").M(c).h("bW<1,2>"))},
kX(){throw A.f(A.ba("Cannot modify unmodifiable Map"))},
kY(){throw A.f(A.ba("Cannot modify constant Set"))},
kv(a){var s=A.ku(a)
if(s!=null)return s
return"minified:"+a},
o9(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aw(a)
return s},
dw(a){var s,r=$.jj
if(r==null)r=$.jj=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jk(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.l(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
dx(a){var s,r,q,p
if(a instanceof A.K)return A.ah(A.bO(a),null)
s=J.aB(a)
if(s===B.U||s===B.X||t.ak.b(a)){r=B.z(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.ah(A.bO(a),null)},
lj(a){var s,r,q
if(typeof a=="number"||A.iO(a))return J.aw(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aS)return a.l(0)
s=$.kM()
for(r=0;r<1;++r){q=s[r].cI(a)
if(q!=null)return q}return"Instance of '"+A.dx(a)+"'"},
lk(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
U(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.l.aH(s,10)|55296)>>>0,s&1023|56320)}}throw A.f(A.ag(a,0,1114111,null,null))},
nr(a){throw A.f(A.kg(a))},
l(a,b){if(a==null)J.bS(a)
throw A.f(A.hZ(a,b))},
hZ(a,b){var s,r="index"
if(!A.jZ(b))return new A.ax(!0,b,r,null)
s=J.bS(a)
if(b<0||b>=s)return A.j9(b,s,a,r)
return new A.cp(null,null,!0,b,r,"Value not in range")},
nl(a,b,c){if(a>c)return A.ag(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ag(b,a,c,"end",null)
return new A.ax(!0,b,"end",null)},
kg(a){return new A.ax(!0,a,null,null)},
f(a){return A.a1(a,new Error())},
a1(a,b){var s
if(a==null)a=new A.cB()
b.dartException=a
s=A.nK
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
nK(){return J.aw(this.dartException)},
M(a,b){throw A.a1(a,b==null?new Error():b)},
ao(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.M(A.mq(a,b,c),s)},
mq(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t._.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.cC("'"+s+"': Cannot "+o+" "+l+k+n)},
bQ(a){throw A.f(A.ay(a))},
aN(a){var s,r,q,p,o,n
a=A.ks(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.f3(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
f4(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jr(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
iv(a,b){var s=b==null,r=s?null:b.method
return new A.di(a,r,s?null:b.receiver)},
d_(a){if(a==null)return new A.eP(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bn(a,a.dartException)
return A.n5(a)},
bn(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
n5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.l.aH(r,16)&8191)===10)switch(q){case 438:return A.bn(a,A.iv(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.bn(a,new A.cn())}}if(a instanceof TypeError){p=$.kx()
o=$.ky()
n=$.kz()
m=$.kA()
l=$.kD()
k=$.kE()
j=$.kC()
$.kB()
i=$.kG()
h=$.kF()
g=p.O(s)
if(g!=null)return A.bn(a,A.iv(A.x(s),g))
else{g=o.O(s)
if(g!=null){g.method="call"
return A.bn(a,A.iv(A.x(s),g))}else if(n.O(s)!=null||m.O(s)!=null||l.O(s)!=null||k.O(s)!=null||j.O(s)!=null||m.O(s)!=null||i.O(s)!=null||h.O(s)!=null){A.x(s)
return A.bn(a,new A.cn())}}return A.bn(a,new A.dI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cz()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bn(a,new A.ax(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cz()
return a},
e8(a){var s
if(a==null)return new A.cM(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cM(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nB(a){if(a==null)return J.ea(a)
if(typeof a=="object")return A.dw(a)
return J.ea(a)},
nm(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nn(a,b){var s,r=a.length
for(s=0;s<r;++s)b.i(0,a[s])
return b},
mB(a,b,c,d,e,f){t.Z.a(a)
switch(A.bf(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(new A.fg("Unsupported number of arguments for wrapped closure"))},
hY(a,b){var s=a.$identity
if(!!s)return s
s=A.ni(a,b)
a.$identity=s
return s},
ni(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.mB)},
kW(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dD().constructor.prototype):Object.create(new A.bo(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.j5(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.kS(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.j5(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
kS(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.kQ)}throw A.f("Error in functionType of tearoff")},
kT(a,b,c,d){var s=A.j4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
j5(a,b,c,d){if(c)return A.kV(a,b,d)
return A.kT(b.length,d,a,b)},
kU(a,b,c,d){var s=A.j4,r=A.kR
switch(b?-1:a){case 0:throw A.f(new A.dA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
kV(a,b,c){var s,r
if($.j2==null)$.j2=A.j1("interceptor")
if($.j3==null)$.j3=A.j1("receiver")
s=b.length
r=A.kU(s,c,a,b)
return r},
iR(a){return A.kW(a)},
kQ(a,b){return A.fB(v.typeUniverse,A.bO(a.a),b)},
j4(a){return a.a},
kR(a){return a.b},
j1(a){var s,r,q,p=new A.bo("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.f(A.a8("Field name "+a+" not found."))},
i0(a){return v.getIsolateTag(a)},
ny(a){var s,r,q,p,o,n=A.x($.kn.$1(a)),m=$.i_[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bg($.ke.$2(a,n))
if(q!=null){m=$.i_[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.iq(s)
$.i_[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.i5[n]=s
return s}if(p==="-"){o=A.iq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kq(a,s)
if(p==="*")throw A.f(A.js(n))
if(v.leafTags[n]===true){o=A.iq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kq(a,s)},
kq(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.iW(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iq(a){return J.iW(a,!1,null,!!a.$iad)},
nA(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.iq(s)
else return J.iW(s,c,null,null)},
nt(){if(!0===$.iU)return
$.iU=!0
A.nu()},
nu(){var s,r,q,p,o,n,m,l
$.i_=Object.create(null)
$.i5=Object.create(null)
A.ns()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kr.$1(o)
if(n!=null){m=A.nA(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ns(){var s,r,q,p,o,n,m=B.M()
m=A.bM(B.N,A.bM(B.O,A.bM(B.A,A.bM(B.A,A.bM(B.P,A.bM(B.Q,A.bM(B.R(B.z),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kn=new A.i2(p)
$.ke=new A.i3(o)
$.kr=new A.i4(n)},
bM(a,b){return a(b)||b},
nk(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
jc(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.f(A.a9("Illegal RegExp pattern ("+String(o)+")",a,null))},
nF(a,b,c){var s=a.indexOf(b,c)
return s>=0},
km(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ks(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
H(a,b,c){var s
if(typeof b=="string")return A.nH(a,b,c)
if(b instanceof A.br){s=b.gb2()
s.lastIndex=0
return a.replace(s,A.km(c))}return A.nG(a,b,c)},
nG(a,b,c){var s,r,q,p
for(s=J.j_(b,a),s=s.gt(s),r=0,q="";s.j();){p=s.gp()
q=q+a.substring(r,p.gap())+c
r=p.gai()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
nH(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.ks(b),"g"),A.km(c))},
bW:function bW(a,b){this.a=a
this.$ti=b},
bV:function bV(){},
a5:function a5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bb:function bb(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bX:function bX(){},
bY:function bY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(){},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cn:function cn(){},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.a=a},
eP:function eP(a){this.a=a},
cM:function cM(a){this.a=a
this.b=null},
aS:function aS(){},
d3:function d3(){},
d4:function d4(){},
dG:function dG(){},
dD:function dD(){},
bo:function bo(a,b){this.a=a
this.b=b},
dA:function dA(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eI:function eI(a){this.a=a},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aH:function aH(a,b){this.a=a
this.$ti=b},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ae:function ae(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a6:function a6(a,b){this.a=a
this.$ti=b},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dW:function dW(a){this.b=a},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dE:function dE(a,b){this.a=a
this.c=b},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
nI(a){throw A.a1(A.je(a),new Error())},
bR(){throw A.a1(A.lb(""),new Error())},
cZ(){throw A.a1(A.la(""),new Error())},
kt(){throw A.a1(A.je(""),new Error())},
dQ(){var s=new A.fe()
return s.b=s},
fe:function fe(){this.b=null},
mr(a){return a},
li(a){return new Uint8Array(a)},
aP(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.hZ(b,a))},
mn(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.f(A.nl(a,b,c))
return b},
bv:function bv(){},
ck:function ck(){},
dl:function dl(){},
a7:function a7(){},
ci:function ci(){},
cj:function cj(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
cl:function cl(){},
cm:function cm(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
iB(a,b){var s=b.c
return s==null?b.c=A.cQ(a,"j7",[b.x]):s},
jn(a){var s=a.w
if(s===6||s===7)return A.jn(a.x)
return s===11||s===12},
ls(a){return a.as},
an(a){return A.fA(v.typeUniverse,a,!1)},
bj(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bj(a1,s,a3,a4)
if(r===s)return a2
return A.jG(a1,r,!0)
case 7:s=a2.x
r=A.bj(a1,s,a3,a4)
if(r===s)return a2
return A.jF(a1,r,!0)
case 8:q=a2.y
p=A.bL(a1,q,a3,a4)
if(p===q)return a2
return A.cQ(a1,a2.x,p)
case 9:o=a2.x
n=A.bj(a1,o,a3,a4)
m=a2.y
l=A.bL(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.iG(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bL(a1,j,a3,a4)
if(i===j)return a2
return A.jH(a1,k,i)
case 11:h=a2.x
g=A.bj(a1,h,a3,a4)
f=a2.y
e=A.n2(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.jE(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bL(a1,d,a3,a4)
o=a2.x
n=A.bj(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.iH(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.f(A.d1("Attempted to substitute unexpected RTI kind "+a0))}},
bL(a,b,c,d){var s,r,q,p,o=b.length,n=A.fG(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bj(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
n3(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fG(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bj(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
n2(a,b,c,d){var s,r=b.a,q=A.bL(a,r,c,d),p=b.b,o=A.bL(a,p,c,d),n=b.c,m=A.n3(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dT()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
kl(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.nq(s)
return a.$S()}return null},
nv(a,b){var s
if(A.jn(b))if(a instanceof A.aS){s=A.kl(a)
if(s!=null)return s}return A.bO(a)},
bO(a){if(a instanceof A.K)return A.u(a)
if(Array.isArray(a))return A.I(a)
return A.iN(J.aB(a))},
I(a){var s=a[v.arrayRti],r=t.p
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
u(a){var s=a.$ti
return s!=null?s:A.iN(a)},
iN(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mA(a,s)},
mA(a,b){var s=a instanceof A.aS?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.lY(v.typeUniverse,s.name)
b.$ccache=r
return r},
nq(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fA(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
np(a){return A.bk(A.u(a))},
n1(a){var s=a instanceof A.aS?A.kl(a):null
if(s!=null)return s
if(t.dm.b(a))return J.kP(a).a
if(Array.isArray(a))return A.I(a)
return A.bO(a)},
bk(a){var s=a.r
return s==null?a.r=new A.fp(a):s},
aC(a){return A.bk(A.fA(v.typeUniverse,a,!1))},
mz(a){var s=this
s.b=A.n_(s)
return s.b(a)},
n_(a){var s,r,q,p,o
if(a===t.K)return A.mH
if(A.bl(a))return A.mL
s=a.w
if(s===6)return A.mv
if(s===1)return A.k0
if(s===7)return A.mC
r=A.mZ(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.bl)){a.f="$i"+q
if(q==="D")return A.mF
if(a===t.m)return A.mE
return A.mK}}else if(s===10){p=A.nk(a.x,a.y)
o=p==null?A.k0:p
return o==null?A.e4(o):o}return A.mt},
mZ(a){if(a.w===8){if(a===t.S)return A.jZ
if(a===t.i||a===t.n)return A.mG
if(a===t.N)return A.mJ
if(a===t.y)return A.iO}return null},
my(a){var s=this,r=A.ms
if(A.bl(s))r=A.mi
else if(s===t.K)r=A.e4
else if(A.bP(s)){r=A.mu
if(s===t.h6)r=A.mg
else if(s===t.dk)r=A.bg
else if(s===t.fQ)r=A.me
else if(s===t.cg)r=A.jU
else if(s===t.I)r=A.mf
else if(s===t.an)r=A.E}else if(s===t.S)r=A.bf
else if(s===t.N)r=A.x
else if(s===t.y)r=A.au
else if(s===t.n)r=A.mh
else if(s===t.i)r=A.jT
else if(s===t.m)r=A.p
s.a=r
return s.a(a)},
mt(a){var s=this
if(a==null)return A.bP(s)
return A.nx(v.typeUniverse,A.nv(a,s),s)},
mv(a){if(a==null)return!0
return this.x.b(a)},
mK(a){var s,r=this
if(a==null)return A.bP(r)
s=r.f
if(a instanceof A.K)return!!a[s]
return!!J.aB(a)[s]},
mF(a){var s,r=this
if(a==null)return A.bP(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.K)return!!a[s]
return!!J.aB(a)[s]},
mE(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.K)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
k_(a){if(typeof a=="object"){if(a instanceof A.K)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ms(a){var s=this
if(a==null){if(A.bP(s))return a}else if(s.b(a))return a
throw A.a1(A.jV(a,s),new Error())},
mu(a){var s=this
if(a==null||s.b(a))return a
throw A.a1(A.jV(a,s),new Error())},
jV(a,b){return new A.cO("TypeError: "+A.jy(a,A.ah(b,null)))},
jy(a,b){return A.d9(a)+": type '"+A.ah(A.n1(a),null)+"' is not a subtype of type '"+b+"'"},
am(a,b){return new A.cO("TypeError: "+A.jy(a,b))},
mC(a){var s=this
return s.x.b(a)||A.iB(v.typeUniverse,s).b(a)},
mH(a){return a!=null},
e4(a){if(a!=null)return a
throw A.a1(A.am(a,"Object"),new Error())},
mL(a){return!0},
mi(a){return a},
k0(a){return!1},
iO(a){return!0===a||!1===a},
au(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a1(A.am(a,"bool"),new Error())},
me(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a1(A.am(a,"bool?"),new Error())},
jT(a){if(typeof a=="number")return a
throw A.a1(A.am(a,"double"),new Error())},
mf(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a1(A.am(a,"double?"),new Error())},
jZ(a){return typeof a=="number"&&Math.floor(a)===a},
bf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a1(A.am(a,"int"),new Error())},
mg(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a1(A.am(a,"int?"),new Error())},
mG(a){return typeof a=="number"},
mh(a){if(typeof a=="number")return a
throw A.a1(A.am(a,"num"),new Error())},
jU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a1(A.am(a,"num?"),new Error())},
mJ(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.a1(A.am(a,"String"),new Error())},
bg(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a1(A.am(a,"String?"),new Error())},
p(a){if(A.k_(a))return a
throw A.a1(A.am(a,"JSObject"),new Error())},
E(a){if(a==null)return a
if(A.k_(a))return a
throw A.a1(A.am(a,"JSObject?"),new Error())},
k4(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ah(a[q],b)
return s},
mP(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.k4(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.ah(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
jX(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.c([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.i(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.l(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.ah(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.ah(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.ah(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.ah(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.ah(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
ah(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.ah(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.ah(a.x,b)+">"
if(l===8){p=A.n4(a.x)
o=a.y
return o.length>0?p+("<"+A.k4(o,b)+">"):p}if(l===10)return A.mP(a,b)
if(l===11)return A.jX(a,b,null)
if(l===12)return A.jX(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.l(b,n)
return b[n]}return"?"},
n4(a){var s=A.ku(a)
if(s!=null)return s
return"minified:"+a},
lZ(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
lY(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fA(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cR(a,5,"#")
q=A.fG(s)
for(p=0;p<s;++p)q[p]=r
o=A.cQ(a,b,q)
n[b]=o
return o}else return m},
lW(a,b){return A.jR(a.tR,b)},
lV(a,b){return A.jR(a.eT,b)},
fA(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.jI(a,null,b,!1)
r.set(b,s)
return s},
fB(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.jI(a,b,c,!0)
q.set(c,r)
return r},
lX(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.iG(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
jI(a,b,c,d){return A.lN(A.lH(a,b,c,d))},
b2(a,b){b.a=A.my
b.b=A.mz
return b},
cR(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.as(null,null)
s.w=b
s.as=c
r=A.b2(a,s)
a.eC.set(c,r)
return r},
jG(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.lT(a,b,r,c)
a.eC.set(r,s)
return s},
lT(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.bl(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.bP(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.as(null,null)
q.w=6
q.x=b
q.as=c
return A.b2(a,q)},
jF(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.lR(a,b,r,c)
a.eC.set(r,s)
return s},
lR(a,b,c,d){var s,r
if(d){s=b.w
if(A.bl(b)||b===t.K)return b
else if(s===1)return A.cQ(a,"j7",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.as(null,null)
r.w=7
r.x=b
r.as=c
return A.b2(a,r)},
lU(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.as(null,null)
s.w=13
s.x=b
s.as=q
r=A.b2(a,s)
a.eC.set(q,r)
return r},
cP(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
lQ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
cQ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cP(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.as(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.b2(a,r)
a.eC.set(p,q)
return q},
iG(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.cP(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.as(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.b2(a,o)
a.eC.set(q,n)
return n},
jH(a,b,c){var s,r,q="+"+(b+"("+A.cP(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.as(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.b2(a,s)
a.eC.set(q,r)
return r},
jE(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cP(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cP(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.lQ(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.as(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.b2(a,p)
a.eC.set(r,o)
return o},
iH(a,b,c,d){var s,r=b.as+("<"+A.cP(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.lS(a,b,c,r,d)
a.eC.set(r,s)
return s},
lS(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fG(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bj(a,b,r,0)
m=A.bL(a,c,r,0)
return A.iH(a,n,m,c!==m)}}l=new A.as(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.b2(a,l)},
lH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lN(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.lJ(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.jA(a,r,l,k,!1)
else if(q===46)r=A.jA(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.be(a.u,a.e,k.pop()))
break
case 94:k.push(A.lU(a.u,k.pop()))
break
case 35:k.push(A.cR(a.u,5,"#"))
break
case 64:k.push(A.cR(a.u,2,"@"))
break
case 126:k.push(A.cR(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.lL(a,k)
break
case 38:A.lK(a,k)
break
case 63:p=a.u
k.push(A.jG(p,A.be(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.jF(p,A.be(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.lI(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.jB(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.lO(a.u,a.e,o)
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
return A.be(a.u,a.e,m)},
lJ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
jA(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.lZ(s,o.x)[p]
if(n==null)A.M('No "'+p+'" in "'+A.ls(o)+'"')
d.push(A.fB(s,o,n))}else d.push(p)
return m},
lL(a,b){var s,r=a.u,q=A.jz(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cQ(r,p,q))
else{s=A.be(r,a.e,p)
switch(s.w){case 11:b.push(A.iH(r,s,q,a.n))
break
default:b.push(A.iG(r,s,q))
break}}},
lI(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.jz(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.be(p,a.e,o)
q=new A.dT()
q.a=s
q.b=n
q.c=m
b.push(A.jE(p,r,q))
return
case-4:b.push(A.jH(p,b.pop(),s))
return
default:throw A.f(A.d1("Unexpected state under `()`: "+A.w(o)))}},
lK(a,b){var s=b.pop()
if(0===s){b.push(A.cR(a.u,1,"0&"))
return}if(1===s){b.push(A.cR(a.u,4,"1&"))
return}throw A.f(A.d1("Unexpected extended operation "+A.w(s)))},
jz(a,b){var s=b.splice(a.p)
A.jB(a.u,a.e,s)
a.p=b.pop()
return s},
be(a,b,c){if(typeof c=="string")return A.cQ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.lM(a,b,c)}else return c},
jB(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.be(a,b,c[s])},
lO(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.be(a,b,c[s])},
lM(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.f(A.d1("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.f(A.d1("Bad index "+c+" for "+b.l(0)))},
nx(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a2(a,b,null,c,null)
r.set(c,s)}return s},
a2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.bl(d))return!0
s=b.w
if(s===4)return!0
if(A.bl(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a2(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.a2(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.a2(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a2(a,b.x,c,d,e))return!1
return A.a2(a,A.iB(a,b),c,d,e)}if(s===6)return A.a2(a,p,c,d,e)&&A.a2(a,b.x,c,d,e)
if(q===7){if(A.a2(a,b,c,d.x,e))return!0
return A.a2(a,b,c,A.iB(a,d),e)}if(q===6)return A.a2(a,b,c,p,e)||A.a2(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.W)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.a2(a,j,c,i,e)||!A.a2(a,i,e,j,c))return!1}return A.jY(a,b.x,c,d.x,e)}if(q===11){if(b===t.W)return!0
if(p)return!1
return A.jY(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.mD(a,b,c,d,e)}if(o&&q===10)return A.mI(a,b,c,d,e)
return!1},
jY(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a2(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.a2(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a2(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a2(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.a2(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
mD(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fB(a,b,r[o])
return A.jS(a,p,null,c,d.y,e)}return A.jS(a,b.y,null,c,d.y,e)},
jS(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a2(a,b[s],d,e[s],f))return!1
return!0},
mI(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a2(a,r[s],c,q[s],e))return!1
return!0},
bP(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.bl(a))if(s!==6)r=s===7&&A.bP(a.x)
return r},
bl(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
jR(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fG(a){return a>0?new Array(a):v.typeUniverse.sEA},
as:function as(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
dT:function dT(){this.c=this.b=this.a=null},
fp:function fp(a){this.a=a},
dS:function dS(){},
cO:function cO(a){this.a=a},
lB(){var s,r,q
if(self.scheduleImmediate!=null)return A.n9()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hY(new A.fb(s),1)).observe(r,{childList:true})
return new A.fa(s,r,q)}else if(self.setImmediate!=null)return A.na()
return A.nb()},
lC(a){self.scheduleImmediate(A.hY(new A.fc(t.M.a(a)),0))},
lD(a){self.setImmediate(A.hY(new A.fd(t.M.a(a)),0))},
lE(a){t.M.a(a)
A.lP(0,a)},
lP(a,b){var s=new A.fn()
s.by(a,b)
return s},
jD(a,b,c){return 0},
mN(){var s,r
for(s=$.bK;s!=null;s=$.bK){$.cX=null
r=s.b
$.bK=r
if(r==null)$.cW=null
s.a.$0()}},
n0(){$.iP=!0
try{A.mN()}finally{$.cX=null
$.iP=!1
if($.bK!=null)$.iZ().$1(A.kh())}},
k7(a){var s=new A.dP(a),r=$.cW
if(r==null){$.bK=$.cW=s
if(!$.iP)$.iZ().$1(A.kh())}else $.cW=r.b=s},
mY(a){var s,r,q,p=$.bK
if(p==null){A.k7(a)
$.cX=$.cW
return}s=new A.dP(a)
r=$.cX
if(r==null){s.b=p
$.bK=$.cX=s}else{q=r.b
s.b=q
$.cX=r.b=s
if(q==null)$.cW=s}},
nD(a){var s=null,r=$.dM
if(B.t===r){A.k3(s,s,B.t,a)
return}A.k3(s,s,r,t.M.a(r.bb(a)))},
mS(a,b){A.mY(new A.fO(a,b))},
mT(a,b,c,d,e){var s,r=$.dM
if(r===c)return d.$0()
$.dM=c
s=r
try{r=d.$0()
return r}finally{$.dM=s}},
k3(a,b,c,d){t.M.a(d)
if(B.t!==c){d=c.bb(d)
d=d}A.k7(d)},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
fn:function fn(){},
fo:function fo(a,b){this.a=a
this.b=b},
cN:function cN(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bF:function bF(a,b){this.a=a
this.$ti=b},
dP:function dP(a){this.a=a
this.b=null},
e3:function e3(){},
dY:function dY(){},
fm:function fm(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.a=a
this.b=b},
jg(a,b){return new A.aG(a.h("@<0>").M(b).h("aG<1,2>"))},
a(a,b,c){return b.h("@<0>").M(c).h("jf<1,2>").a(A.nm(a,new A.aG(b.h("@<0>").M(c).h("aG<1,2>"))))},
k(a,b){return new A.aG(a.h("@<0>").M(b).h("aG<1,2>"))},
lf(a){return new A.aO(a.h("aO<0>"))},
aW(a){return new A.aO(a.h("aO<0>"))},
lg(a,b){return b.h("jh<0>").a(A.nn(a,new A.aO(b.h("aO<0>"))))},
iF(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fl(a,b,c){var s=new A.bd(a,b,c.h("bd<0>"))
s.c=a.e
return s},
le(a,b,c){var s=A.jg(b,c)
a.U(0,new A.eL(s,b,c))
return s},
b6(a,b,c){var s=A.jg(b,c)
s.R(0,a)
return s},
iy(a){var s,r
if(A.iV(a))return"{...}"
s=new A.a4("")
try{r={}
B.c.i($.ai,a)
s.a+="{"
r.a=!0
a.U(0,new A.eO(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return A.l($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aO:function aO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dU:function dU(a){this.a=a
this.c=this.b=null},
bd:function bd(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(){},
Z:function Z(){},
eN:function eN(a){this.a=a},
eO:function eO(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.$ti=b},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
cS:function cS(){},
bt:function bt(){},
b0:function b0(a,b){this.a=a
this.$ti=b},
aZ:function aZ(){},
cL:function cL(){},
bH:function bH(){},
mc(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.kL()
else s=new Uint8Array(o)
for(r=J.e7(a),q=0;q<o;++q){p=r.q(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
mb(a,b,c,d){var s=a?$.kK():$.kJ()
if(s==null)return null
if(0===c&&d===b.length)return A.jQ(s,b)
return A.jQ(s,b.subarray(c,d))},
jQ(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
j0(a,b,c,d,e,f){if(B.l.a3(f,4)!==0)throw A.f(A.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.f(A.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.f(A.a9("Invalid base64 padding, more than two '=' characters",a,b))},
jd(a,b,c){return new A.cd(a,b)},
mp(a){return a.cN()},
lF(a,b){return new A.fi(a,[],A.nj())},
lG(a,b,c){var s,r=new A.a4(""),q=A.lF(r,b)
q.ao(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
md(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
fE:function fE(){},
fD:function fD(){},
d2:function d2(){},
eb:function eb(){},
b3:function b3(){},
d6:function d6(){},
d8:function d8(){},
cd:function cd(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
dj:function dj(){},
eJ:function eJ(a){this.b=a},
fj:function fj(){},
fk:function fk(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.c=a
this.a=b
this.b=c},
dL:function dL(){},
f9:function f9(){},
fF:function fF(a){this.b=0
this.c=a},
f8:function f8(a){this.a=a},
fC:function fC(a){this.a=a
this.b=16
this.c=0},
j6(a){},
nw(a){var s=A.jk(a,null)
if(s!=null)return s
throw A.f(A.a9(a,null,null))},
kZ(a,b){a=A.a1(a,new Error())
if(a==null)a=A.e4(a)
a.stack=b.l(0)
throw a},
iw(a,b,c,d){var s,r=J.l6(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
ix(a,b,c){var s,r=A.c([],c.h("P<0>"))
for(s=J.aR(a);s.j();)B.c.i(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
bs(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.h("P<0>"))
s=A.c([],b.h("P<0>"))
for(r=J.aR(a);r.j();)B.c.i(s,r.gp())
return s},
j(a,b){var s=A.ix(a,!1,b)
s.$flags=3
return s},
jq(a,b,c){var s,r
A.jl(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.f(A.ag(c,b,null,"end",null))
if(s===0)return""}r=A.lu(a,b,c)
return r},
lu(a,b,c){var s=a.length
if(b>=s)return""
return A.lk(a,b,c==null||c>s?s:c)},
bz(a,b){return new A.br(a,A.jc(a,!1,b,!1,!1,""))},
jp(a,b,c){var s=J.aR(b)
if(!s.j())return a
if(c.length===0){do a+=A.w(s.gp())
while(s.j())}else{a+=A.w(s.gp())
while(s.j())a=a+c+A.w(s.gp())}return a},
ma(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.kI()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.T.a5(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.U(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
d9(a){if(typeof a=="number"||A.iO(a)||a==null)return J.aw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lj(a)},
da(a,b){A.kk(a,"error",t.K)
A.kk(b,"stackTrace",t.l)
A.kZ(a,b)},
d1(a){return new A.d0(a)},
a8(a){return new A.ax(!1,null,null,a)},
N(a,b,c){return new A.ax(!0,a,b,c)},
ag(a,b,c,d,e){return new A.cp(b,c,!0,a,d,"Invalid value")},
cq(a,b,c){if(0>a||a>c)throw A.f(A.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.ag(b,a,c,"end",null))
return b}return c},
jl(a,b){if(a<0)throw A.f(A.ag(a,0,null,b,null))
return a},
j9(a,b,c,d){return new A.dd(b,!0,a,d,"Index out of range")},
ba(a){return new A.cC(a)},
js(a){return new A.dH(a)},
z(a){return new A.bA(a)},
ay(a){return new A.d5(a)},
a9(a,b,c){return new A.aE(a,b,c)},
l5(a,b,c){var s,r
if(A.iV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.c.i($.ai,a)
try{A.mM(a,s)}finally{if(0>=$.ai.length)return A.l($.ai,-1)
$.ai.pop()}r=A.jp(b,t.w.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
it(a,b,c){var s,r
if(A.iV(a))return b+"..."+c
s=new A.a4(b)
B.c.i($.ai,a)
try{r=s
r.a=A.jp(r.a,a,", ")}finally{if(0>=$.ai.length)return A.l($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mM(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.j())return
s=A.w(l.gp())
B.c.i(b,s)
k+=s.length+2;++j}if(!l.j()){if(j<=5)return
if(0>=b.length)return A.l(b,-1)
r=b.pop()
if(0>=b.length)return A.l(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.j()){if(j<=4){B.c.i(b,A.w(p))
return}r=A.w(p)
if(0>=b.length)return A.l(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.j();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.l(b,-1)
k-=b.pop().length+2;--j}B.c.i(b,"...")
return}}q=A.w(p)
r=A.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.l(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.i(b,m)
B.c.i(b,q)
B.c.i(b,r)},
b1(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.l(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.jt(a4<a4?B.a.n(a5,0,a4):a5,5,a3).gbo()
else if(s===32)return A.jt(B.a.n(a5,5,a4),0,a3).gbo()}r=A.iw(8,0,!1,t.S)
B.c.k(r,0,0)
B.c.k(r,1,-1)
B.c.k(r,2,-1)
B.c.k(r,7,-1)
B.c.k(r,3,0)
B.c.k(r,4,0)
B.c.k(r,5,a4)
B.c.k(r,6,a4)
if(A.k6(a5,0,a4,0,r)>=14)B.c.k(r,7,a4)
q=r[1]
if(q>=0)if(A.k6(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.v(a5,"\\",n))if(p>0)h=B.a.v(a5,"\\",p-1)||B.a.v(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.v(a5,"..",n)))h=m>n+2&&B.a.v(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.v(a5,"file",0)){if(p<=0){if(!B.a.v(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.n(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.a_(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.v(a5,"http",0)){if(i&&o+3===n&&B.a.v(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.a_(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.v(a5,"https",0)){if(i&&o+4===n&&B.a.v(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.a_(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.al(a4<a5.length?B.a.n(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.iK(a5,0,q)
else{if(q===0)A.bI(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.m6(a5,c,p-1):""
a=A.m3(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jk(B.a.n(a5,i,n),a3)
d=A.iJ(a0==null?A.M(A.a9("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.m4(a5,n,m,a3,j,a!=null)
a2=m<l?A.m5(a5,m+1,l,a3):a3
return A.e1(j,b,a,d,a1,a2,l<a4?A.m2(a5,l+1,a4):a3)},
jv(a){var s=t.N
return B.c.cf(A.c(a.split("&"),t.s),A.k(s,s),new A.f7(B.o),t.Y)},
dK(a,b,c){throw A.f(A.a9("Illegal IPv4 address, "+a,b,c))},
ly(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.l(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.dK("each part must be in the range 0..255",a,r)}A.dK("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.dK(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.ao(d)
if(!(k<16))return A.l(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.dK(j,a,q)
p=l}A.dK("IPv4 address should contain exactly 4 parts",a,q)},
lz(a,b,c){var s
if(b===c)throw A.f(A.a9("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.l(a,b)
if(a.charCodeAt(b)===118){s=A.lA(a,b,c)
if(s!=null)throw A.f(s)
return!1}A.ju(a,b,c)
return!0},
lA(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.S;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.l(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.aE(n,a,q)
r=q
break}return new A.aE("Unexpected character",a,q-1)}if(r-1===b)return new A.aE(n,a,r)
return new A.aE("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.aE("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.l(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.l(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.aE("Invalid IPvFuture address character",a,r)}},
ju(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.f6(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.l(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.l(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.l(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.ly(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.l.aH(l,8)
if(!(o<16))return A.l(s,o)
s[o]=e;++o
if(!(o<16))return A.l(s,o)
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
B.F.br(s,a0,16,s,a)
B.F.ce(s,a,a0,0)}}return s},
e1(a,b,c,d,e,f,g){return new A.cT(a,b,c,d,e,f,g)},
jJ(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI(a,b,c){throw A.f(A.a9(c,a,b))},
iJ(a,b){if(a!=null&&a===A.jJ(b))return null
return a},
m3(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.l(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.l(a,r)
if(a.charCodeAt(r)!==93)A.bI(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.l(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.m0(a,q,r)
if(o<r){n=o+1
p=A.jP(a,B.a.v(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.lz(a,q,o)
l=B.a.n(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.l(a,k)
if(a.charCodeAt(k)===58){o=B.a.am(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.jP(a,B.a.v(a,"25",n)?o+3:n,c,"%25")}else p=""
A.ju(a,b,o)
return"["+B.a.n(a,b,o)+p+"]"}}return A.m8(a,b,c)},
m0(a,b,c){var s=B.a.am(a,"%",b)
return s>=b&&s<c?s:c},
jP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.a4(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.l(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.iL(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.a4("")
l=h.a+=B.a.n(a,q,r)
if(m)n=B.a.n(a,r,r+3)
else if(n==="%")A.bI(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.S.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.a4("")
if(q<r){h.a+=B.a.n(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.l(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.n(a,q,r)
if(h==null){h=new A.a4("")
m=h}else m=h
m.a+=i
l=A.iI(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.n(a,b,c)
if(q<c){i=B.a.n(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
m8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.S
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.l(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.iL(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.a4("")
k=B.a.n(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.n(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.a4("")
if(q<r){p.a+=B.a.n(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.bI(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.l(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.n(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.a4("")
l=p}else l=p
l.a+=k
j=A.iI(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.n(a,b,c)
if(q<c){k=B.a.n(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
iK(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.l(a,b)
if(!A.jL(a.charCodeAt(b)))A.bI(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.l(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.S.charCodeAt(p)&8)!==0))A.bI(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.n(a,b,c)
return A.m_(q?a.toLowerCase():a)},
m_(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m6(a,b,c){return A.cU(a,b,c,16,!1,!1)},
m4(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.cU(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.u(s,"/"))s="/"+s
return A.m7(s,e,f)},
m7(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.u(a,"/")&&!B.a.u(a,"\\"))return A.jO(a,!s||c)
return A.bJ(a)},
m5(a,b,c,d){if(a!=null)return A.cU(a,b,c,256,!0,!1)
return null},
m2(a,b,c){return A.cU(a,b,c,256,!0,!1)},
iL(a,b,c){var s,r,q,p,o,n,m=u.S,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.l(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.l(a,l)
q=a.charCodeAt(l)
p=A.i1(r)
o=A.i1(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.l(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.U(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.n(a,b,b+3).toUpperCase()
return null},
iI(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.l(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.l.c2(a,6*p)&63|q
if(!(o<r))return A.l(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.l(k,l)
if(!(m<r))return A.l(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.l(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.jq(s,0,null)},
cU(a,b,c,d,e,f){var s=A.jN(a,b,c,d,e,f)
return s==null?B.a.n(a,b,c):s},
jN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.S
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.l(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.iL(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.bI(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.l(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.iI(n)}if(o==null){o=new A.a4("")
k=o}else k=o
k.a=(k.a+=B.a.n(a,p,q))+l
if(typeof m!=="number")return A.nr(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.n(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
jM(a){if(B.a.u(a,"."))return!0
return B.a.aO(a,"/.")!==-1},
bJ(a){var s,r,q,p,o,n,m
if(!A.jM(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.l(s,-1)
s.pop()
if(s.length===0)B.c.i(s,"")}p=!0}else{p="."===n
if(!p)B.c.i(s,n)}}if(p)B.c.i(s,"")
return B.c.I(s,"/")},
jO(a,b){var s,r,q,p,o,n
if(!A.jM(a))return!b?A.jK(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.gW(s)!==".."){if(0>=s.length)return A.l(s,-1)
s.pop()}else B.c.i(s,"..")
p=!0}else{p="."===n
if(!p)B.c.i(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.c.i(s,"")
if(!b){if(0>=s.length)return A.l(s,0)
B.c.k(s,0,A.jK(s[0]))}return B.c.I(s,"/")},
jK(a){var s,r,q,p=u.S,o=a.length
if(o>=2&&A.jL(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.n(a,0,s)+"%3A"+B.a.E(a,s+1)
if(r<=127){if(!(r<128))return A.l(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
m9(a,b){if(a.cj("package")&&a.c==null)return A.k8(b,0,b.length)
return-1},
m1(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.l(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.f(A.a8("Invalid URL encoding"))}}return r},
e2(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.l(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.o===d)return B.a.n(a,b,c)
else p=new A.bp(B.a.n(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.l(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.f(A.a8("Illegal percent encoding in URI"))
if(r===37){if(n+3>o)throw A.f(A.a8("Truncated URI"))
B.c.i(p,A.m1(a,n+1))
n+=2}else if(e&&r===43)B.c.i(p,32)
else B.c.i(p,r)}}t.L.a(p)
return B.ag.a5(p)},
jL(a){var s=a|32
return 97<=s&&s<=122},
jt(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.f(A.a9(k,a,r))}}if(q<0&&r>b)throw A.f(A.a9(k,a,r))
while(p!==44){B.c.i(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.l(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.c.i(j,o)
else{n=B.c.gW(j)
if(p!==44||r!==n+7||!B.a.v(a,"base64",n+1))throw A.f(A.a9("Expecting '='",a,r))
break}}B.c.i(j,r)
m=r+1
if((j.length&1)===1)a=B.L.cn(a,m,s)
else{l=A.jN(a,m,s,256,!0,!1)
if(l!=null)a=B.a.a_(a,m,s,l)}return new A.f5(a,j,c)},
k6(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.l(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.l(n,p)
o=n.charCodeAt(p)
d=o&31
B.c.k(e,o>>>5,r)}return d},
jC(a){if(a.b===7&&B.a.u(a.a,"package")&&a.c<=0)return A.k8(a.a,a.e,a.f)
return-1},
k8(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.l(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
mm(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.l(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
ff:function ff(){},
T:function T(){},
d0:function d0(a){this.a=a},
cB:function cB(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cp:function cp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dd:function dd(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cC:function cC(a){this.a=a},
dH:function dH(a){this.a=a},
bA:function bA(a){this.a=a},
d5:function d5(a){this.a=a},
du:function du(){},
cz:function cz(){},
fg:function fg(a){this.a=a},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
af:function af(){},
K:function K(){},
a4:function a4(a){this.a=a},
f7:function f7(a){this.a=a},
f6:function f6(a){this.a=a},
cT:function cT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
dR:function dR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi(a){var s,r,q,p,o,n,m,l=null,k=null
for(p=A.I(a).h("G<1>"),o=new A.G(a,p),o=new A.C(o,o.gm(0),p.h("C<y.E>")),p=p.h("y.E");o.j();){n=o.d
s=n==null?p.a(n):n
try{s.$0()}catch(m){r=A.d_(m)
q=A.e8(m)
if(l==null)l=r
if(k==null)k=q}}B.c.S(a)
if(l!=null){p=l
o=k
o.toString
A.da(p,o)}},
k9(a){var s=a==null?null:J.aw(a)
return s==null?"":s},
mk(a){var s
if(a==null||J.aD(a,!1))return null
s=J.aB(a)
return s.P(a,!0)?"":s.l(a)},
dc:function dc(){},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(a){this.a=a},
ev:function ev(a,b){this.a=a
this.b=b},
ew:function ew(a){this.a=a},
ey:function ey(a){this.a=a},
ez:function ez(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a},
eC:function eC(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
et:function et(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eq:function eq(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
lq(a,b){var s=A.j(b,t.j),r=A.I(s)
r=A.j(new A.a_(s,r.h("aY(1)").a(new A.eV()),r.h("a_<1,aY>")),t.eV)
A.n8(r)
return A.lp(a,A.nC(),new A.eY(r),s)},
lp(a,b,c,d){var s,r,q,p=t.A
p=A.k(p,p)
for(s=d.length,r=0;r<s;++r){q=d[r]
p.k(0,q.a.a,q)}return new A.eU(c,a,b,A.bq(p,t.N,t.j),new A.dF())},
mo(a){var s=null
t.O.a(a)
return A.j8(s,"The requested page was not found.",B.D,"en",s,B.w,s,B.a3,"Not Found",s)},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
eV:function eV(){},
dy(a){var s=A.iQ(a),r=A.I(s),q=r.h("a_<1,r>")
s=A.bs(new A.a_(s,r.h("r(1)").a(new A.eW()),q),q.h("y.E"))
s.$flags=1
return new A.aY(a,s)},
e6(a){var s,r,q,p,o,n,m,l,k,j="path"
if(!B.a.u(a,"/")||B.a.u(a,"//"))throw A.f(A.N(a,j,"Route paths must start with /."))
s=A.b1(a)
if(s.ga7()||s.ga6())throw A.f(A.N(a,j,"Route definitions cannot include a query or fragment."))
r=A.fJ(s.gL())
q=A.aW(t.N)
for(p=A.iQ(r),o=p.length,n=0;n<p.length;p.length===o||(0,A.bQ)(p),++n){m=p[n]
l=B.a.u(m,":")
if(l){k=A.bz("^:[A-Za-z_][A-Za-z0-9_]*$",!0)
k=!k.b.test(m)}else k=!1
if(k)throw A.f(A.N(a,j,"Invalid parameter segment."))
if(l&&!q.i(0,B.a.E(m,1)))throw A.f(A.N(a,j,"Route parameter names must be unique."))}return r},
n8(a){var s,r,q,p,o,n
for(s=a.length,r=0;r<s;++r){q=a[r]
for(p=q.b,o=0;o<r;++o){n=a[o]
if(A.mX(q,n))throw A.f(A.a8('Duplicate route definitions: "'+n.a+'" and "'+q.a+'".'))
if(q.gaI()===n.gaI()&&A.mU(p,n.b))throw A.f(A.a8('Ambiguous route definitions: "'+n.a+'" and "'+q.a+'" match the same path with equal specificity.'))}}},
mX(a,b){var s,r,q,p,o=a.b,n=o.length,m=b.b,l=m.length
if(n!==l)return!1
for(s=0;s<n;++s){r=o[s]
if(!(s<l))return A.l(m,s)
q=m[s]
p=B.a.u(r,":")
if(p!==B.a.u(q,":"))return!1
if(!p&&r!==q)return!1}return!0},
mU(a,b){var s,r,q,p=a.length,o=b.length
if(p!==o)return!1
for(s=0;s<p;++s){r=a[s]
if(!(s<o))return A.l(b,s)
q=b[s]
if(!B.a.u(r,":")&&!B.a.u(q,":")&&r!==q)return!1}return!0},
fJ(a){var s,r=a.length===0?"/":a
if(!B.a.u(r,"/"))r="/"+r
for(;;){s=r.length
if(!(s>1&&B.a.cc(r,"/")))break
r=B.a.n(r,0,s-1)}return r},
iQ(a){var s=A.fJ(a)
if(s==="/")return B.h
return A.c(B.a.E(s,1).split("/"),t.s)},
aY:function aY(a,b){this.a=a
this.b=b},
eW:function eW(){},
eX:function eX(){},
aL:function aL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.f=d},
eY:function eY(a){this.a=a},
ct:function ct(a,b,c,d,e,f,g){var _=this
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
eZ:function eZ(a,b){this.a=a
this.b=b},
lr(a){var s=a.b,r=t.N,q=t.dw
q=new A.dz(s,!0,A.k(r,q),A.k(r,q))
q.bx(s,!0)
return q},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.y=_.x=_.w=$
_.z=!1},
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
j8(a,b,c,d,e,f,g,h,i,j){var s=A.j(f,t.a),r=A.j(c,t.F)
if(B.a.ae(d).length===0)A.M(A.N(d,"language","Cannot be empty."))
return new A.c4(i,b,a,s,r,g,j,h,d,e)},
c5(a){var s="A web application built with SparrowKit.",r=null,q="property",p="name"
return A.j8(r,s,B.D,"en",r,A.c([new A.aq(q,"og:title",a),new A.aq(q,"og:type","website"),new A.aq(q,"og:description",s),new A.aq(p,"twitter:card","summary"),new A.aq(p,"twitter:title",a),new A.aq(p,"twitter:description",s)],t.r),r,r,a,r)},
aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c,d,e,f,g,h,i,j){var _=this
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
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
S(a,b,c,d,e,f,g,h){var s,r=t.N,q=A.bq(b,r,t.X),p=A.mO(d),o=A.bq(e,r,t.o),n=A.bq(g,r,t.d),m=A.bq(c,r,t.dz)
r=A.j(f,r)
s=A.bz("^[A-Za-z][A-Za-z0-9-]*$",!0)
if(!s.b.test(a))A.M(A.N(a,"tag","Invalid HTML tag name."))
if(h!=null&&a.toLowerCase()!=="select")A.M(A.N(a,"tag","A value signal is only supported on select elements."))
return new A.aj(a,q,p,o,n,m,h,r)},
cY(a){var s=t.N,r=A.lg(['*,*::before,*::after{box-sizing:border-box}body{margin:0}button {\n  -webkit-appearance: none;\n  appearance: none;\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  margin: 0;\n  padding: 8px 12px;\n  border: 0;\n  border-radius: 4px;\n  background-color: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: center;\n  text-decoration: none;\n}\nbutton:not(:disabled) {\n  cursor: pointer;\n}\nbutton:focus-visible,\n[role="button"]:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\nbutton:not(:disabled):hover,\n[role="button"][data-sparrow-inkwell]:hover {\n  background-color: rgba(0, 0, 0, 0.06);\n}\nbutton:not(:disabled):active,\n[role="button"][data-sparrow-inkwell]:active {\n  background-color: rgba(0, 0, 0, 0.12);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\nbutton[data-sparrow-variant="elevated"] {\n  background-color: rgba(0, 0, 0, 0.08);\n}\nbutton[data-sparrow-variant="elevated"]:hover:not(:disabled) {\n  background-color: rgba(0, 0, 0, 0.12);\n}\nbutton[data-sparrow-variant="elevated"]:active:not(:disabled) {\n  background-color: rgba(0, 0, 0, 0.16);\n}\nbutton[data-sparrow-variant="icon"] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  min-height: 44px;\n  padding: 0;\n  flex: 0 0 44px;\n  border-radius: 50%;\n}\n.sparrow-field {\n  display: grid;\n  gap: 4px;\n  min-width: 0;\n  max-width: 100%;\n}\n.sparrow-field__label {\n  display: block;\n}\n.sparrow-field__control {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  padding: 0 12px;\n  border: var(--sparrow-field-border, 1px solid #767676);\n  border-radius: var(--sparrow-field-radius, 4px);\n  background-color: var(--sparrow-field-fill, transparent);\n}\n.sparrow-field__control:focus-within {\n  border: var(\n    --sparrow-field-focused-border,\n    var(--sparrow-field-border, 1px solid #767676)\n  );\n  border-radius: var(\n    --sparrow-field-focused-radius,\n    var(--sparrow-field-radius, 4px)\n  );\n}\n.sparrow-field__control input {\n  box-sizing: border-box;\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n  padding: 10px 0;\n  border: 0;\n  border-radius: 0;\n  outline: 0;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n}\n.sparrow-field__control input:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 1px;\n}\n.sparrow-field__control input:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.sparrow-field__prefix,\n.sparrow-field__suffix {\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.sparrow-field__helper {\n  font-size: 0.875em;\n}\n.sparrow-field__error {\n  color: #b3261e;\n  font-size: 0.875em;\n}\n[role="button"] {\n  cursor: pointer;\n}\n[role="button"][data-sparrow-inkwell] {\n  user-select: none;\n  border-radius: 4px;\n}\n'],s)
new A.hW(r).$1(a)
return A.j(r,s)},
iX(a,b){if(a===b)return!0
if(a instanceof A.a3)return b instanceof A.a3&&a.a===b.a
if(a instanceof A.b8)return!1
if(a instanceof A.aI)return b instanceof A.aI&&A.mW(a,b)
if(a instanceof A.aj)return b instanceof A.aj&&A.mV(a,b)
return!1},
ko(a){var s,r,q,p,o
for(s=new A.bp(a),r=t.e,s=new A.C(s,s.gm(0),r.h("C<J.E>")),r=r.h("J.E"),q=17,p=29;s.j();){o=s.d
if(o==null)o=r.a(o)
q=B.l.a3(q*31+o,2147483647)
p=B.l.a3(p*37+o,2147483629)}return"sparrow-responsive-"+B.l.bn(q,36)+"-"+B.l.bn(p,36)},
mO(a){var s,r,q,p,o=A.c([],t.E)
for(s=J.aR(a),r=t.ah;s.j();){q=s.gp()
if(q instanceof A.a3){p=q.a
if(p.length===0)continue
if(o.length!==0&&B.c.gW(o) instanceof A.a3){if(0>=o.length)return A.l(o,-1)
B.c.i(o,new A.a3(r.a(o.pop()).a+p))}else B.c.i(o,q)}else B.c.i(o,q)}return A.j(o,t.eT)},
kd(a){var s,r,q,p=A.aW(t.N),o=A.c([],t.d0)
for(s=J.aR(a);s.j();){r=s.gp()
q=r.a
if(q.length===0)throw A.f(A.N(q,"key","Keys cannot be empty."))
if(!p.i(0,q))throw A.f(A.z('Duplicate keyed child key "'+q+'".'))
B.c.i(o,r)}return A.j(o,t.fV)},
mW(a,b){return!1},
mV(a,b){var s,r,q,p,o,n=!0
if(a.a===b.a){s=a.b
r=b.b
if(s.gm(s)===r.gm(r)){s=a.d
r=b.d
if(s.gm(s)===r.gm(r)){s=a.e
r=b.e
if(s.gm(s)===r.gm(r)){n=a.f
s=b.f
n=n.gm(n)!==s.gm(s)||!A.k5(a.r,b.r)||a.c.length!==b.c.length||a.w.length!==b.w.length}}}}if(n)return!1
for(n=a.b.gC(),n=n.gt(n),s=b.b;n.j();){r=n.gp()
q=r.a
if(!s.N(q)||!A.k5(r.b,s.q(0,q)))return!1}for(n=a.d.gC(),n=n.gt(n),s=b.d;n.j();){r=n.gp()
if(r.b!==s.q(0,r.a))return!1}for(n=a.e.gC(),n=n.gt(n),s=b.e;n.j();){r=n.gp()
if(r.b!==s.q(0,r.a))return!1}for(n=a.f.gC(),n=n.gt(n),s=b.f;n.j();){r=n.gp()
if(r.b!==s.q(0,r.a))return!1}for(n=a.c,s=n.length,r=b.c,q=r.length,p=0;p<s;++p){o=n[p]
if(!(p<q))return A.l(r,p)
if(!A.iX(o,r[p]))return!1}for(n=a.w,s=n.length,r=b.w,q=r.length,p=0;p<s;++p){o=n[p]
if(!(p<q))return A.l(r,p)
if(o!==r[p])return!1}return!0},
k5(a,b){if(a==null?b==null:a===b)return!0
return!1},
X:function X(){},
a3:function a3(a){this.a=a},
b8:function b8(){},
cw:function cw(){},
aj:function aj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aI:function aI(){},
hW:function hW(a){this.a=a},
hX:function hX(){},
iM(a,b,c){if(a.N(b)&&!J.aD(a.q(0,b),c))throw A.f(A.z('Conflicting initial values for signal "'+A.w(b)+'".'))
a.k(0,b,c)},
bh(a){var s=A.H(a,"&","&amp;")
s=A.H(s,"<","&lt;")
return A.H(s,">","&gt;")},
dF:function dF(){},
f2:function f2(){},
jm(a){if(a.d)return
$.bx.i(0,a)
A.iA()},
iA(){if($.bx.a===0||$.iz||$.eR)return
$.iz=!0
A.nD(A.nE())},
ll(){var s,r,q,p,o,n,m,l,k,j,i
$.iz=!1
m=$.eR
if(m){A.iA()
return}$.eR=!0
s=null
r=null
try{for(m=A.u($.bx).c;$.bx.a!==0;){l=A.bs($.bx,m)
l.$flags=1
q=l
$.bx.S(0)
for(l=q,k=l.length,j=0;j<l.length;l.length===k||(0,A.bQ)(l),++j){p=l[j]
try{p.b6()}catch(i){o=A.d_(i)
n=A.e8(i)
if(s==null)s=o
if(r==null)r=n}}}}finally{$.eR=!1
A.iA()}if(s!=null){m=s
l=r
l.toString
A.da(m,l)}},
lm(a,b,c){var s
B.c.i($.aJ,a)
try{s=b.$0()
return s}finally{if(0>=$.aJ.length)return A.l($.aJ,-1)
$.aJ.pop()}},
by(a,b){var s,r,q=$.aK.length
if(q===0)r=null
else{if(0>=q)return A.l($.aK,-1)
r=$.aK.pop()}s=r
try{q=a.$0()
return q}finally{if(s!=null)B.c.i($.aK,s)}},
bN(a){var s,r,q=new A.bE(a,A.aW(t.af))
try{q.b6()}catch(s){q.J()
throw s}r=q.ga2()
if($.aJ.length!==0)B.c.i(B.c.gW($.aJ),r)
return q.ga2()},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bE:function bE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=!1},
aT:function aT(){},
ec:function ec(a){this.a=a},
nc(a,b){return A.bN(new A.fS(a,b))},
kp(a,b,c){var s=A.mj(c)
if(A.bg(a.getAttribute(b))==s)return
if(s==null)a.removeAttribute(b)
else a.setAttribute(b,s)},
ki(a,b,c){return A.bN(new A.fQ(a,b,c))},
kj(a,b){return A.bN(new A.fR(b,a))},
mj(a){var s
if(a==null||J.aD(a,!1))return null
s=J.aB(a)
return s.P(a,!0)?"":s.l(a)},
fS:function fS(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a,b){this.a=a
this.b=b},
e5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='Conflicting generated stylesheet "',d={},c=A.c([],t.s)
try{for(l=a.length,k=v.G,j=0;j<l;++j){s=a[j]
r=A.ko(s)
q=$.fP.q(0,r)
if(q==null){p=A.E(A.p(k.document).getElementById(r))
o=null
n=null
if(p!=null){i=!0
if(A.au(p.hasAttribute("data-sparrow-stylesheet"))){i=A.bg(p.textContent)
h=s
h=i==null?h!=null:i!==h
i=h}if(i){l=A.z(e+A.w(r)+'".')
throw A.f(l)}o=p
n=!1}else{m=A.E(A.p(k.document).head)
if(m==null){l=A.z("The document has no head element.")
throw A.f(l)}g=A.p(A.p(k.document).createElement("style"))
g.id=r
g.setAttribute("data-sparrow-stylesheet","")
g.textContent=s
o=g
A.p(m.appendChild(o))
n=!0}q=new A.e0(o,A.au(n))
$.fP.k(0,r,q)}else{i=A.bg(q.a.textContent)
h=s
if(i==null?h!=null:i!==h){l=A.z(e+A.w(r)+'".')
throw A.f(l)}}++q.c
J.e9(c,r)}}catch(f){A.k2(c)
throw f}d.a=!1
return new A.fH(d,c)},
k2(a){var s,r,q,p
for(s=A.I(a).h("G<1>"),r=new A.G(a,s),r=new A.C(r,r.gm(0),s.h("C<y.E>")),s=s.h("y.E");r.j();){q=r.d
if(q==null)q=s.a(q)
p=$.fP.q(0,q)
if(p==null)continue
if(--p.c!==0)continue
if(p.b)p.a.remove()
$.fP.Z(0,q)}},
fH:function fH(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b
this.c=0},
kf(a,b){var s,r,q,p,o,n,m,l,k,j=new A.dF().cA(new A.dV(a),null,"sparrow-fragment"),i=A.E(A.p(A.p(new v.G.DOMParser()).parseFromString(j,"text/html")).getElementById("sparrow-fragment"))
if(i==null)throw A.f(A.z("Could not render a markup fragment."))
s=A.c([],t.eO)
try{r=A.E(i.firstChild)
while(r!=null){q=A.E(r.nextSibling)
p=A.p(r.cloneNode(!0))
A.p(b.appendChild(p))
J.e9(s,p)
r=q}}catch(n){for(m=s,l=A.I(m).h("G<1>"),m=new A.G(m,l),m=new A.C(m,m.gm(0),l.h("C<y.E>")),l=l.h("y.E");m.j();){k=m.d
o=k==null?l.a(k):k
k=A.E(o.parentNode)
if(k!=null)A.p(k.removeChild(o))}throw n}},
dV:function dV(a){this.a=a},
d7:function d7(a){this.a=a
this.b=null
this.c=!1},
eo:function eo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
en:function en(a){this.a=a},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a,b){this.a=a
this.b=b},
ed:function ed(a){this.a=a},
ee:function ee(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a){this.a=a},
eh:function eh(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
b(a,b,c){return new A.b_(a,b,c)},
iD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.cA(k,m,p,j,e,l,q,r,!0,!0,f,b,h,c,i,n,o,a)},
i(a,b,c,d,e,f,g,h,i,j){A.B(j,"width")
A.B(e,"height")
A.B(h,"padding")
A.B(null,"margin")
A.B(c,"borderRadius")
A.B(g,"minWidth")
A.B(f,"maxWidth")
if(b!=null&&B.a.G(b,";"))A.M(A.N(b,"backgroundColor",u.s))
return new A.bZ(d,i,j,e,h,b,c,g,f,a)},
lo(a,b){var s=new A.cs(a,b)
s.bw(B.d,a,"div",b)
return s},
h(a,b){A.n6(b,"padding",!1)
return new A.co(a,b)},
ap(a,b){if(b<1)A.M(A.N(b,"flex","Must be at least 1."))
return new A.c2(a,b)},
d(a,b,c){var s
A.B(c,"width")
A.B(b,"height")
if(c==null)s=b==null
else s=!1
if(s)A.M(A.a8("SizedBox requires a width, height, or child."))
return new A.cx(c,b,a)},
aA(a,b,c,d,e,f){var s=A.j(b,t.g)
A.B(f,"spacing")
A.B(e,"runSpacing")
return new A.cE(s,f,e,a,d,c)},
dB(a,b){var s=[]
s.push(a)
B.c.R(s,B.a_)
s=A.j(s,t.g)
if(s.length!==1)A.M(A.a8("A scroll view must have one child or a child list."))
return new A.cv(s,!1)},
is(a,b,c,d,e){A.B(e,"thickness")
A.B(c,"height")
A.B(d,"indent")
A.B(b,"endIndent")
if(B.a.G(a,";"))A.M(A.N(a,"color",u.s))
return new A.c0(a,e,c,d,b)},
aF(a,b,c,d,e){var s=A.j(a,t.g)
if(b<1)A.M(A.N(b,"columns","Must be at least one column."))
A.B(c,"gap")
A.B(null,"rowGap")
A.B(null,"columnGap")
A.n7(d)
A.kc(e,"gap",!1)
return new A.c3(s,b,c,d,e)},
t(a,b,c){if(a<1||a>6)A.M(A.N(a,"level","Heading level must be 1-6."))
return new A.c6(a,b,c)},
nJ(a){var s=t.N,r=new A.fq(A.k(s,s)),q=r.a5(a),p=r.ga0()
if(p==null)return q
if(!(q instanceof A.aj))throw A.f(A.z("A UI tree must lower to an HTML element."))
s=A.bs(q.w,s)
s.push(p)
return A.S(q.a,q.b,q.f,q.c,q.d,s,q.e,null)},
mR(a,b){var s,r,q,p,o,n,m,l=new A.a4("")
for(s=a+"{",r=0;r<3;++r){q=B.C[r]
p=b.q(0,q)
if(p==null)continue
o=s+p+";}"
n=q.c
m=l.a
l.a=(n==null?l.a=m+o:l.a=m+("@media (min-width: "+A.w(n)+"px){"+o+"}"))+"\n"}s=l.a
return B.a.cH(s.charCodeAt(0)==0?s:s)},
mx(a,b){return A.cV(a.a,b)+" "+A.cV(a.b,b)+" "+A.cV(a.c,b)+" "+A.cV(a.d,b)},
mw(a,b,c,d){var s
A.B(c,"value")
s=A.a0(c)
return"display:grid;grid-template-columns:"+("repeat("+b+",minmax(0,1fr))")+";"+("gap:"+(s+"px"))},
aQ(a,b){var s=A.b6(a,t.N,t.X)
if(b.length!==0)s.k(0,"style",A.fI(a.q(0,"style"),b))
return s},
k1(a,b){if(a.gK().a1(0,new A.fN()))throw A.f(A.a8(b+" responsive values manage their own inline styles."))},
mQ(a,b,c){var s,r,q=a.gC()
q=q.gt(q)
for(;;){if(!q.j()){s=null
break}r=q.gp()
if(r.a.toLowerCase()==="style"){s=r.b
break}}if(s==null)return
if(typeof s!="string")throw A.f(A.N(s,"style",c+" styles must be static strings."))
if(B.c.a1(A.c(s.split(";"),t.s),new A.fK(b)))throw A.f(A.a8(c+" responsive values manage the "+b+" property."))},
fL(a,b){if(a.gK().a1(0,new A.fM()))throw A.f(A.a8(b+" uses the reserved data-sparrow-layout attribute."))},
jW(a,b,c,d){A.B(c,"gap")
A.B(c,"value")
return"display:flex;flex-direction:"+b+";gap:"+(A.a0(c)+"px")+";justify-content:flex-start;align-items:"+a.c+";min-width:0;min-height:0"},
fI(a,b){var s,r=a==null
if(!r&&typeof a!="string")throw A.f(A.N(a,"style","Layout styles must be static strings."))
A.bg(a)
s=r?null:B.a.ae(a)
if(s==null)s=""
if(s.length===0)return b
return s+";"+b},
cV(a,b){A.kb(a,"value")
return A.a0(a)+"px"},
a0(a){if(a===0)return"0"
return a===B.l.cD(a)?B.l.l(B.l.cG(a)):B.l.l(a)},
n6(a,b,c){var s,r,q,p,o
for(s=A.a(["top",a.a,"right",a.b,"bottom",a.c,"left",a.d],t.N,t.i),s=new A.a6(s,A.u(s).h("a6<1,2>")).gt(0),r=b+".";s.j();){q=s.d
p=q.b
o=r+q.a
if(!isFinite(p))A.M(A.N(p,o,"Must be a finite CSS length."))
if(p<0)throw A.f(A.N(p,o,"Must be a non-negative value."))}},
kc(a,b,c){var s,r,q,p,o,n,m=A.k(t.b,t.i)
m.k(0,B.r,a.a)
s=a.b
if(s!=null)m.k(0,B.q,s)
r=a.c
if(r!=null)m.k(0,B.p,r)
m=new A.a6(m,m.$ti.h("a6<1,2>")).gt(0)
q=b+"."
while(m.j()){p=m.d
o=p.b
n=q+p.a.b
if(!isFinite(o))A.M(A.N(o,n,"Must be a finite CSS length."))
if(o<0)throw A.f(A.N(o,n,"Must be a non-negative value."))}},
n7(a){var s,r,q,p,o,n=A.k(t.b,t.S)
n.k(0,B.r,a.a)
s=a.b
if(s!=null)n.k(0,B.q,s)
r=a.c
if(r!=null)n.k(0,B.p,r)
n=new A.a6(n,n.$ti.h("a6<1,2>")).gt(0)
while(n.j()){q=n.d
p=q.b
o=q.a
if(p<1)A.M(A.N(p,"columns."+o.b,"Must be at least one column."))}},
kb(a,b){if(a!=null&&!isFinite(a))throw A.f(A.N(a,b,"Must be a finite CSS length."))},
B(a,b){A.kb(a,b)},
ka(a){var s=a==null?null:a
return s==null?"":s},
eM:function eM(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){this.c=a
this.a=b
this.b=c},
R:function R(){},
b_:function b_(a,b,c){this.a=a
this.f=b
this.r=c},
q:function q(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cA:function cA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.CW=r},
V:function V(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
n:function n(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
A:function A(a){this.a=a},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cs:function cs(a,b){this.a=a
this.b=b},
eS:function eS(){},
e:function e(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
co:function co(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cv:function cv(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cy:function cy(a,b,c){this.a=a
this.d=b
this.e=c},
bw:function bw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
aX:function aX(a,b,c){this.c=a
this.a=b
this.b=c},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a){this.a=a},
bG:function bG(a,b){this.a=a
this.b=b},
fq:function fq(a){this.a=a},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
fs:function fs(){},
ft:function ft(){},
fr:function fr(a){this.a=a},
fu:function fu(a,b){this.a=a
this.b=b},
fN:function fN(){},
fK:function fK(a){this.a=a},
fM:function fM(){},
nz(){var s,r,q,p,o,n,m,l=A.dQ(),k=A.lq(new A.ic(),A.c([new A.ar(A.dy(A.e6("/")),new A.id(l),new A.ie()),new A.ar(A.dy(A.e6("/services")),new A.ih(l),new A.ii()),new A.ar(A.dy(A.e6("/solutions")),new A.ij(l),new A.ik()),new A.ar(A.dy(A.e6("/about")),new A.il(l),new A.im()),new A.ar(A.dy(A.e6("/contact")),new A.io(l),new A.ip())],t.d3))
l.saj(A.lr(k))
s=l.A()
r=A.c([],t.u)
q=t.z
p=A.c([],q)
q=A.c([],q)
A.j(B.Z,t.K)
o=new A.ct(s,k,!0,!1,r,p,q)
if(s.a!==k.b)A.M(A.a8("Create the router with Router.fromCatalog(catalog) to share routes."))
s=v.G
n=A.E(A.p(s.document).querySelector("#app"))
if(n==null)A.M(A.z('No element found for selector "#app".'))
r=A.E(n.firstChild)
if(r!=null)o.CW=n
o.bt(n)
m=A.dQ()
m.saj(A.av(new A.ig(m,o,l)))
r=A.p(s.window)
r.addEventListener("pagehide",m.A())
r.addEventListener("beforeunload",m.A())
s=A.E(A.p(s.document).body)
if(s!=null)s.setAttribute("data-sparrow-hydrated","true")},
id:function id(a){this.a=a},
ia:function ia(a){this.a=a},
ie:function ie(){},
ih:function ih(a){this.a=a},
i9:function i9(a){this.a=a},
ii:function ii(){},
ij:function ij(a){this.a=a},
i8:function i8(a){this.a=a},
ik:function ik(){},
il:function il(a){this.a=a},
i7:function i7(a){this.a=a},
im:function im(){},
io:function io(a){this.a=a},
i6:function i6(a){this.a=a},
ip:function ip(){},
ic:function ic(){},
ib:function ib(){},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
nd(c8,c9,d0){var s,r,q,p,o,n,m,l,k="#FFFFFF",j=null,i="div",h="#173B5E",g="SPARROW KIT",f="click",e="data-sparrow-inkwell",d=u.d,c=u.H,b=u.e,a="Services",a0="Solutions",a1="Contact",a2=1200,a3=u.a,a4=u.m,a5="#E5EBF0",a6='font-family:"Manrope",system-ui,sans-serif;font-size:10px;line-height:1.2;color:#315D82;font-weight:700',a7="#EAF1F6",a8='font-family:"Manrope",system-ui,sans-serif;font-size:12px;line-height:1.4;color:#142B46;font-weight:700',a9="#F4F7FA",b0=u.o,b1=u.h,b2=u.u,b3=u.v,b4=u.w,b5=u._,b6="border:1px solid #36516C",b7=u.U,b8=t.N,b9=t.X,c0=A.a(["role","banner","style","box-shadow:none"],b8,b9),c1=A.d(j,1,16),c2=A.i(B.d,h,10,new A.A(A.b("S",A.a(["style",u.Z],b8,b9),j)),36,j,j,j,i,36),c3=A.d(j,j,11),c4=t.U,c5=A.c([A.b(g,A.a(["style",u.z],b8,b9),j),A.b("Thoughtful software",A.a(["style",u.J],b8,b9),j)],c4),c6=A.a(["style","height:fit-content"],b8,b9),c7=t.g
c6=A.ap(new A.q(new A.V(A.j(A.c([c2,c3,new A.n(A.j(c5,c7),B.b,B.e,c6)],c4),c7),B.b,B.f,A.k(b8,b9)),f,new A.fT(c9),i,!1,A.a([e,""],b8,b9)),1)
c5=A.h(A.b("Let\u2019s talk",A.a(["style",d],b8,b9),j),new A.e(12,18,12,18))
c5=A.i(c0,k,j,new A.V(A.j(A.c([c1,c6,new A.V(A.j(A.c([A.h(new A.q(A.i(A.a(["style",c],b8,b9),h,9,c5,j,j,j,j,i,j),f,new A.fU(c9),i,!1,A.a([e,""],b8,b9)),new A.e(0,20,0,0))],c4),c7),B.b,B.f,B.d)],c4),c7),B.b,B.n,B.d),72,j,j,16,"header",j)
c6=A.i(B.d,k,j,new A.A(A.i(B.d,j,j,A.h(A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",b],b8,b9),j),new A.e(9,11,9,11)),f,new A.fV(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b(a,A.a(["style",b],b8,b9),j),new A.e(9,11,9,11)),f,new A.h_(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b(a0,A.a(["style",b],b8,b9),j),new A.e(9,11,9,11)),f,new A.h0(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b("About",A.a(["style",b],b8,b9),j),new A.e(9,11,9,11)),f,new A.h1(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b(a1,A.a(["style",b],b8,b9),j),new A.e(9,11,9,11)),f,new A.h2(c9),i,!1,A.a([e,""],b8,b9))],c4),B.e,B.b,2,4),new A.e(8,20,8,20)),j,a2,j,j,i,j)),j,j,j,j,i,j)
c1=A.b("INDEPENDENT THINKING. LASTING IMPACT.",A.a(["style",a3],b8,b9),j)
c0=A.d(j,20,j)
c3=A.t(1,"Thoughtful software,\nbuilt to last.",A.a(["style",'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:39px;line-height:1.1;color:#142B46;font-weight:700'],b8,b9))
c2=A.d(j,18,j)
s=t.x
r=A.b("This demonstration explores how teams can turn complex challenges into clear, dependable digital products.",A.a(["style",'font-family:"Manrope",system-ui,sans-serif;line-height:1.65;color:#516275'],b8,b9),new A.L(16,17,18,s))
q=A.d(j,24,j)
p=A.h(A.b("Start a conversation",A.a(["style",d],b8,b9),j),new A.e(12,18,12,18))
p=A.i(A.a(["style",c],b8,b9),h,9,p,j,j,j,j,i,j)
o=A.a([e,""],b8,b9)
n=A.h(A.b("Explore services",A.a(["style",'font-family:"Manrope",system-ui,sans-serif;font-size:13px;color:#173B5E;font-weight:700'],b8,b9),j),new A.e(12,18,12,18))
n=A.j(A.c([c1,c0,c3,c2,r,q,A.aA(B.b,A.c([new A.q(p,f,new A.h3(c9),i,!1,o),new A.q(A.i(A.a(["style","border:1px solid #D8E1EA"],b8,b9),k,9,n,j,j,j,j,i,j),f,new A.h4(c9),i,!1,A.a([e,""],b8,b9))],c4),B.e,B.b,10,10),A.d(j,22,j),A.b("STRATEGY  \xb7  DESIGN  \xb7  ENGINEERING",A.a(["style",a4],b8,b9),j)],c4),c7)
o=A.h(new A.n(A.j(A.c([A.b("THE SPARROW APPROACH",A.a(["style",a3],b8,b9),j),A.d(j,16,j),A.t(3,"Clarity at every step.",A.a(["style",u.B],b8,b9)),A.d(j,6,j),A.b("A practical path from challenge to product.",A.a(["style",a4],b8,b9),j),A.d(j,15,j),A.is(a5,0,1,0,1),A.h(new A.V(A.j(A.c([A.i(B.d,a7,9,new A.A(A.b("01",A.a(["style",a6],b8,b9),j)),30,j,j,j,i,30),A.d(j,j,12),A.ap(new A.n(A.j(A.c([A.b("Understand the challenge",A.a(["style",a8],b8,b9),j),A.d(j,3,j),A.b("Listen, learn and align on the real need.",A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),1)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(13,0,13,0)),A.is(a5,0,1,0,1),A.h(new A.V(A.j(A.c([A.i(B.d,a7,9,new A.A(A.b("02",A.a(["style",a6],b8,b9),j)),30,j,j,j,i,30),A.d(j,j,12),A.ap(new A.n(A.j(A.c([A.b("Design with intention",A.a(["style",a8],b8,b9),j),A.d(j,3,j),A.b("Shape a clear experience around people.",A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),1)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(13,0,13,0)),A.is(a5,0,1,0,1),A.h(new A.V(A.j(A.c([A.i(B.d,a7,9,new A.A(A.b("03",A.a(["style",a6],b8,b9),j)),30,j,j,j,i,30),A.d(j,j,12),A.ap(new A.n(A.j(A.c([A.b("Build for the long term",A.a(["style",a8],b8,b9),j),A.d(j,3,j),A.b("Deliver carefully and plan for what follows.",A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),1)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(13,0,13,0))],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
o=A.h(A.i(A.a(["style","border:1px solid #E2E9EF;box-shadow:0px 10px 24px 0px rgba(20, 43, 70, 0.07058823529411765)"],b8,b9),k,15,o,j,j,j,j,i,j),new A.e(20,20,20,20))
o=A.i(A.a(["style","border:1px solid #D8E3EC;background-image:linear-gradient(to bottom right, #E8F0F6 0%, #F8FAFC 100%)"],b8,b9),j,22,o,j,j,j,j,i,j)
p=A.lo(A.i(B.d,h,20,A.h(A.b("A WORKING METHOD",A.a(["style",'font-family:"Manrope",system-ui,sans-serif;font-size:9px;letter-spacing:0.5px;color:#FFFFFF;font-weight:700'],b8,b9),j),new A.e(7,12,7,12)),j,j,j,j,i,j),new A.L(!1,!1,!0,t.c))
q=new A.bw(p,8,8,j,j,j,j)
q.bv(B.d,j,p,j,j,8,i,8,j)
q=A.j(A.c([o,q],c4),c7)
A.B(j,"width")
A.B(j,"height")
o=t.G
q=A.i(B.d,a9,j,new A.A(A.i(B.d,j,j,A.h(A.aF(A.c([new A.n(n,B.b,B.e,A.k(b8,b9)),new A.cy(q,"start","start")],c4),1,32,new A.L(1,1,2,o),new A.L(32,j,58,s)),new A.e(30,24,30,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
n=A.j(A.c([A.b("CAPABILITIES",A.a(["style",a3],b8,b9),j),A.d(j,13,j),A.t(2,"The right expertise, at every stage.",A.a(["style",b0],b8,b9)),A.d(j,11,j),A.b(u.I,A.a(["style",a4],b8,b9),j),A.d(j,26,j)],c4),c7)
p=A.h(new A.n(A.j(A.c([A.b("01 / SOFTWARE",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,"Purpose-built products",A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b("Applications shaped around the way people and businesses work.",A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
p=A.i(A.a(["style",b2],b8,b9),k,14,p,j,j,j,j,i,j)
r=A.h(new A.n(A.j(A.c([A.b("02 / EXPERIENCE",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,"Useful by design",A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b("Accessible, intuitive interfaces that make complex work clearer.",A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
r=A.i(A.a(["style",b2],b8,b9),k,14,r,j,j,j,j,i,j)
c2=A.h(new A.n(A.j(A.c([A.b("03 / ENGINEERING",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,"Built to evolve",A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b("Dependable foundations that support maintenance and change.",A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
c2=A.i(B.d,k,j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([new A.n(n,B.b,B.e,A.k(b8,b9)),A.aF(A.c([p,r,A.i(A.a(["style",b2],b8,b9),k,14,c2,j,j,j,j,i,j)],c4),1,14,new A.L(1,2,3,o),new A.L(14,j,j,s))],c4),c7),B.b,B.f,A.k(b8,b9)),new A.e(64,24,64,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
r=A.b("HOW WE WORK",A.a(["style",u.R],b8,b9),j)
p=A.d(j,13,j)
n=A.t(2,"A clear path from idea to impact.",A.a(["style",u.W],b8,b9))
c3=A.d(j,25,j)
c0=A.h(new A.n(A.j(A.c([A.b("01 / DISCOVER",A.a(["style",b3],b8,b9),j),A.d(j,13,j),A.t(3,"Understand",A.a(["style",b4],b8,b9)),A.d(j,7,j),A.b(u.M,A.a(["style",b5],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(17,17,17,17))
c0=A.i(A.a(["style",b6],b8,b9),j,13,c0,j,j,j,j,i,j)
c1=A.h(new A.n(A.j(A.c([A.b("02 / DEFINE",A.a(["style",b3],b8,b9),j),A.d(j,13,j),A.t(3,"Shape",A.a(["style",b4],b8,b9)),A.d(j,7,j),A.b(u.G,A.a(["style",b5],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(17,17,17,17))
c1=A.i(A.a(["style",b6],b8,b9),j,13,c1,j,j,j,j,i,j)
m=A.h(new A.n(A.j(A.c([A.b("03 / BUILD",A.a(["style",b3],b8,b9),j),A.d(j,13,j),A.t(3,"Deliver",A.a(["style",b4],b8,b9)),A.d(j,7,j),A.b(u.C,A.a(["style",b5],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(17,17,17,17))
m=A.i(A.a(["style",b6],b8,b9),j,13,m,j,j,j,j,i,j)
l=A.h(new A.n(A.j(A.c([A.b("04 / EVOLVE",A.a(["style",b3],b8,b9),j),A.d(j,13,j),A.t(3,"Improve",A.a(["style",b4],b8,b9)),A.d(j,7,j),A.b(u.f,A.a(["style",b5],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(17,17,17,17))
l=A.i(B.d,"#142B46",j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([r,p,n,c3,A.aF(A.c([c0,c1,m,A.i(A.a(["style",b6],b8,b9),j,13,l,j,j,j,j,i,j)],c4),1,18,new A.L(1,2,4,o),new A.L(18,j,j,s))],c4),c7),B.b,B.f,A.k(b8,b9)),new A.e(64,24,64,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
m=A.j(A.c([A.b("DEMO CONCEPTS",A.a(["style",a3],b8,b9),j),A.d(j,13,j),A.t(2,"A closer look at the possibilities.",A.a(["style",b0],b8,b9)),A.d(j,11,j),A.b(u.l,A.a(["style",a4],b8,b9),j),A.d(j,26,j)],c4),c7)
c1=A.h(new A.n(A.j(A.c([A.b("DEMO / OPERATIONS",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,"A clearer view of work",A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b(u.p,A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
c1=A.i(A.a(["style",b2],b8,b9),k,14,c1,j,j,j,j,i,j)
c0=A.h(new A.n(A.j(A.c([A.b("DEMO / CUSTOMER EXPERIENCE",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,"Services made more accessible",A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b(u.O,A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
s=A.i(B.d,a9,j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([new A.n(m,B.b,B.e,A.k(b8,b9)),A.aF(A.c([c1,A.i(A.a(["style",b2],b8,b9),k,14,c0,j,j,j,j,i,j)],c4),1,16,new A.L(1,2,2,o),new A.L(16,j,j,s))],c4),c7),B.b,B.f,A.k(b8,b9)),new A.e(64,24,64,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
o=A.j(A.c([A.b("FAQ",A.a(["style",a3],b8,b9),j),A.d(j,13,j),A.t(2,"A few useful answers.",A.a(["style",b0],b8,b9)),A.d(j,11,j),A.b(u.x,A.a(["style",a4],b8,b9),j),A.d(j,26,j)],c4),c7)
c0=A.h(new A.n(A.j(A.c([A.b("01",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,u.K,A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b(u.g,A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
c0=A.i(A.a(["style",b2],b8,b9),k,14,c0,j,j,j,j,i,j)
c1=A.d(j,12,j)
m=A.h(new A.n(A.j(A.c([A.b("02",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,"Can you work with an existing product?",A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b(u.E,A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
m=A.i(A.a(["style",b2],b8,b9),k,14,m,j,j,j,j,i,j)
c3=A.d(j,12,j)
n=A.h(new A.n(A.j(A.c([A.b("03",A.a(["style",a3],b8,b9),j),A.d(j,18,j),A.t(3,"What happens after launch?",A.a(["style",b1],b8,b9)),A.d(j,9,j),A.b(u.n,A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(22,22,22,22))
n=A.i(B.d,k,j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([new A.n(o,B.b,B.e,A.k(b8,b9)),c0,c1,m,c3,A.i(A.a(["style",b2],b8,b9),k,14,n,j,j,j,j,i,j)],c4),c7),B.b,B.f,A.k(b8,b9)),new A.e(64,24,64,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
c3=A.ap(new A.n(A.j(A.c([A.b("NEXT STEP",A.a(["style",a3],b8,b9),j),A.d(j,10,j),A.t(2,"Have something in mind?",A.a(["style",u.Q],b8,b9)),A.d(j,8,j),A.b(u.t,A.a(["style",a4],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),1)
m=A.d(j,j,18)
c1=A.h(A.b(a1,A.a(["style",d],b8,b9),j),new A.e(12,18,12,18))
c4=A.c([c5,A.dB(new A.n(A.j(A.c([c6,q,c2,l,s,n,A.i(B.d,a9,j,new A.A(A.i(B.d,j,j,A.h(new A.V(A.j(A.c([c3,m,new A.q(A.i(A.a(["style",c],b8,b9),h,9,c1,j,j,j,j,i,j),f,new A.h5(c9),i,!1,A.a([e,""],b8,b9))],c4),c7),B.b,B.n,A.k(b8,b9)),new A.e(48,24,48,24)),j,a2,j,j,i,j)),j,j,j,j,i,j),A.i(B.d,"#142B46",j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([A.b(g,A.a(["style",u.N],b8,b9),j),A.d(j,7,j),A.b("Thoughtful software, built to last.",A.a(["style",b5],b8,b9),j),A.d(j,17,j),A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",b7],b8,b9),j),new A.e(7,9,7,9)),f,new A.h6(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b(a,A.a(["style",b7],b8,b9),j),new A.e(7,9,7,9)),f,new A.fW(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b(a0,A.a(["style",b7],b8,b9),j),new A.e(7,9,7,9)),f,new A.fX(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b("About",A.a(["style",b7],b8,b9),j),new A.e(7,9,7,9)),f,new A.fY(c9),i,!1,A.a([e,""],b8,b9)),new A.q(A.h(A.b(a1,A.a(["style",b7],b8,b9),j),new A.e(7,9,7,9)),f,new A.fZ(c9),i,!1,A.a([e,""],b8,b9))],c4),B.e,B.b,4,4),A.d(j,16,j),A.b(u.b,A.a(["style",b5],b8,b9),j),A.d(j,18,j),A.b(u.Y,A.a(["style",u.k],b8,b9),j)],c4),c7),B.b,B.e,A.k(b8,b9)),new A.e(35,24,35,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)],c4),c7),B.b,B.f,A.k(b8,b9)),!1)],c4)
b9=A.a(["style","background-color:#FFFFFF"],b8,b9)
return new A.n(A.j(c4,c7),B.b,B.f,b9)},
ne(c3,c4,c5){var s,r,q,p,o,n,m,l,k="#FFFFFF",j=null,i="div",h="#173B5E",g="SPARROW KIT",f="click",e="data-sparrow-inkwell",d=u.d,c=u.H,b=u.e,a="Services",a0="Solutions",a1="Contact",a2=1200,a3=u.a,a4=u.I,a5=u.m,a6=u.h,a7=u.u,a8=u.v,a9=u.w,b0=u._,b1="border:1px solid #36516C",b2=u.U,b3=t.N,b4=t.X,b5=A.a(["role","banner","style","box-shadow:none"],b3,b4),b6=A.d(j,1,16),b7=A.i(B.d,h,10,new A.A(A.b("S",A.a(["style",u.Z],b3,b4),j)),36,j,j,j,i,36),b8=A.d(j,j,11),b9=t.U,c0=A.c([A.b(g,A.a(["style",u.z],b3,b4),j),A.b("Thoughtful software",A.a(["style",u.J],b3,b4),j)],b9),c1=A.a(["style","height:fit-content"],b3,b4),c2=t.g
c1=A.ap(new A.q(new A.V(A.j(A.c([b7,b8,new A.n(A.j(c0,c2),B.b,B.e,c1)],b9),c2),B.b,B.f,A.k(b3,b4)),f,new A.h7(c4),i,!1,A.a([e,""],b3,b4)),1)
c0=A.h(A.b("Let\u2019s talk",A.a(["style",d],b3,b4),j),new A.e(12,18,12,18))
c0=A.i(b5,k,j,new A.V(A.j(A.c([b6,c1,new A.V(A.j(A.c([A.h(new A.q(A.i(A.a(["style",c],b3,b4),h,9,c0,j,j,j,j,i,j),f,new A.h8(c4),i,!1,A.a([e,""],b3,b4)),new A.e(0,20,0,0))],b9),c2),B.b,B.f,B.d)],b9),c2),B.b,B.n,B.d),72,j,j,16,"header",j)
c1=A.i(B.d,k,j,new A.A(A.i(B.d,j,j,A.h(A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",b],b3,b4),j),new A.e(9,11,9,11)),f,new A.h9(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b(a,A.a(["style",b],b3,b4),j),new A.e(9,11,9,11)),f,new A.hc(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b(a0,A.a(["style",b],b3,b4),j),new A.e(9,11,9,11)),f,new A.hd(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b("About",A.a(["style",b],b3,b4),j),new A.e(9,11,9,11)),f,new A.he(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b(a1,A.a(["style",b],b3,b4),j),new A.e(9,11,9,11)),f,new A.hf(c4),i,!1,A.a([e,""],b3,b4))],b9),B.e,B.b,2,4),new A.e(8,20,8,20)),j,a2,j,j,i,j)),j,j,j,j,i,j)
b6=t.x
b5=A.i(B.d,"#F4F7FA",j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([A.b("SERVICES",A.a(["style",a3],b3,b4),j),A.d(j,15,j),A.t(1,"The right expertise, at every stage.",A.a(["style",u.j],b3,b4)),A.d(j,14,j),A.b(a4,A.a(["style",u.c],b3,b4),new A.L(16,17,18,b6))],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(56,24,56,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
b8=A.j(A.c([A.b("OUR SERVICES",A.a(["style",a3],b3,b4),j),A.d(j,13,j),A.t(2,"Connected expertise across the work.",A.a(["style",u.o],b3,b4)),A.d(j,11,j),A.b(a4,A.a(["style",a5],b3,b4),j),A.d(j,26,j)],b9),c2)
b7=A.h(new A.n(A.j(A.c([A.b("01",A.a(["style",a3],b3,b4),j),A.d(j,18,j),A.t(3,"Custom software",A.a(["style",a6],b3,b4)),A.d(j,9,j),A.b("Purpose-built applications that fit the way your business works.",A.a(["style",a5],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(22,22,22,22))
b7=A.i(A.a(["style",a7],b3,b4),k,14,b7,j,j,j,j,i,j)
s=A.h(new A.n(A.j(A.c([A.b("02",A.a(["style",a3],b3,b4),j),A.d(j,18,j),A.t(3,"Web applications",A.a(["style",a6],b3,b4)),A.d(j,9,j),A.b("Accessible, responsive digital experiences for modern teams.",A.a(["style",a5],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(22,22,22,22))
s=A.i(A.a(["style",a7],b3,b4),k,14,s,j,j,j,j,i,j)
r=A.h(new A.n(A.j(A.c([A.b("03",A.a(["style",a3],b3,b4),j),A.d(j,18,j),A.t(3,"Mobile applications",A.a(["style",a6],b3,b4)),A.d(j,9,j),A.b("Useful, intuitive experiences for people on the move.",A.a(["style",a5],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(22,22,22,22))
r=A.i(A.a(["style",a7],b3,b4),k,14,r,j,j,j,j,i,j)
q=A.h(new A.n(A.j(A.c([A.b("04",A.a(["style",a3],b3,b4),j),A.d(j,18,j),A.t(3,"UI / UX design",A.a(["style",a6],b3,b4)),A.d(j,9,j),A.b("Research-led interfaces that make complexity feel simple.",A.a(["style",a5],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(22,22,22,22))
q=A.i(A.a(["style",a7],b3,b4),k,14,q,j,j,j,j,i,j)
p=A.h(new A.n(A.j(A.c([A.b("05",A.a(["style",a3],b3,b4),j),A.d(j,18,j),A.t(3,"Enterprise solutions",A.a(["style",a6],b3,b4)),A.d(j,9,j),A.b("Connected systems designed around real operational needs.",A.a(["style",a5],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(22,22,22,22))
p=A.i(A.a(["style",a7],b3,b4),k,14,p,j,j,j,j,i,j)
o=A.h(new A.n(A.j(A.c([A.b("06",A.a(["style",a3],b3,b4),j),A.d(j,18,j),A.t(3,"Technical consulting",A.a(["style",a6],b3,b4)),A.d(j,9,j),A.b("Clear guidance for architecture, delivery and technology decisions.",A.a(["style",a5],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(22,22,22,22))
n=t.G
o=A.i(B.d,k,j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([new A.n(b8,B.b,B.e,A.k(b3,b4)),A.aF(A.c([b7,s,r,q,p,A.i(A.a(["style",a7],b3,b4),k,14,o,j,j,j,j,i,j)],b9),1,15,new A.L(1,2,3,n),new A.L(15,j,j,b6))],b9),c2),B.b,B.f,A.k(b3,b4)),new A.e(64,24,64,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
p=A.b("HOW WE WORK",A.a(["style",u.R],b3,b4),j)
q=A.d(j,13,j)
r=A.t(2,"A clear path from idea to impact.",A.a(["style",u.W],b3,b4))
s=A.d(j,25,j)
b7=A.h(new A.n(A.j(A.c([A.b("01 / DISCOVER",A.a(["style",a8],b3,b4),j),A.d(j,13,j),A.t(3,"Understand",A.a(["style",a9],b3,b4)),A.d(j,7,j),A.b(u.M,A.a(["style",b0],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(17,17,17,17))
b7=A.i(A.a(["style",b1],b3,b4),j,13,b7,j,j,j,j,i,j)
b8=A.h(new A.n(A.j(A.c([A.b("02 / DEFINE",A.a(["style",a8],b3,b4),j),A.d(j,13,j),A.t(3,"Shape",A.a(["style",a9],b3,b4)),A.d(j,7,j),A.b(u.G,A.a(["style",b0],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(17,17,17,17))
b8=A.i(A.a(["style",b1],b3,b4),j,13,b8,j,j,j,j,i,j)
m=A.h(new A.n(A.j(A.c([A.b("03 / BUILD",A.a(["style",a8],b3,b4),j),A.d(j,13,j),A.t(3,"Deliver",A.a(["style",a9],b3,b4)),A.d(j,7,j),A.b(u.C,A.a(["style",b0],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(17,17,17,17))
m=A.i(A.a(["style",b1],b3,b4),j,13,m,j,j,j,j,i,j)
l=A.h(new A.n(A.j(A.c([A.b("04 / EVOLVE",A.a(["style",a8],b3,b4),j),A.d(j,13,j),A.t(3,"Improve",A.a(["style",a9],b3,b4)),A.d(j,7,j),A.b(u.f,A.a(["style",b0],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(17,17,17,17))
b6=A.i(B.d,"#142B46",j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([p,q,r,s,A.aF(A.c([b7,b8,m,A.i(A.a(["style",b1],b3,b4),j,13,l,j,j,j,j,i,j)],b9),1,18,new A.L(1,2,4,n),new A.L(18,j,j,b6))],b9),c2),B.b,B.f,A.k(b3,b4)),new A.e(64,24,64,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)
n=A.ap(new A.n(A.j(A.c([A.b("NEXT STEP",A.a(["style",a3],b3,b4),j),A.d(j,10,j),A.t(2,"Have something in mind?",A.a(["style",u.Q],b3,b4)),A.d(j,8,j),A.b(u.t,A.a(["style",a5],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),1)
l=A.d(j,j,18)
m=A.h(A.b(a1,A.a(["style",d],b3,b4),j),new A.e(12,18,12,18))
return new A.n(A.j(A.c([c0,A.dB(new A.n(A.j(A.c([c1,b5,o,b6,A.i(B.d,"#F4F7FA",j,new A.A(A.i(B.d,j,j,A.h(new A.V(A.j(A.c([n,l,new A.q(A.i(A.a(["style",c],b3,b4),h,9,m,j,j,j,j,i,j),f,new A.hg(c4),i,!1,A.a([e,""],b3,b4))],b9),c2),B.b,B.n,A.k(b3,b4)),new A.e(48,24,48,24)),j,a2,j,j,i,j)),j,j,j,j,i,j),A.i(B.d,"#142B46",j,new A.A(A.i(B.d,j,j,A.h(new A.n(A.j(A.c([A.b(g,A.a(["style",u.N],b3,b4),j),A.d(j,7,j),A.b("Thoughtful software, built to last.",A.a(["style",b0],b3,b4),j),A.d(j,17,j),A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",b2],b3,b4),j),new A.e(7,9,7,9)),f,new A.hh(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b(a,A.a(["style",b2],b3,b4),j),new A.e(7,9,7,9)),f,new A.hi(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b(a0,A.a(["style",b2],b3,b4),j),new A.e(7,9,7,9)),f,new A.hj(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b("About",A.a(["style",b2],b3,b4),j),new A.e(7,9,7,9)),f,new A.ha(c4),i,!1,A.a([e,""],b3,b4)),new A.q(A.h(A.b(a1,A.a(["style",b2],b3,b4),j),new A.e(7,9,7,9)),f,new A.hb(c4),i,!1,A.a([e,""],b3,b4))],b9),B.e,B.b,4,4),A.d(j,16,j),A.b(u.b,A.a(["style",b0],b3,b4),j),A.d(j,18,j),A.b(u.Y,A.a(["style",u.k],b3,b4),j)],b9),c2),B.b,B.e,A.k(b3,b4)),new A.e(35,24,35,24)),j,a2,j,j,i,j)),j,j,j,j,i,j)],b9),c2),B.b,B.f,A.k(b3,b4)),!1)],b9),c2),B.b,B.f,A.k(b3,b4))},
nf(b7,b8,b9){var s,r,q,p="#FFFFFF",o=null,n="div",m="#173B5E",l="SPARROW KIT",k="click",j="data-sparrow-inkwell",i=u.d,h=u.H,g=u.e,f="Services",e="Solutions",d="Contact",c=1200,b=u.a,a="These concepts show how software can help people make decisions, serve customers and move work forward.",a0="#F4F7FA",a1=u.o,a2=u.m,a3=u.h,a4=u.u,a5=u._,a6=u.U,a7=t.N,a8=t.X,a9=A.a(["role","banner","style","box-shadow:none"],a7,a8),b0=A.d(o,1,16),b1=A.i(B.d,m,10,new A.A(A.b("S",A.a(["style",u.Z],a7,a8),o)),36,o,o,o,n,36),b2=A.d(o,o,11),b3=t.U,b4=A.c([A.b(l,A.a(["style",u.z],a7,a8),o),A.b("Thoughtful software",A.a(["style",u.J],a7,a8),o)],b3),b5=A.a(["style","height:fit-content"],a7,a8),b6=t.g
b5=A.ap(new A.q(new A.V(A.j(A.c([b1,b2,new A.n(A.j(b4,b6),B.b,B.e,b5)],b3),b6),B.b,B.f,A.k(a7,a8)),k,new A.hk(b8),n,!1,A.a([j,""],a7,a8)),1)
b4=A.h(A.b("Let\u2019s talk",A.a(["style",i],a7,a8),o),new A.e(12,18,12,18))
b4=A.i(a9,p,o,new A.V(A.j(A.c([b0,b5,new A.V(A.j(A.c([A.h(new A.q(A.i(A.a(["style",h],a7,a8),m,9,b4,o,o,o,o,n,o),k,new A.hl(b8),n,!1,A.a([j,""],a7,a8)),new A.e(0,20,0,0))],b3),b6),B.b,B.f,B.d)],b3),b6),B.b,B.n,B.d),72,o,o,16,"header",o)
b5=A.i(B.d,p,o,new A.A(A.i(B.d,o,o,A.h(A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",g],a7,a8),o),new A.e(9,11,9,11)),k,new A.hm(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b(f,A.a(["style",g],a7,a8),o),new A.e(9,11,9,11)),k,new A.hp(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b(e,A.a(["style",g],a7,a8),o),new A.e(9,11,9,11)),k,new A.hq(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b("About",A.a(["style",g],a7,a8),o),new A.e(9,11,9,11)),k,new A.hr(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b(d,A.a(["style",g],a7,a8),o),new A.e(9,11,9,11)),k,new A.hs(b8),n,!1,A.a([j,""],a7,a8))],b3),B.e,B.b,2,4),new A.e(8,20,8,20)),o,c,o,o,n,o)),o,o,o,o,n,o)
b0=t.x
a9=A.i(B.d,a0,o,new A.A(A.i(B.d,o,o,A.h(new A.n(A.j(A.c([A.b("SOLUTIONS",A.a(["style",b],a7,a8),o),A.d(o,15,o),A.t(1,"Technology with a clear purpose.",A.a(["style",u.j],a7,a8)),A.d(o,14,o),A.b(a,A.a(["style",u.c],a7,a8),new A.L(16,17,18,b0))],b3),b6),B.b,B.e,A.k(a7,a8)),new A.e(56,24,56,24)),o,c,o,o,n,o)),o,o,o,o,n,o)
b2=A.j(A.c([A.b("SOLUTION CONCEPTS",A.a(["style",b],a7,a8),o),A.d(o,13,o),A.t(2,"Ideas organized around real needs.",A.a(["style",a1],a7,a8)),A.d(o,11,o),A.b(a,A.a(["style",a2],a7,a8),o),A.d(o,26,o)],b3),b6)
b1=A.h(new A.n(A.j(A.c([A.b("A",A.a(["style",b],a7,a8),o),A.d(o,18,o),A.t(3,"Operations platforms",A.a(["style",a3],a7,a8)),A.d(o,9,o),A.b("Bring processes, teams and information together in one place.",A.a(["style",a2],a7,a8),o)],b3),b6),B.b,B.e,A.k(a7,a8)),new A.e(22,22,22,22))
b1=A.i(A.a(["style",a4],a7,a8),p,14,b1,o,o,o,o,n,o)
s=A.h(new A.n(A.j(A.c([A.b("B",A.a(["style",b],a7,a8),o),A.d(o,18,o),A.t(3,"Customer experiences",A.a(["style",a3],a7,a8)),A.d(o,9,o),A.b("Make essential services easier to find, use and trust.",A.a(["style",a2],a7,a8),o)],b3),b6),B.b,B.e,A.k(a7,a8)),new A.e(22,22,22,22))
s=A.i(A.a(["style",a4],a7,a8),p,14,s,o,o,o,o,n,o)
r=A.h(new A.n(A.j(A.c([A.b("C",A.a(["style",b],a7,a8),o),A.d(o,18,o),A.t(3,"Data and reporting",A.a(["style",a3],a7,a8)),A.d(o,9,o),A.b("Turn operational data into useful, understandable insight.",A.a(["style",a2],a7,a8),o)],b3),b6),B.b,B.e,A.k(a7,a8)),new A.e(22,22,22,22))
q=t.G
r=A.i(B.d,p,o,new A.A(A.i(B.d,o,o,A.h(new A.n(A.j(A.c([new A.n(b2,B.b,B.e,A.k(a7,a8)),A.aF(A.c([b1,s,A.i(A.a(["style",a4],a7,a8),p,14,r,o,o,o,o,n,o)],b3),1,15,new A.L(1,2,3,q),new A.L(15,o,o,b0))],b3),b6),B.b,B.f,A.k(a7,a8)),new A.e(64,24,64,24)),o,c,o,o,n,o)),o,o,o,o,n,o)
s=A.j(A.c([A.b("DEMO CONCEPTS",A.a(["style",b],a7,a8),o),A.d(o,13,o),A.t(2,"A closer look at the possibilities.",A.a(["style",a1],a7,a8)),A.d(o,11,o),A.b(u.l,A.a(["style",a2],a7,a8),o),A.d(o,26,o)],b3),b6)
b1=A.h(new A.n(A.j(A.c([A.b("DEMO / OPERATIONS",A.a(["style",b],a7,a8),o),A.d(o,18,o),A.t(3,"A clearer view of work",A.a(["style",a3],a7,a8)),A.d(o,9,o),A.b(u.p,A.a(["style",a2],a7,a8),o)],b3),b6),B.b,B.e,A.k(a7,a8)),new A.e(22,22,22,22))
b1=A.i(A.a(["style",a4],a7,a8),p,14,b1,o,o,o,o,n,o)
b2=A.h(new A.n(A.j(A.c([A.b("DEMO / CUSTOMER EXPERIENCE",A.a(["style",b],a7,a8),o),A.d(o,18,o),A.t(3,"Services made more accessible",A.a(["style",a3],a7,a8)),A.d(o,9,o),A.b(u.O,A.a(["style",a2],a7,a8),o)],b3),b6),B.b,B.e,A.k(a7,a8)),new A.e(22,22,22,22))
b0=A.i(B.d,a0,o,new A.A(A.i(B.d,o,o,A.h(new A.n(A.j(A.c([new A.n(s,B.b,B.e,A.k(a7,a8)),A.aF(A.c([b1,A.i(A.a(["style",a4],a7,a8),p,14,b2,o,o,o,o,n,o)],b3),1,16,new A.L(1,2,2,q),new A.L(16,o,o,b0))],b3),b6),B.b,B.f,A.k(a7,a8)),new A.e(64,24,64,24)),o,c,o,o,n,o)),o,o,o,o,n,o)
q=A.ap(new A.n(A.j(A.c([A.b("NEXT STEP",A.a(["style",b],a7,a8),o),A.d(o,10,o),A.t(2,"Have something in mind?",A.a(["style",u.Q],a7,a8)),A.d(o,8,o),A.b(u.t,A.a(["style",a2],a7,a8),o)],b3),b6),B.b,B.e,A.k(a7,a8)),1)
b2=A.d(o,o,18)
b1=A.h(A.b(d,A.a(["style",i],a7,a8),o),new A.e(12,18,12,18))
return new A.n(A.j(A.c([b4,A.dB(new A.n(A.j(A.c([b5,a9,r,b0,A.i(B.d,a0,o,new A.A(A.i(B.d,o,o,A.h(new A.V(A.j(A.c([q,b2,new A.q(A.i(A.a(["style",h],a7,a8),m,9,b1,o,o,o,o,n,o),k,new A.ht(b8),n,!1,A.a([j,""],a7,a8))],b3),b6),B.b,B.n,A.k(a7,a8)),new A.e(48,24,48,24)),o,c,o,o,n,o)),o,o,o,o,n,o),A.i(B.d,"#142B46",o,new A.A(A.i(B.d,o,o,A.h(new A.n(A.j(A.c([A.b(l,A.a(["style",u.N],a7,a8),o),A.d(o,7,o),A.b("Thoughtful software, built to last.",A.a(["style",a5],a7,a8),o),A.d(o,17,o),A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",a6],a7,a8),o),new A.e(7,9,7,9)),k,new A.hu(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b(f,A.a(["style",a6],a7,a8),o),new A.e(7,9,7,9)),k,new A.hv(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b(e,A.a(["style",a6],a7,a8),o),new A.e(7,9,7,9)),k,new A.hw(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b("About",A.a(["style",a6],a7,a8),o),new A.e(7,9,7,9)),k,new A.hn(b8),n,!1,A.a([j,""],a7,a8)),new A.q(A.h(A.b(d,A.a(["style",a6],a7,a8),o),new A.e(7,9,7,9)),k,new A.ho(b8),n,!1,A.a([j,""],a7,a8))],b3),B.e,B.b,4,4),A.d(o,16,o),A.b(u.b,A.a(["style",a5],a7,a8),o),A.d(o,18,o),A.b(u.Y,A.a(["style",u.k],a7,a8),o)],b3),b6),B.b,B.e,A.k(a7,a8)),new A.e(35,24,35,24)),o,c,o,o,n,o)),o,o,o,o,n,o)],b3),b6),B.b,B.f,A.k(a7,a8)),!1)],b3),b6),B.b,B.f,A.k(a7,a8))},
ng(b8,b9,c0){var s,r,q,p,o,n="#FFFFFF",m=null,l="div",k="#173B5E",j="SPARROW KIT",i="click",h="data-sparrow-inkwell",g=u.d,f=u.H,e=u.e,d="Services",c="Solutions",b="Contact",a=1200,a0=u.a,a1="#F4F7FA",a2=u.o,a3=u.m,a4=u.h,a5=u.u,a6=u._,a7=u.U,a8=t.N,a9=t.X,b0=A.a(["role","banner","style","box-shadow:none"],a8,a9),b1=A.d(m,1,16),b2=A.i(B.d,k,10,new A.A(A.b("S",A.a(["style",u.Z],a8,a9),m)),36,m,m,m,l,36),b3=A.d(m,m,11),b4=t.U,b5=A.c([A.b(j,A.a(["style",u.z],a8,a9),m),A.b("Thoughtful software",A.a(["style",u.J],a8,a9),m)],b4),b6=A.a(["style","height:fit-content"],a8,a9),b7=t.g
b6=A.ap(new A.q(new A.V(A.j(A.c([b2,b3,new A.n(A.j(b5,b7),B.b,B.e,b6)],b4),b7),B.b,B.f,A.k(a8,a9)),i,new A.hx(b9),l,!1,A.a([h,""],a8,a9)),1)
b5=A.h(A.b("Let\u2019s talk",A.a(["style",g],a8,a9),m),new A.e(12,18,12,18))
b5=A.i(b0,n,m,new A.V(A.j(A.c([b1,b6,new A.V(A.j(A.c([A.h(new A.q(A.i(A.a(["style",f],a8,a9),k,9,b5,m,m,m,m,l,m),i,new A.hy(b9),l,!1,A.a([h,""],a8,a9)),new A.e(0,20,0,0))],b4),b7),B.b,B.f,B.d)],b4),b7),B.b,B.n,B.d),72,m,m,16,"header",m)
b6=A.i(B.d,n,m,new A.A(A.i(B.d,m,m,A.h(A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",e],a8,a9),m),new A.e(9,11,9,11)),i,new A.hz(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b(d,A.a(["style",e],a8,a9),m),new A.e(9,11,9,11)),i,new A.hC(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b(c,A.a(["style",e],a8,a9),m),new A.e(9,11,9,11)),i,new A.hD(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b("About",A.a(["style",e],a8,a9),m),new A.e(9,11,9,11)),i,new A.hE(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b(b,A.a(["style",e],a8,a9),m),new A.e(9,11,9,11)),i,new A.hF(b9),l,!1,A.a([h,""],a8,a9))],b4),B.e,B.b,2,4),new A.e(8,20,8,20)),m,a,m,m,l,m)),m,m,m,m,l,m)
b1=t.x
b0=A.i(B.d,a1,m,new A.A(A.i(B.d,m,m,A.h(new A.n(A.j(A.c([A.b("ABOUT SPARROW KIT",A.a(["style",a0],a8,a9),m),A.d(m,15,m),A.t(1,"Technology should make work better.",A.a(["style",u.j],a8,a9)),A.d(m,14,m),A.b("Sparrow Kit is a technology company concept built around a simple belief: the best digital products combine human understanding with disciplined engineering.",A.a(["style",u.c],a8,a9),new A.L(16,17,18,b1))],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(56,24,56,24)),m,a,m,m,l,m)),m,m,m,m,l,m)
b3=A.i(B.d,n,m,new A.A(A.i(B.d,m,m,A.h(new A.n(A.j(A.c([A.b("Our philosophy is to listen carefully, communicate openly and build with the people who will use and maintain the result in mind.",A.a(["style",'font-family:"Manrope",system-ui,sans-serif;font-size:15px;line-height:1.7;color:#516275;font-weight:400'],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(64,24,64,24)),m,a,m,m,l,m)),m,m,m,m,l,m)
b2=A.j(A.c([A.b("OUR APPROACH",A.a(["style",a0],a8,a9),m),A.d(m,13,m),A.t(2,"Built for today. Ready for tomorrow.",A.a(["style",a2],a8,a9)),A.d(m,11,m),A.b("Good software is not just delivered. It is understood, maintained and improved over time.",A.a(["style",a3],a8,a9),m),A.d(m,26,m)],b4),b7)
s=A.h(new A.n(A.j(A.c([A.b("01",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,"Engineering quality",A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b("Careful implementation and testing are part of the work, not an afterthought.",A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
s=A.i(A.a(["style",a5],a8,a9),n,14,s,m,m,m,m,l,m)
r=A.h(new A.n(A.j(A.c([A.b("02",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,"Scalable architecture",A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b("Practical foundations leave room for products and teams to grow.",A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
r=A.i(A.a(["style",a5],a8,a9),n,14,r,m,m,m,m,l,m)
q=A.h(new A.n(A.j(A.c([A.b("03",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,"Business-first delivery",A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b("Technical choices are grounded in the outcome you need.",A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
q=A.i(A.a(["style",a5],a8,a9),n,14,q,m,m,m,m,l,m)
p=A.h(new A.n(A.j(A.c([A.b("04",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,"Reliable collaboration",A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b("Open communication keeps decisions clear and progress visible.",A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
p=A.i(A.a(["style",a5],a8,a9),n,14,p,m,m,m,m,l,m)
o=A.h(new A.n(A.j(A.c([A.b("05",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,"Long-term maintainability",A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b("Readable systems and thoughtful handovers support what comes next.",A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
b1=A.i(B.d,a1,m,new A.A(A.i(B.d,m,m,A.h(new A.n(A.j(A.c([new A.n(b2,B.b,B.e,A.k(a8,a9)),A.aF(A.c([s,r,q,p,A.i(A.a(["style",a5],a8,a9),n,14,o,m,m,m,m,l,m)],b4),1,15,new A.L(1,2,3,t.G),new A.L(15,m,m,b1))],b4),b7),B.b,B.f,A.k(a8,a9)),new A.e(64,24,64,24)),m,a,m,m,l,m)),m,m,m,m,l,m)
o=A.j(A.c([A.b("FAQ",A.a(["style",a0],a8,a9),m),A.d(m,13,m),A.t(2,"A few useful answers.",A.a(["style",a2],a8,a9)),A.d(m,11,m),A.b(u.x,A.a(["style",a3],a8,a9),m),A.d(m,26,m)],b4),b7)
p=A.h(new A.n(A.j(A.c([A.b("01",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,u.K,A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b(u.g,A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
p=A.i(A.a(["style",a5],a8,a9),n,14,p,m,m,m,m,l,m)
q=A.d(m,12,m)
r=A.h(new A.n(A.j(A.c([A.b("02",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,"Can you work with an existing product?",A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b(u.E,A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
r=A.i(A.a(["style",a5],a8,a9),n,14,r,m,m,m,m,l,m)
s=A.d(m,12,m)
b2=A.h(new A.n(A.j(A.c([A.b("03",A.a(["style",a0],a8,a9),m),A.d(m,18,m),A.t(3,"What happens after launch?",A.a(["style",a4],a8,a9)),A.d(m,9,m),A.b(u.n,A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(22,22,22,22))
b2=A.i(B.d,n,m,new A.A(A.i(B.d,m,m,A.h(new A.n(A.j(A.c([new A.n(o,B.b,B.e,A.k(a8,a9)),p,q,r,s,A.i(A.a(["style",a5],a8,a9),n,14,b2,m,m,m,m,l,m)],b4),b7),B.b,B.f,A.k(a8,a9)),new A.e(64,24,64,24)),m,a,m,m,l,m)),m,m,m,m,l,m)
s=A.ap(new A.n(A.j(A.c([A.b("NEXT STEP",A.a(["style",a0],a8,a9),m),A.d(m,10,m),A.t(2,"Have something in mind?",A.a(["style",u.Q],a8,a9)),A.d(m,8,m),A.b(u.t,A.a(["style",a3],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),1)
r=A.d(m,m,18)
q=A.h(A.b(b,A.a(["style",g],a8,a9),m),new A.e(12,18,12,18))
return new A.n(A.j(A.c([b5,A.dB(new A.n(A.j(A.c([b6,b0,b3,b1,b2,A.i(B.d,a1,m,new A.A(A.i(B.d,m,m,A.h(new A.V(A.j(A.c([s,r,new A.q(A.i(A.a(["style",f],a8,a9),k,9,q,m,m,m,m,l,m),i,new A.hG(b9),l,!1,A.a([h,""],a8,a9))],b4),b7),B.b,B.n,A.k(a8,a9)),new A.e(48,24,48,24)),m,a,m,m,l,m)),m,m,m,m,l,m),A.i(B.d,"#142B46",m,new A.A(A.i(B.d,m,m,A.h(new A.n(A.j(A.c([A.b(j,A.a(["style",u.N],a8,a9),m),A.d(m,7,m),A.b("Thoughtful software, built to last.",A.a(["style",a6],a8,a9),m),A.d(m,17,m),A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",a7],a8,a9),m),new A.e(7,9,7,9)),i,new A.hH(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b(d,A.a(["style",a7],a8,a9),m),new A.e(7,9,7,9)),i,new A.hI(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b(c,A.a(["style",a7],a8,a9),m),new A.e(7,9,7,9)),i,new A.hJ(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b("About",A.a(["style",a7],a8,a9),m),new A.e(7,9,7,9)),i,new A.hA(b9),l,!1,A.a([h,""],a8,a9)),new A.q(A.h(A.b(b,A.a(["style",a7],a8,a9),m),new A.e(7,9,7,9)),i,new A.hB(b9),l,!1,A.a([h,""],a8,a9))],b4),B.e,B.b,4,4),A.d(m,16,m),A.b(u.b,A.a(["style",a6],a8,a9),m),A.d(m,18,m),A.b(u.Y,A.a(["style",u.k],a8,a9),m)],b4),b7),B.b,B.e,A.k(a8,a9)),new A.e(35,24,35,24)),m,a,m,m,l,m)),m,m,m,m,l,m)],b4),b7),B.b,B.f,A.k(a8,a9)),!1)],b4),b7),B.b,B.f,A.k(a8,a9))},
nh(a8,a9,b0){var s="#FFFFFF",r=null,q="div",p="SPARROW KIT",o="click",n="data-sparrow-inkwell",m=u.e,l="Services",k="Solutions",j=1200,i=u.B,h='font-family:"Manrope",system-ui,sans-serif;font-size:14px;line-height:1.6;color:#40556A;font-weight:600',g=u.m,f="1px solid #D1DCE6",e="2px solid #315D82",d=u._,c=u.U,b=t.N,a=t.X,a0=A.a(["role","banner","style","box-shadow:none"],b,a),a1=A.d(r,1,16),a2=A.i(B.d,"#173B5E",10,new A.A(A.b("S",A.a(["style",u.Z],b,a),r)),36,r,r,r,q,36),a3=A.d(r,r,11),a4=t.U,a5=A.c([A.b(p,A.a(["style",u.z],b,a),r),A.b("Thoughtful software",A.a(["style",u.J],b,a),r)],a4),a6=A.a(["style","height:fit-content"],b,a),a7=t.g
a6=A.ap(new A.q(new A.V(A.j(A.c([a2,a3,new A.n(A.j(a5,a7),B.b,B.e,a6)],a4),a7),B.b,B.f,A.k(b,a)),o,new A.hK(a9),q,!1,A.a([n,""],b,a)),1)
a5=A.h(A.b("Let\u2019s talk",A.a(["style",u.d],b,a),r),new A.e(12,18,12,18))
a5=A.i(a0,s,r,new A.V(A.j(A.c([a1,a6,new A.V(A.j(A.c([A.h(new A.q(A.i(A.a(["style",u.H],b,a),"#173B5E",9,a5,r,r,r,r,q,r),o,new A.hL(a9),q,!1,A.a([n,""],b,a)),new A.e(0,20,0,0))],a4),a7),B.b,B.f,B.d)],a4),a7),B.b,B.n,B.d),72,r,r,16,"header",r)
a6=A.i(B.d,s,r,new A.A(A.i(B.d,r,r,A.h(A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",m],b,a),r),new A.e(9,11,9,11)),o,new A.hM(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b(l,A.a(["style",m],b,a),r),new A.e(9,11,9,11)),o,new A.hO(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b(k,A.a(["style",m],b,a),r),new A.e(9,11,9,11)),o,new A.hP(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b("About",A.a(["style",m],b,a),r),new A.e(9,11,9,11)),o,new A.hQ(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b("Contact",A.a(["style",m],b,a),r),new A.e(9,11,9,11)),o,new A.hR(a9),q,!1,A.a([n,""],b,a))],a4),B.e,B.b,2,4),new A.e(8,20,8,20)),r,j,r,r,q,r)),r,r,r,r,q,r)
a1=t.x
a0=A.i(B.d,"#F4F7FA",r,new A.A(A.i(B.d,r,r,A.h(new A.n(A.j(A.c([A.b("CONTACT",A.a(["style",u.a],b,a),r),A.d(r,15,r),A.t(1,"Have something in mind?",A.a(["style",u.j],b,a)),A.d(r,14,r),A.b("Tell us about the challenge, the opportunity or the idea you are exploring. This page and its form are a demonstration only.",A.a(["style",u.c],b,a),new A.L(16,17,18,a1))],a4),a7),B.b,B.e,A.k(b,a)),new A.e(56,24,56,24)),r,j,r,r,q,r)),r,r,r,r,q,r)
a3=A.i(B.d,"#F4F7FA",15,A.h(new A.n(A.j(A.c([A.t(2,"Contact details",A.a(["style",i],b,a)),A.d(r,14,r),A.b("Email: contact@example.com",A.a(["style",h],b,a),r),A.d(r,6,r),A.b("Business contact: placeholder",A.a(["style",h],b,a),r),A.d(r,14,r),A.b("Contact details are placeholders and are not monitored. This site does not send or store form entries.",A.a(["style",g],b,a),r)],a4),a7),B.b,B.e,A.k(b,a)),new A.e(22,22,22,22)),r,r,r,r,q,r)
a2=A.h(new A.n(A.j(A.c([A.t(2,"Contact form preview",A.a(["style",i],b,a)),A.d(r,7,r),A.b("This form is a visual preview and is not connected to a service.",A.a(["style",g],b,a),r),A.d(r,21,r),A.iD(A.a(["type","text"],b,a),f,9,!0,r,s,!0,e,9,"A name helps illustrate the form layout.","sk_state_111019ae_5504",r,"Name",r,r,"Your name",r,r),A.d(r,14,r),A.iD(A.a(["type","email"],b,a),f,9,!0,r,s,!0,e,9,"No address is sent or stored.","sk_state_3d492d85_5504",r,"Email",r,r,"you@example.com",r,r),A.d(r,14,r),A.iD(A.a(["type","text"],b,a),f,9,!0,r,s,!0,e,9,"This example field does not submit.","sk_state_e75d3fec_5504",r,"Project",r,r,"What are you considering?",r,r),A.d(r,18,r),new A.q(A.b("Sending is not enabled",A.a(["style",'font-family:"Manrope",system-ui,sans-serif;font-size:13px;font-weight:600'],b,a),r),o,r,"button",!0,A.a(["data-sparrow-variant","outlined"],b,a))],a4),a7),B.b,B.e,A.k(b,a)),new A.e(22,22,22,22))
return new A.n(A.j(A.c([a5,A.dB(new A.n(A.j(A.c([a6,a0,A.i(B.d,s,r,new A.A(A.i(B.d,r,r,A.h(A.aF(A.c([a3,A.i(A.a(["style",u.u],b,a),s,15,a2,r,r,r,r,q,r)],a4),1,18,new A.L(1,1,2,t.G),new A.L(18,r,28,a1)),new A.e(64,24,64,24)),r,j,r,r,q,r)),r,r,r,r,q,r),A.i(B.d,"#142B46",r,new A.A(A.i(B.d,r,r,A.h(new A.n(A.j(A.c([A.b(p,A.a(["style",u.N],b,a),r),A.d(r,7,r),A.b("Thoughtful software, built to last.",A.a(["style",d],b,a),r),A.d(r,17,r),A.aA(B.b,A.c([new A.q(A.h(A.b("Home",A.a(["style",c],b,a),r),new A.e(7,9,7,9)),o,new A.hS(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b(l,A.a(["style",c],b,a),r),new A.e(7,9,7,9)),o,new A.hT(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b(k,A.a(["style",c],b,a),r),new A.e(7,9,7,9)),o,new A.hU(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b("About",A.a(["style",c],b,a),r),new A.e(7,9,7,9)),o,new A.hV(a9),q,!1,A.a([n,""],b,a)),new A.q(A.h(A.b("Contact",A.a(["style",c],b,a),r),new A.e(7,9,7,9)),o,new A.hN(a9),q,!1,A.a([n,""],b,a))],a4),B.e,B.b,4,4),A.d(r,16,r),A.b(u.b,A.a(["style",d],b,a),r),A.d(r,18,r),A.b(u.Y,A.a(["style",u.k],b,a),r)],a4),a7),B.b,B.e,A.k(b,a)),new A.e(35,24,35,24)),r,j,r,r,q,r)),r,r,r,r,q,r)],a4),a7),B.b,B.f,A.k(b,a)),!1)],a4),a7),B.b,B.f,A.k(b,a))},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hN:function hN(a){this.a=a},
ku(a){return v.mangledGlobalNames[a]},
av(a){var s
if(typeof a=="function")throw A.f(A.a8("Attempting to rewrap a JS function."))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ml,a)
s[$.iY()]=a
return s},
ml(a,b,c){t.Z.a(a)
if(A.bf(c)>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.iu.prototype={}
J.de.prototype={
P(a,b){return a===b},
gF(a){return A.dw(a)},
l(a){return"Instance of '"+A.dx(a)+"'"},
gD(a){return A.bk(A.iN(this))}}
J.dg.prototype={
l(a){return String(a)},
gF(a){return a?519018:218159},
gD(a){return A.bk(t.y)},
$iO:1,
$iaa:1}
J.c8.prototype={
P(a,b){return null==b},
l(a){return"null"},
gF(a){return 0},
$iO:1}
J.cb.prototype={$iQ:1}
J.aV.prototype={
gF(a){return 0},
l(a){return String(a)}}
J.dv.prototype={}
J.bB.prototype={}
J.aU.prototype={
l(a){var s=a[$.kw()]
if(s==null)s=a[$.iY()]
if(s==null)return this.bu(a)
return"JavaScript function for "+J.aw(s)},
$ib4:1}
J.ca.prototype={
gF(a){return 0},
l(a){return String(a)}}
J.cc.prototype={
gF(a){return 0},
l(a){return String(a)}}
J.P.prototype={
i(a,b){A.I(a).c.a(b)
a.$flags&1&&A.ao(a,29)
a.push(b)},
R(a,b){A.I(a).h("o<1>").a(b)
a.$flags&1&&A.ao(a,"addAll",2)
this.bA(a,b)
return},
bA(a,b){var s,r
t.p.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.f(A.ay(a))
for(r=0;r<s;++r)a.push(b[r])},
S(a){a.$flags&1&&A.ao(a,"clear","clear")
a.length=0},
I(a,b){var s,r=A.iw(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
cf(a,b,c,d){var s,r,q
d.a(b)
A.I(a).M(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.f(A.ay(a))}return r},
T(a,b){if(!(b>=0&&b<a.length))return A.l(a,b)
return a[b]},
gW(a){var s=a.length
if(s>0)return a[s-1]
throw A.f(A.l4())},
a1(a,b){var s,r
A.I(a).h("aa(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.f(A.ay(a))}return!1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.aD(a[s],b))return!0
return!1},
gbi(a){return a.length!==0},
l(a){return A.it(a,"[","]")},
gt(a){return new J.bT(a,a.length,A.I(a).h("bT<1>"))},
gF(a){return A.dw(a)},
gm(a){return a.length},
q(a,b){if(!(b>=0&&b<a.length))throw A.f(A.hZ(a,b))
return a[b]},
k(a,b,c){var s
A.I(a).c.a(c)
a.$flags&2&&A.ao(a)
s=a.length
if(b>=s)throw A.f(A.hZ(a,b))
a[b]=c},
$iv:1,
$io:1,
$iD:1}
J.df.prototype={
cI(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.dx(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.eH.prototype={}
J.bT.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
j(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.bQ(q)
throw A.f(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iW:1}
J.c9.prototype={
cG(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.f(A.ba(""+a+".toInt()"))},
cD(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bn(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.f(A.ag(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.l(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.M(A.ba("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.l(p,1)
s=p[1]
if(3>=r)return A.l(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.a.aR("0",o)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a3(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
c4(a,b){return(a|0)===a?a/b|0:this.c5(a,b)},
c5(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.f(A.ba("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
aH(a,b){var s
if(a>0)s=this.b7(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
c2(a,b){if(0>b)throw A.f(A.kg(b))
return this.b7(a,b)},
b7(a,b){return b>31?0:a>>>b},
gD(a){return A.bk(t.n)},
$iF:1,
$ibm:1}
J.c7.prototype={
gD(a){return A.bk(t.S)},
$iO:1,
$im:1}
J.dh.prototype={
gD(a){return A.bk(t.i)},
$iO:1}
J.b5.prototype={
ba(a,b){return new A.dZ(b,a,0)},
cc(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.E(a,r-s)},
bs(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.br){s=b.e
s=!(s==null?b.e=b.bC():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.bK(a,b)}},
a_(a,b,c,d){var s=A.cq(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
bK(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.j_(b,a),s=s.gt(s),r=0,q=1;s.j();){p=s.gp()
o=p.gap()
n=p.gai()
q=n-o
if(q===0&&r===o)continue
B.c.i(m,this.n(a,r,o))
r=n}if(r<a.length||q>0)B.c.i(m,this.E(a,r))
return m},
v(a,b,c){var s
if(c<0||c>a.length)throw A.f(A.ag(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
u(a,b){return this.v(a,b,0)},
n(a,b,c){return a.substring(b,A.cq(b,c,a.length))},
E(a,b){return this.n(a,b,null)},
ae(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.l(p,0)
if(p.charCodeAt(0)===133){s=J.l8(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.l(p,r)
q=p.charCodeAt(r)===133?J.jb(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
cH(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.l(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.jb(r,s))},
aR(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.S)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
am(a,b,c){var s
if(c<0||c>a.length)throw A.f(A.ag(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
aO(a,b){return this.am(a,b,0)},
bj(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.f(A.ag(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
ck(a,b){return this.bj(a,b,null)},
G(a,b){return A.nF(a,b,0)},
l(a){return a},
gF(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return A.bk(t.N)},
gm(a){return a.length},
$iO:1,
$ieQ:1,
$ir:1}
A.az.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.bp.prototype={
gm(a){return this.a.length},
q(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.l(s,b)
return s.charCodeAt(b)}}
A.v.prototype={}
A.y.prototype={
gt(a){var s=this
return new A.C(s,s.gm(s),A.u(s).h("C<y.E>"))},
gV(a){return this.gm(this)===0},
a1(a,b){var s,r,q=this
A.u(q).h("aa(y.E)").a(b)
s=q.gm(q)
for(r=0;r<s;++r){if(b.$1(q.T(0,r)))return!0
if(s!==q.gm(q))throw A.f(A.ay(q))}return!1},
bk(a,b,c){var s=A.u(this)
return new A.a_(this,s.M(c).h("1(y.E)").a(b),s.h("@<y.E>").M(c).h("a_<1,2>"))}}
A.C.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
j(){var s,r=this,q=r.a,p=J.e7(q),o=p.gm(q)
if(r.b!==o)throw A.f(A.ay(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0},
$iW:1}
A.b7.prototype={
gt(a){return new A.ch(J.aR(this.a),this.b,A.u(this).h("ch<1,2>"))},
gm(a){return J.bS(this.a)}}
A.c1.prototype={$iv:1}
A.ch.prototype={
j(){var s=this,r=s.b
if(r.j()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iW:1}
A.a_.prototype={
gm(a){return J.bS(this.a)},
T(a,b){return this.b.$1(J.kO(this.a,b))}}
A.ak.prototype={
gt(a){return new A.cD(J.aR(this.a),this.b,this.$ti.h("cD<1>"))}}
A.cD.prototype={
j(){var s,r
for(s=this.a,r=this.b;s.j();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iW:1}
A.ab.prototype={}
A.b9.prototype={
k(a,b,c){A.u(this).h("b9.E").a(c)
throw A.f(A.ba("Cannot modify an unmodifiable list"))}}
A.bC.prototype={}
A.G.prototype={
gm(a){return J.bS(this.a)},
T(a,b){var s=this.a,r=J.e7(s)
return r.T(s,r.gm(s)-1-b)}}
A.bW.prototype={}
A.bV.prototype={
gV(a){return this.gm(this)===0},
l(a){return A.iy(this)},
k(a,b,c){var s=A.u(this)
s.c.a(b)
s.y[1].a(c)
A.kX()},
gC(){return new A.bF(this.cd(),A.u(this).h("bF<ac<1,2>>"))},
cd(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gC(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gK(),o=o.gt(o),n=A.u(s),m=n.y[1],n=n.h("ac<1,2>")
case 2:if(!o.j()){r=3
break}l=o.gp()
k=s.q(0,l)
r=4
return a.b=new A.ac(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iY:1}
A.a5.prototype={
gm(a){return this.b.length},
gb0(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
N(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
q(a,b){if(!this.N(b))return null
return this.b[this.a[b]]},
U(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gb0()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gK(){return new A.bb(this.gb0(),this.$ti.h("bb<1>"))},
gaf(){return new A.bb(this.b,this.$ti.h("bb<2>"))}}
A.bb.prototype={
gm(a){return this.a.length},
gt(a){var s=this.a
return new A.bc(s,s.length,this.$ti.h("bc<1>"))}}
A.bc.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
j(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iW:1}
A.bX.prototype={
i(a,b){A.u(this).c.a(b)
A.kY()}}
A.bY.prototype={
gm(a){return this.b},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.bc(s,s.length,r.$ti.h("bc<1>"))},
G(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cu.prototype={}
A.f3.prototype={
O(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cn.prototype={
l(a){return"Null check operator used on a null value"}}
A.di.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dI.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.eP.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cM.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ijo:1}
A.aS.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.kv(r==null?"unknown":r)+"'"},
$ib4:1,
gcL(){return this},
$C:"$1",
$R:1,
$D:null}
A.d3.prototype={$C:"$0",$R:0}
A.d4.prototype={$C:"$2",$R:2}
A.dG.prototype={}
A.dD.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.kv(s)+"'"}}
A.bo.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bo))return!1
return this.$_target===b.$_target&&this.a===b.a},
gF(a){return(A.nB(this.a)^A.dw(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.dx(this.a)+"'")}}
A.dA.prototype={
l(a){return"RuntimeError: "+this.a}}
A.aG.prototype={
gm(a){return this.a},
gV(a){return this.a===0},
gK(){return new A.aH(this,A.u(this).h("aH<1>"))},
gaf(){return new A.ae(this,A.u(this).h("ae<2>"))},
gC(){return new A.a6(this,A.u(this).h("a6<1,2>"))},
N(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
R(a,b){A.u(this).h("Y<1,2>").a(b).U(0,new A.eI(this))},
q(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cg(b)},
cg(a){var s,r,q=this.d
if(q==null)return null
s=this.bP(q,a)
r=this.bh(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.u(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.aS(s==null?q.b=q.aE():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.aS(r==null?q.c=q.aE():r,b,c)}else q.ci(b,c)},
ci(a,b){var s,r,q,p,o=this,n=A.u(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.aE()
r=o.bg(a)
q=s[r]
if(q==null)s[r]=[o.aF(a,b)]
else{p=o.bh(q,a)
if(p>=0)q[p].b=b
else q.push(o.aF(a,b))}},
cw(a,b){var s,r,q=this,p=A.u(q)
p.c.a(a)
p.h("2()").a(b)
if(q.N(a)){s=q.q(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
Z(a,b){var s=this.bW(this.b,b)
return s},
S(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aD()}},
U(a,b){var s,r,q=this
A.u(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.f(A.ay(q))
s=s.c}},
aS(a,b,c){var s,r=A.u(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aF(b,c)
else s.b=c},
bW(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.c6(s)
delete a[b]
return s.b},
aD(){this.r=this.r+1&1073741823},
aF(a,b){var s=this,r=A.u(s),q=new A.eK(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.aD()
return q},
c6(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.aD()},
bg(a){return J.ea(a)&1073741823},
bP(a,b){return a[this.bg(b)]},
bh(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aD(a[r].a,b))return r
return-1},
l(a){return A.iy(this)},
aE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijf:1}
A.eI.prototype={
$2(a,b){var s=this.a,r=A.u(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.u(this.a).h("~(1,2)")}}
A.eK.prototype={}
A.aH.prototype={
gm(a){return this.a.a},
gV(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cf(s,s.r,s.e,this.$ti.h("cf<1>"))},
G(a,b){return this.a.N(b)}}
A.cf.prototype={
gp(){return this.d},
j(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iW:1}
A.ae.prototype={
gm(a){return this.a.a},
gt(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.h("cg<1>"))}}
A.cg.prototype={
gp(){return this.d},
j(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iW:1}
A.a6.prototype={
gm(a){return this.a.a},
gt(a){var s=this.a
return new A.ce(s,s.r,s.e,this.$ti.h("ce<1,2>"))}}
A.ce.prototype={
gp(){var s=this.d
s.toString
return s},
j(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.ac(s.a,s.b,r.$ti.h("ac<1,2>"))
r.c=s.c
return!0}},
$iW:1}
A.i2.prototype={
$1(a){return this.a(a)},
$S:11}
A.i3.prototype={
$2(a,b){return this.a(a,b)},
$S:16}
A.i4.prototype={
$1(a){return this.a(A.x(a))},
$S:17}
A.br.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gb2(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.jc(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
bC(){var s,r=this.a
if(!B.a.G(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ba(a,b){return new A.dN(this,b,0)},
bN(a,b){var s,r=this.gb2()
if(r==null)r=A.e4(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.dW(s)},
$ieQ:1,
$iln:1}
A.dW.prototype={
gap(){return this.b.index},
gai(){var s=this.b
return s.index+s[0].length},
$ibu:1,
$icr:1}
A.dN.prototype={
gt(a){return new A.dO(this.a,this.b,this.c)}}
A.dO.prototype={
gp(){var s=this.d
return s==null?t.cz.a(s):s},
j(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bN(l,s)
if(p!=null){m.d=p
o=p.gai()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.l(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.l(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iW:1}
A.dE.prototype={
gai(){return this.a+this.c.length},
$ibu:1,
gap(){return this.a}}
A.dZ.prototype={
gt(a){return new A.e_(this.a,this.b,this.c)}}
A.e_.prototype={
j(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dE(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s},
$iW:1}
A.fe.prototype={
A(){var s=this.b
if(s===this)throw A.f(new A.az("Local '' has not been initialized."))
return s},
saj(a){if(this.b!==this)throw A.f(new A.az("Local '' has already been initialized."))
this.b=a}}
A.bv.prototype={
gD(a){return B.a5},
$iO:1}
A.ck.prototype={
bS(a,b,c,d){var s=A.ag(b,0,c,d,null)
throw A.f(s)},
aU(a,b,c,d){if(b>>>0!==b||b>c)this.bS(a,b,c,d)}}
A.dl.prototype={
gD(a){return B.a6},
$iO:1}
A.a7.prototype={
gm(a){return a.length},
$iad:1}
A.ci.prototype={
q(a,b){A.aP(b,a,a.length)
return a[b]},
k(a,b,c){A.jT(c)
a.$flags&2&&A.ao(a)
A.aP(b,a,a.length)
a[b]=c},
$iv:1,
$io:1,
$iD:1}
A.cj.prototype={
k(a,b,c){A.bf(c)
a.$flags&2&&A.ao(a)
A.aP(b,a,a.length)
a[b]=c},
br(a,b,c,d,e){var s,r,q
t.D.a(d)
a.$flags&2&&A.ao(a,5)
s=a.length
this.aU(a,b,s,"start")
this.aU(a,c,s,"end")
if(b>c)A.M(A.ag(b,0,c,null,null))
r=c-b
if(e<0)A.M(A.a8(e))
if(16-e<r)A.M(A.z("Not enough elements"))
q=e!==0||16!==r?d.subarray(e,e+r):d
a.set(q,b)
return},
$iv:1,
$io:1,
$iD:1}
A.dm.prototype={
gD(a){return B.a7},
$iO:1}
A.dn.prototype={
gD(a){return B.a8},
$iO:1}
A.dp.prototype={
gD(a){return B.a9},
q(a,b){A.aP(b,a,a.length)
return a[b]},
$iO:1}
A.dq.prototype={
gD(a){return B.aa},
q(a,b){A.aP(b,a,a.length)
return a[b]},
$iO:1}
A.dr.prototype={
gD(a){return B.ab},
q(a,b){A.aP(b,a,a.length)
return a[b]},
$iO:1}
A.ds.prototype={
gD(a){return B.ac},
q(a,b){A.aP(b,a,a.length)
return a[b]},
$iO:1}
A.dt.prototype={
gD(a){return B.ad},
q(a,b){A.aP(b,a,a.length)
return a[b]},
$iO:1}
A.cl.prototype={
gD(a){return B.ae},
gm(a){return a.length},
q(a,b){A.aP(b,a,a.length)
return a[b]},
$iO:1}
A.cm.prototype={
gD(a){return B.af},
gm(a){return a.length},
q(a,b){A.aP(b,a,a.length)
return a[b]},
$iO:1,
$iiE:1}
A.cH.prototype={}
A.cI.prototype={}
A.cJ.prototype={}
A.cK.prototype={}
A.as.prototype={
h(a){return A.fB(v.typeUniverse,this,a)},
M(a){return A.lX(v.typeUniverse,this,a)}}
A.dT.prototype={}
A.fp.prototype={
l(a){return A.ah(this.a,null)}}
A.dS.prototype={
l(a){return this.a}}
A.cO.prototype={}
A.fb.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:18}
A.fa.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:19}
A.fc.prototype={
$0(){this.a.$0()},
$S:12}
A.fd.prototype={
$0(){this.a.$0()},
$S:12}
A.fn.prototype={
by(a,b){if(self.setTimeout!=null)self.setTimeout(A.hY(new A.fo(this,b),0),a)
else throw A.f(A.ba("`setTimeout()` not found."))}}
A.fo.prototype={
$0(){this.b.$0()},
$S:1}
A.cN.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
c1(a,b){var s,r,q
a=A.bf(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
j(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.j()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.c1(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.jD
return!1}if(0>=p.length)return A.l(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.jD
throw n
return!1}if(0>=p.length)return A.l(p,-1)
o.a=p.pop()
m=1
continue}throw A.f(A.z("sync*"))}return!1},
cM(a){var s,r,q=this
if(a instanceof A.bF){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.c.i(r,q.a)
q.a=s
return 2}else{q.d=J.aR(a)
return 2}},
$iW:1}
A.bF.prototype={
gt(a){return new A.cN(this.a(),this.$ti.h("cN<1>"))}}
A.dP.prototype={}
A.e3.prototype={$ijw:1}
A.dY.prototype={
cF(a){var s,r,q
t.M.a(a)
try{if(B.t===$.dM){a.$0()
return}A.mT(null,null,this,a,t.H)}catch(q){s=A.d_(q)
r=A.e8(q)
A.mS(A.e4(s),t.l.a(r))}},
bb(a){return new A.fm(this,t.M.a(a))}}
A.fm.prototype={
$0(){return this.a.cF(this.b)},
$S:1}
A.fO.prototype={
$0(){A.da(this.a,this.b)},
$S:1}
A.aO.prototype={
gt(a){var s=this,r=new A.bd(s,s.r,A.u(s).h("bd<1>"))
r.c=s.e
return r},
gm(a){return this.a},
G(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Q.a(s[b])!=null}else{r=this.bE(b)
return r}},
bE(a){var s=this.d
if(s==null)return!1
return this.aC(s[this.aw(a)],a)>=0},
i(a,b){var s,r,q=this
A.u(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aV(s==null?q.b=A.iF():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aV(r==null?q.c=A.iF():r,b)}else return q.bz(b)},
bz(a){var s,r,q,p=this
A.u(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.iF()
r=p.aw(a)
q=s[r]
if(q==null)s[r]=[p.av(a)]
else{if(p.aC(q,a)>=0)return!1
q.push(p.av(a))}return!0},
Z(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.aW(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.aW(s.c,b)
else return s.bV(b)},
bV(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aw(a)
r=n[s]
q=o.aC(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.aX(p)
return!0},
S(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.au()}},
aV(a,b){A.u(this).c.a(b)
if(t.Q.a(a[b])!=null)return!1
a[b]=this.av(b)
return!0},
aW(a,b){var s
if(a==null)return!1
s=t.Q.a(a[b])
if(s==null)return!1
this.aX(s)
delete a[b]
return!0},
au(){this.r=this.r+1&1073741823},
av(a){var s,r=this,q=new A.dU(A.u(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.au()
return q},
aX(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.au()},
aw(a){return J.ea(a)&1073741823},
aC(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aD(a[r].a,b))return r
return-1},
$ijh:1}
A.dU.prototype={}
A.bd.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
j(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.f(A.ay(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iW:1}
A.eL.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:20}
A.J.prototype={
gt(a){return new A.C(a,this.gm(a),A.bO(a).h("C<J.E>"))},
T(a,b){return this.q(a,b)},
gbi(a){return this.gm(a)!==0},
ce(a,b,c,d){var s
A.bO(a).h("J.E?").a(d)
A.cq(b,c,this.gm(a))
for(s=b;s<c;++s)this.k(a,s,d)},
l(a){return A.it(a,"[","]")},
$iv:1,
$io:1,
$iD:1}
A.Z.prototype={
U(a,b){var s,r,q,p=A.u(this)
p.h("~(Z.K,Z.V)").a(b)
for(s=this.gK(),s=s.gt(s),p=p.h("Z.V");s.j();){r=s.gp()
q=this.q(0,r)
b.$2(r,q==null?p.a(q):q)}},
gC(){return this.gK().bk(0,new A.eN(this),A.u(this).h("ac<Z.K,Z.V>"))},
N(a){return this.gK().G(0,a)},
gm(a){var s=this.gK()
return s.gm(s)},
gV(a){var s=this.gK()
return s.gV(s)},
gaf(){return new A.cF(this,A.u(this).h("cF<Z.K,Z.V>"))},
l(a){return A.iy(this)},
$iY:1}
A.eN.prototype={
$1(a){var s=this.a,r=A.u(s)
r.h("Z.K").a(a)
s=s.q(0,a)
if(s==null)s=r.h("Z.V").a(s)
return new A.ac(a,s,r.h("ac<Z.K,Z.V>"))},
$S(){return A.u(this.a).h("ac<Z.K,Z.V>(Z.K)")}}
A.eO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:13}
A.cF.prototype={
gm(a){var s=this.a
return s.gm(s)},
gt(a){var s=this.a,r=s.gK()
return new A.cG(r.gt(r),s,this.$ti.h("cG<1,2>"))}}
A.cG.prototype={
j(){var s=this,r=s.a
if(r.j()){s.c=s.b.q(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iW:1}
A.cS.prototype={
k(a,b,c){var s=A.u(this)
s.c.a(b)
s.y[1].a(c)
throw A.f(A.ba("Cannot modify unmodifiable map"))}}
A.bt.prototype={
q(a,b){return this.a.q(0,b)},
k(a,b,c){var s=A.u(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
N(a){return this.a.N(a)},
U(a,b){this.a.U(0,A.u(this).h("~(1,2)").a(b))},
gV(a){var s=this.a
return s.gV(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gaf(){return this.a.gaf()},
gC(){return this.a.gC()},
$iY:1}
A.b0.prototype={}
A.aZ.prototype={
R(a,b){var s
for(s=J.aR(A.u(this).h("o<1>").a(b));s.j();)this.i(0,s.gp())},
l(a){return A.it(this,"{","}")},
$iv:1,
$io:1,
$idC:1}
A.cL.prototype={}
A.bH.prototype={}
A.fE.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:4}
A.fD.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:4}
A.d2.prototype={
cn(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.cq(a4,a5,a2)
s=$.kH()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.l(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.l(a3,k)
h=A.i1(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.l(a3,g)
f=A.i1(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.l(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.l(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.a4("")
g=o}else g=o
g.a+=B.a.n(a3,p,q)
c=A.U(j)
g.a+=c
p=k
continue}}throw A.f(A.a9("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.n(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.j0(a3,m,a5,n,l,r)
else{b=B.l.a3(r-1,4)+1
if(b===1)throw A.f(A.a9(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.a_(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.j0(a3,m,a5,n,l,a)
else{b=B.l.a3(a,4)
if(b===1)throw A.f(A.a9(a1,a3,a5))
if(b>1)a3=B.a.a_(a3,a5,a5,b===2?"==":"=")}return a3}}
A.eb.prototype={}
A.b3.prototype={}
A.d6.prototype={}
A.d8.prototype={}
A.cd.prototype={
l(a){var s=A.d9(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.dk.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.dj.prototype={
bc(a,b){var s=A.lG(a,this.gcb().b,null)
return s},
gcb(){return B.Y}}
A.eJ.prototype={}
A.fj.prototype={
bq(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.a.n(a,r,q)
r=q+1
o=A.U(92)
s.a+=o
o=A.U(117)
s.a+=o
o=A.U(100)
s.a+=o
o=p>>>8&15
o=A.U(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.U(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.U(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.a.n(a,r,q)
r=q+1
o=A.U(92)
s.a+=o
switch(p){case 8:o=A.U(98)
s.a+=o
break
case 9:o=A.U(116)
s.a+=o
break
case 10:o=A.U(110)
s.a+=o
break
case 12:o=A.U(102)
s.a+=o
break
case 13:o=A.U(114)
s.a+=o
break
default:o=A.U(117)
s.a+=o
o=A.U(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.U(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.U(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.a.n(a,r,q)
r=q+1
o=A.U(92)
s.a+=o
o=A.U(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.a.n(a,r,m)},
ar(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.f(new A.dk(a,null))}B.c.i(s,a)},
ao(a){var s,r,q,p,o=this
if(o.bp(a))return
o.ar(a)
try{s=o.b.$1(a)
if(!o.bp(s)){q=A.jd(a,null,o.gb4())
throw A.f(q)}q=o.a
if(0>=q.length)return A.l(q,-1)
q.pop()}catch(p){r=A.d_(p)
q=A.jd(a,r,o.gb4())
throw A.f(q)}},
bp(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.V.l(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bq(a)
s.a+='"'
return!0}else if(t._.b(a)){q.ar(a)
q.cJ(a)
s=q.a
if(0>=s.length)return A.l(s,-1)
s.pop()
return!0}else if(t.ce.b(a)){q.ar(a)
r=q.cK(a)
s=q.a
if(0>=s.length)return A.l(s,-1)
s.pop()
return r}else return!1},
cJ(a){var s,r,q=this.c
q.a+="["
s=J.e7(a)
if(s.gbi(a)){this.ao(s.q(a,0))
for(r=1;r<s.gm(a);++r){q.a+=","
this.ao(s.q(a,r))}}q.a+="]"},
cK(a){var s,r,q,p,o,n,m=this,l={}
if(a.gV(a)){m.c.a+="{}"
return!0}s=a.gm(a)*2
r=A.iw(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.U(0,new A.fk(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bq(A.x(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.l(r,n)
m.ao(r[n])}p.a+="}"
return!0}}
A.fk.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.c.k(s,r.a++,a)
B.c.k(s,r.a++,b)},
$S:13}
A.fi.prototype={
gb4(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dL.prototype={}
A.f9.prototype={
a5(a){var s,r,q,p,o=a.length,n=A.cq(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.fF(r)
if(q.bO(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.l(a,p)
q.aL()}return new Uint8Array(r.subarray(0,A.mn(0,q.b,s)))}}
A.fF.prototype={
aL(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.ao(q)
s=q.length
if(!(p<s))return A.l(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.l(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.l(q,p)
q[p]=189},
c8(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.ao(r)
o=r.length
if(!(q<o))return A.l(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.l(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.l(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.l(r,p)
r[p]=s&63|128
return!0}else{n.aL()
return!1}},
bO(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.l(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.l(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.ao(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.l(a,m)
if(k.c8(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.aL()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.ao(s)
if(!(m<q))return A.l(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.ao(s)
if(!(m<q))return A.l(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.l(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.l(s,m)
s[m]=n&63|128}}}return o}}
A.f8.prototype={
a5(a){return new A.fC(this.a).bG(t.L.a(a),0,null,!0)}}
A.fC.prototype={
bG(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.cq(b,c,J.bS(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.mc(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.mb(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.az(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.md(o)
l.b=0
throw A.f(A.a9(m,a,p+l.c))}return n},
az(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.l.c4(b+c,2)
r=q.az(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.az(a,s,c,d)}return q.ca(a,b,c,d)},
ca(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.a4(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.l(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.l(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.l(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.U(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.U(h)
e.a+=p
break
case 65:p=A.U(h)
e.a+=p;--d
break
default:p=A.U(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.l(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.l(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.l(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.l(a,l)
p=A.U(a[l])
e.a+=p}else{p=A.jq(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.U(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ff.prototype={
l(a){return this.ag()}}
A.T.prototype={}
A.d0.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.d9(s)
return"Assertion failed"}}
A.cB.prototype={}
A.ax.prototype={
gaB(){return"Invalid argument"+(!this.a?"(s)":"")},
gaA(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gaB()+q+o
if(!s.a)return n
return n+s.gaA()+": "+A.d9(s.gaP())},
gaP(){return this.b}}
A.cp.prototype={
gaP(){return A.jU(this.b)},
gaB(){return"RangeError"},
gaA(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.dd.prototype={
gaP(){return A.bf(this.b)},
gaB(){return"RangeError"},
gaA(){if(A.bf(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.cC.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.dH.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.bA.prototype={
l(a){return"Bad state: "+this.a}}
A.d5.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.d9(s)+"."}}
A.du.prototype={
l(a){return"Out of Memory"},
$iT:1}
A.cz.prototype={
l(a){return"Stack Overflow"},
$iT:1}
A.fg.prototype={
l(a){return"Exception: "+this.a}}
A.aE.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.n(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.l(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.l(e,n)
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
k=""}return g+l+B.a.n(e,i,j)+k+"\n"+B.a.aR(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.o.prototype={
bk(a,b,c){var s=A.u(this)
return A.lh(this,s.M(c).h("1(o.E)").a(b),s.h("o.E"),c)},
I(a,b){var s,r,q=this.gt(this)
if(!q.j())return""
s=J.aw(q.gp())
if(!q.j())return s
if(b.length===0){r=s
do r+=J.aw(q.gp())
while(q.j())}else{r=s
do r=r+b+J.aw(q.gp())
while(q.j())}return r.charCodeAt(0)==0?r:r},
a1(a,b){var s
A.u(this).h("aa(o.E)").a(b)
for(s=this.gt(this);s.j();)if(b.$1(s.gp()))return!0
return!1},
gm(a){var s,r=this.gt(this)
for(s=0;r.j();)++s
return s},
T(a,b){var s,r
A.jl(b,"index")
s=this.gt(this)
for(r=b;s.j();){if(r===0)return s.gp();--r}throw A.f(A.j9(b,b-r,this,"index"))},
l(a){return A.l5(this,"(",")")}}
A.ac.prototype={
l(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.af.prototype={
gF(a){return A.K.prototype.gF.call(this,0)},
l(a){return"null"}}
A.K.prototype={$iK:1,
P(a,b){return this===b},
gF(a){return A.dw(this)},
l(a){return"Instance of '"+A.dx(this)+"'"},
gD(a){return A.np(this)},
toString(){return this.l(this)}}
A.a4.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ilt:1}
A.f7.prototype={
$2(a,b){var s,r,q,p
t.Y.a(a)
A.x(b)
s=B.a.aO(b,"=")
if(s===-1){if(b!=="")a.k(0,A.e2(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.n(b,0,s)
q=B.a.E(b,s+1)
p=this.a
a.k(0,A.e2(r,0,r.length,p,!0),A.e2(q,0,q.length,p,!0))}return a},
$S:21}
A.f6.prototype={
$2(a,b){throw A.f(A.a9("Illegal IPv6 address, "+a,this.a,b))},
$S:22}
A.cT.prototype={
gb8(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.w(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gF(a){var s,r=this,q=r.y
if(q===$){s=B.a.gF(r.gb8())
r.y!==$&&A.kt()
r.y=s
q=s}return q},
gbl(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.jv(s==null?"":s)
r.z!==$&&A.kt()
q=r.z=new A.b0(s,t.h)}return q},
gaQ(){return this.b},
gal(){var s=this.c
if(s==null)return""
if(B.a.u(s,"[")&&!B.a.v(s,"v",1))return B.a.n(s,1,s.length-1)
return s},
gaa(){var s=this.d
return s==null?A.jJ(this.a):s},
gX(){var s=this.f
return s==null?"":s},
gY(){var s=this.r
return s==null?"":s},
cj(a){var s=this.a
if(a.length!==s.length)return!1
return A.mm(a,s,0)>=0},
bm(a){var s,r,q,p,o,n,m,l=this
a=A.iK(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.iJ(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.a.u(o,"/"))o="/"+o
m=o
return A.e1(a,r,p,q,m,l.f,l.r)},
b1(a,b){var s,r,q,p,o,n,m,l,k
for(s=0,r=0;B.a.v(b,"../",r);){r+=3;++s}q=B.a.ck(a,"/")
p=a.length
for(;;){if(!(q>0&&s>0))break
o=B.a.bj(a,"/",q-1)
if(o<0)break
n=q-o
m=n!==2
l=!1
if(!m||n===3){k=o+1
if(!(k<p))return A.l(a,k)
if(a.charCodeAt(k)===46)if(m){m=o+2
if(!(m<p))return A.l(a,m)
m=a.charCodeAt(m)===46}else m=!0
else m=l}else m=l
if(m)break;--s
q=o}return B.a.a_(a,q+1,null,B.a.E(b,r-3*s))},
ac(a){return this.ad(A.b1(a))},
ad(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.ga4().length!==0)return a
else{s=h.a
if(a.gak()){r=a.bm(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gbd())m=a.ga7()?a.gX():h.f
else{l=A.m9(h,n)
if(l>0){k=B.a.n(n,0,l)
n=a.gaM()?k+A.bJ(a.gL()):k+A.bJ(h.b1(B.a.E(n,k.length),a.gL()))}else if(a.gaM())n=A.bJ(a.gL())
else if(n.length===0)if(p==null)n=s.length===0?a.gL():A.bJ(a.gL())
else n=A.bJ("/"+a.gL())
else{j=h.b1(n,a.gL())
r=s.length===0
if(!r||p!=null||B.a.u(n,"/"))n=A.bJ(j)
else n=A.jO(j,!r||p!=null)}m=a.ga7()?a.gX():null}}}i=a.ga6()?a.gY():null
return A.e1(s,q,p,o,n,m,i)},
gbe(){return this.a.length!==0},
gak(){return this.c!=null},
ga7(){return this.f!=null},
ga6(){return this.r!=null},
gbd(){return this.e.length===0},
gaM(){return B.a.u(this.e,"/")},
ga8(){var s,r,q=this,p=q.a
if(p==="")throw A.f(A.z("Cannot use origin without a scheme: "+q.l(0)))
if(p!=="http"&&p!=="https")throw A.f(A.z("Origin is only applicable schemes http and https: "+q.l(0)))
s=q.c
if(s==null||s==="")throw A.f(A.z("A "+p+u.q+q.l(0)))
r=q.d
if(r==null)return p+"://"+s
return p+"://"+s+":"+A.w(r)},
l(a){return this.gb8()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.ga4())if(p.c!=null===b.gak())if(p.b===b.gaQ())if(p.gal()===b.gal())if(p.gaa()===b.gaa())if(p.e===b.gL()){r=p.f
q=r==null
if(!q===b.ga7()){if(q)r=""
if(r===b.gX()){r=p.r
q=r==null
if(!q===b.ga6()){s=q?"":r
s=s===b.gY()}}}}return s},
$idJ:1,
ga4(){return this.a},
gL(){return this.e}}
A.f5.prototype={
gbo(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.l(m,0)
s=o.a
m=m[0]+1
r=B.a.am(s,"?",m)
q=s.length
if(r>=0){p=A.cU(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.dR("data","",n,n,A.cU(s,m,q,128,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.l(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.al.prototype={
gbe(){return this.b>0},
gak(){return this.c>0},
gaN(){return this.c>0&&this.d+1<this.e},
ga7(){return this.f<this.r},
ga6(){return this.r<this.a.length},
gaM(){return B.a.v(this.a,"/",this.e)},
gbd(){return this.e===this.f},
ga4(){var s=this.w
return s==null?this.w=this.bD():s},
bD(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.u(r.a,"http"))return"http"
if(q===5&&B.a.u(r.a,"https"))return"https"
if(s&&B.a.u(r.a,"file"))return"file"
if(q===7&&B.a.u(r.a,"package"))return"package"
return B.a.n(r.a,0,q)},
gaQ(){var s=this.c,r=this.b+3
return s>r?B.a.n(this.a,r,s-1):""},
gal(){var s=this.c
return s>0?B.a.n(this.a,s,this.d):""},
gaa(){var s,r=this
if(r.gaN())return A.nw(B.a.n(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.u(r.a,"http"))return 80
if(s===5&&B.a.u(r.a,"https"))return 443
return 0},
gL(){return B.a.n(this.a,this.e,this.f)},
gX(){var s=this.f,r=this.r
return s<r?B.a.n(this.a,s+1,r):""},
gY(){var s=this.r,r=this.a
return s<r.length?B.a.E(r,s+1):""},
ga8(){var s,r,q=this,p=q.b,o=p===4&&B.a.u(q.a,"http")
if(p<0)throw A.f(A.z("Cannot use origin without a scheme: "+q.l(0)))
if(!o)s=!(p===5&&B.a.u(q.a,"https"))
else s=!1
if(s)throw A.f(A.z("Origin is only applicable to schemes http and https: "+q.l(0)))
s=q.c
if(s===q.d)throw A.f(A.z("A "+q.ga4()+u.q+q.l(0)))
p+=3
if(s===p)return B.a.n(q.a,0,q.e)
r=q.a
return B.a.n(r,0,p)+B.a.n(r,s,q.e)},
gbl(){if(this.f>=this.r)return B.E
return new A.b0(A.jv(this.gX()),t.h)},
b_(a){var s=this.d+1
return s+a.length===this.e&&B.a.v(this.a,a,s)},
cz(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.al(B.a.n(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
bm(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.iK(a,0,a.length)
s=!(h.b===a.length&&B.a.u(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.n(h.a,h.b+3,q):""
o=h.gaN()?h.gaa():g
if(s)o=A.iJ(o,a)
q=h.c
if(q>0)n=B.a.n(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.n(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.u(l,"/"))l="/"+l
k=h.r
j=m<k?B.a.n(q,m+1,k):g
m=h.r
i=m<q.length?B.a.E(q,m+1):g
return A.e1(a,p,n,o,l,j,i)},
ac(a){return this.ad(A.b1(a))},
ad(a){if(a instanceof A.al)return this.c3(this,a)
return this.b9().ad(a)},
c3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.u(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.u(a.a,"http"))p=!b.b_("80")
else p=!(r===5&&B.a.u(a.a,"https"))||!b.b_("443")
if(p){o=r+1
return new A.al(B.a.n(a.a,0,o)+B.a.E(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.b9().ad(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.al(B.a.n(a.a,0,r)+B.a.E(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.al(B.a.n(a.a,0,r)+B.a.E(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.cz()}s=b.a
if(B.a.v(s,"/",n)){m=a.e
l=A.jC(this)
k=l>0?l:m
o=k-n
return new A.al(B.a.n(a.a,0,k)+B.a.E(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.v(s,"../",n))n+=3
o=j-n+1
return new A.al(B.a.n(a.a,0,j)+"/"+B.a.E(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.jC(this)
if(l>=0)g=l
else for(g=j;B.a.v(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.v(s,"../",n)))break;++f
n=e}for(r=h.length,d="";i>g;){--i
if(!(i>=0&&i<r))return A.l(h,i)
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.v(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.al(B.a.n(h,0,i)+d+B.a.E(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
gF(a){var s=this.x
return s==null?this.x=B.a.gF(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.l(0)},
b9(){var s=this,r=null,q=s.ga4(),p=s.gaQ(),o=s.c>0?s.gal():r,n=s.gaN()?s.gaa():r,m=s.a,l=s.f,k=B.a.n(m,s.e,l),j=s.r
l=l<j?s.gX():r
return A.e1(q,p,o,n,k,l,j<m.length?s.gY():r)},
l(a){return this.a},
$idJ:1}
A.dR.prototype={}
A.db.prototype={
k(a,b,c){this.$ti.h("1?").a(c)
this.a.set(b,c)},
l(a){return"Expando:"+this.b}}
A.dc.prototype={
bf(a,b){var s,r,q,p,o,n,m,l,k={},j=$.ir()
A.j6(a)
if(j.a.get(a)!=null)throw A.f(A.z("This container is already being hydrated."))
m=new A.K()
j.k(0,a,m)
s=A.c([],t.u)
try{J.e9(s,A.e5(A.cY(b)))
r=this.ah(A.E(a.firstChild),b,s,"root")
if(r!=null){j=A.z("Unexpected DOM node after the hydrated root.")
throw A.f(j)}}catch(l){q=A.d_(l)
p=A.e8(l)
$.ir().k(0,a,null)
try{A.bi(s)}catch(l){o=A.d_(l)
n=A.e8(l)
A.da(new A.bA("Hydration failed: "+A.w(q)+". Cleanup also failed: "+A.w(o)+"."),n)}A.da(q,p)}k.a=!1
return new A.eG(k,s,a,m)},
ah(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
t.q.a(a5)
if(a3==null)throw A.f(A.z("Missing server-rendered node at "+a6+"."))
s=a4 instanceof A.a3
r=s?a4.a:a2
if(s){s=A.x(a3.data)
if(s!==r)throw A.f(A.z("Text mismatch at "+a6+"."))
return A.E(a3.nextSibling)}q={}
q.a=q.b=null
s=a4 instanceof A.b8
if(s){p=a4.a
q.b=a4.b
q.a=a4.c}else p=a2
if(s){s=A.x(a3.data)
o=A.w(p)
if(s!=="fw:text:"+o)throw A.f(A.z("Signal text marker mismatch at "+a6+"."))
n=A.E(a3.nextSibling)
s=t.m
if(!s.b(n))throw A.f(A.z("Missing signal text node at "+a6+"."))
m=A.by(new A.eu(q),t.A)
o=A.x(n.data)
l=A.k9(m)
if(o!==l)throw A.f(A.z("Signal text value mismatch at "+a6+"."))
k=A.E(n.nextSibling)
if(!s.b(k)||A.x(k.data)!=="fw:/text:"+A.w(p))throw A.f(A.z("Signal text end marker mismatch at "+a6+"."))
B.c.i(a5,A.bN(new A.ev(q,n)))
return A.E(k.nextSibling)}if(a4 instanceof A.aI)return this.bR(a3,a4,a5,a6)
j={}
j.a=j.b=null
s=a4 instanceof A.aj
i=a2
h=a2
g=a2
f=a2
e=a2
if(s){o=j.b=a4.a
i=a4.b
h=a4.c
g=a4.d
f=a4.e
e=a4.f
j.a=a4.r}else o=a2
if(s){s=A.x(a3.localName)
l=o.toLowerCase()
if(s!==l){s=A.x(a3.localName)
throw A.f(A.z("Expected <"+o+"> at "+a6+", found "+("<"+s+">")+"."))}for(s=i.gC(),s=s.gt(s),o=t.A;s.j();){l=s.gp()
r=l.b
d=r instanceof A.cw
m=d?A.by(new A.ew(r),o):r
l=l.a
if(A.bg(a3.getAttribute(l))!=A.mk(m))throw A.f(A.z('Attribute mismatch for "'+l+'" at '+a6+"."))
if(d)this.bB(a3,l,r.b,a5)}c=A.E(a3.firstChild)
for(s=h.length,o=a6+"/",b=0;b<s;++b)c=this.ah(c,h[b],a5,o+j.b+"["+b+"]")
if(c!=null)throw A.f(A.z("Unexpected child node at "+a6+"."))
if(j.a!=null){a=A.by(new A.ey(j),t.N)
if(A.x(a3.value)!==a)throw A.f(A.z("Select value mismatch at "+a6+"."))
B.c.i(a5,A.kj(a3,j.a.b))}for(s=g.gC(),s=s.gt(s);s.j();){o=s.gp()
a0=A.av(new A.ez(j,o))
l=o.a
a3.addEventListener(l,a0)
B.c.i(a5,new A.eA(a3,o,a0))
if(l==="click"&&J.aD(i.q(0,"role"),"button")){a1=A.av(new A.eB(o))
a3.addEventListener("keydown",a1)
B.c.i(a5,new A.eC(a3,a1))}}for(s=f.gC(),s=s.gt(s);s.j();){o=s.gp()
a0=A.av(new A.eD(a3,o))
a3.addEventListener(o.a,a0)
B.c.i(a5,new A.eE(a3,o,a0))}for(s=e.gC(),s=s.gt(s);s.j();){o=s.gp()
a0=A.av(new A.eF(a3,o))
a3.addEventListener(o.a,a0)
B.c.i(a5,new A.ex(a3,o,a0))}return A.E(a3.nextSibling)}},
bR(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b={}
t.c5.a(a0)
t.q.a(a1)
o=A.x(a.data)
n=a0.a
m=A.w(n)
if(o!=="fw:children:"+m)throw A.f(A.z("Keyed children marker mismatch at "+a2+"."))
l=A.k(t.N,t.cN)
B.c.i(a1,new A.er(l))
b.a=a0.ga0()
b.b=null
B.c.i(a1,new A.es(b))
s=A.E(a.nextSibling)
for(o=a0.d,m=o.length,k=a2+"/",j=t.u,i=t.m,h=a0.b,g=0;g<m;++g){r=o[g]
if(!i.b(s)||A.x(s.localName)!==h.toLowerCase()||A.bg(s.getAttribute("data-sparrow-key"))!==r.a)throw A.f(A.z('Keyed child "'+r.a+'" mismatch at '+a2+"."))
q=A.c([],j)
p=A.dQ()
try{f=p
e=this.ah(A.E(s.firstChild),r.b,q,k+A.w(n)+"["+r.a+"]")
d=f.b
if(d==null?f!=null:d!==f)A.M(A.lc(""))
f.b=e}catch(c){A.bi(q)
throw c}f=p
e=f.b
if(e==null?f==null:e===f)A.M(A.ld(""))
if(e!=null){A.bi(q)
throw A.f(A.z('Unexpected child node for keyed child "'+r.a+'" at '+a2+"."))}l.k(0,r.a,new A.bD(s,r.b,q))
s=A.E(s.nextSibling)}if(!i.b(s)||A.x(s.data)!=="fw:/children:"+A.w(n))throw A.f(A.z("Keyed children end marker mismatch at "+a2+"."))
o=s
B.c.i(a1,A.bN(new A.et(b,this,a0,l,o,a2)))
return A.E(o.nextSibling)},
bU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
t.eI.a(b)
t.cO.a(c)
s=A.aW(t.N)
for(r=b.length,q=0;q<r;++q)s.i(0,b[q].a)
p=A.E(d.parentNode)
if(p==null)throw A.f(A.z("Keyed children were detached at "+e+"."))
o=A.u(c).h("aH<1>")
o=A.bs(new A.aH(c,o),o.h("o.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.bQ)(o),++q){m=o[q]
if(s.G(0,m))continue
l=c.Z(0,m)
A.bi(l.c)
l.a.remove()}for(q=0;q<r;++q){k=b[q]
s=k.a
j=c.q(0,s)
if(j==null)c.k(0,s,this.aZ(a,k,e))
else{s=k.b
if(!A.iX(j.b,s)){i=this.aZ(a,k,e)
A.bi(j.c)
for(o=j.a;A.E(o.firstChild)!=null;){n=A.E(o.firstChild)
n.toString
A.p(o.removeChild(n))}for(n=i.a;A.E(n.firstChild)!=null;){h=A.E(n.firstChild)
h.toString
A.p(o.appendChild(h))}j.b=s
j.sc9(i.c)}}}for(s=A.I(b).h("G<1>"),r=new A.G(b,s),r=new A.C(r,r.gm(0),s.h("C<y.E>")),s=s.h("y.E"),g=d;r.j();g=f){o=r.d
f=c.q(0,(o==null?s.a(o):o).a).a
if(A.E(f.nextSibling)!==g)A.p(p.insertBefore(f,g))}},
aZ(a,b,c){var s,r,q,p,o=A.p(A.p(v.G.document).createElement(a.b)),n=b.a
o.setAttribute("data-sparrow-key",n)
s=A.c([],t.u)
try{q=b.b
J.e9(s,A.e5(A.cY(q)))
A.kf(q,o)
r=this.ah(A.E(o.firstChild),q,s,c+"/"+A.w(a.a)+"["+n+"]")
if(r!=null){n=A.z('Unexpected child node for keyed child "'+n+'" at '+c+".")
throw A.f(n)}return new A.bD(o,q,s)}catch(p){A.bi(s)
o.remove()
throw p}},
bB(a,b,c,d){B.c.i(t.q.a(d),A.ki(a,b,new A.eq(c)))}}
A.eG.prototype={
$0(){var s,r=this,q=r.a
if(q.a)return
q.a=!0
try{A.bi(r.b)}finally{q=$.ir()
s=r.c
A.j6(s)
if(q.a.get(s)===r.d)q.k(0,s,null)}},
$S:1}
A.eu.prototype={
$0(){return this.a.b.gB()},
$S:4}
A.ev.prototype={
$0(){var s=A.k9(this.a.b.gB())
this.b.data=s},
$S:1}
A.ew.prototype={
$0(){return this.a.b.gB()},
$S:4}
A.ey.prototype={
$0(){this.a.a.b.gB().l(0)
return""},
$S:14}
A.ez.prototype={
$1(a){A.p(a)
if(this.a.b==="form"&&this.b.a==="submit")a.preventDefault()
this.b.b.$1(a)},
$S:2}
A.eA.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eB.prototype={
$1(a){var s
A.p(a)
s=A.x(a.key)==="Enter"||A.x(a.key)===" "
if(s){a.preventDefault()
this.a.b.$1(a)}},
$S:2}
A.eC.prototype={
$0(){return this.a.removeEventListener("keydown",this.b)},
$S:1}
A.eD.prototype={
$1(a){var s,r,q,p
A.p(a)
s=A.x(this.a.value)
r=this.b
q=r.a
if(q==="input"||q==="change")r.b.$1(s)
else{p=!1
if(q==="keydown")q=A.x(a.key)==="Enter"
else q=p
if(q)r.b.$1(s)}},
$S:2}
A.eE.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eF.prototype={
$1(a){A.p(a)
this.b.b.$1(A.au(this.a.checked))},
$S:2}
A.ex.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.er.prototype={
$0(){var s,r,q=this.a,p=A.u(q).h("ae<2>")
p=A.bs(new A.ae(q,p),p.h("o.E"))
s=A.I(p).h("G<1>")
p=new A.G(p,s)
p=new A.C(p,p.gm(0),s.h("C<y.E>"))
s=s.h("y.E")
while(p.j()){r=p.d
A.bi((r==null?s.a(r):r).c)}q.S(0)},
$S:1}
A.es.prototype={
$0(){var s=this.a.b
return s==null?null:s.$0()},
$S:1}
A.et.prototype={
$0(){var s,r=this,q=r.c,p=A.kd(q.f.$0()),o=q.ga0(),n=r.a
if(o!=n.a){s=n.b
if(s!=null)s.$0()
n.b=o==null||o.length===0?null:A.e5(A.cY(A.S("div",B.d,B.i,B.v,B.j,A.c([o],t.s),B.k,null)))
n.a=o}r.b.bU(q,p,r.d,r.e,r.f)},
$S:1}
A.eq.prototype={
$0(){return this.a.gB()},
$S:4}
A.bD.prototype={
sc9(a){this.c=t.q.a(a)}}
A.ar.prototype={}
A.eU.prototype={
cE(a){var s=a.b
return s==null?null:this.e.q(0,s.a)}}
A.eV.prototype={
$1(a){return t.j.a(a).a},
$S:23}
A.aY.prototype={
gaI(){var s=this.b,r=A.I(s)
return new A.ak(s,r.h("aa(1)").a(new A.eX()),r.h("ak<1>")).gm(0)},
cl(a){var s,r,q,p,o,n,m=A.iQ(A.fJ(a)),l=this.b
if(m.length!==l.length)return null
s=t.N
r=A.k(s,s)
for(q=0;q<l.length;++q){p=l[q]
if(!(q<m.length))return A.l(m,q)
o=m[q]
n=A.e2(o,0,o.length,B.o,!1)
if(B.a.u(p,":"))r.k(0,B.a.E(p,1),n)
else if(p!==n)return null}return A.bq(r,s,s)}}
A.eW.prototype={
$1(a){A.x(a)
return B.a.u(a,":")?a:A.e2(a,0,a.length,B.o,!1)},
$S:24}
A.eX.prototype={
$1(a){return!B.a.u(A.x(a),":")},
$S:3}
A.aL.prototype={}
A.eY.prototype={
ac(a){var s,r,q,p,o,n,m,l,k,j,i=A.b1(a),h=A.fJ(i.gL())
for(s=this.a,r=s.length,q=null,p=null,o=-1,n=0;n<r;++n){m=s[n]
l=m.cl(h)
if(l==null)continue
k=m.gaI()
if(k>o){o=k
p=l
q=m}}s=p==null?B.E:p
r=i.gbl()
i.gY()
j=t.N
return new A.aL(q,s,A.bq(r,j,j),q==null)}}
A.ct.prototype={
an(){var s=this.Q.c
s===$&&A.bR()
return A.by(new A.eZ(this,s.gB()),t.m)},
cr(){return},
cp(){var s=this,r=s.cy
if(r!=null)r.$0()
s.cy=null
r=s.cx
if(r!=null)r.J()
s.cx=null}}
A.eZ.prototype={
$0(){var s,r,q,p=this.a,o=p.ax,n=this.b,m=o.cE(n),l=(m==null?o.c.$1(n):m.b.$1(n)).an(),k=p.CW
if(k!=null){s=A.E(k.firstChild)
if(s==null)throw A.f(A.z("Server-rendered route markup was not found."))
r=new A.dc().bf(k,l)
p.CW=null
if($.aJ.length!==0)B.c.i(B.c.gW($.aJ),r)
return s}q=new A.d7(A.c([],t.u))
s=q.cB(l)
if($.aJ.length!==0)B.c.i(B.c.gW($.aJ),q.ga2())
return s},
$S:15}
A.dz.prototype={
bx(a,b){var s,r,q=this,p=q.a.ac(q.gaT()),o=t.B,n=t.cH
n=n.a(new A.aM(p,A.aW(o),n))
q.c!==$&&A.cZ()
q.c=n
n=t.c7
s=n.a(new A.aM(p.c,A.aW(o),n))
q.d!==$&&A.cZ()
q.d=s
n=n.a(new A.aM(p.d,A.aW(o),n))
q.e!==$&&A.cZ()
q.e=n
n=A.av(new A.f_(q))
q.w!==$&&A.cZ()
q.w=n
o=A.av(new A.f0(q))
q.x!==$&&A.cZ()
q.x=o
s=A.av(new A.f1(q))
q.y!==$&&A.cZ()
q.y=s
r=v.G
A.p(r.window).addEventListener("popstate",n)
A.p(r.window).addEventListener("hashchange",o)
A.p(r.document).addEventListener("click",s)},
cv(a){var s,r
if(this.z)throw A.f(A.z("A disposed router cannot navigate."))
s=A.b1(a)
if(s.gbe()||s.gak())throw A.f(A.N(a,"path","Expected a same-origin path."))
r=A.b1(A.x(A.p(A.p(v.G.window).location).href))
this.b3(r.ac(B.a.u(a,"/")||B.a.u(a,"?")||B.a.u(a,"#")?a:"/"+a))},
cu(){if(this.z)throw A.f(A.z("A disposed router cannot navigate."))
A.p(A.p(v.G.window).history).back()},
J(){var s,r,q,p=this
if(p.z)return
p.z=!0
s=v.G
r=A.p(s.window)
q=p.w
q===$&&A.bR()
r.removeEventListener("popstate",q)
q=A.p(s.window)
r=p.x
r===$&&A.bR()
q.removeEventListener("hashchange",r)
s=A.p(s.document)
r=p.y
r===$&&A.bR()
s.removeEventListener("click",r)},
aJ(){var s,r,q,p,o,n=this
if(n.z)return
s=n.a.ac(n.gaT())
for(r=n.f,r=new A.a6(r,A.u(r).h("a6<1,2>")).gt(0),q=s.c;r.j();){p=r.d
p.b.sB(q.q(0,p.a))}for(r=n.r,r=new A.a6(r,A.u(r).h("a6<1,2>")).gt(0),o=s.d;r.j();){p=r.d
p.b.sB(o.q(0,p.a))}r=n.d
r===$&&A.bR()
r.sB(q)
q=n.e
q===$&&A.bR()
q.sB(o)
o=n.c
o===$&&A.bR()
o.sB(s)},
gaT(){var s=A.p(A.p(v.G.window).location)
return A.x(s.pathname)+A.x(s.search)+A.x(s.hash)},
bQ(a){var s,r,q,p,o,n
if(this.z||A.au(a.defaultPrevented)||A.bf(a.button)!==0||A.au(a.metaKey)||A.au(a.ctrlKey)||A.au(a.shiftKey)||A.au(a.altKey))return
s=A.E(a.target)
r=t.m
if(!r.b(s))return
q=A.E(s.closest("a[href]"))
p=!0
if(r.b(q))if(!A.au(q.hasAttribute("download")))if(!B.c.G(B.a.bs(A.x(q.rel).toLowerCase(),A.bz("\\s+",!0)),"external"))r=A.x(q.target).length!==0&&A.x(q.target).toLowerCase()!=="_self"
else r=p
else r=p
else r=p
if(r)return
o=A.b1(A.x(q.href))
n=A.b1(A.x(A.p(A.p(v.G.window).location).href))
if(o.ga8()!==n.ga8())return
if(o.gL()===n.gL()&&o.gX()===n.gX()){if(o.gY()!==n.gY())return
a.preventDefault()
return}if(o.ga6())return
a.preventDefault()
this.b3(o)},
b3(a){var s=v.G,r=A.b1(A.x(A.p(A.p(s.window).location).href))
if(a.ga8()!==r.ga8())throw A.f(A.N(a,"destination","Expected a same-origin URL."))
A.p(A.p(s.window).history).pushState(null,"",a.l(0))
this.aJ()}}
A.f_.prototype={
$1(a){A.p(a)
return this.a.aJ()},
$S:9}
A.f0.prototype={
$1(a){A.p(a)
return this.a.aJ()},
$S:9}
A.f1.prototype={
$1(a){return this.a.bQ(A.p(a))},
$S:9}
A.aq.prototype={}
A.c4.prototype={
gcC(){var s,r,q,p,o,n=this,m=!1
m=n.w==null
if(m)return n.d
m=t.a
s=A.k(t.N,m)
for(r=n.d,q=r.length,p=0;p<q;++p){o=r[p]
s.k(0,o.a+":"+o.b,o)}p=0
for(;p<0;++p){o=B.w[p]
s.k(0,o.a+":"+o.b,o)}p=0
for(;p<0;++p){o=B.w[p]
s.k(0,o.a+":"+o.b,o)}r=n.w
if(r!=null){r=r.a?"index":"noindex"
r=A.c([r,"follow"],t.s)
s.k(0,"name:robots",new A.aq("name","robots",B.c.I(r,", ")))}return A.j(new A.ae(s,s.$ti.h("ae<2>")),m)}}
A.eT.prototype={}
A.X.prototype={}
A.a3.prototype={}
A.b8.prototype={}
A.cw.prototype={}
A.aj.prototype={}
A.aI.prototype={}
A.hW.prototype={
$1(a){var s,r,q,p,o,n,m=this
A:{s=a instanceof A.aj
r=s?a:null
if(s){s=r.w
q=A.I(s)
m.a.R(0,new A.ak(s,q.h("aa(1)").a(new A.hX()),q.h("ak<1>")))
for(s=r.c,q=s.length,p=0;p<q;++p)m.$1(s[p])
break A}s=a instanceof A.aI
o=s?a.d:null
if(s){for(s=o.length,p=0;p<s;++p)m.$1(o[p].b)
n=a.ga0()
if(n!=null&&n.length!==0)m.a.i(0,n)
break A}if(a instanceof A.a3||a instanceof A.b8)return}},
$S:26}
A.hX.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.dF.prototype={
cA(a,b,c){var s,r,q,p,o,n,m,l='"',k="&quot;",j="'",i="&#39;",h=A.k(t.N,t.X),g=new A.a4(""),f=a.a,e=A.c5("SparrowKit Application"),d=A.bh(e.x)
d=A.H(d,l,k)
d='<!doctype html><html lang="'+A.H(d,j,i)+'"><head>'
g.a=d
d+='<meta charset="utf-8">'
g.a=d
g.a=d+("<title>"+A.bh(e.a)+"</title>")
s=e.gcC()
for(d=s.length,r=null,q=0;q<d;++q){p=s[q]
if(p.a.toLowerCase()==="name"&&p.b.toLowerCase()==="viewport")r=p}if(r==null)g.a+='<meta name="viewport" content="width=device-width, initial-scale=1">'
else{o=r.a
n=A.bh(r.b)
n=A.H(n,l,k)
n=A.H(n,j,i)
m=A.bh(r.c)
m=A.H(m,l,k)
o="<meta "+o+'="'+n+'" content="'+A.H(m,j,i)+'">'
g.a+=o}o=A.bh(e.b)
o=A.H(o,l,k)
o='<meta name="description" content="'+A.H(o,j,i)+'">'
g.a+=o
for(q=0;q<d;++q){p=s[q]
o=p.a
if(o.toLowerCase()==="name"&&p.b.toLowerCase()==="viewport")continue
n=A.H(p.b,"&","&amp;")
n=A.H(n,"<","&lt;")
n=A.H(n,">","&gt;")
n=A.H(n,l,k)
n=A.H(n,j,i)
m=A.H(p.c,"&","&amp;")
m=A.H(m,"<","&lt;")
m=A.H(m,">","&gt;")
m=A.H(m,l,k)
o="<meta "+o+'="'+n+'" content="'+A.H(m,j,i)+'">'
g.a+=o}for(d=e.e,o=d.length,q=0;q<o;++q){n=B.B.bc(d[q].cO(),null)
n='<script type="application/ld+json">'+A.H(n,"<","\\u003C")+"</script>"
g.a+=n}this.c7(g,f,B.h)
d=A.bh(c)
d=A.H(d,l,k)
d='</head><body><div id="'+A.H(d,j,i)+'">'
g.a+=d
this.aK(g,f,h)
g.a+="</div>"
d=B.B.bc(h,null)
d='<script id="__FRAMEWORK_STATE__" type="application/json">'+A.H(d,"<","\\u003C")+"</script>"
d=g.a+=d
d=g.a=d+"</body></html>"
return d.charCodeAt(0)==0?d:d},
aK(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="attribute"
t.f.a(a6)
A:{s=a5 instanceof A.a3
r=s?a5.a:a2
if(s){s=A.bh(r)
a4.a+=s
break A}q=a5 instanceof A.b8
p=a2
if(q){o=a5.a
p=a5.b
n=o}else n=a2
if(q){A.iM(a6,n,p.gB())
s="<!--fw:text:"+A.w(n)+"-->"
a4.a+=s
s=p.gB()
s.l(0)
s=A.bh("")
a4.a+=s
s="<!--fw:/text:"+A.w(n)+"-->"
a4.a+=s
break A}q=a5 instanceof A.aI
m=a2
l=a2
k=a2
if(q){o=a5.a
m=a5.b
l=a5.d
k=a5.c
n=o}else n=a2
if(q){A.iM(a6,n,k.gB())
s="<!--fw:children:"+A.w(n)+"-->"
a4.a+=s
for(s=l.length,j=A.w(m),i="</"+j+">",j="<"+j+' data-sparrow-key="',h=0;h<s;++h){g=l[h]
f=A.H(g.a,"&","&amp;")
f=A.H(f,"<","&lt;")
f=A.H(f,">","&gt;")
f=A.H(f,'"',"&quot;")
f=j+A.H(f,"'","&#39;")+'">'
a4.a+=f
this.aK(a4,g.b,a6)
a4.a+=i}s="<!--fw:/children:"+A.w(n)+"-->"
a4.a+=s
break A}s=a5 instanceof A.aj
e=a2
d=a2
c=a2
if(s){b=a5.a
e=a5.b
d=a5.c
c=a5.r}else b=a2
if(s){a=B.I.G(0,b.toLowerCase())
if(a&&d.length!==0)throw A.f(A.a8("Void element <"+A.w(b)+"> cannot have children."))
if(c!=null)A.iM(a6,c.a,c.b.gB())
s=A.w(b)
a4.a+="<"+s
for(j=e.gC(),j=j.gt(j);j.j();){i=j.gp()
f=$.kN()
a0=i.a
if(!f.b.test(a0))throw A.f(A.N(a0,a3,"Invalid HTML attribute name."))
if(B.a.u(a0.toLowerCase(),"on"))throw A.f(A.N(a0,a3,u.i))
a1=i.b
i=a1 instanceof A.cw
r=i?a1.b.gB():a1
if(i){i=a1.a
if(a6.N(i)&&!J.aD(a6.q(0,i),r))A.M(A.z('Conflicting initial values for signal "'+A.w(i)+'".'))
a6.k(0,i,r)}if(r==null||J.aD(r,!1))continue
a4.a+=" "+a0+'="'
i=J.aB(r)
if(i.P(r,!0))i=""
else{i=i.l(r)
i=A.H(i,"&","&amp;")
i=A.H(i,"<","&lt;")
i=A.H(i,">","&gt;")
i=A.H(i,'"',"&quot;")
i=A.H(i,"'","&#39;")}a4.a=(a4.a+=i)+'"'}if(a){a4.a+=">"
return}a4.a+=">"
for(j=d.length,h=0;h<j;++h)this.aK(a4,d[h],a6)
a4.a+="</"+s+">"}}},
c7(a,b,c){var s,r,q,p
t.v.a(c)
s=A.cY(b)
r=A.lf(t.N)
r.R(0,s)
s=A.I(c)
r.R(0,new A.ak(c,s.h("aa(1)").a(new A.f2()),s.h("ak<1>")))
for(s=A.fl(r,r.r,A.u(r).c),r=s.$ti.c;s.j();){q=s.d
if(q==null)q=r.a(q)
p='<style id="'+A.ko(q)+'" data-sparrow-stylesheet>'
a.a+=p
p=A.bz("</style",!1)
q=A.H(q,p,"<\\/style")
a.a=(a.a+=q)+"</style>"}}}
A.f2.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.aM.prototype={
gB(){var s=$.aK.length===0?null:B.c.gW($.aK)
if(s!=null)s.bL(this)
return this.a},
sB(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.a
if(s==null?a==null:s===a)return
p.a=a
for(s=p.b,s=A.fl(s,s.r,A.u(s).c),r=s.$ti.c;s.j();){q=s.d;(q==null?r.a(q):q).bT()}},
$ijx:1}
A.bE.prototype={
bL(a){if(this.d)return
if(this.b.i(0,a))a.b.i(0,this)},
bT(){var s=this
if(s.d)return
if(s.c)s.e=!0
else A.jm(s)},
b6(){var s,r,q,p,o=this
if(o.d||o.c)return
o.c=!0
o.e=!1
for(s=o.b,r=A.fl(s,s.r,A.u(s).c),q=r.$ti.c;r.j();){p=r.d;(p==null?q.a(p):p).b.Z(0,o)}s.S(0)
B.c.i($.aK,o)
try{o.a.$0()}finally{if(0>=$.aK.length)return A.l($.aK,-1)
$.aK.pop()
o.c=!1
if(o.e){o.e=!1
A.jm(o)}}},
J(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
$.bx.Z(0,o)
for(s=o.b,r=A.fl(s,s.r,A.u(s).c),q=r.$ti.c;r.j();){p=r.d;(p==null?q.a(p):p).b.Z(0,o)}s.S(0)}}
A.aT.prototype={
ct(){},
cm(a){var s,r=this
if(r.x)throw A.f(A.z("A disposed component cannot be mounted."))
if(r.w!=null)throw A.f(A.z("A component can only be mounted once."))
r.d=a
s=$.bU.length===0
if(!s)B.c.i(B.c.gW($.bU).f,r)
r.w=A.bN(r.gbX())
if(s)r.aq()},
J(){var s,r,q=this
if(q.x)return
q.x=!0
s=q.w
if(s!=null)s.$0()
q.w=null
q.bM()
r=q.c
if(r!=null){s=A.E(r.parentNode)
if(s!=null)A.p(s.removeChild(r))}q.c=null
if(q.y){q.y=!1
A.by(q.gco(),t.H)}},
bY(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e,f=h.r,e=h.f,d=A.c([],t.u),c=A.c([],t.z)
h.f=c
s=A.dQ()
try{s.saj(A.lm(d,new A.ec(h),t.m))}catch(l){h.f=e
for(k=c,j=A.I(k).h("G<1>"),k=new A.G(k,j),k=new A.C(k,k.gm(0),j.h("C<y.E>")),j=j.h("y.E");k.j();){i=k.d
r=i==null?j.a(i):i
r.J()}for(k=d,j=A.I(k).h("G<1>"),k=new A.G(k,j),k=new A.C(k,k.gm(0),j.h("C<y.E>")),j=j.h("y.E");k.j();){m=k.d
q=m==null?j.a(m):m
q.$0()}throw l}p=h.c
try{if(p==null){k=h.d
k.toString
A.p(k.appendChild(s.A()))}else{o=A.E(p.parentNode)
if(s.A()!==p)if(o==null){k=h.d
k.toString
A.p(k.appendChild(s.A()))}else A.p(o.replaceChild(s.A(),p))}}catch(l){h.f=e
for(k=c,j=A.I(k).h("G<1>"),k=new A.G(k,j),k=new A.C(k,k.gm(0),j.h("C<y.E>")),j=j.h("y.E");k.j();){i=k.d
n=i==null?j.a(i):i
n.J()}for(k=d,j=A.I(k).h("G<1>"),k=new A.G(k,j),k=new A.C(k,k.gm(0),j.h("C<y.E>")),j=j.h("y.E");k.j();){q=k.d
m=q==null?j.a(q):q
m.$0()}throw l}for(k=A.I(f).h("G<1>"),j=new A.G(f,k),j=new A.C(j,j.gm(0),k.h("C<y.E>")),k=k.h("y.E");j.j();){i=j.d;(i==null?k.a(i):i).J()}for(k=A.I(g).h("G<1>"),j=new A.G(g,k),j=new A.C(j,j.gm(0),k.h("C<y.E>")),k=k.h("y.E");j.j();){q=j.d;(q==null?k.a(q):q).$0()}h.c=s.A()
h.e=d
h.r=c
if(h.y)A.by(h.gcs(),t.H)
k=h.z=!0
if(!A.au(h.d.isConnected)?h.y:k)h.aq()},
aq(){var s,r,q,p=this
if(!p.z||p.x)return
if(!p.y){p.y=!0
A.by(p.gcq(),t.H)}for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.bQ)(s),++q)s[q].aq()},
bM(){var s,r,q,p,o=this
for(s=o.r,r=A.I(s).h("G<1>"),s=new A.G(s,r),s=new A.C(s,s.gm(0),r.h("C<y.E>")),r=r.h("y.E");s.j();){q=s.d;(q==null?r.a(q):q).J()}o.r=A.c([],t.z)
for(s=o.e,r=A.I(s).h("G<1>"),s=new A.G(s,r),s=new A.C(s,s.gm(0),r.h("C<y.E>")),r=r.h("y.E");s.j();){p=s.d;(p==null?r.a(p):p).$0()}o.e=A.c([],t.u)}}
A.ec.prototype={
$0(){var s=this.a
B.c.i($.bU,s)
try{s=s.an()
return s}finally{if(0>=$.bU.length)return A.l($.bU,-1)
$.bU.pop()}},
$S:15}
A.fS.prototype={
$0(){var s=this.a,r=this.b.$0(),q=r==null?null:J.aw(r)
if(q==null)q=""
if(A.x(s.data)!==q)s.data=q
return null},
$S:1}
A.fQ.prototype={
$0(){return A.kp(this.a,this.b,this.c.$0())},
$S:1}
A.fR.prototype={
$0(){this.a.gB().l(0)
var s=this.b
if(A.x(s.value)!=="")s.value=""},
$S:1}
A.fH.prototype={
$0(){var s=this.a
if(s.a)return
s.a=!0
A.k2(this.b)},
$S:1}
A.e0.prototype={}
A.dV.prototype={
an(){return this.a},
$iiC:1}
A.d7.prototype={
cB(a){var s,r,q=this
if(q.b!=null)throw A.f(A.z("A UI renderer can only render once."))
try{B.c.i(q.a,A.e5(A.cY(a)))
s=q.b5(a)
q.b=s
return s}catch(r){q.J()
throw r}},
J(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.a,r=A.I(s).h("G<1>"),q=new A.G(s,r),q=new A.C(q,q.gm(0),r.h("C<y.E>")),r=r.h("y.E");q.j();){p=q.d;(p==null?r.a(p):p).$0()}B.c.S(s)
s=o.b
if(s!=null){r=A.E(s.parentNode)
if(r!=null)A.p(r.removeChild(s))}o.b=null},
b5(a){var s
A:{if(a instanceof A.a3){s=A.p(A.p(v.G.document).createTextNode(a.a))
break A}if(a instanceof A.b8){s=this.c0(a.b,a.c)
break A}if(a instanceof A.aI){s=this.c_(a)
break A}if(a instanceof A.aj){s=this.bZ(a.a,a.b,a.c,a.d,a.e,a.f,a.r)
break A}s=null}return s},
c_(a){var s,r,q,p,o,n={},m=v.G,l=A.p(A.p(m.document).createDocumentFragment()),k=a.a,j=A.p(A.p(m.document).createComment("fw:children:"+A.w(k))),i=A.p(A.p(m.document).createComment("fw:/children:"+A.w(k)))
A.p(l.appendChild(j))
A.p(l.appendChild(i))
p=A.k(t.N,t.cV)
n.a=a.ga0()
n.b=null
s=new A.eo(n,this,a,i,p)
r=new A.en(p)
q=A.dQ()
try{q.saj(A.bN(s))}catch(o){r.$0()
throw o}B.c.i(this.a,new A.em(n,q,r))
return l},
aY(a,b){var s,r=A.p(A.p(v.G.document).createElement(a.b))
r.setAttribute("data-sparrow-key",b.a)
s=b.b
A.kf(s,r)
return new A.dX(r,s,new A.dc().bf(r,s))},
c0(a,b){var s=A.p(A.p(v.G.document).createTextNode(""))
B.c.i(this.a,A.nc(s,new A.ep(b,a)))
return s},
bZ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j,i="attribute"
t.f.a(b)
t.fW.a(c)
t.cT.a(d)
t.ee.a(e)
t.d2.a(f)
s=A.p(A.p(v.G.document).createElement(a))
if(B.I.G(0,a.toLowerCase())&&c.length!==0)throw A.f(A.a8("Void element <"+a+"> cannot have children."))
for(r=b.gC(),r=r.gt(r),q=this.a;r.j();){p=r.gp()
o=p.a
n=A.bz("^[A-Za-z_:][A-Za-z0-9:._-]*$",!0)
if(!n.b.test(o))A.M(A.N(o,i,"Invalid HTML attribute name."))
if(B.a.u(o.toLowerCase(),"on"))throw A.f(A.N(o,i,u.i))
m=p.b
if(m instanceof A.cw)B.c.i(q,A.ki(s,o,new A.ed(m)))
else A.kp(s,o,m)}for(r=c.length,l=0;l<r;++l)A.p(s.appendChild(this.b5(c[l])))
if(g!=null)B.c.i(q,A.kj(s,g.b))
for(r=d.gC(),r=r.gt(r);r.j();){p=r.gp()
k=A.av(new A.ee(a,p))
o=p.a
s.addEventListener(o,k)
B.c.i(q,new A.ef(s,p,k))
if(o==="click"&&J.aD(b.q(0,"role"),"button")){j=A.av(new A.eg(p))
s.addEventListener("keydown",j)
B.c.i(q,new A.eh(s,j))}}for(r=e.gC(),r=r.gt(r);r.j();){p=r.gp()
k=A.av(new A.ei(s,p))
s.addEventListener(p.a,k)
B.c.i(q,new A.ej(s,p,k))}for(r=f.gC(),r=r.gt(r);r.j();){p=r.gp()
k=A.av(new A.ek(s,p))
s.addEventListener(p.a,k)
B.c.i(q,new A.el(s,p,k))}return s}}
A.eo.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.c,b=A.kd(c.f.$0()),a=c.ga0(),a0=d.a
if(a!=a0.a){s=a0.b
if(s!=null)s.$0()
a0.b=a==null||a.length===0?null:A.e5(A.cY(A.S("div",B.d,B.i,B.v,B.j,A.c([a],t.s),B.k,null)))
a0.a=a}a0=A.aW(t.N)
for(s=b.length,r=0;r<s;++r)a0.i(0,b[r].a)
q=d.d
p=A.E(q.parentNode)
if(p==null)throw A.f(A.z("Keyed children were detached before rendering."))
o=d.e
n=A.u(o).h("aH<1>")
n=A.bs(new A.aH(o,n),n.h("o.E"))
m=n.length
r=0
for(;r<n.length;n.length===m||(0,A.bQ)(n),++r){l=n[r]
if(a0.G(0,l))continue
k=o.Z(0,l)
k.c.$0()
k.a.remove()}for(a0=d.b,r=0;r<s;++r){j=b[r]
n=j.a
i=o.q(0,n)
if(i==null)o.k(0,n,a0.aY(c,j))
else{n=j.b
if(!A.iX(i.b,n)){h=a0.aY(c,j)
i.c.$0()
for(m=i.a;A.E(m.firstChild)!=null;){g=A.E(m.firstChild)
g.toString
A.p(m.removeChild(g))}for(g=h.a;A.E(g.firstChild)!=null;){f=A.E(g.firstChild)
f.toString
A.p(m.appendChild(f))}i.b=n
i.sa2(h.c)}}}for(c=A.I(b).h("G<1>"),a0=new A.G(b,c),a0=new A.C(a0,a0.gm(0),c.h("C<y.E>")),c=c.h("y.E");a0.j();q=e){s=a0.d
e=o.q(0,(s==null?c.a(s):s).a).a
if(A.E(e.nextSibling)!==q)A.p(p.insertBefore(e,q))}},
$S:1}
A.en.prototype={
$0(){var s,r,q=this.a,p=A.u(q).h("ae<2>")
p=A.bs(new A.ae(q,p),p.h("o.E"))
s=A.I(p).h("G<1>")
p=new A.G(p,s)
p=new A.C(p,p.gm(0),s.h("C<y.E>"))
s=s.h("y.E")
while(p.j()){r=p.d;(r==null?s.a(r):r).c.$0()}q.S(0)},
$S:1}
A.em.prototype={
$0(){this.b.A().$0()
var s=this.a.b
if(s!=null)s.$0()
this.c.$0()},
$S:1}
A.ep.prototype={
$0(){var s=this.b.gB()
return s},
$S:4}
A.ed.prototype={
$0(){return this.a.b.gB()},
$S:4}
A.ee.prototype={
$1(a){A.p(a)
if(this.a==="form"&&this.b.a==="submit")a.preventDefault()
this.b.b.$1(a)},
$S:2}
A.ef.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eg.prototype={
$1(a){var s
A.p(a)
s=A.x(a.key)==="Enter"||A.x(a.key)===" "
if(s){a.preventDefault()
this.a.b.$1(a)}},
$S:2}
A.eh.prototype={
$0(){return this.a.removeEventListener("keydown",this.b)},
$S:1}
A.ei.prototype={
$1(a){var s,r,q,p
A.p(a)
s=A.x(this.a.value)
r=this.b
q=r.a
if(q==="input"||q==="change")r.b.$1(s)
else{p=!1
if(q==="keydown")q=A.x(a.key)==="Enter"
else q=p
if(q)r.b.$1(s)}},
$S:2}
A.ej.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.ek.prototype={
$1(a){A.p(a)
this.b.b.$1(A.au(this.a.checked))},
$S:2}
A.el.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.dX.prototype={
sa2(a){this.c=t.M.a(a)}}
A.eM.prototype={
ag(){return"MainAxisAlignment."+this.b}}
A.c_.prototype={
ag(){return"CrossAxisAlignment."+this.b}}
A.R.prototype={}
A.b_.prototype={}
A.q.prototype={}
A.cA.prototype={}
A.V.prototype={}
A.n.prototype={}
A.A.prototype={}
A.bZ.prototype={}
A.cs.prototype={
bw(a,b,c,d){if(B.d.gK().a1(0,new A.eS()))throw A.f(A.a8("ResponsiveVisibility manages its visibility styles and marker."))}}
A.eS.prototype={
$1(a){A.x(a)
return a.toLowerCase()==="style"||a.toLowerCase()==="data-sparrow-layout"},
$S:3}
A.e.prototype={}
A.L.prototype={}
A.co.prototype={}
A.c2.prototype={}
A.cx.prototype={}
A.cE.prototype={}
A.cv.prototype={}
A.c0.prototype={}
A.cy.prototype={}
A.bw.prototype={
bv(a,b,c,d,e,f,g,h,i){var s,r,q,p,o=this
for(s=A.a(["top",o.b,"right",o.c,"bottom",o.d,"left",o.e],t.N,t.I),s=new A.a6(s,A.u(s).h("a6<1,2>")).gt(0);s.j();){r=s.d
q=r.b
p=r.a
if(q!=null&&!isFinite(q))A.M(A.N(q,p,"Must be a finite CSS length."))}A.B(o.f,"width")
A.B(o.r,"height")}}
A.c3.prototype={}
A.aX.prototype={
ag(){return"ResponsiveBreakpoint."+this.b}}
A.c6.prototype={}
A.at.prototype={
an(){return A.nJ(this.a.$0())},
$iiC:1}
A.bG.prototype={
ag(){return"_UiChildContext."+this.b}}
A.fq.prototype={
ga0(){var s=this.a
return s.a===0?null:new A.ae(s,A.u(s).h("ae<2>")).I(0,"\n")},
H(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4="ResponsiveText",b5="value",b6="data-sparrow-layout",b7="ResponsiveVisibility",b8="visible",b9="hidden",c0="div",c1="style",c2="box-sizing:border-box"
A:{s=c3 instanceof A.b_
r=b3
q=b3
p=b3
o=b3
n=b3
m=!1
if(s){l=c3.a
p=c3.r
q=c3.f
m=p!=null
n=q
r="span"
o="span"
k=l}else{k=b3
l=k}if(m){t.f.a(n)
t.x.a(p)
A.x(o)
A.fL(n,b4)
A.mQ(n,"font-size",b4)
A.kc(p,"fontSize",!1)
m=t.N
j=A.k(t.b,m)
i=p.a
A.B(i,b5)
j.k(0,B.r,"font-size:"+(A.a0(i)+"px"))
h=p.b
if(h!=null){A.B(h,b5)
j.k(0,B.q,"font-size:"+(A.a0(h)+"px"))}g=p.c
if(g!=null){A.B(g,b5)
j.k(0,B.p,"font-size:"+(A.a0(g)+"px"))}f=b2.aG("text:font-size",j)
m=A.b6(n,m,t.X)
m.k(0,b6,f)
j=A.c([],t.E)
j.push(new A.a3(A.ka(k)))
m=A.S(o,m,B.i,j,B.j,B.h,B.k,b3)
break A}if(s){m=A.c([],t.E)
m.push(new A.a3(A.ka(l)))
m=A.S(r,q,B.i,m,B.j,B.h,B.k,b3)
break A}if(c3 instanceof A.cs){t.f.a(B.d)
m=t.c.a(c3.b)
A.fL(B.d,b7)
A.k1(B.d,b7)
j=t.N
i=A.k(t.b,j)
i.k(0,B.r,"visibility:"+(m.a?b8:b9))
h=m.b
if(h!=null)i.k(0,B.q,"visibility:"+(h?b8:b9))
g=m.c
if(g!=null)i.k(0,B.p,"visibility:"+(g?b8:b9))
f=b2.aG("visibility",i)
m=A.b6(B.d,j,t.X)
m.k(0,b6,f)
m=A.S(c0,m,B.i,A.c([b2.H(c3.a,B.m)],t.E),B.j,B.h,B.k,b3)
break A}if(c3 instanceof A.q){e=c3.b
d=c3.c
r=c3.d
c=c3.e
m=t.N
j=t.X
i=A.k(m,j)
b=r==="button"
if(b)i.k(0,"type","button")
if(r==="div"&&e==="click"&&d!=null&&!c)i.R(0,A.a(["role","button","tabindex","0"],m,j))
i.R(0,c3.f)
if(c&&b)i.k(0,"disabled","")
j=A.c([b2.H(c3.a,B.m)],t.E)
m=A.k(m,t.o)
if(d!=null)m.k(0,e,d)
m=A.S(r,i,B.i,j,m,B.h,B.k,b3)
break A}if(c3 instanceof A.cA){m=b2.bJ(c3.CW,c3.Q,c3.at,!0,c3.e,c3.z,!0,c3.as,c3.ax,c3.d,c3.a,c3.f,c3.b,c3.ay,c3.ch,c3.c,c3.r,c3.w)
break A}if(c3 instanceof A.V){a=c3.a
q=c3.e
m=A.b6(q,t.N,t.X)
m.k(0,c1,A.fI(q.q(0,c1),A.jW(c3.d,"row",0,c3.c)))
j=A.I(a)
j=A.S(c0,m,B.i,new A.a_(a,j.h("X(1)").a(new A.fv(b2)),j.h("a_<1,X>")),B.j,B.h,B.k,b3)
m=j
break A}if(c3 instanceof A.n){a=c3.a
q=c3.e
m=A.b6(q,t.N,t.X)
m.k(0,c1,A.fI(q.q(0,c1),A.jW(c3.d,"column",0,c3.c)))
j=A.I(a)
j=A.S(c0,m,B.i,new A.a_(a,j.h("X(1)").a(new A.fw(b2)),j.h("a_<1,X>")),B.j,B.h,B.k,b3)
m=j
break A}if(c3 instanceof A.A){m=A.S(c0,A.aQ(B.d,c4===B.J?"display:grid;place-items:center;min-height:100vh;box-sizing:border-box":"display:grid;place-items:center;box-sizing:border-box"),B.i,A.c([b2.H(c3.a,B.m)],t.E),B.j,B.h,B.k,b3)
break A}if(c3 instanceof A.cE){a=c3.a
a0=c3.b
a1=c3.c
A.B(a0,b5)
m=A.a0(a0)
A.B(a1,b5)
j=A.I(a)
j=A.S(c0,A.aQ(B.d,"display:flex;flex-wrap:wrap;column-gap:"+(m+"px")+";row-gap:"+(A.a0(a1)+"px")+";justify-content:flex-start;align-content:flex-start;align-items:"+c3.f.c+";min-width:0;min-height:0"),B.i,new A.a_(a,j.h("X(1)").a(new A.fx(b2)),j.h("a_<1,X>")),B.j,B.h,B.k,b3)
m=j
break A}if(c3 instanceof A.cv){a=c3.a
m=A.c(["width:100%",c2,"max-width:100%","min-width:0","overscroll-behavior-x:contain","overscroll-behavior-y:auto"],t.s)
m.push("overflow-y:auto")
j=A.I(a)
j=A.S(c0,A.aQ(B.d,B.c.I(m,";")),B.i,new A.a_(a,j.h("X(1)").a(new A.fy(b2)),j.h("a_<1,X>")),B.j,B.h,B.k,b3)
m=j
break A}if(c3 instanceof A.c0){a2=c3.b
a3=c3.c
a4=c3.d
a5=c3.e
A.B(a2,b5)
m=A.a0(a2)
A.B(a3,b5)
j=A.a0(a3)
A.B(a5,b5)
i=A.a0(a5)
A.B(a4,b5)
i=A.S("hr",A.aQ(B.d,"box-sizing:border-box;border:0;border-top:"+(m+"px")+" solid "+c3.a+";height:"+(j+"px")+";margin:0 "+(i+"px")+" 0 "+(A.a0(a4)+"px")),B.i,B.v,B.j,B.h,B.k,b3)
m=i
break A}if(c3 instanceof A.bZ){a6=c3.c
a3=c3.d
a7=c3.e
a8=c3.r
a9=c3.w
b0=c3.y
q=c3.z
m=A.b6(q,t.N,t.X)
j=q.q(0,c1)
b1=A.c([c2],t.s)
if(a6!=null){A.B(a6,b5)
B.c.i(b1,"width:"+(A.a0(a6)+"px"))}else if(b0!=null)B.c.i(b1,"width:100%")
if(a3!=null){A.B(a3,b5)
B.c.i(b1,"height:"+(A.a0(a3)+"px"))}if(a7!=null){A.B(a7,b5)
B.c.i(b1,"padding:"+(A.a0(a7)+"px"))}if(a8!=null)B.c.i(b1,"background-color:"+a8)
if(a9!=null){A.B(a9,b5)
B.c.i(b1,"border-radius:"+(A.a0(a9)+"px"))}if(b0!=null){A.B(b0,b5)
B.c.i(b1,"max-width:"+(A.a0(b0)+"px"))}m.k(0,c1,A.fI(j,B.c.I(b1,";")))
m=A.S(c3.b,m,B.i,A.c([b2.H(c3.a,B.m)],t.E),B.j,B.h,B.k,b3)
break A}if(c3 instanceof A.co){m=b2.bI(!1,B.d,c3.a,c3.b,"padding",b3,c0)
break A}if(c3 instanceof A.c2){m=b2.bF(B.d,c3.a,"Expanded",c4,"flex-grow:"+c3.b+";flex-shrink:1;flex-basis:0%;min-width:0;min-height:0",c0)
break A}if(c3 instanceof A.cx){a6=c3.a
a3=c3.b
b1=A.c([c2],t.s)
if(a6!=null){A.B(a6,b5)
B.c.i(b1,"width:"+(A.a0(a6)+"px"))}if(a3!=null){A.B(a3,b5)
B.c.i(b1,"height:"+(A.a0(a3)+"px"))}m=A.aQ(B.d,B.c.I(b1,";"))
j=A.c([],t.E)
m=A.S(c0,m,B.i,j,B.j,B.h,B.k,b3)
break A}if(c3 instanceof A.cy){a=c3.a
b1=A.c([c2,"display:grid","position:relative","justify-items:"+c3.d,"align-items:"+c3.e],t.s)
m=A.I(a)
m=A.S(c0,A.aQ(B.d,B.c.I(b1,";")),B.i,new A.a_(a,m.h("X(1)").a(new A.fz(b2)),m.h("a_<1,X>")),B.j,B.h,B.k,b3)
break A}if(c3 instanceof A.bw){t.f.a(B.d)
if(c4!==B.K)A.M(A.z("Positioned must be a direct child of Stack."))
b1=A.c([c2,"position:absolute"],t.s)
B.c.i(b1,"top:"+A.cV(c3.b,!0))
B.c.i(b1,"right:"+A.cV(c3.c,!0))
m=A.S(c0,A.aQ(B.d,B.c.I(b1,";")),B.i,A.c([b2.H(c3.a,B.m)],t.E),B.j,B.h,B.k,b3)
break A}if(c3 instanceof A.c3){m=b2.bH(B.d,c3.a,b3,c3.b,c3.c,c3.f,c3.r,b3,c0)
break A}if(c3 instanceof A.c6){m=A.S("h"+c3.a,c3.c,B.i,A.c([new A.a3(c3.b)],t.E),B.j,B.h,B.k,b3)
break A}m=b3}return m},
a5(a){return this.H(a,B.J)},
bI(a,b,c,d,e,f,g){var s
t.f.a(b)
A.fL(b,e)
s=A.S(g,A.aQ(b,e+":"+A.mx(d,a)),B.i,A.c([this.H(c,B.m)],t.E),B.j,B.h,B.k,null)
return s},
bJ(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="aria-describedby",a4="class",a5="Invalid CSS border."
t.f.a(a6)
if(b6==null){s=a6.q(0,"id")
r=s==null?a2:J.aw(s)}else r=b6
s=r==null
q=s?a2:r+"-helper"
p=t.s
o=A.c([],p)
n=a6.q(0,a3)
if(typeof n=="string")o.push(B.a.ae(n))
m=q!=null
if(m)o.push(q)
l=t.bB
k=t.cc
j=new A.ak(o,l.a(new A.fs()),k).I(0," ")
o=t.N
i=t.X
h=A.b6(a6,o,i)
g=!s
if(g)h.k(0,"id",r)
f=a6.q(0,"type")
h.k(0,"type",f==null?"text":f)
h.k(0,"placeholder",c1)
if(j.length!==0)h.k(0,a3,j)
f=A.c([],p)
e=a6.q(0,a4)
if(typeof e=="string")f.push(B.a.ae(e))
f.push("sparrow-field__input")
h.k(0,a4,new A.ak(f,l.a(new A.ft()),k).I(0," "))
d=A.S("input",h,B.i,B.v,B.j,B.h,A.k(o,t.d),a2)
c=A.c([],p)
if(B.a.G(b1,";"))A.M(A.N(b1,"fillColor","Invalid CSS color."))
B.c.i(c,"--sparrow-field-fill:"+b1)
if(B.a.G(a7,";"))A.M(A.N(a7,"border",a5))
B.c.i(c,"--sparrow-field-border:"+a7)
if(B.a.G(b3,";"))A.M(A.N(b3,"focusedBorder",a5))
B.c.i(c,"--sparrow-field-focused-border:"+b3)
if(a8!=null){A.B(a8,"value")
B.c.i(c,"--sparrow-field-radius:"+(A.a0(a8)+"px"))}A.B(b4,"value")
B.c.i(c,"--sparrow-field-focused-radius:"+(A.a0(b4)+"px"))
b=B.c.I(c,";")
p=A.k(o,i)
p.k(0,a4,"sparrow-field__control")
if(b.length!==0)p.k(0,"style",b)
l=t.E
k=A.c([],l)
k.push(d)
a=A.S("span",p,B.i,k,B.j,B.h,B.k,a2)
if(b8==null)a0=a2
else{p=A.k(o,i)
p.k(0,a4,"sparrow-field__label")
if(g)p.k(0,"for",r)
a0=A.S("label",p,B.i,A.c([new A.a3(b8)],l),B.j,B.h,B.k,a2)}p=a0!=null
if(p&&s){b8.toString
a1=A.S("label",B.a0,B.i,A.c([new A.a3(b8),a],l),B.j,B.h,B.k,a2)}else a1=a2
s=A.c([],l)
if(p&&a1==null)s.push(a0)
if(a1!=null)s.push(a1)
else s.push(a)
p=A.k(o,i)
p.k(0,a4,"sparrow-field__helper")
if(m)p.k(0,"id",q)
s.push(A.S("div",p,B.i,A.c([new A.a3(b5)],l),B.j,B.h,B.k,a2))
return A.S("div",B.a1,B.i,s,B.j,B.h,B.k,a2)},
bF(a,b,c,d,e,f){t.f.a(a)
if(d!==B.y)throw A.f(A.z(c+" must be a direct child of Row, Column, or Responsive."))
return A.S(f,A.aQ(a,e),B.i,A.c([this.H(b,B.m)],t.E),B.j,B.h,B.k,null)},
bH(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
t.gS.a(a0)
t.b9.a(a4)
t.cd.a(a5)
t.f.a(a)
A.fL(a,"Grid")
A.k1(a,"Grid")
s=a4.a
r=a5.a
q=t.N
p=A.a([B.r,A.mw(b,s,r,b)],t.b,q)
for(o=[B.q,B.p],n=t.s,m=a4.c,l=a4.b,k=a5.c,j=a5.b,i=0;i<2;++i){h=o[i]
g=h.a
f=b
switch(g){case 1:f=l
break
case 2:f=m
break
case 0:break}e=b
switch(g){case 1:g=j
break
case 2:g=k
break
case 0:g=e
break
default:g=e}e=f==null
if(e&&g==null)continue
d=A.c([],n)
if(!e)d.push("grid-template-columns:"+("repeat("+A.w(f)+",minmax(0,1fr))"))
if(g!=null){if(!isFinite(g))A.M(A.N(g,"value","Must be a finite CSS length."))
d.push("gap:"+(A.a0(g)+"px"))}p.k(0,h,B.c.I(d,";"))}c=this.aG("grid",p)
q=A.b6(a,q,t.X)
q.k(0,"data-sparrow-layout",c)
o=A.I(a0)
return A.S(a7,q,B.i,new A.a_(a0,o.h("X(1)").a(new A.fr(this)),o.h("a_<1,X>")),B.j,B.h,B.k,b)},
aG(a,b){var s,r,q,p,o
t.bH.a(b)
s=A.c([a],t.s)
for(r=0;r<3;++r){q=B.C[r]
p=b.q(0,q)
if(p!=null)s.push(q.b+":"+p)}o=A.ma(2,B.c.I(s,"|"),B.o,!1)
this.a.cw(a+":"+o,new A.fu('[data-sparrow-layout="'+o+'"]',b))
return o}}
A.fv.prototype={
$1(a){return this.a.H(t.g.a(a),B.y)},
$S:5}
A.fw.prototype={
$1(a){return this.a.H(t.g.a(a),B.y)},
$S:5}
A.fx.prototype={
$1(a){return this.a.H(t.g.a(a),B.m)},
$S:5}
A.fy.prototype={
$1(a){return this.a.H(t.g.a(a),B.m)},
$S:5}
A.fz.prototype={
$1(a){var s
t.g.a(a)
if(a instanceof A.bw)return this.a.H(a,B.K)
s=this.a.H(a,B.m)
if(!(s instanceof A.aj))A.M(A.z("A layout child must lower to an HTML element."))
return A.S(s.a,A.aQ(s.b,"grid-area:1/1"),s.f,s.c,s.d,s.w,s.e,null)},
$S:5}
A.fs.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.ft.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.fr.prototype={
$1(a){return this.a.H(t.g.a(a),B.m)},
$S:5}
A.fu.prototype={
$0(){return A.mR(this.a,this.b)},
$S:14}
A.fN.prototype={
$1(a){return A.x(a).toLowerCase()==="style"},
$S:3}
A.fK.prototype={
$1(a){var s
A.x(a)
s=B.a.aO(a,":")
return s>0&&B.a.ae(B.a.n(a,0,s)).toLowerCase()===this.a},
$S:3}
A.fM.prototype={
$1(a){return A.x(a).toLowerCase()==="data-sparrow-layout"},
$S:3}
A.id.prototype={
$1(a){return new A.at(new A.ia(this.a))},
$S:6}
A.ia.prototype={
$0(){var s=this.a
return A.nd(null,s.A().gab(),s.A().ga9())},
$S:8}
A.ie.prototype={
$1(a){t.O.a(a)
return A.c5(u.r)},
$S:7}
A.ih.prototype={
$1(a){return new A.at(new A.i9(this.a))},
$S:6}
A.i9.prototype={
$0(){var s=this.a
return A.ne(null,s.A().gab(),s.A().ga9())},
$S:8}
A.ii.prototype={
$1(a){t.O.a(a)
return A.c5(u.r)},
$S:7}
A.ij.prototype={
$1(a){return new A.at(new A.i8(this.a))},
$S:6}
A.i8.prototype={
$0(){var s=this.a
return A.nf(null,s.A().gab(),s.A().ga9())},
$S:8}
A.ik.prototype={
$1(a){t.O.a(a)
return A.c5(u.r)},
$S:7}
A.il.prototype={
$1(a){return new A.at(new A.i7(this.a))},
$S:6}
A.i7.prototype={
$0(){var s=this.a
return A.ng(null,s.A().gab(),s.A().ga9())},
$S:8}
A.im.prototype={
$1(a){t.O.a(a)
return A.c5(u.r)},
$S:7}
A.io.prototype={
$1(a){return new A.at(new A.i6(this.a))},
$S:6}
A.i6.prototype={
$0(){var s=this.a
return A.nh(null,s.A().gab(),s.A().ga9())},
$S:8}
A.ip.prototype={
$1(a){t.O.a(a)
return A.c5(u.r)},
$S:7}
A.ic.prototype={
$1(a){return new A.at(new A.ib())},
$S:6}
A.ib.prototype={
$0(){return B.a4},
$S:27}
A.ig.prototype={
$1(a){var s,r
A.p(a)
s=A.p(v.G.window)
r=this.a
s.removeEventListener("pagehide",r.A())
s.removeEventListener("beforeunload",r.A())
this.b.J()
this.c.A().J()},
$S:2}
A.fT.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.fU.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.fV.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.h_.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.h0.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.h1.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.h2.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.h3.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.h4.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.h5.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.h6.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.fW.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.fX.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.fY.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.fZ.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.h7.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.h8.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.h9.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hc.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hd.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.he.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.hf.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hg.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hh.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hi.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hj.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.ha.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.hb.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hk.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hl.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hm.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hp.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hq.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.hr.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.hs.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.ht.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hu.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hv.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hw.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.hn.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.ho.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hx.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hy.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hz.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hC.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hD.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.hE.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.hF.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hG.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hH.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hI.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hJ.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.hA.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.hB.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hK.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hL.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hM.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hO.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hP.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.hQ.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.hR.prototype={
$1(a){this.a.$1("/contact")},
$S:0}
A.hS.prototype={
$1(a){this.a.$1("/")},
$S:0}
A.hT.prototype={
$1(a){this.a.$1("/services")},
$S:0}
A.hU.prototype={
$1(a){this.a.$1("/solutions")},
$S:0}
A.hV.prototype={
$1(a){this.a.$1("/about")},
$S:0}
A.hN.prototype={
$1(a){this.a.$1("/contact")},
$S:0};(function aliases(){var s=J.aV.prototype
s.bu=s.l
s=A.aT.prototype
s.bt=s.cm})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"n9","lC",10)
s(A,"na","lD",10)
s(A,"nb","lE",10)
r(A,"kh","n0",1)
s(A,"nj","mp",11)
s(A,"nC","mo",7)
var o
q(o=A.ct.prototype,"gcq","cr",1)
q(o,"gco","cp",1)
p(o=A.dz.prototype,"gab","cv",25)
q(o,"ga9","cu",1)
r(A,"nE","ll",1)
q(A.bE.prototype,"ga2","J",1)
q(o=A.aT.prototype,"gcs","ct",1)
q(o,"gbX","bY",1)
q(A.d7.prototype,"ga2","J",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.K,null)
q(A.K,[A.iu,J.de,A.cu,J.bT,A.T,A.J,A.o,A.C,A.ch,A.cD,A.ab,A.b9,A.bt,A.bV,A.bc,A.aZ,A.f3,A.eP,A.cM,A.aS,A.Z,A.eK,A.cf,A.cg,A.ce,A.br,A.dW,A.dO,A.dE,A.e_,A.fe,A.as,A.dT,A.fp,A.fn,A.cN,A.dP,A.e3,A.dU,A.bd,A.cG,A.cS,A.b3,A.d6,A.fj,A.fF,A.fC,A.ff,A.du,A.cz,A.fg,A.aE,A.ac,A.af,A.a4,A.cT,A.f5,A.al,A.db,A.dc,A.bD,A.ar,A.eU,A.aY,A.aL,A.eY,A.aT,A.dz,A.aq,A.c4,A.eT,A.X,A.cw,A.dF,A.aM,A.bE,A.e0,A.dV,A.d7,A.dX,A.R,A.e,A.L,A.at,A.fq])
q(J.de,[J.dg,J.c8,J.cb,J.ca,J.cc,J.c9,J.b5])
q(J.cb,[J.aV,J.P,A.bv,A.ck])
q(J.aV,[J.dv,J.bB,J.aU])
r(J.df,A.cu)
r(J.eH,J.P)
q(J.c9,[J.c7,J.dh])
q(A.T,[A.az,A.cB,A.di,A.dI,A.dA,A.dS,A.cd,A.d0,A.ax,A.cC,A.dH,A.bA,A.d5])
r(A.bC,A.J)
r(A.bp,A.bC)
q(A.o,[A.v,A.b7,A.ak,A.bb,A.dN,A.dZ,A.bF])
q(A.v,[A.y,A.aH,A.ae,A.a6,A.cF])
r(A.c1,A.b7)
q(A.y,[A.a_,A.G])
r(A.bH,A.bt)
r(A.b0,A.bH)
r(A.bW,A.b0)
r(A.a5,A.bV)
q(A.aZ,[A.bX,A.cL])
r(A.bY,A.bX)
r(A.cn,A.cB)
q(A.aS,[A.d3,A.d4,A.dG,A.i2,A.i4,A.fb,A.fa,A.eN,A.ez,A.eB,A.eD,A.eF,A.eV,A.eW,A.eX,A.f_,A.f0,A.f1,A.hW,A.hX,A.f2,A.ee,A.eg,A.ei,A.ek,A.eS,A.fv,A.fw,A.fx,A.fy,A.fz,A.fs,A.ft,A.fr,A.fN,A.fK,A.fM,A.id,A.ie,A.ih,A.ii,A.ij,A.ik,A.il,A.im,A.io,A.ip,A.ic,A.ig,A.fT,A.fU,A.fV,A.h_,A.h0,A.h1,A.h2,A.h3,A.h4,A.h5,A.h6,A.fW,A.fX,A.fY,A.fZ,A.h7,A.h8,A.h9,A.hc,A.hd,A.he,A.hf,A.hg,A.hh,A.hi,A.hj,A.ha,A.hb,A.hk,A.hl,A.hm,A.hp,A.hq,A.hr,A.hs,A.ht,A.hu,A.hv,A.hw,A.hn,A.ho,A.hx,A.hy,A.hz,A.hC,A.hD,A.hE,A.hF,A.hG,A.hH,A.hI,A.hJ,A.hA,A.hB,A.hK,A.hL,A.hM,A.hO,A.hP,A.hQ,A.hR,A.hS,A.hT,A.hU,A.hV,A.hN])
q(A.dG,[A.dD,A.bo])
r(A.aG,A.Z)
q(A.d4,[A.eI,A.i3,A.eL,A.eO,A.fk,A.f7,A.f6])
q(A.ck,[A.dl,A.a7])
q(A.a7,[A.cH,A.cJ])
r(A.cI,A.cH)
r(A.ci,A.cI)
r(A.cK,A.cJ)
r(A.cj,A.cK)
q(A.ci,[A.dm,A.dn])
q(A.cj,[A.dp,A.dq,A.dr,A.ds,A.dt,A.cl,A.cm])
r(A.cO,A.dS)
q(A.d3,[A.fc,A.fd,A.fo,A.fm,A.fO,A.fE,A.fD,A.eG,A.eu,A.ev,A.ew,A.ey,A.eA,A.eC,A.eE,A.ex,A.er,A.es,A.et,A.eq,A.eZ,A.ec,A.fS,A.fQ,A.fR,A.fH,A.eo,A.en,A.em,A.ep,A.ed,A.ef,A.eh,A.ej,A.el,A.fu,A.ia,A.i9,A.i8,A.i7,A.i6,A.ib])
r(A.dY,A.e3)
r(A.aO,A.cL)
q(A.b3,[A.d2,A.d8,A.dj])
q(A.d6,[A.eb,A.eJ,A.f9,A.f8])
r(A.dk,A.cd)
r(A.fi,A.fj)
r(A.dL,A.d8)
q(A.ax,[A.cp,A.dd])
r(A.dR,A.cT)
r(A.ct,A.aT)
q(A.X,[A.a3,A.b8,A.aj,A.aI])
q(A.ff,[A.eM,A.c_,A.aX,A.bG])
q(A.R,[A.b_,A.q,A.cA,A.V,A.n,A.A,A.bZ,A.cs,A.co,A.c2,A.cx,A.cE,A.cv,A.c0,A.cy,A.bw,A.c3,A.c6])
s(A.bC,A.b9)
s(A.cH,A.J)
s(A.cI,A.ab)
s(A.cJ,A.J)
s(A.cK,A.ab)
s(A.bH,A.cS)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",F:"double",bm:"num",r:"String",aa:"bool",af:"Null",D:"List",K:"Object",Y:"Map",Q:"JSObject"},mangledNames:{},types:["~(K?)","~()","af(Q)","aa(r)","@()","X(R)","at(aL)","c4(aL)","R()","~(Q)","~(~())","@(@)","af()","~(K?,K?)","r()","Q()","@(@,r)","@(r)","af(@)","af(~())","~(@,@)","Y<r,r>(Y<r,r>,r)","0&(r,m?)","aY(ar)","r(r)","~(r)","~(X)","b_()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.lW(v.typeUniverse,JSON.parse('{"dv":"aV","bB":"aV","aU":"aV","nQ":"bv","dg":{"aa":[],"O":[]},"c8":{"O":[]},"cb":{"Q":[]},"aV":{"Q":[]},"P":{"D":["1"],"v":["1"],"Q":[],"o":["1"]},"df":{"cu":[]},"eH":{"P":["1"],"D":["1"],"v":["1"],"Q":[],"o":["1"]},"bT":{"W":["1"]},"c9":{"F":[],"bm":[]},"c7":{"F":[],"m":[],"bm":[],"O":[]},"dh":{"F":[],"bm":[],"O":[]},"b5":{"r":[],"eQ":[],"O":[]},"az":{"T":[]},"bp":{"J":["m"],"b9":["m"],"D":["m"],"v":["m"],"o":["m"],"J.E":"m","b9.E":"m"},"v":{"o":["1"]},"y":{"v":["1"],"o":["1"]},"C":{"W":["1"]},"b7":{"o":["2"],"o.E":"2"},"c1":{"b7":["1","2"],"v":["2"],"o":["2"],"o.E":"2"},"ch":{"W":["2"]},"a_":{"y":["2"],"v":["2"],"o":["2"],"y.E":"2","o.E":"2"},"ak":{"o":["1"],"o.E":"1"},"cD":{"W":["1"]},"bC":{"J":["1"],"b9":["1"],"D":["1"],"v":["1"],"o":["1"]},"G":{"y":["1"],"v":["1"],"o":["1"],"y.E":"1","o.E":"1"},"bW":{"b0":["1","2"],"bH":["1","2"],"bt":["1","2"],"cS":["1","2"],"Y":["1","2"]},"bV":{"Y":["1","2"]},"a5":{"bV":["1","2"],"Y":["1","2"]},"bb":{"o":["1"],"o.E":"1"},"bc":{"W":["1"]},"bX":{"aZ":["1"],"dC":["1"],"v":["1"],"o":["1"]},"bY":{"bX":["1"],"aZ":["1"],"dC":["1"],"v":["1"],"o":["1"]},"cn":{"T":[]},"di":{"T":[]},"dI":{"T":[]},"cM":{"jo":[]},"aS":{"b4":[]},"d3":{"b4":[]},"d4":{"b4":[]},"dG":{"b4":[]},"dD":{"b4":[]},"bo":{"b4":[]},"dA":{"T":[]},"aG":{"Z":["1","2"],"jf":["1","2"],"Y":["1","2"],"Z.K":"1","Z.V":"2"},"aH":{"v":["1"],"o":["1"],"o.E":"1"},"cf":{"W":["1"]},"ae":{"v":["1"],"o":["1"],"o.E":"1"},"cg":{"W":["1"]},"a6":{"v":["ac<1,2>"],"o":["ac<1,2>"],"o.E":"ac<1,2>"},"ce":{"W":["ac<1,2>"]},"br":{"ln":[],"eQ":[]},"dW":{"cr":[],"bu":[]},"dN":{"o":["cr"],"o.E":"cr"},"dO":{"W":["cr"]},"dE":{"bu":[]},"dZ":{"o":["bu"],"o.E":"bu"},"e_":{"W":["bu"]},"bv":{"Q":[],"O":[]},"ck":{"Q":[]},"dl":{"Q":[],"O":[]},"a7":{"ad":["1"],"Q":[]},"ci":{"J":["F"],"a7":["F"],"D":["F"],"ad":["F"],"v":["F"],"Q":[],"o":["F"],"ab":["F"]},"cj":{"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"]},"dm":{"J":["F"],"a7":["F"],"D":["F"],"ad":["F"],"v":["F"],"Q":[],"o":["F"],"ab":["F"],"O":[],"J.E":"F"},"dn":{"J":["F"],"a7":["F"],"D":["F"],"ad":["F"],"v":["F"],"Q":[],"o":["F"],"ab":["F"],"O":[],"J.E":"F"},"dp":{"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"],"O":[],"J.E":"m"},"dq":{"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"],"O":[],"J.E":"m"},"dr":{"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"],"O":[],"J.E":"m"},"ds":{"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"],"O":[],"J.E":"m"},"dt":{"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"],"O":[],"J.E":"m"},"cl":{"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"],"O":[],"J.E":"m"},"cm":{"iE":[],"J":["m"],"a7":["m"],"D":["m"],"ad":["m"],"v":["m"],"Q":[],"o":["m"],"ab":["m"],"O":[],"J.E":"m"},"dS":{"T":[]},"cO":{"T":[]},"cN":{"W":["1"]},"bF":{"o":["1"],"o.E":"1"},"e3":{"jw":[]},"dY":{"jw":[]},"aO":{"aZ":["1"],"jh":["1"],"dC":["1"],"v":["1"],"o":["1"]},"bd":{"W":["1"]},"J":{"D":["1"],"v":["1"],"o":["1"]},"Z":{"Y":["1","2"]},"cF":{"v":["2"],"o":["2"],"o.E":"2"},"cG":{"W":["2"]},"bt":{"Y":["1","2"]},"b0":{"bH":["1","2"],"bt":["1","2"],"cS":["1","2"],"Y":["1","2"]},"aZ":{"dC":["1"],"v":["1"],"o":["1"]},"cL":{"aZ":["1"],"dC":["1"],"v":["1"],"o":["1"]},"d2":{"b3":["D<m>","r"]},"d8":{"b3":["r","D<m>"]},"cd":{"T":[]},"dk":{"T":[]},"dj":{"b3":["K?","r"]},"dL":{"b3":["r","D<m>"]},"F":{"bm":[]},"m":{"bm":[]},"D":{"v":["1"],"o":["1"]},"cr":{"bu":[]},"r":{"eQ":[]},"d0":{"T":[]},"cB":{"T":[]},"ax":{"T":[]},"cp":{"T":[]},"dd":{"T":[]},"cC":{"T":[]},"dH":{"T":[]},"bA":{"T":[]},"d5":{"T":[]},"du":{"T":[]},"cz":{"T":[]},"a4":{"lt":[]},"cT":{"dJ":[]},"al":{"dJ":[]},"dR":{"dJ":[]},"ct":{"aT":["~"],"aT.P":"~"},"a3":{"X":[]},"aj":{"X":[]},"aM":{"jx":[]},"dV":{"iC":[]},"b_":{"R":[]},"at":{"iC":[]},"q":{"R":[]},"cA":{"R":[]},"V":{"R":[]},"n":{"R":[]},"A":{"R":[]},"bZ":{"R":[]},"cs":{"R":[]},"co":{"R":[]},"c2":{"R":[]},"cx":{"R":[]},"cE":{"R":[]},"cv":{"R":[]},"c0":{"R":[]},"cy":{"R":[]},"bw":{"R":[]},"c3":{"R":[]},"c6":{"R":[]},"l3":{"D":["m"],"v":["m"],"o":["m"]},"iE":{"D":["m"],"v":["m"],"o":["m"]},"lx":{"D":["m"],"v":["m"],"o":["m"]},"l1":{"D":["m"],"v":["m"],"o":["m"]},"lv":{"D":["m"],"v":["m"],"o":["m"]},"l2":{"D":["m"],"v":["m"],"o":["m"]},"lw":{"D":["m"],"v":["m"],"o":["m"]},"l_":{"D":["F"],"v":["F"],"o":["F"]},"l0":{"D":["F"],"v":["F"],"o":["F"]}}'))
A.lV(v.typeUniverse,JSON.parse('{"v":1,"bC":1,"a7":1,"cL":1,"d6":2}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",q:": URI should have a non-empty host name: ",s:"A CSS declaration separator is not allowed.",O:"A conceptual customer portal that makes everyday requests easier to navigate and manage.",p:"A conceptual workspace for coordinating projects, priorities and decisions across a growing team.",x:"A straightforward starting point for a thoughtful conversation.",E:"A typical engagement can start with an assessment of the existing system and its priorities.",M:"Align on the problem, people and desired outcomes.",C:"Design, build and test in clear, collaborative stages.",g:"Early involvement can clarify scope, validate assumptions and help avoid costly rework.",t:"Explore the contact page and its clearly marked form preview.",l:"Illustrative demo concepts show the kinds of problems we can help solve. These are not client case studies.",I:"Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.",i:"Inline event attributes are not supported.",n:"Maintenance, documentation and ongoing improvements should be planned alongside delivery.",r:"Sparrow Kit | Thoughtful software, built to last",f:"Support, maintain and refine as needs change.",G:"Turn insights into a focused plan and design direction.",K:"When should we involve a technical partner?",u:"border:1px solid #E2E9EF;box-shadow:0px 5px 18px 0px rgba(20, 43, 70, 0.0392156862745098)",H:"box-shadow:0px 4px 12px 0px rgba(23, 59, 94, 0.09019607843137255)",b:"contact@example.com  \xb7  Placeholder contact",v:'font-family:"Manrope",system-ui,sans-serif;font-size:10px;color:#ADC5DA;font-weight:700',J:'font-family:"Manrope",system-ui,sans-serif;font-size:11px;color:#64758A;font-weight:400',k:'font-family:"Manrope",system-ui,sans-serif;font-size:11px;color:#ADC5DA;font-weight:400',a:'font-family:"Manrope",system-ui,sans-serif;font-size:11px;letter-spacing:1.1px;line-height:1.4;color:#3B6691;font-weight:700',R:'font-family:"Manrope",system-ui,sans-serif;font-size:11px;letter-spacing:1.1px;line-height:1.4;color:#ADC5DA;font-weight:700',U:'font-family:"Manrope",system-ui,sans-serif;font-size:12px;color:#D8E1EA;font-weight:600',_:'font-family:"Manrope",system-ui,sans-serif;font-size:12px;line-height:1.55;color:#D8E1EA;font-weight:400',e:'font-family:"Manrope",system-ui,sans-serif;font-size:13px;color:#40556A;font-weight:600',d:'font-family:"Manrope",system-ui,sans-serif;font-size:13px;color:#FFFFFF;font-weight:700',m:'font-family:"Manrope",system-ui,sans-serif;font-size:13px;line-height:1.6;color:#637183;font-weight:400',z:'font-family:"Manrope",system-ui,sans-serif;font-size:14px;letter-spacing:0.7px;color:#142B46;font-weight:700',N:'font-family:"Manrope",system-ui,sans-serif;font-size:14px;letter-spacing:0.7px;color:#FFFFFF;font-weight:700',Z:'font-family:"Manrope",system-ui,sans-serif;font-size:20px;color:#FFFFFF;font-weight:700',c:'font-family:"Manrope",system-ui,sans-serif;line-height:1.6;color:#516275',w:'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:16px;line-height:1.3;color:#FFFFFF;font-weight:700',h:'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:17px;line-height:1.3;color:#142B46;font-weight:700',B:'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:20px;line-height:1.3;color:#142B46;font-weight:700',Q:'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:24px;line-height:1.25;color:#142B46;font-weight:700',o:'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:27px;line-height:1.2;color:#142B46;font-weight:700',W:'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:27px;line-height:1.2;color:#FFFFFF;font-weight:700',j:'font:inherit;margin:0;font-family:"Manrope",system-ui,sans-serif;font-size:38px;line-height:1.12;color:#142B46;font-weight:700',Y:"\xa9 2026 Sparrow Kit. Demonstration website."}
var t=(function rtii(){var s=A.an
return{e:s("bp"),J:s("a5<r,K?>"),k:s("v<@>"),C:s("T"),Z:s("b4"),v:s("o<r>"),w:s("o<@>"),D:s("o<m>"),z:s("P<aT<@>>"),eO:s("P<Q>"),d0:s("P<ji>"),E:s("P<X>"),r:s("P<aq>"),V:s("P<K>"),d3:s("P<ar>"),s:s("P<r>"),U:s("P<R>"),p:s("P<@>"),t:s("P<m>"),u:s("P<~()>"),T:s("c8"),m:s("Q"),W:s("aU"),aU:s("ad<@>"),F:s("l9"),eI:s("D<ji>"),fW:s("D<X>"),gS:s("D<R>"),_:s("D<@>"),L:s("D<m>"),q:s("D<~()>"),bH:s("Y<aX,r>"),Y:s("Y<r,r>"),cO:s("Y<r,bD>"),ce:s("Y<@,@>"),f:s("Y<r,K?>"),ee:s("Y<r,~(r)>"),d2:s("Y<r,~(aa)>"),cT:s("Y<r,~(K?)>"),c5:s("aI"),fV:s("ji"),eT:s("X"),ah:s("a3"),a:s("aq"),P:s("af"),K:s("K"),gT:s("nR"),cz:s("cr"),b:s("aX"),c:s("L<aa>"),x:s("L<F>"),G:s("L<m>"),j:s("ar"),eV:s("aY"),O:s("aL"),c7:s("aM<Y<r,r>>"),cH:s("aM<aL>"),dw:s("aM<r?>"),l:s("jo"),N:s("r"),dm:s("O"),g:s("R"),ak:s("bB"),h:s("b0<r,r>"),R:s("dJ"),cc:s("ak<r>"),af:s("jx"),cN:s("bD"),B:s("bE"),cV:s("dX"),y:s("aa"),bB:s("aa(r)"),i:s("F"),A:s("@"),S:s("m"),eH:s("j7<af>?"),an:s("Q?"),X:s("K?"),cd:s("L<F>?"),b9:s("L<m>?"),dk:s("r?"),Q:s("dU?"),fQ:s("aa?"),I:s("F?"),h6:s("m?"),cg:s("bm?"),n:s("bm"),H:s("~"),M:s("~()"),d:s("~(r)"),dz:s("~(aa)"),o:s("~(K?)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.U=J.de.prototype
B.c=J.P.prototype
B.l=J.c7.prototype
B.V=J.c9.prototype
B.a=J.b5.prototype
B.W=J.aU.prototype
B.X=J.cb.prototype
B.F=A.cm.prototype
B.H=J.dv.prototype
B.x=J.bB.prototype
B.ah=new A.eb()
B.L=new A.d2()
B.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.M=function() {
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
B.R=function(getTagFallback) {
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
B.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.Q=function(hooks) {
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
B.P=function(hooks) {
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
B.O=function(hooks) {
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
B.A=function(hooks) { return hooks; }

B.B=new A.dj()
B.S=new A.du()
B.o=new A.dL()
B.T=new A.f9()
B.t=new A.dY()
B.n=new A.c_("center",1,"center")
B.f=new A.c_("stretch",3,"stretch")
B.e=new A.c_("flex-start",0,"start")
B.ai=new A.e(0,0,0,0)
B.Y=new A.eJ(null)
B.r=new A.aX(null,0,"mobile")
B.q=new A.aX(600,1,"tablet")
B.p=new A.aX(1024,2,"desktop")
B.C=s([B.r,B.q,B.p],A.an("P<aX>"))
B.D=s([],A.an("P<l9>"))
B.v=s([],t.E)
B.w=s([],t.r)
B.Z=s([],t.V)
B.h=s([],t.s)
B.a_=s([],t.U)
B.b=new A.eM(0,"start")
B.G={class:0}
B.a0=new A.a5(B.G,["sparrow-field__label"],t.J)
B.a1=new A.a5(B.G,["sparrow-field"],t.J)
B.u={}
B.k=new A.a5(B.u,[],A.an("a5<r,~(r)>"))
B.i=new A.a5(B.u,[],A.an("a5<r,~(aa)>"))
B.j=new A.a5(B.u,[],A.an("a5<r,~(K?)>"))
B.E=new A.a5(B.u,[],A.an("a5<r,r>"))
B.d=new A.a5(B.u,[],t.J)
B.a3=new A.eT(!1,!0,!0,!0,!0)
B.a2={area:0,base:1,br:2,col:3,embed:4,hr:5,img:6,input:7,link:8,meta:9,param:10,source:11,track:12,wbr:13}
B.I=new A.bY(B.a2,14,A.an("bY<r>"))
B.a4=new A.b_("Not Found",B.d,null)
B.a5=A.aC("nL")
B.a6=A.aC("nM")
B.a7=A.aC("l_")
B.a8=A.aC("l0")
B.a9=A.aC("l1")
B.aa=A.aC("l2")
B.ab=A.aC("l3")
B.ac=A.aC("lv")
B.ad=A.aC("lw")
B.ae=A.aC("lx")
B.af=A.aC("iE")
B.ag=new A.f8(!1)
B.J=new A.bG(0,"root")
B.m=new A.bG(1,"ordinary")
B.y=new A.bG(2,"flex")
B.K=new A.bG(3,"stack")})();(function staticFields(){$.fh=null
$.ai=A.c([],t.V)
$.jj=null
$.j3=null
$.j2=null
$.kn=null
$.ke=null
$.kr=null
$.i_=null
$.i5=null
$.iU=null
$.bK=null
$.cW=null
$.cX=null
$.iP=!1
$.dM=B.t
$.aK=A.c([],A.an("P<bE>"))
$.aJ=A.c([],A.an("P<D<~()>>"))
$.bx=A.aW(t.B)
$.iz=!1
$.eR=!1
$.bU=A.c([],t.z)
$.fP=A.k(t.N,A.an("e0"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"nO","kw",()=>A.i0("_$dart_dartClosure"))
s($,"nN","iY",()=>A.i0("_$dart_dartClosure_dartJSInterop"))
s($,"o7","kM",()=>A.c([new J.df()],A.an("P<cu>")))
s($,"nS","kx",()=>A.aN(A.f4({
toString:function(){return"$receiver$"}})))
s($,"nT","ky",()=>A.aN(A.f4({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"nU","kz",()=>A.aN(A.f4(null)))
s($,"nV","kA",()=>A.aN(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"nY","kD",()=>A.aN(A.f4(void 0)))
s($,"nZ","kE",()=>A.aN(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"nX","kC",()=>A.aN(A.jr(null)))
s($,"nW","kB",()=>A.aN(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"o0","kG",()=>A.aN(A.jr(void 0)))
s($,"o_","kF",()=>A.aN(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"o1","iZ",()=>A.lB())
s($,"o6","kL",()=>A.li(4096))
s($,"o4","kJ",()=>new A.fE().$0())
s($,"o5","kK",()=>new A.fD().$0())
s($,"o2","kH",()=>new Int8Array(A.mr(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"o3","kI",()=>A.bz("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"nP","ir",()=>new A.db(new WeakMap(),"SparrowKit active hydration",A.an("db<K>")))
s($,"o8","kN",()=>A.bz("^[A-Za-z_:][A-Za-z0-9:._-]*$",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bv,SharedArrayBuffer:A.bv,ArrayBufferView:A.ck,DataView:A.dl,Float32Array:A.dm,Float64Array:A.dn,Int16Array:A.dp,Int32Array:A.dq,Int8Array:A.dr,Uint16Array:A.ds,Uint32Array:A.dt,Uint8ClampedArray:A.cl,CanvasPixelArray:A.cl,Uint8Array:A.cm})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.cH.$nativeSuperclassTag="ArrayBufferView"
A.cI.$nativeSuperclassTag="ArrayBufferView"
A.ci.$nativeSuperclassTag="ArrayBufferView"
A.cJ.$nativeSuperclassTag="ArrayBufferView"
A.cK.$nativeSuperclassTag="ArrayBufferView"
A.cj.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.nz
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()