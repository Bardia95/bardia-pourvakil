goog.provide('bardia_pourvakil.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
bardia_pourvakil.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Hi, I'm Bardia Pourvakil",new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"GrantTree",new cljs.core.Keyword(null,"place","place",-819689466),"London, UK",new cljs.core.Keyword(null,"link","link",-1769163468),"https://www.granttree.co.uk"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"GDA Capital",new cljs.core.Keyword(null,"place","place",-819689466),"Toronto, CA",new cljs.core.Keyword(null,"link","link",-1769163468),"https://gda.captial"], null)], null),new cljs.core.Keyword(null,"favourite","favourite",-821216663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Antifragile",new cljs.core.Keyword(null,"author","author",2111686192),"Nassim Taleb"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Impro",new cljs.core.Keyword(null,"author","author",2111686192),"Keith Johnstone"], null)], null)], null)], null));
bardia_pourvakil.core.book_lister = (function bardia_pourvakil$core$book_lister(books){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function bardia_pourvakil$core$book_lister_$_iter__32886(s__32887){
return (new cljs.core.LazySeq(null,(function (){
var s__32887__$1 = s__32887;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32887__$1);
if(temp__5735__auto__){
var s__32887__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32887__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32887__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32889 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32888 = (0);
while(true){
if((i__32888 < size__4581__auto__)){
var book = cljs.core._nth(c__4580__auto__,i__32888);
cljs.core.chunk_append(b__32889,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(book))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book)], null)));

var G__32892 = (i__32888 + (1));
i__32888 = G__32892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32889),bardia_pourvakil$core$book_lister_$_iter__32886(cljs.core.chunk_rest(s__32887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32889),null);
}
} else {
var book = cljs.core.first(s__32887__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(book))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book)], null)),bardia_pourvakil$core$book_lister_$_iter__32886(cljs.core.rest(s__32887__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(books);
})()], null);
});
bardia_pourvakil.core.app = (function bardia_pourvakil$core$app(){
var grant_tree = (function (){var fexpr__32890 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bardia_pourvakil.core.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"work","work",385770312)], null));
return (fexpr__32890.cljs$core$IFn$_invoke$arity$1 ? fexpr__32890.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__32890.call(null,(0)));
})();
var gda_capital = (function (){var fexpr__32891 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bardia_pourvakil.core.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"work","work",385770312)], null));
return (fexpr__32891.cljs$core$IFn$_invoke$arity$1 ? fexpr__32891.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__32891.call(null,(1)));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bardia_pourvakil.core.state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I write for grants for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(grant_tree)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(grant_tree)], null),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I do blockchain content marketing for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(gda_capital)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(gda_capital)], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Favourite books"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardia_pourvakil.core.book_lister,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bardia_pourvakil.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favourite","favourite",-821216663),new cljs.core.Keyword(null,"books","books",-2005362272)], null))], null)], null);
});
bardia_pourvakil.core.start = (function bardia_pourvakil$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardia_pourvakil.core.app], null),document.getElementById("app"));
});
bardia_pourvakil.core.init = (function bardia_pourvakil$core$init(){
console.log("init");

return bardia_pourvakil.core.start();
});

//# sourceMappingURL=bardia_pourvakil.core.js.map
