goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35735){
var map__35736 = p__35735;
var map__35736__$1 = (((((!((map__35736 == null))))?(((((map__35736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35736):map__35736);
var m = map__35736__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35738_35874 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35739_35875 = null;
var count__35740_35876 = (0);
var i__35741_35877 = (0);
while(true){
if((i__35741_35877 < count__35740_35876)){
var f_35878 = chunk__35739_35875.cljs$core$IIndexed$_nth$arity$2(null,i__35741_35877);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35878], 0));


var G__35879 = seq__35738_35874;
var G__35880 = chunk__35739_35875;
var G__35881 = count__35740_35876;
var G__35882 = (i__35741_35877 + (1));
seq__35738_35874 = G__35879;
chunk__35739_35875 = G__35880;
count__35740_35876 = G__35881;
i__35741_35877 = G__35882;
continue;
} else {
var temp__5735__auto___35883 = cljs.core.seq(seq__35738_35874);
if(temp__5735__auto___35883){
var seq__35738_35884__$1 = temp__5735__auto___35883;
if(cljs.core.chunked_seq_QMARK_(seq__35738_35884__$1)){
var c__4609__auto___35885 = cljs.core.chunk_first(seq__35738_35884__$1);
var G__35886 = cljs.core.chunk_rest(seq__35738_35884__$1);
var G__35887 = c__4609__auto___35885;
var G__35888 = cljs.core.count(c__4609__auto___35885);
var G__35889 = (0);
seq__35738_35874 = G__35886;
chunk__35739_35875 = G__35887;
count__35740_35876 = G__35888;
i__35741_35877 = G__35889;
continue;
} else {
var f_35890 = cljs.core.first(seq__35738_35884__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35890], 0));


var G__35891 = cljs.core.next(seq__35738_35884__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35738_35874 = G__35891;
chunk__35739_35875 = G__35892;
count__35740_35876 = G__35893;
i__35741_35877 = G__35894;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35895 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35895], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35895)))?cljs.core.second(arglists_35895):arglists_35895)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35742_35901 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35743_35902 = null;
var count__35744_35903 = (0);
var i__35745_35904 = (0);
while(true){
if((i__35745_35904 < count__35744_35903)){
var vec__35756_35906 = chunk__35743_35902.cljs$core$IIndexed$_nth$arity$2(null,i__35745_35904);
var name_35907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35756_35906,(0),null);
var map__35759_35908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35756_35906,(1),null);
var map__35759_35909__$1 = (((((!((map__35759_35908 == null))))?(((((map__35759_35908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35759_35908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35759_35908):map__35759_35908);
var doc_35910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35759_35909__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35759_35909__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35907], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35911], 0));

if(cljs.core.truth_(doc_35910)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35910], 0));
} else {
}


var G__35924 = seq__35742_35901;
var G__35925 = chunk__35743_35902;
var G__35926 = count__35744_35903;
var G__35927 = (i__35745_35904 + (1));
seq__35742_35901 = G__35924;
chunk__35743_35902 = G__35925;
count__35744_35903 = G__35926;
i__35745_35904 = G__35927;
continue;
} else {
var temp__5735__auto___35937 = cljs.core.seq(seq__35742_35901);
if(temp__5735__auto___35937){
var seq__35742_35938__$1 = temp__5735__auto___35937;
if(cljs.core.chunked_seq_QMARK_(seq__35742_35938__$1)){
var c__4609__auto___35940 = cljs.core.chunk_first(seq__35742_35938__$1);
var G__35941 = cljs.core.chunk_rest(seq__35742_35938__$1);
var G__35942 = c__4609__auto___35940;
var G__35943 = cljs.core.count(c__4609__auto___35940);
var G__35944 = (0);
seq__35742_35901 = G__35941;
chunk__35743_35902 = G__35942;
count__35744_35903 = G__35943;
i__35745_35904 = G__35944;
continue;
} else {
var vec__35761_35947 = cljs.core.first(seq__35742_35938__$1);
var name_35948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761_35947,(0),null);
var map__35764_35949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761_35947,(1),null);
var map__35764_35950__$1 = (((((!((map__35764_35949 == null))))?(((((map__35764_35949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35764_35949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35764_35949):map__35764_35949);
var doc_35951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35764_35950__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35764_35950__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35948], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35952], 0));

if(cljs.core.truth_(doc_35951)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35951], 0));
} else {
}


var G__35956 = cljs.core.next(seq__35742_35938__$1);
var G__35957 = null;
var G__35958 = (0);
var G__35959 = (0);
seq__35742_35901 = G__35956;
chunk__35743_35902 = G__35957;
count__35744_35903 = G__35958;
i__35745_35904 = G__35959;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35766 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35767 = null;
var count__35768 = (0);
var i__35769 = (0);
while(true){
if((i__35769 < count__35768)){
var role = chunk__35767.cljs$core$IIndexed$_nth$arity$2(null,i__35769);
var temp__5735__auto___35969__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35969__$1)){
var spec_35970 = temp__5735__auto___35969__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35970)], 0));
} else {
}


