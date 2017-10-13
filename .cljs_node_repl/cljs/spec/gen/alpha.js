// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__35318__auto__,writer__35319__auto__,opt__35320__auto__){
return cljs.core._write.call(null,writer__35319__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37469 = arguments.length;
var i__35925__auto___37470 = (0);
while(true){
if((i__35925__auto___37470 < len__35924__auto___37469)){
args__35931__auto__.push((arguments[i__35925__auto___37470]));

var G__37471 = (i__35925__auto___37470 + (1));
i__35925__auto___37470 = G__37471;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq37468){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37468));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37473 = arguments.length;
var i__35925__auto___37474 = (0);
while(true){
if((i__35925__auto___37474 < len__35924__auto___37473)){
args__35931__auto__.push((arguments[i__35925__auto___37474]));

var G__37475 = (i__35925__auto___37474 + (1));
i__35925__auto___37474 = G__37475;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq37472){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37472));
});

var g_QMARK__37476 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_37477 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37476){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__37476))
,null));
var mkg_37478 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37476,g_37477){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__37476,g_37477))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__37476,g_37477,mkg_37478){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37476).call(null,x);
});})(g_QMARK__37476,g_37477,mkg_37478))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__37476,g_37477,mkg_37478){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_37478).call(null,gfn);
});})(g_QMARK__37476,g_37477,mkg_37478))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__37476,g_37477,mkg_37478){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_37477).call(null,generator);
});})(g_QMARK__37476,g_37477,mkg_37478))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__36027__auto___37498 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__36027__auto___37498){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37499 = arguments.length;
var i__35925__auto___37500 = (0);
while(true){
if((i__35925__auto___37500 < len__35924__auto___37499)){
args__35931__auto__.push((arguments[i__35925__auto___37500]));

var G__37501 = (i__35925__auto___37500 + (1));
i__35925__auto___37500 = G__37501;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37498))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37498){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37498),args);
});})(g__36027__auto___37498))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__36027__auto___37498){
return (function (seq37479){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37479));
});})(g__36027__auto___37498))
;


var g__36027__auto___37502 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__36027__auto___37502){
return (function cljs$spec$gen$alpha$list(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37503 = arguments.length;
var i__35925__auto___37504 = (0);
while(true){
if((i__35925__auto___37504 < len__35924__auto___37503)){
args__35931__auto__.push((arguments[i__35925__auto___37504]));

var G__37505 = (i__35925__auto___37504 + (1));
i__35925__auto___37504 = G__37505;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37502))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37502){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37502),args);
});})(g__36027__auto___37502))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__36027__auto___37502){
return (function (seq37480){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37480));
});})(g__36027__auto___37502))
;


var g__36027__auto___37506 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__36027__auto___37506){
return (function cljs$spec$gen$alpha$map(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37507 = arguments.length;
var i__35925__auto___37508 = (0);
while(true){
if((i__35925__auto___37508 < len__35924__auto___37507)){
args__35931__auto__.push((arguments[i__35925__auto___37508]));

var G__37509 = (i__35925__auto___37508 + (1));
i__35925__auto___37508 = G__37509;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37506))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37506),args);
});})(g__36027__auto___37506))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__36027__auto___37506){
return (function (seq37481){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37481));
});})(g__36027__auto___37506))
;


var g__36027__auto___37510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__36027__auto___37510){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37511 = arguments.length;
var i__35925__auto___37512 = (0);
while(true){
if((i__35925__auto___37512 < len__35924__auto___37511)){
args__35931__auto__.push((arguments[i__35925__auto___37512]));

var G__37513 = (i__35925__auto___37512 + (1));
i__35925__auto___37512 = G__37513;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37510))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37510),args);
});})(g__36027__auto___37510))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__36027__auto___37510){
return (function (seq37482){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37482));
});})(g__36027__auto___37510))
;


var g__36027__auto___37514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__36027__auto___37514){
return (function cljs$spec$gen$alpha$set(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37515 = arguments.length;
var i__35925__auto___37516 = (0);
while(true){
if((i__35925__auto___37516 < len__35924__auto___37515)){
args__35931__auto__.push((arguments[i__35925__auto___37516]));

var G__37517 = (i__35925__auto___37516 + (1));
i__35925__auto___37516 = G__37517;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37514))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37514),args);
});})(g__36027__auto___37514))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__36027__auto___37514){
return (function (seq37483){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37483));
});})(g__36027__auto___37514))
;


