goog.provide('bardia_pourvakil.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
bardia_pourvakil.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Hi, I'm Bardia Pourvakil",new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"GrantTree",new cljs.core.Keyword(null,"place","place",-819689466),"London, UK"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"GDA Capital",new cljs.core.Keyword(null,"place","place",-819689466),"Toronto, CA"], null)], null),new cljs.core.Keyword(null,"favourite","favourite",-821216663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Antifragile",new cljs.core.Keyword(null,"author","author",2111686192),"Nassim Taleb"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Impro",new cljs.core.Keyword(null,"author","author",2111686192),"Keith Johnstone"], null)], null)], null)], null));
bardia_pourvakil.core.app = (function bardia_pourvakil$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bardia_pourvakil.core.state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Favourite books"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (p1__32745_SHARP_){
var fexpr__32746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__32745_SHARP_)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__32745_SHARP_))].join('')], null);
return (fexpr__32746.cljs$core$IFn$_invoke$arity$0 ? fexpr__32746.cljs$core$IFn$_invoke$arity$0() : fexpr__32746.call(null));
}),cljs.core.get_in,cljs.core.deref(bardia_pourvakil.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favourite","favourite",-821216663),new cljs.core.Keyword(null,"books","books",-2005362272)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Favourite movies"], null)], null);
});
bardia_pourvakil.core.start = (function bardia_pourvakil$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardia_pourvakil.core.app], null),document.getElementById("app"));
});
bardia_pourvakil.core.init = (function bardia_pourvakil$core$init(){
console.log("init");

return bardia_pourvakil.core.start();
});

//# sourceMappingURL=bardia_pourvakil.core.js.map
