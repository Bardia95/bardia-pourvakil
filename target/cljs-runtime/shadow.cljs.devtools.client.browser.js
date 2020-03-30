goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34694 = arguments.length;
var i__4790__auto___34695 = (0);
while(true){
if((i__4790__auto___34695 < len__4789__auto___34694)){
args__4795__auto__.push((arguments[i__4790__auto___34695]));

var G__34696 = (i__4790__auto___34695 + (1));
i__4790__auto___34695 = G__34696;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34522){
var G__34523 = cljs.core.first(seq34522);
var seq34522__$1 = cljs.core.next(seq34522);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34523,seq34522__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34531 = cljs.core.seq(sources);
var chunk__34532 = null;
var count__34533 = (0);
var i__34534 = (0);
while(true){
if((i__34534 < count__34533)){
var map__34545 = chunk__34532.cljs$core$IIndexed$_nth$arity$2(null,i__34534);
var map__34545__$1 = (((((!((map__34545 == null))))?(((((map__34545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34545):map__34545);
var src = map__34545__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34551){var e_34698 = e34551;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34698);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34698.message)].join('')));
}

var G__34699 = seq__34531;
var G__34700 = chunk__34532;
var G__34701 = count__34533;
var G__34702 = (i__34534 + (1));
seq__34531 = G__34699;
chunk__34532 = G__34700;
count__34533 = G__34701;
i__34534 = G__34702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34531);
if(temp__5735__auto__){
var seq__34531__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34531__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34531__$1);
var G__34703 = cljs.core.chunk_rest(seq__34531__$1);
var G__34704 = c__4609__auto__;
var G__34705 = cljs.core.count(c__4609__auto__);
var G__34706 = (0);
seq__34531 = G__34703;
chunk__34532 = G__34704;
count__34533 = G__34705;
i__34534 = G__34706;
continue;
} else {
var map__34552 = cljs.core.first(seq__34531__$1);
var map__34552__$1 = (((((!((map__34552 == null))))?(((((map__34552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34552):map__34552);
var src = map__34552__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34552__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34552__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34552__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34552__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34554){var e_34707 = e34554;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34707);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34707.message)].join('')));
}

var G__34709 = cljs.core.next(seq__34531__$1);
var G__34710 = null;
var G__34711 = (0);
var G__34712 = (0);
seq__34531 = G__34709;
chunk__34532 = G__34710;
count__34533 = G__34711;
i__34534 = G__34712;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34556 = cljs.core.seq(js_requires);
var chunk__34557 = null;
var count__34558 = (0);
var i__34559 = (0);
while(true){
if((i__34559 < count__34558)){
var js_ns = chunk__34557.cljs$core$IIndexed$_nth$arity$2(null,i__34559);
var require_str_34713 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34713);


var G__34714 = seq__34556;
var G__34715 = chunk__34557;
var G__34716 = count__34558;
var G__34717 = (i__34559 + (1));
seq__34556 = G__34714;
chunk__34557 = G__34715;
count__34558 = G__34716;
i__34559 = G__34717;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34556);
if(temp__5735__auto__){
var seq__34556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34556__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34556__$1);
var G__34718 = cljs.core.chunk_rest(seq__34556__$1);
var G__34719 = c__4609__auto__;
var G__34720 = cljs.core.count(c__4609__auto__);
var G__34721 = (0);
seq__34556 = G__34718;
chunk__34557 = G__34719;
count__34558 = G__34720;
i__34559 = G__34721;
continue;
} else {
var js_ns = cljs.core.first(seq__34556__$1);
var require_str_34722 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34722);


var G__34723 = cljs.core.next(seq__34556__$1);
var G__34724 = null;
var G__34725 = (0);
var G__34726 = (0);
seq__34556 = G__34723;
chunk__34557 = G__34724;
count__34558 = G__34725;
i__34559 = G__34726;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34561 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34561) : callback.call(null,G__34561));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34565){
var map__34566 = p__34565;
var map__34566__$1 = (((((!((map__34566 == null))))?(((((map__34566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34566):map__34566);
var msg = map__34566__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34566__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34566__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34568(s__34569){
return (new cljs.core.LazySeq(null,(function (){
var s__34569__$1 = s__34569;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34569__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34577 = cljs.core.first(xs__6292__auto__);
var map__34577__$1 = (((((!((map__34577 == null))))?(((((map__34577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34577):map__34577);
var src = map__34577__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34577__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34577__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34569__$1,map__34577,map__34577__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34566,map__34566__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34568_$_iter__34570(s__34571){
return (new cljs.core.LazySeq(null,((function (s__34569__$1,map__34577,map__34577__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34566,map__34566__$1,msg,info,reload_info){
return (function (){
var s__34571__$1 = s__34571;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34571__$1);
if(temp__5735__auto____$1){
var s__34571__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34571__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34571__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34573 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34572 = (0);
while(true){
if((i__34572 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__34572);
cljs.core.chunk_append(b__34573,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34729 = (i__34572 + (1));
i__34572 = G__34729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34573),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34568_$_iter__34570(cljs.core.chunk_rest(s__34571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34573),null);
}
} else {
var warning = cljs.core.first(s__34571__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34568_$_iter__34570(cljs.core.rest(s__34571__$2)));
}
} else {
return null;
}
break;
}
});})(s__34569__$1,map__34577,map__34577__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34566,map__34566__$1,msg,info,reload_info))
,null,null));
});})(s__34569__$1,map__34577,map__34577__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34566,map__34566__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34568(cljs.core.rest(s__34569__$1)));
} else {
var G__34730 = cljs.core.rest(s__34569__$1);
s__34569__$1 = G__34730;
continue;
}
} else {
var G__34731 = cljs.core.rest(s__34569__$1);
s__34569__$1 = G__34731;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__34579_34732 = cljs.core.seq(warnings);
var chunk__34580_34733 = null;
var count__34581_34734 = (0);
var i__34582_34735 = (0);
while(true){
if((i__34582_34735 < count__34581_34734)){
var map__34589_34736 = chunk__34580_34733.cljs$core$IIndexed$_nth$arity$2(null,i__34582_34735);
var map__34589_34737__$1 = (((((!((map__34589_34736 == null))))?(((((map__34589_34736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34589_34736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34589_34736):map__34589_34736);
var w_34738 = map__34589_34737__$1;
var msg_34739__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589_34737__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589_34737__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589_34737__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589_34737__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34742)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34740),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34741),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34739__$1)].join(''));


var G__34745 = seq__34579_34732;
var G__34746 = chunk__34580_34733;
var G__34747 = count__34581_34734;
var G__34748 = (i__34582_34735 + (1));
seq__34579_34732 = G__34745;
chunk__34580_34733 = G__34746;
count__34581_34734 = G__34747;
i__34582_34735 = G__34748;
continue;
} else {
var temp__5735__auto___34749 = cljs.core.seq(seq__34579_34732);
if(temp__5735__auto___34749){
var seq__34579_34750__$1 = temp__5735__auto___34749;
if(cljs.core.chunked_seq_QMARK_(seq__34579_34750__$1)){
var c__4609__auto___34751 = cljs.core.chunk_first(seq__34579_34750__$1);
var G__34752 = cljs.core.chunk_rest(seq__34579_34750__$1);
var G__34753 = c__4609__auto___34751;
var G__34754 = cljs.core.count(c__4609__auto___34751);
var G__34755 = (0);
seq__34579_34732 = G__34752;
chunk__34580_34733 = G__34753;
count__34581_34734 = G__34754;
i__34582_34735 = G__34755;
continue;
} else {
var map__34591_34756 = cljs.core.first(seq__34579_34750__$1);
var map__34591_34757__$1 = (((((!((map__34591_34756 == null))))?(((((map__34591_34756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34591_34756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34591_34756):map__34591_34756);
var w_34758 = map__34591_34757__$1;
var msg_34759__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34591_34757__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34591_34757__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34591_34757__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34591_34757__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34762)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34760),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34761),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34759__$1)].join(''));


var G__34763 = cljs.core.next(seq__34579_34750__$1);
var G__34764 = null;
var G__34765 = (0);
var G__34766 = (0);
seq__34579_34732 = G__34763;
chunk__34580_34733 = G__34764;
count__34581_34734 = G__34765;
i__34582_34735 = G__34766;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34564_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34564_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34597){
var map__34598 = p__34597;
var map__34598__$1 = (((((!((map__34598 == null))))?(((((map__34598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34598):map__34598);
var msg = map__34598__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34598__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34601 = cljs.core.seq(updates);
var chunk__34603 = null;
var count__34604 = (0);
var i__34605 = (0);
while(true){
if((i__34605 < count__34604)){
var path = chunk__34603.cljs$core$IIndexed$_nth$arity$2(null,i__34605);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34634_34768 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34637_34769 = null;
var count__34638_34770 = (0);
var i__34639_34771 = (0);
while(true){
if((i__34639_34771 < count__34638_34770)){
var node_34772 = chunk__34637_34769.cljs$core$IIndexed$_nth$arity$2(null,i__34639_34771);
var path_match_34773 = shadow.cljs.devtools.client.browser.match_paths(node_34772.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34773)){
var new_link_34775 = (function (){var G__34645 = node_34772.cloneNode(true);
G__34645.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34773),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34645;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34773], 0));

goog.dom.insertSiblingAfter(new_link_34775,node_34772);

goog.dom.removeNode(node_34772);


var G__34776 = seq__34634_34768;
var G__34777 = chunk__34637_34769;
var G__34778 = count__34638_34770;
var G__34779 = (i__34639_34771 + (1));
seq__34634_34768 = G__34776;
chunk__34637_34769 = G__34777;
count__34638_34770 = G__34778;
i__34639_34771 = G__34779;
continue;
} else {
var G__34780 = seq__34634_34768;
var G__34781 = chunk__34637_34769;
var G__34782 = count__34638_34770;
var G__34783 = (i__34639_34771 + (1));
seq__34634_34768 = G__34780;
chunk__34637_34769 = G__34781;
count__34638_34770 = G__34782;
i__34639_34771 = G__34783;
continue;
}
} else {
var temp__5735__auto___34784 = cljs.core.seq(seq__34634_34768);
if(temp__5735__auto___34784){
var seq__34634_34785__$1 = temp__5735__auto___34784;
if(cljs.core.chunked_seq_QMARK_(seq__34634_34785__$1)){
var c__4609__auto___34786 = cljs.core.chunk_first(seq__34634_34785__$1);
var G__34787 = cljs.core.chunk_rest(seq__34634_34785__$1);
var G__34788 = c__4609__auto___34786;
var G__34789 = cljs.core.count(c__4609__auto___34786);
var G__34790 = (0);
seq__34634_34768 = G__34787;
chunk__34637_34769 = G__34788;
count__34638_34770 = G__34789;
i__34639_34771 = G__34790;
continue;
} else {
var node_34791 = cljs.core.first(seq__34634_34785__$1);
var path_match_34792 = shadow.cljs.devtools.client.browser.match_paths(node_34791.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34792)){
var new_link_34793 = (function (){var G__34646 = node_34791.cloneNode(true);
G__34646.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34792),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34646;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34792], 0));

goog.dom.insertSiblingAfter(new_link_34793,node_34791);

goog.dom.removeNode(node_34791);


var G__34794 = cljs.core.next(seq__34634_34785__$1);
var G__34795 = null;
var G__34796 = (0);
var G__34797 = (0);
seq__34634_34768 = G__34794;
chunk__34637_34769 = G__34795;
count__34638_34770 = G__34796;
i__34639_34771 = G__34797;
continue;
} else {
var G__34798 = cljs.core.next(seq__34634_34785__$1);
var G__34799 = null;
var G__34800 = (0);
var G__34801 = (0);
seq__34634_34768 = G__34798;
chunk__34637_34769 = G__34799;
count__34638_34770 = G__34800;
i__34639_34771 = G__34801;
continue;
}
}
} else {
}
}
break;
}


var G__34803 = seq__34601;
var G__34804 = chunk__34603;
var G__34805 = count__34604;
var G__34806 = (i__34605 + (1));
seq__34601 = G__34803;
chunk__34603 = G__34804;
count__34604 = G__34805;
i__34605 = G__34806;
continue;
} else {
var G__34807 = seq__34601;
var G__34808 = chunk__34603;
var G__34809 = count__34604;
var G__34810 = (i__34605 + (1));
seq__34601 = G__34807;
chunk__34603 = G__34808;
count__34604 = G__34809;
i__34605 = G__34810;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34601);
if(temp__5735__auto__){
var seq__34601__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34601__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34601__$1);
var G__34811 = cljs.core.chunk_rest(seq__34601__$1);
var G__34812 = c__4609__auto__;
var G__34813 = cljs.core.count(c__4609__auto__);
var G__34814 = (0);
seq__34601 = G__34811;
chunk__34603 = G__34812;
count__34604 = G__34813;
i__34605 = G__34814;
continue;
} else {
var path = cljs.core.first(seq__34601__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34647_34815 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34650_34816 = null;
var count__34651_34817 = (0);
var i__34652_34818 = (0);
while(true){
if((i__34652_34818 < count__34651_34817)){
var node_34819 = chunk__34650_34816.cljs$core$IIndexed$_nth$arity$2(null,i__34652_34818);
var path_match_34820 = shadow.cljs.devtools.client.browser.match_paths(node_34819.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34820)){
var new_link_34821 = (function (){var G__34659 = node_34819.cloneNode(true);
G__34659.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34820),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34659;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34820], 0));

goog.dom.insertSiblingAfter(new_link_34821,node_34819);

goog.dom.removeNode(node_34819);


var G__34822 = seq__34647_34815;
var G__34823 = chunk__34650_34816;
var G__34824 = count__34651_34817;
var G__34825 = (i__34652_34818 + (1));
seq__34647_34815 = G__34822;
chunk__34650_34816 = G__34823;
count__34651_34817 = G__34824;
i__34652_34818 = G__34825;
continue;
} else {
var G__34827 = seq__34647_34815;
var G__34828 = chunk__34650_34816;
var G__34829 = count__34651_34817;
var G__34830 = (i__34652_34818 + (1));
seq__34647_34815 = G__34827;
chunk__34650_34816 = G__34828;
count__34651_34817 = G__34829;
i__34652_34818 = G__34830;
continue;
}
} else {
var temp__5735__auto___34831__$1 = cljs.core.seq(seq__34647_34815);
if(temp__5735__auto___34831__$1){
var seq__34647_34832__$1 = temp__5735__auto___34831__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34647_34832__$1)){
var c__4609__auto___34833 = cljs.core.chunk_first(seq__34647_34832__$1);
var G__34834 = cljs.core.chunk_rest(seq__34647_34832__$1);
var G__34835 = c__4609__auto___34833;
var G__34836 = cljs.core.count(c__4609__auto___34833);
var G__34837 = (0);
seq__34647_34815 = G__34834;
chunk__34650_34816 = G__34835;
count__34651_34817 = G__34836;
i__34652_34818 = G__34837;
continue;
} else {
var node_34838 = cljs.core.first(seq__34647_34832__$1);
var path_match_34839 = shadow.cljs.devtools.client.browser.match_paths(node_34838.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34839)){
var new_link_34841 = (function (){var G__34660 = node_34838.cloneNode(true);
G__34660.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34839),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34660;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34839], 0));

goog.dom.insertSiblingAfter(new_link_34841,node_34838);

goog.dom.removeNode(node_34838);


var G__34842 = cljs.core.next(seq__34647_34832__$1);
var G__34843 = null;
var G__34844 = (0);
var G__34845 = (0);
seq__34647_34815 = G__34842;
chunk__34650_34816 = G__34843;
count__34651_34817 = G__34844;
i__34652_34818 = G__34845;
continue;
} else {
var G__34846 = cljs.core.next(seq__34647_34832__$1);
var G__34847 = null;
var G__34848 = (0);
var G__34849 = (0);
seq__34647_34815 = G__34846;
chunk__34650_34816 = G__34847;
count__34651_34817 = G__34848;
i__34652_34818 = G__34849;
continue;
}
}
} else {
}
}
break;
}


var G__34851 = cljs.core.next(seq__34601__$1);
var G__34852 = null;
var G__34853 = (0);
var G__34854 = (0);
seq__34601 = G__34851;
chunk__34603 = G__34852;
count__34604 = G__34853;
i__34605 = G__34854;
continue;
} else {
var G__34855 = cljs.core.next(seq__34601__$1);
var G__34856 = null;
var G__34857 = (0);
var G__34858 = (0);
seq__34601 = G__34855;
chunk__34603 = G__34856;
count__34604 = G__34857;
i__34605 = G__34858;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34664){
var map__34665 = p__34664;
var map__34665__$1 = (((((!((map__34665 == null))))?(((((map__34665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34665):map__34665);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34668,done){
var map__34669 = p__34668;
var map__34669__$1 = (((((!((map__34669 == null))))?(((((map__34669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34669):map__34669);
var msg = map__34669__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34671){
var map__34672 = p__34671;
var map__34672__$1 = (((((!((map__34672 == null))))?(((((map__34672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34672):map__34672);
var src = map__34672__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34672__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34675){var e = e34675;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34676,done){
var map__34677 = p__34676;
var map__34677__$1 = (((((!((map__34677 == null))))?(((((map__34677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34677):map__34677);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34677__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34677__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34679){
var map__34680 = p__34679;
var map__34680__$1 = (((((!((map__34680 == null))))?(((((map__34680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34680):map__34680);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34680__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34680__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34684,done){
var map__34685 = p__34684;
var map__34685__$1 = (((((!((map__34685 == null))))?(((((map__34685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34685):map__34685);
var msg = map__34685__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34685__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34687_34865 = type;
var G__34687_34866__$1 = (((G__34687_34865 instanceof cljs.core.Keyword))?G__34687_34865.fqn:null);
switch (G__34687_34866__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34689 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34689.cljs$core$IFn$_invoke$arity$1 ? fexpr__34689.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__34689.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34691){var e = e34691;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___34870 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___34870)){
var s_34871 = temp__5735__auto___34870;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_34871.onclose = (function (e){
return null;
}));

s_34871.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