var g__36027__auto___37518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__36027__auto___37518){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37519 = arguments.length;
var i__35925__auto___37520 = (0);
while(true){
if((i__35925__auto___37520 < len__35924__auto___37519)){
args__35931__auto__.push((arguments[i__35925__auto___37520]));

var G__37521 = (i__35925__auto___37520 + (1));
i__35925__auto___37520 = G__37521;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37518))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37518),args);
});})(g__36027__auto___37518))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__36027__auto___37518){
return (function (seq37484){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37484));
});})(g__36027__auto___37518))
;


var g__36027__auto___37522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__36027__auto___37522){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37523 = arguments.length;
var i__35925__auto___37524 = (0);
while(true){
if((i__35925__auto___37524 < len__35924__auto___37523)){
args__35931__auto__.push((arguments[i__35925__auto___37524]));

var G__37525 = (i__35925__auto___37524 + (1));
i__35925__auto___37524 = G__37525;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37522))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37522),args);
});})(g__36027__auto___37522))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__36027__auto___37522){
return (function (seq37485){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37485));
});})(g__36027__auto___37522))
;


var g__36027__auto___37526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__36027__auto___37526){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37527 = arguments.length;
var i__35925__auto___37528 = (0);
while(true){
if((i__35925__auto___37528 < len__35924__auto___37527)){
args__35931__auto__.push((arguments[i__35925__auto___37528]));

var G__37529 = (i__35925__auto___37528 + (1));
i__35925__auto___37528 = G__37529;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37526))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37526),args);
});})(g__36027__auto___37526))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__36027__auto___37526){
return (function (seq37486){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37486));
});})(g__36027__auto___37526))
;


var g__36027__auto___37530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__36027__auto___37530){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37531 = arguments.length;
var i__35925__auto___37532 = (0);
while(true){
if((i__35925__auto___37532 < len__35924__auto___37531)){
args__35931__auto__.push((arguments[i__35925__auto___37532]));

var G__37533 = (i__35925__auto___37532 + (1));
i__35925__auto___37532 = G__37533;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37530))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37530),args);
});})(g__36027__auto___37530))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__36027__auto___37530){
return (function (seq37487){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37487));
});})(g__36027__auto___37530))
;


var g__36027__auto___37534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__36027__auto___37534){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37535 = arguments.length;
var i__35925__auto___37536 = (0);
while(true){
if((i__35925__auto___37536 < len__35924__auto___37535)){
args__35931__auto__.push((arguments[i__35925__auto___37536]));

var G__37537 = (i__35925__auto___37536 + (1));
i__35925__auto___37536 = G__37537;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37534))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37534),args);
});})(g__36027__auto___37534))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__36027__auto___37534){
return (function (seq37488){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37488));
});})(g__36027__auto___37534))
;


var g__36027__auto___37538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__36027__auto___37538){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37539 = arguments.length;
var i__35925__auto___37540 = (0);
while(true){
if((i__35925__auto___37540 < len__35924__auto___37539)){
args__35931__auto__.push((arguments[i__35925__auto___37540]));

var G__37541 = (i__35925__auto___37540 + (1));
i__35925__auto___37540 = G__37541;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37538))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37538),args);
});})(g__36027__auto___37538))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__36027__auto___37538){
return (function (seq37489){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37489));
});})(g__36027__auto___37538))
;


var g__36027__auto___37542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__36027__auto___37542){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37543 = arguments.length;
var i__35925__auto___37544 = (0);
while(true){
if((i__35925__auto___37544 < len__35924__auto___37543)){
args__35931__auto__.push((arguments[i__35925__auto___37544]));

var G__37545 = (i__35925__auto___37544 + (1));
i__35925__auto___37544 = G__37545;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37542))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37542),args);
});})(g__36027__auto___37542))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__36027__auto___37542){
return (function (seq37490){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37490));
});})(g__36027__auto___37542))
;


