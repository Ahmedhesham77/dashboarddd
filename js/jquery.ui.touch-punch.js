/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */

!function(e) {
    function t(e, t) {
        if (!(e.originalEvent.touches.length > 1)) {
            e.preventDefault();
            var n = e.originalEvent.changedTouches[0]
              , r = document.createEvent("MouseEvents");
            r.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
            e.target.dispatchEvent(r)
        }
    }
    if (e.support.touch = "ontouchend"in document,
    e.support.touch) {
        var n, r = e.ui.mouse.prototype, i = r._mouseInit, s = r._mouseDestroy;
        r._touchStart = function(e) {
            var r = this;
            !n && r._mouseCapture(e.originalEvent.changedTouches[0]) && (n = !0,
            r._touchMoved = !1,
            t(e, "mouseover"),
            t(e, "mousemove"),
            t(e, "mousedown"))
        }
        ,
        r._touchMove = function(e) {
            n && (this._touchMoved = !0,
            t(e, "mousemove"))
        }
        ,
        r._touchEnd = function(e) {
            n && (t(e, "mouseup"),
            t(e, "mouseout"),
            this._touchMoved || t(e, "click"),
            n = !1)
        }
        ,
        r._mouseInit = function() {
            var t = this;
            t.element.bind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }),
            i.call(t)
        }
        ,
        r._mouseDestroy = function() {
            var t = this;
            t.element.unbind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }),
            s.call(t)
        }
    }
}(jQuery);
