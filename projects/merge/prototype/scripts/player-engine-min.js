function setFFPointerEvents(e) {
  for (var t = $("input, textarea"), i = 0; i < t.length; i++)
    t[i].style.pointerEvents = e;
  _nodes = null;
}
function NoClickDelay(e) {
  (this.element = e),
    window.Touch && this.element.addEventListener("touchstart", this, !1);
}
function getColor(e) {
  return "undefined" == typeof e
    ? ""
    : "none" == e
    ? "rgba(0,0,0,0)"
    : e == e.replace(/[^A-F0-9]/gi, "")
    ? "#" + e
    : e;
}
function getCookie(e) {
  var t,
    i,
    n,
    r = document.cookie.split(";");
  for (t = 0; t < r.length; t++)
    if (
      ((i = r[t].substr(0, r[t].indexOf("="))),
      (n = r[t].substr(r[t].indexOf("=") + 1)),
      (i = i.replace(/^\s+|\s+$/g, "")),
      i == e)
    )
      return unescape(n);
}
!(function(e, t) {
  function i(e) {
    var t = e.length,
      i = ot.type(e);
    return ot.isWindow(e)
      ? !1
      : 1 === e.nodeType && t
      ? !0
      : "array" === i ||
        ("function" !== i &&
          (0 === t || ("number" == typeof t && t > 0 && t - 1 in e)));
  }
  function n(e) {
    var t = (ft[e] = {});
    return (
      ot.each(e.match(st) || [], function(e, i) {
        t[i] = !0;
      }),
      t
    );
  }
  function r() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function() {
        return {};
      },
    }),
      (this.expando = ot.expando + Math.random());
  }
  function o(e, i, n) {
    var r;
    if (n === t && 1 === e.nodeType)
      if (
        ((r = "data-" + i.replace(yt, "-$1").toLowerCase()),
        (n = e.getAttribute(r)),
        "string" == typeof n)
      ) {
        try {
          n =
            "true" === n
              ? !0
              : "false" === n
              ? !1
              : "null" === n
              ? null
              : +n + "" === n
              ? +n
              : vt.test(n)
              ? JSON.parse(n)
              : n;
        } catch (o) {}
        mt.set(e, i, n);
      } else n = t;
    return n;
  }
  function a() {
    return !0;
  }
  function s() {
    return !1;
  }
  function l() {
    try {
      return X.activeElement;
    } catch (e) {}
  }
  function c(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function d(e, t, i) {
    if (ot.isFunction(t))
      return ot.grep(e, function(e, n) {
        return !!t.call(e, n, e) !== i;
      });
    if (t.nodeType)
      return ot.grep(e, function(e) {
        return (e === t) !== i;
      });
    if ("string" == typeof t) {
      if (St.test(t)) return ot.filter(t, e, i);
      t = ot.filter(t, e);
    }
    return ot.grep(e, function(e) {
      return tt.call(t, e) >= 0 !== i;
    });
  }
  function p(e, t) {
    return ot.nodeName(e, "table") &&
      ot.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function u(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function h(e) {
    var t = Rt.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function f(e, t) {
    for (var i = e.length, n = 0; i > n; n++)
      gt.set(e[n], "globalEval", !t || gt.get(t[n], "globalEval"));
  }
  function m(e, t) {
    var i, n, r, o, a, s, l, c;
    if (1 === t.nodeType) {
      if (
        gt.hasData(e) &&
        ((o = gt.access(e)), (a = gt.set(t, o)), (c = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (r in c)
          for (i = 0, n = c[r].length; n > i; i++) ot.event.add(t, r, c[r][i]);
      }
      mt.hasData(e) &&
        ((s = mt.access(e)), (l = ot.extend({}, s)), mt.set(t, l));
    }
  }
  function g(e, i) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(i || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(i || "*")
      : [];
    return i === t || (i && ot.nodeName(e, i)) ? ot.merge([e], n) : n;
  }
  function v(e, t) {
    var i = t.nodeName.toLowerCase();
    "input" === i && Ot.test(e.type)
      ? (t.checked = e.checked)
      : ("input" === i || "textarea" === i) &&
        (t.defaultValue = e.defaultValue);
  }
  function y(e, t) {
    if (t in e) return t;
    for (
      var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = Kt.length;
      r--;

    )
      if (((t = Kt[r] + i), t in e)) return t;
    return n;
  }
  function b(e, t) {
    return (
      (e = t || e),
      "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
    );
  }
  function x(t) {
    return e.getComputedStyle(t, null);
  }
  function w(e, t) {
    for (var i, n, r, o = [], a = 0, s = e.length; s > a; a++)
      (n = e[a]),
        n.style &&
          ((o[a] = gt.get(n, "olddisplay")),
          (i = n.style.display),
          t
            ? (o[a] || "none" !== i || (n.style.display = ""),
              "" === n.style.display &&
                b(n) &&
                (o[a] = gt.access(n, "olddisplay", k(n.nodeName))))
            : o[a] ||
              ((r = b(n)),
              ((i && "none" !== i) || !r) &&
                gt.set(n, "olddisplay", r ? i : ot.css(n, "display"))));
    for (a = 0; s > a; a++)
      (n = e[a]),
        n.style &&
          ((t && "none" !== n.style.display && "" !== n.style.display) ||
            (n.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function $(e, t, i) {
    var n = Ut.exec(t);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t;
  }
  function _(e, t, i, n, r) {
    for (
      var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      4 > o;
      o += 2
    )
      "margin" === i && (a += ot.css(e, i + Zt[o], !0, r)),
        n
          ? ("content" === i && (a -= ot.css(e, "padding" + Zt[o], !0, r)),
            "margin" !== i &&
              (a -= ot.css(e, "border" + Zt[o] + "Width", !0, r)))
          : ((a += ot.css(e, "padding" + Zt[o], !0, r)),
            "padding" !== i &&
              (a += ot.css(e, "border" + Zt[o] + "Width", !0, r)));
    return a;
  }
  function T(e, t, i) {
    var n = !0,
      r = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = x(e),
      a =
        ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o);
    if (0 >= r || null == r) {
      if (
        ((r = Wt(e, t, o)),
        (0 > r || null == r) && (r = e.style[t]),
        Yt.test(r))
      )
        return r;
      (n = a && (ot.support.boxSizingReliable || r === e.style[t])),
        (r = parseFloat(r) || 0);
    }
    return r + _(e, t, i || (a ? "border" : "content"), n, o) + "px";
  }
  function k(e) {
    var t = X,
      i = Qt[e];
    return (
      i ||
        ((i = C(e, t)),
        ("none" !== i && i) ||
          ((Bt = (
            Bt ||
            ot("<iframe frameborder='0' width='0' height='0'/>").css(
              "cssText",
              "display:block !important"
            )
          ).appendTo(t.documentElement)),
          (t = (Bt[0].contentWindow || Bt[0].contentDocument).document),
          t.write("<!doctype html><html><body>"),
          t.close(),
          (i = C(e, t)),
          Bt.detach()),
        (Qt[e] = i)),
      i
    );
  }
  function C(e, t) {
    var i = ot(t.createElement(e)).appendTo(t.body),
      n = ot.css(i[0], "display");
    return i.remove(), n;
  }
  function F(e, t, i, n) {
    var r;
    if (ot.isArray(t))
      ot.each(t, function(t, r) {
        i || ti.test(e)
          ? n(e, r)
          : F(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n);
      });
    else if (i || "object" !== ot.type(t)) n(e, t);
    else for (r in t) F(e + "[" + r + "]", t[r], i, n);
  }
  function S(e) {
    return function(t, i) {
      "string" != typeof t && ((i = t), (t = "*"));
      var n,
        r = 0,
        o = t.toLowerCase().match(st) || [];
      if (ot.isFunction(i))
        for (; (n = o[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
            : (e[n] = e[n] || []).push(i);
    };
  }
  function P(e, i, n, r) {
    function o(l) {
      var c;
      return (
        (a[l] = !0),
        ot.each(e[l] || [], function(e, l) {
          var d = l(i, n, r);
          return "string" != typeof d || s || a[d]
            ? s
              ? !(c = d)
              : t
            : (i.dataTypes.unshift(d), o(d), !1);
        }),
        c
      );
    }
    var a = {},
      s = e === yi;
    return o(i.dataTypes[0]) || (!a["*"] && o("*"));
  }
  function D(e, i) {
    var n,
      r,
      o = ot.ajaxSettings.flatOptions || {};
    for (n in i) i[n] !== t && ((o[n] ? e : r || (r = {}))[n] = i[n]);
    return r && ot.extend(!0, e, r), e;
  }
  function A(e, i, n) {
    for (var r, o, a, s, l = e.contents, c = e.dataTypes; "*" === c[0]; )
      c.shift(),
        r === t && (r = e.mimeType || i.getResponseHeader("Content-Type"));
    if (r)
      for (o in l)
        if (l[o] && l[o].test(r)) {
          c.unshift(o);
          break;
        }
    if (c[0] in n) a = c[0];
    else {
      for (o in n) {
        if (!c[0] || e.converters[o + " " + c[0]]) {
          a = o;
          break;
        }
        s || (s = o);
      }
      a = a || s;
    }
    return a ? (a !== c[0] && c.unshift(a), n[a]) : t;
  }
  function I(e, t, i, n) {
    var r,
      o,
      a,
      s,
      l,
      c = {},
      d = e.dataTypes.slice();
    if (d[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = d.shift(); o; )
      if (
        (e.responseFields[o] && (i[e.responseFields[o]] = t),
        !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = o),
        (o = d.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (((a = c[l + " " + o] || c["* " + o]), !a))
            for (r in c)
              if (
                ((s = r.split(" ")),
                s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]]))
              ) {
                a === !0
                  ? (a = c[r])
                  : c[r] !== !0 && ((o = s[0]), d.unshift(s[1]));
                break;
              }
          if (a !== !0)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (p) {
                return {
                  state: "parsererror",
                  error: a ? p : "No conversion from " + l + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  function E() {
    return (
      setTimeout(function() {
        Fi = t;
      }),
      (Fi = ot.now())
    );
  }
  function j(e, t, i) {
    for (
      var n, r = (Ei[t] || []).concat(Ei["*"]), o = 0, a = r.length;
      a > o;
      o++
    )
      if ((n = r[o].call(i, t, e))) return n;
  }
  function M(e, t, i) {
    var n,
      r,
      o = 0,
      a = Ii.length,
      s = ot.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (r) return !1;
        for (
          var t = Fi || E(),
            i = Math.max(0, c.startTime + c.duration - t),
            n = i / c.duration || 0,
            o = 1 - n,
            a = 0,
            l = c.tweens.length;
          l > a;
          a++
        )
          c.tweens[a].run(o);
        return (
          s.notifyWith(e, [c, o, i]),
          1 > o && l ? i : (s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: ot.extend({}, t),
        opts: ot.extend(!0, { specialEasing: {} }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: Fi || E(),
        duration: i.duration,
        tweens: [],
        createTween: function(t, i) {
          var n = ot.Tween(
            e,
            c.opts,
            t,
            i,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function(t) {
          var i = 0,
            n = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n > i; i++) c.tweens[i].run(1);
          return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this;
        },
      }),
      d = c.props;
    for (O(d, c.opts.specialEasing); a > o; o++)
      if ((n = Ii[o].call(c, e, d, c.opts))) return n;
    return (
      ot.map(d, j, c),
      ot.isFunction(c.opts.start) && c.opts.start.call(e, c),
      ot.fx.timer(ot.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  function O(e, t) {
    var i, n, r, o, a;
    for (i in e)
      if (
        ((n = ot.camelCase(i)),
        (r = t[n]),
        (o = e[i]),
        ot.isArray(o) && ((r = o[1]), (o = e[i] = o[0])),
        i !== n && ((e[n] = o), delete e[i]),
        (a = ot.cssHooks[n]),
        a && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[n];
        for (i in o) i in e || ((e[i] = o[i]), (t[i] = r));
      } else t[n] = r;
  }
  function N(e, i, n) {
    var r,
      o,
      a,
      s,
      l,
      c,
      d = this,
      p = {},
      u = e.style,
      h = e.nodeType && b(e),
      f = gt.get(e, "fxshow");
    n.queue ||
      ((l = ot._queueHooks(e, "fx")),
      null == l.unqueued &&
        ((l.unqueued = 0),
        (c = l.empty.fire),
        (l.empty.fire = function() {
          l.unqueued || c();
        })),
      l.unqueued++,
      d.always(function() {
        d.always(function() {
          l.unqueued--, ot.queue(e, "fx").length || l.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in i || "width" in i) &&
        ((n.overflow = [u.overflow, u.overflowX, u.overflowY]),
        "inline" === ot.css(e, "display") &&
          "none" === ot.css(e, "float") &&
          (u.display = "inline-block")),
      n.overflow &&
        ((u.overflow = "hidden"),
        d.always(function() {
          (u.overflow = n.overflow[0]),
            (u.overflowX = n.overflow[1]),
            (u.overflowY = n.overflow[2]);
        }));
    for (r in i)
      if (((o = i[r]), Pi.exec(o))) {
        if (
          (delete i[r], (a = a || "toggle" === o), o === (h ? "hide" : "show"))
        ) {
          if ("show" !== o || !f || f[r] === t) continue;
          h = !0;
        }
        p[r] = (f && f[r]) || ot.style(e, r);
      }
    if (!ot.isEmptyObject(p)) {
      f ? "hidden" in f && (h = f.hidden) : (f = gt.access(e, "fxshow", {})),
        a && (f.hidden = !h),
        h
          ? ot(e).show()
          : d.done(function() {
              ot(e).hide();
            }),
        d.done(function() {
          var t;
          gt.remove(e, "fxshow");
          for (t in p) ot.style(e, t, p[t]);
        });
      for (r in p)
        (s = j(h ? f[r] : 0, r, d)),
          r in f ||
            ((f[r] = s.start),
            h &&
              ((s.end = s.start),
              (s.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function L(e, t, i, n, r) {
    return new L.prototype.init(e, t, i, n, r);
  }
  function R(e, t) {
    var i,
      n = { height: e },
      r = 0;
    for (t = t ? 1 : 0; 4 > r; r += 2 - t)
      (i = Zt[r]), (n["margin" + i] = n["padding" + i] = e);
    return t && (n.opacity = n.width = e), n;
  }
  function z(e) {
    return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var H,
    W,
    B = typeof t,
    q = e.location,
    X = e.document,
    U = X.documentElement,
    Y = e.jQuery,
    V = e.$,
    Q = {},
    J = [],
    G = "2.0.3",
    Z = J.concat,
    K = J.push,
    et = J.slice,
    tt = J.indexOf,
    it = Q.toString,
    nt = Q.hasOwnProperty,
    rt = G.trim,
    ot = function(e, t) {
      return new ot.fn.init(e, t, H);
    },
    at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    st = /\S+/g,
    lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    dt = /^-ms-/,
    pt = /-([\da-z])/gi,
    ut = function(e, t) {
      return t.toUpperCase();
    },
    ht = function() {
      X.removeEventListener("DOMContentLoaded", ht, !1),
        e.removeEventListener("load", ht, !1),
        ot.ready();
    };
  (ot.fn = ot.prototype = {
    jquery: G,
    constructor: ot,
    init: function(e, i, n) {
      var r, o;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          ((r =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : lt.exec(e)),
          !r || (!r[1] && i))
        )
          return !i || i.jquery
            ? (i || n).find(e)
            : this.constructor(i).find(e);
        if (r[1]) {
          if (
            ((i = i instanceof ot ? i[0] : i),
            ot.merge(
              this,
              ot.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : X, !0)
            ),
            ct.test(r[1]) && ot.isPlainObject(i))
          )
            for (r in i)
              ot.isFunction(this[r]) ? this[r](i[r]) : this.attr(r, i[r]);
          return this;
        }
        return (
          (o = X.getElementById(r[2])),
          o && o.parentNode && ((this.length = 1), (this[0] = o)),
          (this.context = X),
          (this.selector = e),
          this
        );
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : ot.isFunction(e)
        ? n.ready(e)
        : (e.selector !== t &&
            ((this.selector = e.selector), (this.context = e.context)),
          ot.makeArray(e, this));
    },
    selector: "",
    length: 0,
    toArray: function() {
      return et.call(this);
    },
    get: function(e) {
      return null == e
        ? this.toArray()
        : 0 > e
        ? this[this.length + e]
        : this[e];
    },
    pushStack: function(e) {
      var t = ot.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function(e, t) {
      return ot.each(this, e, t);
    },
    ready: function(e) {
      return ot.ready.promise().done(e), this;
    },
    slice: function() {
      return this.pushStack(et.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        i = +e + (0 > e ? t : 0);
      return this.pushStack(i >= 0 && t > i ? [this[i]] : []);
    },
    map: function(e) {
      return this.pushStack(
        ot.map(this, function(t, i) {
          return e.call(t, i, t);
        })
      );
    },
    end: function() {
      return this.prevObject || this.constructor(null);
    },
    push: K,
    sort: [].sort,
    splice: [].splice,
  }),
    (ot.fn.init.prototype = ot.fn),
    (ot.extend = ot.fn.extend = function() {
      var e,
        i,
        n,
        r,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        c = arguments.length,
        d = !1;
      for (
        "boolean" == typeof s && ((d = s), (s = arguments[1] || {}), (l = 2)),
          "object" == typeof s || ot.isFunction(s) || (s = {}),
          c === l && ((s = this), --l);
        c > l;
        l++
      )
        if (null != (e = arguments[l]))
          for (i in e)
            (n = s[i]),
              (r = e[i]),
              s !== r &&
                (d && r && (ot.isPlainObject(r) || (o = ot.isArray(r)))
                  ? (o
                      ? ((o = !1), (a = n && ot.isArray(n) ? n : []))
                      : (a = n && ot.isPlainObject(n) ? n : {}),
                    (s[i] = ot.extend(d, a, r)))
                  : r !== t && (s[i] = r));
      return s;
    }),
    ot.extend({
      expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
      noConflict: function(t) {
        return (
          e.$ === ot && (e.$ = V), t && e.jQuery === ot && (e.jQuery = Y), ot
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? ot.readyWait++ : ot.ready(!0);
      },
      ready: function(e) {
        (e === !0 ? --ot.readyWait : ot.isReady) ||
          ((ot.isReady = !0),
          (e !== !0 && --ot.readyWait > 0) ||
            (W.resolveWith(X, [ot]),
            ot.fn.trigger &&
              ot(X)
                .trigger("ready")
                .off("ready")));
      },
      isFunction: function(e) {
        return "function" === ot.type(e);
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window;
      },
      isNumeric: function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? Q[it.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function(e) {
        if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
        try {
          if (
            e.constructor &&
            !nt.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (t) {
          return !1;
        }
        return !0;
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      error: function(e) {
        throw Error(e);
      },
      parseHTML: function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((i = t), (t = !1)), (t = t || X);
        var n = ct.exec(e),
          r = !i && [];
        return n
          ? [t.createElement(n[1])]
          : ((n = ot.buildFragment([e], t, r)),
            r && ot(r).remove(),
            ot.merge([], n.childNodes));
      },
      parseJSON: JSON.parse,
      parseXML: function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
          (n = new DOMParser()), (i = n.parseFromString(e, "text/xml"));
        } catch (r) {
          i = t;
        }
        return (
          (!i || i.getElementsByTagName("parsererror").length) &&
            ot.error("Invalid XML: " + e),
          i
        );
      },
      noop: function() {},
      globalEval: function(e) {
        var t,
          i = eval;
        (e = ot.trim(e)),
          e &&
            (1 === e.indexOf("use strict")
              ? ((t = X.createElement("script")),
                (t.text = e),
                X.head.appendChild(t).parentNode.removeChild(t))
              : i(e));
      },
      camelCase: function(e) {
        return e.replace(dt, "ms-").replace(pt, ut);
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function(e, t, n) {
        var r,
          o = 0,
          a = e.length,
          s = i(e);
        if (n) {
          if (s) for (; a > o && ((r = t.apply(e[o], n)), r !== !1); o++);
          else for (o in e) if (((r = t.apply(e[o], n)), r === !1)) break;
        } else if (s)
          for (; a > o && ((r = t.call(e[o], o, e[o])), r !== !1); o++);
        else for (o in e) if (((r = t.call(e[o], o, e[o])), r === !1)) break;
        return e;
      },
      trim: function(e) {
        return null == e ? "" : rt.call(e);
      },
      makeArray: function(e, t) {
        var n = t || [];
        return (
          null != e &&
            (i(Object(e))
              ? ot.merge(n, "string" == typeof e ? [e] : e)
              : K.call(n, e)),
          n
        );
      },
      inArray: function(e, t, i) {
        return null == t ? -1 : tt.call(t, e, i);
      },
      merge: function(e, i) {
        var n = i.length,
          r = e.length,
          o = 0;
        if ("number" == typeof n) for (; n > o; o++) e[r++] = i[o];
        else for (; i[o] !== t; ) e[r++] = i[o++];
        return (e.length = r), e;
      },
      grep: function(e, t, i) {
        var n,
          r = [],
          o = 0,
          a = e.length;
        for (i = !!i; a > o; o++) (n = !!t(e[o], o)), i !== n && r.push(e[o]);
        return r;
      },
      map: function(e, t, n) {
        var r,
          o = 0,
          a = e.length,
          s = i(e),
          l = [];
        if (s)
          for (; a > o; o++)
            (r = t(e[o], o, n)), null != r && (l[l.length] = r);
        else for (o in e) (r = t(e[o], o, n)), null != r && (l[l.length] = r);
        return Z.apply([], l);
      },
      guid: 1,
      proxy: function(e, i) {
        var n, r, o;
        return (
          "string" == typeof i && ((n = e[i]), (i = e), (e = n)),
          ot.isFunction(e)
            ? ((r = et.call(arguments, 2)),
              (o = function() {
                return e.apply(i || this, r.concat(et.call(arguments)));
              }),
              (o.guid = e.guid = e.guid || ot.guid++),
              o)
            : t
        );
      },
      access: function(e, i, n, r, o, a, s) {
        var l = 0,
          c = e.length,
          d = null == n;
        if ("object" === ot.type(n)) {
          o = !0;
          for (l in n) ot.access(e, i, l, n[l], !0, a, s);
        } else if (
          r !== t &&
          ((o = !0),
          ot.isFunction(r) || (s = !0),
          d &&
            (s
              ? (i.call(e, r), (i = null))
              : ((d = i),
                (i = function(e, t, i) {
                  return d.call(ot(e), i);
                }))),
          i)
        )
          for (; c > l; l++) i(e[l], n, s ? r : r.call(e[l], l, i(e[l], n)));
        return o ? e : d ? i.call(e) : c ? i(e[0], n) : a;
      },
      now: Date.now,
      swap: function(e, t, i, n) {
        var r,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        r = i.apply(e, n || []);
        for (o in t) e.style[o] = a[o];
        return r;
      },
    }),
    (ot.ready.promise = function(t) {
      return (
        W ||
          ((W = ot.Deferred()),
          "complete" === X.readyState
            ? setTimeout(ot.ready)
            : (X.addEventListener("DOMContentLoaded", ht, !1),
              e.addEventListener("load", ht, !1))),
        W.promise(t)
      );
    }),
    ot.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (H = ot(X)),
    (function(e, t) {
      function i(e, t, i, n) {
        var r, o, a, s, l, c, d, p, f, m;
        if (
          ((t ? t.ownerDocument || t : z) !== I && A(t),
          (t = t || I),
          (i = i || []),
          !e || "string" != typeof e)
        )
          return i;
        if (1 !== (s = t.nodeType) && 9 !== s) return [];
        if (j && !n) {
          if ((r = bt.exec(e)))
            if ((a = r[1])) {
              if (9 === s) {
                if (((o = t.getElementById(a)), !o || !o.parentNode)) return i;
                if (o.id === a) return i.push(o), i;
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(a)) &&
                L(t, o) &&
                o.id === a
              )
                return i.push(o), i;
            } else {
              if (r[2]) return et.apply(i, t.getElementsByTagName(e)), i;
              if (
                (a = r[3]) &&
                _.getElementsByClassName &&
                t.getElementsByClassName
              )
                return et.apply(i, t.getElementsByClassName(a)), i;
            }
          if (_.qsa && (!M || !M.test(e))) {
            if (
              ((p = d = R),
              (f = t),
              (m = 9 === s && e),
              1 === s && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                c = u(e),
                  (d = t.getAttribute("id"))
                    ? (p = d.replace($t, "\\$&"))
                    : t.setAttribute("id", p),
                  p = "[id='" + p + "'] ",
                  l = c.length;
                l--;

              )
                c[l] = p + h(c[l]);
              (f = (ht.test(e) && t.parentNode) || t), (m = c.join(","));
            }
            if (m)
              try {
                return et.apply(i, f.querySelectorAll(m)), i;
              } catch (g) {
              } finally {
                d || t.removeAttribute("id");
              }
          }
        }
        return w(e.replace(dt, "$1"), t, i, n);
      }
      function n() {
        function e(i, n) {
          return (
            t.push((i += " ")) > k.cacheLength && delete e[t.shift()],
            (e[i] = n)
          );
        }
        var t = [];
        return e;
      }
      function r(e) {
        return (e[R] = !0), e;
      }
      function o(e) {
        var t = I.createElement("div");
        try {
          return !!e(t);
        } catch (i) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function a(e, t) {
        for (var i = e.split("|"), n = e.length; n--; ) k.attrHandle[i[n]] = t;
      }
      function s(e, t) {
        var i = t && e,
          n =
            i &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
        if (n) return n;
        if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
        return e ? 1 : -1;
      }
      function l(e) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return "input" === i && t.type === e;
        };
      }
      function c(e) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e;
        };
      }
      function d(e) {
        return r(function(t) {
          return (
            (t = +t),
            r(function(i, n) {
              for (var r, o = e([], i.length, t), a = o.length; a--; )
                i[(r = o[a])] && (i[r] = !(n[r] = i[r]));
            })
          );
        });
      }
      function p() {}
      function u(e, t) {
        var n,
          r,
          o,
          a,
          s,
          l,
          c,
          d = q[e + " "];
        if (d) return t ? 0 : d.slice(0);
        for (s = e, l = [], c = k.preFilter; s; ) {
          (!n || (r = pt.exec(s))) &&
            (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
            (n = !1),
            (r = ut.exec(s)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(dt, " ") }),
              (s = s.slice(n.length)));
          for (a in k.filter)
            !(r = vt[a].exec(s)) ||
              (c[a] && !(r = c[a](r))) ||
              ((n = r.shift()),
              o.push({ value: n, type: a, matches: r }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? i.error(e) : q(e, l).slice(0);
      }
      function h(e) {
        for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
        return n;
      }
      function f(e, t, i) {
        var n = t.dir,
          r = i && "parentNode" === n,
          o = W++;
        return t.first
          ? function(t, i, o) {
              for (; (t = t[n]); ) if (1 === t.nodeType || r) return e(t, i, o);
            }
          : function(t, i, a) {
              var s,
                l,
                c,
                d = H + " " + o;
              if (a) {
                for (; (t = t[n]); )
                  if ((1 === t.nodeType || r) && e(t, i, a)) return !0;
              } else
                for (; (t = t[n]); )
                  if (1 === t.nodeType || r)
                    if (((c = t[R] || (t[R] = {})), (l = c[n]) && l[0] === d)) {
                      if ((s = l[1]) === !0 || s === T) return s === !0;
                    } else if (
                      ((l = c[n] = [d]), (l[1] = e(t, i, a) || T), l[1] === !0)
                    )
                      return !0;
            };
      }
      function m(e) {
        return e.length > 1
          ? function(t, i, n) {
              for (var r = e.length; r--; ) if (!e[r](t, i, n)) return !1;
              return !0;
            }
          : e[0];
      }
      function g(e, t, i, n, r) {
        for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
          (o = e[s]) && (!i || i(o, n, r)) && (a.push(o), c && t.push(s));
        return a;
      }
      function v(e, t, i, n, o, a) {
        return (
          n && !n[R] && (n = v(n)),
          o && !o[R] && (o = v(o, a)),
          r(function(r, a, s, l) {
            var c,
              d,
              p,
              u = [],
              h = [],
              f = a.length,
              m = r || x(t || "*", s.nodeType ? [s] : s, []),
              v = !e || (!r && t) ? m : g(m, u, e, s, l),
              y = i ? (o || (r ? e : f || n) ? [] : a) : v;
            if ((i && i(v, y, s, l), n))
              for (c = g(y, h), n(c, [], s, l), d = c.length; d--; )
                (p = c[d]) && (y[h[d]] = !(v[h[d]] = p));
            if (r) {
              if (o || e) {
                if (o) {
                  for (c = [], d = y.length; d--; )
                    (p = y[d]) && c.push((v[d] = p));
                  o(null, (y = []), c, l);
                }
                for (d = y.length; d--; )
                  (p = y[d]) &&
                    (c = o ? it.call(r, p) : u[d]) > -1 &&
                    (r[c] = !(a[c] = p));
              }
            } else (y = g(y === a ? y.splice(f, y.length) : y)), o ? o(null, a, y, l) : et.apply(a, y);
          })
        );
      }
      function y(e) {
        for (
          var t,
            i,
            n,
            r = e.length,
            o = k.relative[e[0].type],
            a = o || k.relative[" "],
            s = o ? 1 : 0,
            l = f(
              function(e) {
                return e === t;
              },
              a,
              !0
            ),
            c = f(
              function(e) {
                return it.call(t, e) > -1;
              },
              a,
              !0
            ),
            d = [
              function(e, i, n) {
                return (
                  (!o && (n || i !== P)) ||
                  ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
                );
              },
            ];
          r > s;
          s++
        )
          if ((i = k.relative[e[s].type])) d = [f(m(d), i)];
          else {
            if (((i = k.filter[e[s].type].apply(null, e[s].matches)), i[R])) {
              for (n = ++s; r > n && !k.relative[e[n].type]; n++);
              return v(
                s > 1 && m(d),
                s > 1 &&
                  h(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(dt, "$1"),
                i,
                n > s && y(e.slice(s, n)),
                r > n && y((e = e.slice(n))),
                r > n && h(e)
              );
            }
            d.push(i);
          }
        return m(d);
      }
      function b(e, t) {
        var n = 0,
          o = t.length > 0,
          a = e.length > 0,
          s = function(r, s, l, c, d) {
            var p,
              u,
              h,
              f = [],
              m = 0,
              v = "0",
              y = r && [],
              b = null != d,
              x = P,
              w = r || (a && k.find.TAG("*", (d && s.parentNode) || s)),
              $ = (H += null == x ? 1 : Math.random() || 0.1);
            for (b && ((P = s !== I && s), (T = n)); null != (p = w[v]); v++) {
              if (a && p) {
                for (u = 0; (h = e[u++]); )
                  if (h(p, s, l)) {
                    c.push(p);
                    break;
                  }
                b && ((H = $), (T = ++n));
              }
              o && ((p = !h && p) && m--, r && y.push(p));
            }
            if (((m += v), o && v !== m)) {
              for (u = 0; (h = t[u++]); ) h(y, f, s, l);
              if (r) {
                if (m > 0) for (; v--; ) y[v] || f[v] || (f[v] = Z.call(c));
                f = g(f);
              }
              et.apply(c, f),
                b && !r && f.length > 0 && m + t.length > 1 && i.uniqueSort(c);
            }
            return b && ((H = $), (P = x)), y;
          };
        return o ? r(s) : s;
      }
      function x(e, t, n) {
        for (var r = 0, o = t.length; o > r; r++) i(e, t[r], n);
        return n;
      }
      function w(e, t, i, n) {
        var r,
          o,
          a,
          s,
          l,
          c = u(e);
        if (!n && 1 === c.length) {
          if (
            ((o = c[0] = c[0].slice(0)),
            o.length > 2 &&
              "ID" === (a = o[0]).type &&
              _.getById &&
              9 === t.nodeType &&
              j &&
              k.relative[o[1].type])
          ) {
            if (
              ((t = (k.find.ID(a.matches[0].replace(_t, Tt), t) || [])[0]), !t)
            )
              return i;
            e = e.slice(o.shift().value.length);
          }
          for (
            r = vt.needsContext.test(e) ? 0 : o.length;
            r-- && ((a = o[r]), !k.relative[(s = a.type)]);

          )
            if (
              (l = k.find[s]) &&
              (n = l(
                a.matches[0].replace(_t, Tt),
                (ht.test(o[0].type) && t.parentNode) || t
              ))
            ) {
              if ((o.splice(r, 1), (e = n.length && h(o)), !e))
                return et.apply(i, n), i;
              break;
            }
        }
        return S(e, c)(n, t, !j, i, ht.test(e)), i;
      }
      var $,
        _,
        T,
        k,
        C,
        F,
        S,
        P,
        D,
        A,
        I,
        E,
        j,
        M,
        O,
        N,
        L,
        R = "sizzle" + -new Date(),
        z = e.document,
        H = 0,
        W = 0,
        B = n(),
        q = n(),
        X = n(),
        U = !1,
        Y = function(e, t) {
          return e === t ? ((U = !0), 0) : 0;
        },
        V = typeof t,
        Q = 1 << 31,
        J = {}.hasOwnProperty,
        G = [],
        Z = G.pop,
        K = G.push,
        et = G.push,
        tt = G.slice,
        it =
          G.indexOf ||
          function(e) {
            for (var t = 0, i = this.length; i > t; t++)
              if (this[t] === e) return t;
            return -1;
          },
        nt =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        rt = "[\\x20\\t\\r\\n\\f]",
        at = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        st = at.replace("w", "w#"),
        lt =
          "\\[" +
          rt +
          "*(" +
          at +
          ")" +
          rt +
          "*(?:([*^$|!~]?=)" +
          rt +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          st +
          ")|)|)" +
          rt +
          "*\\]",
        ct =
          ":(" +
          at +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          lt.replace(3, 8) +
          ")*)|.*)\\)|)",
        dt = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
        pt = RegExp("^" + rt + "*," + rt + "*"),
        ut = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
        ht = RegExp(rt + "*[+~]"),
        ft = RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
        mt = RegExp(ct),
        gt = RegExp("^" + st + "$"),
        vt = {
          ID: RegExp("^#(" + at + ")"),
          CLASS: RegExp("^\\.(" + at + ")"),
          TAG: RegExp("^(" + at.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + lt),
          PSEUDO: RegExp("^" + ct),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              rt +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              rt +
              "*(?:([+-]|)" +
              rt +
              "*(\\d+)|))" +
              rt +
              "*\\)|)",
            "i"
          ),
          bool: RegExp("^(?:" + nt + ")$", "i"),
          needsContext: RegExp(
            "^" +
              rt +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              rt +
              "*((?:-\\d)?\\d*)" +
              rt +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        yt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        xt = /^(?:input|select|textarea|button)$/i,
        wt = /^h\d$/i,
        $t = /'|\\/g,
        _t = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
        Tt = function(e, t, i) {
          var n = "0x" + t - 65536;
          return n !== n || i
            ? t
            : 0 > n
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode(55296 | (n >> 10), 56320 | (1023 & n));
        };
      try {
        et.apply((G = tt.call(z.childNodes)), z.childNodes),
          G[z.childNodes.length].nodeType;
      } catch (kt) {
        et = {
          apply: G.length
            ? function(e, t) {
                K.apply(e, tt.call(t));
              }
            : function(e, t) {
                for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                e.length = i - 1;
              },
        };
      }
      (F = i.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1;
      }),
        (_ = i.support = {}),
        (A = i.setDocument = function(e) {
          var i = e ? e.ownerDocument || e : z,
            n = i.defaultView;
          return i !== I && 9 === i.nodeType && i.documentElement
            ? ((I = i),
              (E = i.documentElement),
              (j = !F(i)),
              n &&
                n.attachEvent &&
                n !== n.top &&
                n.attachEvent("onbeforeunload", function() {
                  A();
                }),
              (_.attributes = o(function(e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (_.getElementsByTagName = o(function(e) {
                return (
                  e.appendChild(i.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (_.getElementsByClassName = o(function(e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = "i"),
                  2 === e.getElementsByClassName("i").length
                );
              })),
              (_.getById = o(function(e) {
                return (
                  (E.appendChild(e).id = R),
                  !i.getElementsByName || !i.getElementsByName(R).length
                );
              })),
              _.getById
                ? ((k.find.ID = function(e, t) {
                    if (typeof t.getElementById !== V && j) {
                      var i = t.getElementById(e);
                      return i && i.parentNode ? [i] : [];
                    }
                  }),
                  (k.filter.ID = function(e) {
                    var t = e.replace(_t, Tt);
                    return function(e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete k.find.ID,
                  (k.filter.ID = function(e) {
                    var t = e.replace(_t, Tt);
                    return function(e) {
                      var i =
                        typeof e.getAttributeNode !== V &&
                        e.getAttributeNode("id");
                      return i && i.value === t;
                    };
                  })),
              (k.find.TAG = _.getElementsByTagName
                ? function(e, i) {
                    return typeof i.getElementsByTagName !== V
                      ? i.getElementsByTagName(e)
                      : t;
                  }
                : function(e, t) {
                    var i,
                      n = [],
                      r = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (i = o[r++]); ) 1 === i.nodeType && n.push(i);
                      return n;
                    }
                    return o;
                  }),
              (k.find.CLASS =
                _.getElementsByClassName &&
                function(e, i) {
                  return typeof i.getElementsByClassName !== V && j
                    ? i.getElementsByClassName(e)
                    : t;
                }),
              (O = []),
              (M = []),
              (_.qsa = yt.test(i.querySelectorAll)) &&
                (o(function(e) {
                  (e.innerHTML =
                    "<select><option selected=''></option></select>"),
                    e.querySelectorAll("[selected]").length ||
                      M.push("\\[" + rt + "*(?:value|" + nt + ")"),
                    e.querySelectorAll(":checked").length || M.push(":checked");
                }),
                o(function(e) {
                  var t = i.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("t", ""),
                    e.querySelectorAll("[t^='']").length &&
                      M.push("[*^$]=" + rt + "*(?:''|\"\")"),
                    e.querySelectorAll(":enabled").length ||
                      M.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    M.push(",.*:");
                })),
              (_.matchesSelector = yt.test(
                (N =
                  E.webkitMatchesSelector ||
                  E.mozMatchesSelector ||
                  E.oMatchesSelector ||
                  E.msMatchesSelector)
              )) &&
                o(function(e) {
                  (_.disconnectedMatch = N.call(e, "div")),
                    N.call(e, "[s!='']:x"),
                    O.push("!=", ct);
                }),
              (M = M.length && RegExp(M.join("|"))),
              (O = O.length && RegExp(O.join("|"))),
              (L =
                yt.test(E.contains) || E.compareDocumentPosition
                  ? function(e, t) {
                      var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                      return (
                        e === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(i.contains
                            ? i.contains(n)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function(e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (Y = E.compareDocumentPosition
                ? function(e, t) {
                    if (e === t) return (U = !0), 0;
                    var n =
                      t.compareDocumentPosition &&
                      e.compareDocumentPosition &&
                      e.compareDocumentPosition(t);
                    return n
                      ? 1 & n ||
                        (!_.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === i || L(z, e)
                          ? -1
                          : t === i || L(z, t)
                          ? 1
                          : D
                          ? it.call(D, e) - it.call(D, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1
                      : e.compareDocumentPosition
                      ? -1
                      : 1;
                  }
                : function(e, t) {
                    var n,
                      r = 0,
                      o = e.parentNode,
                      a = t.parentNode,
                      l = [e],
                      c = [t];
                    if (e === t) return (U = !0), 0;
                    if (!o || !a)
                      return e === i
                        ? -1
                        : t === i
                        ? 1
                        : o
                        ? -1
                        : a
                        ? 1
                        : D
                        ? it.call(D, e) - it.call(D, t)
                        : 0;
                    if (o === a) return s(e, t);
                    for (n = e; (n = n.parentNode); ) l.unshift(n);
                    for (n = t; (n = n.parentNode); ) c.unshift(n);
                    for (; l[r] === c[r]; ) r++;
                    return r
                      ? s(l[r], c[r])
                      : l[r] === z
                      ? -1
                      : c[r] === z
                      ? 1
                      : 0;
                  }),
              i)
            : I;
        }),
        (i.matches = function(e, t) {
          return i(e, null, null, t);
        }),
        (i.matchesSelector = function(e, t) {
          if (
            ((e.ownerDocument || e) !== I && A(e),
            (t = t.replace(ft, "='$1']")),
            !(!_.matchesSelector || !j || (O && O.test(t)) || (M && M.test(t))))
          )
            try {
              var n = N.call(e, t);
              if (
                n ||
                _.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (r) {}
          return i(t, I, null, [e]).length > 0;
        }),
        (i.contains = function(e, t) {
          return (e.ownerDocument || e) !== I && A(e), L(e, t);
        }),
        (i.attr = function(e, i) {
          (e.ownerDocument || e) !== I && A(e);
          var n = k.attrHandle[i.toLowerCase()],
            r = n && J.call(k.attrHandle, i.toLowerCase()) ? n(e, i, !j) : t;
          return r === t
            ? _.attributes || !j
              ? e.getAttribute(i)
              : (r = e.getAttributeNode(i)) && r.specified
              ? r.value
              : null
            : r;
        }),
        (i.error = function(e) {
          throw Error("Syntax error, unrecognized expression: " + e);
        }),
        (i.uniqueSort = function(e) {
          var t,
            i = [],
            n = 0,
            r = 0;
          if (
            ((U = !_.detectDuplicates),
            (D = !_.sortStable && e.slice(0)),
            e.sort(Y),
            U)
          ) {
            for (; (t = e[r++]); ) t === e[r] && (n = i.push(r));
            for (; n--; ) e.splice(i[n], 1);
          }
          return e;
        }),
        (C = i.getText = function(e) {
          var t,
            i = "",
            n = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) i += C(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[n]); n++) i += C(t);
          return i;
        }),
        (k = i.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: vt,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function(e) {
              return (
                (e[1] = e[1].replace(_t, Tt)),
                (e[3] = (e[4] || e[5] || "").replace(_t, Tt)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function(e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || i.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && i.error(e[0]),
                e
              );
            },
            PSEUDO: function(e) {
              var i,
                n = !e[5] && e[2];
              return vt.CHILD.test(e[0])
                ? null
                : (e[3] && e[4] !== t
                    ? (e[2] = e[4])
                    : n &&
                      mt.test(n) &&
                      (i = u(n, !0)) &&
                      (i = n.indexOf(")", n.length - i) - n.length) &&
                      ((e[0] = e[0].slice(0, i)), (e[2] = n.slice(0, i))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(_t, Tt).toLowerCase();
              return "*" === e
                ? function() {
                    return !0;
                  }
                : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function(e) {
              var t = B[e + " "];
              return (
                t ||
                ((t = RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) &&
                  B(e, function(e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== V &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function(e, t, n) {
              return function(r) {
                var o = i.attr(r, e);
                return null == o
                  ? "!=" === t
                  : t
                  ? ((o += ""),
                    "=" === t
                      ? o === n
                      : "!=" === t
                      ? o !== n
                      : "^=" === t
                      ? n && 0 === o.indexOf(n)
                      : "*=" === t
                      ? n && o.indexOf(n) > -1
                      : "$=" === t
                      ? n && o.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + o + " ").indexOf(n) > -1
                      : "|=" === t
                      ? o === n || o.slice(0, n.length + 1) === n + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function(e, t, i, n, r) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === n && 0 === r
                ? function(e) {
                    return !!e.parentNode;
                  }
                : function(t, i, l) {
                    var c,
                      d,
                      p,
                      u,
                      h,
                      f,
                      m = o !== a ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      y = !l && !s;
                    if (g) {
                      if (o) {
                        for (; m; ) {
                          for (p = t; (p = p[m]); )
                            if (
                              s
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          f = m = "only" === e && !f && "nextSibling";
                        }
                        return !0;
                      }
                      if (((f = [a ? g.firstChild : g.lastChild]), a && y)) {
                        for (
                          d = g[R] || (g[R] = {}),
                            c = d[e] || [],
                            h = c[0] === H && c[1],
                            u = c[0] === H && c[2],
                            p = h && g.childNodes[h];
                          (p = (++h && p && p[m]) || (u = h = 0) || f.pop());

                        )
                          if (1 === p.nodeType && ++u && p === t) {
                            d[e] = [H, h, u];
                            break;
                          }
                      } else if (
                        y &&
                        (c = (t[R] || (t[R] = {}))[e]) &&
                        c[0] === H
                      )
                        u = c[1];
                      else
                        for (
                          ;
                          (p = (++h && p && p[m]) || (u = h = 0) || f.pop()) &&
                          ((s
                            ? p.nodeName.toLowerCase() !== v
                            : 1 !== p.nodeType) ||
                            !++u ||
                            (y && ((p[R] || (p[R] = {}))[e] = [H, u]),
                            p !== t));

                        );
                      return (u -= r), u === n || (0 === u % n && u / n >= 0);
                    }
                  };
            },
            PSEUDO: function(e, t) {
              var n,
                o =
                  k.pseudos[e] ||
                  k.setFilters[e.toLowerCase()] ||
                  i.error("unsupported pseudo: " + e);
              return o[R]
                ? o(t)
                : o.length > 1
                ? ((n = [e, e, "", t]),
                  k.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function(e, i) {
                        for (var n, r = o(e, t), a = r.length; a--; )
                          (n = it.call(e, r[a])), (e[n] = !(i[n] = r[a]));
                      })
                    : function(e) {
                        return o(e, 0, n);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function(e) {
              var t = [],
                i = [],
                n = S(e.replace(dt, "$1"));
              return n[R]
                ? r(function(e, t, i, r) {
                    for (var o, a = n(e, null, r, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function(e, r, o) {
                    return (t[0] = e), n(t, null, o, i), !i.pop();
                  };
            }),
            has: r(function(e) {
              return function(t) {
                return i(e, t).length > 0;
              };
            }),
            contains: r(function(e) {
              return function(t) {
                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
              };
            }),
            lang: r(function(e) {
              return (
                gt.test(e || "") || i.error("unsupported lang: " + e),
                (e = e.replace(_t, Tt).toLowerCase()),
                function(t) {
                  var i;
                  do
                    if (
                      (i = j
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (i = i.toLowerCase()),
                        i === e || 0 === i.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function(t) {
              var i = e.location && e.location.hash;
              return i && i.slice(1) === t.id;
            },
            root: function(e) {
              return e === E;
            },
            focus: function(e) {
              return (
                e === I.activeElement &&
                (!I.hasFocus || I.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function(e) {
              return e.disabled === !1;
            },
            disabled: function(e) {
              return e.disabled === !0;
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function(e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                  return !1;
              return !0;
            },
            parent: function(e) {
              return !k.pseudos.empty(e);
            },
            header: function(e) {
              return wt.test(e.nodeName);
            },
            input: function(e) {
              return xt.test(e.nodeName);
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function(e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  t.toLowerCase() === e.type)
              );
            },
            first: d(function() {
              return [0];
            }),
            last: d(function(e, t) {
              return [t - 1];
            }),
            eq: d(function(e, t, i) {
              return [0 > i ? i + t : i];
            }),
            even: d(function(e, t) {
              for (var i = 0; t > i; i += 2) e.push(i);
              return e;
            }),
            odd: d(function(e, t) {
              for (var i = 1; t > i; i += 2) e.push(i);
              return e;
            }),
            lt: d(function(e, t, i) {
              for (var n = 0 > i ? i + t : i; --n >= 0; ) e.push(n);
              return e;
            }),
            gt: d(function(e, t, i) {
              for (var n = 0 > i ? i + t : i; t > ++n; ) e.push(n);
              return e;
            }),
          },
        }),
        (k.pseudos.nth = k.pseudos.eq);
      for ($ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        k.pseudos[$] = l($);
      for ($ in { submit: !0, reset: !0 }) k.pseudos[$] = c($);
      (p.prototype = k.filters = k.pseudos),
        (k.setFilters = new p()),
        (S = i.compile = function(e, t) {
          var i,
            n = [],
            r = [],
            o = X[e + " "];
          if (!o) {
            for (t || (t = u(e)), i = t.length; i--; )
              (o = y(t[i])), o[R] ? n.push(o) : r.push(o);
            o = X(e, b(r, n));
          }
          return o;
        }),
        (_.sortStable =
          R.split("")
            .sort(Y)
            .join("") === R),
        (_.detectDuplicates = U),
        A(),
        (_.sortDetached = o(function(e) {
          return 1 & e.compareDocumentPosition(I.createElement("div"));
        })),
        o(function(e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          a("type|href|height|width", function(e, i, n) {
            return n
              ? t
              : e.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2);
          }),
        (_.attributes &&
          o(function(e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          a("value", function(e, i, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? t
              : e.defaultValue;
          }),
        o(function(e) {
          return null == e.getAttribute("disabled");
        }) ||
          a(nt, function(e, i, n) {
            var r;
            return n
              ? t
              : (r = e.getAttributeNode(i)) && r.specified
              ? r.value
              : e[i] === !0
              ? i.toLowerCase()
              : null;
          }),
        (ot.find = i),
        (ot.expr = i.selectors),
        (ot.expr[":"] = ot.expr.pseudos),
        (ot.unique = i.uniqueSort),
        (ot.text = i.getText),
        (ot.isXMLDoc = i.isXML),
        (ot.contains = i.contains);
    })(e);
  var ft = {};
  (ot.Callbacks = function(e) {
    e = "string" == typeof e ? ft[e] || n(e) : ot.extend({}, e);
    var i,
      r,
      o,
      a,
      s,
      l,
      c = [],
      d = !e.once && [],
      p = function(t) {
        for (
          i = e.memory && t, r = !0, l = a || 0, a = 0, s = c.length, o = !0;
          c && s > l;
          l++
        )
          if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            i = !1;
            break;
          }
        (o = !1),
          c && (d ? d.length && p(d.shift()) : i ? (c = []) : u.disable());
      },
      u = {
        add: function() {
          if (c) {
            var t = c.length;
            !(function n(t) {
              ot.each(t, function(t, i) {
                var r = ot.type(i);
                "function" === r
                  ? (e.unique && u.has(i)) || c.push(i)
                  : i && i.length && "string" !== r && n(i);
              });
            })(arguments),
              o ? (s = c.length) : i && ((a = t), p(i));
          }
          return this;
        },
        remove: function() {
          return (
            c &&
              ot.each(arguments, function(e, t) {
                for (var i; (i = ot.inArray(t, c, i)) > -1; )
                  c.splice(i, 1), o && (s >= i && s--, l >= i && l--);
              }),
            this
          );
        },
        has: function(e) {
          return e ? ot.inArray(e, c) > -1 : !(!c || !c.length);
        },
        empty: function() {
          return (c = []), (s = 0), this;
        },
        disable: function() {
          return (c = d = i = t), this;
        },
        disabled: function() {
          return !c;
        },
        lock: function() {
          return (d = t), i || u.disable(), this;
        },
        locked: function() {
          return !d;
        },
        fireWith: function(e, t) {
          return (
            !c ||
              (r && !d) ||
              ((t = t || []),
              (t = [e, t.slice ? t.slice() : t]),
              o ? d.push(t) : p(t)),
            this
          );
        },
        fire: function() {
          return u.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!r;
        },
      };
    return u;
  }),
    ot.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ot.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function() {
              return i;
            },
            always: function() {
              return r.done(arguments).fail(arguments), this;
            },
            then: function() {
              var e = arguments;
              return ot
                .Deferred(function(i) {
                  ot.each(t, function(t, o) {
                    var a = o[0],
                      s = ot.isFunction(e[t]) && e[t];
                    r[o[1]](function() {
                      var e = s && s.apply(this, arguments);
                      e && ot.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[a + "With"](
                            this === n ? i.promise() : this,
                            s ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function(e) {
              return null != e ? ot.extend(e, n) : n;
            },
          },
          r = {};
        return (
          (n.pipe = n.then),
          ot.each(t, function(e, o) {
            var a = o[2],
              s = o[3];
            (n[o[1]] = a.add),
              s &&
                a.add(
                  function() {
                    i = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (r[o[0]] = function() {
                return r[o[0] + "With"](this === r ? n : this, arguments), this;
              }),
              (r[o[0] + "With"] = a.fireWith);
          }),
          n.promise(r),
          e && e.call(r, r),
          r
        );
      },
      when: function(e) {
        var t,
          i,
          n,
          r = 0,
          o = et.call(arguments),
          a = o.length,
          s = 1 !== a || (e && ot.isFunction(e.promise)) ? a : 0,
          l = 1 === s ? e : ot.Deferred(),
          c = function(e, i, n) {
            return function(r) {
              (i[e] = this),
                (n[e] = arguments.length > 1 ? et.call(arguments) : r),
                n === t ? l.notifyWith(i, n) : --s || l.resolveWith(i, n);
            };
          };
        if (a > 1)
          for (t = Array(a), i = Array(a), n = Array(a); a > r; r++)
            o[r] && ot.isFunction(o[r].promise)
              ? o[r]
                  .promise()
                  .done(c(r, n, o))
                  .fail(l.reject)
                  .progress(c(r, i, t))
              : --s;
        return s || l.resolveWith(n, o), l.promise();
      },
    }),
    (ot.support = (function(t) {
      var i = X.createElement("input"),
        n = X.createDocumentFragment(),
        r = X.createElement("div"),
        o = X.createElement("select"),
        a = o.appendChild(X.createElement("option"));
      return i.type
        ? ((i.type = "checkbox"),
          (t.checkOn = "" !== i.value),
          (t.optSelected = a.selected),
          (t.reliableMarginRight = !0),
          (t.boxSizingReliable = !0),
          (t.pixelPosition = !1),
          (i.checked = !0),
          (t.noCloneChecked = i.cloneNode(!0).checked),
          (o.disabled = !0),
          (t.optDisabled = !a.disabled),
          (i = X.createElement("input")),
          (i.value = "t"),
          (i.type = "radio"),
          (t.radioValue = "t" === i.value),
          i.setAttribute("checked", "t"),
          i.setAttribute("name", "t"),
          n.appendChild(i),
          (t.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.focusinBubbles = "onfocusin" in e),
          (r.style.backgroundClip = "content-box"),
          (r.cloneNode(!0).style.backgroundClip = ""),
          (t.clearCloneStyle = "content-box" === r.style.backgroundClip),
          ot(function() {
            var i,
              n,
              o =
                "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
              a = X.getElementsByTagName("body")[0];
            a &&
              ((i = X.createElement("div")),
              (i.style.cssText =
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
              a.appendChild(i).appendChild(r),
              (r.innerHTML = ""),
              (r.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"),
              ot.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function() {
                t.boxSizing = 4 === r.offsetWidth;
              }),
              e.getComputedStyle &&
                ((t.pixelPosition =
                  "1%" !== (e.getComputedStyle(r, null) || {}).top),
                (t.boxSizingReliable =
                  "4px" ===
                  (e.getComputedStyle(r, null) || { width: "4px" }).width),
                (n = r.appendChild(X.createElement("div"))),
                (n.style.cssText = r.style.cssText = o),
                (n.style.marginRight = n.style.width = "0"),
                (r.style.width = "1px"),
                (t.reliableMarginRight = !parseFloat(
                  (e.getComputedStyle(n, null) || {}).marginRight
                ))),
              a.removeChild(i));
          }),
          t)
        : t;
    })({}));
  var mt,
    gt,
    vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    yt = /([A-Z])/g;
  (r.uid = 1),
    (r.accepts = function(e) {
      return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
    }),
    (r.prototype = {
      key: function(e) {
        if (!r.accepts(e)) return 0;
        var t = {},
          i = e[this.expando];
        if (!i) {
          i = r.uid++;
          try {
            (t[this.expando] = { value: i }), Object.defineProperties(e, t);
          } catch (n) {
            (t[this.expando] = i), ot.extend(e, t);
          }
        }
        return this.cache[i] || (this.cache[i] = {}), i;
      },
      set: function(e, t, i) {
        var n,
          r = this.key(e),
          o = this.cache[r];
        if ("string" == typeof t) o[t] = i;
        else if (ot.isEmptyObject(o)) ot.extend(this.cache[r], t);
        else for (n in t) o[n] = t[n];
        return o;
      },
      get: function(e, i) {
        var n = this.cache[this.key(e)];
        return i === t ? n : n[i];
      },
      access: function(e, i, n) {
        var r;
        return i === t || (i && "string" == typeof i && n === t)
          ? ((r = this.get(e, i)), r !== t ? r : this.get(e, ot.camelCase(i)))
          : (this.set(e, i, n), n !== t ? n : i);
      },
      remove: function(e, i) {
        var n,
          r,
          o,
          a = this.key(e),
          s = this.cache[a];
        if (i === t) this.cache[a] = {};
        else {
          ot.isArray(i)
            ? (r = i.concat(i.map(ot.camelCase)))
            : ((o = ot.camelCase(i)),
              i in s
                ? (r = [i, o])
                : ((r = o), (r = r in s ? [r] : r.match(st) || []))),
            (n = r.length);
          for (; n--; ) delete s[r[n]];
        }
      },
      hasData: function(e) {
        return !ot.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function(e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    }),
    (mt = new r()),
    (gt = new r()),
    ot.extend({
      acceptData: r.accepts,
      hasData: function(e) {
        return mt.hasData(e) || gt.hasData(e);
      },
      data: function(e, t, i) {
        return mt.access(e, t, i);
      },
      removeData: function(e, t) {
        mt.remove(e, t);
      },
      _data: function(e, t, i) {
        return gt.access(e, t, i);
      },
      _removeData: function(e, t) {
        gt.remove(e, t);
      },
    }),
    ot.fn.extend({
      data: function(e, i) {
        var n,
          r,
          a = this[0],
          s = 0,
          l = null;
        if (e === t) {
          if (
            this.length &&
            ((l = mt.get(a)), 1 === a.nodeType && !gt.get(a, "hasDataAttrs"))
          ) {
            for (n = a.attributes; n.length > s; s++)
              (r = n[s].name),
                0 === r.indexOf("data-") &&
                  ((r = ot.camelCase(r.slice(5))), o(a, r, l[r]));
            gt.set(a, "hasDataAttrs", !0);
          }
          return l;
        }
        return "object" == typeof e
          ? this.each(function() {
              mt.set(this, e);
            })
          : ot.access(
              this,
              function(i) {
                var n,
                  r = ot.camelCase(e);
                if (a && i === t) {
                  if (((n = mt.get(a, e)), n !== t)) return n;
                  if (((n = mt.get(a, r)), n !== t)) return n;
                  if (((n = o(a, r, t)), n !== t)) return n;
                } else
                  this.each(function() {
                    var n = mt.get(this, r);
                    mt.set(this, r, i),
                      -1 !== e.indexOf("-") && n !== t && mt.set(this, e, i);
                  });
              },
              null,
              i,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(e) {
        return this.each(function() {
          mt.remove(this, e);
        });
      },
    }),
    ot.extend({
      queue: function(e, i, n) {
        var r;
        return e
          ? ((i = (i || "fx") + "queue"),
            (r = gt.get(e, i)),
            n &&
              (!r || ot.isArray(n)
                ? (r = gt.access(e, i, ot.makeArray(n)))
                : r.push(n)),
            r || [])
          : t;
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var i = ot.queue(e, t),
          n = i.length,
          r = i.shift(),
          o = ot._queueHooks(e, t),
          a = function() {
            ot.dequeue(e, t);
          };
        "inprogress" === r && ((r = i.shift()), n--),
          r &&
            ("fx" === t && i.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
          !n && o && o.empty.fire();
      },
      _queueHooks: function(e, t) {
        var i = t + "queueHooks";
        return (
          gt.get(e, i) ||
          gt.access(e, i, {
            empty: ot.Callbacks("once memory").add(function() {
              gt.remove(e, [t + "queue", i]);
            }),
          })
        );
      },
    }),
    ot.fn.extend({
      queue: function(e, i) {
        var n = 2;
        return (
          "string" != typeof e && ((i = e), (e = "fx"), n--),
          n > arguments.length
            ? ot.queue(this[0], e)
            : i === t
            ? this
            : this.each(function() {
                var t = ot.queue(this, e, i);
                ot._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && ot.dequeue(this, e);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          ot.dequeue(this, e);
        });
      },
      delay: function(e, t) {
        return (
          (e = ot.fx ? ot.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function(t, i) {
            var n = setTimeout(t, e);
            i.stop = function() {
              clearTimeout(n);
            };
          })
        );
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      promise: function(e, i) {
        var n,
          r = 1,
          o = ot.Deferred(),
          a = this,
          s = this.length,
          l = function() {
            --r || o.resolveWith(a, [a]);
          };
        for ("string" != typeof e && ((i = e), (e = t)), e = e || "fx"; s--; )
          (n = gt.get(a[s], e + "queueHooks")),
            n && n.empty && (r++, n.empty.add(l));
        return l(), o.promise(i);
      },
    });
  var bt,
    xt,
    wt = /[\t\r\n\f]/g,
    $t = /\r/g,
    _t = /^(?:input|select|textarea|button)$/i;
  ot.fn.extend({
    attr: function(e, t) {
      return ot.access(this, ot.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        ot.removeAttr(this, e);
      });
    },
    prop: function(e, t) {
      return ot.access(this, ot.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[ot.propFix[e] || e];
      });
    },
    addClass: function(e) {
      var t,
        i,
        n,
        r,
        o,
        a = 0,
        s = this.length,
        l = "string" == typeof e && e;
      if (ot.isFunction(e))
        return this.each(function(t) {
          ot(this).addClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || "").match(st) || []; s > a; a++)
          if (
            ((i = this[a]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(wt, " ") : " ")))
          ) {
            for (o = 0; (r = t[o++]); )
              0 > n.indexOf(" " + r + " ") && (n += r + " ");
            i.className = ot.trim(n);
          }
      return this;
    },
    removeClass: function(e) {
      var t,
        i,
        n,
        r,
        o,
        a = 0,
        s = this.length,
        l = 0 === arguments.length || ("string" == typeof e && e);
      if (ot.isFunction(e))
        return this.each(function(t) {
          ot(this).removeClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || "").match(st) || []; s > a; a++)
          if (
            ((i = this[a]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(wt, " ") : "")))
          ) {
            for (o = 0; (r = t[o++]); )
              for (; n.indexOf(" " + r + " ") >= 0; )
                n = n.replace(" " + r + " ", " ");
            i.className = e ? ot.trim(n) : "";
          }
      return this;
    },
    toggleClass: function(e, t) {
      var i = typeof e;
      return "boolean" == typeof t && "string" === i
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : ot.isFunction(e)
        ? this.each(function(i) {
            ot(this).toggleClass(e.call(this, i, this.className, t), t);
          })
        : this.each(function() {
            if ("string" === i)
              for (
                var t, n = 0, r = ot(this), o = e.match(st) || [];
                (t = o[n++]);

              )
                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
            else
              (i === B || "boolean" === i) &&
                (this.className &&
                  gt.set(this, "__className__", this.className),
                (this.className =
                  this.className || e === !1
                    ? ""
                    : gt.get(this, "__className__") || ""));
          });
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
        if (
          1 === this[i].nodeType &&
          (" " + this[i].className + " ").replace(wt, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
    val: function(e) {
      var i,
        n,
        r,
        o = this[0];
      return arguments.length
        ? ((r = ot.isFunction(e)),
          this.each(function(n) {
            var o;
            1 === this.nodeType &&
              ((o = r ? e.call(this, n, ot(this).val()) : e),
              null == o
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : ot.isArray(o) &&
                  (o = ot.map(o, function(e) {
                    return null == e ? "" : e + "";
                  })),
              (i =
                ot.valHooks[this.type] ||
                ot.valHooks[this.nodeName.toLowerCase()]),
              (i && "set" in i && i.set(this, o, "value") !== t) ||
                (this.value = o));
          }))
        : o
        ? ((i = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()]),
          i && "get" in i && (n = i.get(o, "value")) !== t
            ? n
            : ((n = o.value),
              "string" == typeof n ? n.replace($t, "") : null == n ? "" : n))
        : void 0;
    },
  }),
    ot.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text;
          },
        },
        select: {
          get: function(e) {
            for (
              var t,
                i,
                n = e.options,
                r = e.selectedIndex,
                o = "select-one" === e.type || 0 > r,
                a = o ? null : [],
                s = o ? r + 1 : n.length,
                l = 0 > r ? s : o ? r : 0;
              s > l;
              l++
            )
              if (
                ((i = n[l]),
                !(
                  (!i.selected && l !== r) ||
                  (ot.support.optDisabled
                    ? i.disabled
                    : null !== i.getAttribute("disabled")) ||
                  (i.parentNode.disabled &&
                    ot.nodeName(i.parentNode, "optgroup"))
                ))
              ) {
                if (((t = ot(i).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function(e, t) {
            for (
              var i, n, r = e.options, o = ot.makeArray(t), a = r.length;
              a--;

            )
              (n = r[a]),
                (n.selected = ot.inArray(ot(n).val(), o) >= 0) && (i = !0);
            return i || (e.selectedIndex = -1), o;
          },
        },
      },
      attr: function(e, i, n) {
        var r,
          o,
          a = e.nodeType;
        return e && 3 !== a && 8 !== a && 2 !== a
          ? typeof e.getAttribute === B
            ? ot.prop(e, i, n)
            : ((1 === a && ot.isXMLDoc(e)) ||
                ((i = i.toLowerCase()),
                (r =
                  ot.attrHooks[i] || (ot.expr.match.bool.test(i) ? xt : bt))),
              n === t
                ? r && "get" in r && null !== (o = r.get(e, i))
                  ? o
                  : ((o = ot.find.attr(e, i)), null == o ? t : o)
                : null !== n
                ? r && "set" in r && (o = r.set(e, n, i)) !== t
                  ? o
                  : (e.setAttribute(i, n + ""), n)
                : (ot.removeAttr(e, i), t))
          : void 0;
      },
      removeAttr: function(e, t) {
        var i,
          n,
          r = 0,
          o = t && t.match(st);
        if (o && 1 === e.nodeType)
          for (; (i = o[r++]); )
            (n = ot.propFix[i] || i),
              ot.expr.match.bool.test(i) && (e[n] = !1),
              e.removeAttribute(i);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (
              !ot.support.radioValue &&
              "radio" === t &&
              ot.nodeName(e, "input")
            ) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t;
            }
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
      prop: function(e, i, n) {
        var r,
          o,
          a,
          s = e.nodeType;
        return e && 3 !== s && 8 !== s && 2 !== s
          ? ((a = 1 !== s || !ot.isXMLDoc(e)),
            a && ((i = ot.propFix[i] || i), (o = ot.propHooks[i])),
            n !== t
              ? o && "set" in o && (r = o.set(e, n, i)) !== t
                ? r
                : (e[i] = n)
              : o && "get" in o && null !== (r = o.get(e, i))
              ? r
              : e[i])
          : void 0;
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            return e.hasAttribute("tabindex") || _t.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    (xt = {
      set: function(e, t, i) {
        return t === !1 ? ot.removeAttr(e, i) : e.setAttribute(i, i), i;
      },
    }),
    ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, i) {
      var n = ot.expr.attrHandle[i] || ot.find.attr;
      ot.expr.attrHandle[i] = function(e, i, r) {
        var o = ot.expr.attrHandle[i],
          a = r
            ? t
            : (ot.expr.attrHandle[i] = t) != n(e, i, r)
            ? i.toLowerCase()
            : null;
        return (ot.expr.attrHandle[i] = o), a;
      };
    }),
    ot.support.optSelected ||
      (ot.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
      }),
    ot.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function() {
        ot.propFix[this.toLowerCase()] = this;
      }
    ),
    ot.each(["radio", "checkbox"], function() {
      (ot.valHooks[this] = {
        set: function(e, i) {
          return ot.isArray(i)
            ? (e.checked = ot.inArray(ot(e).val(), i) >= 0)
            : t;
        },
      }),
        ot.support.checkOn ||
          (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Tt = /^key/,
    kt = /^(?:mouse|contextmenu)|click/,
    Ct = /^(?:focusinfocus|focusoutblur)$/,
    Ft = /^([^.]*)(?:\.(.+)|)$/;
  (ot.event = {
    global: {},
    add: function(e, i, n, r, o) {
      var a,
        s,
        l,
        c,
        d,
        p,
        u,
        h,
        f,
        m,
        g,
        v = gt.get(e);
      if (v) {
        for (
          n.handler && ((a = n), (n = a.handler), (o = a.selector)),
            n.guid || (n.guid = ot.guid++),
            (c = v.events) || (c = v.events = {}),
            (s = v.handle) ||
              ((s = v.handle = function(e) {
                return typeof ot === B || (e && ot.event.triggered === e.type)
                  ? t
                  : ot.event.dispatch.apply(s.elem, arguments);
              }),
              (s.elem = e)),
            i = (i || "").match(st) || [""],
            d = i.length;
          d--;

        )
          (l = Ft.exec(i[d]) || []),
            (f = g = l[1]),
            (m = (l[2] || "").split(".").sort()),
            f &&
              ((u = ot.event.special[f] || {}),
              (f = (o ? u.delegateType : u.bindType) || f),
              (u = ot.event.special[f] || {}),
              (p = ot.extend(
                {
                  type: f,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && ot.expr.match.needsContext.test(o),
                  namespace: m.join("."),
                },
                a
              )),
              (h = c[f]) ||
                ((h = c[f] = []),
                (h.delegateCount = 0),
                (u.setup && u.setup.call(e, r, m, s) !== !1) ||
                  (e.addEventListener && e.addEventListener(f, s, !1))),
              u.add &&
                (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)),
              o ? h.splice(h.delegateCount++, 0, p) : h.push(p),
              (ot.event.global[f] = !0));
        e = null;
      }
    },
    remove: function(e, t, i, n, r) {
      var o,
        a,
        s,
        l,
        c,
        d,
        p,
        u,
        h,
        f,
        m,
        g = gt.hasData(e) && gt.get(e);
      if (g && (l = g.events)) {
        for (t = (t || "").match(st) || [""], c = t.length; c--; )
          if (
            ((s = Ft.exec(t[c]) || []),
            (h = m = s[1]),
            (f = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              p = ot.event.special[h] || {},
                h = (n ? p.delegateType : p.bindType) || h,
                u = l[h] || [],
                s =
                  s[2] &&
                  RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = u.length;
              o--;

            )
              (d = u[o]),
                (!r && m !== d.origType) ||
                  (i && i.guid !== d.guid) ||
                  (s && !s.test(d.namespace)) ||
                  (n && n !== d.selector && ("**" !== n || !d.selector)) ||
                  (u.splice(o, 1),
                  d.selector && u.delegateCount--,
                  p.remove && p.remove.call(e, d));
            a &&
              !u.length &&
              ((p.teardown && p.teardown.call(e, f, g.handle) !== !1) ||
                ot.removeEvent(e, h, g.handle),
              delete l[h]);
          } else for (h in l) ot.event.remove(e, h + t[c], i, n, !0);
        ot.isEmptyObject(l) && (delete g.handle, gt.remove(e, "events"));
      }
    },
    trigger: function(i, n, r, o) {
      var a,
        s,
        l,
        c,
        d,
        p,
        u,
        h = [r || X],
        f = nt.call(i, "type") ? i.type : i,
        m = nt.call(i, "namespace") ? i.namespace.split(".") : [];
      if (
        ((s = l = r = r || X),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Ct.test(f + ot.event.triggered) &&
          (f.indexOf(".") >= 0 &&
            ((m = f.split(".")), (f = m.shift()), m.sort()),
          (d = 0 > f.indexOf(":") && "on" + f),
          (i = i[ot.expando] ? i : new ot.Event(f, "object" == typeof i && i)),
          (i.isTrigger = o ? 2 : 3),
          (i.namespace = m.join(".")),
          (i.namespace_re = i.namespace
            ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (i.result = t),
          i.target || (i.target = r),
          (n = null == n ? [i] : ot.makeArray(n, [i])),
          (u = ot.event.special[f] || {}),
          o || !u.trigger || u.trigger.apply(r, n) !== !1))
      ) {
        if (!o && !u.noBubble && !ot.isWindow(r)) {
          for (
            c = u.delegateType || f, Ct.test(c + f) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            h.push(s), (l = s);
          l === (r.ownerDocument || X) &&
            h.push(l.defaultView || l.parentWindow || e);
        }
        for (a = 0; (s = h[a++]) && !i.isPropagationStopped(); )
          (i.type = a > 1 ? c : u.bindType || f),
            (p = (gt.get(s, "events") || {})[i.type] && gt.get(s, "handle")),
            p && p.apply(s, n),
            (p = d && s[d]),
            p &&
              ot.acceptData(s) &&
              p.apply &&
              p.apply(s, n) === !1 &&
              i.preventDefault();
        return (
          (i.type = f),
          o ||
            i.isDefaultPrevented() ||
            (u._default && u._default.apply(h.pop(), n) !== !1) ||
            !ot.acceptData(r) ||
            (d &&
              ot.isFunction(r[f]) &&
              !ot.isWindow(r) &&
              ((l = r[d]),
              l && (r[d] = null),
              (ot.event.triggered = f),
              r[f](),
              (ot.event.triggered = t),
              l && (r[d] = l))),
          i.result
        );
      }
    },
    dispatch: function(e) {
      e = ot.event.fix(e);
      var i,
        n,
        r,
        o,
        a,
        s = [],
        l = et.call(arguments),
        c = (gt.get(this, "events") || {})[e.type] || [],
        d = ot.event.special[e.type] || {};
      if (
        ((l[0] = e),
        (e.delegateTarget = this),
        !d.preDispatch || d.preDispatch.call(this, e) !== !1)
      ) {
        for (
          s = ot.event.handlers.call(this, e, c), i = 0;
          (o = s[i++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(a.namespace)) &&
              ((e.handleObj = a),
              (e.data = a.data),
              (r = (
                (ot.event.special[a.origType] || {}).handle || a.handler
              ).apply(o.elem, l)),
              r !== t &&
                (e.result = r) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, i) {
      var n,
        r,
        o,
        a,
        s = [],
        l = i.delegateCount,
        c = e.target;
      if (l && c.nodeType && (!e.button || "click" !== e.type))
        for (; c !== this; c = c.parentNode || this)
          if (c.disabled !== !0 || "click" !== e.type) {
            for (r = [], n = 0; l > n; n++)
              (a = i[n]),
                (o = a.selector + " "),
                r[o] === t &&
                  (r[o] = a.needsContext
                    ? ot(o, this).index(c) >= 0
                    : ot.find(o, this, null, [c]).length),
                r[o] && r.push(a);
            r.length && s.push({ elem: c, handlers: r });
          }
      return i.length > l && s.push({ elem: this, handlers: i.slice(l) }), s;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function(e, i) {
        var n,
          r,
          o,
          a = i.button;
        return (
          null == e.pageX &&
            null != i.clientX &&
            ((n = e.target.ownerDocument || X),
            (r = n.documentElement),
            (o = n.body),
            (e.pageX =
              i.clientX +
              ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY =
              i.clientY +
              ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
              ((r && r.clientTop) || (o && o.clientTop) || 0))),
          e.which ||
            a === t ||
            (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
          e
        );
      },
    },
    fix: function(e) {
      if (e[ot.expando]) return e;
      var t,
        i,
        n,
        r = e.type,
        o = e,
        a = this.fixHooks[r];
      for (
        a ||
          (this.fixHooks[r] = a = kt.test(r)
            ? this.mouseHooks
            : Tt.test(r)
            ? this.keyHooks
            : {}),
          n = a.props ? this.props.concat(a.props) : this.props,
          e = new ot.Event(o),
          t = n.length;
        t--;

      )
        (i = n[t]), (e[i] = o[i]);
      return (
        e.target || (e.target = X),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        a.filter ? a.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          return this !== l() && this.focus ? (this.focus(), !1) : t;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function() {
          return this === l() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type &&
            this.click &&
            ot.nodeName(this, "input")
            ? (this.click(), !1)
            : t;
        },
        _default: function(e) {
          return ot.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function(e, t, i, n) {
      var r = ot.extend(new ot.Event(), i, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      n ? ot.event.trigger(r, null, t) : ot.event.dispatch.call(t, r),
        r.isDefaultPrevented() && i.preventDefault();
    },
  }),
    (ot.removeEvent = function(e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i, !1);
    }),
    (ot.Event = function(e, i) {
      return this instanceof ot.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? a
                  : s))
            : (this.type = e),
          i && ot.extend(this, i),
          (this.timeStamp = (e && e.timeStamp) || ot.now()),
          (this[ot.expando] = !0),
          t)
        : new ot.Event(e, i);
    }),
    (ot.Event.prototype = {
      isDefaultPrevented: s,
      isPropagationStopped: s,
      isImmediatePropagationStopped: s,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = a),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = a),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        (this.isImmediatePropagationStopped = a), this.stopPropagation();
      },
    }),
    ot.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(
      e,
      t
    ) {
      ot.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var i,
            n = this,
            r = e.relatedTarget,
            o = e.handleObj;
          return (
            (!r || (r !== n && !ot.contains(n, r))) &&
              ((e.type = o.origType),
              (i = o.handler.apply(this, arguments)),
              (e.type = t)),
            i
          );
        },
      };
    }),
    ot.support.focusinBubbles ||
      ot.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var i = 0,
          n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e), !0);
          };
        ot.event.special[t] = {
          setup: function() {
            0 === i++ && X.addEventListener(e, n, !0);
          },
          teardown: function() {
            0 === --i && X.removeEventListener(e, n, !0);
          },
        };
      }),
    ot.fn.extend({
      on: function(e, i, n, r, o) {
        var a, l;
        if ("object" == typeof e) {
          "string" != typeof i && ((n = n || i), (i = t));
          for (l in e) this.on(l, i, n, e[l], o);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = i), (n = i = t))
            : null == r &&
              ("string" == typeof i
                ? ((r = n), (n = t))
                : ((r = n), (n = i), (i = t))),
          r === !1)
        )
          r = s;
        else if (!r) return this;
        return (
          1 === o &&
            ((a = r),
            (r = function(e) {
              return ot().off(e), a.apply(this, arguments);
            }),
            (r.guid = a.guid || (a.guid = ot.guid++))),
          this.each(function() {
            ot.event.add(this, e, r, n, i);
          })
        );
      },
      one: function(e, t, i, n) {
        return this.on(e, t, i, n, 1);
      },
      off: function(e, i, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ot(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, i, e[o]);
          return this;
        }
        return (
          (i === !1 || "function" == typeof i) && ((n = i), (i = t)),
          n === !1 && (n = s),
          this.each(function() {
            ot.event.remove(this, e, n, i);
          })
        );
      },
      trigger: function(e, t) {
        return this.each(function() {
          ot.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, i) {
        var n = this[0];
        return n ? ot.event.trigger(e, i, n, !0) : t;
      },
    });
  var St = /^.[^:#\[\.,]*$/,
    Pt = /^(?:parents|prev(?:Until|All))/,
    Dt = ot.expr.match.needsContext,
    At = { children: !0, contents: !0, next: !0, prev: !0 };
  ot.fn.extend({
    find: function(e) {
      var t,
        i = [],
        n = this,
        r = n.length;
      if ("string" != typeof e)
        return this.pushStack(
          ot(e).filter(function() {
            for (t = 0; r > t; t++) if (ot.contains(n[t], this)) return !0;
          })
        );
      for (t = 0; r > t; t++) ot.find(e, n[t], i);
      return (
        (i = this.pushStack(r > 1 ? ot.unique(i) : i)),
        (i.selector = this.selector ? this.selector + " " + e : e),
        i
      );
    },
    has: function(e) {
      var t = ot(e, this),
        i = t.length;
      return this.filter(function() {
        for (var e = 0; i > e; e++) if (ot.contains(this, t[e])) return !0;
      });
    },
    not: function(e) {
      return this.pushStack(d(this, e || [], !0));
    },
    filter: function(e) {
      return this.pushStack(d(this, e || [], !1));
    },
    is: function(e) {
      return !!d(this, "string" == typeof e && Dt.test(e) ? ot(e) : e || [], !1)
        .length;
    },
    closest: function(e, t) {
      for (
        var i,
          n = 0,
          r = this.length,
          o = [],
          a = Dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0;
        r > n;
        n++
      )
        for (i = this[n]; i && i !== t; i = i.parentNode)
          if (
            11 > i.nodeType &&
            (a
              ? a.index(i) > -1
              : 1 === i.nodeType && ot.find.matchesSelector(i, e))
          ) {
            i = o.push(i);
            break;
          }
      return this.pushStack(o.length > 1 ? ot.unique(o) : o);
    },
    index: function(e) {
      return e
        ? "string" == typeof e
          ? tt.call(ot(e), this[0])
          : tt.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      var i =
          "string" == typeof e
            ? ot(e, t)
            : ot.makeArray(e && e.nodeType ? [e] : e),
        n = ot.merge(this.get(), i);
      return this.pushStack(ot.unique(n));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ot.each(
      {
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
          return ot.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, i) {
          return ot.dir(e, "parentNode", i);
        },
        next: function(e) {
          return c(e, "nextSibling");
        },
        prev: function(e) {
          return c(e, "previousSibling");
        },
        nextAll: function(e) {
          return ot.dir(e, "nextSibling");
        },
        prevAll: function(e) {
          return ot.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, i) {
          return ot.dir(e, "nextSibling", i);
        },
        prevUntil: function(e, t, i) {
          return ot.dir(e, "previousSibling", i);
        },
        siblings: function(e) {
          return ot.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return ot.sibling(e.firstChild);
        },
        contents: function(e) {
          return e.contentDocument || ot.merge([], e.childNodes);
        },
      },
      function(e, t) {
        ot.fn[e] = function(i, n) {
          var r = ot.map(this, t, i);
          return (
            "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (r = ot.filter(n, r)),
            this.length > 1 &&
              (At[e] || ot.unique(r), Pt.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    ),
    ot.extend({
      filter: function(e, t, i) {
        var n = t[0];
        return (
          i && (e = ":not(" + e + ")"),
          1 === t.length && 1 === n.nodeType
            ? ot.find.matchesSelector(n, e)
              ? [n]
              : []
            : ot.find.matches(
                e,
                ot.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      },
      dir: function(e, i, n) {
        for (var r = [], o = n !== t; (e = e[i]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (o && ot(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      sibling: function(e, t) {
        for (var i = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && i.push(e);
        return i;
      },
    });
  var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Et = /<([\w:]+)/,
    jt = /<|&#?\w+;/,
    Mt = /<(?:script|style|link)/i,
    Ot = /^(?:checkbox|radio)$/i,
    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Lt = /^$|\/(?:java|ecma)script/i,
    Rt = /^true\/(.*)/,
    zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ht = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Ht.optgroup = Ht.option),
    (Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead),
    (Ht.th = Ht.td),
    ot.fn.extend({
      text: function(e) {
        return ot.access(
          this,
          function(e) {
            return e === t
              ? ot.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || X).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return this.domManip(arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = p(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function() {
        return this.domManip(arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = p(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function(e, t) {
        for (
          var i, n = e ? ot.filter(e, this) : this, r = 0;
          null != (i = n[r]);
          r++
        )
          t || 1 !== i.nodeType || ot.cleanData(g(i)),
            i.parentNode &&
              (t && ot.contains(i.ownerDocument, i) && f(g(i, "script")),
              i.parentNode.removeChild(i));
        return this;
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ot.cleanData(g(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null == e ? !1 : e),
          (t = null == t ? e : t),
          this.map(function() {
            return ot.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return ot.access(
          this,
          function(e) {
            var i = this[0] || {},
              n = 0,
              r = this.length;
            if (e === t && 1 === i.nodeType) return i.innerHTML;
            if (
              "string" == typeof e &&
              !Mt.test(e) &&
              !Ht[(Et.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(It, "<$1></$2>");
              try {
                for (; r > n; n++)
                  (i = this[n] || {}),
                    1 === i.nodeType &&
                      (ot.cleanData(g(i, !1)), (i.innerHTML = e));
                i = 0;
              } catch (o) {}
            }
            i && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var e = ot.map(this, function(e) {
            return [e.nextSibling, e.parentNode];
          }),
          t = 0;
        return (
          this.domManip(
            arguments,
            function(i) {
              var n = e[t++],
                r = e[t++];
              r &&
                (n && n.parentNode !== r && (n = this.nextSibling),
                ot(this).remove(),
                r.insertBefore(i, n));
            },
            !0
          ),
          t ? this : this.remove()
        );
      },
      detach: function(e) {
        return this.remove(e, !0);
      },
      domManip: function(e, t, i) {
        e = Z.apply([], e);
        var n,
          r,
          o,
          a,
          s,
          l,
          c = 0,
          d = this.length,
          p = this,
          f = d - 1,
          m = e[0],
          v = ot.isFunction(m);
        if (
          v ||
          (!(1 >= d || "string" != typeof m || ot.support.checkClone) &&
            Nt.test(m))
        )
          return this.each(function(n) {
            var r = p.eq(n);
            v && (e[0] = m.call(this, n, r.html())), r.domManip(e, t, i);
          });
        if (
          d &&
          ((n = ot.buildFragment(e, this[0].ownerDocument, !1, !i && this)),
          (r = n.firstChild),
          1 === n.childNodes.length && (n = r),
          r)
        ) {
          for (o = ot.map(g(n, "script"), u), a = o.length; d > c; c++)
            (s = n),
              c !== f &&
                ((s = ot.clone(s, !0, !0)), a && ot.merge(o, g(s, "script"))),
              t.call(this[c], s, c);
          if (a)
            for (
              l = o[o.length - 1].ownerDocument, ot.map(o, h), c = 0;
              a > c;
              c++
            )
              (s = o[c]),
                Lt.test(s.type || "") &&
                  !gt.access(s, "globalEval") &&
                  ot.contains(l, s) &&
                  (s.src
                    ? ot._evalUrl(s.src)
                    : ot.globalEval(s.textContent.replace(zt, "")));
        }
        return this;
      },
    }),
    ot.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function(e, t) {
        ot.fn[e] = function(e) {
          for (var i, n = [], r = ot(e), o = r.length - 1, a = 0; o >= a; a++)
            (i = a === o ? this : this.clone(!0)),
              ot(r[a])[t](i),
              K.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    ),
    ot.extend({
      clone: function(e, t, i) {
        var n,
          r,
          o,
          a,
          s = e.cloneNode(!0),
          l = ot.contains(e.ownerDocument, e);
        if (
          !(
            ot.support.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ot.isXMLDoc(e)
          )
        )
          for (a = g(s), o = g(e), n = 0, r = o.length; r > n; n++)
            v(o[n], a[n]);
        if (t)
          if (i)
            for (o = o || g(e), a = a || g(s), n = 0, r = o.length; r > n; n++)
              m(o[n], a[n]);
          else m(e, s);
        return (
          (a = g(s, "script")), a.length > 0 && f(a, !l && g(e, "script")), s
        );
      },
      buildFragment: function(e, t, i, n) {
        for (
          var r,
            o,
            a,
            s,
            l,
            c,
            d = 0,
            p = e.length,
            u = t.createDocumentFragment(),
            h = [];
          p > d;
          d++
        )
          if (((r = e[d]), r || 0 === r))
            if ("object" === ot.type(r)) ot.merge(h, r.nodeType ? [r] : r);
            else if (jt.test(r)) {
              for (
                o = o || u.appendChild(t.createElement("div")),
                  a = (Et.exec(r) || ["", ""])[1].toLowerCase(),
                  s = Ht[a] || Ht._default,
                  o.innerHTML = s[1] + r.replace(It, "<$1></$2>") + s[2],
                  c = s[0];
                c--;

              )
                o = o.lastChild;
              ot.merge(h, o.childNodes),
                (o = u.firstChild),
                (o.textContent = "");
            } else h.push(t.createTextNode(r));
        for (u.textContent = "", d = 0; (r = h[d++]); )
          if (
            (!n || -1 === ot.inArray(r, n)) &&
            ((l = ot.contains(r.ownerDocument, r)),
            (o = g(u.appendChild(r), "script")),
            l && f(o),
            i)
          )
            for (c = 0; (r = o[c++]); ) Lt.test(r.type || "") && i.push(r);
        return u;
      },
      cleanData: function(e) {
        for (
          var i, n, o, a, s, l, c = ot.event.special, d = 0;
          (n = e[d]) !== t;
          d++
        ) {
          if (r.accepts(n) && ((s = n[gt.expando]), s && (i = gt.cache[s]))) {
            if (((o = Object.keys(i.events || {})), o.length))
              for (l = 0; (a = o[l]) !== t; l++)
                c[a] ? ot.event.remove(n, a) : ot.removeEvent(n, a, i.handle);
            gt.cache[s] && delete gt.cache[s];
          }
          delete mt.cache[n[mt.expando]];
        }
      },
      _evalUrl: function(e) {
        return ot.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      },
    }),
    ot.fn.extend({
      wrapAll: function(e) {
        var t;
        return ot.isFunction(e)
          ? this.each(function(t) {
              ot(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = ot(e, this[0].ownerDocument)
                .eq(0)
                .clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function() {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function(e) {
        return ot.isFunction(e)
          ? this.each(function(t) {
              ot(this).wrapInner(e.call(this, t));
            })
          : this.each(function() {
              var t = ot(this),
                i = t.contents();
              i.length ? i.wrapAll(e) : t.append(e);
            });
      },
      wrap: function(e) {
        var t = ot.isFunction(e);
        return this.each(function(i) {
          ot(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  var Wt,
    Bt,
    qt = /^(none|table(?!-c[ea]).+)/,
    Xt = /^margin/,
    Ut = RegExp("^(" + at + ")(.*)$", "i"),
    Yt = RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
    Vt = RegExp("^([+-])=(" + at + ")", "i"),
    Qt = { BODY: "block" },
    Jt = { position: "absolute", visibility: "hidden", display: "block" },
    Gt = { letterSpacing: 0, fontWeight: 400 },
    Zt = ["Top", "Right", "Bottom", "Left"],
    Kt = ["Webkit", "O", "Moz", "ms"];
  ot.fn.extend({
    css: function(e, i) {
      return ot.access(
        this,
        function(e, i, n) {
          var r,
            o,
            a = {},
            s = 0;
          if (ot.isArray(i)) {
            for (r = x(e), o = i.length; o > s; s++)
              a[i[s]] = ot.css(e, i[s], !1, r);
            return a;
          }
          return n !== t ? ot.style(e, i, n) : ot.css(e, i);
        },
        e,
        i,
        arguments.length > 1
      );
    },
    show: function() {
      return w(this, !0);
    },
    hide: function() {
      return w(this);
    },
    toggle: function(e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function() {
            b(this) ? ot(this).show() : ot(this).hide();
          });
    },
  }),
    ot.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var i = Wt(e, "opacity");
              return "" === i ? "1" : i;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function(e, i, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            a,
            s,
            l = ot.camelCase(i),
            c = e.style;
          return (
            (i = ot.cssProps[l] || (ot.cssProps[l] = y(c, l))),
            (s = ot.cssHooks[i] || ot.cssHooks[l]),
            n === t
              ? s && "get" in s && (o = s.get(e, !1, r)) !== t
                ? o
                : c[i]
              : ((a = typeof n),
                "string" === a &&
                  (o = Vt.exec(n)) &&
                  ((n = (o[1] + 1) * o[2] + parseFloat(ot.css(e, i))),
                  (a = "number")),
                null == n ||
                  ("number" === a && isNaN(n)) ||
                  ("number" !== a || ot.cssNumber[l] || (n += "px"),
                  ot.support.clearCloneStyle ||
                    "" !== n ||
                    0 !== i.indexOf("background") ||
                    (c[i] = "inherit"),
                  (s && "set" in s && (n = s.set(e, n, r)) === t) ||
                    (c[i] = n)),
                t)
          );
        }
      },
      css: function(e, i, n, r) {
        var o,
          a,
          s,
          l = ot.camelCase(i);
        return (
          (i = ot.cssProps[l] || (ot.cssProps[l] = y(e.style, l))),
          (s = ot.cssHooks[i] || ot.cssHooks[l]),
          s && "get" in s && (o = s.get(e, !0, n)),
          o === t && (o = Wt(e, i, r)),
          "normal" === o && i in Gt && (o = Gt[i]),
          "" === n || n
            ? ((a = parseFloat(o)), n === !0 || ot.isNumeric(a) ? a || 0 : o)
            : o
        );
      },
    }),
    (Wt = function(e, i, n) {
      var r,
        o,
        a,
        s = n || x(e),
        l = s ? s.getPropertyValue(i) || s[i] : t,
        c = e.style;
      return (
        s &&
          ("" !== l || ot.contains(e.ownerDocument, e) || (l = ot.style(e, i)),
          Yt.test(l) &&
            Xt.test(i) &&
            ((r = c.width),
            (o = c.minWidth),
            (a = c.maxWidth),
            (c.minWidth = c.maxWidth = c.width = l),
            (l = s.width),
            (c.width = r),
            (c.minWidth = o),
            (c.maxWidth = a))),
        l
      );
    }),
    ot.each(["height", "width"], function(e, i) {
      ot.cssHooks[i] = {
        get: function(e, n, r) {
          return n
            ? 0 === e.offsetWidth && qt.test(ot.css(e, "display"))
              ? ot.swap(e, Jt, function() {
                  return T(e, i, r);
                })
              : T(e, i, r)
            : t;
        },
        set: function(e, t, n) {
          var r = n && x(e);
          return $(
            e,
            t,
            n
              ? _(
                  e,
                  i,
                  n,
                  ot.support.boxSizing &&
                    "border-box" === ot.css(e, "boxSizing", !1, r),
                  r
                )
              : 0
          );
        },
      };
    }),
    ot(function() {
      ot.support.reliableMarginRight ||
        (ot.cssHooks.marginRight = {
          get: function(e, i) {
            return i
              ? ot.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"])
              : t;
          },
        }),
        !ot.support.pixelPosition &&
          ot.fn.position &&
          ot.each(["top", "left"], function(e, i) {
            ot.cssHooks[i] = {
              get: function(e, n) {
                return n
                  ? ((n = Wt(e, i)),
                    Yt.test(n) ? ot(e).position()[i] + "px" : n)
                  : t;
              },
            };
          });
    }),
    ot.expr &&
      ot.expr.filters &&
      ((ot.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
      }),
      (ot.expr.filters.visible = function(e) {
        return !ot.expr.filters.hidden(e);
      })),
    ot.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
      (ot.cssHooks[e + t] = {
        expand: function(i) {
          for (
            var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i];
            4 > n;
            n++
          )
            r[e + Zt[n] + t] = o[n] || o[n - 2] || o[0];
          return r;
        },
      }),
        Xt.test(e) || (ot.cssHooks[e + t].set = $);
    });
  var ei = /%20/g,
    ti = /\[\]$/,
    ii = /\r?\n/g,
    ni = /^(?:submit|button|image|reset|file)$/i,
    ri = /^(?:input|select|textarea|keygen)/i;
  ot.fn.extend({
    serialize: function() {
      return ot.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var e = ot.prop(this, "elements");
        return e ? ot.makeArray(e) : this;
      })
        .filter(function() {
          var e = this.type;
          return (
            this.name &&
            !ot(this).is(":disabled") &&
            ri.test(this.nodeName) &&
            !ni.test(e) &&
            (this.checked || !Ot.test(e))
          );
        })
        .map(function(e, t) {
          var i = ot(this).val();
          return null == i
            ? null
            : ot.isArray(i)
            ? ot.map(i, function(e) {
                return { name: t.name, value: e.replace(ii, "\r\n") };
              })
            : { name: t.name, value: i.replace(ii, "\r\n") };
        })
        .get();
    },
  }),
    (ot.param = function(e, i) {
      var n,
        r = [],
        o = function(e, t) {
          (t = ot.isFunction(t) ? t() : null == t ? "" : t),
            (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (i === t && (i = ot.ajaxSettings && ot.ajaxSettings.traditional),
        ot.isArray(e) || (e.jquery && !ot.isPlainObject(e)))
      )
        ot.each(e, function() {
          o(this.name, this.value);
        });
      else for (n in e) F(n, e[n], i, o);
      return r.join("&").replace(ei, "+");
    }),
    ot.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function(e, t) {
        ot.fn[t] = function(e, i) {
          return arguments.length > 0
            ? this.on(t, null, e, i)
            : this.trigger(t);
        };
      }
    ),
    ot.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function(e, t, i) {
        return this.on(e, null, t, i);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, i, n) {
        return this.on(t, e, i, n);
      },
      undelegate: function(e, t, i) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", i);
      },
    });
  var oi,
    ai,
    si = ot.now(),
    li = /\?/,
    ci = /#.*$/,
    di = /([?&])_=[^&]*/,
    pi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ui = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    hi = /^(?:GET|HEAD)$/,
    fi = /^\/\//,
    mi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    gi = ot.fn.load,
    vi = {},
    yi = {},
    bi = "*/".concat("*");
  try {
    ai = q.href;
  } catch (xi) {
    (ai = X.createElement("a")), (ai.href = ""), (ai = ai.href);
  }
  (oi = mi.exec(ai.toLowerCase()) || []),
    (ot.fn.load = function(e, i, n) {
      if ("string" != typeof e && gi) return gi.apply(this, arguments);
      var r,
        o,
        a,
        s = this,
        l = e.indexOf(" ");
      return (
        l >= 0 && ((r = e.slice(l)), (e = e.slice(0, l))),
        ot.isFunction(i)
          ? ((n = i), (i = t))
          : i && "object" == typeof i && (o = "POST"),
        s.length > 0 &&
          ot
            .ajax({ url: e, type: o, dataType: "html", data: i })
            .done(function(e) {
              (a = arguments),
                s.html(
                  r
                    ? ot("<div>")
                        .append(ot.parseHTML(e))
                        .find(r)
                    : e
                );
            })
            .complete(
              n &&
                function(e, t) {
                  s.each(n, a || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
    ot.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function(e, t) {
        ot.fn[t] = function(e) {
          return this.on(t, e);
        };
      }
    ),
    ot.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ai,
        type: "GET",
        isLocal: ui.test(oi[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": bi,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ot.parseJSON,
          "text xml": ot.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function(e, t) {
        return t ? D(D(e, ot.ajaxSettings), t) : D(ot.ajaxSettings, e);
      },
      ajaxPrefilter: S(vi),
      ajaxTransport: S(yi),
      ajax: function(e, i) {
        function n(e, i, n, s) {
          var c,
            p,
            y,
            b,
            w,
            _ = i;
          2 !== x &&
            ((x = 2),
            l && clearTimeout(l),
            (r = t),
            (a = s || ""),
            ($.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && 300 > e) || 304 === e),
            n && (b = A(u, $, n)),
            (b = I(u, b, $, c)),
            c
              ? (u.ifModified &&
                  ((w = $.getResponseHeader("Last-Modified")),
                  w && (ot.lastModified[o] = w),
                  (w = $.getResponseHeader("etag")),
                  w && (ot.etag[o] = w)),
                204 === e || "HEAD" === u.type
                  ? (_ = "nocontent")
                  : 304 === e
                  ? (_ = "notmodified")
                  : ((_ = b.state), (p = b.data), (y = b.error), (c = !y)))
              : ((y = _), (e || !_) && ((_ = "error"), 0 > e && (e = 0))),
            ($.status = e),
            ($.statusText = (i || _) + ""),
            c ? m.resolveWith(h, [p, _, $]) : m.rejectWith(h, [$, _, y]),
            $.statusCode(v),
            (v = t),
            d && f.trigger(c ? "ajaxSuccess" : "ajaxError", [$, u, c ? p : y]),
            g.fireWith(h, [$, _]),
            d &&
              (f.trigger("ajaxComplete", [$, u]),
              --ot.active || ot.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((i = e), (e = t)), (i = i || {});
        var r,
          o,
          a,
          s,
          l,
          c,
          d,
          p,
          u = ot.ajaxSetup({}, i),
          h = u.context || u,
          f = u.context && (h.nodeType || h.jquery) ? ot(h) : ot.event,
          m = ot.Deferred(),
          g = ot.Callbacks("once memory"),
          v = u.statusCode || {},
          y = {},
          b = {},
          x = 0,
          w = "canceled",
          $ = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === x) {
                if (!s)
                  for (s = {}; (t = pi.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function() {
              return 2 === x ? a : null;
            },
            setRequestHeader: function(e, t) {
              var i = e.toLowerCase();
              return x || ((e = b[i] = b[i] || e), (y[e] = t)), this;
            },
            overrideMimeType: function(e) {
              return x || (u.mimeType = e), this;
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (2 > x) for (t in e) v[t] = [v[t], e[t]];
                else $.always(e[$.status]);
              return this;
            },
            abort: function(e) {
              var t = e || w;
              return r && r.abort(t), n(0, t), this;
            },
          };
        if (
          ((m.promise($).complete = g.add),
          ($.success = $.done),
          ($.error = $.fail),
          (u.url = ((e || u.url || ai) + "")
            .replace(ci, "")
            .replace(fi, oi[1] + "//")),
          (u.type = i.method || i.type || u.method || u.type),
          (u.dataTypes = ot
            .trim(u.dataType || "*")
            .toLowerCase()
            .match(st) || [""]),
          null == u.crossDomain &&
            ((c = mi.exec(u.url.toLowerCase())),
            (u.crossDomain = !(
              !c ||
              (c[1] === oi[1] &&
                c[2] === oi[2] &&
                (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                  (oi[3] || ("http:" === oi[1] ? "80" : "443")))
            ))),
          u.data &&
            u.processData &&
            "string" != typeof u.data &&
            (u.data = ot.param(u.data, u.traditional)),
          P(vi, u, i, $),
          2 === x)
        )
          return $;
        (d = u.global),
          d && 0 === ot.active++ && ot.event.trigger("ajaxStart"),
          (u.type = u.type.toUpperCase()),
          (u.hasContent = !hi.test(u.type)),
          (o = u.url),
          u.hasContent ||
            (u.data &&
              ((o = u.url += (li.test(o) ? "&" : "?") + u.data), delete u.data),
            u.cache === !1 &&
              (u.url = di.test(o)
                ? o.replace(di, "$1_=" + si++)
                : o + (li.test(o) ? "&" : "?") + "_=" + si++)),
          u.ifModified &&
            (ot.lastModified[o] &&
              $.setRequestHeader("If-Modified-Since", ot.lastModified[o]),
            ot.etag[o] && $.setRequestHeader("If-None-Match", ot.etag[o])),
          ((u.data && u.hasContent && u.contentType !== !1) || i.contentType) &&
            $.setRequestHeader("Content-Type", u.contentType),
          $.setRequestHeader(
            "Accept",
            u.dataTypes[0] && u.accepts[u.dataTypes[0]]
              ? u.accepts[u.dataTypes[0]] +
                  ("*" !== u.dataTypes[0] ? ", " + bi + "; q=0.01" : "")
              : u.accepts["*"]
          );
        for (p in u.headers) $.setRequestHeader(p, u.headers[p]);
        if (u.beforeSend && (u.beforeSend.call(h, $, u) === !1 || 2 === x))
          return $.abort();
        w = "abort";
        for (p in { success: 1, error: 1, complete: 1 }) $[p](u[p]);
        if ((r = P(yi, u, i, $))) {
          ($.readyState = 1),
            d && f.trigger("ajaxSend", [$, u]),
            u.async &&
              u.timeout > 0 &&
              (l = setTimeout(function() {
                $.abort("timeout");
              }, u.timeout));
          try {
            (x = 1), r.send(y, n);
          } catch (_) {
            if (!(2 > x)) throw _;
            n(-1, _);
          }
        } else n(-1, "No Transport");
        return $;
      },
      getJSON: function(e, t, i) {
        return ot.get(e, t, i, "json");
      },
      getScript: function(e, i) {
        return ot.get(e, t, i, "script");
      },
    }),
    ot.each(["get", "post"], function(e, i) {
      ot[i] = function(e, n, r, o) {
        return (
          ot.isFunction(n) && ((o = o || r), (r = n), (n = t)),
          ot.ajax({ url: e, type: i, dataType: o, data: n, success: r })
        );
      };
    }),
    ot.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function(e) {
          return ot.globalEval(e), e;
        },
      },
    }),
    ot.ajaxPrefilter("script", function(e) {
      e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ot.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, i;
        return {
          send: function(n, r) {
            (t = ot("<script>")
              .prop({ async: !0, charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (i = function(e) {
                  t.remove(),
                    (i = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              X.head.appendChild(t[0]);
          },
          abort: function() {
            i && i();
          },
        };
      }
    });
  var wi = [],
    $i = /(=)\?(?=&|$)|\?\?/;
  ot.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = wi.pop() || ot.expando + "_" + si++;
      return (this[e] = !0), e;
    },
  }),
    ot.ajaxPrefilter("json jsonp", function(i, n, r) {
      var o,
        a,
        s,
        l =
          i.jsonp !== !1 &&
          ($i.test(i.url)
            ? "url"
            : "string" == typeof i.data &&
              !(i.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              $i.test(i.data) &&
              "data");
      return l || "jsonp" === i.dataTypes[0]
        ? ((o = i.jsonpCallback = ot.isFunction(i.jsonpCallback)
            ? i.jsonpCallback()
            : i.jsonpCallback),
          l
            ? (i[l] = i[l].replace($i, "$1" + o))
            : i.jsonp !== !1 &&
              (i.url += (li.test(i.url) ? "&" : "?") + i.jsonp + "=" + o),
          (i.converters["script json"] = function() {
            return s || ot.error(o + " was not called"), s[0];
          }),
          (i.dataTypes[0] = "json"),
          (a = e[o]),
          (e[o] = function() {
            s = arguments;
          }),
          r.always(function() {
            (e[o] = a),
              i[o] && ((i.jsonpCallback = n.jsonpCallback), wi.push(o)),
              s && ot.isFunction(a) && a(s[0]),
              (s = a = t);
          }),
          "script")
        : t;
    }),
    (ot.ajaxSettings.xhr = function() {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var _i = ot.ajaxSettings.xhr(),
    Ti = { 0: 200, 1223: 204 },
    ki = 0,
    Ci = {};
  e.ActiveXObject &&
    ot(e).on("unload", function() {
      for (var e in Ci) Ci[e]();
      Ci = t;
    }),
    (ot.support.cors = !!_i && "withCredentials" in _i),
    (ot.support.ajax = _i = !!_i),
    ot.ajaxTransport(function(e) {
      var i;
      return ot.support.cors || (_i && !e.crossDomain)
        ? {
            send: function(n, r) {
              var o,
                a,
                s = e.xhr();
              if (
                (s.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (o in e.xhrFields) s[o] = e.xhrFields[o];
              e.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  n["X-Requested-With"] ||
                  (n["X-Requested-With"] = "XMLHttpRequest");
              for (o in n) s.setRequestHeader(o, n[o]);
              (i = function(e) {
                return function() {
                  i &&
                    (delete Ci[a],
                    (i = s.onload = s.onerror = null),
                    "abort" === e
                      ? s.abort()
                      : "error" === e
                      ? r(s.status || 404, s.statusText)
                      : r(
                          Ti[s.status] || s.status,
                          s.statusText,
                          "string" == typeof s.responseText
                            ? { text: s.responseText }
                            : t,
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = i()),
                (s.onerror = i("error")),
                (i = Ci[(a = ki++)] = i("abort")),
                s.send((e.hasContent && e.data) || null);
            },
            abort: function() {
              i && i();
            },
          }
        : t;
    });
  var Fi,
    Si,
    Pi = /^(?:toggle|show|hide)$/,
    Di = RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
    Ai = /queueHooks$/,
    Ii = [N],
    Ei = {
      "*": [
        function(e, t) {
          var i = this.createTween(e, t),
            n = i.cur(),
            r = Di.exec(t),
            o = (r && r[3]) || (ot.cssNumber[e] ? "" : "px"),
            a =
              (ot.cssNumber[e] || ("px" !== o && +n)) &&
              Di.exec(ot.css(i.elem, e)),
            s = 1,
            l = 20;
          if (a && a[3] !== o) {
            (o = o || a[3]), (r = r || []), (a = +n || 1);
            do (s = s || ".5"), (a /= s), ot.style(i.elem, e, a + o);
            while (s !== (s = i.cur() / n) && 1 !== s && --l);
          }
          return (
            r &&
              ((a = i.start = +a || +n || 0),
              (i.unit = o),
              (i.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2])),
            i
          );
        },
      ],
    };
  (ot.Animation = ot.extend(M, {
    tweener: function(e, t) {
      ot.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var i, n = 0, r = e.length; r > n; n++)
        (i = e[n]), (Ei[i] = Ei[i] || []), Ei[i].unshift(t);
    },
    prefilter: function(e, t) {
      t ? Ii.unshift(e) : Ii.push(e);
    },
  })),
    (ot.Tween = L),
    (L.prototype = {
      constructor: L,
      init: function(e, t, i, n, r, o) {
        (this.elem = e),
          (this.prop = i),
          (this.easing = r || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (ot.cssNumber[i] ? "" : "px"));
      },
      cur: function() {
        var e = L.propHooks[this.prop];
        return e && e.get ? e.get(this) : L.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          i = L.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? ot.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : L.propHooks._default.set(this),
          this
        );
      },
    }),
    (L.prototype.init.prototype = L.prototype),
    (L.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = ot.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function(e) {
          ot.fx.step[e.prop]
            ? ot.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop])
            ? ot.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (L.propHooks.scrollTop = L.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    ot.each(["toggle", "show", "hide"], function(e, t) {
      var i = ot.fn[t];
      ot.fn[t] = function(e, n, r) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(R(t, !0), e, n, r);
      };
    }),
    ot.fn.extend({
      fadeTo: function(e, t, i, n) {
        return this.filter(b)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, i, n);
      },
      animate: function(e, t, i, n) {
        var r = ot.isEmptyObject(e),
          o = ot.speed(t, i, n),
          a = function() {
            var t = M(this, ot.extend({}, e), o);
            (r || gt.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function(e, i, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = i), (i = e), (e = t)),
          i && e !== !1 && this.queue(e || "fx", []),
          this.each(function() {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = ot.timers,
              a = gt.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && Ai.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (t || !n) && ot.dequeue(this, e);
          })
        );
      },
      finish: function(e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function() {
            var t,
              i = gt.get(this),
              n = i[e + "queue"],
              r = i[e + "queueHooks"],
              o = ot.timers,
              a = n ? n.length : 0;
            for (
              i.finish = !0,
                ot.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    ot.each(
      {
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function(e, t) {
        ot.fn[e] = function(e, i, n) {
          return this.animate(t, e, i, n);
        };
      }
    ),
    (ot.speed = function(e, t, i) {
      var n =
        e && "object" == typeof e
          ? ot.extend({}, e)
          : {
              complete: i || (!i && t) || (ot.isFunction(e) && e),
              duration: e,
              easing: (i && t) || (t && !ot.isFunction(t) && t),
            };
      return (
        (n.duration = ot.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in ot.fx.speeds
          ? ot.fx.speeds[n.duration]
          : ot.fx.speeds._default),
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function() {
          ot.isFunction(n.old) && n.old.call(this),
            n.queue && ot.dequeue(this, n.queue);
        }),
        n
      );
    }),
    (ot.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (ot.timers = []),
    (ot.fx = L.prototype.init),
    (ot.fx.tick = function() {
      var e,
        i = ot.timers,
        n = 0;
      for (Fi = ot.now(); i.length > n; n++)
        (e = i[n]), e() || i[n] !== e || i.splice(n--, 1);
      i.length || ot.fx.stop(), (Fi = t);
    }),
    (ot.fx.timer = function(e) {
      e() && ot.timers.push(e) && ot.fx.start();
    }),
    (ot.fx.interval = 13),
    (ot.fx.start = function() {
      Si || (Si = setInterval(ot.fx.tick, ot.fx.interval));
    }),
    (ot.fx.stop = function() {
      clearInterval(Si), (Si = null);
    }),
    (ot.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ot.fx.step = {}),
    ot.expr &&
      ot.expr.filters &&
      (ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
          return e === t.elem;
        }).length;
      }),
    (ot.fn.offset = function(e) {
      if (arguments.length)
        return e === t
          ? this
          : this.each(function(t) {
              ot.offset.setOffset(this, e, t);
            });
      var i,
        n,
        r = this[0],
        o = { top: 0, left: 0 },
        a = r && r.ownerDocument;
      return a
        ? ((i = a.documentElement),
          ot.contains(i, r)
            ? (typeof r.getBoundingClientRect !== B &&
                (o = r.getBoundingClientRect()),
              (n = z(a)),
              {
                top: o.top + n.pageYOffset - i.clientTop,
                left: o.left + n.pageXOffset - i.clientLeft,
              })
            : o)
        : void 0;
    }),
    (ot.offset = {
      setOffset: function(e, t, i) {
        var n,
          r,
          o,
          a,
          s,
          l,
          c,
          d = ot.css(e, "position"),
          p = ot(e),
          u = {};
        "static" === d && (e.style.position = "relative"),
          (s = p.offset()),
          (o = ot.css(e, "top")),
          (l = ot.css(e, "left")),
          (c =
            ("absolute" === d || "fixed" === d) &&
            (o + l).indexOf("auto") > -1),
          c
            ? ((n = p.position()), (a = n.top), (r = n.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          ot.isFunction(t) && (t = t.call(e, i, s)),
          null != t.top && (u.top = t.top - s.top + a),
          null != t.left && (u.left = t.left - s.left + r),
          "using" in t ? t.using.call(e, u) : p.css(u);
      },
    }),
    ot.fn.extend({
      position: function() {
        if (this[0]) {
          var e,
            t,
            i = this[0],
            n = { top: 0, left: 0 };
          return (
            "fixed" === ot.css(i, "position")
              ? (t = i.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                ot.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += ot.css(e[0], "borderTopWidth", !0)),
                (n.left += ot.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - ot.css(i, "marginTop", !0),
              left: t.left - n.left - ot.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var e = this.offsetParent || U;
            e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");

          )
            e = e.offsetParent;
          return e || U;
        });
      },
    }),
    ot.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      i,
      n
    ) {
      var r = "pageYOffset" === n;
      ot.fn[i] = function(o) {
        return ot.access(
          this,
          function(i, o, a) {
            var s = z(i);
            return a === t
              ? s
                ? s[n]
                : i[o]
              : (s
                  ? s.scrollTo(r ? e.pageXOffset : a, r ? a : e.pageYOffset)
                  : (i[o] = a),
                t);
          },
          i,
          o,
          arguments.length,
          null
        );
      };
    }),
    ot.each({ Height: "height", Width: "width" }, function(e, i) {
      ot.each({ padding: "inner" + e, content: i, "": "outer" + e }, function(
        n,
        r
      ) {
        ot.fn[r] = function(r, o) {
          var a = arguments.length && (n || "boolean" != typeof r),
            s = n || (r === !0 || o === !0 ? "margin" : "border");
          return ot.access(
            this,
            function(i, n, r) {
              var o;
              return ot.isWindow(i)
                ? i.document.documentElement["client" + e]
                : 9 === i.nodeType
                ? ((o = i.documentElement),
                  Math.max(
                    i.body["scroll" + e],
                    o["scroll" + e],
                    i.body["offset" + e],
                    o["offset" + e],
                    o["client" + e]
                  ))
                : r === t
                ? ot.css(i, n, s)
                : ot.style(i, n, r, s);
            },
            i,
            a ? r : t,
            a,
            null
          );
        };
      });
    }),
    (ot.fn.size = function() {
      return this.length;
    }),
    (ot.fn.andSelf = ot.fn.addBack),
    "object" == typeof module && module && "object" == typeof module.exports
      ? (module.exports = ot)
      : "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
          return ot;
        }),
    "object" == typeof e &&
      "object" == typeof e.document &&
      (e.jQuery = e.$ = ot);
})(window),
  void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function(e, t, i) {
    function n(i) {
      var n = t.console;
      o[i] ||
        ((o[i] = !0),
        e.migrateWarnings.push(i),
        n &&
          n.warn &&
          !e.migrateMute &&
          (n.warn("JQMIGRATE: " + i), e.migrateTrace && n.trace && n.trace()));
    }
    function r(t, r, o, a) {
      if (Object.defineProperty)
        try {
          return (
            Object.defineProperty(t, r, {
              configurable: !0,
              enumerable: !0,
              get: function() {
                return n(a), o;
              },
              set: function(e) {
                n(a), (o = e);
              },
            }),
            i
          );
        } catch (s) {}
      (e._definePropertyBroken = !0), (t[r] = o);
    }
    var o = {};
    (e.migrateWarnings = []),
      !e.migrateMute &&
        t.console &&
        t.console.log &&
        t.console.log("JQMIGRATE: Logging is active"),
      e.migrateTrace === i && (e.migrateTrace = !0),
      (e.migrateReset = function() {
        (o = {}), (e.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        n("jQuery is not compatible with Quirks Mode");
    var a = e("<input/>", { size: 1 }).attr("size") && e.attrFn,
      s = e.attr,
      l =
        (e.attrHooks.value && e.attrHooks.value.get) ||
        function() {
          return null;
        },
      c =
        (e.attrHooks.value && e.attrHooks.value.set) ||
        function() {
          return i;
        },
      d = /^(?:input|button)$/i,
      p = /^[238]$/,
      u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      h = /^(?:checked|selected)$/i;
    r(e, "attrFn", a || {}, "jQuery.attrFn is deprecated"),
      (e.attr = function(t, r, o, l) {
        var c = r.toLowerCase(),
          f = t && t.nodeType;
        return l &&
          (4 > s.length && n("jQuery.fn.attr( props, pass ) is deprecated"),
          t && !p.test(f) && (a ? r in a : e.isFunction(e.fn[r])))
          ? e(t)[r](o)
          : ("type" === r &&
              o !== i &&
              d.test(t.nodeName) &&
              t.parentNode &&
              n("Can't change the 'type' of an input or button in IE 6/7/8"),
            !e.attrHooks[c] &&
              u.test(c) &&
              ((e.attrHooks[c] = {
                get: function(t, n) {
                  var r,
                    o = e.prop(t, n);
                  return o === !0 ||
                    ("boolean" != typeof o &&
                      (r = t.getAttributeNode(n)) &&
                      r.nodeValue !== !1)
                    ? n.toLowerCase()
                    : i;
                },
                set: function(t, i, n) {
                  var r;
                  return (
                    i === !1
                      ? e.removeAttr(t, n)
                      : ((r = e.propFix[n] || n),
                        r in t && (t[r] = !0),
                        t.setAttribute(n, n.toLowerCase())),
                    n
                  );
                },
              }),
              h.test(c) &&
                n(
                  "jQuery.fn.attr('" +
                    c +
                    "') may use property instead of attribute"
                )),
            s.call(e, t, r, o));
      }),
      (e.attrHooks.value = {
        get: function(e, t) {
          var i = (e.nodeName || "").toLowerCase();
          return "button" === i
            ? l.apply(this, arguments)
            : ("input" !== i &&
                "option" !== i &&
                n("jQuery.fn.attr('value') no longer gets properties"),
              t in e ? e.value : null);
        },
        set: function(e, t) {
          var r = (e.nodeName || "").toLowerCase();
          return "button" === r
            ? c.apply(this, arguments)
            : ("input" !== r &&
                "option" !== r &&
                n("jQuery.fn.attr('value', val) no longer sets properties"),
              (e.value = t),
              i);
        },
      });
    var f,
      m,
      g = e.fn.init,
      v = e.parseJSON,
      y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    (e.fn.init = function(t, i, r) {
      var o;
      return t &&
        "string" == typeof t &&
        !e.isPlainObject(i) &&
        (o = y.exec(e.trim(t))) &&
        o[0] &&
        ("<" !== t.charAt(0) &&
          n("$(html) HTML strings must start with '<' character"),
        o[3] && n("$(html) HTML text after last tag is ignored"),
        "#" === o[0].charAt(0) &&
          (n("HTML string cannot start with a '#' character"),
          e.error("JQMIGRATE: Invalid selector string (XSS)")),
        i && i.context && (i = i.context),
        e.parseHTML)
        ? g.call(this, e.parseHTML(o[2], i, !0), i, r)
        : g.apply(this, arguments);
    }),
      (e.fn.init.prototype = e.fn),
      (e.parseJSON = function(e) {
        return e || null === e
          ? v.apply(this, arguments)
          : (n("jQuery.parseJSON requires a valid JSON string"), null);
      }),
      (e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t =
          /(chrome)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (0 > e.indexOf("compatible") &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
          [];
        return { browser: t[1] || "", version: t[2] || "0" };
      }),
      e.browser ||
        ((f = e.uaMatch(navigator.userAgent)),
        (m = {}),
        f.browser && ((m[f.browser] = !0), (m.version = f.version)),
        m.chrome ? (m.webkit = !0) : m.webkit && (m.safari = !0),
        (e.browser = m)),
      r(e, "browser", e.browser, "jQuery.browser is deprecated"),
      (e.sub = function() {
        function t(e, i) {
          return new t.fn.init(e, i);
        }
        e.extend(!0, t, this),
          (t.superclass = this),
          (t.fn = t.prototype = this()),
          (t.fn.constructor = t),
          (t.sub = this.sub),
          (t.fn.init = function(n, r) {
            return (
              r && r instanceof e && !(r instanceof t) && (r = t(r)),
              e.fn.init.call(this, n, r, i)
            );
          }),
          (t.fn.init.prototype = t.fn);
        var i = t(document);
        return n("jQuery.sub() is deprecated"), t;
      }),
      e.ajaxSetup({ converters: { "text json": e.parseJSON } });
    var b = e.fn.data;
    e.fn.data = function(t) {
      var r,
        o,
        a = this[0];
      return !a ||
        "events" !== t ||
        1 !== arguments.length ||
        ((r = e.data(a, t)),
        (o = e._data(a, t)),
        (r !== i && r !== o) || o === i)
        ? b.apply(this, arguments)
        : (n("Use of jQuery.fn.data('events') is deprecated"), o);
    };
    var x = /\/(java|ecma)script/i,
      w = e.fn.andSelf || e.fn.addBack;
    (e.fn.andSelf = function() {
      return (
        n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
      );
    }),
      e.clean ||
        (e.clean = function(t, r, o, a) {
          (r = r || document),
            (r = (!r.nodeType && r[0]) || r),
            (r = r.ownerDocument || r),
            n("jQuery.clean() is deprecated");
          var s,
            l,
            c,
            d,
            p = [];
          if ((e.merge(p, e.buildFragment(t, r).childNodes), o))
            for (
              c = function(e) {
                return !e.type || x.test(e.type)
                  ? a
                    ? a.push(e.parentNode ? e.parentNode.removeChild(e) : e)
                    : o.appendChild(e)
                  : i;
              },
                s = 0;
              null != (l = p[s]);
              s++
            )
              (e.nodeName(l, "script") && c(l)) ||
                (o.appendChild(l),
                l.getElementsByTagName !== i &&
                  ((d = e.grep(
                    e.merge([], l.getElementsByTagName("script")),
                    c
                  )),
                  p.splice.apply(p, [s + 1, 0].concat(d)),
                  (s += d.length)));
          return p;
        });
    var $ = e.event.add,
      _ = e.event.remove,
      T = e.event.trigger,
      k = e.fn.toggle,
      C = e.fn.live,
      F = e.fn.die,
      S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      P = RegExp("\\b(?:" + S + ")\\b"),
      D = /(?:^|\s)hover(\.\S+|)\b/,
      A = function(t) {
        return "string" != typeof t || e.event.special.hover
          ? t
          : (D.test(t) &&
              n(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            t && t.replace(D, "mouseenter$1 mouseleave$1"));
      };
    e.event.props &&
      "attrChange" !== e.event.props[0] &&
      e.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      e.event.dispatch &&
        r(
          e.event,
          "handle",
          e.event.dispatch,
          "jQuery.event.handle is undocumented and deprecated"
        ),
      (e.event.add = function(e, t, i, r, o) {
        e !== document &&
          P.test(t) &&
          n("AJAX events should be attached to document: " + t),
          $.call(this, e, A(t || ""), i, r, o);
      }),
      (e.event.remove = function(e, t, i, n, r) {
        _.call(this, e, A(t) || "", i, n, r);
      }),
      (e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return (
          n("jQuery.fn.error() is deprecated"),
          e.splice(0, 0, "error"),
          arguments.length
            ? this.bind.apply(this, e)
            : (this.triggerHandler.apply(this, e), this)
        );
      }),
      (e.fn.toggle = function(t, i) {
        if (!e.isFunction(t) || !e.isFunction(i))
          return k.apply(this, arguments);
        n("jQuery.fn.toggle(handler, handler...) is deprecated");
        var r = arguments,
          o = t.guid || e.guid++,
          a = 0,
          s = function(i) {
            var n = (e._data(this, "lastToggle" + t.guid) || 0) % a;
            return (
              e._data(this, "lastToggle" + t.guid, n + 1),
              i.preventDefault(),
              r[n].apply(this, arguments) || !1
            );
          };
        for (s.guid = o; r.length > a; ) r[a++].guid = o;
        return this.click(s);
      }),
      (e.fn.live = function(t, i, r) {
        return (
          n("jQuery.fn.live() is deprecated"),
          C
            ? C.apply(this, arguments)
            : (e(this.context).on(t, this.selector, i, r), this)
        );
      }),
      (e.fn.die = function(t, i) {
        return (
          n("jQuery.fn.die() is deprecated"),
          F
            ? F.apply(this, arguments)
            : (e(this.context).off(t, this.selector || "**", i), this)
        );
      }),
      (e.event.trigger = function(e, t, i, r) {
        return (
          i || P.test(e) || n("Global events are undocumented and deprecated"),
          T.call(this, e, t, i || document, r)
        );
      }),
      e.each(S.split("|"), function(t, i) {
        e.event.special[i] = {
          setup: function() {
            var t = this;
            return (
              t !== document &&
                (e.event.add(document, i + "." + e.guid, function() {
                  e.event.trigger(i, null, t, !0);
                }),
                e._data(this, i, e.guid++)),
              !1
            );
          },
          teardown: function() {
            return (
              this !== document &&
                e.event.remove(document, i + "." + e._data(this, i)),
              !1
            );
          },
        };
      });
  })(jQuery, window),
  (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine(
      "plugins.ThrowPropsPlugin",
      [
        "plugins.TweenPlugin",
        "TweenLite",
        "easing.Ease",
        "utils.VelocityTracker",
      ],
      function(e, t, i, n) {
        var r,
          o,
          a,
          s,
          l = function() {
            e.call(this, "throwProps"), (this._overwriteProps.length = 0);
          },
          c = 999999999999999,
          d = 1e-10,
          p = !1,
          u = {
            x: 1,
            y: 1,
            z: 2,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            rotation: 1,
            rotationZ: 1,
            rotationX: 2,
            rotationY: 2,
            skewX: 1,
            skewY: 1,
          },
          h = function(e, t, i, n) {
            for (var r, o, a = t.length, s = 0, l = c; --a > -1; )
              (r = t[a]),
                (o = r - e),
                0 > o && (o = -o),
                l > o && r >= n && i >= r && ((s = a), (l = o));
            return t[s];
          },
          f = function(e, t, i, n) {
            if ("auto" === e.end) return e;
            (i = isNaN(i) ? c : i), (n = isNaN(n) ? -c : n);
            var r =
              "function" == typeof e.end
                ? e.end(t)
                : e.end instanceof Array
                ? h(t, e.end, i, n)
                : Number(e.end);
            return (
              r > i ? (r = i) : n > r && (r = n),
              { max: r, min: r, unitFactor: e.unitFactor }
            );
          },
          m = function(e, t, i) {
            for (var n in t) void 0 === e[n] && n !== i && (e[n] = t[n]);
            return e;
          },
          g = (l.calculateChange = function(e, n, r, o) {
            null == o && (o = 0.05);
            var a = n instanceof i ? n : n ? new i(n) : t.defaultEase;
            return (r * o * e) / a.getRatio(o);
          }),
          v = (l.calculateDuration = function(e, n, r, o, a) {
            a = a || 0.05;
            var s = o instanceof i ? o : o ? new i(o) : t.defaultEase;
            return Math.abs(((n - e) * s.getRatio(a)) / r / a);
          }),
          y = (l.calculateTweenDuration = function(e, r, o, a, s, c) {
            if (("string" == typeof e && (e = t.selector(e)), !e)) return 0;
            null == o && (o = 10),
              null == a && (a = 0.2),
              null == s && (s = 1),
              e.length && (e = e[0] || e);
            var u,
              h,
              y,
              b,
              x,
              w,
              $,
              _,
              T,
              k,
              C = 0,
              F = 9999999999,
              S = r.throwProps || r,
              P =
                r.ease instanceof i
                  ? r.ease
                  : r.ease
                  ? new i(r.ease)
                  : t.defaultEase,
              D = isNaN(S.checkpoint) ? 0.05 : Number(S.checkpoint),
              A = isNaN(S.resistance)
                ? l.defaultResistance
                : Number(S.resistance);
            for (u in S)
              "resistance" !== u &&
                "checkpoint" !== u &&
                "preventOvershoot" !== u &&
                ((h = S[u]),
                "object" != typeof h &&
                  ((T = T || n.getByTarget(e)),
                  T && T.isTrackingProp(u)
                    ? (h =
                        "number" == typeof h
                          ? { velocity: h }
                          : { velocity: T.getVelocity(u) })
                    : ((b = Number(h) || 0), (y = b * A > 0 ? b / A : b / -A))),
                "object" == typeof h &&
                  (void 0 !== h.velocity && "number" == typeof h.velocity
                    ? (b = Number(h.velocity) || 0)
                    : ((T = T || n.getByTarget(e)),
                      (b = T && T.isTrackingProp(u) ? T.getVelocity(u) : 0)),
                  (x = isNaN(h.resistance) ? A : Number(h.resistance)),
                  (y = b * x > 0 ? b / x : b / -x),
                  (w =
                    "function" == typeof e[u]
                      ? e[
                          u.indexOf("set") ||
                          "function" != typeof e["get" + u.substr(3)]
                            ? u
                            : "get" + u.substr(3)
                        ]()
                      : e[u] || 0),
                  ($ = w + g(b, P, y, D)),
                  void 0 !== h.end &&
                    ((h = f(h, $, h.max, h.min)),
                    (c || p) && (S[u] = m(h, S[u], "end"))),
                  void 0 !== h.max && $ > Number(h.max) + d
                    ? ((k = h.unitFactor || l.defaultUnitFactors[u] || 1),
                      (_ =
                        (w > h.max && h.min !== h.max) ||
                        (b * k > -15 && 45 > b * k)
                          ? a + 0.1 * (o - a)
                          : v(w, h.max, b, P, D)),
                      F > _ + s && (F = _ + s))
                    : void 0 !== h.min &&
                      Number(h.min) - d > $ &&
                      ((k = h.unitFactor || l.defaultUnitFactors[u] || 1),
                      (_ =
                        (h.min > w && h.min !== h.max) ||
                        (b * k > -45 && 15 > b * k)
                          ? a + 0.1 * (o - a)
                          : v(w, h.min, b, P, D)),
                      F > _ + s && (F = _ + s)),
                  _ > C && (C = _)),
                y > C && (C = y));
            return C > F && (C = F), C > o ? o : a > C ? a : C;
          }),
          b = (l.prototype = new e("throwProps"));
        return (
          (b.constructor = l),
          (l.version = "0.9.5"),
          (l.API = 2),
          (l._autoCSS = !0),
          (l.defaultResistance = 100),
          (l.defaultUnitFactors = { time: 1e3, totalTime: 1e3 }),
          (l.track = function(e, t, i) {
            return n.track(e, t, i);
          }),
          (l.untrack = function(e, t) {
            n.untrack(e, t);
          }),
          (l.isTracking = function(e, t) {
            return n.isTracking(e, t);
          }),
          (l.getVelocity = function(e, t) {
            var i = n.getByTarget(e);
            return i ? i.getVelocity(t) : 0 / 0;
          }),
          (l._cssRegister = function() {
            var e = (window.GreenSockGlobals || window).com.greensock.plugins
              .CSSPlugin;
            if (e) {
              var t = e._internals,
                i = t._parseToProxy,
                a = t._setPluginRatio,
                s = t.CSSPropTween;
              t._registerComplexSpecialProp("throwProps", {
                parser: function(e, t, c, d, p, h) {
                  h = new l();
                  var f,
                    m,
                    g,
                    v,
                    y,
                    b = {},
                    x = {},
                    w = {},
                    $ = {},
                    _ = {},
                    T = {};
                  o = {};
                  for (g in t)
                    "resistance" !== g &&
                      "preventOvershoot" !== g &&
                      ((m = t[g]),
                      "object" == typeof m
                        ? (void 0 !== m.velocity &&
                          "number" == typeof m.velocity
                            ? (b[g] = Number(m.velocity) || 0)
                            : ((y = y || n.getByTarget(e)),
                              (b[g] =
                                y && y.isTrackingProp(g)
                                  ? y.getVelocity(g)
                                  : 0)),
                          void 0 !== m.end && ($[g] = m.end),
                          void 0 !== m.min && (x[g] = m.min),
                          void 0 !== m.max && (w[g] = m.max),
                          m.preventOvershoot && (T[g] = !0),
                          void 0 !== m.resistance &&
                            ((f = !0), (_[g] = m.resistance)))
                        : "number" == typeof m
                        ? (b[g] = m)
                        : ((y = y || n.getByTarget(e)),
                          (b[g] =
                            y && y.isTrackingProp(g)
                              ? y.getVelocity(g)
                              : m || 0)),
                      u[g] && d._enableTransforms(2 === u[g]));
                  (v = i(e, b, d, p, h)), (r = v.proxy), (b = v.end);
                  for (g in r)
                    o[g] = {
                      velocity: b[g],
                      min: x[g],
                      max: w[g],
                      end: $[g],
                      resistance: _[g],
                      preventOvershoot: T[g],
                    };
                  return (
                    null != t.resistance && (o.resistance = t.resistance),
                    t.preventOvershoot && (o.preventOvershoot = !0),
                    (p = new s(e, "throwProps", 0, 0, v.pt, 2)),
                    (p.plugin = h),
                    (p.setRatio = a),
                    (p.data = v),
                    h._onInitTween(r, o, d._tween),
                    p
                  );
                },
              });
            }
          }),
          (l.to = function(e, i, n, l, c) {
            i.throwProps || (i = { throwProps: i }),
              0 === c && (i.throwProps.preventOvershoot = !0),
              (p = !0);
            var d = new t(e, 1, i);
            return (
              d.render(0, !0, !0),
              d.vars.css
                ? (d.duration(y(r, { throwProps: o, ease: i.ease }, n, l, c)),
                  d._delay && !d.vars.immediateRender
                    ? d.invalidate()
                    : a._onInitTween(r, s, d),
                  (p = !1),
                  d)
                : (d.kill(), (d = new t(e, y(e, i, n, l, c), i)), (p = !1), d)
            );
          }),
          (b._onInitTween = function(e, t, i) {
            (this.target = e), (this._props = []), (a = this), (s = t);
            var r,
              o,
              l,
              c,
              d,
              u,
              h,
              v,
              y,
              b = i._ease,
              x = isNaN(t.checkpoint) ? 0.05 : Number(t.checkpoint),
              w = i._duration,
              $ = t.preventOvershoot,
              _ = 0;
            for (r in t)
              if (
                "resistance" !== r &&
                "checkpoint" !== r &&
                "preventOvershoot" !== r
              ) {
                if (((o = t[r]), "number" == typeof o)) d = Number(o) || 0;
                else if ("object" != typeof o || isNaN(o.velocity)) {
                  if (((y = y || n.getByTarget(e)), !y || !y.isTrackingProp(r)))
                    throw "ERROR: No velocity was defined in the throwProps tween of " +
                      e +
                      " property: " +
                      r;
                  d = y.getVelocity(r);
                } else d = Number(o.velocity);
                (u = g(d, b, w, x)),
                  (v = 0),
                  (c = "function" == typeof e[r]),
                  (l = c
                    ? e[
                        r.indexOf("set") ||
                        "function" != typeof e["get" + r.substr(3)]
                          ? r
                          : "get" + r.substr(3)
                      ]()
                    : e[r]),
                  "object" == typeof o &&
                    ((h = l + u),
                    void 0 !== o.end &&
                      ((o = f(o, h, o.max, o.min)),
                      p && (t[r] = m(o, t[r], "end"))),
                    void 0 !== o.max && h > Number(o.max)
                      ? $ || o.preventOvershoot
                        ? (u = o.max - l)
                        : (v = o.max - l - u)
                      : void 0 !== o.min &&
                        Number(o.min) > h &&
                        ($ || o.preventOvershoot
                          ? (u = o.min - l)
                          : (v = o.min - l - u))),
                  (this._props[_++] = {
                    p: r,
                    s: l,
                    c1: u,
                    c2: v,
                    f: c,
                    r: !1,
                  }),
                  (this._overwriteProps[_] = r);
              }
            return !0;
          }),
          (b._kill = function(t) {
            for (var i = this._props.length; --i > -1; )
              null != t[this._props[i].p] && this._props.splice(i, 1);
            return e.prototype._kill.call(this, t);
          }),
          (b._roundProps = function(e, t) {
            for (var i = this._props, n = i.length; --n > -1; )
              (e[i[n]] || e.throwProps) && (i[n].r = t);
          }),
          (b.setRatio = function(e) {
            for (var t, i, n = this._props.length; --n > -1; )
              (t = this._props[n]),
                (i = t.s + t.c1 * e + t.c2 * e * e),
                t.r && (i = Math.round(i)),
                t.f ? this.target[t.p](i) : (this.target[t.p] = i);
          }),
          e.activate([l]),
          l
        );
      },
      !0
    ),
      window._gsDefine(
        "utils.VelocityTracker",
        ["TweenLite"],
        function(e) {
          var t,
            i,
            n,
            r,
            o = /([A-Z])/g,
            a = {},
            s = {
              x: 1,
              y: 1,
              z: 2,
              scale: 1,
              scaleX: 1,
              scaleY: 1,
              rotation: 1,
              rotationZ: 1,
              rotationX: 2,
              rotationY: 2,
              skewX: 1,
              skewY: 1,
            },
            l = document.defaultView
              ? document.defaultView.getComputedStyle
              : function() {},
            c = function(e, t, i) {
              var n = (e._gsTransform || a)[t];
              return n || 0 === n
                ? n
                : (e.style[t]
                    ? (n = e.style[t])
                    : (i = i || l(e, null))
                    ? ((e = i.getPropertyValue(
                        t.replace(o, "-$1").toLowerCase()
                      )),
                      (n = e || i.length ? e : i[t]))
                    : e.currentStyle && ((i = e.currentStyle), (n = i[t])),
                  parseFloat(n) || 0);
            },
            d = e.ticker,
            p = function(e, t, i) {
              (this.p = e),
                (this.f = t),
                (this.v1 = this.v2 = 0),
                (this.t1 = this.t2 = d.time),
                (this.css = !1),
                (this.type = ""),
                (this._prev = null),
                i && ((this._next = i), (i._prev = this));
            },
            u = function() {
              var e,
                i,
                o = t,
                a = d.time;
              if (a - n >= 0.03)
                for (r = n, n = a; o; ) {
                  for (i = o._firstVP; i; )
                    (e = i.css
                      ? c(o.target, i.p)
                      : i.f
                      ? o.target[i.p]()
                      : o.target[i.p]),
                      (e !== i.v1 || a - i.t1 > 0.15) &&
                        ((i.v2 = i.v1), (i.v1 = e), (i.t2 = i.t1), (i.t1 = a)),
                      (i = i._next);
                  o = o._next;
                }
            },
            h = function(e) {
              (this._lookup = {}),
                (this.target = e),
                (this.elem = e.style && e.nodeType ? !0 : !1),
                i ||
                  (d.addEventListener("tick", u, null, !1, -100),
                  (n = r = d.time),
                  (i = !0)),
                t && ((this._next = t), (t._prev = this)),
                (t = this);
            },
            f = (h.getByTarget = function(e) {
              for (var i = t; i; ) {
                if (i.target === e) return i;
                i = i._next;
              }
            }),
            m = h.prototype;
          return (
            (m.addProp = function(t, i) {
              if (!this._lookup[t]) {
                var n = this.target,
                  r = "function" == typeof n[t],
                  o = r ? this._altProp(t) : t,
                  a = this._firstVP;
                (this._firstVP = this._lookup[t] = this._lookup[o] = a = new p(
                  o !== t && 0 === t.indexOf("set") ? o : t,
                  r,
                  a
                )),
                  (a.css =
                    this.elem && (void 0 !== this.target.style[a.p] || s[a.p])),
                  a.css && s[a.p] && !n._gsTransform && e.set(n, { x: "+=0" }),
                  (a.type =
                    i || (a.css && 0 === t.indexOf("rotation")) ? "deg" : ""),
                  (a.v1 = a.v2 = a.css ? c(n, a.p) : r ? n[a.p]() : n[a.p]);
              }
            }),
            (m.removeProp = function(e) {
              var t = this._lookup[e];
              t &&
                (t._prev
                  ? (t._prev._next = t._next)
                  : t === this._firstVP && (this._firstVP = t._next),
                t._next && (t._next._prev = t._prev),
                (this._lookup[e] = 0),
                t.f && (this._lookup[this._altProp(e)] = 0));
            }),
            (m.isTrackingProp = function(e) {
              return this._lookup[e] instanceof p;
            }),
            (m.getVelocity = function(e) {
              var t,
                i,
                n,
                r = this._lookup[e],
                o = this.target;
              if (!r) throw "The velocity of " + e + " is not being tracked.";
              return (
                (t = r.css ? c(o, r.p) : r.f ? o[r.p]() : o[r.p]),
                (i = t - r.v2),
                ("rad" === r.type || "deg" === r.type) &&
                  ((n = "rad" === r.type ? 2 * Math.PI : 360),
                  (i %= n),
                  i !== i % (n / 2) && (i = 0 > i ? i + n : i - n)),
                i / (d.time - r.t2)
              );
            }),
            (m._altProp = function(e) {
              var t = e.substr(0, 3),
                i =
                  ("get" === t ? "set" : "set" === t ? "get" : t) + e.substr(3);
              return "function" == typeof this.target[i] ? i : e;
            }),
            (h.getByTarget = function(i) {
              var n = t;
              for (
                "string" == typeof i && (i = e.selector(i)),
                  i.length &&
                    i !== window &&
                    i[0] &&
                    i[0].style &&
                    !i.nodeType &&
                    (i = i[0]);
                n;

              ) {
                if (n.target === i) return n;
                n = n._next;
              }
            }),
            (h.track = function(e, t, i) {
              var n = f(e),
                r = t.split(","),
                o = r.length;
              for (i = (i || "").split(","), n || (n = new h(e)); --o > -1; )
                n.addProp(r[o], i[o] || i[0]);
              return n;
            }),
            (h.untrack = function(e, i) {
              var n = f(e),
                r = (i || "").split(","),
                o = r.length;
              if (n) {
                for (; --o > -1; ) n.removeProp(r[o]);
                (n._firstVP && i) ||
                  (n._prev
                    ? (n._prev._next = n._next)
                    : n === t && (t = n._next),
                  n._next && (n._next._prev = n._prev));
              }
            }),
            (h.isTracking = function(e, t) {
              var i = f(e);
              return i ? (!t && i._firstVP ? !0 : i.isTrackingProp(t)) : !1;
            }),
            h
          );
        },
        !0
      );
  }),
  window._gsDefine && window._gsQueue.pop()(),
  (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine(
      "utils.Draggable",
      ["events.EventDispatcher", "TweenLite"],
      function(e, t) {
        var i,
          n,
          r,
          o,
          a,
          s = { css: {} },
          l = { css: {} },
          c = { css: {} },
          d = { css: {} },
          p = {},
          u = document,
          h = u.documentElement || {},
          f = [],
          m = function() {
            return !1;
          },
          g = 180 / Math.PI,
          v = 999999999999999,
          y =
            Date.now ||
            function() {
              return new Date().getTime();
            },
          b = u.all && !u.addEventListener,
          x = [],
          w = {},
          $ = 0,
          _ = /^(?:a|input|textarea|button|select)$/i,
          T = 0,
          k = 0,
          C = function() {
            for (var e = x.length; --e > -1; ) x[e]();
          },
          F = function(e) {
            x.push(e),
              1 === x.length &&
                t.ticker.addEventListener("tick", C, this, !1, 1);
          },
          S = function(e) {
            for (var i = x.length; --i > -1; ) x[i] === e && x.splice(i, 1);
            t.to(P, 0, { overwrite: "all", delay: 15, onComplete: P });
          },
          P = function() {
            x.length || t.ticker.removeEventListener("tick", C);
          },
          D = function(e, t) {
            var i;
            for (i in t) void 0 === e[i] && (e[i] = t[i]);
            return e;
          },
          A = function() {
            return null != window.pageYOffset
              ? window.pageYOffset
              : null != u.scrollTop
              ? u.scrollTop
              : h.scrollTop || u.body.scrollTop || 0;
          },
          I = function() {
            return null != window.pageXOffset
              ? window.pageXOffset
              : null != u.scrollLeft
              ? u.scrollLeft
              : h.scrollLeft || u.body.scrollLeft || 0;
          },
          E = function(e, t) {
            return (
              (e = e || window.event),
              (p.pageX = e.clientX + u.body.scrollLeft + h.scrollLeft),
              (p.pageY = e.clientY + u.body.scrollTop + h.scrollTop),
              t && (e.returnValue = !1),
              p
            );
          },
          j = function(e) {
            return e
              ? ("string" == typeof e && (e = t.selector(e)),
                e.length &&
                  e !== window &&
                  e[0] &&
                  e[0].style &&
                  !e.nodeType &&
                  (e = e[0]),
                e === window || (e.nodeType && e.style) ? e : null)
              : e;
          },
          M = function(e, t) {
            var n,
              r,
              o,
              a = e.style;
            if (void 0 === a[t]) {
              for (
                o = ["O", "Moz", "ms", "Ms", "Webkit"],
                  r = 5,
                  n = t.charAt(0).toUpperCase() + t.substr(1);
                --r > -1 && void 0 === a[o[r] + n];

              );
              if (0 > r) return "";
              (i = 3 === r ? "ms" : o[r]), (t = i + n);
            }
            return t;
          },
          O = function(e, t, i) {
            var n = e.style;
            void 0 === n[t] && (t = M(e, t)),
              null == i
                ? n.removeProperty
                  ? n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
                  : n.removeAttribute(t)
                : void 0 !== n[t] && (n[t] = i);
          },
          N = u.defaultView ? u.defaultView.getComputedStyle : m,
          L = /(?:Left|Right|Width)/i,
          R = /(?:\d|\-|\+|=|#|\.)*/g,
          z = function(e, t, i, n, r) {
            if ("px" === n || !n) return i;
            if ("auto" === n || !i) return 0;
            var o,
              a = L.test(t),
              s = e,
              l = X.style,
              c = 0 > i;
            return (
              c && (i = -i),
              "%" === n && -1 !== t.indexOf("border")
                ? (o = (i / 100) * (a ? e.clientWidth : e.clientHeight))
                : ((l.cssText =
                    "border:0 solid red;position:" +
                    W(e, "position", !0) +
                    ";line-height:0;"),
                  "%" !== n && s.appendChild
                    ? (l[a ? "borderLeftWidth" : "borderTopWidth"] = i + n)
                    : ((s = e.parentNode || u.body),
                      (l[a ? "width" : "height"] = i + n)),
                  s.appendChild(X),
                  (o = parseFloat(X[a ? "offsetWidth" : "offsetHeight"])),
                  s.removeChild(X),
                  0 !== o || r || (o = z(e, t, i, n, !0))),
              c ? -o : o
            );
          },
          H = function(e, t) {
            if ("absolute" !== W(e, "position", !0)) return 0;
            var i = "left" === t ? "Left" : "Top",
              n = W(e, "margin" + i, !0);
            return (
              e["offset" + i] - (z(e, t, parseFloat(n), n.replace(R, "")) || 0)
            );
          },
          W = function(e, t, i) {
            var n,
              r = (e._gsTransform || {})[t];
            return r || 0 === r
              ? r
              : (e.style[t]
                  ? (r = e.style[t])
                  : (n = N(e))
                  ? ((r = n.getPropertyValue(
                      t.replace(/([A-Z])/g, "-$1").toLowerCase()
                    )),
                    (r = r || n.length ? r : n[t]))
                  : e.currentStyle && (r = e.currentStyle[t]),
                "auto" !== r || ("top" !== t && "left" !== t) || (r = H(e, t)),
                i ? r : parseFloat(r) || 0);
          },
          B = function(e, t, i) {
            var n = e.vars,
              r = n[i],
              o = e._listeners[t];
            "function" == typeof r &&
              r.apply(n[i + "Scope"] || e, n[i + "Params"] || [e.pointerEvent]),
              o && e.dispatchEvent(t);
          },
          q = function(e, t) {
            var i,
              n,
              r,
              o = j(e);
            return o
              ? ot(o, t)
              : void 0 !== e.left
              ? ((r = et(t)),
                {
                  left: e.left - r.x,
                  top: e.top - r.y,
                  width: e.width,
                  height: e.height,
                })
              : ((n = e.min || e.minX || e.minRotation || 0),
                (i = e.min || e.minY || 0),
                {
                  left: n,
                  top: i,
                  width: (e.max || e.maxX || e.maxRotation || 0) - n,
                  height: (e.max || e.maxY || 0) - i,
                });
          },
          X = u.createElement("div"),
          U = "" !== M(X, "perspective"),
          Y = M(X, "transformOrigin")
            .replace(/^ms/g, "Ms")
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase(),
          V = M(X, "transform"),
          Q = V.replace(/^ms/g, "Ms")
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase(),
          J = {},
          G = {},
          Z = (function() {
            if (!b) {
              var e = "http://www.w3.org/2000/svg",
                t = u.createElementNS(e, "svg"),
                i = u.createElementNS(e, "rect");
              return (
                i.setAttributeNS(null, "width", "10"),
                i.setAttributeNS(null, "height", "10"),
                t.appendChild(i),
                t
              );
            }
          })(),
          K = function(e) {
            if (!e.getBoundingClientRect || !e.parentNode)
              return { offsetTop: 0, offsetLeft: 0, offsetParent: h };
            for (
              var t, i, n, r = e, o = e.style.cssText;
              !r.offsetParent && r.parentNode;

            )
              r = r.parentNode;
            return (
              e.parentNode.insertBefore(Z, e),
              e.parentNode.removeChild(e),
              (Z.style.cssText = o),
              (Z.style[V] = "none"),
              Z.setAttribute("class", e.getAttribute("class")),
              (t = Z.getBoundingClientRect()),
              (n = r.offsetParent),
              n
                ? (n === u.body && h && (n = h),
                  (i = n.getBoundingClientRect()))
                : (i = { top: -A(), left: -I() }),
              Z.parentNode.insertBefore(e, Z),
              e.parentNode.removeChild(Z),
              {
                offsetLeft: t.left - i.left,
                offsetTop: t.top - i.top,
                offsetParent: r.offsetParent || h,
              }
            );
          },
          et = function(e, t) {
            if (((t = t || {}), !e || e === h || !e.parentNode))
              return { x: 0, y: 0 };
            var i = N(e),
              n = Y && i ? i.getPropertyValue(Y) : "50% 50%",
              r = n.split(" "),
              o =
                -1 !== n.indexOf("left")
                  ? "0%"
                  : -1 !== n.indexOf("right")
                  ? "100%"
                  : r[0],
              a =
                -1 !== n.indexOf("top")
                  ? "0%"
                  : -1 !== n.indexOf("bottom")
                  ? "100%"
                  : r[1];
            return (
              ("center" === a || null == a) && (a = "50%"),
              ("center" === o || isNaN(parseFloat(o))) && (o = "50%"),
              (t.x =
                -1 !== o.indexOf("%")
                  ? (e.offsetWidth * parseFloat(o)) / 100
                  : parseFloat(o)),
              (t.y =
                -1 !== a.indexOf("%")
                  ? (e.offsetHeight * parseFloat(a)) / 100
                  : parseFloat(a)),
              t
            );
          },
          tt = function(e, t, i) {
            var n, r, a, s, l, c;
            return e !== window && e && e.parentNode
              ? ((n = N(e)),
                (r = n
                  ? n.getPropertyValue(Q)
                  : e.currentStyle
                  ? e.currentStyle[V]
                  : "1,0,0,1,0,0"),
                (r = (r + "").match(/(?:\-|\b)[\d\-\.e]+\b/g) || [
                  1,
                  0,
                  0,
                  1,
                  0,
                  0,
                ]),
                r.length > 6 && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]),
                t &&
                  ((a = e.parentNode),
                  (c =
                    void 0 === e.offsetLeft &&
                    "svg" === e.nodeName.toLowerCase()
                      ? K(e)
                      : e),
                  (s = c.offsetParent),
                  (l = a === h || a === u.body),
                  (r[4] =
                    Number(r[4]) +
                    t.x +
                    (c.offsetLeft || 0) -
                    i.x -
                    (l ? 0 : a.scrollLeft) +
                    (s ? parseInt(W(s, "borderLeftWidth"), 10) || 0 : 0)),
                  (r[5] =
                    Number(r[5]) +
                    t.y +
                    (c.offsetTop || 0) -
                    i.y -
                    (l ? 0 : a.scrollTop) +
                    (s ? parseInt(W(s, "borderTopWidth"), 10) || 0 : 0)),
                  s ||
                    "fixed" !== W(e, "position", n) ||
                    ((r[4] += I()), (r[5] += A())),
                  void 0 === o &&
                    u.body &&
                    V &&
                    (o = (function() {
                      var e,
                        t,
                        i = u.createElement("div"),
                        n = u.createElement("div");
                      return (
                        (n.style.position = "absolute"),
                        u.body.appendChild(i),
                        i.appendChild(n),
                        (e = n.offsetParent),
                        (i.style[V] = "rotate(1deg)"),
                        (t = n.offsetParent === e),
                        u.body.removeChild(i),
                        t
                      );
                    })()),
                  !a ||
                    a.offsetParent !== s ||
                    (o && "100100" !== tt(a).join("")) ||
                    ((r[4] -= a.offsetLeft || 0), (r[5] -= a.offsetTop || 0))),
                r)
              : [1, 0, 0, 1, 0, 0];
          },
          it = function(e, t) {
            for (
              var i,
                n,
                r,
                o,
                a,
                s,
                l,
                c,
                d = et(e, J),
                p = et(e.parentNode, G),
                u = tt(e, d, p);
              (e = e.parentNode) && e.parentNode && e !== h;

            )
              (d = p),
                (p = et(e.parentNode, d === J ? G : J)),
                (l = tt(e, d, p)),
                (i = u[0]),
                (n = u[1]),
                (r = u[2]),
                (o = u[3]),
                (a = u[4]),
                (s = u[5]),
                (u[0] = i * l[0] + n * l[2]),
                (u[1] = i * l[1] + n * l[3]),
                (u[2] = r * l[0] + o * l[2]),
                (u[3] = r * l[1] + o * l[3]),
                (u[4] = a * l[0] + s * l[2] + l[4]),
                (u[5] = a * l[1] + s * l[3] + l[5]);
            return (
              t &&
                ((i = u[0]),
                (n = u[1]),
                (r = u[2]),
                (o = u[3]),
                (a = u[4]),
                (s = u[5]),
                (c = i * o - n * r),
                (u[0] = o / c),
                (u[1] = -n / c),
                (u[2] = -r / c),
                (u[3] = i / c),
                (u[4] = (r * s - o * a) / c),
                (u[5] = -(i * s - n * a) / c)),
              u
            );
          },
          nt = function(e, t, i) {
            var n = it(e),
              r = t.x,
              o = t.y;
            return (
              (i = i === !0 ? t : i || {}),
              (i.x = r * n[0] + o * n[2] + n[4]),
              (i.y = r * n[1] + o * n[3] + n[5]),
              i
            );
          },
          rt = function(e, t, i) {
            var n = e.x * t[0] + e.y * t[2] + t[4],
              r = e.x * t[1] + e.y * t[3] + t[5];
            return (
              (e.x = n * i[0] + r * i[2] + i[4]),
              (e.y = n * i[1] + r * i[3] + i[5]),
              e
            );
          },
          ot = function(e, t) {
            var i, n, r, o, a, s, l, c, d, p, f;
            return (
              e === window
                ? ((o = A()),
                  (n = I()),
                  (r =
                    n +
                    (h.clientWidth || e.innerWidth || u.body.clientWidth || 0)),
                  (a =
                    o +
                    ((e.innerHeight || 0) - 20 < h.clientHeight
                      ? h.clientHeight
                      : e.innerHeight || u.body.clientHeight || 0)))
                : ((i = et(e)),
                  (n = -i.x),
                  (r = n + e.offsetWidth),
                  (o = -i.y),
                  (a = o + e.offsetHeight)),
              e === t
                ? { left: n, top: o, width: r - n, height: a - o }
                : ((s = it(e)),
                  (l = it(t, !0)),
                  (c = rt({ x: n, y: o }, s, l)),
                  (d = rt({ x: r, y: o }, s, l)),
                  (p = rt({ x: r, y: a }, s, l)),
                  (f = rt({ x: n, y: a }, s, l)),
                  (n = Math.min(c.x, d.x, p.x, f.x)),
                  (o = Math.min(c.y, d.y, p.y, f.y)),
                  {
                    left: n,
                    top: o,
                    width: Math.max(c.x, d.x, p.x, f.x) - n,
                    height: Math.max(c.y, d.y, p.y, f.y) - o,
                  })
            );
          },
          at = function(e) {
            return e.length &&
              e[0] &&
              ((e[0].nodeType && e[0].style && !e.nodeType) ||
                (e[0].length && e[0][0]))
              ? !0
              : !1;
          },
          st = function(e) {
            var t,
              i,
              n,
              r = [],
              o = e.length;
            for (t = 0; o > t; t++)
              if (((i = e[t]), at(i)))
                for (n = i.length, n = 0; i.length > n; n++) r.push(i[n]);
              else r.push(i);
            return r;
          },
          lt = "ontouchstart" in h && "orientation" in window,
          ct = (function(e) {
            for (
              var t = e.split(","),
                i = (void 0 !== X.onpointerdown
                  ? "pointerdown,pointermove,pointerup,pointercancel"
                  : void 0 !== X.onmspointerdown
                  ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                  : e
                ).split(","),
                n = {},
                r = 7;
              --r > -1;

            )
              (n[t[r]] = i[r]), (n[i[r]] = t[r]);
            return n;
          })("touchstart,touchmove,touchend,touchcancel"),
          dt = function(e, t, i) {
            e.addEventListener
              ? e.addEventListener(ct[t] || t, i, !1)
              : e.attachEvent && e.attachEvent("on" + t, i);
          },
          pt = function(e, t, i) {
            e.removeEventListener
              ? e.removeEventListener(ct[t] || t, i)
              : e.detachEvent && e.detachEvent("on" + t, i);
          },
          ut = function(e) {
            (n = e.touches && e.touches.length > T),
              pt(e.target, "touchend", ut);
          },
          ht = function(e) {
            (n = e.touches && e.touches.length > T),
              dt(e.target, "touchend", ut);
          },
          ft = function(e, t, i, n, r, o) {
            var a,
              s,
              l,
              c = {};
            if (t)
              if (1 !== r && t instanceof Array)
                for (c.end = a = [], l = t.length, s = 0; l > s; s++)
                  a[s] = t[s] * r;
              else
                c.end =
                  "function" == typeof t
                    ? function(i) {
                        return t.call(e, i) * r;
                      }
                    : t;
            return (
              (i || 0 === i) && (c.max = i),
              (n || 0 === n) && (c.min = n),
              o && (c.velocity = 0),
              c
            );
          },
          mt = function(e) {
            var t;
            return e && e.getAttribute && "BODY" !== e.nodeName
              ? "true" === (t = e.getAttribute("data-clickable")) ||
                ("false" !== t && (e.onclick || _.test(e.nodeName + "")))
                ? !0
                : mt(e.parentNode)
              : !1;
          },
          gt = (function() {
            var e,
              t = u.createElement("div"),
              i = u.createElement("div"),
              n = i.style,
              r = u.body || X;
            return (
              (n.display = "inline-block"),
              (n.position = "relative"),
              (t.style.cssText = i.innerHTML =
                "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden"),
              t.appendChild(i),
              r.appendChild(t),
              (a = i.offsetHeight + 18 > t.scrollHeight),
              (n.width = "100%"),
              V ||
                ((n.paddingRight = "500px"),
                (e = t.scrollLeft = t.scrollWidth - t.clientWidth),
                (n.left = "-90px"),
                (e = e !== t.scrollLeft)),
              r.removeChild(t),
              e
            );
          })(),
          vt = function(e, i) {
            (e = j(e)), (i = i || {});
            var n,
              r,
              o,
              s,
              l,
              c,
              d = u.createElement("div"),
              p = d.style,
              h = e.firstChild,
              f = 0,
              m = 0,
              g = e.scrollTop,
              v = e.scrollLeft,
              y = e.scrollWidth,
              x = e.scrollHeight,
              w = 0,
              $ = 0,
              _ = 0;
            U && i.force3D !== !1
              ? ((l = "translate3d("), (c = "px,0px)"))
              : V && ((l = "translate("), (c = "px)")),
              (this.scrollTop = function(e, t) {
                return arguments.length
                  ? (this.top(-e, t), void 0)
                  : -this.top();
              }),
              (this.scrollLeft = function(e, t) {
                return arguments.length
                  ? (this.left(-e, t), void 0)
                  : -this.left();
              }),
              (this.left = function(n, r) {
                if (!arguments.length) return -(e.scrollLeft + m);
                var o = e.scrollLeft - v,
                  a = m;
                return (o > 2 || -2 > o) && !r
                  ? ((v = e.scrollLeft),
                    t.killTweensOf(this, !0, { left: 1, scrollLeft: 1 }),
                    this.left(-v),
                    i.onKill && i.onKill(),
                    void 0)
                  : ((n = -n),
                    0 > n
                      ? ((m = 0 | (n - 0.5)), (n = 0))
                      : n > $
                      ? ((m = 0 | (n - $)), (n = $))
                      : (m = 0),
                    (m || a) &&
                      (l
                        ? this._suspendTransforms ||
                          (p[V] = l + -m + "px," + -f + c)
                        : (p.left = -m + "px"),
                      gt && m + w >= 0 && (p.paddingRight = m + w + "px")),
                    (e.scrollLeft = 0 | n),
                    (v = e.scrollLeft),
                    void 0);
              }),
              (this.top = function(n, r) {
                if (!arguments.length) return -(e.scrollTop + f);
                var o = e.scrollTop - g,
                  a = f;
                return (o > 2 || -2 > o) && !r
                  ? ((g = e.scrollTop),
                    t.killTweensOf(this, !0, { top: 1, scrollTop: 1 }),
                    this.top(-g),
                    i.onKill && i.onKill(),
                    void 0)
                  : ((n = -n),
                    0 > n
                      ? ((f = 0 | (n - 0.5)), (n = 0))
                      : n > _
                      ? ((f = 0 | (n - _)), (n = _))
                      : (f = 0),
                    (f || a) &&
                      (l
                        ? this._suspendTransforms ||
                          (p[V] = l + -m + "px," + -f + c)
                        : (p.top = -f + "px")),
                    (e.scrollTop = 0 | n),
                    (g = e.scrollTop),
                    void 0);
              }),
              (this.maxScrollTop = function() {
                return _;
              }),
              (this.maxScrollLeft = function() {
                return $;
              }),
              (this.disable = function() {
                for (h = d.firstChild; h; )
                  (s = h.nextSibling), e.appendChild(h), (h = s);
                e === d.parentNode && e.removeChild(d);
              }),
              (this.enable = function() {
                if (((h = e.firstChild), h !== d)) {
                  for (; h; ) (s = h.nextSibling), d.appendChild(h), (h = s);
                  e.appendChild(d), this.calibrate();
                }
              }),
              (this.calibrate = function(t) {
                var i,
                  s,
                  l = e.clientWidth === n;
                (g = e.scrollTop),
                  (v = e.scrollLeft),
                  (!l ||
                    e.clientHeight !== r ||
                    d.offsetHeight !== o ||
                    y !== e.scrollWidth ||
                    x !== e.scrollHeight ||
                    t) &&
                    ((f || m) &&
                      ((i = this.left()),
                      (s = this.top()),
                      this.left(-e.scrollLeft),
                      this.top(-e.scrollTop)),
                    (!l || t) &&
                      ((p.display = "block"),
                      (p.width = "auto"),
                      (p.paddingRight = "0px"),
                      (w = Math.max(0, e.scrollWidth - e.clientWidth)),
                      w &&
                        (w +=
                          W(e, "paddingLeft") +
                          (a ? W(e, "paddingRight") : 0))),
                    (p.display = "inline-block"),
                    (p.position = "relative"),
                    (p.overflow = "visible"),
                    (p.width = "100%"),
                    (p.paddingRight = w + "px"),
                    a && (p.paddingBottom = W(e, "paddingBottom", !0)),
                    b && (p.zoom = "1"),
                    (n = e.clientWidth),
                    (r = e.clientHeight),
                    (y = e.scrollWidth),
                    (x = e.scrollHeight),
                    ($ = e.scrollWidth - n),
                    (_ = e.scrollHeight - r),
                    (o = d.offsetHeight),
                    (i || s) && (this.left(i), this.top(s)));
              }),
              (this.content = d),
              (this.element = e),
              (this._suspendTransforms = !1),
              this.enable();
          },
          yt = function(i, o) {
            e.call(this, i),
              (i = j(i)),
              r ||
                (r = (window.GreenSockGlobals || window).com.greensock.plugins
                  .ThrowPropsPlugin),
              (this.vars = o = o || {}),
              (this.target = i),
              (this.x = this.y = this.rotation = 0),
              (this.dragResistance = parseFloat(o.dragResistance) || 0),
              (this.edgeResistance = isNaN(o.edgeResistance)
                ? 1
                : parseFloat(o.edgeResistance) || 0),
              (this.lockAxis = o.lockAxis);
            var a,
              p,
              h,
              x,
              _,
              C,
              P,
              A,
              I,
              M,
              N,
              L,
              R,
              z,
              H,
              X,
              U,
              Y,
              V,
              Q,
              J,
              G,
              Z,
              K,
              et,
              tt,
              rt = (o.type || (b ? "top,left" : "x,y")).toLowerCase(),
              ot = -1 !== rt.indexOf("x") || -1 !== rt.indexOf("y"),
              at = -1 !== rt.indexOf("rotation"),
              st = ot ? "x" : "left",
              ut = ot ? "y" : "top",
              gt =
                -1 !== rt.indexOf("x") ||
                -1 !== rt.indexOf("left") ||
                "scroll" === rt,
              bt =
                -1 !== rt.indexOf("y") ||
                -1 !== rt.indexOf("top") ||
                "scroll" === rt,
              xt = this,
              wt = j(o.trigger || o.handle || i),
              $t = {},
              _t = 0,
              Tt = function(e) {
                if (Y) {
                  var n = xt.x,
                    r = xt.y,
                    o = 1e-6;
                  o > n && n > -o && (n = 0),
                    o > r && r > -o && (r = 0),
                    at
                      ? ((z.rotation = xt.rotation = xt.x), t.set(i, R))
                      : p
                      ? (bt && p.top(r), gt && p.left(n))
                      : ot
                      ? (bt && (z.y = r), gt && (z.x = n), t.set(i, R))
                      : (bt && (i.style.top = r + "px"),
                        gt && (i.style.left = n + "px")),
                    A && !e && B(xt, "drag", "onDrag");
                }
                Y = !1;
              },
              kt = function(e, n) {
                var r;
                ot
                  ? (i._gsTransform || t.set(i, { x: "+=0" }),
                    (xt.y = i._gsTransform.y),
                    (xt.x = i._gsTransform.x))
                  : at
                  ? (i._gsTransform || t.set(i, { x: "+=0" }),
                    (xt.x = xt.rotation = i._gsTransform.rotation))
                  : p
                  ? ((xt.y = p.top()), (xt.x = p.left()))
                  : ((xt.y = parseInt(i.style.top, 10) || 0),
                    (xt.x = parseInt(i.style.left, 10) || 0)),
                  (!Q && !J) ||
                    n ||
                    (Q &&
                      ((r = Q(xt.x)),
                      r !== xt.x &&
                        ((xt.x = r), at && (xt.rotation = r), (Y = !0))),
                    J && ((r = J(xt.y)), r !== xt.y && ((xt.y = r), (Y = !0))),
                    Y && Tt(!0)),
                  o.onThrowUpdate &&
                    !e &&
                    o.onThrowUpdate.apply(
                      o.onThrowUpdateScope || xt,
                      o.onThrowUpdateParams || f
                    );
              },
              Ct = function() {
                var e, t, n, r;
                (P = !1),
                  p
                    ? (p.calibrate(),
                      (xt.minX = M = -p.maxScrollLeft()),
                      (xt.minY = L = -p.maxScrollTop()),
                      (xt.maxX = I = xt.maxY = N = 0),
                      (P = !0))
                    : o.bounds &&
                      ((e = q(o.bounds, i.parentNode)),
                      at
                        ? ((xt.minX = M = e.left),
                          (xt.maxX = I = e.left + e.width),
                          (xt.minY = L = xt.maxY = N = 0))
                        : void 0 !== o.bounds.maxX || void 0 !== o.bounds.maxY
                        ? ((e = o.bounds),
                          (xt.minX = M = e.minX),
                          (xt.minY = L = e.minY),
                          (xt.maxX = I = e.maxX),
                          (xt.maxY = N = e.maxY))
                        : ((t = q(i, i.parentNode)),
                          (xt.minX = M = W(i, st) + e.left - t.left),
                          (xt.minY = L = W(i, ut) + e.top - t.top),
                          (xt.maxX = I = M + (e.width - t.width)),
                          (xt.maxY = N = L + (e.height - t.height))),
                      M > I &&
                        ((xt.minX = I), (xt.maxX = I = M), (M = xt.minX)),
                      L > N &&
                        ((xt.minY = N), (xt.maxY = N = L), (L = xt.minY)),
                      at && ((xt.minRotation = M), (xt.maxRotation = I)),
                      (P = !0)),
                  o.liveSnap &&
                    ((n = o.liveSnap === !0 ? o.snap || {} : o.liveSnap),
                    (r = n instanceof Array || "function" == typeof n),
                    at
                      ? ((Q = At(r ? n : n.rotation, M, I, 1)), (J = null))
                      : (gt &&
                          (Q = At(
                            r ? n : n.x || n.left || n.scrollLeft,
                            M,
                            I,
                            p ? -1 : 1
                          )),
                        bt &&
                          (J = At(
                            r ? n : n.y || n.top || n.scrollTop,
                            L,
                            N,
                            p ? -1 : 1
                          ))));
              },
              Ft = function(e, t) {
                var n, a, s;
                e && r
                  ? (e === !0 &&
                      ((n = o.snap || {}),
                      (a = n instanceof Array || "function" == typeof n),
                      (e = {
                        resistance:
                          (o.throwResistance || o.resistance || 1e3) /
                          (at ? 10 : 1),
                      }),
                      at
                        ? (e.rotation = ft(xt, a ? n : n.rotation, I, M, 1, t))
                        : (gt &&
                            (e[st] = ft(
                              xt,
                              a ? n : n.x || n.left || n.scrollLeft,
                              I,
                              M,
                              p ? -1 : 1,
                              t || (xt.lockAxis && "x" === K)
                            )),
                          bt &&
                            (e[ut] = ft(
                              xt,
                              a ? n : n.y || n.top || n.scrollTop,
                              N,
                              L,
                              p ? -1 : 1,
                              t || (xt.lockAxis && "y" === K)
                            )))),
                    (xt.tween = s = r.to(
                      p || i,
                      {
                        throwProps: e,
                        ease: o.ease || Power3.easeOut,
                        onComplete: o.onThrowComplete,
                        onCompleteParams: o.onThrowCompleteParams,
                        onCompleteScope: o.onThrowCompleteScope || xt,
                        onUpdate: o.fastMode ? o.onThrowUpdate : kt,
                        onUpdateParams: o.fastMode
                          ? o.onThrowUpdateParams
                          : null,
                        onUpdateScope: o.onThrowUpdateScope || xt,
                      },
                      isNaN(o.maxDuration) ? 2 : o.maxDuration,
                      isNaN(o.minDuration) ? 0.5 : o.minDuration,
                      isNaN(o.overshootTolerance)
                        ? 1 - xt.edgeResistance + 0.2
                        : o.overshootTolerance
                    )),
                    o.fastMode ||
                      (p && (p._suspendTransforms = !0),
                      s.render(s.duration(), !0, !0),
                      kt(!0, !0),
                      (xt.endX = xt.x),
                      (xt.endY = xt.y),
                      at && (xt.endRotation = xt.x),
                      s.play(0),
                      kt(!0, !0),
                      p && (p._suspendTransforms = !1)))
                  : P && xt.applyBounds();
              },
              St = function() {
                (et = it(i.parentNode, !0)),
                  et[1] ||
                    et[2] ||
                    1 != et[0] ||
                    1 != et[3] ||
                    0 != et[4] ||
                    0 != et[5] ||
                    (et = null);
              },
              Pt = function() {
                var e = 1 - xt.edgeResistance;
                St(),
                  p
                    ? (Ct(), (C = p.top()), (_ = p.left()))
                    : (Dt() ? (kt(!0, !0), Ct()) : xt.applyBounds(),
                      at
                        ? ((U = nt(i, { x: 0, y: 0 })),
                          kt(!0, !0),
                          (_ = xt.x),
                          (C = xt.y = Math.atan2(U.y - x, h - U.x) * g))
                        : ((C = W(i, ut)), (_ = W(i, st)))),
                  P &&
                    e &&
                    (_ > I
                      ? (_ = I + (_ - I) / e)
                      : M > _ && (_ = M - (M - _) / e),
                    at ||
                      (C > N
                        ? (C = N + (C - N) / e)
                        : L > C && (C = L - (L - C) / e)));
              },
              Dt = function() {
                return xt.tween && xt.tween.isActive();
              },
              At = function(e, t, i, n) {
                return "function" == typeof e
                  ? function(r) {
                      var o = xt.isPressed ? 1 - xt.edgeResistance : 1;
                      return (
                        e.call(
                          xt,
                          r > i ? i + (r - i) * o : t > r ? t + (r - t) * o : r
                        ) * n
                      );
                    }
                  : e instanceof Array
                  ? function(n) {
                      for (var r, o, a = e.length, s = 0, l = v; --a > -1; )
                        (r = e[a]),
                          (o = r - n),
                          0 > o && (o = -o),
                          l > o && r >= t && i >= r && ((s = a), (l = o));
                      return e[s];
                    }
                  : isNaN(e)
                  ? function(e) {
                      return e;
                    }
                  : function() {
                      return e * n;
                    };
              },
              It = function(e) {
                var n;
                if (a && !xt.isPressed && e) {
                  if (
                    ((tt = Dt()),
                    (xt.pointerEvent = e),
                    ct[e.type]
                      ? ((Z = -1 !== e.type.indexOf("touch") ? wt : u),
                        dt(Z, "touchend", jt),
                        dt(Z, "touchmove", Et),
                        dt(Z, "touchcancel", jt),
                        dt(u, "touchstart", ht))
                      : ((Z = null),
                        dt(u, "mousemove", Et),
                        dt(u, "mouseup", jt)),
                    (G = mt(e.target) && !o.dragClickables))
                  )
                    return dt(e.target, "change", jt), void 0;
                  b
                    ? (e = E(e, !0))
                    : !p ||
                      (e.touches && e.touches.length > T + 1) ||
                      (e.preventDefault(),
                      e.preventManipulation && e.preventManipulation()),
                    e.changedTouches
                      ? ((e = H = e.changedTouches[0]), (X = e.identifier))
                      : e.pointerId
                      ? (X = e.pointerId)
                      : (H = null),
                    T++,
                    F(Tt),
                    xt.tween && xt.tween.kill(),
                    t.killTweensOf(p || i, !0, $t),
                    p && t.killTweensOf(i, !0, { scrollTo: 1 }),
                    (x = xt.pointerY = e.pageY),
                    (h = xt.pointerX = e.pageX),
                    Pt(),
                    et &&
                      ((n = h * et[0] + x * et[2] + et[4]),
                      (x = h * et[1] + x * et[3] + et[5]),
                      (h = n)),
                    (xt.tween = K = null),
                    at ||
                      p ||
                      o.zIndexBoost === !1 ||
                      (i.style.zIndex = yt.zIndex++),
                    (xt.isPressed = !0),
                    (A = !(!o.onDrag && !xt._listeners.drag)),
                    at || O(wt, "cursor", o.cursor || "move"),
                    B(xt, "press", "onPress");
                }
              },
              Et = function(e) {
                if (a && !n && xt.isPressed) {
                  b
                    ? (e = E(e, !0))
                    : (e.preventDefault(),
                      e.preventManipulation && e.preventManipulation()),
                    (xt.pointerEvent = e);
                  var t,
                    i,
                    r,
                    o,
                    s,
                    l,
                    c,
                    d,
                    p,
                    u = e.changedTouches,
                    f = 1 - xt.dragResistance,
                    m = 1 - xt.edgeResistance;
                  if (u) {
                    if (((e = u[0]), e !== H && e.identifier !== X)) {
                      for (
                        s = u.length;
                        --s > -1 && (e = u[s]).identifier !== X;

                      );
                      if (0 > s) return;
                    }
                  } else if (e.pointerId && X && e.pointerId !== X) return;
                  (c = xt.pointerX = e.pageX),
                    (d = xt.pointerY = e.pageY),
                    at
                      ? ((o = Math.atan2(U.y - e.pageY, e.pageX - U.x) * g),
                        (l = xt.y - o),
                        (xt.y = o),
                        l > 180 ? (C -= 360) : -180 > l && (C += 360),
                        (r = _ + (C - o) * f))
                      : (et &&
                          ((p = c * et[0] + d * et[2] + et[4]),
                          (d = c * et[1] + d * et[3] + et[5]),
                          (c = p)),
                        (i = d - x),
                        (t = c - h),
                        2 > i && i > -2 && (i = 0),
                        2 > t && t > -2 && (t = 0),
                        xt.lockAxis &&
                          (t || i) &&
                          ("y" === K || (!K && Math.abs(t) > Math.abs(i) && gt)
                            ? ((i = 0), (K = "y"))
                            : bt && ((t = 0), (K = "x"))),
                        (r = _ + t * f),
                        (o = C + i * f)),
                    Q || J
                      ? (Q && (r = Q(r)), J && (o = J(o)))
                      : P &&
                        (r > I
                          ? (r = I + (r - I) * m)
                          : M > r && (r = M + (r - M) * m),
                        at ||
                          (o > N
                            ? (o = N + (o - N) * m)
                            : L > o && (o = L + (o - L) * m))),
                    (xt.x !== r || (xt.y !== o && !at)) &&
                      ((xt.x = xt.endX = r),
                      at ? (xt.endRotation = r) : (xt.y = xt.endY = o),
                      (Y = !0),
                      xt.isDragging ||
                        ((xt.isDragging = !0),
                        B(xt, "dragstart", "onDragStart")));
                }
              },
              jt = function(e, t) {
                if (
                  !(!a || (e && X && !t && e.pointerId && e.pointerId !== X))
                ) {
                  xt.isPressed = !1;
                  var i,
                    n,
                    r = e,
                    s = xt.isDragging;
                  if (
                    (Z
                      ? (pt(Z, "touchend", jt),
                        pt(Z, "touchmove", Et),
                        pt(Z, "touchcancel", jt),
                        pt(u, "touchstart", ht))
                      : (pt(u, "mouseup", jt), pt(u, "mousemove", Et)),
                    (Y = !1),
                    G)
                  )
                    return (
                      e && pt(e.target, "change", jt),
                      B(xt, "release", "onRelease"),
                      B(xt, "click", "onClick"),
                      (G = !1),
                      void 0
                    );
                  if (
                    (S(Tt),
                    at || O(wt, "cursor", o.cursor || "move"),
                    s && ((_t = k = y()), (xt.isDragging = !1)),
                    T--,
                    e)
                  ) {
                    if (
                      (b && (e = E(e, !1)),
                      (i = e.changedTouches),
                      i && ((e = i[0]), e !== H && e.identifier !== X))
                    ) {
                      for (
                        n = i.length;
                        --n > -1 && (e = i[n]).identifier !== X;

                      );
                      if (0 > n) return;
                    }
                    (xt.pointerEvent = r),
                      (xt.pointerX = e.pageX),
                      (xt.pointerY = e.pageY);
                  }
                  return (
                    r && !s
                      ? (tt && o.snap && Ft(o.throwProps),
                        B(xt, "release", "onRelease"),
                        B(xt, "click", "onClick"))
                      : (Ft(o.throwProps),
                        b ||
                          !r ||
                          (!o.dragClickables && mt(r.target)) ||
                          !s ||
                          (r.preventDefault(),
                          r.preventManipulation && r.preventManipulation()),
                        B(xt, "release", "onRelease")),
                    s && B(xt, "dragend", "onDragEnd"),
                    !0
                  );
                }
              },
              Mt = function(e) {
                (xt.isPressed || 20 > y() - _t) &&
                  (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                  e.preventManipulation && e.preventManipulation());
              };
            (V = yt.get(this.target)),
              V && V.kill(),
              (this.startDrag = function(e) {
                It(e),
                  xt.isDragging ||
                    ((xt.isDragging = !0), B(xt, "dragstart", "onDragStart"));
              }),
              (this.drag = Et),
              (this.endDrag = function(e) {
                jt(e, !0);
              }),
              (this.timeSinceDrag = function() {
                return xt.isDragging ? 0 : (y() - _t) / 1e3;
              }),
              (this.hitTest = function(e, t) {
                return yt.hitTest(xt.target, e, t);
              }),
              (this.applyBounds = function(e) {
                var t, i;
                return e && o.bounds !== e
                  ? ((o.bounds = e), xt.update(!0))
                  : (kt(!0),
                    Ct(),
                    P &&
                      ((t = xt.x),
                      (i = xt.y),
                      P &&
                        (t > I ? (t = I) : M > t && (t = M),
                        i > N ? (i = N) : L > i && (i = L)),
                      (xt.x !== t || xt.y !== i) &&
                        ((xt.x = xt.endX = t),
                        at ? (xt.endRotation = t) : (xt.y = xt.endY = i),
                        (Y = !0),
                        Tt())),
                    xt);
              }),
              (this.update = function(e) {
                var t = xt.x,
                  i = xt.y;
                return (
                  St(),
                  e ? xt.applyBounds() : kt(!0),
                  xt.isPressed &&
                    (Math.abs(t - xt.x) > 0.01 ||
                      (Math.abs(i - xt.y) > 0.01 && !at)) &&
                    Pt(),
                  xt
                );
              }),
              (this.enable = function(e) {
                var n;
                return (
                  "soft" !== e &&
                    (dt(wt, "mousedown", It),
                    dt(wt, "touchstart", It),
                    dt(wt, "click", Mt),
                    at || O(wt, "cursor", o.cursor || "move"),
                    (wt.ondragstart = wt.onselectstart = m),
                    O(wt, "userSelect", "none"),
                    O(wt, "touchCallout", "none"),
                    O(wt, "touchAction", "none")),
                  (a = !0),
                  r &&
                    "soft" !== e &&
                    r.track(p || i, ot ? "x,y" : at ? "rotation" : "top,left"),
                  p && p.enable(),
                  (i._gsDragID = n = "d" + $++),
                  (w[n] = this),
                  p && (p.element._gsDragID = n),
                  t.set(i, { x: "+=0" }),
                  this.update(),
                  xt
                );
              }),
              (this.disable = function(e) {
                var t = this.isDragging;
                return (
                  at || O(wt, "cursor", null),
                  "soft" !== e &&
                    ((wt.ondragstart = wt.onselectstart = null),
                    O(wt, "userSelect", "text"),
                    O(wt, "touchCallout", "default"),
                    O(wt, "MSTouchAction", "auto"),
                    pt(wt, "mousedown", It),
                    pt(wt, "touchstart", It),
                    pt(wt, "click", Mt),
                    Z &&
                      (pt(Z, "touchcancel", jt),
                      pt(Z, "touchend", jt),
                      pt(Z, "touchmove", Et)),
                    pt(u, "mouseup", jt),
                    pt(u, "mousemove", Et)),
                  (a = !1),
                  r &&
                    "soft" !== e &&
                    r.untrack(
                      p || i,
                      ot ? "x,y" : at ? "rotation" : "top,left"
                    ),
                  p && p.disable(),
                  S(Tt),
                  (this.isDragging = this.isPressed = G = !1),
                  t && B(this, "dragend", "onDragEnd"),
                  xt
                );
              }),
              (this.enabled = function(e, t) {
                return arguments.length
                  ? e
                    ? this.enable(t)
                    : this.disable(t)
                  : a;
              }),
              (this.kill = function() {
                return (
                  t.killTweensOf(p || i, !0, $t),
                  xt.disable(),
                  delete w[i._gsDragID],
                  xt
                );
              }),
              -1 !== rt.indexOf("scroll") &&
                ((p = this.scrollProxy = new vt(
                  i,
                  D(
                    {
                      onKill: function() {
                        xt.isPressed && jt(null);
                      },
                    },
                    o
                  )
                )),
                (i.style.overflowY = bt && !lt ? "auto" : "hidden"),
                (i.style.overflowX = gt && !lt ? "auto" : "hidden"),
                (i = p.content)),
              o.force3D !== !1 && t.set(i, { force3D: !0 }),
              at ? ($t.rotation = 1) : (gt && ($t[st] = 1), bt && ($t[ut] = 1)),
              at
                ? ((R = d), (z = R.css), (R.overwrite = !1))
                : ot &&
                  ((R = gt && bt ? s : gt ? l : c),
                  (z = R.css),
                  (R.overwrite = !1)),
              this.enable();
          },
          bt = (yt.prototype = new e());
        (bt.constructor = yt),
          (bt.pointerX = bt.pointerY = 0),
          (bt.isDragging = bt.isPressed = !1),
          (yt.version = "0.10.4"),
          (yt.zIndex = 1e3),
          dt(u, "touchcancel", function() {}),
          dt(u, "contextmenu", function() {
            var e;
            for (e in w) w[e].isPressed && w[e].endDrag();
          }),
          (yt.create = function(e, i) {
            "string" == typeof e && (e = t.selector(e));
            for (var n = at(e) ? st(e) : [e], r = n.length; --r > -1; )
              n[r] = new yt(n[r], i);
            return n;
          }),
          (yt.get = function(e) {
            return w[(j(e) || {})._gsDragID];
          }),
          (yt.timeSinceDrag = function() {
            return (y() - k) / 1e3;
          });
        var xt = function(e, t) {
          var i =
            e.pageX !== t
              ? {
                  left: e.pageX,
                  top: e.pageY,
                  right: e.pageX + 1,
                  bottom: e.pageY + 1,
                }
              : e.nodeType || e.left === t || e.top === t
              ? j(e).getBoundingClientRect()
              : e;
          return (
            i.right === t && i.width !== t
              ? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
              : i.width === t &&
                (i = {
                  width: i.right - i.left,
                  height: i.bottom - i.top,
                  right: i.right,
                  left: i.left,
                  bottom: i.bottom,
                  top: i.top,
                }),
            i
          );
        };
        return (
          (yt.hitTest = function(e, t, i) {
            if (e === t) return !1;
            var n,
              r,
              o,
              a = xt(e),
              s = xt(t),
              l =
                s.left > a.right ||
                s.right < a.left ||
                s.top > a.bottom ||
                s.bottom < a.top;
            return l || !i
              ? !l
              : ((o = -1 !== (i + "").indexOf("%")),
                (i = parseFloat(i) || 0),
                (n = {
                  left: Math.max(a.left, s.left),
                  top: Math.max(a.top, s.top),
                }),
                (n.width = Math.min(a.right, s.right) - n.left),
                (n.height = Math.min(a.bottom, s.bottom) - n.top),
                0 > n.width || 0 > n.height
                  ? !1
                  : o
                  ? ((i *= 0.01),
                    (r = n.width * n.height),
                    r >= a.width * a.height * i || r >= s.width * s.height * i)
                  : n.width > i && n.height > i);
          }),
          yt
        );
      },
      !0
    );
  }),
  window._gsDefine && window._gsQueue.pop()(),
  (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function(e, t, i) {
        var n = [].slice,
          r = function(e, t, n) {
            i.call(this, e, t, n),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._dirty = !0),
              (this.render = r.prototype.render);
          },
          o = 1e-10,
          a = i._internals,
          s = a.isSelector,
          l = a.isArray,
          c = (r.prototype = i.to({}, 0.1, {})),
          d = [];
        (r.version = "1.12.1"),
          (c.constructor = r),
          (c.kill()._gc = !1),
          (r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf),
          (r.getTweensOf = i.getTweensOf),
          (r.lagSmoothing = i.lagSmoothing),
          (r.ticker = i.ticker),
          (r.render = i.render),
          (c.invalidate = function() {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              i.prototype.invalidate.call(this)
            );
          }),
          (c.updateTo = function(e, t) {
            var n,
              r = this.ratio;
            t &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay));
            for (n in e) this.vars[n] = e[n];
            if (this._initted)
              if (t) this._initted = !1;
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  i._onPluginEvent("_onDisable", this),
                this._time / this._duration > 0.998)
              ) {
                var o = this._time;
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(o, !0, !1);
              } else if (this._time > 0) {
                (this._initted = !1), this._init();
                for (var a, s = 1 / (1 - r), l = this._firstPT; l; )
                  (a = l.s + l.c), (l.c *= s), (l.s = a - l.c), (l = l._next);
              }
            return this;
          }),
          (c.render = function(e, t, i) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate());
            var n,
              r,
              s,
              l,
              c,
              p,
              u,
              h,
              f = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._time,
              g = this._totalTime,
              v = this._cycle,
              y = this._duration,
              b = this._rawPrevTime;
            if (
              (e >= f
                ? ((this._totalTime = f),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 !== (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = y),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed || ((n = !0), (r = "onComplete")),
                  0 === y &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (e = 0),
                    (0 === e || 0 > b || b === o) &&
                      b !== e &&
                      ((i = !0), b > o && (r = "onReverseComplete")),
                    (this._rawPrevTime = h = !t || e || b === e ? e : o)))
                : 1e-7 > e
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== g || (0 === y && b > 0 && b !== o)) &&
                    ((r = "onReverseComplete"), (n = this._reversed)),
                  0 > e
                    ? ((this._active = !1),
                      0 === y &&
                        (this._initted || !this.vars.lazy || i) &&
                        (b >= 0 && (i = !0),
                        (this._rawPrevTime = h = !t || e || b === e ? e : o)))
                    : this._initted || (i = !0))
                : ((this._totalTime = this._time = e),
                  0 !== this._repeat &&
                    ((l = y + this._repeatDelay),
                    (this._cycle = (this._totalTime / l) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / l &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * l),
                    this._yoyo &&
                      0 !== (1 & this._cycle) &&
                      (this._time = y - this._time),
                    this._time > y
                      ? (this._time = y)
                      : 0 > this._time && (this._time = 0)),
                  this._easeType
                    ? ((c = this._time / y),
                      (p = this._easeType),
                      (u = this._easePower),
                      (1 === p || (3 === p && c >= 0.5)) && (c = 1 - c),
                      3 === p && (c *= 2),
                      1 === u
                        ? (c *= c)
                        : 2 === u
                        ? (c *= c * c)
                        : 3 === u
                        ? (c *= c * c * c)
                        : 4 === u && (c *= c * c * c * c),
                      (this.ratio =
                        1 === p
                          ? 1 - c
                          : 2 === p
                          ? c
                          : 0.5 > this._time / y
                          ? c / 2
                          : 1 - c / 2))
                    : (this.ratio = this._ease.getRatio(this._time / y))),
              m === this._time && !i && v === this._cycle)
            )
              return (
                g !== this._totalTime &&
                  this._onUpdate &&
                  (t ||
                    this._onUpdate.apply(
                      this.vars.onUpdateScope || this,
                      this.vars.onUpdateParams || d
                    )),
                void 0
              );
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = m),
                  (this._totalTime = g),
                  (this._rawPrevTime = b),
                  (this._cycle = v),
                  a.lazyTweens.push(this),
                  (this._lazy = e),
                  void 0
                );
              this._time && !n
                ? (this.ratio = this._ease.getRatio(this._time / y))
                : n &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== m &&
                    e >= 0 &&
                    (this._active = !0)),
                0 === g &&
                  (2 === this._initted && e > 0 && this._init(),
                  this._startAt &&
                    (e >= 0
                      ? this._startAt.render(e, t, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._totalTime || 0 === y) &&
                    (t ||
                      this.vars.onStart.apply(
                        this.vars.onStartScope || this,
                        this.vars.onStartParams || d
                      ))),
                s = this._firstPT;
              s;

            )
              s.f
                ? s.t[s.p](s.c * this.ratio + s.s)
                : (s.t[s.p] = s.c * this.ratio + s.s),
                (s = s._next);
            this._onUpdate &&
              (0 > e &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(e, t, i),
              t ||
                ((this._totalTime !== g || n) &&
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || d
                  ))),
              this._cycle !== v &&
                (t ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    this.vars.onRepeat.apply(
                      this.vars.onRepeatScope || this,
                      this.vars.onRepeatParams || d
                    ))),
              r &&
                (this._gc ||
                  (0 > e &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startTime &&
                    this._startAt.render(e, t, i),
                  n &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !t &&
                    this.vars[r] &&
                    this.vars[r].apply(
                      this.vars[r + "Scope"] || this,
                      this.vars[r + "Params"] || d
                    ),
                  0 === y &&
                    this._rawPrevTime === o &&
                    h !== o &&
                    (this._rawPrevTime = 0)));
          }),
          (r.to = function(e, t, i) {
            return new r(e, t, i);
          }),
          (r.from = function(e, t, i) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              new r(e, t, i)
            );
          }),
          (r.fromTo = function(e, t, i, n) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              new r(e, t, n)
            );
          }),
          (r.staggerTo = r.allTo = function(e, t, o, a, c, p, u) {
            a = a || 0;
            var h,
              f,
              m,
              g,
              v = o.delay || 0,
              y = [],
              b = function() {
                o.onComplete &&
                  o.onComplete.apply(o.onCompleteScope || this, arguments),
                  c.apply(u || this, p || d);
              };
            for (
              l(e) ||
                ("string" == typeof e && (e = i.selector(e) || e),
                s(e) && (e = n.call(e, 0))),
                h = e.length,
                m = 0;
              h > m;
              m++
            ) {
              f = {};
              for (g in o) f[g] = o[g];
              (f.delay = v),
                m === h - 1 && c && (f.onComplete = b),
                (y[m] = new r(e[m], t, f)),
                (v += a);
            }
            return y;
          }),
          (r.staggerFrom = r.allFrom = function(e, t, i, n, o, a, s) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              r.staggerTo(e, t, i, n, o, a, s)
            );
          }),
          (r.staggerFromTo = r.allFromTo = function(e, t, i, n, o, a, s, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              r.staggerTo(e, t, n, o, a, s, l)
            );
          }),
          (r.delayedCall = function(e, t, i, n, o) {
            return new r(t, 0, {
              delay: e,
              onComplete: t,
              onCompleteParams: i,
              onCompleteScope: n,
              onReverseComplete: t,
              onReverseCompleteParams: i,
              onReverseCompleteScope: n,
              immediateRender: !1,
              useFrames: o,
              overwrite: 0,
            });
          }),
          (r.set = function(e, t) {
            return new r(e, 0, t);
          }),
          (r.isTweening = function(e) {
            return i.getTweensOf(e, !0).length > 0;
          });
        var p = function(e, t) {
            for (var n = [], r = 0, o = e._first; o; )
              o instanceof i
                ? (n[r++] = o)
                : (t && (n[r++] = o), (n = n.concat(p(o, t))), (r = n.length)),
                (o = o._next);
            return n;
          },
          u = (r.getAllTweens = function(t) {
            return p(e._rootTimeline, t).concat(p(e._rootFramesTimeline, t));
          });
        (r.killAll = function(e, i, n, r) {
          null == i && (i = !0), null == n && (n = !0);
          var o,
            a,
            s,
            l = u(0 != r),
            c = l.length,
            d = i && n && r;
          for (s = 0; c > s; s++)
            (a = l[s]),
              (d ||
                a instanceof t ||
                ((o = a.target === a.vars.onComplete) && n) ||
                (i && !o)) &&
                (e
                  ? a.totalTime(a._reversed ? 0 : a.totalDuration())
                  : a._enabled(!1, !1));
        }),
          (r.killChildTweensOf = function(e, t) {
            if (null != e) {
              var o,
                c,
                d,
                p,
                u,
                h = a.tweenLookup;
              if (
                ("string" == typeof e && (e = i.selector(e) || e),
                s(e) && (e = n.call(e, 0)),
                l(e))
              )
                for (p = e.length; --p > -1; ) r.killChildTweensOf(e[p], t);
              else {
                o = [];
                for (d in h)
                  for (c = h[d].target.parentNode; c; )
                    c === e && (o = o.concat(h[d].tweens)), (c = c.parentNode);
                for (u = o.length, p = 0; u > p; p++)
                  t && o[p].totalTime(o[p].totalDuration()),
                    o[p]._enabled(!1, !1);
              }
            }
          });
        var h = function(e, i, n, r) {
          (i = i !== !1), (n = n !== !1), (r = r !== !1);
          for (var o, a, s = u(r), l = i && n && r, c = s.length; --c > -1; )
            (a = s[c]),
              (l ||
                a instanceof t ||
                ((o = a.target === a.vars.onComplete) && n) ||
                (i && !o)) &&
                a.paused(e);
        };
        return (
          (r.pauseAll = function(e, t, i) {
            h(!0, e, t, i);
          }),
          (r.resumeAll = function(e, t, i) {
            h(!1, e, t, i);
          }),
          (r.globalTimeScale = function(t) {
            var n = e._rootTimeline,
              r = i.ticker.time;
            return arguments.length
              ? ((t = t || o),
                (n._startTime = r - ((r - n._startTime) * n._timeScale) / t),
                (n = e._rootFramesTimeline),
                (r = i.ticker.frame),
                (n._startTime = r - ((r - n._startTime) * n._timeScale) / t),
                (n._timeScale = e._rootTimeline._timeScale = t),
                t)
              : n._timeScale;
          }),
          (c.progress = function(e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) +
                    this._cycle * (this._duration + this._repeatDelay),
                  !1
                )
              : this._time / this.duration();
          }),
          (c.totalProgress = function(e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, !1)
              : this._totalTime / this.totalDuration();
          }),
          (c.time = function(e, t) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                e > this._duration && (e = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (e =
                      this._duration -
                      e +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (e += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(e, t))
              : this._time;
          }),
          (c.duration = function(t) {
            return arguments.length
              ? e.prototype.duration.call(this, t)
              : this._duration;
          }),
          (c.totalDuration = function(e) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (e - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration);
          }),
          (c.repeat = function(e) {
            return arguments.length
              ? ((this._repeat = e), this._uncache(!0))
              : this._repeat;
          }),
          (c.repeatDelay = function(e) {
            return arguments.length
              ? ((this._repeatDelay = e), this._uncache(!0))
              : this._repeatDelay;
          }),
          (c.yoyo = function(e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          r
        );
      },
      !0
    ),
      window._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function(e, t, i) {
          var n = function(e) {
              t.call(this, e),
                (this._labels = {}),
                (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
                (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
                (this._sortChildren = !0),
                (this._onUpdate = this.vars.onUpdate);
              var i,
                n,
                r = this.vars;
              for (n in r)
                (i = r[n]),
                  a(i) &&
                    -1 !== i.join("").indexOf("{self}") &&
                    (r[n] = this._swapSelfInParams(i));
              a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
            },
            r = 1e-10,
            o = i._internals.isSelector,
            a = i._internals.isArray,
            s = [],
            l = window._gsDefine.globals,
            c = function(e) {
              var t,
                i = {};
              for (t in e) i[t] = e[t];
              return i;
            },
            d = function(e, t, i, n) {
              e._timeline.pause(e._startTime),
                t && t.apply(n || e._timeline, i || s);
            },
            p = s.slice,
            u = (n.prototype = new t());
          return (
            (n.version = "1.12.1"),
            (u.constructor = n),
            (u.kill()._gc = !1),
            (u.to = function(e, t, n, r) {
              var o = (n.repeat && l.TweenMax) || i;
              return t ? this.add(new o(e, t, n), r) : this.set(e, n, r);
            }),
            (u.from = function(e, t, n, r) {
              return this.add(((n.repeat && l.TweenMax) || i).from(e, t, n), r);
            }),
            (u.fromTo = function(e, t, n, r, o) {
              var a = (r.repeat && l.TweenMax) || i;
              return t ? this.add(a.fromTo(e, t, n, r), o) : this.set(e, r, o);
            }),
            (u.staggerTo = function(e, t, r, a, s, l, d, u) {
              var h,
                f = new n({
                  onComplete: l,
                  onCompleteParams: d,
                  onCompleteScope: u,
                  smoothChildTiming: this.smoothChildTiming,
                });
              for (
                "string" == typeof e && (e = i.selector(e) || e),
                  o(e) && (e = p.call(e, 0)),
                  a = a || 0,
                  h = 0;
                e.length > h;
                h++
              )
                r.startAt && (r.startAt = c(r.startAt)),
                  f.to(e[h], t, c(r), h * a);
              return this.add(f, s);
            }),
            (u.staggerFrom = function(e, t, i, n, r, o, a, s) {
              return (
                (i.immediateRender = 0 != i.immediateRender),
                (i.runBackwards = !0),
                this.staggerTo(e, t, i, n, r, o, a, s)
              );
            }),
            (u.staggerFromTo = function(e, t, i, n, r, o, a, s, l) {
              return (
                (n.startAt = i),
                (n.immediateRender =
                  0 != n.immediateRender && 0 != i.immediateRender),
                this.staggerTo(e, t, n, r, o, a, s, l)
              );
            }),
            (u.call = function(e, t, n, r) {
              return this.add(i.delayedCall(0, e, t, n), r);
            }),
            (u.set = function(e, t, n) {
              return (
                (n = this._parseTimeOrLabel(n, 0, !0)),
                null == t.immediateRender &&
                  (t.immediateRender = n === this._time && !this._paused),
                this.add(new i(e, 0, t), n)
              );
            }),
            (n.exportRoot = function(e, t) {
              (e = e || {}),
                null == e.smoothChildTiming && (e.smoothChildTiming = !0);
              var r,
                o,
                a = new n(e),
                s = a._timeline;
              for (
                null == t && (t = !0),
                  s._remove(a, !0),
                  a._startTime = 0,
                  a._rawPrevTime = a._time = a._totalTime = s._time,
                  r = s._first;
                r;

              )
                (o = r._next),
                  (t && r instanceof i && r.target === r.vars.onComplete) ||
                    a.add(r, r._startTime - r._delay),
                  (r = o);
              return s.add(a, 0), a;
            }),
            (u.add = function(r, o, s, l) {
              var c, d, p, u, h, f;
              if (
                ("number" != typeof o &&
                  (o = this._parseTimeOrLabel(o, 0, !0, r)),
                !(r instanceof e))
              ) {
                if (r instanceof Array || (r && r.push && a(r))) {
                  for (
                    s = s || "normal", l = l || 0, c = o, d = r.length, p = 0;
                    d > p;
                    p++
                  )
                    a((u = r[p])) && (u = new n({ tweens: u })),
                      this.add(u, c),
                      "string" != typeof u &&
                        "function" != typeof u &&
                        ("sequence" === s
                          ? (c =
                              u._startTime + u.totalDuration() / u._timeScale)
                          : "start" === s && (u._startTime -= u.delay())),
                      (c += l);
                  return this._uncache(!0);
                }
                if ("string" == typeof r) return this.addLabel(r, o);
                if ("function" != typeof r)
                  throw "Cannot add " +
                    r +
                    " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r);
              }
              if (
                (t.prototype.add.call(this, r, o),
                (this._gc || this._time === this._duration) &&
                  !this._paused &&
                  this._duration < this.duration())
              )
                for (h = this, f = h.rawTime() > r._startTime; h._timeline; )
                  f && h._timeline.smoothChildTiming
                    ? h.totalTime(h._totalTime, !0)
                    : h._gc && h._enabled(!0, !1),
                    (h = h._timeline);
              return this;
            }),
            (u.remove = function(t) {
              if (t instanceof e) return this._remove(t, !1);
              if (t instanceof Array || (t && t.push && a(t))) {
                for (var i = t.length; --i > -1; ) this.remove(t[i]);
                return this;
              }
              return "string" == typeof t
                ? this.removeLabel(t)
                : this.kill(null, t);
            }),
            (u._remove = function(e, i) {
              t.prototype._remove.call(this, e, i);
              var n = this._last;
              return (
                n
                  ? this._time >
                      n._startTime + n._totalDuration / n._timeScale &&
                    ((this._time = this.duration()),
                    (this._totalTime = this._totalDuration))
                  : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                this
              );
            }),
            (u.append = function(e, t) {
              return this.add(e, this._parseTimeOrLabel(null, t, !0, e));
            }),
            (u.insert = u.insertMultiple = function(e, t, i, n) {
              return this.add(e, t || 0, i, n);
            }),
            (u.appendMultiple = function(e, t, i, n) {
              return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n);
            }),
            (u.addLabel = function(e, t) {
              return (this._labels[e] = this._parseTimeOrLabel(t)), this;
            }),
            (u.addPause = function(e, t, i, n) {
              return this.call(d, ["{self}", t, i, n], this, e);
            }),
            (u.removeLabel = function(e) {
              return delete this._labels[e], this;
            }),
            (u.getLabelTime = function(e) {
              return null != this._labels[e] ? this._labels[e] : -1;
            }),
            (u._parseTimeOrLabel = function(t, i, n, r) {
              var o;
              if (r instanceof e && r.timeline === this) this.remove(r);
              else if (r && (r instanceof Array || (r.push && a(r))))
                for (o = r.length; --o > -1; )
                  r[o] instanceof e &&
                    r[o].timeline === this &&
                    this.remove(r[o]);
              if ("string" == typeof i)
                return this._parseTimeOrLabel(
                  i,
                  n && "number" == typeof t && null == this._labels[i]
                    ? t - this.duration()
                    : 0,
                  n
                );
              if (
                ((i = i || 0),
                "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
              )
                null == t && (t = this.duration());
              else {
                if (((o = t.indexOf("=")), -1 === o))
                  return null == this._labels[t]
                    ? n
                      ? (this._labels[t] = this.duration() + i)
                      : i
                    : this._labels[t] + i;
                (i =
                  parseInt(t.charAt(o - 1) + "1", 10) *
                  Number(t.substr(o + 1))),
                  (t =
                    o > 1
                      ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, n)
                      : this.duration());
              }
              return Number(t) + i;
            }),
            (u.seek = function(e, t) {
              return this.totalTime(
                "number" == typeof e ? e : this._parseTimeOrLabel(e),
                t !== !1
              );
            }),
            (u.stop = function() {
              return this.paused(!0);
            }),
            (u.gotoAndPlay = function(e, t) {
              return this.play(e, t);
            }),
            (u.gotoAndStop = function(e, t) {
              return this.pause(e, t);
            }),
            (u.render = function(e, t, i) {
              this._gc && this._enabled(!0, !1);
              var n,
                o,
                a,
                l,
                c,
                d = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                u = this._startTime,
                h = this._timeScale,
                f = this._paused;
              if (
                (e >= d
                  ? ((this._totalTime = this._time = d),
                    this._reversed ||
                      this._hasPausedChild() ||
                      ((o = !0),
                      (l = "onComplete"),
                      0 === this._duration &&
                        (0 === e ||
                          0 > this._rawPrevTime ||
                          this._rawPrevTime === r) &&
                        this._rawPrevTime !== e &&
                        this._first &&
                        ((c = !0),
                        this._rawPrevTime > r && (l = "onReverseComplete"))),
                    (this._rawPrevTime =
                      this._duration || !t || e || this._rawPrevTime === e
                        ? e
                        : r),
                    (e = d + 1e-4))
                  : 1e-7 > e
                  ? ((this._totalTime = this._time = 0),
                    (0 !== p ||
                      (0 === this._duration &&
                        this._rawPrevTime !== r &&
                        (this._rawPrevTime > 0 ||
                          (0 > e && this._rawPrevTime >= 0)))) &&
                      ((l = "onReverseComplete"), (o = this._reversed)),
                    0 > e
                      ? ((this._active = !1),
                        0 === this._duration &&
                          this._rawPrevTime >= 0 &&
                          this._first &&
                          (c = !0),
                        (this._rawPrevTime = e))
                      : ((this._rawPrevTime =
                          this._duration || !t || e || this._rawPrevTime === e
                            ? e
                            : r),
                        (e = 0),
                        this._initted || (c = !0)))
                  : (this._totalTime = this._time = this._rawPrevTime = e),
                (this._time !== p && this._first) || i || c)
              ) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._time !== p &&
                      e > 0 &&
                      (this._active = !0)),
                  0 === p &&
                    this.vars.onStart &&
                    0 !== this._time &&
                    (t ||
                      this.vars.onStart.apply(
                        this.vars.onStartScope || this,
                        this.vars.onStartParams || s
                      )),
                  this._time >= p)
                )
                  for (
                    n = this._first;
                    n && ((a = n._next), !this._paused || f);

                  )
                    (n._active ||
                      (n._startTime <= this._time && !n._paused && !n._gc)) &&
                      (n._reversed
                        ? n.render(
                            (n._dirty ? n.totalDuration() : n._totalDuration) -
                              (e - n._startTime) * n._timeScale,
                            t,
                            i
                          )
                        : n.render((e - n._startTime) * n._timeScale, t, i)),
                      (n = a);
                else
                  for (
                    n = this._last;
                    n && ((a = n._prev), !this._paused || f);

                  )
                    (n._active ||
                      (p >= n._startTime && !n._paused && !n._gc)) &&
                      (n._reversed
                        ? n.render(
                            (n._dirty ? n.totalDuration() : n._totalDuration) -
                              (e - n._startTime) * n._timeScale,
                            t,
                            i
                          )
                        : n.render((e - n._startTime) * n._timeScale, t, i)),
                      (n = a);
                this._onUpdate &&
                  (t ||
                    this._onUpdate.apply(
                      this.vars.onUpdateScope || this,
                      this.vars.onUpdateParams || s
                    )),
                  l &&
                    (this._gc ||
                      ((u === this._startTime || h !== this._timeScale) &&
                        (0 === this._time || d >= this.totalDuration()) &&
                        (o &&
                          (this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !t &&
                          this.vars[l] &&
                          this.vars[l].apply(
                            this.vars[l + "Scope"] || this,
                            this.vars[l + "Params"] || s
                          ))));
              }
            }),
            (u._hasPausedChild = function() {
              for (var e = this._first; e; ) {
                if (e._paused || (e instanceof n && e._hasPausedChild()))
                  return !0;
                e = e._next;
              }
              return !1;
            }),
            (u.getChildren = function(e, t, n, r) {
              r = r || -9999999999;
              for (var o = [], a = this._first, s = 0; a; )
                r > a._startTime ||
                  (a instanceof i
                    ? t !== !1 && (o[s++] = a)
                    : (n !== !1 && (o[s++] = a),
                      e !== !1 &&
                        ((o = o.concat(a.getChildren(!0, t, n))),
                        (s = o.length)))),
                  (a = a._next);
              return o;
            }),
            (u.getTweensOf = function(e, t) {
              var n,
                r,
                o = this._gc,
                a = [],
                s = 0;
              for (
                o && this._enabled(!0, !0), n = i.getTweensOf(e), r = n.length;
                --r > -1;

              )
                (n[r].timeline === this || (t && this._contains(n[r]))) &&
                  (a[s++] = n[r]);
              return o && this._enabled(!1, !0), a;
            }),
            (u._contains = function(e) {
              for (var t = e.timeline; t; ) {
                if (t === this) return !0;
                t = t.timeline;
              }
              return !1;
            }),
            (u.shiftChildren = function(e, t, i) {
              i = i || 0;
              for (var n, r = this._first, o = this._labels; r; )
                r._startTime >= i && (r._startTime += e), (r = r._next);
              if (t) for (n in o) o[n] >= i && (o[n] += e);
              return this._uncache(!0);
            }),
            (u._kill = function(e, t) {
              if (!e && !t) return this._enabled(!1, !1);
              for (
                var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1),
                  n = i.length,
                  r = !1;
                --n > -1;

              )
                i[n]._kill(e, t) && (r = !0);
              return r;
            }),
            (u.clear = function(e) {
              var t = this.getChildren(!1, !0, !0),
                i = t.length;
              for (this._time = this._totalTime = 0; --i > -1; )
                t[i]._enabled(!1, !1);
              return e !== !1 && (this._labels = {}), this._uncache(!0);
            }),
            (u.invalidate = function() {
              for (var e = this._first; e; ) e.invalidate(), (e = e._next);
              return this;
            }),
            (u._enabled = function(e, i) {
              if (e === this._gc)
                for (var n = this._first; n; ) n._enabled(e, !0), (n = n._next);
              return t.prototype._enabled.call(this, e, i);
            }),
            (u.duration = function(e) {
              return arguments.length
                ? (0 !== this.duration() &&
                    0 !== e &&
                    this.timeScale(this._duration / e),
                  this)
                : (this._dirty && this.totalDuration(), this._duration);
            }),
            (u.totalDuration = function(e) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (var t, i, n = 0, r = this._last, o = 999999999999; r; )
                    (t = r._prev),
                      r._dirty && r.totalDuration(),
                      r._startTime > o && this._sortChildren && !r._paused
                        ? this.add(r, r._startTime - r._delay)
                        : (o = r._startTime),
                      0 > r._startTime &&
                        !r._paused &&
                        ((n -= r._startTime),
                        this._timeline.smoothChildTiming &&
                          (this._startTime += r._startTime / this._timeScale),
                        this.shiftChildren(-r._startTime, !1, -9999999999),
                        (o = 0)),
                      (i = r._startTime + r._totalDuration / r._timeScale),
                      i > n && (n = i),
                      (r = t);
                  (this._duration = this._totalDuration = n),
                    (this._dirty = !1);
                }
                return this._totalDuration;
              }
              return (
                0 !== this.totalDuration() &&
                  0 !== e &&
                  this.timeScale(this._totalDuration / e),
                this
              );
            }),
            (u.usesFrames = function() {
              for (var t = this._timeline; t._timeline; ) t = t._timeline;
              return t === e._rootFramesTimeline;
            }),
            (u.rawTime = function() {
              return this._paused
                ? this._totalTime
                : (this._timeline.rawTime() - this._startTime) *
                    this._timeScale;
            }),
            n
          );
        },
        !0
      ),
      window._gsDefine(
        "TimelineMax",
        ["TimelineLite", "TweenLite", "easing.Ease"],
        function(e, t, i) {
          var n = function(t) {
              e.call(this, t),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                (this._cycle = 0),
                (this._yoyo = this.vars.yoyo === !0),
                (this._dirty = !0);
            },
            r = 1e-10,
            o = [],
            a = new i(null, null, 1, 0),
            s = (n.prototype = new e());
          return (
            (s.constructor = n),
            (s.kill()._gc = !1),
            (n.version = "1.12.1"),
            (s.invalidate = function() {
              return (
                (this._yoyo = this.vars.yoyo === !0),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                this._uncache(!0),
                e.prototype.invalidate.call(this)
              );
            }),
            (s.addCallback = function(e, i, n, r) {
              return this.add(t.delayedCall(0, e, n, r), i);
            }),
            (s.removeCallback = function(e, t) {
              if (e)
                if (null == t) this._kill(null, e);
                else
                  for (
                    var i = this.getTweensOf(e, !1),
                      n = i.length,
                      r = this._parseTimeOrLabel(t);
                    --n > -1;

                  )
                    i[n]._startTime === r && i[n]._enabled(!1, !1);
              return this;
            }),
            (s.tweenTo = function(e, i) {
              i = i || {};
              var n,
                r,
                s,
                l = {
                  ease: a,
                  overwrite: i.delay ? 2 : 1,
                  useFrames: this.usesFrames(),
                  immediateRender: !1,
                };
              for (r in i) l[r] = i[r];
              return (
                (l.time = this._parseTimeOrLabel(e)),
                (n =
                  Math.abs(Number(l.time) - this._time) / this._timeScale ||
                  0.001),
                (s = new t(this, n, l)),
                (l.onStart = function() {
                  s.target.paused(!0),
                    s.vars.time !== s.target.time() &&
                      n === s.duration() &&
                      s.duration(
                        Math.abs(s.vars.time - s.target.time()) /
                          s.target._timeScale
                      ),
                    i.onStart &&
                      i.onStart.apply(
                        i.onStartScope || s,
                        i.onStartParams || o
                      );
                }),
                s
              );
            }),
            (s.tweenFromTo = function(e, t, i) {
              (i = i || {}),
                (e = this._parseTimeOrLabel(e)),
                (i.startAt = {
                  onComplete: this.seek,
                  onCompleteParams: [e],
                  onCompleteScope: this,
                }),
                (i.immediateRender = i.immediateRender !== !1);
              var n = this.tweenTo(t, i);
              return n.duration(
                Math.abs(n.vars.time - e) / this._timeScale || 0.001
              );
            }),
            (s.render = function(e, t, i) {
              this._gc && this._enabled(!0, !1);
              var n,
                a,
                s,
                l,
                c,
                d,
                p = this._dirty ? this.totalDuration() : this._totalDuration,
                u = this._duration,
                h = this._time,
                f = this._totalTime,
                m = this._startTime,
                g = this._timeScale,
                v = this._rawPrevTime,
                y = this._paused,
                b = this._cycle;
              if (
                (e >= p
                  ? (this._locked ||
                      ((this._totalTime = p), (this._cycle = this._repeat)),
                    this._reversed ||
                      this._hasPausedChild() ||
                      ((a = !0),
                      (l = "onComplete"),
                      0 === this._duration &&
                        (0 === e || 0 > v || v === r) &&
                        v !== e &&
                        this._first &&
                        ((c = !0), v > r && (l = "onReverseComplete"))),
                    (this._rawPrevTime =
                      this._duration || !t || e || this._rawPrevTime === e
                        ? e
                        : r),
                    this._yoyo && 0 !== (1 & this._cycle)
                      ? (this._time = e = 0)
                      : ((this._time = u), (e = u + 1e-4)))
                  : 1e-7 > e
                  ? (this._locked || (this._totalTime = this._cycle = 0),
                    (this._time = 0),
                    (0 !== h ||
                      (0 === u &&
                        v !== r &&
                        (v > 0 || (0 > e && v >= 0)) &&
                        !this._locked)) &&
                      ((l = "onReverseComplete"), (a = this._reversed)),
                    0 > e
                      ? ((this._active = !1),
                        0 === u && v >= 0 && this._first && (c = !0),
                        (this._rawPrevTime = e))
                      : ((this._rawPrevTime =
                          u || !t || e || this._rawPrevTime === e ? e : r),
                        (e = 0),
                        this._initted || (c = !0)))
                  : (0 === u && 0 > v && (c = !0),
                    (this._time = this._rawPrevTime = e),
                    this._locked ||
                      ((this._totalTime = e),
                      0 !== this._repeat &&
                        ((d = u + this._repeatDelay),
                        (this._cycle = (this._totalTime / d) >> 0),
                        0 !== this._cycle &&
                          this._cycle === this._totalTime / d &&
                          this._cycle--,
                        (this._time = this._totalTime - this._cycle * d),
                        this._yoyo &&
                          0 !== (1 & this._cycle) &&
                          (this._time = u - this._time),
                        this._time > u
                          ? ((this._time = u), (e = u + 1e-4))
                          : 0 > this._time
                          ? (this._time = e = 0)
                          : (e = this._time)))),
                this._cycle !== b && !this._locked)
              ) {
                var x = this._yoyo && 0 !== (1 & b),
                  w = x === (this._yoyo && 0 !== (1 & this._cycle)),
                  $ = this._totalTime,
                  _ = this._cycle,
                  T = this._rawPrevTime,
                  k = this._time;
                if (
                  ((this._totalTime = b * u),
                  b > this._cycle ? (x = !x) : (this._totalTime += u),
                  (this._time = h),
                  (this._rawPrevTime = 0 === u ? v - 1e-4 : v),
                  (this._cycle = b),
                  (this._locked = !0),
                  (h = x ? 0 : u),
                  this.render(h, t, 0 === u),
                  t ||
                    this._gc ||
                    (this.vars.onRepeat &&
                      this.vars.onRepeat.apply(
                        this.vars.onRepeatScope || this,
                        this.vars.onRepeatParams || o
                      )),
                  w && ((h = x ? u + 1e-4 : -1e-4), this.render(h, !0, !1)),
                  (this._locked = !1),
                  this._paused && !y)
                )
                  return;
                (this._time = k),
                  (this._totalTime = $),
                  (this._cycle = _),
                  (this._rawPrevTime = T);
              }
              if (!((this._time !== h && this._first) || i || c))
                return (
                  f !== this._totalTime &&
                    this._onUpdate &&
                    (t ||
                      this._onUpdate.apply(
                        this.vars.onUpdateScope || this,
                        this.vars.onUpdateParams || o
                      )),
                  void 0
                );
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== f &&
                    e > 0 &&
                    (this._active = !0)),
                0 === f &&
                  this.vars.onStart &&
                  0 !== this._totalTime &&
                  (t ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || o
                    )),
                this._time >= h)
              )
                for (
                  n = this._first;
                  n && ((s = n._next), !this._paused || y);

                )
                  (n._active ||
                    (n._startTime <= this._time && !n._paused && !n._gc)) &&
                    (n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (e - n._startTime) * n._timeScale,
                          t,
                          i
                        )
                      : n.render((e - n._startTime) * n._timeScale, t, i)),
                    (n = s);
              else
                for (n = this._last; n && ((s = n._prev), !this._paused || y); )
                  (n._active || (h >= n._startTime && !n._paused && !n._gc)) &&
                    (n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (e - n._startTime) * n._timeScale,
                          t,
                          i
                        )
                      : n.render((e - n._startTime) * n._timeScale, t, i)),
                    (n = s);
              this._onUpdate &&
                (t ||
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || o
                  )),
                l &&
                  (this._locked ||
                    this._gc ||
                    ((m === this._startTime || g !== this._timeScale) &&
                      (0 === this._time || p >= this.totalDuration()) &&
                      (a &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !t &&
                        this.vars[l] &&
                        this.vars[l].apply(
                          this.vars[l + "Scope"] || this,
                          this.vars[l + "Params"] || o
                        ))));
            }),
            (s.getActive = function(e, t, i) {
              null == e && (e = !0),
                null == t && (t = !0),
                null == i && (i = !1);
              var n,
                r,
                o = [],
                a = this.getChildren(e, t, i),
                s = 0,
                l = a.length;
              for (n = 0; l > n; n++) (r = a[n]), r.isActive() && (o[s++] = r);
              return o;
            }),
            (s.getLabelAfter = function(e) {
              e || (0 !== e && (e = this._time));
              var t,
                i = this.getLabelsArray(),
                n = i.length;
              for (t = 0; n > t; t++) if (i[t].time > e) return i[t].name;
              return null;
            }),
            (s.getLabelBefore = function(e) {
              null == e && (e = this._time);
              for (var t = this.getLabelsArray(), i = t.length; --i > -1; )
                if (e > t[i].time) return t[i].name;
              return null;
            }),
            (s.getLabelsArray = function() {
              var e,
                t = [],
                i = 0;
              for (e in this._labels)
                t[i++] = { time: this._labels[e], name: e };
              return (
                t.sort(function(e, t) {
                  return e.time - t.time;
                }),
                t
              );
            }),
            (s.progress = function(e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) +
                      this._cycle * (this._duration + this._repeatDelay),
                    !1
                  )
                : this._time / this.duration();
            }),
            (s.totalProgress = function(e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, !1)
                : this._totalTime / this.totalDuration();
            }),
            (s.totalDuration = function(t) {
              return arguments.length
                ? -1 === this._repeat
                  ? this
                  : this.duration(
                      (t - this._repeat * this._repeatDelay) /
                        (this._repeat + 1)
                    )
                : (this._dirty &&
                    (e.prototype.totalDuration.call(this),
                    (this._totalDuration =
                      -1 === this._repeat
                        ? 999999999999
                        : this._duration * (this._repeat + 1) +
                          this._repeatDelay * this._repeat)),
                  this._totalDuration);
            }),
            (s.time = function(e, t) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  e > this._duration && (e = this._duration),
                  this._yoyo && 0 !== (1 & this._cycle)
                    ? (e =
                        this._duration -
                        e +
                        this._cycle * (this._duration + this._repeatDelay))
                    : 0 !== this._repeat &&
                      (e += this._cycle * (this._duration + this._repeatDelay)),
                  this.totalTime(e, t))
                : this._time;
            }),
            (s.repeat = function(e) {
              return arguments.length
                ? ((this._repeat = e), this._uncache(!0))
                : this._repeat;
            }),
            (s.repeatDelay = function(e) {
              return arguments.length
                ? ((this._repeatDelay = e), this._uncache(!0))
                : this._repeatDelay;
            }),
            (s.yoyo = function(e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (s.currentLabel = function(e) {
              return arguments.length
                ? this.seek(e, !0)
                : this.getLabelBefore(this._time + 1e-8);
            }),
            n
          );
        },
        !0
      ),
      (function() {
        var e = 180 / Math.PI,
          t = [],
          i = [],
          n = [],
          r = {},
          o = function(e, t, i, n) {
            (this.a = e),
              (this.b = t),
              (this.c = i),
              (this.d = n),
              (this.da = n - e),
              (this.ca = i - e),
              (this.ba = t - e);
          },
          a =
            ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
          s = function(e, t, i, n) {
            var r = { a: e },
              o = {},
              a = {},
              s = { c: n },
              l = (e + t) / 2,
              c = (t + i) / 2,
              d = (i + n) / 2,
              p = (l + c) / 2,
              u = (c + d) / 2,
              h = (u - p) / 8;
            return (
              (r.b = l + (e - l) / 4),
              (o.b = p + h),
              (r.c = o.a = (r.b + o.b) / 2),
              (o.c = a.a = (p + u) / 2),
              (a.b = u - h),
              (s.b = d + (n - d) / 4),
              (a.c = s.a = (a.b + s.b) / 2),
              [r, o, a, s]
            );
          },
          l = function(e, r, o, a, l) {
            var c,
              d,
              p,
              u,
              h,
              f,
              m,
              g,
              v,
              y,
              b,
              x,
              w,
              $ = e.length - 1,
              _ = 0,
              T = e[0].a;
            for (c = 0; $ > c; c++)
              (h = e[_]),
                (d = h.a),
                (p = h.d),
                (u = e[_ + 1].d),
                l
                  ? ((b = t[c]),
                    (x = i[c]),
                    (w = (0.25 * (x + b) * r) / (a ? 0.5 : n[c] || 0.5)),
                    (f = p - (p - d) * (a ? 0.5 * r : 0 !== b ? w / b : 0)),
                    (m = p + (u - p) * (a ? 0.5 * r : 0 !== x ? w / x : 0)),
                    (g =
                      p -
                      (f + (((m - f) * ((3 * b) / (b + x) + 0.5)) / 4 || 0))))
                  : ((f = p - 0.5 * (p - d) * r),
                    (m = p + 0.5 * (u - p) * r),
                    (g = p - (f + m) / 2)),
                (f += g),
                (m += g),
                (h.c = v = f),
                (h.b = 0 !== c ? T : (T = h.a + 0.6 * (h.c - h.a))),
                (h.da = p - d),
                (h.ca = v - d),
                (h.ba = T - d),
                o
                  ? ((y = s(d, T, v, p)),
                    e.splice(_, 1, y[0], y[1], y[2], y[3]),
                    (_ += 4))
                  : _++,
                (T = m);
            (h = e[_]),
              (h.b = T),
              (h.c = T + 0.4 * (h.d - T)),
              (h.da = h.d - h.a),
              (h.ca = h.c - h.a),
              (h.ba = T - h.a),
              o &&
                ((y = s(h.a, T, h.c, h.d)),
                e.splice(_, 1, y[0], y[1], y[2], y[3]));
          },
          c = function(e, n, r, a) {
            var s,
              l,
              c,
              d,
              p,
              u,
              h = [];
            if (a)
              for (e = [a].concat(e), l = e.length; --l > -1; )
                "string" == typeof (u = e[l][n]) &&
                  "=" === u.charAt(1) &&
                  (e[l][n] = a[n] + Number(u.charAt(0) + u.substr(2)));
            if (((s = e.length - 2), 0 > s))
              return (h[0] = new o(e[0][n], 0, 0, e[-1 > s ? 0 : 1][n])), h;
            for (l = 0; s > l; l++)
              (c = e[l][n]),
                (d = e[l + 1][n]),
                (h[l] = new o(c, 0, 0, d)),
                r &&
                  ((p = e[l + 2][n]),
                  (t[l] = (t[l] || 0) + (d - c) * (d - c)),
                  (i[l] = (i[l] || 0) + (p - d) * (p - d)));
            return (h[l] = new o(e[l][n], 0, 0, e[l + 1][n])), h;
          },
          d = function(e, o, s, d, p, u) {
            var h,
              f,
              m,
              g,
              v,
              y,
              b,
              x,
              w = {},
              $ = [],
              _ = u || e[0];
            (p = "string" == typeof p ? "," + p + "," : a),
              null == o && (o = 1);
            for (f in e[0]) $.push(f);
            if (e.length > 1) {
              for (x = e[e.length - 1], b = !0, h = $.length; --h > -1; )
                if (((f = $[h]), Math.abs(_[f] - x[f]) > 0.05)) {
                  b = !1;
                  break;
                }
              b &&
                ((e = e.concat()),
                u && e.unshift(u),
                e.push(e[1]),
                (u = e[e.length - 3]));
            }
            for (t.length = i.length = n.length = 0, h = $.length; --h > -1; )
              (f = $[h]),
                (r[f] = -1 !== p.indexOf("," + f + ",")),
                (w[f] = c(e, f, r[f], u));
            for (h = t.length; --h > -1; )
              (t[h] = Math.sqrt(t[h])), (i[h] = Math.sqrt(i[h]));
            if (!d) {
              for (h = $.length; --h > -1; )
                if (r[f])
                  for (m = w[$[h]], y = m.length - 1, g = 0; y > g; g++)
                    (v = m[g + 1].da / i[g] + m[g].da / t[g]),
                      (n[g] = (n[g] || 0) + v * v);
              for (h = n.length; --h > -1; ) n[h] = Math.sqrt(n[h]);
            }
            for (h = $.length, g = s ? 4 : 1; --h > -1; )
              (f = $[h]),
                (m = w[f]),
                l(m, o, s, d, r[f]),
                b && (m.splice(0, g), m.splice(m.length - g, g));
            return w;
          },
          p = function(e, t, i) {
            t = t || "soft";
            var n,
              r,
              a,
              s,
              l,
              c,
              d,
              p,
              u,
              h,
              f,
              m = {},
              g = "cubic" === t ? 3 : 2,
              v = "soft" === t,
              y = [];
            if ((v && i && (e = [i].concat(e)), null == e || g + 1 > e.length))
              throw "invalid Bezier data";
            for (u in e[0]) y.push(u);
            for (c = y.length; --c > -1; ) {
              for (
                u = y[c], m[u] = l = [], h = 0, p = e.length, d = 0;
                p > d;
                d++
              )
                (n =
                  null == i
                    ? e[d][u]
                    : "string" == typeof (f = e[d][u]) && "=" === f.charAt(1)
                    ? i[u] + Number(f.charAt(0) + f.substr(2))
                    : Number(f)),
                  v && d > 1 && p - 1 > d && (l[h++] = (n + l[h - 2]) / 2),
                  (l[h++] = n);
              for (p = h - g + 1, h = 0, d = 0; p > d; d += g)
                (n = l[d]),
                  (r = l[d + 1]),
                  (a = l[d + 2]),
                  (s = 2 === g ? 0 : l[d + 3]),
                  (l[h++] = f =
                    3 === g
                      ? new o(n, r, a, s)
                      : new o(n, (2 * r + n) / 3, (2 * r + a) / 3, a));
              l.length = h;
            }
            return m;
          },
          u = function(e, t, i) {
            for (
              var n, r, o, a, s, l, c, d, p, u, h, f = 1 / i, m = e.length;
              --m > -1;

            )
              for (
                u = e[m],
                  o = u.a,
                  a = u.d - o,
                  s = u.c - o,
                  l = u.b - o,
                  n = r = 0,
                  d = 1;
                i >= d;
                d++
              )
                (c = f * d),
                  (p = 1 - c),
                  (n = r - (r = (c * c * a + 3 * p * (c * s + p * l)) * c)),
                  (h = m * i + d - 1),
                  (t[h] = (t[h] || 0) + n * n);
          },
          h = function(e, t) {
            t = t >> 0 || 6;
            var i,
              n,
              r,
              o,
              a = [],
              s = [],
              l = 0,
              c = 0,
              d = t - 1,
              p = [],
              h = [];
            for (i in e) u(e[i], a, t);
            for (r = a.length, n = 0; r > n; n++)
              (l += Math.sqrt(a[n])),
                (o = n % t),
                (h[o] = l),
                o === d &&
                  ((c += l),
                  (o = (n / t) >> 0),
                  (p[o] = h),
                  (s[o] = c),
                  (l = 0),
                  (h = []));
            return { length: c, lengths: s, segments: p };
          },
          f = window._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.2",
            API: 2,
            global: !0,
            init: function(e, t, i) {
              (this._target = e),
                t instanceof Array && (t = { values: t }),
                (this._func = {}),
                (this._round = {}),
                (this._props = []),
                (this._timeRes =
                  null == t.timeResolution
                    ? 6
                    : parseInt(t.timeResolution, 10));
              var n,
                r,
                o,
                a,
                s,
                l = t.values || [],
                c = {},
                u = l[0],
                f = t.autoRotate || i.vars.orientToBezier;
              this._autoRotate = f
                ? f instanceof Array
                  ? f
                  : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]]
                : null;
              for (n in u) this._props.push(n);
              for (o = this._props.length; --o > -1; )
                (n = this._props[o]),
                  this._overwriteProps.push(n),
                  (r = this._func[n] = "function" == typeof e[n]),
                  (c[n] = r
                    ? e[
                        n.indexOf("set") ||
                        "function" != typeof e["get" + n.substr(3)]
                          ? n
                          : "get" + n.substr(3)
                      ]()
                    : parseFloat(e[n])),
                  s || (c[n] !== l[0][n] && (s = c));
              if (
                ((this._beziers =
                  "cubic" !== t.type &&
                  "quadratic" !== t.type &&
                  "soft" !== t.type
                    ? d(
                        l,
                        isNaN(t.curviness) ? 1 : t.curviness,
                        !1,
                        "thruBasic" === t.type,
                        t.correlate,
                        s
                      )
                    : p(l, t.type, c)),
                (this._segCount = this._beziers[n].length),
                this._timeRes)
              ) {
                var m = h(this._beziers, this._timeRes);
                (this._length = m.length),
                  (this._lengths = m.lengths),
                  (this._segments = m.segments),
                  (this._l1 = this._li = this._s1 = this._si = 0),
                  (this._l2 = this._lengths[0]),
                  (this._curSeg = this._segments[0]),
                  (this._s2 = this._curSeg[0]),
                  (this._prec = 1 / this._curSeg.length);
              }
              if ((f = this._autoRotate))
                for (
                  this._initialRotations = [],
                    f[0] instanceof Array || (this._autoRotate = f = [f]),
                    o = f.length;
                  --o > -1;

                ) {
                  for (a = 0; 3 > a; a++)
                    (n = f[o][a]),
                      (this._func[n] =
                        "function" == typeof e[n]
                          ? e[
                              n.indexOf("set") ||
                              "function" != typeof e["get" + n.substr(3)]
                                ? n
                                : "get" + n.substr(3)
                            ]
                          : !1);
                  (n = f[o][2]),
                    (this._initialRotations[o] = this._func[n]
                      ? this._func[n].call(this._target)
                      : this._target[n]);
                }
              return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
            },
            set: function(t) {
              var i,
                n,
                r,
                o,
                a,
                s,
                l,
                c,
                d,
                p,
                u = this._segCount,
                h = this._func,
                f = this._target,
                m = t !== this._startRatio;
              if (this._timeRes) {
                if (
                  ((d = this._lengths),
                  (p = this._curSeg),
                  (t *= this._length),
                  (r = this._li),
                  t > this._l2 && u - 1 > r)
                ) {
                  for (c = u - 1; c > r && t >= (this._l2 = d[++r]); );
                  (this._l1 = d[r - 1]),
                    (this._li = r),
                    (this._curSeg = p = this._segments[r]),
                    (this._s2 = p[(this._s1 = this._si = 0)]);
                } else if (this._l1 > t && r > 0) {
                  for (; r > 0 && (this._l1 = d[--r]) >= t; );
                  0 === r && this._l1 > t ? (this._l1 = 0) : r++,
                    (this._l2 = d[r]),
                    (this._li = r),
                    (this._curSeg = p = this._segments[r]),
                    (this._s1 = p[(this._si = p.length - 1) - 1] || 0),
                    (this._s2 = p[this._si]);
                }
                if (
                  ((i = r),
                  (t -= this._l1),
                  (r = this._si),
                  t > this._s2 && p.length - 1 > r)
                ) {
                  for (c = p.length - 1; c > r && t >= (this._s2 = p[++r]); );
                  (this._s1 = p[r - 1]), (this._si = r);
                } else if (this._s1 > t && r > 0) {
                  for (; r > 0 && (this._s1 = p[--r]) >= t; );
                  0 === r && this._s1 > t ? (this._s1 = 0) : r++,
                    (this._s2 = p[r]),
                    (this._si = r);
                }
                s = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec;
              } else
                (i = 0 > t ? 0 : t >= 1 ? u - 1 : (u * t) >> 0),
                  (s = (t - i * (1 / u)) * u);
              for (n = 1 - s, r = this._props.length; --r > -1; )
                (o = this._props[r]),
                  (a = this._beziers[o][i]),
                  (l =
                    (s * s * a.da + 3 * n * (s * a.ca + n * a.ba)) * s + a.a),
                  this._round[o] && (l = Math.round(l)),
                  h[o] ? f[o](l) : (f[o] = l);
              if (this._autoRotate) {
                var g,
                  v,
                  y,
                  b,
                  x,
                  w,
                  $,
                  _ = this._autoRotate;
                for (r = _.length; --r > -1; )
                  (o = _[r][2]),
                    (w = _[r][3] || 0),
                    ($ = _[r][4] === !0 ? 1 : e),
                    (a = this._beziers[_[r][0]]),
                    (g = this._beziers[_[r][1]]),
                    a &&
                      g &&
                      ((a = a[i]),
                      (g = g[i]),
                      (v = a.a + (a.b - a.a) * s),
                      (b = a.b + (a.c - a.b) * s),
                      (v += (b - v) * s),
                      (b += (a.c + (a.d - a.c) * s - b) * s),
                      (y = g.a + (g.b - g.a) * s),
                      (x = g.b + (g.c - g.b) * s),
                      (y += (x - y) * s),
                      (x += (g.c + (g.d - g.c) * s - x) * s),
                      (l = m
                        ? Math.atan2(x - y, b - v) * $ + w
                        : this._initialRotations[r]),
                      h[o] ? f[o](l) : (f[o] = l));
              }
            },
          }),
          m = f.prototype;
        (f.bezierThrough = d),
          (f.cubicToQuadratic = s),
          (f._autoCSS = !0),
          (f.quadraticToCubic = function(e, t, i) {
            return new o(e, (2 * t + e) / 3, (2 * t + i) / 3, i);
          }),
          (f._cssRegister = function() {
            var e = window._gsDefine.globals.CSSPlugin;
            if (e) {
              var t = e._internals,
                i = t._parseToProxy,
                n = t._setPluginRatio,
                r = t.CSSPropTween;
              t._registerComplexSpecialProp("bezier", {
                parser: function(e, t, o, a, s, l) {
                  t instanceof Array && (t = { values: t }), (l = new f());
                  var c,
                    d,
                    p,
                    u = t.values,
                    h = u.length - 1,
                    m = [],
                    g = {};
                  if (0 > h) return s;
                  for (c = 0; h >= c; c++)
                    (p = i(e, u[c], a, s, l, h !== c)), (m[c] = p.end);
                  for (d in t) g[d] = t[d];
                  return (
                    (g.values = m),
                    (s = new r(e, "bezier", 0, 0, p.pt, 2)),
                    (s.data = p),
                    (s.plugin = l),
                    (s.setRatio = n),
                    0 === g.autoRotate && (g.autoRotate = !0),
                    !g.autoRotate ||
                      g.autoRotate instanceof Array ||
                      ((c = g.autoRotate === !0 ? 0 : Number(g.autoRotate)),
                      (g.autoRotate =
                        null != p.end.left
                          ? [["left", "top", "rotation", c, !1]]
                          : null != p.end.x
                          ? [["x", "y", "rotation", c, !1]]
                          : !1)),
                    g.autoRotate &&
                      (a._transform || a._enableTransforms(!1),
                      (p.autoRotate = a._target._gsTransform)),
                    l._onInitTween(p.proxy, g, a._tween),
                    s
                  );
                },
              });
            }
          }),
          (m._roundProps = function(e, t) {
            for (var i = this._overwriteProps, n = i.length; --n > -1; )
              (e[i[n]] || e.bezier || e.bezierThrough) &&
                (this._round[i[n]] = t);
          }),
          (m._kill = function(e) {
            var t,
              i,
              n = this._props;
            for (t in this._beziers)
              if (t in e)
                for (
                  delete this._beziers[t], delete this._func[t], i = n.length;
                  --i > -1;

                )
                  n[i] === t && n.splice(i, 1);
            return this._super._kill.call(this, e);
          });
      })(),
      window._gsDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "TweenLite"],
        function(e, t) {
          var i,
            n,
            r,
            o,
            a = function() {
              e.call(this, "css"),
                (this._overwriteProps.length = 0),
                (this.setRatio = a.prototype.setRatio);
            },
            s = {},
            l = (a.prototype = new e("css"));
          (l.constructor = a),
            (a.version = "1.12.1"),
            (a.API = 2),
            (a.defaultTransformPerspective = 0),
            (a.defaultSkewType = "compensated"),
            (l = "px"),
            (a.suffixMap = {
              top: l,
              right: l,
              bottom: l,
              left: l,
              width: l,
              height: l,
              fontSize: l,
              padding: l,
              margin: l,
              perspective: l,
              lineHeight: "",
            });
          var c,
            d,
            p,
            u,
            h,
            f,
            m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            y = /[^\d\-\.]/g,
            b = /(?:\d|\-|\+|=|#|\.)*/g,
            x = /opacity *= *([^)]*)/i,
            w = /opacity:([^;]*)/i,
            $ = /alpha\(opacity *=.+?\)/i,
            _ = /^(rgb|hsl)/,
            T = /([A-Z])/g,
            k = /-([a-z])/gi,
            C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            F = function(e, t) {
              return t.toUpperCase();
            },
            S = /(?:Left|Right|Width)/i,
            P = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            A = /,(?=[^\)]*(?:\(|$))/gi,
            I = Math.PI / 180,
            E = 180 / Math.PI,
            j = {},
            M = document,
            O = M.createElement("div"),
            N = M.createElement("img"),
            L = (a._internals = { _specialProps: s }),
            R = navigator.userAgent,
            z = (function() {
              var e,
                t = R.indexOf("Android"),
                i = M.createElement("div");
              return (
                (p =
                  -1 !== R.indexOf("Safari") &&
                  -1 === R.indexOf("Chrome") &&
                  (-1 === t || Number(R.substr(t + 8, 1)) > 3)),
                (h = p && 6 > Number(R.substr(R.indexOf("Version/") + 8, 1))),
                (u = -1 !== R.indexOf("Firefox")),
                /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(R) &&
                  (f = parseFloat(RegExp.$1)),
                (i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>"),
                (e = i.getElementsByTagName("a")[0]),
                e ? /^0.55/.test(e.style.opacity) : !1
              );
            })(),
            H = function(e) {
              return x.test(
                "string" == typeof e
                  ? e
                  : (e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
                      ""
              )
                ? parseFloat(RegExp.$1) / 100
                : 1;
            },
            W = function(e) {
              window.console && console.log(e);
            },
            B = "",
            q = "",
            X = function(e, t) {
              t = t || O;
              var i,
                n,
                r = t.style;
              if (void 0 !== r[e]) return e;
              for (
                e = e.charAt(0).toUpperCase() + e.substr(1),
                  i = ["O", "Moz", "ms", "Ms", "Webkit"],
                  n = 5;
                --n > -1 && void 0 === r[i[n] + e];

              );
              return n >= 0
                ? ((q = 3 === n ? "ms" : i[n]),
                  (B = "-" + q.toLowerCase() + "-"),
                  q + e)
                : null;
            },
            U = M.defaultView ? M.defaultView.getComputedStyle : function() {},
            Y = (a.getStyle = function(e, t, i, n, r) {
              var o;
              return z || "opacity" !== t
                ? (!n && e.style[t]
                    ? (o = e.style[t])
                    : (i = i || U(e))
                    ? (o =
                        i[t] ||
                        i.getPropertyValue(t) ||
                        i.getPropertyValue(t.replace(T, "-$1").toLowerCase()))
                    : e.currentStyle && (o = e.currentStyle[t]),
                  null == r ||
                  (o && "none" !== o && "auto" !== o && "auto auto" !== o)
                    ? o
                    : r)
                : H(e);
            }),
            V = (L.convertToPixels = function(e, i, n, r, o) {
              if ("px" === r || !r) return n;
              if ("auto" === r || !n) return 0;
              var s,
                l,
                c,
                d = S.test(i),
                p = e,
                u = O.style,
                h = 0 > n;
              if ((h && (n = -n), "%" === r && -1 !== i.indexOf("border")))
                s = (n / 100) * (d ? e.clientWidth : e.clientHeight);
              else {
                if (
                  ((u.cssText =
                    "border:0 solid red;position:" +
                    Y(e, "position") +
                    ";line-height:0;"),
                  "%" !== r && p.appendChild)
                )
                  u[d ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                else {
                  if (
                    ((p = e.parentNode || M.body),
                    (l = p._gsCache),
                    (c = t.ticker.frame),
                    l && d && l.time === c)
                  )
                    return (l.width * n) / 100;
                  u[d ? "width" : "height"] = n + r;
                }
                p.appendChild(O),
                  (s = parseFloat(O[d ? "offsetWidth" : "offsetHeight"])),
                  p.removeChild(O),
                  d &&
                    "%" === r &&
                    a.cacheWidths !== !1 &&
                    ((l = p._gsCache = p._gsCache || {}),
                    (l.time = c),
                    (l.width = 100 * (s / n))),
                  0 !== s || o || (s = V(e, i, n, r, !0));
              }
              return h ? -s : s;
            }),
            Q = (L.calculateOffset = function(e, t, i) {
              if ("absolute" !== Y(e, "position", i)) return 0;
              var n = "left" === t ? "Left" : "Top",
                r = Y(e, "margin" + n, i);
              return (
                e["offset" + n] -
                (V(e, t, parseFloat(r), r.replace(b, "")) || 0)
              );
            }),
            J = function(e, t) {
              var i,
                n,
                r = {};
              if ((t = t || U(e, null)))
                if ((i = t.length))
                  for (; --i > -1; )
                    r[t[i].replace(k, F)] = t.getPropertyValue(t[i]);
                else for (i in t) r[i] = t[i];
              else if ((t = e.currentStyle || e.style))
                for (i in t)
                  "string" == typeof i &&
                    void 0 === r[i] &&
                    (r[i.replace(k, F)] = t[i]);
              return (
                z || (r.opacity = H(e)),
                (n = Tt(e, t, !1)),
                (r.rotation = n.rotation),
                (r.skewX = n.skewX),
                (r.scaleX = n.scaleX),
                (r.scaleY = n.scaleY),
                (r.x = n.x),
                (r.y = n.y),
                $t &&
                  ((r.z = n.z),
                  (r.rotationX = n.rotationX),
                  (r.rotationY = n.rotationY),
                  (r.scaleZ = n.scaleZ)),
                r.filters && delete r.filters,
                r
              );
            },
            G = function(e, t, i, n, r) {
              var o,
                a,
                s,
                l = {},
                c = e.style;
              for (a in i)
                "cssText" !== a &&
                  "length" !== a &&
                  isNaN(a) &&
                  (t[a] !== (o = i[a]) || (r && r[a])) &&
                  -1 === a.indexOf("Origin") &&
                  ("number" == typeof o || "string" == typeof o) &&
                  ((l[a] =
                    "auto" !== o || ("left" !== a && "top" !== a)
                      ? ("" !== o && "auto" !== o && "none" !== o) ||
                        "string" != typeof t[a] ||
                        "" === t[a].replace(y, "")
                        ? o
                        : 0
                      : Q(e, a)),
                  void 0 !== c[a] && (s = new pt(c, a, c[a], s)));
              if (n) for (a in n) "className" !== a && (l[a] = n[a]);
              return { difs: l, firstMPT: s };
            },
            Z = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            K = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            et = function(e, t, i) {
              var n = parseFloat(
                  "width" === t ? e.offsetWidth : e.offsetHeight
                ),
                r = Z[t],
                o = r.length;
              for (i = i || U(e, null); --o > -1; )
                (n -= parseFloat(Y(e, "padding" + r[o], i, !0)) || 0),
                  (n -=
                    parseFloat(Y(e, "border" + r[o] + "Width", i, !0)) || 0);
              return n;
            },
            tt = function(e, t) {
              (null == e || "" === e || "auto" === e || "auto auto" === e) &&
                (e = "0 0");
              var i = e.split(" "),
                n =
                  -1 !== e.indexOf("left")
                    ? "0%"
                    : -1 !== e.indexOf("right")
                    ? "100%"
                    : i[0],
                r =
                  -1 !== e.indexOf("top")
                    ? "0%"
                    : -1 !== e.indexOf("bottom")
                    ? "100%"
                    : i[1];
              return (
                null == r ? (r = "0") : "center" === r && (r = "50%"),
                ("center" === n ||
                  (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) &&
                  (n = "50%"),
                t &&
                  ((t.oxp = -1 !== n.indexOf("%")),
                  (t.oyp = -1 !== r.indexOf("%")),
                  (t.oxr = "=" === n.charAt(1)),
                  (t.oyr = "=" === r.charAt(1)),
                  (t.ox = parseFloat(n.replace(y, ""))),
                  (t.oy = parseFloat(r.replace(y, "")))),
                n + " " + r + (i.length > 2 ? " " + i[2] : "")
              );
            },
            it = function(e, t) {
              return "string" == typeof e && "=" === e.charAt(1)
                ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))
                : parseFloat(e) - parseFloat(t);
            },
            nt = function(e, t) {
              return null == e
                ? t
                : "string" == typeof e && "=" === e.charAt(1)
                ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t
                : parseFloat(e);
            },
            rt = function(e, t, i, n) {
              var r,
                o,
                a,
                s,
                l = 1e-6;
              return (
                null == e
                  ? (s = t)
                  : "number" == typeof e
                  ? (s = e)
                  : ((r = 360),
                    (o = e.split("_")),
                    (a =
                      Number(o[0].replace(y, "")) *
                        (-1 === e.indexOf("rad") ? 1 : E) -
                      ("=" === e.charAt(1) ? 0 : t)),
                    o.length &&
                      (n && (n[i] = t + a),
                      -1 !== e.indexOf("short") &&
                        ((a %= r),
                        a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)),
                      -1 !== e.indexOf("_cw") && 0 > a
                        ? (a = ((a + 9999999999 * r) % r) - (0 | (a / r)) * r)
                        : -1 !== e.indexOf("ccw") &&
                          a > 0 &&
                          (a = ((a - 9999999999 * r) % r) - (0 | (a / r)) * r)),
                    (s = t + a)),
                l > s && s > -l && (s = 0),
                s
              );
            },
            ot = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
            },
            at = function(e, t, i) {
              return (
                (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e),
                0 |
                  (255 *
                    (1 > 6 * e
                      ? t + 6 * (i - t) * e
                      : 0.5 > e
                      ? i
                      : 2 > 3 * e
                      ? t + 6 * (i - t) * (2 / 3 - e)
                      : t) +
                    0.5)
              );
            },
            st = function(e) {
              var t, i, n, r, o, a;
              return e && "" !== e
                ? "number" == typeof e
                  ? [e >> 16, 255 & (e >> 8), 255 & e]
                  : ("," === e.charAt(e.length - 1) &&
                      (e = e.substr(0, e.length - 1)),
                    ot[e]
                      ? ot[e]
                      : "#" === e.charAt(0)
                      ? (4 === e.length &&
                          ((t = e.charAt(1)),
                          (i = e.charAt(2)),
                          (n = e.charAt(3)),
                          (e = "#" + t + t + i + i + n + n)),
                        (e = parseInt(e.substr(1), 16)),
                        [e >> 16, 255 & (e >> 8), 255 & e])
                      : "hsl" === e.substr(0, 3)
                      ? ((e = e.match(m)),
                        (r = (Number(e[0]) % 360) / 360),
                        (o = Number(e[1]) / 100),
                        (a = Number(e[2]) / 100),
                        (i = 0.5 >= a ? a * (o + 1) : a + o - a * o),
                        (t = 2 * a - i),
                        e.length > 3 && (e[3] = Number(e[3])),
                        (e[0] = at(r + 1 / 3, t, i)),
                        (e[1] = at(r, t, i)),
                        (e[2] = at(r - 1 / 3, t, i)),
                        e)
                      : ((e = e.match(m) || ot.transparent),
                        (e[0] = Number(e[0])),
                        (e[1] = Number(e[1])),
                        (e[2] = Number(e[2])),
                        e.length > 3 && (e[3] = Number(e[3])),
                        e))
                : ot.black;
            },
            lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
          for (l in ot) lt += "|" + l + "\\b";
          lt = RegExp(lt + ")", "gi");
          var ct = function(e, t, i, n) {
              if (null == e)
                return function(e) {
                  return e;
                };
              var r,
                o = t ? (e.match(lt) || [""])[0] : "",
                a =
                  e
                    .split(o)
                    .join("")
                    .match(v) || [],
                s = e.substr(0, e.indexOf(a[0])),
                l = ")" === e.charAt(e.length - 1) ? ")" : "",
                c = -1 !== e.indexOf(" ") ? " " : ",",
                d = a.length,
                p = d > 0 ? a[0].replace(m, "") : "";
              return d
                ? (r = t
                    ? function(e) {
                        var t, u, h, f;
                        if ("number" == typeof e) e += p;
                        else if (n && A.test(e)) {
                          for (
                            f = e.replace(A, "|").split("|"), h = 0;
                            f.length > h;
                            h++
                          )
                            f[h] = r(f[h]);
                          return f.join(",");
                        }
                        if (
                          ((t = (e.match(lt) || [o])[0]),
                          (u =
                            e
                              .split(t)
                              .join("")
                              .match(v) || []),
                          (h = u.length),
                          d > h--)
                        )
                          for (; d > ++h; )
                            u[h] = i ? u[0 | ((h - 1) / 2)] : a[h];
                        return (
                          s +
                          u.join(c) +
                          c +
                          t +
                          l +
                          (-1 !== e.indexOf("inset") ? " inset" : "")
                        );
                      }
                    : function(e) {
                        var t, o, u;
                        if ("number" == typeof e) e += p;
                        else if (n && A.test(e)) {
                          for (
                            o = e.replace(A, "|").split("|"), u = 0;
                            o.length > u;
                            u++
                          )
                            o[u] = r(o[u]);
                          return o.join(",");
                        }
                        if (((t = e.match(v) || []), (u = t.length), d > u--))
                          for (; d > ++u; )
                            t[u] = i ? t[0 | ((u - 1) / 2)] : a[u];
                        return s + t.join(c) + l;
                      })
                : function(e) {
                    return e;
                  };
            },
            dt = function(e) {
              return (
                (e = e.split(",")),
                function(t, i, n, r, o, a, s) {
                  var l,
                    c = (i + "").split(" ");
                  for (s = {}, l = 0; 4 > l; l++)
                    s[e[l]] = c[l] = c[l] || c[((l - 1) / 2) >> 0];
                  return r.parse(t, s, o, a);
                }
              );
            },
            pt = ((L._setPluginRatio = function(e) {
              this.plugin.setRatio(e);
              for (
                var t,
                  i,
                  n,
                  r,
                  o = this.data,
                  a = o.proxy,
                  s = o.firstMPT,
                  l = 1e-6;
                s;

              )
                (t = a[s.v]),
                  s.r ? (t = Math.round(t)) : l > t && t > -l && (t = 0),
                  (s.t[s.p] = t),
                  (s = s._next);
              if (
                (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === e)
              )
                for (s = o.firstMPT; s; ) {
                  if (((i = s.t), i.type)) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++)
                        r += i["xn" + n] + i["xs" + (n + 1)];
                      i.e = r;
                    }
                  } else i.e = i.s + i.xs0;
                  s = s._next;
                }
            }),
            function(e, t, i, n, r) {
              (this.t = e),
                (this.p = t),
                (this.v = i),
                (this.r = r),
                n && ((n._prev = this), (this._next = n));
            }),
            ut = ((L._parseToProxy = function(e, t, i, n, r, o) {
              var a,
                s,
                l,
                c,
                d,
                p = n,
                u = {},
                h = {},
                f = i._transform,
                m = j;
              for (
                i._transform = null,
                  j = t,
                  n = d = i.parse(e, t, n, r),
                  j = m,
                  o &&
                    ((i._transform = f),
                    p && ((p._prev = null), p._prev && (p._prev._next = null)));
                n && n !== p;

              ) {
                if (
                  1 >= n.type &&
                  ((s = n.p),
                  (h[s] = n.s + n.c),
                  (u[s] = n.s),
                  o || ((c = new pt(n, "s", s, c, n.r)), (n.c = 0)),
                  1 === n.type)
                )
                  for (a = n.l; --a > 0; )
                    (l = "xn" + a),
                      (s = n.p + "_" + l),
                      (h[s] = n.data[l]),
                      (u[s] = n[l]),
                      o || (c = new pt(n, l, s, c, n.rxp[l]));
                n = n._next;
              }
              return { proxy: u, end: h, firstMPT: c, pt: d };
            }),
            (L.CSSPropTween = function(e, t, n, r, a, s, l, c, d, p, u) {
              (this.t = e),
                (this.p = t),
                (this.s = n),
                (this.c = r),
                (this.n = l || t),
                e instanceof ut || o.push(this.n),
                (this.r = c),
                (this.type = s || 0),
                d && ((this.pr = d), (i = !0)),
                (this.b = void 0 === p ? n : p),
                (this.e = void 0 === u ? n + r : u),
                a && ((this._next = a), (a._prev = this));
            })),
            ht = (a.parseComplex = function(e, t, i, n, r, o, a, s, l, d) {
              (i = i || o || ""),
                (a = new ut(e, t, 0, 0, a, d ? 2 : 1, null, !1, s, i, n)),
                (n += "");
              var p,
                u,
                h,
                f,
                v,
                y,
                b,
                x,
                w,
                $,
                T,
                k,
                C = i
                  .split(", ")
                  .join(",")
                  .split(" "),
                F = n
                  .split(", ")
                  .join(",")
                  .split(" "),
                S = C.length,
                P = c !== !1;
              for (
                (-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) &&
                  ((C = C.join(" ")
                    .replace(A, ", ")
                    .split(" ")),
                  (F = F.join(" ")
                    .replace(A, ", ")
                    .split(" ")),
                  (S = C.length)),
                  S !== F.length &&
                    ((C = (o || "").split(" ")), (S = C.length)),
                  a.plugin = l,
                  a.setRatio = d,
                  p = 0;
                S > p;
                p++
              )
                if (((f = C[p]), (v = F[p]), (x = parseFloat(f)), x || 0 === x))
                  a.appendXtra(
                    "",
                    x,
                    it(v, x),
                    v.replace(g, ""),
                    P && -1 !== v.indexOf("px"),
                    !0
                  );
                else if (r && ("#" === f.charAt(0) || ot[f] || _.test(f)))
                  (k = "," === v.charAt(v.length - 1) ? ")," : ")"),
                    (f = st(f)),
                    (v = st(v)),
                    (w = f.length + v.length > 6),
                    w && !z && 0 === v[3]
                      ? ((a["xs" + a.l] += a.l
                          ? " transparent"
                          : "transparent"),
                        (a.e = a.e.split(F[p]).join("transparent")))
                      : (z || (w = !1),
                        a
                          .appendXtra(
                            w ? "rgba(" : "rgb(",
                            f[0],
                            v[0] - f[0],
                            ",",
                            !0,
                            !0
                          )
                          .appendXtra("", f[1], v[1] - f[1], ",", !0)
                          .appendXtra("", f[2], v[2] - f[2], w ? "," : k, !0),
                        w &&
                          ((f = 4 > f.length ? 1 : f[3]),
                          a.appendXtra(
                            "",
                            f,
                            (4 > v.length ? 1 : v[3]) - f,
                            k,
                            !1
                          )));
                else if ((y = f.match(m))) {
                  if (((b = v.match(g)), !b || b.length !== y.length)) return a;
                  for (h = 0, u = 0; y.length > u; u++)
                    (T = y[u]),
                      ($ = f.indexOf(T, h)),
                      a.appendXtra(
                        f.substr(h, $ - h),
                        Number(T),
                        it(b[u], T),
                        "",
                        P && "px" === f.substr($ + T.length, 2),
                        0 === u
                      ),
                      (h = $ + T.length);
                  a["xs" + a.l] += f.substr(h);
                } else a["xs" + a.l] += a.l ? " " + f : f;
              if (-1 !== n.indexOf("=") && a.data) {
                for (k = a.xs0 + a.data.s, p = 1; a.l > p; p++)
                  k += a["xs" + p] + a.data["xn" + p];
                a.e = k + a["xs" + p];
              }
              return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
            }),
            ft = 9;
          for (l = ut.prototype, l.l = l.pr = 0; --ft > 0; )
            (l["xn" + ft] = 0), (l["xs" + ft] = "");
          (l.xs0 = ""),
            (l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null),
            (l.appendXtra = function(e, t, i, n, r, o) {
              var a = this,
                s = a.l;
              return (
                (a["xs" + s] += o && s ? " " + e : e || ""),
                i || 0 === s || a.plugin
                  ? (a.l++,
                    (a.type = a.setRatio ? 2 : 1),
                    (a["xs" + a.l] = n || ""),
                    s > 0
                      ? ((a.data["xn" + s] = t + i),
                        (a.rxp["xn" + s] = r),
                        (a["xn" + s] = t),
                        a.plugin ||
                          ((a.xfirst = new ut(
                            a,
                            "xn" + s,
                            t,
                            i,
                            a.xfirst || a,
                            0,
                            a.n,
                            r,
                            a.pr
                          )),
                          (a.xfirst.xs0 = 0)),
                        a)
                      : ((a.data = { s: t + i }),
                        (a.rxp = {}),
                        (a.s = t),
                        (a.c = i),
                        (a.r = r),
                        a))
                  : ((a["xs" + s] += t + (n || "")), a)
              );
            });
          var mt = function(e, t) {
              (t = t || {}),
                (this.p = t.prefix ? X(e) || e : e),
                (s[e] = s[this.p] = this),
                (this.format =
                  t.formatter ||
                  ct(t.defaultValue, t.color, t.collapsible, t.multi)),
                t.parser && (this.parse = t.parser),
                (this.clrs = t.color),
                (this.multi = t.multi),
                (this.keyword = t.keyword),
                (this.dflt = t.defaultValue),
                (this.pr = t.priority || 0);
            },
            gt = (L._registerComplexSpecialProp = function(e, t, i) {
              "object" != typeof t && (t = { parser: i });
              var n,
                r,
                o = e.split(","),
                a = t.defaultValue;
              for (i = i || [a], n = 0; o.length > n; n++)
                (t.prefix = 0 === n && t.prefix),
                  (t.defaultValue = i[n] || a),
                  (r = new mt(o[n], t));
            }),
            vt = function(e) {
              if (!s[e]) {
                var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                gt(e, {
                  parser: function(e, i, n, r, o, a, l) {
                    var c = (window.GreenSockGlobals || window).com.greensock
                      .plugins[t];
                    return c
                      ? (c._cssRegister(), s[n].parse(e, i, n, r, o, a, l))
                      : (W("Error: " + t + " js file not loaded."), o);
                  },
                });
              }
            };
          (l = mt.prototype),
            (l.parseComplex = function(e, t, i, n, r, o) {
              var a,
                s,
                l,
                c,
                d,
                p,
                u = this.keyword;
              if (
                (this.multi &&
                  (A.test(i) || A.test(t)
                    ? ((s = t.replace(A, "|").split("|")),
                      (l = i.replace(A, "|").split("|")))
                    : u && ((s = [t]), (l = [i]))),
                l)
              ) {
                for (
                  c = l.length > s.length ? l.length : s.length, a = 0;
                  c > a;
                  a++
                )
                  (t = s[a] = s[a] || this.dflt),
                    (i = l[a] = l[a] || this.dflt),
                    u &&
                      ((d = t.indexOf(u)),
                      (p = i.indexOf(u)),
                      d !== p && ((i = -1 === p ? l : s), (i[a] += " " + u)));
                (t = s.join(", ")), (i = l.join(", "));
              }
              return ht(
                e,
                this.p,
                t,
                i,
                this.clrs,
                this.dflt,
                n,
                this.pr,
                r,
                o
              );
            }),
            (l.parse = function(e, t, i, n, o, a) {
              return this.parseComplex(
                e.style,
                this.format(Y(e, this.p, r, !1, this.dflt)),
                this.format(t),
                o,
                a
              );
            }),
            (a.registerSpecialProp = function(e, t, i) {
              gt(e, {
                parser: function(e, n, r, o, a, s) {
                  var l = new ut(e, r, 0, 0, a, 2, r, !1, i);
                  return (l.plugin = s), (l.setRatio = t(e, n, o._tween, r)), l;
                },
                priority: i,
              });
            });
          var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective".split(
              ","
            ),
            bt = X("transform"),
            xt = B + "transform",
            wt = X("transformOrigin"),
            $t = null !== X("perspective"),
            _t = (L.Transform = function() {
              this.skewY = 0;
            }),
            Tt = (L.getTransform = function(e, t, i, n) {
              if (e._gsTransform && i && !n) return e._gsTransform;
              var r,
                o,
                s,
                l,
                c,
                d,
                p,
                u,
                h,
                f,
                m,
                g,
                v,
                y = i ? e._gsTransform || new _t() : new _t(),
                b = 0 > y.scaleX,
                x = 2e-5,
                w = 1e5,
                $ = 179.99,
                _ = $ * I,
                T = $t
                  ? parseFloat(Y(e, wt, t, !1, "0 0 0").split(" ")[2]) ||
                    y.zOrigin ||
                    0
                  : 0;
              for (
                bt
                  ? (r = Y(e, xt, t, !0))
                  : e.currentStyle &&
                    ((r = e.currentStyle.filter.match(P)),
                    (r =
                      r && 4 === r.length
                        ? [
                            r[0].substr(4),
                            Number(r[2].substr(4)),
                            Number(r[1].substr(4)),
                            r[3].substr(4),
                            y.x || 0,
                            y.y || 0,
                          ].join(",")
                        : "")),
                  o = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                  s = o.length;
                --s > -1;

              )
                (l = Number(o[s])),
                  (o[s] = (c = l - (l |= 0))
                    ? (0 | (c * w + (0 > c ? -0.5 : 0.5))) / w + l
                    : l);
              if (16 === o.length) {
                var k = o[8],
                  C = o[9],
                  F = o[10],
                  S = o[12],
                  D = o[13],
                  A = o[14];
                if (
                  (y.zOrigin &&
                    ((A = -y.zOrigin),
                    (S = k * A - o[12]),
                    (D = C * A - o[13]),
                    (A = F * A + y.zOrigin - o[14])),
                  !i || n || null == y.rotationX)
                ) {
                  var j,
                    M,
                    O,
                    N,
                    L,
                    R,
                    z,
                    H = o[0],
                    W = o[1],
                    B = o[2],
                    q = o[3],
                    X = o[4],
                    U = o[5],
                    V = o[6],
                    Q = o[7],
                    J = o[11],
                    G = Math.atan2(V, F),
                    Z = -_ > G || G > _;
                  (y.rotationX = G * E),
                    G &&
                      ((N = Math.cos(-G)),
                      (L = Math.sin(-G)),
                      (j = X * N + k * L),
                      (M = U * N + C * L),
                      (O = V * N + F * L),
                      (k = X * -L + k * N),
                      (C = U * -L + C * N),
                      (F = V * -L + F * N),
                      (J = Q * -L + J * N),
                      (X = j),
                      (U = M),
                      (V = O)),
                    (G = Math.atan2(k, H)),
                    (y.rotationY = G * E),
                    G &&
                      ((R = -_ > G || G > _),
                      (N = Math.cos(-G)),
                      (L = Math.sin(-G)),
                      (j = H * N - k * L),
                      (M = W * N - C * L),
                      (O = B * N - F * L),
                      (C = W * L + C * N),
                      (F = B * L + F * N),
                      (J = q * L + J * N),
                      (H = j),
                      (W = M),
                      (B = O)),
                    (G = Math.atan2(W, U)),
                    (y.rotation = G * E),
                    G &&
                      ((z = -_ > G || G > _),
                      (N = Math.cos(-G)),
                      (L = Math.sin(-G)),
                      (H = H * N + X * L),
                      (M = W * N + U * L),
                      (U = W * -L + U * N),
                      (V = B * -L + V * N),
                      (W = M)),
                    z && Z
                      ? (y.rotation = y.rotationX = 0)
                      : z && R
                      ? (y.rotation = y.rotationY = 0)
                      : R && Z && (y.rotationY = y.rotationX = 0),
                    (y.scaleX = (0 | (Math.sqrt(H * H + W * W) * w + 0.5)) / w),
                    (y.scaleY = (0 | (Math.sqrt(U * U + C * C) * w + 0.5)) / w),
                    (y.scaleZ = (0 | (Math.sqrt(V * V + F * F) * w + 0.5)) / w),
                    (y.skewX = 0),
                    (y.perspective = J ? 1 / (0 > J ? -J : J) : 0),
                    (y.x = S),
                    (y.y = D),
                    (y.z = A);
                }
              } else if (
                !(
                  ($t &&
                    !n &&
                    o.length &&
                    y.x === o[4] &&
                    y.y === o[5] &&
                    (y.rotationX || y.rotationY)) ||
                  (void 0 !== y.x && "none" === Y(e, "display", t))
                )
              ) {
                var K = o.length >= 6,
                  et = K ? o[0] : 1,
                  tt = o[1] || 0,
                  it = o[2] || 0,
                  nt = K ? o[3] : 1;
                (y.x = o[4] || 0),
                  (y.y = o[5] || 0),
                  (d = Math.sqrt(et * et + tt * tt)),
                  (p = Math.sqrt(nt * nt + it * it)),
                  (u = et || tt ? Math.atan2(tt, et) * E : y.rotation || 0),
                  (h = it || nt ? Math.atan2(it, nt) * E + u : y.skewX || 0),
                  (f = d - Math.abs(y.scaleX || 0)),
                  (m = p - Math.abs(y.scaleY || 0)),
                  Math.abs(h) > 90 &&
                    270 > Math.abs(h) &&
                    (b
                      ? ((d *= -1),
                        (h += 0 >= u ? 180 : -180),
                        (u += 0 >= u ? 180 : -180))
                      : ((p *= -1), (h += 0 >= h ? 180 : -180))),
                  (g = (u - y.rotation) % 180),
                  (v = (h - y.skewX) % 180),
                  (void 0 === y.skewX ||
                    f > x ||
                    -x > f ||
                    m > x ||
                    -x > m ||
                    (g > -$ && $ > g && !1 | (g * w)) ||
                    (v > -$ && $ > v && !1 | (v * w))) &&
                    ((y.scaleX = d),
                    (y.scaleY = p),
                    (y.rotation = u),
                    (y.skewX = h)),
                  $t &&
                    ((y.rotationX = y.rotationY = y.z = 0),
                    (y.perspective =
                      parseFloat(a.defaultTransformPerspective) || 0),
                    (y.scaleZ = 1));
              }
              y.zOrigin = T;
              for (s in y) x > y[s] && y[s] > -x && (y[s] = 0);
              return i && (e._gsTransform = y), y;
            }),
            kt = function(e) {
              var t,
                i,
                n = this.data,
                r = -n.rotation * I,
                o = r + n.skewX * I,
                a = 1e5,
                s = (0 | (Math.cos(r) * n.scaleX * a)) / a,
                l = (0 | (Math.sin(r) * n.scaleX * a)) / a,
                c = (0 | (Math.sin(o) * -n.scaleY * a)) / a,
                d = (0 | (Math.cos(o) * n.scaleY * a)) / a,
                p = this.t.style,
                u = this.t.currentStyle;
              if (u) {
                (i = l), (l = -c), (c = -i), (t = u.filter), (p.filter = "");
                var h,
                  m,
                  g = this.t.offsetWidth,
                  v = this.t.offsetHeight,
                  y = "absolute" !== u.position,
                  w =
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    s +
                    ", M12=" +
                    l +
                    ", M21=" +
                    c +
                    ", M22=" +
                    d,
                  $ = n.x,
                  _ = n.y;
                if (
                  (null != n.ox &&
                    ((h = (n.oxp ? 0.01 * g * n.ox : n.ox) - g / 2),
                    (m = (n.oyp ? 0.01 * v * n.oy : n.oy) - v / 2),
                    ($ += h - (h * s + m * l)),
                    (_ += m - (h * c + m * d))),
                  y
                    ? ((h = g / 2),
                      (m = v / 2),
                      (w +=
                        ", Dx=" +
                        (h - (h * s + m * l) + $) +
                        ", Dy=" +
                        (m - (h * c + m * d) + _) +
                        ")"))
                    : (w += ", sizingMethod='auto expand')"),
                  (p.filter =
                    -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(")
                      ? t.replace(D, w)
                      : w + " " + t),
                  (0 === e || 1 === e) &&
                    1 === s &&
                    0 === l &&
                    0 === c &&
                    1 === d &&
                    ((y && -1 === w.indexOf("Dx=0, Dy=0")) ||
                      (x.test(t) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === t.indexOf("gradient(" && t.indexOf("Alpha")) &&
                        p.removeAttribute("filter"))),
                  !y)
                ) {
                  var T,
                    k,
                    C,
                    F = 8 > f ? 1 : -1;
                  for (
                    h = n.ieOffsetX || 0,
                      m = n.ieOffsetY || 0,
                      n.ieOffsetX = Math.round(
                        (g - ((0 > s ? -s : s) * g + (0 > l ? -l : l) * v)) /
                          2 +
                          $
                      ),
                      n.ieOffsetY = Math.round(
                        (v - ((0 > d ? -d : d) * v + (0 > c ? -c : c) * g)) /
                          2 +
                          _
                      ),
                      ft = 0;
                    4 > ft;
                    ft++
                  )
                    (k = K[ft]),
                      (T = u[k]),
                      (i =
                        -1 !== T.indexOf("px")
                          ? parseFloat(T)
                          : V(this.t, k, parseFloat(T), T.replace(b, "")) || 0),
                      (C =
                        i !== n[k]
                          ? 2 > ft
                            ? -n.ieOffsetX
                            : -n.ieOffsetY
                          : 2 > ft
                          ? h - n.ieOffsetX
                          : m - n.ieOffsetY),
                      (p[k] =
                        (n[k] = Math.round(
                          i - C * (0 === ft || 2 === ft ? 1 : F)
                        )) + "px");
                }
              }
            },
            Ct = (L.set3DTransformRatio = function(e) {
              var t,
                i,
                n,
                r,
                o,
                a,
                s,
                l,
                c,
                d,
                p,
                h,
                f,
                m,
                g,
                v,
                y,
                b,
                x,
                w,
                $,
                _,
                T,
                k = this.data,
                C = this.t.style,
                F = k.rotation * I,
                S = k.scaleX,
                P = k.scaleY,
                D = k.scaleZ,
                A = k.perspective;
              if (
                !(
                  (1 !== e && 0 !== e) ||
                  "auto" !== k.force3D ||
                  k.rotationY ||
                  k.rotationX ||
                  1 !== D ||
                  A ||
                  k.z
                )
              )
                return Ft.call(this, e), void 0;
              if (u) {
                var E = 1e-4;
                E > S && S > -E && (S = D = 2e-5),
                  E > P && P > -E && (P = D = 2e-5),
                  !A || k.z || k.rotationX || k.rotationY || (A = 0);
              }
              if (F || k.skewX)
                (b = Math.cos(F)),
                  (x = Math.sin(F)),
                  (t = b),
                  (o = x),
                  k.skewX &&
                    ((F -= k.skewX * I),
                    (b = Math.cos(F)),
                    (x = Math.sin(F)),
                    "simple" === k.skewType &&
                      ((w = Math.tan(k.skewX * I)),
                      (w = Math.sqrt(1 + w * w)),
                      (b *= w),
                      (x *= w))),
                  (i = -x),
                  (a = b);
              else {
                if (!(k.rotationY || k.rotationX || 1 !== D || A))
                  return (
                    (C[bt] =
                      "translate3d(" +
                      k.x +
                      "px," +
                      k.y +
                      "px," +
                      k.z +
                      "px)" +
                      (1 !== S || 1 !== P
                        ? " scale(" + S + "," + P + ")"
                        : "")),
                    void 0
                  );
                (t = a = 1), (i = o = 0);
              }
              (p = 1),
                (n = r = s = l = c = d = h = f = m = 0),
                (g = A ? -1 / A : 0),
                (v = k.zOrigin),
                (y = 1e5),
                (F = k.rotationY * I),
                F &&
                  ((b = Math.cos(F)),
                  (x = Math.sin(F)),
                  (c = p * -x),
                  (f = g * -x),
                  (n = t * x),
                  (s = o * x),
                  (p *= b),
                  (g *= b),
                  (t *= b),
                  (o *= b)),
                (F = k.rotationX * I),
                F &&
                  ((b = Math.cos(F)),
                  (x = Math.sin(F)),
                  (w = i * b + n * x),
                  ($ = a * b + s * x),
                  (_ = d * b + p * x),
                  (T = m * b + g * x),
                  (n = i * -x + n * b),
                  (s = a * -x + s * b),
                  (p = d * -x + p * b),
                  (g = m * -x + g * b),
                  (i = w),
                  (a = $),
                  (d = _),
                  (m = T)),
                1 !== D && ((n *= D), (s *= D), (p *= D), (g *= D)),
                1 !== P && ((i *= P), (a *= P), (d *= P), (m *= P)),
                1 !== S && ((t *= S), (o *= S), (c *= S), (f *= S)),
                v && ((h -= v), (r = n * h), (l = s * h), (h = p * h + v)),
                (r = (w = (r += k.x) - (r |= 0))
                  ? (0 | (w * y + (0 > w ? -0.5 : 0.5))) / y + r
                  : r),
                (l = (w = (l += k.y) - (l |= 0))
                  ? (0 | (w * y + (0 > w ? -0.5 : 0.5))) / y + l
                  : l),
                (h = (w = (h += k.z) - (h |= 0))
                  ? (0 | (w * y + (0 > w ? -0.5 : 0.5))) / y + h
                  : h),
                (C[bt] =
                  "matrix3d(" +
                  [
                    (0 | (t * y)) / y,
                    (0 | (o * y)) / y,
                    (0 | (c * y)) / y,
                    (0 | (f * y)) / y,
                    (0 | (i * y)) / y,
                    (0 | (a * y)) / y,
                    (0 | (d * y)) / y,
                    (0 | (m * y)) / y,
                    (0 | (n * y)) / y,
                    (0 | (s * y)) / y,
                    (0 | (p * y)) / y,
                    (0 | (g * y)) / y,
                    r,
                    l,
                    h,
                    A ? 1 + -h / A : 1,
                  ].join(",") +
                  ")");
            }),
            Ft = (L.set2DTransformRatio = function(e) {
              var t,
                i,
                n,
                r,
                o,
                a = this.data,
                s = this.t,
                l = s.style;
              return a.rotationX ||
                a.rotationY ||
                a.z ||
                a.force3D === !0 ||
                ("auto" === a.force3D && 1 !== e && 0 !== e)
                ? ((this.setRatio = Ct), Ct.call(this, e), void 0)
                : (a.rotation || a.skewX
                    ? ((t = a.rotation * I),
                      (i = t - a.skewX * I),
                      (n = 1e5),
                      (r = a.scaleX * n),
                      (o = a.scaleY * n),
                      (l[bt] =
                        "matrix(" +
                        (0 | (Math.cos(t) * r)) / n +
                        "," +
                        (0 | (Math.sin(t) * r)) / n +
                        "," +
                        (0 | (Math.sin(i) * -o)) / n +
                        "," +
                        (0 | (Math.cos(i) * o)) / n +
                        "," +
                        a.x +
                        "," +
                        a.y +
                        ")"))
                    : (l[bt] =
                        "matrix(" +
                        a.scaleX +
                        ",0,0," +
                        a.scaleY +
                        "," +
                        a.x +
                        "," +
                        a.y +
                        ")"),
                  void 0);
            });
          gt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType",
            {
              parser: function(e, t, i, n, o, s, l) {
                if (n._transform) return o;
                var c,
                  d,
                  p,
                  u,
                  h,
                  f,
                  m,
                  g = (n._transform = Tt(e, r, !0, l.parseTransform)),
                  v = e.style,
                  y = 1e-6,
                  b = yt.length,
                  x = l,
                  w = {};
                if ("string" == typeof x.transform && bt)
                  (p = O.style),
                    (p[bt] = x.transform),
                    (p.display = "block"),
                    (p.position = "absolute"),
                    M.body.appendChild(O),
                    (c = Tt(O, null, !1)),
                    M.body.removeChild(O);
                else if ("object" == typeof x) {
                  if (
                    ((c = {
                      scaleX: nt(
                        null != x.scaleX ? x.scaleX : x.scale,
                        g.scaleX
                      ),
                      scaleY: nt(
                        null != x.scaleY ? x.scaleY : x.scale,
                        g.scaleY
                      ),
                      scaleZ: nt(x.scaleZ, g.scaleZ),
                      x: nt(x.x, g.x),
                      y: nt(x.y, g.y),
                      z: nt(x.z, g.z),
                      perspective: nt(x.transformPerspective, g.perspective),
                    }),
                    (m = x.directionalRotation),
                    null != m)
                  )
                    if ("object" == typeof m) for (p in m) x[p] = m[p];
                    else x.rotation = m;
                  (c.rotation = rt(
                    "rotation" in x
                      ? x.rotation
                      : "shortRotation" in x
                      ? x.shortRotation + "_short"
                      : "rotationZ" in x
                      ? x.rotationZ
                      : g.rotation,
                    g.rotation,
                    "rotation",
                    w
                  )),
                    $t &&
                      ((c.rotationX = rt(
                        "rotationX" in x
                          ? x.rotationX
                          : "shortRotationX" in x
                          ? x.shortRotationX + "_short"
                          : g.rotationX || 0,
                        g.rotationX,
                        "rotationX",
                        w
                      )),
                      (c.rotationY = rt(
                        "rotationY" in x
                          ? x.rotationY
                          : "shortRotationY" in x
                          ? x.shortRotationY + "_short"
                          : g.rotationY || 0,
                        g.rotationY,
                        "rotationY",
                        w
                      ))),
                    (c.skewX =
                      null == x.skewX ? g.skewX : rt(x.skewX, g.skewX)),
                    (c.skewY =
                      null == x.skewY ? g.skewY : rt(x.skewY, g.skewY)),
                    (d = c.skewY - g.skewY) &&
                      ((c.skewX += d), (c.rotation += d));
                }
                for (
                  $t &&
                    null != x.force3D &&
                    ((g.force3D = x.force3D), (f = !0)),
                    g.skewType = x.skewType || g.skewType || a.defaultSkewType,
                    h =
                      g.force3D ||
                      g.z ||
                      g.rotationX ||
                      g.rotationY ||
                      c.z ||
                      c.rotationX ||
                      c.rotationY ||
                      c.perspective,
                    h || null == x.scale || (c.scaleZ = 1);
                  --b > -1;

                )
                  (i = yt[b]),
                    (u = c[i] - g[i]),
                    (u > y || -y > u || null != j[i]) &&
                      ((f = !0),
                      (o = new ut(g, i, g[i], u, o)),
                      i in w && (o.e = w[i]),
                      (o.xs0 = 0),
                      (o.plugin = s),
                      n._overwriteProps.push(o.n));
                return (
                  (u = x.transformOrigin),
                  (u || ($t && h && g.zOrigin)) &&
                    (bt
                      ? ((f = !0),
                        (i = wt),
                        (u = (u || Y(e, i, r, !1, "50% 50%")) + ""),
                        (o = new ut(v, i, 0, 0, o, -1, "transformOrigin")),
                        (o.b = v[i]),
                        (o.plugin = s),
                        $t
                          ? ((p = g.zOrigin),
                            (u = u.split(" ")),
                            (g.zOrigin =
                              (u.length > 2 && (0 === p || "0px" !== u[2])
                                ? parseFloat(u[2])
                                : p) || 0),
                            (o.xs0 = o.e =
                              u[0] + " " + (u[1] || "50%") + " 0px"),
                            (o = new ut(g, "zOrigin", 0, 0, o, -1, o.n)),
                            (o.b = p),
                            (o.xs0 = o.e = g.zOrigin))
                          : (o.xs0 = o.e = u))
                      : tt(u + "", g)),
                  f &&
                    (n._transformType = h || 3 === this._transformType ? 3 : 2),
                  o
                );
              },
              prefix: !0,
            }
          ),
            gt("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset",
            }),
            gt("borderRadius", {
              defaultValue: "0px",
              parser: function(e, t, i, o, a) {
                t = this.format(t);
                var s,
                  l,
                  c,
                  d,
                  p,
                  u,
                  h,
                  f,
                  m,
                  g,
                  v,
                  y,
                  b,
                  x,
                  w,
                  $,
                  _ = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius",
                  ],
                  T = e.style;
                for (
                  m = parseFloat(e.offsetWidth),
                    g = parseFloat(e.offsetHeight),
                    s = t.split(" "),
                    l = 0;
                  _.length > l;
                  l++
                )
                  this.p.indexOf("border") && (_[l] = X(_[l])),
                    (p = d = Y(e, _[l], r, !1, "0px")),
                    -1 !== p.indexOf(" ") &&
                      ((d = p.split(" ")), (p = d[0]), (d = d[1])),
                    (u = c = s[l]),
                    (h = parseFloat(p)),
                    (y = p.substr((h + "").length)),
                    (b = "=" === u.charAt(1)),
                    b
                      ? ((f = parseInt(u.charAt(0) + "1", 10)),
                        (u = u.substr(2)),
                        (f *= parseFloat(u)),
                        (v = u.substr((f + "").length - (0 > f ? 1 : 0)) || ""))
                      : ((f = parseFloat(u)), (v = u.substr((f + "").length))),
                    "" === v && (v = n[i] || y),
                    v !== y &&
                      ((x = V(e, "borderLeft", h, y)),
                      (w = V(e, "borderTop", h, y)),
                      "%" === v
                        ? ((p = 100 * (x / m) + "%"), (d = 100 * (w / g) + "%"))
                        : "em" === v
                        ? (($ = V(e, "borderLeft", 1, "em")),
                          (p = x / $ + "em"),
                          (d = w / $ + "em"))
                        : ((p = x + "px"), (d = w + "px")),
                      b &&
                        ((u = parseFloat(p) + f + v),
                        (c = parseFloat(d) + f + v))),
                    (a = ht(T, _[l], p + " " + d, u + " " + c, !1, "0px", a));
                return a;
              },
              prefix: !0,
              formatter: ct("0px 0px 0px 0px", !1, !0),
            }),
            gt("backgroundPosition", {
              defaultValue: "0 0",
              parser: function(e, t, i, n, o, a) {
                var s,
                  l,
                  c,
                  d,
                  p,
                  u,
                  h = "background-position",
                  m = r || U(e, null),
                  g = this.format(
                    (m
                      ? f
                        ? m.getPropertyValue(h + "-x") +
                          " " +
                          m.getPropertyValue(h + "-y")
                        : m.getPropertyValue(h)
                      : e.currentStyle.backgroundPositionX +
                        " " +
                        e.currentStyle.backgroundPositionY) || "0 0"
                  ),
                  v = this.format(t);
                if (
                  (-1 !== g.indexOf("%")) != (-1 !== v.indexOf("%")) &&
                  ((u = Y(e, "backgroundImage").replace(C, "")),
                  u && "none" !== u)
                ) {
                  for (
                    s = g.split(" "),
                      l = v.split(" "),
                      N.setAttribute("src", u),
                      c = 2;
                    --c > -1;

                  )
                    (g = s[c]),
                      (d = -1 !== g.indexOf("%")),
                      d !== (-1 !== l[c].indexOf("%")) &&
                        ((p =
                          0 === c
                            ? e.offsetWidth - N.width
                            : e.offsetHeight - N.height),
                        (s[c] = d
                          ? (parseFloat(g) / 100) * p + "px"
                          : 100 * (parseFloat(g) / p) + "%"));
                  g = s.join(" ");
                }
                return this.parseComplex(e.style, g, v, o, a);
              },
              formatter: tt,
            }),
            gt("backgroundSize", { defaultValue: "0 0", formatter: tt }),
            gt("perspective", { defaultValue: "0px", prefix: !0 }),
            gt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
            gt("transformStyle", { prefix: !0 }),
            gt("backfaceVisibility", { prefix: !0 }),
            gt("userSelect", { prefix: !0 }),
            gt("margin", {
              parser: dt("marginTop,marginRight,marginBottom,marginLeft"),
            }),
            gt("padding", {
              parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
            }),
            gt("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function(e, t, i, n, o, a) {
                var s, l, c;
                return (
                  9 > f
                    ? ((l = e.currentStyle),
                      (c = 8 > f ? " " : ","),
                      (s =
                        "rect(" +
                        l.clipTop +
                        c +
                        l.clipRight +
                        c +
                        l.clipBottom +
                        c +
                        l.clipLeft +
                        ")"),
                      (t = this.format(t)
                        .split(",")
                        .join(c)))
                    : ((s = this.format(Y(e, this.p, r, !1, this.dflt))),
                      (t = this.format(t))),
                  this.parseComplex(e.style, s, t, o, a)
                );
              },
            }),
            gt("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0,
            }),
            gt("autoRound,strictUnits", {
              parser: function(e, t, i, n, r) {
                return r;
              },
            }),
            gt("border", {
              defaultValue: "0px solid #000",
              parser: function(e, t, i, n, o, a) {
                return this.parseComplex(
                  e.style,
                  this.format(
                    Y(e, "borderTopWidth", r, !1, "0px") +
                      " " +
                      Y(e, "borderTopStyle", r, !1, "solid") +
                      " " +
                      Y(e, "borderTopColor", r, !1, "#000")
                  ),
                  this.format(t),
                  o,
                  a
                );
              },
              color: !0,
              formatter: function(e) {
                var t = e.split(" ");
                return (
                  t[0] +
                  " " +
                  (t[1] || "solid") +
                  " " +
                  (e.match(lt) || ["#000"])[0]
                );
              },
            }),
            gt("borderWidth", {
              parser: dt(
                "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
              ),
            }),
            gt("float,cssFloat,styleFloat", {
              parser: function(e, t, i, n, r) {
                var o = e.style,
                  a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new ut(o, a, 0, 0, r, -1, i, !1, 0, o[a], t);
              },
            });
          var St = function(e) {
            var t,
              i = this.t,
              n = i.filter || Y(this.data, "filter"),
              r = 0 | (this.s + this.c * e);
            100 === r &&
              (-1 === n.indexOf("atrix(") &&
              -1 === n.indexOf("radient(") &&
              -1 === n.indexOf("oader(")
                ? (i.removeAttribute("filter"), (t = !Y(this.data, "filter")))
                : ((i.filter = n.replace($, "")), (t = !0))),
              t ||
                (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
                -1 === n.indexOf("pacity")
                  ? (0 === r && this.xn1) ||
                    (i.filter = n + " alpha(opacity=" + r + ")")
                  : (i.filter = n.replace(x, "opacity=" + r)));
          };
          gt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(e, t, i, n, o, a) {
              var s = parseFloat(Y(e, "opacity", r, !1, "1")),
                l = e.style,
                c = "autoAlpha" === i;
              return (
                "string" == typeof t &&
                  "=" === t.charAt(1) &&
                  (t =
                    ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) +
                    s),
                c &&
                  1 === s &&
                  "hidden" === Y(e, "visibility", r) &&
                  0 !== t &&
                  (s = 0),
                z
                  ? (o = new ut(l, "opacity", s, t - s, o))
                  : ((o = new ut(l, "opacity", 100 * s, 100 * (t - s), o)),
                    (o.xn1 = c ? 1 : 0),
                    (l.zoom = 1),
                    (o.type = 2),
                    (o.b = "alpha(opacity=" + o.s + ")"),
                    (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                    (o.data = e),
                    (o.plugin = a),
                    (o.setRatio = St)),
                c &&
                  ((o = new ut(
                    l,
                    "visibility",
                    0,
                    0,
                    o,
                    -1,
                    null,
                    !1,
                    0,
                    0 !== s ? "inherit" : "hidden",
                    0 === t ? "hidden" : "inherit"
                  )),
                  (o.xs0 = "inherit"),
                  n._overwriteProps.push(o.n),
                  n._overwriteProps.push(i)),
                o
              );
            },
          });
          var Pt = function(e, t) {
              t &&
                (e.removeProperty
                  ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)),
                    e.removeProperty(t.replace(T, "-$1").toLowerCase()))
                  : e.removeAttribute(t));
            },
            Dt = function(e) {
              if (((this.t._gsClassPT = this), 1 === e || 0 === e)) {
                this.t.setAttribute("class", 0 === e ? this.b : this.e);
                for (var t = this.data, i = this.t.style; t; )
                  t.v ? (i[t.p] = t.v) : Pt(i, t.p), (t = t._next);
                1 === e &&
                  this.t._gsClassPT === this &&
                  (this.t._gsClassPT = null);
              } else
                this.t.getAttribute("class") !== this.e &&
                  this.t.setAttribute("class", this.e);
            };
          gt("className", {
            parser: function(e, t, n, o, a, s, l) {
              var c,
                d,
                p,
                u,
                h,
                f = e.getAttribute("class") || "",
                m = e.style.cssText;
              if (
                ((a = o._classNamePT = new ut(e, n, 0, 0, a, 2)),
                (a.setRatio = Dt),
                (a.pr = -11),
                (i = !0),
                (a.b = f),
                (d = J(e, r)),
                (p = e._gsClassPT))
              ) {
                for (u = {}, h = p.data; h; ) (u[h.p] = 1), (h = h._next);
                p.setRatio(1);
              }
              return (
                (e._gsClassPT = a),
                (a.e =
                  "=" !== t.charAt(1)
                    ? t
                    : f.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") +
                      ("+" === t.charAt(0) ? " " + t.substr(2) : "")),
                o._tween._duration &&
                  (e.setAttribute("class", a.e),
                  (c = G(e, d, J(e), l, u)),
                  e.setAttribute("class", f),
                  (a.data = c.firstMPT),
                  (e.style.cssText = m),
                  (a = a.xfirst = o.parse(e, c.difs, a, s))),
                a
              );
            },
          });
          var At = function(e) {
            if (
              (1 === e || 0 === e) &&
              this.data._totalTime === this.data._totalDuration &&
              "isFromStart" !== this.data.data
            ) {
              var t,
                i,
                n,
                r,
                o = this.t.style,
                a = s.transform.parse;
              if ("all" === this.e) (o.cssText = ""), (r = !0);
              else
                for (t = this.e.split(","), n = t.length; --n > -1; )
                  (i = t[n]),
                    s[i] &&
                      (s[i].parse === a
                        ? (r = !0)
                        : (i = "transformOrigin" === i ? wt : s[i].p)),
                    Pt(o, i);
              r &&
                (Pt(o, bt), this.t._gsTransform && delete this.t._gsTransform);
            }
          };
          for (
            gt("clearProps", {
              parser: function(e, t, n, r, o) {
                return (
                  (o = new ut(e, n, 0, 0, o, 2)),
                  (o.setRatio = At),
                  (o.e = t),
                  (o.pr = -10),
                  (o.data = r._tween),
                  (i = !0),
                  o
                );
              },
            }),
              l = "bezier,throwProps,physicsProps,physics2D".split(","),
              ft = l.length;
            ft--;

          )
            vt(l[ft]);
          (l = a.prototype),
            (l._firstPT = null),
            (l._onInitTween = function(e, t, s) {
              if (!e.nodeType) return !1;
              (this._target = e),
                (this._tween = s),
                (this._vars = t),
                (c = t.autoRound),
                (i = !1),
                (n = t.suffixMap || a.suffixMap),
                (r = U(e, "")),
                (o = this._overwriteProps);
              var l,
                u,
                f,
                m,
                g,
                v,
                y,
                b,
                x,
                $ = e.style;
              if (
                (d &&
                  "" === $.zIndex &&
                  ((l = Y(e, "zIndex", r)),
                  ("auto" === l || "" === l) &&
                    this._addLazySet($, "zIndex", 0)),
                "string" == typeof t &&
                  ((m = $.cssText),
                  (l = J(e, r)),
                  ($.cssText = m + ";" + t),
                  (l = G(e, l, J(e)).difs),
                  !z && w.test(t) && (l.opacity = parseFloat(RegExp.$1)),
                  (t = l),
                  ($.cssText = m)),
                (this._firstPT = u = this.parse(e, t, null)),
                this._transformType)
              ) {
                for (
                  x = 3 === this._transformType,
                    bt
                      ? p &&
                        ((d = !0),
                        "" === $.zIndex &&
                          ((y = Y(e, "zIndex", r)),
                          ("auto" === y || "" === y) &&
                            this._addLazySet($, "zIndex", 0)),
                        h &&
                          this._addLazySet(
                            $,
                            "WebkitBackfaceVisibility",
                            this._vars.WebkitBackfaceVisibility ||
                              (x ? "visible" : "hidden")
                          ))
                      : ($.zoom = 1),
                    f = u;
                  f && f._next;

                )
                  f = f._next;
                (b = new ut(e, "transform", 0, 0, null, 2)),
                  this._linkCSSP(b, null, f),
                  (b.setRatio = x && $t ? Ct : bt ? Ft : kt),
                  (b.data = this._transform || Tt(e, r, !0)),
                  o.pop();
              }
              if (i) {
                for (; u; ) {
                  for (v = u._next, f = m; f && f.pr > u.pr; ) f = f._next;
                  (u._prev = f ? f._prev : g) ? (u._prev._next = u) : (m = u),
                    (u._next = f) ? (f._prev = u) : (g = u),
                    (u = v);
                }
                this._firstPT = m;
              }
              return !0;
            }),
            (l.parse = function(e, t, i, o) {
              var a,
                l,
                d,
                p,
                u,
                h,
                f,
                m,
                g,
                v,
                y = e.style;
              for (a in t)
                (h = t[a]),
                  (l = s[a]),
                  l
                    ? (i = l.parse(e, h, a, this, i, o, t))
                    : ((u = Y(e, a, r) + ""),
                      (g = "string" == typeof h),
                      "color" === a ||
                      "fill" === a ||
                      "stroke" === a ||
                      -1 !== a.indexOf("Color") ||
                      (g && _.test(h))
                        ? (g ||
                            ((h = st(h)),
                            (h =
                              (h.length > 3 ? "rgba(" : "rgb(") +
                              h.join(",") +
                              ")")),
                          (i = ht(y, a, u, h, !0, "transparent", i, 0, o)))
                        : !g || (-1 === h.indexOf(" ") && -1 === h.indexOf(","))
                        ? ((d = parseFloat(u)),
                          (f = d || 0 === d ? u.substr((d + "").length) : ""),
                          ("" === u || "auto" === u) &&
                            ("width" === a || "height" === a
                              ? ((d = et(e, a, r)), (f = "px"))
                              : "left" === a || "top" === a
                              ? ((d = Q(e, a, r)), (f = "px"))
                              : ((d = "opacity" !== a ? 0 : 1), (f = ""))),
                          (v = g && "=" === h.charAt(1)),
                          v
                            ? ((p = parseInt(h.charAt(0) + "1", 10)),
                              (h = h.substr(2)),
                              (p *= parseFloat(h)),
                              (m = h.replace(b, "")))
                            : ((p = parseFloat(h)),
                              (m = g ? h.substr((p + "").length) || "" : "")),
                          "" === m && (m = a in n ? n[a] : f),
                          (h = p || 0 === p ? (v ? p + d : p) + m : t[a]),
                          f !== m &&
                            "" !== m &&
                            (p || 0 === p) &&
                            d &&
                            ((d = V(e, a, d, f)),
                            "%" === m
                              ? ((d /= V(e, a, 100, "%") / 100),
                                t.strictUnits !== !0 && (u = d + "%"))
                              : "em" === m
                              ? (d /= V(e, a, 1, "em"))
                              : "px" !== m && ((p = V(e, a, p, m)), (m = "px")),
                            v && (p || 0 === p) && (h = p + d + m)),
                          v && (p += d),
                          (!d && 0 !== d) || (!p && 0 !== p)
                            ? void 0 !== y[a] &&
                              (h || ("NaN" != h + "" && null != h))
                              ? ((i = new ut(
                                  y,
                                  a,
                                  p || d || 0,
                                  0,
                                  i,
                                  -1,
                                  a,
                                  !1,
                                  0,
                                  u,
                                  h
                                )),
                                (i.xs0 =
                                  "none" !== h ||
                                  ("display" !== a && -1 === a.indexOf("Style"))
                                    ? h
                                    : u))
                              : W("invalid " + a + " tween value: " + t[a])
                            : ((i = new ut(
                                y,
                                a,
                                d,
                                p - d,
                                i,
                                0,
                                a,
                                c !== !1 && ("px" === m || "zIndex" === a),
                                0,
                                u,
                                h
                              )),
                              (i.xs0 = m)))
                        : (i = ht(y, a, u, h, !0, null, i, 0, o))),
                  o && i && !i.plugin && (i.plugin = o);
              return i;
            }),
            (l.setRatio = function(e) {
              var t,
                i,
                n,
                r = this._firstPT,
                o = 1e-6;
              if (
                1 !== e ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time)
              )
                if (
                  e ||
                  (this._tween._time !== this._tween._duration &&
                    0 !== this._tween._time) ||
                  this._tween._rawPrevTime === -1e-6
                )
                  for (; r; ) {
                    if (
                      ((t = r.c * e + r.s),
                      r.r ? (t = Math.round(t)) : o > t && t > -o && (t = 0),
                      r.type)
                    )
                      if (1 === r.type)
                        if (((n = r.l), 2 === n))
                          r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                        else if (3 === n)
                          r.t[r.p] =
                            r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                        else if (4 === n)
                          r.t[r.p] =
                            r.xs0 +
                            t +
                            r.xs1 +
                            r.xn1 +
                            r.xs2 +
                            r.xn2 +
                            r.xs3 +
                            r.xn3 +
                            r.xs4;
                        else if (5 === n)
                          r.t[r.p] =
                            r.xs0 +
                            t +
                            r.xs1 +
                            r.xn1 +
                            r.xs2 +
                            r.xn2 +
                            r.xs3 +
                            r.xn3 +
                            r.xs4 +
                            r.xn4 +
                            r.xs5;
                        else {
                          for (i = r.xs0 + t + r.xs1, n = 1; r.l > n; n++)
                            i += r["xn" + n] + r["xs" + (n + 1)];
                          r.t[r.p] = i;
                        }
                      else
                        -1 === r.type
                          ? (r.t[r.p] = r.xs0)
                          : r.setRatio && r.setRatio(e);
                    else r.t[r.p] = t + r.xs0;
                    r = r._next;
                  }
                else
                  for (; r; )
                    2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(e),
                      (r = r._next);
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.e) : r.setRatio(e),
                    (r = r._next);
            }),
            (l._enableTransforms = function(e) {
              (this._transformType = e || 3 === this._transformType ? 3 : 2),
                (this._transform = this._transform || Tt(this._target, r, !0));
            });
          var It = function() {
            (this.t[this.p] = this.e),
              this.data._linkCSSP(this, this._next, null, !0);
          };
          (l._addLazySet = function(e, t, i) {
            var n = (this._firstPT = new ut(e, t, 0, 0, this._firstPT, 2));
            (n.e = i), (n.setRatio = It), (n.data = this);
          }),
            (l._linkCSSP = function(e, t, i, n) {
              return (
                e &&
                  (t && (t._prev = e),
                  e._next && (e._next._prev = e._prev),
                  e._prev
                    ? (e._prev._next = e._next)
                    : this._firstPT === e &&
                      ((this._firstPT = e._next), (n = !0)),
                  i
                    ? (i._next = e)
                    : n || null !== this._firstPT || (this._firstPT = e),
                  (e._next = t),
                  (e._prev = i)),
                e
              );
            }),
            (l._kill = function(t) {
              var i,
                n,
                r,
                o = t;
              if (t.autoAlpha || t.alpha) {
                o = {};
                for (n in t) o[n] = t[n];
                (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
              }
              return (
                t.className &&
                  (i = this._classNamePT) &&
                  ((r = i.xfirst),
                  r && r._prev
                    ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                    : r === this._firstPT && (this._firstPT = i._next),
                  i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                  (this._classNamePT = null)),
                e.prototype._kill.call(this, o)
              );
            });
          var Et = function(e, t, i) {
            var n, r, o, a;
            if (e.slice) for (r = e.length; --r > -1; ) Et(e[r], t, i);
            else
              for (n = e.childNodes, r = n.length; --r > -1; )
                (o = n[r]),
                  (a = o.type),
                  o.style && (t.push(J(o)), i && i.push(o)),
                  (1 !== a && 9 !== a && 11 !== a) ||
                    !o.childNodes.length ||
                    Et(o, t, i);
          };
          return (
            (a.cascadeTo = function(e, i, n) {
              var r,
                o,
                a,
                s = t.to(e, i, n),
                l = [s],
                c = [],
                d = [],
                p = [],
                u = t._internals.reservedProps;
              for (
                e = s._targets || s.target,
                  Et(e, c, p),
                  s.render(i, !0),
                  Et(e, d),
                  s.render(0, !0),
                  s._enabled(!0),
                  r = p.length;
                --r > -1;

              )
                if (((o = G(p[r], c[r], d[r])), o.firstMPT)) {
                  o = o.difs;
                  for (a in n) u[a] && (o[a] = n[a]);
                  l.push(t.to(p[r], i, o));
                }
              return l;
            }),
            e.activate([a]),
            a
          );
        },
        !0
      ),
      (function() {
        var e = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(e, t, i) {
              return (this._tween = i), !0;
            },
          }),
          t = e.prototype;
        (t._onInitAllProps = function() {
          for (
            var e,
              t,
              i,
              n = this._tween,
              r =
                n.vars.roundProps instanceof Array
                  ? n.vars.roundProps
                  : n.vars.roundProps.split(","),
              o = r.length,
              a = {},
              s = n._propLookup.roundProps;
            --o > -1;

          )
            a[r[o]] = 1;
          for (o = r.length; --o > -1; )
            for (e = r[o], t = n._firstPT; t; )
              (i = t._next),
                t.pg
                  ? t.t._roundProps(a, !0)
                  : t.n === e &&
                    (this._add(t.t, e, t.s, t.c),
                    i && (i._prev = t._prev),
                    t._prev
                      ? (t._prev._next = i)
                      : n._firstPT === t && (n._firstPT = i),
                    (t._next = t._prev = null),
                    (n._propLookup[e] = s)),
                (t = i);
          return !1;
        }),
          (t._add = function(e, t, i, n) {
            this._addTween(e, t, i, i + n, t, !0), this._overwriteProps.push(t);
          });
      })(),
      window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.2",
        init: function(e, t) {
          var i, n, r;
          if ("function" != typeof e.setAttribute) return !1;
          (this._target = e),
            (this._proxy = {}),
            (this._start = {}),
            (this._end = {});
          for (i in t)
            (this._start[i] = this._proxy[i] = n = e.getAttribute(i)),
              (r = this._addTween(this._proxy, i, parseFloat(n), t[i], i)),
              (this._end[i] = r ? r.s + r.c : t[i]),
              this._overwriteProps.push(i);
          return !0;
        },
        set: function(e) {
          this._super.setRatio.call(this, e);
          for (
            var t,
              i = this._overwriteProps,
              n = i.length,
              r = 1 === e ? this._end : e ? this._proxy : this._start;
            --n > -1;

          )
            (t = i[n]), this._target.setAttribute(t, r[t] + "");
        },
      }),
      (window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        version: "0.2.0",
        init: function(e, t) {
          "object" != typeof t && (t = { rotation: t }), (this.finals = {});
          var i,
            n,
            r,
            o,
            a,
            s,
            l = t.useRadians === !0 ? 2 * Math.PI : 360,
            c = 1e-6;
          for (i in t)
            "useRadians" !== i &&
              ((s = (t[i] + "").split("_")),
              (n = s[0]),
              (r = parseFloat(
                "function" != typeof e[i]
                  ? e[i]
                  : e[
                      i.indexOf("set") ||
                      "function" != typeof e["get" + i.substr(3)]
                        ? i
                        : "get" + i.substr(3)
                    ]()
              )),
              (o = this.finals[i] =
                "string" == typeof n && "=" === n.charAt(1)
                  ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))
                  : Number(n) || 0),
              (a = o - r),
              s.length &&
                ((n = s.join("_")),
                -1 !== n.indexOf("short") &&
                  ((a %= l), a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)),
                -1 !== n.indexOf("_cw") && 0 > a
                  ? (a = ((a + 9999999999 * l) % l) - (0 | (a / l)) * l)
                  : -1 !== n.indexOf("ccw") &&
                    a > 0 &&
                    (a = ((a - 9999999999 * l) % l) - (0 | (a / l)) * l)),
              (a > c || -c > a) &&
                (this._addTween(e, i, r, r + a, i),
                this._overwriteProps.push(i)));
          return !0;
        },
        set: function(e) {
          var t;
          if (1 !== e) this._super.setRatio.call(this, e);
          else
            for (t = this._firstPT; t; )
              t.f ? t.t[t.p](this.finals[t.p]) : (t.t[t.p] = this.finals[t.p]),
                (t = t._next);
        },
      })._autoCSS = !0),
      window._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function(e) {
          var t,
            i,
            n,
            r = window.GreenSockGlobals || window,
            o = r.com.greensock,
            a = 2 * Math.PI,
            s = Math.PI / 2,
            l = o._class,
            c = function(t, i) {
              var n = l("easing." + t, function() {}, !0),
                r = (n.prototype = new e());
              return (r.constructor = n), (r.getRatio = i), n;
            },
            d = e.register || function() {},
            p = function(e, t, i, n) {
              var r = l(
                "easing." + e,
                { easeOut: new t(), easeIn: new i(), easeInOut: new n() },
                !0
              );
              return d(r, e), r;
            },
            u = function(e, t, i) {
              (this.t = e),
                (this.v = t),
                i &&
                  ((this.next = i),
                  (i.prev = this),
                  (this.c = i.v - t),
                  (this.gap = i.t - e));
            },
            h = function(t, i) {
              var n = l(
                  "easing." + t,
                  function(e) {
                    (this._p1 = e || 0 === e ? e : 1.70158),
                      (this._p2 = 1.525 * this._p1);
                  },
                  !0
                ),
                r = (n.prototype = new e());
              return (
                (r.constructor = n),
                (r.getRatio = i),
                (r.config = function(e) {
                  return new n(e);
                }),
                n
              );
            },
            f = p(
              "Back",
              h("BackOut", function(e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
              }),
              h("BackIn", function(e) {
                return e * e * ((this._p1 + 1) * e - this._p1);
              }),
              h("BackInOut", function(e) {
                return 1 > (e *= 2)
                  ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2)
                  : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2);
              })
            ),
            m = l(
              "easing.SlowMo",
              function(e, t, i) {
                (t = t || 0 === t ? t : 0.7),
                  null == e ? (e = 0.7) : e > 1 && (e = 1),
                  (this._p = 1 !== e ? t : 0),
                  (this._p1 = (1 - e) / 2),
                  (this._p2 = e),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = i === !0);
              },
              !0
            ),
            g = (m.prototype = new e());
          return (
            (g.constructor = m),
            (g.getRatio = function(e) {
              var t = e + (0.5 - e) * this._p;
              return this._p1 > e
                ? this._calcEnd
                  ? 1 - (e = 1 - e / this._p1) * e
                  : t - (e = 1 - e / this._p1) * e * e * e * t
                : e > this._p3
                ? this._calcEnd
                  ? 1 - (e = (e - this._p3) / this._p1) * e
                  : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
                : this._calcEnd
                ? 1
                : t;
            }),
            (m.ease = new m(0.7, 0.7)),
            (g.config = m.config = function(e, t, i) {
              return new m(e, t, i);
            }),
            (t = l(
              "easing.SteppedEase",
              function(e) {
                (e = e || 1), (this._p1 = 1 / e), (this._p2 = e + 1);
              },
              !0
            )),
            (g = t.prototype = new e()),
            (g.constructor = t),
            (g.getRatio = function(e) {
              return (
                0 > e ? (e = 0) : e >= 1 && (e = 0.999999999),
                ((this._p2 * e) >> 0) * this._p1
              );
            }),
            (g.config = t.config = function(e) {
              return new t(e);
            }),
            (i = l(
              "easing.RoughEase",
              function(t) {
                t = t || {};
                for (
                  var i,
                    n,
                    r,
                    o,
                    a,
                    s,
                    l = t.taper || "none",
                    c = [],
                    d = 0,
                    p = 0 | (t.points || 20),
                    h = p,
                    f = t.randomize !== !1,
                    m = t.clamp === !0,
                    g = t.template instanceof e ? t.template : null,
                    v = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                  --h > -1;

                )
                  (i = f ? Math.random() : (1 / p) * h),
                    (n = g ? g.getRatio(i) : i),
                    "none" === l
                      ? (r = v)
                      : "out" === l
                      ? ((o = 1 - i), (r = o * o * v))
                      : "in" === l
                      ? (r = i * i * v)
                      : 0.5 > i
                      ? ((o = 2 * i), (r = 0.5 * o * o * v))
                      : ((o = 2 * (1 - i)), (r = 0.5 * o * o * v)),
                    f
                      ? (n += Math.random() * r - 0.5 * r)
                      : h % 2
                      ? (n += 0.5 * r)
                      : (n -= 0.5 * r),
                    m && (n > 1 ? (n = 1) : 0 > n && (n = 0)),
                    (c[d++] = { x: i, y: n });
                for (
                  c.sort(function(e, t) {
                    return e.x - t.x;
                  }),
                    s = new u(1, 1, null),
                    h = p;
                  --h > -1;

                )
                  (a = c[h]), (s = new u(a.x, a.y, s));
                this._prev = new u(0, 0, 0 !== s.t ? s : s.next);
              },
              !0
            )),
            (g = i.prototype = new e()),
            (g.constructor = i),
            (g.getRatio = function(e) {
              var t = this._prev;
              if (e > t.t) {
                for (; t.next && e >= t.t; ) t = t.next;
                t = t.prev;
              } else for (; t.prev && t.t >= e; ) t = t.prev;
              return (this._prev = t), t.v + ((e - t.t) / t.gap) * t.c;
            }),
            (g.config = function(e) {
              return new i(e);
            }),
            (i.ease = new i()),
            p(
              "Bounce",
              c("BounceOut", function(e) {
                return 1 / 2.75 > e
                  ? 7.5625 * e * e
                  : 2 / 2.75 > e
                  ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                  : 2.5 / 2.75 > e
                  ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                  : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
              }),
              c("BounceIn", function(e) {
                return 1 / 2.75 > (e = 1 - e)
                  ? 1 - 7.5625 * e * e
                  : 2 / 2.75 > e
                  ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                  : 2.5 / 2.75 > e
                  ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                  : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
              }),
              c("BounceInOut", function(e) {
                var t = 0.5 > e;
                return (
                  (e = t ? 1 - 2 * e : 2 * e - 1),
                  (e =
                    1 / 2.75 > e
                      ? 7.5625 * e * e
                      : 2 / 2.75 > e
                      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                      : 2.5 / 2.75 > e
                      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375),
                  t ? 0.5 * (1 - e) : 0.5 * e + 0.5
                );
              })
            ),
            p(
              "Circ",
              c("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e);
              }),
              c("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1);
              }),
              c("CircInOut", function(e) {
                return 1 > (e *= 2)
                  ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                  : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
              })
            ),
            (n = function(t, i, n) {
              var r = l(
                  "easing." + t,
                  function(e, t) {
                    (this._p1 = e || 1),
                      (this._p2 = t || n),
                      (this._p3 =
                        (this._p2 / a) * (Math.asin(1 / this._p1) || 0));
                  },
                  !0
                ),
                o = (r.prototype = new e());
              return (
                (o.constructor = r),
                (o.getRatio = i),
                (o.config = function(e, t) {
                  return new r(e, t);
                }),
                r
              );
            }),
            p(
              "Elastic",
              n(
                "ElasticOut",
                function(e) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * e) *
                      Math.sin(((e - this._p3) * a) / this._p2) +
                    1
                  );
                },
                0.3
              ),
              n(
                "ElasticIn",
                function(e) {
                  return -(
                    this._p1 *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e - this._p3) * a) / this._p2)
                  );
                },
                0.3
              ),
              n(
                "ElasticInOut",
                function(e) {
                  return 1 > (e *= 2)
                    ? -0.5 *
                        this._p1 *
                        Math.pow(2, 10 * (e -= 1)) *
                        Math.sin(((e - this._p3) * a) / this._p2)
                    : 0.5 *
                        this._p1 *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e - this._p3) * a) / this._p2) +
                        1;
                },
                0.45
              )
            ),
            p(
              "Expo",
              c("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e);
              }),
              c("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - 0.001;
              }),
              c("ExpoInOut", function(e) {
                return 1 > (e *= 2)
                  ? 0.5 * Math.pow(2, 10 * (e - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
              })
            ),
            p(
              "Sine",
              c("SineOut", function(e) {
                return Math.sin(e * s);
              }),
              c("SineIn", function(e) {
                return -Math.cos(e * s) + 1;
              }),
              c("SineInOut", function(e) {
                return -0.5 * (Math.cos(Math.PI * e) - 1);
              })
            ),
            l(
              "easing.EaseLookup",
              {
                find: function(t) {
                  return e.map[t];
                },
              },
              !0
            ),
            d(r.SlowMo, "SlowMo", "ease,"),
            d(i, "RoughEase", "ease,"),
            d(t, "SteppedEase", "ease,"),
            f
          );
        },
        !0
      );
  }),
  (function(e) {
    "use strict";
    var t = e.GreenSockGlobals || e;
    if (!t.TweenLite) {
      var i,
        n,
        r,
        o,
        a,
        s = function(e) {
          var i,
            n = e.split("."),
            r = t;
          for (i = 0; n.length > i; i++) r[n[i]] = r = r[n[i]] || {};
          return r;
        },
        l = s("com.greensock"),
        c = 1e-10,
        d = [].slice,
        p = function() {},
        u = (function() {
          var e = Object.prototype.toString,
            t = e.call([]);
          return function(i) {
            return (
              null != i &&
              (i instanceof Array ||
                ("object" == typeof i && !!i.push && e.call(i) === t))
            );
          };
        })(),
        h = {},
        f = function(i, n, r, o) {
          (this.sc = h[i] ? h[i].sc : []),
            (h[i] = this),
            (this.gsClass = null),
            (this.func = r);
          var a = [];
          (this.check = function(l) {
            for (var c, d, p, u, m = n.length, g = m; --m > -1; )
              (c = h[n[m]] || new f(n[m], [])).gsClass
                ? ((a[m] = c.gsClass), g--)
                : l && c.sc.push(this);
            if (0 === g && r)
              for (
                d = ("com.greensock." + i).split("."),
                  p = d.pop(),
                  u = s(d.join("."))[p] = this.gsClass = r.apply(r, a),
                  o &&
                    ((t[p] = u),
                    "function" == typeof define && define.amd
                      ? define((e.GreenSockAMDPath
                          ? e.GreenSockAMDPath + "/"
                          : "") + i.split(".").join("/"), [], function() {
                          return u;
                        })
                      : "undefined" != typeof module &&
                        module.exports &&
                        (module.exports = u)),
                  m = 0;
                this.sc.length > m;
                m++
              )
                this.sc[m].check();
          }),
            this.check(!0);
        },
        m = (e._gsDefine = function(e, t, i, n) {
          return new f(e, t, i, n);
        }),
        g = (l._class = function(e, t, i) {
          return (
            (t = t || function() {}),
            m(
              e,
              [],
              function() {
                return t;
              },
              i
            ),
            t
          );
        });
      m.globals = t;
      var v = [0, 0, 1, 1],
        y = [],
        b = g(
          "easing.Ease",
          function(e, t, i, n) {
            (this._func = e),
              (this._type = i || 0),
              (this._power = n || 0),
              (this._params = t ? v.concat(t) : v);
          },
          !0
        ),
        x = (b.map = {}),
        w = (b.register = function(e, t, i, n) {
          for (
            var r,
              o,
              a,
              s,
              c = t.split(","),
              d = c.length,
              p = (i || "easeIn,easeOut,easeInOut").split(",");
            --d > -1;

          )
            for (
              o = c[d],
                r = n ? g("easing." + o, null, !0) : l.easing[o] || {},
                a = p.length;
              --a > -1;

            )
              (s = p[a]),
                (x[o + "." + s] = x[s + o] = r[s] = e.getRatio
                  ? e
                  : e[s] || new e());
        });
      for (
        r = b.prototype,
          r._calcEnd = !1,
          r.getRatio = function(e) {
            if (this._func)
              return (
                (this._params[0] = e), this._func.apply(null, this._params)
              );
            var t = this._type,
              i = this._power,
              n = 1 === t ? 1 - e : 2 === t ? e : 0.5 > e ? 2 * e : 2 * (1 - e);
            return (
              1 === i
                ? (n *= n)
                : 2 === i
                ? (n *= n * n)
                : 3 === i
                ? (n *= n * n * n)
                : 4 === i && (n *= n * n * n * n),
              1 === t ? 1 - n : 2 === t ? n : 0.5 > e ? n / 2 : 1 - n / 2
            );
          },
          i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          n = i.length;
        --n > -1;

      )
        (r = i[n] + ",Power" + n),
          w(new b(null, null, 1, n), r, "easeOut", !0),
          w(
            new b(null, null, 2, n),
            r,
            "easeIn" + (0 === n ? ",easeNone" : "")
          ),
          w(new b(null, null, 3, n), r, "easeInOut");
      (x.linear = l.easing.Linear.easeIn), (x.swing = l.easing.Quad.easeInOut);
      var $ = g("events.EventDispatcher", function(e) {
        (this._listeners = {}), (this._eventTarget = e || this);
      });
      (r = $.prototype),
        (r.addEventListener = function(e, t, i, n, r) {
          r = r || 0;
          var s,
            l,
            c = this._listeners[e],
            d = 0;
          for (
            null == c && (this._listeners[e] = c = []), l = c.length;
            --l > -1;

          )
            (s = c[l]),
              s.c === t && s.s === i
                ? c.splice(l, 1)
                : 0 === d && r > s.pr && (d = l + 1);
          c.splice(d, 0, { c: t, s: i, up: n, pr: r }),
            this !== o || a || o.wake();
        }),
        (r.removeEventListener = function(e, t) {
          var i,
            n = this._listeners[e];
          if (n)
            for (i = n.length; --i > -1; )
              if (n[i].c === t) return n.splice(i, 1), void 0;
        }),
        (r.dispatchEvent = function(e) {
          var t,
            i,
            n,
            r = this._listeners[e];
          if (r)
            for (t = r.length, i = this._eventTarget; --t > -1; )
              (n = r[t]),
                n.up
                  ? n.c.call(n.s || i, { type: e, target: i })
                  : n.c.call(n.s || i);
        });
      var _ = e.requestAnimationFrame,
        T = e.cancelAnimationFrame,
        k =
          Date.now ||
          function() {
            return new Date().getTime();
          },
        C = k();
      for (i = ["ms", "moz", "webkit", "o"], n = i.length; --n > -1 && !_; )
        (_ = e[i[n] + "RequestAnimationFrame"]),
          (T =
            e[i[n] + "CancelAnimationFrame"] ||
            e[i[n] + "CancelRequestAnimationFrame"]);
      g("Ticker", function(e, t) {
        var i,
          n,
          r,
          s,
          l,
          d = this,
          u = k(),
          h = t !== !1 && _,
          f = 500,
          m = 33,
          g = function(e) {
            var t,
              o,
              a = k() - C;
            a > f && (u += a - m),
              (C += a),
              (d.time = (C - u) / 1e3),
              (t = d.time - l),
              (!i || t > 0 || e === !0) &&
                (d.frame++, (l += t + (t >= s ? 0.004 : s - t)), (o = !0)),
              e !== !0 && (r = n(g)),
              o && d.dispatchEvent("tick");
          };
        $.call(d),
          (d.time = d.frame = 0),
          (d.tick = function() {
            g(!0);
          }),
          (d.lagSmoothing = function(e, t) {
            (f = e || 1 / c), (m = Math.min(t, f, 0));
          }),
          (d.sleep = function() {
            null != r &&
              (h && T ? T(r) : clearTimeout(r),
              (n = p),
              (r = null),
              d === o && (a = !1));
          }),
          (d.wake = function() {
            null !== r ? d.sleep() : d.frame > 10 && (C = k() - f + 5),
              (n =
                0 === i
                  ? p
                  : h && _
                  ? _
                  : function(e) {
                      return setTimeout(e, 0 | (1e3 * (l - d.time) + 1));
                    }),
              d === o && (a = !0),
              g(2);
          }),
          (d.fps = function(e) {
            return arguments.length
              ? ((i = e),
                (s = 1 / (i || 60)),
                (l = this.time + s),
                d.wake(),
                void 0)
              : i;
          }),
          (d.useRAF = function(e) {
            return arguments.length
              ? (d.sleep(), (h = e), d.fps(i), void 0)
              : h;
          }),
          d.fps(e),
          setTimeout(function() {
            h && (!r || 5 > d.frame) && d.useRAF(!1);
          }, 1500);
      }),
        (r = l.Ticker.prototype = new l.events.EventDispatcher()),
        (r.constructor = l.Ticker);
      var F = g("core.Animation", function(e, t) {
        if (
          ((this.vars = t = t || {}),
          (this._duration = this._totalDuration = e || 0),
          (this._delay = Number(t.delay) || 0),
          (this._timeScale = 1),
          (this._active = t.immediateRender === !0),
          (this.data = t.data),
          (this._reversed = t.reversed === !0),
          W)
        ) {
          a || o.wake();
          var i = this.vars.useFrames ? H : W;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (o = F.ticker = new l.Ticker()),
        (r = F.prototype),
        (r._dirty = r._gc = r._initted = r._paused = !1),
        (r._totalTime = r._time = 0),
        (r._rawPrevTime = -1),
        (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
        (r._paused = !1);
      var S = function() {
        a && k() - C > 2e3 && o.wake(), setTimeout(S, 2e3);
      };
      S(),
        (r.play = function(e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (r.pause = function(e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (r.resume = function(e, t) {
          return null != e && this.seek(e, t), this.paused(!1);
        }),
        (r.seek = function(e, t) {
          return this.totalTime(Number(e), t !== !1);
        }),
        (r.restart = function(e, t) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(e ? -this._delay : 0, t !== !1, !0);
        }),
        (r.reverse = function(e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (r.render = function() {}),
        (r.invalidate = function() {
          return this;
        }),
        (r.isActive = function() {
          var e,
            t = this._timeline,
            i = this._startTime;
          return (
            !t ||
            (!this._gc &&
              !this._paused &&
              t.isActive() &&
              (e = t.rawTime()) >= i &&
              i + this.totalDuration() / this._timeScale > e)
          );
        }),
        (r._enabled = function(e, t) {
          return (
            a || o.wake(),
            (this._gc = !e),
            (this._active = this.isActive()),
            t !== !0 &&
              (e && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !e && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (r._kill = function() {
          return this._enabled(!1, !1);
        }),
        (r.kill = function(e, t) {
          return this._kill(e, t), this;
        }),
        (r._uncache = function(e) {
          for (var t = e ? this : this.timeline; t; )
            (t._dirty = !0), (t = t.timeline);
          return this;
        }),
        (r._swapSelfInParams = function(e) {
          for (var t = e.length, i = e.concat(); --t > -1; )
            "{self}" === e[t] && (i[t] = this);
          return i;
        }),
        (r.eventCallback = function(e, t, i, n) {
          if ("on" === (e || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[e];
            null == t
              ? delete r[e]
              : ((r[e] = t),
                (r[e + "Params"] =
                  u(i) && -1 !== i.join("").indexOf("{self}")
                    ? this._swapSelfInParams(i)
                    : i),
                (r[e + "Scope"] = n)),
              "onUpdate" === e && (this._onUpdate = t);
          }
          return this;
        }),
        (r.delay = function(e) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (r.duration = function(e) {
          return arguments.length
            ? ((this._duration = this._totalDuration = e),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== e &&
                this.totalTime(this._totalTime * (e / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (r.totalDuration = function(e) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(e) : this._totalDuration
          );
        }),
        (r.time = function(e, t) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(e > this._duration ? this._duration : e, t))
            : this._time;
        }),
        (r.totalTime = function(e, t, i) {
          if ((a || o.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > e && !i && (e += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var n = this._totalDuration,
                r = this._timeline;
              if (
                (e > n && !i && (e = n),
                (this._startTime =
                  (this._paused ? this._pauseTime : r._time) -
                  (this._reversed ? n - e : e) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; )
                  r._timeline._time !==
                    (r._startTime + r._totalTime) / r._timeScale &&
                    r.totalTime(r._totalTime, !0),
                    (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== e || 0 === this._duration) &&
                (this.render(e, t, !1), E.length && B());
          }
          return this;
        }),
        (r.progress = r.totalProgress = function(e, t) {
          return arguments.length
            ? this.totalTime(this.duration() * e, t)
            : this._time / this.duration();
        }),
        (r.startTime = function(e) {
          return arguments.length
            ? (e !== this._startTime &&
                ((this._startTime = e),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, e - this._delay)),
              this)
            : this._startTime;
        }),
        (r.timeScale = function(e) {
          if (!arguments.length) return this._timeScale;
          if (
            ((e = e || c), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var t = this._pauseTime,
              i = t || 0 === t ? t : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / e;
          }
          return (this._timeScale = e), this._uncache(!1);
        }),
        (r.reversed = function(e) {
          return arguments.length
            ? (e != this._reversed &&
                ((this._reversed = e),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (r.paused = function(e) {
          if (!arguments.length) return this._paused;
          if (e != this._paused && this._timeline) {
            a || e || o.wake();
            var t = this._timeline,
              i = t.rawTime(),
              n = i - this._pauseTime;
            !e &&
              t.smoothChildTiming &&
              ((this._startTime += n), this._uncache(!1)),
              (this._pauseTime = e ? i : null),
              (this._paused = e),
              (this._active = this.isActive()),
              !e &&
                0 !== n &&
                this._initted &&
                this.duration() &&
                this.render(
                  t.smoothChildTiming
                    ? this._totalTime
                    : (i - this._startTime) / this._timeScale,
                  !0,
                  !0
                );
          }
          return this._gc && !e && this._enabled(!0, !1), this;
        });
      var P = g("core.SimpleTimeline", function(e) {
        F.call(this, 0, e),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (r = P.prototype = new F()),
        (r.constructor = P),
        (r.kill()._gc = !1),
        (r._first = r._last = null),
        (r._sortChildren = !1),
        (r.add = r.insert = function(e, t) {
          var i, n;
          if (
            ((e._startTime = Number(t || 0) + e._delay),
            e._paused &&
              this !== e._timeline &&
              (e._pauseTime =
                e._startTime + (this.rawTime() - e._startTime) / e._timeScale),
            e.timeline && e.timeline._remove(e, !0),
            (e.timeline = e._timeline = this),
            e._gc && e._enabled(!0, !0),
            (i = this._last),
            this._sortChildren)
          )
            for (n = e._startTime; i && i._startTime > n; ) i = i._prev;
          return (
            i
              ? ((e._next = i._next), (i._next = e))
              : ((e._next = this._first), (this._first = e)),
            e._next ? (e._next._prev = e) : (this._last = e),
            (e._prev = i),
            this._timeline && this._uncache(!0),
            this
          );
        }),
        (r._remove = function(e, t) {
          return (
            e.timeline === this &&
              (t || e._enabled(!1, !0),
              (e.timeline = null),
              e._prev
                ? (e._prev._next = e._next)
                : this._first === e && (this._first = e._next),
              e._next
                ? (e._next._prev = e._prev)
                : this._last === e && (this._last = e._prev),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (r.render = function(e, t, i) {
          var n,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = e; r; )
            (n = r._next),
              (r._active || (e >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render(
                      (r._dirty ? r.totalDuration() : r._totalDuration) -
                        (e - r._startTime) * r._timeScale,
                      t,
                      i
                    )
                  : r.render((e - r._startTime) * r._timeScale, t, i)),
              (r = n);
        }),
        (r.rawTime = function() {
          return a || o.wake(), this._totalTime;
        });
      var D = g(
          "TweenLite",
          function(t, i, n) {
            if (
              (F.call(this, i, n),
              (this.render = D.prototype.render),
              null == t)
            )
              throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : D.selector(t) || t;
            var r,
              o,
              a,
              s =
                t.jquery ||
                (t.length &&
                  t !== e &&
                  t[0] &&
                  (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))),
              l = this.vars.overwrite;
            if (
              ((this._overwrite = l =
                null == l
                  ? z[D.defaultOverwrite]
                  : "number" == typeof l
                  ? l >> 0
                  : z[l]),
              (s || t instanceof Array || (t.push && u(t))) &&
                "number" != typeof t[0])
            )
              for (
                this._targets = a = d.call(t, 0),
                  this._propLookup = [],
                  this._siblings = [],
                  r = 0;
                a.length > r;
                r++
              )
                (o = a[r]),
                  o
                    ? "string" != typeof o
                      ? o.length &&
                        o !== e &&
                        o[0] &&
                        (o[0] === e ||
                          (o[0].nodeType && o[0].style && !o.nodeType))
                        ? (a.splice(r--, 1),
                          (this._targets = a = a.concat(d.call(o, 0))))
                        : ((this._siblings[r] = q(o, this, !1)),
                          1 === l &&
                            this._siblings[r].length > 1 &&
                            X(o, this, null, 1, this._siblings[r]))
                      : ((o = a[r--] = D.selector(o)),
                        "string" == typeof o && a.splice(r + 1, 1))
                    : a.splice(r--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = q(t, this, !1)),
                1 === l &&
                  this._siblings.length > 1 &&
                  X(t, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === i &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -c), this.render(-this._delay));
          },
          !0
        ),
        A = function(t) {
          return (
            t.length &&
            t !== e &&
            t[0] &&
            (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))
          );
        },
        I = function(e, t) {
          var i,
            n = {};
          for (i in e)
            R[i] ||
              (i in t &&
                "transform" !== i &&
                "x" !== i &&
                "y" !== i &&
                "width" !== i &&
                "height" !== i &&
                "className" !== i &&
                "border" !== i) ||
              !(!O[i] || (O[i] && O[i]._autoCSS)) ||
              ((n[i] = e[i]), delete e[i]);
          e.css = n;
        };
      (r = D.prototype = new F()),
        (r.constructor = D),
        (r.kill()._gc = !1),
        (r.ratio = 0),
        (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
        (r._notifyPluginsOfEnabled = r._lazy = !1),
        (D.version = "1.12.1"),
        (D.defaultEase = r._ease = new b(null, null, 1, 1)),
        (D.defaultOverwrite = "auto"),
        (D.ticker = o),
        (D.autoSleep = !0),
        (D.lagSmoothing = function(e, t) {
          o.lagSmoothing(e, t);
        }),
        (D.selector =
          e.$ ||
          e.jQuery ||
          function(t) {
            return e.$
              ? ((D.selector = e.$), e.$(t))
              : e.document
              ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
              : t;
          });
      var E = [],
        j = {},
        M = (D._internals = { isArray: u, isSelector: A, lazyTweens: E }),
        O = (D._plugins = {}),
        N = (M.tweenLookup = {}),
        L = 0,
        R = (M.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
        }),
        z = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        H = (F._rootFramesTimeline = new P()),
        W = (F._rootTimeline = new P()),
        B = function() {
          var e = E.length;
          for (j = {}; --e > -1; )
            (i = E[e]),
              i &&
                i._lazy !== !1 &&
                (i.render(i._lazy, !1, !0), (i._lazy = !1));
          E.length = 0;
        };
      (W._startTime = o.time),
        (H._startTime = o.frame),
        (W._active = H._active = !0),
        setTimeout(B, 1),
        (F._updateRoot = D.render = function() {
          var e, t, i;
          if (
            (E.length && B(),
            W.render((o.time - W._startTime) * W._timeScale, !1, !1),
            H.render((o.frame - H._startTime) * H._timeScale, !1, !1),
            E.length && B(),
            !(o.frame % 120))
          ) {
            for (i in N) {
              for (t = N[i].tweens, e = t.length; --e > -1; )
                t[e]._gc && t.splice(e, 1);
              0 === t.length && delete N[i];
            }
            if (
              ((i = W._first),
              (!i || i._paused) &&
                D.autoSleep &&
                !H._first &&
                1 === o._listeners.tick.length)
            ) {
              for (; i && i._paused; ) i = i._next;
              i || o.sleep();
            }
          }
        }),
        o.addEventListener("tick", F._updateRoot);
      var q = function(e, t, i) {
          var n,
            r,
            o = e._gsTweenID;
          if (
            (N[o || (e._gsTweenID = o = "t" + L++)] ||
              (N[o] = { target: e, tweens: [] }),
            t && ((n = N[o].tweens), (n[(r = n.length)] = t), i))
          )
            for (; --r > -1; ) n[r] === t && n.splice(r, 1);
          return N[o].tweens;
        },
        X = function(e, t, i, n, r) {
          var o, a, s, l;
          if (1 === n || n >= 4) {
            for (l = r.length, o = 0; l > o; o++)
              if ((s = r[o]) !== t) s._gc || (s._enabled(!1, !1) && (a = !0));
              else if (5 === n) break;
            return a;
          }
          var d,
            p = t._startTime + c,
            u = [],
            h = 0,
            f = 0 === t._duration;
          for (o = r.length; --o > -1; )
            (s = r[o]) === t ||
              s._gc ||
              s._paused ||
              (s._timeline !== t._timeline
                ? ((d = d || U(t, 0, f)), 0 === U(s, d, f) && (u[h++] = s))
                : p >= s._startTime &&
                  s._startTime + s.totalDuration() / s._timeScale > p &&
                  (((f || !s._initted) && 2e-10 >= p - s._startTime) ||
                    (u[h++] = s)));
          for (o = h; --o > -1; )
            (s = u[o]),
              2 === n && s._kill(i, e) && (a = !0),
              (2 !== n || (!s._firstPT && s._initted)) &&
                s._enabled(!1, !1) &&
                (a = !0);
          return a;
        },
        U = function(e, t, i) {
          for (
            var n = e._timeline, r = n._timeScale, o = e._startTime;
            n._timeline;

          ) {
            if (((o += n._startTime), (r *= n._timeScale), n._paused))
              return -100;
            n = n._timeline;
          }
          return (
            (o /= r),
            o > t
              ? o - t
              : (i && o === t) || (!e._initted && 2 * c > o - t)
              ? c
              : (o += e.totalDuration() / e._timeScale / r) > t + c
              ? 0
              : o - t - c
          );
        };
      (r._init = function() {
        var e,
          t,
          i,
          n,
          r,
          o = this.vars,
          a = this._overwrittenProps,
          s = this._duration,
          l = !!o.immediateRender,
          c = o.ease;
        if (o.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (r = {});
          for (n in o.startAt) r[n] = o.startAt[n];
          if (
            ((r.overwrite = !1),
            (r.immediateRender = !0),
            (r.lazy = l && o.lazy !== !1),
            (r.startAt = r.delay = null),
            (this._startAt = D.to(this.target, 0, r)),
            l)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== s) return;
        } else if (o.runBackwards && 0 !== s)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            i = {};
            for (n in o) (R[n] && "autoCSS" !== n) || (i[n] = o[n]);
            if (
              ((i.overwrite = 0),
              (i.data = "isFromStart"),
              (i.lazy = l && o.lazy !== !1),
              (i.immediateRender = l),
              (this._startAt = D.to(this.target, 0, i)),
              l)
            ) {
              if (0 === this._time) return;
            } else this._startAt._init(), this._startAt._enabled(!1);
          }
        if (
          ((this._ease = c
            ? c instanceof b
              ? o.easeParams instanceof Array
                ? c.config.apply(c, o.easeParams)
                : c
              : "function" == typeof c
              ? new b(c, o.easeParams)
              : x[c] || D.defaultEase
            : D.defaultEase),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (e = this._targets.length; --e > -1; )
            this._initProps(
              this._targets[e],
              (this._propLookup[e] = {}),
              this._siblings[e],
              a ? a[e] : null
            ) && (t = !0);
        else
          t = this._initProps(this.target, this._propLookup, this._siblings, a);
        if (
          (t && D._onPluginEvent("_onInitAllProps", this),
          a &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          o.runBackwards)
        )
          for (i = this._firstPT; i; )
            (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = o.onUpdate), (this._initted = !0);
      }),
        (r._initProps = function(t, i, n, r) {
          var o, a, s, l, c, d;
          if (null == t) return !1;
          j[t._gsTweenID] && B(),
            this.vars.css ||
              (t.style &&
                t !== e &&
                t.nodeType &&
                O.css &&
                this.vars.autoCSS !== !1 &&
                I(this.vars, t));
          for (o in this.vars) {
            if (((d = this.vars[o]), R[o]))
              d &&
                (d instanceof Array || (d.push && u(d))) &&
                -1 !== d.join("").indexOf("{self}") &&
                (this.vars[o] = d = this._swapSelfInParams(d, this));
            else if (
              O[o] &&
              (l = new O[o]())._onInitTween(t, this.vars[o], this)
            ) {
              for (
                this._firstPT = c = {
                  _next: this._firstPT,
                  t: l,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: !0,
                  n: o,
                  pg: !0,
                  pr: l._priority,
                },
                  a = l._overwriteProps.length;
                --a > -1;

              )
                i[l._overwriteProps[a]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (s = !0),
                (l._onDisable || l._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0);
            } else
              (this._firstPT = i[o] = c = {
                _next: this._firstPT,
                t: t,
                p: o,
                f: "function" == typeof t[o],
                n: o,
                pg: !1,
                pr: 0,
              }),
                (c.s = c.f
                  ? t[
                      o.indexOf("set") ||
                      "function" != typeof t["get" + o.substr(3)]
                        ? o
                        : "get" + o.substr(3)
                    ]()
                  : parseFloat(t[o])),
                (c.c =
                  "string" == typeof d && "=" === d.charAt(1)
                    ? parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))
                    : Number(d) - c.s || 0);
            c && c._next && (c._next._prev = c);
          }
          return r && this._kill(r, t)
            ? this._initProps(t, i, n, r)
            : this._overwrite > 1 &&
              this._firstPT &&
              n.length > 1 &&
              X(t, this, i, this._overwrite, n)
            ? (this._kill(i, t), this._initProps(t, i, n, r))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (j[t._gsTweenID] = !0),
              s);
        }),
        (r.render = function(e, t, i) {
          var n,
            r,
            o,
            a,
            s = this._time,
            l = this._duration,
            d = this._rawPrevTime;
          if (e >= l)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed || ((n = !0), (r = "onComplete")),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (this._startTime === this._timeline._duration && (e = 0),
                (0 === e || 0 > d || d === c) &&
                  d !== e &&
                  ((i = !0), d > c && (r = "onReverseComplete")),
                (this._rawPrevTime = a = !t || e || d === e ? e : c));
          else if (1e-7 > e)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== s || (0 === l && d > 0 && d !== c)) &&
                ((r = "onReverseComplete"), (n = this._reversed)),
              0 > e
                ? ((this._active = !1),
                  0 === l &&
                    (this._initted || !this.vars.lazy || i) &&
                    (d >= 0 && (i = !0),
                    (this._rawPrevTime = a = !t || e || d === e ? e : c)))
                : this._initted || (i = !0);
          else if (((this._totalTime = this._time = e), this._easeType)) {
            var p = e / l,
              u = this._easeType,
              h = this._easePower;
            (1 === u || (3 === u && p >= 0.5)) && (p = 1 - p),
              3 === u && (p *= 2),
              1 === h
                ? (p *= p)
                : 2 === h
                ? (p *= p * p)
                : 3 === h
                ? (p *= p * p * p)
                : 4 === h && (p *= p * p * p * p),
              (this.ratio =
                1 === u
                  ? 1 - p
                  : 2 === u
                  ? p
                  : 0.5 > e / l
                  ? p / 2
                  : 1 - p / 2);
          } else this.ratio = this._ease.getRatio(e / l);
          if (this._time !== s || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = s),
                  (this._rawPrevTime = d),
                  E.push(this),
                  (this._lazy = e),
                  void 0
                );
              this._time && !n
                ? (this.ratio = this._ease.getRatio(this._time / l))
                : n &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== s &&
                    e >= 0 &&
                    (this._active = !0)),
                0 === s &&
                  (this._startAt &&
                    (e >= 0
                      ? this._startAt.render(e, t, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === l) &&
                    (t ||
                      this.vars.onStart.apply(
                        this.vars.onStartScope || this,
                        this.vars.onStartParams || y
                      ))),
                o = this._firstPT;
              o;

            )
              o.f
                ? o.t[o.p](o.c * this.ratio + o.s)
                : (o.t[o.p] = o.c * this.ratio + o.s),
                (o = o._next);
            this._onUpdate &&
              (0 > e &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(e, t, i),
              t ||
                ((this._time !== s || n) &&
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || y
                  ))),
              r &&
                (this._gc ||
                  (0 > e &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startTime &&
                    this._startAt.render(e, t, i),
                  n &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !t &&
                    this.vars[r] &&
                    this.vars[r].apply(
                      this.vars[r + "Scope"] || this,
                      this.vars[r + "Params"] || y
                    ),
                  0 === l &&
                    this._rawPrevTime === c &&
                    a !== c &&
                    (this._rawPrevTime = 0)));
          }
        }),
        (r._kill = function(e, t) {
          if (
            ("all" === e && (e = null),
            null == e && (null == t || t === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          t =
            "string" != typeof t
              ? t || this._targets || this.target
              : D.selector(t) || t;
          var i, n, r, o, a, s, l, c;
          if ((u(t) || A(t)) && "number" != typeof t[0])
            for (i = t.length; --i > -1; ) this._kill(e, t[i]) && (s = !0);
          else {
            if (this._targets) {
              for (i = this._targets.length; --i > -1; )
                if (t === this._targets[i]) {
                  (a = this._propLookup[i] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (n = this._overwrittenProps[i] = e
                      ? this._overwrittenProps[i] || {}
                      : "all");
                  break;
                }
            } else {
              if (t !== this.target) return !1;
              (a = this._propLookup),
                (n = this._overwrittenProps = e
                  ? this._overwrittenProps || {}
                  : "all");
            }
            if (a) {
              (l = e || a),
                (c =
                  e !== n &&
                  "all" !== n &&
                  e !== a &&
                  ("object" != typeof e || !e._tempKill));
              for (r in l)
                (o = a[r]) &&
                  (o.pg && o.t._kill(l) && (s = !0),
                  (o.pg && 0 !== o.t._overwriteProps.length) ||
                    (o._prev
                      ? (o._prev._next = o._next)
                      : o === this._firstPT && (this._firstPT = o._next),
                    o._next && (o._next._prev = o._prev),
                    (o._next = o._prev = null)),
                  delete a[r]),
                  c && (n[r] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return s;
        }),
        (r.invalidate = function() {
          return (
            this._notifyPluginsOfEnabled &&
              D._onPluginEvent("_onDisable", this),
            (this._firstPT = null),
            (this._overwrittenProps = null),
            (this._onUpdate = null),
            (this._startAt = null),
            (this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            this
          );
        }),
        (r._enabled = function(e, t) {
          if ((a || o.wake(), e && this._gc)) {
            var i,
              n = this._targets;
            if (n)
              for (i = n.length; --i > -1; )
                this._siblings[i] = q(n[i], this, !0);
            else this._siblings = q(this.target, this, !0);
          }
          return (
            F.prototype._enabled.call(this, e, t),
            this._notifyPluginsOfEnabled && this._firstPT
              ? D._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
              : !1
          );
        }),
        (D.to = function(e, t, i) {
          return new D(e, t, i);
        }),
        (D.from = function(e, t, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new D(e, t, i)
          );
        }),
        (D.fromTo = function(e, t, i, n) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            new D(e, t, n)
          );
        }),
        (D.delayedCall = function(e, t, i, n, r) {
          return new D(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: i,
            onCompleteScope: n,
            onReverseComplete: t,
            onReverseCompleteParams: i,
            onReverseCompleteScope: n,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (D.set = function(e, t) {
          return new D(e, 0, t);
        }),
        (D.getTweensOf = function(e, t) {
          if (null == e) return [];
          e = "string" != typeof e ? e : D.selector(e) || e;
          var i, n, r, o;
          if ((u(e) || A(e)) && "number" != typeof e[0]) {
            for (i = e.length, n = []; --i > -1; )
              n = n.concat(D.getTweensOf(e[i], t));
            for (i = n.length; --i > -1; )
              for (o = n[i], r = i; --r > -1; ) o === n[r] && n.splice(i, 1);
          } else
            for (n = q(e).concat(), i = n.length; --i > -1; )
              (n[i]._gc || (t && !n[i].isActive())) && n.splice(i, 1);
          return n;
        }),
        (D.killTweensOf = D.killDelayedCallsTo = function(e, t, i) {
          "object" == typeof t && ((i = t), (t = !1));
          for (var n = D.getTweensOf(e, t), r = n.length; --r > -1; )
            n[r]._kill(i, e);
        });
      var Y = g(
        "plugins.TweenPlugin",
        function(e, t) {
          (this._overwriteProps = (e || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = t || 0),
            (this._super = Y.prototype);
        },
        !0
      );
      if (
        ((r = Y.prototype),
        (Y.version = "1.10.1"),
        (Y.API = 2),
        (r._firstPT = null),
        (r._addTween = function(e, t, i, n, r, o) {
          var a, s;
          return null != n &&
            (a =
              "number" == typeof n || "=" !== n.charAt(1)
                ? Number(n) - i
                : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)))
            ? ((this._firstPT = s = {
                _next: this._firstPT,
                t: e,
                p: t,
                s: i,
                c: a,
                f: "function" == typeof e[t],
                n: r || t,
                r: o,
              }),
              s._next && (s._next._prev = s),
              s)
            : void 0;
        }),
        (r.setRatio = function(e) {
          for (var t, i = this._firstPT, n = 1e-6; i; )
            (t = i.c * e + i.s),
              i.r ? (t = Math.round(t)) : n > t && t > -n && (t = 0),
              i.f ? i.t[i.p](t) : (i.t[i.p] = t),
              (i = i._next);
        }),
        (r._kill = function(e) {
          var t,
            i = this._overwriteProps,
            n = this._firstPT;
          if (null != e[this._propName]) this._overwriteProps = [];
          else for (t = i.length; --t > -1; ) null != e[i[t]] && i.splice(t, 1);
          for (; n; )
            null != e[n.n] &&
              (n._next && (n._next._prev = n._prev),
              n._prev
                ? ((n._prev._next = n._next), (n._prev = null))
                : this._firstPT === n && (this._firstPT = n._next)),
              (n = n._next);
          return !1;
        }),
        (r._roundProps = function(e, t) {
          for (var i = this._firstPT; i; )
            (e[this._propName] ||
              (null != i.n && e[i.n.split(this._propName + "_").join("")])) &&
              (i.r = t),
              (i = i._next);
        }),
        (D._onPluginEvent = function(e, t) {
          var i,
            n,
            r,
            o,
            a,
            s = t._firstPT;
          if ("_onInitAllProps" === e) {
            for (; s; ) {
              for (a = s._next, n = r; n && n.pr > s.pr; ) n = n._next;
              (s._prev = n ? n._prev : o) ? (s._prev._next = s) : (r = s),
                (s._next = n) ? (n._prev = s) : (o = s),
                (s = a);
            }
            s = t._firstPT = r;
          }
          for (; s; )
            s.pg && "function" == typeof s.t[e] && s.t[e]() && (i = !0),
              (s = s._next);
          return i;
        }),
        (Y.activate = function(e) {
          for (var t = e.length; --t > -1; )
            e[t].API === Y.API && (O[new e[t]()._propName] = e[t]);
          return !0;
        }),
        (m.plugin = function(e) {
          if (!(e && e.propName && e.init && e.API))
            throw "illegal plugin definition.";
          var t,
            i = e.propName,
            n = e.priority || 0,
            r = e.overwriteProps,
            o = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            a = g(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function() {
                Y.call(this, i, n), (this._overwriteProps = r || []);
              },
              e.global === !0
            ),
            s = (a.prototype = new Y(i));
          (s.constructor = a), (a.API = e.API);
          for (t in o) "function" == typeof e[t] && (s[o[t]] = e[t]);
          return (a.version = e.version), Y.activate([a]), a;
        }),
        (i = e._gsQueue))
      ) {
        for (n = 0; i.length > n; n++) i[n]();
        for (r in h)
          h[r].func ||
            e.console.log(
              "GSAP encountered missing dependency: com.greensock." + r
            );
      }
      a = !1;
    }
  })(window),
  (function(e) {
    "object" == typeof exports
      ? (module.exports = e())
      : "function" == typeof window.define && window.define.amd
      ? window.define([], e)
      : (window.BezierEasing = e());
  })(function() {
    function e(e, l, c, d) {
      function p(e, t) {
        return 1 - 3 * t + 3 * e;
      }
      function u(e, t) {
        return 3 * t - 6 * e;
      }
      function h(e) {
        return 3 * e;
      }
      function f(e, t, i) {
        return ((p(t, i) * e + u(t, i)) * e + h(t)) * e;
      }
      function m(e, t, i) {
        return 3 * p(t, i) * e * e + 2 * u(t, i) * e + h(t);
      }
      function g(i, n) {
        for (var r = 0; t > r; ++r) {
          var o = m(n, e, c);
          if (0 === o) return n;
          var a = f(n, e, c) - i;
          n -= a / o;
        }
        return n;
      }
      function v() {
        for (var t = 0; o > t; ++t) w[t] = f(t * a, e, c);
      }
      function y(t, i, o) {
        var a,
          s,
          l = 0;
        do
          (s = i + (o - i) / 2),
            (a = f(s, e, c) - t),
            a > 0 ? (o = s) : (i = s);
        while (Math.abs(a) > n && ++l < r);
        return s;
      }
      function b(t) {
        for (var n = 0, r = 1, s = o - 1; r != s && w[r] <= t; ++r) n += a;
        --r;
        var l = (t - w[r]) / (w[r + 1] - w[r]),
          d = n + l * a,
          p = m(d, e, c);
        return p >= i ? g(t, d) : 0 == p ? d : y(t, n, n + a);
      }
      if (4 !== arguments.length)
        throw new Error("BezierEasing requires 4 arguments.");
      for (var x = 0; 4 > x; ++x)
        if (
          "number" != typeof arguments[x] ||
          isNaN(arguments[x]) ||
          !isFinite(arguments[x])
        )
          throw new Error("BezierEasing arguments should be integers.");
      if (0 > e || e > 1 || 0 > c || c > 1)
        throw new Error("BezierEasing x values must be in [0, 1] range.");
      var w = s ? new Float32Array(o) : new Array(o);
      (e != l || c != d) && v();
      var $ = function(t) {
          return e === l && c === d
            ? t
            : 0 === t
            ? 0
            : 1 === t
            ? 1
            : f(b(t), l, d);
        },
        _ = "BezierEasing(" + [e, l, c, d] + ")";
      return (
        ($.toString = function() {
          return _;
        }),
        $
      );
    }
    var t = 4,
      i = 0.001,
      n = 1e-7,
      r = 10,
      o = 11,
      a = 1 / (o - 1),
      s = "function" == typeof Float32Array;
    return (
      (e.css = {
        ease: e(0.25, 0.1, 0.25, 1),
        linear: e(0, 0, 1, 1),
        "ease-in": e(0.42, 0, 1, 1),
        "ease-out": e(0, 0, 0.58, 1),
        "ease-in-out": e(0.42, 0, 0.58, 1),
      }),
      e
    );
  }),
  (function($) {
    ($.toJSON = function(e) {
      if ("object" == typeof JSON && JSON.stringify) return JSON.stringify(e);
      var t = typeof e;
      if (null === e) return "null";
      if ("undefined" == t) return void 0;
      if ("number" == t || "boolean" == t) return e + "";
      if ("string" == t) return $.quoteString(e);
      if ("object" == t) {
        if ("function" == typeof e.toJSON) return $.toJSON(e.toJSON());
        if (e.constructor === Date) {
          var i = e.getUTCMonth() + 1;
          10 > i && (i = "0" + i);
          var n = e.getUTCDate();
          10 > n && (n = "0" + n);
          var r = e.getUTCFullYear(),
            o = e.getUTCHours();
          10 > o && (o = "0" + o);
          var a = e.getUTCMinutes();
          10 > a && (a = "0" + a);
          var s = e.getUTCSeconds();
          10 > s && (s = "0" + s);
          var l = e.getUTCMilliseconds();
          return (
            100 > l && (l = "0" + l),
            10 > l && (l = "0" + l),
            '"' +
              r +
              "-" +
              i +
              "-" +
              n +
              "T" +
              o +
              ":" +
              a +
              ":" +
              s +
              "." +
              l +
              'Z"'
          );
        }
        if (e.constructor === Array) {
          for (var c = [], d = 0; d < e.length; d++)
            c.push($.toJSON(e[d]) || "null");
          return "[" + c.join(",") + "]";
        }
        var p = [];
        for (var u in e) {
          var h,
            t = typeof u;
          if ("number" == t) h = '"' + u + '"';
          else {
            if ("string" != t) continue;
            h = $.quoteString(u);
          }
          if ("function" != typeof e[u]) {
            var f = $.toJSON(e[u]);
            p.push(h + ":" + f);
          }
        }
        return "{" + p.join(", ") + "}";
      }
    }),
      ($.evalJSON = function(src) {
        return "object" == typeof JSON && JSON.parse
          ? JSON.parse(src)
          : eval("(" + src + ")");
      }),
      ($.secureEvalJSON = function(src) {
        if ("object" == typeof JSON && JSON.parse) return JSON.parse(src);
        var filtered = src;
        if (
          ((filtered = filtered.replace(/\\["\\\/bfnrtu]/g, "@")),
          (filtered = filtered.replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )),
          (filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, "")),
          /^[\],:{}\s]*$/.test(filtered))
        )
          return eval("(" + src + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.");
      }),
      ($.quoteString = function(e) {
        return e.match(_escapeable)
          ? '"' +
              e.replace(_escapeable, function(e) {
                var t = _meta[e];
                return "string" == typeof t
                  ? t
                  : ((t = e.charCodeAt()),
                    "\\u00" +
                      Math.floor(t / 16).toString(16) +
                      (t % 16).toString(16));
              }) +
              '"'
          : '"' + e + '"';
      });
    var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
      _meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      };
  })(jQuery),
  (function(e, t, i) {
    function n(e, n) {
      (this.wrapper = "string" == typeof e ? t.querySelector(e) : e),
        (this.scroller = this.wrapper.children[0]),
        (this.scrollerStyle = this.scroller.style),
        (this.options = {
          zoomMin: 1,
          zoomMax: 4,
          startZoom: 1,
          resizeScrollbars: !0,
          mouseWheelSpeed: 20,
          snapThreshold: 0.334,
          startX: 0,
          startY: 0,
          scrollY: !0,
          directionLockThreshold: 5,
          momentum: !0,
          bounce: !0,
          bounceTime: 600,
          bounceEasing: "",
          preventDefault: !0,
          preventDefaultException: {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/,
          },
          HWCompositing: !0,
          useTransition: !0,
          useTransform: !0,
        });
      for (var r in n) this.options[r] = n[r];
      (this.translateZ =
        this.options.HWCompositing && s.hasPerspective ? " translateZ(0)" : ""),
        (this.options.useTransition =
          s.hasTransition && this.options.useTransition),
        (this.options.useTransform =
          s.hasTransform && this.options.useTransform),
        (this.options.eventPassthrough =
          this.options.eventPassthrough === !0
            ? "vertical"
            : this.options.eventPassthrough),
        (this.options.preventDefault =
          !this.options.eventPassthrough && this.options.preventDefault),
        (this.options.scrollY =
          "vertical" == this.options.eventPassthrough
            ? !1
            : this.options.scrollY),
        (this.options.scrollX =
          "horizontal" == this.options.eventPassthrough
            ? !1
            : this.options.scrollX),
        (this.options.freeScroll =
          this.options.freeScroll && !this.options.eventPassthrough),
        (this.options.freeScroll =
          this.options.twoWayScroll || this.options.freeScroll),
        (this.options.directionLockThreshold = this.options.eventPassthrough
          ? 0
          : this.options.directionLockThreshold),
        (this.options.bounceEasing =
          "string" == typeof this.options.bounceEasing
            ? s.ease[this.options.bounceEasing] || s.ease.circular
            : this.options.bounceEasing),
        (this.options.resizePolling =
          void 0 === this.options.resizePolling
            ? 60
            : this.options.resizePolling),
        this.options.tap === !0 && (this.options.tap = "tap"),
        "scale" == this.options.shrinkScrollbars &&
          (this.options.useTransition = !1),
        (this.options.invertWheelDirection = this.options.invertWheelDirection
          ? -1
          : 1),
        3 == this.options.probeType && (this.options.useTransition = !1),
        (this.x = 0),
        (this.y = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this._events = {}),
        (this.scale = i.min(
          i.max(this.options.startZoom, this.options.zoomMin),
          this.options.zoomMax
        )),
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable();
    }
    function r(e, i, n) {
      var r = t.createElement("div"),
        o = t.createElement("div");
      return (
        n === !0 &&
          ((r.style.cssText = "position:absolute;z-index:9999"),
          (o.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
        (o.className = "iScrollIndicator"),
        "h" == e
          ? (n === !0 &&
              ((r.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
              (o.style.height = "100%")),
            (r.className = "iScrollHorizontalScrollbar"))
          : (n === !0 &&
              ((r.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
              (o.style.width = "100%")),
            (r.className = "iScrollVerticalScrollbar")),
        (r.style.cssText += ";overflow:hidden"),
        i || (r.style.pointerEvents = "none"),
        r.appendChild(o),
        r
      );
    }
    function o(i, n) {
      (this.wrapper = "string" == typeof n.el ? t.querySelector(n.el) : n.el),
        (this.wrapperStyle = this.wrapper.style),
        (this.indicator = this.wrapper.children[0]),
        (this.indicatorStyle = this.indicator.style),
        (this.scroller = i),
        (this.options = {
          listenX: !0,
          listenY: !0,
          interactive: !1,
          resize: !0,
          defaultScrollbars: !1,
          shrink: !1,
          fade: !1,
          speedRatioX: 0,
          speedRatioY: 0,
        });
      for (var r in n) this.options[r] = n[r];
      (this.sizeRatioX = 1),
        (this.sizeRatioY = 1),
        (this.maxPosX = 0),
        (this.maxPosY = 0),
        this.options.interactive &&
          (this.options.disableTouch ||
            (s.addEvent(this.indicator, "touchstart", this),
            s.addEvent(e, "touchend", this)),
          this.options.disablePointer ||
            (s.addEvent(
              this.indicator,
              s.prefixPointerEvent("pointerdown"),
              this
            ),
            s.addEvent(e, s.prefixPointerEvent("pointerup"), this)),
          this.options.disableMouse ||
            (s.addEvent(this.indicator, "mousedown", this),
            s.addEvent(e, "mouseup", this))),
        this.options.fade &&
          ((this.wrapperStyle[s.style.transform] = this.scroller.translateZ),
          (this.wrapperStyle[s.style.transitionDuration] = s.isBadAndroid
            ? "0.001s"
            : "0ms"),
          (this.wrapperStyle.opacity = "0"));
    }
    var a =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function(t) {
          e.setTimeout(t, 1e3 / 60);
        },
      s = (function() {
        function n(e) {
          return a === !1
            ? !1
            : "" === a
            ? e
            : a + e.charAt(0).toUpperCase() + e.substr(1);
        }
        var r = {},
          o = t.createElement("div").style,
          a = (function() {
            for (
              var e,
                t = ["t", "webkitT", "MozT", "msT", "OT"],
                i = 0,
                n = t.length;
              n > i;
              i++
            )
              if (((e = t[i] + "ransform"), e in o))
                return t[i].substr(0, t[i].length - 1);
            return !1;
          })();
        (r.getTime =
          Date.now ||
          function() {
            return new Date().getTime();
          }),
          (r.extend = function(e, t) {
            for (var i in t) e[i] = t[i];
          }),
          (r.addEvent = function(e, t, i, n) {
            e.addEventListener(t, i, !!n);
          }),
          (r.removeEvent = function(e, t, i, n) {
            e.removeEventListener(t, i, !!n);
          }),
          (r.prefixPointerEvent = function(t) {
            return e.MSPointerEvent
              ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10)
              : t;
          }),
          (r.momentum = function(e, t, n, r, o, a) {
            var s,
              l,
              c = e - t,
              d = i.abs(c) / n;
            return (
              (a = void 0 === a ? 6e-4 : a),
              (s = e + ((d * d) / (2 * a)) * (0 > c ? -1 : 1)),
              (l = d / a),
              r > s
                ? ((s = o ? r - (o / 2.5) * (d / 8) : r),
                  (c = i.abs(s - e)),
                  (l = c / d))
                : s > 0 &&
                  ((s = o ? (o / 2.5) * (d / 8) : 0),
                  (c = i.abs(e) + s),
                  (l = c / d)),
              { destination: i.round(s), duration: l }
            );
          });
        var s = n("transform");
        return (
          r.extend(r, {
            hasTransform: s !== !1,
            hasPerspective: n("perspective") in o,
            hasTouch: "ontouchstart" in e,
            hasPointer: e.PointerEvent || e.MSPointerEvent,
            hasTransition: n("transition") in o,
          }),
          (r.isBadAndroid =
            /Android /.test(e.navigator.appVersion) &&
            !/Chrome\/\d/.test(e.navigator.appVersion)),
          r.extend((r.style = {}), {
            transform: s,
            transitionTimingFunction: n("transitionTimingFunction"),
            transitionDuration: n("transitionDuration"),
            transitionDelay: n("transitionDelay"),
            transformOrigin: n("transformOrigin"),
          }),
          (r.hasClass = function(e, t) {
            var i = new RegExp("(^|\\s)" + t + "(\\s|$)");
            return i.test(e.className);
          }),
          (r.addClass = function(e, t) {
            if (!r.hasClass(e, t)) {
              var i = e.className.split(" ");
              i.push(t), (e.className = i.join(" "));
            }
          }),
          (r.removeClass = function(e, t) {
            if (r.hasClass(e, t)) {
              var i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
              e.className = e.className.replace(i, " ");
            }
          }),
          (r.offset = function(e) {
            for (
              var t = -e.offsetLeft, i = -e.offsetTop;
              (e = e.offsetParent);

            )
              (t -= e.offsetLeft), (i -= e.offsetTop);
            return { left: t, top: i };
          }),
          (r.preventDefaultException = function(e, t) {
            for (var i in t) if (t[i].test(e[i])) return !0;
            return !1;
          }),
          r.extend((r.eventType = {}), {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3,
          }),
          r.extend((r.ease = {}), {
            quadratic: {
              style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fn: function(e) {
                return e * (2 - e);
              },
            },
            circular: {
              style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
              fn: function(e) {
                return i.sqrt(1 - --e * e);
              },
            },
            back: {
              style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              fn: function(e) {
                var t = 4;
                return (e -= 1) * e * ((t + 1) * e + t) + 1;
              },
            },
            bounce: {
              style: "",
              fn: function(e) {
                return (e /= 1) < 1 / 2.75
                  ? 7.5625 * e * e
                  : 2 / 2.75 > e
                  ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                  : 2.5 / 2.75 > e
                  ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                  : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
              },
            },
            elastic: {
              style: "",
              fn: function(e) {
                var t = 0.22,
                  n = 0.4;
                return 0 === e
                  ? 0
                  : 1 == e
                  ? 1
                  : n *
                      i.pow(2, -10 * e) *
                      i.sin(((e - t / 4) * 2 * i.PI) / t) +
                    1;
              },
            },
          }),
          (r.tap = function(e, i) {
            var n = t.createEvent("Event");
            n.initEvent(i, !0, !0),
              (n.pageX = e.pageX),
              (n.pageY = e.pageY),
              e.target.dispatchEvent(n);
          }),
          (r.click = function(e) {
            var i,
              n = e.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) ||
              ((i = t.createEvent("MouseEvents")),
              i.initMouseEvent(
                "click",
                !0,
                !0,
                e.view,
                1,
                n.screenX,
                n.screenY,
                n.clientX,
                n.clientY,
                e.ctrlKey,
                e.altKey,
                e.shiftKey,
                e.metaKey,
                0,
                null
              ),
              (i._constructed = !0),
              n.dispatchEvent(i));
          }),
          r
        );
      })();
    (n.prototype = {
      version: "5.1.2",
      _init: function() {
        this._initEvents(),
          this.options.zoom && this._initZoom(),
          (this.options.scrollbars || this.options.indicators) &&
            this._initIndicators(),
          this.options.mouseWheel && this._initWheel(),
          this.options.snap && this._initSnap(),
          this.options.keyBindings && this._initKeys();
      },
      destroy: function() {
        this._initEvents(!0), this._execEvent("destroy");
      },
      _transitionEnd: function(e) {
        e.target == this.scroller &&
          this.isInTransition &&
          (this._transitionTime(),
          this.resetPosition(this.options.bounceTime) ||
            ((this.isInTransition = !1), this._execEvent("scrollEnd")));
      },
      _start: function(e) {
        if (
          !(
            (1 != s.eventType[e.type] && 0 !== e.button) ||
            !this.enabled ||
            (this.initiated && s.eventType[e.type] !== this.initiated)
          )
        ) {
          !this.options.preventDefault ||
            s.isBadAndroid ||
            s.preventDefaultException(
              e.target,
              this.options.preventDefaultException
            ) ||
            e.preventDefault();
          var t,
            n = e.touches ? e.touches[0] : e;
          (this.initiated = s.eventType[e.type]),
            (this.twoWayOnEndCheck = !0),
            (this.moved = !1),
            (this.distX = 0),
            (this.distY = 0),
            (this.directionX = 0),
            (this.directionY = 0),
            (this.directionLocked = 0),
            this._transitionTime(),
            (this.startTime = s.getTime()),
            this.options.useTransition && this.isInTransition
              ? ((this.isInTransition = !1),
                (t = this.getComputedPosition()),
                this._translate(i.round(t.x), i.round(t.y)),
                this._execEvent("scrollEnd"))
              : !this.options.useTransition &&
                this.isAnimating &&
                ((this.isAnimating = !1), this._execEvent("scrollEnd")),
            (this.startX = this.x),
            (this.startY = this.y),
            (this.absStartX = this.x),
            (this.absStartY = this.y),
            (this.pointX = n.pageX),
            (this.pointY = n.pageY),
            this._execEvent("beforeScrollStart");
        }
      },
      _move: function(e) {
        if (this.enabled && s.eventType[e.type] === this.initiated) {
          this.options.preventDefault && e.preventDefault();
          var t,
            n,
            r,
            o,
            a = e.touches ? e.touches[0] : e,
            l = a.pageX - this.pointX,
            c = a.pageY - this.pointY,
            d = s.getTime();
          if (
            ((this.pointX = a.pageX),
            (this.pointY = a.pageY),
            (this.distX += l),
            (this.distY += c),
            (r = i.abs(this.distX)),
            (o = i.abs(this.distY)),
            !(d - this.endTime > 300 && 10 > r && 10 > o))
          ) {
            if (this.options.twoWayScroll && this.options.scrollX) {
              if (
                (!this.directionLocked && r >= o && (this.directionLocked = !0),
                !this.directionLocked)
              )
                return (this.initiated = !1), void 0;
              e.preventDefault(), e.stopPropagation();
            } else if (this.options.twoWayScroll && this.options.scrollY) {
              if (
                (!this.directionLocked && o > r && (this.directionLocked = !0),
                !this.directionLocked)
              )
                return (this.initiated = !1), void 0;
              e.preventDefault(), e.stopPropagation();
            }
            if (
              (this.directionLocked ||
                this.options.freeScroll ||
                (this.directionLocked =
                  r > o + this.options.directionLockThreshold
                    ? "h"
                    : o >= r + this.options.directionLockThreshold
                    ? "v"
                    : "n"),
              "h" == this.directionLocked)
            ) {
              if ("vertical" == this.options.eventPassthrough)
                e.preventDefault();
              else if ("horizontal" == this.options.eventPassthrough)
                return (this.initiated = !1), void 0;
              c = 0;
            } else if ("v" == this.directionLocked) {
              if ("horizontal" == this.options.eventPassthrough)
                e.preventDefault();
              else if ("vertical" == this.options.eventPassthrough)
                return (this.initiated = !1), void 0;
              l = 0;
            }
            (l = this.hasHorizontalScroll ? l : 0),
              (c = this.hasVerticalScroll ? c : 0),
              (t = this.x + l),
              (n = this.y + c),
              (t > 0 || t < this.maxScrollX) &&
                (t = this.options.bounce
                  ? this.x + l / 3
                  : t > 0
                  ? 0
                  : this.maxScrollX),
              (n > 0 || n < this.maxScrollY) &&
                (n = this.options.bounce
                  ? this.y + c / 3
                  : n > 0
                  ? 0
                  : this.maxScrollY),
              (this.directionX = l > 0 ? -1 : 0 > l ? 1 : 0),
              (this.directionY = c > 0 ? -1 : 0 > c ? 1 : 0),
              this.moved || this._execEvent("scrollStart"),
              (this.moved = !0),
              this._translate(t, n),
              d - this.startTime > 300 &&
                ((this.startTime = d),
                (this.startX = this.x),
                (this.startY = this.y),
                1 == this.options.probeType && this._execEvent("scroll")),
              this.options.probeType > 1 && this._execEvent("scroll");
          }
        }
      },
      _end: function(e) {
        if (
          (!this.options.twoWayScroll ||
            this.twoWayOnEndCheck ||
            (this.enabled && s.eventType[e.type] === this.initiated)) &&
          (this.options.twoWayScroll ||
            (this.enabled && s.eventType[e.type] === this.initiated))
        ) {
          (this.twoWayOnEndCheck = !1),
            this.options.preventDefault &&
              !s.preventDefaultException(
                e.target,
                this.options.preventDefaultException
              ) &&
              e.preventDefault();
          var t,
            n,
            r = (e.changedTouches ? e.changedTouches[0] : e,
            s.getTime() - this.startTime),
            o = i.round(this.x),
            a = i.round(this.y),
            l = i.abs(o - this.startX),
            c = i.abs(a - this.startY),
            d = 0,
            p = "";
          if (
            ((this.isInTransition = 0),
            (this.initiated = 0),
            (this.endTime = s.getTime()),
            !this.resetPosition(this.options.bounceTime))
          ) {
            if ((this.scrollTo(o, a), !this.moved && !this.options.snap))
              return (
                this.options.tap && s.tap(e, this.options.tap),
                this.options.click && s.click(e),
                this._execEvent("scrollCancel"),
                void 0
              );
            if (
              this.moved &&
              this._events.flick &&
              200 > r &&
              100 > l &&
              100 > c
            )
              return this._execEvent("flick"), void 0;
            if (
              (this.options.momentum &&
                300 > r &&
                ((t = this.hasHorizontalScroll
                  ? s.momentum(
                      this.x,
                      this.startX,
                      r,
                      this.maxScrollX,
                      this.options.bounce ? this.wrapperWidth : 0,
                      this.options.deceleration
                    )
                  : { destination: o, duration: 0 }),
                (n = this.hasVerticalScroll
                  ? s.momentum(
                      this.y,
                      this.startY,
                      r,
                      this.maxScrollY,
                      this.options.bounce ? this.wrapperHeight : 0,
                      this.options.deceleration
                    )
                  : { destination: a, duration: 0 }),
                (o = t.destination),
                (a = n.destination),
                (d = i.max(t.duration, n.duration)),
                (this.isInTransition = 1)),
              this.options.snap)
            ) {
              var u = this._nearestSnap(o, a);
              (this.currentPage = u),
                (d =
                  this.options.snapSpeed ||
                  i.max(
                    i.max(
                      i.min(i.abs(o - u.x), 1e3),
                      i.min(i.abs(a - u.y), 1e3)
                    ),
                    300
                  )),
                (o = u.x),
                (a = u.y),
                (this.directionX = 0),
                (this.directionY = 0),
                (p = this.options.bounceEasing);
            }
            if (o != this.x || a != this.y)
              return (
                (o > 0 ||
                  o < this.maxScrollX ||
                  a > 0 ||
                  a < this.maxScrollY) &&
                  (p = s.ease.quadratic),
                this.scrollTo(o, a, d, p),
                void 0
              );
            if (!this.moved && this.options.snap)
              return (
                this.options.tap && s.tap(e, this.options.tap),
                this.options.click && s.click(e),
                this._execEvent("scrollCancel"),
                void 0
              );
            (this.moved = !1), this._execEvent("scrollEnd");
          }
        }
      },
      _resize: function() {
        var e = this;
        clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = setTimeout(function() {
            e.refresh();
          }, this.options.resizePolling));
      },
      resetPosition: function(e) {
        var t = this.x,
          i = this.y;
        return (
          (e = e || 0),
          !this.hasHorizontalScroll || this.x > 0
            ? (t = 0)
            : this.x < this.maxScrollX && (t = this.maxScrollX),
          !this.hasVerticalScroll || this.y > 0
            ? (i = 0)
            : this.y < this.maxScrollY && (i = this.maxScrollY),
          t == this.x && i == this.y
            ? !1
            : (this.scrollTo(t, i, e, this.options.bounceEasing), !0)
        );
      },
      disable: function() {
        this.enabled = !1;
      },
      enable: function() {
        this.enabled = !0;
      },
      refresh: function() {
        this.wrapper.offsetHeight,
          (this.wrapperWidth = this.wrapper.clientWidth),
          (this.wrapperHeight = this.wrapper.clientHeight),
          (this.scrollerWidth = i.round(
            this.scroller.offsetWidth * this.scale
          )),
          (this.scrollerHeight = i.round(
            this.scroller.offsetHeight * this.scale
          )),
          (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
          (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
          (this.hasHorizontalScroll =
            this.options.scrollX && this.maxScrollX < 0),
          (this.hasVerticalScroll =
            this.options.scrollY && this.maxScrollY < 0),
          this.hasHorizontalScroll ||
            ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
          this.hasVerticalScroll ||
            ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
          (this.endTime = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.wrapperOffset = s.offset(this.wrapper)),
          this._execEvent("refresh"),
          this.resetPosition();
      },
      on: function(e, t) {
        this._events[e] || (this._events[e] = []), this._events[e].push(t);
      },
      off: function(e, t) {
        if (this._events[e]) {
          var i = this._events[e].indexOf(t);
          i > -1 && this._events[e].splice(i, 1);
        }
      },
      _execEvent: function(e) {
        if (this._events[e]) {
          var t = 0,
            i = this._events[e].length;
          if (i)
            for (; i > t; t++)
              this._events[e][t].apply(this, [].slice.call(arguments, 1));
        }
      },
      scrollBy: function(e, t, i, n) {
        (e = this.x + e),
          (t = this.y + t),
          (i = i || 0),
          this.scrollTo(e, t, i, n);
      },
      scrollTo: function(e, t, i, n) {
        (n = n || s.ease.circular),
          (this.isInTransition = this.options.useTransition && i > 0),
          !i || (this.options.useTransition && n.style)
            ? (this._transitionTimingFunction(n.style),
              this._transitionTime(i),
              this._translate(e, t))
            : this._animate(e, t, i, n.fn);
      },
      scrollToElement: function(e, t, n, r, o) {
        if ((e = e.nodeType ? e : this.scroller.querySelector(e))) {
          var a = s.offset(e);
          (a.left -= this.wrapperOffset.left),
            (a.top -= this.wrapperOffset.top),
            n === !0 &&
              (n = i.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
            r === !0 &&
              (r = i.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
            (a.left -= n || 0),
            (a.top -= r || 0),
            (a.left =
              a.left > 0
                ? 0
                : a.left < this.maxScrollX
                ? this.maxScrollX
                : a.left),
            (a.top =
              a.top > 0
                ? 0
                : a.top < this.maxScrollY
                ? this.maxScrollY
                : a.top),
            (t =
              void 0 === t || null === t || "auto" === t
                ? i.max(i.abs(this.x - a.left), i.abs(this.y - a.top))
                : t),
            this.scrollTo(a.left, a.top, t, o);
        }
      },
      _transitionTime: function(e) {
        if (
          ((e = e || 0),
          (this.scrollerStyle[s.style.transitionDuration] = e + "ms"),
          !e &&
            s.isBadAndroid &&
            (this.scrollerStyle[s.style.transitionDuration] = "0.001s"),
          this.indicators)
        )
          for (var t = this.indicators.length; t--; )
            this.indicators[t].transitionTime(e);
      },
      _transitionTimingFunction: function(e) {
        if (
          ((this.scrollerStyle[s.style.transitionTimingFunction] = e),
          this.indicators)
        )
          for (var t = this.indicators.length; t--; )
            this.indicators[t].transitionTimingFunction(e);
      },
      _translate: function(e, t) {
        if (
          (this.options.useTransform
            ? (this.scrollerStyle[s.style.transform] =
                "translate(" +
                e +
                "px," +
                t +
                "px) scale(" +
                this.scale +
                ") " +
                this.translateZ)
            : ((e = i.round(e)),
              (t = i.round(t)),
              (this.scrollerStyle.left = e + "px"),
              (this.scrollerStyle.top = t + "px")),
          (this.x = e),
          (this.y = t),
          this.indicators)
        )
          for (var n = this.indicators.length; n--; )
            this.indicators[n].updatePosition();
      },
      _initEvents: function(t) {
        var i = t ? s.removeEvent : s.addEvent,
          n = this.options.bindToWrapper ? this.wrapper : e;
        i(e, "orientationchange", this),
          i(e, "resize", this),
          this.options.click && i(this.wrapper, "click", this, !0),
          this.options.disableMouse ||
            (i(this.wrapper, "mousedown", this),
            i(n, "mousemove", this),
            i(n, "mousecancel", this),
            i(n, "mouseup", this)),
          s.hasPointer &&
            !this.options.disablePointer &&
            (i(this.wrapper, s.prefixPointerEvent("pointerdown"), this),
            i(n, s.prefixPointerEvent("pointermove"), this),
            i(n, s.prefixPointerEvent("pointercancel"), this),
            i(n, s.prefixPointerEvent("pointerup"), this)),
          s.hasTouch &&
            !this.options.disableTouch &&
            (i(this.wrapper, "touchstart", this),
            i(n, "touchmove", this),
            i(n, "touchcancel", this),
            i(n, "touchend", this)),
          i(this.scroller, "transitionend", this),
          i(this.scroller, "webkitTransitionEnd", this),
          i(this.scroller, "oTransitionEnd", this),
          i(this.scroller, "MSTransitionEnd", this);
      },
      getComputedPosition: function() {
        var t,
          i,
          n = e.getComputedStyle(this.scroller, null);
        return (
          this.options.useTransform
            ? ((n = n[s.style.transform].split(")")[0].split(", ")),
              (t = +(n[12] || n[4])),
              (i = +(n[13] || n[5])))
            : ((t = +n.left.replace(/[^-\d.]/g, "")),
              (i = +n.top.replace(/[^-\d.]/g, ""))),
          { x: t, y: i }
        );
      },
      _initIndicators: function() {
        function e(e) {
          for (var t = s.indicators.length; t--; ) e.call(s.indicators[t]);
        }
        var t,
          i = this.options.interactiveScrollbars,
          n = "string" != typeof this.options.scrollbars,
          a = [],
          s = this;
        (this.indicators = []),
          this.options.scrollbars &&
            (this.options.scrollY &&
              ((t = {
                el: r("v", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1,
              }),
              this.wrapper.appendChild(t.el),
              a.push(t)),
            this.options.scrollX &&
              ((t = {
                el: r("h", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1,
              }),
              this.wrapper.appendChild(t.el),
              a.push(t))),
          this.options.indicators && (a = a.concat(this.options.indicators));
        for (var l = a.length; l--; ) this.indicators.push(new o(this, a[l]));
        this.options.fadeScrollbars &&
          (this.on("scrollEnd", function() {
            e(function() {
              this.fade();
            });
          }),
          this.on("scrollCancel", function() {
            e(function() {
              this.fade();
            });
          }),
          this.on("scrollStart", function() {
            e(function() {
              this.fade(1);
            });
          }),
          this.on("beforeScrollStart", function() {
            e(function() {
              this.fade(1, !0);
            });
          })),
          this.on("refresh", function() {
            e(function() {
              this.refresh();
            });
          }),
          this.on("destroy", function() {
            e(function() {
              this.destroy();
            }),
              delete this.indicators;
          });
      },
      _initZoom: function() {
        this.scrollerStyle[s.style.transformOrigin] = "0 0";
      },
      _zoomStart: function(e) {
        var t = i.abs(e.touches[0].pageX - e.touches[1].pageX),
          n = i.abs(e.touches[0].pageY - e.touches[1].pageY);
        (this.touchesDistanceStart = i.sqrt(t * t + n * n)),
          (this.startScale = this.scale),
          (this.originX =
            i.abs(e.touches[0].pageX + e.touches[1].pageX) / 2 +
            this.wrapperOffset.left -
            this.x),
          (this.originY =
            i.abs(e.touches[0].pageY + e.touches[1].pageY) / 2 +
            this.wrapperOffset.top -
            this.y),
          this._execEvent("zoomStart");
      },
      _zoom: function(e) {
        if (this.enabled && s.eventType[e.type] === this.initiated) {
          this.options.preventDefault && e.preventDefault();
          var t,
            n,
            r,
            o = i.abs(e.touches[0].pageX - e.touches[1].pageX),
            a = i.abs(e.touches[0].pageY - e.touches[1].pageY),
            l = i.sqrt(o * o + a * a),
            c = (1 / this.touchesDistanceStart) * l * this.startScale;
          (this.scaled = !0),
            c < this.options.zoomMin
              ? (c =
                  0.5 *
                  this.options.zoomMin *
                  i.pow(2, c / this.options.zoomMin))
              : c > this.options.zoomMax &&
                (c =
                  2 *
                  this.options.zoomMax *
                  i.pow(0.5, this.options.zoomMax / c)),
            (t = c / this.startScale),
            (n = this.originX - this.originX * t + this.startX),
            (r = this.originY - this.originY * t + this.startY),
            (this.scale = c),
            this.scrollTo(n, r, 0);
        }
      },
      _zoomEnd: function(e) {
        if (this.enabled && s.eventType[e.type] === this.initiated) {
          this.options.preventDefault && e.preventDefault();
          var t, i, n;
          (this.isInTransition = 0),
            (this.initiated = 0),
            this.scale > this.options.zoomMax
              ? (this.scale = this.options.zoomMax)
              : this.scale < this.options.zoomMin &&
                (this.scale = this.options.zoomMin),
            this.refresh(),
            (n = this.scale / this.startScale),
            (t = this.originX - this.originX * n + this.startX),
            (i = this.originY - this.originY * n + this.startY),
            t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
            i > 0 ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY),
            (this.x != t || this.y != i) &&
              this.scrollTo(t, i, this.options.bounceTime),
            (this.scaled = !1),
            this._execEvent("zoomEnd");
        }
      },
      zoom: function(e, t, i, n) {
        if (
          (e < this.options.zoomMin
            ? (e = this.options.zoomMin)
            : e > this.options.zoomMax && (e = this.options.zoomMax),
          e != this.scale)
        ) {
          var r = e / this.scale;
          (t = void 0 === t ? this.wrapperWidth / 2 : t),
            (i = void 0 === i ? this.wrapperHeight / 2 : i),
            (n = void 0 === n ? 300 : n),
            (t = t + this.wrapperOffset.left - this.x),
            (i = i + this.wrapperOffset.top - this.y),
            (t = t - t * r + this.x),
            (i = i - i * r + this.y),
            (this.scale = e),
            this.refresh(),
            t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
            i > 0 ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY),
            this.scrollTo(t, i, n);
        }
      },
      _wheelZoom: function(e) {
        var t,
          n,
          r = this;
        if (
          (clearTimeout(this.wheelTimeout),
          (this.wheelTimeout = setTimeout(function() {
            r._execEvent("zoomEnd");
          }, 400)),
          "deltaX" in e)
        )
          t = -e.deltaY / i.abs(e.deltaY);
        else if ("wheelDeltaX" in e) t = e.wheelDeltaY / i.abs(e.wheelDeltaY);
        else if ("wheelDelta" in e) t = e.wheelDelta / i.abs(e.wheelDelta);
        else {
          if (!("detail" in e)) return;
          t = -e.detail / i.abs(e.wheelDelta);
        }
        (n = this.scale + t / 5), this.zoom(n, e.pageX, e.pageY, 0);
      },
      _initWheel: function() {
        s.addEvent(this.wrapper, "wheel", this),
          s.addEvent(this.wrapper, "mousewheel", this),
          s.addEvent(this.wrapper, "DOMMouseScroll", this),
          this.on("destroy", function() {
            s.removeEvent(this.wrapper, "wheel", this),
              s.removeEvent(this.wrapper, "mousewheel", this),
              s.removeEvent(this.wrapper, "DOMMouseScroll", this);
          });
      },
      _wheel: function(e) {
        if (this.enabled) {
          e.preventDefault(), e.stopPropagation();
          var t,
            n,
            r,
            o,
            a = this;
          if (
            (void 0 === this.wheelTimeout && a._execEvent("scrollStart"),
            clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = setTimeout(function() {
              a._execEvent("scrollEnd"), (a.wheelTimeout = void 0);
            }, 400)),
            "deltaX" in e)
          )
            (t = -e.deltaX), (n = -e.deltaY);
          else if ("wheelDeltaX" in e)
            (t = (e.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
              (n = (e.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
          else if ("wheelDelta" in e)
            t = n = (e.wheelDelta / 120) * this.options.mouseWheelSpeed;
          else {
            if (!("detail" in e)) return;
            t = n = (-e.detail / 3) * this.options.mouseWheelSpeed;
          }
          if (
            ((t *= this.options.invertWheelDirection),
            (n *= this.options.invertWheelDirection),
            this.hasVerticalScroll || ((t = n), (n = 0)),
            this.options.snap)
          )
            return (
              (r = this.currentPage.pageX),
              (o = this.currentPage.pageY),
              t > 0 ? r-- : 0 > t && r++,
              n > 0 ? o-- : 0 > n && o++,
              this.goToPage(r, o),
              void 0
            );
          (r = this.x + i.round(this.hasHorizontalScroll ? t : 0)),
            (o = this.y + i.round(this.hasVerticalScroll ? n : 0)),
            r > 0 ? (r = 0) : r < this.maxScrollX && (r = this.maxScrollX),
            o > 0 ? (o = 0) : o < this.maxScrollY && (o = this.maxScrollY),
            this.scrollTo(r, o, 0),
            this.options.probeType > 1 && this._execEvent("scroll");
        }
      },
      _initSnap: function() {
        (this.currentPage = {}),
          "string" == typeof this.options.snap &&
            (this.options.snap = this.scroller.querySelectorAll(
              this.options.snap
            )),
          this.on("refresh", function() {
            var e,
              t,
              n,
              r,
              o,
              a,
              s = 0,
              l = 0,
              c = 0,
              d = this.options.snapStepX || this.wrapperWidth,
              p = this.options.snapStepY || this.wrapperHeight;
            if (
              ((this.pages = []),
              this.wrapperWidth &&
                this.wrapperHeight &&
                this.scrollerWidth &&
                this.scrollerHeight)
            ) {
              if (this.options.snap === !0)
                for (
                  n = i.round(d / 2), r = i.round(p / 2);
                  c > -this.scrollerWidth;

                ) {
                  for (
                    this.pages[s] = [], e = 0, o = 0;
                    o > -this.scrollerHeight;

                  )
                    (this.pages[s][e] = {
                      x: i.max(c, this.maxScrollX),
                      y: i.max(o, this.maxScrollY),
                      width: d,
                      height: p,
                      cx: c - n,
                      cy: o - r,
                    }),
                      (o -= p),
                      e++;
                  (c -= d), s++;
                }
              else
                for (a = this.options.snap, e = a.length, t = -1; e > s; s++)
                  (0 === s || a[s].offsetLeft <= a[s - 1].offsetLeft) &&
                    ((l = 0), t++),
                    this.pages[l] || (this.pages[l] = []),
                    (c = i.max(-a[s].offsetLeft, this.maxScrollX)),
                    (o = i.max(-a[s].offsetTop, this.maxScrollY)),
                    (n = c - i.round(a[s].offsetWidth / 2)),
                    (r = o - i.round(a[s].offsetHeight / 2)),
                    (this.pages[l][t] = {
                      x: c,
                      y: o,
                      width: a[s].offsetWidth,
                      height: a[s].offsetHeight,
                      cx: n,
                      cy: r,
                    }),
                    c > this.maxScrollX && l++;
              this.goToPage(
                this.currentPage.pageX || 0,
                this.currentPage.pageY || 0,
                0
              ),
                0 === this.options.snapThreshold % 1
                  ? ((this.snapThresholdX = this.options.snapThreshold),
                    (this.snapThresholdY = this.options.snapThreshold))
                  : ((this.snapThresholdX = i.round(
                      this.pages[this.currentPage.pageX][this.currentPage.pageY]
                        .width * this.options.snapThreshold
                    )),
                    (this.snapThresholdY = i.round(
                      this.pages[this.currentPage.pageX][this.currentPage.pageY]
                        .height * this.options.snapThreshold
                    )));
            }
          }),
          this.on("flick", function() {
            var e =
              this.options.snapSpeed ||
              i.max(
                i.max(
                  i.min(i.abs(this.x - this.startX), 1e3),
                  i.min(i.abs(this.y - this.startY), 1e3)
                ),
                300
              );
            this.goToPage(
              this.currentPage.pageX + this.directionX,
              this.currentPage.pageY + this.directionY,
              e
            );
          });
      },
      _nearestSnap: function(e, t) {
        if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
        var n = 0,
          r = this.pages.length,
          o = 0;
        if (
          i.abs(e - this.absStartX) < this.snapThresholdX &&
          i.abs(t - this.absStartY) < this.snapThresholdY
        )
          return this.currentPage;
        for (
          e > 0 ? (e = 0) : e < this.maxScrollX && (e = this.maxScrollX),
            t > 0 ? (t = 0) : t < this.maxScrollY && (t = this.maxScrollY);
          r > n;
          n++
        )
          if (e >= this.pages[n][0].cx) {
            e = this.pages[n][0].x;
            break;
          }
        for (r = this.pages[n].length; r > o; o++)
          if (t >= this.pages[0][o].cy) {
            t = this.pages[0][o].y;
            break;
          }
        return (
          n == this.currentPage.pageX &&
            ((n += this.directionX),
            0 > n
              ? (n = 0)
              : n >= this.pages.length && (n = this.pages.length - 1),
            (e = this.pages[n][0].x)),
          o == this.currentPage.pageY &&
            ((o += this.directionY),
            0 > o
              ? (o = 0)
              : o >= this.pages[0].length && (o = this.pages[0].length - 1),
            (t = this.pages[0][o].y)),
          { x: e, y: t, pageX: n, pageY: o }
        );
      },
      goToPage: function(e, t, n, r) {
        if (
          ((r = r || this.options.bounceEasing),
          "undefined" == typeof this.pages ||
            ("undefined" != typeof this.pages && 0 == this.pages.length))
        )
          return !1;
        e >= this.pages.length ? (e = this.pages.length - 1) : 0 > e && (e = 0),
          t >= this.pages[e].length
            ? (t = this.pages[e].length - 1)
            : 0 > t && (t = 0);
        var o = this.pages[e][t].x,
          a = this.pages[e][t].y;
        (n =
          void 0 === n
            ? this.options.snapSpeed ||
              i.max(
                i.max(
                  i.min(i.abs(o - this.x), 1e3),
                  i.min(i.abs(a - this.y), 1e3)
                ),
                300
              )
            : n),
          (this.currentPage = { x: o, y: a, pageX: e, pageY: t }),
          this.scrollTo(o, a, n, r);
      },
      next: function(e, t) {
        var i = this.currentPage.pageX,
          n = this.currentPage.pageY;
        i++,
          i >= this.pages.length && this.hasVerticalScroll && ((i = 0), n++),
          this.goToPage(i, n, e, t);
      },
      prev: function(e, t) {
        var i = this.currentPage.pageX,
          n = this.currentPage.pageY;
        i--,
          0 > i && this.hasVerticalScroll && ((i = 0), n--),
          this.goToPage(i, n, e, t);
      },
      _initKeys: function() {
        var t,
          i = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
          };
        if ("object" == typeof this.options.keyBindings)
          for (t in this.options.keyBindings)
            "string" == typeof this.options.keyBindings[t] &&
              (this.options.keyBindings[t] = this.options.keyBindings[t]
                .toUpperCase()
                .charCodeAt(0));
        else this.options.keyBindings = {};
        for (t in i)
          this.options.keyBindings[t] = this.options.keyBindings[t] || i[t];
        s.addEvent(e, "keydown", this),
          this.on("destroy", function() {
            s.removeEvent(e, "keydown", this);
          });
      },
      _key: function(e) {
        if (this.enabled) {
          var t,
            n = this.options.snap,
            r = n ? this.currentPage.pageX : this.x,
            o = n ? this.currentPage.pageY : this.y,
            a = s.getTime(),
            l = this.keyTime || 0,
            c = 0.25;
          switch (
            (this.options.useTransition &&
              this.isInTransition &&
              ((t = this.getComputedPosition()),
              this._translate(i.round(t.x), i.round(t.y)),
              (this.isInTransition = !1)),
            (this.keyAcceleration =
              200 > a - l ? i.min(this.keyAcceleration + c, 50) : 0),
            e.keyCode)
          ) {
            case this.options.keyBindings.pageUp:
              this.hasHorizontalScroll && !this.hasVerticalScroll
                ? (r += n ? 1 : this.wrapperWidth)
                : (o += n ? 1 : this.wrapperHeight);
              break;
            case this.options.keyBindings.pageDown:
              this.hasHorizontalScroll && !this.hasVerticalScroll
                ? (r -= n ? 1 : this.wrapperWidth)
                : (o -= n ? 1 : this.wrapperHeight);
              break;
            case this.options.keyBindings.end:
              (r = n ? this.pages.length - 1 : this.maxScrollX),
                (o = n ? this.pages[0].length - 1 : this.maxScrollY);
              break;
            case this.options.keyBindings.home:
              (r = 0), (o = 0);
              break;
            case this.options.keyBindings.left:
              r += n ? -1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.up:
              o += n ? 1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.right:
              r -= n ? -1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.down:
              o -= n ? 1 : (5 + this.keyAcceleration) >> 0;
              break;
            default:
              return;
          }
          if (n) return this.goToPage(r, o), void 0;
          r > 0
            ? ((r = 0), (this.keyAcceleration = 0))
            : r < this.maxScrollX &&
              ((r = this.maxScrollX), (this.keyAcceleration = 0)),
            o > 0
              ? ((o = 0), (this.keyAcceleration = 0))
              : o < this.maxScrollY &&
                ((o = this.maxScrollY), (this.keyAcceleration = 0)),
            this.scrollTo(r, o, 0),
            (this.keyTime = a);
        }
      },
      _animate: function(e, t, i, n) {
        function r() {
          var u,
            h,
            f,
            m = s.getTime();
          return m >= p
            ? ((o.isAnimating = !1),
              o._translate(e, t),
              o.resetPosition(o.options.bounceTime) ||
                o._execEvent("scrollEnd"),
              void 0)
            : ((m = (m - d) / i),
              (f = n(m)),
              (u = (e - l) * f + l),
              (h = (t - c) * f + c),
              o._translate(u, h),
              o.isAnimating && a(r),
              3 == o.options.probeType && o._execEvent("scroll"),
              void 0);
        }
        var o = this,
          l = this.x,
          c = this.y,
          d = s.getTime(),
          p = d + i;
        (this.isAnimating = !0), r();
      },
      handleEvent: function(e) {
        switch (e.type) {
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
          case "mousedown":
            if (e.touches && 3 == e.touches.length) return;
            this._start(e),
              this.options.zoom &&
                e.touches &&
                e.touches.length > 1 &&
                this._zoomStart(e);
            break;
          case "touchmove":
          case "pointermove":
          case "MSPointerMove":
          case "mousemove":
            if (e.touches && 3 == e.touches.length) return;
            if (this.options.zoom && e.touches && e.touches[1])
              return this._zoom(e), void 0;
            this._move(e);
            break;
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseup":
          case "touchcancel":
          case "pointercancel":
          case "MSPointerCancel":
          case "mousecancel":
            if (e.touches && 3 == e.touches.length) return;
            if (this.scaled) return this._zoomEnd(e), void 0;
            this._end(e);
            break;
          case "orientationchange":
          case "resize":
            this._resize();
            break;
          case "transitionend":
          case "webkitTransitionEnd":
          case "oTransitionEnd":
          case "MSTransitionEnd":
            this._transitionEnd(e);
            break;
          case "wheel":
          case "DOMMouseScroll":
          case "mousewheel":
            if ("zoom" == this.options.wheelAction)
              return this._wheelZoom(e), void 0;
            this._wheel(e);
            break;
          case "keydown":
            this._key(e);
        }
      },
    }),
      (o.prototype = {
        handleEvent: function(e) {
          switch (e.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
              this._start(e);
              break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
              this._move(e);
              break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
              this._end(e);
          }
        },
        destroy: function() {
          this.options.interactive &&
            (s.removeEvent(this.indicator, "touchstart", this),
            s.removeEvent(
              this.indicator,
              s.prefixPointerEvent("pointerdown"),
              this
            ),
            s.removeEvent(this.indicator, "mousedown", this),
            s.removeEvent(e, "touchmove", this),
            s.removeEvent(e, s.prefixPointerEvent("pointermove"), this),
            s.removeEvent(e, "mousemove", this),
            s.removeEvent(e, "touchend", this),
            s.removeEvent(e, s.prefixPointerEvent("pointerup"), this),
            s.removeEvent(e, "mouseup", this)),
            this.options.defaultScrollbars &&
              this.wrapper.parentNode.removeChild(this.wrapper);
        },
        _start: function(t) {
          var i = t.touches ? t.touches[0] : t;
          t.preventDefault(),
            t.stopPropagation(),
            this.transitionTime(),
            (this.initiated = !0),
            (this.moved = !1),
            (this.lastPointX = i.pageX),
            (this.lastPointY = i.pageY),
            (this.startTime = s.getTime()),
            this.options.disableTouch || s.addEvent(e, "touchmove", this),
            this.options.disablePointer ||
              s.addEvent(e, s.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || s.addEvent(e, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart");
        },
        _move: function(e) {
          var t,
            i,
            n,
            r,
            o = e.touches ? e.touches[0] : e,
            a = s.getTime();
          this.moved || this.scroller._execEvent("scrollStart"),
            (this.moved = !0),
            (t = o.pageX - this.lastPointX),
            (this.lastPointX = o.pageX),
            (i = o.pageY - this.lastPointY),
            (this.lastPointY = o.pageY),
            (n = this.x + t),
            (r = this.y + i),
            this._pos(n, r),
            1 == this.scroller.options.probeType && a - this.startTime > 300
              ? ((this.startTime = a), this.scroller._execEvent("scroll"))
              : this.scroller.options.probeType > 1 &&
                this.scroller._execEvent("scroll"),
            e.preventDefault(),
            e.stopPropagation();
        },
        _end: function(t) {
          if (this.initiated) {
            if (
              ((this.initiated = !1),
              t.preventDefault(),
              t.stopPropagation(),
              s.removeEvent(e, "touchmove", this),
              s.removeEvent(e, s.prefixPointerEvent("pointermove"), this),
              s.removeEvent(e, "mousemove", this),
              this.scroller.options.snap)
            ) {
              var n = this.scroller._nearestSnap(
                  this.scroller.x,
                  this.scroller.y
                ),
                r =
                  this.options.snapSpeed ||
                  i.max(
                    i.max(
                      i.min(i.abs(this.scroller.x - n.x), 1e3),
                      i.min(i.abs(this.scroller.y - n.y), 1e3)
                    ),
                    300
                  );
              (this.scroller.x != n.x || this.scroller.y != n.y) &&
                ((this.scroller.directionX = 0),
                (this.scroller.directionY = 0),
                (this.scroller.currentPage = n),
                this.scroller.scrollTo(
                  n.x,
                  n.y,
                  r,
                  this.scroller.options.bounceEasing
                ));
            }
            this.moved && this.scroller._execEvent("scrollEnd");
          }
        },
        transitionTime: function(e) {
          (e = e || 0),
            (this.indicatorStyle[s.style.transitionDuration] = e + "ms"),
            !e &&
              s.isBadAndroid &&
              (this.indicatorStyle[s.style.transitionDuration] = "0.001s");
        },
        transitionTimingFunction: function(e) {
          this.indicatorStyle[s.style.transitionTimingFunction] = e;
        },
        refresh: function() {
          this.transitionTime(),
            (this.indicatorStyle.display =
              this.options.listenX && !this.options.listenY
                ? this.scroller.hasHorizontalScroll
                  ? "block"
                  : "none"
                : this.options.listenY && !this.options.listenX
                ? this.scroller.hasVerticalScroll
                  ? "block"
                  : "none"
                : this.scroller.hasHorizontalScroll ||
                  this.scroller.hasVerticalScroll
                ? "block"
                : "none"),
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
              ? (s.addClass(this.wrapper, "iScrollBothScrollbars"),
                s.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                this.options.defaultScrollbars &&
                  this.options.customStyle &&
                  (this.options.listenX
                    ? (this.wrapper.style.right = "8px")
                    : (this.wrapper.style.bottom = "8px")))
              : (s.removeClass(this.wrapper, "iScrollBothScrollbars"),
                s.addClass(this.wrapper, "iScrollLoneScrollbar"),
                this.options.defaultScrollbars &&
                  this.options.customStyle &&
                  (this.options.listenX
                    ? (this.wrapper.style.right = "2px")
                    : (this.wrapper.style.bottom = "2px"))),
            this.wrapper.offsetHeight,
            this.options.listenX &&
              ((this.wrapperWidth = this.wrapper.clientWidth),
              this.options.resize
                ? ((this.indicatorWidth = i.max(
                    i.round(
                      (this.wrapperWidth * this.wrapperWidth) /
                        (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                    ),
                    8
                  )),
                  (this.indicatorStyle.width = this.indicatorWidth + "px"))
                : (this.indicatorWidth = this.indicator.clientWidth),
              (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
              "clip" == this.options.shrink
                ? ((this.minBoundaryX = -this.indicatorWidth + 8),
                  (this.maxBoundaryX = this.wrapperWidth - 8))
                : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
              (this.sizeRatioX =
                this.options.speedRatioX ||
                (this.scroller.maxScrollX &&
                  this.maxPosX / this.scroller.maxScrollX))),
            this.options.listenY &&
              ((this.wrapperHeight = this.wrapper.clientHeight),
              this.options.resize
                ? ((this.indicatorHeight = i.max(
                    i.round(
                      (this.wrapperHeight * this.wrapperHeight) /
                        (this.scroller.scrollerHeight ||
                          this.wrapperHeight ||
                          1)
                    ),
                    8
                  )),
                  (this.indicatorStyle.height = this.indicatorHeight + "px"))
                : (this.indicatorHeight = this.indicator.clientHeight),
              (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
              "clip" == this.options.shrink
                ? ((this.minBoundaryY = -this.indicatorHeight + 8),
                  (this.maxBoundaryY = this.wrapperHeight - 8))
                : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
              (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
              (this.sizeRatioY =
                this.options.speedRatioY ||
                (this.scroller.maxScrollY &&
                  this.maxPosY / this.scroller.maxScrollY))),
            this.updatePosition();
        },
        updatePosition: function() {
          var e =
              (this.options.listenX &&
                i.round(this.sizeRatioX * this.scroller.x)) ||
              0,
            t =
              (this.options.listenY &&
                i.round(this.sizeRatioY * this.scroller.y)) ||
              0;
          this.options.ignoreBoundaries ||
            (e < this.minBoundaryX
              ? ("scale" == this.options.shrink &&
                  ((this.width = i.max(this.indicatorWidth + e, 8)),
                  (this.indicatorStyle.width = this.width + "px")),
                (e = this.minBoundaryX))
              : e > this.maxBoundaryX
              ? "scale" == this.options.shrink
                ? ((this.width = i.max(
                    this.indicatorWidth - (e - this.maxPosX),
                    8
                  )),
                  (this.indicatorStyle.width = this.width + "px"),
                  (e = this.maxPosX + this.indicatorWidth - this.width))
                : (e = this.maxBoundaryX)
              : "scale" == this.options.shrink &&
                this.width != this.indicatorWidth &&
                ((this.width = this.indicatorWidth),
                (this.indicatorStyle.width = this.width + "px")),
            t < this.minBoundaryY
              ? ("scale" == this.options.shrink &&
                  ((this.height = i.max(this.indicatorHeight + 3 * t, 8)),
                  (this.indicatorStyle.height = this.height + "px")),
                (t = this.minBoundaryY))
              : t > this.maxBoundaryY
              ? "scale" == this.options.shrink
                ? ((this.height = i.max(
                    this.indicatorHeight - 3 * (t - this.maxPosY),
                    8
                  )),
                  (this.indicatorStyle.height = this.height + "px"),
                  (t = this.maxPosY + this.indicatorHeight - this.height))
                : (t = this.maxBoundaryY)
              : "scale" == this.options.shrink &&
                this.height != this.indicatorHeight &&
                ((this.height = this.indicatorHeight),
                (this.indicatorStyle.height = this.height + "px"))),
            (this.x = e),
            (this.y = t),
            this.scroller.options.useTransform
              ? (this.indicatorStyle[s.style.transform] =
                  "translate(" +
                  e +
                  "px," +
                  t +
                  "px)" +
                  this.scroller.translateZ)
              : ((this.indicatorStyle.left = e + "px"),
                (this.indicatorStyle.top = t + "px"));
        },
        _pos: function(e, t) {
          0 > e ? (e = 0) : e > this.maxPosX && (e = this.maxPosX),
            0 > t ? (t = 0) : t > this.maxPosY && (t = this.maxPosY),
            (e = this.options.listenX
              ? i.round(e / this.sizeRatioX)
              : this.scroller.x),
            (t = this.options.listenY
              ? i.round(t / this.sizeRatioY)
              : this.scroller.y),
            this.scroller.scrollTo(e, t);
        },
        fade: function(e, t) {
          if (!t || this.visible) {
            clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
            var i = e ? 250 : 500,
              n = e ? 0 : 300;
            (e = e ? "1" : "0"),
              (this.wrapperStyle[s.style.transitionDuration] = i + "ms"),
              (this.fadeTimeout = setTimeout(
                function(e) {
                  (this.wrapperStyle.opacity = e), (this.visible = +e);
                }.bind(this, e),
                n
              ));
          }
        },
      }),
      (n.utils = s),
      "undefined" != typeof module && module.exports
        ? (module.exports = n)
        : (e.IScroll = n);
  })(window, document, Math);
var cssRGBA = function(e, t, i) {
    "undefined" == typeof i && (i = 1);
    var n = parseInt(e.substr(0, 2), 16),
      r = parseInt(e.substr(2, 2), 16),
      o = parseInt(e.substr(4, 2), 16);
    return (
      "rgba(" +
      Math.round(n + t) +
      "," +
      Math.round(r + t) +
      "," +
      Math.round(o + t) +
      ", " +
      i +
      ")"
    );
  },
  cssGradient = function(e, t) {
    "undefined" == typeof t && (t = "to center bottom");
    var i = "",
      n = "-moz-linear-gradient(",
      r = "-webkit-gradient(",
      o = "linear-gradient(";
    switch (t) {
      case "to center bottom":
        (n += "center top"),
          (r += "linear, left top, left bottom"),
          (o += "to center bottom");
        break;
      case "to center top":
        (n += "center bottom"),
          (r += "linear, left bottom, left top"),
          (o += "to center top");
        break;
      case "to right center":
        (n += "left center"),
          (r += "linear, left top, right top"),
          (o += "to right center");
        break;
      case "to left center":
        (n += "right center"),
          (r += "linear, right top, left top"),
          (o += "to left center");
        break;
      case "45deg":
        (n += "45deg"), (r += "linear, left bottom, right top"), (o += t);
        break;
      case "135deg":
        (n += "-45deg"), (r += "linear, left top, right bottom"), (o += t);
        break;
      case "-45deg":
        (n += "135deg"), (r += "linear, right bottom, left top"), (o += t);
        break;
      case "225deg":
        (n += "-135deg"), (r += "linear, right top, left bottom"), (o += t);
    }
    for (var a = 0; a < e.length; a++)
      (n += ", " + e[a].c + " " + e[a].p + "%"),
        (r += ", color-stop(" + e[a].p / 100 + ", " + e[a].c + ")"),
        (o += ", " + e[a].c + " " + e[a].p + "%");
    return (
      (i += "background: " + e[0].c + "; "),
      (i += "background-image: " + n + "); "),
      (i += "background-image: " + r + "); "),
      (i += "background-image: " + o + "); ")
    );
  },
  cssBorderRadius = function(e) {
    return $.isArray(e) && 4 == e.length
      ? ((cR = ""),
        null != e[0] &&
          ((cR += "-moz-border-radius-topleft: " + e[0] + "px; "),
          (cR += "-webkit-border-top-left-radius: " + e[0] + "px; "),
          (cR += "border-top-left-radius: " + e[0] + "px; ")),
        null != e[1] &&
          ((cR += "-moz-border-radius-topright: " + e[1] + "px; "),
          (cR += "-webkit-border-top-right-radius: " + e[1] + "px; "),
          (cR += "border-top-right-radius: " + e[1] + "px; ")),
        null != e[2] &&
          ((cR += "-moz-border-radius-bottomright: " + e[2] + "px; "),
          (cR += "-webkit-border-bottom-right-radius: " + e[2] + "px; "),
          (cR += "border-bottom-right-radius: " + e[2] + "px; ")),
        null != e[3] &&
          ((cR += "-moz-border-radius-bottomleft: " + e[3] + "px; "),
          (cR += "-webkit-border-bottom-left-radius: " + e[3] + "px; "),
          (cR += "border-bottom-left-radius: " + e[3] + "px; ")),
        cR)
      : "-moz-border-radius: " +
          e +
          "; -webkit-border-radius: " +
          e +
          "; border-radius: " +
          e +
          ";";
  },
  cssBoxShadow = function(e) {
    $.isArray(e) || (e = [e]);
    var t = "-moz-box-shadow: ",
      i = "-webkit-box-shadow: ",
      n = "box-shadow: ";
    cR = "";
    for (var r = 0; r < e.length; r++)
      r > 0 && ((t += ", "), (i += ", "), (n += ", ")),
        (t += e[r]),
        (i += e[r]),
        (n += e[r]),
        (cR += t + "; " + i + "; " + n + "; ");
    return cR;
  },
  cssFlexJustifyContent = function(e) {
    var t = "";
    switch (e) {
      case "left":
        (e = "flex-start"), (t = "start");
        break;
      case "right":
        (e = "flex-end"), (t = "end");
        break;
      default:
        t = "center";
    }
    var i = "";
    return (
      (i += "-webkit-box-pack: " + t + ";"),
      (i += "-ms-justify-content: " + e + ";"),
      (i += "-webkit-justify-content: " + e + ";"),
      (i += "justify-content: " + e + ";")
    );
  },
  cssFlexJustifyGrow = function(e) {
    var t = "";
    return (
      (t += "-webkit-box-flex: " + e + ";"),
      (t += "-ms-flex-grow: " + e + ";"),
      (t += "-webkit-flex-grow: " + e + ";"),
      (t += "flex-grow: " + e + ";")
    );
  };
!(function() {
  "use strict";
  var e = {};
  "undefined" != typeof t && (e = t);
  var t = e;
  (e.version = "0.0.7"),
    (e.config = {
      textDiffMinLength: 60,
      detectArrayMove: !0,
      includeValueOnArrayMove: !1,
    });
  var i = {
    diff: function(t, i, n, r) {
      for (
        var o,
          a,
          s,
          l = 0,
          c = 0,
          d = t.length,
          p = i.length,
          u = [],
          h = [],
          f =
            "function" == typeof n
              ? function(e, t, i, r) {
                  if (e === t) return !0;
                  if ("object" != typeof e || "object" != typeof t) return !1;
                  var o, a;
                  return (
                    "number" == typeof i
                      ? ((o = u[i]),
                        "undefined" == typeof o && (u[i] = o = n(e)))
                      : (o = n(e)),
                    "number" == typeof r
                      ? ((a = h[r]),
                        "undefined" == typeof a && (h[r] = a = n(t)))
                      : (a = n(t)),
                    o === a
                  );
                }
              : function(e, t) {
                  return e === t;
                },
          m = function(e, n) {
            return f(t[e], i[n], e, n);
          },
          g = function(e, n) {
            if (r && "object" == typeof t[e] && "object" == typeof i[n]) {
              var o = r(t[e], i[n]);
              "undefined" != typeof o && (s || (s = { _t: "a" }), (s[n] = o));
            }
          };
        d > l && p > l && m(l, l);

      )
        g(l, l), l++;
      for (; d > c + l && p > c + l && m(d - 1 - c, p - 1 - c); )
        g(d - 1 - c, p - 1 - c), c++;
      if (l + c === d) {
        if (d === p) return s;
        for (s = s || { _t: "a" }, o = l; p - c > o; o++) s[o] = [i[o]];
        return s;
      }
      if (l + c === p) {
        for (s = s || { _t: "a" }, o = l; d - c > o; o++)
          s["_" + o] = [t[o], 0, 0];
        return s;
      }
      var v = this.lcs(t.slice(l, d - c), i.slice(l, p - c), {
        areTheSameByIndex: function(e, t) {
          return m(e + l, t + l);
        },
      });
      s = s || { _t: "a" };
      var y = [];
      for (o = l; d - c > o; o++)
        v.indices1.indexOf(o - l) < 0 &&
          ((s["_" + o] = [t[o], 0, 0]), y.push(o));
      var b = y.length;
      for (o = l; p - c > o; o++) {
        var x = v.indices2.indexOf(o - l);
        if (0 > x) {
          var w = !1;
          if (e.config.detectArrayMove && b > 0)
            for (a = 0; b > a; a++)
              if (m(y[a], o)) {
                s["_" + y[a]].splice(1, 2, o, 3),
                  e.config.includeValueOnArrayMove || (s["_" + y[a]][0] = ""),
                  g(y[a], o),
                  y.splice(a, 1),
                  (w = !0);
                break;
              }
          w || (s[o] = [i[o]]);
        } else g(v.indices1[x] + l, v.indices2[x] + l);
      }
      return s;
    },
    getArrayIndexBefore: function(e, t) {
      var i,
        n = t;
      for (var o in e)
        if (e.hasOwnProperty(o) && r(e[o]))
          if (
            ((i =
              "_" === o.slice(0, 1)
                ? parseInt(o.slice(1), 10)
                : parseInt(o, 10)),
            1 === e[o].length)
          ) {
            if (t > i) n--;
            else if (i === t) return -1;
          } else if (3 === e[o].length)
            if (0 === e[o][2]) t >= i && n++;
            else if (3 === e[o][2])
              if ((t >= i && n++, e[o][1] > t)) n--;
              else if (e[o][1] === t) return i;
      return n;
    },
    patch: function(e, t, i, n) {
      var r,
        o,
        a = function(e, t) {
          return e - t;
        },
        s = function(e) {
          return function(t, i) {
            return t[e] - i[e];
          };
        },
        l = [],
        c = [],
        d = [];
      for (r in t)
        if ("_t" !== r)
          if ("_" == r[0]) {
            if (0 !== t[r][2] && 3 !== t[r][2])
              throw new Error(
                "only removal or move can be applied at original array indices, invalid diff type: " +
                  t[r][2]
              );
            l.push(parseInt(r.slice(1), 10));
          } else
            1 === t[r].length
              ? c.push({ index: parseInt(r, 10), value: t[r][0] })
              : d.push({ index: parseInt(r, 10), diff: t[r] });
      for (l = l.sort(a), r = l.length - 1; r >= 0; r--) {
        o = l[r];
        var p = t["_" + o],
          u = e.splice(o, 1)[0];
        3 === p[2] && c.push({ index: p[1], value: u });
      }
      c = c.sort(s("index"));
      var h = c.length;
      for (r = 0; h > r; r++) {
        var f = c[r];
        e.splice(f.index, 0, f.value);
      }
      var m = d.length;
      if (m > 0) {
        if ("function" != typeof i)
          throw new Error(
            "to patch items in the array an objectInnerPatch function must be provided"
          );
        for (r = 0; m > r; r++) {
          var g = d[r];
          i(e, g.index.toString(), g.diff, n);
        }
      }
      return e;
    },
    lcs: function(e, t, i) {
      i.areTheSameByIndex =
        i.areTheSameByIndex ||
        function(i, n) {
          return e[i] === t[n];
        };
      var n = this.lengthMatrix(e, t, i),
        r = this.backtrack(n, e, t, e.length, t.length);
      return (
        "string" == typeof e &&
          "string" == typeof t &&
          (r.sequence = r.sequence.join("")),
        r
      );
    },
    lengthMatrix: function(e, t, i) {
      var n,
        r,
        o = e.length,
        a = t.length,
        s = [o + 1];
      for (n = 0; o + 1 > n; n++)
        for (s[n] = [a + 1], r = 0; a + 1 > r; r++) s[n][r] = 0;
      for (s.options = i, n = 1; o + 1 > n; n++)
        for (r = 1; a + 1 > r; r++)
          s[n][r] = i.areTheSameByIndex(n - 1, r - 1)
            ? s[n - 1][r - 1] + 1
            : Math.max(s[n - 1][r], s[n][r - 1]);
      return s;
    },
    backtrack: function(e, t, i, n, r) {
      if (0 === n || 0 === r)
        return { sequence: [], indices1: [], indices2: [] };
      if (e.options.areTheSameByIndex(n - 1, r - 1)) {
        var o = this.backtrack(e, t, i, n - 1, r - 1);
        return (
          o.sequence.push(t[n - 1]),
          o.indices1.push(n - 1),
          o.indices2.push(r - 1),
          o
        );
      }
      return e[n][r - 1] > e[n - 1][r]
        ? this.backtrack(e, t, i, n, r - 1)
        : this.backtrack(e, t, i, n - 1, r);
    },
  };
  (e.sequenceDiffer = i),
    (e.dateReviver = function(e, t) {
      var i;
      return "string" == typeof t &&
        (i = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(
          t
        ))
        ? new Date(Date.UTC(+i[1], +i[2] - 1, +i[3], +i[4], +i[5], +i[6]))
        : t;
    });
  var n = function() {
      var t;
      return (
        e.config.diff_match_patch &&
          (t = new e.config.diff_match_patch.diff_match_patch()),
        "undefined" != typeof diff_match_patch &&
          ("function" == typeof diff_match_patch
            ? (t = new diff_match_patch())
            : "object" == typeof diff_match_patch &&
              "function" == typeof diff_match_patch.diff_match_patch &&
              (t = new diff_match_patch.diff_match_patch())),
        t
          ? ((e.config.textDiff = function(e, i) {
              return t.patch_toText(t.patch_make(e, i));
            }),
            (e.config.textPatch = function(e, i) {
              for (
                var n = t.patch_apply(t.patch_fromText(i), e), r = 0;
                r < n[1].length;
                r++
              )
                if (!n[1][r]) throw new Error("text patch failed");
              return n[0];
            }),
            !0)
          : void 0
      );
    },
    r = (e.isArray =
      "function" == typeof Array.isArray
        ? Array.isArray
        : function(e) {
            return "object" == typeof e && e instanceof Array;
          }),
    o = (e.isDate = function(e) {
      return (
        e instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(e)
      );
    }),
    a = function(t, n) {
      return i.diff(t, n, e.config.objectHash, e.diff);
    },
    s = function(e, t) {
      var i, n, r, o;
      o = function(r) {
        (n = l(e[r], t[r])),
          "undefined" != typeof n &&
            ("undefined" == typeof i && (i = {}), (i[r] = n));
      };
      for (r in t) t.hasOwnProperty(r) && o(r);
      for (r in e) e.hasOwnProperty(r) && "undefined" == typeof t[r] && o(r);
      return i;
    },
    l = (e.diff = function(t, i) {
      var l, c, d, p, u;
      if (
        t !== i &&
        (t === t || i === i) &&
        ((l = typeof i),
        (c = typeof t),
        (d = null === i),
        (p = null === t),
        "object" == c && o(t) && (c = "date"),
        "object" != l ||
          !o(i) ||
          ((l = "date"), "date" != c || t.getTime() !== i.getTime()))
      ) {
        if (
          d ||
          p ||
          "undefined" == l ||
          l != c ||
          "number" == l ||
          "number" == c ||
          "boolean" == l ||
          "boolean" == c ||
          "string" == l ||
          "string" == c ||
          "date" == l ||
          "date" == c ||
          ("object" === l && r(i) != r(t))
        ) {
          if (((u = []), "undefined" != typeof t))
            if ("undefined" != typeof i) {
              var h =
                "string" == l &&
                "string" == c &&
                Math.min(t.length, i.length) > e.config.textDiffMinLength;
              h && !e.config.textDiff && n(),
                h && e.config.textDiff
                  ? u.push(e.config.textDiff(t, i), 0, 2)
                  : (u.push(t), u.push(i));
            } else u.push(t), u.push(0, 0);
          else u.push(i);
          return u;
        }
        return r(i) ? a(t, i) : s(t, i);
      }
    }),
    c = function(e, t) {
      return r(e) ? e[parseInt(t, 10)] : e[t];
    };
  e.getByKey = c;
  var d = function(e, t, i) {
      if (r(e) && e._key) {
        var n = e._key;
        "function" != typeof e._key &&
          (n = function(t) {
            return t[e._key];
          });
        for (var o = 0; o < e.length; o++)
          if (n(e[o]) === t)
            return (
              "undefined" == typeof i ? (e.splice(o, 1), o--) : (e[o] = i),
              void 0
            );
        return "undefined" != typeof i && e.push(i), void 0;
      }
      "undefined" == typeof i
        ? r(e)
          ? e.splice(t, 1)
          : delete e[t]
        : (e[t] = i);
    },
    p = function(t) {
      return (
        e.config.textDiffReverse ||
          (e.config.textDiffReverse = function(e) {
            var t,
              i,
              n,
              r,
              o,
              a,
              s,
              l = null,
              c = /^@@ +\-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
            for (n = e.split("\n"), t = 0, i = n.length; i > t; t++) {
              r = n[t];
              var d = r.slice(0, 1);
              "@" === d
                ? ((l = c.exec(r)),
                  (o = t),
                  (a = null),
                  (s = null),
                  (n[o] =
                    "@@ -" +
                    l[3] +
                    "," +
                    l[4] +
                    " +" +
                    l[1] +
                    "," +
                    l[2] +
                    " @@"))
                : "+" == d
                ? ((a = t), (n[t] = "-" + n[t].slice(1)))
                : "-" == d && ((s = t), (n[t] = "+" + n[t].slice(1)));
            }
            return n.join("\n");
          }),
        e.config.textDiffReverse(t)
      );
    },
    u = (e.reverse = function(e) {
      var t, n;
      if ("undefined" != typeof e) {
        if (null === e) return null;
        if ("object" == typeof e && !o(e)) {
          if (r(e)) {
            if (e.length < 3)
              return 1 === e.length ? [e[0], 0, 0] : [e[1], e[0]];
            if (0 === e[2]) return [e[0]];
            if (2 === e[2]) return [p(e[0]), 0, 2];
            throw new Error("invalid diff type");
          }
          if (((n = {}), "a" === e._t)) {
            for (t in e)
              if (e.hasOwnProperty(t) && "_t" !== t) {
                var a,
                  s = t;
                if (
                  ((a =
                    "_" === t.slice(0, 1)
                      ? parseInt(t.slice(1), 10)
                      : parseInt(t, 10)),
                  r(e[t]))
                )
                  if (1 === e[t].length) s = "_" + a;
                  else if (2 === e[t].length) s = i.getArrayIndexBefore(e, a);
                  else if (0 === e[t][2]) s = a.toString();
                  else {
                    if (3 === e[t][2]) {
                      (s = "_" + e[t][1]), (n[s] = [e[t][0], a, 3]);
                      continue;
                    }
                    s = i.getArrayIndexBefore(e, a);
                  }
                else s = i.getArrayIndexBefore(e, a);
                n[s] = u(e[t]);
              }
            n._t = "a";
          } else for (t in e) e.hasOwnProperty(t) && (n[t] = u(e[t]));
          return n;
        }
        return "string" == typeof e && "@@" === e.slice(0, 2) ? p(e) : e;
      }
    }),
    h = (e.patch = function(o, a, s, l) {
      var p,
        u,
        f,
        m = "";
      if (
        ("string" != typeof a
          ? ((l = s), (s = a), (a = null))
          : "object" != typeof o && (a = null),
        l && (m += l),
        (m += "/"),
        null !== a && (m += a),
        "object" == typeof s)
      )
        if (r(s)) {
          if (s.length < 3)
            return (u = s[s.length - 1]), null !== a && d(o, a, u), u;
          if (0 !== s[2]) {
            if (2 === s[2]) {
              if ((e.config.textPatch || n(), !e.config.textPatch))
                throw new Error("textPatch function not found");
              try {
                u = e.config.textPatch(c(o, a), s[0]);
              } catch (g) {
                throw new Error('cannot apply patch at "' + m + '": ' + g);
              }
              return null !== a && d(o, a, u), u;
            }
            throw 3 === s[2]
              ? new Error("Not implemented diff type: " + s[2])
              : new Error("invalid diff type: " + s[2]);
          }
          if (null === a) return;
          d(o, a);
        } else if ("a" == s._t) {
          if (((f = null === a ? o : c(o, a)), "object" != typeof f || !r(f)))
            throw new Error(
              'cannot apply patch at "' + m + '": array expected'
            );
          i.patch(f, s, t.patch, m);
        } else {
          if (((f = null === a ? o : c(o, a)), "object" != typeof f || r(f)))
            throw new Error(
              'cannot apply patch at "' + m + '": object expected'
            );
          for (p in s) s.hasOwnProperty(p) && h(f, p, s[p], m);
        }
      return o;
    });
  (e.unpatch = function(e, t, i, n) {
    return "string" != typeof t ? h(e, u(t), i) : h(e, t, u(i), n);
  }),
    "function" == typeof require &&
    "object" == typeof exports &&
    "object" == typeof module
      ? (module.exports = e)
      : "function" == typeof define && define.amd
      ? define(e)
      : (window.jsondiffpatch = e);
})();
var prx = window.prx || {};
(prx.project = {}),
  (prx.data = {}),
  (prx.pages = []),
  (prx.symbols = []),
  (prx.templates = []),
  (prx.maxPageId = 0),
  (prx.maxSymbolId = 0),
  (prx.iSelectedTemplate = -1),
  (prx.types = {}),
  (prx.devices = {}),
  (prx.components = {}),
  (prx.url = {}),
  (prx.scroller = {}),
  (prx.draggables = {}),
  (prx.eventTransitionPage = ""),
  (prx.editor = !1),
  (prx.shiftKeyDown = !1),
  (prx.statusbars = {}),
  (prx.navigationbars = {}),
  (prx.scrollableTabbars = []),
  (prx.triggerData = {});
var _scrollers = [],
  _previousPageId = "",
  _gobackstack = [];
(prx.fonts = []),
  (prx.actions = {}),
  (prx.actionIsRunning = {}),
  (prx.actionLoopCounter = {}),
  (prx.pagehash = !0),
  (prx.scrollPosition = {}),
  (prx.easingTransitToTweenMax = {
    linear: "Linear.easeNone",
    "Linear.easeNone": "Linear.easeNone",
    ease: "Quad.easeInOut",
    "Linear.ease": "Quad.easeInOut",
    "Quad.ease": "Quad.easeInOut",
    in: "Quad.easeIn",
    "Linear.easeIn": "Quad.easeIn",
    "Quad.easeIn": "Quad.easeIn",
    out: "Quad.easeOut",
    "Linear.easeOut": "Quad.easeOut",
    "Quad.easeOut": "Quad.easeOut",
    "in-out": "Quad.easeInOut",
    "Linear.easeInOut": "Quad.easeInOut",
    "Quad.easeInOut": "Quad.easeInOut",
    swing: "Quad.easeInOut",
    "Linear.easeInOut": "Quad.easeInOut",
    "Quad.easeInOut": "Quad.easeInOut",
    snap: "Strong.easeOut",
    "Strong.easeOut": "Strong.easeOut",
    "Cubic.easeIn": "Cubic.easeIn",
    "Cubic.easeOut": "Cubic.easeOut",
    "Cubic.easeInOut": "Cubic.easeInOut",
    "Quart.easeIn": "Quart.easeIn",
    "Quart.easeOut": "Quart.easeOut",
    "Quart.easeInOut": "Quart.easeInOut",
    "Quint.easeIn": "Quint.easeIn",
    "Quint.easeOut": "Quint.easeOut",
    "Quint.easeInOut": "Quint.easeInOut",
    "Circ.easeIn": "Circ.easeIn",
    "Circ.easeOut": "Circ.easeOut",
    "Circ.easeInOut": "Circ.easeInOut",
    "Back.easeIn": "Back.easeIn",
    "Back.easeOut": "Back.easeOut",
    "Back.easeInOut": "Back.easeInOut",
    "Bounce.easeIn": "Bounce.easeIn",
    "Bounce.easeOut": "Bounce.easeOut",
    "Bounce.easeInOut": "Bounce.easeInOut",
    "Elastic.easeIn": "Elastic.easeIn",
    "Elastic.easeOut": "Elastic.easeOut",
    "Elastic.easeInOut": "Elastic.easeInOut",
    "Expo.easeIn": "Expo.easeIn",
    "Expo.easeOut": "Expo.easeOut",
    "Expo.easeInOut": "Expo.easeInOut",
    "Sine.easeIn": "Sine.easeIn",
    "Sine.easeOut": "Sine.easeOut",
    "Sine.easeInOut": "Sine.easeInOut",
  }),
  (prx.easingTransitToTweenMaxReverse = {
    linear: "Linear.easeNone",
    "Linear.easeNone": "Linear.easeNone",
    ease: "Linear.easeInOut",
    "Linear.ease": "Linear.easeInOut",
    in: "Linear.easeOut",
    "Linear.easeIn": "Linear.easeOut",
    out: "Linear.easeIn",
    "Linear.easeOut": "Linear.easeIn",
    "in-out": "Linear.easeInOut",
    "Linear.easeInOut": "Linear.easeInOut",
    swing: "Linear.easeInOut",
    "Linear.easeInOut": "Linear.easeInOut",
    snap: "Strong.easeIn",
    "Strong.easeOut": "Strong.easeIn",
    "Quad.easeIn": "Quad.easeOut",
    "Quad.easeOut": "Quad.easeIn",
    "Quad.easeInOut": "Quad.easeInOut",
    "Quad.ease": "Quad.easeInOut",
    "Cubic.easeIn": "Cubic.easeOut",
    "Cubic.easeOut": "Cubic.easeIn",
    "Cubic.easeInOut": "Cubic.easeInOut",
    "Quart.easeIn": "Quart.easeOut",
    "Quart.easeOut": "Quart.easeIn",
    "Quart.easeInOut": "Quart.easeInOut",
    "Quint.easeIn": "Quint.easeOut",
    "Quint.easeOut": "Quint.easeIn",
    "Quint.easeInOut": "Quint.easeInOut",
    "Circ.easeIn": "Circ.easeOut",
    "Circ.easeOut": "Circ.easeIn",
    "Circ.easeInOut": "Circ.easeInOut",
    "Back.easeIn": "Back.easeOut",
    "Back.easeOut": "Back.easeIn",
    "Back.easeInOut": "Back.easeInOut",
    "Bounce.easeIn": "Bounce.easeOut",
    "Bounce.easeOut": "Bounce.easeIn",
    "Bounce.easeInOut": "Bounce.easeInOut",
    "Elastic.easeIn": "Elastic.easeOut",
    "Elastic.easeOut": "Elastic.easeIn",
    "Elastic.easeInOut": "Elastic.easeInOut",
    "Expo.easeIn": "Expo.easeOut",
    "Expo.easeOut": "Expo.easeIn",
    "Expo.easeInOut": "Expo.easeInOut",
    "Sine.easeIn": "Sine.easeOut",
    "Sine.easeOut": "Sine.easeIn",
    "Sine.easeInOut": "Sine.easeInOut",
  }),
  (prx.hammerDirToString = []),
  (prx.hammerDirToString[1] = "none"),
  (prx.hammerDirToString[2] = "left"),
  (prx.hammerDirToString[4] = "right"),
  (prx.hammerDirToString[8] = "up"),
  (prx.hammerDirToString[16] = "down"),
  (prx._actionTypes = [
    "actions",
    "actionbarUpCaretActions",
    "actionbarActionOverflowActions",
    "flipswitchActionsOnActive",
    "flipswitchActionsOnDeactive",
    "checkboxActionsOnActive",
    "checkboxActionsOnDeactive",
    "ios7NavbarActionsTitle",
    "ios7NavbarActionsLeftBtn",
    "ios7NavbarActionsRightBtn",
  ]),
  (prx.defaultAnimEngine = "Tweenmax"),
  (prx.greensockForce3D = !1),
  (prx.bFlashActions = !1),
  (prx.allItems = {}),
  (prx.stateTimelines = {}),
  (prx.stateChanges = {}),
  (prx.variables = {}),
  (prx.variablesRegEx = new RegExp("{[a-z][-a-z0-9._]*}", "gi")),
  (prx.activepage = "p-1"),
  (prx.orientation = "");
var log = function(e) {
    try {
      console.log(e);
    } catch (t) {}
    return !1;
  },
  lag = function(e) {
    try {
      console.log(e);
    } catch (t) {}
    return !1;
  },
  mlog = function(e) {
    return (
      $(document.body)
        .find("[data-role='page']")
        .remove(),
      $("#log").html(e),
      $("#log").show(),
      !1
    );
  };
(prx.getOrientation = function() {
  var e = document.documentElement,
    t = e && e.clientWidth / e.clientHeight < 1.1 ? "portrait" : "landscape";
  return t;
}),
  (prx.loadProject = function(e) {
    var t = e,
      i = new Date().getTime();
    $("#loader-wrapper")
      .show()
      .find("span")
      .text("0%"),
      "undefined" == typeof prx.xdata
        ? prx.spaces
          ? $.post(
              "/project/livepreview/loaddata/?x=" + i,
              { filename: prx.s3b },
              function(e) {
                prx.parseLoadedData(e), prx.loadProjectCont();
              }
            )
          : $.post(
              "/editor/data/loadpublished/?x=" + i,
              {
                filename: t,
                vup: prx.vup,
                v: prx.v,
                rl: prx.rl,
                s3b: prx.s3b,
                ron: prx.ron,
              },
              function(e) {
                prx.parseLoadedData(e), prx.loadProjectCont();
              }
            )
        : (prx.parseLoadedData(prx.xdata), prx.loadProjectCont()),
      $(window).bind("pagechange", function() {
        if ("undefined" != typeof prx.scroller) {
          var e = prx.activepage;
          $.each(prx.scroller, function(t, i) {
            t.substr(0, e.length) == e &&
              "undefined" != typeof prx.scrollPosition[t] &&
              i.scrollTo(prx.scrollPosition[t][0], prx.scrollPosition[t][1], 0);
          });
        }
      }),
      $(window).bind("orientationchange", function() {
        return (
          (prx.orientation = prx.getOrientation()),
          parent != window || prx.inProtoApp || prx.changeOrientation(),
          !0
        );
      }),
      $(window).resize(function() {
        prx.checkOrientationChange();
      }),
      $(document).on("focusout", ":input", function() {
        window.scrollTo(0, 0);
      }),
      $(window).bind("hashchange", function() {
        "" != window.location.hash &&
        window.location.hash != "#" + prx.activepage.replace("p-", "")
          ? prx.changePage($("#p-" + window.location.hash.replace("#", "")), {
              changeHash: !1,
              allowSamePageTransition: !1,
            })
          : "" == window.location.hash &&
            (prx.iniStartScreen(), $("#loader-wrapper").hide());
      }),
      prx.setupFlashActions();
  }),
  (prx.loadProjectCont = function() {
    if (
      ((prx.orientation =
        window.innerWidth > window.innerHeight ? "landscape" : "portrait"),
      "undefined" != typeof prx.project.background &&
        $("body").css("background-color", prx.project.background),
      prx.iniStartScreen(),
      !parent != window)
    )
      try {
        var e = {
          pages: $.evalJSON($.toJSON(prx.pages)),
          startscreen: prx.activepage.replace("p-", ""),
        };
        "undefined" != typeof prx.sort && (e.sort = prx.sort.pages),
          parent.prx.iniPlayerReady(e);
      } catch (t) {}
    for (var i = 0; i < prx.scrollableTabbars.length; i++)
      prx.iniScrollableTabbar(i);
  }),
  (prx.iniScrollableTabbar = function(e) {
    var t =
        prx.scrollableTabbars[e].container +
        "-" +
        prx.scrollableTabbars[e].id +
        "-inner",
      i =
        prx.scrollableTabbars[e].container +
        "-" +
        prx.scrollableTabbars[e].linked +
        "-inner";
    "undefined" != typeof prx.scroller[t] &&
      (prx.scroller[t].destroy(), (prx.scroller[t] = null)),
      (prx.scroller[t] = new IScroll("#" + t, {
        scrollX: !0,
        scrollY: !1,
        probeType: 3,
        scrollbars: !1,
        useTransition: !0,
        momentum: !1,
        snap: "li",
        linkedContainer: i,
        twoWayScroll: !0,
      })),
      $(prx.scroller[t].wrapper).on("mouseup touchend", function() {
        "undefined" !=
          typeof prx.scroller[prx.scroller[t].options.linkedContainer] &&
          prx.scroller[prx.scroller[this.id].options.linkedContainer].goToPage(
            prx.scroller[this.id].currentPage.pageX,
            0,
            200
          );
      }),
      prx.scroller[t].on("scroll", function() {
        "undefined" != typeof prx.scroller[this.options.linkedContainer] &&
          prx.scroller[this.options.linkedContainer].scrollTo(
            2 * this.x,
            0,
            0,
            !1
          );
      }),
      prx.scroller[t].goToPage(Number(prx.scrollableTabbars[e].start), 0, 0);
  }),
  (prx.parseLoadedData = function(e) {
    var t = $.evalJSON(e);
    (prx.project = t.project),
      (prx.data = t.data),
      (prx.pages = t.pages),
      (prx.symbols = t.symbols),
      (prx.templates = t.templates),
      (prx.maxPageId = parseInt(t.maxpageid)),
      (prx.maxSymbolId = parseInt(t.maxsymbolid)),
      (prx.maxTemplateId = parseInt(t.maxtemplateid)),
      (prx.iSelectedTemplate = parseInt(t.iSelectedTemplate)),
      (prx.variables = t.variables),
      prx.prepareVariables(),
      "undefined" != typeof t.fonts && (prx.fonts = t.fonts),
      prx.loadProjectFonts(),
      "undefined" != typeof t.sort && (prx.sort = t.sort);
    for (var i = 0; i < prx.pages.length; i++)
      "undefined" == typeof prx.pages[i].id
        ? prx.pages.splice(i, 1)
        : (prx.pages[i].id = parseInt(prx.pages[i].id));
    for (var i = 0; i < prx.symbols.length; i++)
      "undefined" == typeof prx.symbols[i].id
        ? prx.symbols.splice(i, 1)
        : (prx.symbols[i].id = parseInt(prx.symbols[i].id));
    for (var i = 0; i < prx.templates.length; i++)
      "undefined" == typeof prx.templates[i].id
        ? prx.templates.splice(i, 1)
        : (prx.templates[i].id = parseInt(prx.templates[i].id));
    "undefined" != typeof t.v5 && t.v5
      ? (prx.v5 = t.v5)
      : prx.v5BackwardsCompatibility();
    var n = prx.getOrientation();
    "portrait" != n &&
      "undefined" == typeof prx.project.startscreenlandscape &&
      (prx.project.startscreenlandscape = 1),
      (t = null),
      prx.refreshPanel(),
      prx.buildAllItemsStruct();
  }),
  (prx.buildAllItemsStruct = function() {
    for (var e = 0; e < prx.pages.length; e++)
      for (var t = 0; t < prx.pages[e].states.length; t++)
        for (
          var i = $.evalJSON(prx.pages[e].states[t].data), n = 0;
          n < i.length;
          n++
        )
          "undefined" == typeof prx.allItems[i[n].id] &&
            (prx.allItems[i[n].id] = {
              containertype: "pages",
              containerindex: e,
              states: {},
            }),
            (prx.allItems[i[n].id].states[prx.pages[e].states[t].id] = {
              stateindex: t,
              itemindex: n,
            });
    for (var e = 0; e < prx.templates.length; e++)
      for (var t = 0; t < prx.templates[e].states.length; t++)
        for (
          var i = $.evalJSON(prx.templates[e].states[t].data), n = 0;
          n < i.length;
          n++
        )
          "undefined" == typeof prx.allItems[i[n].id] &&
            (prx.allItems[i[n].id] = {
              containertype: "templates",
              containerindex: e,
              states: {},
            }),
            (prx.allItems[i[n].id].states[prx.templates[e].states[t].id] = {
              stateindex: t,
              itemindex: n,
            });
    for (var e = 0; e < prx.symbols.length; e++)
      for (var t = 0; t < prx.symbols[e].states.length; t++)
        for (
          var i = $.evalJSON(prx.symbols[e].states[t].data), n = 0;
          n < i.length;
          n++
        )
          "undefined" == typeof prx.allItems[i[n].id] &&
            (prx.allItems[i[n].id] = {
              containertype: "symbols",
              containerindex: e,
              states: {},
            }),
            (prx.allItems[i[n].id].states[prx.symbols[e].states[t].id] = {
              stateindex: t,
              itemindex: n,
            });
  }),
  (prx.prepareVariables = function() {
    for (var e in prx.variables)
      prx.variables.hasOwnProperty(e) &&
        ("undefined" == typeof prx.variables[e].type &&
          (prx.variables[e].type = "text"),
        "undefined" == typeof prx.variables[e].value &&
          (prx.variables[e].value = ""),
        "undefined" == typeof prx.variables[e].evaluate &&
          (prx.variables[e].evaluate = !0));
  }),
  (prx.variablesParamExists = function(e) {
    try {
      return e.search(prx.variablesRegEx) > -1 ? !0 : !1;
    } catch (t) {
      return !1;
    }
  }),
  (prx.removeFirstLast = function(e) {
    return e.substring(1, e.length - 1);
  }),
  (prx.readVariable = function(e) {
    return "undefined" != typeof prx.variables[e]
      ? ("undefined" == typeof prx.variables[e].parsed &&
          prx.recursiveEvaluation(prx.variables[e].value, e),
        prx.variables[e].parsed)
      : !1;
  }),
  (prx.recursiveEvaluation = function(value, key, update) {
    if (update)
      key.length > 0 &&
        "undefined" != typeof prx.variables[key] &&
        "undefined" != typeof prx.variables[key].parsed &&
        delete prx.variables[key].parsed;
    else if (
      ((update = !1),
      key.length > 0 &&
        "undefined" != typeof prx.variables[key] &&
        "undefined" != typeof prx.variables[key].parsed)
    )
      return prx.variables[key].parsed;
    if (prx.variablesParamExists(value)) {
      var _matches = value.match(prx.variablesRegEx);
      if (null != _matches)
        for (var i = 0; i < _matches.length; i++) {
          var _toReplace = _matches[i],
            _key = prx.removeFirstLast(_matches[i]);
          if (key != _key || prx.variables[key].value != key)
            try {
              value = value.replace(
                _toReplace,
                prx.recursiveEvaluation(prx.variables[_key].value, _key, update)
              );
            } catch (err) {
              value = value.replace(_toReplace, "");
            }
          else value = value.replace(_toReplace, "");
        }
    } else if (
      "undefined" != typeof key &&
      "undefined" != typeof prx.variables[key] &&
      prx.variables[key].evaluate
    )
      try {
        value = eval(value);
      } catch (e) {}
    if (
      ("undefined" != typeof _key &&
        "undefined" != typeof prx.variables[key] &&
        prx.variables[key].evaluate &&
        (value = eval(value)),
      key.length > 0 &&
        "undefined" != typeof prx.variables[key] &&
        (prx.variables[key].parsed = value),
      key.length > 0 && "undefined" != typeof prx.variables[key])
    )
      switch (prx.variables[key].type) {
        case "text":
          break;
        case "numeric":
          value = parseFloat(value);
          break;
        case "boolean":
          value = value ? !0 : !1;
      }
    return value;
  }),
  (prx.showGoFullScreenMessage = function() {
    "standalone" in window.navigator &&
      !window.navigator.standalone &&
      ($(document.body)
        .find("[data-role='page']")
        .remove(),
      $("#appModeNote").show());
  }),
  (prx.getPageIndexFromElementId = function(e) {
    return "#" == e.substring(0, 1) ? e.substring(3) : e.substring(2);
  }),
  (prx.getPageIndexFromId = function(e) {
    for (var t = -1, i = 0; i < prx.pages.length; i++)
      prx.pages[i].id == e && (t = i);
    return t;
  }),
  (prx.getTemplateIndexFromId = function(e) {
    for (var t = -1, i = 0; i < prx.templates.length; i++)
      prx.templates[i].id == e && (t = i);
    return t;
  }),
  (prx.getSymbolIndexFromId = function(e) {
    for (var t = -1, i = 0; i < prx.symbols.length; i++)
      prx.symbols[i].id == e && (t = i);
    return t;
  }),
  (prx.getPageStructFromId = function(e) {
    var t = prx.getPageIndexFromElementId(e);
    return prx.pages[prx.getPageIndexFromId(t)];
  }),
  (prx.refreshPanel = function() {
    if (prx.inProtoApp) {
      var e = {
        name: "image",
        type: "image",
        lib: "common",
        caption: "Image",
        imgSrc: { fileId: "", folderId: "", url: "", assetType: "", name: "" },
        repeat: !1,
        width: "1",
        height: "1",
        top: "-100",
        left: "-100",
        propagateEvents: !1,
        actions: [],
        overlay: !0,
        autoResize: !0,
        id: "tempimageitem",
      };
      prx.addItem(prx.pages[0].id, e);
    }
    var t = $("#loader-wrapper").show();
    prx.preLoadPages(), t.find("span").text("0%");
    var i = $('[data-role=page] img:not([src=""])').not(
        "#p-" + prx.pages[0].id + "-tempimageitem"
      ).length,
      n = 0;
    0 == i && t.hide(),
      $('[data-role=page] img:not([src=""])').bind("load error", function() {
        n++,
          t.find("span").text(Math.round((100 * n) / i) + "%"),
          n == i && t.hide();
      }),
      setTimeout(function() {
        t.hide(), $('[data-role=page] img:not([src=""])').unbind("load error");
      }, 1e4);
  }),
  (prx.preLoadPages = function() {
    $.each(prx.pages, function(e, t) {
      prx.preLoadPage(t);
    });
  }),
  (prx.loadPageEvents = function(e) {
    var t = "";
    $.each(prx.pages, function(i, n) {
      if (n.id == e) {
        (t = n.id),
          $("#p-" + e)
            .unbind("pagebeforeshow")
            .bind("pagebeforeshow", function() {
              if (prx.allowstatusbar && "1" == prx.statusbars[n.id].statusbar) {
                try {
                  "1" != prx.export2html
                    ? $("#statusbar").css({
                        "background-image": prx.buildStatusBarAsset(
                          prx.statusbars[n.id].orientation
                        ),
                      })
                    : prx.buildStatusBarExported(
                        prx.statusbars[n.id].orientation
                      ),
                    $("#statusbar").css(
                      "height",
                      prx.devices[prx.device][
                        "statusbarheight" + prx.statusbars[n.id].orientation
                      ] + "px"
                    );
                } catch (e) {}
                $("#p-" + n.id).css(
                  "top",
                  prx.devices[prx.device][
                    "statusbarheight" + prx.statusbars[n.id].orientation
                  ] + "px"
                );
              } else $("#statusbar").css("height", "0px");
              if (
                prx.allownavigationbar &&
                "1" == prx.navigationbars[n.id].navigationbar
              )
                try {
                  "1" != prx.export2html
                    ? $("#navigationbar").css({
                        "background-image": prx.buildNavigationBarAsset(
                          prx.navigationbars[n.id].orientation
                        ),
                      })
                    : "1" == prx.navigationbarapplies
                    ? $("#navigationbar").css(
                        "background-image",
                        "url(./images/navigationbar_" +
                          prx.statusbars[n.id].orientation +
                          ".png)"
                      )
                    : $("#statusbar").css("background-image", "none"),
                    $("#navigationbar").css(
                      "height",
                      prx.devices[prx.device][
                        "navigationbarheight" +
                          prx.navigationbars[n.id].orientation
                      ] + "px"
                    ),
                    $("#navigationbar").css(
                      "top",
                      prx.devices[prx.device][
                        prx.navigationbars[n.id].orientation
                      ][1] -
                        prx.devices[prx.device][
                          "navigationbarheight" +
                            prx.navigationbars[n.id].orientation
                        ] +
                        "px"
                    );
                } catch (e) {}
              else $("#navigationbar").css("height", "0px");
              $("#p-" + n.id + ' .box [data-linked-screen="' + n.id + '"]')
                .find("input")
                .attr("checked", "checked");
            }),
          $("#p-" + e).bind("pagebeforehide", function() {
            prx.renderOverlay("#p-" + e);
            var t = $("#p-" + e).offset().left,
              i = $("#p-" + e).offset().top,
              r = 0;
            if (
              (prx.allowstatusbar &&
                "1" == prx.statusbars[n.id].statusbar &&
                ((i -=
                  prx.devices[prx.device][
                    "statusbarheight" + prx.statusbars[n.id].orientation
                  ]),
                (r =
                  prx.devices[prx.device][
                    "statusbarheight" + prx.statusbars[n.id].orientation
                  ])),
              0 != t || 0 != i)
            ) {
              var o = [];
              $("#p-" + e)
                .find('[data-mpoverlay="1"]')
                .each(function() {
                  o[this.id] = {
                    top:
                      $(this).offset().top -
                      ($(this)
                        .parent()
                        .offset().top -
                        $(this)
                          .parents(".prx-page")
                          .offset().top) -
                      r +
                      "px",
                    left:
                      $(this).offset().left -
                      ($(this)
                        .parent()
                        .offset().left -
                        $(this)
                          .parents(".prx-page")
                          .offset().left) +
                      "px",
                  };
                }),
                $("#p-" + e).one("pagehide", function() {
                  $(this)
                    .find('[data-mpoverlay="1"]')
                    .each(function() {
                      $(this).css(o[this.id]);
                    });
                });
            }
          }),
          $("#p-" + e).bind("pagehide", function() {
            $(this)
              .find(
                ".type-list input, .type-list-retina input, .type-android-listbasic input"
              )
              .not(".listitem-type-checkbox input")
              .removeAttr("checked");
          }),
          prx.parsePageAction(i);
        for (var r = 0; r < n.states.length; r++)
          prx.parsePageStateAction(i, r);
        prx.loadItemEvents(n, "page", e, "");
      }
    });
  }),
  (prx.renderOverlay = function(e) {
    var t = e,
      i = prx.statusbars[e.substr(3)],
      n = 0,
      r = prx.devices[prx.device][i.orientation][1];
    prx.allowstatusbar &&
      "1" == i.statusbar &&
      ((n = prx.devices[prx.device]["statusbarheight" + i.orientation]),
      (r -= n)),
      ($overlay = $("#overlay")),
      $(t)
        .find('[data-mpoverlay="1"]')
        .each(function() {
          var e = $(this).offset().top - n,
            t = $(this).offset().left;
          $(this)
            .clone()
            .css({ top: e + "px", left: t + "px" })
            .find("input")
            .attr("id", function() {
              return $(this).attr("id") + "-overlay";
            })
            .attr("name", function() {
              return $(this).attr("name") + "-overlay";
            })
            .end()
            .find("label")
            .attr("for", function() {
              return $(this).attr("for") + "-overlay";
            })
            .end()
            .appendTo($overlay);
        }),
      $overlay
        .css("top", n + "px")
        .height(r)
        .show();
  }),
  (prx.loadTemplateEvents = function(e, t, i) {
    var n = prx.getTemplateIndexFromId(e.id),
      r = prx.getTemplateStateIndexFromId(e.stateid, n);
    if (-1 == n || -1 == r) return !1;
    for (var o = 0; o < prx.templates[n].states.length; o++)
      prx.parseTemplateStateAction(n, o, t, i);
    n > -1 &&
      r > -1 &&
      prx.loadItemEvents(prx.templates[n].states[r], "template", t, e.id, i);
  }),
  (prx.loadSymbolEvents = function(e, t, i, n) {
    return (
      $.each(prx.symbols, function(r, o) {
        o.id == e && prx.loadItemEvents(o, "symbol", t, i, n);
      }),
      !1
    );
  }),
  (prx.loadItemEvents = function(e, t, i, n, r) {
    var o = "",
      a = "";
    "page" == t && ((o = $.evalJSON(e.states[0].data)), (a = "p-" + i)),
      "template" == t &&
        ((o = $.evalJSON(e.data)),
        (a = "p-" + i),
        "undefined" != typeof r && "" != r && (a += "-" + r)),
      "symbol" == t &&
        ((o = $.evalJSON(e.states[0].data)), (a = "p-" + i + "-" + r + "-")),
      $.each(o, function(e, t) {
        prx.parseItemAction(t, a, i, n);
      });
  }),
  (prx.recursivelyAddActionInfo = function(e, t, i, n, r) {
    return (
      "undefined" == typeof r && (r = ".protoio-actions"),
      (e.namespace =
        ("undefined" == typeof e.namespace ? "" : e.namespace) + r),
      (e.bindTo = t),
      (e.targetId = -1 == e.itemId ? "#" + n.slice(0, -1) : "#" + n + e.itemId),
      (e.containerid = i),
      ("undefined" == typeof e.delay || 0 == e.delay) && (e.delay = 10),
      "undefined" != typeof e.callbackAction &&
        (e.callbackAction = prx.recursivelyAddActionInfo(
          e.callbackAction,
          t,
          i,
          n,
          r
        )),
      e
    );
  }),
  (prx.parseItemAction = function(e, t, i, n, r) {
    var o = "";
    if ("undefined" != typeof e._fromstateid) return !0;
    switch (
      ("undefined" == typeof r && (r = !1),
      "undefined" != typeof t
        ? ("undefined" != typeof n && "" != n && (t = t + "-" + "t" + n),
          (_id = t + "-" + e.id),
          (o = t + "-"))
        : ((_id = e.id), (o = "")),
      "undefined" != typeof e.actions &&
        e.actions.length > 0 &&
        e.actions.sort(function(e, t) {
          return e.sort - t.sort;
        }),
      e.type)
    ) {
      case "listbasic":
      case "listnested":
      case "listwithicon":
      case "listwithvalue":
      case "listnestedwithvalue":
      case "listwithiconandvalue":
      case "listwithbadge":
      case "listnestedwithbadge":
      case "listwithiconandbadge":
      case "listcomplex":
      case "listbasic_retina":
      case "listnested_retina":
      case "listwithicon_retina":
      case "listwithvalue_retina":
      case "listnestedwithvalue_retina":
      case "listwithiconandvalue_retina":
      case "listwithbadge_retina":
      case "listnestedwithbadge_retina":
      case "listwithiconandbadge_retina":
      case "listcomplex_retina":
      case "ios7_listbasic":
      case "ios7_listnested":
      case "ios7_listwithicon":
      case "ios7_listwithvalue":
      case "ios7_listnestedwithvalue":
      case "ios7_listwithiconandvalue":
      case "ios7_listwithbadge":
      case "ios7_listnestedwithbadge":
      case "ios7_listwithiconandbadge":
      case "ios7_listradio":
      case "ios7_listcheckbox":
      case "ios7_listcomplex":
      case "android_listbasic":
        "undefined" == typeof e.listitems && (e.listitems = []),
          $.each(e.listitems, function(e, i) {
            if ("undefined" == typeof i) return !0;
            if ("undefined" != typeof i.actions) {
              $(
                "#" + _id + "-listitems-" + e + " > .action-highlight"
              ).remove();
              var n = "#" + _id + "-listitems-" + e;
              $(n).unbind(".protoio-actions"),
                0 != i.actions.length &&
                  ($("#" + _id + "-listitems-" + e).append(
                    "<div class='action-highlight'></div>"
                  ),
                  i.actions.sort(function(e, t) {
                    return e.sort - t.sort;
                  }),
                  $.each(i.actions, function(i, a) {
                    (a = prx.recursivelyAddActionInfo(a, n, t, o)),
                      prx.buildAction(a, r),
                      ("undefined" == typeof a.enabled || a.enabled) &&
                        $(
                          "#" + _id + "-listitems-" + e + " .action-highlight"
                        ).append(
                          '<span class="actionicon action-' +
                            a.type +
                            '" title="' +
                            a.type +
                            ": " +
                            a.title +
                            '"></span>'
                        );
                  }));
            }
          });
        break;
      case "buttongroup":
      case "pagecontroller":
      case "buttongroup_retina":
      case "pagecontroller_retina":
      case "actionsheet":
      case "actionsheet_retina":
      case "ios7_actionsheet":
      case "alert":
      case "alert_retina":
      case "ios7_alert":
      case "metro_appbar":
      case "metro_appbar_mini":
      case "metro_charms":
      case "metro_filters":
      case "metro_contextmenu":
      case "metro_dropdown":
      case "metro_dropdown_withselection":
      case "metro_select":
      case "metro_dialog":
      case "metro_warningbar":
      case "ios7_toolbar":
      case "ios7_segmentedcontrol":
      case "ios7_pagecontroller":
      case "ios7_control_popover":
        "undefined" == typeof e.buttons && (e.buttons = []),
          $.each(e.buttons, function(e, i) {
            if ("undefined" == typeof i) return !0;
            if ("undefined" != typeof i.actions) {
              $("#" + _id + "-buttons-" + e + " > .action-highlight").remove();
              var n = "#" + _id + "-buttons-" + e;
              $(n).unbind(".protoio-actions"),
                0 != i.actions.length &&
                  ($("#" + _id + "-buttons-" + e).append(
                    "<div class='action-highlight'></div>"
                  ),
                  i.actions.sort(function(e, t) {
                    return e.sort - t.sort;
                  }),
                  $.each(i.actions, function(i, a) {
                    (a = prx.recursivelyAddActionInfo(a, n, t, o)),
                      prx.buildAction(a, r),
                      ("undefined" == typeof a.enabled || a.enabled) &&
                        $(
                          "#" + _id + "-buttons-" + e + " .action-highlight"
                        ).append(
                          '<span class="actionicon action-' +
                            a.type +
                            '" title="' +
                            a.type +
                            ": " +
                            a.title +
                            '"></span>'
                        );
                  }));
            }
          });
        break;
      case "segmentedcontrol":
      case "segmentedcontrol_retina":
      case "android_dropdown":
        "undefined" == typeof e.options && (e.options = []),
          $.each(e.options, function(e, i) {
            if ("undefined" == typeof i) return !0;
            if ("undefined" != typeof i.actions) {
              $("#" + _id + "-options-" + e + " > .action-highlight").remove();
              var n = "#" + _id + "-options-" + e;
              $(n).unbind(".protoio-actions"),
                0 != i.actions.length &&
                  ($("#" + _id + "-options-" + e + " label").append(
                    "<div class='action-highlight'></div>"
                  ),
                  i.actions.sort(function(e, t) {
                    return e.sort - t.sort;
                  }),
                  $.each(i.actions, function(i, a) {
                    (a = prx.recursivelyAddActionInfo(a, n, t, o)),
                      prx.buildAction(a, r),
                      ("undefined" == typeof a.enabled || a.enabled) &&
                        $(
                          "#" + _id + "-options-" + e + " .action-highlight"
                        ).append(
                          '<span class="actionicon action-' +
                            a.type +
                            '" title="' +
                            a.type +
                            ": " +
                            a.title +
                            '"></span>'
                        );
                  }));
            }
          });
        break;
      case "tabbar":
      case "tabbar_retina":
      case "basic_tabbar":
      case "android_fixedtabbar":
      case "ios7_tabbar":
        "undefined" == typeof e.tabs && (e.tabs = []),
          $.each(e.tabs, function(e, i) {
            if ("undefined" == typeof i) return !0;
            if ("undefined" != typeof i.actions) {
              $("#" + _id + "-tabs-" + e + " > .action-highlight").remove();
              var n = "#" + _id + "-tabs-" + e;
              $(n).unbind(".protoio-actions"),
                0 != i.actions.length &&
                  ($("#" + _id + "-tabs-" + e).append(
                    "<div class='action-highlight'></div>"
                  ),
                  i.actions.sort(function(e, t) {
                    return e.sort - t.sort;
                  }),
                  $.each(i.actions, function(i, a) {
                    (a = prx.recursivelyAddActionInfo(a, n, t, o)),
                      prx.buildAction(a, r),
                      ("undefined" == typeof a.enabled || a.enabled) &&
                        $(
                          "#" + _id + "-tabs-" + e + " .action-highlight"
                        ).append(
                          '<span class="actionicon action-' +
                            a.type +
                            '" title="' +
                            a.type +
                            ": " +
                            a.title +
                            '"></span>'
                        );
                  }));
            }
          });
        break;
      case "flipswitch":
      case "flipswitch_retina":
      case "flipswitch_ios5":
      case "flipswitch_ios5_retina":
      case "android_onoffswitch":
      case "metro_onoff":
      case "ios7_switch":
        "undefined" == typeof e.flipswitchActionsOnActive &&
          "undefined" != typeof e.actionsOnActive &&
          (e.flipswitchActionsOnActive = e.actionsOnActive),
          "undefined" == typeof e.flipswitchActionsOnDeactive &&
            "undefined" != typeof e.actionsOnDeactive &&
            (e.flipswitchActionsOnDeactive = e.actionsOnDeactive),
          $("#" + _id + " > .action-highlight").remove(),
          (("undefined" != typeof e.flipswitchActionsOnActive &&
            0 != e.flipswitchActionsOnActive.length) ||
            ("undefined" != typeof e.flipswitchActionsOnDeactive &&
              0 != e.flipswitchActionsOnDeactive.length)) &&
            $("#" + _id).append("<div class='action-highlight'></div>"),
          "undefined" != typeof e.flipswitchActionsOnActive &&
            (e.flipswitchActionsOnActive.sort(function(e, t) {
              return e.sort - t.sort;
            }),
            $.each(e.flipswitchActionsOnActive, function(e, i) {
              ("click" == i.type || "tap" == i.type) && (i.type = "change"),
                (i.live = !0),
                (i = prx.recursivelyAddActionInfo(
                  i,
                  "input:checked[id=" + _id + "-flipswitch]",
                  t,
                  o,
                  ".protoio-flipswitchActionsOnActive"
                )),
                prx.buildAction(i, r),
                ("undefined" == typeof i.enabled || i.enabled) &&
                  $("#" + _id + " .action-highlight").append(
                    '<span class="actionicon action-' +
                      i.type +
                      '" title="' +
                      i.type +
                      ": " +
                      i.title +
                      '"></span>'
                  );
            })),
          "undefined" != typeof e.flipswitchActionsOnDeactive &&
            (e.flipswitchActionsOnDeactive.sort(function(e, t) {
              return e.sort - t.sort;
            }),
            $.each(e.flipswitchActionsOnDeactive, function(e, i) {
              ("click" == i.type || "tap" == i.type) && (i.type = "change"),
                (i.live = !0),
                (i = prx.recursivelyAddActionInfo(
                  i,
                  "input[id=" + _id + "-flipswitch]:not(:checked)",
                  t,
                  o,
                  ".protoio-flipswitchActionsOnDeactive"
                )),
                prx.buildAction(i, r),
                ("undefined" == typeof i.enabled || i.enabled) &&
                  $("#" + _id + " .action-highlight").append(
                    '<span class="actionicon action-' +
                      i.type +
                      '" title="' +
                      i.type +
                      ": " +
                      i.title +
                      '"></span>'
                  );
            }));
        break;
      case "checkbox":
      case "checkbox_retina":
      case "radiobutton":
      case "radiobutton_retina":
      case "android_checkbox":
      case "android_radiobutton":
      case "metro_checkbox":
      case "metro_radiobutton":
      case "ios7_checkbox":
        $("#" + _id + " > .action-highlight").remove(),
          (("undefined" != typeof e.checkboxActionsOnActive &&
            0 != e.checkboxActionsOnActive.length) ||
            ("undefined" != typeof e.checkboxActionsOnDeactive &&
              0 != e.checkboxActionsOnDeactive.length)) &&
            $("#" + _id).append("<div class='action-highlight'></div>"),
          "undefined" != typeof e.checkboxActionsOnActive &&
            (e.checkboxActionsOnActive.sort(function(e, t) {
              return e.sort - t.sort;
            }),
            $.each(e.checkboxActionsOnActive, function(e, i) {
              ("click" == i.type || "tap" == i.type) && (i.type = "change"),
                (i = prx.recursivelyAddActionInfo(
                  i,
                  "input:checked[id=" + _id + "-checkbox]",
                  t,
                  o,
                  ".protoio-checkboxActionsOnActive"
                )),
                (i.live = !0),
                prx.buildAction(i, r),
                ("undefined" == typeof i.enabled || i.enabled) &&
                  $("#" + _id + " .action-highlight").append(
                    '<span class="actionicon action-' +
                      i.type +
                      '" title="' +
                      i.type +
                      ": " +
                      i.title +
                      '"></span>'
                  );
            })),
          "undefined" != typeof e.checkboxActionsOnDeactive &&
            (e.checkboxActionsOnDeactive.sort(function(e, t) {
              return e.sort - t.sort;
            }),
            $.each(e.checkboxActionsOnDeactive, function(e, i) {
              ("click" == i.type || "tap" == i.type) && (i.type = "change"),
                (i = prx.recursivelyAddActionInfo(
                  i,
                  "input[id=" + _id + "-checkbox]:not(:checked)",
                  t,
                  o,
                  ".protoio-checkboxActionsOnDeactive"
                )),
                (i.live = !0),
                prx.buildAction(i, r),
                ("undefined" == typeof i.enabled || i.enabled) &&
                  $("#" + _id + " .action-highlight").append(
                    '<span class="actionicon action-' +
                      i.type +
                      '" title="' +
                      i.type +
                      ": " +
                      i.title +
                      '"></span>'
                  );
            }));
        break;
      case "android_actionbar":
      case "android_actionbar_contextual":
        if (
          ("undefined" == typeof e.actionbarActionOverflowActions &&
            "undefined" != typeof e.actions &&
            (e.actionbarActionOverflowActions = e.actions),
          "undefined" != typeof e.actionbarActionOverflowActions)
        ) {
          $("#" + _id + " .actionOverflow .action-highlight").remove();
          var a = "#" + _id + " .actionOverflow";
          $(a).unbind(".protoio-actionbarActionOverflowActions"),
            0 != e.actionbarActionOverflowActions.length &&
              ($("#" + _id + " .actionOverflow").append(
                "<div class='action-highlight'></div>"
              ),
              e.actionbarActionOverflowActions.sort(function(e, t) {
                return e.sort - t.sort;
              }),
              $.each(e.actionbarActionOverflowActions, function(e, i) {
                (i = prx.recursivelyAddActionInfo(
                  i,
                  a,
                  t,
                  o,
                  ".protoio-actionbarActionOverflowActions"
                )),
                  prx.buildAction(i, r),
                  ("undefined" == typeof i.enabled || i.enabled) &&
                    $("#" + _id + " .action-highlight").append(
                      '<span class="actionicon action-' +
                        i.type +
                        '" title="' +
                        i.type +
                        ": " +
                        i.title +
                        '"></span>'
                    );
              }));
        }
        if ("undefined" != typeof e.actionbarUpCaretActions) {
          $("#" + _id + " .left-icon .action-highlight").remove();
          var a = "#" + _id + " .left-icon";
          $(a).unbind(".protoio-actionbarUpCaretActions"),
            0 != e.actionbarUpCaretActions.length &&
              ($("#" + _id + " .left-icon").append(
                "<div class='action-highlight'></div>"
              ),
              e.actionbarUpCaretActions.sort(function(e, t) {
                return e.sort - t.sort;
              }),
              $.each(e.actionbarUpCaretActions, function(e, i) {
                (i = prx.recursivelyAddActionInfo(
                  i,
                  a,
                  t,
                  o,
                  ".protoio-actionbarUpCaretActions"
                )),
                  prx.buildAction(i, r),
                  ("undefined" == typeof i.enabled || i.enabled) &&
                    $("#" + _id + " .action-highlight").append(
                      '<span class="actionicon action-' +
                        i.type +
                        '" title="' +
                        i.type +
                        ": " +
                        i.title +
                        '"></span>'
                    );
              }));
        }
        break;
      case "ios7_navbar_buttons":
        if ("undefined" != typeof e.ios7NavbarActionsTitle) {
          $("#" + _id + " .ios7-navbar-title .action-highlight").remove();
          var a = "#" + _id + " .ios7-navbar-title";
          $(a).unbind(".protoio-ios7NavbarActionsTitle"),
            0 != e.ios7NavbarActionsTitle.length &&
              ($("#" + _id + " .ios7-navbar-title").append(
                "<div class='action-highlight'></div>"
              ),
              e.ios7NavbarActionsTitle.sort(function(e, t) {
                return e.sort - t.sort;
              }),
              $.each(e.ios7NavbarActionsTitle, function(e, i) {
                (i = prx.recursivelyAddActionInfo(
                  i,
                  a,
                  t,
                  o,
                  ".protoio-ios7NavbarActionsTitle"
                )),
                  prx.buildAction(i, r),
                  ("undefined" == typeof i.enabled || i.enabled) &&
                    $(
                      "#" + _id + " .ios7-navbar-title .action-highlight"
                    ).append(
                      '<span class="actionicon action-' +
                        i.type +
                        '" title="' +
                        i.type +
                        ": " +
                        i.title +
                        '"></span>'
                    );
              }));
        }
        if ("undefined" != typeof e.ios7NavbarActionsLeftBtn) {
          $("#" + _id + " .ios7-navbar-button-left .action-highlight").remove();
          var a = "#" + _id + " .ios7-navbar-button-left";
          $(a).unbind(".protoio-ios7NavbarActionsLeftBtn"),
            0 != e.ios7NavbarActionsLeftBtn.length &&
              ($("#" + _id + " .ios7-navbar-button-left").append(
                "<div class='action-highlight'></div>"
              ),
              e.ios7NavbarActionsLeftBtn.sort(function(e, t) {
                return e.sort - t.sort;
              }),
              $.each(e.ios7NavbarActionsLeftBtn, function(e, i) {
                (i = prx.recursivelyAddActionInfo(
                  i,
                  a,
                  t,
                  o,
                  ".protoio-ios7NavbarActionsLeftBtn"
                )),
                  prx.buildAction(i, r),
                  ("undefined" == typeof i.enabled || i.enabled) &&
                    $(
                      "#" + _id + " .ios7-navbar-button-left .action-highlight"
                    ).append(
                      '<span class="actionicon action-' +
                        i.type +
                        '" title="' +
                        i.type +
                        ": " +
                        i.title +
                        '"></span>'
                    );
              }));
        }
        if ("undefined" != typeof e.ios7NavbarActionsRightBtn) {
          $(
            "#" + _id + " .ios7-navbar-button-right .action-highlight"
          ).remove();
          var a = "#" + _id + " .ios7-navbar-button-right";
          $(a).unbind(".protoio-ios7NavbarActionsRightBtn"),
            0 != e.ios7NavbarActionsRightBtn.length &&
              ($("#" + _id + " .ios7-navbar-button-right").append(
                "<div class='action-highlight'></div>"
              ),
              e.ios7NavbarActionsRightBtn.sort(function(e, t) {
                return e.sort - t.sort;
              }),
              $.each(e.ios7NavbarActionsRightBtn, function(e, i) {
                (i = prx.recursivelyAddActionInfo(
                  i,
                  a,
                  t,
                  o,
                  ".protoio-ios7NavbarActionsRightBtn"
                )),
                  prx.buildAction(i, r),
                  ("undefined" == typeof i.enabled || i.enabled) &&
                    $(
                      "#" + _id + " .ios7-navbar-button-right .action-highlight"
                    ).append(
                      '<span class="actionicon action-' +
                        i.type +
                        '" title="' +
                        i.type +
                        ": " +
                        i.title +
                        '"></span>'
                    );
              }));
        }
        break;
      case "symbol":
        if ("undefined" != typeof e.actions) {
          $("#" + _id + " > .action-highlight").remove();
          var a = "#" + _id;
          $(a).unbind(".protoio-actions"),
            0 != e.actions.length &&
              ($("#" + _id).append("<div class='action-highlight'></div>"),
              e.actions.sort(function(e, t) {
                return e.sort - t.sort;
              }),
              $.each(e.actions, function(e, i) {
                (i = prx.recursivelyAddActionInfo(i, a, t, o)),
                  prx.buildAction(i, r),
                  ("undefined" == typeof i.enabled || i.enabled) &&
                    $("#" + _id + " > .action-highlight").append(
                      '<span class="actionicon action-' +
                        i.type +
                        '" title="' +
                        i.type +
                        ": " +
                        i.title +
                        '"></span>'
                    );
              }));
        }
        break;
      default:
        if ("undefined" != typeof e.actions) {
          $("#" + _id + " .action-highlight").remove();
          var a = "#" + _id;
          $(a).unbind(".protoio-actions"),
            0 != e.actions.length &&
              ($("#" + _id).append("<div class='action-highlight'></div>"),
              e.actions.sort(function(e, t) {
                return e.sort - t.sort;
              }),
              $.each(e.actions, function(e, i) {
                (i = prx.recursivelyAddActionInfo(i, a, t, o)),
                  prx.buildAction(i, r),
                  ("undefined" == typeof i.enabled || i.enabled) &&
                    $("#" + _id + " .action-highlight").append(
                      '<span class="actionicon action-' +
                        i.type +
                        '" title="' +
                        i.type +
                        ": " +
                        i.title +
                        '"></span>'
                    );
              }));
        }
    }
  }),
  (prx.parsePageAction = function(e) {
    var t = prx.pages[e];
    "undefined" != typeof t.actions &&
      $.each(t.actions, function(e, i) {
        (i.bindTo = "#p-" + t.id),
          (i.containerid = "p-" + t.id),
          (i.targetId = i.bindTo + "-" + i.itemId),
          "keydown" == i.type &&
            ((i.bindTo = "body"), (i.bindPageId = "p-" + t.id)),
          prx.buildAction(i);
      });
  }),
  (prx.parsePageStateAction = function(e, t) {
    if (-1 == t) return !1;
    var i = prx.pages[e],
      n = i.states[t];
    "undefined" != typeof n.actions &&
      (n.actions.sort(function(e, t) {
        return e.sort - t.sort;
      }),
      $.each(n.actions, function(e, t) {
        (t.bindTo = "#p-" + i.id + "[data-state-id=" + n.id + "]"),
          (t.containerid = "p-" + i.id),
          (t.targetId = t.bindTo + "-" + t.itemId),
          (t.live = !0),
          prx.buildAction(t);
      }));
  }),
  (prx.parseTemplateStateAction = function(e, t, i, n) {
    if (-1 == t) return !1;
    var r = "p-" + i;
    "undefined" != typeof n && "" != n && (r += "-" + n);
    var o = prx.templates[e],
      a = o.states[t];
    "undefined" != typeof a.actions &&
      (a.actions.sort(function(e, t) {
        return e.sort - t.sort;
      }),
      $.each(a.actions, function(t, i) {
        (i.bindTo =
          "#" +
          r +
          "-t" +
          prx.templates[e].id +
          "[data-state-id=" +
          a.id +
          "]"),
          (i.containerid = r),
          (i.targetId = i.bindTo + "-" + i.itemId),
          (i.live = !0),
          prx.buildAction(i);
      }));
  }),
  (prx.parseSymbolStateAction = function(e, t, i, n) {
    if (-1 == t) return !1;
    var r = prx.symbols[e],
      o = r.states[t];
    "undefined" != typeof o.actions &&
      (o.actions.sort(function(e, t) {
        return e.sort - t.sort;
      }),
      $.each(o.actions, function(e, t) {
        (t = $.evalJSON($.toJSON(t))),
          (t.bindTo = "#" + n + "[data-state-id=" + o.id + "]"),
          (t.containerid = n),
          -1 == t.pageId &&
            ((t.pageId = i),
            (t.targetId = "#" + n + (-1 != t.itemId ? "-" + t.itemId : "")),
            (t.allowOverwriteTargetId = !1)),
          (t.live = !0),
          prx.buildAction(t);
      }));
  }),
  (prx.changeBodyOrientation = function(e) {
    "undefined" == typeof e && (e = prx.getOrientation()),
      (prx.orientation = e),
      $("body")
        .width(prx.devices[prx.device][e][0])
        .height(prx.devices[prx.device][e][1]);
  }),
  (prx.changeOrientation = function(e) {
    if ("undefined" != typeof e && e == prx.orientation) return !1;
    prx.changeBodyOrientation(e);
    try {
      var t = prx.activepage;
      if (
        "undefined" == typeof $._data($("#" + t).get(0), "events") ||
        ("undefined" != typeof $._data($("#" + t).get(0), "events") &&
          "undefined" ==
            typeof $._data($("#" + t).get(0), "events").changeorientation)
      ) {
        var i = prx.getPageIndexFromElementId(t),
          n = prx.pages[prx.getPageIndexFromId(i)];
        $("#" + t).html(""),
          prx.rePreloadPage(n),
          prx.changePage($("#" + t), {
            changeHash: !1,
            allowSamePageTransition: !0,
          });
      } else
        jQuery.each($._data($("#" + t).get(0), "events"), function(e, i) {
          jQuery.each(i, function(e, i) {
            "changeorientation" == i.type &&
              $("#" + t).trigger("changeorientation");
          });
        });
    } catch (r) {}
    return !0;
  }),
  (prx.rePreloadPage = function(e) {
    (e.orientation = prx.getOrientation()), prx.preLoadPage(e);
  }),
  (prx.actionLoadPage = function(e) {
    "" == e.animation && (e.animation = "none"),
      prx.activepage,
      $("#p-" + e.pageId).attr("loadedFrom", prx.activepage);
    var t = $("#" + prx.activepage);
    $(t).addClass("loadedFrom"), $("#p-" + e.pageId).addClass("loadedTo");
    var i = e.animation;
    $("#p-" + e.pageId).one("pageshow", function() {
      prx.callbackAction(e);
    }),
      setTimeout(function() {
        prx.changePage($("#p-" + e.pageId), {
          transition: i,
          duration: e.duration,
          easing: e.animationEasing,
          allowSamePageTransition: !1,
          overlay: "in",
        });
      }, e.delay);
  }),
  (prx.actionUnloadPage = function(e) {
    "" == e.animation && (e.animation = "none");
    var t = prx.activepage,
      i = $("#" + t).attr("loadedFrom");
    if ("undefined" != typeof i) {
      var n = e.animation,
        r = $._data($("#" + i).get(0), "events").pageshow;
      delete $._data($("#" + i).get(0), "events").pageshow,
        $("#" + i).one("pageshow", function() {
          if (
            (($._data($(this).get(0), "events").pageshow = r),
            !prx.embed && parent != window)
          )
            try {
              parent.prx.highlightPage(i.substr(2));
            } catch (n) {}
          $("#" + t).removeClass("loadedTo"),
            $("#" + i).removeClass("loadedFrom");
          var o = $("#" + i).get(0),
            a = o.style.display;
          (o.style.display = "none"),
            o.offsetHeight,
            (o.style.display = a),
            (i = null),
            prx.callbackAction(e);
        }),
        setTimeout(function() {
          prx.changePage($("#" + i), {
            transition: n,
            duration: e.duration,
            easing: e.animationEasing,
            overlay: "out",
          });
        }, e.delay);
    } else prx.callbackAction(e);
  }),
  (prx.actionHideItem = function(e) {
    var t = e.targetId;
    "undefined" != typeof e.pageId &&
      -1 != e.pageId &&
      (t = "#p-" + e.pageId + "-" + e.itemId),
      setTimeout(function() {
        $(t).hide(), $(t).addClass("hidden"), prx.callbackAction(e);
      }, e.delay);
  }),
  (prx.actionShowItem = function(e) {
    var t = e.targetId;
    "undefined" != typeof e.pageId &&
      -1 != e.pageId &&
      (t = "#p-" + e.pageId + "-" + e.itemId),
      setTimeout(function() {
        $(t).show(),
          $(t).removeClass("hidden"),
          "undefined" !=
            typeof prx.scroller[
              t.substring(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
            ] &&
            prx.scroller[
              t.substring(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
            ].refresh(),
          $(t).hasClass("type-symbol") &&
            $(t + " .box").each(function() {
              "undefined" != typeof prx.scroller[this.id + "-inner"] &&
                prx.scroller[this.id + "-inner"].refresh();
            }),
          prx.callbackAction(e);
      }, e.delay);
  }),
  (prx.actionToggleItem = function(e) {
    var t = e.targetId;
    setTimeout(function() {
      $(t)
        .toggle()
        .toggleClass("hidden"),
        $(t).hasClass("hidden") ||
          ("undefined" !=
            typeof prx.scroller[
              t.substring(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
            ] &&
            prx.scroller[
              t.substring(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
            ].refresh(),
          $(t).hasClass("type-symbol") &&
            $(t + " .box").each(function() {
              "undefined" != typeof prx.scroller[this.id + "-inner"] &&
                prx.scroller[this.id + "-inner"].refresh();
            })),
        prx.callbackAction(e);
    }, e.delay);
  }),
  (prx.actionGoToPage = function(e) {
    var t = "#p-" + e.pageId,
      i = t;
    (e.pageId = e.pageId), (i = "#" + prx.activepage);
    var n = i.substr(1);
    if (
      ($.each(prx.scroller, function(e, t) {
        e.substr(0, n.length) == n && (prx.scrollPosition[e] = [t.x, t.y]);
      }),
      "undefined" == typeof e.delay && (e.delay = 0),
      "" == e.animation && (e.animation = "none"),
      t != i)
    ) {
      if (
        "_back" == e.pageId &&
        ((t = _gobackstack[_gobackstack.length - 1]),
        _gobackstack.pop(),
        "undefined" == typeof t)
      )
        return (
          setTimeout(function() {
            prx.callbackAction(e);
          }, e.delay),
          !0
        );
      var r = prx.getPageStructFromId(t);
      if ("undefined" == typeof r) return prx.callbackAction(e), void 0;
      var o = prx.getPageOrientation(r);
      if (o != prx.getOrientation() && !prx.embed && parent != window)
        try {
          parent.prx.switchOrientation();
        } catch (a) {}
      $(".loadedFrom")
        .removeClass("loadedFrom")
        .addClass("remove-on-pageshow"),
        "_back" != e.pageId &&
          (_gobackstack.push(i),
          _gobackstack.length >= 50 && _gobackstack.shift());
      var s = e.animation;
      setTimeout(function() {
        prx.changePage($(t), {
          transition: s,
          duration: e.duration,
          easing: e.animationEasing,
          allowSamePageTransition: !1,
        }),
          (prx.eventTransitionPage = "#p-" + e.pageId);
      }, e.delay),
        $(t).one("pageshow", function() {
          var i = t.substr(1);
          "undefined" != typeof prx.scroller &&
            $.each(prx.scroller, function(e, t) {
              e.substr(0, i.length) == i &&
                "undefined" != typeof prx.scrollPosition[e] &&
                t.scrollTo(
                  prx.scrollPosition[e][0],
                  prx.scrollPosition[e][1],
                  0
                );
            }),
            prx.callbackAction(e);
        });
    } else
      setTimeout(function() {
        prx.callbackAction(e);
      }, e.delay);
  }),
  (prx.actionGoToCarouselPage = function(e) {
    var t = !1;
    if (
      "undefined" ==
      typeof prx.scroller[
        e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
      ]
    )
      return prx.callbackAction(e), !1;
    if (
      (t =
        prx.scroller[
          e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
        ].options.snap)
    ) {
      "undefined" != typeof e.pageId && -1 != e.pageId
        ? "#p-" + e.pageId + "-" + e.itemId
        : e.targetId.replace(/ *\[[^)]*\] */g, "");
      var i = e.itemIndex[0],
        n = e.itemIndex[1];
      "" == i && (i = "nochange"),
        "" == n && (n = "nochange"),
        "undefined" == typeof e.animationDuration &&
          (e.animationDuration = 400);
      var r =
          prx.scroller[
            e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
          ],
        o = r.currentPage.pageX,
        a = r.currentPage.pageY;
      setTimeout(function() {
        switch (i) {
          case "previous":
            o--, 0 > o && (o = 0);
            break;
          case "next":
            o++, o > r.pages.length && (o = r.pages.length);
            break;
          case "nochange":
            o = r.currentPage.pageX;
            break;
          default:
            o = parseInt(i);
        }
        switch (n) {
          case "previous":
            a--, 0 > a && (a = 0);
            break;
          case "next":
            a++, a > r.pages[0].length && (a = r.pages[0].length);
            break;
          case "nochange":
            a = r.currentPage.pageY;
            break;
          default:
            a = parseInt(n);
        }
        (i = parseInt(o)), (n = parseInt(a));
        for (var t = !1, s = 0; s < prx.scrollableTabbars.length; s++)
          if (
            e.targetId.replace(/ *\[[^)]*\] */g, "") ==
            "#" +
              prx.scrollableTabbars[s].container +
              "-" +
              prx.scrollableTabbars[s].linked
          ) {
            t =
              prx.scrollableTabbars[s].container +
              "-" +
              prx.scrollableTabbars[s].id;
            break;
          }
        prx.scroller[
          e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
        ].goToPage(i, n, parseInt(e.scrollDuration)),
          0 != t &&
            prx.scroller[t + "-inner"].goToPage(
              i,
              0,
              parseInt(e.scrollDuration)
            );
      }, e.delay);
    }
    setTimeout(function() {
      prx.callbackAction(e);
    }, parseInt(e.delay) + parseInt(e.scrollDuration));
  }),
  (prx.actionScrollScrollableContainer = function(e) {
    if (
      "undefined" ==
      typeof prx.scroller[
        e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
      ]
    )
      return prx.callbackAction(e), !1;
    switch (
      ("undefined" == typeof e.horizontalPx && (e.horizontalPx = 0),
      "undefined" == typeof e.verticalPx && (e.verticalPx = 0),
      e.scrollType)
    ) {
      case "scroll-to":
        var t = -parseInt(e.horizontalPx),
          i = -parseInt(e.verticalPx);
        "*" == e.horizontalPx &&
          (t =
            prx.scroller[
              e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
            ].x),
          "*" == e.verticalPx &&
            (i =
              prx.scroller[
                e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
              ].y),
          setTimeout(function() {
            prx.scroller[
              e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
            ].scrollTo(t, i, parseInt(e.scrollDuration));
          }, e.delay);
        break;
      case "scroll-by":
        var t = parseInt(e.horizontalPx),
          i = parseInt(e.verticalPx);
        "*" == e.horizontalPx && (t = 0),
          "*" == e.verticalPx && (i = 0),
          setTimeout(function() {
            prx.scroller[
              e.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
            ].scrollBy(t, i, parseInt(e.scrollDuration));
          }, e.delay);
    }
    setTimeout(function() {
      prx.callbackAction(e);
    }, parseInt(e.delay) + parseInt(e.scrollDuration));
  }),
  (prx.actionFireItemEvent = function(e) {
    if (
      ("click" == e.itemEvent && (e.itemEvent = "tap"),
      "taphold" == e.itemEvent && (e.itemEvent = "press"),
      "container" == e.targetType)
    ) {
      var t = e.containerid.split("-")[1];
      e.targetId =
        "#p-" +
        t +
        " .type-symbol[data-symbol-id=" +
        e.symbolId +
        "] .box[id$=-" +
        e.itemId +
        "]";
      var i = $(e.targetId);
      if (0 == i.length) return prx.callbackAction(e), void 0;
      e.targetId = "#" + i.attr("id");
    } else
      e.targetId =
        -1 == e.pageId
          ? "#" + e.containerid + "-" + e.itemId
          : "#p-" + e.pageId + "-" + e.itemId;
    setTimeout(function() {
      if ("undefined" == typeof e.itemIndex) $(e.targetId).trigger(e.itemEvent);
      else if (parseInt(e.itemIndex) == e.itemIndex)
        $(e.targetId + "-" + e.itemDynProps + "-" + e.itemIndex).trigger(
          e.itemEvent
        );
      else
        switch (e.itemIndex) {
          case "actionbarUpCaretActions":
            $(e.targetId + " .left-icon").trigger(e.itemEvent);
            break;
          case "actionbarActionOverflowActions":
            $(e.targetId + " .actionOverflow").trigger(e.itemEvent);
            break;
          case "flipswitchActionsOnActive":
            $(e.targetId + " input:checked[id=" + _id + "-flipswitch]").trigger(
              e.itemEvent
            );
            break;
          case "flipswitchActionsOnDeactive":
            $(
              e.targetId + " input[id=" + _id + "-flipswitch]:not(:checked)"
            ).trigger(e.itemEvent);
            break;
          case "checkboxActionsOnActive":
            $(e.targetId + " input:checked[id=" + _id + "-checkbox]").trigger(
              e.itemEvent
            );
            break;
          case "checkboxActionsOnDeactive":
            $(
              e.targetId + " input[id=" + _id + "-checkbox]:not(:checked)"
            ).trigger(e.itemEvent);
            break;
          case "ios7NavbarActionsTitle":
            $(e.targetId + " .ios7-navbar-title").trigger(e.itemEvent);
            break;
          case "ios7NavbarActionsLeftBtn":
            $(e.targetId + " .ios7-navbar-button-left").trigger(e.itemEvent);
            break;
          case "ios7NavbarActionsRightBtn":
            $(e.targetId + " .ios7-navbar-button-right").trigger(e.itemEvent);
        }
      prx.callbackAction(e);
    }, e.delay);
  }),
  (prx.actionAnimateItem = function(e) {
    var t = prx.defaultAnimEngine;
    switch (t) {
      case "Transit":
        var i = { easing: e.animationEasing, duration: e.duration, queue: !1 };
        break;
      default:
        var i = {},
          n = {
            duration: parseInt(e.duration),
            easing: prx.getEasing(e.animationEasing),
            queue: !1,
            complete: function() {
              prx.callbackAction(e);
            },
          };
        i.easing = prx.getEasing(e.animationEasing);
    }
    switch (e.animationType) {
      case "move-item":
        switch (e.moveType) {
          case "move-by":
            if (((i.top = !0), (i.left = !0), "*" != e.moveXBy)) {
              var r = Number(e.moveXBy);
              (r = r >= 0 ? "+=" + r : "-=" + -r), (i.left = r);
            }
            if ("*" != e.moveYBy) {
              var o = Number(e.moveYBy);
              (o = o >= 0 ? "+=" + o : "-=" + -o), (i.top = o);
            }
            switch (t) {
              case "Transit":
                setTimeout(function() {
                  $(e.targetId).transition(i, function() {
                    prx.callbackAction(e);
                  });
                }, e.delay);
                break;
              default:
                new TimelineMax()
                  .to(e.targetId, n.duration / 1e3, {
                    left: i.left,
                    top: i.top,
                    ease: n.easing,
                    delay: e.delay / 1e3,
                    force3D: prx.greensockForce3D,
                  })
                  .call(n.complete);
            }
            break;
          case "move-to":
            if (
              ((i.top = !0), (i.left = !0), $(e.targetId), "*" != e.moveXTo)
            ) {
              var r = Number(e.moveXTo);
              i.left = r;
            }
            if ("*" != e.moveYTo) {
              var o = Number(e.moveYTo);
              i.top = o;
            }
            switch (t) {
              case "Transit":
                setTimeout(function() {
                  $(e.targetId).transition(i, function() {
                    prx.callbackAction(e);
                  });
                }, e.delay);
                break;
              default:
                "*" != e.moveXTo &&
                  (i.left = i.left - parseInt($(e.targetId).css("left"))),
                  "*" != e.moveYTo &&
                    (i.top = i.top - parseInt($(e.targetId).css("top"))),
                  new TimelineMax()
                    .to(e.targetId, n.duration / 1e3, {
                      x: i.left,
                      y: i.top,
                      ease: n.easing,
                      delay: e.delay / 1e3,
                      force3D: prx.greensockForce3D,
                    })
                    .call(n.complete);
            }
            break;
          case "move-to-animation-target":
            var r = !0,
              o = !0;
            if (-1 != e.pageId)
              var a = $("#p-" + e.pageId + "-" + e.animationPointId);
            else var a = $("#" + e.containerid + "-" + e.animationPointId);
            switch (
              ((r = a.position().left),
              (o = a.position().top),
              (r -= parseInt($(e.targetId).css("left"))),
              (o -= parseInt($(e.targetId).css("top"))),
              t)
            ) {
              case "Transit":
                setTimeout(function() {
                  $(e.targetId).transition(
                    {
                      left: r,
                      top: o,
                      easing: e.animationEasing,
                      duration: e.duration,
                      queue: !1,
                    },
                    function() {
                      prx.callbackAction(e);
                    }
                  );
                }, e.delay);
                break;
              default:
                new TimelineMax()
                  .to(e.targetId, n.duration / 1e3, {
                    x: r,
                    y: o,
                    ease: n.easing,
                    delay: parseInt(e.delay) / 1e3,
                    force3D: prx.greensockForce3D,
                  })
                  .call(n.complete);
            }
        }
        break;
      case "resize-item":
        switch (((i.scale = 1), e.resizeType)) {
          case "resize-by":
            if ("*" != e.resizeXBy) {
              var r = Number(e.resizeXBy);
              (r = r >= 0 ? "+=" + r : "-=" + -r), (i.width = r);
            }
            if ("*" != e.resizeYBy) {
              var o = Number(e.resizeYBy);
              (o = o >= 0 ? "+=" + o : "-=" + -o), (i.height = o);
            }
            switch (t) {
              case "Transit":
                setTimeout(function() {
                  $(e.targetId).transition(i, function() {
                    "undefined" !=
                      typeof prx.scroller[
                        e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                          "-inner"
                      ] &&
                      prx.scroller[
                        e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                          "-inner"
                      ].refresh(),
                      prx.callbackAction(e);
                  });
                }, e.delay);
                break;
              default:
                (n.complete = function() {
                  "undefined" !=
                    typeof prx.scroller[
                      e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                        "-inner"
                    ] &&
                    prx.scroller[
                      e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                        "-inner"
                    ].refresh(),
                    prx.callbackAction(e);
                }),
                  new TimelineMax()
                    .to(e.targetId, n.duration / 1e3, {
                      width: i.width,
                      height: i.height,
                      ease: n.easing,
                      delay: e.delay / 1e3,
                      force3D: prx.greensockForce3D,
                    })
                    .call(n.complete);
            }
            break;
          case "resize-to":
            if (((i.width = !0), (i.height = !0), "*" != e.resizeXTo)) {
              var r = Number(e.resizeXTo);
              i.width = r;
            }
            if ("*" != e.resizeYTo) {
              var o = Number(e.resizeYTo);
              i.height = o;
            }
            switch (t) {
              case "Transit":
                setTimeout(function() {
                  $(e.targetId).transition(i, function() {
                    "undefined" !=
                      typeof prx.scroller[
                        e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                          "-inner"
                      ] &&
                      prx.scroller[
                        e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                          "-inner"
                      ].refresh(),
                      prx.callbackAction(e);
                  });
                }, e.delay);
                break;
              default:
                (n.complete = function() {
                  "undefined" !=
                    typeof prx.scroller[
                      e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                        "-inner"
                    ] &&
                    prx.scroller[
                      e.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") +
                        "-inner"
                    ].refresh(),
                    prx.callbackAction(e);
                }),
                  new TimelineMax()
                    .to(e.targetId, n.duration / 1e3, {
                      width: i.width,
                      height: i.height,
                      ease: n.easing,
                      delay: e.delay / 1e3,
                      force3D: prx.greensockForce3D,
                    })
                    .call(n.complete);
            }
        }
        break;
      case "scale-item":
        var r = Number(e.scaleX),
          o = Number(e.scaleY);
        switch (t) {
          case "Transit":
            setTimeout(function() {
              $(e.targetId).transition(
                {
                  scale: [r, o],
                  easing: e.animationEasing,
                  duration: e.duration,
                  queue: !1,
                },
                function() {
                  prx.callbackAction(e);
                }
              );
            }, e.delay);
            break;
          default:
            new TimelineMax()
              .to(e.targetId, n.duration / 1e3, {
                scaleX: r,
                scaleY: o,
                ease: n.easing,
                delay: e.delay / 1e3,
                force3D: prx.greensockForce3D,
              })
              .call(n.complete);
        }
        break;
      case "fade-item":
        switch (t) {
          case "Transit":
            setTimeout(function() {
              $(e.targetId).transition(
                {
                  opacity: Number(e.fadeTo),
                  easing: e.animationEasing,
                  duration: e.duration,
                  queue: !1,
                },
                function() {
                  prx.callbackAction(e);
                }
              );
            }, e.delay);
            break;
          default:
            new TimelineMax()
              .to(e.targetId, n.duration / 1e3, {
                opacity: Number(e.fadeTo),
                ease: n.easing,
                delay: e.delay / 1e3,
                force3D: prx.greensockForce3D,
              })
              .call(n.complete);
        }
        break;
      case "rotate-item":
        switch (e.rotateType) {
          case "rotate-by":
            var s = Number(e.rotateBy);
            switch (((s = s >= 0 ? "+=" + s : "-=" + -s), t)) {
              case "Transit":
                setTimeout(function() {
                  $(e.targetId).transition(
                    {
                      rotate: s,
                      easing: e.animationEasing,
                      duration: e.duration,
                      queue: !1,
                    },
                    function() {
                      prx.callbackAction(e);
                    }
                  );
                }, e.delay);
                break;
              default:
                new TimelineMax()
                  .to(e.targetId, n.duration / 1e3, {
                    rotation: s,
                    ease: n.easing,
                    delay: e.delay / 1e3,
                    force3D: prx.greensockForce3D,
                  })
                  .call(n.complete);
            }
            break;
          case "rotate-to":
            var l = Number(e.rotateTo);
            switch (t) {
              case "Transit":
                setTimeout(function() {
                  $(e.targetId).transition(
                    {
                      rotate: l,
                      easing: e.animationEasing,
                      duration: e.duration,
                      queue: !1,
                    },
                    function() {
                      prx.callbackAction(e);
                    }
                  );
                }, e.delay);
                break;
              default:
                "undefined" != typeof e.rotationDirection &&
                  (l += "_" + e.rotationDirection),
                  new TimelineMax()
                    .to(e.targetId, n.duration / 1e3, {
                      rotation: l,
                      ease: n.easing,
                      delay: e.delay / 1e3,
                      force3D: prx.greensockForce3D,
                    })
                    .call(n.complete);
            }
        }
    }
  }),
  (prx.actionMoveScreen = function(e) {
    var t = prx.defaultAnimEngine,
      i = e.targetId;
    if (-2 == e.pageId) {
      var n = i.split(/[-\[]/);
      i = "#p-" + n[1];
    }
    switch (t) {
      case "Transit":
        var r = { easing: e.animationEasing, duration: e.duration, queue: !1 };
        break;
      default:
        var r = {},
          o = {
            duration: parseInt(e.duration),
            easing: e.animationEasing,
            queue: !1,
            complete: function() {
              prx.callbackAction(e);
            },
          };
        r.easing = prx.getEasing(e.animationEasing);
    }
    switch (e.moveType) {
      case "move-by":
        if (
          ((r.top = !0),
          (r.left = !0),
          (r.overlaytop = !0),
          (r.overlayleft = !0),
          "*" != e.moveXBy)
        ) {
          var a = Number(e.moveXBy);
          (r.overlayleft = a >= 0 ? "-=" + a : "+=" + -a),
            (a = a >= 0 ? "+=" + a : "-=" + -a),
            (r.left = a);
        }
        if ("*" != e.moveYBy) {
          var s = Number(e.moveYBy),
            l = i.split(/[-\[]/)[1];
          prx.allowstatusbar &&
            1 == prx.statusbars[l].statusbar &&
            (s +=
              prx.devices[prx.device][
                "statusbarheight" + prx.statusbars[l].orientation
              ]),
            (r.overlaytop = 0 >= s ? "-=" + s : "+=" + -s),
            (s = s >= 0 ? "+=" + s : "-=" + -s),
            (r.top = s);
        }
        switch (t) {
          case "Transit":
            setTimeout(function() {
              $(i).transition(r, function() {
                prx.callbackAction(e);
              });
            }, e.delay);
            break;
          default:
            new TimelineMax()
              .to(i, o.duration / 1e3, {
                left: r.left,
                top: r.top,
                ease: r.easing,
                delay: e.delay / 1e3,
                force3D: prx.greensockForce3D,
              })
              .call(o.complete),
              new TimelineMax().to(
                i + ' > .box[data-mpoverlay="1"]',
                o.duration / 1e3,
                {
                  left: r.overlayleft,
                  top: r.overlaytop,
                  ease: r.easing,
                  delay: e.delay / 1e3,
                  force3D: prx.greensockForce3D,
                }
              );
        }
        break;
      case "move-to":
        if (
          ((r.top = !0),
          (r.left = !0),
          (r.overlaytop = !0),
          (r.overlayleft = !0),
          "*" != e.moveXTo)
        ) {
          var a = Number(e.moveXTo);
          (r.left = a),
            (r.overlayleft =
              ($(i).offset().left - a < 0 ? "-=" : "+=") +
              Math.abs($(i).offset().left - a));
        }
        if ("*" != e.moveYTo) {
          var s = Number(e.moveYTo),
            l = i.split(/[-\[]/)[1];
          prx.allowstatusbar &&
            1 == prx.statusbars[l].statusbar &&
            (s +=
              prx.devices[prx.device][
                "statusbarheight" + prx.statusbars[l].orientation
              ]),
            (r.top = s),
            (r.overlaytop =
              ($(i).offset().top - s < 0 ? "-=" : "+=") +
              Math.abs($(i).offset().top - s));
        }
        switch (t) {
          case "Transit":
            setTimeout(function() {
              $(i).transition(r, function() {
                prx.callbackAction(e);
              });
            }, e.delay);
            break;
          default:
            new TimelineMax()
              .to(i, o.duration / 1e3, {
                left: r.left,
                top: r.top,
                ease: r.easing,
                delay: e.delay / 1e3,
                force3D: prx.greensockForce3D,
              })
              .call(o.complete),
              new TimelineMax().to(
                i + ' .box[data-mpoverlay="1"]',
                o.duration / 1e3,
                {
                  left: r.overlayleft,
                  top: r.overlaytop,
                  ease: r.easing,
                  delay: e.delay / 1e3,
                  force3D: prx.greensockForce3D,
                }
              );
        }
    }
  }),
  (prx.actionChangeProperty = function(e) {
    var t = 1,
      i = 0;
    "undefined" != typeof e.duration && (t = e.duration / 1e3),
      "undefined" != typeof e.delay && (i = e.delay / 1e3);
    var n;
    if ("undefined" != typeof e._timelineToUse) var r = e._timelineToUse;
    else var r = new TimelineMax({ force3D: prx.greensockForce3D });
    switch (e.valueType) {
      case "customValue":
        break;
      case "readFromVariable":
        "undefined" != typeof prx.variables[e.variableName] &&
          ("undefined" == typeof prx.variables[e.variableName].parsed &&
            prx.recursiveEvaluation(
              prx.variables[e.variableName].value,
              e.variableName
            ),
          (e.newvalue = prx.variables[e.variableName].parsed));
    }
    var o = e.newvalue,
      a = e.propertyType;
    switch (
      ("undefined" == typeof a && (a = "component-property"), e.propertyId)
    ) {
      case "left":
        (n = { selector: "", property: "x" }),
          (o -= parseInt($(e.targetId).css("left")));
        break;
      case "top":
        (n = { selector: "", property: "y" }),
          (o -= parseInt($(e.targetId).css("top")));
        break;
      case "opacity":
        n = { selector: "", property: e.propertyId };
        break;
      case "width":
      case "height":
        (n = { selector: "", property: e.propertyId }),
          "undefined" != typeof e.componentType &&
            "undefined" != typeof prx.types[e.componentType].onResize &&
            (n.onResize = prx.types[e.componentType].onResize);
        break;
      case "templatestateid":
        n = { property: "template-state" };
        break;
      case "background":
        ("current-page" == e.itemId ||
          "current-page-template" == e.itemId ||
          "current-container" == e.itemId) &&
          (n = {
            type: "colorpicker",
            selector: "",
            property: "background-color",
          });
        break;
      case "dynamicProperties":
        n = { rerender: !0 };
        break;
      case "visible":
        0 == o || 0 == o
          ? ((o = 0),
            (function(t, i) {
              r.add(function() {
                $(e.targetId).addClass("hidden");
              }, parseFloat(t) + parseFloat(i));
            })(i, t))
          : (o === !0 && (o = 1),
            (function(t) {
              r.add(function() {
                $(e.targetId).removeClass("hidden");
              }, t);
            })(i),
            $(e.targetId).css("opacity", 0),
            (i = parseFloat(i) + 0.001)),
          (n = { selector: "", property: "opacity" });
        break;
      case "rotation":
        (n = { selector: "", property: "rotation" }),
          (o = parseInt(o)),
          (o +=
            "undefined" != typeof e.rotationDirection
              ? "_" + e.rotationDirection
              : "_short");
        break;
      case "draggable":
        n = { rerender: !0 };
    }
    if ("undefined" == typeof n)
      switch (a) {
        case "component-property":
          if (
            "undefined" != typeof prx.types[e.componentType].editableProperties
          )
            for (
              var s = 0;
              s < prx.types[e.componentType].editableProperties.length;
              s++
            )
              if (
                prx.types[e.componentType].editableProperties[s].name ==
                e.propertyId
              ) {
                (n =
                  prx.types[e.componentType].editableProperties[s]
                    .changeProperty),
                  (n.type =
                    prx.types[e.componentType].editableProperties[s].type);
                break;
              }
          if (
            "undefined" == typeof n &&
            "undefined" != typeof prx.types[e.componentType].interactions
          )
            for (
              var s = 0;
              s < prx.types[e.componentType].interactions.length;
              s++
            )
              if (
                prx.types[e.componentType].interactions[s].name == e.propertyId
              ) {
                n = { property: "action" };
                break;
              }
          if (
            "undefined" == typeof n &&
            "undefined" != typeof prx.types[e.componentType].propertyGroups
          )
            for (
              var s = 0;
              s < prx.types[e.componentType].propertyGroups.length;
              s++
            )
              for (
                var l = 0;
                l <
                prx.types[e.componentType].propertyGroups[s].properties.length;
                l++
              )
                for (
                  var c = 0;
                  c <
                  prx.types[e.componentType].propertyGroups[s].properties[l]
                    .length;
                  c++
                )
                  if (
                    prx.types[e.componentType].propertyGroups[s].properties[l][
                      c
                    ].name == e.propertyId
                  ) {
                    (n =
                      prx.types[e.componentType].propertyGroups[s].properties[
                        l
                      ][c].changeProperty),
                      (n.type =
                        prx.types[e.componentType].propertyGroups[s].properties[
                          l
                        ][c].type);
                    break;
                  }
          break;
        case "dynamic-property":
          if (
            "undefined" != typeof prx.types[e.componentType].dynamicProperties
          ) {
            if (
              "undefined" !=
              typeof prx.types[e.componentType].dynamicProperties
                .editableProperties
            )
              for (
                var s = 0;
                s <
                prx.types[e.componentType].dynamicProperties.editableProperties
                  .length;
                s++
              )
                if (
                  prx.types[e.componentType].dynamicProperties
                    .editableProperties[s].name == e.propertyId
                ) {
                  (n =
                    prx.types[e.componentType].dynamicProperties
                      .editableProperties[s].changeProperty),
                    (n.type =
                      prx.types[
                        e.componentType
                      ].dynamicProperties.editableProperties[s].type);
                  break;
                }
            if (
              "undefined" == typeof n &&
              "undefined" !=
                typeof prx.types[e.componentType].dynamicProperties.interactions
            )
              for (
                var s = 0;
                s <
                prx.types[e.componentType].dynamicProperties.interactions
                  .length;
                s++
              )
                if (
                  prx.types[e.componentType].dynamicProperties.interactions[s]
                    .name == e.propertyId
                ) {
                  n = { property: "action" };
                  break;
                }
            if (
              "undefined" == typeof n &&
              "undefined" !=
                typeof prx.types[e.componentType].dynamicProperties
                  .propertyGroups
            )
              for (
                var s = 0;
                s <
                prx.types[e.componentType].dynamicProperties.propertyGroups
                  .length;
                s++
              )
                for (
                  var l = 0;
                  l <
                  prx.types[e.componentType].dynamicProperties.propertyGroups[s]
                    .properties.length;
                  l++
                )
                  for (
                    var c = 0;
                    c <
                    prx.types[e.componentType].dynamicProperties.propertyGroups[
                      s
                    ].properties[l].length;
                    c++
                  )
                    if (
                      prx.types[e.componentType].dynamicProperties
                        .propertyGroups[s].properties[l][c].name == e.propertyId
                    ) {
                      (n =
                        prx.types[e.componentType].dynamicProperties
                          .propertyGroups[s].properties[l][c].changeProperty),
                        (n.type =
                          prx.types[
                            e.componentType
                          ].dynamicProperties.propertyGroups[s].properties[l][
                            c
                          ].type);
                      break;
                    }
          }
      }
    if ("undefined" != typeof n) {
      if ("undefined" != typeof n.property)
        switch (n.property) {
          case "text":
            switch (a) {
              case "component-property":
                r.add(function() {
                  $(e.targetId + " " + n.selector).html(o),
                    prx.callbackAction(e);
                }, i);
                break;
              case "dynamic-property":
                r.add(function() {
                  $(
                    e.targetId +
                      ' [data-dynamic-property-index="' +
                      e.itemIndex +
                      '"] ' +
                      n.selector
                  ).html(o),
                    prx.callbackAction(e);
                }, i);
            }
            break;
          case "input-value":
            r.add(function() {
              $(e.targetId + " " + n.selector).val(o), prx.callbackAction(e);
            }, i);
            break;
          case "textarea-value":
            r.add(function() {
              $(e.targetId + " " + n.selector).val(o.replace(/<br \/>/g, "\n")),
                prx.callbackAction(e);
            }, i);
            break;
          case "action":
            var d = e.oldvalue,
              p = o;
            if (
              (("undefined" == typeof p || null == p) && (p = []),
              ("undefined" == typeof d || null == d) && (d = []),
              (function(t, n, r) {
                r.add(function() {
                  var i = { type: e.componentType, id: e.itemId };
                  "dynamic-property" == e.propertyType
                    ? ((i[
                        prx.types[e.componentType].dynamicProperties.data
                      ] = []),
                      (i[prx.types[e.componentType].dynamicProperties.data][
                        e.itemIndex
                      ] = {}),
                      (i[prx.types[e.componentType].dynamicProperties.data][
                        e.itemIndex
                      ][e.propertyId] = this.timeline.data.reversing ? t : n))
                    : (i[e.propertyId] = this.timeline.data.reversing ? t : n),
                    prx.parseItemAction(i, e.containerid, e.pageId),
                    prx.callbackAction(e);
                }, i);
              })(d, p, r),
              "undefined" != typeof e._timelineToUse)
            )
              return r;
            break;
          case "container-state":
            var u = {
              pageId: e.pageId,
              targetId: e.targetId,
              stateId: o,
              itemId: e.itemId,
              guid: e.guid,
            };
            "undefined" != typeof e.previousActions &&
              (u.previousActions = $.evalJSON($.toJSON(e.previousActions))),
              "undefined" != typeof e.callbackAction &&
                (u.callbackAction = $.evalJSON($.toJSON(e.callbackAction))),
              "undefined" != typeof e.callback && (u.callback = e.callback),
              setTimeout(function() {
                prx.actionChangeState(u, "symbols");
              }, e.delay);
            break;
          case "template-state":
            var u = {
              pageId: e.pageId,
              targetId: e.targetId,
              stateId: o,
              itemId: e.itemId,
            };
            "undefined" != typeof e.previousActions &&
              (u.previousActions = $.evalJSON($.toJSON(e.previousActions))),
              "undefined" != typeof e.callbackAction &&
                (u.callbackAction = $.evalJSON($.toJSON(e.callbackAction))),
              "undefined" != typeof e.callback && (u.callback = e.callback),
              setTimeout(function() {
                return prx.actionChangeState(u, "templates");
              }, e.delay);
            break;
          case "width":
          case "height":
            f = function() {
              var t = e.targetId;
              -1 != t.indexOf("-scroll") &&
                (t = t.substring(0, t.indexOf("-scroll"))),
                "undefined" !=
                  typeof prx.scroller[
                    t.substring(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
                  ] &&
                  prx.scroller[
                    t.substring(1).replace(/ *\[[^)]*\] */g, "") + "-inner"
                  ].refresh(),
                prx.callbackAction(e);
            };
          case "border-width":
          case "border-radius":
            parseInt(o) == o && (o += "px");
          case "opacity":
            parseFloat(o) == o && (o = parseFloat(o));
          default:
            var h = {};
            switch (n.type) {
              case "colorpicker":
              case "combo-colorpicker":
                o = getColor(o);
            }
            var f = function() {
              "undefined" == typeof e._timelineToUse &&
                "containerscroll" != e.type &&
                prx.refreshScrollers(e.pageId),
                prx.callbackAction(e);
            };
            if (
              ((h[
                n.property.replace(/-([a-z])/g, function(e, t) {
                  return t.toUpperCase();
                })
              ] = o),
              (h.ease = prx.getEasing(e.animationEasing)),
              "undefined" != typeof n.onResize)
            ) {
              var m = e.containerid + "-" + e.itemId,
                g = m.split("box-");
              (e.itemId = "box-" + g[g.length - 1]),
                (e.containerid = m.replace("-" + e.itemId, ""));
              var v = $(e.targetId)
                .parents("[data-state-id]")
                .first()
                .attr("data-state-id");
              if (
                "undefined" != typeof prx.allItems[e.itemId] &&
                "undefined" != typeof prx.allItems[e.itemId].states &&
                "undefined" != typeof prx.allItems[e.itemId].states[v]
              ) {
                var y = $.evalJSON(
                  prx[prx.allItems[e.itemId].containertype][
                    prx.allItems[e.itemId].containerindex
                  ].states[prx.allItems[e.itemId].states[v].stateindex].data
                );
                (x =
                  "undefined" != typeof y.items
                    ? y.items[prx.allItems[e.itemId].itemindex]
                    : y[prx.allItems[e.itemId].states[v].itemindex]),
                  (x.htype = "fixed"),
                  (x.vtype = "fixed"),
                  (h.onUpdate = function(e, t) {
                    (e.width = $(this._targets[0]).width()),
                      (e.height = $(this._targets[0]).height());
                    var i = $(this._targets[0]).attr("id"),
                      n = i.substring(0, i.indexOf("-" + e.id));
                    t.onResize(e, n);
                  }),
                  (h.onUpdateParams = [x, n]);
              }
            }
            var b =
              e.targetId + " " + n.selector + ", " + e.targetId + n.selector;
            if (
              ("dynamic-property" == a &&
                (b =
                  e.targetId +
                  ' [data-dynamic-property-index="' +
                  e.itemIndex +
                  '"] ' +
                  n.selector),
              (h.immediateRender = !1),
              r.add(TweenLite.to(b, t, h), i),
              r.add(f, t + i),
              "undefined" != typeof e._timelineToUse)
            )
              return r;
            return;
        }
      if (n.rerender) {
        var x,
          m = e.containerid + "-" + e.itemId,
          g = m.split("box-");
        (e.itemId = "box-" + g[g.length - 1]),
          (e.containerid = m.replace("-" + e.itemId, ""));
        var v = $(e.targetId)
          .parents("[data-state-id]")
          .first()
          .attr("data-state-id");
        if (
          "undefined" != typeof prx.allItems[e.itemId].states &&
          "undefined" != typeof prx.allItems[e.itemId].states[v]
        ) {
          var y = $.evalJSON(
            prx[prx.allItems[e.itemId].containertype][
              prx.allItems[e.itemId].containerindex
            ].states[prx.allItems[e.itemId].states[v].stateindex].data
          );
          x =
            "undefined" != typeof y.items
              ? y.items[prx.allItems[e.itemId].itemindex]
              : y[prx.allItems[e.itemId].states[v].itemindex];
        }
        if ("undefined" == typeof x)
          return (
            r.add(function() {
              prx.callbackAction(e);
            }),
            !1
          );
        "dynamic-property" == e.propertyType
          ? (x[prx.types[e.componentType].dynamicProperties.data][e.itemIndex][
              e.propertyId
            ] = o)
          : (x[e.propertyId] = o),
          r.add(function() {
            var t = e.targetId.slice(1).replace("-" + x.id, "");
            prx.rerenderItem(x, t, e.pageId), prx.callbackAction(e);
          }, i);
      }
    }
    return "undefined" != typeof e._timelineToUse ? r : void 0;
  }),
  (prx.actionSetVariable = function(e) {
    var t = 1,
      i = 0;
    "undefined" != typeof e.duration && (t = e.duration / 1e3),
      "undefined" != typeof e.delay && (i = e.delay / 1e3);
    var n,
      r = e.propertyType;
    switch (
      ("undefined" == typeof r && (r = "component-property"), e.valueSource)
    ) {
      case "customValue":
        break;
      case "callbackvalue":
        n = { selector: "", property: "triggerdata" };
        break;
      case "setValueFromItemProperty":
        switch (e.propertyId) {
          case "left":
          case "top":
          case "opacity":
            n = { selector: "", property: e.propertyId };
            break;
          case "width":
          case "height":
            (n = { selector: "", property: e.propertyId }),
              "undefined" != typeof prx.types[e.componentType].onResize &&
                (n.onResize = prx.types[e.componentType].onResize);
            break;
          default:
            switch (r) {
              case "component-property":
                if (
                  "undefined" !=
                  typeof prx.types[e.componentType].editableProperties
                )
                  for (
                    var o = 0;
                    o < prx.types[e.componentType].editableProperties.length;
                    o++
                  )
                    if (
                      prx.types[e.componentType].editableProperties[o].name ==
                      e.propertyId
                    ) {
                      (n =
                        prx.types[e.componentType].editableProperties[o]
                          .changeProperty),
                        (n.type =
                          prx.types[e.componentType].editableProperties[
                            o
                          ].type);
                      break;
                    }
                if (
                  "undefined" == typeof n &&
                  "undefined" != typeof prx.types[e.componentType].interactions
                )
                  for (
                    var o = 0;
                    o < prx.types[e.componentType].interactions.length;
                    o++
                  )
                    if (
                      prx.types[e.componentType].interactions[o].name ==
                      e.propertyId
                    ) {
                      n = { property: "action" };
                      break;
                    }
                if (
                  "undefined" == typeof n &&
                  "undefined" !=
                    typeof prx.types[e.componentType].propertyGroups
                )
                  for (
                    var o = 0;
                    o < prx.types[e.componentType].propertyGroups.length;
                    o++
                  )
                    for (
                      var a = 0;
                      a <
                      prx.types[e.componentType].propertyGroups[o].properties
                        .length;
                      a++
                    )
                      for (
                        var s = 0;
                        s <
                        prx.types[e.componentType].propertyGroups[o].properties[
                          a
                        ].length;
                        s++
                      )
                        if (
                          prx.types[e.componentType].propertyGroups[o]
                            .properties[a][s].name == e.propertyId
                        ) {
                          (n =
                            prx.types[e.componentType].propertyGroups[o]
                              .properties[a][s].changeProperty),
                            (n.type =
                              prx.types[e.componentType].propertyGroups[
                                o
                              ].properties[a][s].type);
                          break;
                        }
                break;
              case "dynamic-property":
                if (
                  "undefined" !=
                  typeof prx.types[e.componentType].dynamicProperties
                ) {
                  if (
                    "undefined" !=
                    typeof prx.types[e.componentType].dynamicProperties
                      .editableProperties
                  )
                    for (
                      var o = 0;
                      o <
                      prx.types[e.componentType].dynamicProperties
                        .editableProperties.length;
                      o++
                    )
                      if (
                        prx.types[e.componentType].dynamicProperties
                          .editableProperties[o].name == e.propertyId
                      ) {
                        (n =
                          prx.types[e.componentType].dynamicProperties
                            .editableProperties[o].changeProperty),
                          (n.type =
                            prx.types[
                              e.componentType
                            ].dynamicProperties.editableProperties[o].type);
                        break;
                      }
                  if (
                    "undefined" == typeof n &&
                    "undefined" !=
                      typeof prx.types[e.componentType].dynamicProperties
                        .interactions
                  )
                    for (
                      var o = 0;
                      o <
                      prx.types[e.componentType].dynamicProperties.interactions
                        .length;
                      o++
                    )
                      if (
                        prx.types[e.componentType].dynamicProperties
                          .interactions[o].name == e.propertyId
                      ) {
                        n = { property: "action" };
                        break;
                      }
                  if (
                    "undefined" == typeof n &&
                    "undefined" !=
                      typeof prx.types[e.componentType].dynamicProperties
                        .propertyGroups
                  )
                    for (
                      var o = 0;
                      o <
                      prx.types[e.componentType].dynamicProperties
                        .propertyGroups.length;
                      o++
                    )
                      for (
                        var a = 0;
                        a <
                        prx.types[e.componentType].dynamicProperties
                          .propertyGroups[o].properties.length;
                        a++
                      )
                        for (
                          var s = 0;
                          s <
                          prx.types[e.componentType].dynamicProperties
                            .propertyGroups[o].properties[a].length;
                          s++
                        )
                          if (
                            prx.types[e.componentType].dynamicProperties
                              .propertyGroups[o].properties[a][s].name ==
                            e.propertyId
                          ) {
                            (n =
                              prx.types[e.componentType].dynamicProperties
                                .propertyGroups[o].properties[a][s]
                                .changeProperty),
                              (n.type =
                                prx.types[
                                  e.componentType
                                ].dynamicProperties.propertyGroups[
                                  o
                                ].properties[a][s].type);
                            break;
                          }
                }
            }
        }
    }
    var l = "";
    if ("undefined" != typeof n && "undefined" != typeof n.property) {
      switch (r) {
        case "component-property":
          l = $(e.targetId + " " + n.selector);
          break;
        case "dynamic-property":
          l = $(
            e.targetId +
              ' [data-dynamic-property-index="' +
              e.itemIndex +
              '"] ' +
              n.selector
          );
      }
      switch (n.property) {
        case "text":
          e.newvalue = l.text();
          break;
        case "input-value":
        case "textarea-value":
          e.newvalue = l.val();
          break;
        case "width":
          e.newvalue = l.width();
          break;
        case "height":
          e.newvalue = l.height();
          break;
        case "left":
          e.newvalue = l.position().left;
          break;
        case "top":
          e.newvalue = l.position().top;
          break;
        case "triggerdata":
          "undefined" != typeof prx.triggerData[e.bindTo] &&
            (e.newvalue =
              "undefined" != typeof prx.triggerData[e.bindTo][e.type]
                ? "undefined" !=
                  typeof prx.triggerData[e.bindTo][e.type][e.callbackvariable]
                  ? prx.triggerData[e.bindTo][e.type][e.callbackvariable]
                  : null
                : null);
      }
    }
    setTimeout(function() {
      "undefined" != typeof prx.variables[e.variableName] &&
        (prx.variables[e.variableName].value = prx.recursiveEvaluation(
          e.newvalue,
          e.variableName,
          !0
        )),
        prx.callbackAction(e);
    }, e.delay);
  }),
  (prx.rerenderItem = function(e, t, i) {
    if (
      "undefined" != typeof prx.types[e.type] &&
      "undefined" != typeof prx.types[e.type].onDisplay
    ) {
      var n = $("#" + t + "-" + e.id).attr(
        "id",
        "#" + t + "-" + e.id + "-to-be-removed"
      );
      if (
        (n.after(prx.types[e.type].onDisplay(e, t, i)),
        n.remove(),
        "undefined" != typeof e._fromstateid &&
          ((e.opacity = 0),
          $("#" + t + "-" + e.id).addClass("ghost-component")),
        prx.updateItemVisibility(e, t),
        prx.updateItemRotation(e, t),
        -1 == i && (i = t.split("-")[1]),
        t.indexOf("box") > -1)
      ) {
        var r = t.split("box-"),
          o = "box-" + r[r.length - 1],
          a = $("#" + t + "-" + e.id)
            .parents("[data-state-id]")
            .eq(1)
            .attr("data-state-id");
        if (
          "undefined" != typeof prx.allItems[o].states &&
          "undefined" != typeof prx.allItems[o].states[a]
        ) {
          var s = $.evalJSON(
            prx[prx.allItems[o].containertype][prx.allItems[o].containerindex]
              .states[prx.allItems[o].states[a].stateindex].data
          );
          if ("undefined" != typeof s.items)
            var l = s.items[prx.allItems[o].itemindex];
          else var l = s[prx.allItems[o].states[a].itemindex];
        }
        prx.updateSymbolItemPosition(e, t, i, l);
      } else prx.updateItemPosition(e, t, i);
      "undefined" != typeof prx.types[e.type] &&
        "undefined" != typeof prx.types[e.type].afterDisplay &&
        prx.types[e.type].afterDisplay(e, t, i),
        prx.parseItemAction(e, t, i),
        prx.makeDraggable(e, i, t);
    }
  }),
  (prx.actionChangeState = function(e, t) {
    var i = e.pageId;
    -1 == i && (i = e.containerid.split("-")[1]);
    var n = e.stateId,
      r = !1,
      o = e.targetId,
      a = 0;
    switch ((prx.setActionIsRunningFalse(e), t)) {
      case "pages":
        var s = prx.getPageIndexFromId(i),
          l = "#p-" + i;
        break;
      case "templates":
        var c = prx.getPageIndexFromId(i);
        if (-1 == c) return prx.callbackAction(e), !1;
        var s = prx.getTemplateIndexFromId(prx.pages[c].states[0].template.id);
        o = "#p-" + i + "-t" + +prx.pages[c].states[0].template.id;
        var l = o;
        break;
      case "symbols":
        var d = -1,
          p = e.itemId;
        if (
          -1 == p ||
          (p.match(/box/g) || []).length > 1 ||
          p.indexOf("t") > -1
        ) {
          var u = e.targetId.split("box-");
          p = "box-" + u[u.length - 1];
        }
        for (var h in prx.allItems[p].states)
          if (prx.allItems[p].states.hasOwnProperty(h)) {
            var f = $.evalJSON(
              prx[prx.allItems[p].containertype][prx.allItems[p].containerindex]
                .states[prx.allItems[p].states[h].stateindex].data
            );
            d = f[prx.allItems[p].states[h].itemindex].symbolid;
            break;
          }
        if (-1 == d) return prx.callbackAction(e), !1;
        var s = prx.getSymbolIndexFromId(d),
          l = e.targetId;
    }
    if (-1 == s || 0 == $(l).length) return prx.callbackAction(e), !1;
    var m = $(l).attr("data-state-id");
    switch (n) {
      case "previous-state":
        for (var g = 0; g < prx[t][s].states.length; g++)
          if (prx[t][s].states[g].id == m) {
            if (0 == g) return prx.callbackAction(e), !1;
            n = prx[t][s].states[g - 1].id;
            break;
          }
        break;
      case "next-state":
        for (var g = 0; g < prx[t][s].states.length; g++)
          if (prx[t][s].states[g].id == m) {
            if (g == prx[t][s].states.length - 1)
              return prx.callbackAction(e), !1;
            n = prx[t][s].states[g + 1].id;
            break;
          }
        break;
      case "first-state":
        n = prx[t][s].states[0].id;
        break;
      case "last-state":
        n = prx[t][s].states[prx[t][s].states.length - 1].id;
        break;
      default:
        if (-1 == prx.getStateIndexFromId(n, t, s))
          return prx.callbackAction(e), !1;
    }
    if (
      (n == m &&
        "undefined" != typeof $(l).attr("data-previous-state-id") &&
        (m = $(l).attr("data-previous-state-id")),
      $(l).trigger("stateleave"),
      $(l)
        .attr("data-state-id", n)
        .attr("data-previous-state-id", m),
      "undefined" != typeof prx[t][s].state_transitions_reverse &&
        "undefined" !=
          typeof prx[t][s].state_transitions_reverse[m + ":" + n] &&
        prx[t][s].state_transitions_reverse[m + ":" + n])
    ) {
      if (
        ((r = !0),
        "undefined" != typeof prx.stateTimelines[l + "-" + n + ":" + m] &&
          prx.stateTimelines[l + "-" + n + ":" + m].length > 0)
      ) {
        var v = prx.stateTimelines[l + "-" + n + ":" + m][
            prx.stateTimelines[l + "-" + n + ":" + m].length - 1
          ].time(),
          y = prx.stateTimelines[l + "-" + n + ":" + m][0].totalDuration();
        a = y - v;
      }
      r = !0;
    }
    var b = prx.getChangesBetweenStates(m, n, t, s);
    if (
      (prx[t][s].states[prx.getStateIndexFromId(m, t, s)].data,
      "undefined" != typeof e._timelineToUse)
    )
      var x = e._timelineToUse;
    else var x = new TimelineMax({ force3D: prx.greensockForce3D, paused: !0 });
    if (0 != b) {
      var w,
        _,
        T,
        k,
        C,
        F,
        S = t,
        P = s,
        D = {},
        A = {},
        I = 0;
      if (r) {
        if (
          "undefined" != typeof prx[S][P].state_transitions &&
          "undefined" != typeof prx[S][P].state_transitions[n + ":" + m]
        )
          var E = prx[S][P].state_transitions[n + ":" + m];
      } else if (
        "undefined" != typeof prx[S][P].state_transitions &&
        "undefined" != typeof prx[S][P].state_transitions[m + ":" + n]
      )
        var E = prx[S][P].state_transitions[m + ":" + n];
      for (var g = 0; g < b.length; g++) {
        (k = 0), (C = 0), (F = "linear");
        var j = 9999,
          M = 0;
        if (
          ("undefined" != typeof E &&
            "undefined" != typeof E[b[g].id] &&
            "undefined" != typeof E[b[g].id].common &&
            ("undefined" != typeof E[b[g].id].common.delay &&
              (C = E[b[g].id].common.delay),
            "undefined" != typeof E[b[g].id].common.duration &&
              (k = E[b[g].id].common.duration),
            "undefined" != typeof E[b[g].id].common.easing &&
              (F = E[b[g].id].common.easing),
            (j = C),
            (M = C + k)),
          "undefined" != typeof b[g].changes)
        )
          for (var O in b[g].changes)
            if (b[g].changes.hasOwnProperty(O)) {
              b[g].changes[O];
              var N,
                L = b[g].componentType,
                R = !0,
                z = !1,
                H = !1;
              if (
                ((_ = C),
                (w = k),
                (T = F),
                "undefined" != typeof E &&
                  "undefined" != typeof E[b[g].id] &&
                  "undefined" != typeof E[b[g].id][O] &&
                  ("undefined" != typeof E[b[g].id][O].delay &&
                    (_ = E[b[g].id][O].delay),
                  "undefined" != typeof E[b[g].id][O].duration &&
                    (w = E[b[g].id][O].duration),
                  "undefined" != typeof E[b[g].id][O].easing &&
                    (T = E[b[g].id][O].easing),
                  "undefined" != typeof E[b[g].id][O].rotationDirection &&
                    (N = E[b[g].id][O].rotationDirection)),
                "new-component" == b[g].type ||
                  "removed-component" == b[g].type)
              ) {
                "opacity" == O &&
                  (A[b[g].id + "-" + O] = {
                    duration: w,
                    delay: parseFloat(_) + 0.001,
                    easing: T,
                    transitionable: !0,
                    rerender: !1,
                  });
                continue;
              }
              if (
                "current-page" == b[g].id ||
                "current-page-template" == b[g].id ||
                "current-container" == b[g].id
              ) {
                A[b[g].id + "-" + O] = {
                  duration: w,
                  delay: _,
                  easing: T,
                  transitionable: !0,
                  rerender: !1,
                };
                continue;
              }
              if ("dynamicProperties" == O) {
                A[b[g].id + "-" + O] = {
                  duration: 0,
                  delay: !1,
                  easing: T,
                  transitionable: !1,
                  rerender: !0,
                };
                continue;
              }
              if ("visible" == O) {
                A[b[g].id + "-" + O] = {
                  duration: w,
                  delay: _,
                  easing: T,
                  transitionable: !0,
                  rerender: !1,
                };
                continue;
              }
              if (O.indexOf("dynamicProperties-") > -1)
                var W = prx.types[L].dynamicProperties,
                  u = O.split("-"),
                  B = u[u.length - 1];
              else
                var W = prx.types[L],
                  B = O;
              if ("undefined" != typeof W.editableProperties)
                for (var q = 0; q < W.editableProperties.length; q++)
                  if (
                    W.editableProperties[q].name == B &&
                    "undefined" != typeof W.editableProperties[q].changeProperty
                  ) {
                    "undefined" !=
                      typeof W.editableProperties[q].changeProperty
                        .transitionable &&
                      (R =
                        W.editableProperties[q].changeProperty.transitionable),
                      "undefined" !=
                        typeof W.editableProperties[q].changeProperty
                          .rerender &&
                        (z = W.editableProperties[q].changeProperty.rerender),
                      (H = !0);
                    break;
                  }
              if (!H && "undefined" != typeof W.interactions)
                for (var q = 0; q < W.interactions.length; q++)
                  if (
                    W.interactions[q].name == B &&
                    "undefined" != typeof W.interactions[q].changeProperty
                  ) {
                    (caption = W.interactions[q].changeProperty.caption),
                      "undefined" !=
                        typeof W.interactions[q].changeProperty
                          .transitionable &&
                        (R = W.interactions[q].changeProperty.transitionable),
                      "undefined" !=
                        typeof W.interactions[q].changeProperty.rerender &&
                        (z = W.interactions[q].changeProperty.rerender),
                      (H = !0);
                    break;
                  }
              if (!H && "undefined" != typeof W.propertyGroups)
                for (var q = 0; q < W.propertyGroups.length; q++)
                  for (
                    var X = 0;
                    X < W.propertyGroups[q].properties.length;
                    X++
                  )
                    for (
                      var U = 0;
                      U < W.propertyGroups[q].properties[X].length;
                      U++
                    )
                      if (
                        W.propertyGroups[q].properties[X][U].name == B &&
                        "undefined" !=
                          typeof W.propertyGroups[q].properties[X][U]
                            .changeProperty
                      ) {
                        "undefined" !=
                          typeof W.propertyGroups[q].properties[X][U]
                            .changeProperty.transitionable &&
                          (R =
                            W.propertyGroups[q].properties[X][U].changeProperty
                              .transitionable),
                          "undefined" !=
                            typeof W.propertyGroups[q].properties[X][U]
                              .changeProperty.rerender &&
                            (z =
                              W.propertyGroups[q].properties[X][U]
                                .changeProperty.rerender),
                          (H = !0);
                        break;
                      }
              R || (w = 0),
                z && ((w = 0), (_ = !1)),
                (A[b[g].id + "-" + O] = {
                  duration: w,
                  delay: _,
                  easing: T,
                  transitionable: R,
                  rerender: z,
                }),
                "undefined" != typeof N &&
                  (r && ("cw" == N ? (N = "ccw") : "ccw" == N && (N = "cw")),
                  (A[b[g].id + "-" + O].rotationDirection = N)),
                (j = j > _ ? _ : j),
                (M = _ + w > M ? _ + w : M);
            }
        9999 == j && (j = 0),
          (k = M - j),
          (C = j),
          (D["changed-" + b[g].id] = { duration: k, delay: C, easing: F }),
          k + C > I && (I = k + C);
      }
      if (r) {
        for (var O in A)
          A.hasOwnProperty(O) &&
            (A[O].delay !== !1 &&
              (A[O].delay = I - (A[O].delay + A[O].duration)),
            (A[O].easing = prx.getReverseEasing(A[O].easing)));
        for (var O in D)
          D.hasOwnProperty(O) &&
            ((D[O].delay = I - (D[O].delay + D[O].duration)),
            (D[O].easing = prx.getReverseEasing(D[O].easing)));
      }
      for (var O in A)
        if (A.hasOwnProperty(O) && A[O].delay === !1) {
          var Y = "changed-" + O.split("-")[0] + "-" + O.split("-")[1];
          A[O].delay = D[Y].duration + D[Y].delay;
        }
      for (var g = 0; g < b.length; g++) {
        switch (b[g].type) {
          case "new-component":
            !(function(e) {
              prx.rerenderItem(b[e].item, o.slice(1), i),
                x.add(function() {
                  this.timeline.data.reversing
                    ? $(o + "-" + b[e].id).addClass("ghost-component")
                    : $(o + "-" + b[e].id).removeClass("ghost-component");
                }, 0);
            })(g);
            break;
          case "removed-component":
            var _ = D["changed-" + b[g].id].delay,
              w = D["changed-" + b[g].id].duration;
            !(function(e, t, i) {
              x.add(function() {
                this.timeline.data.reversing
                  ? $(o + "-" + b[e].id).removeClass("ghost-component")
                  : $(o + "-" + b[e].id).addClass("ghost-component");
              }, t + i);
            })(g, _, w);
            break;
          case "changed-component":
          case "container-properties":
          case "page-properties":
          case "template-properties":
            break;
          case "reordered-components":
            !(function(e) {
              x.add(function() {
                var t = this;
                components = t.timeline.data.reversing
                  ? b[e].old_order.split(",")
                  : b[e].new_order.split(",");
                for (var i = 1; i < components.length; i++)
                  $(o + "-" + components[i]).insertAfter(
                    o + "-" + components[i - 1]
                  ),
                    prx.refreshHtmlComponent(components[i], o.slice(1), n);
              }, I);
            })(g);
        }
        "undefined" != typeof b[g].changes &&
          $.each(b[g].changes, function(e, t) {
            if ("undefined" != typeof A[b[g].id + "-" + e]) {
              var n = A[b[g].id + "-" + e].delay,
                r = A[b[g].id + "-" + e].duration;
              switch (b[g].id) {
                case "current-page":
                  var a = o;
                  break;
                case "current-container":
                  var a = o + "-scroll";
                  break;
                default:
                  var a = o + "-" + b[g].id;
              }
              var s = {
                _timelineToUse: x,
                pageId: i,
                itemId: b[g].id,
                targetId: a,
                containerid: o.slice(1),
                componentType: b[g].componentType,
                propertyId: e,
                newvalue: t[1],
                oldvalue: t[0],
                duration: 1e3 * r,
                delay: 1e3 * n,
                animationEasing: A[b[g].id + "-" + e].easing,
              };
              if (
                ("undefined" != typeof A[b[g].id + "-" + e].rotationDirection &&
                  (s.rotationDirection =
                    A[b[g].id + "-" + e].rotationDirection),
                e.indexOf("dynamicProperties-") > -1)
              ) {
                var l = e.split("-");
                (s.propertyType = "dynamic-property"),
                  (s.itemIndex = l[1]),
                  (s.propertyId = l[l.length - 1]);
              }
              x = prx.actionChangeProperty(s);
            }
          });
      }
    } else
      var j = 0,
        I = 0.0013;
    if (
      (x.add(function() {
        this.timeline.data.reversing || $(l).trigger("stateenter");
      }, 0.001),
      x.add(function() {
        ("undefined" != typeof this.timeline.data.suppressEvents &&
          this.timeline.data.suppressEvents) ||
          (this.timeline.data.reversing
            ? $(l).trigger("statetransitionend")
            : $(l).trigger("statetransitionstart"));
      }, j),
      0 == j && (j = 0.0012),
      x.add(function() {
        ("undefined" != typeof this.timeline.data.suppressEvents &&
          this.timeline.data.suppressEvents) ||
          (this.timeline.data.reversing
            ? $(l).trigger("statetransitionstart")
            : $(l).trigger("statetransitionend"));
      }, I),
      (x.data = { reversing: !1 }),
      "undefined" == typeof prx.stateTimelines[l + "-" + m + ":" + n])
    )
      prx.stateTimelines[l + "-" + m + ":" + n] = [];
    else if (prx.stateTimelines[l + "-" + m + ":" + n].length > 1)
      for (
        var g = prx.stateTimelines[l + "-" + m + ":" + n].length - 1;
        g > 0;
        g--
      )
        prx.stateTimelines[l + "-" + m + ":" + n][g].kill(),
          prx.stateTimelines[l + "-" + m + ":" + n].splice(g, 1);
    x.eventCallback("onComplete", function() {
      ("undefined" != typeof this.data.suppressEvents &&
        this.data.suppressEvents) ||
        ($(o).attr("data-state-id") == n && prx.callbackAction(e)),
        prx.refreshScrollers(i);
    }),
      prx.stateTimelines[l + "-" + m + ":" + n].push(x);
    var V = {
      pageId: i,
      itemId: "pages" == t ? "page-transition" : p,
      targetId: l,
      stateTransition: "all-transitions",
      endTransition: !1,
    };
    return (
      prx.actionStopStateTransition(V),
      "undefined" != typeof e._timelineToUse
        ? x
        : (x.seek(x.totalDuration()).play(a), void 0)
    );
  }),
  (prx.actionStopStateTransition = function(e) {
    -1 == e.pageId && (e.pageId = e.containerid.split("-")[1]);
    var t = "pages",
      i = prx.getPageIndexFromId(e.pageId);
    switch (e.itemId) {
      case "page-transition":
        (t = "pages"),
          (i = prx.getPageIndexFromId(e.pageId)),
          (e.targetId = "#p-" + e.pageId);
        break;
      default:
        var n = e.itemId;
        if (-1 == n) {
          var r = e.containerid.split("-");
          n = "box-" + r[r.length - 1];
        }
        var o = prx.recursivelyFindItemSymbolId(n, t, i);
        if (!o) return prx.callbackAction(e), !1;
        (t = "symbols"), (i = prx.getSymbolIndexFromId(o));
    }
    var a = [];
    if ("all-transitions" == e.stateTransition)
      for (var s = 0; s < prx[t][i].states.length; s++)
        a.push(prx[t][i].states[s].id);
    else a.push(e.stateTransition);
    for (var l in prx.stateTimelines)
      if (prx.stateTimelines.hasOwnProperty(l))
        for (var s = 0; s < a.length; s++)
          if (l.indexOf(e.targetId) > -1 && l.indexOf(a[s]) > -1)
            for (var c = 0; c < prx.stateTimelines[l].length; c++)
              e.endTransition &&
                ("undefined" == typeof prx.stateTimelines[l][c].data &&
                  (prx.stateTimelines[l][c].data = {}),
                (prx.stateTimelines[l][c].data.suppressEvents = !0),
                prx.stateTimelines[l][c].seek(
                  prx.stateTimelines[l][c].totalDuration(),
                  !1
                )),
                prx.stateTimelines[l][c].pause();
    prx.callbackAction(e);
  }),
  (prx.actionTriggerExternalLink = function(e) {
    var t = "";
    switch (e.actionId) {
      case "open-external-url":
        prx.inProtoApp && (t += "targetblank://"), (t += e.url);
        break;
      case "send-email":
        t +=
          "mailto:" +
          e.email +
          "?subject=" +
          encodeURIComponent(e.emailSubject) +
          "&body=" +
          encodeURIComponent(e.emailBody);
        break;
      case "make-phone-call":
        t += "tel:" + e.phone;
        break;
      case "send-sms":
        t += "sms:" + e.phone;
    }
    $('<a href="' + t + '" target="_blank" id="temp-for-external-link"></a>')
      .appendTo("body")[0]
      .click(),
      $("#temp-for-external-link").remove(),
      prx.callbackAction(e);
  }),
  (prx.buildAction = function(e, t, i) {
    if ("undefined" != typeof e.enabled && !e.enabled) return !1;
    if (
      ("undefined" == typeof i && (i = !0),
      "undefined" == typeof e.live && (e.live = !1),
      "undefined" == typeof e.delay && (e.delay = 0),
      "containerpageenter" == e.type &&
        "undefined" == typeof e.namespace &&
        (e.namespace =
          ".page" + e.eventItemIndex[0] + "-" + e.eventItemIndex[1]),
      "undefined" == typeof e.namespace && (e.namespace = ""),
      "undefined" == typeof e.guid && (e.guid = getGuid()),
      "undefined" == typeof e.callback && (e.callback = !1),
      (t = !0),
      "undefined" == typeof e.targetId)
    )
      if ("undefined" != typeof e.pageId)
        e.targetId = "#p-" + e.pageId + "-" + e.itemId;
      else if (
        ((e.targetId =
          -1 == e.itemId
            ? "#" + e.containerid
            : "#" + e.containerid + "-" + e.itemId),
        -1 == e.itemId)
      ) {
        var n = e.containerid.split("-");
        e.itemId = "box-" + n[n.length - 1];
      }
    if ("undefined" != typeof e.pageId)
      if (-1 == e.pageId) {
        if (
          "undefined" != typeof e.itemId &&
          null != e.itemId &&
          "undefined" != typeof e.containerid &&
          null != e.containerid &&
          e.itemId.split("-").shift() == e.containerid.split("-").pop()
        )
          e.targetId =
            "#" +
            e.containerid +
            "-" +
            e.itemId
              .split("-")
              .slice(1)
              .join("-");
        else if (
          ((e.targetId =
            -1 == e.itemId
              ? "#" + e.containerid
              : "#" + e.containerid + "-" + e.itemId),
          -1 == e.itemId)
        ) {
          var n = e.containerid.split("-");
          e.itemId = "box-" + n[n.length - 1];
        }
      } else if (-2 == e.pageId) {
        var n = e.targetId.split(/[-\[]/);
        (e.targetId = "#p-" + n[1]), (e.pageId = n[1]);
      } else
        ("undefined" == typeof e.allowOverwriteTargetId ||
          e.allowOverwriteTargetId) &&
          (e.targetId =
            "undefined" != typeof e.itemId
              ? "#p-" + e.pageId + "-" + e.itemId
              : "#p-" + e.pageId);
    var r = e.guid.split("-guid-");
    return (
      (e.guid =
        e.bindTo + "-target-" + e.targetId + "-guid-" + r[r.length - 1]),
      "" == e.animation && (e.animation = "none"),
      t && "click" == e.type && (e.type = "tap"),
      "taphold" == e.type && (e.type = "press"),
      i &&
        (e.live
          ? ($("body").off(
              e.type +
                e.namespace +
                "." +
                e.guid.replace(/-/g, "").replace("#", ""),
              e.bindTo
            ),
            $("body")
              .hammer()
              .on(
                e.type +
                  e.namespace +
                  "." +
                  e.guid.replace(/-/g, "").replace("#", ""),
                e.bindTo,
                function(t, i) {
                  if (0 == prx.actionIsRunning[e.guid]) {
                    if (
                      ((_activePage = prx.activepage),
                      "click" == e.type || "tap" == e.type)
                    )
                      for (var n = t.target; null != n && 1 == n.nodeType; ) {
                        if ("undefined" != typeof prx.scroller[n.id]) {
                          if (prx.scroller[n.id].moved) return !1;
                          break;
                        }
                        n = n.parentNode;
                      }
                    if (
                      ("keydown" != e.type ||
                        ("keydown" == e.type &&
                          t.which == e.charCode &&
                          _activePage == e.bindPageId &&
                          !/textarea|select|input/i.test(t.target.nodeName))) &&
                      (prx.actions[e.guid].call(this, t, i),
                      "keydown" == e.type)
                    )
                      return !1;
                  }
                }
              ),
            prx.setupHammer("body", e.type))
          : ($(e.bindTo)
              .hammer()
              .on(e.type + e.namespace, function(t, i) {
                if (1 == prx.actionIsRunning[e.guid]) return !1;
                if (
                  ((_activePage = prx.activepage),
                  "click" == e.type || "tap" == e.type)
                )
                  for (var n = t.target; null != n && 1 == n.nodeType; ) {
                    if ("undefined" != typeof prx.scroller[n.id]) {
                      if (prx.scroller[n.id].moved) return !1;
                      break;
                    }
                    n = n.parentNode;
                  }
                return ("keydown" == e.type &&
                  ("keydown" != e.type ||
                    t.which != e.charCode ||
                    _activePage != e.bindPageId ||
                    /textarea|select|input/i.test(t.target.nodeName))) ||
                  (prx.actions[e.guid].call(this, t, i), "keydown" != e.type)
                  ? void 0
                  : !1;
              }),
            prx.setupHammer(e.bindTo, e.type))),
      (prx.actionIsRunning[e.guid] = !1),
      prx.generateActionFunction(e),
      e.callback &&
        (e.loop &&
          ((e.callbackAction.loop = e.loop),
          (e.callbackAction.loopGUID =
            "undefined" != typeof e.loopGUID ? e.loopGUID : e.guid)),
        "undefined" == typeof e.previousActions && (e.previousActions = []),
        "undefined" != typeof e.containerid &&
          (e.callbackAction.containerid = e.containerid),
        "undefined" != typeof e.targetId,
        "undefined" != typeof e.bindTo && (e.callbackAction.bindTo = e.bindTo),
        "undefined" != typeof e.type && (e.callbackAction.type = e.type),
        (e.callbackAction.previousActions = e.previousActions),
        e.callbackAction.previousActions.push(e.guid),
        prx.buildAction(e.callbackAction, void 0, !1)),
      !0
    );
  }),
  (prx.setupHammer = function(e, t) {
    var i = $(e).data("hammer");
    if ("undefined" == typeof i) return !1;
    if (
      (i
        .get("swipe")
        .set({ direction: Hammer.DIRECTION_ALL, velocity: -1, threshold: 20 }),
      i.get("pan").set({ direction: Hammer.DIRECTION_ALL }),
      i.get("tap").set({ time: 500, threshold: 10 }),
      i.get("doubletap").set({ posThreshold: 60 }),
      "touch" == t &&
        $(e)
          .off("hammer.input")
          .on("hammer.input", function(e) {
            1 == e.gesture.pointers.length &&
              e.gesture.isFirst &&
              $(this).trigger("touch");
          }),
      "release" == t || "delayedtap" == t)
    ) {
      var n = function() {
        Hammer.AttrRecognizer.apply(this, arguments);
      };
      Hammer.inherit(n, Hammer.AttrRecognizer, {
        defaults: { event: "release", pointers: 1 },
        getTouchAction: function() {
          return [Hammer.TOUCH_ACTION_AUTO];
        },
        attrTest: function(e) {
          return this._super.attrTest.call(this, e) && e.isFinal;
        },
      }),
        i
          .add(new n())
          .recognizeWith([
            i.get("tap"),
            i.get("press"),
            i.get("swipe"),
            i.get("pan"),
          ]);
    }
    "delayedtap" == t &&
      (i.add(
        new Hammer.Tap({ event: "delayedtap", time: 500 })
          .recognizeWith(i.get("tap"))
          .requireFailure(i.get("doubletap"))
      ),
      i.get("release").recognizeWith(i.get("delayedtap"))),
      ["pinch", "pinchin", "pinchout"].indexOf(t) > -1 &&
        i.get("pinch").set({ enable: !0 });
  }),
  (prx.generateActionFunction = function(e) {
    prx.actions[e.guid] = function(t, i) {
      if (
        "undefined" != typeof t &&
        ("stateenter" == t.type ||
          "stateleave" == t.type ||
          "statetransitionstart" == t.type ||
          "statetransitionend" == t.type) &&
        t.target != t.currentTarget
      )
        return !1;
      switch (
        (!prx.actionIsRunning[e.guid] &&
          e.loop &&
          "undefined" != typeof e.loopIterations &&
          (prx.actionLoopCounter[e.guid] = e.loopIterations - 1),
        (prx.actionIsRunning[e.guid] = !0),
        "undefined" != typeof t &&
          (t.stopPropagation(),
          "tap" == e.type &&
            ("undefined" != typeof t.gesture &&
              "undefined" != typeof t.gesture.srcEvent &&
              "undefined" != typeof t.gesture.srcEvent.preventDefault &&
              (t.gesture.srcEvent.preventDefault(),
              "touchend" == t.gesture.srcEvent.type &&
                ($(this)
                  .find("input[type=radio]")
                  .not(":visible")
                  .not(":disabled")
                  .attr("checked", "checked"),
                $(this)
                  .find("input[type=checkbox]")
                  .not(":visible")
                  .not(":disabled")
                  .each(function() {
                    $(this).is(":checked")
                      ? $(this).removeAttr("checked")
                      : $(this).attr("checked", "checked");
                  }))),
            $(this)
              .parents(".type-symbol")
              .children()
              .each(function() {
                "undefined" != typeof prx.scroller[this.id] &&
                  prx.scroller[this.id]._end({
                    type: "touchend",
                    target: this,
                    preventDefault: function() {},
                  });
              })),
          ["pan", "panleft", "panright", "panup", "pandown", "panend"].indexOf(
            t.type
          ) > -1 &&
            "undefined" != typeof t.gesture &&
            ("undefined" == typeof prx.triggerData[e.bindTo] &&
              (prx.triggerData[e.bindTo] = {}),
            "undefined" == typeof prx.triggerData[e.bindTo][t.type] &&
              (prx.triggerData[e.bindTo][t.type] = {}),
            (prx.triggerData[e.bindTo][t.type].distancex = t.gesture.deltaX),
            (prx.triggerData[e.bindTo][t.type].distancey = t.gesture.deltaY),
            (prx.triggerData[e.bindTo][t.type].direction =
              prx.hammerDirToString[t.gesture.direction])),
          ["pinch", "pinchin", "pinchout"].indexOf(t.type) > -1 &&
            "undefined" != typeof t.gesture &&
            ("undefined" == typeof prx.triggerData[e.bindTo] &&
              (prx.triggerData[e.bindTo] = {}),
            "undefined" == typeof prx.triggerData[e.bindTo][t.type] &&
              (prx.triggerData[e.bindTo][t.type] = {}),
            (prx.triggerData[e.bindTo][t.type].scale = t.gesture.scale))),
        e.actionId)
      ) {
        case "alert":
          alert(e.bindTo), prx.callbackAction(e);
          break;
        case "alert-variable":
          alert(prx.readVariable(e.variable)), prx.callbackAction(e);
          break;
        case "stoppropagation":
          prx.callbackAction(e);
          break;
        case "go-to-page":
          prx.actionGoToPage(e);
          break;
        case "load-page":
          prx.actionLoadPage(e);
          break;
        case "unload-page":
          prx.actionUnloadPage(e);
          break;
        case "hide-item":
          prx.actionHideItem(e);
          break;
        case "show-item":
          prx.actionShowItem(e);
          break;
        case "show-hide-item":
          "undefined" == typeof e.duration && (e.duration = 200);
          var n = $.evalJSON($.toJSON(e));
          (n.callback = !1),
            prx.actionShowItem(n),
            setTimeout(function() {
              prx.actionHideItem(e);
            }, e.duration);
          break;
        case "toggle-item":
          prx.actionToggleItem(e);
          break;
        case "highlight-navbar-item":
          setTimeout(function() {
            if ("-1" == e.itemIndex)
              $(e.targetId + " input[type=radio]").removeAttr("checked");
            else {
              var t = e.targetId + "-radio-" + e.itemIndex;
              $("[id=" + t.substr(1) + "]").attr("checked", !0);
            }
            prx.callbackAction(e);
          }, e.delay);
          break;
        case "highlight-list-item":
          setTimeout(function() {
            if ("-1" == e.itemIndex)
              $(
                e.targetId +
                  " input[type=radio], " +
                  e.targetId +
                  " input[type=checkbox]"
              ).removeAttr("checked");
            else {
              var t = e.targetId + "-checkbox-" + e.itemIndex;
              $(t).attr("checked", !0);
            }
            prx.callbackAction(e);
          }, e.delay);
          break;
        case "highlight-pagecontroller-item":
          setTimeout(function() {
            "-1" == e.itemIndex
              ? $(e.targetId + " input[type=radio]").removeAttr("checked")
              : $(e.targetId + " input")
                  .eq(parseInt(e.itemIndex))
                  .attr("checked", "checked"),
              prx.callbackAction(e);
          }, e.delay);
          break;
        case "play-audio":
          setTimeout(function() {
            $(e.targetId + " audio")
              .get(0)
              .play(),
              prx.callbackAction(e);
          }, e.delay);
          break;
        case "pause-audio":
          setTimeout(function() {
            $(e.targetId + " audio")
              .get(0)
              .pause(),
              prx.callbackAction(e);
          }, e.delay);
          break;
        case "stop-audio":
          setTimeout(function() {
            $(e.targetId + " audio")
              .get(0)
              .pause(),
              0 != $(e.targetId + " audio").get(0).readyState &&
                ($(e.targetId + " audio").get(0).currentTime = 0),
              prx.callbackAction(e);
          }, e.delay);
          break;
        case "play-video":
          setTimeout(function() {
            $(e.targetId + " video")
              .get(0)
              .play(),
              prx.callbackAction(e);
          }, e.delay);
          break;
        case "pause-video":
          setTimeout(function() {
            $(e.targetId + " video")
              .get(0)
              .pause(),
              prx.callbackAction(e);
          }, e.delay);
          break;
        case "stop-video":
          setTimeout(function() {
            $(e.targetId + " video")
              .get(0)
              .pause(),
              ($(e.targetId + " video").get(0).currentTime = 0),
              prx.callbackAction(e);
          }, e.delay);
          break;
        case "go-to-carousel-page":
          prx.actionGoToCarouselPage(e);
          break;
        case "scroll-scrollable-container":
          prx.actionScrollScrollableContainer(e);
          break;
        case "sync-pagecontroller-item":
          var r = 0;
          (r = $(e.targetId).hasClass("type-pagecontroller-vertical")
            ? i.currentPage.pageY
            : i.currentPage.pageX),
            setTimeout(function() {
              $(e.targetId + " input:eq(" + r + ")").attr("checked", "checked"),
                prx.callbackAction(e);
            }, e.delay);
          break;
        case "fire-item-event":
          prx.actionFireItemEvent(e);
          break;
        case "animate-item":
          prx.actionAnimateItem(e);
          break;
        case "end-loop":
          setTimeout(function() {
            for (var t in prx.actionLoopCounter)
              if (
                prx.actionLoopCounter.hasOwnProperty(t) &&
                t.indexOf(e.actionGuid) > -1
              ) {
                var i = e.pageId;
                (i = -1 == i ? e.containerid : "p-" + i),
                  (0 == t.indexOf("#" + i + "-") ||
                    0 == t.indexOf("#" + i + "[")) &&
                    (prx.actionLoopCounter[t] = 0);
              }
            prx.callbackAction(e);
          }, e.delay);
          break;
        case "change-property":
          prx.actionChangeProperty(e);
          break;
        case "set-variable":
          prx.actionSetVariable(e);
          break;
        case "move-screen":
          prx.actionMoveScreen(e);
          break;
        case "change-screen-state":
          setTimeout(function() {
            prx.actionChangeState(e, "pages");
          }, e.delay);
          break;
        case "change-template-state":
          setTimeout(function() {
            prx.actionChangeState(e, "templates");
          }, e.delay);
          break;
        case "go-to-container-state":
        case "change-container-state":
          setTimeout(function() {
            prx.actionChangeState(e, "symbols");
          }, e.delay);
          break;
        case "stop-state-transition":
          setTimeout(function() {
            prx.actionStopStateTransition(e);
          }, e.delay);
          break;
        case "open-external-url":
        case "send-email":
        case "make-phone-call":
        case "send-sms":
          setTimeout(function() {
            prx.actionTriggerExternalLink(e);
          }, e.delay);
      }
    };
  }),
  (prx.callbackAction = function(e) {
    if (e.callback) prx.actions[e.callbackAction.guid].call(this);
    else if ("undefined" != typeof e.loop && e.loop) {
      var t = "undefined" != typeof e.loopGUID ? e.loopGUID : e.guid;
      prx.actionLoopCounter[t] > 0
        ? (prx.actionLoopCounter[t]--, prx.actions[t].call())
        : (prx.actionIsRunning[t] = !1);
    } else prx.setActionIsRunningFalse(e);
  }),
  (prx.setActionIsRunningFalse = function(e) {
    if (
      "undefined" != typeof e.guid &&
      ((prx.actionIsRunning[e.guid] = !1),
      "undefined" != typeof e.previousActions)
    )
      for (var t = 0; t < e.previousActions.length; t++)
        prx.actionIsRunning[e.previousActions[t]] = !1;
  }),
  (prx.preLoadPage = function(e) {
    var t = prx.getAllPageItems(prx.getPageIndexFromId(e.id)),
      i = prx.getPageOrientation(e),
      n = 0,
      r = 0,
      o = 0;
    (n = prx.devices[prx.device][i][0]),
      (r = prx.devices[prx.device][i][1]),
      (o = r),
      $("#dragarea").width(n);
    var a = $("#p-" + e.id).attr("data-state-id", e.states[0].id);
    a.width(n),
      a.css("height", r + "px"),
      a.unbind("pageshow").bind("pageshow", function() {
        if (
          (a.height(r),
          $(".remove-on-pageshow").removeClass("remove-on-pageshow"),
          prx.refreshScrollers(e.id),
          prx.refreshDraggables(e.id),
          !prx.embed && parent != window)
        )
          try {
            parent.prx.highlightPage(e.id);
          } catch (t) {}
        return (
          $("#overlay")
            .empty()
            .hide(),
          !1
        );
      }),
      "undefined" == e.navigationbar && (e.navigationbar = "0"),
      (prx.statusbars[e.id] = {}),
      (prx.statusbars[e.id].statusbar = e.statusbar),
      (prx.statusbars[e.id].orientation = i);
    var s = $(window).width() < $(window).height() ? "portrait" : "landscape";
    if (
      ("undefined" == typeof e.navigationbar && (e.navigationbar = "0"),
      (prx.navigationbars[e.id] = {}),
      (prx.navigationbars[e.id].navigationbar = e.navigationbar),
      (prx.navigationbars[e.id].orientation = i),
      e.orientation == s)
    ) {
      var l =
        "portrait" == s
          ? prx.project.startscreen
          : prx.project.startscreenlandscape;
      if ("1" == e.statusbar) {
        if (prx.allowstatusbar)
          try {
            l == e.id &&
              ("1" != prx.export2html
                ? $("#statusbar").css({
                    "background-image": prx.buildStatusBarAsset(i),
                  })
                : "1" == prx.statusbarapplies
                ? $("#statusbar").css(
                    "background-image",
                    "url(./images/statusbar_" + i + ".png)"
                  )
                : $("#statusbar").css("background-image", "none"),
              $("#statusbar").css(
                "height",
                prx.devices[prx.device]["statusbarheight" + i] + "px"
              )),
              a.css(
                "top",
                prx.devices[prx.device]["statusbarheight" + i] + "px"
              );
          } catch (c) {}
        o -= prx.devices[prx.device]["statusbarheight" + i];
      }
      if ("1" == e.navigationbar) {
        if (prx.allownavigationbar)
          try {
            l === e.id &&
              ("1" != prx.export2html
                ? $("#navigationbar").css({
                    "background-image": prx.buildNavigationBarAsset(i),
                  })
                : "1" == prx.navigationbarapplies
                ? $("#navigationbar").css(
                    "background-image",
                    "url(./images/navigationbar_" + i + ".png)"
                  )
                : $("#statusbar").css("background-image", "none")),
              $("#navigationbar").css(
                "height",
                prx.devices[prx.device]["navigationbarheight" + i] + "px"
              ),
              $("#navigationbar").css(
                "top",
                prx.devices[prx.device][i][1] -
                  prx.devices[prx.device]["navigationbarheight" + i] +
                  "px"
              );
          } catch (c) {}
        o -= prx.devices[prx.device]["navigationbarheight" + i];
      }
    }
    if (
      ($("#dragarea").height(o),
      "undefined" == typeof e.states[0].background &&
        (e.states[0].background = "none"),
      "none" != e.states[0].background &&
        a.css("background-color", getColor(e.states[0].background)),
      ("" + e.states[0].template.id).length > 0)
    ) {
      var d = prx.getTemplateIndexFromId(e.states[0].template.id),
        p = prx.getTemplateStateIndexFromId(e.states[0].template.stateid, d);
      if (d > -1 && p > -1) {
        var u = "",
          h = prx.renderTemplate(
            e.states[0].template.id,
            u,
            e.id,
            e.states[0].template.stateid
          );
        a.append(
          '<div id="p-' +
            e.id +
            '-template" style="position: absolute; left: 0px; top: 0px; background: none; width: ' +
            n +
            "px; height: " +
            o +
            'px;">' +
            h +
            "</div>"
        ),
          (h = null),
          "undefined" == typeof prx.templates[d].states[p].background &&
            (prx.templates[d].states[p].background = "none"),
          "none" == e.background &&
            "none" != prx.templates[d].states[p].background &&
            a.css(
              "background-color",
              getColor(prx.templates[d].states[p].background)
            );
        var f = $.evalJSON(prx.templates[d].states[p].data),
          m = f;
        prx.templates[d].states[p].template.id,
          prx.loadRecursiveTemplateAfterDisplay(e.states[0].template, u, e.id),
          (f = null),
          (m = null);
      } else t.templateid = "";
    }
    $.each(t, function(t, i) {
      prx.addItem(e.id, i, t);
    }),
      prx.loadPageEvents(e.id),
      prx.loadRecursiveTemplateEvents(e.states[0].template, e.id),
      $("#p-" + e.id).trigger("pagebeforecreate"),
      $("#p-" + e.id).trigger("pagecreate");
  }),
  (prx.loadRecursiveTemplateEvents = function(template, pageid, containerid) {
    "undefined" == typeof containerid && (containerid = ""),
      prx.loadTemplateEvents(template, pageid, containerid);
    var index = prx.getTemplateIndexFromId(template.id),
      stateindex = prx.getTemplateStateIndexFromId(template.stateid, index);
    if (index > -1 && stateindex > -1) {
      var _tempdata = $.evalJSON(prx.templates[index].states[stateindex].data),
        _templateid = prx.templates[index].states[stateindex].template.id;
      void 0 != _templateid &&
        eval(_templateid) > -1 &&
        (0 == containerid.length
          ? (containerid = "t" + template.id)
          : (containerid += "-t" + template.id),
        prx.loadRecursiveTemplateEvents(
          prx.templates[index].states[stateindex].template,
          pageid,
          containerid
        )),
        (_tempdata = null);
    }
    return !0;
  }),
  (prx.loadRecursiveTemplateAfterDisplay = function(
    template,
    containerid,
    pageid
  ) {
    var index = prx.getTemplateIndexFromId(template.id),
      stateindex = prx.getTemplateStateIndexFromId(template.stateid, index),
      templateid = template.id,
      _containerid = "";
    if (
      ("undefined" == typeof containerid
        ? (containerid = "p-" + pageid + "-")
        : (0 == containerid.length
            ? (containerid = "p-" + pageid + "-")
            : (containerid += "-"),
          (_containerid = containerid + "t" + templateid)),
      index > -1 && stateindex > -1)
    ) {
      for (
        var _tempdata = prx.getAllTemplateItems(index, stateindex),
          _template = prx.templates[index].states[stateindex].template,
          _items = _tempdata,
          n = 0;
        n < _items.length;
        n++
      ) {
        var tempitem = _items[n];
        "undefined" != typeof tempitem._fromstateid &&
          ((tempitem.opacity = 0),
          $("#" + _containerid + "-" + tempitem.id).addClass(
            "ghost-component"
          )),
          prx.updateItemVisibility(tempitem, _containerid),
          prx.updateItemPosition(tempitem, _containerid, pageid),
          prx.updateItemRotation(tempitem, _containerid),
          "undefined" != typeof prx.types[tempitem.type] &&
            "undefined" != typeof prx.types[tempitem.type].afterDisplay &&
            prx.types[tempitem.type].afterDisplay(
              tempitem,
              _containerid,
              pageid
            ),
          prx.makeDraggable(tempitem, pageid, _containerid);
      }
      "undefined" ==
        typeof prx.templates[index].states[stateindex].background &&
        (prx.templates[index].states[stateindex].background = "none"),
        ("transparent" != $("#p-" + pageid).css("background-color") &&
          "rgba(0, 0, 0, 0)" != $("#p-" + pageid).css("background-color")) ||
          "none" == prx.templates[index].states[stateindex].background ||
          $("#p-" + pageid).css(
            "background-color",
            getColor(prx.templates[index].states[stateindex].background)
          ),
        void 0 != _template.id &&
          eval(_template.id) > -1 &&
          prx.loadRecursiveTemplateAfterDisplay(
            _template,
            _containerid,
            pageid
          ),
        (_tempdata = null),
        (_items = null);
    }
    return !0;
  }),
  (prx.clearDragArea = function() {
    $("#dragarea").html("");
  }),
  (prx.renderTemplate = function(templateid, containerid, pageid, stateid) {
    var index = prx.getTemplateIndexFromId(templateid),
      stateindex = 0;
    "undefined" == typeof stateid &&
      (stateid = prx.templates[index].states[0].id),
      (stateindex = prx.getTemplateStateIndexFromId(stateid, index));
    var _cR = "",
      _containerid = "";
    if (
      ("undefined" == typeof containerid
        ? (containerid = "p-" + pageid + "-")
        : (0 == containerid.length
            ? (containerid = "p-" + pageid + "-")
            : (containerid += "-"),
          (_containerid = containerid + "t" + templateid)),
      (_cR = '<div id="' + _containerid + '" data-state-id=' + stateid + ">"),
      index > -1 && stateindex > -1)
    ) {
      var _tempdata = prx.getAllTemplateItems(index, stateindex),
        _items = _tempdata,
        _templateid = prx.templates[index].states[stateindex].template.id;
      void 0 != _templateid &&
        eval(_templateid) > -1 &&
        (_cR += prx.renderTemplate(
          _templateid,
          _containerid,
          pageid,
          prx.templates[index].states[stateindex].template.stateid
        ));
      for (var n = 0; n < _items.length; n++) {
        var tempitem = _items[n];
        "undefined" != typeof tempitem._fromstateid &&
          ((tempitem.opacity = 0),
          $("#" + _containerid + "-" + tempitem.id).addClass(
            "ghost-component"
          )),
          "undefined" != typeof prx.types[tempitem.type] &&
            (_cR +=
              "undefined" != typeof prx.types[tempitem.type].onDisplayTemplate
                ? prx.types[tempitem.type].onDisplayTemplate(
                    tempitem,
                    _containerid
                  )
                : prx.types[tempitem.type].onDisplay(tempitem, _containerid));
      }
    }
    return (_cR += "</div>");
  }),
  (prx.addItem = function(e, t) {
    var i;
    t.zindex || (t.zindex = i + 1),
      t.hpos || (t.hpos = "left"),
      t.vpos || (t.vpos = "top"),
      t.wtype || (t.wtype = "fixed"),
      t.htype || (t.htype = "fixed"),
      t.opacity || (t.opacity = "1");
    var n = t;
    t = [t];
    var r = "p-" + e;
    "undefined" != typeof prx.types[n.type] &&
      "undefined" != typeof prx.types[n.type].onDisplay &&
      $("#p-" + e).append(prx.types[n.type].onDisplay(n, r)),
      "undefined" != typeof n._fromstateid &&
        ((n.opacity = 0), $("#" + r + "-" + n.id).addClass("ghost-component")),
      prx.updateItemVisibility(n, r),
      prx.updateItemPosition(n, r, e),
      prx.updateItemRotation(n, r),
      "undefined" != typeof prx.types[n.type] &&
        "undefined" != typeof prx.types[n.type].afterDisplay &&
        prx.types[n.type].afterDisplay(n, r, e),
      prx.makeDraggable(n, e);
  }),
  (prx.makeDraggable = function(e, t, i) {
    if ("undefined" != typeof e.draggable && e.draggable.isdraggable) {
      var n = 0,
        r = 0,
        o = 0,
        a = 0,
        s = {};
      if (((_bounds = ""), e.draggable.isdraggable)) {
        var l = "";
        (l =
          "undefined" == typeof i
            ? "#p-" + t + "-" + e.id
            : 0 == i.length
            ? "#p-" + t + "-" + e.id
            : "#" + i + "-" + e.id),
          (e.draggable.targetitem = $(l).addClass("draggable")),
          e.draggable.snap &&
            ((o = e.draggable.snapprops.rows),
            (a = e.draggable.snapprops.columns)),
          "auto" == e.draggable.bounds
            ? ((e.draggable.container = e.draggable.targetitem.parent()),
              e.draggable.snap &&
                ((n = e.draggable.container.width() / a),
                (r = e.draggable.container.height() / o)),
              e.width < n &&
                ((n = (e.draggable.container.width() - e.width) / a),
                (r = (e.draggable.container.height() - e.height) / o)))
            : ((e.draggable.container = {
                left: parseInt(e.draggable.boundsprops.left),
                top: parseInt(e.draggable.boundsprops.top),
                width: e.draggable.boundsprops.width,
                height: e.draggable.boundsprops.height,
              }),
              e.draggable.snap &&
                ((n = e.draggable.boundsprops.width / a),
                (r = e.draggable.boundsprops.height / o))),
          "undefined" != typeof e.draggable.handle &&
            "" != e.draggable.handle &&
            $(l + "-" + e.draggable.handle).length > 0 &&
            (e.draggable.handleid = l + "-" + e.draggable.handle),
          "undefined" == typeof e.draggable.front && (e.draggable.front = !1),
          "undefined" == typeof e.draggable.livesnap &&
            (e.draggable.livesnap = !1),
          "undefined" == typeof e.draggable.lockaxis &&
            (e.draggable.lockaxis = !1);
        var s, c;
        (c = e.draggable.kinetic ? 2 : 1e-4),
          e.draggable.snap &&
            (s =
              "rotation" != e.draggable.axis
                ? {
                    x: function(t) {
                      return e.draggable.snap
                        ? Math.max(
                            this.minX,
                            Math.min(this.maxX, Math.round(t / n) * n)
                          )
                        : t;
                    },
                    y: function(t) {
                      return e.draggable.snap
                        ? Math.max(
                            this.minY,
                            Math.min(this.maxY, Math.round(t / r) * r)
                          )
                        : t;
                    },
                  }
                : function(t) {
                    var i = e.draggable.rotationsnap;
                    return Math.round(t / i) * i;
                  });
        var d = 0;
        if (
          ((_bounds =
            "rotation" != e.draggable.axis
              ? e.draggable.container
              : "none" == e.draggable.rotationbounds
              ? { minRotation: -99999, maxRotation: 99999 }
              : {
                  minRotation: parseInt(e.draggable.boundsprops.mindegrees),
                  maxRotation: parseInt(e.draggable.boundsprops.maxdegrees),
                }),
          0 == e.draggable.targetitem.length)
        )
          return !1;
        (prx.draggables[l.substr(1)] = Draggable.create(
          e.draggable.targetitem,
          {
            type: e.draggable.axis,
            zIndexBoost: !1,
            edgeResistance: 0.95,
            throwProps: !0,
            bounds: _bounds,
            trigger:
              "undefined" != typeof e.draggable.handleid
                ? e.draggable.handleid
                : "",
            zIndexBoost: e.draggable.front,
            snap: s,
            dragResistance: 0,
            maxDuration: c,
            liveSnap: e.draggable.livesnap,
            lockAxis: e.draggable.lockaxis,
          }
        )),
          (prx.draggables[l.substr(1)][0].vars.onDragStart = function() {
            $(this.target)
              .parents(".box")
              .each(function() {
                "undefined" != typeof prx.scroller[this.id + "-inner"] &&
                  prx.scroller[this.id + "-inner"].disable();
              });
          }),
          (prx.draggables[l.substr(1)][0].vars.onDragEnd = function() {
            $(this.target)
              .parents(".box")
              .each(function() {
                "undefined" != typeof prx.scroller[this.id + "-inner"] &&
                  prx.scroller[this.id + "-inner"].enable();
              });
          });
        for (
          var p = !1, u = !1, h = !1, f = !1, m = !1, g = 0;
          g < prx._actionTypes.length;
          g++
        )
          if ("undefined" != typeof e[prx._actionTypes[g]])
            for (var v = 0; v < e[prx._actionTypes[g]].length; v++)
              switch (e[prx._actionTypes[g]][v].type) {
                case "ondragstart":
                case "onrotatestart":
                  p = !0;
                  break;
                case "ondrag":
                case "onrotate":
                  u = !0;
                  break;
                case "ondragend":
                case "onrotateend":
                  h = !0;
                  break;
                case "onthrowupdate":
                case "onrotatethrowupdate":
                  f = !0;
                  break;
                case "onthrowcomplete":
                case "onrotatethrowcomplete":
                  m = !0;
              }
        p &&
          (prx.draggables[l.substr(1)][0].vars.onDragStart = function() {
            var t = {};
            if (
              ($(this.target)
                .parents(".box")
                .each(function() {
                  "undefined" != typeof prx.scroller[this.id + "-inner"] &&
                    prx.scroller[this.id + "-inner"].disable();
                }),
              "undefined" == typeof prx.triggerData[l] &&
                (prx.triggerData[l] = {}),
              "rotation" != e.draggable.axis)
            ) {
              if (
                ((t.row = 0),
                (t.column = 0),
                (t.x = 0),
                (t.y = 0),
                (t.movex = 0),
                (t.movey = 0),
                (t.left = 0),
                (t.top = 0),
                (t.position = { left: e.left, top: e.top }),
                e.draggable.snap)
              )
                switch (e.draggable.axis) {
                  case "x":
                    (t.row = 1),
                      (t.column = Math.round((this.x - this.minX) / n) + 1);
                    break;
                  case "y":
                    (t.row = Math.round((this.y - this.minY) / r) + 1),
                      (t.column = 1);
                    break;
                  case "x,y":
                    (t.row = Math.round((this.y - this.minY) / r) + 1),
                      (t.column = Math.round((this.x - this.minX) / n) + 1);
                }
              (t.x = Math.round(this.x - this.minX)),
                (t.y = Math.round(this.y - this.minY)),
                (t.movex = this.x),
                (t.movey = this.y),
                (t.left = Math.round($(this.target).offset().left)),
                (t.top = Math.round($(this.target).offset().top)),
                (prx.triggerData[l].ondragstart = t),
                $(l).trigger("ondragstart", this);
            } else {
              var i = Math.round(this.rotation % 360);
              (t.degrees = i > 0 ? i : 360 + i),
                (t.rotationposition = this.rotation),
                isNaN(t.degrees) && (t.degrees = 0),
                (d = this.rotation),
                (t.rotated = 0),
                (prx.triggerData[l].onrotatestart = t),
                $(l).trigger("onrotatestart", this);
            }
          }),
          u &&
            (prx.draggables[l.substr(1)][0].vars.onDrag = function() {
              var t = {};
              if (
                ("undefined" == typeof prx.triggerData[l] &&
                  (prx.triggerData[l] = {}),
                "rotation" != e.draggable.axis)
              ) {
                if (
                  ((t.row = 0),
                  (t.column = 0),
                  (t.x = 0),
                  (t.y = 0),
                  (t.movex = 0),
                  (t.movey = 0),
                  (t.left = 0),
                  (t.top = 0),
                  e.draggable.snap)
                )
                  switch (e.draggable.axis) {
                    case "x":
                      (t.row = 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                      break;
                    case "y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = 1);
                      break;
                    case "x,y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                  }
                (t.x = Math.round(this.x - this.minX)),
                  (t.y = Math.round(this.y - this.minY)),
                  (t.movex = this.x),
                  (t.movey = this.y),
                  (t.left = Math.round($(this.target).offset().left)),
                  (t.top = Math.round($(this.target).offset().top)),
                  (prx.triggerData[l].ondrag = t),
                  $(l).trigger("ondrag", this);
              } else {
                var i = Math.round(this.rotation % 360);
                (t.degrees = i > 0 ? i : 360 + i),
                  (t.rotationposition = this.rotation),
                  (t.rotated = this.rotation - d),
                  (t.rotated = Math.round(t.rotated)),
                  (prx.triggerData[l].onrotate = t),
                  $(l).trigger("onrotate", this);
              }
            }),
          h &&
            (prx.draggables[l.substr(1)][0].vars.onDragEnd = function() {
              var t = {};
              if (
                ("undefined" == typeof prx.triggerData[l] &&
                  (prx.triggerData[l] = {}),
                $(this.target)
                  .parents(".box")
                  .each(function() {
                    "undefined" != typeof prx.scroller[this.id + "-inner"] &&
                      prx.scroller[this.id + "-inner"].enable();
                  }),
                "rotation" != e.draggable.axis)
              ) {
                if (
                  ((t.row = 0),
                  (t.column = 0),
                  (t.x = 0),
                  (t.y = 0),
                  (t.movex = 0),
                  (t.movey = 0),
                  (t.left = 0),
                  (t.top = 0),
                  e.draggable.snap)
                )
                  switch (e.draggable.axis) {
                    case "x":
                      (t.row = 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                      break;
                    case "y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = 1);
                      break;
                    case "x,y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                  }
                (t.x = Math.round(this.x - this.minX)),
                  (t.y = Math.round(this.y - this.minY)),
                  (t.movex = this.x),
                  (t.movey = this.y),
                  (t.left = Math.round($(this.target).offset().left)),
                  (t.top = Math.round($(this.target).offset().top)),
                  (prx.triggerData[l].ondragend = t),
                  $(l).trigger("ondragend", this);
              } else {
                var i = Math.round(this.rotation % 360);
                (t.degrees = i > 0 ? i : 360 + i),
                  (t.rotationposition = this.rotation),
                  (t.rotated = this.rotation - d),
                  (t.rotated = Math.round(t.rotated)),
                  (prx.triggerData[l].onrotateend = t),
                  $(l).trigger("onrotateend", this);
              }
            }),
          f &&
            (prx.draggables[l.substr(1)][0].vars.onThrowUpdate = function() {
              var t = {};
              if (
                ("undefined" == typeof prx.triggerData[l] &&
                  (prx.triggerData[l] = {}),
                "rotation" != e.draggable.axis)
              ) {
                if (
                  ((t.row = 0),
                  (t.column = 0),
                  (t.x = 0),
                  (t.y = 0),
                  (t.movex = 0),
                  (t.movey = 0),
                  e.draggable.snap)
                )
                  switch (e.draggable.axis) {
                    case "x":
                      (t.row = 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                      break;
                    case "y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = 1);
                      break;
                    case "x,y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                  }
                (t.x = Math.round(this.x - this.minX)),
                  (t.y = Math.round(this.y - this.minY)),
                  (t.movex = Math.round(this.x)),
                  (t.movey = Math.round(this.y)),
                  (t.left = Math.round($(this.target).offset().left)),
                  (t.top = Math.round($(this.target).offset().top)),
                  (prx.triggerData[l].onthrowupdate = t),
                  $(l).trigger("onthrowupdate", this);
              } else {
                var i = Math.round(this.rotation % 360);
                (t.degrees = i > 0 ? i : 360 + i),
                  (t.rotationposition = this.rotation),
                  (t.rotated = Math.round(t.rotated)),
                  (prx.triggerData[l].onrotatethrowupdate = t),
                  $(l).trigger("onrotatethrowupdate", this);
              }
            }),
          m &&
            (prx.draggables[l.substr(1)][0].vars.onThrowComplete = function() {
              var t = {};
              if (
                ("undefined" == typeof prx.triggerData[l] &&
                  (prx.triggerData[l] = {}),
                "rotation" != e.draggable.axis)
              ) {
                if (
                  ((t.row = 0),
                  (t.column = 0),
                  (t.x = 0),
                  (t.y = 0),
                  (t.movex = 0),
                  (t.movey = 0),
                  e.draggable.snap)
                )
                  switch (e.draggable.axis) {
                    case "x":
                      (t.row = 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                      break;
                    case "y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = 1);
                      break;
                    case "x,y":
                      (t.row = Math.round((this.y - this.minY) / r) + 1),
                        (t.column = Math.round((this.x - this.minX) / n) + 1);
                  }
                (t.x = Math.round(this.x - this.minX)),
                  (t.y = Math.round(this.y - this.minY)),
                  (t.movex = Math.round(this.x)),
                  (t.movey = Math.round(this.y)),
                  (t.left = Math.round($(this.target).offset().left)),
                  (t.top = Math.round($(this.target).offset().top)),
                  (prx.triggerData[l].onthrowcomplete = t),
                  $(l).trigger("onthrowcomplete", this);
              } else {
                var i = Math.round(this.rotation % 360);
                (t.degrees = i > 0 ? i : 360 + i),
                  (t.rotationposition = this.rotation),
                  (t.rotated = this.rotation - d),
                  (t.rotated = Math.round(t.rotated)),
                  ([l].onrotatethrowcomplete = t),
                  $(l).trigger("onrotatethrowcomplete", this);
              }
            });
      }
    }
  }),
  (prx.renderSymbol = function(e, t, i) {
    var n,
      r = "";
    "undefined" == typeof i && (i = 0);
    var o = prx.getSymbolIndexFromId(e.symbolid),
      a = "";
    a = t + "-" + e.id;
    var s = "100%",
      l = "100%";
    if (
      ("" != e.scroll &&
        "none" != e.scroll &&
        (("horizontal" == e.scroll || "omni" == e.scroll) &&
          (s =
            prx.symbols[prx.getSymbolIndexFromId(e.symbolid)].states[i]
              .dimensions[0] + "px"),
        ("vertical" == e.scroll || "omni" == e.scroll) &&
          (l =
            prx.symbols[prx.getSymbolIndexFromId(e.symbolid)].states[i]
              .dimensions[1] + "px")),
      o > -1)
    )
      for (var c = prx.getAllSymbolItems(o, i), d = 0; d < c.length; d++) {
        var p = c[d];
        "undefined" != typeof p._fromstateid && (p.opacity = 0),
          "undefined" != typeof prx.types[p.type] &&
            (r +=
              "undefined" != typeof prx.types[p.type].onDisplaySymbol
                ? prx.types[p.type].onDisplaySymbol(p, a, n, e)
                : prx.types[p.type].onDisplay(p, a, n, e));
      }
    return r;
  }),
  (prx.getAllItems = function(e, t, i) {
    "undefined" == typeof i && (i = 0);
    var n = $.evalJSON(prx[e][t].states[i].data);
    if (1 == prx[e][t].states.length) return n;
    for (var r, o = [], a = 0; a < n.length; a++) o.push(n[a].id);
    for (a = 0; a < prx[e][t].states.length; a++)
      if (a != i) {
        r = $.evalJSON(prx[e][t].states[a].data);
        for (var s = 0; s < r.length; s++)
          -1 == o.indexOf(r[s].id) &&
            (o.push(r[s].id),
            (r[s]._fromstateid = prx[e][t].states[a].id),
            n.push(r[s]));
      }
    return n;
  }),
  (prx.getAllPageItems = function(e, t) {
    return prx.getAllItems("pages", e, t);
  }),
  (prx.getAllTemplateItems = function(e, t) {
    return prx.getAllItems("templates", e, t);
  }),
  (prx.getAllSymbolItems = function(e, t) {
    return prx.getAllItems("symbols", e, t);
  }),
  (prx.loadRecursiveSymbolAfterDisplay = function(e, t, i, n) {
    "undefined" == typeof n && (n = 0);
    var r = prx.getSymbolIndexFromId(e.symbolid),
      o = "";
    if (
      ("undefined" == typeof e.scrollsnap && (e.scrollsnap = !1),
      "undefined" == typeof t
        ? (o = "p-" + i + "-")
        : (0 == t.length ? (t = "p-" + i + "-") : (t += "-"), (o = t + e.id)),
      r > -1)
    ) {
      for (var a = prx.getAllSymbolItems(r, n), s = 0; s < a.length; s++) {
        var l = a[s];
        "undefined" != typeof l._fromstateid &&
          ((l.opacity = 0),
          $("#" + o + "-" + l.id).addClass("ghost-component")),
          prx.updateItemVisibility(l, o),
          prx.updateSymbolItemPosition(l, o, i, e),
          prx.updateItemRotation(l, o),
          "undefined" != typeof prx.types[l.type] &&
            "undefined" != typeof prx.types[l.type].afterDisplay &&
            prx.types[l.type].afterDisplay(l, o, i),
          prx.makeDraggable(l, i, o),
          prx.parseItemAction(l, o, i, "", !0);
      }
      for (var c = 0; c < prx.symbols[r].states.length; c++)
        prx.parseSymbolStateAction(r, c, i, o, e.id);
      prx.iniScrollContainer(e, o);
    }
    return !0;
  }),
  (prx.iniScrollContainer = function(item, _containerid) {
    if (
      ("undefined" != typeof prx.scroller[_containerid + "-inner"] &&
        (prx.scroller[_containerid + "-inner"].destroy(),
        (prx.scroller[_containerid + "-inner"] = null),
        delete prx.scroller[_containerid + "-inner"]),
      "undefined" != typeof item.scroll &&
        "" != item.scroll &&
        "none" != item.scroll)
    ) {
      var _scrollX = !1,
        _scrollY = !1,
        _scrollbars = !1,
        _snap = eval(item.scrollsnap);
      switch (item.scroll) {
        case "omni":
          (_scrollX = !0),
            (_scrollY = !0),
            (_scrollbars =
              eval(item.hscrollbar) || eval(item.vscrollbar) ? !0 : !1);
          break;
        case "horizontal":
          (_scrollX = !0), (_scrollbars = eval(item.hscrollbar) ? !0 : !1);
          break;
        case "vertical":
          (_scrollY = !0), (_scrollbars = eval(item.vscrollbar) ? !0 : !1);
      }
      var _probeType = 0;
      if ("undefined" != typeof item.actions)
        for (var i = 0; i < item.actions.length; i++)
          "containerscroll" == item.actions[i].type && (_probeType = 3);
      for (var i = 0; i < prx.scrollableTabbars.length; i++) {
        var _linked =
          prx.scrollableTabbars[i].container +
          "-" +
          prx.scrollableTabbars[i].linked +
          "-inner";
        _linked == _containerid + "-inner" && (_probeType = 3);
      }
      if (
        ($.isArray(_snap) && (_snap = !0),
        "undefined" == typeof prx.scroller[_containerid + "-inner"])
      ) {
        ("undefined" == typeof item.lockdirection || "omni" != item.scroll) &&
          (item.lockdirection = !0),
          "undefined" == typeof item.bounce && (item.bounce = !0),
          (prx.scroller[_containerid + "-inner"] = new IScroll(
            "#" + _containerid + "-inner",
            {
              scrollX: _scrollX,
              scrollY: _scrollY,
              snap: _snap,
              useTransition: !0,
              click: prx.mobilebrowser,
              zoom: eval(item.pinchzoom),
              momentum: eval(item.momentum),
              bounce: item.bounce,
              bounceLock: !0,
              freeScroll: !eval(item.lockdirection),
              directionLockThreshold: 0,
              scrollbars: _scrollbars,
              mouseWheel: !0,
              probeType: _probeType,
              snapThreshold: 0.25,
              deceleration: 0.008,
              twoWayScroll: "omni" == item.scroll ? !1 : !0,
            }
          )),
          3 == _probeType &&
            prx.scroller[_containerid + "-inner"].on("scroll", function() {
              var _targetid = _containerid + "-inner",
                _triggerId = "#" + _containerid,
                _r = {};
              "undefined" == typeof prx.triggerData[_triggerId] &&
                (prx.triggerData[_triggerId] = {}),
                eval(item.scrollsnap)
                  ? ((_r.x = this.x),
                    (_r.y = this.y),
                    (_r.currentpagex = this.currentPage.pageX + 1),
                    (_r.currentpagey = this.currentPage.pageY + 1),
                    (_r.currentpagexindex = this.currentPage.pageX),
                    (_r.currentpageyindex = this.currentPage.pageY),
                    (prx.triggerData[_triggerId].containerscroll = _r),
                    $("#" + _containerid).trigger("containerscroll", this))
                  : ((_r.x = this.x),
                    (_r.y = this.y),
                    (_r.currentpagex = 1),
                    (_r.currentpagey = 1),
                    (_r.currentpagexindex = 0),
                    (_r.currentpageyindex = 0),
                    (prx.triggerData[_triggerId].containerscroll = _r),
                    $("#" + _containerid).trigger("containerscroll", this));
            }),
          prx.scroller[_containerid + "-inner"].on("scrollEnd", function() {
            var _targetid = _containerid + "-inner",
              _triggerId = "#" + _containerid,
              _r = {};
            "undefined" == typeof prx.triggerData[_triggerId] &&
              (prx.triggerData[_triggerId] = {}),
              eval(item.scrollsnap)
                ? ((_r.x = this.currentPage.x),
                  (_r.y = this.currentPage.y),
                  (_r.currentpagex = this.currentPage.pageX + 1),
                  (_r.currentpagey = this.currentPage.pageY + 1),
                  (_r.currentpagexindex = this.currentPage.pageX),
                  (_r.currentpageyindex = this.currentPage.pageY),
                  (prx.triggerData[_triggerId].containerpagechange = _r),
                  (prx.triggerData[_triggerId].containerpageenter = _r),
                  (prx.triggerData[_triggerId].containerscrollend = _r),
                  $("#" + _containerid).trigger("containerpagechange", this),
                  $("#" + _containerid).trigger(
                    "containerpageenter.page" +
                      this.currentPage.pageX +
                      "-" +
                      this.currentPage.pageY,
                    this
                  ),
                  $("#" + _containerid).trigger("containerscrollend", this))
                : ((_r.x = this.x),
                  (_r.y = this.y),
                  (_r.currentpagex = 1),
                  (_r.currentpagey = 1),
                  (_r.currentpagexindex = 0),
                  (_r.currentpageyindex = 0),
                  (prx.triggerData[_triggerId].containerscrollend = _r),
                  $("#" + _containerid).trigger("containerscrollend", this));
          });
        for (var i = 0; i < prx.scrollableTabbars.length; i++) {
          var _linked =
            prx.scrollableTabbars[i].container +
            "-" +
            prx.scrollableTabbars[i].linked +
            "-inner";
          if (_linked == _containerid + "-inner") {
            var _tabbar =
              prx.scrollableTabbars[i].container +
              "-" +
              prx.scrollableTabbars[i].id +
              "-inner";
            (prx.scroller[_linked].options.linkedTabbar = _tabbar),
              prx.scroller[_linked].goToPage(
                Number(prx.scrollableTabbars[i].start),
                0,
                0
              ),
              "undefined" != typeof prx.scroller[_tabbar] &&
                prx.scroller[_tabbar].goToPage(
                  Number(prx.scrollableTabbars[i].start),
                  0,
                  0
                ),
              prx.scroller[_linked].on("scroll", function() {
                prx.scroller[this.options.linkedTabbar].scrollTo(
                  this.x / 2,
                  0,
                  0,
                  !1
                );
              }),
              $(prx.scroller[_linked].wrapper).on(
                "mouseup touchend",
                function() {
                  prx.scroller[
                    prx.scroller[this.id].options.linkedTabbar
                  ].scrollTo(
                    prx.scroller[prx.scroller[this.id].options.linkedTabbar]
                      .pages[prx.scroller[this.id].currentPage.pageX][0].x,
                    0,
                    200,
                    !1
                  );
                }
              );
            break;
          }
        }
      }
    }
  }),
  (prx.updateItemRotation = function(e, t) {
    if (
      ("undefined" == typeof e.rotation && (e.rotation = 0),
      "undefined" != typeof t)
    )
      var i = "#" + t + "-" + e.id;
    else var i = "#" + e.id;
    new TimelineMax().to(i, 0, { rotation: e.rotation });
  }),
  (prx.updateItemVisibility = function(e, t) {
    var i = "";
    (i = "undefined" != typeof t ? $("#" + t + "-" + e.id) : $("#" + e.id)),
      "undefined" != typeof e.visible &&
        (e.visible ? i.removeClass("hidden") : i.addClass("hidden")),
      "undefined" != typeof e.opacity && i.css("opacity", e.opacity),
      (i = null);
  }),
  (prx.updateItemPosition = function(e, t, i) {
    var n = "";
    n = "undefined" != typeof t ? $("#" + t + "-" + e.id) : $("#" + e.id);
    var r = prx.pages[prx.getPageIndexFromId(i)],
      o = prx.getPageOrientation(r),
      a = 0,
      s = 0;
    if (
      ((a = prx.devices[prx.device][o][0]),
      (s = prx.devices[prx.device][o][1]),
      "undefined" == typeof r.statusbar && (r.statusbar = prx.statusbar),
      "undefined" == typeof r.navigationbar &&
        (r.navigationbar = prx.navigationbar),
      "1" == r.statusbar &&
        "1" == prx.statusbarapplies &&
        (s -= prx.devices[prx.device]["statusbarheight" + o]),
      "1" == r.navigationbar &&
        "1" == prx.navigationbarapplies &&
        (s -= prx.devices[prx.device]["navigationbarheight" + o]),
      "undefined" != typeof t && t.indexOf("-box") > -1)
    ) {
      var l = $("#" + t + "-scroll");
      (a = l.width()), (s = l.height());
    }
    var c = e.left,
      d = e.top,
      p = e.left,
      u = e.top,
      h = e.width,
      f = e.height,
      m = e.width,
      g = e.height;
    if ("full" != e.width) {
      switch (e.wtype) {
        case "fixed":
          m = h;
          break;
        case "variable":
          m = a - h;
      }
      n.css("width", m + "px");
    }
    if ("full" != e.height) {
      switch (e.htype) {
        case "fixed":
          g = f;
          break;
        case "variable":
          g = s - f;
      }
      n.css("height", g + "px");
    }
    switch (e.hpos) {
      case "left":
        c = p;
        break;
      case "right":
        c = a - p - m;
        break;
      case "center":
        c = (a - m) / 2;
    }
    switch ((n.css("left", c + "px"), e.vpos)) {
      case "top":
        d = u;
        break;
      case "bottom":
        d = s - u - g;
        break;
      case "middle":
        d = (s - g) / 2;
    }
    n.css("top", d + "px"), (n = null);
  }),
  (prx.updateSymbolItemPosition = function(e, t, i, n) {
    var r = "";
    r = "undefined" != typeof t ? $("#" + t + "-" + e.id) : $("#" + e.id);
    var o =
      prx.symbols[prx.getSymbolIndexFromId(n.symbolid)].states[0].dimensions;
    prx.pages[prx.getPageIndexFromId(i)];
    var a = o[0],
      s = o[1],
      l = e.left,
      c = e.top,
      d = e.left,
      p = e.top,
      u = e.width,
      h = e.height,
      f = e.width,
      m = e.height;
    if ("full" != e.width) {
      switch (e.wtype) {
        case "fixed":
          f = u;
          break;
        case "variable":
          f = a - u;
      }
      r.css("width", f + "px");
    }
    if ("full" != e.height) {
      switch (e.htype) {
        case "fixed":
          m = h;
          break;
        case "variable":
          m = s - h;
      }
      r.css("height", m + "px");
    }
    switch (e.hpos) {
      case "left":
        l = d;
        break;
      case "right":
        l = a - d - f;
        break;
      case "center":
        l = (a - f) / 2;
    }
    switch ((r.css("left", l + "px"), e.vpos)) {
      case "top":
        c = p;
        break;
      case "bottom":
        c = s - p - m;
        break;
      case "middle":
        c = (s - m) / 2;
    }
    r.css("top", c + "px"), (r = null);
  }),
  (prx.updateTemplateItemPosition = function(e, t) {
    "#" + e.id;
    var i = prx.pages[prx.getPageIndexFromId(t)],
      n = prx.getPageOrientation(i),
      r = 0,
      o = 0;
    (r = prx.devices[prx.device][n][0]),
      (o = prx.devices[prx.device][n][1]),
      "undefined" == typeof i.statusbar && (i.statusbar = prx.statusbar),
      "undefined" == typeof i.navigationbar &&
        (i.navigationbar = prx.navigationbar),
      "1" == i.statusbar &&
        (o -= prx.devices[prx.device]["statusbarheight" + n]),
      "1" == i.navigationbar &&
        (o -= prx.devices[prx.device]["navigationbarheight" + n]);
    var a = e.left,
      s = e.top,
      l = e.left,
      c = e.top,
      d = e.width,
      p = e.height,
      u = e.width,
      h = e.height;
    if ("full" != e.width) {
      switch (e.wtype) {
        case "fixed":
          u = d;
          break;
        case "variable":
          u = r - d;
      }
      e.width = u;
    }
    if ("full" != e.height) {
      switch (e.htype) {
        case "fixed":
          h = p;
          break;
        case "variable":
          h = o - p;
      }
      e.height = h;
    }
    switch (e.hpos) {
      case "left":
        a = l;
        break;
      case "right":
        a = r - l - u;
        break;
      case "center":
        a = (r - u) / 2;
    }
    switch (((e.left = a), e.vpos)) {
      case "top":
        s = c;
        break;
      case "bottom":
        s = o - c - h;
        break;
      case "middle":
        s = (o - h) / 2;
    }
    return (e.top = s), e;
  }),
  (prx.showActionsActionsInPlayer = function(e) {
    "undefined" == typeof e && (e = !1);
    var t = e ? "action-highlight-simple-visible" : "action-highlight-visible";
    $(".action-highlight").addClass(t);
  }),
  (prx.hideActionsActionsInPlayer = function() {
    $(".action-highlight").removeClass(
      "action-highlight-visible action-highlight-simple-visible"
    );
  }),
  (prx.setupShowActionsOnShift = function() {
    prx.embed ||
      parent == window ||
      $(document)
        .keydown(function(e) {
          if (16 == e.which && 0 == prx.shiftKeyDown) {
            prx.shiftKeyDown = !0;
            try {
              parent.prx.showActionsActionsInPreview(),
                prx.showActionsActionsInPlayer();
            } catch (e) {}
          }
        })
        .keyup(function(e) {
          if (16 == e.which && 1 == prx.shiftKeyDown) {
            prx.shiftKeyDown = !1;
            try {
              parent.prx.hideActionsActionsInPreview(),
                prx.hideActionsActionsInPlayer();
            } catch (e) {}
          }
        });
  }),
  (prx.setupFlashActions = function() {
    prx.bFlashActions &&
      $("body")
        .hammer()
        .on("tap", function() {
          prx.flashActions();
        });
  }),
  (prx.flashActions = function() {
    prx.bFlashActions &&
      (prx.showActionsActionsInPlayer(!0),
      setTimeout(function() {
        prx.hideActionsActionsInPlayer();
      }, 300));
  }),
  (prx.loadProjectFonts = function() {
    for (var e = "", t = 0; t < prx.fonts.length; t++) {
      e += prx.fonts[t].value + ":";
      for (var i = 0; i < prx.fonts[t].variants.length; i++)
        e += prx.fonts[t].variants[i] + ",";
      e = e.slice(0, -1) + "|";
    }
    (e = e.slice(0, -1)),
      "" != e &&
        $("head").append(
          '<link href="https://fonts.googleapis.com/css?family=' +
            e +
            '" type="text/css" rel="stylesheet"/>'
        );
  }),
  (Math.precision = function(e, t) {
    return (
      void 0 === t && (t = 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
    );
  }),
  (prx.getColor = function(e) {
    var t = {};
    return (
      (t.hex = "FFFFFF"),
      (t.alpha = 1),
      e.length > 5 &&
        (t.hex = e
          .replace(/[^a-fA-F0-9]/g, "")
          .toLowerCase()
          .substring(0, 6)),
      8 == e.length &&
        (t.alpha =
          Math.precision(
            (100 *
              parseInt(
                e
                  .replace(/[^a-fA-F0-9]/g, "")
                  .toLowerCase()
                  .substring(6, 8),
                16
              )) /
              255,
            1
          ) / 100),
      t
    );
  });
var getGuid = function() {
  var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    var t = 0 | (16 * Math.random()),
      i = "x" == e ? t : 8 | (3 & t);
    return i.toString(16);
  });
  return e;
};
(prx.buildStatusBarExported = function(e) {
  "1" == prx.statusbarapplies
    ? "default" == prx.devices[prx.device].statusbar_skin
      ? $("#statusbar").css({
          "background-image": "none",
          "background-color": "black",
        })
      : $("#statusbar").css({
          "background-image": "url(./images/statusbar_" + e + ".png)",
          "background-color": "transparent",
        })
    : $("#statusbar").css({
        "background-image": "none",
        "background-color": "transparent",
      });
}),
  (prx.buildStatusBarAsset = function(e) {
    return "1" == prx.statusbarapplies
      ? "default" == prx.devices[prx.device].statusbar_skin
        ? "url(" +
          prx.url.account +
          "/assets/device/default/statusbar_" +
          e +
          ".png)"
        : "shared" == prx.devices[prx.device].statusbar_skin
        ? "url(" +
          prx.url.account +
          "/assets/device/shared/" +
          prx.devices[prx.device].device_s3bucket +
          "/statusbar_" +
          e +
          ".png)"
        : "url(" +
          prx.url.account +
          "/assets/device/" +
          prx.devices[prx.device].device_s3bucket +
          "/statusbar_" +
          e +
          ".png)"
      : "none";
  }),
  (prx.buildNavigationBarAsset = function(e) {
    return "1" == prx.navigationbarapplies
      ? "default" == prx.devices[prx.device].navigationbar_skin
        ? "url(" +
          prx.url.account +
          "/assets/device/default/navigationbar_" +
          e +
          ".png)"
        : "shared" == prx.devices[prx.device].navigationbar_skin
        ? "url(" +
          prx.url.account +
          "/assets/device/shared/" +
          prx.devices[prx.device].device_s3bucket +
          "/navigationbar_" +
          e +
          ".png)"
        : "url(" +
          prx.url.account +
          "/assets/device/" +
          prx.devices[prx.device].device_s3bucket +
          "/navigationbar_" +
          e +
          ".png)"
      : "none";
  }),
  (prx.v5BackwardsCompatibility = function() {
    prx.backwardsCompatibilityConvertToStatefulTemplates(),
      prx.backwardsCompatibilityConvertToStatefulPages(),
      (prx.symbols.length > 0 && "undefined" != typeof prx.symbols[0].states) ||
        prx.backwardsCompatibilityConvertToStatefulSymbols(),
      (prx.v5 = !0);
  }),
  (prx.backwardsCompatibilityConvertToStatefulPages = function(e) {
    for (var e = 0; e < prx.pages.length; e++) {
      prx.pages[e].states = [];
      var t = $.evalJSON(prx.pages[e].data);
      if (prx.getTemplateIndexFromId(t.templateid) > -1)
        var i = {
          id: t.templateid,
          stateid:
            prx.templates[prx.getTemplateIndexFromId(t.templateid)].states[0]
              .id,
        };
      else var i = { id: "" };
      var n = {
        data: $.toJSON(t.items),
        template: i,
        title: "Default State",
        history: prx.pages[e].history,
        background: prx.pages[e].background,
        id: getGuid(),
      };
      (n = $.toJSON(n)),
        (n = $.evalJSON(n)),
        delete prx.pages[e].data,
        delete prx.pages[e].history,
        delete prx.pages[e].background,
        prx.pages[e].states.push(n);
    }
    return !0;
  }),
  (prx.backwardsCompatibilityConvertToStatefulTemplates = function() {
    for (var e = 0; e < prx.templates.length; e++) {
      prx.templates[e].states = [];
      var t = $.evalJSON(prx.templates[e].data),
        i = {
          data: $.toJSON(t.items),
          template: { id: t.templateid, stateid: "" },
          title: "Default State",
          history: prx.templates[e].history,
          background: prx.templates[e].background,
          id: getGuid(),
        };
      (i = $.toJSON(i)),
        (i = $.evalJSON(i)),
        delete prx.templates[e].data,
        delete prx.templates[e].history,
        delete prx.templates[e].background,
        prx.templates[e].states.push(i);
    }
    for (var e = 0; e < prx.templates.length; e++)
      "" != prx.templates[e].states[0].template.id &&
        prx.getTemplateIndexFromId(prx.templates[e].states[0].template.id) >
          -1 &&
        (prx.templates[e].states[0].template.stateid =
          prx.templates[
            prx.getTemplateIndexFromId(prx.templates[e].states[0].template.id)
          ].states[0].id);
    return !0;
  }),
  (prx.backwardsCompatibilityConvertToStatefulSymbols = function() {
    for (var e = 0; e < prx.symbols.length; e++) {
      prx.symbols[e].states = [];
      var t = {
        data: prx.symbols[e].data,
        dimensions: prx.symbols[e].dimensions,
        title: "Default State",
        history: prx.symbols[e].history,
        background: prx.symbols[e].background,
        id: getGuid(),
      };
      (t = $.toJSON(t)),
        (t = $.evalJSON(t)),
        delete prx.symbols[e].data,
        delete prx.symbols[e].dimensions,
        delete prx.symbols[e].history,
        delete prx.symbols[e].background,
        prx.symbols[e].states.push(t);
    }
    return !0;
  }),
  (prx.getStateIndexFromId = function(e, t, i) {
    if ("undefined" == typeof t || "undefined" == typeof i || -1 == i)
      return -1;
    if ("undefined" == typeof prx[t][i]) return -1;
    for (var n = 0; n < prx[t][i].states.length; n++)
      if (prx[t][i].states[n].id == e) return n;
    return -1;
  }),
  (prx.getPageStateIndexFromId = function(e, t) {
    return prx.getStateIndexFromId(e, "pages", t);
  }),
  (prx.getTemplateStateIndexFromId = function(e, t) {
    return prx.getStateIndexFromId(e, "templates", t);
  }),
  (prx.getSymbolStateIndexFromId = function(e, t) {
    return prx.getStateIndexFromId(e, "symbols", t);
  }),
  (prx.getChangesBetweenStates = function(e, t, i, n) {
    if (
      ("undefined" == typeof i && (i = i = prx.getPageTemplateSymbolType()),
      "undefined" == typeof n && (n = prx.getPageTemplateSymbolIndex()),
      "undefined" != typeof prx.stateChanges[e + ":" + t])
    )
      return $.evalJSON($.toJSON(prx.stateChanges[e + ":" + t]));
    var r = [],
      o = prx.getStateIndexFromId(e, i, n),
      a = prx.getStateIndexFromId(t, i, n);
    if (-1 == o || -1 == a) return !1;
    switch (i) {
      case "pages":
      case "templates":
        if (
          getColor(prx[i][n].states[o].background) !=
            getColor(prx[i][n].states[a].background) ||
          prx[i][n].states[o].template.stateid !=
            prx[i][n].states[a].template.stateid
        ) {
          var s =
            "pages" == i
              ? { type: "page-properties", id: "current-page", changes: {} }
              : {
                  type: "template-properties",
                  id: "current-page-template",
                  changes: {},
                };
          getColor(prx[i][n].states[o].background) !=
            getColor(prx[i][n].states[a].background) &&
            (s.changes.background = [
              prx[i][n].states[o].background,
              prx[i][n].states[a].background,
            ]),
            prx[i][n].states[o].template.stateid !=
              prx[i][n].states[a].template.stateid &&
              (s.changes.templatestateid = [
                prx[i][n].states[o].template.stateid,
                prx[i][n].states[a].template.stateid,
              ]),
            r.push(s);
        }
        break;
      case "symbols":
        if (
          prx[i][n].states[o].dimensions[0] !=
            prx[i][n].states[a].dimensions[0] ||
          prx[i][n].states[o].dimensions[1] !=
            prx[i][n].states[a].dimensions[1] ||
          getColor(prx[i][n].states[o].background) !=
            getColor(prx[i][n].states[a].background)
        ) {
          var s = {
            type: "container-properties",
            id: "current-container",
            changes: {},
          };
          prx[i][n].states[o].dimensions[0] !=
            prx[i][n].states[a].dimensions[0] &&
            (s.changes.width = [
              prx[i][n].states[o].dimensions[0],
              prx[i][n].states[a].dimensions[0],
            ]),
            prx[i][n].states[o].dimensions[1] !=
              prx[i][n].states[a].dimensions[1] &&
              (s.changes.height = [
                prx[i][n].states[o].dimensions[1],
                prx[i][n].states[a].dimensions[1],
              ]),
            getColor(prx[i][n].states[o].background) !=
              getColor(prx[i][n].states[a].background) &&
              (s.changes.background = [
                prx[i][n].states[o].background,
                prx[i][n].states[a].background,
              ]),
            r.push(s);
        }
    }
    var l = prx[i][n].states[o].data,
      c = prx[i][n].states[a].data;
    if (l == c)
      return (prx.stateChanges[e + ":" + t] = r), $.evalJSON($.toJSON(r));
    (l = $.evalJSON(l)), (c = $.evalJSON(c));
    for (var d = [], p = [], u = 0; u < l.length; u++) d.push(l[u].id);
    for (u = 0; u < c.length; u++) p.push(c[u].id);
    if (d.toString() != p.toString()) {
      if (
        (r.push({
          type: "reordered-components",
          new_order: p.toString(),
          old_order: d.toString(),
        }),
        d
          .slice(0)
          .sort()
          .toString() !=
          p
            .slice(0)
            .sort()
            .toString())
      ) {
        for (u = 0; u < d.length; u++)
          if (-1 == p.indexOf(d[u])) {
            var h = {};
            (h.opacity = [d[u].opacity, 0]),
              r.push({
                type: "removed-component",
                id: d[u],
                item: l[u],
                componentType: l[u].type,
                changes: h,
              }),
              d.splice(u, 1),
              u--;
          }
        for (u = 0; u < p.length; u++)
          if (-1 == d.indexOf(p[u]))
            for (m = 0; m < c.length; m++)
              if (c[m].id == p[u]) {
                var h = {};
                h.opacity = [0, c[m].opacity];
                var f = c[m];
                (f.opacity = 0),
                  r.push({
                    type: "new-component",
                    id: p[u],
                    componentType: c[m].type,
                    item: f,
                    changes: h,
                  }),
                  p.splice(u, 1),
                  u--;
                break;
              }
      }
      for (u = 0; u < l.length; u++)
        "undefined" != typeof l[u].zindex && delete l[u].zindex;
      for (u = 0; u < c.length; u++)
        "undefined" != typeof c[u].zindex && delete c[u].zindex;
    }
    for (u = 0; u < l.length; u++)
      for (var m = 0; m < c.length; m++)
        if (c[m].id == l[u].id) {
          var g = jsondiffpatch.diff(l[u], c[m]);
          if ("undefined" != typeof g) {
            $.each(g, function(e) {
              g[e] = [l[u][e], c[m][e]];
            });
            for (var v in g)
              g.hasOwnProperty(v) &&
                $.isArray(g[v]) &&
                (("string" == typeof g[v][0] &&
                  "number" == typeof g[v][1] &&
                  parseFloat(g[v][0]) == g[v][1]) ||
                  ("string" == typeof g[v][1] &&
                    "number" == typeof g[v][0] &&
                    parseFloat(g[v][1]) == g[v][0])) &&
                delete g[v];
            if (
              "undefined" != typeof g.width ||
              "undefined" != typeof g.wtype ||
              "undefined" != typeof g.height ||
              "undefined" != typeof g.htype ||
              "undefined" != typeof g.left ||
              "undefined" != typeof g.hpos ||
              "undefined" != typeof g.top ||
              "undefined" != typeof g.vpos
            ) {
              var y = prx.getRealItemDimsAndPos(l[u], i, n, o),
                b = prx.getRealItemDimsAndPos(c[m], i, n, a);
              ("undefined" != typeof g.width ||
                "undefined" != typeof g.wtype) &&
                ("undefined" != typeof g.wtype && delete g.wtype,
                (g.width = [y[0], b[0]]),
                y[0] == b[0] && delete g.width),
                ("undefined" != typeof g.height ||
                  "undefined" != typeof g.htype) &&
                  ("undefined" != typeof g.htype && delete g.htype,
                  (g.height = [y[1], b[1]]),
                  y[1] == b[1] && delete g.height),
                ("undefined" != typeof g.left ||
                  "undefined" != typeof g.hpos) &&
                  ("undefined" != typeof g.hpos && delete g.hpos,
                  (g.left = [y[2], b[2]]),
                  y[2] == b[2] && delete g.left),
                ("undefined" != typeof g.top || "undefined" != typeof g.vpos) &&
                  ("undefined" != typeof g.vpos && delete g.vpos,
                  (g.top = [y[3], b[3]]),
                  y[3] == b[3] && delete g.top);
            }
            if (
              ("undefined" != typeof g.visible &&
                (g.visible =
                  0 == g.visible[1] ? [l[u].opacity, 0] : [0, c[m].opacity]),
              "undefined" != typeof prx.types[l[u].type] &&
                "undefined" != typeof prx.types[l[u].type].dynamicProperties)
            ) {
              var x = prx.types[l[u].type].dynamicProperties.data;
              if ("undefined" != typeof g[x])
                if ((delete g[x], l[u][x].length != c[m][x].length))
                  g.dynamicProperties = { type: "" };
                else
                  for (var w = 0; w < l[u][x].length; w++) {
                    var _ = jsondiffpatch.diff(l[u][x][w], c[m][x][w]);
                    if ("undefined" != typeof _)
                      for (var T in _)
                        _.hasOwnProperty(T) &&
                          ($.isArray(_[T])
                            ? (3 == _[T].length &&
                                0 == _[T][1] &&
                                0 == _[T][2] &&
                                ((_[T][1] = void 0), delete _[T][2]),
                              (g["dynamicProperties-" + w + "-" + T] = _[T]))
                            : (g["dynamicProperties-" + w + "-" + T] = [
                                l[u][x][w][T],
                                c[m][x][w][T],
                              ]));
                  }
            }
            if (Object.keys(g).length > 0) {
              var k = {
                type: "changed-component",
                id: l[u].id,
                componentType: l[u].type,
                changes: g,
              };
              ("undefined" != typeof g.width ||
                "undefined" != typeof g.height) &&
                (k.item = c[m]),
                r.push(k);
            }
          }
        }
    return (prx.stateChanges[e + ":" + t] = r), $.evalJSON($.toJSON(r));
  }),
  (prx.getRealItemDimsAndPos = function(e, t, i, n) {
    var r = prx.getObjectDims(t, i, n),
      o = e.width,
      a = e.height,
      s = e.left,
      l = e.top;
    return (
      "variable" == e.wtype && (o = r[0] - o),
      "variable" == e.htype && (a = r[1] - a),
      "right" == e.hpos && (s = r[0] - s - o),
      "center" == e.hpos && (s = (r[0] - o) / 2),
      "bottom" == e.vpos && (l = r[1] - l - a),
      "middle" == e.vpos && (l = (r[1] - a) / 2),
      [parseInt(o), parseInt(a), parseInt(s), parseInt(l)]
    );
  }),
  (prx.getObjectDims = function(e, t, i) {
    if (-1 == i) return !1;
    switch (e) {
      case "symbols":
        return [
          prx[e][t].states[i].dimensions[0],
          prx[e][t].states[i].dimensions[1],
        ];
      default:
        var n = prx[e][t].orientation,
          r = 0,
          o = 0,
          a = 0,
          s = 0,
          l = 0;
        prx.statusbarapplies &&
          "1" == prx[e][t].statusbar &&
          ((a = 1), (o = prx.devices[prx.device]["statusbarheight" + n])),
          prx.navigationbarapplies &&
            "1" == prx[e][t].navigationbar &&
            ((l = 1), (s = prx.devices[prx.device]["navigationbarheight" + n]));
        var c =
            parseInt(a) * prx.devices[prx.device]["statusbarheight" + n] +
            parseInt(l) * prx.devices[prx.device]["navigationbarheight" + n],
          r = prx.devices[prx.device]["normal" + n][0],
          d = prx.devices[prx.device]["normal" + n][1] - c;
        return [r, d];
    }
  }),
  (prx.refreshScrollers = function(e) {
    $("#p-" + e + " .box").each(function() {
      "undefined" != typeof prx.scroller[this.id + "-inner"] &&
        prx.scroller[this.id + "-inner"].refresh();
    });
  }),
  (prx.refreshDraggables = function(e) {
    return !0;
  }),
  (prx.goToPage = function(e) {
    (_currentpage = "#" + prx.activepage),
      _gobackstack.push(_currentpage),
      _gobackstack.length >= 50 && _gobackstack.shift(),
      prx.changePage($("#p-" + e), { allowSamePageTransition: !0 }),
      (prx.eventTransitionPage = "#p-" + e);
  }),
  (prx.triggerKeydownAction = function(e) {
    $("body").trigger(e);
  }),
  (prx.triggerOrientationChange = function() {
    prx.changeOrientation();
  }),
  (prx.triggerBodyOrientationChange = function() {
    prx.changeBodyOrientation();
  }),
  (prx.showReloadingLoader = function() {
    $("#loader-wrapper")
      .show()
      .find("span")
      .text("Reloading...");
  }),
  (prx.buildAnimationProperties = function(e, t) {
    var i = e,
      n = {};
    return (
      (n.duration = parseInt(e.duration)),
      (n.easing = e.easing),
      (n.queue = e.queue),
      (n.complete = function() {
        prx.callbackAction(t);
      }),
      delete i.duration,
      delete i.easing,
      delete i.queue,
      { properties: i, options: n }
    );
  }),
  (prx.getPageOrientation = function(e, t) {
    "undefined" == typeof t && (t = 0);
    var i = prx.devices[prx.device].defaultOrientation;
    return (
      ("undefined" == typeof e.orientation || "" == e.orientation) &&
        (e.orientation = prx.devices[prx.device].defaultOrientation),
      (i = e.orientation),
      prx.devices[prx.device][i + "_applies"] ||
        (i = "portrait" == i ? "landscape" : "portrait"),
      i
    );
  }),
  (prx.recursivelyFindItemSymbolId = function(e, t, i) {
    e = e.replace(/#p-[0-9]+-/, "");
    for (
      var n = e.split("-box-")[0], r = prx.getAllItems(t, i), o = 0;
      o < r.length;
      o++
    )
      if (r[o].id == n)
        return e == n
          ? "undefined" == typeof r[o].symbolid
            ? !1
            : r[o].symbolid
          : ((e = e.substr((n + "-").length)),
            -1 == prx.getSymbolIndexFromId(r[o].symbolid)
              ? !1
              : prx.recursivelyFindItemSymbolId(
                  e,
                  "symbols",
                  prx.getSymbolIndexFromId(r[o].symbolid)
                ));
    for (var o = 0; o < r.length; o++)
      if ("symbol" == r[o].type) {
        var a = prx.recursivelyFindItemSymbolId(
          e,
          "symbols",
          prx.getSymbolIndexFromId(r[o].symbolid)
        );
        if ("undefined" != typeof a) return a;
      }
  }),
  (prx.refreshHtmlComponent = function(e, t, i) {
    if ($("#" + t + "-" + e).hasClass("type-html")) {
      if (
        "undefined" != typeof prx.allItems[e].states &&
        "undefined" != typeof prx.allItems[e].states[i]
      ) {
        var n = $.evalJSON(
            prx[prx.allItems[e].containertype][prx.allItems[e].containerindex]
              .states[prx.allItems[e].states[i].stateindex].data
          ),
          r = n[prx.allItems[e].states[i].itemindex];
        $("#" + t + "-" + r.id + " iframe").remove(),
          prx.types[r.type].afterDisplay(r, t);
      }
    } else
      $("#" + t + "-" + e + " .box").each(function() {
        if ($(this).hasClass("type-html")) {
          var e = $(this)
              .attr("id")
              .split("box-"),
            t = "box-" + e[e.length - 1],
            i = $(this)
              .attr("id")
              .split("-" + t)[0],
            n = $(this)
              .parents(".type-symbol")
              .attr("data-state-id");
          if (
            "undefined" != typeof prx.allItems[t].states &&
            "undefined" != typeof prx.allItems[t].states[n]
          ) {
            var r = $.evalJSON(
                prx[prx.allItems[t].containertype][
                  prx.allItems[t].containerindex
                ].states[prx.allItems[t].states[n].stateindex].data
              ),
              o = r[prx.allItems[t].states[n].itemindex];
            $("iframe", this).remove(), prx.types[o.type].afterDisplay(o, i);
          }
        }
      });
  }),
  (prx.changeInitialScale = function(e) {
    var t = document.querySelector("meta[name=viewport]");
    if (null != t) {
      for (
        var i = ["minimum-scale", "maximum-scale", "initial-scale"],
          n = t.content.split(","),
          r = 0;
        r < i.length;
        r++
      )
        for (var o = 0; o < n.length; o++)
          if (0 == n[o].trim().indexOf(i[r] + "=")) {
            n[o] = i[r] + "=" + e;
            break;
          }
      t.content = n.join(",");
    }
  }),
  (prx.changeTargetDensityDPI = function(e) {
    var t = document.querySelector("meta[name=viewport]");
    if (null != t) {
      for (
        var i = ["target-densitydpi"], n = t.content.split(","), r = 0;
        r < i.length;
        r++
      )
        for (var o = 0; o < n.length; o++)
          if (0 == n[o].trim().indexOf(i[r] + "=")) {
            n[o] = i[r] + "=" + e;
            break;
          }
      t.content = n.join(",");
    }
  }),
  (prx.changeViewport = function(e) {
    var t = document.querySelector("meta[name=viewport]");
    null != t && (t.content = e);
  }),
  (prx.getEasing = function(e) {
    return (
      "undefined" != typeof e
        ? "string" == typeof e &&
          (e =
            "cubic-bezier" == e.substring(0, 12)
              ? prx.cubicBezierToEasing(e)
              : prx.easingTransitToTweenMax[e])
        : (e = prx.easingTransitToTweenMax.linear),
      e
    );
  }),
  (prx.getReverseEasing = function(e) {
    return (
      "undefined" != typeof e
        ? "undefined" != typeof prx.easingTransitToTweenMaxReverse[e]
          ? (e = prx.easingTransitToTweenMaxReverse[e])
          : e.indexOf("cubic-bezier") > -1 &&
            (e = prx.cubicBezierToEasingReverse(e))
        : (e = prx.easingTransitToTweenMax.linear),
      e
    );
  }),
  (prx.cubicBezierToEasing = function(e) {
    var t = e
      .replace("cubic-bezier(", "")
      .replace(")", "")
      .split(",");
    return 4 == t.length
      ? new Ease(
          BezierEasing(
            parseFloat(t[0]),
            parseFloat(t[1]),
            parseFloat(t[2]),
            parseFloat(t[3])
          )
        )
      : prx.easingTransitToTweenMax.linear;
  }),
  (prx.cubicBezierToEasingReverse = function(e) {
    var t = e
      .replace("cubic-bezier(", "")
      .replace(")", "")
      .split(",");
    return 4 == t.length
      ? new Ease(
          BezierEasing(
            1 - parseFloat(t[2]),
            1 - parseFloat(t[3]),
            1 - parseFloat(t[0]),
            1 - parseFloat(t[1])
          )
        )
      : prx.easingTransitToTweenMax.linear;
  }),
  (prx.changePage = function(e, t) {
    "undefined" == typeof t && (t = []);
    var i = {
      transition: "none",
      changeHash: prx.pagehash,
      allowSamePageTransition: !0,
      overlay: !1,
      transitionid: getGuid(),
    };
    $.extend(i, t);
    var n = $(".prx-page-active");
    if (!i.allowSamePageTransition && n.get(0).id == e.get(0).id)
      return (
        n.trigger("pagebeforehide"),
        e.trigger("pagebeforeshow"),
        n.trigger("pagehide"),
        e.trigger("pageshow"),
        !0
      );
    switch (
      (n.find("input:focus").trigger("blur"),
      (prx.activepage = e.get(0).id),
      n.trigger("pagebeforehide"),
      e.trigger("pagebeforeshow"),
      n.addClass("prx-page-transitioning-" + i.transitionid),
      e.addClass("prx-page-transitioning-" + i.transitionid),
      0 != i.overlay &&
        (n.addClass(function() {
          return "prx-page-transitioning-overlay-" + i.overlay + "-source";
        }),
        e.addClass(function() {
          return "prx-page-transitioning-overlay-" + i.overlay + "-target";
        })),
      i.transition)
    ) {
      case "slide":
      case "slide-overlay":
        prx.transitionPageSlide(n, e, i);
        break;
      case "slideback":
      case "slideback-overlay":
        prx.transitionPageSlideBack(n, e, i);
        break;
      case "slideup":
      case "slideup-overlay":
        prx.transitionPageSlideUp(n, e, i);
        break;
      case "slidedown":
      case "slidedown-overlay":
        prx.transitionPageSlideDown(n, e, i);
        break;
      case "fade":
        prx.transitionPageFade(n, e, i);
        break;
      case "pop":
        prx.transitionPagePopIn(n, e, i);
        break;
      case "popout":
        prx.transitionPagePopOut(n, e, i);
        break;
      case "flip":
        prx.transitionPageFlip(n, e, i);
        break;
      case "turn":
        prx.transitionPageTurnOut(n, e, i);
        break;
      case "turnin":
        prx.transitionPageTurnIn(n, e, i);
        break;
      case "flow":
        prx.transitionPageFlow(n, e, i);
        break;
      default:
        prx.pageChanged(n, e, i);
    }
  }),
  (prx.pageChanged = function(e, t, i) {
    if (
      (e.removeClass(
        "prx-page-active prx-page-transitioning-overlay-in-source prx-page-transitioning-overlay-out-source prx-page-transitioning-" +
          i.transitionid
      ),
      t
        .addClass("prx-page-active")
        .removeClass(
          "prx-page-transitioning-overlay-in-target prx-page-transitioning-overlay-out-target prx-page-transitioning-" +
            i.transitionid
        ),
      "undefined" != typeof e.get(0) && "in" != i.overlay)
    ) {
      var n = 0;
      prx.allowstatusbar &&
        "1" == prx.statusbars[e.get(0).id.replace("p-", "")].statusbar &&
        (n =
          prx.devices[prx.device][
            "statusbarheight" +
              prx.statusbars[e.get(0).id.replace("p-", "")].orientation
          ]),
        e.css({ top: n, left: 0 });
    }
    (prx.activepage = t.get(0).id),
      e.trigger("pagehide"),
      t.trigger("pageshow"),
      i.changeHash &&
        (window.location.hash = "#" + prx.activepage.replace("p-", "")),
      $(window).trigger("pagechange");
  }),
  (prx.iniStartScreen = function() {
    var e;
    switch (prx.orientation) {
      case "portrait":
        (e = "p-" + prx.project.startscreen),
          0 == $("#" + e).length &&
            (e = "p-" + prx.project.startscreenlandscape);
        break;
      case "landscape":
        (e = "p-" + prx.project.startscreenlandscape),
          0 == $("#" + e).length && (e = "p-" + prx.project.startscreen);
    }
    "" != window.location.hash &&
      (e = "p-" + window.location.hash.replace("#", "")),
      0 == $("#" + e).length && (e = "p-" + prx.pages[0].id);
    var t = prx.getPageStructFromId(e),
      i = prx.getPageOrientation(t);
    if (
      (prx.changePage($("#" + e), { transition: "none", changeHash: !1 }),
      prx.orientation != i)
    ) {
      if ((prx.changeOrientation(), !prx.embed && parent != window))
        try {
          parent.prx.switchOrientation();
        } catch (n) {}
      var r = $("#loader-wrapper")
          .show()
          .find("span")
          .text("0%")
          .end(),
        o = $('[data-role=page] img:not([src=""])').length,
        a = 0;
      0 == o && r.hide(),
        $('[data-role=page] img:not([src=""])')
          .unbind("load error")
          .bind("load error", function() {
            a++,
              r.find("span").text(Math.round((100 * a) / o) + "%"),
              a == o && r.hide();
          });
    }
    0 != prx.initialpageid &&
      ("p-" + prx.iinitialpageid != prx.activepage &&
        prx.changePage($("#p-" + prx.initialpageid), {
          transition: "none",
          changeHash: prx.pagehash,
        }),
      $("#" + prx.activepage).trigger("orientationchange"));
  }),
  (prx.checkOrientationChange = function() {
    if (!("onorientationchange" in window)) {
      var e = prx.getOrientation();
      e != prx.orientation && $(window).trigger("orientationchange");
    }
  }),
  (prx.transitionPageSlide = function(e, t, i) {
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 600),
      "undefined" == typeof r && (r = "Expo.easeOut"),
      (r = prx.getEasing(r)),
      i.transition.indexOf("-overlay") > -1 &&
        0 != i.overlay &&
        (i.transition = i.transition.replace("-overlay", "")),
      t.addClass("prx-page-active"),
      i.transition.indexOf("-overlay") > -1 &&
        (t.addClass("prx-page-above prx-page-transition-overlay-top"),
        e.addClass("prx-page-below")),
      "in" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + e.get(0).id, n / 1e3, {
            left:
              -1 *
              e.width() *
              (i.transition.indexOf("-overlay") > -1 ? 0.5 : 1),
            ease: r,
          })
          .call(function() {
            t.removeClass("prx-page-above prx-page-transition-overlay-top"),
              e.removeClass("prx-page-below"),
              prx.pageChanged(e, t, i);
          })
          .to("#" + e.get(0).id, 0, { left: 0, overwrite: 0 }),
      "out" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + t.get(0).id, 0, { left: e.width() })
          .to("#" + t.get(0).id, n / 1e3, { left: 0, ease: r })
          .call(function() {
            i.overlay &&
              (t.removeClass("prx-page-above prx-page-transition-overlay-top"),
              e.removeClass("prx-page-below"),
              prx.pageChanged(e, t, i));
          });
  }),
  (prx.transitionPageSlideBack = function(e, t, i) {
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 600),
      "undefined" == typeof r && (r = "Expo.easeOut"),
      (r = prx.getEasing(r)),
      i.transition.indexOf("-overlay") > -1 &&
        0 != i.overlay &&
        (i.transition = i.transition.replace("-overlay", "")),
      t.addClass("prx-page-active"),
      i.transition.indexOf("-overlay") > -1 &&
        (e.addClass("prx-page-above prx-page-transition-overlay-top"),
        t.addClass("prx-page-below")),
      "in" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + e.get(0).id, n / 1e3, { left: t.width(), ease: r })
          .call(function() {
            t.removeClass("prx-page-below"),
              e.removeClass("prx-page-above prx-page-transition-overlay-top"),
              prx.pageChanged(e, t, i);
          })
          .to("#" + e.get(0).id, 0, { left: 0, overwrite: 0 }),
      "out" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + t.get(0).id, 0, {
            left:
              -1 *
              t.width() *
              (i.transition.indexOf("-overlay") > -1 ? 0.5 : 1),
          })
          .to("#" + t.get(0).id, n / 1e3, { left: 0, ease: r })
          .call(function() {
            i.overlay &&
              (t.removeClass("prx-page-below"),
              e.removeClass("prx-page-above prx-page-transition-overlay-top"),
              prx.pageChanged(e, t, i));
          });
  }),
  (prx.transitionPageSlideUp = function(e, t, i) {
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 600),
      "undefined" == typeof r && (r = "Expo.easeOut"),
      (r = prx.getEasing(r)),
      i.transition.indexOf("-overlay") > -1 &&
        0 != i.overlay &&
        (i.transition = i.transition.replace("-overlay", ""));
    var o = 0,
      a = 0;
    prx.allowstatusbar &&
      1 == prx.statusbars[e.attr("id").replace("p-", "")].statusbar &&
      (o =
        prx.devices[prx.device][
          "statusbarheight" +
            prx.statusbars[e.attr("id").replace("p-", "")].orientation
        ]),
      prx.allowstatusbar &&
        1 == prx.statusbars[t.attr("id").replace("p-", "")].statusbar &&
        (a =
          prx.devices[prx.device][
            "statusbarheight" +
              prx.statusbars[t.attr("id").replace("p-", "")].orientation
          ]),
      t.addClass("prx-page-active"),
      i.transition.indexOf("-overlay") > -1 &&
        (t.addClass("prx-page-above prx-page-transition-overlay-top"),
        e.addClass("prx-page-below")),
      "in" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + e.get(0).id, n / 1e3, {
            top:
              -1 *
              e.height() *
              (i.transition.indexOf("-overlay") > -1 ? 0.5 : 1),
            ease: r,
          })
          .call(function() {
            e.removeClass("prx-page-below"),
              t.removeClass("prx-page-above prx-page-transition-overlay-top"),
              prx.pageChanged(e, t, i);
          })
          .to("#" + e.get(0).id, 0, { top: o, overwrite: 0 }),
      "out" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + t.get(0).id, 0, { top: e.height() })
          .to("#" + t.get(0).id, n / 1e3, { top: a, ease: r })
          .call(function() {
            i.overlay &&
              (e.removeClass("prx-page-below"),
              t.removeClass("prx-page-above prx-page-transition-overlay-top"),
              prx.pageChanged(e, t, i));
          });
  }),
  (prx.transitionPageSlideDown = function(e, t, i) {
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 600),
      "undefined" == typeof r && (r = "Expo.easeOut"),
      (r = prx.getEasing(r)),
      i.transition.indexOf("-overlay") > -1 &&
        0 != i.overlay &&
        (i.transition = i.transition.replace("-overlay", ""));
    var o = 0,
      a = 0;
    prx.allowstatusbar &&
      1 == prx.statusbars[e.attr("id").replace("p-", "")].statusbar &&
      (o =
        prx.devices[prx.device][
          "statusbarheight" +
            prx.statusbars[e.attr("id").replace("p-", "")].orientation
        ]),
      prx.allowstatusbar &&
        1 == prx.statusbars[t.attr("id").replace("p-", "")].statusbar &&
        (a =
          prx.devices[prx.device][
            "statusbarheight" +
              prx.statusbars[t.attr("id").replace("p-", "")].orientation
          ]),
      t.addClass("prx-page-active"),
      i.transition.indexOf("-overlay") > -1 &&
        (e.addClass("prx-page-above prx-page-transition-overlay-top"),
        t.addClass("prx-page-below")),
      "in" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + e.get(0).id, n / 1e3, { top: t.height(), ease: r })
          .call(function() {
            t.removeClass("prx-page-below"),
              e.removeClass("prx-page-above prx-page-transition-overlay-top"),
              prx.pageChanged(e, t, i);
          })
          .to("#" + e.get(0).id, 0, { top: o, overwrite: 0 }),
      "out" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + t.get(0).id, 0, {
            top:
              -1 *
              t.height() *
              (i.transition.indexOf("-overlay") > -1 ? 0.5 : 1),
          })
          .to("#" + t.get(0).id, n / 1e3, { top: a, ease: r })
          .call(function() {
            i.overlay &&
              (t.removeClass("prx-page-below"),
              e.removeClass("prx-page-above prx-page-transition-overlay-top"),
              prx.pageChanged(e, t, i));
          });
  }),
  (prx.transitionPagePopIn = function(e, t, i) {
    if ("out" == i.overlay) return prx.transitionPagePopOut(e, t, i), void 0;
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 300),
      "undefined" == typeof r && (r = "in-out"),
      (r = prx.getEasing(r)),
      t.addClass("prx-page-active prx-page-above"),
      e.addClass("prx-page-below"),
      new TimelineMax({ force3D: prx.greensockForce3D })
        .to("#" + t.get(0).id, 0, { scale: 0.8, opacity: 0.8 })
        .to("#" + t.get(0).id, n / 1e3, { scale: 1, opacity: 1, ease: r })
        .call(function() {
          prx.pageChanged(e, t, i),
            e.removeClass("prx-page-below"),
            t.removeClass("prx-page-above");
        });
  }),
  (prx.transitionPagePopOut = function(e, t, i, n) {
    if ("in" == i.overlay) return prx.transitionPagePopIn(e, t, i), void 0;
    var r = i.duration,
      o = i.easing;
    "undefined" == typeof r && (r = 300),
      "undefined" == typeof o && (o = "in-out"),
      "undefined" == typeof n && (n = 1.8),
      (o = prx.getEasing(o)),
      t.addClass("prx-page-active prx-page-below"),
      e.addClass("prx-page-above"),
      new TimelineMax({ force3D: prx.greensockForce3D })
        .to("#" + e.get(0).id, r / 1e3, { scale: n, opacity: 0.2, ease: o })
        .call(function() {
          prx.pageChanged(e, t, i),
            e.removeClass("prx-page-above"),
            t.removeClass("prx-page-below");
        })
        .to("#" + e.get(0).id, 0, { scale: 1, opacity: 1, overwrite: 0 });
  }),
  (prx.transitionPageFade = function(e, t, i) {
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 300),
      "undefined" == typeof r && (r = "in-out"),
      (r = prx.getEasing(r)),
      "out" != i.overlay
        ? (t.addClass("prx-page-active prx-page-above"),
          e.addClass("prx-page-below"),
          new TimelineMax({ force3D: prx.greensockForce3D })
            .to("#" + t.get(0).id, 0, { opacity: 0 })
            .to("#" + t.get(0).id, n / 1e3, { opacity: 1, ease: r })
            .call(function() {
              prx.pageChanged(e, t, i),
                e.removeClass("prx-page-below"),
                t.removeClass("prx-page-above");
            }))
        : (t.addClass("prx-page-active prx-page-below"),
          e.addClass("prx-page-above"),
          new TimelineMax({ force3D: prx.greensockForce3D })
            .to("#" + e.get(0).id, n / 1e3, { opacity: 0, ease: r })
            .call(function() {
              prx.pageChanged(e, t, i),
                e.removeClass("prx-page-above"),
                t.removeClass("prx-page-below");
            })
            .to("#" + e.get(0).id, 0, { opacity: 1, overwrite: 0 }));
  }),
  (prx.transitionPageFlip = function(e, t, i) {
    var n = i.duration,
      r = "linear";
    "undefined" == typeof n && (n = 500),
      (r = prx.getEasing(r)),
      "out" == i.overlay
        ? (t.addClass(
            "prx-page-active prx-page-below prx-page-transition-flip"
          ),
          e.addClass("prx-page-above prx-page-transition-flip"))
        : (t.addClass(
            "prx-page-active prx-page-above prx-page-transition-flip"
          ),
          e.addClass("prx-page-below prx-page-transition-flip")),
      "in" != i.overlay &&
        (new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + e.get(0).id, n / 1e3, { rotationY: -180, ease: r })
          .call(function() {
            i.overlay &&
              (prx.pageChanged(e, t, i),
              e.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flip"
              ),
              t.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flip"
              ));
          })
          .to("#" + e.get(0).id, 0, { rotationY: 0, overwrite: 0 }),
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + e.get(0).id, n / 1e3 / 2, { scale: 0.9, ease: r })
          .to("#" + e.get(0).id, n / 1e3 / 2, { scale: 1, ease: r })),
      "out" != i.overlay &&
        (new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + t.get(0).id, 0, { rotationY: 180 })
          .to("#" + t.get(0).id, n / 1e3, { rotationY: 0, ease: r })
          .call(function() {
            prx.pageChanged(e, t, i),
              e.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flip"
              ),
              t.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flip"
              );
          }),
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + t.get(0).id, n / 1e3 / 2, { scale: 0.9, ease: r })
          .to("#" + t.get(0).id, n / 1e3 / 2, { scale: 1, ease: r }));
  }),
  (prx.transitionPageTurnOut = function(e, t, i) {
    if ("in" == i.overlay) return prx.transitionPageTurnIn(e, t, i), void 0;
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 400),
      "undefined" == typeof r && (r = "in-out"),
      (r = prx.getEasing(r)),
      t.addClass("prx-page-active prx-page-below"),
      e.addClass("prx-page-above prx-page-transition-turn"),
      new TimelineMax({ force3D: prx.greensockForce3D })
        .to("#" + e.get(0).id, 0, { transformPerspective: 1e3 })
        .to("#" + e.get(0).id, n / 1e3, { rotationY: -90, ease: r })
        .call(function() {
          prx.pageChanged(e, t, i),
            e.removeClass("prx-page-above prx-page-transition-turn"),
            t.removeClass("prx-page-below");
        })
        .to("#" + e.get(0).id, 0, { rotationY: 0, overwrite: 0 });
  }),
  (prx.transitionPageTurnIn = function(e, t, i) {
    if ("out" == i.overlay) return prx.transitionPageTurnOut(e, t, i), void 0;
    var n = i.duration,
      r = i.easing;
    "undefined" == typeof n && (n = 400),
      "undefined" == typeof r && (r = "in-out"),
      (r = prx.getEasing(r)),
      t.addClass("prx-page-active prx-page-above prx-page-transition-turn"),
      e.addClass("prx-page-below"),
      new TimelineMax({ force3D: prx.greensockForce3D })
        .to("#" + t.get(0).id, 0, { transformPerspective: 1e3, rotationY: -90 })
        .to("#" + t.get(0).id, n / 1e3, { rotationY: 0, ease: r })
        .call(function() {
          prx.pageChanged(e, t, i),
            e.removeClass("prx-page-below"),
            t.removeClass("prx-page-above prx-page-transition-turn");
        });
  }),
  (prx.transitionPageFlow = function(e, t, i) {
    var n = i.duration,
      r = "linear";
    "undefined" == typeof n && (n = 500),
      (r = prx.getEasing(r)),
      "in" != i.overlay
        ? (t.addClass(
            "prx-page-active prx-page-below prx-page-transition-flow"
          ),
          e.addClass("prx-page-above prx-page-transition-flow"))
        : (t.addClass(
            "prx-page-active prx-page-above prx-page-transition-flow"
          ),
          e.addClass("prx-page-below prx-page-transition-flow")),
      i.overlay &&
        (t.addClass("prx-page-transition-flow-overlay"),
        e.addClass("prx-page-transition-flow-overlay")),
      "in" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + e.get(0).id, 0.25 * (n / 1e3), { scale: 0.7, ease: r })
          .to("#" + e.get(0).id, 0.2 * (n / 1e3), {
            left: -e.width(),
            ease: r,
            delay: 0.15 * (n / 1e3),
          })
          .to("#" + e.get(0).id, 0, { delay: 0.4 * (n / 1e3) })
          .call(function() {
            i.overlay &&
              (prx.pageChanged(e, t, i),
              e.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flow"
              ),
              t.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flow"
              ));
          })
          .to("#" + e.get(0).id, 0, { left: 0, scale: 1, overwrite: 0 }),
      "out" != i.overlay &&
        new TimelineMax({ force3D: prx.greensockForce3D })
          .to("#" + t.get(0).id, 0, { left: e.width(), scale: 0.7 })
          .to("#" + t.get(0).id, 0.2 * (n / 1e3), {
            left: 0,
            ease: r,
            delay: 0.4 * (n / 1e3),
          })
          .to("#" + t.get(0).id, 0.25 * (n / 1e3), {
            left: 0,
            scale: 1,
            ease: r,
            delay: 0.15 * (n / 1e3),
          })
          .call(function() {
            prx.pageChanged(e, t, i),
              e.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flow"
              ),
              t.removeClass(
                "prx-page-below prx-page-above prx-page-transition-flow"
              );
          });
  }),
  (window.Modernizr = (function(e, t, i) {
    function n() {
      (h.input = (function(e) {
        for (var t = 0, i = e.length; i > t; t++) F[e[t]] = e[t] in b;
        return F;
      })(
        "autocomplete autofocus list placeholder max min multiple pattern required step".split(
          " "
        )
      )),
        (h.inputtypes = (function(e) {
          for (var n, r, o, a = 0, s = e.length; s > a; a++)
            b.setAttribute("type", (r = e[a])),
              (n = "text" !== b.type),
              n &&
                ((b.value = x),
                (b.style.cssText = "position:absolute;visibility:hidden;"),
                /^range$/.test(r) && b.style.WebkitAppearance !== i
                  ? (m.appendChild(b),
                    (o = t.defaultView),
                    (n =
                      o.getComputedStyle &&
                      "textfield" !==
                        o.getComputedStyle(b, null).WebkitAppearance &&
                      0 !== b.offsetHeight),
                    m.removeChild(b))
                  : /^(search|tel)$/.test(r) ||
                    (/^(url|email)$/.test(r)
                      ? (n = b.checkValidity && b.checkValidity() === !1)
                      : /^color$/.test(r)
                      ? (m.appendChild(b),
                        m.offsetWidth,
                        (n = b.value != x),
                        m.removeChild(b))
                      : (n = b.value != x))),
              (C[e[a]] = !!n);
          return C;
        })(
          "search tel url email datetime date month week time datetime-local number range color".split(
            " "
          )
        ));
    }
    function r(e, t) {
      var i = e.charAt(0).toUpperCase() + e.substr(1),
        n = (e + " " + _.join(i + " ") + i).split(" ");
      return o(n, t);
    }
    function o(e, t) {
      for (var n in e) if (y[e[n]] !== i) return "pfx" == t ? e[n] : !0;
      return !1;
    }
    function a(e, t) {
      return !!~("" + e).indexOf(t);
    }
    function s(e, t) {
      return typeof e === t;
    }
    function l(e, t) {
      return c($.join(e + ";") + (t || ""));
    }
    function c(e) {
      y.cssText = e;
    }
    var d,
      p,
      u = "2.0.6",
      h = {},
      f = !0,
      m = t.documentElement,
      g = (t.head || t.getElementsByTagName("head")[0], "modernizr"),
      v = t.createElement(g),
      y = v.style,
      b = t.createElement("input"),
      x = ":)",
      w = Object.prototype.toString,
      $ = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
      _ = "Webkit Moz O ms Khtml".split(" "),
      T = { svg: "http://www.w3.org/2000/svg" },
      k = {},
      C = {},
      F = {},
      S = [],
      P = function(e, i, n, r) {
        var o,
          a,
          s,
          l = t.createElement("div");
        if (parseInt(n, 10))
          for (; n--; )
            (s = t.createElement("div")),
              (s.id = r ? r[n] : g + (n + 1)),
              l.appendChild(s);
        return (
          (o = ["&shy;", "<style>", e, "</style>"].join("")),
          (l.id = g),
          (l.innerHTML += o),
          m.appendChild(l),
          (a = i(l, e)),
          l.parentNode.removeChild(l),
          !!a
        );
      },
      D = function(t) {
        if (e.matchMedia) return matchMedia(t).matches;
        var i;
        return (
          P("@media " + t + " { #" + g + " { position: absolute; } }", function(
            t
          ) {
            i =
              "absolute" ==
              (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)
                .position;
          }),
          i
        );
      },
      A = (function() {
        function e(e, r) {
          (r = r || t.createElement(n[e] || "div")), (e = "on" + e);
          var o = e in r;
          return (
            o ||
              (r.setAttribute || (r = t.createElement("div")),
              r.setAttribute &&
                r.removeAttribute &&
                (r.setAttribute(e, ""),
                (o = s(r[e], "function")),
                s(r[e], i) || (r[e] = i),
                r.removeAttribute(e))),
            (r = null),
            o
          );
        }
        var n = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img",
        };
        return e;
      })(),
      I = {}.hasOwnProperty;
    (p =
      s(I, i) || s(I.call, i)
        ? function(e, t) {
            return t in e && s(e.constructor.prototype[t], i);
          }
        : function(e, t) {
            return I.call(e, t);
          }),
      (function(i, n) {
        var r = i.join(""),
          o = n.length;
        P(
          r,
          function(i, n) {
            for (
              var r = t.styleSheets[t.styleSheets.length - 1],
                a =
                  r.cssRules && r.cssRules[0]
                    ? r.cssRules[0].cssText
                    : r.cssText || "",
                s = i.childNodes,
                l = {};
              o--;

            )
              l[s[o].id] = s[o];
            (h.touch = "ontouchstart" in e || 9 === l.touch.offsetTop),
              (h.csstransforms3d = 9 === l.csstransforms3d.offsetLeft),
              (h.generatedcontent = l.generatedcontent.offsetHeight >= 1),
              (h.fontface = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0]));
          },
          o,
          n
        );
      })(
        [
          '@font-face {font-family:"font";src:url("https://")}',
          [
            "@media (",
            $.join("touch-enabled),("),
            g,
            ")",
            "{#touch{top:9px;position:absolute}}",
          ].join(""),
          [
            "@media (",
            $.join("transform-3d),("),
            g,
            ")",
            "{#csstransforms3d{left:9px;position:absolute}}",
          ].join(""),
          ['#generatedcontent:after{content:"', x, '";visibility:hidden}'].join(
            ""
          ),
        ],
        ["fontface", "touch", "csstransforms3d", "generatedcontent"]
      ),
      (k.flexbox = function() {
        function e(e, t, i, n) {
          e.style.cssText = $.join(t + ":" + i + ";") + (n || "");
        }
        function i(e, t, i, n) {
          (t += ":"),
            (e.style.cssText =
              (t + $.join(i + ";" + t)).slice(0, -t.length) + (n || ""));
        }
        var n = t.createElement("div"),
          r = t.createElement("div");
        i(n, "display", "box", "width:42px;padding:0;"),
          e(r, "box-flex", "1", "width:10px;"),
          n.appendChild(r),
          m.appendChild(n);
        var o = 42 === r.offsetWidth;
        return n.removeChild(r), m.removeChild(n), o;
      }),
      (k.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d");
      }),
      (k.canvastext = function() {
        return (
          !!h.canvas &&
          !!s(t.createElement("canvas").getContext("2d").fillText, "function")
        );
      }),
      (k.webgl = function() {
        return !!e.WebGLRenderingContext;
      }),
      (k.touch = function() {
        return h.touch;
      }),
      (k.geolocation = function() {
        return !!navigator.geolocation;
      }),
      (k.postmessage = function() {
        return !!e.postMessage;
      }),
      (k.websqldatabase = function() {
        var t = !!e.openDatabase;
        return t;
      }),
      (k.indexedDB = function() {
        for (var t = -1, i = _.length; ++t < i; )
          if (e[_[t].toLowerCase() + "IndexedDB"]) return !0;
        return !!e.indexedDB;
      }),
      (k.hashchange = function() {
        return (
          A("hashchange", e) && (t.documentMode === i || t.documentMode > 7)
        );
      }),
      (k.history = function() {
        return !!e.history && !!history.pushState;
      }),
      (k.draganddrop = function() {
        return A("dragstart") && A("drop");
      }),
      (k.websockets = function() {
        for (var t = -1, i = _.length; ++t < i; )
          if (e[_[t] + "WebSocket"]) return !0;
        return "WebSocket" in e;
      }),
      (k.rgba = function() {
        return (
          c("background-color:rgba(150,255,150,.5)"),
          a(y.backgroundColor, "rgba")
        );
      }),
      (k.hsla = function() {
        return (
          c("background-color:hsla(120,40%,100%,.5)"),
          a(y.backgroundColor, "rgba") || a(y.backgroundColor, "hsla")
        );
      }),
      (k.multiplebgs = function() {
        return (
          c("background:url(https://),url(https://),red url(https://)"),
          /(url\s*\(.*?){3}/.test(y.background)
        );
      }),
      (k.backgroundsize = function() {
        return r("backgroundSize");
      }),
      (k.borderimage = function() {
        return r("borderImage");
      }),
      (k.borderradius = function() {
        return r("borderRadius");
      }),
      (k.boxshadow = function() {
        return r("boxShadow");
      }),
      (k.textshadow = function() {
        return "" === t.createElement("div").style.textShadow;
      }),
      (k.opacity = function() {
        return l("opacity:.55"), /^0.55$/.test(y.opacity);
      }),
      (k.cssanimations = function() {
        return r("animationName");
      }),
      (k.csscolumns = function() {
        return r("columnCount");
      }),
      (k.cssgradients = function() {
        var e = "background-image:",
          t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
          i = "linear-gradient(left top,#9f9, white);";
        return (
          c((e + $.join(t + e) + $.join(i + e)).slice(0, -e.length)),
          a(y.backgroundImage, "gradient")
        );
      }),
      (k.cssreflections = function() {
        return r("boxReflect");
      }),
      (k.csstransforms = function() {
        return !!o([
          "transformProperty",
          "WebkitTransform",
          "MozTransform",
          "OTransform",
          "msTransform",
        ]);
      }),
      (k.csstransforms3d = function() {
        var e = !!o([
          "perspectiveProperty",
          "WebkitPerspective",
          "MozPerspective",
          "OPerspective",
          "msPerspective",
        ]);
        return (
          e && "webkitPerspective" in m.style && (e = h.csstransforms3d), e
        );
      }),
      (k.csstransitions = function() {
        return r("transitionProperty");
      }),
      (k.fontface = function() {
        return h.fontface;
      }),
      (k.generatedcontent = function() {
        return h.generatedcontent;
      }),
      (k.video = function() {
        var e = t.createElement("video"),
          i = !1;
        try {
          if ((i = !!e.canPlayType)) {
            (i = new Boolean(i)),
              (i.ogg = e.canPlayType('video/ogg; codecs="theora"'));
            var n = 'video/mp4; codecs="avc1.42E01E';
            (i.h264 =
              e.canPlayType(n + '"') || e.canPlayType(n + ', mp4a.40.2"')),
              (i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"'));
          }
        } catch (r) {}
        return i;
      }),
      (k.audio = function() {
        var e = t.createElement("audio"),
          i = !1;
        try {
          (i = !!e.canPlayType) &&
            ((i = new Boolean(i)),
            (i.ogg = e.canPlayType('audio/ogg; codecs="vorbis"')),
            (i.mp3 = e.canPlayType("audio/mpeg;")),
            (i.wav = e.canPlayType('audio/wav; codecs="1"')),
            (i.m4a =
              e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")));
        } catch (n) {}
        return i;
      }),
      (k.localstorage = function() {
        try {
          return !!localStorage.getItem;
        } catch (e) {
          return !1;
        }
      }),
      (k.sessionstorage = function() {
        try {
          return !!sessionStorage.getItem;
        } catch (e) {
          return !1;
        }
      }),
      (k.webworkers = function() {
        return !!e.Worker;
      }),
      (k.applicationcache = function() {
        return !!e.applicationCache;
      }),
      (k.svg = function() {
        return (
          !!t.createElementNS && !!t.createElementNS(T.svg, "svg").createSVGRect
        );
      }),
      (k.inlinesvg = function() {
        var e = t.createElement("div");
        return (
          (e.innerHTML = "<svg/>"),
          (e.firstChild && e.firstChild.namespaceURI) == T.svg
        );
      }),
      (k.smil = function() {
        return (
          !!t.createElementNS &&
          /SVG/.test(w.call(t.createElementNS(T.svg, "animate")))
        );
      }),
      (k.svgclippaths = function() {
        return (
          !!t.createElementNS &&
          /SVG/.test(w.call(t.createElementNS(T.svg, "clipPath")))
        );
      });
    for (var E in k)
      p(k, E) &&
        ((d = E.toLowerCase()),
        (h[d] = k[E]()),
        S.push((h[d] ? "" : "no-") + d));
    return (
      h.input || n(),
      c(""),
      (v = b = null),
      e.attachEvent &&
        (function() {
          var e = t.createElement("div");
          return (e.innerHTML = "<elem></elem>"), 1 !== e.childNodes.length;
        })() &&
        (function(e, t) {
          function n(e) {
            for (var t = -1; ++t < l; ) e.createElement(s[t]);
          }
          e.iepp = e.iepp || {};
          var r,
            o = e.iepp,
            a =
              o.html5elements ||
              "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            s = a.split("|"),
            l = s.length,
            c = new RegExp("(^|\\s)(" + a + ")", "gi"),
            d = new RegExp("<(/*)(" + a + ")", "gi"),
            p = /^\s*[\{\}]\s*$/,
            u = new RegExp(
              "(^|[^\\n]*?\\s)(" + a + ")([^\\n]*)({[\\n\\w\\W]*?})",
              "gi"
            ),
            h = t.createDocumentFragment(),
            f = t.documentElement,
            m = f.firstChild,
            g = t.createElement("body"),
            v = t.createElement("style"),
            y = /print|all/;
          (o.getCSS = function(e, t) {
            if (e + "" === i) return "";
            for (var n, r = -1, a = e.length, s = []; ++r < a; )
              (n = e[r]),
                n.disabled ||
                  ((t = n.media || t),
                  y.test(t) && s.push(o.getCSS(n.imports, t), n.cssText),
                  (t = "all"));
            return s.join("");
          }),
            (o.parseCSS = function(e) {
              for (var t, i = []; null != (t = u.exec(e)); )
                i.push(
                  ((p.exec(t[1]) ? "\n" : t[1]) + t[2] + t[3]).replace(
                    c,
                    "$1.iepp_$2"
                  ) + t[4]
                );
              return i.join("\n");
            }),
            (o.writeHTML = function() {
              var e = -1;
              for (r = r || t.body; ++e < l; )
                for (
                  var i = t.getElementsByTagName(s[e]), n = i.length, o = -1;
                  ++o < n;

                )
                  i[o].className.indexOf("iepp_") < 0 &&
                    (i[o].className += " iepp_" + s[e]);
              h.appendChild(r),
                f.appendChild(g),
                (g.className = r.className),
                (g.id = r.id),
                (g.innerHTML = r.innerHTML.replace(d, "<$1font"));
            }),
            (o._beforePrint = function() {
              (v.styleSheet.cssText = o.parseCSS(
                o.getCSS(t.styleSheets, "all")
              )),
                o.writeHTML();
            }),
            (o.restoreHTML = function() {
              (g.innerHTML = ""), f.removeChild(g), f.appendChild(r);
            }),
            (o._afterPrint = function() {
              o.restoreHTML(), (v.styleSheet.cssText = "");
            }),
            n(t),
            n(h),
            o.disablePP ||
              (m.insertBefore(v, m.firstChild),
              (v.media = "print"),
              (v.className = "iepp-printshim"),
              e.attachEvent("onbeforeprint", o._beforePrint),
              e.attachEvent("onafterprint", o._afterPrint));
        })(e, t),
      (h._version = u),
      (h._prefixes = $),
      (h._domPrefixes = _),
      (h.mq = D),
      (h.hasEvent = A),
      (h.testProp = function(e) {
        return o([e]);
      }),
      (h.testAllProps = r),
      (h.testStyles = P),
      (m.className =
        m.className.replace(/\bno-js\b/, "") + (f ? " js " + S.join(" ") : "")),
      h
    );
  })(this, this.document)),
  (function(e, t, i) {
    function n(e) {
      return !e || "loaded" == e || "complete" == e;
    }
    function r() {
      for (var e = 1, t = -1; v.length - ++t && (!v[t].s || (e = v[t].r)); );
      e && s();
    }
    function o(e) {
      var i,
        o = t.createElement("script");
      (o.src = e.s),
        (o.onreadystatechange = o.onload = function() {
          !i &&
            n(o.readyState) &&
            ((i = 1), r(), (o.onload = o.onreadystatechange = null));
        }),
        f(function() {
          i || ((i = 1), r());
        }, u.errorTimeout),
        e.e ? o.onload() : m.parentNode.insertBefore(o, m);
    }
    function a(e) {
      var i,
        n = t.createElement("link");
      if (
        ((n.href = e.s),
        (n.rel = "stylesheet"),
        (n.type = "text/css"),
        e.e || (!_ && !b))
      )
        (n.onload = function() {
          i ||
            ((i = 1),
            f(function() {
              r();
            }, 0));
        }),
          e.e && n.onload();
      else {
        var o = function(e) {
          f(function() {
            if (!i)
              try {
                e.sheet.cssRules.length ? ((i = 1), r()) : o(e);
              } catch (t) {
                1e3 == t.code ||
                "security" == t.message ||
                "denied" == t.message
                  ? ((i = 1),
                    f(function() {
                      r();
                    }, 0))
                  : o(e);
              }
          }, 0);
        };
        o(n);
      }
      f(function() {
        i || ((i = 1), r());
      }, u.errorTimeout),
        !e.e && m.parentNode.insertBefore(n, m);
    }
    function s() {
      var e = v.shift();
      (y = 1),
        e
          ? e.t
            ? f(function() {
                "c" == e.t ? a(e) : o(e);
              }, 0)
            : (e(), r())
          : (y = 0);
    }
    function l(e, i, o, a, l, c) {
      function d() {
        !h &&
          n(p.readyState) &&
          ((g.r = h = 1),
          !y && r(),
          (p.onload = p.onreadystatechange = null),
          f(function() {
            w.removeChild(p);
          }, 0));
      }
      var p = t.createElement(e),
        h = 0,
        g = { t: o, s: i, e: c };
      (p.src = p.data = i),
        !x && (p.style.display = "none"),
        (p.width = p.height = "0"),
        "object" != e && (p.type = o),
        (p.onload = p.onreadystatechange = d),
        "img" == e
          ? (p.onerror = d)
          : "script" == e &&
            (p.onerror = function() {
              (g.e = g.r = 1), s();
            }),
        v.splice(a, 0, g),
        w.insertBefore(p, x ? null : m),
        f(function() {
          h || (w.removeChild(p), (g.r = g.e = h = 1), r());
        }, u.errorTimeout);
    }
    function c(e, t, i) {
      var n = "c" == t ? C : k;
      return (
        (y = 0),
        (t = t || "j"),
        P(e)
          ? l(n, e, t, this.i++, h, i)
          : (v.splice(this.i++, 0, e), 1 == v.length && s()),
        this
      );
    }
    function d() {
      var e = u;
      return (e.loader = { load: c, i: 0 }), e;
    }
    var p,
      u,
      h = t.documentElement,
      f = e.setTimeout,
      m = t.getElementsByTagName("script")[0],
      g = {}.toString,
      v = [],
      y = 0,
      b = "MozAppearance" in h.style,
      x = b && !!t.createRange().compareNode,
      w = x ? h : m.parentNode,
      $ = e.opera && "[object Opera]" == g.call(e.opera),
      _ = "webkitAppearance" in h.style,
      T = _ && "async" in t.createElement("script"),
      k = b ? "object" : $ || T ? "img" : "script",
      C = _ ? "img" : k,
      F =
        Array.isArray ||
        function(e) {
          return "[object Array]" == g.call(e);
        },
      S = function(e) {
        return Object(e) === e;
      },
      P = function(e) {
        return "string" == typeof e;
      },
      D = function(e) {
        return "[object Function]" == g.call(e);
      },
      A = [],
      I = {};
    (u = function(e) {
      function t(e) {
        var t,
          i,
          n = e.split("!"),
          r = A.length,
          o = n.pop(),
          a = n.length,
          s = { url: o, origUrl: o, prefixes: n };
        for (i = 0; a > i; i++) (t = I[n[i]]), t && (s = t(s));
        for (i = 0; r > i; i++) s = A[i](s);
        return s;
      }
      function n(e, n, r, o, a) {
        var s = t(e),
          l = s.autoCallback;
        if (!s.bypass) {
          if (
            (n &&
              (n = D(n)
                ? n
                : n[e] ||
                  n[o] ||
                  n[
                    e
                      .split("/")
                      .pop()
                      .split("?")[0]
                  ]),
            s.instead)
          )
            return s.instead(e, n, r, o, a);
          r.load(
            s.url,
            s.forceCSS || (!s.forceJS && /css$/.test(s.url)) ? "c" : i,
            s.noexec
          ),
            (D(n) || D(l)) &&
              r.load(function() {
                d(), n && n(s.origUrl, a, o), l && l(s.origUrl, a, o);
              });
        }
      }
      function r(e, t) {
        function i(e) {
          if (P(e)) n(e, l, t, 0, o);
          else if (S(e))
            for (r in e) e.hasOwnProperty(r) && n(e[r], l, t, r, o);
        }
        var r,
          o = !!e.test,
          a = o ? e.yep : e.nope,
          s = e.load || e.both,
          l = e.callback;
        i(a), i(s), e.complete && t.load(e.complete);
      }
      var o,
        a,
        s = this.yepnope.loader;
      if (P(e)) n(e, 0, s, 0);
      else if (F(e))
        for (o = 0; o < e.length; o++)
          (a = e[o]), P(a) ? n(a, 0, s, 0) : F(a) ? u(a) : S(a) && r(a, s);
      else S(e) && r(e, s);
    }),
      (u.addPrefix = function(e, t) {
        I[e] = t;
      }),
      (u.addFilter = function(e) {
        A.push(e);
      }),
      (u.errorTimeout = 1e4),
      null == t.readyState &&
        t.addEventListener &&
        ((t.readyState = "loading"),
        t.addEventListener(
          "DOMContentLoaded",
          (p = function() {
            t.removeEventListener("DOMContentLoaded", p, 0),
              (t.readyState = "complete");
          }),
          0
        )),
      (e.yepnope = d());
  })(this, this.document),
  (Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
  }),
  (function(e, t, i, n) {
    "use strict";
    function r(e, t, i) {
      return setTimeout(d(e, i), t);
    }
    function o(e, t, i) {
      return Array.isArray(e) ? (a(e, i[t], i), !0) : !1;
    }
    function a(e, t, i) {
      var r;
      if (e)
        if (e.forEach) e.forEach(t, i);
        else if (e.length !== n)
          for (r = 0; r < e.length; ) t.call(i, e[r], r, e), r++;
        else for (r in e) e.hasOwnProperty(r) && t.call(i, e[r], r, e);
    }
    function s(e, t, i) {
      for (var r = Object.keys(t), o = 0; o < r.length; )
        (!i || (i && e[r[o]] === n)) && (e[r[o]] = t[r[o]]), o++;
      return e;
    }
    function l(e, t) {
      return s(e, t, !0);
    }
    function c(e, t, i) {
      var n,
        r = t.prototype;
      (n = e.prototype = Object.create(r)),
        (n.constructor = e),
        (n._super = r),
        i && s(n, i);
    }
    function d(e, t) {
      return function() {
        return e.apply(t, arguments);
      };
    }
    function p(e, t) {
      return typeof e == lt ? e.apply(t ? t[0] || n : n, t) : e;
    }
    function u(e, t) {
      return e === n ? t : e;
    }
    function h(e, t, i) {
      a(v(t), function(t) {
        e.addEventListener(t, i, !1);
      });
    }
    function f(e, t, i) {
      a(v(t), function(t) {
        e.removeEventListener(t, i, !1);
      });
    }
    function m(e, t) {
      for (; e; ) {
        if (e == t) return !0;
        e = e.parentNode;
      }
      return !1;
    }
    function g(e, t) {
      return e.indexOf(t) > -1;
    }
    function v(e) {
      return e.trim().split(/\s+/g);
    }
    function y(e, t, i) {
      if (e.indexOf && !i) return e.indexOf(t);
      for (var n = 0; n < e.length; ) {
        if ((i && e[n][i] == t) || (!i && e[n] === t)) return n;
        n++;
      }
      return -1;
    }
    function b(e) {
      return Array.prototype.slice.call(e, 0);
    }
    function x(e, t, i) {
      for (var n = [], r = [], o = 0; o < e.length; ) {
        var a = t ? e[o][t] : e[o];
        y(r, a) < 0 && n.push(e[o]), (r[o] = a), o++;
      }
      return (
        i &&
          (n = t
            ? n.sort(function(e, i) {
                return e[t] > i[t];
              })
            : n.sort()),
        n
      );
    }
    function w(e, t) {
      for (
        var i, r, o = t[0].toUpperCase() + t.slice(1), a = 0;
        a < at.length;

      ) {
        if (((i = at[a]), (r = i ? i + o : t), r in e)) return r;
        a++;
      }
      return n;
    }
    function $() {
      return ut++;
    }
    function _(e) {
      var t = e.ownerDocument;
      return t.defaultView || t.parentWindow;
    }
    function T(e, t) {
      var i = this;
      (this.manager = e),
        (this.callback = t),
        (this.element = e.element),
        (this.target = e.options.inputTarget),
        (this.domHandler = function(t) {
          p(e.options.enable, [e]) && i.handler(t);
        }),
        this.init();
    }
    function k(e) {
      var t,
        i = e.options.inputClass;
      return (t = i ? i : mt ? R : gt ? z : ft ? W : L), new t(e, C);
    }
    function C(e, t, i) {
      var n = i.pointers.length,
        r = i.changedPointers.length,
        o = t & $t && 0 === n - r,
        a = t & (Tt | kt) && 0 === n - r;
      (i.isFirst = !!o),
        (i.isFinal = !!a),
        o && (e.session = {}),
        (i.eventType = t),
        F(e, i),
        e.emit("hammer.input", i),
        e.recognize(i),
        (e.session.prevInput = i);
    }
    function F(e, t) {
      var i = e.session,
        n = t.pointers,
        r = n.length;
      i.firstInput || (i.firstInput = D(t)),
        r > 1 && !i.firstMultiple
          ? (i.firstMultiple = D(t))
          : 1 === r && (i.firstMultiple = !1);
      var o = i.firstInput,
        a = i.firstMultiple,
        s = a ? a.center : o.center,
        l = (t.center = A(n));
      (t.timeStamp = pt()),
        (t.deltaTime = t.timeStamp - o.timeStamp),
        (t.angle = M(s, l)),
        (t.distance = j(s, l)),
        S(i, t),
        (t.offsetDirection = E(t.deltaX, t.deltaY));
      var c = I(t.deltaTime, t.deltaX, t.deltaY);
      (t.overallVelocityX = c.x),
        (t.overallVelocityY = c.y),
        (t.overallVelocity = dt(c.x) > dt(c.y) ? c.x : c.y),
        (t.scale = a ? N(a.pointers, n) : 1),
        (t.rotation = a ? O(a.pointers, n) : 0),
        (t.maxPointers = i.prevInput
          ? t.pointers.length > i.prevInput.maxPointers
            ? t.pointers.length
            : i.prevInput.maxPointers
          : t.pointers.length),
        P(i, t);
      var d = e.element;
      m(t.srcEvent.target, d) && (d = t.srcEvent.target), (t.target = d);
    }
    function S(e, t) {
      var i = t.center,
        n = e.offsetDelta || {},
        r = e.prevDelta || {},
        o = e.prevInput || {};
      (t.eventType === $t || o.eventType === Tt) &&
        ((r = e.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
        (n = e.offsetDelta = { x: i.x, y: i.y })),
        (t.deltaX = r.x + (i.x - n.x)),
        (t.deltaY = r.y + (i.y - n.y));
    }
    function P(e, t) {
      var i,
        r,
        o,
        a,
        s = e.lastInterval || t,
        l = t.timeStamp - s.timeStamp;
      if (t.eventType != kt && (l > wt || s.velocity === n)) {
        var c = t.deltaX - s.deltaX,
          d = t.deltaY - s.deltaY,
          p = I(l, c, d);
        (r = p.x),
          (o = p.y),
          (i = dt(p.x) > dt(p.y) ? p.x : p.y),
          (a = E(c, d)),
          (e.lastInterval = t);
      } else
        (i = s.velocity),
          (r = s.velocityX),
          (o = s.velocityY),
          (a = s.direction);
      (t.velocity = i), (t.velocityX = r), (t.velocityY = o), (t.direction = a);
    }
    function D(e) {
      for (var t = [], i = 0; i < e.pointers.length; )
        (t[i] = {
          clientX: ct(e.pointers[i].clientX),
          clientY: ct(e.pointers[i].clientY),
        }),
          i++;
      return {
        timeStamp: pt(),
        pointers: t,
        center: A(t),
        deltaX: e.deltaX,
        deltaY: e.deltaY,
      };
    }
    function A(e) {
      var t = e.length;
      if (1 === t) return { x: ct(e[0].clientX), y: ct(e[0].clientY) };
      for (var i = 0, n = 0, r = 0; t > r; )
        (i += e[r].clientX), (n += e[r].clientY), r++;
      return { x: ct(i / t), y: ct(n / t) };
    }
    function I(e, t, i) {
      return { x: t / e || 0, y: i / e || 0 };
    }
    function E(e, t) {
      return e === t
        ? Ct
        : dt(e) >= dt(t)
        ? 0 > e
          ? Ft
          : St
        : 0 > t
        ? Pt
        : Dt;
    }
    function j(e, t, i) {
      i || (i = jt);
      var n = t[i[0]] - e[i[0]],
        r = t[i[1]] - e[i[1]];
      return Math.sqrt(n * n + r * r);
    }
    function M(e, t, i) {
      i || (i = jt);
      var n = t[i[0]] - e[i[0]],
        r = t[i[1]] - e[i[1]];
      return (180 * Math.atan2(r, n)) / Math.PI;
    }
    function O(e, t) {
      return M(t[1], t[0], Mt) - M(e[1], e[0], Mt);
    }
    function N(e, t) {
      return j(t[0], t[1], Mt) / j(e[0], e[1], Mt);
    }
    function L() {
      (this.evEl = Nt),
        (this.evWin = Lt),
        (this.allow = !0),
        (this.pressed = !1),
        T.apply(this, arguments);
    }
    function R() {
      (this.evEl = Ht),
        (this.evWin = Wt),
        T.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function z() {
      (this.evTarget = qt), (this.targetIds = {}), T.apply(this, arguments);
    }
    function H(e, t) {
      var i = b(e.touches),
        n = this.targetIds;
      if (t & ($t | _t) && 1 === i.length)
        return (n[i[0].identifier] = !0), [i, i];
      var r,
        o = b(e.targetTouches),
        a = b(e.changedTouches),
        s = [];
      if (t === $t) for (r = 0; r < o.length; ) (n[o[r].identifier] = !0), r++;
      for (r = 0; r < a.length; )
        n[a[r].identifier] && s.push(a[r]),
          t & (Tt | kt) && delete n[a[r].identifier],
          r++;
      return s.length ? [x(o.concat(s), "identifier", !0), s] : void 0;
    }
    function W() {
      T.apply(this, arguments);
      var e = d(this.handler, this);
      (this.touch = new z(this.manager, e)),
        (this.mouse = new L(this.manager, e));
    }
    function B(e, t) {
      (this.manager = e), this.set(t);
    }
    function q(e) {
      if (g(e, Jt)) return Jt;
      var t = g(e, Gt),
        i = g(e, Zt);
      return t && i
        ? Gt + " " + Zt
        : t || i
        ? t
          ? Gt
          : Zt
        : g(e, Qt)
        ? Qt
        : Vt;
    }
    function X(e) {
      (this.id = $()),
        (this.manager = null),
        (this.options = l(e || {}, this.defaults)),
        (this.options.enable = u(this.options.enable, !0)),
        (this.state = Kt),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function U(e) {
      return e & ri
        ? "cancel"
        : e & ii
        ? "end"
        : e & ti
        ? "move"
        : e & ei
        ? "start"
        : "";
    }
    function Y(e) {
      return e == Dt
        ? "down"
        : e == Pt
        ? "up"
        : e == Ft
        ? "left"
        : e == St
        ? "right"
        : "";
    }
    function V(e, t) {
      var i = t.manager;
      return i ? i.get(e) : e;
    }
    function Q() {
      X.apply(this, arguments);
    }
    function J() {
      Q.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function G() {
      Q.apply(this, arguments);
    }
    function Z() {
      X.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function K() {
      Q.apply(this, arguments);
    }
    function et() {
      Q.apply(this, arguments);
    }
    function tt() {
      X.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function it(e, t) {
      return (
        (t = t || {}),
        (t.recognizers = u(t.recognizers, it.defaults.preset)),
        new nt(e, t)
      );
    }
    function nt(e, t) {
      (t = t || {}),
        (this.options = l(t, it.defaults)),
        (this.options.inputTarget = this.options.inputTarget || e),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.element = e),
        (this.input = k(this)),
        (this.touchAction = new B(this, this.options.touchAction)),
        rt(this, !0),
        a(
          t.recognizers,
          function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
          },
          this
        );
    }
    function rt(e, t) {
      var i = e.element;
      a(e.options.cssProps, function(e, n) {
        i.style[w(i.style, n)] = t ? e : "";
      });
    }
    function ot(e, i) {
      var n = t.createEvent("Event");
      n.initEvent(e, !0, !0), (n.gesture = i), i.target.dispatchEvent(n);
    }
    var at = ["", "webkit", "moz", "MS", "ms", "o"],
      st = t.createElement("div"),
      lt = "function",
      ct = Math.round,
      dt = Math.abs,
      pt = Date.now,
      ut = 1,
      ht = /mobile|tablet|ip(ad|hone|od)|android/i,
      ft = "ontouchstart" in e,
      mt = w(e, "PointerEvent") !== n,
      gt = ft && ht.test(navigator.userAgent),
      vt = "touch",
      yt = "pen",
      bt = "mouse",
      xt = "kinect",
      wt = 25,
      $t = 1,
      _t = 2,
      Tt = 4,
      kt = 8,
      Ct = 1,
      Ft = 2,
      St = 4,
      Pt = 8,
      Dt = 16,
      At = Ft | St,
      It = Pt | Dt,
      Et = At | It,
      jt = ["x", "y"],
      Mt = ["clientX", "clientY"];
    T.prototype = {
      handler: function() {},
      init: function() {
        this.evEl && h(this.element, this.evEl, this.domHandler),
          this.evTarget && h(this.target, this.evTarget, this.domHandler),
          this.evWin && h(_(this.element), this.evWin, this.domHandler);
      },
      destroy: function() {
        this.evEl && f(this.element, this.evEl, this.domHandler),
          this.evTarget && f(this.target, this.evTarget, this.domHandler),
          this.evWin && f(_(this.element), this.evWin, this.domHandler);
      },
    };
    var Ot = { mousedown: $t, mousemove: _t, mouseup: Tt },
      Nt = "mousedown",
      Lt = "mousemove mouseup";
    c(L, T, {
      handler: function(e) {
        var t = Ot[e.type];
        t & $t && 0 === e.button && (this.pressed = !0),
          t & _t && 1 !== e.which && (t = Tt),
          this.pressed &&
            this.allow &&
            (t & Tt && (this.pressed = !1),
            this.callback(this.manager, t, {
              pointers: [e],
              changedPointers: [e],
              pointerType: bt,
              srcEvent: e,
            }));
      },
    });
    var Rt = {
        pointerdown: $t,
        pointermove: _t,
        pointerup: Tt,
        pointercancel: kt,
        pointerout: kt,
      },
      zt = { 2: vt, 3: yt, 4: bt, 5: xt },
      Ht = "pointerdown",
      Wt = "pointermove pointerup pointercancel";
    e.MSPointerEvent &&
      ((Ht = "MSPointerDown"),
      (Wt = "MSPointerMove MSPointerUp MSPointerCancel")),
      c(R, T, {
        handler: function(e) {
          var t = this.store,
            i = !1,
            n = e.type.toLowerCase().replace("ms", ""),
            r = Rt[n],
            o = zt[e.pointerType] || e.pointerType,
            a = o == vt;
          r & $t && (0 === e.button || a)
            ? t.push(e)
            : r & (Tt | kt) && (i = !0);
          var s = y(t, e.pointerId, "pointerId");
          0 > s ||
            ((t[s] = e),
            this.callback(this.manager, r, {
              pointers: t,
              changedPointers: [e],
              pointerType: o,
              srcEvent: e,
            }),
            i && t.splice(s, 1));
        },
      });
    var Bt = { touchstart: $t, touchmove: _t, touchend: Tt, touchcancel: kt },
      qt = "touchstart touchmove touchend touchcancel";
    c(z, T, {
      handler: function(e) {
        var t = Bt[e.type],
          i = H.call(this, e, t);
        i &&
          this.callback(this.manager, t, {
            pointers: i[0],
            changedPointers: i[1],
            pointerType: vt,
            srcEvent: e,
          });
      },
    }),
      c(W, T, {
        handler: function(e, t, i) {
          var n = i.pointerType == vt,
            r = i.pointerType == bt;
          if (n) this.mouse.allow = !1;
          else if (r && !this.mouse.allow) return;
          t & (Tt | kt) && (this.mouse.allow = !0), this.callback(e, t, i);
        },
        destroy: function() {
          this.touch.destroy(), this.mouse.destroy();
        },
      });
    var Xt = w(st.style, "touchAction"),
      Ut = Xt !== n,
      Yt = "compute",
      Vt = "auto",
      Qt = "manipulation",
      Jt = "none",
      Gt = "pan-x",
      Zt = "pan-y";
    B.prototype = {
      set: function(e) {
        e == Yt && (e = this.compute()),
          Ut && (this.manager.element.style[Xt] = e),
          (this.actions = e.toLowerCase().trim());
      },
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      compute: function() {
        var e = [];
        return (
          a(this.manager.recognizers, function(t) {
            p(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
          }),
          q(e.join(" "))
        );
      },
      preventDefaults: function(e) {
        if (!Ut) {
          var t = e.srcEvent,
            i = e.offsetDirection;
          if (this.manager.session.prevented) return t.preventDefault(), void 0;
          var n = this.actions,
            r = g(n, Jt),
            o = g(n, Zt),
            a = g(n, Gt);
          return r || (o && i & At) || (a && i & It)
            ? this.preventSrc(t)
            : void 0;
        }
      },
      preventSrc: function(e) {
        (this.manager.session.prevented = !0), e.preventDefault();
      },
    };
    var Kt = 1,
      ei = 2,
      ti = 4,
      ii = 8,
      ni = ii,
      ri = 16,
      oi = 32;
    (X.prototype = {
      defaults: {},
      set: function(e) {
        return (
          s(this.options, e),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function(e) {
        if (o(e, "recognizeWith", this)) return this;
        var t = this.simultaneous;
        return (
          (e = V(e, this)),
          t[e.id] || ((t[e.id] = e), e.recognizeWith(this)),
          this
        );
      },
      dropRecognizeWith: function(e) {
        return o(e, "dropRecognizeWith", this)
          ? this
          : ((e = V(e, this)), delete this.simultaneous[e.id], this);
      },
      requireFailure: function(e) {
        if (o(e, "requireFailure", this)) return this;
        var t = this.requireFail;
        return (
          (e = V(e, this)),
          -1 === y(t, e) && (t.push(e), e.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function(e) {
        if (o(e, "dropRequireFailure", this)) return this;
        e = V(e, this);
        var t = y(this.requireFail, e);
        return t > -1 && this.requireFail.splice(t, 1), this;
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function(e) {
        return !!this.simultaneous[e.id];
      },
      emit: function(e) {
        function t(t) {
          i.manager.emit(i.options.event + (t ? U(n) : ""), e);
        }
        var i = this,
          n = this.state;
        ii > n && t(!0), t(), n >= ii && t(!0);
      },
      tryEmit: function(e) {
        return this.canEmit() ? this.emit(e) : ((this.state = oi), void 0);
      },
      canEmit: function() {
        for (var e = 0; e < this.requireFail.length; ) {
          if (!(this.requireFail[e].state & (oi | Kt))) return !1;
          e++;
        }
        return !0;
      },
      recognize: function(e) {
        var t = s({}, e);
        return p(this.options.enable, [this, t])
          ? (this.state & (ni | ri | oi) && (this.state = Kt),
            (this.state = this.process(t)),
            this.state & (ei | ti | ii | ri) && this.tryEmit(t),
            void 0)
          : (this.reset(), (this.state = oi), void 0);
      },
      process: function() {},
      getTouchAction: function() {},
      reset: function() {},
    }),
      c(Q, X, {
        defaults: { pointers: 1 },
        attrTest: function(e) {
          var t = this.options.pointers;
          return 0 === t || e.pointers.length === t;
        },
        process: function(e) {
          var t = this.state,
            i = e.eventType,
            n = t & (ei | ti),
            r = this.attrTest(e);
          return n && (i & kt || !r)
            ? t | ri
            : n || r
            ? i & Tt
              ? t | ii
              : t & ei
              ? t | ti
              : ei
            : oi;
        },
      }),
      c(J, Q, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: Et },
        getTouchAction: function() {
          var e = this.options.direction,
            t = [];
          return e & At && t.push(Zt), e & It && t.push(Gt), t;
        },
        directionTest: function(e) {
          var t = this.options,
            i = !0,
            n = e.distance,
            r = e.direction,
            o = e.deltaX,
            a = e.deltaY;
          return (
            r & t.direction ||
              (t.direction & At
                ? ((r = 0 === o ? Ct : 0 > o ? Ft : St),
                  (i = o != this.pX),
                  (n = Math.abs(e.deltaX)))
                : ((r = 0 === a ? Ct : 0 > a ? Pt : Dt),
                  (i = a != this.pY),
                  (n = Math.abs(e.deltaY)))),
            (e.direction = r),
            i && n > t.threshold && r & t.direction
          );
        },
        attrTest: function(e) {
          return (
            Q.prototype.attrTest.call(this, e) &&
            (this.state & ei || (!(this.state & ei) && this.directionTest(e)))
          );
        },
        emit: function(e) {
          (this.pX = e.deltaX), (this.pY = e.deltaY);
          var t = Y(e.direction);
          t && this.manager.emit(this.options.event + t, e),
            this._super.emit.call(this, e);
        },
      }),
      c(G, Q, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function() {
          return ["pan-x", "pan-y"];
        },
        attrTest: function(e) {
          return (
            this._super.attrTest.call(this, e) &&
            (Math.abs(e.scale - 1) > this.options.threshold || this.state & ei)
          );
        },
        emit: function(e) {
          if ((this._super.emit.call(this, e), 1 !== e.scale)) {
            var t = e.scale < 1 ? "in" : "out";
            this.manager.emit(this.options.event + t, e);
          }
        },
      }),
      c(Z, X, {
        defaults: { event: "press", pointers: 1, time: 500, threshold: 5 },
        getTouchAction: function() {
          return [Vt];
        },
        process: function(e) {
          var t = this.options,
            i = e.pointers.length === t.pointers,
            n = e.distance < t.threshold,
            o = e.deltaTime > t.time;
          if (((this._input = e), !n || !i || (e.eventType & (Tt | kt) && !o)))
            this.reset();
          else if (e.eventType & $t)
            this.reset(),
              (this._timer = r(
                function() {
                  (this.state = ni), this.tryEmit();
                },
                t.time,
                this
              ));
          else if (e.eventType & Tt) return ni;
          return oi;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(e) {
          this.state === ni &&
            (e && e.eventType & Tt
              ? this.manager.emit(this.options.event + "up", e)
              : ((this._input.timeStamp = pt()),
                this.manager.emit(this.options.event, this._input)));
        },
      }),
      c(K, Q, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function() {
          return [Jt];
        },
        attrTest: function(e) {
          return (
            this._super.attrTest.call(this, e) &&
            (Math.abs(e.rotation) > this.options.threshold || this.state & ei)
          );
        },
      }),
      c(et, Q, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.65,
          direction: At | It,
          pointers: 1,
        },
        getTouchAction: function() {
          return J.prototype.getTouchAction.call(this);
        },
        attrTest: function(e) {
          var t,
            i = this.options.direction;
          return (
            i & (At | It)
              ? (t = e.overallVelocity)
              : i & At
              ? (t = e.overallVelocityX)
              : i & It && (t = e.overallVelocityY),
            this._super.attrTest.call(this, e) &&
              i & e.offsetDirection &&
              e.distance > this.options.threshold &&
              e.maxPointers == this.options.pointers &&
              dt(t) > this.options.velocity &&
              e.eventType & Tt
          );
        },
        emit: function(e) {
          var t = Y(e.offsetDirection);
          t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e);
        },
      }),
      c(tt, X, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 2,
          posThreshold: 10,
        },
        getTouchAction: function() {
          return [Qt];
        },
        process: function(e) {
          var t = this.options,
            i = e.pointers.length === t.pointers,
            n = e.distance < t.threshold,
            o = e.deltaTime < t.time;
          if ((this.reset(), e.eventType & $t && 0 === this.count))
            return this.failTimeout();
          if (n && o && i) {
            if (e.eventType != Tt) return this.failTimeout();
            var a = this.pTime ? e.timeStamp - this.pTime < t.interval : !0,
              s = !this.pCenter || j(this.pCenter, e.center) < t.posThreshold;
            (this.pTime = e.timeStamp),
              (this.pCenter = e.center),
              s && a ? (this.count += 1) : (this.count = 1),
              (this._input = e);
            var l = this.count % t.taps;
            if (0 === l)
              return this.hasRequireFailures()
                ? ((this._timer = r(
                    function() {
                      (this.state = ni), this.tryEmit();
                    },
                    t.interval,
                    this
                  )),
                  ei)
                : ni;
          }
          return oi;
        },
        failTimeout: function() {
          return (
            (this._timer = r(
              function() {
                this.state = oi;
              },
              this.options.interval,
              this
            )),
            oi
          );
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function() {
          this.state == ni &&
            ((this._input.tapCount = this.count),
            this.manager.emit(this.options.event, this._input));
        },
      }),
      (it.VERSION = "2.0.3"),
      (it.defaults = {
        domEvents: !1,
        touchAction: Yt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [K, { enable: !1 }],
          [G, { enable: !1 }, ["rotate"]],
          [et, { direction: At }],
          [J, { direction: At }, ["swipe"]],
          [tt],
          [tt, { event: "doubletap", taps: 2 }, ["tap"]],
          [Z],
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)",
        },
      });
    var ai = 1,
      si = 2;
    (nt.prototype = {
      set: function(e) {
        return (
          s(this.options, e),
          e.touchAction && this.touchAction.update(),
          e.inputTarget &&
            (this.input.destroy(),
            (this.input.target = e.inputTarget),
            this.input.init()),
          this
        );
      },
      stop: function(e) {
        this.session.stopped = e ? si : ai;
      },
      recognize: function(e) {
        var t = this.session;
        if (!t.stopped) {
          this.touchAction.preventDefaults(e);
          var i,
            n = this.recognizers,
            r = t.curRecognizer;
          (!r || (r && r.state & ni)) && (r = t.curRecognizer = null);
          for (var o = 0; o < n.length; )
            (i = n[o]),
              t.stopped === si || (r && i != r && !i.canRecognizeWith(r))
                ? i.reset()
                : i.recognize(e),
              !r && i.state & (ei | ti | ii) && (r = t.curRecognizer = i),
              o++;
        }
      },
      get: function(e) {
        if (e instanceof X) return e;
        for (var t = this.recognizers, i = 0; i < t.length; i++)
          if (t[i].options.event == e) return t[i];
        return null;
      },
      add: function(e) {
        if (o(e, "add", this)) return this;
        var t = this.get(e.options.event);
        return (
          t && this.remove(t),
          this.recognizers.push(e),
          (e.manager = this),
          this.touchAction.update(),
          e
        );
      },
      remove: function(e) {
        if (o(e, "remove", this)) return this;
        var t = this.recognizers;
        return (
          (e = this.get(e)),
          t.splice(y(t, e), 1),
          this.touchAction.update(),
          this
        );
      },
      on: function(e, t) {
        var i = this.handlers;
        return (
          a(v(e), function(e) {
            (i[e] = i[e] || []), i[e].push(t);
          }),
          this
        );
      },
      off: function(e, t) {
        var i = this.handlers;
        return (
          a(v(e), function(e) {
            t ? i[e].splice(y(i[e], t), 1) : delete i[e];
          }),
          this
        );
      },
      emit: function(e, t) {
        this.options.domEvents && ot(e, t);
        var i = this.handlers[e] && this.handlers[e].slice();
        if (i && i.length) {
          (t.type = e),
            (t.preventDefault = function() {
              t.srcEvent.preventDefault();
            });
          for (var n = 0; n < i.length; ) i[n](t), n++;
        }
      },
      destroy: function() {
        this.element && rt(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null);
      },
    }),
      s(it, {
        INPUT_START: $t,
        INPUT_MOVE: _t,
        INPUT_END: Tt,
        INPUT_CANCEL: kt,
        STATE_POSSIBLE: Kt,
        STATE_BEGAN: ei,
        STATE_CHANGED: ti,
        STATE_ENDED: ii,
        STATE_RECOGNIZED: ni,
        STATE_CANCELLED: ri,
        STATE_FAILED: oi,
        DIRECTION_NONE: Ct,
        DIRECTION_LEFT: Ft,
        DIRECTION_RIGHT: St,
        DIRECTION_UP: Pt,
        DIRECTION_DOWN: Dt,
        DIRECTION_HORIZONTAL: At,
        DIRECTION_VERTICAL: It,
        DIRECTION_ALL: Et,
        Manager: nt,
        Input: T,
        TouchAction: B,
        TouchInput: z,
        MouseInput: L,
        PointerEventInput: R,
        TouchMouseInput: W,
        Recognizer: X,
        AttrRecognizer: Q,
        Tap: tt,
        Pan: J,
        Swipe: et,
        Pinch: G,
        Rotate: K,
        Press: Z,
        on: h,
        off: f,
        each: a,
        merge: l,
        extend: s,
        inherit: c,
        bindFn: d,
        prefixed: w,
      }),
      typeof define == lt && define.amd
        ? define(function() {
            return it;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = it)
        : (e[i] = it);
  })(window, document, "Hammer"),
  (function(e, t, i) {
    function n(n, r) {
      var o = e(n);
      o.data(i) || o.data(i, new t(o[0], r));
    }
    (e.fn.hammer = function(e) {
      return this.each(function() {
        n(this, e);
      });
    }),
      (t.Manager.prototype.emit = (function(e) {
        return function(t, i) {
          e.call(this, t, i),
            jQuery(this.element).triggerHandler({ type: t, gesture: i });
        };
      })(t.Manager.prototype.emit));
  })(jQuery, Hammer, "hammer"),
  (function(e) {
    function t(e, t, i, n) {
      if ("addEventListener" in e)
        try {
          e.addEventListener(t, i, n);
        } catch (r) {
          if ("object" != typeof i || !i.handleEvent) throw r;
          e.addEventListener(
            t,
            function(e) {
              i.handleEvent.call(i, e);
            },
            n
          );
        }
      else
        "attachEvent" in e &&
          ("object" == typeof i && i.handleEvent
            ? e.attachEvent("on" + t, function() {
                i.handleEvent.call(i);
              })
            : e.attachEvent("on" + t, i));
    }
    function i(e, t, i, n) {
      if ("removeEventListener" in e)
        try {
          e.removeEventListener(t, i, n);
        } catch (r) {
          if ("object" != typeof i || !i.handleEvent) throw r;
          e.removeEventListener(
            t,
            function(e) {
              i.handleEvent.call(i, e);
            },
            n
          );
        }
      else
        "detachEvent" in e &&
          ("object" == typeof i && i.handleEvent
            ? e.detachEvent("on" + t, function() {
                i.handleEvent.call(i);
              })
            : e.detachEvent("on" + t, i));
    }
    (window.MBP = window.MBP || {}),
      (MBP.viewportmeta =
        e.querySelector && e.querySelector('meta[name="viewport"]')),
      (MBP.ua = navigator.userAgent),
      (MBP.scaleFix = function() {
        MBP.viewportmeta &&
          /iPhone|iPad|iPod/.test(MBP.ua) &&
          !/Opera Mini/.test(MBP.ua) &&
          ((MBP.viewportmeta.content =
            "width=device-width, minimum-scale=1.0, maximum-scale=1.0"),
          e.addEventListener("gesturestart", MBP.gestureStart, !1));
      }),
      (MBP.gestureStart = function() {
        MBP.viewportmeta.content =
          "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
      }),
      (MBP.BODY_SCROLL_TOP = !1),
      (MBP.getScrollTop = function() {
        var t = window,
          i = e;
        return (
          t.pageYOffset ||
          ("CSS1Compat" === i.compatMode && i.documentElement.scrollTop) ||
          i.body.scrollTop ||
          0
        );
      }),
      (MBP.hideUrlBar = function() {
        var e = window;
        location.hash ||
          MBP.BODY_SCROLL_TOP === !1 ||
          e.scrollTo(0, 1 === MBP.BODY_SCROLL_TOP ? 0 : 1);
      }),
      (MBP.hideUrlBarOnLoad = function() {
        var e = window,
          t = e.document;
        !location.hash &&
          e.addEventListener &&
          (window.scrollTo(0, 1),
          (MBP.BODY_SCROLL_TOP = 1),
          (bodycheck = setInterval(function() {
            t.body &&
              (clearInterval(bodycheck),
              (MBP.BODY_SCROLL_TOP = MBP.getScrollTop()),
              MBP.hideUrlBar());
          }, 15)),
          e.addEventListener("load", function() {
            setTimeout(function() {
              MBP.getScrollTop() < 20 && MBP.hideUrlBar();
            }, 0);
          }));
      }),
      (MBP.fastButton = function(e, i) {
        (this.element = e),
          (this.handler = i),
          t(e, "touchstart", this, !1),
          t(e, "click", this, !1);
      }),
      (MBP.fastButton.prototype.handleEvent = function(e) {
        switch (((e = e || window.event), e.type)) {
          case "touchstart":
            this.onTouchStart(e);
            break;
          case "touchmove":
            this.onTouchMove(e);
            break;
          case "touchend":
            this.onClick(e);
            break;
          case "click":
            this.onClick(e);
        }
      }),
      (MBP.fastButton.prototype.onTouchStart = function(t) {
        t.stopPropagation(),
          this.element.addEventListener("touchend", this, !1),
          e.body.addEventListener("touchmove", this, !1),
          (this.startX = t.touches[0].clientX),
          (this.startY = t.touches[0].clientY),
          (this.element.style.backgroundColor = "rgba(0,0,0,.7)");
      }),
      (MBP.fastButton.prototype.onTouchMove = function(e) {
        (Math.abs(e.touches[0].clientX - this.startX) > 10 ||
          Math.abs(e.touches[0].clientY - this.startY) > 10) &&
          this.reset();
      }),
      (MBP.fastButton.prototype.onClick = function(e) {
        (e = e || window.event),
          e.stopPropagation && e.stopPropagation(),
          this.reset(),
          this.handler(e),
          "touchend" == e.type &&
            MBP.preventGhostClick(this.startX, this.startY),
          (this.element.style.backgroundColor = "");
      }),
      (MBP.fastButton.prototype.reset = function() {
        i(this.element, "touchend", this, !1),
          i(e.body, "touchmove", this, !1),
          (this.element.style.backgroundColor = "");
      }),
      (MBP.preventGhostClick = function(e, t) {
        MBP.coords.push(e, t),
          window.setTimeout(function() {
            MBP.coords.splice(0, 2);
          }, 2500);
      }),
      (MBP.ghostClickHandler = function(e) {
        if (!MBP.hadTouchEvent && "ontouchstart" in window)
          return e.stopPropagation(), e.preventDefault(), void 0;
        for (var t = 0, i = MBP.coords.length; i > t; t += 2) {
          var n = MBP.coords[t],
            r = MBP.coords[t + 1];
          Math.abs(e.clientX - n) < 25 &&
            Math.abs(e.clientY - r) < 25 &&
            (e.stopPropagation(), e.preventDefault());
        }
      }),
      e.addEventListener &&
        e.addEventListener("click", MBP.ghostClickHandler, !0),
      t(
        e.documentElement,
        "touchstart",
        function() {
          MBP.hadTouchEvent = !0;
        },
        !1
      ),
      (MBP.coords = []),
      (MBP.splash = function() {
        var t = "iPad" === navigator.platform ? "h/" : "l/";
        e.write(
          '<link rel="apple-touch-startup-image" href="/img/' +
            t +
            'splash.png" />'
        );
      }),
      (MBP.autogrow = function(e, t) {
        function i() {
          var e = this.scrollHeight,
            t = this.clientHeight;
          e > t && (this.style.height = e + 3 * r + "px");
        }
        var n = t ? t : 12,
          r = e.currentStyle
            ? e.currentStyle.lineHeight
            : getComputedStyle(e, null).lineHeight;
        (r = -1 == r.indexOf("px") ? n : parseInt(r, 10)),
          (e.style.overflow = "hidden"),
          e.addEventListener
            ? e.addEventListener("keyup", i, !1)
            : e.attachEvent("onkeyup", i);
      }),
      (MBP.enableActive = function() {
        e.addEventListener("touchstart", function() {}, !1);
      }),
      (MBP.viewportMeta = $('meta[name="viewport"]')),
      (MBP.preventZoom = function() {
        $("input, select, textarea").bind("focus blur", function(e) {
          MBP.viewportMeta.attr(
            "content",
            "width=device-width,initial-scale=1,maximum-scale=" +
              ("blur" == e.type ? 10 : 1)
          );
        });
      });
  })(document),
  $(function() {});