var g__36027__auto___37546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__36027__auto___37546){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37547 = arguments.length;
var i__35925__auto___37548 = (0);
while(true){
if((i__35925__auto___37548 < len__35924__auto___37547)){
args__35931__auto__.push((arguments[i__35925__auto___37548]));

var G__37549 = (i__35925__auto___37548 + (1));
i__35925__auto___37548 = G__37549;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37546))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37546),args);
});})(g__36027__auto___37546))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__36027__auto___37546){
return (function (seq37491){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37491));
});})(g__36027__auto___37546))
;


var g__36027__auto___37550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__36027__auto___37550){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37551 = arguments.length;
var i__35925__auto___37552 = (0);
while(true){
if((i__35925__auto___37552 < len__35924__auto___37551)){
args__35931__auto__.push((arguments[i__35925__auto___37552]));

var G__37553 = (i__35925__auto___37552 + (1));
i__35925__auto___37552 = G__37553;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37550))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37550),args);
});})(g__36027__auto___37550))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__36027__auto___37550){
return (function (seq37492){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37492));
});})(g__36027__auto___37550))
;


var g__36027__auto___37554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__36027__auto___37554){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37555 = arguments.length;
var i__35925__auto___37556 = (0);
while(true){
if((i__35925__auto___37556 < len__35924__auto___37555)){
args__35931__auto__.push((arguments[i__35925__auto___37556]));

var G__37557 = (i__35925__auto___37556 + (1));
i__35925__auto___37556 = G__37557;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37554))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37554),args);
});})(g__36027__auto___37554))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__36027__auto___37554){
return (function (seq37493){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37493));
});})(g__36027__auto___37554))
;


var g__36027__auto___37558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__36027__auto___37558){
return (function cljs$spec$gen$alpha$return(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37559 = arguments.length;
var i__35925__auto___37560 = (0);
while(true){
if((i__35925__auto___37560 < len__35924__auto___37559)){
args__35931__auto__.push((arguments[i__35925__auto___37560]));

var G__37561 = (i__35925__auto___37560 + (1));
i__35925__auto___37560 = G__37561;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37558))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37558),args);
});})(g__36027__auto___37558))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__36027__auto___37558){
return (function (seq37494){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37494));
});})(g__36027__auto___37558))
;


var g__36027__auto___37562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__36027__auto___37562){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37563 = arguments.length;
var i__35925__auto___37564 = (0);
while(true){
if((i__35925__auto___37564 < len__35924__auto___37563)){
args__35931__auto__.push((arguments[i__35925__auto___37564]));

var G__37565 = (i__35925__auto___37564 + (1));
i__35925__auto___37564 = G__37565;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37562))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37562),args);
});})(g__36027__auto___37562))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__36027__auto___37562){
return (function (seq37495){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37495));
});})(g__36027__auto___37562))
;


var g__36027__auto___37566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__36027__auto___37566){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37567 = arguments.length;
var i__35925__auto___37568 = (0);
while(true){
if((i__35925__auto___37568 < len__35924__auto___37567)){
args__35931__auto__.push((arguments[i__35925__auto___37568]));

var G__37569 = (i__35925__auto___37568 + (1));
i__35925__auto___37568 = G__37569;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37566))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37566),args);
});})(g__36027__auto___37566))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__36027__auto___37566){
return (function (seq37496){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37496));
});})(g__36027__auto___37566))
;


var g__36027__auto___37570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__36027__auto___37570){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37571 = arguments.length;
var i__35925__auto___37572 = (0);
while(true){
if((i__35925__auto___37572 < len__35924__auto___37571)){
args__35931__auto__.push((arguments[i__35925__auto___37572]));

var G__37573 = (i__35925__auto___37572 + (1));
i__35925__auto___37572 = G__37573;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36027__auto___37570))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36027__auto___37570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36027__auto___37570),args);
});})(g__36027__auto___37570))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__36027__auto___37570){
return (function (seq37497){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37497));
});})(g__36027__auto___37570))
;

