// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__12162){
var vec__12163 = p__12162;
var seq__12164 = cljs.core.seq(vec__12163);
var first__12165 = cljs.core.first(seq__12164);
var seq__12164__$1 = cljs.core.next(seq__12164);
var k = first__12165;
var ks = seq__12164__$1;
var keys = vec__12163;
if(ks){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = (re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : re_frame.utils.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});
