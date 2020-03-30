goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30339 = arguments.length;
switch (G__30339) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30340 = (function (f,blockable,meta30341){
this.f = f;
this.blockable = blockable;
this.meta30341 = meta30341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30342,meta30341__$1){
var self__ = this;
var _30342__$1 = this;
return (new cljs.core.async.t_cljs$core$async30340(self__.f,self__.blockable,meta30341__$1));
}));

(cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30342){
var self__ = this;
var _30342__$1 = this;
return self__.meta30341;
}));

(cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30341","meta30341",-93325933,null)], null);
}));

(cljs.core.async.t_cljs$core$async30340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30340");

(cljs.core.async.t_cljs$core$async30340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30340.
 */
cljs.core.async.__GT_t_cljs$core$async30340 = (function cljs$core$async$__GT_t_cljs$core$async30340(f__$1,blockable__$1,meta30341){
return (new cljs.core.async.t_cljs$core$async30340(f__$1,blockable__$1,meta30341));
});

}

return (new cljs.core.async.t_cljs$core$async30340(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30363 = arguments.length;
switch (G__30363) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30369 = arguments.length;
switch (G__30369) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30374 = arguments.length;
switch (G__30374) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32574 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32574) : fn1.call(null,val_32574));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32574) : fn1.call(null,val_32574));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30401 = arguments.length;
switch (G__30401) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32578 = n;
var x_32579 = (0);
while(true){
if((x_32579 < n__4666__auto___32578)){
(a[x_32579] = x_32579);

var G__32580 = (x_32579 + (1));
x_32579 = G__32580;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30408 = (function (flag,meta30409){
this.flag = flag;
this.meta30409 = meta30409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30410,meta30409__$1){
var self__ = this;
var _30410__$1 = this;
return (new cljs.core.async.t_cljs$core$async30408(self__.flag,meta30409__$1));
}));

(cljs.core.async.t_cljs$core$async30408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30410){
var self__ = this;
var _30410__$1 = this;
return self__.meta30409;
}));

(cljs.core.async.t_cljs$core$async30408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30409","meta30409",-1578141254,null)], null);
}));

(cljs.core.async.t_cljs$core$async30408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30408");

(cljs.core.async.t_cljs$core$async30408.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30408.
 */
cljs.core.async.__GT_t_cljs$core$async30408 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30408(flag__$1,meta30409){
return (new cljs.core.async.t_cljs$core$async30408(flag__$1,meta30409));
});

}

return (new cljs.core.async.t_cljs$core$async30408(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30413 = (function (flag,cb,meta30414){
this.flag = flag;
this.cb = cb;
this.meta30414 = meta30414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30415,meta30414__$1){
var self__ = this;
var _30415__$1 = this;
return (new cljs.core.async.t_cljs$core$async30413(self__.flag,self__.cb,meta30414__$1));
}));

(cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30415){
var self__ = this;
var _30415__$1 = this;
return self__.meta30414;
}));

(cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30414","meta30414",503012474,null)], null);
}));

(cljs.core.async.t_cljs$core$async30413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30413");

(cljs.core.async.t_cljs$core$async30413.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30413.
 */
cljs.core.async.__GT_t_cljs$core$async30413 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30413(flag__$1,cb__$1,meta30414){
return (new cljs.core.async.t_cljs$core$async30413(flag__$1,cb__$1,meta30414));
});

}