var g__36040__auto___37595 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__36040__auto___37595){
return (function cljs$spec$gen$alpha$any(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37596 = arguments.length;
var i__35925__auto___37597 = (0);
while(true){
if((i__35925__auto___37597 < len__35924__auto___37596)){
args__35931__auto__.push((arguments[i__35925__auto___37597]));

var G__37598 = (i__35925__auto___37597 + (1));
i__35925__auto___37597 = G__37598;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37595))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37595){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37595);
});})(g__36040__auto___37595))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__36040__auto___37595){
return (function (seq37574){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37574));
});})(g__36040__auto___37595))
;


var g__36040__auto___37599 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__36040__auto___37599){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37600 = arguments.length;
var i__35925__auto___37601 = (0);
while(true){
if((i__35925__auto___37601 < len__35924__auto___37600)){
args__35931__auto__.push((arguments[i__35925__auto___37601]));

var G__37602 = (i__35925__auto___37601 + (1));
i__35925__auto___37601 = G__37602;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37599))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37599){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37599);
});})(g__36040__auto___37599))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__36040__auto___37599){
return (function (seq37575){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37575));
});})(g__36040__auto___37599))
;


var g__36040__auto___37603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__36040__auto___37603){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37604 = arguments.length;
var i__35925__auto___37605 = (0);
while(true){
if((i__35925__auto___37605 < len__35924__auto___37604)){
args__35931__auto__.push((arguments[i__35925__auto___37605]));

var G__37606 = (i__35925__auto___37605 + (1));
i__35925__auto___37605 = G__37606;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37603))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37603){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37603);
});})(g__36040__auto___37603))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__36040__auto___37603){
return (function (seq37576){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37576));
});})(g__36040__auto___37603))
;


var g__36040__auto___37607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__36040__auto___37607){
return (function cljs$spec$gen$alpha$char(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37608 = arguments.length;
var i__35925__auto___37609 = (0);
while(true){
if((i__35925__auto___37609 < len__35924__auto___37608)){
args__35931__auto__.push((arguments[i__35925__auto___37609]));

var G__37610 = (i__35925__auto___37609 + (1));
i__35925__auto___37609 = G__37610;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37607))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37607){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37607);
});})(g__36040__auto___37607))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__36040__auto___37607){
return (function (seq37577){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37577));
});})(g__36040__auto___37607))
;


var g__36040__auto___37611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__36040__auto___37611){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37612 = arguments.length;
var i__35925__auto___37613 = (0);
while(true){
if((i__35925__auto___37613 < len__35924__auto___37612)){
args__35931__auto__.push((arguments[i__35925__auto___37613]));

var G__37614 = (i__35925__auto___37613 + (1));
i__35925__auto___37613 = G__37614;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37611))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37611){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37611);
});})(g__36040__auto___37611))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__36040__auto___37611){
return (function (seq37578){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37578));
});})(g__36040__auto___37611))
;


var g__36040__auto___37615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__36040__auto___37615){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37616 = arguments.length;
var i__35925__auto___37617 = (0);
while(true){
if((i__35925__auto___37617 < len__35924__auto___37616)){
args__35931__auto__.push((arguments[i__35925__auto___37617]));

var G__37618 = (i__35925__auto___37617 + (1));
i__35925__auto___37617 = G__37618;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37615))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37615){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37615);
});})(g__36040__auto___37615))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__36040__auto___37615){
return (function (seq37579){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37579));
});})(g__36040__auto___37615))
;


var g__36040__auto___37619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__36040__auto___37619){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37620 = arguments.length;
var i__35925__auto___37621 = (0);
while(true){
if((i__35925__auto___37621 < len__35924__auto___37620)){
args__35931__auto__.push((arguments[i__35925__auto___37621]));

var G__37622 = (i__35925__auto___37621 + (1));
i__35925__auto___37621 = G__37622;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37619))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37619){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37619);
});})(g__36040__auto___37619))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__36040__auto___37619){
return (function (seq37580){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37580));
});})(g__36040__auto___37619))
;


var g__36040__auto___37623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__36040__auto___37623){
return (function cljs$spec$gen$alpha$double(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37624 = arguments.length;
var i__35925__auto___37625 = (0);
while(true){
if((i__35925__auto___37625 < len__35924__auto___37624)){
args__35931__auto__.push((arguments[i__35925__auto___37625]));

var G__37626 = (i__35925__auto___37625 + (1));
i__35925__auto___37625 = G__37626;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37623))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37623){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37623);
});})(g__36040__auto___37623))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__36040__auto___37623){
return (function (seq37581){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37581));
});})(g__36040__auto___37623))
;