var G__35971 = seq__35766;
var G__35972 = chunk__35767;
var G__35973 = count__35768;
var G__35974 = (i__35769 + (1));
seq__35766 = G__35971;
chunk__35767 = G__35972;
count__35768 = G__35973;
i__35769 = G__35974;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35766);
if(temp__5735__auto____$1){
var seq__35766__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35766__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35766__$1);
var G__35975 = cljs.core.chunk_rest(seq__35766__$1);
var G__35976 = c__4609__auto__;
var G__35977 = cljs.core.count(c__4609__auto__);
var G__35978 = (0);
seq__35766 = G__35975;
chunk__35767 = G__35976;
count__35768 = G__35977;
i__35769 = G__35978;
continue;
} else {
var role = cljs.core.first(seq__35766__$1);
var temp__5735__auto___35979__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35979__$2)){
var spec_35981 = temp__5735__auto___35979__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35981)], 0));
} else {
}


var G__35983 = cljs.core.next(seq__35766__$1);
var G__35984 = null;
var G__35985 = (0);
var G__35986 = (0);
seq__35766 = G__35983;
chunk__35767 = G__35984;
count__35768 = G__35985;
i__35769 = G__35986;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35987 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35988 = cljs.core.ex_cause(t);
via = G__35987;
t = G__35988;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35772 = datafied_throwable;
var map__35772__$1 = (((((!((map__35772 == null))))?(((((map__35772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35772):map__35772);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35772__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35772__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35772__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35774 = cljs.core.last(via);
var map__35774__$1 = (((((!((map__35774 == null))))?(((((map__35774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35774):map__35774);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35774__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35774__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35776 = data;
var map__35776__$1 = (((((!((map__35776 == null))))?(((((map__35776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35776):map__35776);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35777 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35777__$1 = (((((!((map__35777 == null))))?(((((map__35777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35777):map__35777);
var top_data = map__35777__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35786 = phase;
var G__35786__$1 = (((G__35786 instanceof cljs.core.Keyword))?G__35786.fqn:null);
switch (G__35786__$1) {
case "read-source":
var map__35787 = data;
var map__35787__$1 = (((((!((map__35787 == null))))?(((((map__35787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35787):map__35787);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35790 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35790__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35790,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35790);
var G__35790__$2 = (cljs.core.truth_((function (){var fexpr__35791 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35791.cljs$core$IFn$_invoke$arity$1 ? fexpr__35791.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35791.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35790__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35790__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35790__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35790__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35792 = top_data;
var G__35792__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35792,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35792);
var G__35792__$2 = (cljs.core.truth_((function (){var fexpr__35793 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35793.cljs$core$IFn$_invoke$arity$1 ? fexpr__35793.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35793.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35792__$1);
var G__35792__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35792__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35792__$2);
var G__35792__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35792__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35792__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35792__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35792__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35794 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(3),null);
var G__35797 = top_data;
var G__35797__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35797,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35797);
var G__35797__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35797__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35797__$1);
var G__35797__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35797__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35797__$2);
var G__35797__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35797__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35797__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35797__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35797__$4;
}

break;
case "execution":
var vec__35798 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35771_SHARP_){
var or__4185__auto__ = (p1__35771_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35802 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35802.cljs$core$IFn$_invoke$arity$1 ? fexpr__35802.cljs$core$IFn$_invoke$arity$1(p1__35771_SHARP_) : fexpr__35802.call(null,p1__35771_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35803 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35803__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35803);
var G__35803__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35803__$1);
var G__35803__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35803__$2);
var G__35803__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35803__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35803__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35786__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35813){
var map__35816 = p__35813;
var map__35816__$1 = (((((!((map__35816 == null))))?(((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35816):map__35816);
var triage_data = map__35816__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35820 = phase;
var G__35820__$1 = (((G__35820 instanceof cljs.core.Keyword))?G__35820.fqn:null);
switch (G__35820__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35822 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35823 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35824 = loc;
var G__35825 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35828_36068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35829_36069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35830_36070 = true;
var _STAR_print_fn_STAR__temp_val__35831_36071 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35830_36070);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35831_36071);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35810_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35810_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35829_36069);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35828_36068);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35822,G__35823,G__35824,G__35825) : format.call(null,G__35822,G__35823,G__35824,G__35825));

break;
case "macroexpansion":
var G__35834 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35835 = cause_type;
var G__35836 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35837 = loc;
var G__35838 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35834,G__35835,G__35836,G__35837,G__35838) : format.call(null,G__35834,G__35835,G__35836,G__35837,G__35838));

break;
case "compile-syntax-check":
var G__35839 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35840 = cause_type;
var G__35841 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35842 = loc;
var G__35843 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35839,G__35840,G__35841,G__35842,G__35843) : format.call(null,G__35839,G__35840,G__35841,G__35842,G__35843));

break;
case "compilation":
var G__35845 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35846 = cause_type;
var G__35847 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35848 = loc;
var G__35849 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35845,G__35846,G__35847,G__35848,G__35849) : format.call(null,G__35845,G__35846,G__35847,G__35848,G__35849));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35850 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35851 = symbol;
var G__35852 = loc;
var G__35853 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35856_36076 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35857_36077 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35858_36078 = true;
var _STAR_print_fn_STAR__temp_val__35859_36079 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35858_36078);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35859_36079);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35811_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35811_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35857_36077);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35856_36076);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35850,G__35851,G__35852,G__35853) : format.call(null,G__35850,G__35851,G__35852,G__35853));
} else {
var G__35867 = "Execution error%s at %s(%s).\n%s\n";
var G__35868 = cause_type;
var G__35869 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35870 = loc;
var G__35871 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35867,G__35868,G__35869,G__35870,G__35871) : format.call(null,G__35867,G__35868,G__35869,G__35870,G__35871));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35820__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