return (new cljs.core.async.t_cljs$core$async30413(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30419_SHARP_){
var G__30421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30419_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30421) : fret.call(null,G__30421));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30420_SHARP_){
var G__30422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30420_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30422) : fret.call(null,G__30422));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32590 = (i + (1));
i = G__32590;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32591 = arguments.length;
var i__4790__auto___32593 = (0);
while(true){
if((i__4790__auto___32593 < len__4789__auto___32591)){
args__4795__auto__.push((arguments[i__4790__auto___32593]));

var G__32594 = (i__4790__auto___32593 + (1));
i__4790__auto___32593 = G__32594;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30425){
var map__30426 = p__30425;
var map__30426__$1 = (((((!((map__30426 == null))))?(((((map__30426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30426):map__30426);
var opts = map__30426__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30423){
var G__30424 = cljs.core.first(seq30423);
var seq30423__$1 = cljs.core.next(seq30423);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30424,seq30423__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30436 = arguments.length;
switch (G__30436) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30245__auto___32606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30475){
var state_val_30476 = (state_30475[(1)]);
if((state_val_30476 === (7))){
var inst_30471 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30488_32607 = state_30475__$1;
(statearr_30488_32607[(2)] = inst_30471);

(statearr_30488_32607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (1))){
var state_30475__$1 = state_30475;
var statearr_30489_32608 = state_30475__$1;
(statearr_30489_32608[(2)] = null);

(statearr_30489_32608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (4))){
var inst_30453 = (state_30475[(7)]);
var inst_30453__$1 = (state_30475[(2)]);
var inst_30455 = (inst_30453__$1 == null);
var state_30475__$1 = (function (){var statearr_30490 = state_30475;
(statearr_30490[(7)] = inst_30453__$1);

return statearr_30490;
})();
if(cljs.core.truth_(inst_30455)){
var statearr_30491_32609 = state_30475__$1;
(statearr_30491_32609[(1)] = (5));

} else {
var statearr_30492_32610 = state_30475__$1;
(statearr_30492_32610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (13))){
var state_30475__$1 = state_30475;
var statearr_30493_32611 = state_30475__$1;
(statearr_30493_32611[(2)] = null);

(statearr_30493_32611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (6))){
var inst_30453 = (state_30475[(7)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30475__$1,(11),to,inst_30453);
} else {
if((state_val_30476 === (3))){
var inst_30473 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30475__$1,inst_30473);
} else {
if((state_val_30476 === (12))){
var state_30475__$1 = state_30475;
var statearr_30495_32616 = state_30475__$1;
(statearr_30495_32616[(2)] = null);

(statearr_30495_32616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (2))){
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30475__$1,(4),from);
} else {
if((state_val_30476 === (11))){
var inst_30464 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30464)){
var statearr_30496_32620 = state_30475__$1;
(statearr_30496_32620[(1)] = (12));

} else {
var statearr_30497_32621 = state_30475__$1;
(statearr_30497_32621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (9))){
var state_30475__$1 = state_30475;
var statearr_30498_32622 = state_30475__$1;
(statearr_30498_32622[(2)] = null);

(statearr_30498_32622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (5))){
var state_30475__$1 = state_30475;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30499_32626 = state_30475__$1;
(statearr_30499_32626[(1)] = (8));

} else {
var statearr_30500_32627 = state_30475__$1;
(statearr_30500_32627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (14))){
var inst_30469 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30501_32628 = state_30475__$1;
(statearr_30501_32628[(2)] = inst_30469);

(statearr_30501_32628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (10))){
var inst_30461 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30502_32632 = state_30475__$1;
(statearr_30502_32632[(2)] = inst_30461);

(statearr_30502_32632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (8))){
var inst_30458 = cljs.core.async.close_BANG_(to);
var state_30475__$1 = state_30475;
var statearr_30507_32633 = state_30475__$1;
(statearr_30507_32633[(2)] = inst_30458);

(statearr_30507_32633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_30512 = [null,null,null,null,null,null,null,null];
(statearr_30512[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_30512[(1)] = (1));

return statearr_30512;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_30475){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30475);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30514){if((e30514 instanceof Object)){
var ex__29915__auto__ = e30514;
var statearr_30518_32637 = state_30475;
(statearr_30518_32637[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32651 = state_30475;
state_30475 = G__32651;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_30475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_30475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_30519 = f__30246__auto__();
(statearr_30519[(6)] = c__30245__auto___32606);

return statearr_30519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30523){
var vec__30524 = p__30523;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30524,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30524,(1),null);
var job = vec__30524;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30245__auto___32656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30533){
var state_val_30534 = (state_30533[(1)]);
if((state_val_30534 === (1))){
var state_30533__$1 = state_30533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30533__$1,(2),res,v);
} else {
if((state_val_30534 === (2))){
var inst_30530 = (state_30533[(2)]);
var inst_30531 = cljs.core.async.close_BANG_(res);
var state_30533__$1 = (function (){var statearr_30545 = state_30533;
(statearr_30545[(7)] = inst_30530);

return statearr_30545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30533__$1,inst_30531);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0 = (function (){
var statearr_30546 = [null,null,null,null,null,null,null,null];
(statearr_30546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__);

(statearr_30546[(1)] = (1));

return statearr_30546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1 = (function (state_30533){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30533);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30547){if((e30547 instanceof Object)){
var ex__29915__auto__ = e30547;
var statearr_30548_32657 = state_30533;
(statearr_30548_32657[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32658 = state_30533;
state_30533 = G__32658;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = function(state_30533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1.call(this,state_30533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_30554 = f__30246__auto__();
(statearr_30554[(6)] = c__30245__auto___32656);

return statearr_30554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30558){
var vec__30560 = p__30558;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30560,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30560,(1),null);
var job = vec__30560;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32662 = n;
var __32663 = (0);
while(true){
if((__32663 < n__4666__auto___32662)){
var G__30565_32667 = type;
var G__30565_32668__$1 = (((G__30565_32667 instanceof cljs.core.Keyword))?G__30565_32667.fqn:null);
switch (G__30565_32668__$1) {
case "compute":
var c__30245__auto___32670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32663,c__30245__auto___32670,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async){
return (function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = ((function (__32663,c__30245__auto___32670,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async){
return (function (state_30582){
var state_val_30583 = (state_30582[(1)]);
if((state_val_30583 === (1))){
var state_30582__$1 = state_30582;
var statearr_30591_32672 = state_30582__$1;
(statearr_30591_32672[(2)] = null);

(statearr_30591_32672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (2))){
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(4),jobs);
} else {
if((state_val_30583 === (3))){
var inst_30580 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30582__$1,inst_30580);
} else {
if((state_val_30583 === (4))){
var inst_30572 = (state_30582[(2)]);
var inst_30573 = process(inst_30572);
var state_30582__$1 = state_30582;
if(cljs.core.truth_(inst_30573)){
var statearr_30593_32675 = state_30582__$1;
(statearr_30593_32675[(1)] = (5));

} else {
var statearr_30594_32676 = state_30582__$1;
(statearr_30594_32676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (5))){
var state_30582__$1 = state_30582;
var statearr_30595_32677 = state_30582__$1;
(statearr_30595_32677[(2)] = null);

(statearr_30595_32677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (6))){
var state_30582__$1 = state_30582;
var statearr_30600_32678 = state_30582__$1;
(statearr_30600_32678[(2)] = null);

(statearr_30600_32678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (7))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30601_32679 = state_30582__$1;
(statearr_30601_32679[(2)] = inst_30578);

(statearr_30601_32679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32663,c__30245__auto___32670,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async))
;
return ((function (__32663,switch__29911__auto__,c__30245__auto___32670,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0 = (function (){
var statearr_30602 = [null,null,null,null,null,null,null];
(statearr_30602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__);

(statearr_30602[(1)] = (1));

return statearr_30602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1 = (function (state_30582){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30582);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30603){if((e30603 instanceof Object)){
var ex__29915__auto__ = e30603;
var statearr_30604_32680 = state_30582;
(statearr_30604_32680[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32685 = state_30582;
state_30582 = G__32685;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__;
})()
;})(__32663,switch__29911__auto__,c__30245__auto___32670,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async))
})();
var state__30247__auto__ = (function (){var statearr_30605 = f__30246__auto__();
(statearr_30605[(6)] = c__30245__auto___32670);

return statearr_30605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
});})(__32663,c__30245__auto___32670,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async))
);


break;
case "async":
var c__30245__auto___32690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32663,c__30245__auto___32690,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async){
return (function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = ((function (__32663,c__30245__auto___32690,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async){
return (function (state_30618){
var state_val_30619 = (state_30618[(1)]);
if((state_val_30619 === (1))){
var state_30618__$1 = state_30618;
var statearr_30620_32691 = state_30618__$1;
(statearr_30620_32691[(2)] = null);

(statearr_30620_32691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (2))){
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30618__$1,(4),jobs);
} else {
if((state_val_30619 === (3))){
var inst_30616 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30618__$1,inst_30616);
} else {
if((state_val_30619 === (4))){
var inst_30608 = (state_30618[(2)]);
var inst_30609 = async(inst_30608);
var state_30618__$1 = state_30618;
if(cljs.core.truth_(inst_30609)){
var statearr_30621_32705 = state_30618__$1;
(statearr_30621_32705[(1)] = (5));

} else {
var statearr_30622_32706 = state_30618__$1;
(statearr_30622_32706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (5))){
var state_30618__$1 = state_30618;
var statearr_30623_32707 = state_30618__$1;
(statearr_30623_32707[(2)] = null);

(statearr_30623_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (6))){
var state_30618__$1 = state_30618;
var statearr_30624_32708 = state_30618__$1;
(statearr_30624_32708[(2)] = null);

(statearr_30624_32708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (7))){
var inst_30614 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
var statearr_30625_32709 = state_30618__$1;
(statearr_30625_32709[(2)] = inst_30614);

(statearr_30625_32709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32663,c__30245__auto___32690,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async))
;
return ((function (__32663,switch__29911__auto__,c__30245__auto___32690,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0 = (function (){
var statearr_30626 = [null,null,null,null,null,null,null];
(statearr_30626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__);

(statearr_30626[(1)] = (1));

return statearr_30626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1 = (function (state_30618){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30618);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30627){if((e30627 instanceof Object)){
var ex__29915__auto__ = e30627;
var statearr_30630_32710 = state_30618;
(statearr_30630_32710[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32711 = state_30618;
state_30618 = G__32711;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = function(state_30618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1.call(this,state_30618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__;
})()
;})(__32663,switch__29911__auto__,c__30245__auto___32690,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async))
})();
var state__30247__auto__ = (function (){var statearr_30631 = f__30246__auto__();
(statearr_30631[(6)] = c__30245__auto___32690);

return statearr_30631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
});})(__32663,c__30245__auto___32690,G__30565_32667,G__30565_32668__$1,n__4666__auto___32662,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30565_32668__$1)].join('')));

}

var G__32712 = (__32663 + (1));
__32663 = G__32712;
continue;
} else {
}
break;
}

var c__30245__auto___32713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30671){
var state_val_30672 = (state_30671[(1)]);
if((state_val_30672 === (7))){
var inst_30667 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30673_32714 = state_30671__$1;
(statearr_30673_32714[(2)] = inst_30667);

(statearr_30673_32714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (1))){
var state_30671__$1 = state_30671;
var statearr_30674_32715 = state_30671__$1;
(statearr_30674_32715[(2)] = null);

(statearr_30674_32715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (4))){
var inst_30638 = (state_30671[(7)]);
var inst_30638__$1 = (state_30671[(2)]);
var inst_30641 = (inst_30638__$1 == null);
var state_30671__$1 = (function (){var statearr_30675 = state_30671;
(statearr_30675[(7)] = inst_30638__$1);

return statearr_30675;
})();
if(cljs.core.truth_(inst_30641)){
var statearr_30676_32722 = state_30671__$1;
(statearr_30676_32722[(1)] = (5));

} else {
var statearr_30677_32723 = state_30671__$1;
(statearr_30677_32723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (6))){
var inst_30645 = (state_30671[(8)]);
var inst_30638 = (state_30671[(7)]);
var inst_30645__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30659 = [inst_30638,inst_30645__$1];
var inst_30660 = (new cljs.core.PersistentVector(null,2,(5),inst_30658,inst_30659,null));
var state_30671__$1 = (function (){var statearr_30678 = state_30671;
(statearr_30678[(8)] = inst_30645__$1);

return statearr_30678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30671__$1,(8),jobs,inst_30660);
} else {
if((state_val_30672 === (3))){
var inst_30669 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30671__$1,inst_30669);
} else {
if((state_val_30672 === (2))){
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30671__$1,(4),from);
} else {
if((state_val_30672 === (9))){
var inst_30664 = (state_30671[(2)]);
var state_30671__$1 = (function (){var statearr_30679 = state_30671;
(statearr_30679[(9)] = inst_30664);

return statearr_30679;
})();
var statearr_30680_32724 = state_30671__$1;
(statearr_30680_32724[(2)] = null);

(statearr_30680_32724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (5))){
var inst_30643 = cljs.core.async.close_BANG_(jobs);
var state_30671__$1 = state_30671;
var statearr_30684_32725 = state_30671__$1;
(statearr_30684_32725[(2)] = inst_30643);

(statearr_30684_32725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (8))){
var inst_30645 = (state_30671[(8)]);
var inst_30662 = (state_30671[(2)]);
var state_30671__$1 = (function (){var statearr_30685 = state_30671;
(statearr_30685[(10)] = inst_30662);

return statearr_30685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30671__$1,(9),results,inst_30645);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0 = (function (){
var statearr_30692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__);

(statearr_30692[(1)] = (1));

return statearr_30692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1 = (function (state_30671){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30671);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30693){if((e30693 instanceof Object)){
var ex__29915__auto__ = e30693;
var statearr_30698_32727 = state_30671;
(statearr_30698_32727[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32733 = state_30671;
state_30671 = G__32733;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = function(state_30671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1.call(this,state_30671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_30712 = f__30246__auto__();
(statearr_30712[(6)] = c__30245__auto___32713);

return statearr_30712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


var c__30245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30751){
var state_val_30752 = (state_30751[(1)]);
if((state_val_30752 === (7))){
var inst_30747 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30754_32734 = state_30751__$1;
(statearr_30754_32734[(2)] = inst_30747);

(statearr_30754_32734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (20))){
var state_30751__$1 = state_30751;
var statearr_30755_32735 = state_30751__$1;
(statearr_30755_32735[(2)] = null);

(statearr_30755_32735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (1))){
var state_30751__$1 = state_30751;
var statearr_30756_32736 = state_30751__$1;
(statearr_30756_32736[(2)] = null);

(statearr_30756_32736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (4))){
var inst_30716 = (state_30751[(7)]);
var inst_30716__$1 = (state_30751[(2)]);
var inst_30717 = (inst_30716__$1 == null);
var state_30751__$1 = (function (){var statearr_30758 = state_30751;
(statearr_30758[(7)] = inst_30716__$1);

return statearr_30758;
})();
if(cljs.core.truth_(inst_30717)){
var statearr_30759_32737 = state_30751__$1;
(statearr_30759_32737[(1)] = (5));

} else {
var statearr_30760_32738 = state_30751__$1;
(statearr_30760_32738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (15))){
var inst_30729 = (state_30751[(8)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30751__$1,(18),to,inst_30729);
} else {
if((state_val_30752 === (21))){
var inst_30742 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30761_32739 = state_30751__$1;
(statearr_30761_32739[(2)] = inst_30742);

(statearr_30761_32739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (13))){
var inst_30744 = (state_30751[(2)]);
var state_30751__$1 = (function (){var statearr_30762 = state_30751;
(statearr_30762[(9)] = inst_30744);

return statearr_30762;
})();
var statearr_30763_32746 = state_30751__$1;
(statearr_30763_32746[(2)] = null);

(statearr_30763_32746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (6))){
var inst_30716 = (state_30751[(7)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30751__$1,(11),inst_30716);
} else {
if((state_val_30752 === (17))){
var inst_30737 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
if(cljs.core.truth_(inst_30737)){
var statearr_30764_32747 = state_30751__$1;
(statearr_30764_32747[(1)] = (19));

} else {
var statearr_30765_32748 = state_30751__$1;
(statearr_30765_32748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (3))){
var inst_30749 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30751__$1,inst_30749);
} else {
if((state_val_30752 === (12))){
var inst_30726 = (state_30751[(10)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30751__$1,(14),inst_30726);
} else {
if((state_val_30752 === (2))){
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30751__$1,(4),results);
} else {
if((state_val_30752 === (19))){
var state_30751__$1 = state_30751;
var statearr_30766_32749 = state_30751__$1;
(statearr_30766_32749[(2)] = null);

(statearr_30766_32749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (11))){
var inst_30726 = (state_30751[(2)]);
var state_30751__$1 = (function (){var statearr_30767 = state_30751;
(statearr_30767[(10)] = inst_30726);

return statearr_30767;
})();
var statearr_30768_32750 = state_30751__$1;
(statearr_30768_32750[(2)] = null);

(statearr_30768_32750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (9))){
var state_30751__$1 = state_30751;
var statearr_30772_32751 = state_30751__$1;
(statearr_30772_32751[(2)] = null);

(statearr_30772_32751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (5))){
var state_30751__$1 = state_30751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30774_32752 = state_30751__$1;
(statearr_30774_32752[(1)] = (8));

} else {
var statearr_30775_32754 = state_30751__$1;
(statearr_30775_32754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (14))){
var inst_30729 = (state_30751[(8)]);
var inst_30729__$1 = (state_30751[(2)]);
var inst_30730 = (inst_30729__$1 == null);
var inst_30731 = cljs.core.not(inst_30730);
var state_30751__$1 = (function (){var statearr_30776 = state_30751;
(statearr_30776[(8)] = inst_30729__$1);

return statearr_30776;
})();
if(inst_30731){
var statearr_30777_32759 = state_30751__$1;
(statearr_30777_32759[(1)] = (15));

} else {
var statearr_30778_32760 = state_30751__$1;
(statearr_30778_32760[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (16))){
var state_30751__$1 = state_30751;
var statearr_30779_32761 = state_30751__$1;
(statearr_30779_32761[(2)] = false);

(statearr_30779_32761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (10))){
var inst_30723 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30780_32762 = state_30751__$1;
(statearr_30780_32762[(2)] = inst_30723);

(statearr_30780_32762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (18))){
var inst_30734 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30781_32765 = state_30751__$1;
(statearr_30781_32765[(2)] = inst_30734);

(statearr_30781_32765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (8))){
var inst_30720 = cljs.core.async.close_BANG_(to);
var state_30751__$1 = state_30751;
var statearr_30782_32766 = state_30751__$1;
(statearr_30782_32766[(2)] = inst_30720);

(statearr_30782_32766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0 = (function (){
var statearr_30787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__);

(statearr_30787[(1)] = (1));

return statearr_30787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1 = (function (state_30751){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30751);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30788){if((e30788 instanceof Object)){
var ex__29915__auto__ = e30788;
var statearr_30789_32769 = state_30751;
(statearr_30789_32769[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30788;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32770 = state_30751;
state_30751 = G__32770;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__ = function(state_30751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1.call(this,state_30751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_30792 = f__30246__auto__();
(statearr_30792[(6)] = c__30245__auto__);

return statearr_30792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));

return c__30245__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30795 = arguments.length;
switch (G__30795) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30799 = arguments.length;
switch (G__30799) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30804 = arguments.length;
switch (G__30804) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30245__auto___32776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30836){
var state_val_30837 = (state_30836[(1)]);
if((state_val_30837 === (7))){
var inst_30830 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
var statearr_30838_32777 = state_30836__$1;
(statearr_30838_32777[(2)] = inst_30830);

(statearr_30838_32777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (1))){
var state_30836__$1 = state_30836;
var statearr_30840_32778 = state_30836__$1;
(statearr_30840_32778[(2)] = null);

(statearr_30840_32778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (4))){
var inst_30807 = (state_30836[(7)]);
var inst_30807__$1 = (state_30836[(2)]);
var inst_30810 = (inst_30807__$1 == null);
var state_30836__$1 = (function (){var statearr_30841 = state_30836;
(statearr_30841[(7)] = inst_30807__$1);

return statearr_30841;
})();
if(cljs.core.truth_(inst_30810)){
var statearr_30842_32779 = state_30836__$1;
(statearr_30842_32779[(1)] = (5));

} else {
var statearr_30843_32780 = state_30836__$1;
(statearr_30843_32780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (13))){
var state_30836__$1 = state_30836;
var statearr_30844_32781 = state_30836__$1;
(statearr_30844_32781[(2)] = null);

(statearr_30844_32781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (6))){
var inst_30807 = (state_30836[(7)]);
var inst_30817 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30807) : p.call(null,inst_30807));
var state_30836__$1 = state_30836;
if(cljs.core.truth_(inst_30817)){
var statearr_30847_32782 = state_30836__$1;
(statearr_30847_32782[(1)] = (9));

} else {
var statearr_30848_32783 = state_30836__$1;
(statearr_30848_32783[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (3))){
var inst_30832 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30836__$1,inst_30832);
} else {
if((state_val_30837 === (12))){
var state_30836__$1 = state_30836;
var statearr_30849_32784 = state_30836__$1;
(statearr_30849_32784[(2)] = null);

(statearr_30849_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (2))){
var state_30836__$1 = state_30836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30836__$1,(4),ch);
} else {
if((state_val_30837 === (11))){
var inst_30807 = (state_30836[(7)]);
var inst_30821 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30836__$1,(8),inst_30821,inst_30807);
} else {
if((state_val_30837 === (9))){
var state_30836__$1 = state_30836;
var statearr_30850_32785 = state_30836__$1;
(statearr_30850_32785[(2)] = tc);

(statearr_30850_32785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (5))){
var inst_30812 = cljs.core.async.close_BANG_(tc);
var inst_30815 = cljs.core.async.close_BANG_(fc);
var state_30836__$1 = (function (){var statearr_30857 = state_30836;
(statearr_30857[(8)] = inst_30812);

return statearr_30857;
})();
var statearr_30858_32786 = state_30836__$1;
(statearr_30858_32786[(2)] = inst_30815);

(statearr_30858_32786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (14))){
var inst_30828 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
var statearr_30860_32787 = state_30836__$1;
(statearr_30860_32787[(2)] = inst_30828);

(statearr_30860_32787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (10))){
var state_30836__$1 = state_30836;
var statearr_30861_32789 = state_30836__$1;
(statearr_30861_32789[(2)] = fc);

(statearr_30861_32789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (8))){
var inst_30823 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
if(cljs.core.truth_(inst_30823)){
var statearr_30862_32790 = state_30836__$1;
(statearr_30862_32790[(1)] = (12));

} else {
var statearr_30863_32791 = state_30836__$1;
(statearr_30863_32791[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_30864 = [null,null,null,null,null,null,null,null,null];
(statearr_30864[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_30864[(1)] = (1));

return statearr_30864;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_30836){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30836);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30865){if((e30865 instanceof Object)){
var ex__29915__auto__ = e30865;
var statearr_30866_32796 = state_30836;
(statearr_30866_32796[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32797 = state_30836;
state_30836 = G__32797;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_30836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_30836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_30868 = f__30246__auto__();
(statearr_30868[(6)] = c__30245__auto___32776);

return statearr_30868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30905){
var state_val_30906 = (state_30905[(1)]);
if((state_val_30906 === (7))){
var inst_30901 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30907_32798 = state_30905__$1;
(statearr_30907_32798[(2)] = inst_30901);

(statearr_30907_32798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (1))){
var inst_30882 = init;
var state_30905__$1 = (function (){var statearr_30908 = state_30905;
(statearr_30908[(7)] = inst_30882);

return statearr_30908;
})();
var statearr_30909_32799 = state_30905__$1;
(statearr_30909_32799[(2)] = null);

(statearr_30909_32799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (4))){
var inst_30887 = (state_30905[(8)]);
var inst_30887__$1 = (state_30905[(2)]);
var inst_30888 = (inst_30887__$1 == null);
var state_30905__$1 = (function (){var statearr_30910 = state_30905;
(statearr_30910[(8)] = inst_30887__$1);

return statearr_30910;
})();
if(cljs.core.truth_(inst_30888)){
var statearr_30911_32800 = state_30905__$1;
(statearr_30911_32800[(1)] = (5));

} else {
var statearr_30912_32801 = state_30905__$1;
(statearr_30912_32801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (6))){
var inst_30887 = (state_30905[(8)]);
var inst_30882 = (state_30905[(7)]);
var inst_30891 = (state_30905[(9)]);
var inst_30891__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30882,inst_30887) : f.call(null,inst_30882,inst_30887));
var inst_30892 = cljs.core.reduced_QMARK_(inst_30891__$1);
var state_30905__$1 = (function (){var statearr_30913 = state_30905;
(statearr_30913[(9)] = inst_30891__$1);

return statearr_30913;
})();
if(inst_30892){
var statearr_30914_32802 = state_30905__$1;
(statearr_30914_32802[(1)] = (8));

} else {
var statearr_30915_32803 = state_30905__$1;
(statearr_30915_32803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (3))){
var inst_30903 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30905__$1,inst_30903);
} else {
if((state_val_30906 === (2))){
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30905__$1,(4),ch);
} else {
if((state_val_30906 === (9))){
var inst_30891 = (state_30905[(9)]);
var inst_30882 = inst_30891;
var state_30905__$1 = (function (){var statearr_30919 = state_30905;
(statearr_30919[(7)] = inst_30882);

return statearr_30919;
})();
var statearr_30920_32826 = state_30905__$1;
(statearr_30920_32826[(2)] = null);

(statearr_30920_32826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (5))){
var inst_30882 = (state_30905[(7)]);
var state_30905__$1 = state_30905;
var statearr_30923_32827 = state_30905__$1;
(statearr_30923_32827[(2)] = inst_30882);

(statearr_30923_32827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (10))){
var inst_30899 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30925_32828 = state_30905__$1;
(statearr_30925_32828[(2)] = inst_30899);

(statearr_30925_32828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (8))){
var inst_30891 = (state_30905[(9)]);
var inst_30895 = cljs.core.deref(inst_30891);
var state_30905__$1 = state_30905;
var statearr_30926_32829 = state_30905__$1;
(statearr_30926_32829[(2)] = inst_30895);

(statearr_30926_32829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29912__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29912__auto____0 = (function (){
var statearr_30928 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30928[(0)] = cljs$core$async$reduce_$_state_machine__29912__auto__);

(statearr_30928[(1)] = (1));

return statearr_30928;
});
var cljs$core$async$reduce_$_state_machine__29912__auto____1 = (function (state_30905){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30905);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30929){if((e30929 instanceof Object)){
var ex__29915__auto__ = e30929;
var statearr_30930_32830 = state_30905;
(statearr_30930_32830[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32831 = state_30905;
state_30905 = G__32831;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29912__auto__ = function(state_30905){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29912__auto____1.call(this,state_30905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29912__auto____0;
cljs$core$async$reduce_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29912__auto____1;
return cljs$core$async$reduce_$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_30932 = f__30246__auto__();
(statearr_30932[(6)] = c__30245__auto__);

return statearr_30932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));

return c__30245__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30942){
var state_val_30943 = (state_30942[(1)]);
if((state_val_30943 === (1))){
var inst_30937 = cljs.core.async.reduce(f__$1,init,ch);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30942__$1,(2),inst_30937);
} else {
if((state_val_30943 === (2))){
var inst_30939 = (state_30942[(2)]);
var inst_30940 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30939) : f__$1.call(null,inst_30939));
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30942__$1,inst_30940);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29912__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29912__auto____0 = (function (){
var statearr_30948 = [null,null,null,null,null,null,null];
(statearr_30948[(0)] = cljs$core$async$transduce_$_state_machine__29912__auto__);

(statearr_30948[(1)] = (1));

return statearr_30948;
});
var cljs$core$async$transduce_$_state_machine__29912__auto____1 = (function (state_30942){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30942);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e30950){if((e30950 instanceof Object)){
var ex__29915__auto__ = e30950;
var statearr_30951_32836 = state_30942;
(statearr_30951_32836[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32837 = state_30942;
state_30942 = G__32837;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29912__auto__ = function(state_30942){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29912__auto____1.call(this,state_30942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29912__auto____0;
cljs$core$async$transduce_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29912__auto____1;
return cljs$core$async$transduce_$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_30952 = f__30246__auto__();
(statearr_30952[(6)] = c__30245__auto__);

return statearr_30952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));

return c__30245__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30954 = arguments.length;
switch (G__30954) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_30979){
var state_val_30980 = (state_30979[(1)]);
if((state_val_30980 === (7))){
var inst_30961 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
var statearr_30981_32839 = state_30979__$1;
(statearr_30981_32839[(2)] = inst_30961);

(statearr_30981_32839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (1))){
var inst_30955 = cljs.core.seq(coll);
var inst_30956 = inst_30955;
var state_30979__$1 = (function (){var statearr_30982 = state_30979;
(statearr_30982[(7)] = inst_30956);

return statearr_30982;
})();
var statearr_30983_32840 = state_30979__$1;
(statearr_30983_32840[(2)] = null);

(statearr_30983_32840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (4))){
var inst_30956 = (state_30979[(7)]);
var inst_30959 = cljs.core.first(inst_30956);
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30979__$1,(7),ch,inst_30959);
} else {
if((state_val_30980 === (13))){
var inst_30973 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
var statearr_30984_32841 = state_30979__$1;
(statearr_30984_32841[(2)] = inst_30973);

(statearr_30984_32841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (6))){
var inst_30964 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
if(cljs.core.truth_(inst_30964)){
var statearr_30985_32842 = state_30979__$1;
(statearr_30985_32842[(1)] = (8));

} else {
var statearr_30986_32843 = state_30979__$1;
(statearr_30986_32843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (3))){
var inst_30977 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30979__$1,inst_30977);
} else {
if((state_val_30980 === (12))){
var state_30979__$1 = state_30979;
var statearr_30987_32844 = state_30979__$1;
(statearr_30987_32844[(2)] = null);

(statearr_30987_32844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (2))){
var inst_30956 = (state_30979[(7)]);
var state_30979__$1 = state_30979;
if(cljs.core.truth_(inst_30956)){
var statearr_30988_32845 = state_30979__$1;
(statearr_30988_32845[(1)] = (4));

} else {
var statearr_30989_32850 = state_30979__$1;
(statearr_30989_32850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (11))){
var inst_30970 = cljs.core.async.close_BANG_(ch);
var state_30979__$1 = state_30979;
var statearr_30993_32851 = state_30979__$1;
(statearr_30993_32851[(2)] = inst_30970);

(statearr_30993_32851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (9))){
var state_30979__$1 = state_30979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30996_32853 = state_30979__$1;
(statearr_30996_32853[(1)] = (11));

} else {
var statearr_30997_32854 = state_30979__$1;
(statearr_30997_32854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (5))){
var inst_30956 = (state_30979[(7)]);
var state_30979__$1 = state_30979;
var statearr_31001_32855 = state_30979__$1;
(statearr_31001_32855[(2)] = inst_30956);

(statearr_31001_32855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (10))){
var inst_30975 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
var statearr_31015_32856 = state_30979__$1;
(statearr_31015_32856[(2)] = inst_30975);

(statearr_31015_32856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (8))){
var inst_30956 = (state_30979[(7)]);
var inst_30966 = cljs.core.next(inst_30956);
var inst_30956__$1 = inst_30966;
var state_30979__$1 = (function (){var statearr_31020 = state_30979;
(statearr_31020[(7)] = inst_30956__$1);

return statearr_31020;
})();
var statearr_31021_32857 = state_30979__$1;
(statearr_31021_32857[(2)] = null);

(statearr_31021_32857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_31022 = [null,null,null,null,null,null,null,null];
(statearr_31022[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_31022[(1)] = (1));

return statearr_31022;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_30979){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_30979);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e31023){if((e31023 instanceof Object)){
var ex__29915__auto__ = e31023;
var statearr_31024_32858 = state_30979;
(statearr_31024_32858[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32859 = state_30979;
state_30979 = G__32859;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_30979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_30979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_31025 = f__30246__auto__();
(statearr_31025[(6)] = c__30245__auto__);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));

return c__30245__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31036 = (function (ch,cs,meta31037){
this.ch = ch;
this.cs = cs;
this.meta31037 = meta31037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31038,meta31037__$1){
var self__ = this;
var _31038__$1 = this;
return (new cljs.core.async.t_cljs$core$async31036(self__.ch,self__.cs,meta31037__$1));
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31038){
var self__ = this;
var _31038__$1 = this;
return self__.meta31037;
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31037","meta31037",1406414839,null)], null);
}));

(cljs.core.async.t_cljs$core$async31036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31036");

(cljs.core.async.t_cljs$core$async31036.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31036.
 */
cljs.core.async.__GT_t_cljs$core$async31036 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31036(ch__$1,cs__$1,meta31037){
return (new cljs.core.async.t_cljs$core$async31036(ch__$1,cs__$1,meta31037));
});

}

return (new cljs.core.async.t_cljs$core$async31036(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30245__auto___32869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_31236){
var state_val_31237 = (state_31236[(1)]);
if((state_val_31237 === (7))){
var inst_31232 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31238_32870 = state_31236__$1;
(statearr_31238_32870[(2)] = inst_31232);

(statearr_31238_32870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (20))){
var inst_31118 = (state_31236[(7)]);
var inst_31143 = cljs.core.first(inst_31118);
var inst_31144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31143,(0),null);
var inst_31146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31143,(1),null);
var state_31236__$1 = (function (){var statearr_31239 = state_31236;
(statearr_31239[(8)] = inst_31144);

return statearr_31239;
})();
if(cljs.core.truth_(inst_31146)){
var statearr_31240_32876 = state_31236__$1;
(statearr_31240_32876[(1)] = (22));

} else {
var statearr_31241_32877 = state_31236__$1;
(statearr_31241_32877[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (27))){
var inst_31183 = (state_31236[(9)]);
var inst_31076 = (state_31236[(10)]);
var inst_31176 = (state_31236[(11)]);
var inst_31178 = (state_31236[(12)]);
var inst_31183__$1 = cljs.core._nth(inst_31176,inst_31178);
var inst_31184 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31183__$1,inst_31076,done);
var state_31236__$1 = (function (){var statearr_31242 = state_31236;
(statearr_31242[(9)] = inst_31183__$1);

return statearr_31242;
})();
if(cljs.core.truth_(inst_31184)){
var statearr_31243_32879 = state_31236__$1;
(statearr_31243_32879[(1)] = (30));

} else {
var statearr_31244_32880 = state_31236__$1;
(statearr_31244_32880[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (1))){
var state_31236__$1 = state_31236;
var statearr_31246_32881 = state_31236__$1;
(statearr_31246_32881[(2)] = null);

(statearr_31246_32881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (24))){
var inst_31118 = (state_31236[(7)]);
var inst_31152 = (state_31236[(2)]);
var inst_31154 = cljs.core.next(inst_31118);
var inst_31087 = inst_31154;
var inst_31088 = null;
var inst_31089 = (0);
var inst_31090 = (0);
var state_31236__$1 = (function (){var statearr_31250 = state_31236;
(statearr_31250[(13)] = inst_31087);

(statearr_31250[(14)] = inst_31089);

(statearr_31250[(15)] = inst_31088);

(statearr_31250[(16)] = inst_31090);

(statearr_31250[(17)] = inst_31152);

return statearr_31250;
})();
var statearr_31254_32886 = state_31236__$1;
(statearr_31254_32886[(2)] = null);

(statearr_31254_32886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (39))){
var state_31236__$1 = state_31236;
var statearr_31258_32887 = state_31236__$1;
(statearr_31258_32887[(2)] = null);

(statearr_31258_32887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (4))){
var inst_31076 = (state_31236[(10)]);
var inst_31076__$1 = (state_31236[(2)]);
var inst_31077 = (inst_31076__$1 == null);
var state_31236__$1 = (function (){var statearr_31259 = state_31236;
(statearr_31259[(10)] = inst_31076__$1);

return statearr_31259;
})();
if(cljs.core.truth_(inst_31077)){
var statearr_31260_32888 = state_31236__$1;
(statearr_31260_32888[(1)] = (5));

} else {
var statearr_31261_32889 = state_31236__$1;
(statearr_31261_32889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (15))){
var inst_31087 = (state_31236[(13)]);
var inst_31089 = (state_31236[(14)]);
var inst_31088 = (state_31236[(15)]);
var inst_31090 = (state_31236[(16)]);
var inst_31110 = (state_31236[(2)]);
var inst_31112 = (inst_31090 + (1));
var tmp31255 = inst_31087;
var tmp31256 = inst_31089;
var tmp31257 = inst_31088;
var inst_31087__$1 = tmp31255;
var inst_31088__$1 = tmp31257;
var inst_31089__$1 = tmp31256;
var inst_31090__$1 = inst_31112;
var state_31236__$1 = (function (){var statearr_31262 = state_31236;
(statearr_31262[(13)] = inst_31087__$1);

(statearr_31262[(14)] = inst_31089__$1);

(statearr_31262[(18)] = inst_31110);

(statearr_31262[(15)] = inst_31088__$1);

(statearr_31262[(16)] = inst_31090__$1);

return statearr_31262;
})();
var statearr_31263_32890 = state_31236__$1;
(statearr_31263_32890[(2)] = null);

(statearr_31263_32890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (21))){
var inst_31157 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31267_32891 = state_31236__$1;
(statearr_31267_32891[(2)] = inst_31157);

(statearr_31267_32891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (31))){
var inst_31183 = (state_31236[(9)]);
var inst_31187 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31183);
var state_31236__$1 = state_31236;
var statearr_31268_32892 = state_31236__$1;
(statearr_31268_32892[(2)] = inst_31187);

(statearr_31268_32892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (32))){
var inst_31177 = (state_31236[(19)]);
var inst_31176 = (state_31236[(11)]);
var inst_31178 = (state_31236[(12)]);
var inst_31175 = (state_31236[(20)]);
var inst_31189 = (state_31236[(2)]);
var inst_31190 = (inst_31178 + (1));
var tmp31264 = inst_31177;
var tmp31265 = inst_31176;
var tmp31266 = inst_31175;
var inst_31175__$1 = tmp31266;
var inst_31176__$1 = tmp31265;
var inst_31177__$1 = tmp31264;
var inst_31178__$1 = inst_31190;
var state_31236__$1 = (function (){var statearr_31269 = state_31236;
(statearr_31269[(19)] = inst_31177__$1);

(statearr_31269[(11)] = inst_31176__$1);

(statearr_31269[(21)] = inst_31189);

(statearr_31269[(12)] = inst_31178__$1);

(statearr_31269[(20)] = inst_31175__$1);

return statearr_31269;
})();
var statearr_31270_32893 = state_31236__$1;
(statearr_31270_32893[(2)] = null);

(statearr_31270_32893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (40))){
var inst_31202 = (state_31236[(22)]);
var inst_31206 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31202);
var state_31236__$1 = state_31236;
var statearr_31271_32894 = state_31236__$1;
(statearr_31271_32894[(2)] = inst_31206);

(statearr_31271_32894[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (33))){
var inst_31193 = (state_31236[(23)]);
var inst_31195 = cljs.core.chunked_seq_QMARK_(inst_31193);
var state_31236__$1 = state_31236;
if(inst_31195){
var statearr_31272_32895 = state_31236__$1;
(statearr_31272_32895[(1)] = (36));

} else {
var statearr_31273_32896 = state_31236__$1;
(statearr_31273_32896[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (13))){
var inst_31104 = (state_31236[(24)]);
var inst_31107 = cljs.core.async.close_BANG_(inst_31104);
var state_31236__$1 = state_31236;
var statearr_31274_32897 = state_31236__$1;
(statearr_31274_32897[(2)] = inst_31107);

(statearr_31274_32897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (22))){
var inst_31144 = (state_31236[(8)]);
var inst_31149 = cljs.core.async.close_BANG_(inst_31144);
var state_31236__$1 = state_31236;
var statearr_31275_32901 = state_31236__$1;
(statearr_31275_32901[(2)] = inst_31149);

(statearr_31275_32901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (36))){
var inst_31193 = (state_31236[(23)]);
var inst_31197 = cljs.core.chunk_first(inst_31193);
var inst_31198 = cljs.core.chunk_rest(inst_31193);
var inst_31199 = cljs.core.count(inst_31197);
var inst_31175 = inst_31198;
var inst_31176 = inst_31197;
var inst_31177 = inst_31199;
var inst_31178 = (0);
var state_31236__$1 = (function (){var statearr_31276 = state_31236;
(statearr_31276[(19)] = inst_31177);

(statearr_31276[(11)] = inst_31176);

(statearr_31276[(12)] = inst_31178);

(statearr_31276[(20)] = inst_31175);

return statearr_31276;
})();
var statearr_31277_32902 = state_31236__$1;
(statearr_31277_32902[(2)] = null);

(statearr_31277_32902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (41))){
var inst_31193 = (state_31236[(23)]);
var inst_31208 = (state_31236[(2)]);
var inst_31209 = cljs.core.next(inst_31193);
var inst_31175 = inst_31209;
var inst_31176 = null;
var inst_31177 = (0);
var inst_31178 = (0);
var state_31236__$1 = (function (){var statearr_31278 = state_31236;
(statearr_31278[(25)] = inst_31208);

(statearr_31278[(19)] = inst_31177);

(statearr_31278[(11)] = inst_31176);

(statearr_31278[(12)] = inst_31178);

(statearr_31278[(20)] = inst_31175);

return statearr_31278;
})();
var statearr_31279_32903 = state_31236__$1;
(statearr_31279_32903[(2)] = null);

(statearr_31279_32903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (43))){
var state_31236__$1 = state_31236;
var statearr_31280_32904 = state_31236__$1;
(statearr_31280_32904[(2)] = null);

(statearr_31280_32904[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (29))){
var inst_31217 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31281_32905 = state_31236__$1;
(statearr_31281_32905[(2)] = inst_31217);

(statearr_31281_32905[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (44))){
var inst_31229 = (state_31236[(2)]);
var state_31236__$1 = (function (){var statearr_31282 = state_31236;
(statearr_31282[(26)] = inst_31229);

return statearr_31282;
})();
var statearr_31283_32906 = state_31236__$1;
(statearr_31283_32906[(2)] = null);

(statearr_31283_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (6))){
var inst_31167 = (state_31236[(27)]);
var inst_31166 = cljs.core.deref(cs);
var inst_31167__$1 = cljs.core.keys(inst_31166);
var inst_31168 = cljs.core.count(inst_31167__$1);
var inst_31169 = cljs.core.reset_BANG_(dctr,inst_31168);
var inst_31174 = cljs.core.seq(inst_31167__$1);
var inst_31175 = inst_31174;
var inst_31176 = null;
var inst_31177 = (0);
var inst_31178 = (0);
var state_31236__$1 = (function (){var statearr_31284 = state_31236;
(statearr_31284[(28)] = inst_31169);

(statearr_31284[(19)] = inst_31177);

(statearr_31284[(27)] = inst_31167__$1);

(statearr_31284[(11)] = inst_31176);

(statearr_31284[(12)] = inst_31178);

(statearr_31284[(20)] = inst_31175);

return statearr_31284;
})();
var statearr_31285_32907 = state_31236__$1;
(statearr_31285_32907[(2)] = null);

(statearr_31285_32907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (28))){
var inst_31193 = (state_31236[(23)]);
var inst_31175 = (state_31236[(20)]);
var inst_31193__$1 = cljs.core.seq(inst_31175);
var state_31236__$1 = (function (){var statearr_31286 = state_31236;
(statearr_31286[(23)] = inst_31193__$1);

return statearr_31286;
})();
if(inst_31193__$1){
var statearr_31287_32908 = state_31236__$1;
(statearr_31287_32908[(1)] = (33));

} else {
var statearr_31288_32909 = state_31236__$1;
(statearr_31288_32909[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (25))){
var inst_31177 = (state_31236[(19)]);
var inst_31178 = (state_31236[(12)]);
var inst_31180 = (inst_31178 < inst_31177);
var inst_31181 = inst_31180;
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31181)){
var statearr_31289_32910 = state_31236__$1;
(statearr_31289_32910[(1)] = (27));

} else {
var statearr_31290_32911 = state_31236__$1;
(statearr_31290_32911[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (34))){
var state_31236__$1 = state_31236;
var statearr_31291_32912 = state_31236__$1;
(statearr_31291_32912[(2)] = null);

(statearr_31291_32912[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (17))){
var state_31236__$1 = state_31236;
var statearr_31292_32914 = state_31236__$1;
(statearr_31292_32914[(2)] = null);

(statearr_31292_32914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (3))){
var inst_31234 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31236__$1,inst_31234);
} else {
if((state_val_31237 === (12))){
var inst_31162 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31293_32915 = state_31236__$1;
(statearr_31293_32915[(2)] = inst_31162);

(statearr_31293_32915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (2))){
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31236__$1,(4),ch);
} else {
if((state_val_31237 === (23))){
var state_31236__$1 = state_31236;
var statearr_31299_32916 = state_31236__$1;
(statearr_31299_32916[(2)] = null);

(statearr_31299_32916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (35))){
var inst_31215 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31328_32917 = state_31236__$1;
(statearr_31328_32917[(2)] = inst_31215);

(statearr_31328_32917[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (19))){
var inst_31118 = (state_31236[(7)]);
var inst_31124 = cljs.core.chunk_first(inst_31118);
var inst_31125 = cljs.core.chunk_rest(inst_31118);
var inst_31137 = cljs.core.count(inst_31124);
var inst_31087 = inst_31125;
var inst_31088 = inst_31124;
var inst_31089 = inst_31137;
var inst_31090 = (0);
var state_31236__$1 = (function (){var statearr_31334 = state_31236;
(statearr_31334[(13)] = inst_31087);

(statearr_31334[(14)] = inst_31089);

(statearr_31334[(15)] = inst_31088);

(statearr_31334[(16)] = inst_31090);

return statearr_31334;
})();
var statearr_31335_32922 = state_31236__$1;
(statearr_31335_32922[(2)] = null);

(statearr_31335_32922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (11))){
var inst_31118 = (state_31236[(7)]);
var inst_31087 = (state_31236[(13)]);
var inst_31118__$1 = cljs.core.seq(inst_31087);
var state_31236__$1 = (function (){var statearr_31336 = state_31236;
(statearr_31336[(7)] = inst_31118__$1);

return statearr_31336;
})();
if(inst_31118__$1){
var statearr_31337_32927 = state_31236__$1;
(statearr_31337_32927[(1)] = (16));

} else {
var statearr_31338_32928 = state_31236__$1;
(statearr_31338_32928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (9))){
var inst_31164 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31339_32930 = state_31236__$1;
(statearr_31339_32930[(2)] = inst_31164);

(statearr_31339_32930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (5))){
var inst_31084 = cljs.core.deref(cs);
var inst_31086 = cljs.core.seq(inst_31084);
var inst_31087 = inst_31086;
var inst_31088 = null;
var inst_31089 = (0);
var inst_31090 = (0);
var state_31236__$1 = (function (){var statearr_31341 = state_31236;
(statearr_31341[(13)] = inst_31087);

(statearr_31341[(14)] = inst_31089);

(statearr_31341[(15)] = inst_31088);

(statearr_31341[(16)] = inst_31090);

return statearr_31341;
})();
var statearr_31342_32932 = state_31236__$1;
(statearr_31342_32932[(2)] = null);

(statearr_31342_32932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (14))){
var state_31236__$1 = state_31236;
var statearr_31343_32933 = state_31236__$1;
(statearr_31343_32933[(2)] = null);

(statearr_31343_32933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (45))){
var inst_31226 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31344_32934 = state_31236__$1;
(statearr_31344_32934[(2)] = inst_31226);

(statearr_31344_32934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (26))){
var inst_31167 = (state_31236[(27)]);
var inst_31219 = (state_31236[(2)]);
var inst_31223 = cljs.core.seq(inst_31167);
var state_31236__$1 = (function (){var statearr_31345 = state_31236;
(statearr_31345[(29)] = inst_31219);

return statearr_31345;
})();
if(inst_31223){
var statearr_31346_32935 = state_31236__$1;
(statearr_31346_32935[(1)] = (42));

} else {
var statearr_31347_32936 = state_31236__$1;
(statearr_31347_32936[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (16))){
var inst_31118 = (state_31236[(7)]);
var inst_31121 = cljs.core.chunked_seq_QMARK_(inst_31118);
var state_31236__$1 = state_31236;
if(inst_31121){
var statearr_31348_32937 = state_31236__$1;
(statearr_31348_32937[(1)] = (19));

} else {
var statearr_31349_32938 = state_31236__$1;
(statearr_31349_32938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (38))){
var inst_31212 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31350_32939 = state_31236__$1;
(statearr_31350_32939[(2)] = inst_31212);

(statearr_31350_32939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (30))){
var state_31236__$1 = state_31236;
var statearr_31351_32940 = state_31236__$1;
(statearr_31351_32940[(2)] = null);

(statearr_31351_32940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (10))){
var inst_31088 = (state_31236[(15)]);
var inst_31090 = (state_31236[(16)]);
var inst_31100 = cljs.core._nth(inst_31088,inst_31090);
var inst_31104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31100,(0),null);
var inst_31105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31100,(1),null);
var state_31236__$1 = (function (){var statearr_31355 = state_31236;
(statearr_31355[(24)] = inst_31104);

return statearr_31355;
})();
if(cljs.core.truth_(inst_31105)){
var statearr_31356_32941 = state_31236__$1;
(statearr_31356_32941[(1)] = (13));

} else {
var statearr_31357_32942 = state_31236__$1;
(statearr_31357_32942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (18))){
var inst_31160 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31358_32943 = state_31236__$1;
(statearr_31358_32943[(2)] = inst_31160);

(statearr_31358_32943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (42))){
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31236__$1,(45),dchan);
} else {
if((state_val_31237 === (37))){
var inst_31076 = (state_31236[(10)]);
var inst_31193 = (state_31236[(23)]);
var inst_31202 = (state_31236[(22)]);
var inst_31202__$1 = cljs.core.first(inst_31193);
var inst_31203 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31202__$1,inst_31076,done);
var state_31236__$1 = (function (){var statearr_31359 = state_31236;
(statearr_31359[(22)] = inst_31202__$1);

return statearr_31359;
})();
if(cljs.core.truth_(inst_31203)){
var statearr_31360_32944 = state_31236__$1;
(statearr_31360_32944[(1)] = (39));

} else {
var statearr_31361_32945 = state_31236__$1;
(statearr_31361_32945[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (8))){
var inst_31089 = (state_31236[(14)]);
var inst_31090 = (state_31236[(16)]);
var inst_31093 = (inst_31090 < inst_31089);
var inst_31094 = inst_31093;
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31094)){
var statearr_31362_32946 = state_31236__$1;
(statearr_31362_32946[(1)] = (10));

} else {
var statearr_31363_32947 = state_31236__$1;
(statearr_31363_32947[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29912__auto__ = null;
var cljs$core$async$mult_$_state_machine__29912__auto____0 = (function (){
var statearr_31364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31364[(0)] = cljs$core$async$mult_$_state_machine__29912__auto__);

(statearr_31364[(1)] = (1));

return statearr_31364;
});
var cljs$core$async$mult_$_state_machine__29912__auto____1 = (function (state_31236){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_31236);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e31365){if((e31365 instanceof Object)){
var ex__29915__auto__ = e31365;
var statearr_31366_32948 = state_31236;
(statearr_31366_32948[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32949 = state_31236;
state_31236 = G__32949;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29912__auto__ = function(state_31236){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29912__auto____1.call(this,state_31236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29912__auto____0;
cljs$core$async$mult_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29912__auto____1;
return cljs$core$async$mult_$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_31370 = f__30246__auto__();
(statearr_31370[(6)] = c__30245__auto___32869);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31378 = arguments.length;
switch (G__31378) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32951 = arguments.length;
var i__4790__auto___32952 = (0);
while(true){
if((i__4790__auto___32952 < len__4789__auto___32951)){
args__4795__auto__.push((arguments[i__4790__auto___32952]));

var G__32953 = (i__4790__auto___32952 + (1));
i__4790__auto___32952 = G__32953;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31408){
var map__31409 = p__31408;
var map__31409__$1 = (((((!((map__31409 == null))))?(((((map__31409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31409):map__31409);
var opts = map__31409__$1;
var statearr_31411_32957 = state;
(statearr_31411_32957[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31412_32962 = state;
(statearr_31412_32962[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31420_32966 = state;
(statearr_31420_32966[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31400){
var G__31401 = cljs.core.first(seq31400);
var seq31400__$1 = cljs.core.next(seq31400);
var G__31402 = cljs.core.first(seq31400__$1);
var seq31400__$2 = cljs.core.next(seq31400__$1);
var G__31403 = cljs.core.first(seq31400__$2);
var seq31400__$3 = cljs.core.next(seq31400__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31401,G__31402,G__31403,seq31400__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31476 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31477){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31477 = meta31477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31478,meta31477__$1){
var self__ = this;
var _31478__$1 = this;
return (new cljs.core.async.t_cljs$core$async31476(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31477__$1));
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31478){
var self__ = this;
var _31478__$1 = this;
return self__.meta31477;
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31477","meta31477",-356308200,null)], null);
}));

(cljs.core.async.t_cljs$core$async31476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31476");

(cljs.core.async.t_cljs$core$async31476.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31476.
 */
cljs.core.async.__GT_t_cljs$core$async31476 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31476(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31477){
return (new cljs.core.async.t_cljs$core$async31476(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31477));
});

}

return (new cljs.core.async.t_cljs$core$async31476(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30245__auto___32998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_31593){
var state_val_31594 = (state_31593[(1)]);
if((state_val_31594 === (7))){
var inst_31499 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31595_33005 = state_31593__$1;
(statearr_31595_33005[(2)] = inst_31499);

(statearr_31595_33005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (20))){
var inst_31511 = (state_31593[(7)]);
var state_31593__$1 = state_31593;
var statearr_31596_33006 = state_31593__$1;
(statearr_31596_33006[(2)] = inst_31511);

(statearr_31596_33006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (27))){
var state_31593__$1 = state_31593;
var statearr_31597_33007 = state_31593__$1;
(statearr_31597_33007[(2)] = null);

(statearr_31597_33007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (1))){
var inst_31486 = (state_31593[(8)]);
var inst_31486__$1 = calc_state();
var inst_31488 = (inst_31486__$1 == null);
var inst_31489 = cljs.core.not(inst_31488);
var state_31593__$1 = (function (){var statearr_31601 = state_31593;
(statearr_31601[(8)] = inst_31486__$1);

return statearr_31601;
})();
if(inst_31489){
var statearr_31602_33008 = state_31593__$1;
(statearr_31602_33008[(1)] = (2));

} else {
var statearr_31603_33009 = state_31593__$1;
(statearr_31603_33009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (24))){
var inst_31565 = (state_31593[(9)]);
var inst_31548 = (state_31593[(10)]);
var inst_31538 = (state_31593[(11)]);
var inst_31565__$1 = (inst_31538.cljs$core$IFn$_invoke$arity$1 ? inst_31538.cljs$core$IFn$_invoke$arity$1(inst_31548) : inst_31538.call(null,inst_31548));
var state_31593__$1 = (function (){var statearr_31604 = state_31593;
(statearr_31604[(9)] = inst_31565__$1);

return statearr_31604;
})();
if(cljs.core.truth_(inst_31565__$1)){
var statearr_31605_33010 = state_31593__$1;
(statearr_31605_33010[(1)] = (29));

} else {
var statearr_31606_33011 = state_31593__$1;
(statearr_31606_33011[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (4))){
var inst_31502 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31502)){
var statearr_31608_33012 = state_31593__$1;
(statearr_31608_33012[(1)] = (8));

} else {
var statearr_31609_33013 = state_31593__$1;
(statearr_31609_33013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (15))){
var inst_31531 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31531)){
var statearr_31610_33014 = state_31593__$1;
(statearr_31610_33014[(1)] = (19));

} else {
var statearr_31611_33015 = state_31593__$1;
(statearr_31611_33015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (21))){
var inst_31536 = (state_31593[(12)]);
var inst_31536__$1 = (state_31593[(2)]);
var inst_31538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31536__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31536__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31536__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31593__$1 = (function (){var statearr_31614 = state_31593;
(statearr_31614[(13)] = inst_31539);

(statearr_31614[(12)] = inst_31536__$1);

(statearr_31614[(11)] = inst_31538);

return statearr_31614;
})();
return cljs.core.async.ioc_alts_BANG_(state_31593__$1,(22),inst_31540);
} else {
if((state_val_31594 === (31))){
var inst_31574 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31574)){
var statearr_31616_33022 = state_31593__$1;
(statearr_31616_33022[(1)] = (32));

} else {
var statearr_31617_33023 = state_31593__$1;
(statearr_31617_33023[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (32))){
var inst_31547 = (state_31593[(14)]);
var state_31593__$1 = state_31593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31593__$1,(35),out,inst_31547);
} else {
if((state_val_31594 === (33))){
var inst_31536 = (state_31593[(12)]);
var inst_31511 = inst_31536;
var state_31593__$1 = (function (){var statearr_31619 = state_31593;
(statearr_31619[(7)] = inst_31511);

return statearr_31619;
})();
var statearr_31620_33024 = state_31593__$1;
(statearr_31620_33024[(2)] = null);

(statearr_31620_33024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (13))){
var inst_31511 = (state_31593[(7)]);
var inst_31519 = inst_31511.cljs$lang$protocol_mask$partition0$;
var inst_31520 = (inst_31519 & (64));
var inst_31521 = inst_31511.cljs$core$ISeq$;
var inst_31522 = (cljs.core.PROTOCOL_SENTINEL === inst_31521);
var inst_31523 = ((inst_31520) || (inst_31522));
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31523)){
var statearr_31621_33025 = state_31593__$1;
(statearr_31621_33025[(1)] = (16));

} else {
var statearr_31622_33026 = state_31593__$1;
(statearr_31622_33026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (22))){
var inst_31547 = (state_31593[(14)]);
var inst_31548 = (state_31593[(10)]);
var inst_31546 = (state_31593[(2)]);
var inst_31547__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31546,(0),null);
var inst_31548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31546,(1),null);
var inst_31551 = (inst_31547__$1 == null);
var inst_31553 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31548__$1,change);
var inst_31554 = ((inst_31551) || (inst_31553));
var state_31593__$1 = (function (){var statearr_31624 = state_31593;
(statearr_31624[(14)] = inst_31547__$1);

(statearr_31624[(10)] = inst_31548__$1);

return statearr_31624;
})();
if(cljs.core.truth_(inst_31554)){
var statearr_31625_33027 = state_31593__$1;
(statearr_31625_33027[(1)] = (23));

} else {
var statearr_31626_33028 = state_31593__$1;
(statearr_31626_33028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (36))){
var inst_31536 = (state_31593[(12)]);
var inst_31511 = inst_31536;
var state_31593__$1 = (function (){var statearr_31628 = state_31593;
(statearr_31628[(7)] = inst_31511);

return statearr_31628;
})();
var statearr_31629_33029 = state_31593__$1;
(statearr_31629_33029[(2)] = null);

(statearr_31629_33029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (29))){
var inst_31565 = (state_31593[(9)]);
var state_31593__$1 = state_31593;
var statearr_31630_33030 = state_31593__$1;
(statearr_31630_33030[(2)] = inst_31565);

(statearr_31630_33030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (6))){
var state_31593__$1 = state_31593;
var statearr_31631_33031 = state_31593__$1;
(statearr_31631_33031[(2)] = false);

(statearr_31631_33031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (28))){
var inst_31561 = (state_31593[(2)]);
var inst_31562 = calc_state();
var inst_31511 = inst_31562;
var state_31593__$1 = (function (){var statearr_31632 = state_31593;
(statearr_31632[(15)] = inst_31561);

(statearr_31632[(7)] = inst_31511);

return statearr_31632;
})();
var statearr_31633_33032 = state_31593__$1;
(statearr_31633_33032[(2)] = null);

(statearr_31633_33032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (25))){
var inst_31588 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31634_33033 = state_31593__$1;
(statearr_31634_33033[(2)] = inst_31588);

(statearr_31634_33033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (34))){
var inst_31586 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31635_33034 = state_31593__$1;
(statearr_31635_33034[(2)] = inst_31586);

(statearr_31635_33034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (17))){
var state_31593__$1 = state_31593;
var statearr_31636_33035 = state_31593__$1;
(statearr_31636_33035[(2)] = false);

(statearr_31636_33035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (3))){
var state_31593__$1 = state_31593;
var statearr_31637_33036 = state_31593__$1;
(statearr_31637_33036[(2)] = false);

(statearr_31637_33036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (12))){
var inst_31591 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31593__$1,inst_31591);
} else {
if((state_val_31594 === (2))){
var inst_31486 = (state_31593[(8)]);
var inst_31491 = inst_31486.cljs$lang$protocol_mask$partition0$;
var inst_31492 = (inst_31491 & (64));
var inst_31493 = inst_31486.cljs$core$ISeq$;
var inst_31494 = (cljs.core.PROTOCOL_SENTINEL === inst_31493);
var inst_31495 = ((inst_31492) || (inst_31494));
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31495)){
var statearr_31638_33037 = state_31593__$1;
(statearr_31638_33037[(1)] = (5));

} else {
var statearr_31639_33040 = state_31593__$1;
(statearr_31639_33040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (23))){
var inst_31547 = (state_31593[(14)]);
var inst_31556 = (inst_31547 == null);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31556)){
var statearr_31641_33041 = state_31593__$1;
(statearr_31641_33041[(1)] = (26));

} else {
var statearr_31642_33042 = state_31593__$1;
(statearr_31642_33042[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (35))){
var inst_31577 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31577)){
var statearr_31643_33044 = state_31593__$1;
(statearr_31643_33044[(1)] = (36));

} else {
var statearr_31644_33046 = state_31593__$1;
(statearr_31644_33046[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (19))){
var inst_31511 = (state_31593[(7)]);
var inst_31533 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31511);
var state_31593__$1 = state_31593;
var statearr_31645_33047 = state_31593__$1;
(statearr_31645_33047[(2)] = inst_31533);

(statearr_31645_33047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (11))){
var inst_31511 = (state_31593[(7)]);
var inst_31516 = (inst_31511 == null);
var inst_31517 = cljs.core.not(inst_31516);
var state_31593__$1 = state_31593;
if(inst_31517){
var statearr_31646_33048 = state_31593__$1;
(statearr_31646_33048[(1)] = (13));

} else {
var statearr_31647_33049 = state_31593__$1;
(statearr_31647_33049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (9))){
var inst_31486 = (state_31593[(8)]);
var state_31593__$1 = state_31593;
var statearr_31648_33050 = state_31593__$1;
(statearr_31648_33050[(2)] = inst_31486);

(statearr_31648_33050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (5))){
var state_31593__$1 = state_31593;
var statearr_31649_33051 = state_31593__$1;
(statearr_31649_33051[(2)] = true);

(statearr_31649_33051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (14))){
var state_31593__$1 = state_31593;
var statearr_31650_33052 = state_31593__$1;
(statearr_31650_33052[(2)] = false);

(statearr_31650_33052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (26))){
var inst_31548 = (state_31593[(10)]);
var inst_31558 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31548);
var state_31593__$1 = state_31593;
var statearr_31651_33053 = state_31593__$1;
(statearr_31651_33053[(2)] = inst_31558);

(statearr_31651_33053[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (16))){
var state_31593__$1 = state_31593;
var statearr_31653_33054 = state_31593__$1;
(statearr_31653_33054[(2)] = true);

(statearr_31653_33054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (38))){
var inst_31582 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31654_33055 = state_31593__$1;
(statearr_31654_33055[(2)] = inst_31582);

(statearr_31654_33055[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (30))){
var inst_31548 = (state_31593[(10)]);
var inst_31539 = (state_31593[(13)]);
var inst_31538 = (state_31593[(11)]);
var inst_31569 = cljs.core.empty_QMARK_(inst_31538);
var inst_31570 = (inst_31539.cljs$core$IFn$_invoke$arity$1 ? inst_31539.cljs$core$IFn$_invoke$arity$1(inst_31548) : inst_31539.call(null,inst_31548));
var inst_31571 = cljs.core.not(inst_31570);
var inst_31572 = ((inst_31569) && (inst_31571));
var state_31593__$1 = state_31593;
var statearr_31656_33056 = state_31593__$1;
(statearr_31656_33056[(2)] = inst_31572);

(statearr_31656_33056[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (10))){
var inst_31486 = (state_31593[(8)]);
var inst_31507 = (state_31593[(2)]);
var inst_31508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31507,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31507,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31507,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31511 = inst_31486;
var state_31593__$1 = (function (){var statearr_31657 = state_31593;
(statearr_31657[(16)] = inst_31508);

(statearr_31657[(7)] = inst_31511);

(statearr_31657[(17)] = inst_31510);

(statearr_31657[(18)] = inst_31509);

return statearr_31657;
})();
var statearr_31658_33063 = state_31593__$1;
(statearr_31658_33063[(2)] = null);

(statearr_31658_33063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (18))){
var inst_31527 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31659_33064 = state_31593__$1;
(statearr_31659_33064[(2)] = inst_31527);

(statearr_31659_33064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (37))){
var state_31593__$1 = state_31593;
var statearr_31660_33066 = state_31593__$1;
(statearr_31660_33066[(2)] = null);

(statearr_31660_33066[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (8))){
var inst_31486 = (state_31593[(8)]);
var inst_31504 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31486);
var state_31593__$1 = state_31593;
var statearr_31661_33067 = state_31593__$1;
(statearr_31661_33067[(2)] = inst_31504);

(statearr_31661_33067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29912__auto__ = null;
var cljs$core$async$mix_$_state_machine__29912__auto____0 = (function (){
var statearr_31662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31662[(0)] = cljs$core$async$mix_$_state_machine__29912__auto__);

(statearr_31662[(1)] = (1));

return statearr_31662;
});
var cljs$core$async$mix_$_state_machine__29912__auto____1 = (function (state_31593){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_31593);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e31663){if((e31663 instanceof Object)){
var ex__29915__auto__ = e31663;
var statearr_31664_33068 = state_31593;
(statearr_31664_33068[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33069 = state_31593;
state_31593 = G__33069;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29912__auto__ = function(state_31593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29912__auto____1.call(this,state_31593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29912__auto____0;
cljs$core$async$mix_$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29912__auto____1;
return cljs$core$async$mix_$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_31665 = f__30246__auto__();
(statearr_31665[(6)] = c__30245__auto___32998);

return statearr_31665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31667 = arguments.length;
switch (G__31667) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31671 = arguments.length;
switch (G__31671) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31669_SHARP_){
if(cljs.core.truth_((p1__31669_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31669_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31669_SHARP_.call(null,topic)))){
return p1__31669_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31669_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31672 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31673){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31673 = meta31673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31674,meta31673__$1){
var self__ = this;
var _31674__$1 = this;
return (new cljs.core.async.t_cljs$core$async31672(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31673__$1));
}));

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31674){
var self__ = this;
var _31674__$1 = this;
return self__.meta31673;
}));

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31673","meta31673",96031007,null)], null);
}));

(cljs.core.async.t_cljs$core$async31672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31672");

(cljs.core.async.t_cljs$core$async31672.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31672.
 */
cljs.core.async.__GT_t_cljs$core$async31672 = (function cljs$core$async$__GT_t_cljs$core$async31672(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31673){
return (new cljs.core.async.t_cljs$core$async31672(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31673));
});

}

return (new cljs.core.async.t_cljs$core$async31672(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30245__auto___33080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_31746){
var state_val_31747 = (state_31746[(1)]);
if((state_val_31747 === (7))){
var inst_31742 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31748_33081 = state_31746__$1;
(statearr_31748_33081[(2)] = inst_31742);

(statearr_31748_33081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (20))){
var state_31746__$1 = state_31746;
var statearr_31749_33082 = state_31746__$1;
(statearr_31749_33082[(2)] = null);

(statearr_31749_33082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (1))){
var state_31746__$1 = state_31746;
var statearr_31750_33083 = state_31746__$1;
(statearr_31750_33083[(2)] = null);

(statearr_31750_33083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (24))){
var inst_31725 = (state_31746[(7)]);
var inst_31734 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31725);
var state_31746__$1 = state_31746;
var statearr_31751_33084 = state_31746__$1;
(statearr_31751_33084[(2)] = inst_31734);

(statearr_31751_33084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (4))){
var inst_31677 = (state_31746[(8)]);
var inst_31677__$1 = (state_31746[(2)]);
var inst_31678 = (inst_31677__$1 == null);
var state_31746__$1 = (function (){var statearr_31752 = state_31746;
(statearr_31752[(8)] = inst_31677__$1);

return statearr_31752;
})();
if(cljs.core.truth_(inst_31678)){
var statearr_31753_33085 = state_31746__$1;
(statearr_31753_33085[(1)] = (5));

} else {
var statearr_31754_33086 = state_31746__$1;
(statearr_31754_33086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (15))){
var inst_31719 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31755_33087 = state_31746__$1;
(statearr_31755_33087[(2)] = inst_31719);

(statearr_31755_33087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (21))){
var inst_31739 = (state_31746[(2)]);
var state_31746__$1 = (function (){var statearr_31756 = state_31746;
(statearr_31756[(9)] = inst_31739);

return statearr_31756;
})();
var statearr_31757_33088 = state_31746__$1;
(statearr_31757_33088[(2)] = null);

(statearr_31757_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (13))){
var inst_31701 = (state_31746[(10)]);
var inst_31703 = cljs.core.chunked_seq_QMARK_(inst_31701);
var state_31746__$1 = state_31746;
if(inst_31703){
var statearr_31758_33090 = state_31746__$1;
(statearr_31758_33090[(1)] = (16));

} else {
var statearr_31759_33092 = state_31746__$1;
(statearr_31759_33092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (22))){
var inst_31731 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
if(cljs.core.truth_(inst_31731)){
var statearr_31760_33093 = state_31746__$1;
(statearr_31760_33093[(1)] = (23));

} else {
var statearr_31761_33094 = state_31746__$1;
(statearr_31761_33094[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (6))){
var inst_31725 = (state_31746[(7)]);
var inst_31677 = (state_31746[(8)]);
var inst_31727 = (state_31746[(11)]);
var inst_31725__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31677) : topic_fn.call(null,inst_31677));
var inst_31726 = cljs.core.deref(mults);
var inst_31727__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31726,inst_31725__$1);
var state_31746__$1 = (function (){var statearr_31762 = state_31746;
(statearr_31762[(7)] = inst_31725__$1);

(statearr_31762[(11)] = inst_31727__$1);

return statearr_31762;
})();
if(cljs.core.truth_(inst_31727__$1)){
var statearr_31763_33095 = state_31746__$1;
(statearr_31763_33095[(1)] = (19));

} else {
var statearr_31764_33105 = state_31746__$1;
(statearr_31764_33105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (25))){
var inst_31736 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31765_33107 = state_31746__$1;
(statearr_31765_33107[(2)] = inst_31736);

(statearr_31765_33107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (17))){
var inst_31701 = (state_31746[(10)]);
var inst_31710 = cljs.core.first(inst_31701);
var inst_31711 = cljs.core.async.muxch_STAR_(inst_31710);
var inst_31712 = cljs.core.async.close_BANG_(inst_31711);
var inst_31713 = cljs.core.next(inst_31701);
var inst_31687 = inst_31713;
var inst_31688 = null;
var inst_31689 = (0);
var inst_31690 = (0);
var state_31746__$1 = (function (){var statearr_31766 = state_31746;
(statearr_31766[(12)] = inst_31690);

(statearr_31766[(13)] = inst_31687);

(statearr_31766[(14)] = inst_31689);

(statearr_31766[(15)] = inst_31688);

(statearr_31766[(16)] = inst_31712);

return statearr_31766;
})();
var statearr_31767_33113 = state_31746__$1;
(statearr_31767_33113[(2)] = null);

(statearr_31767_33113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (3))){
var inst_31744 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31746__$1,inst_31744);
} else {
if((state_val_31747 === (12))){
var inst_31721 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31768_33114 = state_31746__$1;
(statearr_31768_33114[(2)] = inst_31721);

(statearr_31768_33114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (2))){
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31746__$1,(4),ch);
} else {
if((state_val_31747 === (23))){
var state_31746__$1 = state_31746;
var statearr_31769_33115 = state_31746__$1;
(statearr_31769_33115[(2)] = null);

(statearr_31769_33115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (19))){
var inst_31677 = (state_31746[(8)]);
var inst_31727 = (state_31746[(11)]);
var inst_31729 = cljs.core.async.muxch_STAR_(inst_31727);
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31746__$1,(22),inst_31729,inst_31677);
} else {
if((state_val_31747 === (11))){
var inst_31687 = (state_31746[(13)]);
var inst_31701 = (state_31746[(10)]);
var inst_31701__$1 = cljs.core.seq(inst_31687);
var state_31746__$1 = (function (){var statearr_31770 = state_31746;
(statearr_31770[(10)] = inst_31701__$1);

return statearr_31770;
})();
if(inst_31701__$1){
var statearr_31771_33144 = state_31746__$1;
(statearr_31771_33144[(1)] = (13));

} else {
var statearr_31772_33145 = state_31746__$1;
(statearr_31772_33145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (9))){
var inst_31723 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31773_33146 = state_31746__$1;
(statearr_31773_33146[(2)] = inst_31723);

(statearr_31773_33146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (5))){
var inst_31684 = cljs.core.deref(mults);
var inst_31685 = cljs.core.vals(inst_31684);
var inst_31686 = cljs.core.seq(inst_31685);
var inst_31687 = inst_31686;
var inst_31688 = null;
var inst_31689 = (0);
var inst_31690 = (0);
var state_31746__$1 = (function (){var statearr_31774 = state_31746;
(statearr_31774[(12)] = inst_31690);

(statearr_31774[(13)] = inst_31687);

(statearr_31774[(14)] = inst_31689);

(statearr_31774[(15)] = inst_31688);

return statearr_31774;
})();
var statearr_31775_33148 = state_31746__$1;
(statearr_31775_33148[(2)] = null);

(statearr_31775_33148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (14))){
var state_31746__$1 = state_31746;
var statearr_31779_33149 = state_31746__$1;
(statearr_31779_33149[(2)] = null);

(statearr_31779_33149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (16))){
var inst_31701 = (state_31746[(10)]);
var inst_31705 = cljs.core.chunk_first(inst_31701);
var inst_31706 = cljs.core.chunk_rest(inst_31701);
var inst_31707 = cljs.core.count(inst_31705);
var inst_31687 = inst_31706;
var inst_31688 = inst_31705;
var inst_31689 = inst_31707;
var inst_31690 = (0);
var state_31746__$1 = (function (){var statearr_31780 = state_31746;
(statearr_31780[(12)] = inst_31690);

(statearr_31780[(13)] = inst_31687);

(statearr_31780[(14)] = inst_31689);

(statearr_31780[(15)] = inst_31688);

return statearr_31780;
})();
var statearr_31781_33150 = state_31746__$1;
(statearr_31781_33150[(2)] = null);

(statearr_31781_33150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (10))){
var inst_31690 = (state_31746[(12)]);
var inst_31687 = (state_31746[(13)]);
var inst_31689 = (state_31746[(14)]);
var inst_31688 = (state_31746[(15)]);
var inst_31695 = cljs.core._nth(inst_31688,inst_31690);
var inst_31696 = cljs.core.async.muxch_STAR_(inst_31695);
var inst_31697 = cljs.core.async.close_BANG_(inst_31696);
var inst_31698 = (inst_31690 + (1));
var tmp31776 = inst_31687;
var tmp31777 = inst_31689;
var tmp31778 = inst_31688;
var inst_31687__$1 = tmp31776;
var inst_31688__$1 = tmp31778;
var inst_31689__$1 = tmp31777;
var inst_31690__$1 = inst_31698;
var state_31746__$1 = (function (){var statearr_31782 = state_31746;
(statearr_31782[(12)] = inst_31690__$1);

(statearr_31782[(13)] = inst_31687__$1);

(statearr_31782[(17)] = inst_31697);

(statearr_31782[(14)] = inst_31689__$1);

(statearr_31782[(15)] = inst_31688__$1);

return statearr_31782;
})();
var statearr_31783_33161 = state_31746__$1;
(statearr_31783_33161[(2)] = null);

(statearr_31783_33161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (18))){
var inst_31716 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31784_33162 = state_31746__$1;
(statearr_31784_33162[(2)] = inst_31716);

(statearr_31784_33162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (8))){
var inst_31690 = (state_31746[(12)]);
var inst_31689 = (state_31746[(14)]);
var inst_31692 = (inst_31690 < inst_31689);
var inst_31693 = inst_31692;
var state_31746__$1 = state_31746;
if(cljs.core.truth_(inst_31693)){
var statearr_31786_33163 = state_31746__$1;
(statearr_31786_33163[(1)] = (10));

} else {
var statearr_31788_33164 = state_31746__$1;
(statearr_31788_33164[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_31790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31790[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_31790[(1)] = (1));

return statearr_31790;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_31746){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_31746);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e31793){if((e31793 instanceof Object)){
var ex__29915__auto__ = e31793;
var statearr_31796_33165 = state_31746;
(statearr_31796_33165[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_31746;
state_31746 = G__33166;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_31746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_31746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_31798 = f__30246__auto__();
(statearr_31798[(6)] = c__30245__auto___33080);

return statearr_31798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31802 = arguments.length;
switch (G__31802) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31804 = arguments.length;
switch (G__31804) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31806 = arguments.length;
switch (G__31806) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30245__auto___33221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_31845){
var state_val_31846 = (state_31845[(1)]);
if((state_val_31846 === (7))){
var state_31845__$1 = state_31845;
var statearr_31847_33224 = state_31845__$1;
(statearr_31847_33224[(2)] = null);

(statearr_31847_33224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (1))){
var state_31845__$1 = state_31845;
var statearr_31848_33225 = state_31845__$1;
(statearr_31848_33225[(2)] = null);

(statearr_31848_33225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (4))){
var inst_31809 = (state_31845[(7)]);
var inst_31811 = (inst_31809 < cnt);
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31811)){
var statearr_31849_33232 = state_31845__$1;
(statearr_31849_33232[(1)] = (6));

} else {
var statearr_31850_33233 = state_31845__$1;
(statearr_31850_33233[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (15))){
var inst_31841 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31851_33234 = state_31845__$1;
(statearr_31851_33234[(2)] = inst_31841);

(statearr_31851_33234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (13))){
var inst_31834 = cljs.core.async.close_BANG_(out);
var state_31845__$1 = state_31845;
var statearr_31852_33235 = state_31845__$1;
(statearr_31852_33235[(2)] = inst_31834);

(statearr_31852_33235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (6))){
var state_31845__$1 = state_31845;
var statearr_31853_33244 = state_31845__$1;
(statearr_31853_33244[(2)] = null);

(statearr_31853_33244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (3))){
var inst_31843 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31845__$1,inst_31843);
} else {
if((state_val_31846 === (12))){
var inst_31831 = (state_31845[(8)]);
var inst_31831__$1 = (state_31845[(2)]);
var inst_31832 = cljs.core.some(cljs.core.nil_QMARK_,inst_31831__$1);
var state_31845__$1 = (function (){var statearr_31855 = state_31845;
(statearr_31855[(8)] = inst_31831__$1);

return statearr_31855;
})();
if(cljs.core.truth_(inst_31832)){
var statearr_31856_33249 = state_31845__$1;
(statearr_31856_33249[(1)] = (13));

} else {
var statearr_31857_33250 = state_31845__$1;
(statearr_31857_33250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (2))){
var inst_31808 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31809 = (0);
var state_31845__$1 = (function (){var statearr_31858 = state_31845;
(statearr_31858[(7)] = inst_31809);

(statearr_31858[(9)] = inst_31808);

return statearr_31858;
})();
var statearr_31859_33251 = state_31845__$1;
(statearr_31859_33251[(2)] = null);

(statearr_31859_33251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (11))){
var inst_31809 = (state_31845[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31845,(10),Object,null,(9));
var inst_31818 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31809) : chs__$1.call(null,inst_31809));
var inst_31819 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31809) : done.call(null,inst_31809));
var inst_31820 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31818,inst_31819);
var state_31845__$1 = state_31845;
var statearr_31860_33252 = state_31845__$1;
(statearr_31860_33252[(2)] = inst_31820);


cljs.core.async.impl.ioc_helpers.process_exception(state_31845__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (9))){
var inst_31809 = (state_31845[(7)]);
var inst_31822 = (state_31845[(2)]);
var inst_31823 = (inst_31809 + (1));
var inst_31809__$1 = inst_31823;
var state_31845__$1 = (function (){var statearr_31861 = state_31845;
(statearr_31861[(10)] = inst_31822);

(statearr_31861[(7)] = inst_31809__$1);

return statearr_31861;
})();
var statearr_31862_33253 = state_31845__$1;
(statearr_31862_33253[(2)] = null);

(statearr_31862_33253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (5))){
var inst_31829 = (state_31845[(2)]);
var state_31845__$1 = (function (){var statearr_31863 = state_31845;
(statearr_31863[(11)] = inst_31829);

return statearr_31863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31845__$1,(12),dchan);
} else {
if((state_val_31846 === (14))){
var inst_31831 = (state_31845[(8)]);
var inst_31836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31831);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31845__$1,(16),out,inst_31836);
} else {
if((state_val_31846 === (16))){
var inst_31838 = (state_31845[(2)]);
var state_31845__$1 = (function (){var statearr_31864 = state_31845;
(statearr_31864[(12)] = inst_31838);

return statearr_31864;
})();
var statearr_31865_33266 = state_31845__$1;
(statearr_31865_33266[(2)] = null);

(statearr_31865_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (10))){
var inst_31813 = (state_31845[(2)]);
var inst_31814 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31845__$1 = (function (){var statearr_31866 = state_31845;
(statearr_31866[(13)] = inst_31813);

return statearr_31866;
})();
var statearr_31867_33271 = state_31845__$1;
(statearr_31867_33271[(2)] = inst_31814);


cljs.core.async.impl.ioc_helpers.process_exception(state_31845__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (8))){
var inst_31827 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31868_33273 = state_31845__$1;
(statearr_31868_33273[(2)] = inst_31827);

(statearr_31868_33273[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_31869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31869[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_31869[(1)] = (1));

return statearr_31869;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_31845){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_31845);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e31870){if((e31870 instanceof Object)){
var ex__29915__auto__ = e31870;
var statearr_31871_33275 = state_31845;
(statearr_31871_33275[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33279 = state_31845;
state_31845 = G__33279;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_31845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_31845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_31873 = f__30246__auto__();
(statearr_31873[(6)] = c__30245__auto___33221);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31876 = arguments.length;
switch (G__31876) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30245__auto___33281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_31908){
var state_val_31909 = (state_31908[(1)]);
if((state_val_31909 === (7))){
var inst_31888 = (state_31908[(7)]);
var inst_31887 = (state_31908[(8)]);
var inst_31887__$1 = (state_31908[(2)]);
var inst_31888__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31887__$1,(0),null);
var inst_31889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31887__$1,(1),null);
var inst_31890 = (inst_31888__$1 == null);
var state_31908__$1 = (function (){var statearr_31921 = state_31908;
(statearr_31921[(9)] = inst_31889);

(statearr_31921[(7)] = inst_31888__$1);

(statearr_31921[(8)] = inst_31887__$1);

return statearr_31921;
})();
if(cljs.core.truth_(inst_31890)){
var statearr_31922_33285 = state_31908__$1;
(statearr_31922_33285[(1)] = (8));

} else {
var statearr_31925_33286 = state_31908__$1;
(statearr_31925_33286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (1))){
var inst_31877 = cljs.core.vec(chs);
var inst_31878 = inst_31877;
var state_31908__$1 = (function (){var statearr_31926 = state_31908;
(statearr_31926[(10)] = inst_31878);

return statearr_31926;
})();
var statearr_31927_33287 = state_31908__$1;
(statearr_31927_33287[(2)] = null);

(statearr_31927_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (4))){
var inst_31878 = (state_31908[(10)]);
var state_31908__$1 = state_31908;
return cljs.core.async.ioc_alts_BANG_(state_31908__$1,(7),inst_31878);
} else {
if((state_val_31909 === (6))){
var inst_31904 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31938_33288 = state_31908__$1;
(statearr_31938_33288[(2)] = inst_31904);

(statearr_31938_33288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (3))){
var inst_31906 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31908__$1,inst_31906);
} else {
if((state_val_31909 === (2))){
var inst_31878 = (state_31908[(10)]);
var inst_31880 = cljs.core.count(inst_31878);
var inst_31881 = (inst_31880 > (0));
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31881)){
var statearr_31942_33289 = state_31908__$1;
(statearr_31942_33289[(1)] = (4));

} else {
var statearr_31943_33290 = state_31908__$1;
(statearr_31943_33290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (11))){
var inst_31878 = (state_31908[(10)]);
var inst_31897 = (state_31908[(2)]);
var tmp31941 = inst_31878;
var inst_31878__$1 = tmp31941;
var state_31908__$1 = (function (){var statearr_31946 = state_31908;
(statearr_31946[(10)] = inst_31878__$1);

(statearr_31946[(11)] = inst_31897);

return statearr_31946;
})();
var statearr_31947_33291 = state_31908__$1;
(statearr_31947_33291[(2)] = null);

(statearr_31947_33291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (9))){
var inst_31888 = (state_31908[(7)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31908__$1,(11),out,inst_31888);
} else {
if((state_val_31909 === (5))){
var inst_31902 = cljs.core.async.close_BANG_(out);
var state_31908__$1 = state_31908;
var statearr_31977_33292 = state_31908__$1;
(statearr_31977_33292[(2)] = inst_31902);

(statearr_31977_33292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (10))){
var inst_31900 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31978_33293 = state_31908__$1;
(statearr_31978_33293[(2)] = inst_31900);

(statearr_31978_33293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (8))){
var inst_31889 = (state_31908[(9)]);
var inst_31888 = (state_31908[(7)]);
var inst_31878 = (state_31908[(10)]);
var inst_31887 = (state_31908[(8)]);
var inst_31892 = (function (){var cs = inst_31878;
var vec__31883 = inst_31887;
var v = inst_31888;
var c = inst_31889;
return (function (p1__31874_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31874_SHARP_);
});
})();
var inst_31893 = cljs.core.filterv(inst_31892,inst_31878);
var inst_31878__$1 = inst_31893;
var state_31908__$1 = (function (){var statearr_31979 = state_31908;
(statearr_31979[(10)] = inst_31878__$1);

return statearr_31979;
})();
var statearr_31980_33306 = state_31908__$1;
(statearr_31980_33306[(2)] = null);

(statearr_31980_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_31981 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31981[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_31981[(1)] = (1));

return statearr_31981;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_31908){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_31908);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e31982){if((e31982 instanceof Object)){
var ex__29915__auto__ = e31982;
var statearr_31983_33319 = state_31908;
(statearr_31983_33319[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33320 = state_31908;
state_31908 = G__33320;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_31908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_31908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_31987 = f__30246__auto__();
(statearr_31987[(6)] = c__30245__auto___33281);

return statearr_31987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31997 = arguments.length;
switch (G__31997) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30245__auto___33340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_32024){
var state_val_32025 = (state_32024[(1)]);
if((state_val_32025 === (7))){
var inst_32006 = (state_32024[(7)]);
var inst_32006__$1 = (state_32024[(2)]);
var inst_32007 = (inst_32006__$1 == null);
var inst_32008 = cljs.core.not(inst_32007);
var state_32024__$1 = (function (){var statearr_32026 = state_32024;
(statearr_32026[(7)] = inst_32006__$1);

return statearr_32026;
})();
if(inst_32008){
var statearr_32027_33341 = state_32024__$1;
(statearr_32027_33341[(1)] = (8));

} else {
var statearr_32028_33349 = state_32024__$1;
(statearr_32028_33349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (1))){
var inst_32001 = (0);
var state_32024__$1 = (function (){var statearr_32029 = state_32024;
(statearr_32029[(8)] = inst_32001);

return statearr_32029;
})();
var statearr_32030_33350 = state_32024__$1;
(statearr_32030_33350[(2)] = null);

(statearr_32030_33350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (4))){
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32024__$1,(7),ch);
} else {
if((state_val_32025 === (6))){
var inst_32019 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32039_33351 = state_32024__$1;
(statearr_32039_33351[(2)] = inst_32019);

(statearr_32039_33351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (3))){
var inst_32021 = (state_32024[(2)]);
var inst_32022 = cljs.core.async.close_BANG_(out);
var state_32024__$1 = (function (){var statearr_32042 = state_32024;
(statearr_32042[(9)] = inst_32021);

return statearr_32042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32024__$1,inst_32022);
} else {
if((state_val_32025 === (2))){
var inst_32001 = (state_32024[(8)]);
var inst_32003 = (inst_32001 < n);
var state_32024__$1 = state_32024;
if(cljs.core.truth_(inst_32003)){
var statearr_32048_33353 = state_32024__$1;
(statearr_32048_33353[(1)] = (4));

} else {
var statearr_32049_33354 = state_32024__$1;
(statearr_32049_33354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (11))){
var inst_32001 = (state_32024[(8)]);
var inst_32011 = (state_32024[(2)]);
var inst_32012 = (inst_32001 + (1));
var inst_32001__$1 = inst_32012;
var state_32024__$1 = (function (){var statearr_32054 = state_32024;
(statearr_32054[(10)] = inst_32011);

(statearr_32054[(8)] = inst_32001__$1);

return statearr_32054;
})();
var statearr_32055_33355 = state_32024__$1;
(statearr_32055_33355[(2)] = null);

(statearr_32055_33355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (9))){
var state_32024__$1 = state_32024;
var statearr_32060_33356 = state_32024__$1;
(statearr_32060_33356[(2)] = null);

(statearr_32060_33356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (5))){
var state_32024__$1 = state_32024;
var statearr_32061_33357 = state_32024__$1;
(statearr_32061_33357[(2)] = null);

(statearr_32061_33357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (10))){
var inst_32016 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32063_33358 = state_32024__$1;
(statearr_32063_33358[(2)] = inst_32016);

(statearr_32063_33358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (8))){
var inst_32006 = (state_32024[(7)]);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32024__$1,(11),out,inst_32006);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_32067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32067[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_32067[(1)] = (1));

return statearr_32067;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_32024){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_32024);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e32070){if((e32070 instanceof Object)){
var ex__29915__auto__ = e32070;
var statearr_32071_33375 = state_32024;
(statearr_32071_33375[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33376 = state_32024;
state_32024 = G__33376;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_32024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_32024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_32075 = f__30246__auto__();
(statearr_32075[(6)] = c__30245__auto___33340);

return statearr_32075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32079 = (function (f,ch,meta32080){
this.f = f;
this.ch = ch;
this.meta32080 = meta32080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32081,meta32080__$1){
var self__ = this;
var _32081__$1 = this;
return (new cljs.core.async.t_cljs$core$async32079(self__.f,self__.ch,meta32080__$1));
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32081){
var self__ = this;
var _32081__$1 = this;
return self__.meta32080;
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32091 = (function (f,ch,meta32080,_,fn1,meta32092){
this.f = f;
this.ch = ch;
this.meta32080 = meta32080;
this._ = _;
this.fn1 = fn1;
this.meta32092 = meta32092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32093,meta32092__$1){
var self__ = this;
var _32093__$1 = this;
return (new cljs.core.async.t_cljs$core$async32091(self__.f,self__.ch,self__.meta32080,self__._,self__.fn1,meta32092__$1));
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32093){
var self__ = this;
var _32093__$1 = this;
return self__.meta32092;
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32076_SHARP_){
var G__32094 = (((p1__32076_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32076_SHARP_) : self__.f.call(null,p1__32076_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32094) : f1.call(null,G__32094));
});
}));

(cljs.core.async.t_cljs$core$async32091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32080","meta32080",1595566551,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32079","cljs.core.async/t_cljs$core$async32079",1435086766,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32092","meta32092",362115543,null)], null);
}));

(cljs.core.async.t_cljs$core$async32091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32091");

(cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32091.
 */
cljs.core.async.__GT_t_cljs$core$async32091 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32091(f__$1,ch__$1,meta32080__$1,___$2,fn1__$1,meta32092){
return (new cljs.core.async.t_cljs$core$async32091(f__$1,ch__$1,meta32080__$1,___$2,fn1__$1,meta32092));
});

}

return (new cljs.core.async.t_cljs$core$async32091(self__.f,self__.ch,self__.meta32080,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32101 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32101) : self__.f.call(null,G__32101));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32080","meta32080",1595566551,null)], null);
}));

(cljs.core.async.t_cljs$core$async32079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32079");

(cljs.core.async.t_cljs$core$async32079.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32079.
 */
cljs.core.async.__GT_t_cljs$core$async32079 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32079(f__$1,ch__$1,meta32080){
return (new cljs.core.async.t_cljs$core$async32079(f__$1,ch__$1,meta32080));
});

}

return (new cljs.core.async.t_cljs$core$async32079(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32112 = (function (f,ch,meta32113){
this.f = f;
this.ch = ch;
this.meta32113 = meta32113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32114,meta32113__$1){
var self__ = this;
var _32114__$1 = this;
return (new cljs.core.async.t_cljs$core$async32112(self__.f,self__.ch,meta32113__$1));
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32114){
var self__ = this;
var _32114__$1 = this;
return self__.meta32113;
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32113","meta32113",950322692,null)], null);
}));

(cljs.core.async.t_cljs$core$async32112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32112");

(cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32112.
 */
cljs.core.async.__GT_t_cljs$core$async32112 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32112(f__$1,ch__$1,meta32113){
return (new cljs.core.async.t_cljs$core$async32112(f__$1,ch__$1,meta32113));
});

}

return (new cljs.core.async.t_cljs$core$async32112(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32127 = (function (p,ch,meta32128){
this.p = p;
this.ch = ch;
this.meta32128 = meta32128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32129,meta32128__$1){
var self__ = this;
var _32129__$1 = this;
return (new cljs.core.async.t_cljs$core$async32127(self__.p,self__.ch,meta32128__$1));
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32129){
var self__ = this;
var _32129__$1 = this;
return self__.meta32128;
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null)], null);
}));

(cljs.core.async.t_cljs$core$async32127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32127");

(cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32127.
 */
cljs.core.async.__GT_t_cljs$core$async32127 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32127(p__$1,ch__$1,meta32128){
return (new cljs.core.async.t_cljs$core$async32127(p__$1,ch__$1,meta32128));
});

}

return (new cljs.core.async.t_cljs$core$async32127(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32156 = arguments.length;
switch (G__32156) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30245__auto___33383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_32200){
var state_val_32201 = (state_32200[(1)]);
if((state_val_32201 === (7))){
var inst_32196 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32202_33384 = state_32200__$1;
(statearr_32202_33384[(2)] = inst_32196);

(statearr_32202_33384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (1))){
var state_32200__$1 = state_32200;
var statearr_32203_33385 = state_32200__$1;
(statearr_32203_33385[(2)] = null);

(statearr_32203_33385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (4))){
var inst_32182 = (state_32200[(7)]);
var inst_32182__$1 = (state_32200[(2)]);
var inst_32183 = (inst_32182__$1 == null);
var state_32200__$1 = (function (){var statearr_32204 = state_32200;
(statearr_32204[(7)] = inst_32182__$1);

return statearr_32204;
})();
if(cljs.core.truth_(inst_32183)){
var statearr_32205_33387 = state_32200__$1;
(statearr_32205_33387[(1)] = (5));

} else {
var statearr_32206_33388 = state_32200__$1;
(statearr_32206_33388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (6))){
var inst_32182 = (state_32200[(7)]);
var inst_32187 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32182) : p.call(null,inst_32182));
var state_32200__$1 = state_32200;
if(cljs.core.truth_(inst_32187)){
var statearr_32207_33389 = state_32200__$1;
(statearr_32207_33389[(1)] = (8));

} else {
var statearr_32208_33390 = state_32200__$1;
(statearr_32208_33390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (3))){
var inst_32198 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32200__$1,inst_32198);
} else {
if((state_val_32201 === (2))){
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32200__$1,(4),ch);
} else {
if((state_val_32201 === (11))){
var inst_32190 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32211_33391 = state_32200__$1;
(statearr_32211_33391[(2)] = inst_32190);

(statearr_32211_33391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (9))){
var state_32200__$1 = state_32200;
var statearr_32216_33392 = state_32200__$1;
(statearr_32216_33392[(2)] = null);

(statearr_32216_33392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (5))){
var inst_32185 = cljs.core.async.close_BANG_(out);
var state_32200__$1 = state_32200;
var statearr_32217_33393 = state_32200__$1;
(statearr_32217_33393[(2)] = inst_32185);

(statearr_32217_33393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (10))){
var inst_32193 = (state_32200[(2)]);
var state_32200__$1 = (function (){var statearr_32218 = state_32200;
(statearr_32218[(8)] = inst_32193);

return statearr_32218;
})();
var statearr_32220_33394 = state_32200__$1;
(statearr_32220_33394[(2)] = null);

(statearr_32220_33394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (8))){
var inst_32182 = (state_32200[(7)]);
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32200__$1,(11),out,inst_32182);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_32222 = [null,null,null,null,null,null,null,null,null];
(statearr_32222[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_32222[(1)] = (1));

return statearr_32222;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_32200){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_32200);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e32226){if((e32226 instanceof Object)){
var ex__29915__auto__ = e32226;
var statearr_32227_33398 = state_32200;
(statearr_32227_33398[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33399 = state_32200;
state_32200 = G__33399;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_32200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_32200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_32232 = f__30246__auto__();
(statearr_32232[(6)] = c__30245__auto___33383);

return statearr_32232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32236 = arguments.length;
switch (G__32236) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_32310){
var state_val_32311 = (state_32310[(1)]);
if((state_val_32311 === (7))){
var inst_32306 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32312_33403 = state_32310__$1;
(statearr_32312_33403[(2)] = inst_32306);

(statearr_32312_33403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (20))){
var inst_32267 = (state_32310[(7)]);
var inst_32282 = (state_32310[(2)]);
var inst_32283 = cljs.core.next(inst_32267);
var inst_32251 = inst_32283;
var inst_32253 = null;
var inst_32254 = (0);
var inst_32255 = (0);
var state_32310__$1 = (function (){var statearr_32313 = state_32310;
(statearr_32313[(8)] = inst_32253);

(statearr_32313[(9)] = inst_32255);

(statearr_32313[(10)] = inst_32251);

(statearr_32313[(11)] = inst_32254);

(statearr_32313[(12)] = inst_32282);

return statearr_32313;
})();
var statearr_32314_33404 = state_32310__$1;
(statearr_32314_33404[(2)] = null);

(statearr_32314_33404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (1))){
var state_32310__$1 = state_32310;
var statearr_32315_33405 = state_32310__$1;
(statearr_32315_33405[(2)] = null);

(statearr_32315_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (4))){
var inst_32239 = (state_32310[(13)]);
var inst_32239__$1 = (state_32310[(2)]);
var inst_32240 = (inst_32239__$1 == null);
var state_32310__$1 = (function (){var statearr_32316 = state_32310;
(statearr_32316[(13)] = inst_32239__$1);

return statearr_32316;
})();
if(cljs.core.truth_(inst_32240)){
var statearr_32317_33406 = state_32310__$1;
(statearr_32317_33406[(1)] = (5));

} else {
var statearr_32318_33407 = state_32310__$1;
(statearr_32318_33407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (15))){
var state_32310__$1 = state_32310;
var statearr_32322_33408 = state_32310__$1;
(statearr_32322_33408[(2)] = null);

(statearr_32322_33408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (21))){
var state_32310__$1 = state_32310;
var statearr_32323_33409 = state_32310__$1;
(statearr_32323_33409[(2)] = null);

(statearr_32323_33409[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (13))){
var inst_32253 = (state_32310[(8)]);
var inst_32255 = (state_32310[(9)]);
var inst_32251 = (state_32310[(10)]);
var inst_32254 = (state_32310[(11)]);
var inst_32263 = (state_32310[(2)]);
var inst_32264 = (inst_32255 + (1));
var tmp32319 = inst_32253;
var tmp32320 = inst_32251;
var tmp32321 = inst_32254;
var inst_32251__$1 = tmp32320;
var inst_32253__$1 = tmp32319;
var inst_32254__$1 = tmp32321;
var inst_32255__$1 = inst_32264;
var state_32310__$1 = (function (){var statearr_32324 = state_32310;
(statearr_32324[(8)] = inst_32253__$1);

(statearr_32324[(9)] = inst_32255__$1);

(statearr_32324[(14)] = inst_32263);

(statearr_32324[(10)] = inst_32251__$1);

(statearr_32324[(11)] = inst_32254__$1);

return statearr_32324;
})();
var statearr_32325_33410 = state_32310__$1;
(statearr_32325_33410[(2)] = null);

(statearr_32325_33410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (22))){
var state_32310__$1 = state_32310;
var statearr_32326_33415 = state_32310__$1;
(statearr_32326_33415[(2)] = null);

(statearr_32326_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (6))){
var inst_32239 = (state_32310[(13)]);
var inst_32249 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32239) : f.call(null,inst_32239));
var inst_32250 = cljs.core.seq(inst_32249);
var inst_32251 = inst_32250;
var inst_32253 = null;
var inst_32254 = (0);
var inst_32255 = (0);
var state_32310__$1 = (function (){var statearr_32328 = state_32310;
(statearr_32328[(8)] = inst_32253);

(statearr_32328[(9)] = inst_32255);

(statearr_32328[(10)] = inst_32251);

(statearr_32328[(11)] = inst_32254);

return statearr_32328;
})();
var statearr_32329_33424 = state_32310__$1;
(statearr_32329_33424[(2)] = null);

(statearr_32329_33424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (17))){
var inst_32267 = (state_32310[(7)]);
var inst_32271 = cljs.core.chunk_first(inst_32267);
var inst_32276 = cljs.core.chunk_rest(inst_32267);
var inst_32277 = cljs.core.count(inst_32271);
var inst_32251 = inst_32276;
var inst_32253 = inst_32271;
var inst_32254 = inst_32277;
var inst_32255 = (0);
var state_32310__$1 = (function (){var statearr_32331 = state_32310;
(statearr_32331[(8)] = inst_32253);

(statearr_32331[(9)] = inst_32255);

(statearr_32331[(10)] = inst_32251);

(statearr_32331[(11)] = inst_32254);

return statearr_32331;
})();
var statearr_32332_33434 = state_32310__$1;
(statearr_32332_33434[(2)] = null);

(statearr_32332_33434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (3))){
var inst_32308 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32310__$1,inst_32308);
} else {
if((state_val_32311 === (12))){
var inst_32291 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32333_33439 = state_32310__$1;
(statearr_32333_33439[(2)] = inst_32291);

(statearr_32333_33439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (2))){
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32310__$1,(4),in$);
} else {
if((state_val_32311 === (23))){
var inst_32304 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32334_33444 = state_32310__$1;
(statearr_32334_33444[(2)] = inst_32304);

(statearr_32334_33444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (19))){
var inst_32286 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32335_33445 = state_32310__$1;
(statearr_32335_33445[(2)] = inst_32286);

(statearr_32335_33445[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (11))){
var inst_32267 = (state_32310[(7)]);
var inst_32251 = (state_32310[(10)]);
var inst_32267__$1 = cljs.core.seq(inst_32251);
var state_32310__$1 = (function (){var statearr_32336 = state_32310;
(statearr_32336[(7)] = inst_32267__$1);

return statearr_32336;
})();
if(inst_32267__$1){
var statearr_32341_33478 = state_32310__$1;
(statearr_32341_33478[(1)] = (14));

} else {
var statearr_32342_33479 = state_32310__$1;
(statearr_32342_33479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (9))){
var inst_32293 = (state_32310[(2)]);
var inst_32299 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32310__$1 = (function (){var statearr_32347 = state_32310;
(statearr_32347[(15)] = inst_32293);

return statearr_32347;
})();
if(cljs.core.truth_(inst_32299)){
var statearr_32348_33484 = state_32310__$1;
(statearr_32348_33484[(1)] = (21));

} else {
var statearr_32353_33489 = state_32310__$1;
(statearr_32353_33489[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (5))){
var inst_32243 = cljs.core.async.close_BANG_(out);
var state_32310__$1 = state_32310;
var statearr_32354_33493 = state_32310__$1;
(statearr_32354_33493[(2)] = inst_32243);

(statearr_32354_33493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (14))){
var inst_32267 = (state_32310[(7)]);
var inst_32269 = cljs.core.chunked_seq_QMARK_(inst_32267);
var state_32310__$1 = state_32310;
if(inst_32269){
var statearr_32355_33499 = state_32310__$1;
(statearr_32355_33499[(1)] = (17));

} else {
var statearr_32356_33501 = state_32310__$1;
(statearr_32356_33501[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (16))){
var inst_32289 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32357_33507 = state_32310__$1;
(statearr_32357_33507[(2)] = inst_32289);

(statearr_32357_33507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (10))){
var inst_32253 = (state_32310[(8)]);
var inst_32255 = (state_32310[(9)]);
var inst_32261 = cljs.core._nth(inst_32253,inst_32255);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32310__$1,(13),out,inst_32261);
} else {
if((state_val_32311 === (18))){
var inst_32267 = (state_32310[(7)]);
var inst_32280 = cljs.core.first(inst_32267);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32310__$1,(20),out,inst_32280);
} else {
if((state_val_32311 === (8))){
var inst_32255 = (state_32310[(9)]);
var inst_32254 = (state_32310[(11)]);
var inst_32258 = (inst_32255 < inst_32254);
var inst_32259 = inst_32258;
var state_32310__$1 = state_32310;
if(cljs.core.truth_(inst_32259)){
var statearr_32358_33524 = state_32310__$1;
(statearr_32358_33524[(1)] = (10));

} else {
var statearr_32359_33525 = state_32310__$1;
(statearr_32359_33525[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29912__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29912__auto____0 = (function (){
var statearr_32360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32360[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29912__auto__);

(statearr_32360[(1)] = (1));

return statearr_32360;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29912__auto____1 = (function (state_32310){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_32310);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e32361){if((e32361 instanceof Object)){
var ex__29915__auto__ = e32361;
var statearr_32362_33526 = state_32310;
(statearr_32362_33526[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33527 = state_32310;
state_32310 = G__33527;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29912__auto__ = function(state_32310){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29912__auto____1.call(this,state_32310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29912__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29912__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_32363 = f__30246__auto__();
(statearr_32363[(6)] = c__30245__auto__);

return statearr_32363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));

return c__30245__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32365 = arguments.length;
switch (G__32365) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32367 = arguments.length;
switch (G__32367) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32369 = arguments.length;
switch (G__32369) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30245__auto___33551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_32393){
var state_val_32394 = (state_32393[(1)]);
if((state_val_32394 === (7))){
var inst_32388 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32395_33552 = state_32393__$1;
(statearr_32395_33552[(2)] = inst_32388);

(statearr_32395_33552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (1))){
var inst_32370 = null;
var state_32393__$1 = (function (){var statearr_32396 = state_32393;
(statearr_32396[(7)] = inst_32370);

return statearr_32396;
})();
var statearr_32397_33554 = state_32393__$1;
(statearr_32397_33554[(2)] = null);

(statearr_32397_33554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (4))){
var inst_32373 = (state_32393[(8)]);
var inst_32373__$1 = (state_32393[(2)]);
var inst_32374 = (inst_32373__$1 == null);
var inst_32375 = cljs.core.not(inst_32374);
var state_32393__$1 = (function (){var statearr_32398 = state_32393;
(statearr_32398[(8)] = inst_32373__$1);

return statearr_32398;
})();
if(inst_32375){
var statearr_32399_33558 = state_32393__$1;
(statearr_32399_33558[(1)] = (5));

} else {
var statearr_32400_33559 = state_32393__$1;
(statearr_32400_33559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (6))){
var state_32393__$1 = state_32393;
var statearr_32401_33560 = state_32393__$1;
(statearr_32401_33560[(2)] = null);

(statearr_32401_33560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (3))){
var inst_32390 = (state_32393[(2)]);
var inst_32391 = cljs.core.async.close_BANG_(out);
var state_32393__$1 = (function (){var statearr_32402 = state_32393;
(statearr_32402[(9)] = inst_32390);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32393__$1,inst_32391);
} else {
if((state_val_32394 === (2))){
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32393__$1,(4),ch);
} else {
if((state_val_32394 === (11))){
var inst_32373 = (state_32393[(8)]);
var inst_32382 = (state_32393[(2)]);
var inst_32370 = inst_32373;
var state_32393__$1 = (function (){var statearr_32403 = state_32393;
(statearr_32403[(7)] = inst_32370);

(statearr_32403[(10)] = inst_32382);

return statearr_32403;
})();
var statearr_32404_33572 = state_32393__$1;
(statearr_32404_33572[(2)] = null);

(statearr_32404_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (9))){
var inst_32373 = (state_32393[(8)]);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32393__$1,(11),out,inst_32373);
} else {
if((state_val_32394 === (5))){
var inst_32370 = (state_32393[(7)]);
var inst_32373 = (state_32393[(8)]);
var inst_32377 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32373,inst_32370);
var state_32393__$1 = state_32393;
if(inst_32377){
var statearr_32406_33573 = state_32393__$1;
(statearr_32406_33573[(1)] = (8));

} else {
var statearr_32407_33574 = state_32393__$1;
(statearr_32407_33574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (10))){
var inst_32385 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32408_33575 = state_32393__$1;
(statearr_32408_33575[(2)] = inst_32385);

(statearr_32408_33575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (8))){
var inst_32370 = (state_32393[(7)]);
var tmp32405 = inst_32370;
var inst_32370__$1 = tmp32405;
var state_32393__$1 = (function (){var statearr_32409 = state_32393;
(statearr_32409[(7)] = inst_32370__$1);

return statearr_32409;
})();
var statearr_32410_33576 = state_32393__$1;
(statearr_32410_33576[(2)] = null);

(statearr_32410_33576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_32411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32411[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_32411[(1)] = (1));

return statearr_32411;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_32393){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_32393);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e32412){if((e32412 instanceof Object)){
var ex__29915__auto__ = e32412;
var statearr_32413_33577 = state_32393;
(statearr_32413_33577[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33585 = state_32393;
state_32393 = G__33585;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_32393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_32393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_32414 = f__30246__auto__();
(statearr_32414[(6)] = c__30245__auto___33551);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32416 = arguments.length;
switch (G__32416) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30245__auto___33595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32456_33598 = state_32454__$1;
(statearr_32456_33598[(2)] = inst_32450);

(statearr_32456_33598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var inst_32417 = (new Array(n));
var inst_32418 = inst_32417;
var inst_32419 = (0);
var state_32454__$1 = (function (){var statearr_32457 = state_32454;
(statearr_32457[(7)] = inst_32418);

(statearr_32457[(8)] = inst_32419);

return statearr_32457;
})();
var statearr_32458_33603 = state_32454__$1;
(statearr_32458_33603[(2)] = null);

(statearr_32458_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32422 = (state_32454[(9)]);
var inst_32422__$1 = (state_32454[(2)]);
var inst_32423 = (inst_32422__$1 == null);
var inst_32424 = cljs.core.not(inst_32423);
var state_32454__$1 = (function (){var statearr_32459 = state_32454;
(statearr_32459[(9)] = inst_32422__$1);

return statearr_32459;
})();
if(inst_32424){
var statearr_32460_33605 = state_32454__$1;
(statearr_32460_33605[(1)] = (5));

} else {
var statearr_32461_33606 = state_32454__$1;
(statearr_32461_33606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (15))){
var inst_32444 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32462_33607 = state_32454__$1;
(statearr_32462_33607[(2)] = inst_32444);

(statearr_32462_33607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (13))){
var state_32454__$1 = state_32454;
var statearr_32463_33608 = state_32454__$1;
(statearr_32463_33608[(2)] = null);

(statearr_32463_33608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32419 = (state_32454[(8)]);
var inst_32440 = (inst_32419 > (0));
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32440)){
var statearr_32464_33609 = state_32454__$1;
(statearr_32464_33609[(1)] = (12));

} else {
var statearr_32465_33610 = state_32454__$1;
(statearr_32465_33610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (12))){
var inst_32418 = (state_32454[(7)]);
var inst_32442 = cljs.core.vec(inst_32418);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(15),out,inst_32442);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32454__$1,(4),ch);
} else {
if((state_val_32455 === (11))){
var inst_32434 = (state_32454[(2)]);
var inst_32435 = (new Array(n));
var inst_32418 = inst_32435;
var inst_32419 = (0);
var state_32454__$1 = (function (){var statearr_32466 = state_32454;
(statearr_32466[(10)] = inst_32434);

(statearr_32466[(7)] = inst_32418);

(statearr_32466[(8)] = inst_32419);

return statearr_32466;
})();
var statearr_32467_33616 = state_32454__$1;
(statearr_32467_33616[(2)] = null);

(statearr_32467_33616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var inst_32418 = (state_32454[(7)]);
var inst_32432 = cljs.core.vec(inst_32418);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(11),out,inst_32432);
} else {
if((state_val_32455 === (5))){
var inst_32422 = (state_32454[(9)]);
var inst_32418 = (state_32454[(7)]);
var inst_32427 = (state_32454[(11)]);
var inst_32419 = (state_32454[(8)]);
var inst_32426 = (inst_32418[inst_32419] = inst_32422);
var inst_32427__$1 = (inst_32419 + (1));
var inst_32428 = (inst_32427__$1 < n);
var state_32454__$1 = (function (){var statearr_32468 = state_32454;
(statearr_32468[(12)] = inst_32426);

(statearr_32468[(11)] = inst_32427__$1);

return statearr_32468;
})();
if(cljs.core.truth_(inst_32428)){
var statearr_32469_33622 = state_32454__$1;
(statearr_32469_33622[(1)] = (8));

} else {
var statearr_32470_33623 = state_32454__$1;
(statearr_32470_33623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (14))){
var inst_32447 = (state_32454[(2)]);
var inst_32448 = cljs.core.async.close_BANG_(out);
var state_32454__$1 = (function (){var statearr_32472 = state_32454;
(statearr_32472[(13)] = inst_32447);

return statearr_32472;
})();
var statearr_32473_33624 = state_32454__$1;
(statearr_32473_33624[(2)] = inst_32448);

(statearr_32473_33624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32438 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32474_33625 = state_32454__$1;
(statearr_32474_33625[(2)] = inst_32438);

(statearr_32474_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32418 = (state_32454[(7)]);
var inst_32427 = (state_32454[(11)]);
var tmp32471 = inst_32418;
var inst_32418__$1 = tmp32471;
var inst_32419 = inst_32427;
var state_32454__$1 = (function (){var statearr_32475 = state_32454;
(statearr_32475[(7)] = inst_32418__$1);

(statearr_32475[(8)] = inst_32419);

return statearr_32475;
})();
var statearr_32476_33628 = state_32454__$1;
(statearr_32476_33628[(2)] = null);

(statearr_32476_33628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_32477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32477[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_32477[(1)] = (1));

return statearr_32477;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_32454){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_32454);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e32478){if((e32478 instanceof Object)){
var ex__29915__auto__ = e32478;
var statearr_32479_33634 = state_32454;
(statearr_32479_33634[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33636 = state_32454;
state_32454 = G__33636;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_32480 = f__30246__auto__();
(statearr_32480[(6)] = c__30245__auto___33595);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32482 = arguments.length;
switch (G__32482) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30245__auto___33642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30246__auto__ = (function (){var switch__29911__auto__ = (function (state_32524){
var state_val_32525 = (state_32524[(1)]);
if((state_val_32525 === (7))){
var inst_32520 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32526_33643 = state_32524__$1;
(statearr_32526_33643[(2)] = inst_32520);

(statearr_32526_33643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (1))){
var inst_32483 = [];
var inst_32484 = inst_32483;
var inst_32485 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32524__$1 = (function (){var statearr_32527 = state_32524;
(statearr_32527[(7)] = inst_32485);

(statearr_32527[(8)] = inst_32484);

return statearr_32527;
})();
var statearr_32528_33644 = state_32524__$1;
(statearr_32528_33644[(2)] = null);

(statearr_32528_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (4))){
var inst_32488 = (state_32524[(9)]);
var inst_32488__$1 = (state_32524[(2)]);
var inst_32489 = (inst_32488__$1 == null);
var inst_32490 = cljs.core.not(inst_32489);
var state_32524__$1 = (function (){var statearr_32529 = state_32524;
(statearr_32529[(9)] = inst_32488__$1);

return statearr_32529;
})();
if(inst_32490){
var statearr_32530_33646 = state_32524__$1;
(statearr_32530_33646[(1)] = (5));

} else {
var statearr_32531_33647 = state_32524__$1;
(statearr_32531_33647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (15))){
var inst_32514 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32532_33648 = state_32524__$1;
(statearr_32532_33648[(2)] = inst_32514);

(statearr_32532_33648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (13))){
var state_32524__$1 = state_32524;
var statearr_32533_33650 = state_32524__$1;
(statearr_32533_33650[(2)] = null);

(statearr_32533_33650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (6))){
var inst_32484 = (state_32524[(8)]);
var inst_32509 = inst_32484.length;
var inst_32510 = (inst_32509 > (0));
var state_32524__$1 = state_32524;
if(cljs.core.truth_(inst_32510)){
var statearr_32534_33651 = state_32524__$1;
(statearr_32534_33651[(1)] = (12));

} else {
var statearr_32535_33652 = state_32524__$1;
(statearr_32535_33652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (3))){
var inst_32522 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32524__$1,inst_32522);
} else {
if((state_val_32525 === (12))){
var inst_32484 = (state_32524[(8)]);
var inst_32512 = cljs.core.vec(inst_32484);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32524__$1,(15),out,inst_32512);
} else {
if((state_val_32525 === (2))){
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32524__$1,(4),ch);
} else {
if((state_val_32525 === (11))){
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32502 = (state_32524[(2)]);
var inst_32503 = [];
var inst_32504 = inst_32503.push(inst_32488);
var inst_32484 = inst_32503;
var inst_32485 = inst_32492;
var state_32524__$1 = (function (){var statearr_32536 = state_32524;
(statearr_32536[(7)] = inst_32485);

(statearr_32536[(11)] = inst_32504);

(statearr_32536[(12)] = inst_32502);

(statearr_32536[(8)] = inst_32484);

return statearr_32536;
})();
var statearr_32537_33662 = state_32524__$1;
(statearr_32537_33662[(2)] = null);

(statearr_32537_33662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (9))){
var inst_32484 = (state_32524[(8)]);
var inst_32500 = cljs.core.vec(inst_32484);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32524__$1,(11),out,inst_32500);
} else {
if((state_val_32525 === (5))){
var inst_32485 = (state_32524[(7)]);
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32492__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32488) : f.call(null,inst_32488));
var inst_32493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32492__$1,inst_32485);
var inst_32494 = cljs.core.keyword_identical_QMARK_(inst_32485,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32495 = ((inst_32493) || (inst_32494));
var state_32524__$1 = (function (){var statearr_32538 = state_32524;
(statearr_32538[(10)] = inst_32492__$1);

return statearr_32538;
})();
if(cljs.core.truth_(inst_32495)){
var statearr_32539_33663 = state_32524__$1;
(statearr_32539_33663[(1)] = (8));

} else {
var statearr_32540_33664 = state_32524__$1;
(statearr_32540_33664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (14))){
var inst_32517 = (state_32524[(2)]);
var inst_32518 = cljs.core.async.close_BANG_(out);
var state_32524__$1 = (function (){var statearr_32542 = state_32524;
(statearr_32542[(13)] = inst_32517);

return statearr_32542;
})();
var statearr_32543_33665 = state_32524__$1;
(statearr_32543_33665[(2)] = inst_32518);

(statearr_32543_33665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (10))){
var inst_32507 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32544_33666 = state_32524__$1;
(statearr_32544_33666[(2)] = inst_32507);

(statearr_32544_33666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (8))){
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32484 = (state_32524[(8)]);
var inst_32497 = inst_32484.push(inst_32488);
var tmp32541 = inst_32484;
var inst_32484__$1 = tmp32541;
var inst_32485 = inst_32492;
var state_32524__$1 = (function (){var statearr_32545 = state_32524;
(statearr_32545[(7)] = inst_32485);

(statearr_32545[(8)] = inst_32484__$1);

(statearr_32545[(14)] = inst_32497);

return statearr_32545;
})();
var statearr_32546_33667 = state_32524__$1;
(statearr_32546_33667[(2)] = null);

(statearr_32546_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29912__auto__ = null;
var cljs$core$async$state_machine__29912__auto____0 = (function (){
var statearr_32547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32547[(0)] = cljs$core$async$state_machine__29912__auto__);

(statearr_32547[(1)] = (1));

return statearr_32547;
});
var cljs$core$async$state_machine__29912__auto____1 = (function (state_32524){
while(true){
var ret_value__29913__auto__ = (function (){try{while(true){
var result__29914__auto__ = switch__29911__auto__(state_32524);
if(cljs.core.keyword_identical_QMARK_(result__29914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29914__auto__;
}
break;
}
}catch (e32548){if((e32548 instanceof Object)){
var ex__29915__auto__ = e32548;
var statearr_32549_33668 = state_32524;
(statearr_32549_33668[(5)] = ex__29915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33669 = state_32524;
state_32524 = G__33669;
continue;
} else {
return ret_value__29913__auto__;
}
break;
}
});
cljs$core$async$state_machine__29912__auto__ = function(state_32524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29912__auto____1.call(this,state_32524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29912__auto____0;
cljs$core$async$state_machine__29912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29912__auto____1;
return cljs$core$async$state_machine__29912__auto__;
})()
})();
var state__30247__auto__ = (function (){var statearr_32550 = f__30246__auto__();
(statearr_32550[(6)] = c__30245__auto___33642);

return statearr_32550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30247__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
