goog.provide('essays.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
essays.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Essays",new cljs.core.Keyword(null,"author","author",2111686192),"Bardia"], null));
essays.core.app = (function essays$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(essays.core.state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"By ",new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(essays.core.state))], null)], null);
});
essays.core.start = (function essays$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [essays.core.app], null),document.getElementById("app"));
});
essays.core.init = (function essays$core$init(){
console.log("init");

return essays.core.start();
});

//# sourceMappingURL=essays.core.js.map
