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
if(a[b]!==s){A.ob(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jo(b)
return new s(c,this)}:function(){if(s===null)s=A.jo(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jo(a).prototype
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
jt(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jq(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.jr==null){A.nX()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.i(A.jZ("Return interceptor for "+A.x(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.fe
if(o==null)o=$.fe=A.is(n)
p=q[o]}if(p!=null)return p
p=A.o1(a)
if(p!=null)return p
if(typeof a=="function")return B.U
s=Object.getPrototypeOf(a)
if(s==null)return B.I
if(s===Object.prototype)return B.I
if(typeof q=="function"){o=$.fe
if(o==null)o=$.fe=A.is(n)
Object.defineProperty(q,o,{value:B.z,enumerable:false,writable:true,configurable:true})
return B.z}return B.z},
lC(a,b){if(a<0||a>4294967295)throw A.i(A.ae(a,0,4294967295,"length",null))
return J.lD(new Array(a),b)},
lD(a,b){var s=A.e(a,b.h("J<0>"))
s.$flags=1
return s},
jH(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
lE(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.jH(r))break;++b}return b},
jI(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.l(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.jH(q))break}return b},
aC(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c3.prototype
return J.dc.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.c4.prototype
if(typeof a=="boolean")return J.db.prototype
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
if(typeof a=="symbol")return J.c8.prototype
if(typeof a=="bigint")return J.c6.prototype
return a}if(a instanceof A.D)return a
return J.jq(a)},
e4(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
if(typeof a=="symbol")return J.c8.prototype
if(typeof a=="bigint")return J.c6.prototype
return a}if(a instanceof A.D)return a
return J.jq(a)},
jp(a){if(a==null)return a
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
if(typeof a=="symbol")return J.c8.prototype
if(typeof a=="bigint")return J.c6.prototype
return a}if(a instanceof A.D)return a
return J.jq(a)},
nS(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.bz.prototype
return a},
ax(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aC(a).T(a,b)},
e7(a,b){return J.jp(a).j(a,b)},
jw(a,b){return J.nS(a).b8(a,b)},
lj(a,b){return J.jp(a).O(a,b)},
cU(a){return J.aC(a).gD(a)},
aN(a){return J.jp(a).gu(a)},
bQ(a){return J.e4(a).gm(a)},
lk(a){return J.aC(a).gE(a)},
aE(a){return J.aC(a).l(a)},
d9:function d9(){},
db:function db(){},
c4:function c4(){},
c7:function c7(){},
aR:function aR(){},
dr:function dr(){},
bz:function bz(){},
aQ:function aQ(){},
c6:function c6(){},
c8:function c8(){},
J:function J(a){this.$ti=a},
da:function da(){},
eF:function eF(a){this.$ti=a},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c5:function c5(){},
c3:function c3(){},
dc:function dc(){},
b6:function b6(){}},A={j0:function j0(){},
jL(a){return new A.aA("Field '"+a+"' has been assigned during initialization.")},
lH(a){return new A.aA("Field '"+a+"' has not been initialized.")},
lJ(a){return new A.aA("Local '"+a+"' has not been initialized.")},
lG(a){return new A.aA("Field '"+a+"' has already been initialized.")},
lI(a){return new A.aA("Local '"+a+"' has already been initialized.")},
it(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
kO(a,b,c){return a},
js(a){var s,r
for(s=$.ag.length,r=0;r<s;++r)if(a===$.ag[r])return!0
return!1},
jP(a,b,c,d){if(t.v.b(a))return new A.bZ(a,b,c.h("@<0>").L(d).h("bZ<1,2>"))
return new A.b7(a,b,c.h("@<0>").L(d).h("b7<1,2>"))},
lA(){return new A.by("No element")},
aA:function aA(a){this.a=a},
bq:function bq(a){this.a=a},
t:function t(){},
u:function u(){},
A:function A(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cd:function cd(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.$ti=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c},
a5:function a5(){},
ba:function ba(){},
bA:function bA(){},
E:function E(a,b){this.a=a
this.$ti=b},
b4(a,b,c){var s,r,q,p,o,n,m,l=A.j3(a.gG(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.bN)(l),++j,p=o){r=l[j]
c.a(a.q(0,r))
o=p+1
q[r]=p}n=A.j3(a.ga4(),!0,c)
m=new A.Z(q,n,b.h("@<0>").L(c).h("Z<1,2>"))
m.$keys=l
return m}return new A.bT(A.jO(a,b,c),b.h("@<0>").L(c).h("bT<1,2>"))},
ls(){throw A.i(A.bb("Cannot modify unmodifiable Map"))},
lt(){throw A.i(A.bb("Cannot modify constant Set"))},
l_(a){var s=A.kZ(a)
if(s!=null)return s
return"minified:"+a},
oE(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aE(a)
return s},
ds(a){var s,r=$.jQ
if(r==null)r=$.jQ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jR(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.l(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
dt(a){var s,r,q,p
if(a instanceof A.D)return A.af(A.bL(a),null)
s=J.aC(a)
if(s===B.S||s===B.V||t.ak.b(a)){r=B.B(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.af(A.bL(a),null)},
lM(a){var s,r,q
if(typeof a=="number"||A.jk(a))return J.aE(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aO)return a.l(0)
s=$.lg()
for(r=0;r<1;++r){q=s[r].cM(a)
if(q!=null)return q}return"Instance of '"+A.dt(a)+"'"},
lN(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
P(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.l.aF(s,10)|55296)>>>0,s&1023|56320)}}throw A.i(A.ae(a,0,1114111,null,null))},
nV(a){throw A.i(A.kK(a))},
l(a,b){if(a==null)J.bQ(a)
throw A.i(A.iq(a,b))},
iq(a,b){var s,r="index"
if(!A.kv(b))return new A.ay(!0,b,r,null)
s=J.bQ(a)
if(b<0||b>=s)return A.jG(b,s,a,r)
return new A.cl(null,null,!0,b,r,"Value not in range")},
nQ(a,b,c){if(a>c)return A.ae(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ae(b,a,c,"end",null)
return new A.ay(!0,b,"end",null)},
kK(a){return new A.ay(!0,a,null,null)},
i(a){return A.Y(a,new Error())},
Y(a,b){var s
if(a==null)a=new A.cv()
b.dartException=a
s=A.od
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
od(){return J.aE(this.dartException)},
Q(a,b){throw A.Y(a,b==null?new Error():b)},
al(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.Q(A.mS(a,b,c),s)},
mS(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cw("'"+s+"': Cannot "+o+" "+l+k+n)},
bN(a){throw A.i(A.az(a))},
aL(a){var s,r,q,p,o,n
a=A.kX(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.f0(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
f1(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jY(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
j1(a,b){var s=b==null,r=s?null:b.method
return new A.dd(a,r,s?null:b.receiver)},
bP(a){if(a==null)return new A.eO(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bo(a,a.dartException)
return A.ny(a)},
bo(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ny(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.l.aF(r,16)&8191)===10)switch(q){case 438:return A.bo(a,A.j1(A.x(s)+" (Error "+q+")",null))
case 445:case 5007:A.x(s)
return A.bo(a,new A.cj())}}if(a instanceof TypeError){p=$.l1()
o=$.l2()
n=$.l3()
m=$.l4()
l=$.l7()
k=$.l8()
j=$.l6()
$.l5()
i=$.la()
h=$.l9()
g=p.S(s)
if(g!=null)return A.bo(a,A.j1(A.y(s),g))
else{g=o.S(s)
if(g!=null){g.method="call"
return A.bo(a,A.j1(A.y(s),g))}else if(n.S(s)!=null||m.S(s)!=null||l.S(s)!=null||k.S(s)!=null||j.S(s)!=null||m.S(s)!=null||i.S(s)!=null||h.S(s)!=null){A.y(s)
return A.bo(a,new A.cj())}}return A.bo(a,new A.dE(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cu()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bo(a,new A.ay(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cu()
return a},
e5(a){var s
if(a==null)return new A.cG(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cG(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
o4(a){if(a==null)return J.cU(a)
if(typeof a=="object")return A.ds(a)
return J.cU(a)},
nR(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.n(0,a[s],a[r])}return b},
n2(a,b,c,d,e,f){t.Z.a(a)
switch(A.bi(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.i(new A.fd("Unsupported number of arguments for wrapped closure"))},
ip(a,b){var s=a.$identity
if(!!s)return s
s=A.nN(a,b)
a.$identity=s
return s},
nN(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.n2)},
lr(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dz().constructor.prototype):Object.create(new A.bp(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ln(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ln(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.i("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ll)}throw A.i("Error in functionType of tearoff")},
lo(a,b,c,d){var s=A.jB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jC(a,b,c,d){if(c)return A.lq(a,b,d)
return A.lo(b.length,d,a,b)},
lp(a,b,c,d){var s=A.jB,r=A.lm
switch(b?-1:a){case 0:throw A.i(new A.dw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lq(a,b,c){var s,r
if($.jz==null)$.jz=A.jy("interceptor")
if($.jA==null)$.jA=A.jy("receiver")
s=b.length
r=A.lp(s,c,a,b)
return r},
jo(a){return A.lr(a)},
ll(a,b){return A.fy(v.typeUniverse,A.bL(a.a),b)},
jB(a){return a.a},
lm(a){return a.b},
jy(a){var s,r,q,p=new A.bp("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.i(A.ab("Field name "+a+" not found."))},
is(a){return v.getIsolateTag(a)},
o1(a){var s,r,q,p,o,n=A.y($.kS.$1(a)),m=$.ir[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iy[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.b0($.kI.$2(a,n))
if(q!=null){m=$.ir[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iy[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.iW(s)
$.ir[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iy[n]=s
return s}if(p==="-"){o=A.iW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kV(a,s)
if(p==="*")throw A.i(A.jZ(n))
if(v.leafTags[n]===true){o=A.iW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kV(a,s)},
kV(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jt(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iW(a){return J.jt(a,!1,null,!!a.$iac)},
o3(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.iW(s)
else return J.jt(s,c,null,null)},
nX(){if(!0===$.jr)return
$.jr=!0
A.nY()},
nY(){var s,r,q,p,o,n,m,l
$.ir=Object.create(null)
$.iy=Object.create(null)
A.nW()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kW.$1(o)
if(n!=null){m=A.o3(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nW(){var s,r,q,p,o,n,m=B.K()
m=A.bJ(B.L,A.bJ(B.M,A.bJ(B.C,A.bJ(B.C,A.bJ(B.N,A.bJ(B.O,A.bJ(B.P(B.B),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kS=new A.iu(p)
$.kI=new A.iv(o)
$.kW=new A.iw(n)},
bJ(a,b){return a(b)||b},
nP(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
jJ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.i(A.a0("Illegal RegExp pattern ("+String(o)+")",a,null))},
o8(a,b,c){var s=a.indexOf(b,c)
return s>=0},
kR(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kX(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
F(a,b,c){var s
if(typeof b=="string")return A.oa(a,b,c)
if(b instanceof A.br){s=b.gaZ()
s.lastIndex=0
return a.replace(s,A.kR(c))}return A.o9(a,b,c)},
o9(a,b,c){var s,r,q,p
for(s=J.jw(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gt()
q=q+a.substring(r,p.gap())+c
r=p.gai()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
oa(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.kX(b),"g"),A.kR(c))},
bT:function bT(a,b){this.a=a
this.$ti=b},
bS:function bS(){},
Z:function Z(a,b,c){this.a=a
this.b=b
this.$ti=c},
be:function be(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bU:function bU(){},
bV:function bV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(){},
f0:function f0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cj:function cj(){},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a){this.a=a},
eO:function eO(a){this.a=a},
cG:function cG(a){this.a=a
this.b=null},
aO:function aO(){},
cY:function cY(){},
cZ:function cZ(){},
dC:function dC(){},
dz:function dz(){},
bp:function bp(a,b){this.a=a
this.b=b},
dw:function dw(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eG:function eG(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ao:function ao(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a7:function a7(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a6:function a6(a,b){this.a=a
this.$ti=b},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dU:function dU(a){this.b=a},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dA:function dA(a,b){this.a=a
this.c=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ob(a){throw A.Y(A.jL(a),new Error())},
bO(){throw A.Y(A.lH(""),new Error())},
cT(){throw A.Y(A.lG(""),new Error())},
kY(){throw A.Y(A.jL(""),new Error())},
dM(){var s=new A.fb()
return s.b=s},
fb:function fb(){this.b=null},
mT(a){return a},
lL(a){return new Uint8Array(a)},
aM(a,b,c){if(a>>>0!==a||a>=c)throw A.i(A.iq(b,a))},
mP(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.i(A.nQ(a,b,c))
return b},
bv:function bv(){},
cg:function cg(){},
dh:function dh(){},
a3:function a3(){},
ce:function ce(){},
cf:function cf(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
ch:function ch(){},
ci:function ci(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
j7(a,b){var s=b.c
return s==null?b.c=A.cL(a,"jE",[b.x]):s},
jU(a){var s=a.w
if(s===6||s===7)return A.jU(a.x)
return s===11||s===12},
lU(a){return a.as},
ak(a){return A.fx(v.typeUniverse,a,!1)},
bl(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bl(a1,s,a3,a4)
if(r===s)return a2
return A.kc(a1,r,!0)
case 7:s=a2.x
r=A.bl(a1,s,a3,a4)
if(r===s)return a2
return A.kb(a1,r,!0)
case 8:q=a2.y
p=A.bI(a1,q,a3,a4)
if(p===q)return a2
return A.cL(a1,a2.x,p)
case 9:o=a2.x
n=A.bl(a1,o,a3,a4)
m=a2.y
l=A.bI(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.jc(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bI(a1,j,a3,a4)
if(i===j)return a2
return A.kd(a1,k,i)
case 11:h=a2.x
g=A.bl(a1,h,a3,a4)
f=a2.y
e=A.nv(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ka(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bI(a1,d,a3,a4)
o=a2.x
n=A.bl(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.jd(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.i(A.cW("Attempted to substitute unexpected RTI kind "+a0))}},
bI(a,b,c,d){var s,r,q,p,o=b.length,n=A.fD(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bl(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
nw(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fD(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bl(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
nv(a,b,c,d){var s,r=b.a,q=A.bI(a,r,c,d),p=b.b,o=A.bI(a,p,c,d),n=b.c,m=A.nw(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dP()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
kP(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.nU(s)
return a.$S()}return null},
nZ(a,b){var s
if(A.jU(b))if(a instanceof A.aO){s=A.kP(a)
if(s!=null)return s}return A.bL(a)},
bL(a){if(a instanceof A.D)return A.z(a)
if(Array.isArray(a))return A.H(a)
return A.jj(J.aC(a))},
H(a){var s=a[v.arrayRti],r=t.p
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.jj(a)},
jj(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.n1(a,s)},
n1(a,b){var s=a instanceof A.aO?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.mp(v.typeUniverse,s.name)
b.$ccache=r
return r},
nU(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fx(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nT(a){return A.b1(A.z(a))},
nu(a){var s=a instanceof A.aO?A.kP(a):null
if(s!=null)return s
if(t.dm.b(a))return J.lk(a).a
if(Array.isArray(a))return A.H(a)
return A.bL(a)},
b1(a){var s=a.r
return s==null?a.r=new A.fm(a):s},
aD(a){return A.b1(A.fx(v.typeUniverse,a,!1))},
n0(a){var s=this
s.b=A.ns(s)
return s.b(a)},
ns(a){var s,r,q,p,o
if(a===t.K)return A.n8
if(A.bm(a))return A.nc
s=a.w
if(s===6)return A.mX
if(s===1)return A.kx
if(s===7)return A.n3
r=A.nr(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.bm)){a.f="$i"+q
if(q==="w")return A.n6
if(a===t.m)return A.n5
return A.nb}}else if(s===10){p=A.nP(a.x,a.y)
o=p==null?A.kx:p
return o==null?A.e2(o):o}return A.mV},
nr(a){if(a.w===8){if(a===t.S)return A.kv
if(a===t.i||a===t.n)return A.n7
if(a===t.N)return A.na
if(a===t.y)return A.jk}return null},
n_(a){var s=this,r=A.mU
if(A.bm(s))r=A.mK
else if(s===t.K)r=A.e2
else if(A.bM(s)){r=A.mW
if(s===t.h6)r=A.mI
else if(s===t.dk)r=A.b0
else if(s===t.fQ)r=A.mG
else if(s===t.cg)r=A.kq
else if(s===t.cD)r=A.mH
else if(s===t.an)r=A.B}else if(s===t.S)r=A.bi
else if(s===t.N)r=A.y
else if(s===t.y)r=A.av
else if(s===t.n)r=A.mJ
else if(s===t.i)r=A.kp
else if(s===t.m)r=A.q
s.a=r
return s.a(a)},
mV(a){var s=this
if(a==null)return A.bM(s)
return A.o0(v.typeUniverse,A.nZ(a,s),s)},
mX(a){if(a==null)return!0
return this.x.b(a)},
nb(a){var s,r=this
if(a==null)return A.bM(r)
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.aC(a)[s]},
n6(a){var s,r=this
if(a==null)return A.bM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.aC(a)[s]},
n5(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.D)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
kw(a){if(typeof a=="object"){if(a instanceof A.D)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
mU(a){var s=this
if(a==null){if(A.bM(s))return a}else if(s.b(a))return a
throw A.Y(A.kr(a,s),new Error())},
mW(a){var s=this
if(a==null||s.b(a))return a
throw A.Y(A.kr(a,s),new Error())},
kr(a,b){return new A.cI("TypeError: "+A.k4(a,A.af(b,null)))},
k4(a,b){return A.d3(a)+": type '"+A.af(A.nu(a),null)+"' is not a subtype of type '"+b+"'"},
aj(a,b){return new A.cI("TypeError: "+A.k4(a,b))},
n3(a){var s=this
return s.x.b(a)||A.j7(v.typeUniverse,s).b(a)},
n8(a){return a!=null},
e2(a){if(a!=null)return a
throw A.Y(A.aj(a,"Object"),new Error())},
nc(a){return!0},
mK(a){return a},
kx(a){return!1},
jk(a){return!0===a||!1===a},
av(a){if(!0===a)return!0
if(!1===a)return!1
throw A.Y(A.aj(a,"bool"),new Error())},
mG(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.Y(A.aj(a,"bool?"),new Error())},
kp(a){if(typeof a=="number")return a
throw A.Y(A.aj(a,"double"),new Error())},
mH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.Y(A.aj(a,"double?"),new Error())},
kv(a){return typeof a=="number"&&Math.floor(a)===a},
bi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.Y(A.aj(a,"int"),new Error())},
mI(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.Y(A.aj(a,"int?"),new Error())},
n7(a){return typeof a=="number"},
mJ(a){if(typeof a=="number")return a
throw A.Y(A.aj(a,"num"),new Error())},
kq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.Y(A.aj(a,"num?"),new Error())},
na(a){return typeof a=="string"},
y(a){if(typeof a=="string")return a
throw A.Y(A.aj(a,"String"),new Error())},
b0(a){if(typeof a=="string")return a
if(a==null)return a
throw A.Y(A.aj(a,"String?"),new Error())},
q(a){if(A.kw(a))return a
throw A.Y(A.aj(a,"JSObject"),new Error())},
B(a){if(a==null)return a
if(A.kw(a))return a
throw A.Y(A.aj(a,"JSObject?"),new Error())},
kB(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.af(a[q],b)
return s},
nh(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.kB(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.af(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
kt(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.d.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.l(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.af(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.af(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.af(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.af(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.af(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
af(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.af(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.af(a.x,b)+">"
if(l===8){p=A.nx(a.x)
o=a.y
return o.length>0?p+("<"+A.kB(o,b)+">"):p}if(l===10)return A.nh(a,b)
if(l===11)return A.kt(a,b,null)
if(l===12)return A.kt(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.l(b,n)
return b[n]}return"?"},
nx(a){var s=A.kZ(a)
if(s!=null)return s
return"minified:"+a},
mq(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
mp(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fx(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cM(a,5,"#")
q=A.fD(s)
for(p=0;p<s;++p)q[p]=r
o=A.cL(a,b,q)
n[b]=o
return o}else return m},
mn(a,b){return A.kn(a.tR,b)},
mm(a,b){return A.kn(a.eT,b)},
fx(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ke(a,null,b,!1)
r.set(b,s)
return s},
fy(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ke(a,b,c,!0)
q.set(c,r)
return r},
mo(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.jc(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ke(a,b,c,d){return A.me(A.m8(a,b,c,d))},
b_(a,b){b.a=A.n_
b.b=A.n0
return b},
cM(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.at(null,null)
s.w=b
s.as=c
r=A.b_(a,s)
a.eC.set(c,r)
return r},
kc(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.mk(a,b,r,c)
a.eC.set(r,s)
return s},
mk(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.bm(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.bM(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.at(null,null)
q.w=6
q.x=b
q.as=c
return A.b_(a,q)},
kb(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.mi(a,b,r,c)
a.eC.set(r,s)
return s},
mi(a,b,c,d){var s,r
if(d){s=b.w
if(A.bm(b)||b===t.K)return b
else if(s===1)return A.cL(a,"jE",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.at(null,null)
r.w=7
r.x=b
r.as=c
return A.b_(a,r)},
ml(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.at(null,null)
s.w=13
s.x=b
s.as=q
r=A.b_(a,s)
a.eC.set(q,r)
return r},
cK(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
mh(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
cL(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cK(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.at(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.b_(a,r)
a.eC.set(p,q)
return q},
jc(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.cK(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.at(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.b_(a,o)
a.eC.set(q,n)
return n},
kd(a,b,c){var s,r,q="+"+(b+"("+A.cK(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.at(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.b_(a,s)
a.eC.set(q,r)
return r},
ka(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cK(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cK(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.mh(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.at(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.b_(a,p)
a.eC.set(r,o)
return o},
jd(a,b,c,d){var s,r=b.as+("<"+A.cK(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.mj(a,b,c,r,d)
a.eC.set(r,s)
return s},
mj(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fD(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bl(a,b,r,0)
m=A.bI(a,c,r,0)
return A.jd(a,n,m,c!==m)}}l=new A.at(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.b_(a,l)},
m8(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
me(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.ma(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.k6(a,r,l,k,!1)
else if(q===46)r=A.k6(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bh(a.u,a.e,k.pop()))
break
case 94:k.push(A.ml(a.u,k.pop()))
break
case 35:k.push(A.cM(a.u,5,"#"))
break
case 64:k.push(A.cM(a.u,2,"@"))
break
case 126:k.push(A.cM(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.mc(a,k)
break
case 38:A.mb(a,k)
break
case 63:p=a.u
k.push(A.kc(p,A.bh(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.kb(p,A.bh(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.m9(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.k7(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.mf(a.u,a.e,o)
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
return A.bh(a.u,a.e,m)},
ma(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
k6(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.mq(s,o.x)[p]
if(n==null)A.Q('No "'+p+'" in "'+A.lU(o)+'"')
d.push(A.fy(s,o,n))}else d.push(p)
return m},
mc(a,b){var s,r=a.u,q=A.k5(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cL(r,p,q))
else{s=A.bh(r,a.e,p)
switch(s.w){case 11:b.push(A.jd(r,s,q,a.n))
break
default:b.push(A.jc(r,s,q))
break}}},
m9(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.k5(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bh(p,a.e,o)
q=new A.dP()
q.a=s
q.b=n
q.c=m
b.push(A.ka(p,r,q))
return
case-4:b.push(A.kd(p,b.pop(),s))
return
default:throw A.i(A.cW("Unexpected state under `()`: "+A.x(o)))}},
mb(a,b){var s=b.pop()
if(0===s){b.push(A.cM(a.u,1,"0&"))
return}if(1===s){b.push(A.cM(a.u,4,"1&"))
return}throw A.i(A.cW("Unexpected extended operation "+A.x(s)))},
k5(a,b){var s=b.splice(a.p)
A.k7(a.u,a.e,s)
a.p=b.pop()
return s},
bh(a,b,c){if(typeof c=="string")return A.cL(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.md(a,b,c)}else return c},
k7(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bh(a,b,c[s])},
mf(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bh(a,b,c[s])},
md(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.i(A.cW("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.i(A.cW("Bad index "+c+" for "+b.l(0)))},
o0(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a_(a,b,null,c,null)
r.set(c,s)}return s},
a_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.bm(d))return!0
s=b.w
if(s===4)return!0
if(A.bm(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a_(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.a_(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.a_(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a_(a,b.x,c,d,e))return!1
return A.a_(a,A.j7(a,b),c,d,e)}if(s===6)return A.a_(a,p,c,d,e)&&A.a_(a,b.x,c,d,e)
if(q===7){if(A.a_(a,b,c,d.x,e))return!0
return A.a_(a,b,c,A.j7(a,d),e)}if(q===6)return A.a_(a,b,c,p,e)||A.a_(a,b,c,d.x,e)
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
if(!A.a_(a,j,c,i,e)||!A.a_(a,i,e,j,c))return!1}return A.ku(a,b.x,c,d.x,e)}if(q===11){if(b===t.W)return!0
if(p)return!1
return A.ku(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.n4(a,b,c,d,e)}if(o&&q===10)return A.n9(a,b,c,d,e)
return!1},
ku(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a_(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.a_(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a_(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a_(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.a_(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
n4(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fy(a,b,r[o])
return A.ko(a,p,null,c,d.y,e)}return A.ko(a,b.y,null,c,d.y,e)},
ko(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a_(a,b[s],d,e[s],f))return!1
return!0},
n9(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a_(a,r[s],c,q[s],e))return!1
return!0},
bM(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.bm(a))if(s!==6)r=s===7&&A.bM(a.x)
return r},
bm(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
kn(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fD(a){return a>0?new Array(a):v.typeUniverse.sEA},
at:function at(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
dP:function dP(){this.c=this.b=this.a=null},
fm:function fm(a){this.a=a},
dO:function dO(){},
cI:function cI(a){this.a=a},
m2(){var s,r,q
if(self.scheduleImmediate!=null)return A.nE()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ip(new A.f8(s),1)).observe(r,{childList:true})
return new A.f7(s,r,q)}else if(self.setImmediate!=null)return A.nF()
return A.nG()},
m3(a){self.scheduleImmediate(A.ip(new A.f9(t.M.a(a)),0))},
m4(a){self.setImmediate(A.ip(new A.fa(t.M.a(a)),0))},
m5(a){t.M.a(a)
A.mg(0,a)},
mg(a,b){var s=new A.fk()
s.bw(a,b)
return s},
k9(a,b,c){return 0},
ne(){var s,r
for(s=$.bH;s!=null;s=$.bH){$.cR=null
r=s.b
$.bH=r
if(r==null)$.cQ=null
s.a.$0()}},
nt(){$.jl=!0
try{A.ne()}finally{$.cR=null
$.jl=!1
if($.bH!=null)$.jv().$1(A.kL())}},
kE(a){var s=new A.dL(a),r=$.cQ
if(r==null){$.bH=$.cQ=s
if(!$.jl)$.jv().$1(A.kL())}else $.cQ=r.b=s},
nq(a){var s,r,q,p=$.bH
if(p==null){A.kE(a)
$.cR=$.cQ
return}s=new A.dL(a)
r=$.cR
if(r==null){s.b=p
$.bH=$.cR=s}else{q=r.b
s.b=q
$.cR=r.b=s
if(q==null)$.cQ=s}},
o6(a){var s=null,r=$.dI
if(B.o===r){A.kA(s,s,B.o,a)
return}A.kA(s,s,r,t.M.a(r.b9(a)))},
nk(a,b){A.nq(new A.fK(a,b))},
nl(a,b,c,d,e){var s,r=$.dI
if(r===c)return d.$0()
$.dI=c
s=r
try{r=d.$0()
return r}finally{$.dI=s}},
kA(a,b,c,d){t.M.a(d)
if(B.o!==c){d=c.b9(d)
d=d}A.kE(d)},
f8:function f8(a){this.a=a},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
fk:function fk(){},
fl:function fl(a,b){this.a=a
this.b=b},
cH:function cH(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bD:function bD(a,b){this.a=a
this.$ti=b},
dL:function dL(a){this.a=a
this.b=null},
e1:function e1(){},
dW:function dW(){},
fj:function fj(a,b){this.a=a
this.b=b},
fK:function fK(a,b){this.a=a
this.b=b},
jN(a,b){return new A.aG(a.h("@<0>").L(b).h("aG<1,2>"))},
a(a,b,c){return b.h("@<0>").L(c).h("jM<1,2>").a(A.nR(a,new A.aG(b.h("@<0>").L(c).h("aG<1,2>"))))},
j(a,b){return new A.aG(a.h("@<0>").L(b).h("aG<1,2>"))},
a8(a){return new A.cy(a.h("cy<0>"))},
jb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ja(a,b,c){var s=new A.bg(a,b,c.h("bg<0>"))
s.c=a.e
return s},
jO(a,b,c){var s=A.jN(b,c)
a.P(0,new A.eK(s,b,c))
return s},
dg(a,b,c){var s=A.jN(b,c)
s.V(0,a)
return s},
j4(a){var s,r
if(A.js(a))return"{...}"
s=new A.a2("")
try{r={}
B.d.j($.ag,a)
s.a+="{"
r.a=!0
a.P(0,new A.eN(r,s))
s.a+="}"}finally{if(0>=$.ag.length)return A.l($.ag,-1)
$.ag.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dS:function dS(a){this.a=a
this.c=this.b=null},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
G:function G(){},
T:function T(){},
eM:function eM(a){this.a=a},
eN:function eN(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.$ti=b},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
cN:function cN(){},
bt:function bt(){},
aY:function aY(a,b){this.a=a
this.$ti=b},
aW:function aW(){},
cF:function cF(){},
bE:function bE(){},
ng(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.bP(r)
q=A.a0(String(s),null,null)
throw A.i(q)}q=A.fE(p)
return q},
fE(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.dQ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.fE(a[s])
return a},
mE(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.lf()
else s=new Uint8Array(o)
for(r=J.e4(a),q=0;q<o;++q){p=r.q(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
mD(a,b,c,d){var s=a?$.le():$.ld()
if(s==null)return null
if(0===c&&d===b.length)return A.km(s,b)
return A.km(s,b.subarray(c,d))},
km(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
jx(a,b,c,d,e,f){if(B.l.a5(f,4)!==0)throw A.i(A.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.i(A.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.i(A.a0("Invalid base64 padding, more than two '=' characters",a,b))},
jK(a,b,c){return new A.c9(a,b)},
mR(a){return a.cR()},
m6(a,b){return new A.fg(a,[],A.nO())},
m7(a,b,c){var s,r=new A.a2(""),q=A.m6(r,b)
q.ao(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
mF(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
dQ:function dQ(a,b){this.a=a
this.b=b
this.c=null},
ff:function ff(a){this.a=a},
dR:function dR(a){this.a=a},
fB:function fB(){},
fA:function fA(){},
cX:function cX(){},
e8:function e8(){},
b3:function b3(){},
d0:function d0(){},
d2:function d2(){},
c9:function c9(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
de:function de(){},
eI:function eI(a){this.b=a},
eH:function eH(a){this.a=a},
fh:function fh(){},
fi:function fi(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.c=a
this.a=b
this.b=c},
dH:function dH(){},
f6:function f6(){},
fC:function fC(a){this.b=0
this.c=a},
f5:function f5(a){this.a=a},
fz:function fz(a){this.a=a
this.b=16
this.c=0},
jD(a){},
o_(a){var s=A.jR(a,null)
if(s!=null)return s
throw A.i(A.a0(a,null,null))},
lu(a,b){a=A.Y(a,new Error())
if(a==null)a=A.e2(a)
a.stack=b.l(0)
throw a},
j2(a,b,c,d){var s,r=J.lC(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
j3(a,b,c){var s,r=A.e([],c.h("J<0>"))
for(s=J.aN(a);s.k();)B.d.j(r,c.a(s.gt()))
if(b)return r
r.$flags=1
return r},
bs(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("J<0>"))
s=A.e([],b.h("J<0>"))
for(r=J.aN(a);r.k();)B.d.j(s,r.gt())
return s},
k(a,b){var s=A.j3(a,!1,b)
s.$flags=3
return s},
jX(a,b,c){var s,r
A.jS(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.i(A.ae(c,b,null,"end",null))
if(s===0)return""}r=A.lW(a,b,c)
return r},
lW(a,b,c){var s=a.length
if(b>=s)return""
return A.lN(a,b,c==null||c>s?s:c)},
aT(a,b){return new A.br(a,A.jJ(a,!1,b,!1,!1,""))},
jW(a,b,c){var s=J.aN(b)
if(!s.k())return a
if(c.length===0){do a+=A.x(s.gt())
while(s.k())}else{a+=A.x(s.gt())
while(s.k())a=a+c+A.x(s.gt())}return a},
mC(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.n){s=$.lc()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.R.Z(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.P(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
d3(a){if(typeof a=="number"||A.jk(a)||a==null)return J.aE(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lM(a)},
d4(a,b){A.kO(a,"error",t.K)
A.kO(b,"stackTrace",t.l)
A.lu(a,b)},
cW(a){return new A.cV(a)},
ab(a){return new A.ay(!1,null,null,a)},
N(a,b,c){return new A.ay(!0,a,b,c)},
ae(a,b,c,d,e){return new A.cl(b,c,!0,a,d,"Invalid value")},
cm(a,b,c){if(0>a||a>c)throw A.i(A.ae(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.i(A.ae(b,a,c,"end",null))
return b}return c},
jS(a,b){if(a<0)throw A.i(A.ae(a,0,null,b,null))
return a},
jG(a,b,c,d){return new A.d8(b,!0,a,d,"Index out of range")},
bb(a){return new A.cw(a)},
jZ(a){return new A.dD(a)},
v(a){return new A.by(a)},
az(a){return new A.d_(a)},
a0(a,b,c){return new A.aF(a,b,c)},
lB(a,b,c){var s,r
if(A.js(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.d.j($.ag,a)
try{A.nd(a,s)}finally{if(0>=$.ag.length)return A.l($.ag,-1)
$.ag.pop()}r=A.jW(b,t.w.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
j_(a,b,c){var s,r
if(A.js(a))return b+"..."+c
s=new A.a2(b)
B.d.j($.ag,a)
try{r=s
r.a=A.jW(r.a,a,", ")}finally{if(0>=$.ag.length)return A.l($.ag,-1)
$.ag.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
nd(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.x(l.gt())
B.d.j(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return A.l(b,-1)
r=b.pop()
if(0>=b.length)return A.l(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.k()){if(j<=4){B.d.j(b,A.x(p))
return}r=A.x(p)
if(0>=b.length)return A.l(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.k();p=o,o=n){n=l.gt();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.l(b,-1)
k-=b.pop().length+2;--j}B.d.j(b,"...")
return}}q=A.x(p)
r=A.x(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.l(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.d.j(b,m)
B.d.j(b,q)
B.d.j(b,r)},
aZ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.l(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.k_(a4<a4?B.b.p(a5,0,a4):a5,5,a3).gbo()
else if(s===32)return A.k_(B.b.p(a5,5,a4),0,a3).gbo()}r=A.j2(8,0,!1,t.S)
B.d.n(r,0,0)
B.d.n(r,1,-1)
B.d.n(r,2,-1)
B.d.n(r,7,-1)
B.d.n(r,3,0)
B.d.n(r,4,0)
B.d.n(r,5,a4)
B.d.n(r,6,a4)
if(A.kD(a5,0,a4,0,r)>=14)B.d.n(r,7,a4)
q=r[1]
if(q>=0)if(A.kD(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.A(a5,"\\",n))if(p>0)h=B.b.A(a5,"\\",p-1)||B.b.A(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.A(a5,"..",n)))h=m>n+2&&B.b.A(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.A(a5,"file",0)){if(p<=0){if(!B.b.A(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.p(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.a1(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.A(a5,"http",0)){if(i&&o+3===n&&B.b.A(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.a1(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.A(a5,"https",0)){if(i&&o+4===n&&B.b.A(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.a1(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.ai(a4<a5.length?B.b.p(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.jg(a5,0,q)
else{if(q===0)A.bF(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.my(a5,c,p-1):""
a=A.mv(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jR(B.b.p(a5,i,n),a3)
d=A.jf(a0==null?A.Q(A.a0("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.mw(a5,n,m,a3,j,a!=null)
a2=m<l?A.mx(a5,m+1,l,a3):a3
return A.e_(j,b,a,d,a1,a2,l<a4?A.mu(a5,l+1,a4):a3)},
k1(a){var s=t.N
return B.d.ck(A.e(a.split("&"),t.s),A.j(s,s),new A.f4(B.n),t.Y)},
dG(a,b,c){throw A.i(A.a0("Illegal IPv4 address, "+a,b,c))},
m_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.l(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.dG("each part must be in the range 0..255",a,r)}A.dG("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.dG(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.al(d)
if(!(k<16))return A.l(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.dG(j,a,q)
p=l}A.dG("IPv4 address should contain exactly 4 parts",a,q)},
m0(a,b,c){var s
if(b===c)throw A.i(A.a0("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.l(a,b)
if(a.charCodeAt(b)===118){s=A.m1(a,b,c)
if(s!=null)throw A.i(s)
return!1}A.k0(a,b,c)
return!0},
m1(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.S;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.l(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.aF(n,a,q)
r=q
break}return new A.aF("Unexpected character",a,q-1)}if(r-1===b)return new A.aF(n,a,r)
return new A.aF("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.aF("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.l(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.l(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.aF("Invalid IPvFuture address character",a,r)}},
k0(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.f3(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.m_(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.l.aF(l,8)
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
B.G.br(s,a0,16,s,a)
B.G.cj(s,a,a0,0)}}return s},
e_(a,b,c,d,e,f,g){return new A.cO(a,b,c,d,e,f,g)},
kf(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bF(a,b,c){throw A.i(A.a0(c,a,b))},
jf(a,b){if(a!=null&&a===A.kf(b))return null
return a},
mv(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.l(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.l(a,r)
if(a.charCodeAt(r)!==93)A.bF(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.l(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.ms(a,q,r)
if(o<r){n=o+1
p=A.kl(a,B.b.A(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.m0(a,q,o)
l=B.b.p(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.l(a,k)
if(a.charCodeAt(k)===58){o=B.b.am(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.kl(a,B.b.A(a,"25",n)?o+3:n,c,"%25")}else p=""
A.k0(a,b,o)
return"["+B.b.p(a,b,o)+p+"]"}}return A.mA(a,b,c)},
ms(a,b,c){var s=B.b.am(a,"%",b)
return s>=b&&s<c?s:c},
kl(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.a2(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.l(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.jh(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.a2("")
l=h.a+=B.b.p(a,q,r)
if(m)n=B.b.p(a,r,r+3)
else if(n==="%")A.bF(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.S.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.a2("")
if(q<r){h.a+=B.b.p(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.l(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.p(a,q,r)
if(h==null){h=new A.a2("")
m=h}else m=h
m.a+=i
l=A.je(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.p(a,b,c)
if(q<c){i=B.b.p(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
mA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.S
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.l(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.jh(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.a2("")
k=B.b.p(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.p(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.a2("")
if(q<r){p.a+=B.b.p(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.bF(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.l(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.p(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.a2("")
l=p}else l=p
l.a+=k
j=A.je(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.p(a,b,c)
if(q<c){k=B.b.p(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
jg(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.l(a,b)
if(!A.kh(a.charCodeAt(b)))A.bF(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.l(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.S.charCodeAt(p)&8)!==0))A.bF(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.p(a,b,c)
return A.mr(q?a.toLowerCase():a)},
mr(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
my(a,b,c){return A.cP(a,b,c,16,!1,!1)},
mw(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.cP(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.b.v(s,"/"))s="/"+s
return A.mz(s,e,f)},
mz(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.v(a,"/")&&!B.b.v(a,"\\"))return A.kk(a,!s||c)
return A.bG(a)},
mx(a,b,c,d){if(a!=null)return A.cP(a,b,c,256,!0,!1)
return null},
mu(a,b,c){return A.cP(a,b,c,256,!0,!1)},
jh(a,b,c){var s,r,q,p,o,n,m=u.S,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.l(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.l(a,l)
q=a.charCodeAt(l)
p=A.it(r)
o=A.it(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.l(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.P(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.p(a,b,b+3).toUpperCase()
return null},
je(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.l.c4(a,6*p)&63|q
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
o+=3}}return A.jX(s,0,null)},
cP(a,b,c,d,e,f){var s=A.kj(a,b,c,d,e,f)
return s==null?B.b.p(a,b,c):s},
kj(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.S
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.l(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.jh(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.bF(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.l(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.je(n)}if(o==null){o=new A.a2("")
k=o}else k=o
k.a=(k.a+=B.b.p(a,p,q))+l
if(typeof m!=="number")return A.nV(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.p(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
ki(a){if(B.b.v(a,"."))return!0
return B.b.be(a,"/.")!==-1},
bG(a){var s,r,q,p,o,n,m
if(!A.ki(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.l(s,-1)
s.pop()
if(s.length===0)B.d.j(s,"")}p=!0}else{p="."===n
if(!p)B.d.j(s,n)}}if(p)B.d.j(s,"")
return B.d.R(s,"/")},
kk(a,b){var s,r,q,p,o,n
if(!A.ki(a))return!b?A.kg(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.d.gW(s)!==".."){if(0>=s.length)return A.l(s,-1)
s.pop()}else B.d.j(s,"..")
p=!0}else{p="."===n
if(!p)B.d.j(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.d.j(s,"")
if(!b){if(0>=s.length)return A.l(s,0)
B.d.n(s,0,A.kg(s[0]))}return B.d.R(s,"/")},
kg(a){var s,r,q,p=u.S,o=a.length
if(o>=2&&A.kh(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.p(a,0,s)+"%3A"+B.b.F(a,s+1)
if(r<=127){if(!(r<128))return A.l(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
mB(a,b){if(a.cn("package")&&a.c==null)return A.kF(b,0,b.length)
return-1},
mt(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.l(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.i(A.ab("Invalid URL encoding"))}}return r},
e0(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.l(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.n===d)return B.b.p(a,b,c)
else p=new A.bq(B.b.p(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.l(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.i(A.ab("Illegal percent encoding in URI"))
if(r===37){if(n+3>o)throw A.i(A.ab("Truncated URI"))
B.d.j(p,A.mt(a,n+1))
n+=2}else if(e&&r===43)B.d.j(p,32)
else B.d.j(p,r)}}t.Q.a(p)
return B.am.Z(p)},
kh(a){var s=a|32
return 97<=s&&s<=122},
k_(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.i(A.a0(k,a,r))}}if(q<0&&r>b)throw A.i(A.a0(k,a,r))
while(p!==44){B.d.j(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.l(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.d.j(j,o)
else{n=B.d.gW(j)
if(p!==44||r!==n+7||!B.b.A(a,"base64",n+1))throw A.i(A.a0("Expecting '='",a,r))
break}}B.d.j(j,r)
m=r+1
if((j.length&1)===1)a=B.J.cr(a,m,s)
else{l=A.kj(a,m,s,256,!0,!1)
if(l!=null)a=B.b.a1(a,m,s,l)}return new A.f2(a,j,c)},
kD(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.l(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.l(n,p)
o=n.charCodeAt(p)
d=o&31
B.d.n(e,o>>>5,r)}return d},
k8(a){if(a.b===7&&B.b.v(a.a,"package")&&a.c<=0)return A.kF(a.a,a.e,a.f)
return-1},
kF(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.l(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
mO(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.l(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
fc:function fc(){},
O:function O(){},
cV:function cV(a){this.a=a},
cv:function cv(){},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d8:function d8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cw:function cw(a){this.a=a},
dD:function dD(a){this.a=a},
by:function by(a){this.a=a},
d_:function d_(a){this.a=a},
dq:function dq(){},
cu:function cu(){},
fd:function fd(a){this.a=a},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.$ti=c},
ad:function ad(){},
D:function D(){},
a2:function a2(a){this.a=a},
f4:function f4(a){this.a=a},
f3:function f3(a){this.a=a},
cO:function cO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
dN:function dN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk(a){var s,r,q,p,o,n,m,l=null,k=null
for(p=A.H(a).h("E<1>"),o=new A.E(a,p),o=new A.A(o,o.gm(0),p.h("A<u.E>")),p=p.h("u.E");o.k();){n=o.d
s=n==null?p.a(n):n
try{s.$0()}catch(m){r=A.bP(m)
q=A.e5(m)
if(l==null)l=r
if(k==null)k=q}}B.d.M(a)
if(l!=null){p=l
o=k
o.toString
A.d4(p,o)}},
kG(a){var s=a==null?null:J.aE(a)
return s==null?"":s},
mM(a){var s
if(a==null||J.ax(a,!1))return null
s=J.aC(a)
return s.T(a,!0)?"":s.l(a)},
eE:function eE(a,b){this.a=a
this.b=b},
d7:function d7(){},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
er:function er(a){this.a=a},
es:function es(a,b){this.a=a
this.b=b},
et:function et(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a){this.a=a},
ez:function ez(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a){this.a=a},
ep:function ep(a){this.a=a},
eq:function eq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
en:function en(a){this.a=a},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
lS(a,b){var s=A.k(b,t.j),r=A.H(s)
r=A.k(new A.a1(s,r.h("aV(1)").a(new A.eT()),r.h("a1<1,aV>")),t.eV)
A.nC(r)
return A.lR(a,A.o5(),new A.eW(r),s)},
lR(a,b,c,d){var s,r,q,p=t.z
p=A.j(p,p)
for(s=d.length,r=0;r<s;++r){q=d[r]
p.n(0,q.a.a,q)}return new A.eS(c,a,b,A.b4(p,t.N,t.j),new A.dB())},
mQ(a){var s=null
t.O.a(a)
return A.jF(s,"The requested page was not found.",B.E,"en",s,B.x,s,B.a9,"Not Found",s)},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
eT:function eT(){},
du(a){var s=A.jm(a),r=A.H(s),q=r.h("a1<1,r>")
s=A.bs(new A.a1(s,r.h("r(1)").a(new A.eU()),q),q.h("u.E"))
s.$flags=1
return new A.aV(a,s)},
e3(a){var s,r,q,p,o,n,m,l,k,j="path"
if(!B.b.v(a,"/")||B.b.v(a,"//"))throw A.i(A.N(a,j,"Route paths must start with /."))
s=A.aZ(a)
if(s.ga9()||s.ga8())throw A.i(A.N(a,j,"Route definitions cannot include a query or fragment."))
r=A.fH(s.gK())
q=A.a8(t.N)
for(p=A.jm(r),o=p.length,n=0;n<p.length;p.length===o||(0,A.bN)(p),++n){m=p[n]
l=B.b.v(m,":")
if(l){k=A.aT("^:[A-Za-z_][A-Za-z0-9_]*$",!0)
k=!k.b.test(m)}else k=!1
if(k)throw A.i(A.N(a,j,"Invalid parameter segment."))
if(l&&!q.j(0,B.b.F(m,1)))throw A.i(A.N(a,j,"Route parameter names must be unique."))}return r},
nC(a){var s,r,q,p,o,n
for(s=a.length,r=0;r<s;++r){q=a[r]
for(p=q.b,o=0;o<r;++o){n=a[o]
if(A.np(q,n))throw A.i(A.ab('Duplicate route definitions: "'+n.a+'" and "'+q.a+'".'))
if(q.gaG()===n.gaG()&&A.nm(p,n.b))throw A.i(A.ab('Ambiguous route definitions: "'+n.a+'" and "'+q.a+'" match the same path with equal specificity.'))}}},
np(a,b){var s,r,q,p,o=a.b,n=o.length,m=b.b,l=m.length
if(n!==l)return!1
for(s=0;s<n;++s){r=o[s]
if(!(s<l))return A.l(m,s)
q=m[s]
p=B.b.v(r,":")
if(p!==B.b.v(q,":"))return!1
if(!p&&r!==q)return!1}return!0},
nm(a,b){var s,r,q,p=a.length,o=b.length
if(p!==o)return!1
for(s=0;s<p;++s){r=a[s]
if(!(s<o))return A.l(b,s)
q=b[s]
if(!B.b.v(r,":")&&!B.b.v(q,":")&&r!==q)return!1}return!0},
fH(a){var s,r=a.length===0?"/":a
if(!B.b.v(r,"/"))r="/"+r
for(;;){s=r.length
if(!(s>1&&B.b.cg(r,"/")))break
r=B.b.p(r,0,s-1)}return r},
jm(a){var s=A.fH(a)
if(s==="/")return B.i
return A.e(B.b.F(s,1).split("/"),t.s)},
aV:function aV(a,b){this.a=a
this.b=b},
eU:function eU(){},
eV:function eV(){},
aJ:function aJ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.f=d},
eW:function eW(a){this.a=a},
co:function co(a,b,c,d,e,f,g){var _=this
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
eX:function eX(a,b){this.a=a
this.b=b},
lT(a){var s=a.b,r=t.N,q=t.dw
q=new A.dv(s,!0,A.j(r,q),A.j(r,q))
q.bv(s,!0)
return q},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.y=_.x=_.w=$
_.z=!1},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
jF(a,b,c,d,e,f,g,h,i,j){var s=A.k(f,t.c),r=A.k(c,t.F)
if(B.b.bn(d).length===0)A.Q(A.N(d,"language","Cannot be empty."))
return new A.c1(i,b,a,s,r,g,j,h,d,e)},
c2(a){var s="A web application built with SparrowKit.",r=null,q="property",p="name"
return A.jF(r,s,B.E,"en",r,A.e([new A.ar(q,"og:title",a),new A.ar(q,"og:type","website"),new A.ar(q,"og:description",s),new A.ar(p,"twitter:card","summary"),new A.ar(p,"twitter:title",a),new A.ar(p,"twitter:description",s)],t.r),r,r,a,r)},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c,d,e,f,g,h,i,j){var _=this
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
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
W(a,b,c,d,e,f,g,h){var s,r=t.N,q=A.b4(b,r,t.X),p=A.nf(d),o=A.b4(e,r,t.o),n=A.b4(g,r,t.d),m=A.b4(c,r,t.dz)
r=A.k(f,r)
s=A.aT("^[A-Za-z][A-Za-z0-9-]*$",!0)
if(!s.b.test(a))A.Q(A.N(a,"tag","Invalid HTML tag name."))
if(h!=null&&a.toLowerCase()!=="select")A.Q(A.N(a,"tag","A value signal is only supported on select elements."))
return new A.ap(a,q,p,o,n,m,h,r)},
lK(a,b,c,d,e){var s,r=A.jn(a.$0())
A.nD(b)
s=$.li()
if(!s.b.test(c)||B.y.H(0,c.toLowerCase()))A.Q(A.N(c,"itemTag","Invalid item element tag."))
return new A.aq(b,c,d,r,e,a)},
kQ(a){var s=t.N,r=A.a8(s)
new A.im(r).$1(a)
return A.k(r,s)},
iX(a,b){if(a===b)return!0
if(a instanceof A.a4)return b instanceof A.a4&&a.a===b.a
if(a instanceof A.b8)return!1
if(a instanceof A.aq)return b instanceof A.aq&&A.no(a,b)
if(a instanceof A.ap)return b instanceof A.ap&&A.nn(a,b)
return!1},
kT(a){var s,r,q,p,o
for(s=new A.bq(a),r=t.e,s=new A.A(s,s.gm(0),r.h("A<G.E>")),r=r.h("G.E"),q=17,p=29;s.k();){o=s.d
if(o==null)o=r.a(o)
q=B.l.a5(q*31+o,2147483647)
p=B.l.a5(p*37+o,2147483629)}return"sparrow-responsive-"+B.l.bm(q,36)+"-"+B.l.bm(p,36)},
nf(a){var s,r,q,p,o=A.e([],t.E)
for(s=J.aN(a),r=t.ah;s.k();){q=s.gt()
if(q instanceof A.a4){p=q.a
if(p.length===0)continue
if(o.length!==0&&B.d.gW(o) instanceof A.a4){if(0>=o.length)return A.l(o,-1)
B.d.j(o,new A.a4(r.a(o.pop()).a+p))}else B.d.j(o,q)}else B.d.j(o,q)}return A.k(o,t.eT)},
jn(a){var s,r,q,p=A.a8(t.N),o=A.e([],t.I)
for(s=J.aN(a);s.k();){r=s.gt()
q=r.a
if(q.length===0)throw A.i(A.N(q,"key","Keys cannot be empty."))
if(!p.j(0,q))throw A.i(A.v('Duplicate keyed child key "'+q+'".'))
B.d.j(o,r)}return A.k(o,t.fV)},
no(a,b){var s,r,q,p,o,n,m
if(a.a!==b.a||a.b!==b.b||a.c!==b.c||a.d.length!==b.d.length)return!1
for(s=a.d,r=s.length,q=b.d,p=q.length,o=0;o<r;++o){n=s[o]
if(!(o<p))return A.l(q,o)
m=q[o]
if(n.a!==m.a||!A.iX(n.b,m.b))return!1}return!0},
nn(a,b){var s,r,q,p,o,n=!0
if(a.a===b.a){s=a.b
r=b.b
if(s.gm(s)===r.gm(r)){s=a.d
r=b.d
if(s.gm(s)===r.gm(r)){s=a.e
r=b.e
if(s.gm(s)===r.gm(r)){n=a.f
s=b.f
n=n.gm(n)!==s.gm(s)||!A.kC(a.r,b.r)||a.c.length!==b.c.length||a.w.length!==b.w.length}}}}if(n)return!1
for(n=a.b.gC(),n=n.gu(n),s=b.b;n.k();){r=n.gt()
q=r.a
if(!s.I(q)||!A.kC(r.b,s.q(0,q)))return!1}for(n=a.d.gC(),n=n.gu(n),s=b.d;n.k();){r=n.gt()
if(r.b!==s.q(0,r.a))return!1}for(n=a.e.gC(),n=n.gu(n),s=b.e;n.k();){r=n.gt()
if(r.b!==s.q(0,r.a))return!1}for(n=a.f.gC(),n=n.gu(n),s=b.f;n.k();){r=n.gt()
if(r.b!==s.q(0,r.a))return!1}for(n=a.c,s=n.length,r=b.c,q=r.length,p=0;p<s;++p){o=n[p]
if(!(p<q))return A.l(r,p)
if(!A.iX(o,r[p]))return!1}for(n=a.w,s=n.length,r=b.w,q=r.length,p=0;p<s;++p){o=n[p]
if(!(p<q))return A.l(r,p)
if(o!==r[p])return!1}return!0},
kC(a,b){if(a==null?b==null:a===b)return!0
return!1},
nD(a){var s=A.aT("^[A-Za-z_][A-Za-z0-9_]*$",!0)
if(!s.b.test(a))throw A.i(A.N(a,"id","Invalid signal identifier."))},
V:function V(){},
a4:function a4(a){this.a=a},
b8:function b8(){},
cs:function cs(){},
ap:function ap(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aS:function aS(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
im:function im(a){this.a=a},
io:function io(){},
ji(a,b,c){if(a.I(b)&&!J.ax(a.q(0,b),c))throw A.i(A.v('Conflicting initial values for signal "'+b+'".'))
a.n(0,b,c)},
bj(a){var s=A.F(a,"&","&amp;")
s=A.F(s,"<","&lt;")
return A.F(s,">","&gt;")},
dB:function dB(){},
jT(a){if(a.d)return
$.bw.j(0,a)
A.j6()},
j6(){if($.bw.a===0||$.j5||$.eQ)return
$.j5=!0
A.o6(A.o7())},
lO(){var s,r,q,p,o,n,m,l,k,j,i
$.j5=!1
m=$.eQ
if(m){A.j6()
return}$.eQ=!0
s=null
r=null
try{for(m=$.bw.$ti.c;$.bw.a!==0;){l=A.bs($.bw,m)
l.$flags=1
q=l
$.bw.M(0)
for(l=q,k=l.length,j=0;j<l.length;l.length===k||(0,A.bN)(l),++j){p=l[j]
try{p.b3()}catch(i){o=A.bP(i)
n=A.e5(i)
if(s==null)s=o
if(r==null)r=n}}}}finally{$.eQ=!1
A.j6()}if(s!=null){m=s
l=r
l.toString
A.d4(m,l)}},
lP(a,b,c){var s
B.d.j($.aH,a)
try{s=b.$0()
return s}finally{if(0>=$.aH.length)return A.l($.aH,-1)
$.aH.pop()}},
bx(a,b){var s,r,q=$.aI.length
if(q===0)r=null
else{if(0>=q)return A.l($.aI,-1)
r=$.aI.pop()}s=r
try{q=a.$0()
return q}finally{if(s!=null)B.d.j($.aI,s)}},
bK(a){var s,r,q=new A.bC(a,A.a8(t.af))
try{q.b3()}catch(s){q.J()
throw s}r=q.ga3()
if($.aH.length!==0)B.d.j(B.d.gW($.aH),r)
return q.ga3()},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=!1},
aP:function aP(){},
e9:function e9(a){this.a=a},
nH(a,b){return A.bK(new A.fO(a,b))},
kU(a,b,c){var s=A.mL(c)
if(A.b0(a.getAttribute(b))==s)return
if(s==null)a.removeAttribute(b)
else a.setAttribute(b,s)},
kM(a,b,c){return A.bK(new A.fM(a,b,c))},
kN(a,b){return A.bK(new A.fN(b,a))},
mL(a){var s
if(a==null||J.ax(a,!1))return null
s=J.aC(a)
return s.T(a,!0)?"":s.l(a)},
fO:function fO(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a,b){this.a=a
this.b=b},
e6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d='Conflicting generated stylesheet "',c={},b=A.e([],t.s)
try{for(l=A.kQ(a),k=l.length,j=v.G,i=0;i<k;++i){s=l[i]
r=A.kT(s)
q=$.fL.q(0,r)
if(q==null){p=A.B(A.q(j.document).getElementById(r))
o=null
n=null
if(p!=null){h=!0
if(A.av(p.hasAttribute("data-sparrow-stylesheet"))){h=A.b0(p.textContent)
g=s
g=h==null?g!=null:h!==g
h=g}if(h){l=A.v(d+A.x(r)+'".')
throw A.i(l)}o=p
n=!1}else{m=A.B(A.q(j.document).head)
if(m==null){l=A.v("The document has no head element.")
throw A.i(l)}f=A.q(A.q(j.document).createElement("style"))
f.id=r
f.setAttribute("data-sparrow-stylesheet","")
f.textContent=s
o=f
A.q(m.appendChild(o))
n=!0}q=new A.dZ(o,A.av(n))
$.fL.n(0,r,q)}else{h=A.b0(q.a.textContent)
g=s
if(h==null?g!=null:h!==g){l=A.v(d+A.x(r)+'".')
throw A.i(l)}}++q.c
J.e7(b,r)}}catch(e){A.kz(b)
throw e}c.a=!1
return new A.ix(c,b)},
kz(a){var s,r,q,p
for(s=A.H(a).h("E<1>"),r=new A.E(a,s),r=new A.A(r,r.gm(0),s.h("A<u.E>")),s=s.h("u.E");r.k();){q=r.d
if(q==null)q=s.a(q)
p=$.fL.q(0,q)
if(p==null)continue
if(--p.c!==0)continue
if(p.b)p.a.remove()
$.fL.a0(0,q)}},
ix:function ix(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b
this.c=0},
kJ(a,b){var s,r,q,p,o,n,m,l,k,j=new A.dB().cE(new A.dT(a),null,"sparrow-fragment"),i=A.B(A.q(A.q(new v.G.DOMParser()).parseFromString(j,"text/html")).getElementById("sparrow-fragment"))
if(i==null)throw A.i(A.v("Could not render a markup fragment."))
s=A.e([],t.eO)
try{r=A.B(i.firstChild)
while(r!=null){q=A.B(r.nextSibling)
p=A.q(r.cloneNode(!0))
A.q(b.appendChild(p))
J.e7(s,p)
r=q}}catch(n){for(m=s,l=A.H(m).h("E<1>"),m=new A.E(m,l),m=new A.A(m,m.gm(0),l.h("A<u.E>")),l=l.h("u.E");m.k();){k=m.d
o=k==null?l.a(k):k
k=A.B(o.parentNode)
if(k!=null)A.q(k.removeChild(o))}throw n}},
dT:function dT(a){this.a=a},
d1:function d1(a){this.a=a
this.b=null
this.c=!1},
el:function el(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ek:function ek(a){this.a=a},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){this.a=a
this.b=b},
ea:function ea(a){this.a=a},
eb:function eb(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
ee:function ee(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
b(a,b){return new A.aX(a,b)},
aK(a,b){return new A.cp(A.k(a,t.g),b)},
h(a,b,c,d,e,f,g,h){A.L(h,"width")
A.L(e,"height")
A.L(f,"padding")
A.L(null,"margin")
A.L(c,"borderRadius")
if(b!=null&&B.b.H(b,";"))A.Q(A.N(b,"backgroundColor",u.c))
return new A.bW(d,g,h,e,f,b,c,a)},
d(a,b){A.nz(b,"padding",!1)
return new A.ck(a,b)},
d5(a){return new A.c_(a)},
f(a,b,c){A.L(c,"width")
A.L(b,"height")
return new A.ct(c,b,a)},
aB(a,b,c,d,e,f){var s=A.k(b,t.g)
A.L(f,"spacing")
A.L(e,"runSpacing")
return new A.cx(s,f,e,a,d,c)},
dx(a,b){var s=[]
s.push(a)
B.d.V(s,B.a_)
s=A.k(s,t.g)
if(s.length!==1)A.Q(A.ab("A scroll view must have one child or a child list."))
return new A.cr(s,!1)},
iZ(a,b,c,d,e){A.L(e,"thickness")
A.L(c,"height")
A.L(d,"indent")
A.L(b,"endIndent")
if(B.b.H(a,";"))A.Q(A.N(a,"color",u.c))
return new A.bY(a,e,c,d,b)},
an(a,b,c,d,e){var s=A.k(a,t.g)
if(b<1)A.Q(A.N(b,"columns","Must be at least one column."))
A.L(c,"gap")
A.L(null,"rowGap")
A.L(null,"columnGap")
A.nA(d)
A.nB(e,"gap",!1)
return new A.c0(s,b,c,d,e)},
oc(a){var s=t.N,r=new A.fn(A.j(s,s)),q=r.Z(a),p=r.gY()
if(p==null)return q
if(!(q instanceof A.ap))throw A.i(A.v("A UI tree must lower to an HTML element."))
s=A.bs(q.w,s)
s.push(p)
return A.W(q.a,q.b,q.f,q.c,q.d,s,q.e,null)},
nj(a,b){var s,r,q,p,o,n,m,l=new A.a2("")
for(s=a+"{",r=0;r<3;++r){q=B.D[r]
p=b.q(0,q)
if(p==null)continue
o=s+p+";}"
n=q.c
m=l.a
l.a=(n==null?l.a=m+o:l.a=m+("@media (min-width: "+A.x(n)+"px){"+o+"}"))+"\n"}s=l.a
return B.b.cL(s.charCodeAt(0)==0?s:s)},
mZ(a,b){return A.fF(a.a,b)+" "+A.fF(a.b,b)+" "+A.fF(a.c,b)+" "+A.fF(a.d,b)},
mY(a,b,c,d){var s
A.L(c,"value")
s=A.aa(c)
return"display:grid;grid-template-columns:"+("repeat("+b+",minmax(0,1fr))")+";"+("gap:"+(s+"px"))},
cS(a,b){var s=A.dg(a,t.N,t.X)
if(b.length!==0)s.n(0,"style",A.fG(a.q(0,"style"),b))
return s},
ni(a,b){if(a.gG().aK(0,new A.fJ()))throw A.i(A.ab(b+" responsive values manage their own inline styles."))},
ky(a,b){if(a.gG().aK(0,new A.fI()))throw A.i(A.ab(b+" uses the reserved data-sparrow-layout attribute."))},
ks(a,b,c,d){A.L(c,"gap")
A.L(c,"value")
return"display:flex;flex-direction:"+b+";gap:"+(A.aa(c)+"px")+";justify-content:flex-start;align-items:"+a.c+";min-width:0;min-height:0"},
fG(a,b){var s,r=a==null
if(!r&&typeof a!="string")throw A.i(A.N(a,"style","Layout styles must be static strings."))
A.b0(a)
s=r?null:B.b.bn(a)
if(s==null)s=""
if(s.length===0)return b
return s+";"+b},
fF(a,b){A.kH(a,"value")
return A.aa(a)+"px"},
aa(a){if(a===0)return"0"
return a===B.l.cH(a)?B.l.l(B.l.cK(a)):B.l.l(a)},
nz(a,b,c){var s,r,q,p,o
for(s=A.a(["top",a.a,"right",a.b,"bottom",a.c,"left",a.d],t.N,t.i),s=new A.a6(s,A.z(s).h("a6<1,2>")).gu(0),r=b+".";s.k();){q=s.d
p=q.b
o=r+q.a
if(!isFinite(p))A.Q(A.N(p,o,"Must be a finite CSS length."))
if(p<0)throw A.i(A.N(p,o,"Must be a non-negative value."))}},
nB(a,b,c){var s,r,q,p,o,n,m=A.j(t.b,t.i)
m.n(0,B.v,a.a)
s=a.b
if(s!=null)m.n(0,B.u,s)
r=a.c
if(r!=null)m.n(0,B.t,r)
m=new A.a6(m,m.$ti.h("a6<1,2>")).gu(0)
q=b+"."
while(m.k()){p=m.d
o=p.b
n=q+p.a.b
if(!isFinite(o))A.Q(A.N(o,n,"Must be a finite CSS length."))
if(o<0)throw A.i(A.N(o,n,"Must be a non-negative value."))}},
nA(a){var s,r,q,p,o,n=A.j(t.b,t.S)
n.n(0,B.v,a.a)
s=a.b
if(s!=null)n.n(0,B.u,s)
r=a.c
if(r!=null)n.n(0,B.t,r)
n=new A.a6(n,n.$ti.h("a6<1,2>")).gu(0)
while(n.k()){q=n.d
p=q.b
o=q.a
if(p<1)A.Q(A.N(p,"columns."+o.b,"Must be at least one column."))}},
kH(a,b){if(a!=null&&!isFinite(a))throw A.i(A.N(a,b,"Must be a finite CSS length."))},
L(a,b){A.kH(a,b)},
eL:function eL(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c){this.c=a
this.a=b
this.b=c},
U:function U(){},
aX:function aX(a,b){this.a=a
this.f=b},
o:function o(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b9:function b9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cp:function cp(a,b){this.a=a
this.d=b},
m:function m(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
bW:function bW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h},
c:function c(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ck:function ck(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cr:function cr(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c0:function c0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
aU:function aU(a,b,c){this.c=a
this.a=b
this.b=c},
au:function au(a){this.a=a},
cJ:function cJ(a,b){this.a=a
this.b=b},
fn:function fn(a){this.a=a},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
fq:function fq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
fr:function fr(a){this.a=a},
fs:function fs(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fI:function fI(){},
o2(){var s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.B(A.q(h.document).getElementById("__FRAMEWORK_STATE__"))
if(!t.m.b(g))A.Q(A.v("Serialized framework state was not found."))
s=A.b0(g.textContent)
r=B.w.cc(s==null?"":s,null)
if(!t.a.b(r))A.Q(A.a0("Serialized framework state must be a JSON object.",null,null))
s=t.N
q=t.X
p=new A.eE(A.b4(A.jO(r,s,q),s,q),A.j(s,t.bS))
o=A.dM()
n=A.lS(new A.iK(),A.e([new A.as(A.du(A.e3("/")),new A.iL(p,o),new A.iM()),new A.as(A.du(A.e3("/services")),new A.iO(p,o),new A.iP()),new A.as(A.du(A.e3("/solutions")),new A.iQ(p,o),new A.iR()),new A.as(A.du(A.e3("/about")),new A.iS(p,o),new A.iT()),new A.as(A.du(A.e3("/contact")),new A.iU(p,o),new A.iV())],t.d3))
o.saj(A.lT(n))
s=o.B()
q=A.e([],t.u)
m=t.A
l=A.e([],m)
m=A.e([],m)
A.k(B.Y,t.K)
k=new A.co(s,n,!0,!1,q,l,m)
if(s.a!==n.b)A.Q(A.ab("Create the router with Router.fromCatalog(catalog) to share routes."))
j=A.B(A.q(h.document).querySelector("#app"))
if(j==null)A.Q(A.v('No element found for selector "#app".'))
s=A.B(j.firstChild)
if(s!=null)k.CW=j
k.bt(j)
i=A.dM()
i.saj(A.aw(new A.iN(i,k,o)))
s=A.q(h.window)
s.addEventListener("pagehide",i.B())
s.addEventListener("beforeunload",i.B())
h=A.B(A.q(h.document).body)
if(h!=null)h.setAttribute("data-sparrow-hydrated","true")},
iL:function iL(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
iM:function iM(){},
iO:function iO(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iC:function iC(a){this.a=a},
iP:function iP(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iR:function iR(){},
iS:function iS(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
iA:function iA(a){this.a=a},
iT:function iT(){},
iU:function iU(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iz:function iz(a){this.a=a},
iV:function iV(){},
iK:function iK(){},
iJ:function iJ(){},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
nI(a,b,c){return new A.h8(a,b).$0()},
nJ(a,b,c){return new A.hr(a,b).$0()},
nK(a,b,c){return new A.hK(a,b).$0()},
nL(a,b,c){return new A.i1(a,b).$0()},
nM(a,b,c){return new A.il(a,b).$0()},
h8:function h8(a,b){this.a=a
this.b=b},
fP:function fP(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
fV:function fV(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
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
hB:function hB(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
hL:function hL(a){this.a=a},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
i2:function i2(a){this.a=a},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
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
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
kZ(a){return v.mangledGlobalNames[a]},
aw(a){var s
if(typeof a=="function")throw A.i(A.ab("Attempting to rewrap a JS function."))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.mN,a)
s[$.ju()]=a
return s},
mN(a,b,c){t.Z.a(a)
if(A.bi(c)>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.j0.prototype={}
J.d9.prototype={
T(a,b){return a===b},
gD(a){return A.ds(a)},
l(a){return"Instance of '"+A.dt(a)+"'"},
gE(a){return A.b1(A.jj(this))}}
J.db.prototype={
l(a){return String(a)},
gD(a){return a?519018:218159},
gE(a){return A.b1(t.y)},
$iI:1,
$iah:1}
J.c4.prototype={
T(a,b){return null==b},
l(a){return"null"},
gD(a){return 0},
$iI:1}
J.c7.prototype={$iM:1}
J.aR.prototype={
gD(a){return 0},
l(a){return String(a)}}
J.dr.prototype={}
J.bz.prototype={}
J.aQ.prototype={
l(a){var s=a[$.l0()]
if(s==null)s=a[$.ju()]
if(s==null)return this.bu(a)
return"JavaScript function for "+J.aE(s)},
$ib5:1}
J.c6.prototype={
gD(a){return 0},
l(a){return String(a)}}
J.c8.prototype={
gD(a){return 0},
l(a){return String(a)}}
J.J.prototype={
j(a,b){A.H(a).c.a(b)
a.$flags&1&&A.al(a,29)
a.push(b)},
V(a,b){A.H(a).h("p<1>").a(b)
a.$flags&1&&A.al(a,"addAll",2)
this.bA(a,b)
return},
bA(a,b){var s,r
t.p.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.i(A.az(a))
for(r=0;r<s;++r)a.push(b[r])},
M(a){a.$flags&1&&A.al(a,"clear","clear")
a.length=0},
R(a,b){var s,r=A.j2(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.n(r,s,A.x(a[s]))
return r.join(b)},
ck(a,b,c,d){var s,r,q
d.a(b)
A.H(a).L(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.i(A.az(a))}return r},
O(a,b){if(!(b>=0&&b<a.length))return A.l(a,b)
return a[b]},
gW(a){var s=a.length
if(s>0)return a[s-1]
throw A.i(A.lA())},
H(a,b){var s
for(s=0;s<a.length;++s)if(J.ax(a[s],b))return!0
return!1},
gbh(a){return a.length!==0},
l(a){return A.j_(a,"[","]")},
gu(a){return new J.b2(a,a.length,A.H(a).h("b2<1>"))},
gD(a){return A.ds(a)},
gm(a){return a.length},
q(a,b){if(!(b>=0&&b<a.length))throw A.i(A.iq(a,b))
return a[b]},
n(a,b,c){var s
A.H(a).c.a(c)
a.$flags&2&&A.al(a)
s=a.length
if(b>=s)throw A.i(A.iq(a,b))
a[b]=c},
$it:1,
$ip:1,
$iw:1}
J.da.prototype={
cM(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.dt(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.eF.prototype={}
J.b2.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.bN(q)
throw A.i(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iR:1}
J.c5.prototype={
cK(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.i(A.bb(""+a+".toInt()"))},
cH(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bm(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.i(A.ae(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.l(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.Q(A.bb("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.l(p,1)
s=p[1]
if(3>=r)return A.l(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.aP("0",o)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a5(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
c6(a,b){return(a|0)===a?a/b|0:this.c7(a,b)},
c7(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.i(A.bb("Result of truncating division is "+A.x(s)+": "+A.x(a)+" ~/ "+b))},
aF(a,b){var s
if(a>0)s=this.b4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
c4(a,b){if(0>b)throw A.i(A.kK(b))
return this.b4(a,b)},
b4(a,b){return b>31?0:a>>>b},
gE(a){return A.b1(t.n)},
$iC:1,
$ibn:1}
J.c3.prototype={
gE(a){return A.b1(t.S)},
$iI:1,
$in:1}
J.dc.prototype={
gE(a){return A.b1(t.i)},
$iI:1}
J.b6.prototype={
b8(a,b){return new A.dX(b,a,0)},
cg(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.F(a,r-s)},
bs(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.br){s=b.e
s=!(s==null?b.e=b.bC():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.bL(a,b)}},
a1(a,b,c,d){var s=A.cm(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
bL(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.jw(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gt()
o=p.gap()
n=p.gai()
q=n-o
if(q===0&&r===o)continue
B.d.j(m,this.p(a,r,o))
r=n}if(r<a.length||q>0)B.d.j(m,this.F(a,r))
return m},
A(a,b,c){var s
if(c<0||c>a.length)throw A.i(A.ae(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
v(a,b){return this.A(a,b,0)},
p(a,b,c){return a.substring(b,A.cm(b,c,a.length))},
F(a,b){return this.p(a,b,null)},
bn(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.l(p,0)
if(p.charCodeAt(0)===133){s=J.lE(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.l(p,r)
q=p.charCodeAt(r)===133?J.jI(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
cL(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.l(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.jI(r,s))},
aP(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.i(B.Q)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
am(a,b,c){var s
if(c<0||c>a.length)throw A.i(A.ae(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
be(a,b){return this.am(a,b,0)},
bi(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.i(A.ae(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
co(a,b){return this.bi(a,b,null)},
H(a,b){return A.o8(a,b,0)},
l(a){return a},
gD(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gE(a){return A.b1(t.N)},
gm(a){return a.length},
$iI:1,
$ieP:1,
$ir:1}
A.aA.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.bq.prototype={
gm(a){return this.a.length},
q(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.l(s,b)
return s.charCodeAt(b)}}
A.t.prototype={}
A.u.prototype={
gu(a){var s=this
return new A.A(s,s.gm(s),A.z(s).h("A<u.E>"))},
gU(a){return this.gm(this)===0},
aK(a,b){var s,r,q=this
A.z(q).h("ah(u.E)").a(b)
s=q.gm(q)
for(r=0;r<s;++r){if(b.$1(q.O(0,r)))return!0
if(s!==q.gm(q))throw A.i(A.az(q))}return!1},
bj(a,b,c){var s=A.z(this)
return new A.a1(this,s.L(c).h("1(u.E)").a(b),s.h("@<u.E>").L(c).h("a1<1,2>"))}}
A.A.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.e4(q),o=p.gm(q)
if(r.b!==o)throw A.i(A.az(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.O(q,s);++r.c
return!0},
$iR:1}
A.b7.prototype={
gu(a){return new A.cd(J.aN(this.a),this.b,A.z(this).h("cd<1,2>"))},
gm(a){return J.bQ(this.a)}}
A.bZ.prototype={$it:1}
A.cd.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iR:1}
A.a1.prototype={
gm(a){return J.bQ(this.a)},
O(a,b){return this.b.$1(J.lj(this.a,b))}}
A.bc.prototype={
gu(a){return new A.bd(J.aN(this.a),this.b,this.$ti.h("bd<1>"))}}
A.bd.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$iR:1}
A.a5.prototype={}
A.ba.prototype={
n(a,b,c){A.z(this).h("ba.E").a(c)
throw A.i(A.bb("Cannot modify an unmodifiable list"))}}
A.bA.prototype={}
A.E.prototype={
gm(a){return J.bQ(this.a)},
O(a,b){var s=this.a,r=J.e4(s)
return r.O(s,r.gm(s)-1-b)}}
A.bT.prototype={}
A.bS.prototype={
gU(a){return this.gm(this)===0},
l(a){return A.j4(this)},
n(a,b,c){var s=A.z(this)
s.c.a(b)
s.y[1].a(c)
A.ls()},
gC(){return new A.bD(this.ci(),A.z(this).h("bD<a9<1,2>>"))},
ci(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gC(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gG(),o=o.gu(o),n=A.z(s),m=n.y[1],n=n.h("a9<1,2>")
case 2:if(!o.k()){r=3
break}l=o.gt()
k=s.q(0,l)
r=4
return a.b=new A.a9(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iS:1}
A.Z.prototype={
gm(a){return this.b.length},
gaX(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
q(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
P(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gaX()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gG(){return new A.be(this.gaX(),this.$ti.h("be<1>"))},
ga4(){return new A.be(this.b,this.$ti.h("be<2>"))}}
A.be.prototype={
gm(a){return this.a.length},
gu(a){var s=this.a
return new A.bf(s,s.length,this.$ti.h("bf<1>"))}}
A.bf.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iR:1}
A.bU.prototype={
j(a,b){A.z(this).c.a(b)
A.lt()}}
A.bV.prototype={
gm(a){return this.b},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.bf(s,s.length,r.$ti.h("bf<1>"))},
H(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cq.prototype={}
A.f0.prototype={
S(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cj.prototype={
l(a){return"Null check operator used on a null value"}}
A.dd.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dE.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.eO.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cG.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ijV:1}
A.aO.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.l_(r==null?"unknown":r)+"'"},
$ib5:1,
gcP(){return this},
$C:"$1",
$R:1,
$D:null}
A.cY.prototype={$C:"$0",$R:0}
A.cZ.prototype={$C:"$2",$R:2}
A.dC.prototype={}
A.dz.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.l_(s)+"'"}}
A.bp.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bp))return!1
return this.$_target===b.$_target&&this.a===b.a},
gD(a){return(A.o4(this.a)^A.ds(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.dt(this.a)+"'")}}
A.dw.prototype={
l(a){return"RuntimeError: "+this.a}}
A.aG.prototype={
gm(a){return this.a},
gU(a){return this.a===0},
gG(){return new A.ao(this,A.z(this).h("ao<1>"))},
ga4(){return new A.a7(this,A.z(this).h("a7<2>"))},
gC(){return new A.a6(this,A.z(this).h("a6<1,2>"))},
I(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
V(a,b){A.z(this).h("S<1,2>").a(b).P(0,new A.eG(this))},
q(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cl(b)},
cl(a){var s,r,q=this.d
if(q==null)return null
s=this.bQ(q,a)
r=this.bg(s,a)
if(r<0)return null
return s[r].b},
n(a,b,c){var s,r,q=this,p=A.z(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.aQ(s==null?q.b=q.aD():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.aQ(r==null?q.c=q.aD():r,b,c)}else q.cm(b,c)},
cm(a,b){var s,r,q,p,o=this,n=A.z(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.aD()
r=o.bf(a)
q=s[r]
if(q==null)s[r]=[o.aE(a,b)]
else{p=o.bg(q,a)
if(p>=0)q[p].b=b
else q.push(o.aE(a,b))}},
cC(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.I(a)){s=q.q(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.n(0,a,r)
return r},
a0(a,b){var s=this.bx(this.b,b)
return s},
M(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aC()}},
P(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.i(A.az(q))
s=s.c}},
aQ(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aE(b,c)
else s.b=c},
bx(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.by(s)
delete a[b]
return s.b},
aC(){this.r=this.r+1&1073741823},
aE(a,b){var s=this,r=A.z(s),q=new A.eJ(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.aC()
return q},
by(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.aC()},
bf(a){return J.cU(a)&1073741823},
bQ(a,b){return a[this.bf(b)]},
bg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1},
l(a){return A.j4(this)},
aD(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijM:1}
A.eG.prototype={
$2(a,b){var s=this.a,r=A.z(s)
s.n(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.z(this.a).h("~(1,2)")}}
A.eJ.prototype={}
A.ao.prototype={
gm(a){return this.a.a},
gU(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cb(s,s.r,s.e,this.$ti.h("cb<1>"))},
H(a,b){return this.a.I(b)}}
A.cb.prototype={
gt(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.i(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iR:1}
A.a7.prototype={
gm(a){return this.a.a},
gu(a){var s=this.a
return new A.cc(s,s.r,s.e,this.$ti.h("cc<1>"))}}
A.cc.prototype={
gt(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.i(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iR:1}
A.a6.prototype={
gm(a){return this.a.a},
gu(a){var s=this.a
return new A.ca(s,s.r,s.e,this.$ti.h("ca<1,2>"))}}
A.ca.prototype={
gt(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.i(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.a9(s.a,s.b,r.$ti.h("a9<1,2>"))
r.c=s.c
return!0}},
$iR:1}
A.iu.prototype={
$1(a){return this.a(a)},
$S:13}
A.iv.prototype={
$2(a,b){return this.a(a,b)},
$S:19}
A.iw.prototype={
$1(a){return this.a(A.y(a))},
$S:14}
A.br.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gaZ(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.jJ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
bC(){var s,r=this.a
if(!B.b.H(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
b8(a,b){return new A.dJ(this,b,0)},
bO(a,b){var s,r=this.gaZ()
if(r==null)r=A.e2(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.dU(s)},
$ieP:1,
$ilQ:1}
A.dU.prototype={
gap(){return this.b.index},
gai(){var s=this.b
return s.index+s[0].length},
$ibu:1,
$icn:1}
A.dJ.prototype={
gu(a){return new A.dK(this.a,this.b,this.c)}}
A.dK.prototype={
gt(){var s=this.d
return s==null?t.cz.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bO(l,s)
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
$iR:1}
A.dA.prototype={
gai(){return this.a+this.c.length},
$ibu:1,
gap(){return this.a}}
A.dX.prototype={
gu(a){return new A.dY(this.a,this.b,this.c)}}
A.dY.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dA(s,o)
q.c=r===q.c?r+1:r
return!0},
gt(){var s=this.d
s.toString
return s},
$iR:1}
A.fb.prototype={
B(){var s=this.b
if(s===this)throw A.i(new A.aA("Local '' has not been initialized."))
return s},
saj(a){if(this.b!==this)throw A.i(new A.aA("Local '' has already been initialized."))
this.b=a}}
A.bv.prototype={
gE(a){return B.ab},
$iI:1}
A.cg.prototype={
bT(a,b,c,d){var s=A.ae(b,0,c,d,null)
throw A.i(s)},
aS(a,b,c,d){if(b>>>0!==b||b>c)this.bT(a,b,c,d)}}
A.dh.prototype={
gE(a){return B.ac},
$iI:1}
A.a3.prototype={
gm(a){return a.length},
$iac:1}
A.ce.prototype={
q(a,b){A.aM(b,a,a.length)
return a[b]},
n(a,b,c){A.kp(c)
a.$flags&2&&A.al(a)
A.aM(b,a,a.length)
a[b]=c},
$it:1,
$ip:1,
$iw:1}
A.cf.prototype={
n(a,b,c){A.bi(c)
a.$flags&2&&A.al(a)
A.aM(b,a,a.length)
a[b]=c},
br(a,b,c,d,e){var s,r,q
t.D.a(d)
a.$flags&2&&A.al(a,5)
s=a.length
this.aS(a,b,s,"start")
this.aS(a,c,s,"end")
if(b>c)A.Q(A.ae(b,0,c,null,null))
r=c-b
if(e<0)A.Q(A.ab(e))
if(16-e<r)A.Q(A.v("Not enough elements"))
q=e!==0||16!==r?d.subarray(e,e+r):d
a.set(q,b)
return},
$it:1,
$ip:1,
$iw:1}
A.di.prototype={
gE(a){return B.ad},
$iI:1}
A.dj.prototype={
gE(a){return B.ae},
$iI:1}
A.dk.prototype={
gE(a){return B.af},
q(a,b){A.aM(b,a,a.length)
return a[b]},
$iI:1}
A.dl.prototype={
gE(a){return B.ag},
q(a,b){A.aM(b,a,a.length)
return a[b]},
$iI:1}
A.dm.prototype={
gE(a){return B.ah},
q(a,b){A.aM(b,a,a.length)
return a[b]},
$iI:1}
A.dn.prototype={
gE(a){return B.ai},
q(a,b){A.aM(b,a,a.length)
return a[b]},
$iI:1}
A.dp.prototype={
gE(a){return B.aj},
q(a,b){A.aM(b,a,a.length)
return a[b]},
$iI:1}
A.ch.prototype={
gE(a){return B.ak},
gm(a){return a.length},
q(a,b){A.aM(b,a,a.length)
return a[b]},
$iI:1}
A.ci.prototype={
gE(a){return B.al},
gm(a){return a.length},
q(a,b){A.aM(b,a,a.length)
return a[b]},
$iI:1,
$ij9:1}
A.cB.prototype={}
A.cC.prototype={}
A.cD.prototype={}
A.cE.prototype={}
A.at.prototype={
h(a){return A.fy(v.typeUniverse,this,a)},
L(a){return A.mo(v.typeUniverse,this,a)}}
A.dP.prototype={}
A.fm.prototype={
l(a){return A.af(this.a,null)}}
A.dO.prototype={
l(a){return this.a}}
A.cI.prototype={}
A.f8.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:20}
A.f7.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:21}
A.f9.prototype={
$0(){this.a.$0()},
$S:15}
A.fa.prototype={
$0(){this.a.$0()},
$S:15}
A.fk.prototype={
bw(a,b){if(self.setTimeout!=null)self.setTimeout(A.ip(new A.fl(this,b),0),a)
else throw A.i(A.bb("`setTimeout()` not found."))}}
A.fl.prototype={
$0(){this.b.$0()},
$S:1}
A.cH.prototype={
gt(){var s=this.b
return s==null?this.$ti.c.a(s):s},
c3(a,b){var s,r,q
a=A.bi(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
k(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.k()){o.b=s.gt()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.c3(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.k9
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
o.a=A.k9
throw n
return!1}if(0>=p.length)return A.l(p,-1)
o.a=p.pop()
m=1
continue}throw A.i(A.v("sync*"))}return!1},
cQ(a){var s,r,q=this
if(a instanceof A.bD){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.d.j(r,q.a)
q.a=s
return 2}else{q.d=J.aN(a)
return 2}},
$iR:1}
A.bD.prototype={
gu(a){return new A.cH(this.a(),this.$ti.h("cH<1>"))}}
A.dL.prototype={}
A.e1.prototype={$ik2:1}
A.dW.prototype={
cJ(a){var s,r,q
t.M.a(a)
try{if(B.o===$.dI){a.$0()
return}A.nl(null,null,this,a,t.H)}catch(q){s=A.bP(q)
r=A.e5(q)
A.nk(A.e2(s),t.l.a(r))}},
b9(a){return new A.fj(this,t.M.a(a))}}
A.fj.prototype={
$0(){return this.a.cJ(this.b)},
$S:1}
A.fK.prototype={
$0(){A.d4(this.a,this.b)},
$S:1}
A.cy.prototype={
gu(a){var s=this,r=new A.bg(s,s.r,s.$ti.h("bg<1>"))
r.c=s.e
return r},
gm(a){return this.a},
H(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.R.a(s[b])!=null}else{r=this.bE(b)
return r}},
bE(a){var s=this.d
if(s==null)return!1
return this.aB(s[B.b.gD(a)&1073741823],a)>=0},
j(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aT(s==null?q.b=A.jb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aT(r==null?q.c=A.jb():r,b)}else return q.bz(b)},
bz(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.jb()
r=J.cU(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.av(a)]
else{if(p.aB(q,a)>=0)return!1
q.push(p.av(a))}return!0},
a0(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.b1(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.b1(s.c,b)
else return s.bY(b)},
bY(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.cU(a)&1073741823
r=o[s]
q=this.aB(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.b7(p)
return!0},
M(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.au()}},
aT(a,b){this.$ti.c.a(b)
if(t.R.a(a[b])!=null)return!1
a[b]=this.av(b)
return!0},
b1(a,b){var s
if(a==null)return!1
s=t.R.a(a[b])
if(s==null)return!1
this.b7(s)
delete a[b]
return!0},
au(){this.r=this.r+1&1073741823},
av(a){var s,r=this,q=new A.dS(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.au()
return q},
b7(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.au()},
aB(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1}}
A.dS.prototype={}
A.bg.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.i(A.az(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iR:1}
A.eK.prototype={
$2(a,b){this.a.n(0,this.b.a(a),this.c.a(b))},
$S:22}
A.G.prototype={
gu(a){return new A.A(a,this.gm(a),A.bL(a).h("A<G.E>"))},
O(a,b){return this.q(a,b)},
gbh(a){return this.gm(a)!==0},
cj(a,b,c,d){var s
A.bL(a).h("G.E?").a(d)
A.cm(b,c,this.gm(a))
for(s=b;s<c;++s)this.n(a,s,d)},
l(a){return A.j_(a,"[","]")},
$it:1,
$ip:1,
$iw:1}
A.T.prototype={
P(a,b){var s,r,q,p=A.z(this)
p.h("~(T.K,T.V)").a(b)
for(s=this.gG(),s=s.gu(s),p=p.h("T.V");s.k();){r=s.gt()
q=this.q(0,r)
b.$2(r,q==null?p.a(q):q)}},
gC(){return this.gG().bj(0,new A.eM(this),A.z(this).h("a9<T.K,T.V>"))},
I(a){return this.gG().H(0,a)},
gm(a){var s=this.gG()
return s.gm(s)},
gU(a){var s=this.gG()
return s.gU(s)},
ga4(){return new A.cz(this,A.z(this).h("cz<T.K,T.V>"))},
l(a){return A.j4(this)},
$iS:1}
A.eM.prototype={
$1(a){var s=this.a,r=A.z(s)
r.h("T.K").a(a)
s=s.q(0,a)
if(s==null)s=r.h("T.V").a(s)
return new A.a9(a,s,r.h("a9<T.K,T.V>"))},
$S(){return A.z(this.a).h("a9<T.K,T.V>(T.K)")}}
A.eN.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.x(a)
r.a=(r.a+=s)+": "
s=A.x(b)
r.a+=s},
$S:16}
A.cz.prototype={
gm(a){var s=this.a
return s.gm(s)},
gu(a){var s=this.a,r=s.gG()
return new A.cA(r.gu(r),s,this.$ti.h("cA<1,2>"))}}
A.cA.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.q(0,r.gt())
return!0}s.c=null
return!1},
gt(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iR:1}
A.cN.prototype={
n(a,b,c){var s=A.z(this)
s.c.a(b)
s.y[1].a(c)
throw A.i(A.bb("Cannot modify unmodifiable map"))}}
A.bt.prototype={
q(a,b){return this.a.q(0,b)},
n(a,b,c){var s=A.z(this)
this.a.n(0,s.c.a(b),s.y[1].a(c))},
I(a){return this.a.I(a)},
P(a,b){this.a.P(0,A.z(this).h("~(1,2)").a(b))},
gU(a){var s=this.a
return s.gU(s)},
gm(a){var s=this.a
return s.gm(s)},
gG(){return this.a.gG()},
l(a){return this.a.l(0)},
ga4(){return this.a.ga4()},
gC(){return this.a.gC()},
$iS:1}
A.aY.prototype={}
A.aW.prototype={
V(a,b){var s,r
A.z(this).h("p<1>").a(b)
for(s=J.aN(b.a),r=new A.bd(s,b.b,b.$ti.h("bd<1>"));r.k();)this.j(0,s.gt())},
l(a){return A.j_(this,"{","}")},
$it:1,
$ip:1,
$idy:1}
A.cF.prototype={}
A.bE.prototype={}
A.dQ.prototype={
q(a,b){var s,r=this.b
if(r==null)return this.c.q(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bV(b):s}},
gm(a){return this.b==null?this.c.a:this.a2().length},
gU(a){return this.gm(0)===0},
gG(){if(this.b==null){var s=this.c
return new A.ao(s,A.z(s).h("ao<1>"))}return new A.dR(this)},
ga4(){var s,r=this
if(r.b==null){s=r.c
return new A.a7(s,A.z(s).h("a7<2>"))}return A.jP(r.a2(),new A.ff(r),t.N,t.z)},
n(a,b,c){var s,r,q=this
if(q.b==null)q.c.n(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.c8().n(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
P(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.P(0,b)
s=o.a2()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.fE(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.i(A.az(o))}},
a2(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
c8(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.j(t.N,t.z)
r=n.a2()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.n(0,o,n.q(0,o))}if(p===0)B.d.j(r,"")
else B.d.M(r)
n.a=n.b=null
return n.c=s},
bV(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.fE(this.a[a])
return this.b[a]=s}}
A.ff.prototype={
$1(a){return this.a.q(0,A.y(a))},
$S:14}
A.dR.prototype={
gm(a){return this.a.gm(0)},
O(a,b){var s=this.a
if(s.b==null)s=s.gG().O(0,b)
else{s=s.a2()
if(!(b>=0&&b<s.length))return A.l(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gG()
s=s.gu(s)}else{s=s.a2()
s=new J.b2(s,s.length,A.H(s).h("b2<1>"))}return s},
H(a,b){return this.a.I(b)}}
A.fB.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:3}
A.fA.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:3}
A.cX.prototype={
cr(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.cm(a4,a5,a2)
s=$.lb()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.l(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.l(a3,k)
h=A.it(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.l(a3,g)
f=A.it(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.a2("")
g=o}else g=o
g.a+=B.b.p(a3,p,q)
c=A.P(j)
g.a+=c
p=k
continue}}throw A.i(A.a0("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.p(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.jx(a3,m,a5,n,l,r)
else{b=B.l.a5(r-1,4)+1
if(b===1)throw A.i(A.a0(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.a1(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.jx(a3,m,a5,n,l,a)
else{b=B.l.a5(a,4)
if(b===1)throw A.i(A.a0(a1,a3,a5))
if(b>1)a3=B.b.a1(a3,a5,a5,b===2?"==":"=")}return a3}}
A.e8.prototype={}
A.b3.prototype={}
A.d0.prototype={}
A.d2.prototype={}
A.c9.prototype={
l(a){var s=A.d3(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.df.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.de.prototype={
cc(a,b){var s=A.ng(a,this.gce().a)
return s},
ba(a,b){var s=A.m7(a,this.gcf().b,null)
return s},
gcf(){return B.X},
gce(){return B.W}}
A.eI.prototype={}
A.eH.prototype={}
A.fh.prototype={
bq(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.p(a,r,q)
r=q+1
o=A.P(92)
s.a+=o
o=A.P(117)
s.a+=o
o=A.P(100)
s.a+=o
o=p>>>8&15
o=A.P(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.P(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.P(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.p(a,r,q)
r=q+1
o=A.P(92)
s.a+=o
switch(p){case 8:o=A.P(98)
s.a+=o
break
case 9:o=A.P(116)
s.a+=o
break
case 10:o=A.P(110)
s.a+=o
break
case 12:o=A.P(102)
s.a+=o
break
case 13:o=A.P(114)
s.a+=o
break
default:o=A.P(117)
s.a+=o
o=A.P(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.P(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.P(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.p(a,r,q)
r=q+1
o=A.P(92)
s.a+=o
o=A.P(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.p(a,r,m)},
ar(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.i(new A.df(a,null))}B.d.j(s,a)},
ao(a){var s,r,q,p,o=this
if(o.bp(a))return
o.ar(a)
try{s=o.b.$1(a)
if(!o.bp(s)){q=A.jK(a,null,o.gb0())
throw A.i(q)}q=o.a
if(0>=q.length)return A.l(q,-1)
q.pop()}catch(p){r=A.bP(p)
q=A.jK(a,r,o.gb0())
throw A.i(q)}},
bp(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.T.l(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bq(a)
s.a+='"'
return!0}else if(t._.b(a)){q.ar(a)
q.cN(a)
s=q.a
if(0>=s.length)return A.l(s,-1)
s.pop()
return!0}else if(t.a.b(a)){q.ar(a)
r=q.cO(a)
s=q.a
if(0>=s.length)return A.l(s,-1)
s.pop()
return r}else return!1},
cN(a){var s,r,q=this.c
q.a+="["
s=J.e4(a)
if(s.gbh(a)){this.ao(s.q(a,0))
for(r=1;r<s.gm(a);++r){q.a+=","
this.ao(s.q(a,r))}}q.a+="]"},
cO(a){var s,r,q,p,o,n,m=this,l={}
if(a.gU(a)){m.c.a+="{}"
return!0}s=a.gm(a)*2
r=A.j2(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.P(0,new A.fi(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bq(A.y(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.l(r,n)
m.ao(r[n])}p.a+="}"
return!0}}
A.fi.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.d.n(s,r.a++,a)
B.d.n(s,r.a++,b)},
$S:16}
A.fg.prototype={
gb0(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dH.prototype={}
A.f6.prototype={
Z(a){var s,r,q,p,o=a.length,n=A.cm(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.fC(r)
if(q.bP(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.l(a,p)
q.aJ()}return new Uint8Array(r.subarray(0,A.mP(0,q.b,s)))}}
A.fC.prototype={
aJ(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.al(q)
s=q.length
if(!(p<s))return A.l(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.l(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.l(q,p)
q[p]=189},
ca(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.al(r)
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
return!0}else{n.aJ()
return!1}},
bP(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.l(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.l(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.al(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.l(a,m)
if(k.ca(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.aJ()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.al(s)
if(!(m<q))return A.l(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.al(s)
if(!(m<q))return A.l(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.l(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.l(s,m)
s[m]=n&63|128}}}return o}}
A.f5.prototype={
Z(a){return new A.fz(this.a).bH(t.Q.a(a),0,null,!0)}}
A.fz.prototype={
bH(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.Q.a(a)
s=A.cm(b,c,J.bQ(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.mE(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.mD(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.aw(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.mF(o)
l.b=0
throw A.i(A.a0(m,a,p+l.c))}return n},
aw(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.l.c6(b+c,2)
r=q.aw(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.aw(a,s,c,d)}return q.cd(a,b,c,d)},
cd(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.a2(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.l(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.l(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.l(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.P(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.P(h)
e.a+=p
break
case 65:p=A.P(h)
e.a+=p;--d
break
default:p=A.P(h)
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
p=A.P(a[l])
e.a+=p}else{p=A.jX(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.P(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.fc.prototype={
l(a){return this.ag()}}
A.O.prototype={}
A.cV.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.d3(s)
return"Assertion failed"}}
A.cv.prototype={}
A.ay.prototype={
gaA(){return"Invalid argument"+(!this.a?"(s)":"")},
gaz(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.x(p),n=s.gaA()+q+o
if(!s.a)return n
return n+s.gaz()+": "+A.d3(s.gaN())},
gaN(){return this.b}}
A.cl.prototype={
gaN(){return A.kq(this.b)},
gaA(){return"RangeError"},
gaz(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.x(q):""
else if(q==null)s=": Not greater than or equal to "+A.x(r)
else if(q>r)s=": Not in inclusive range "+A.x(r)+".."+A.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.x(r)
return s}}
A.d8.prototype={
gaN(){return A.bi(this.b)},
gaA(){return"RangeError"},
gaz(){if(A.bi(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.cw.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.dD.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.by.prototype={
l(a){return"Bad state: "+this.a}}
A.d_.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.d3(s)+"."}}
A.dq.prototype={
l(a){return"Out of Memory"},
$iO:1}
A.cu.prototype={
l(a){return"Stack Overflow"},
$iO:1}
A.fd.prototype={
l(a){return"Exception: "+this.a}}
A.aF.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.p(e,0,75)+"..."
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
k=""}return g+l+B.b.p(e,i,j)+k+"\n"+B.b.aP(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.x(f)+")"):g}}
A.p.prototype={
bj(a,b,c){var s=A.z(this)
return A.jP(this,s.L(c).h("1(p.E)").a(b),s.h("p.E"),c)},
R(a,b){var s,r,q=this.gu(this)
if(!q.k())return""
s=J.aE(q.gt())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.aE(q.gt())
while(q.k())}else{r=s
do r=r+b+J.aE(q.gt())
while(q.k())}return r.charCodeAt(0)==0?r:r},
aK(a,b){var s
A.z(this).h("ah(p.E)").a(b)
for(s=this.gu(this);s.k();)if(b.$1(s.gt()))return!0
return!1},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
O(a,b){var s,r
A.jS(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gt();--r}throw A.i(A.jG(b,b-r,this,"index"))},
l(a){return A.lB(this,"(",")")}}
A.a9.prototype={
l(a){return"MapEntry("+A.x(this.a)+": "+A.x(this.b)+")"}}
A.ad.prototype={
gD(a){return A.D.prototype.gD.call(this,0)},
l(a){return"null"}}
A.D.prototype={$iD:1,
T(a,b){return this===b},
gD(a){return A.ds(this)},
l(a){return"Instance of '"+A.dt(this)+"'"},
gE(a){return A.nT(this)},
toString(){return this.l(this)}}
A.a2.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ilV:1}
A.f4.prototype={
$2(a,b){var s,r,q,p
t.Y.a(a)
A.y(b)
s=B.b.be(b,"=")
if(s===-1){if(b!=="")a.n(0,A.e0(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.p(b,0,s)
q=B.b.F(b,s+1)
p=this.a
a.n(0,A.e0(r,0,r.length,p,!0),A.e0(q,0,q.length,p,!0))}return a},
$S:23}
A.f3.prototype={
$2(a,b){throw A.i(A.a0("Illegal IPv6 address, "+a,this.a,b))},
$S:24}
A.cO.prototype={
gb5(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.x(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gD(a){var s,r=this,q=r.y
if(q===$){s=B.b.gD(r.gb5())
r.y!==$&&A.kY()
r.y=s
q=s}return q},
gbk(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.k1(s==null?"":s)
r.z!==$&&A.kY()
q=r.z=new A.aY(s,t.h)}return q},
gaO(){return this.b},
gal(){var s=this.c
if(s==null)return""
if(B.b.v(s,"[")&&!B.b.A(s,"v",1))return B.b.p(s,1,s.length-1)
return s},
gac(){var s=this.d
return s==null?A.kf(this.a):s},
gX(){var s=this.f
return s==null?"":s},
ga_(){var s=this.r
return s==null?"":s},
cn(a){var s=this.a
if(a.length!==s.length)return!1
return A.mO(a,s,0)>=0},
bl(a){var s,r,q,p,o,n,m,l=this
a=A.jg(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.jf(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.b.v(o,"/"))o="/"+o
m=o
return A.e_(a,r,p,q,m,l.f,l.r)},
aY(a,b){var s,r,q,p,o,n,m,l,k
for(s=0,r=0;B.b.A(b,"../",r);){r+=3;++s}q=B.b.co(a,"/")
p=a.length
for(;;){if(!(q>0&&s>0))break
o=B.b.bi(a,"/",q-1)
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
q=o}return B.b.a1(a,q+1,null,B.b.F(b,r-3*s))},
ae(a){return this.af(A.aZ(a))},
af(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.ga6().length!==0)return a
else{s=h.a
if(a.gak()){r=a.bl(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gbb())m=a.ga9()?a.gX():h.f
else{l=A.mB(h,n)
if(l>0){k=B.b.p(n,0,l)
n=a.gaL()?k+A.bG(a.gK()):k+A.bG(h.aY(B.b.F(n,k.length),a.gK()))}else if(a.gaL())n=A.bG(a.gK())
else if(n.length===0)if(p==null)n=s.length===0?a.gK():A.bG(a.gK())
else n=A.bG("/"+a.gK())
else{j=h.aY(n,a.gK())
r=s.length===0
if(!r||p!=null||B.b.v(n,"/"))n=A.bG(j)
else n=A.kk(j,!r||p!=null)}m=a.ga9()?a.gX():null}}}i=a.ga8()?a.ga_():null
return A.e_(s,q,p,o,n,m,i)},
gbc(){return this.a.length!==0},
gak(){return this.c!=null},
ga9(){return this.f!=null},
ga8(){return this.r!=null},
gbb(){return this.e.length===0},
gaL(){return B.b.v(this.e,"/")},
gaa(){var s,r,q=this,p=q.a
if(p==="")throw A.i(A.v("Cannot use origin without a scheme: "+q.l(0)))
if(p!=="http"&&p!=="https")throw A.i(A.v("Origin is only applicable schemes http and https: "+q.l(0)))
s=q.c
if(s==null||s==="")throw A.i(A.v("A "+p+u.q+q.l(0)))
r=q.d
if(r==null)return p+"://"+s
return p+"://"+s+":"+A.x(r)},
l(a){return this.gb5()},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.k.b(b))if(p.a===b.ga6())if(p.c!=null===b.gak())if(p.b===b.gaO())if(p.gal()===b.gal())if(p.gac()===b.gac())if(p.e===b.gK()){r=p.f
q=r==null
if(!q===b.ga9()){if(q)r=""
if(r===b.gX()){r=p.r
q=r==null
if(!q===b.ga8()){s=q?"":r
s=s===b.ga_()}}}}return s},
$idF:1,
ga6(){return this.a},
gK(){return this.e}}
A.f2.prototype={
gbo(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.l(m,0)
s=o.a
m=m[0]+1
r=B.b.am(s,"?",m)
q=s.length
if(r>=0){p=A.cP(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.dN("data","",n,n,A.cP(s,m,q,128,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.l(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.ai.prototype={
gbc(){return this.b>0},
gak(){return this.c>0},
gaM(){return this.c>0&&this.d+1<this.e},
ga9(){return this.f<this.r},
ga8(){return this.r<this.a.length},
gaL(){return B.b.A(this.a,"/",this.e)},
gbb(){return this.e===this.f},
ga6(){var s=this.w
return s==null?this.w=this.bD():s},
bD(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.v(r.a,"http"))return"http"
if(q===5&&B.b.v(r.a,"https"))return"https"
if(s&&B.b.v(r.a,"file"))return"file"
if(q===7&&B.b.v(r.a,"package"))return"package"
return B.b.p(r.a,0,q)},
gaO(){var s=this.c,r=this.b+3
return s>r?B.b.p(this.a,r,s-1):""},
gal(){var s=this.c
return s>0?B.b.p(this.a,s,this.d):""},
gac(){var s,r=this
if(r.gaM())return A.o_(B.b.p(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.v(r.a,"http"))return 80
if(s===5&&B.b.v(r.a,"https"))return 443
return 0},
gK(){return B.b.p(this.a,this.e,this.f)},
gX(){var s=this.f,r=this.r
return s<r?B.b.p(this.a,s+1,r):""},
ga_(){var s=this.r,r=this.a
return s<r.length?B.b.F(r,s+1):""},
gaa(){var s,r,q=this,p=q.b,o=p===4&&B.b.v(q.a,"http")
if(p<0)throw A.i(A.v("Cannot use origin without a scheme: "+q.l(0)))
if(!o)s=!(p===5&&B.b.v(q.a,"https"))
else s=!1
if(s)throw A.i(A.v("Origin is only applicable to schemes http and https: "+q.l(0)))
s=q.c
if(s===q.d)throw A.i(A.v("A "+q.ga6()+u.q+q.l(0)))
p+=3
if(s===p)return B.b.p(q.a,0,q.e)
r=q.a
return B.b.p(r,0,p)+B.b.p(r,s,q.e)},
gbk(){if(this.f>=this.r)return B.F
return new A.aY(A.k1(this.gX()),t.h)},
aW(a){var s=this.d+1
return s+a.length===this.e&&B.b.A(this.a,a,s)},
cD(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.ai(B.b.p(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
bl(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.jg(a,0,a.length)
s=!(h.b===a.length&&B.b.v(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.b.p(h.a,h.b+3,q):""
o=h.gaM()?h.gac():g
if(s)o=A.jf(o,a)
q=h.c
if(q>0)n=B.b.p(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.b.p(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.b.v(l,"/"))l="/"+l
k=h.r
j=m<k?B.b.p(q,m+1,k):g
m=h.r
i=m<q.length?B.b.F(q,m+1):g
return A.e_(a,p,n,o,l,j,i)},
ae(a){return this.af(A.aZ(a))},
af(a){if(a instanceof A.ai)return this.c5(this,a)
return this.b6().af(a)},
c5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.b.v(a.a,"file"))p=b.e!==b.f
else if(q&&B.b.v(a.a,"http"))p=!b.aW("80")
else p=!(r===5&&B.b.v(a.a,"https"))||!b.aW("443")
if(p){o=r+1
return new A.ai(B.b.p(a.a,0,o)+B.b.F(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.b6().af(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.ai(B.b.p(a.a,0,r)+B.b.F(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.ai(B.b.p(a.a,0,r)+B.b.F(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.cD()}s=b.a
if(B.b.A(s,"/",n)){m=a.e
l=A.k8(this)
k=l>0?l:m
o=k-n
return new A.ai(B.b.p(a.a,0,k)+B.b.F(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.b.A(s,"../",n))n+=3
o=j-n+1
return new A.ai(B.b.p(a.a,0,j)+"/"+B.b.F(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.k8(this)
if(l>=0)g=l
else for(g=j;B.b.A(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.b.A(s,"../",n)))break;++f
n=e}for(r=h.length,d="";i>g;){--i
if(!(i>=0&&i<r))return A.l(h,i)
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.b.A(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.ai(B.b.p(h,0,i)+d+B.b.F(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
gD(a){var s=this.x
return s==null?this.x=B.b.gD(this.a):s},
T(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.l(0)},
b6(){var s=this,r=null,q=s.ga6(),p=s.gaO(),o=s.c>0?s.gal():r,n=s.gaM()?s.gac():r,m=s.a,l=s.f,k=B.b.p(m,s.e,l),j=s.r
l=l<j?s.gX():r
return A.e_(q,p,o,n,k,l,j<m.length?s.ga_():r)},
l(a){return this.a},
$idF:1}
A.dN.prototype={}
A.d6.prototype={
n(a,b,c){this.$ti.h("1?").a(c)
this.a.set(b,c)},
l(a){return"Expando:"+this.b}}
A.eE.prototype={
a7(a,b,c){var s,r,q,p,o,n
c.a(!1)
s=this.b
r=s.q(0,a)
if(r!=null){if(!c.h("X<0>").b(r))throw A.i(A.v('Hydration signal "'+a+'" was requested with inconsistent types.'))
return r}q=this.a
p=q.q(0,a)
if(q.I(a))o=p
else o=!1
if(!c.b(o))throw A.i(A.a0('Serialized value for hydration signal "'+a+'" is not a '+A.b1(c).l(0)+".",null,null))
n=new A.X(o,A.a8(t.B),c.h("X<0>"))
s.n(0,a,n)
return n}}
A.d7.prototype={
bd(a,b){var s,r,q,p,o,n,m,l,k={},j=$.iY()
A.jD(a)
if(j.a.get(a)!=null)throw A.i(A.v("This container is already being hydrated."))
m=new A.D()
j.n(0,a,m)
s=A.e([],t.u)
try{J.e7(s,A.e6(b))
r=this.ah(A.B(a.firstChild),b,s,"root")
if(r!=null){j=A.v("Unexpected DOM node after the hydrated root.")
throw A.i(j)}}catch(l){q=A.bP(l)
p=A.e5(l)
$.iY().n(0,a,null)
try{A.bk(s)}catch(l){o=A.bP(l)
n=A.e5(l)
A.d4(new A.by("Hydration failed: "+A.x(q)+". Cleanup also failed: "+A.x(o)+"."),n)}A.d4(q,p)}k.a=!1
return new A.eD(k,s,a,m)},
ah(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
t.x.a(a5)
if(a3==null)throw A.i(A.v("Missing server-rendered node at "+a6+"."))
s=a4 instanceof A.a4
r=s?a4.a:a2
if(s){s=A.y(a3.data)
if(s!==r)throw A.i(A.v("Text mismatch at "+a6+"."))
return A.B(a3.nextSibling)}q={}
q.a=q.b=null
s=a4 instanceof A.b8
if(s){p=a4.a
q.b=a4.b
q.a=a4.c}else p=a2
if(s){s=A.y(a3.data)
o=A.x(p)
if(s!=="fw:text:"+o)throw A.i(A.v("Signal text marker mismatch at "+a6+"."))
n=A.B(a3.nextSibling)
s=t.m
if(!s.b(n))throw A.i(A.v("Missing signal text node at "+a6+"."))
m=A.bx(new A.er(q),t.z)
o=A.y(n.data)
l=A.kG(m)
if(o!==l)throw A.i(A.v("Signal text value mismatch at "+a6+"."))
k=A.B(n.nextSibling)
if(!s.b(k)||A.y(k.data)!=="fw:/text:"+A.x(p))throw A.i(A.v("Signal text end marker mismatch at "+a6+"."))
B.d.j(a5,A.bK(new A.es(q,n)))
return A.B(k.nextSibling)}if(a4 instanceof A.aq)return this.bS(a3,a4,a5,a6)
j={}
j.a=j.b=null
s=a4 instanceof A.ap
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
if(s){s=A.y(a3.localName)
l=o.toLowerCase()
if(s!==l){s=A.y(a3.localName)
throw A.i(A.v("Expected <"+o+"> at "+a6+", found "+("<"+s+">")+"."))}for(s=i.gC(),s=s.gu(s),o=t.z;s.k();){l=s.gt()
r=l.b
d=r instanceof A.cs
m=d?A.bx(new A.et(r),o):r
l=l.a
if(A.b0(a3.getAttribute(l))!=A.mM(m))throw A.i(A.v('Attribute mismatch for "'+l+'" at '+a6+"."))
if(d)this.bB(a3,l,r.b,a5)}c=A.B(a3.firstChild)
for(s=h.length,o=a6+"/",b=0;b<s;++b)c=this.ah(c,h[b],a5,o+j.b+"["+b+"]")
if(c!=null)throw A.i(A.v("Unexpected child node at "+a6+"."))
if(j.a!=null){a=A.bx(new A.ev(j),t.N)
if(A.y(a3.value)!==a)throw A.i(A.v("Select value mismatch at "+a6+"."))
B.d.j(a5,A.kN(a3,j.a.b))}for(s=g.gC(),s=s.gu(s);s.k();){o=s.gt()
a0=A.aw(new A.ew(j,o))
l=o.a
a3.addEventListener(l,a0)
B.d.j(a5,new A.ex(a3,o,a0))
if(l==="click"&&J.ax(i.q(0,"role"),"button")){a1=A.aw(new A.ey(o))
a3.addEventListener("keydown",a1)
B.d.j(a5,new A.ez(a3,a1))}}for(s=f.gC(),s=s.gu(s);s.k();){o=s.gt()
a0=A.aw(new A.eA(a3,o))
a3.addEventListener(o.a,a0)
B.d.j(a5,new A.eB(a3,o,a0))}for(s=e.gC(),s=s.gu(s);s.k();){o=s.gt()
a0=A.aw(new A.eC(a3,o))
a3.addEventListener(o.a,a0)
B.d.j(a5,new A.eu(a3,o,a0))}return A.B(a3.nextSibling)}},
bS(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b={}
t.c5.a(a0)
t.x.a(a1)
o=A.y(a.data)
n=a0.a
if(o!=="fw:children:"+n)throw A.i(A.v("Keyed children marker mismatch at "+a2+"."))
m=A.j(t.N,t.cN)
B.d.j(a1,new A.eo(m))
b.a=a0.gY()
b.b=null
B.d.j(a1,new A.ep(b))
s=A.B(a.nextSibling)
for(o=a0.d,l=o.length,k=a2+"/"+n+"[",j=t.u,i=t.m,h=a0.b,g=0;g<l;++g){r=o[g]
if(!i.b(s)||A.y(s.localName)!==h.toLowerCase()||A.b0(s.getAttribute("data-sparrow-key"))!==r.a)throw A.i(A.v('Keyed child "'+r.a+'" mismatch at '+a2+"."))
q=A.e([],j)
p=A.dM()
try{f=p
e=this.ah(A.B(s.firstChild),r.b,q,k+r.a+"]")
d=f.b
if(d==null?f!=null:d!==f)A.Q(A.lI(""))
f.b=e}catch(c){A.bk(q)
throw c}f=p
e=f.b
if(e==null?f==null:e===f)A.Q(A.lJ(""))
if(e!=null){A.bk(q)
throw A.i(A.v('Unexpected child node for keyed child "'+r.a+'" at '+a2+"."))}m.n(0,r.a,new A.bB(s,r.b,q))
s=A.B(s.nextSibling)}if(!i.b(s)||A.y(s.data)!=="fw:/children:"+n)throw A.i(A.v("Keyed children end marker mismatch at "+a2+"."))
o=s
B.d.j(a1,A.bK(new A.eq(b,this,a0,m,o,a2)))
return A.B(o.nextSibling)},
bW(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
t.eI.a(b)
t.cO.a(c)
s=A.a8(t.N)
for(r=b.length,q=0;q<r;++q)s.j(0,b[q].a)
p=A.B(d.parentNode)
if(p==null)throw A.i(A.v("Keyed children were detached at "+e+"."))
o=A.z(c).h("ao<1>")
o=A.bs(new A.ao(c,o),o.h("p.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.bN)(o),++q){m=o[q]
if(s.H(0,m))continue
l=c.a0(0,m)
A.bk(l.c)
l.a.remove()}for(q=0;q<r;++q){k=b[q]
s=k.a
j=c.q(0,s)
if(j==null)c.n(0,s,this.aV(a,k,e))
else{s=k.b
if(!A.iX(j.b,s)){i=this.aV(a,k,e)
A.bk(j.c)
for(o=j.a;A.B(o.firstChild)!=null;){n=A.B(o.firstChild)
n.toString
A.q(o.removeChild(n))}for(n=i.a;A.B(n.firstChild)!=null;){h=A.B(n.firstChild)
h.toString
A.q(o.appendChild(h))}j.b=s
j.scb(i.c)}}}for(s=A.H(b).h("E<1>"),r=new A.E(b,s),r=new A.A(r,r.gm(0),s.h("A<u.E>")),s=s.h("u.E"),g=d;r.k();g=f){o=r.d
f=c.q(0,(o==null?s.a(o):o).a).a
if(A.B(f.nextSibling)!==g)A.q(p.insertBefore(f,g))}},
aV(a,b,c){var s,r,q,p,o=A.q(A.q(v.G.document).createElement(a.b)),n=b.a
o.setAttribute("data-sparrow-key",n)
s=A.e([],t.u)
try{q=b.b
J.e7(s,A.e6(q))
A.kJ(q,o)
r=this.ah(A.B(o.firstChild),q,s,c+"/"+a.a+"["+n+"]")
if(r!=null){n=A.v('Unexpected child node for keyed child "'+n+'" at '+c+".")
throw A.i(n)}return new A.bB(o,q,s)}catch(p){A.bk(s)
o.remove()
throw p}},
bB(a,b,c,d){B.d.j(t.x.a(d),A.kM(a,b,new A.en(c)))}}
A.eD.prototype={
$0(){var s,r=this,q=r.a
if(q.a)return
q.a=!0
try{A.bk(r.b)}finally{q=$.iY()
s=r.c
A.jD(s)
if(q.a.get(s)===r.d)q.n(0,s,null)}},
$S:1}
A.er.prototype={
$0(){return this.a.b.gi()},
$S:3}
A.es.prototype={
$0(){var s=A.kG(this.a.b.gi())
this.b.data=s},
$S:1}
A.et.prototype={
$0(){return this.a.b.gi()},
$S:3}
A.ev.prototype={
$0(){this.a.a.b.gi().l(0)
return""},
$S:17}
A.ew.prototype={
$1(a){A.q(a)
if(this.a.b==="form"&&this.b.a==="submit")a.preventDefault()
this.b.b.$1(a)},
$S:2}
A.ex.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.ey.prototype={
$1(a){var s
A.q(a)
s=A.y(a.key)==="Enter"||A.y(a.key)===" "
if(s){a.preventDefault()
this.a.b.$1(a)}},
$S:2}
A.ez.prototype={
$0(){return this.a.removeEventListener("keydown",this.b)},
$S:1}
A.eA.prototype={
$1(a){var s,r,q,p
A.q(a)
s=A.y(this.a.value)
r=this.b
q=r.a
if(q==="input"||q==="change")r.b.$1(s)
else{p=!1
if(q==="keydown")q=A.y(a.key)==="Enter"
else q=p
if(q)r.b.$1(s)}},
$S:2}
A.eB.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eC.prototype={
$1(a){A.q(a)
this.b.b.$1(A.av(this.a.checked))},
$S:2}
A.eu.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eo.prototype={
$0(){var s,r,q=this.a,p=A.z(q).h("a7<2>")
p=A.bs(new A.a7(q,p),p.h("p.E"))
s=A.H(p).h("E<1>")
p=new A.E(p,s)
p=new A.A(p,p.gm(0),s.h("A<u.E>"))
s=s.h("u.E")
while(p.k()){r=p.d
A.bk((r==null?s.a(r):r).c)}q.M(0)},
$S:1}
A.ep.prototype={
$0(){var s=this.a.b
return s==null?null:s.$0()},
$S:1}
A.eq.prototype={
$0(){var s,r=this,q=r.c,p=A.jn(q.f.$0()),o=q.gY(),n=r.a
if(o!=n.a){s=n.b
if(s!=null)s.$0()
n.b=o==null||o.length===0?null:A.e6(A.W("div",B.a,B.h,B.q,B.k,A.e([o],t.s),B.j,null))
n.a=o}r.b.bW(q,p,r.d,r.e,r.f)},
$S:1}
A.en.prototype={
$0(){return this.a.gi()},
$S:3}
A.bB.prototype={
scb(a){this.c=t.x.a(a)}}
A.as.prototype={}
A.eS.prototype={
cI(a){var s=a.b
return s==null?null:this.e.q(0,s.a)}}
A.eT.prototype={
$1(a){return t.j.a(a).a},
$S:25}
A.aV.prototype={
gaG(){var s=this.b,r=A.H(s)
return new A.bc(s,r.h("ah(1)").a(new A.eV()),r.h("bc<1>")).gm(0)},
cp(a){var s,r,q,p,o,n,m=A.jm(A.fH(a)),l=this.b
if(m.length!==l.length)return null
s=t.N
r=A.j(s,s)
for(q=0;q<l.length;++q){p=l[q]
if(!(q<m.length))return A.l(m,q)
o=m[q]
n=A.e0(o,0,o.length,B.n,!1)
if(B.b.v(p,":"))r.n(0,B.b.F(p,1),n)
else if(p!==n)return null}return A.b4(r,s,s)}}
A.eU.prototype={
$1(a){A.y(a)
return B.b.v(a,":")?a:A.e0(a,0,a.length,B.n,!1)},
$S:26}
A.eV.prototype={
$1(a){return!B.b.v(A.y(a),":")},
$S:10}
A.aJ.prototype={}
A.eW.prototype={
ae(a){var s,r,q,p,o,n,m,l,k,j,i=A.aZ(a),h=A.fH(i.gK())
for(s=this.a,r=s.length,q=null,p=null,o=-1,n=0;n<r;++n){m=s[n]
l=m.cp(h)
if(l==null)continue
k=m.gaG()
if(k>o){o=k
p=l
q=m}}s=p==null?B.F:p
r=i.gbk()
i.ga_()
j=t.N
return new A.aJ(q,s,A.b4(r,j,j),q==null)}}
A.co.prototype={
an(){var s=this.Q.c
s===$&&A.bO()
return A.bx(new A.eX(this,s.gi()),t.m)},
cv(){return},
ct(){var s=this,r=s.cy
if(r!=null)r.$0()
s.cy=null
r=s.cx
if(r!=null)r.J()
s.cx=null}}
A.eX.prototype={
$0(){var s,r,q,p=this.a,o=p.ax,n=this.b,m=o.cI(n),l=(m==null?o.c.$1(n):m.b.$1(n)).an(),k=p.CW
if(k!=null){s=A.B(k.firstChild)
if(s==null)throw A.i(A.v("Server-rendered route markup was not found."))
r=new A.d7().bd(k,l)
p.CW=null
if($.aH.length!==0)B.d.j(B.d.gW($.aH),r)
return s}q=new A.d1(A.e([],t.u))
s=q.cF(l)
if($.aH.length!==0)B.d.j(B.d.gW($.aH),q.ga3())
return s},
$S:18}
A.dv.prototype={
bv(a,b){var s,r,q=this,p=q.a.ae(q.gaR()),o=t.B,n=t.cH
n=n.a(new A.X(p,A.a8(o),n))
q.c!==$&&A.cT()
q.c=n
n=t.c7
s=n.a(new A.X(p.c,A.a8(o),n))
q.d!==$&&A.cT()
q.d=s
n=n.a(new A.X(p.d,A.a8(o),n))
q.e!==$&&A.cT()
q.e=n
n=A.aw(new A.eY(q))
q.w!==$&&A.cT()
q.w=n
o=A.aw(new A.eZ(q))
q.x!==$&&A.cT()
q.x=o
s=A.aw(new A.f_(q))
q.y!==$&&A.cT()
q.y=s
r=v.G
A.q(r.window).addEventListener("popstate",n)
A.q(r.window).addEventListener("hashchange",o)
A.q(r.document).addEventListener("click",s)},
cB(a){var s,r
if(this.z)throw A.i(A.v("A disposed router cannot navigate."))
s=A.aZ(a)
if(s.gbc()||s.gak())throw A.i(A.N(a,"path","Expected a same-origin path."))
r=A.aZ(A.y(A.q(A.q(v.G.window).location).href))
this.b_(r.ae(B.b.v(a,"/")||B.b.v(a,"?")||B.b.v(a,"#")?a:"/"+a))},
cA(){if(this.z)throw A.i(A.v("A disposed router cannot navigate."))
A.q(A.q(v.G.window).history).back()},
J(){var s,r,q,p=this
if(p.z)return
p.z=!0
s=v.G
r=A.q(s.window)
q=p.w
q===$&&A.bO()
r.removeEventListener("popstate",q)
q=A.q(s.window)
r=p.x
r===$&&A.bO()
q.removeEventListener("hashchange",r)
s=A.q(s.document)
r=p.y
r===$&&A.bO()
s.removeEventListener("click",r)},
aH(){var s,r,q,p,o,n=this
if(n.z)return
s=n.a.ae(n.gaR())
for(r=n.f,r=new A.a6(r,A.z(r).h("a6<1,2>")).gu(0),q=s.c;r.k();){p=r.d
p.b.si(q.q(0,p.a))}for(r=n.r,r=new A.a6(r,A.z(r).h("a6<1,2>")).gu(0),o=s.d;r.k();){p=r.d
p.b.si(o.q(0,p.a))}r=n.d
r===$&&A.bO()
r.si(q)
q=n.e
q===$&&A.bO()
q.si(o)
o=n.c
o===$&&A.bO()
o.si(s)},
gaR(){var s=A.q(A.q(v.G.window).location)
return A.y(s.pathname)+A.y(s.search)+A.y(s.hash)},
bR(a){var s,r,q,p,o,n
if(this.z||A.av(a.defaultPrevented)||A.bi(a.button)!==0||A.av(a.metaKey)||A.av(a.ctrlKey)||A.av(a.shiftKey)||A.av(a.altKey))return
s=A.B(a.target)
r=t.m
if(!r.b(s))return
q=A.B(s.closest("a[href]"))
p=!0
if(r.b(q))if(!A.av(q.hasAttribute("download")))if(!B.d.H(B.b.bs(A.y(q.rel).toLowerCase(),A.aT("\\s+",!0)),"external"))r=A.y(q.target).length!==0&&A.y(q.target).toLowerCase()!=="_self"
else r=p
else r=p
else r=p
if(r)return
o=A.aZ(A.y(q.href))
n=A.aZ(A.y(A.q(A.q(v.G.window).location).href))
if(o.gaa()!==n.gaa())return
if(o.gK()===n.gK()&&o.gX()===n.gX()){if(o.ga_()!==n.ga_())return
a.preventDefault()
return}if(o.ga8())return
a.preventDefault()
this.b_(o)},
b_(a){var s=v.G,r=A.aZ(A.y(A.q(A.q(s.window).location).href))
if(a.gaa()!==r.gaa())throw A.i(A.N(a,"destination","Expected a same-origin URL."))
A.q(A.q(s.window).history).pushState(null,"",a.l(0))
this.aH()}}
A.eY.prototype={
$1(a){A.q(a)
return this.a.aH()},
$S:11}
A.eZ.prototype={
$1(a){A.q(a)
return this.a.aH()},
$S:11}
A.f_.prototype={
$1(a){return this.a.bR(A.q(a))},
$S:11}
A.ar.prototype={}
A.c1.prototype={
gcG(){var s,r,q,p,o,n=this,m=!1
m=n.w==null
if(m)return n.d
m=t.c
s=A.j(t.N,m)
for(r=n.d,q=r.length,p=0;p<q;++p){o=r[p]
s.n(0,o.a+":"+o.b,o)}p=0
for(;p<0;++p){o=B.x[p]
s.n(0,o.a+":"+o.b,o)}p=0
for(;p<0;++p){o=B.x[p]
s.n(0,o.a+":"+o.b,o)}r=n.w
if(r!=null){r=r.a?"index":"noindex"
r=A.e([r,"follow"],t.s)
s.n(0,"name:robots",new A.ar("name","robots",B.d.R(r,", ")))}return A.k(new A.a7(s,s.$ti.h("a7<2>")),m)}}
A.eR.prototype={}
A.V.prototype={}
A.a4.prototype={}
A.b8.prototype={}
A.cs.prototype={}
A.ap.prototype={}
A.aS.prototype={}
A.aq.prototype={
gY(){var s=this.e
return s==null?null:s.$0()}}
A.im.prototype={
$1(a){var s,r,q,p,o,n,m=this
A:{s=a instanceof A.ap
r=s?a:null
if(s){s=r.w
q=A.H(s)
m.a.V(0,new A.bc(s,q.h("ah(1)").a(new A.io()),q.h("bc<1>")))
for(s=r.c,q=s.length,p=0;p<q;++p)m.$1(s[p])
break A}s=a instanceof A.aq
o=s?a.d:null
if(s){for(s=o.length,p=0;p<s;++p)m.$1(o[p].b)
n=a.gY()
if(n!=null&&n.length!==0)m.a.j(0,n)
break A}if(a instanceof A.a4||a instanceof A.b8)return}},
$S:28}
A.io.prototype={
$1(a){return A.y(a).length!==0},
$S:10}
A.dB.prototype={
cE(a,b,c){var s,r,q,p,o,n,m,l='"',k="&quot;",j="'",i="&#39;",h=A.j(t.N,t.X),g=new A.a2(""),f=a.a,e=A.c2("SparrowKit Application"),d=A.bj(e.x)
d=A.F(d,l,k)
d='<!doctype html><html lang="'+A.F(d,j,i)+'"><head>'
g.a=d
d+='<meta charset="utf-8">'
g.a=d
g.a=d+("<title>"+A.bj(e.a)+"</title>")
s=e.gcG()
for(d=s.length,r=null,q=0;q<d;++q){p=s[q]
if(p.a.toLowerCase()==="name"&&p.b.toLowerCase()==="viewport")r=p}if(r==null)g.a+='<meta name="viewport" content="width=device-width, initial-scale=1">'
else{o=r.a
n=A.bj(r.b)
n=A.F(n,l,k)
n=A.F(n,j,i)
m=A.bj(r.c)
m=A.F(m,l,k)
o="<meta "+o+'="'+n+'" content="'+A.F(m,j,i)+'">'
g.a+=o}o=A.bj(e.b)
o=A.F(o,l,k)
o='<meta name="description" content="'+A.F(o,j,i)+'">'
g.a+=o
for(q=0;q<d;++q){p=s[q]
o=p.a
if(o.toLowerCase()==="name"&&p.b.toLowerCase()==="viewport")continue
n=A.F(p.b,"&","&amp;")
n=A.F(n,"<","&lt;")
n=A.F(n,">","&gt;")
n=A.F(n,l,k)
n=A.F(n,j,i)
m=A.F(p.c,"&","&amp;")
m=A.F(m,"<","&lt;")
m=A.F(m,">","&gt;")
m=A.F(m,l,k)
o="<meta "+o+'="'+n+'" content="'+A.F(m,j,i)+'">'
g.a+=o}for(d=e.e,o=d.length,q=0;q<o;++q){n=B.w.ba(d[q].cS(),null)
n='<script type="application/ld+json">'+A.F(n,"<","\\u003C")+"</script>"
g.a+=n}this.c9(g,f)
d=A.bj(c)
d=A.F(d,l,k)
d='</head><body><div id="'+A.F(d,j,i)+'">'
g.a+=d
this.aI(g,f,h)
g.a+="</div>"
d=B.w.ba(h,null)
d='<script id="__FRAMEWORK_STATE__" type="application/json">'+A.F(d,"<","\\u003C")+"</script>"
d=g.a+=d
d=g.a=d+"</body></html>"
return d.charCodeAt(0)==0?d:d},
aI(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="attribute"
t.f.a(a6)
A:{s=a5 instanceof A.a4
r=s?a5.a:a2
if(s){s=A.bj(r)
a4.a+=s
break A}q=a5 instanceof A.b8
p=a2
if(q){o=a5.a
p=a5.b
n=o}else n=a2
if(q){A.ji(a6,n,p.gi())
s="<!--fw:text:"+A.x(n)+"-->"
a4.a+=s
s=p.gi()
s.l(0)
s=A.bj("")
a4.a+=s
s="<!--fw:/text:"+A.x(n)+"-->"
a4.a+=s
break A}q=a5 instanceof A.aq
m=a2
l=a2
k=a2
if(q){o=a5.a
m=a5.b
l=a5.d
k=a5.c
n=o}else n=a2
if(q){A.ji(a6,n,k.gi())
s=A.x(n)
j=a4.a+="<!--fw:children:"+s+"-->"
for(i=l.length,h=A.x(m),g="</"+h+">",h="<"+h+' data-sparrow-key="',f=0;f<i;++f){e=l[f]
j=A.F(e.a,"&","&amp;")
j=A.F(j,"<","&lt;")
j=A.F(j,">","&gt;")
j=A.F(j,'"',"&quot;")
j=h+A.F(j,"'","&#39;")+'">'
a4.a+=j
this.aI(a4,e.b,a6)
j=a4.a+=g}a4.a=j+("<!--fw:/children:"+s+"-->")
break A}s=a5 instanceof A.ap
d=a2
c=a2
b=a2
if(s){a=a5.a
d=a5.b
c=a5.c
b=a5.r}else a=a2
if(s){a0=B.y.H(0,a.toLowerCase())
if(a0&&c.length!==0)throw A.i(A.ab("Void element <"+A.x(a)+"> cannot have children."))
if(b!=null)A.ji(a6,b.a,b.b.gi())
s=A.x(a)
a4.a+="<"+s
for(j=d.gC(),j=j.gu(j);j.k();){i=j.gt()
h=$.lh()
g=i.a
if(!h.b.test(g))throw A.i(A.N(g,a3,"Invalid HTML attribute name."))
if(B.b.v(g.toLowerCase(),"on"))throw A.i(A.N(g,a3,u.V))
a1=i.b
i=a1 instanceof A.cs
r=i?a1.b.gi():a1
if(i){i=a1.a
if(a6.I(i)&&!J.ax(a6.q(0,i),r))A.Q(A.v('Conflicting initial values for signal "'+A.x(i)+'".'))
a6.n(0,i,r)}if(r==null||J.ax(r,!1))continue
a4.a+=" "+g+'="'
i=J.aC(r)
if(i.T(r,!0))i=""
else{i=i.l(r)
i=A.F(i,"&","&amp;")
i=A.F(i,"<","&lt;")
i=A.F(i,">","&gt;")
i=A.F(i,'"',"&quot;")
i=A.F(i,"'","&#39;")}a4.a=(a4.a+=i)+'"'}if(a0){a4.a+=">"
return}a4.a+=">"
for(j=c.length,f=0;f<j;++f)this.aI(a4,c[f],a6)
a4.a+="</"+s+">"}}},
c9(a,b){var s,r,q,p,o
for(s=A.kQ(b),r=s.length,q=0;q<r;++q){p=s[q]
o='<style id="'+A.kT(p)+'" data-sparrow-stylesheet>'
a.a+=o
o=A.aT("</style",!1)
o=A.F(p,o,"<\\/style")
a.a=(a.a+=o)+"</style>"}}}
A.X.prototype={
gi(){var s=$.aI.length===0?null:B.d.gW($.aI)
if(s!=null)s.bM(this)
return this.a},
si(a){var s,r,q,p=this
p.$ti.c.a(a)
if(J.ax(p.a,a))return
p.a=a
for(s=p.b,s=A.ja(s,s.r,s.$ti.c),r=s.$ti.c;s.k();){q=s.d;(q==null?r.a(q):q).bU()}},
$ik3:1}
A.bC.prototype={
bM(a){if(this.d)return
if(this.b.j(0,a))a.b.j(0,this)},
bU(){var s=this
if(s.d)return
if(s.c)s.e=!0
else A.jT(s)},
b3(){var s,r,q,p,o=this
if(o.d||o.c)return
o.c=!0
o.e=!1
for(s=o.b,r=A.ja(s,s.r,s.$ti.c),q=r.$ti.c;r.k();){p=r.d;(p==null?q.a(p):p).b.a0(0,o)}s.M(0)
B.d.j($.aI,o)
try{o.a.$0()}finally{if(0>=$.aI.length)return A.l($.aI,-1)
$.aI.pop()
o.c=!1
if(o.e){o.e=!1
A.jT(o)}}},
J(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
$.bw.a0(0,o)
for(s=o.b,r=A.ja(s,s.r,s.$ti.c),q=r.$ti.c;r.k();){p=r.d;(p==null?q.a(p):p).b.a0(0,o)}s.M(0)}}
A.aP.prototype={
cz(){},
cq(a){var s,r=this
if(r.x)throw A.i(A.v("A disposed component cannot be mounted."))
if(r.w!=null)throw A.i(A.v("A component can only be mounted once."))
r.d=a
s=$.bR.length===0
if(!s)B.d.j(B.d.gW($.bR).f,r)
r.w=A.bK(r.gbZ())
if(s)r.aq()},
J(){var s,r,q=this
if(q.x)return
q.x=!0
s=q.w
if(s!=null)s.$0()
q.w=null
q.bN()
r=q.c
if(r!=null){s=A.B(r.parentNode)
if(s!=null)A.q(s.removeChild(r))}q.c=null
if(q.y){q.y=!1
A.bx(q.gcs(),t.H)}},
c_(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e,f=h.r,e=h.f,d=A.e([],t.u),c=A.e([],t.A)
h.f=c
s=A.dM()
try{s.saj(A.lP(d,new A.e9(h),t.m))}catch(l){h.f=e
for(k=c,j=A.H(k).h("E<1>"),k=new A.E(k,j),k=new A.A(k,k.gm(0),j.h("A<u.E>")),j=j.h("u.E");k.k();){i=k.d
r=i==null?j.a(i):i
r.J()}for(k=d,j=A.H(k).h("E<1>"),k=new A.E(k,j),k=new A.A(k,k.gm(0),j.h("A<u.E>")),j=j.h("u.E");k.k();){m=k.d
q=m==null?j.a(m):m
q.$0()}throw l}p=h.c
try{if(p==null){k=h.d
k.toString
A.q(k.appendChild(s.B()))}else{o=A.B(p.parentNode)
if(s.B()!==p)if(o==null){k=h.d
k.toString
A.q(k.appendChild(s.B()))}else A.q(o.replaceChild(s.B(),p))}}catch(l){h.f=e
for(k=c,j=A.H(k).h("E<1>"),k=new A.E(k,j),k=new A.A(k,k.gm(0),j.h("A<u.E>")),j=j.h("u.E");k.k();){i=k.d
n=i==null?j.a(i):i
n.J()}for(k=d,j=A.H(k).h("E<1>"),k=new A.E(k,j),k=new A.A(k,k.gm(0),j.h("A<u.E>")),j=j.h("u.E");k.k();){q=k.d
m=q==null?j.a(q):q
m.$0()}throw l}for(k=A.H(f).h("E<1>"),j=new A.E(f,k),j=new A.A(j,j.gm(0),k.h("A<u.E>")),k=k.h("u.E");j.k();){i=j.d;(i==null?k.a(i):i).J()}for(k=A.H(g).h("E<1>"),j=new A.E(g,k),j=new A.A(j,j.gm(0),k.h("A<u.E>")),k=k.h("u.E");j.k();){q=j.d;(q==null?k.a(q):q).$0()}h.c=s.B()
h.e=d
h.r=c
if(h.y)A.bx(h.gcw(),t.H)
k=h.z=!0
if(!A.av(h.d.isConnected)?h.y:k)h.aq()},
aq(){var s,r,q,p=this
if(!p.z||p.x)return
if(!p.y){p.y=!0
A.bx(p.gcu(),t.H)}for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.bN)(s),++q)s[q].aq()},
bN(){var s,r,q,p,o=this
for(s=o.r,r=A.H(s).h("E<1>"),s=new A.E(s,r),s=new A.A(s,s.gm(0),r.h("A<u.E>")),r=r.h("u.E");s.k();){q=s.d;(q==null?r.a(q):q).J()}o.r=A.e([],t.A)
for(s=o.e,r=A.H(s).h("E<1>"),s=new A.E(s,r),s=new A.A(s,s.gm(0),r.h("A<u.E>")),r=r.h("u.E");s.k();){p=s.d;(p==null?r.a(p):p).$0()}o.e=A.e([],t.u)}}
A.e9.prototype={
$0(){var s=this.a
B.d.j($.bR,s)
try{s=s.an()
return s}finally{if(0>=$.bR.length)return A.l($.bR,-1)
$.bR.pop()}},
$S:18}
A.fO.prototype={
$0(){var s=this.a,r=this.b.$0(),q=r==null?null:J.aE(r)
if(q==null)q=""
if(A.y(s.data)!==q)s.data=q
return null},
$S:1}
A.fM.prototype={
$0(){return A.kU(this.a,this.b,this.c.$0())},
$S:1}
A.fN.prototype={
$0(){this.a.gi().l(0)
var s=this.b
if(A.y(s.value)!=="")s.value=""},
$S:1}
A.ix.prototype={
$0(){var s=this.a
if(s.a)return
s.a=!0
A.kz(this.b)},
$S:1}
A.dZ.prototype={}
A.dT.prototype={
an(){return this.a},
$ij8:1}
A.d1.prototype={
cF(a){var s,r,q=this
if(q.b!=null)throw A.i(A.v("A UI renderer can only render once."))
try{B.d.j(q.a,A.e6(a))
s=q.b2(a)
q.b=s
return s}catch(r){q.J()
throw r}},
J(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.a,r=A.H(s).h("E<1>"),q=new A.E(s,r),q=new A.A(q,q.gm(0),r.h("A<u.E>")),r=r.h("u.E");q.k();){p=q.d;(p==null?r.a(p):p).$0()}B.d.M(s)
s=o.b
if(s!=null){r=A.B(s.parentNode)
if(r!=null)A.q(r.removeChild(s))}o.b=null},
b2(a){var s
A:{if(a instanceof A.a4){s=A.q(A.q(v.G.document).createTextNode(a.a))
break A}if(a instanceof A.b8){s=this.c2(a.b,a.c)
break A}if(a instanceof A.aq){s=this.c1(a)
break A}if(a instanceof A.ap){s=this.c0(a.a,a.b,a.c,a.d,a.e,a.f,a.r)
break A}s=null}return s},
c1(a){var s,r,q,p,o,n={},m=v.G,l=A.q(A.q(m.document).createDocumentFragment()),k=a.a,j=A.q(A.q(m.document).createComment("fw:children:"+k)),i=A.q(A.q(m.document).createComment("fw:/children:"+k))
A.q(l.appendChild(j))
A.q(l.appendChild(i))
p=A.j(t.N,t.cV)
n.a=a.gY()
n.b=null
s=new A.el(n,this,a,i,p)
r=new A.ek(p)
q=A.dM()
try{q.saj(A.bK(s))}catch(o){r.$0()
throw o}B.d.j(this.a,new A.ej(n,q,r))
return l},
aU(a,b){var s,r=A.q(A.q(v.G.document).createElement(a.b))
r.setAttribute("data-sparrow-key",b.a)
s=b.b
A.kJ(s,r)
return new A.dV(r,s,new A.d7().bd(r,s))},
c2(a,b){var s=A.q(A.q(v.G.document).createTextNode(""))
B.d.j(this.a,A.nH(s,new A.em(b,a)))
return s},
c0(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j,i="attribute"
t.f.a(b)
t.fW.a(c)
t.cT.a(d)
t.ee.a(e)
t.d2.a(f)
s=A.q(A.q(v.G.document).createElement(a))
if(B.y.H(0,a.toLowerCase())&&c.length!==0)throw A.i(A.ab("Void element <"+a+"> cannot have children."))
for(r=b.gC(),r=r.gu(r),q=this.a;r.k();){p=r.gt()
o=p.a
n=A.aT("^[A-Za-z_:][A-Za-z0-9:._-]*$",!0)
if(!n.b.test(o))A.Q(A.N(o,i,"Invalid HTML attribute name."))
if(B.b.v(o.toLowerCase(),"on"))throw A.i(A.N(o,i,u.V))
m=p.b
if(m instanceof A.cs)B.d.j(q,A.kM(s,o,new A.ea(m)))
else A.kU(s,o,m)}for(r=c.length,l=0;l<r;++l)A.q(s.appendChild(this.b2(c[l])))
if(g!=null)B.d.j(q,A.kN(s,g.b))
for(r=d.gC(),r=r.gu(r);r.k();){p=r.gt()
k=A.aw(new A.eb(a,p))
o=p.a
s.addEventListener(o,k)
B.d.j(q,new A.ec(s,p,k))
if(o==="click"&&J.ax(b.q(0,"role"),"button")){j=A.aw(new A.ed(p))
s.addEventListener("keydown",j)
B.d.j(q,new A.ee(s,j))}}for(r=e.gC(),r=r.gu(r);r.k();){p=r.gt()
k=A.aw(new A.ef(s,p))
s.addEventListener(p.a,k)
B.d.j(q,new A.eg(s,p,k))}for(r=f.gC(),r=r.gu(r);r.k();){p=r.gt()
k=A.aw(new A.eh(s,p))
s.addEventListener(p.a,k)
B.d.j(q,new A.ei(s,p,k))}return s}}
A.el.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.c,b=A.jn(c.f.$0()),a=c.gY(),a0=d.a
if(a!=a0.a){s=a0.b
if(s!=null)s.$0()
a0.b=a==null||a.length===0?null:A.e6(A.W("div",B.a,B.h,B.q,B.k,A.e([a],t.s),B.j,null))
a0.a=a}a0=A.a8(t.N)
for(s=b.length,r=0;r<s;++r)a0.j(0,b[r].a)
q=d.d
p=A.B(q.parentNode)
if(p==null)throw A.i(A.v("Keyed children were detached before rendering."))
o=d.e
n=A.z(o).h("ao<1>")
n=A.bs(new A.ao(o,n),n.h("p.E"))
m=n.length
r=0
for(;r<n.length;n.length===m||(0,A.bN)(n),++r){l=n[r]
if(a0.H(0,l))continue
k=o.a0(0,l)
k.c.$0()
k.a.remove()}for(a0=d.b,r=0;r<s;++r){j=b[r]
n=j.a
i=o.q(0,n)
if(i==null)o.n(0,n,a0.aU(c,j))
else{n=j.b
if(!A.iX(i.b,n)){h=a0.aU(c,j)
i.c.$0()
for(m=i.a;A.B(m.firstChild)!=null;){g=A.B(m.firstChild)
g.toString
A.q(m.removeChild(g))}for(g=h.a;A.B(g.firstChild)!=null;){f=A.B(g.firstChild)
f.toString
A.q(m.appendChild(f))}i.b=n
i.sa3(h.c)}}}for(c=A.H(b).h("E<1>"),a0=new A.E(b,c),a0=new A.A(a0,a0.gm(0),c.h("A<u.E>")),c=c.h("u.E");a0.k();q=e){s=a0.d
e=o.q(0,(s==null?c.a(s):s).a).a
if(A.B(e.nextSibling)!==q)A.q(p.insertBefore(e,q))}},
$S:1}
A.ek.prototype={
$0(){var s,r,q=this.a,p=A.z(q).h("a7<2>")
p=A.bs(new A.a7(q,p),p.h("p.E"))
s=A.H(p).h("E<1>")
p=new A.E(p,s)
p=new A.A(p,p.gm(0),s.h("A<u.E>"))
s=s.h("u.E")
while(p.k()){r=p.d;(r==null?s.a(r):r).c.$0()}q.M(0)},
$S:1}
A.ej.prototype={
$0(){this.b.B().$0()
var s=this.a.b
if(s!=null)s.$0()
this.c.$0()},
$S:1}
A.em.prototype={
$0(){var s=this.b.gi()
return s},
$S:3}
A.ea.prototype={
$0(){return this.a.b.gi()},
$S:3}
A.eb.prototype={
$1(a){A.q(a)
if(this.a==="form"&&this.b.a==="submit")a.preventDefault()
this.b.b.$1(a)},
$S:2}
A.ec.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.ed.prototype={
$1(a){var s
A.q(a)
s=A.y(a.key)==="Enter"||A.y(a.key)===" "
if(s){a.preventDefault()
this.a.b.$1(a)}},
$S:2}
A.ee.prototype={
$0(){return this.a.removeEventListener("keydown",this.b)},
$S:1}
A.ef.prototype={
$1(a){var s,r,q,p
A.q(a)
s=A.y(this.a.value)
r=this.b
q=r.a
if(q==="input"||q==="change")r.b.$1(s)
else{p=!1
if(q==="keydown")q=A.y(a.key)==="Enter"
else q=p
if(q)r.b.$1(s)}},
$S:2}
A.eg.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.eh.prototype={
$1(a){A.q(a)
this.b.b.$1(A.av(this.a.checked))},
$S:2}
A.ei.prototype={
$0(){return this.a.removeEventListener(this.b.a,this.c)},
$S:1}
A.dV.prototype={
sa3(a){this.c=t.M.a(a)}}
A.eL.prototype={
ag(){return"MainAxisAlignment."+this.b}}
A.bX.prototype={
ag(){return"CrossAxisAlignment."+this.b}}
A.U.prototype={}
A.aX.prototype={}
A.o.prototype={}
A.b9.prototype={}
A.am.prototype={}
A.cp.prototype={}
A.m.prototype={}
A.bW.prototype={}
A.c.prototype={}
A.K.prototype={}
A.ck.prototype={}
A.c_.prototype={}
A.ct.prototype={}
A.cx.prototype={}
A.cr.prototype={}
A.bY.prototype={}
A.c0.prototype={}
A.aU.prototype={
ag(){return"ResponsiveBreakpoint."+this.b}}
A.au.prototype={
an(){return A.oc(this.a.$0())},
$ij8:1}
A.cJ.prototype={
ag(){return"_UiChildContext."+this.b}}
A.fn.prototype={
gY(){var s=this.a
return s.a===0?null:new A.a7(s,A.z(s).h("a7<2>")).R(0,"\n")},
N(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="div",a4="style",a5="value",a6="box-sizing:border-box"
A:{if(a7 instanceof A.aX){s=a7.a
r=A.e([],t.E)
r.push(new A.a4(s===null?"":s))
r=A.W("span",a7.f,B.h,r,B.k,B.i,B.j,a2)
break A}if(a7 instanceof A.o){q=a7.b
p=a7.d
r=t.N
o=t.X
n=A.j(r,o)
if(p==="button")n.n(0,"type","button")
if(p==="div")m=q==="click"
else m=!1
if(m)n.V(0,A.a(["role","button","tabindex","0"],r,o))
n.V(0,a7.f)
o=A.e([a1.N(a7.a,B.m)],t.E)
r=A.j(r,t.o)
r.n(0,q,a7.c)
r=A.W(p,n,B.h,o,r,B.i,B.j,a2)
break A}if(a7 instanceof A.b9){r=a1.bK(a7.f,a7.c,a7.a,a7.d,a7.e,a7.b)
break A}if(a7 instanceof A.am){r=a1.bF(a7.b,a7.c,a7.a,a7.d,a7.e)
break A}if(a7 instanceof A.cp){l=a7.a
r=A.dg(B.a,t.N,t.X)
r.n(0,a4,A.fG(a2,A.ks(a7.d,"row",0,B.c)))
o=A.H(l)
o=A.W(a3,r,B.h,new A.a1(l,o.h("V(1)").a(new A.ft(a1)),o.h("a1<1,V>")),B.k,B.i,B.j,a2)
r=o
break A}if(a7 instanceof A.m){l=a7.a
k=a7.e
r=A.dg(k,t.N,t.X)
r.n(0,a4,A.fG(k.q(0,a4),A.ks(a7.d,"column",0,a7.c)))
o=A.H(l)
o=A.W(a3,r,B.h,new A.a1(l,o.h("V(1)").a(new A.fu(a1)),o.h("a1<1,V>")),B.k,B.i,B.j,a2)
r=o
break A}if(a7 instanceof A.cx){l=a7.a
j=a7.b
i=a7.c
A.L(j,a5)
r=A.aa(j)
A.L(i,a5)
o=A.H(l)
o=A.W(a3,A.cS(B.a,"display:flex;flex-wrap:wrap;column-gap:"+(r+"px")+";row-gap:"+(A.aa(i)+"px")+";justify-content:flex-start;align-content:flex-start;align-items:"+a7.f.c+";min-width:0;min-height:0"),B.h,new A.a1(l,o.h("V(1)").a(new A.fv(a1)),o.h("a1<1,V>")),B.k,B.i,B.j,a2)
r=o
break A}if(a7 instanceof A.cr){l=a7.a
r=A.e(["width:100%",a6,"max-width:100%","min-width:0","overscroll-behavior-x:contain","overscroll-behavior-y:auto"],t.s)
r.push("overflow-y:auto")
o=A.H(l)
o=A.W(a3,A.cS(B.a,B.d.R(r,";")),B.h,new A.a1(l,o.h("V(1)").a(new A.fw(a1)),o.h("a1<1,V>")),B.k,B.i,B.j,a2)
r=o
break A}if(a7 instanceof A.bY){h=a7.b
g=a7.c
f=a7.d
e=a7.e
A.L(h,a5)
r=A.aa(h)
A.L(g,a5)
o=A.aa(g)
A.L(e,a5)
n=A.aa(e)
A.L(f,a5)
n=A.W("hr",A.cS(B.a,"box-sizing:border-box;border:0;border-top:"+(r+"px")+" solid "+a7.a+";height:"+(o+"px")+";margin:0 "+(n+"px")+" 0 "+(A.aa(f)+"px")),B.h,B.q,B.k,B.i,B.j,a2)
r=n
break A}if(a7 instanceof A.bW){d=a7.c
g=a7.d
c=a7.e
b=a7.r
a=a7.w
k=a7.x
r=A.dg(k,t.N,t.X)
o=k.q(0,a4)
a0=A.e([a6],t.s)
if(d!=null){A.L(d,a5)
B.d.j(a0,"width:"+(A.aa(d)+"px"))}if(g!=null){A.L(g,a5)
B.d.j(a0,"height:"+(A.aa(g)+"px"))}if(c!=null){A.L(c,a5)
B.d.j(a0,"padding:"+(A.aa(c)+"px"))}if(b!=null)B.d.j(a0,"background-color:"+b)
if(a!=null){A.L(a,a5)
B.d.j(a0,"border-radius:"+(A.aa(a)+"px"))}r.n(0,a4,A.fG(o,B.d.R(a0,";")))
r=A.W(a7.b,r,B.h,A.e([a1.N(a7.a,B.m)],t.E),B.k,B.i,B.j,a2)
break A}if(a7 instanceof A.ck){r=a1.bJ(!1,B.a,a7.a,a7.b,"padding",a2,a3)
break A}if(a7 instanceof A.c_){r=a1.bG(B.a,a7.a,"Expanded",a8,"flex-grow:1;flex-shrink:1;flex-basis:0%;min-width:0;min-height:0",a3)
break A}if(a7 instanceof A.ct){g=a7.b
a0=A.e([a6],t.s)
A.L(g,a5)
B.d.j(a0,"height:"+(A.aa(g)+"px"))
r=A.cS(B.a,B.d.R(a0,";"))
o=A.e([],t.E)
r=A.W(a3,r,B.h,o,B.k,B.i,B.j,a2)
break A}if(a7 instanceof A.c0){r=a1.bI(B.a,a7.a,a2,a7.b,a7.c,a7.f,a7.r,a2,a3)
break A}r=a2}return r},
Z(a){return this.N(a,B.an)},
bJ(a,b,c,d,e,f,g){var s
t.f.a(b)
A.ky(b,e)
s=A.W(g,A.cS(b,e+":"+A.mZ(d,a)),B.h,A.e([this.N(c,B.m)],t.E),B.k,B.i,B.j,null)
return s},
bK(a,b,c,d,e,f){var s,r,q
t.f.a(a)
s=t.N
r=A.j(s,t.X)
r.n(0,"type","text")
r.V(0,a)
r.n(0,"placeholder",f)
q=A.W("input",r,B.h,B.q,B.k,B.i,A.j(s,t.d),null)
if(c==null)return q
s=t.E
return A.W("label",B.a4,B.h,A.e([A.W("span",B.a,B.h,A.e([new A.a4(c)],s),B.k,B.i,B.j,null),q],s),B.k,B.i,B.j,null)},
bF(a,b,c,d,e){t.L.a(d)
return A.W("div",B.a3,B.h,A.e([this.Z(a),A.lK(new A.fq(this,d,e,b),c,"div",d,null)],t.E),B.k,B.i,B.j,null)},
bG(a,b,c,d,e,f){t.f.a(a)
if(d!==B.A)throw A.i(A.v(c+" must be a direct child of Row, Column, or Responsive."))
return A.W(f,A.cS(a,e),B.h,A.e([this.N(b,B.m)],t.E),B.k,B.i,B.j,null)},
bI(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
t.gS.a(a0)
t.b9.a(a4)
t.cd.a(a5)
t.f.a(a)
A.ky(a,"Grid")
A.ni(a,"Grid")
s=a4.a
r=a5.a
q=t.N
p=A.a([B.v,A.mY(b,s,r,b)],t.b,q)
for(o=[B.u,B.t],n=t.s,m=a4.c,l=a4.b,k=a5.c,j=a5.b,i=0;i<2;++i){h=o[i]
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
d=A.e([],n)
if(!e)d.push("grid-template-columns:"+("repeat("+A.x(f)+",minmax(0,1fr))"))
if(g!=null){if(!isFinite(g))A.Q(A.N(g,"value","Must be a finite CSS length."))
d.push("gap:"+(A.aa(g)+"px"))}p.n(0,h,B.d.R(d,";"))}c=this.bX("grid",p)
q=A.dg(a,q,t.X)
q.n(0,"data-sparrow-layout",c)
o=A.H(a0)
return A.W(a7,q,B.h,new A.a1(a0,o.h("V(1)").a(new A.fr(this)),o.h("a1<1,V>")),B.k,B.i,B.j,b)},
bX(a,b){var s,r,q,p,o
t.bH.a(b)
s=A.e([a],t.s)
for(r=0;r<3;++r){q=B.D[r]
p=b.q(0,q)
if(p!=null)s.push(q.b+":"+p)}o=A.mC(2,B.d.R(s,"|"),B.n,!1)
this.a.cC(a+":"+o,new A.fs('[data-sparrow-layout="'+o+'"]',b))
return o}}
A.ft.prototype={
$1(a){return this.a.N(t.g.a(a),B.A)},
$S:6}
A.fu.prototype={
$1(a){return this.a.N(t.g.a(a),B.A)},
$S:6}
A.fv.prototype={
$1(a){return this.a.N(t.g.a(a),B.m)},
$S:6}
A.fw.prototype={
$1(a){return this.a.N(t.g.a(a),B.m)},
$S:6}
A.fq.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l.gi()){s=t.N
r=t.o
q=A.W("button",B.a1,B.h,B.q,A.a(["click",new A.fo(l)],s,r),B.i,B.j,m)
p=n.c
A.L(p,"value")
o=t.E
o=A.e([new A.aS("open",A.W("div",B.a0,B.h,A.e([q,A.W("aside",A.a(["role","navigation","style","position:relative;z-index:1;width:"+(A.aa(p)+"px")+";max-width:85vw;height:100%;overflow:auto;background:white"],s,t.X),B.h,A.e([A.W("button",B.a2,B.h,A.e([new A.a4("Close")],o),A.a(["click",new A.fp(l)],s,r),B.i,B.j,m),n.a.Z(n.d)],o),B.k,B.i,B.j,m)],o),B.k,B.i,B.j,m))],t.I)
l=o}else l=B.Z
return l},
$S:29}
A.fo.prototype={
$1(a){this.a.si(!1)
return!1},
$S:0}
A.fp.prototype={
$1(a){this.a.si(!1)
return!1},
$S:0}
A.fr.prototype={
$1(a){return this.a.N(t.g.a(a),B.m)},
$S:6}
A.fs.prototype={
$0(){return A.nj(this.a,this.b)},
$S:17}
A.fJ.prototype={
$1(a){return A.y(a).toLowerCase()==="style"},
$S:10}
A.fI.prototype={
$1(a){return A.y(a).toLowerCase()==="data-sparrow-layout"},
$S:10}
A.iL.prototype={
$1(a){return new A.au(new A.iI(this.a,this.b))},
$S:4}
A.iI.prototype={
$0(){var s=this.b
return A.nI(new A.iD(this.a),s.B().gad(),s.B().gab())},
$S:7}
A.iD.prototype={
$1$2(a,b,c){return this.a.a7(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:8}
A.iM.prototype={
$1(a){t.O.a(a)
return A.c2(u.r)},
$S:5}
A.iO.prototype={
$1(a){return new A.au(new A.iH(this.a,this.b))},
$S:4}
A.iH.prototype={
$0(){var s=this.b
return A.nJ(new A.iC(this.a),s.B().gad(),s.B().gab())},
$S:7}
A.iC.prototype={
$1$2(a,b,c){return this.a.a7(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:8}
A.iP.prototype={
$1(a){t.O.a(a)
return A.c2(u.r)},
$S:5}
A.iQ.prototype={
$1(a){return new A.au(new A.iG(this.a,this.b))},
$S:4}
A.iG.prototype={
$0(){var s=this.b
return A.nK(new A.iB(this.a),s.B().gad(),s.B().gab())},
$S:7}
A.iB.prototype={
$1$2(a,b,c){return this.a.a7(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:8}
A.iR.prototype={
$1(a){t.O.a(a)
return A.c2(u.r)},
$S:5}
A.iS.prototype={
$1(a){return new A.au(new A.iF(this.a,this.b))},
$S:4}
A.iF.prototype={
$0(){var s=this.b
return A.nL(new A.iA(this.a),s.B().gad(),s.B().gab())},
$S:7}
A.iA.prototype={
$1$2(a,b,c){return this.a.a7(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:8}
A.iT.prototype={
$1(a){t.O.a(a)
return A.c2(u.r)},
$S:5}
A.iU.prototype={
$1(a){return new A.au(new A.iE(this.a,this.b))},
$S:4}
A.iE.prototype={
$0(){var s=this.b
return A.nM(new A.iz(this.a),s.B().gad(),s.B().gab())},
$S:7}
A.iz.prototype={
$1$2(a,b,c){return this.a.a7(a,c.a(!1),c)},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:8}
A.iV.prototype={
$1(a){t.O.a(a)
return A.c2(u.r)},
$S:5}
A.iK.prototype={
$1(a){return new A.au(new A.iJ())},
$S:4}
A.iJ.prototype={
$0(){return B.aa},
$S:30}
A.iN.prototype={
$1(a){var s,r
A.q(a)
s=A.q(v.G.window)
r=this.a
s.removeEventListener("pagehide",r.B())
s.removeEventListener("beforeunload",r.B())
this.b.J()
this.c.B().J()},
$S:2}
A.h8.prototype={
$0(){var s,r,q,p,o,n,m,l=null,k="#FFFFFF",j="click",i="SPARROW KIT",h=u.P,g="div",f=u.i,e="#173B5E",d="Home",c=u.e,b="Services",a="Solutions",a0="About",a1="Contact",a2=u.R,a3="Start a conversation",a4="#DCE5ED",a5="font-size:14px;color:#40556A",a6="01",a7="font-size:12px;color:#6383A1",a8="font-size:16px;color:#142B46;font-weight:700",a9="font-size:14px;color:#637183",b0="02",b1="03",b2="#F4F7FA",b3=u.h,b4=u.s,b5=u.f,b6=u.T,b7=u.a,b8="#E2E9EF",b9=u.W,c0="font-size:14px;color:#D8E1EA",c1=this.a.$1$2("sk_state_68fb2067_5000",!1,t.y)
if(c1==null)c1=new A.X(!1,A.a8(t.B),t.L)
s=t.N
r=t.X
q=this.b
p=t.U
o=t.g
n=t.G
m=t.q
m=A.e([A.h(A.a(["role","banner","style","box-shadow:none"],s,r),k,l,A.aK(A.e([A.d(new A.o(A.b("\u2630",A.a(["style",u.X,"aria-hidden","true"],s,r)),j,new A.fP(c1),"button",!1,A.a(["aria-label","Open navigation"],s,r)),new A.c(0,12,0,0)),A.d5(A.b(i,A.a(["style",h],s,r))),A.aK(A.e([new A.o(A.h(B.a,e,4,A.d(A.b("Start a project",A.a(["style",f],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.fQ(c1,q),g,!1,B.a)],p),B.f)],p),B.p),64,16,"header",l),A.dx(new A.m(A.k(A.e([A.h(B.a,k,l,A.d(A.aB(B.c,A.e([new A.o(A.d(A.b(d,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.fR(c1,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.h0(c1,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.h1(c1,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.h2(c1,q),g,!1,B.a),new A.o(A.d(A.b(a1,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.h3(c1,q),g,!1,B.a)],p),B.e,B.c,0,4),new A.c(0,16,0,16)),l,l,g,l),A.h(B.a,b2,l,A.d(new A.m(A.k(A.e([A.an(A.e([new A.m(A.k(A.e([A.b("INDEPENDENT THINKING. LASTING IMPACT.",A.a(["style",a2],s,r)),A.f(l,24,l),A.b("Thoughtful software,\nbuilt to last.",A.a(["style","font-size:40px;line-height:1.15;color:#142B46;font-weight:700"],s,r)),A.f(l,20,l),A.b("This demonstration explores how teams can turn complex challenges into clear, dependable digital products.",A.a(["style","font-size:17px;line-height:1.6;color:#516275"],s,r)),A.f(l,28,l),A.aB(B.c,A.e([new A.o(A.h(B.a,e,4,A.d(A.b(a3,A.a(["style",f],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.h4(c1,q),g,!1,B.a),new A.o(A.h(B.a,k,l,A.d(A.b("Explore our services",A.a(["style","font-size:14px;color:#173B5E;font-weight:600"],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.h5(c1,q),g,!1,B.a)],p),B.e,B.c,12,12)],p),o),B.c,B.e,A.j(s,r)),A.h(B.a,"#E2EBF2",l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("THE SPARROW APPROACH",A.a(["style","font-size:11px;letter-spacing:1.3px;color:#547B9E;font-weight:700"],s,r)),A.f(l,32,l),A.b("Clarity at every step.",A.a(["style","font-size:24px;color:#142B46;font-weight:700"],s,r)),A.f(l,16,l),A.iZ(a4,0,24,0,1),A.b("01   Discover the real challenge",A.a(["style",a5],s,r)),A.iZ(a4,0,24,0,1),A.b("02   Design with intention",A.a(["style",a5],s,r)),A.iZ(a4,0,24,0,1),A.b("03   Build for the long term",A.a(["style",a5],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(28,28,28,28)),l,l,g,l),new A.c(28,28,28,28)),l,l,g,l)],p),1,32,new A.K(1,2,2,n),new A.K(32,40,64,m)),A.f(l,48,l),A.an(A.e([A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(a6,A.a(["style",a7],s,r)),A.f(l,18,l),A.b("Thoughtful strategy",A.a(["style",a8],s,r)),A.f(l,8,l),A.b("Clarity before code.",A.a(["style",a9],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(20,20,20,20)),l,l,g,l),A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b0,A.a(["style",a7],s,r)),A.f(l,18,l),A.b("Considered design",A.a(["style",a8],s,r)),A.f(l,8,l),A.b("Made for real people.",A.a(["style",a9],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(20,20,20,20)),l,l,g,l),A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b1,A.a(["style",a7],s,r)),A.f(l,18,l),A.b("Sound engineering",A.a(["style",a8],s,r)),A.f(l,8,l),A.b("Built for what comes next.",A.a(["style",a9],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(20,20,20,20)),l,l,g,l)],p),1,12,new A.K(1,3,3,n),new A.K(12,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(56,28,56,28)),l,l,g,l),A.h(B.a,l,l,A.d(new A.m(A.k(A.e([A.b("BUILT ON PRINCIPLES",A.a(["style","font-size:11px;letter-spacing:1.5px;color:#6383A1;font-weight:700"],s,r)),A.f(l,16,l),A.b("A practical partner for the long term.",A.a(["style","font-size:20px;color:#142B46"],s,r)),A.f(l,12,l),A.b("Clear communication  /  Quality engineering  /  Sustainable delivery",A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(34,28,34,28)),l,l,g,l),A.h(B.a,k,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("01 / SERVICE CONCEPTS",A.a(["style",a2],s,r)),A.f(l,16,l),A.b("The right expertise, at every stage.",A.a(["style",b4],s,r)),A.f(l,14,l),A.b(u.L,A.a(["style",b5],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(a6,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Custom software",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.N,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b0,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Web applications",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.K,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b1,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Mobile applications",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.b9,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("04",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("UI / UX design",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.A,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("05",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Enterprise solutions",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.G,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("06",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Technical consulting",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.u,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,14,new A.K(1,2,3,n),new A.K(14,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,b2,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("02 / SOLUTION CONCEPTS",A.a(["style",a2],s,r)),A.f(l,16,l),A.b("Technology with a clear purpose.",A.a(["style",b4],s,r)),A.f(l,14,l),A.b(u.l,A.a(["style",b5],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("A",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Operations platforms",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.F,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("B",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Customer experiences",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.k,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("C",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Data and reporting",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.w,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,14,new A.K(1,2,3,n),new A.K(14,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,l,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("03 / OUR APPROACH",A.a(["style",a2],s,r)),A.f(l,16,l),A.b("Built for today. Ready for tomorrow.",A.a(["style",b4],s,r)),A.f(l,14,l),A.b(u.D,A.a(["style",b5],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(a6,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Engineering quality",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.I,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b0,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Scalable architecture",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.z,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b1,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Business-first delivery",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.U,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("04",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Reliable collaboration",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.n,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("05",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Long-term maintainability",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.Z,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,14,new A.K(1,2,3,n),new A.K(14,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,b2,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("04 / SELECTED CONCEPTS",A.a(["style",a2],s,r)),A.f(l,16,l),A.b("A closer look at the possibilities.",A.a(["style",b4],s,r)),A.f(l,14,l),A.b(u.m,A.a(["style",b5],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("DEMO / OPERATIONS",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("A clearer view of work",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.p,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("DEMO / CUSTOMER EXPERIENCE",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Services made more accessible",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.O,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,18,new A.K(1,2,2,n),new A.K(18,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,l,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("05 / HOW WE WORK",A.a(["style",a2],s,r)),A.f(l,16,l),A.b("A clear path from idea to impact.",A.a(["style",b4],s,r)),A.f(l,14,l),A.b(u.y,A.a(["style",b5],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("01 / DISCOVER",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Understand",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.M,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("02 / DEFINE",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Shape",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.g,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("03 / BUILD",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Deliver",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.C,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("04 / EVOLVE",A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Improve",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.Q,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,14,new A.K(1,2,4,n),new A.K(14,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#142B46",l,A.d(new A.m(A.k(A.e([A.b("06 / ABOUT SPARROW KIT",A.a(["style",u.t],s,r)),A.f(l,18,l),A.b("Technology should make work better.",A.a(["style",u.bX],s,r)),A.f(l,18,l),A.b(u.H,A.a(["style",b9],s,r)),A.f(l,18,l),A.b(u.v,A.a(["style",b9],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,l,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("07 / FAQ",A.a(["style",a2],s,r)),A.f(l,16,l),A.b("A few useful answers.",A.a(["style",b4],s,r)),A.f(l,14,l),A.b(u.J,A.a(["style",b5],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(a6,A.a(["style",b6],s,r)),A.f(l,22,l),A.b(u.cs,A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u._,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.f(l,12,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b0,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("Can you work with an existing product?",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.E,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.f(l,12,l),A.h(B.a,b8,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b(b1,A.a(["style",b6],s,r)),A.f(l,22,l),A.b("What happens after launch?",A.a(["style",b7],s,r)),A.f(l,10,l),A.b(u.d,A.a(["style",b3],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#EAF1F6",l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("08 / LET\u2019S TALK",A.a(["style",a2],s,r)),A.f(l,16,l),A.b("Have something in mind?",A.a(["style",b4],s,r)),A.f(l,14,l),A.b(u.x,A.a(["style",b5],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),new A.o(A.h(B.a,e,4,A.d(A.b(a3,A.a(["style",f],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.h6(c1,q),g,!1,B.a),A.f(l,20,l),A.b(u.j,A.a(["style",b3],s,r)),A.f(l,8,l),A.b(u.o,A.a(["style","font-size:13px;color:#637183"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#142B46",l,A.d(new A.m(A.k(A.e([A.b(i,A.a(["style",u.B],s,r)),A.f(l,12,l),A.b("Thoughtful software, built to last.",A.a(["style",c0],s,r)),A.f(l,20,l),A.aB(B.c,A.e([new A.o(A.d(A.b(d,A.a(["style",c0],s,r)),new A.c(10,10,10,10)),j,new A.h7(c1,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",c0],s,r)),new A.c(10,10,10,10)),j,new A.fS(c1,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",c0],s,r)),new A.c(10,10,10,10)),j,new A.fT(c1,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",c0],s,r)),new A.c(10,10,10,10)),j,new A.fU(c1,q),g,!1,B.a),new A.o(A.d(A.b(a1,A.a(["style",c0],s,r)),new A.c(10,10,10,10)),j,new A.fV(c1,q),g,!1,B.a)],p),B.e,B.c,8,8),A.f(l,12,l),A.b(u.b,A.a(["style",c0],s,r)),A.f(l,24,l),A.b(u.Y,A.a(["style","font-size:12px;color:#ADC5DA"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(40,28,40,28)),l,l,g,l)],p),o),B.c,B.f,A.j(s,r)),!1)],p)
n=A.a(["style","background-color:#FFFFFF"],s,r)
return new A.am("sk_state_67fb1ed4_5001",new A.m(A.k(m,o),B.c,B.f,n),A.h(A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r),k,l,A.d(new A.m(A.k(A.e([A.b(i,A.a(["style",h],s,r)),A.f(l,32,l),new A.o(A.d(A.b(d,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.fW(c1,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.fX(c1,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.fY(c1,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.fZ(c1,q),g,!1,B.a),new A.o(A.d(A.b(a1,A.a(["style",c],s,r)),new A.c(12,6,12,6)),j,new A.h_(c1,q),g,!1,B.a)],p),o),B.c,B.e,A.j(s,r)),new A.c(28,28,28,28)),l,l,"aside",280),c1,304)},
$S:9}
A.fP.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.fQ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.fR.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.h0.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.h1.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.h2.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.h3.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.h4.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.h5.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.h6.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.h7.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.fS.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.fT.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.fU.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.fV.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.fW.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.fX.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.fY.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.fZ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.h_.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hr.prototype={
$0(){var s,r,q,p,o,n,m,l=null,k="#FFFFFF",j="click",i="SPARROW KIT",h=u.P,g="div",f=u.i,e="Home",d=u.e,c="Services",b="Solutions",a="About",a0="Contact",a1=u.R,a2=u.s,a3=u.f,a4=u.T,a5=u.a,a6=u.h,a7="#E2E9EF",a8="font-size:14px;color:#D8E1EA",a9=this.a.$1$2("sk_state_dbb8b3e2_5000",!1,t.y)
if(a9==null)a9=new A.X(!1,A.a8(t.B),t.L)
s=t.N
r=t.X
q=this.b
p=t.U
o=t.g
n=t.G
m=t.q
return new A.am("sk_state_dcb8b575_5001",new A.m(A.k(A.e([A.h(A.a(["role","banner","style","box-shadow:none"],s,r),k,l,A.aK(A.e([A.d(new A.o(A.b("\u2630",A.a(["style",u.X,"aria-hidden","true"],s,r)),j,new A.h9(a9),"button",!1,A.a(["aria-label","Open navigation"],s,r)),new A.c(0,12,0,0)),A.d5(A.b(i,A.a(["style",h],s,r))),A.aK(A.e([new A.o(A.h(B.a,"#173B5E",4,A.d(A.b("Start a project",A.a(["style",f],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.ha(a9,q),g,!1,B.a)],p),B.f)],p),B.p),64,16,"header",l),A.dx(new A.m(A.k(A.e([A.h(B.a,k,l,A.d(A.aB(B.c,A.e([new A.o(A.d(A.b(e,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hb(a9,q),g,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hj(a9,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hk(a9,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hl(a9,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hm(a9,q),g,!1,B.a)],p),B.e,B.c,0,4),new A.c(0,16,0,16)),l,l,g,l),A.h(B.a,k,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("01 / SERVICE CONCEPTS",A.a(["style",a1],s,r)),A.f(l,16,l),A.b("The right expertise, at every stage.",A.a(["style",a2],s,r)),A.f(l,14,l),A.b(u.L,A.a(["style",a3],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("01",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Custom software",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.N,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("02",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Web applications",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.K,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("03",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Mobile applications",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.b9,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("04",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("UI / UX design",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.A,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("05",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Enterprise solutions",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.G,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("06",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Technical consulting",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.u,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,14,new A.K(1,2,3,n),new A.K(14,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,l,l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("05 / HOW WE WORK",A.a(["style",a1],s,r)),A.f(l,16,l),A.b("A clear path from idea to impact.",A.a(["style",a2],s,r)),A.f(l,14,l),A.b(u.y,A.a(["style",a3],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("01 / DISCOVER",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Understand",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.M,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("02 / DEFINE",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Shape",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.g,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("03 / BUILD",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Deliver",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.C,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("04 / EVOLVE",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Improve",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.Q,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,14,new A.K(1,2,4,n),new A.K(14,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#EAF1F6",l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("08 / LET\u2019S TALK",A.a(["style",a1],s,r)),A.f(l,16,l),A.b("Have something in mind?",A.a(["style",a2],s,r)),A.f(l,14,l),A.b(u.x,A.a(["style",a3],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),new A.o(A.h(B.a,"#173B5E",4,A.d(A.b("Start a conversation",A.a(["style",f],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.hn(a9,q),g,!1,B.a),A.f(l,20,l),A.b(u.j,A.a(["style",a6],s,r)),A.f(l,8,l),A.b(u.o,A.a(["style","font-size:13px;color:#637183"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#142B46",l,A.d(new A.m(A.k(A.e([A.b(i,A.a(["style",u.B],s,r)),A.f(l,12,l),A.b("Thoughtful software, built to last.",A.a(["style",a8],s,r)),A.f(l,20,l),A.aB(B.c,A.e([new A.o(A.d(A.b(e,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.ho(a9,q),g,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hp(a9,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hq(a9,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hc(a9,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hd(a9,q),g,!1,B.a)],p),B.e,B.c,8,8),A.f(l,12,l),A.b(u.b,A.a(["style",a8],s,r)),A.f(l,24,l),A.b(u.Y,A.a(["style","font-size:12px;color:#ADC5DA"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(40,28,40,28)),l,l,g,l)],p),o),B.c,B.f,A.j(s,r)),!1)],p),o),B.c,B.f,A.j(s,r)),A.h(A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r),k,l,A.d(new A.m(A.k(A.e([A.b(i,A.a(["style",h],s,r)),A.f(l,32,l),new A.o(A.d(A.b(e,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.he(a9,q),g,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hf(a9,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hg(a9,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hh(a9,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hi(a9,q),g,!1,B.a)],p),o),B.c,B.e,A.j(s,r)),new A.c(28,28,28,28)),l,l,"aside",280),a9,304)},
$S:9}
A.h9.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.ha.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hb.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hj.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hk.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hl.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hm.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hn.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
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
A.hc.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hd.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.he.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hf.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hg.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hh.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hi.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hK.prototype={
$0(){var s,r,q,p,o,n,m,l=null,k="#FFFFFF",j="click",i="SPARROW KIT",h=u.P,g="div",f=u.i,e="Home",d=u.e,c="Services",b="Solutions",a="About",a0="Contact",a1=u.R,a2=u.s,a3=u.f,a4=u.T,a5=u.a,a6=u.h,a7="#E2E9EF",a8="font-size:14px;color:#D8E1EA",a9=this.a.$1$2("sk_state_82c16b3b_5000",!1,t.y)
if(a9==null)a9=new A.X(!1,A.a8(t.B),t.L)
s=t.N
r=t.X
q=this.b
p=t.U
o=t.g
n=t.G
m=t.q
return new A.am("sk_state_81c169a8_5001",new A.m(A.k(A.e([A.h(A.a(["role","banner","style","box-shadow:none"],s,r),k,l,A.aK(A.e([A.d(new A.o(A.b("\u2630",A.a(["style",u.X,"aria-hidden","true"],s,r)),j,new A.hs(a9),"button",!1,A.a(["aria-label","Open navigation"],s,r)),new A.c(0,12,0,0)),A.d5(A.b(i,A.a(["style",h],s,r))),A.aK(A.e([new A.o(A.h(B.a,"#173B5E",4,A.d(A.b("Start a project",A.a(["style",f],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.ht(a9,q),g,!1,B.a)],p),B.f)],p),B.p),64,16,"header",l),A.dx(new A.m(A.k(A.e([A.h(B.a,k,l,A.d(A.aB(B.c,A.e([new A.o(A.d(A.b(e,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hu(a9,q),g,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hC(a9,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hD(a9,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hE(a9,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hF(a9,q),g,!1,B.a)],p),B.e,B.c,0,4),new A.c(0,16,0,16)),l,l,g,l),A.h(B.a,"#F4F7FA",l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("02 / SOLUTION CONCEPTS",A.a(["style",a1],s,r)),A.f(l,16,l),A.b("Technology with a clear purpose.",A.a(["style",a2],s,r)),A.f(l,14,l),A.b(u.l,A.a(["style",a3],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("A",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Operations platforms",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.F,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("B",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Customer experiences",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.k,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("C",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Data and reporting",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.w,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,14,new A.K(1,2,3,n),new A.K(14,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#F4F7FA",l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("04 / SELECTED CONCEPTS",A.a(["style",a1],s,r)),A.f(l,16,l),A.b("A closer look at the possibilities.",A.a(["style",a2],s,r)),A.f(l,14,l),A.b(u.m,A.a(["style",a3],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("DEMO / OPERATIONS",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("A clearer view of work",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.p,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l),A.h(B.a,a7,l,A.d(A.h(B.a,k,l,A.d(new A.m(A.k(A.e([A.b("DEMO / CUSTOMER EXPERIENCE",A.a(["style",a4],s,r)),A.f(l,22,l),A.b("Services made more accessible",A.a(["style",a5],s,r)),A.f(l,10,l),A.b(u.O,A.a(["style",a6],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),l,l,g,l),new A.c(1,1,1,1)),l,l,g,l)],p),1,18,new A.K(1,2,2,n),new A.K(18,l,l,m))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#EAF1F6",l,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("08 / LET\u2019S TALK",A.a(["style",a1],s,r)),A.f(l,16,l),A.b("Have something in mind?",A.a(["style",a2],s,r)),A.f(l,14,l),A.b(u.x,A.a(["style",a3],s,r)),A.f(l,32,l)],p),o),B.c,B.e,A.j(s,r)),new A.o(A.h(B.a,"#173B5E",4,A.d(A.b("Start a conversation",A.a(["style",f],s,r)),new A.c(13,20,13,20)),l,l,g,l),j,new A.hG(a9,q),g,!1,B.a),A.f(l,20,l),A.b(u.j,A.a(["style",a6],s,r)),A.f(l,8,l),A.b(u.o,A.a(["style","font-size:13px;color:#637183"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(72,28,72,28)),l,l,g,l),A.h(B.a,"#142B46",l,A.d(new A.m(A.k(A.e([A.b(i,A.a(["style",u.B],s,r)),A.f(l,12,l),A.b("Thoughtful software, built to last.",A.a(["style",a8],s,r)),A.f(l,20,l),A.aB(B.c,A.e([new A.o(A.d(A.b(e,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hH(a9,q),g,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hI(a9,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hJ(a9,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hv(a9,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",a8],s,r)),new A.c(10,10,10,10)),j,new A.hw(a9,q),g,!1,B.a)],p),B.e,B.c,8,8),A.f(l,12,l),A.b(u.b,A.a(["style",a8],s,r)),A.f(l,24,l),A.b(u.Y,A.a(["style","font-size:12px;color:#ADC5DA"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(40,28,40,28)),l,l,g,l)],p),o),B.c,B.f,A.j(s,r)),!1)],p),o),B.c,B.f,A.j(s,r)),A.h(A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r),k,l,A.d(new A.m(A.k(A.e([A.b(i,A.a(["style",h],s,r)),A.f(l,32,l),new A.o(A.d(A.b(e,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hx(a9,q),g,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hy(a9,q),g,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hz(a9,q),g,!1,B.a),new A.o(A.d(A.b(a,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hA(a9,q),g,!1,B.a),new A.o(A.d(A.b(a0,A.a(["style",d],s,r)),new A.c(12,6,12,6)),j,new A.hB(a9,q),g,!1,B.a)],p),o),B.c,B.e,A.j(s,r)),new A.c(28,28,28,28)),l,l,"aside",280),a9,304)},
$S:9}
A.hs.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.ht.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hu.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hC.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hD.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hE.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hF.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hG.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hH.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hI.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hJ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hv.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hw.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hx.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hy.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hz.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hA.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hB.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.i1.prototype={
$0(){var s,r,q,p,o,n=null,m="#FFFFFF",l="click",k="SPARROW KIT",j=u.P,i="div",h="Home",g=u.e,f="Services",e="Solutions",d="About",c="Contact",b=u.W,a=u.R,a0=u.s,a1=u.f,a2=u.T,a3=u.a,a4=u.h,a5="#E2E9EF",a6="font-size:14px;color:#D8E1EA",a7=this.a.$1$2("sk_state_708b6917_5000",!1,t.y)
if(a7==null)a7=new A.X(!1,A.a8(t.B),t.L)
s=t.N
r=t.X
q=this.b
p=t.U
o=t.g
return new A.am("sk_state_6f8b6784_5001",new A.m(A.k(A.e([A.h(A.a(["role","banner","style","box-shadow:none"],s,r),m,n,A.aK(A.e([A.d(new A.o(A.b("\u2630",A.a(["style",u.X,"aria-hidden","true"],s,r)),l,new A.hL(a7),"button",!1,A.a(["aria-label","Open navigation"],s,r)),new A.c(0,12,0,0)),A.d5(A.b(k,A.a(["style",j],s,r))),A.aK(A.e([new A.o(A.h(B.a,"#173B5E",4,A.d(A.b("Start a project",A.a(["style",u.i],s,r)),new A.c(13,20,13,20)),n,n,i,n),l,new A.hM(a7,q),i,!1,B.a)],p),B.f)],p),B.p),64,16,"header",n),A.dx(new A.m(A.k(A.e([A.h(B.a,m,n,A.d(A.aB(B.c,A.e([new A.o(A.d(A.b(h,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hN(a7,q),i,!1,B.a),new A.o(A.d(A.b(f,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hU(a7,q),i,!1,B.a),new A.o(A.d(A.b(e,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hV(a7,q),i,!1,B.a),new A.o(A.d(A.b(d,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hW(a7,q),i,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hX(a7,q),i,!1,B.a)],p),B.e,B.c,0,4),new A.c(0,16,0,16)),n,n,i,n),A.h(B.a,"#142B46",n,A.d(new A.m(A.k(A.e([A.b("06 / ABOUT SPARROW KIT",A.a(["style",u.t],s,r)),A.f(n,18,n),A.b("Technology should make work better.",A.a(["style",u.bX],s,r)),A.f(n,18,n),A.b(u.H,A.a(["style",b],s,r)),A.f(n,18,n),A.b(u.v,A.a(["style",b],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(72,28,72,28)),n,n,i,n),A.h(B.a,n,n,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("03 / OUR APPROACH",A.a(["style",a],s,r)),A.f(n,16,n),A.b("Built for today. Ready for tomorrow.",A.a(["style",a0],s,r)),A.f(n,14,n),A.b(u.D,A.a(["style",a1],s,r)),A.f(n,32,n)],p),o),B.c,B.e,A.j(s,r)),A.an(A.e([A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("01",A.a(["style",a2],s,r)),A.f(n,22,n),A.b("Engineering quality",A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u.I,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n),A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("02",A.a(["style",a2],s,r)),A.f(n,22,n),A.b("Scalable architecture",A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u.z,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n),A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("03",A.a(["style",a2],s,r)),A.f(n,22,n),A.b("Business-first delivery",A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u.U,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n),A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("04",A.a(["style",a2],s,r)),A.f(n,22,n),A.b("Reliable collaboration",A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u.n,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n),A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("05",A.a(["style",a2],s,r)),A.f(n,22,n),A.b("Long-term maintainability",A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u.Z,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n)],p),1,14,new A.K(1,2,3,t.G),new A.K(14,n,n,t.q))],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),n,n,i,n),A.h(B.a,n,n,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("07 / FAQ",A.a(["style",a],s,r)),A.f(n,16,n),A.b("A few useful answers.",A.a(["style",a0],s,r)),A.f(n,14,n),A.b(u.J,A.a(["style",a1],s,r)),A.f(n,32,n)],p),o),B.c,B.e,A.j(s,r)),A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("01",A.a(["style",a2],s,r)),A.f(n,22,n),A.b(u.cs,A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u._,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n),A.f(n,12,n),A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("02",A.a(["style",a2],s,r)),A.f(n,22,n),A.b("Can you work with an existing product?",A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u.E,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n),A.f(n,12,n),A.h(B.a,a5,n,A.d(A.h(B.a,m,n,A.d(new A.m(A.k(A.e([A.b("03",A.a(["style",a2],s,r)),A.f(n,22,n),A.b("What happens after launch?",A.a(["style",a3],s,r)),A.f(n,10,n),A.b(u.d,A.a(["style",a4],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(26,26,26,26)),n,n,i,n),new A.c(1,1,1,1)),n,n,i,n)],p),o),B.c,B.f,A.j(s,r)),new A.c(72,28,72,28)),n,n,i,n),A.h(B.a,"#142B46",n,A.d(new A.m(A.k(A.e([A.b(k,A.a(["style",u.B],s,r)),A.f(n,12,n),A.b("Thoughtful software, built to last.",A.a(["style",a6],s,r)),A.f(n,20,n),A.aB(B.c,A.e([new A.o(A.d(A.b(h,A.a(["style",a6],s,r)),new A.c(10,10,10,10)),l,new A.hY(a7,q),i,!1,B.a),new A.o(A.d(A.b(f,A.a(["style",a6],s,r)),new A.c(10,10,10,10)),l,new A.hZ(a7,q),i,!1,B.a),new A.o(A.d(A.b(e,A.a(["style",a6],s,r)),new A.c(10,10,10,10)),l,new A.i_(a7,q),i,!1,B.a),new A.o(A.d(A.b(d,A.a(["style",a6],s,r)),new A.c(10,10,10,10)),l,new A.i0(a7,q),i,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",a6],s,r)),new A.c(10,10,10,10)),l,new A.hO(a7,q),i,!1,B.a)],p),B.e,B.c,8,8),A.f(n,12,n),A.b(u.b,A.a(["style",a6],s,r)),A.f(n,24,n),A.b(u.Y,A.a(["style","font-size:12px;color:#ADC5DA"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(40,28,40,28)),n,n,i,n)],p),o),B.c,B.f,A.j(s,r)),!1)],p),o),B.c,B.f,A.j(s,r)),A.h(A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r),m,n,A.d(new A.m(A.k(A.e([A.b(k,A.a(["style",j],s,r)),A.f(n,32,n),new A.o(A.d(A.b(h,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hP(a7,q),i,!1,B.a),new A.o(A.d(A.b(f,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hQ(a7,q),i,!1,B.a),new A.o(A.d(A.b(e,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hR(a7,q),i,!1,B.a),new A.o(A.d(A.b(d,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hS(a7,q),i,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",g],s,r)),new A.c(12,6,12,6)),l,new A.hT(a7,q),i,!1,B.a)],p),o),B.c,B.e,A.j(s,r)),new A.c(28,28,28,28)),n,n,"aside",280),a7,304)},
$S:9}
A.hL.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.hM.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hN.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hU.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hV.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hW.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hX.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hY.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hZ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.i_.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.i0.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hO.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.hP.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.hQ.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.hR.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.hS.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.hT.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.il.prototype={
$0(){var s,r,q,p,o,n=null,m="#FFFFFF",l="click",k="SPARROW KIT",j=u.P,i="div",h=u.i,g="Home",f=u.e,e="Services",d="Solutions",c="About",b="Contact",a="font-size:14px;color:#D8E1EA",a0=this.a.$1$2("sk_state_06b65b75_5000",!1,t.y)
if(a0==null)a0=new A.X(!1,A.a8(t.B),t.L)
s=t.N
r=t.X
q=this.b
p=t.U
o=t.g
return new A.am("sk_state_05b659e2_5001",new A.m(A.k(A.e([A.h(A.a(["role","banner","style","box-shadow:none"],s,r),m,n,A.aK(A.e([A.d(new A.o(A.b("\u2630",A.a(["style",u.X,"aria-hidden","true"],s,r)),l,new A.i2(a0),"button",!1,A.a(["aria-label","Open navigation"],s,r)),new A.c(0,12,0,0)),A.d5(A.b(k,A.a(["style",j],s,r))),A.aK(A.e([new A.o(A.h(B.a,"#173B5E",4,A.d(A.b("Start a project",A.a(["style",h],s,r)),new A.c(13,20,13,20)),n,n,i,n),l,new A.i3(a0,q),i,!1,B.a)],p),B.f)],p),B.p),64,16,"header",n),A.dx(new A.m(A.k(A.e([A.h(B.a,m,n,A.d(A.aB(B.c,A.e([new A.o(A.d(A.b(g,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.i4(a0,q),i,!1,B.a),new A.o(A.d(A.b(e,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.ic(a0,q),i,!1,B.a),new A.o(A.d(A.b(d,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.id(a0,q),i,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.ie(a0,q),i,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.ig(a0,q),i,!1,B.a)],p),B.e,B.c,0,4),new A.c(0,16,0,16)),n,n,i,n),A.h(B.a,"#EAF1F6",n,A.d(new A.m(A.k(A.e([new A.m(A.k(A.e([A.b("08 / LET\u2019S TALK",A.a(["style",u.R],s,r)),A.f(n,16,n),A.b("Have something in mind?",A.a(["style",u.s],s,r)),A.f(n,14,n),A.b(u.x,A.a(["style",u.f],s,r)),A.f(n,32,n)],p),o),B.c,B.e,A.j(s,r)),new A.o(A.h(B.a,"#173B5E",4,A.d(A.b("Start a conversation",A.a(["style",h],s,r)),new A.c(13,20,13,20)),n,n,i,n),l,new A.ih(a0,q),i,!1,B.a),A.f(n,20,n),A.b(u.j,A.a(["style",u.h],s,r)),A.f(n,8,n),A.b(u.o,A.a(["style","font-size:13px;color:#637183"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(72,28,72,28)),n,n,i,n),A.h(B.a,n,n,A.d(new A.m(A.k(A.e([A.b("Contact form preview",A.a(["style","font-size:22px;color:#142B46;font-weight:700"],s,r)),A.f(n,12,n),A.b("This form is a visual preview and is not connected to a service.",A.a(["style","font-size:14px;color:#637183"],s,r)),A.f(n,24,n),new A.b9("Name","Your name",n,n,n,A.a(["type","text"],s,r)),A.f(n,16,n),new A.b9("Email","you@example.com",n,n,n,A.a(["type","email"],s,r)),A.f(n,16,n),new A.b9("Project","Tell us what you are considering",n,n,n,A.a(["type","text"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(48,28,48,28)),n,n,i,n),A.h(B.a,"#142B46",n,A.d(new A.m(A.k(A.e([A.b(k,A.a(["style",u.B],s,r)),A.f(n,12,n),A.b("Thoughtful software, built to last.",A.a(["style",a],s,r)),A.f(n,20,n),A.aB(B.c,A.e([new A.o(A.d(A.b(g,A.a(["style",a],s,r)),new A.c(10,10,10,10)),l,new A.ii(a0,q),i,!1,B.a),new A.o(A.d(A.b(e,A.a(["style",a],s,r)),new A.c(10,10,10,10)),l,new A.ij(a0,q),i,!1,B.a),new A.o(A.d(A.b(d,A.a(["style",a],s,r)),new A.c(10,10,10,10)),l,new A.ik(a0,q),i,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",a],s,r)),new A.c(10,10,10,10)),l,new A.i5(a0,q),i,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",a],s,r)),new A.c(10,10,10,10)),l,new A.i6(a0,q),i,!1,B.a)],p),B.e,B.c,8,8),A.f(n,12,n),A.b(u.b,A.a(["style",a],s,r)),A.f(n,24,n),A.b(u.Y,A.a(["style","font-size:12px;color:#ADC5DA"],s,r))],p),o),B.c,B.e,A.j(s,r)),new A.c(40,28,40,28)),n,n,i,n)],p),o),B.c,B.f,A.j(s,r)),!1)],p),o),B.c,B.f,A.j(s,r)),A.h(A.a(["role","navigation","style","max-width:100%;height:100%;overflow:auto"],s,r),m,n,A.d(new A.m(A.k(A.e([A.b(k,A.a(["style",j],s,r)),A.f(n,32,n),new A.o(A.d(A.b(g,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.i7(a0,q),i,!1,B.a),new A.o(A.d(A.b(e,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.i8(a0,q),i,!1,B.a),new A.o(A.d(A.b(d,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.i9(a0,q),i,!1,B.a),new A.o(A.d(A.b(c,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.ia(a0,q),i,!1,B.a),new A.o(A.d(A.b(b,A.a(["style",f],s,r)),new A.c(12,6,12,6)),l,new A.ib(a0,q),i,!1,B.a)],p),o),B.c,B.e,A.j(s,r)),new A.c(28,28,28,28)),n,n,"aside",280),a0,304)},
$S:9}
A.i2.prototype={
$1(a){this.a.si(!0)},
$S:0}
A.i3.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.i4.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.ic.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.id.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.ie.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.ig.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.ih.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.ii.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.ij.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.ik.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.i5.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.i6.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0}
A.i7.prototype={
$1(a){this.a.si(!1)
this.b.$1("/")},
$S:0}
A.i8.prototype={
$1(a){this.a.si(!1)
this.b.$1("/services")},
$S:0}
A.i9.prototype={
$1(a){this.a.si(!1)
this.b.$1("/solutions")},
$S:0}
A.ia.prototype={
$1(a){this.a.si(!1)
this.b.$1("/about")},
$S:0}
A.ib.prototype={
$1(a){this.a.si(!1)
this.b.$1("/contact")},
$S:0};(function aliases(){var s=J.aR.prototype
s.bu=s.l
s=A.aP.prototype
s.bt=s.cq})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"nE","m3",12)
s(A,"nF","m4",12)
s(A,"nG","m5",12)
r(A,"kL","nt",1)
s(A,"nO","mR",13)
s(A,"o5","mQ",5)
var o
q(o=A.co.prototype,"gcu","cv",1)
q(o,"gcs","ct",1)
p(o=A.dv.prototype,"gad","cB",27)
q(o,"gab","cA",1)
r(A,"o7","lO",1)
q(A.bC.prototype,"ga3","J",1)
q(o=A.aP.prototype,"gcw","cz",1)
q(o,"gbZ","c_",1)
q(A.d1.prototype,"ga3","J",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.D,null)
q(A.D,[A.j0,J.d9,A.cq,J.b2,A.O,A.G,A.p,A.A,A.cd,A.bd,A.a5,A.ba,A.bt,A.bS,A.bf,A.aW,A.f0,A.eO,A.cG,A.aO,A.T,A.eJ,A.cb,A.cc,A.ca,A.br,A.dU,A.dK,A.dA,A.dY,A.fb,A.at,A.dP,A.fm,A.fk,A.cH,A.dL,A.e1,A.dS,A.bg,A.cA,A.cN,A.b3,A.d0,A.fh,A.fC,A.fz,A.fc,A.dq,A.cu,A.fd,A.aF,A.a9,A.ad,A.a2,A.cO,A.f2,A.ai,A.d6,A.eE,A.d7,A.bB,A.as,A.eS,A.aV,A.aJ,A.eW,A.aP,A.dv,A.ar,A.c1,A.eR,A.V,A.cs,A.aS,A.dB,A.X,A.bC,A.dZ,A.dT,A.d1,A.dV,A.U,A.c,A.K,A.au,A.fn])
q(J.d9,[J.db,J.c4,J.c7,J.c6,J.c8,J.c5,J.b6])
q(J.c7,[J.aR,J.J,A.bv,A.cg])
q(J.aR,[J.dr,J.bz,J.aQ])
r(J.da,A.cq)
r(J.eF,J.J)
q(J.c5,[J.c3,J.dc])
q(A.O,[A.aA,A.cv,A.dd,A.dE,A.dw,A.dO,A.c9,A.cV,A.ay,A.cw,A.dD,A.by,A.d_])
r(A.bA,A.G)
r(A.bq,A.bA)
q(A.p,[A.t,A.b7,A.bc,A.be,A.dJ,A.dX,A.bD])
q(A.t,[A.u,A.ao,A.a7,A.a6,A.cz])
r(A.bZ,A.b7)
q(A.u,[A.a1,A.E,A.dR])
r(A.bE,A.bt)
r(A.aY,A.bE)
r(A.bT,A.aY)
r(A.Z,A.bS)
q(A.aW,[A.bU,A.cF])
r(A.bV,A.bU)
r(A.cj,A.cv)
q(A.aO,[A.cY,A.cZ,A.dC,A.iu,A.iw,A.f8,A.f7,A.eM,A.ff,A.ew,A.ey,A.eA,A.eC,A.eT,A.eU,A.eV,A.eY,A.eZ,A.f_,A.im,A.io,A.eb,A.ed,A.ef,A.eh,A.ft,A.fu,A.fv,A.fw,A.fo,A.fp,A.fr,A.fJ,A.fI,A.iL,A.iD,A.iM,A.iO,A.iC,A.iP,A.iQ,A.iB,A.iR,A.iS,A.iA,A.iT,A.iU,A.iz,A.iV,A.iK,A.iN,A.fP,A.fQ,A.fR,A.h0,A.h1,A.h2,A.h3,A.h4,A.h5,A.h6,A.h7,A.fS,A.fT,A.fU,A.fV,A.fW,A.fX,A.fY,A.fZ,A.h_,A.h9,A.ha,A.hb,A.hj,A.hk,A.hl,A.hm,A.hn,A.ho,A.hp,A.hq,A.hc,A.hd,A.he,A.hf,A.hg,A.hh,A.hi,A.hs,A.ht,A.hu,A.hC,A.hD,A.hE,A.hF,A.hG,A.hH,A.hI,A.hJ,A.hv,A.hw,A.hx,A.hy,A.hz,A.hA,A.hB,A.hL,A.hM,A.hN,A.hU,A.hV,A.hW,A.hX,A.hY,A.hZ,A.i_,A.i0,A.hO,A.hP,A.hQ,A.hR,A.hS,A.hT,A.i2,A.i3,A.i4,A.ic,A.id,A.ie,A.ig,A.ih,A.ii,A.ij,A.ik,A.i5,A.i6,A.i7,A.i8,A.i9,A.ia,A.ib])
q(A.dC,[A.dz,A.bp])
q(A.T,[A.aG,A.dQ])
q(A.cZ,[A.eG,A.iv,A.eK,A.eN,A.fi,A.f4,A.f3])
q(A.cg,[A.dh,A.a3])
q(A.a3,[A.cB,A.cD])
r(A.cC,A.cB)
r(A.ce,A.cC)
r(A.cE,A.cD)
r(A.cf,A.cE)
q(A.ce,[A.di,A.dj])
q(A.cf,[A.dk,A.dl,A.dm,A.dn,A.dp,A.ch,A.ci])
r(A.cI,A.dO)
q(A.cY,[A.f9,A.fa,A.fl,A.fj,A.fK,A.fB,A.fA,A.eD,A.er,A.es,A.et,A.ev,A.ex,A.ez,A.eB,A.eu,A.eo,A.ep,A.eq,A.en,A.eX,A.e9,A.fO,A.fM,A.fN,A.ix,A.el,A.ek,A.ej,A.em,A.ea,A.ec,A.ee,A.eg,A.ei,A.fq,A.fs,A.iI,A.iH,A.iG,A.iF,A.iE,A.iJ,A.h8,A.hr,A.hK,A.i1,A.il])
r(A.dW,A.e1)
r(A.cy,A.cF)
q(A.b3,[A.cX,A.d2,A.de])
q(A.d0,[A.e8,A.eI,A.eH,A.f6,A.f5])
r(A.df,A.c9)
r(A.fg,A.fh)
r(A.dH,A.d2)
q(A.ay,[A.cl,A.d8])
r(A.dN,A.cO)
r(A.co,A.aP)
q(A.V,[A.a4,A.b8,A.ap,A.aq])
q(A.fc,[A.eL,A.bX,A.aU,A.cJ])
q(A.U,[A.aX,A.o,A.b9,A.am,A.cp,A.m,A.bW,A.ck,A.c_,A.ct,A.cx,A.cr,A.bY,A.c0])
s(A.bA,A.ba)
s(A.cB,A.G)
s(A.cC,A.a5)
s(A.cD,A.G)
s(A.cE,A.a5)
s(A.bE,A.cN)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",C:"double",bn:"num",r:"String",ah:"bool",ad:"Null",w:"List",D:"Object",S:"Map",M:"JSObject"},mangledNames:{},types:["~(D?)","~()","ad(M)","@()","au(aJ)","c1(aJ)","V(U)","U()","X<0^>(r,0^)<D?>","am()","ah(r)","~(M)","~(~())","@(@)","@(r)","ad()","~(D?,D?)","r()","M()","@(@,r)","ad(@)","ad(~())","~(@,@)","S<r,r>(S<r,r>,r)","0&(r,n?)","aV(as)","r(r)","~(r)","~(V)","w<aS>()","aX()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.mn(v.typeUniverse,JSON.parse('{"dr":"aR","bz":"aR","aQ":"aR","oj":"bv","db":{"ah":[],"I":[]},"c4":{"I":[]},"c7":{"M":[]},"aR":{"M":[]},"J":{"w":["1"],"t":["1"],"M":[],"p":["1"]},"da":{"cq":[]},"eF":{"J":["1"],"w":["1"],"t":["1"],"M":[],"p":["1"]},"b2":{"R":["1"]},"c5":{"C":[],"bn":[]},"c3":{"C":[],"n":[],"bn":[],"I":[]},"dc":{"C":[],"bn":[],"I":[]},"b6":{"r":[],"eP":[],"I":[]},"aA":{"O":[]},"bq":{"G":["n"],"ba":["n"],"w":["n"],"t":["n"],"p":["n"],"G.E":"n","ba.E":"n"},"t":{"p":["1"]},"u":{"t":["1"],"p":["1"]},"A":{"R":["1"]},"b7":{"p":["2"],"p.E":"2"},"bZ":{"b7":["1","2"],"t":["2"],"p":["2"],"p.E":"2"},"cd":{"R":["2"]},"a1":{"u":["2"],"t":["2"],"p":["2"],"u.E":"2","p.E":"2"},"bc":{"p":["1"],"p.E":"1"},"bd":{"R":["1"]},"bA":{"G":["1"],"ba":["1"],"w":["1"],"t":["1"],"p":["1"]},"E":{"u":["1"],"t":["1"],"p":["1"],"u.E":"1","p.E":"1"},"bT":{"aY":["1","2"],"bE":["1","2"],"bt":["1","2"],"cN":["1","2"],"S":["1","2"]},"bS":{"S":["1","2"]},"Z":{"bS":["1","2"],"S":["1","2"]},"be":{"p":["1"],"p.E":"1"},"bf":{"R":["1"]},"bU":{"aW":["1"],"dy":["1"],"t":["1"],"p":["1"]},"bV":{"bU":["1"],"aW":["1"],"dy":["1"],"t":["1"],"p":["1"]},"cj":{"O":[]},"dd":{"O":[]},"dE":{"O":[]},"cG":{"jV":[]},"aO":{"b5":[]},"cY":{"b5":[]},"cZ":{"b5":[]},"dC":{"b5":[]},"dz":{"b5":[]},"bp":{"b5":[]},"dw":{"O":[]},"aG":{"T":["1","2"],"jM":["1","2"],"S":["1","2"],"T.K":"1","T.V":"2"},"ao":{"t":["1"],"p":["1"],"p.E":"1"},"cb":{"R":["1"]},"a7":{"t":["1"],"p":["1"],"p.E":"1"},"cc":{"R":["1"]},"a6":{"t":["a9<1,2>"],"p":["a9<1,2>"],"p.E":"a9<1,2>"},"ca":{"R":["a9<1,2>"]},"br":{"lQ":[],"eP":[]},"dU":{"cn":[],"bu":[]},"dJ":{"p":["cn"],"p.E":"cn"},"dK":{"R":["cn"]},"dA":{"bu":[]},"dX":{"p":["bu"],"p.E":"bu"},"dY":{"R":["bu"]},"bv":{"M":[],"I":[]},"cg":{"M":[]},"dh":{"M":[],"I":[]},"a3":{"ac":["1"],"M":[]},"ce":{"G":["C"],"a3":["C"],"w":["C"],"ac":["C"],"t":["C"],"M":[],"p":["C"],"a5":["C"]},"cf":{"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"]},"di":{"G":["C"],"a3":["C"],"w":["C"],"ac":["C"],"t":["C"],"M":[],"p":["C"],"a5":["C"],"I":[],"G.E":"C"},"dj":{"G":["C"],"a3":["C"],"w":["C"],"ac":["C"],"t":["C"],"M":[],"p":["C"],"a5":["C"],"I":[],"G.E":"C"},"dk":{"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"],"I":[],"G.E":"n"},"dl":{"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"],"I":[],"G.E":"n"},"dm":{"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"],"I":[],"G.E":"n"},"dn":{"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"],"I":[],"G.E":"n"},"dp":{"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"],"I":[],"G.E":"n"},"ch":{"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"],"I":[],"G.E":"n"},"ci":{"j9":[],"G":["n"],"a3":["n"],"w":["n"],"ac":["n"],"t":["n"],"M":[],"p":["n"],"a5":["n"],"I":[],"G.E":"n"},"dO":{"O":[]},"cI":{"O":[]},"cH":{"R":["1"]},"bD":{"p":["1"],"p.E":"1"},"e1":{"k2":[]},"dW":{"k2":[]},"cy":{"aW":["1"],"dy":["1"],"t":["1"],"p":["1"]},"bg":{"R":["1"]},"G":{"w":["1"],"t":["1"],"p":["1"]},"T":{"S":["1","2"]},"cz":{"t":["2"],"p":["2"],"p.E":"2"},"cA":{"R":["2"]},"bt":{"S":["1","2"]},"aY":{"bE":["1","2"],"bt":["1","2"],"cN":["1","2"],"S":["1","2"]},"aW":{"dy":["1"],"t":["1"],"p":["1"]},"cF":{"aW":["1"],"dy":["1"],"t":["1"],"p":["1"]},"dQ":{"T":["r","@"],"S":["r","@"],"T.K":"r","T.V":"@"},"dR":{"u":["r"],"t":["r"],"p":["r"],"u.E":"r","p.E":"r"},"cX":{"b3":["w<n>","r"]},"d2":{"b3":["r","w<n>"]},"c9":{"O":[]},"df":{"O":[]},"de":{"b3":["D?","r"]},"dH":{"b3":["r","w<n>"]},"C":{"bn":[]},"n":{"bn":[]},"w":{"t":["1"],"p":["1"]},"cn":{"bu":[]},"r":{"eP":[]},"cV":{"O":[]},"cv":{"O":[]},"ay":{"O":[]},"cl":{"O":[]},"d8":{"O":[]},"cw":{"O":[]},"dD":{"O":[]},"by":{"O":[]},"d_":{"O":[]},"dq":{"O":[]},"cu":{"O":[]},"a2":{"lV":[]},"cO":{"dF":[]},"ai":{"dF":[]},"dN":{"dF":[]},"co":{"aP":["~"],"aP.P":"~"},"a4":{"V":[]},"ap":{"V":[]},"aq":{"V":[]},"X":{"k3":[]},"dT":{"j8":[]},"aX":{"U":[]},"am":{"U":[]},"au":{"j8":[]},"o":{"U":[]},"b9":{"U":[]},"cp":{"U":[]},"m":{"U":[]},"bW":{"U":[]},"ck":{"U":[]},"c_":{"U":[]},"ct":{"U":[]},"cx":{"U":[]},"cr":{"U":[]},"bY":{"U":[]},"c0":{"U":[]},"lz":{"w":["n"],"t":["n"],"p":["n"]},"j9":{"w":["n"],"t":["n"],"p":["n"]},"lZ":{"w":["n"],"t":["n"],"p":["n"]},"lx":{"w":["n"],"t":["n"],"p":["n"]},"lX":{"w":["n"],"t":["n"],"p":["n"]},"ly":{"w":["n"],"t":["n"],"p":["n"]},"lY":{"w":["n"],"t":["n"],"p":["n"]},"lv":{"w":["C"],"t":["C"],"p":["C"]},"lw":{"w":["C"],"t":["C"],"p":["C"]}}'))
A.mm(v.typeUniverse,JSON.parse('{"t":1,"bA":1,"a3":1,"cF":1,"d0":2}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",q:": URI should have a non-empty host name: ",c:"A CSS declaration separator is not allowed.",y:"A collaborative process that makes space for learning, feedback and steady progress.",O:"A conceptual customer portal that makes everyday requests easier to navigate and manage.",p:"A conceptual workspace for coordinating projects, priorities and decisions across a growing team.",J:"A straightforward starting point for a thoughtful conversation.",E:"A typical engagement can start with an assessment of the existing system and its priorities.",K:"Accessible, responsive digital experiences for modern teams.",M:"Align on the problem, people and desired outcomes.",F:"Bring processes, teams and information together in one place.",I:"Careful implementation and testing are part of the work, not an afterthought.",u:"Clear guidance for architecture, delivery and technology decisions.",G:"Connected systems designed around real operational needs.",o:"Contact details are placeholders and are not monitored.",C:"Design, build and test in clear, collaborative stages.",_:"Early involvement can clarify scope, validate assumptions and help avoid costly rework.",j:"Email: contact@example.com  \xb7  Business contact: placeholder",D:"Good software is not just delivered. It is understood, maintained and improved over time.",m:"Illustrative demo concepts, created to show the kinds of problems we can help solve. These are not client case studies.",L:"Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.",V:"Inline event attributes are not supported.",d:"Maintenance, documentation and ongoing improvements should be planned alongside delivery.",k:"Make essential services easier to find, use and trust.",n:"Open communication keeps decisions clear and progress visible.",v:"Our philosophy is to listen carefully, communicate openly and build with the people who will use and maintain the result in mind.",z:"Practical foundations leave room for products and teams to grow.",N:"Purpose-built applications that fit the way your business works.",Z:"Readable systems and thoughtful handovers support what comes next.",A:"Research-led interfaces that make complexity feel simple.",H:"Sparrow Kit is a technology company concept built around a simple belief: the best digital products combine human understanding with disciplined engineering.",r:"Sparrow Kit | Thoughtful software, built to last",Q:"Support, maintain and refine as needs change.",U:"Technical choices are grounded in the outcome you need.",x:"Tell us about the challenge, the opportunity or the idea you are exploring.",l:"These concepts show how software can help people make decisions, serve customers and move work forward.",g:"Turn insights into a focused plan and design direction.",w:"Turn operational data into useful, understandable insight.",b9:"Useful, intuitive experiences for people on the move.",cs:"When should we involve a technical partner?",b:"contact@example.com  \xb7  Placeholder contact",X:"display:inline-grid;place-items:center;line-height:1;font-size:24px;color:#142B46",R:"font-size:11px;letter-spacing:1.5px;color:#3B6691;font-weight:700",t:"font-size:11px;letter-spacing:1.5px;color:#ADC5DA;font-weight:700",T:"font-size:12px;color:#547B9E;font-weight:700",e:"font-size:14px;color:#40556A;font-weight:600",i:"font-size:14px;color:#FFFFFF;font-weight:600",h:"font-size:14px;line-height:1.6;color:#637183",P:"font-size:16px;letter-spacing:1.5px;color:#142B46;font-weight:700",B:"font-size:16px;letter-spacing:1.5px;color:#FFFFFF;font-weight:700",f:"font-size:16px;line-height:1.6;color:#637183",W:"font-size:16px;line-height:1.7;color:#D8E1EA",a:"font-size:18px;color:#142B46;font-weight:700",s:"font-size:28px;line-height:1.2;color:#142B46;font-weight:700",bX:"font-size:28px;line-height:1.2;color:#FFFFFF;font-weight:700",Y:"\xa9 2026 Sparrow Kit. Demonstration website."}
var t=(function rtii(){var s=A.ak
return{e:s("bq"),J:s("Z<r,D?>"),v:s("t<@>"),C:s("O"),Z:s("b5"),w:s("p<@>"),D:s("p<n>"),A:s("J<aP<@>>"),eO:s("J<M>"),I:s("J<aS>"),E:s("J<V>"),r:s("J<ar>"),V:s("J<D>"),d3:s("J<as>"),s:s("J<r>"),U:s("J<U>"),p:s("J<@>"),t:s("J<n>"),u:s("J<~()>"),T:s("c4"),m:s("M"),W:s("aQ"),aU:s("ac<@>"),F:s("lF"),eI:s("w<aS>"),fW:s("w<V>"),gS:s("w<U>"),_:s("w<@>"),Q:s("w<n>"),x:s("w<~()>"),bH:s("S<aU,r>"),Y:s("S<r,r>"),cO:s("S<r,bB>"),a:s("S<@,@>"),f:s("S<r,D?>"),ee:s("S<r,~(r)>"),d2:s("S<r,~(ah)>"),cT:s("S<r,~(D?)>"),c5:s("aq"),fV:s("aS"),eT:s("V"),ah:s("a4"),c:s("ar"),P:s("ad"),K:s("D"),gT:s("ok"),cz:s("cn"),b:s("aU"),q:s("K<C>"),G:s("K<n>"),j:s("as"),eV:s("aV"),O:s("aJ"),c7:s("X<S<r,r>>"),cH:s("X<aJ>"),L:s("X<ah>"),bS:s("X<@>"),dw:s("X<r?>"),l:s("jV"),N:s("r"),dm:s("I"),g:s("U"),ak:s("bz"),h:s("aY<r,r>"),k:s("dF"),af:s("k3"),cN:s("bB"),B:s("bC"),cV:s("dV"),y:s("ah"),i:s("C"),z:s("@"),S:s("n"),eH:s("jE<ad>?"),an:s("M?"),bM:s("w<@>?"),X:s("D?"),cd:s("K<C>?"),b9:s("K<n>?"),dk:s("r?"),R:s("dS?"),fQ:s("ah?"),cD:s("C?"),h6:s("n?"),cg:s("bn?"),n:s("bn"),H:s("~"),M:s("~()"),d:s("~(r)"),cA:s("~(r,@)"),dz:s("~(ah)"),o:s("~(D?)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.S=J.d9.prototype
B.d=J.J.prototype
B.l=J.c3.prototype
B.T=J.c5.prototype
B.b=J.b6.prototype
B.U=J.aQ.prototype
B.V=J.c7.prototype
B.G=A.ci.prototype
B.I=J.dr.prototype
B.z=J.bz.prototype
B.ao=new A.e8()
B.J=new A.cX()
B.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.K=function() {
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
B.P=function(getTagFallback) {
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
B.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.O=function(hooks) {
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
B.N=function(hooks) {
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
B.M=function(hooks) {
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
B.C=function(hooks) { return hooks; }

B.w=new A.de()
B.Q=new A.dq()
B.n=new A.dH()
B.R=new A.f6()
B.o=new A.dW()
B.p=new A.bX("center",1,"center")
B.f=new A.bX("stretch",3,"stretch")
B.e=new A.bX("flex-start",0,"start")
B.ap=new A.c(0,0,0,0)
B.W=new A.eH(null)
B.X=new A.eI(null)
B.v=new A.aU(null,0,"mobile")
B.u=new A.aU(600,1,"tablet")
B.t=new A.aU(1024,2,"desktop")
B.D=s([B.v,B.u,B.t],A.ak("J<aU>"))
B.E=s([],A.ak("J<lF>"))
B.Z=s([],t.I)
B.q=s([],t.E)
B.x=s([],t.r)
B.Y=s([],t.V)
B.i=s([],t.s)
B.a_=s([],t.U)
B.c=new A.eL(0,"start")
B.a8={style:0,role:1}
B.a0=new A.Z(B.a8,["position:fixed;inset:0;z-index:1000;display:flex","presentation"],t.J)
B.a7={type:0,"aria-label":1,style:2}
B.a1=new A.Z(B.a7,["button","Close navigation","position:absolute;inset:0;width:100%;height:100%;border:0;background:rgba(0,0,0,.4)"],t.J)
B.r={}
B.j=new A.Z(B.r,[],A.ak("Z<r,~(r)>"))
B.h=new A.Z(B.r,[],A.ak("Z<r,~(ah)>"))
B.k=new A.Z(B.r,[],A.ak("Z<r,~(D?)>"))
B.F=new A.Z(B.r,[],A.ak("Z<r,r>"))
B.a=new A.Z(B.r,[],t.J)
B.a6={type:0,"aria-label":1}
B.a2=new A.Z(B.a6,["button","Close navigation"],t.J)
B.H={style:0}
B.a3=new A.Z(B.H,["position:relative;min-height:100%"],t.J)
B.a4=new A.Z(B.H,["display:grid;gap:4px;max-width:100%"],t.J)
B.a9=new A.eR(!1,!0,!0,!0,!0)
B.a5={area:0,base:1,br:2,col:3,embed:4,hr:5,img:6,input:7,link:8,meta:9,param:10,source:11,track:12,wbr:13}
B.y=new A.bV(B.a5,14,A.ak("bV<r>"))
B.aa=new A.aX("Not Found",B.a)
B.ab=A.aD("oe")
B.ac=A.aD("of")
B.ad=A.aD("lv")
B.ae=A.aD("lw")
B.af=A.aD("lx")
B.ag=A.aD("ly")
B.ah=A.aD("lz")
B.ai=A.aD("lX")
B.aj=A.aD("lY")
B.ak=A.aD("lZ")
B.al=A.aD("j9")
B.am=new A.f5(!1)
B.an=new A.cJ(0,"root")
B.m=new A.cJ(1,"ordinary")
B.A=new A.cJ(2,"flex")})();(function staticFields(){$.fe=null
$.ag=A.e([],t.V)
$.jQ=null
$.jA=null
$.jz=null
$.kS=null
$.kI=null
$.kW=null
$.ir=null
$.iy=null
$.jr=null
$.bH=null
$.cQ=null
$.cR=null
$.jl=!1
$.dI=B.o
$.aI=A.e([],A.ak("J<bC>"))
$.aH=A.e([],A.ak("J<w<~()>>"))
$.bw=A.a8(t.B)
$.j5=!1
$.eQ=!1
$.bR=A.e([],t.A)
$.fL=A.j(t.N,A.ak("dZ"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"oh","l0",()=>A.is("_$dart_dartClosure"))
s($,"og","ju",()=>A.is("_$dart_dartClosure_dartJSInterop"))
s($,"oB","lg",()=>A.e([new J.da()],A.ak("J<cq>")))
s($,"ol","l1",()=>A.aL(A.f1({
toString:function(){return"$receiver$"}})))
s($,"om","l2",()=>A.aL(A.f1({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"on","l3",()=>A.aL(A.f1(null)))
s($,"oo","l4",()=>A.aL(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"or","l7",()=>A.aL(A.f1(void 0)))
s($,"os","l8",()=>A.aL(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"oq","l6",()=>A.aL(A.jY(null)))
s($,"op","l5",()=>A.aL(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ou","la",()=>A.aL(A.jY(void 0)))
s($,"ot","l9",()=>A.aL(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ov","jv",()=>A.m2())
s($,"oA","lf",()=>A.lL(4096))
s($,"oy","ld",()=>new A.fB().$0())
s($,"oz","le",()=>new A.fA().$0())
s($,"ow","lb",()=>new Int8Array(A.mT(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"ox","lc",()=>A.aT("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"oi","iY",()=>new A.d6(new WeakMap(),"SparrowKit active hydration",A.ak("d6<D>")))
s($,"oD","li",()=>A.aT("^[A-Za-z][A-Za-z0-9-]*$",!0))
s($,"oC","lh",()=>A.aT("^[A-Za-z_:][A-Za-z0-9:._-]*$",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bv,SharedArrayBuffer:A.bv,ArrayBufferView:A.cg,DataView:A.dh,Float32Array:A.di,Float64Array:A.dj,Int16Array:A.dk,Int32Array:A.dl,Int8Array:A.dm,Uint16Array:A.dn,Uint32Array:A.dp,Uint8ClampedArray:A.ch,CanvasPixelArray:A.ch,Uint8Array:A.ci})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a3.$nativeSuperclassTag="ArrayBufferView"
A.cB.$nativeSuperclassTag="ArrayBufferView"
A.cC.$nativeSuperclassTag="ArrayBufferView"
A.ce.$nativeSuperclassTag="ArrayBufferView"
A.cD.$nativeSuperclassTag="ArrayBufferView"
A.cE.$nativeSuperclassTag="ArrayBufferView"
A.cf.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.o2
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()