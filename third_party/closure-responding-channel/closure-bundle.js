
  const localWindow = Object.create(window);
  (function(window) {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l = this || self;
function m() {
}
function n(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function aa(a) {
  return Object.prototype.hasOwnProperty.call(a, p) && a[p] || (a[p] = ++ba);
}
function ca(a) {
  null !== a && "removeAttribute" in a && a.removeAttribute(p);
  try {
    delete a[p];
  } catch (b) {
  }
}
var p = "closure_uid_" + (1e9 * Math.random() >>> 0), ba = 0;
function da(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ea(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function q(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = da : q = ea;
  return q.apply(null, arguments);
}
function fa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function r(a, b) {
  a = a.split(".");
  var c = l;
  a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
  for (var d; a.length && (d = a.shift());) {
    a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
  }
}
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.B = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.M = function(d, e, f) {
    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) {
      g[h - 2] = arguments[h];
    }
    return b.prototype[e].apply(d, g);
  };
}
;function ha(a) {
  if (!a) {
    return !1;
  }
  try {
    return !!a.$goog_Thenable;
  } catch (b) {
    return !1;
  }
}
;function u(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, u);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
t(u, Error);
u.prototype.name = "CustomError";
function ia(a, b) {
  this.i = a;
  this.l = b;
  this.g = 0;
  this.h = null;
}
ia.prototype.get = function() {
  if (0 < this.g) {
    this.g--;
    var a = this.h;
    this.h = a.next;
    a.next = null;
  } else {
    a = this.i();
  }
  return a;
};
function ja(a, b) {
  a.l(b);
  100 > a.g && (a.g++, b.next = a.h, a.h = b);
}
;function ka() {
  this.g = this.h = null;
}
ka.prototype.add = function(a, b) {
  var c = la.get();
  c.set(a, b);
  this.g ? this.g.next = c : this.h = c;
  this.g = c;
};
function ma() {
  var a = na, b = null;
  a.h && (b = a.h, a.h = a.h.next, a.h || (a.g = null), b.next = null);
  return b;
}
var la = new ia(function() {
  return new oa;
}, function(a) {
  return a.reset();
});
function oa() {
  this.next = this.h = this.g = null;
}
oa.prototype.set = function(a, b) {
  this.g = a;
  this.h = b;
  this.next = null;
};
oa.prototype.reset = function() {
  this.next = this.h = this.g = null;
};
var pa = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function(a, b) {
  if ("string" === typeof a) {
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
  }
  for (var c = 0; c < a.length; c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, qa = Array.prototype.map ? function(a, b) {
  return Array.prototype.map.call(a, b, void 0);
} : function(a, b) {
  for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) {
    f in e && (d[f] = b.call(void 0, e[f], f, a));
  }
  return d;
}, ra = Array.prototype.some ? function(a, b) {
  return Array.prototype.some.call(a, b, void 0);
} : function(a, b) {
  for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
    if (e in d && b.call(void 0, d[e], e, a)) {
      return !0;
    }
  }
  return !1;
};
var sa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function ta(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;var v;
a: {
  var ua = l.navigator;
  if (ua) {
    var va = ua.userAgent;
    if (va) {
      v = va;
      break a;
    }
  }
  v = "";
}
function w(a) {
  return -1 != v.indexOf(a);
}
;function wa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function xa(a, b, c) {
  var d = {}, e;
  for (e in a) {
    d[e] = b.call(c, a[e], e, a);
  }
  return d;
}
var ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0; f < ya.length; f++) {
      c = ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Aa(a) {
  Aa[" "](a);
  return a;
}
Aa[" "] = m;
var Ba = w("Opera"), Ca = w("Trident") || w("MSIE"), Da = w("Edge"), Ea = w("Gecko") && !(-1 != v.toLowerCase().indexOf("webkit") && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge"), Fa = -1 != v.toLowerCase().indexOf("webkit") && !w("Edge"), Ga;
a: {
  var Ha = "", Ia = function() {
    var a = v;
    if (Ea) {
      return /rv:([^\);]+)(\)|;)/.exec(a);
    }
    if (Da) {
      return /Edge\/([\d\.]+)/.exec(a);
    }
    if (Ca) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    }
    if (Fa) {
      return /WebKit\/(\S+)/.exec(a);
    }
    if (Ba) {
      return /(?:Version)[ \/]?(\S+)/.exec(a);
    }
  }();
  Ia && (Ha = Ia ? Ia[1] : "");
  if (Ca) {
    var x, Ja = l.document;
    x = Ja ? Ja.documentMode : void 0;
    if (null != x && x > parseFloat(Ha)) {
      Ga = String(x);
      break a;
    }
  }
  Ga = Ha;
}
;function Ka() {
  var a = document;
  var b = "IFRAME";
  "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
  return a.createElement(b);
}
;var La;
function Ma() {
  var a = l.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !w("Presto") && (a = function() {
    var e = Ka();
    e.style.display = "none";
    document.documentElement.appendChild(e);
    var f = e.contentWindow;
    e = f.document;
    e.open();
    e.close();
    var g = "callImmediate" + Math.random(), h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
    e = q(function(k) {
      if (("*" == h || k.origin == h) && k.data == g) {
        this.port1.onmessage();
      }
    }, this);
    f.addEventListener("message", e, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      f.postMessage(g, h);
    }};
  });
  if ("undefined" !== typeof a && !w("Trident") && !w("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (void 0 !== c.next) {
        c = c.next;
        var e = c.J;
        c.J = null;
        e();
      }
    };
    return function(e) {
      d.next = {J:e};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return function(e) {
    l.setTimeout(e, 0);
  };
}
;function Na(a) {
  l.setTimeout(function() {
    throw a;
  }, 0);
}
;function Oa(a, b) {
  y || Pa();
  Qa || (y(), Qa = !0);
  na.add(a, b);
}
var y;
function Pa() {
  if (l.Promise && l.Promise.resolve) {
    var a = l.Promise.resolve(void 0);
    y = function() {
      a.then(Ra);
    };
  } else {
    y = function() {
      var b = Ra;
      "function" !== typeof l.setImmediate || l.Window && l.Window.prototype && !w("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (La || (La = Ma()), La(b)) : l.setImmediate(b);
    };
  }
}
var Qa = !1, na = new ka;
function Ra() {
  for (var a; a = ma();) {
    try {
      a.g.call(a.h);
    } catch (b) {
      Na(b);
    }
    ja(la, a);
  }
  Qa = !1;
}
;function z(a) {
  this.h = A;
  this.m = void 0;
  this.l = this.g = this.i = null;
  this.j = this.u = !1;
  if (a != m) {
    try {
      var b = this;
      a.call(void 0, function(c) {
        B(b, D, c);
      }, function(c) {
        B(b, E, c);
      });
    } catch (c) {
      B(this, E, c);
    }
  }
}
var A = 0, D = 2, E = 3;
function Sa() {
  this.next = this.i = this.g = this.l = this.h = null;
  this.j = !1;
}
Sa.prototype.reset = function() {
  this.i = this.g = this.l = this.h = null;
  this.j = !1;
};
var Ta = new ia(function() {
  return new Sa;
}, function(a) {
  a.reset();
});
function Ua(a, b, c) {
  var d = Ta.get();
  d.l = a;
  d.g = b;
  d.i = c;
  return d;
}
function Va(a) {
  if (a instanceof z) {
    return a;
  }
  var b = new z(m);
  B(b, D, a);
  return b;
}
z.prototype.then = function(a, b, c) {
  return Wa(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
};
z.prototype.$goog_Thenable = !0;
z.prototype.cancel = function(a) {
  if (this.h == A) {
    var b = new F(a);
    Oa(function() {
      Xa(this, b);
    }, this);
  }
};
function Xa(a, b) {
  if (a.h == A) {
    if (a.i) {
      var c = a.i;
      if (c.g) {
        for (var d = 0, e = null, f = null, g = c.g; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) {
          e || (f = g);
        }
        e && (c.h == A && 1 == d ? Xa(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Ya(c), Za(c, e, E, b)));
      }
      a.i = null;
    } else {
      B(a, E, b);
    }
  }
}
function $a(a, b) {
  a.g || a.h != D && a.h != E || ab(a);
  a.l ? a.l.next = b : a.g = b;
  a.l = b;
}
function Wa(a, b, c, d) {
  var e = Ua(null, null, null);
  e.h = new z(function(f, g) {
    e.l = b ? function(h) {
      try {
        var k = b.call(d, h);
        f(k);
      } catch (C) {
        g(C);
      }
    } : f;
    e.g = c ? function(h) {
      try {
        var k = c.call(d, h);
        void 0 === k && h instanceof F ? g(h) : f(k);
      } catch (C) {
        g(C);
      }
    } : g;
  });
  e.h.i = a;
  $a(a, e);
  return e.h;
}
z.prototype.s = function(a) {
  this.h = A;
  B(this, D, a);
};
z.prototype.v = function(a) {
  this.h = A;
  B(this, E, a);
};
function B(a, b, c) {
  if (a.h == A) {
    a === c && (b = E, c = new TypeError("Promise cannot resolve to itself"));
    a.h = 1;
    a: {
      var d = c, e = a.s, f = a.v;
      if (d instanceof z) {
        $a(d, Ua(e || m, f || null, a));
        var g = !0;
      } else {
        if (ha(d)) {
          d.then(e, f, a), g = !0;
        } else {
          if (n(d)) {
            try {
              var h = d.then;
              if ("function" === typeof h) {
                bb(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (k) {
              f.call(a, k);
              g = !0;
              break a;
            }
          }
          g = !1;
        }
      }
    }
    g || (a.m = c, a.h = b, a.i = null, ab(a), b != E || c instanceof F || cb(a, c));
  }
}
function bb(a, b, c, d, e) {
  function f(k) {
    h || (h = !0, d.call(e, k));
  }
  function g(k) {
    h || (h = !0, c.call(e, k));
  }
  var h = !1;
  try {
    b.call(a, g, f);
  } catch (k) {
    f(k);
  }
}
function ab(a) {
  a.u || (a.u = !0, Oa(a.o, a));
}
function Ya(a) {
  var b = null;
  a.g && (b = a.g, a.g = b.next, b.next = null);
  a.g || (a.l = null);
  return b;
}
z.prototype.o = function() {
  for (var a; a = Ya(this);) {
    Za(this, a, this.h, this.m);
  }
  this.u = !1;
};
function Za(a, b, c, d) {
  if (c == E && b.g && !b.j) {
    for (; a && a.j; a = a.i) {
      a.j = !1;
    }
  }
  if (b.h) {
    b.h.i = null, db(b, c, d);
  } else {
    try {
      b.j ? b.l.call(b.i) : db(b, c, d);
    } catch (e) {
      eb.call(null, e);
    }
  }
  ja(Ta, b);
}
function db(a, b, c) {
  b == D ? a.l.call(a.i, c) : a.g && a.g.call(a.i, c);
}
function cb(a, b) {
  a.j = !0;
  Oa(function() {
    a.j && eb.call(null, b);
  });
}
var eb = Na;
function F(a) {
  u.call(this, a);
}
t(F, u);
F.prototype.name = "cancel";
function G(a) {
  a && "function" == typeof a.K && a.K();
}
;function H() {
  0 != fb && (gb[aa(this)] = this);
  this.l = this.l;
  this.u = this.u;
}
var fb = 0, gb = {};
H.prototype.l = !1;
H.prototype.K = function() {
  if (!this.l && (this.l = !0, this.h(), 0 != fb)) {
    var a = aa(this);
    if (0 != fb && this.u && 0 < this.u.length) {
      throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
    }
    delete gb[a];
  }
};
H.prototype.h = function() {
  if (this.u) {
    for (; this.u.length;) {
      this.u.shift()();
    }
  }
};
function hb(a) {
  function b(f, g) {
    var h = g + "  ";
    try {
      if (void 0 === f) {
        c.push("undefined");
      } else {
        if (null === f) {
          c.push("NULL");
        } else {
          if ("string" === typeof f) {
            c.push('"' + f.replace(/\n/g, "\n" + g) + '"');
          } else {
            if ("function" === typeof f) {
              c.push(String(f).replace(/\n/g, "\n" + g));
            } else {
              if (n(f)) {
                f[p] || d.push(f);
                var k = aa(f);
                if (e[k]) {
                  c.push("*** reference loop detected (id=" + k + ") ***");
                } else {
                  e[k] = !0;
                  c.push("{");
                  for (var C in f) {
                    "function" !== typeof f[C] && (c.push("\n"), c.push(h), c.push(C + " = "), b(f[C], h));
                  }
                  c.push("\n" + g + "}");
                  delete e[k];
                }
              } else {
                c.push(f);
              }
            }
          }
        }
      }
    } catch (Vb) {
      c.push("*** " + Vb + " ***");
    }
  }
  var c = [], d = [], e = {};
  b(a, "");
  for (a = 0; a < d.length; a++) {
    ca(d[a]);
  }
}
;var ib = function() {
  if (!l.addEventListener || !Object.defineProperty) {
    return !1;
  }
  var a = !1, b = Object.defineProperty({}, "passive", {get:function() {
    a = !0;
  }});
  try {
    l.addEventListener("test", m, b), l.removeEventListener("test", m, b);
  } catch (c) {
  }
  return a;
}();
function I(a, b) {
  this.type = a;
  this.h = this.target = b;
  this.defaultPrevented = !1;
}
I.prototype.g = function() {
  this.defaultPrevented = !0;
};
function J(a, b) {
  I.call(this, a ? a.type : "");
  this.relatedTarget = this.h = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.h = b;
    if (b = a.relatedTarget) {
      if (Ea) {
        a: {
          try {
            Aa(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (b = null);
      }
    } else {
      "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    }
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : jb[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && J.B.g.call(this);
  }
}
t(J, I);
var jb = {2:"touch", 3:"pen", 4:"mouse"};
J.prototype.g = function() {
  J.B.g.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = !1;
};
var K = "closure_listenable_" + (1e6 * Math.random() | 0);
var kb = 0;
function lb(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.H = e;
  this.key = ++kb;
  this.D = this.F = !1;
}
function L(a) {
  a.D = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.H = null;
}
;function M(a) {
  this.src = a;
  this.h = {};
  this.g = 0;
}
M.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.h[f];
  a || (a = this.h[f] = [], this.g++);
  var g = mb(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.F = !1)) : (b = new lb(b, this.src, f, !!d, e), b.F = c, a.push(b));
  return b;
};
function nb(a, b) {
  var c = b.type;
  if (c in a.h) {
    var d = a.h[c], e = pa(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (L(b), 0 == a.h[c].length && (delete a.h[c], a.g--));
  }
}
function mb(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.D && f.listener == b && f.capture == !!c && f.H == d) {
      return e;
    }
  }
  return -1;
}
;var ob = "closure_lm_" + (1e6 * Math.random() | 0), pb = {}, qb = 0;
function rb(a, b, c, d, e) {
  if (d && d.once) {
    return sb(a, b, c, d, e);
  }
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) {
      rb(a, b[f], c, d, e);
    }
    return null;
  }
  c = tb(c);
  return a && a[K] ? a.i.add(String(b), c, !1, n(d) ? !!d.capture : !!d, e) : ub(a, b, c, !1, d, e);
}
function ub(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var g = n(e) ? !!e.capture : !!e, h = vb(a);
  h || (a[ob] = h = new M(a));
  c = h.add(b, c, d, g, f);
  if (c.proxy) {
    return c;
  }
  d = wb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    ib || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
  } else {
    if (a.attachEvent) {
      a.attachEvent(xb(b.toString()), d);
    } else {
      if (a.addListener && a.removeListener) {
        a.addListener(d);
      } else {
        throw Error("addEventListener and attachEvent are unavailable.");
      }
    }
  }
  qb++;
  return c;
}
function wb() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = yb;
  return a;
}
function sb(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) {
      sb(a, b[f], c, d, e);
    }
    return null;
  }
  c = tb(c);
  return a && a[K] ? a.i.add(String(b), c, !0, n(d) ? !!d.capture : !!d, e) : ub(a, b, c, !0, d, e);
}
function zb(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) {
      zb(a, b[f], c, d, e);
    }
  } else {
    (d = n(d) ? !!d.capture : !!d, c = tb(c), a && a[K]) ? (a = a.i, b = String(b).toString(), b in a.h && (f = a.h[b], c = mb(f, c, d, e), -1 < c && (L(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.h[b], a.g--)))) : a && (a = vb(a)) && (b = a.h[b.toString()], a = -1, b && (a = mb(b, c, d, e)), (c = -1 < a ? b[a] : null) && Ab(c));
  }
}
function Ab(a) {
  if ("number" !== typeof a && a && !a.D) {
    var b = a.src;
    if (b && b[K]) {
      nb(b.i, a);
    } else {
      var c = a.type, d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(xb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      qb--;
      (c = vb(b)) ? (nb(c, a), 0 == c.g && (c.src = null, b[ob] = null)) : L(a);
    }
  }
}
function xb(a) {
  return a in pb ? pb[a] : pb[a] = "on" + a;
}
function yb(a, b) {
  if (a.D) {
    a = !0;
  } else {
    b = new J(b, this);
    var c = a.listener, d = a.H || a.src;
    a.F && Ab(a);
    a = c.call(d, b);
  }
  return a;
}
function vb(a) {
  a = a[ob];
  return a instanceof M ? a : null;
}
var Bb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function tb(a) {
  if ("function" === typeof a) {
    return a;
  }
  a[Bb] || (a[Bb] = function(b) {
    return a.handleEvent(b);
  });
  return a[Bb];
}
;function N() {
  H.call(this);
  this.i = new M(this);
  this.C = this;
  this.s = null;
}
t(N, H);
N.prototype[K] = !0;
N.prototype.removeEventListener = function(a, b, c, d) {
  zb(this, a, b, c, d);
};
N.prototype.h = function() {
  N.B.h.call(this);
  if (this.i) {
    var a = this.i, b = 0, c;
    for (c in a.h) {
      for (var d = a.h[c], e = 0; e < d.length; e++) {
        ++b, L(d[e]);
      }
      delete a.h[c];
      a.g--;
    }
  }
  this.s = null;
};
function O(a, b, c, d) {
  b = a.i.h[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.D && g.capture == c) {
      var h = g.listener, k = g.H || g.src;
      g.F && nb(a.i, g);
      e = !1 !== h.call(k, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
;function P(a, b) {
  N.call(this);
  this.o = a || 1;
  this.j = b || l;
  this.v = q(this.I, this);
  this.A = Date.now();
}
t(P, N);
P.prototype.m = !1;
P.prototype.g = null;
P.prototype.I = function() {
  if (this.m) {
    var a = Date.now() - this.A;
    if (0 < a && a < 0.8 * this.o) {
      this.g = this.j.setTimeout(this.v, this.o - a);
    } else {
      this.g && (this.j.clearTimeout(this.g), this.g = null);
      var b;
      if (a = this.s) {
        for (b = []; a; a = a.s) {
          b.push(a);
        }
      }
      a = this.C;
      var c = "tick", d = c.type || c;
      if ("string" === typeof c) {
        c = new I(c, a);
      } else {
        if (c instanceof I) {
          c.target = c.target || a;
        } else {
          var e = c;
          c = new I(d, a);
          za(c, e);
        }
      }
      e = !0;
      if (b) {
        for (var f = b.length - 1; 0 <= f; f--) {
          var g = c.h = b[f];
          e = O(g, d, !0, c) && e;
        }
      }
      g = c.h = a;
      e = O(g, d, !0, c) && e;
      e = O(g, d, !1, c) && e;
      if (b) {
        for (f = 0; f < b.length; f++) {
          g = c.h = b[f], e = O(g, d, !1, c) && e;
        }
      }
      this.m && (Cb(this), this.start());
    }
  }
};
P.prototype.start = function() {
  this.m = !0;
  this.g || (this.g = this.j.setTimeout(this.v, this.o), this.A = Date.now());
};
function Cb(a) {
  a.m = !1;
  a.g && (a.j.clearTimeout(a.g), a.g = null);
}
P.prototype.h = function() {
  P.B.h.call(this);
  Cb(this);
  delete this.j;
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Q(a) {
  this.j = [];
  this.A = a;
  this.l = this.i = !1;
  this.g = void 0;
  this.s = this.C = this.m = !1;
  this.u = 0;
  this.h = null;
  this.o = 0;
}
Q.prototype.cancel = function(a) {
  if (this.i) {
    this.g instanceof Q && this.g.cancel();
  } else {
    if (this.h) {
      var b = this.h;
      delete this.h;
      a ? b.cancel(a) : (b.o--, 0 >= b.o && b.cancel());
    }
    this.A ? this.A.call(null, this) : this.s = !0;
    this.i || (a = new R(this), Db(this), Eb(this, !1, a));
  }
};
Q.prototype.v = function(a, b) {
  this.m = !1;
  Eb(this, a, b);
};
function Eb(a, b, c) {
  a.i = !0;
  a.g = c;
  a.l = !b;
  Fb(a);
}
function Db(a) {
  if (a.i) {
    if (!a.s) {
      throw new Gb(a);
    }
    a.s = !1;
  }
}
Q.prototype.G = function(a) {
  Db(this);
  Eb(this, !0, a);
};
function Hb(a, b) {
  Ib(a, b, null, void 0);
}
function Ib(a, b, c, d) {
  a.j.push([b, c, d]);
  a.i && Fb(a);
}
Q.prototype.then = function(a, b, c) {
  var d, e, f = new z(function(g, h) {
    d = g;
    e = h;
  });
  Ib(this, d, function(g) {
    g instanceof R ? f.cancel() : e(g);
  });
  return f.then(a, b, c);
};
Q.prototype.$goog_Thenable = !0;
function Jb(a) {
  return ra(a.j, function(b) {
    return "function" === typeof b[1];
  });
}
function Fb(a) {
  if (a.u && a.i && Jb(a)) {
    var b = a.u, c = Kb[b];
    c && (l.clearTimeout(c.h), delete Kb[b]);
    a.u = 0;
  }
  a.h && (a.h.o--, delete a.h);
  b = a.g;
  for (var d = c = !1; a.j.length && !a.m;) {
    var e = a.j.shift(), f = e[0], g = e[1];
    e = e[2];
    if (f = a.l ? g : f) {
      try {
        var h = f.call(e || null, b);
        void 0 !== h && (a.l = a.l && (h == b || h instanceof Error), a.g = b = h);
        if (ha(b) || "function" === typeof l.Promise && b instanceof l.Promise) {
          d = !0, a.m = !0;
        }
      } catch (k) {
        b = k, a.l = !0, Jb(a) || (c = !0);
      }
    }
  }
  a.g = b;
  d && (h = q(a.v, a, !0), d = q(a.v, a, !1), b instanceof Q ? (Ib(b, h, d), b.C = !0) : b.then(h, d));
  c && (b = new Lb(b), Kb[b.h] = b, a.u = b.h);
}
function Mb() {
  var a = new Q, b = Error("Invalid origin");
  Db(a);
  Eb(a, !1, b);
  return a;
}
function Gb() {
  u.call(this);
}
t(Gb, u);
Gb.prototype.message = "Deferred has already fired";
Gb.prototype.name = "AlreadyCalledError";
function R() {
  u.call(this);
}
t(R, u);
R.prototype.message = "Deferred was canceled";
R.prototype.name = "CanceledError";
function Lb(a) {
  this.h = l.setTimeout(q(this.i, this), 0);
  this.g = a;
}
Lb.prototype.i = function() {
  delete Kb[this.h];
  throw this.g;
};
var Kb = {};
function Nb(a) {
  var b = [];
  Ob(new Pb, a, b);
  return b.join("");
}
function Pb() {
}
function Ob(a, b, c) {
  if (null == b) {
    c.push("null");
  } else {
    if ("object" == typeof b) {
      if (Array.isArray(b)) {
        var d = b;
        b = d.length;
        c.push("[");
        for (var e = "", f = 0; f < b; f++) {
          c.push(e), Ob(a, d[f], c), e = ",";
        }
        c.push("]");
        return;
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean) {
        b = b.valueOf();
      } else {
        c.push("{");
        e = "";
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Qb(d, c), c.push(":"), Ob(a, f, c), e = ","));
        }
        c.push("}");
        return;
      }
    }
    switch(typeof b) {
      case "string":
        Qb(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
        break;
      case "boolean":
        c.push(String(b));
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
}
var Rb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Sb = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
function Qb(a, b) {
  b.push('"', a.replace(Sb, function(c) {
    var d = Rb[c];
    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Rb[c] = d);
    return d;
  }), '"');
}
;function S() {
  H.call(this);
  this.A = {};
}
t(S, H);
S.prototype.i = function(a, b, c) {
  this.A[a] = {G:b, L:!!c};
};
S.prototype.m = function(a) {
  this.o = a;
};
S.prototype.h = function() {
  S.B.h.call(this);
  delete this.A;
  delete this.o;
};
function T(a) {
  console.log("DeferredChannel got created!");
  H.call(this);
  this.j = a;
}
t(T, H);
T.prototype.cancel = function() {
  this.j.cancel();
};
T.prototype.i = function(a, b, c) {
  Hb(this.j, function(d) {
    d.i(a, b, c);
  });
};
T.prototype.m = function(a) {
  Hb(this.j, function(b) {
    b.m(a);
  });
};
T.prototype.g = function(a, b) {
  Hb(this.j, function(c) {
    c.g(a, b);
  });
};
T.prototype.h = function() {
  this.cancel();
  T.B.h.call(this);
};
function U(a) {
  S.call(this);
  this.j = a;
  this.I = rb(this.j, "message", this.C, !1, this);
}
t(U, S);
function Tb(a, b) {
  if ("*" == b) {
    return new T(Mb());
  }
  var c = new P(50), d = fa(G, c), e = new Q(d);
  Ib(e, d, d, void 0);
  c.start();
  rb(c, "tick", function() {
    function f() {
      console.log("forEmbeddedWindow channel successfully created!");
      g.port1.removeEventListener("message", f, !0);
      c.l || e.G(new U(g.port1));
    }
    var g = new MessageChannel;
    g.port1.start();
    g.port1.addEventListener("message", f, !0);
    var h = {};
    h[Ub] = !0;
    a.postMessage(h, b, [g.port2]);
  });
  return new T(e);
}
var Ub = "--goog.messaging.PortChannel", Wb;
if (Wb = Fa) {
  for (var Xb = 0, Yb = sa(String(Ga)).split("."), Zb = sa("533").split("."), $b = Math.max(Yb.length, Zb.length), ac = 0; 0 == Xb && ac < $b; ac++) {
    var bc = Yb[ac] || "", cc = Zb[ac] || "";
    do {
      var V = /(\d*)(\D*)(.*)/.exec(bc) || ["", "", "", ""], W = /(\d*)(\D*)(.*)/.exec(cc) || ["", "", "", ""];
      if (0 == V[0].length && 0 == W[0].length) {
        break;
      }
      Xb = ta(0 == V[1].length ? 0 : parseInt(V[1], 10), 0 == W[1].length ? 0 : parseInt(W[1], 10)) || ta(0 == V[2].length, 0 == W[2].length) || ta(V[2], W[2]);
      bc = V[3];
      cc = W[3];
    } while (0 == Xb);
  }
  Wb = 0 > Xb;
}
var dc = Wb;
U.prototype.g = function(a, b) {
  var c = [];
  b = this.s(c, b);
  a = {serviceName:a, payload:b};
  a[Ub] = !0;
  dc && (a = Nb(a));
  this.j.postMessage(a, c);
};
U.prototype.C = function(a) {
  a = a.i;
  var b = a.data;
  if (dc) {
    try {
      b = JSON.parse(b);
    } catch (e) {
      return;
    }
  }
  var c;
  if (c = n(b) && b[Ub]) {
    c = b, "serviceName" in c ? "payload" in c ? c = !0 : (hb(c), c = !1) : (hb(c), c = !1);
  }
  if (c) {
    c = b.serviceName;
    b = b.payload;
    var d = this.A[c];
    if (c = d ? d : this.o ? {G:fa(this.o, c), L:n(b)} : null) {
      a: {
        a = this.v(a.ports || [], b);
        if ((d = c.L) && "string" === typeof a) {
          try {
            b = JSON.parse(a);
            break a;
          } catch (e) {
            b = null;
            break a;
          }
        } else {
          if (!d && "string" !== typeof a) {
            b = Nb(a);
            break a;
          }
        }
        b = a;
      }
      null != b && c.G(b);
    }
  }
};
U.prototype.s = function(a, b) {
  return b && "[object MessagePort]" == Object.prototype.toString.call(b) ? (a.push(b), {_port:{type:"real", index:a.length - 1}}) : Array.isArray(b) ? qa(b, q(this.s, this, a)) : b && b.constructor == Object ? xa(b, function(c, d) {
    c = this.s(a, c);
    return "_port" == d ? {type:"escaped", val:c} : c;
  }, this) : b;
};
U.prototype.v = function(a, b) {
  return Array.isArray(b) ? qa(b, q(this.v, this, a)) : b && b.constructor == Object ? b._port && "real" == b._port.type ? a[b._port.index] : xa(b, function(c, d) {
    return this.v(a, "_port" == d ? c.val : c);
  }, this) : b;
};
U.prototype.h = function() {
  Ab(this.I);
  "[object MessagePort]" == Object.prototype.toString.call(this.j) ? this.j.close() : "[object Worker]" == Object.prototype.toString.call(this.j) && this.j.terminate();
  delete this.j;
  U.B.h.call(this);
};
function ec(a) {
  H.call(this);
  this.i = a;
  this.g = {};
  this.i.m(q(this.j, this));
}
t(ec, H);
function fc(a, b) {
  if (-1 != b.indexOf(":")) {
    throw Error('Virtual channel name "' + b + '" should not contain colons');
  }
  if (b in a.g) {
    throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
  }
  var c = new X(a, b);
  return a.g[b] = c;
}
ec.prototype.j = function(a, b) {
  if (a = a.match(/^([^:]*):(.*)/)) {
    var c = a[1];
    a = a[2];
    c in this.g && (c = this.g[c]) && c.s && c.s(a, b);
  }
};
ec.prototype.h = function() {
  wa(this.g, function(a) {
    G(a);
  });
  G(this.i);
  delete this.g;
  delete this.i;
};
function X(a, b) {
  H.call(this);
  this.j = a;
  this.o = b;
}
t(X, H);
X.prototype.i = function(a, b, c) {
  this.j.i.i(this.o + ":" + a, q(this.v, this, b), c);
};
X.prototype.m = function(a) {
  this.s = q(this.v, this, a);
};
X.prototype.g = function(a, b) {
  if (this.l) {
    throw Error("#send called for disposed VirtualChannel.");
  }
  this.j.i.g(this.o + ":" + a, b);
};
X.prototype.v = function(a, b) {
  this.l || a.apply({}, Array.prototype.slice.call(arguments, 1));
};
X.prototype.h = function() {
  this.j = this.j.g[this.o] = null;
};
function Y(a) {
  H.call(this);
  this.g = new ec(a);
  this.j = {};
  this.i = fc(this.g, "private");
  this.m = fc(this.g, "public");
  this.i.i("mics", q(this.s, this), !0);
}
t(Y, H);
Y.prototype.h = function() {
  G(this.g);
  delete this.g;
  delete this.m;
  delete this.i;
};
Y.prototype.s = function(a) {
  var b = a.signature;
  a = a.data;
  b in this.j && ((0,this.j[b])(a), delete this.j[b]);
};
Y.prototype.o = function(a, b) {
  a = a(b.data);
  var c = b.signature;
  Va(a).then(q(function(d) {
    var e = {};
    e.data = d;
    e.signature = c;
    this.i && this.i.g("mics", e);
  }, this));
};
function Z(a) {
  H.call(this);
  this.i = {};
  this.g = {};
  this.j = a;
}
t(Z, H);
Z.prototype.m = function(a, b) {
  if (b == this.j) {
    if (!(a in this.i)) {
      b = this.g[a];
      if (!b) {
        throw Error('Port "' + a + "\" doesn't exist");
      }
      var c = new MessageChannel;
      b.g("grantConnection", {success:!0, name:this.j, port:c.port1});
      c.port2.start();
      this.i[a] = new U(c.port2);
    }
  } else {
    c = this.g[a];
    var d = this.g[b];
    if (d) {
      var e = new MessageChannel;
      c.g("grantConnection", {success:!0, name:b, port:e.port1});
      d.g("grantConnection", {success:!0, name:a, port:e.port2});
    } else {
      c.g("grantConnection", {success:!1, message:'Port "' + a + '" requested a connection to port "' + b + "\", which doesn't exist"});
    }
  }
};
Z.prototype.h = function() {
  wa(this.g, G);
  wa(this.i, G);
  delete this.g;
  delete this.i;
  Z.B.h.call(this);
};
r("__AMP_createPortChannel", function(a, b) {
  return Tb(a, b);
});
r("__AMP_createRespondingChannel", function(a, b) {
  var c = new Y(a);
  b.forEach(function(d, e, f) {
    null != e && (d = f.get(e), null != d && (console.log("registering service on RespondingChannel for service: " + e), c.m.i(e, q(c.o, c, d), !0)));
  });
  return c;
});
r("__AMP_createPortOperator", function() {
  return new Z("RuntimeService");
});
r("__AMP_addPort", function(a, b, c) {
  a.g[b] = c;
  c.i("requestConnection", q(a.m, a, b));
  console.log("finish adding ports to the network via PortOperator! PortName: " + b);
});
;
  }).call(window, localWindow);
  export function createPortChannel(frameWindow, origin) {
    return localWindow.__AMP_createPortChannel(frameWindow, origin);
  }
  export function createRespondingChannel(portChannel, serviceHandlersMap) {
    return localWindow.__AMP_createRespondingChannel(portChannel, serviceHandlersMap);
  }
  export function createPortOperator() {
    return localWindow.__AMP_createPortOperator();
  }
  export function addPort(portOperator, portName, portChannel) {
    localWindow.__AMP_addPort(portOperator, portName, portChannel);
  }