var g__36040__auto___37627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__36040__auto___37627){
return (function cljs$spec$gen$alpha$int(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37628 = arguments.length;
var i__35925__auto___37629 = (0);
while(true){
if((i__35925__auto___37629 < len__35924__auto___37628)){
args__35931__auto__.push((arguments[i__35925__auto___37629]));

var G__37630 = (i__35925__auto___37629 + (1));
i__35925__auto___37629 = G__37630;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37627))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37627){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37627);
});})(g__36040__auto___37627))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__36040__auto___37627){
return (function (seq37582){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37582));
});})(g__36040__auto___37627))
;


var g__36040__auto___37631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__36040__auto___37631){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37632 = arguments.length;
var i__35925__auto___37633 = (0);
while(true){
if((i__35925__auto___37633 < len__35924__auto___37632)){
args__35931__auto__.push((arguments[i__35925__auto___37633]));

var G__37634 = (i__35925__auto___37633 + (1));
i__35925__auto___37633 = G__37634;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37631))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37631){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37631);
});})(g__36040__auto___37631))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__36040__auto___37631){
return (function (seq37583){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37583));
});})(g__36040__auto___37631))
;


var g__36040__auto___37635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__36040__auto___37635){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37636 = arguments.length;
var i__35925__auto___37637 = (0);
while(true){
if((i__35925__auto___37637 < len__35924__auto___37636)){
args__35931__auto__.push((arguments[i__35925__auto___37637]));

var G__37638 = (i__35925__auto___37637 + (1));
i__35925__auto___37637 = G__37638;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37635))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37635){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37635);
});})(g__36040__auto___37635))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__36040__auto___37635){
return (function (seq37584){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37584));
});})(g__36040__auto___37635))
;


var g__36040__auto___37639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__36040__auto___37639){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37640 = arguments.length;
var i__35925__auto___37641 = (0);
while(true){
if((i__35925__auto___37641 < len__35924__auto___37640)){
args__35931__auto__.push((arguments[i__35925__auto___37641]));

var G__37642 = (i__35925__auto___37641 + (1));
i__35925__auto___37641 = G__37642;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37639))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37639){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37639);
});})(g__36040__auto___37639))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__36040__auto___37639){
return (function (seq37585){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37585));
});})(g__36040__auto___37639))
;


var g__36040__auto___37643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__36040__auto___37643){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37644 = arguments.length;
var i__35925__auto___37645 = (0);
while(true){
if((i__35925__auto___37645 < len__35924__auto___37644)){
args__35931__auto__.push((arguments[i__35925__auto___37645]));

var G__37646 = (i__35925__auto___37645 + (1));
i__35925__auto___37645 = G__37646;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37643))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37643){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37643);
});})(g__36040__auto___37643))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__36040__auto___37643){
return (function (seq37586){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37586));
});})(g__36040__auto___37643))
;


var g__36040__auto___37647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__36040__auto___37647){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37648 = arguments.length;
var i__35925__auto___37649 = (0);
while(true){
if((i__35925__auto___37649 < len__35924__auto___37648)){
args__35931__auto__.push((arguments[i__35925__auto___37649]));

var G__37650 = (i__35925__auto___37649 + (1));
i__35925__auto___37649 = G__37650;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37647))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37647){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37647);
});})(g__36040__auto___37647))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__36040__auto___37647){
return (function (seq37587){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37587));
});})(g__36040__auto___37647))
;


var g__36040__auto___37651 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__36040__auto___37651){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37652 = arguments.length;
var i__35925__auto___37653 = (0);
while(true){
if((i__35925__auto___37653 < len__35924__auto___37652)){
args__35931__auto__.push((arguments[i__35925__auto___37653]));

var G__37654 = (i__35925__auto___37653 + (1));
i__35925__auto___37653 = G__37654;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37651))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37651){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37651);
});})(g__36040__auto___37651))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__36040__auto___37651){
return (function (seq37588){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37588));
});})(g__36040__auto___37651))
;


