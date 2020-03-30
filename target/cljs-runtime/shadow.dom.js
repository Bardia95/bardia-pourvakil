goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32576 = coll;
var G__32577 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32576,G__32577) : shadow.dom.lazy_native_coll_seq.call(null,G__32576,G__32577));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32583 = arguments.length;
switch (G__32583) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32587 = arguments.length;
switch (G__32587) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32589 = arguments.length;
switch (G__32589) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32595 = arguments.length;
switch (G__32595) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32597 = arguments.length;
switch (G__32597) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32598){if((e32598 instanceof Object)){
var e = e32598;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32598;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32599 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32600 = null;
var count__32601 = (0);
var i__32602 = (0);
while(true){
if((i__32602 < count__32601)){
var el = chunk__32600.cljs$core$IIndexed$_nth$arity$2(null,i__32602);
var handler_33096__$1 = ((function (seq__32599,chunk__32600,count__32601,i__32602,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32599,chunk__32600,count__32601,i__32602,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33096__$1);


var G__33097 = seq__32599;
var G__33098 = chunk__32600;
var G__33099 = count__32601;
var G__33100 = (i__32602 + (1));
seq__32599 = G__33097;
chunk__32600 = G__33098;
count__32601 = G__33099;
i__32602 = G__33100;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32599);
if(temp__5735__auto__){
var seq__32599__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32599__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32599__$1);
var G__33101 = cljs.core.chunk_rest(seq__32599__$1);
var G__33102 = c__4609__auto__;
var G__33103 = cljs.core.count(c__4609__auto__);
var G__33104 = (0);
seq__32599 = G__33101;
chunk__32600 = G__33102;
count__32601 = G__33103;
i__32602 = G__33104;
continue;
} else {
var el = cljs.core.first(seq__32599__$1);
var handler_33106__$1 = ((function (seq__32599,chunk__32600,count__32601,i__32602,el,seq__32599__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32599,chunk__32600,count__32601,i__32602,el,seq__32599__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33106__$1);


var G__33108 = cljs.core.next(seq__32599__$1);
var G__33109 = null;
var G__33110 = (0);
var G__33111 = (0);
seq__32599 = G__33108;
chunk__32600 = G__33109;
count__32601 = G__33110;
i__32602 = G__33111;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32604 = arguments.length;
switch (G__32604) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32612 = cljs.core.seq(events);
var chunk__32613 = null;
var count__32614 = (0);
var i__32615 = (0);
while(true){
if((i__32615 < count__32614)){
var vec__32629 = chunk__32613.cljs$core$IIndexed$_nth$arity$2(null,i__32615);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32629,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32629,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33116 = seq__32612;
var G__33117 = chunk__32613;
var G__33118 = count__32614;
var G__33119 = (i__32615 + (1));
seq__32612 = G__33116;
chunk__32613 = G__33117;
count__32614 = G__33118;
i__32615 = G__33119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32612);
if(temp__5735__auto__){
var seq__32612__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32612__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32612__$1);
var G__33120 = cljs.core.chunk_rest(seq__32612__$1);
var G__33121 = c__4609__auto__;
var G__33122 = cljs.core.count(c__4609__auto__);
var G__33123 = (0);
seq__32612 = G__33120;
chunk__32613 = G__33121;
count__32614 = G__33122;
i__32615 = G__33123;
continue;
} else {
var vec__32634 = cljs.core.first(seq__32612__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32634,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33124 = cljs.core.next(seq__32612__$1);
var G__33125 = null;
var G__33126 = (0);
var G__33127 = (0);
seq__32612 = G__33124;
chunk__32613 = G__33125;
count__32614 = G__33126;
i__32615 = G__33127;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32638 = cljs.core.seq(styles);
var chunk__32639 = null;
var count__32640 = (0);
var i__32641 = (0);
while(true){
if((i__32641 < count__32640)){
var vec__32648 = chunk__32639.cljs$core$IIndexed$_nth$arity$2(null,i__32641);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33128 = seq__32638;
var G__33129 = chunk__32639;
var G__33130 = count__32640;
var G__33131 = (i__32641 + (1));
seq__32638 = G__33128;
chunk__32639 = G__33129;
count__32640 = G__33130;
i__32641 = G__33131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32638);
if(temp__5735__auto__){
var seq__32638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32638__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32638__$1);
var G__33132 = cljs.core.chunk_rest(seq__32638__$1);
var G__33133 = c__4609__auto__;
var G__33134 = cljs.core.count(c__4609__auto__);
var G__33135 = (0);
seq__32638 = G__33132;
chunk__32639 = G__33133;
count__32640 = G__33134;
i__32641 = G__33135;
continue;
} else {
var vec__32652 = cljs.core.first(seq__32638__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33136 = cljs.core.next(seq__32638__$1);
var G__33137 = null;
var G__33138 = (0);
var G__33139 = (0);
seq__32638 = G__33136;
chunk__32639 = G__33137;
count__32640 = G__33138;
i__32641 = G__33139;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32655_33140 = key;
var G__32655_33141__$1 = (((G__32655_33140 instanceof cljs.core.Keyword))?G__32655_33140.fqn:null);
switch (G__32655_33141__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33143 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33143,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33143,"aria-");
}
})())){
el.setAttribute(ks_33143,value);
} else {
(el[ks_33143] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32659){
var map__32660 = p__32659;
var map__32660__$1 = (((((!((map__32660 == null))))?(((((map__32660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32660):map__32660);
var props = map__32660__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32660__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32664 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32664,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32664,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32664,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32671 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32671,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32671;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32674 = arguments.length;
switch (G__32674) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32681){
var vec__32682 = p__32681;
var seq__32683 = cljs.core.seq(vec__32682);
var first__32684 = cljs.core.first(seq__32683);
var seq__32683__$1 = cljs.core.next(seq__32683);
var nn = first__32684;
var first__32684__$1 = cljs.core.first(seq__32683__$1);
var seq__32683__$2 = cljs.core.next(seq__32683__$1);
var np = first__32684__$1;
var nc = seq__32683__$2;
var node = vec__32682;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32686 = nn;
var G__32687 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32686,G__32687) : create_fn.call(null,G__32686,G__32687));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32688 = nn;
var G__32689 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32688,G__32689) : create_fn.call(null,G__32688,G__32689));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32692 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(1),null);
var seq__32695_33151 = cljs.core.seq(node_children);
var chunk__32696_33152 = null;
var count__32697_33153 = (0);
var i__32698_33154 = (0);
while(true){
if((i__32698_33154 < count__32697_33153)){
var child_struct_33155 = chunk__32696_33152.cljs$core$IIndexed$_nth$arity$2(null,i__32698_33154);
var children_33156 = shadow.dom.dom_node(child_struct_33155);
if(cljs.core.seq_QMARK_(children_33156)){
var seq__32726_33157 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33156));
var chunk__32729_33158 = null;
var count__32730_33159 = (0);
var i__32731_33160 = (0);
while(true){
if((i__32731_33160 < count__32730_33159)){
var child_33168 = chunk__32729_33158.cljs$core$IIndexed$_nth$arity$2(null,i__32731_33160);
if(cljs.core.truth_(child_33168)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33168);


var G__33169 = seq__32726_33157;
var G__33170 = chunk__32729_33158;
var G__33171 = count__32730_33159;
var G__33172 = (i__32731_33160 + (1));
seq__32726_33157 = G__33169;
chunk__32729_33158 = G__33170;
count__32730_33159 = G__33171;
i__32731_33160 = G__33172;
continue;
} else {
var G__33173 = seq__32726_33157;
var G__33174 = chunk__32729_33158;
var G__33175 = count__32730_33159;
var G__33176 = (i__32731_33160 + (1));
seq__32726_33157 = G__33173;
chunk__32729_33158 = G__33174;
count__32730_33159 = G__33175;
i__32731_33160 = G__33176;
continue;
}
} else {
var temp__5735__auto___33177 = cljs.core.seq(seq__32726_33157);
if(temp__5735__auto___33177){
var seq__32726_33178__$1 = temp__5735__auto___33177;
if(cljs.core.chunked_seq_QMARK_(seq__32726_33178__$1)){
var c__4609__auto___33179 = cljs.core.chunk_first(seq__32726_33178__$1);
var G__33180 = cljs.core.chunk_rest(seq__32726_33178__$1);
var G__33181 = c__4609__auto___33179;
var G__33182 = cljs.core.count(c__4609__auto___33179);
var G__33183 = (0);
seq__32726_33157 = G__33180;
chunk__32729_33158 = G__33181;
count__32730_33159 = G__33182;
i__32731_33160 = G__33183;
continue;
} else {
var child_33185 = cljs.core.first(seq__32726_33178__$1);
if(cljs.core.truth_(child_33185)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33185);


var G__33186 = cljs.core.next(seq__32726_33178__$1);
var G__33187 = null;
var G__33188 = (0);
var G__33189 = (0);
seq__32726_33157 = G__33186;
chunk__32729_33158 = G__33187;
count__32730_33159 = G__33188;
i__32731_33160 = G__33189;
continue;
} else {
var G__33190 = cljs.core.next(seq__32726_33178__$1);
var G__33191 = null;
var G__33192 = (0);
var G__33193 = (0);
seq__32726_33157 = G__33190;
chunk__32729_33158 = G__33191;
count__32730_33159 = G__33192;
i__32731_33160 = G__33193;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33156);
}


var G__33194 = seq__32695_33151;
var G__33195 = chunk__32696_33152;
var G__33196 = count__32697_33153;
var G__33197 = (i__32698_33154 + (1));
seq__32695_33151 = G__33194;
chunk__32696_33152 = G__33195;
count__32697_33153 = G__33196;
i__32698_33154 = G__33197;
continue;
} else {
var temp__5735__auto___33199 = cljs.core.seq(seq__32695_33151);
if(temp__5735__auto___33199){
var seq__32695_33200__$1 = temp__5735__auto___33199;
if(cljs.core.chunked_seq_QMARK_(seq__32695_33200__$1)){
var c__4609__auto___33201 = cljs.core.chunk_first(seq__32695_33200__$1);
var G__33202 = cljs.core.chunk_rest(seq__32695_33200__$1);
var G__33203 = c__4609__auto___33201;
var G__33204 = cljs.core.count(c__4609__auto___33201);
var G__33205 = (0);
seq__32695_33151 = G__33202;
chunk__32696_33152 = G__33203;
count__32697_33153 = G__33204;
i__32698_33154 = G__33205;
continue;
} else {
var child_struct_33206 = cljs.core.first(seq__32695_33200__$1);
var children_33207 = shadow.dom.dom_node(child_struct_33206);
if(cljs.core.seq_QMARK_(children_33207)){
var seq__32740_33208 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33207));
var chunk__32742_33209 = null;
var count__32743_33210 = (0);
var i__32744_33211 = (0);
while(true){
if((i__32744_33211 < count__32743_33210)){
var child_33212 = chunk__32742_33209.cljs$core$IIndexed$_nth$arity$2(null,i__32744_33211);
if(cljs.core.truth_(child_33212)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33212);


var G__33213 = seq__32740_33208;
var G__33214 = chunk__32742_33209;
var G__33215 = count__32743_33210;
var G__33216 = (i__32744_33211 + (1));
seq__32740_33208 = G__33213;
chunk__32742_33209 = G__33214;
count__32743_33210 = G__33215;
i__32744_33211 = G__33216;
continue;
} else {
var G__33217 = seq__32740_33208;
var G__33218 = chunk__32742_33209;
var G__33219 = count__32743_33210;
var G__33220 = (i__32744_33211 + (1));
seq__32740_33208 = G__33217;
chunk__32742_33209 = G__33218;
count__32743_33210 = G__33219;
i__32744_33211 = G__33220;
continue;
}
} else {
var temp__5735__auto___33222__$1 = cljs.core.seq(seq__32740_33208);
if(temp__5735__auto___33222__$1){
var seq__32740_33223__$1 = temp__5735__auto___33222__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32740_33223__$1)){
var c__4609__auto___33226 = cljs.core.chunk_first(seq__32740_33223__$1);
var G__33227 = cljs.core.chunk_rest(seq__32740_33223__$1);
var G__33228 = c__4609__auto___33226;
var G__33229 = cljs.core.count(c__4609__auto___33226);
var G__33230 = (0);
seq__32740_33208 = G__33227;
chunk__32742_33209 = G__33228;
count__32743_33210 = G__33229;
i__32744_33211 = G__33230;
continue;
} else {
var child_33231 = cljs.core.first(seq__32740_33223__$1);
if(cljs.core.truth_(child_33231)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33231);


var G__33236 = cljs.core.next(seq__32740_33223__$1);
var G__33237 = null;
var G__33238 = (0);
var G__33239 = (0);
seq__32740_33208 = G__33236;
chunk__32742_33209 = G__33237;
count__32743_33210 = G__33238;
i__32744_33211 = G__33239;
continue;
} else {
var G__33240 = cljs.core.next(seq__32740_33223__$1);
var G__33241 = null;
var G__33242 = (0);
var G__33243 = (0);
seq__32740_33208 = G__33240;
chunk__32742_33209 = G__33241;
count__32743_33210 = G__33242;
i__32744_33211 = G__33243;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33207);
}


var G__33245 = cljs.core.next(seq__32695_33200__$1);
var G__33246 = null;
var G__33247 = (0);
var G__33248 = (0);
seq__32695_33151 = G__33245;
chunk__32696_33152 = G__33246;
count__32697_33153 = G__33247;
i__32698_33154 = G__33248;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32755 = cljs.core.seq(node);
var chunk__32756 = null;
var count__32757 = (0);
var i__32758 = (0);
while(true){
if((i__32758 < count__32757)){
var n = chunk__32756.cljs$core$IIndexed$_nth$arity$2(null,i__32758);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33254 = seq__32755;
var G__33255 = chunk__32756;
var G__33256 = count__32757;
var G__33257 = (i__32758 + (1));
seq__32755 = G__33254;
chunk__32756 = G__33255;
count__32757 = G__33256;
i__32758 = G__33257;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32755);
if(temp__5735__auto__){
var seq__32755__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32755__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32755__$1);
var G__33258 = cljs.core.chunk_rest(seq__32755__$1);
var G__33259 = c__4609__auto__;
var G__33260 = cljs.core.count(c__4609__auto__);
var G__33261 = (0);
seq__32755 = G__33258;
chunk__32756 = G__33259;
count__32757 = G__33260;
i__32758 = G__33261;
continue;
} else {
var n = cljs.core.first(seq__32755__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33262 = cljs.core.next(seq__32755__$1);
var G__33263 = null;
var G__33264 = (0);
var G__33265 = (0);
seq__32755 = G__33262;
chunk__32756 = G__33263;
count__32757 = G__33264;
i__32758 = G__33265;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32764 = arguments.length;
switch (G__32764) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32768 = arguments.length;
switch (G__32768) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32775 = arguments.length;
switch (G__32775) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33294 = arguments.length;
var i__4790__auto___33295 = (0);
while(true){
if((i__4790__auto___33295 < len__4789__auto___33294)){
args__4795__auto__.push((arguments[i__4790__auto___33295]));

var G__33296 = (i__4790__auto___33295 + (1));
i__4790__auto___33295 = G__33296;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32792_33297 = cljs.core.seq(nodes);
var chunk__32793_33298 = null;
var count__32794_33299 = (0);
var i__32795_33300 = (0);
while(true){
if((i__32795_33300 < count__32794_33299)){
var node_33301 = chunk__32793_33298.cljs$core$IIndexed$_nth$arity$2(null,i__32795_33300);
fragment.appendChild(shadow.dom._to_dom(node_33301));


var G__33302 = seq__32792_33297;
var G__33303 = chunk__32793_33298;
var G__33304 = count__32794_33299;
var G__33305 = (i__32795_33300 + (1));
seq__32792_33297 = G__33302;
chunk__32793_33298 = G__33303;
count__32794_33299 = G__33304;
i__32795_33300 = G__33305;
continue;
} else {
var temp__5735__auto___33307 = cljs.core.seq(seq__32792_33297);
if(temp__5735__auto___33307){
var seq__32792_33308__$1 = temp__5735__auto___33307;
if(cljs.core.chunked_seq_QMARK_(seq__32792_33308__$1)){
var c__4609__auto___33309 = cljs.core.chunk_first(seq__32792_33308__$1);
var G__33310 = cljs.core.chunk_rest(seq__32792_33308__$1);
var G__33311 = c__4609__auto___33309;
var G__33312 = cljs.core.count(c__4609__auto___33309);
var G__33313 = (0);
seq__32792_33297 = G__33310;
chunk__32793_33298 = G__33311;
count__32794_33299 = G__33312;
i__32795_33300 = G__33313;
continue;
} else {
var node_33314 = cljs.core.first(seq__32792_33308__$1);
fragment.appendChild(shadow.dom._to_dom(node_33314));


var G__33315 = cljs.core.next(seq__32792_33308__$1);
var G__33316 = null;
var G__33317 = (0);
var G__33318 = (0);
seq__32792_33297 = G__33315;
chunk__32793_33298 = G__33316;
count__32794_33299 = G__33317;
i__32795_33300 = G__33318;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32788){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32788));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32804_33321 = cljs.core.seq(scripts);
var chunk__32805_33322 = null;
var count__32806_33323 = (0);
var i__32807_33324 = (0);
while(true){
if((i__32807_33324 < count__32806_33323)){
var vec__32814_33325 = chunk__32805_33322.cljs$core$IIndexed$_nth$arity$2(null,i__32807_33324);
var script_tag_33326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32814_33325,(0),null);
var script_body_33327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32814_33325,(1),null);
eval(script_body_33327);


var G__33329 = seq__32804_33321;
var G__33330 = chunk__32805_33322;
var G__33331 = count__32806_33323;
var G__33332 = (i__32807_33324 + (1));
seq__32804_33321 = G__33329;
chunk__32805_33322 = G__33330;
count__32806_33323 = G__33331;
i__32807_33324 = G__33332;
continue;
} else {
var temp__5735__auto___33333 = cljs.core.seq(seq__32804_33321);
if(temp__5735__auto___33333){
var seq__32804_33334__$1 = temp__5735__auto___33333;
if(cljs.core.chunked_seq_QMARK_(seq__32804_33334__$1)){
var c__4609__auto___33335 = cljs.core.chunk_first(seq__32804_33334__$1);
var G__33336 = cljs.core.chunk_rest(seq__32804_33334__$1);
var G__33337 = c__4609__auto___33335;
var G__33338 = cljs.core.count(c__4609__auto___33335);
var G__33339 = (0);
seq__32804_33321 = G__33336;
chunk__32805_33322 = G__33337;
count__32806_33323 = G__33338;
i__32807_33324 = G__33339;
continue;
} else {
var vec__32817_33342 = cljs.core.first(seq__32804_33334__$1);
var script_tag_33343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32817_33342,(0),null);
var script_body_33344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32817_33342,(1),null);
eval(script_body_33344);


var G__33345 = cljs.core.next(seq__32804_33334__$1);
var G__33346 = null;
var G__33347 = (0);
var G__33348 = (0);
seq__32804_33321 = G__33345;
chunk__32805_33322 = G__33346;
count__32806_33323 = G__33347;
i__32807_33324 = G__33348;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32820){
var vec__32821 = p__32820;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32821,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32821,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32825 = arguments.length;
switch (G__32825) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32832 = cljs.core.seq(style_keys);
var chunk__32833 = null;
var count__32834 = (0);
var i__32835 = (0);
while(true){
if((i__32835 < count__32834)){
var it = chunk__32833.cljs$core$IIndexed$_nth$arity$2(null,i__32835);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33360 = seq__32832;
var G__33361 = chunk__32833;
var G__33362 = count__32834;
var G__33363 = (i__32835 + (1));
seq__32832 = G__33360;
chunk__32833 = G__33361;
count__32834 = G__33362;
i__32835 = G__33363;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32832);
if(temp__5735__auto__){
var seq__32832__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32832__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32832__$1);
var G__33365 = cljs.core.chunk_rest(seq__32832__$1);
var G__33366 = c__4609__auto__;
var G__33367 = cljs.core.count(c__4609__auto__);
var G__33368 = (0);
seq__32832 = G__33365;
chunk__32833 = G__33366;
count__32834 = G__33367;
i__32835 = G__33368;
continue;
} else {
var it = cljs.core.first(seq__32832__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33369 = cljs.core.next(seq__32832__$1);
var G__33370 = null;
var G__33371 = (0);
var G__33372 = (0);
seq__32832 = G__33369;
chunk__32833 = G__33370;
count__32834 = G__33371;
i__32835 = G__33372;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32847,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32860 = k32847;
var G__32860__$1 = (((G__32860 instanceof cljs.core.Keyword))?G__32860.fqn:null);
switch (G__32860__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32847,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32861){
var vec__32862 = p__32861;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32862,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32862,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32846){
var self__ = this;
var G__32846__$1 = this;
return (new cljs.core.RecordIter((0),G__32846__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32848,other32849){
var self__ = this;
var this32848__$1 = this;
return (((!((other32849 == null)))) && ((this32848__$1.constructor === other32849.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32848__$1.x,other32849.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32848__$1.y,other32849.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32848__$1.__extmap,other32849.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32846){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32865 = cljs.core.keyword_identical_QMARK_;
var expr__32866 = k__4447__auto__;
if(cljs.core.truth_((pred__32865.cljs$core$IFn$_invoke$arity$2 ? pred__32865.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32866) : pred__32865.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32866)))){
return (new shadow.dom.Coordinate(G__32846,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32865.cljs$core$IFn$_invoke$arity$2 ? pred__32865.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32866) : pred__32865.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32866)))){
return (new shadow.dom.Coordinate(self__.x,G__32846,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32846),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32846){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32846,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32852){
var extmap__4478__auto__ = (function (){var G__32868 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32852,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32852)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32868);
} else {
return G__32868;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32852),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32852),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32872,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32878 = k32872;
var G__32878__$1 = (((G__32878 instanceof cljs.core.Keyword))?G__32878.fqn:null);
switch (G__32878__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32872,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32882){
var vec__32883 = p__32882;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32883,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32883,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32871){
var self__ = this;
var G__32871__$1 = this;
return (new cljs.core.RecordIter((0),G__32871__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32873,other32874){
var self__ = this;
var this32873__$1 = this;
return (((!((other32874 == null)))) && ((this32873__$1.constructor === other32874.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32873__$1.w,other32874.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32873__$1.h,other32874.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32873__$1.__extmap,other32874.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32871){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32898 = cljs.core.keyword_identical_QMARK_;
var expr__32899 = k__4447__auto__;
if(cljs.core.truth_((pred__32898.cljs$core$IFn$_invoke$arity$2 ? pred__32898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32899) : pred__32898.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32899)))){
return (new shadow.dom.Size(G__32871,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32898.cljs$core$IFn$_invoke$arity$2 ? pred__32898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32899) : pred__32898.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32899)))){
return (new shadow.dom.Size(self__.w,G__32871,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32871),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32871){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32871,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32875){
var extmap__4478__auto__ = (function (){var G__32913 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32875,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32875)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32913);
} else {
return G__32913;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32875),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32875),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33395 = (i + (1));
var G__33396 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33395;
ret = G__33396;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32923){
var vec__32924 = p__32923;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32931 = arguments.length;
switch (G__32931) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33400 = ps;
var G__33401 = (i + (1));
el__$1 = G__33400;
i = G__33401;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32954 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32954,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32954,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32954,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32958_33411 = cljs.core.seq(props);
var chunk__32959_33412 = null;
var count__32960_33413 = (0);
var i__32961_33414 = (0);
while(true){
if((i__32961_33414 < count__32960_33413)){
var vec__32970_33416 = chunk__32959_33412.cljs$core$IIndexed$_nth$arity$2(null,i__32961_33414);
var k_33417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32970_33416,(0),null);
var v_33418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32970_33416,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33417);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33417),v_33418);


var G__33419 = seq__32958_33411;
var G__33420 = chunk__32959_33412;
var G__33421 = count__32960_33413;
var G__33422 = (i__32961_33414 + (1));
seq__32958_33411 = G__33419;
chunk__32959_33412 = G__33420;
count__32960_33413 = G__33421;
i__32961_33414 = G__33422;
continue;
} else {
var temp__5735__auto___33423 = cljs.core.seq(seq__32958_33411);
if(temp__5735__auto___33423){
var seq__32958_33425__$1 = temp__5735__auto___33423;
if(cljs.core.chunked_seq_QMARK_(seq__32958_33425__$1)){
var c__4609__auto___33426 = cljs.core.chunk_first(seq__32958_33425__$1);
var G__33427 = cljs.core.chunk_rest(seq__32958_33425__$1);
var G__33428 = c__4609__auto___33426;
var G__33429 = cljs.core.count(c__4609__auto___33426);
var G__33430 = (0);
seq__32958_33411 = G__33427;
chunk__32959_33412 = G__33428;
count__32960_33413 = G__33429;
i__32961_33414 = G__33430;
continue;
} else {
var vec__32973_33431 = cljs.core.first(seq__32958_33425__$1);
var k_33432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973_33431,(0),null);
var v_33433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973_33431,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33432);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33432),v_33433);


var G__33435 = cljs.core.next(seq__32958_33425__$1);
var G__33436 = null;
var G__33437 = (0);
var G__33438 = (0);
seq__32958_33411 = G__33435;
chunk__32959_33412 = G__33436;
count__32960_33413 = G__33437;
i__32961_33414 = G__33438;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32977 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32977,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32977,(1),null);
var seq__32980_33440 = cljs.core.seq(node_children);
var chunk__32982_33441 = null;
var count__32983_33442 = (0);
var i__32984_33443 = (0);
while(true){
if((i__32984_33443 < count__32983_33442)){
var child_struct_33446 = chunk__32982_33441.cljs$core$IIndexed$_nth$arity$2(null,i__32984_33443);
if((!((child_struct_33446 == null)))){
if(typeof child_struct_33446 === 'string'){
var text_33447 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33447),child_struct_33446].join(''));
} else {
var children_33448 = shadow.dom.svg_node(child_struct_33446);
if(cljs.core.seq_QMARK_(children_33448)){
var seq__32999_33449 = cljs.core.seq(children_33448);
var chunk__33001_33450 = null;
var count__33002_33451 = (0);
var i__33003_33452 = (0);
while(true){
if((i__33003_33452 < count__33002_33451)){
var child_33453 = chunk__33001_33450.cljs$core$IIndexed$_nth$arity$2(null,i__33003_33452);
if(cljs.core.truth_(child_33453)){
node.appendChild(child_33453);


var G__33454 = seq__32999_33449;
var G__33455 = chunk__33001_33450;
var G__33456 = count__33002_33451;
var G__33457 = (i__33003_33452 + (1));
seq__32999_33449 = G__33454;
chunk__33001_33450 = G__33455;
count__33002_33451 = G__33456;
i__33003_33452 = G__33457;
continue;
} else {
var G__33458 = seq__32999_33449;
var G__33459 = chunk__33001_33450;
var G__33460 = count__33002_33451;
var G__33461 = (i__33003_33452 + (1));
seq__32999_33449 = G__33458;
chunk__33001_33450 = G__33459;
count__33002_33451 = G__33460;
i__33003_33452 = G__33461;
continue;
}
} else {
var temp__5735__auto___33462 = cljs.core.seq(seq__32999_33449);
if(temp__5735__auto___33462){
var seq__32999_33463__$1 = temp__5735__auto___33462;
if(cljs.core.chunked_seq_QMARK_(seq__32999_33463__$1)){
var c__4609__auto___33464 = cljs.core.chunk_first(seq__32999_33463__$1);
var G__33465 = cljs.core.chunk_rest(seq__32999_33463__$1);
var G__33466 = c__4609__auto___33464;
var G__33467 = cljs.core.count(c__4609__auto___33464);
var G__33468 = (0);
seq__32999_33449 = G__33465;
chunk__33001_33450 = G__33466;
count__33002_33451 = G__33467;
i__33003_33452 = G__33468;
continue;
} else {
var child_33469 = cljs.core.first(seq__32999_33463__$1);
if(cljs.core.truth_(child_33469)){
node.appendChild(child_33469);


var G__33470 = cljs.core.next(seq__32999_33463__$1);
var G__33471 = null;
var G__33472 = (0);
var G__33473 = (0);
seq__32999_33449 = G__33470;
chunk__33001_33450 = G__33471;
count__33002_33451 = G__33472;
i__33003_33452 = G__33473;
continue;
} else {
var G__33474 = cljs.core.next(seq__32999_33463__$1);
var G__33475 = null;
var G__33476 = (0);
var G__33477 = (0);
seq__32999_33449 = G__33474;
chunk__33001_33450 = G__33475;
count__33002_33451 = G__33476;
i__33003_33452 = G__33477;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33448);
}
}


var G__33480 = seq__32980_33440;
var G__33481 = chunk__32982_33441;
var G__33482 = count__32983_33442;
var G__33483 = (i__32984_33443 + (1));
seq__32980_33440 = G__33480;
chunk__32982_33441 = G__33481;
count__32983_33442 = G__33482;
i__32984_33443 = G__33483;
continue;
} else {
var G__33485 = seq__32980_33440;
var G__33486 = chunk__32982_33441;
var G__33487 = count__32983_33442;
var G__33488 = (i__32984_33443 + (1));
seq__32980_33440 = G__33485;
chunk__32982_33441 = G__33486;
count__32983_33442 = G__33487;
i__32984_33443 = G__33488;
continue;
}
} else {
var temp__5735__auto___33490 = cljs.core.seq(seq__32980_33440);
if(temp__5735__auto___33490){
var seq__32980_33491__$1 = temp__5735__auto___33490;
if(cljs.core.chunked_seq_QMARK_(seq__32980_33491__$1)){
var c__4609__auto___33492 = cljs.core.chunk_first(seq__32980_33491__$1);
var G__33494 = cljs.core.chunk_rest(seq__32980_33491__$1);
var G__33495 = c__4609__auto___33492;
var G__33496 = cljs.core.count(c__4609__auto___33492);
var G__33497 = (0);
seq__32980_33440 = G__33494;
chunk__32982_33441 = G__33495;
count__32983_33442 = G__33496;
i__32984_33443 = G__33497;
continue;
} else {
var child_struct_33498 = cljs.core.first(seq__32980_33491__$1);
if((!((child_struct_33498 == null)))){
if(typeof child_struct_33498 === 'string'){
var text_33500 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33500),child_struct_33498].join(''));
} else {
var children_33502 = shadow.dom.svg_node(child_struct_33498);
if(cljs.core.seq_QMARK_(children_33502)){
var seq__33016_33503 = cljs.core.seq(children_33502);
var chunk__33018_33504 = null;
var count__33019_33505 = (0);
var i__33020_33506 = (0);
while(true){
if((i__33020_33506 < count__33019_33505)){
var child_33508 = chunk__33018_33504.cljs$core$IIndexed$_nth$arity$2(null,i__33020_33506);
if(cljs.core.truth_(child_33508)){
node.appendChild(child_33508);


var G__33509 = seq__33016_33503;
var G__33510 = chunk__33018_33504;
var G__33511 = count__33019_33505;
var G__33512 = (i__33020_33506 + (1));
seq__33016_33503 = G__33509;
chunk__33018_33504 = G__33510;
count__33019_33505 = G__33511;
i__33020_33506 = G__33512;
continue;
} else {
var G__33513 = seq__33016_33503;
var G__33514 = chunk__33018_33504;
var G__33515 = count__33019_33505;
var G__33516 = (i__33020_33506 + (1));
seq__33016_33503 = G__33513;
chunk__33018_33504 = G__33514;
count__33019_33505 = G__33515;
i__33020_33506 = G__33516;
continue;
}
} else {
var temp__5735__auto___33517__$1 = cljs.core.seq(seq__33016_33503);
if(temp__5735__auto___33517__$1){
var seq__33016_33518__$1 = temp__5735__auto___33517__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33016_33518__$1)){
var c__4609__auto___33519 = cljs.core.chunk_first(seq__33016_33518__$1);
var G__33520 = cljs.core.chunk_rest(seq__33016_33518__$1);
var G__33521 = c__4609__auto___33519;
var G__33522 = cljs.core.count(c__4609__auto___33519);
var G__33523 = (0);
seq__33016_33503 = G__33520;
chunk__33018_33504 = G__33521;
count__33019_33505 = G__33522;
i__33020_33506 = G__33523;
continue;
} else {
var child_33529 = cljs.core.first(seq__33016_33518__$1);
if(cljs.core.truth_(child_33529)){
node.appendChild(child_33529);


var G__33530 = cljs.core.next(seq__33016_33518__$1);
var G__33531 = null;
var G__33532 = (0);
var G__33533 = (0);
seq__33016_33503 = G__33530;
chunk__33018_33504 = G__33531;
count__33019_33505 = G__33532;
i__33020_33506 = G__33533;
continue;
} else {
var G__33534 = cljs.core.next(seq__33016_33518__$1);
var G__33535 = null;
var G__33536 = (0);
var G__33537 = (0);
seq__33016_33503 = G__33534;
chunk__33018_33504 = G__33535;
count__33019_33505 = G__33536;
i__33020_33506 = G__33537;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33502);
}
}


var G__33538 = cljs.core.next(seq__32980_33491__$1);
var G__33539 = null;
var G__33540 = (0);
var G__33541 = (0);
seq__32980_33440 = G__33538;
chunk__32982_33441 = G__33539;
count__32983_33442 = G__33540;
i__32984_33443 = G__33541;
continue;
} else {
var G__33542 = cljs.core.next(seq__32980_33491__$1);
var G__33543 = null;
var G__33544 = (0);
var G__33545 = (0);
seq__32980_33440 = G__33542;
chunk__32982_33441 = G__33543;
count__32983_33442 = G__33544;
i__32984_33443 = G__33545;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33548 = arguments.length;
var i__4790__auto___33549 = (0);
while(true){
if((i__4790__auto___33549 < len__4789__auto___33548)){
args__4795__auto__.push((arguments[i__4790__auto___33549]));

var G__33550 = (i__4790__auto___33549 + (1));
i__4790__auto___33549 = G__33550;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33038){
var G__33039 = cljs.core.first(seq33038);
var seq33038__$1 = cljs.core.next(seq33038);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33039,seq33038__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33045 = arguments.length;
switch (G__33045) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__30245__auto___33555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_33061){
var state_val_33062 = (state_33061[(1)]);
if((state_val_33062 === (1))){
var state_33061__$1 = state_33061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33061__$1,(2),once_or_cleanup);
} else {
if((state_val_33062 === (2))){
var inst_33058 = (state_33061[(2)]);
var inst_33059 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33061__$1 = (function (){var statearr_33065 = state_33061;
(statearr_33065[(7)] = inst_33058);

return statearr_33065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33061__$1,inst_33059);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29912__auto__ = null;
var shadow$dom$state_machine__29912__auto____0 = (function (){
var statearr_33070 = [null,null,null,null,null,null,null,null];
(statearr_33070[(0)] = shadow$dom$state_machine__29912__auto__);

(statearr_33070[(1)] = (1));

return statearr_33070;
});
var shadow$dom$state_machine__29912__auto____1 = (function (state_33061){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_33061);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e33071){if((e33071 instanceof Object)){
var ex__29915__auto__ = e33071;
var statearr_33072_33556 = state_33061;
(statearr_33072_33556[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33557 = state_33061;
state_33061 = G__33557;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
shadow$dom$state_machine__29912__auto__ = function(state_33061){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29912__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29912__auto____1.call(this,state_33061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29912__auto____0;
shadow$dom$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29912__auto____1;
return shadow$dom$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_33073 = f__30246__auto__();
(statearr_33073[(6)] = c__30245__auto___33555);

return statearr_33073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