var g__36040__auto___37655 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__36040__auto___37655){
return (function cljs$spec$gen$alpha$string(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37656 = arguments.length;
var i__35925__auto___37657 = (0);
while(true){
if((i__35925__auto___37657 < len__35924__auto___37656)){
args__35931__auto__.push((arguments[i__35925__auto___37657]));

var G__37658 = (i__35925__auto___37657 + (1));
i__35925__auto___37657 = G__37658;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37655))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37655){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37655);
});})(g__36040__auto___37655))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__36040__auto___37655){
return (function (seq37589){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37589));
});})(g__36040__auto___37655))
;


var g__36040__auto___37659 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__36040__auto___37659){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37660 = arguments.length;
var i__35925__auto___37661 = (0);
while(true){
if((i__35925__auto___37661 < len__35924__auto___37660)){
args__35931__auto__.push((arguments[i__35925__auto___37661]));

var G__37662 = (i__35925__auto___37661 + (1));
i__35925__auto___37661 = G__37662;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37659))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37659){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37659);
});})(g__36040__auto___37659))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__36040__auto___37659){
return (function (seq37590){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37590));
});})(g__36040__auto___37659))
;


var g__36040__auto___37663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__36040__auto___37663){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37664 = arguments.length;
var i__35925__auto___37665 = (0);
while(true){
if((i__35925__auto___37665 < len__35924__auto___37664)){
args__35931__auto__.push((arguments[i__35925__auto___37665]));

var G__37666 = (i__35925__auto___37665 + (1));
i__35925__auto___37665 = G__37666;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37663))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37663){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37663);
});})(g__36040__auto___37663))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__36040__auto___37663){
return (function (seq37591){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37591));
});})(g__36040__auto___37663))
;


var g__36040__auto___37667 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__36040__auto___37667){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37668 = arguments.length;
var i__35925__auto___37669 = (0);
while(true){
if((i__35925__auto___37669 < len__35924__auto___37668)){
args__35931__auto__.push((arguments[i__35925__auto___37669]));

var G__37670 = (i__35925__auto___37669 + (1));
i__35925__auto___37669 = G__37670;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37667))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37667){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37667);
});})(g__36040__auto___37667))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__36040__auto___37667){
return (function (seq37592){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37592));
});})(g__36040__auto___37667))
;


var g__36040__auto___37671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__36040__auto___37671){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37672 = arguments.length;
var i__35925__auto___37673 = (0);
while(true){
if((i__35925__auto___37673 < len__35924__auto___37672)){
args__35931__auto__.push((arguments[i__35925__auto___37673]));

var G__37674 = (i__35925__auto___37673 + (1));
i__35925__auto___37673 = G__37674;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37671))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37671){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37671);
});})(g__36040__auto___37671))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__36040__auto___37671){
return (function (seq37593){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37593));
});})(g__36040__auto___37671))
;


var g__36040__auto___37675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__36040__auto___37675){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37676 = arguments.length;
var i__35925__auto___37677 = (0);
while(true){
if((i__35925__auto___37677 < len__35924__auto___37676)){
args__35931__auto__.push((arguments[i__35925__auto___37677]));

var G__37678 = (i__35925__auto___37677 + (1));
i__35925__auto___37677 = G__37678;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});})(g__36040__auto___37675))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36040__auto___37675){
return (function (args){
return cljs.core.deref.call(null,g__36040__auto___37675);
});})(g__36040__auto___37675))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__36040__auto___37675){
return (function (seq37594){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37594));
});})(g__36040__auto___37675))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__35931__auto__ = [];
var len__35924__auto___37681 = arguments.length;
var i__35925__auto___37682 = (0);
while(true){
if((i__35925__auto___37682 < len__35924__auto___37681)){
args__35931__auto__.push((arguments[i__35925__auto___37682]));

var G__37683 = (i__35925__auto___37682 + (1));
i__35925__auto___37682 = G__37683;
continue;
} else {
}
break;
}

var argseq__35932__auto__ = ((((0) < args__35931__auto__.length))?(new cljs.core.IndexedSeq(args__35931__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__35932__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__37679_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37679_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq37680){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37680));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__37684_SHARP_){
return (new Date(p1__37684_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
