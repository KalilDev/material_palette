//third_party/javascript/redux/redux.min.js
/**
 * Redux v3.5.2
 * https://github.com/rackt/redux
 *
 * @license
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-present Dan Abramov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
!function (t, e) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = e() : 'function' == typeof define && define.amd ? define([], e) : 'object' == typeof exports ? exports.Redux = e() : t.Redux = e()
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        exports: {
        },
        id: r,
        loaded: !1
      };
      return t[r].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var n = {
    };
    return e.m = t,
      e.c = n,
      e.p = '',
      e(0)
  }([function (t, e, n) {
    'use strict';
    function r(t) {
      return t && t.__esModule ? t : {
        'default': t
      }
    }
    e.__esModule = !0,
      e.compose = e.applyMiddleware = e.bindActionCreators = e.combineReducers = e.createStore = void 0;
    var o = n(2),
      i = r(o),
      u = n(7),
      c = r(u),
      f = n(6),
      a = r(f),
      s = n(5),
      d = r(s),
      l = n(1),
      p = r(l),
      y = n(3);
    r(y);
    e.createStore = i['default'],
      e.combineReducers = c['default'],
      e.bindActionCreators = a['default'],
      e.applyMiddleware = d['default'],
      e.compose = p['default']
  },
  function (t, e) {
    'use strict';
    function n() {
      for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
      if (0 === e.length) return function (t) {
        return t
      };
      var r = function () {
        var t = e[e.length - 1],
          n = e.slice(0, - 1);
        return {
          v: function () {
            return n.reduceRight(function (t, e) {
              return e(t)
            }, t.apply(void 0, arguments))
          }
        }
      }();
      return 'object' == typeof r ? r.v : void 0
    }
    e.__esModule = !0,
      e['default'] = n
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      return t && t.__esModule ? t : {
        'default': t
      }
    }
    function o(t, e, n) {
      function r() {
        b === h && (b = h.slice())
      }
      function i() {
        return v
      }
      function c(t) {
        if ('function' != typeof t) throw Error('Expected listener to be a function.');
        var e = !0;
        return r(),
          b.push(t),
          function () {
            if (e) {
              e = !1,
                r();
              var n = b.indexOf(t);
              b.splice(n, 1)
            }
          }
      }
      function s(t) {
        if (!(0, u['default'])(t)) throw Error('Actions must be plain objects. Use custom middleware for async actions.');
        if (void 0 === t.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (x) throw Error('Reducers may not dispatch actions.');
        try {
          x = !0,
            v = y(v, t)
        } finally {
          x = !1
        }
        for (var e = h = b, n = 0; e.length > n; n++) e[n]();
        return t
      }
      function d(t) {
        if ('function' != typeof t) throw Error('Expected the nextReducer to be a function.');
        y = t,
          s({
            type: a.INIT
          })
      }
      function l() {
        var t,
          e = c;
        return t = {
          subscribe: function (t) {
            function n() {
              t.next && t.next(i())
            }
            if ('object' != typeof t) throw new TypeError('Expected the observer to be an object.');
            n();
            var r = e(n);
            return {
              unsubscribe: r
            }
          }
        },
          t[f['default']] = function () {
            return this
          },
          t
      }
      var p;
      if ('function' == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
        if ('function' != typeof n) throw Error('Expected the enhancer to be a function.');
        return n(o)(t, e)
      }
      if ('function' != typeof t) throw Error('Expected the reducer to be a function.');
      var y = t,
        v = e,
        h = [
        ],
        b = h,
        x = !1;
      return s({
        type: a.INIT
      }),
        p = {
          dispatch: s,
          subscribe: c,
          getState: i,
          replaceReducer: d
        },
        p[f['default']] = l,
        p
    }
    e.__esModule = !0,
      e.ActionTypes = void 0,
      e['default'] = o;
    var i = n(4),
      u = r(i),
      c = n(11),
      f = r(c),
      a = e.ActionTypes = {
        INIT: '@@redux/INIT'
      }
  },
  function (t, e) {
    'use strict';
    function n(t) {
      'undefined' != typeof console && 'function' == typeof console.error && console.error(t);
      try {
        throw Error(t)
      } catch (e) {
      }
    }
    e.__esModule = !0,
      e['default'] = n
  },
  function (t, e, n) {
    function r(t) {
      if (!u(t) || l.call(t) != c || i(t)) return !1;
      var e = o(t);
      if (null === e) return !0;
      var n = s.call(e, 'constructor') && e.constructor;
      return 'function' == typeof n && n instanceof n && a.call(n) == d
    }
    var o = n(8),
      i = n(9),
      u = n(10),
      c = '[object Object]',
      f = Object.prototype,
      a = Function.prototype.toString,
      s = f.hasOwnProperty,
      d = a.call(Object),
      l = f.toString;
    t.exports = r
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      return t && t.__esModule ? t : {
        'default': t
      }
    }
    function o() {
      for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
      return function (t) {
        return function (n, r, o) {
          var u = t(n, r, o),
            f = u.dispatch,
            a = [
            ],
            s = {
              getState: u.getState,
              dispatch: function (t) {
                return f(t)
              }
            };
          return a = e.map(function (t) {
            return t(s)
          }),
            f = c['default'].apply(void 0, a)(u.dispatch),
            i({
            }, u, {
              dispatch: f
            })
        }
      }
    }
    e.__esModule = !0;
    var i = Object.assign || function (t) {
      for (var e = 1; arguments.length > e; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    };
    e['default'] = o;
    var u = n(1),
      c = r(u)
  },
  function (t, e) {
    'use strict';
    function n(t, e) {
      return function () {
        return e(t.apply(void 0, arguments))
      }
    }
    function r(t, e) {
      if ('function' == typeof t) return n(t, e);
      if ('object' != typeof t || null === t) throw Error('bindActionCreators expected an object or a function, instead received ' + (null === t ? 'null' : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      for (var r = Object.keys(t), o = {
      }, i = 0; r.length > i; i++) {
        var u = r[i],
          c = t[u];
        'function' == typeof c && (o[u] = n(c, e))
      }
      return o
    }
    e.__esModule = !0,
      e['default'] = r
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      return t && t.__esModule ? t : {
        'default': t
      }
    }
    function o(t, e) {
      var n = e && e.type,
        r = n && '"' + n + '"' || 'an action';
      return 'Given action ' + r + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }
    function i(t) {
      Object.keys(t).forEach(function (e) {
        var n = t[e],
          r = n(void 0, {
            type: c.ActionTypes.INIT
          });
        if (void 0 === r) throw Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
        var o = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
        if (void 0 === n(void 0, {
          type: o
        })) throw Error('Reducer "' + e + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + c.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
      })
    }
    function u(t) {
      for (var e = Object.keys(t), n = {
      }, r = 0; e.length > r; r++) {
        var u = e[r];
        'function' == typeof t[u] && (n[u] = t[u])
      }
      var c,
        f = Object.keys(n);
      try {
        i(n)
      } catch (a) {
        c = a
      }
      return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        },
          e = arguments[1];
        if (c) throw c;
        for (var r = !1, i = {
        }, u = 0; f.length > u; u++) {
          var a = f[u],
            s = n[a],
            d = t[a],
            l = s(d, e);
          if (void 0 === l) {
            var p = o(a, e);
            throw Error(p)
          }
          i[a] = l,
            r = r || l !== d
        }
        return r ? i : t
      }
    }
    e.__esModule = !0,
      e['default'] = u;
    var c = n(2),
      f = n(4),
      a = (r(f), n(3));
    r(a)
  },
  function (t, e) {
    function n(t) {
      return r(Object(t))
    }
    var r = Object.getPrototypeOf;
    t.exports = n
  },
  function (t, e) {
    function n(t) {
      var e = !1;
      if (null != t && 'function' != typeof t.toString) try {
        e = !!(t + '')
      } catch (n) {
      }
      return e
    }
    t.exports = n
  },
  function (t, e) {
    function n(t) {
      return !!t && 'object' == typeof t
    }
    t.exports = n
  },
  function (t, e, n) {
    (function (e) {
      'use strict';
      t.exports = n(12)(e || window || this)
    }).call(e, function () {
      return this
    }())
  },
  function (t, e) {
    'use strict';
    t.exports = function (t) {
      var e,
        n = t.Symbol;
      return 'function' == typeof n ? n.observable ? e = n.observable : (e = 'function' == typeof n['for'] ? n['for']('observable') : n('observable'), n.observable = e) : e = '@@observable',
        e
    }
  }
  ])
});
var k,
  aa = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      }
        : {
          done: !0
        }
    }
  },
  ea = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
  },
  x = 'undefined' != typeof window && window === this ? this : 'undefined' != typeof global && null != global ? global : this,
  fa = function () {
    fa = function () {
    };
    x.Symbol || (x.Symbol = ha)
  },
  ia = function (a, b) {
    this.Gc = a;
    ea(this, 'description', {
      configurable: !0,
      writable: !0,
      value: b
    })
  };
ia.prototype.toString = function () {
  return this.Gc
};
var ha = function () {
  function a(c) {
    if (this instanceof a) throw new TypeError('Symbol is not a constructor');
    return new ia('jscomp_symbol_' + (c || '') + '_' + b++, c)
  }
  var b = 0;
  return a
}(),
  la = function () {
    fa();
    var a = x.Symbol.iterator;
    a || (a = x.Symbol.iterator = x.Symbol('Symbol.iterator'));
    'function' != typeof Array.prototype[a] && ea(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function () {
        return ka(aa(this))
      }
    });
    la = function () {
    }
  },
  ka = function (a) {
    la();
    a = {
      next: a
    };
    a[x.Symbol.iterator] = function () {
      return this
    };
    return a
  },
  y = function (a) {
    var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
      next: aa(a)
    }
  },
  ma = function (a) {
    if (!(a instanceof Array)) {
      a = y(a);
      for (var b, c = [
      ]; !(b = a.next()).done;) c.push(b.value);
      a = c
    }
    return a
  },
  na = 'function' == typeof Object.create ? Object.create : function (a) {
    var b = function () {
    };
    b.prototype = a;
    return new b
  },
  oa;
if ('function' == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
else {
  var pa;
  a: {
    var qa = {
      A: !0
    },
      ra = {
      };
    try {
      ra.__proto__ = qa;
      pa = ra.A;
      break a
    } catch (a) {
    }
    pa = !1
  }
  oa = pa ? function (a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
    return a
  }
    : null
}
var sa = oa,
  A = function (a, b) {
    a.prototype = na(b.prototype);
    a.prototype.constructor = a;
    if (sa) sa(a, b);
    else for (var c in b) if ('prototype' != c) if (Object.defineProperties) {
      var d = Object.getOwnPropertyDescriptor(b, c);
      d && Object.defineProperty(a, c, d)
    } else a[c] = b[c]
  },
  B = function (a, b) {
    if (b) {
      var c = x;
      a = a.split('.');
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {
        });
        c = c[e]
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && ea(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      })
    }
  },
  C = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
B('WeakMap', function (a) {
  function b() {
  }
  function c(f) {
    var m = typeof f;
    return 'object' === m && null !== f || 'function' === m
  }
  function d(f) {
    if (!C(f, l)) {
      var m = new b;
      ea(f, l, {
        value: m
      })
    }
  }
  function e(f) {
    var m = Object[f];
    m && (Object[f] = function (n) {
      if (n instanceof b) return n;
      d(n);
      return m(n)
    })
  }
  if (function () {
    if (!a || !Object.seal) return !1;
    try {
      var f = Object.seal({
      }),
        m = Object.seal({
        }),
        n = new a([[f,
          2],
        [
          m,
          3
        ]]);
      if (2 != n.get(f) || 3 != n.get(m)) return !1;
      n.delete(f);
      n.set(m, 4);
      return !n.has(f) && 4 == n.get(m)
    } catch (u) {
      return !1
    }
  }()) return a;
  var l = '$jscomp_hidden_' + Math.random();
  e('freeze');
  e('preventExtensions');
  e('seal');
  var h = 0,
    g = function (f) {
      this.wa = (h += Math.random() + 1).toString();
      if (f) {
        f = y(f);
        for (var m; !(m = f.next()).done;) m = m.value,
          this.set(m[0], m[1])
      }
    };
  g.prototype.set = function (f, m) {
    if (!c(f)) throw Error('Invalid WeakMap key');
    d(f);
    if (!C(f, l)) throw Error('WeakMap key fail: ' + f);
    f[l][this.wa] = m;
    return this
  };
  g.prototype.get = function (f) {
    return c(f) && C(f, l) ? f[l][this.wa] : void 0
  };
  g.prototype.has = function (f) {
    return c(f) && C(f, l) && C(f[l], this.wa)
  };
  g.prototype.delete = function (f) {
    return c(f) && C(f, l) && C(f[l], this.wa) ? delete f[l][this.wa] : !1
  };
  return g
});
var ta = function (a, b) {
  la();
  a instanceof String && (a += '');
  var c = 0,
    d = {
      next: function () {
        if (c < a.length) {
          var e = c++;
          return {
            value: b(e, a[e]),
            done: !1
          }
        }
        d.next = function () {
          return {
            done: !0,
            value: void 0
          }
        };
        return d.next()
      }
    };
  d[Symbol.iterator] = function () {
    return d
  };
  return d
};
B('Array.prototype.values', function (a) {
  return a ? a : function () {
    return ta(this, function (b, c) {
      return c
    })
  }
});
B('Map', function (a) {
  if (function () {
    if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
    try {
      var g = Object.seal({
        x: 4
      }),
        f = new a(y([[g,
          's']]));
      if ('s' != f.get(g) || 1 != f.size || f.get({
        x: 4
      }) || f.set({
        x: 4
      }, 't') != f || 2 != f.size) return !1;
      var m = f.entries(),
        n = m.next();
      if (n.done || n.value[0] != g || 's' != n.value[1]) return !1;
      n = m.next();
      return n.done || 4 != n.value[0].x || 't' != n.value[1] || !m.next().done ? !1 : !0
    } catch (u) {
      return !1
    }
  }()) return a;
  la();
  var b = new WeakMap,
    c = function (g) {
      this.ra = {
      };
      this.U = l();
      this.size = 0;
      if (g) {
        g = y(g);
        for (var f; !(f = g.next()).done;) f = f.value,
          this.set(f[0], f[1])
      }
    };
  c.prototype.set = function (g, f) {
    g = 0 === g ? 0 : g;
    var m = d(this, g);
    m.list || (m.list = this.ra[m.id] = [
    ]);
    m.o ? m.o.value = f : (m.o = {
      next: this.U,
      W: this.U.W,
      head: this.U,
      key: g,
      value: f
    }, m.list.push(m.o), this.U.W.next = m.o, this.U.W = m.o, this.size++);
    return this
  };
  c.prototype.delete = function (g) {
    g = d(this, g);
    return g.o && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this.ra[g.id], g.o.W.next = g.o.next, g.o.next.W = g.o.W, g.o.head = null, this.size--, !0) : !1
  };
  c.prototype.clear = function () {
    this.ra = {
    };
    this.U = this.U.W = l();
    this.size = 0
  };
  c.prototype.has = function (g) {
    return !!d(this, g).o
  };
  c.prototype.get = function (g) {
    return (g = d(this, g).o) && g.value
  };
  c.prototype.entries = function () {
    return e(this, function (g) {
      return [g.key,
      g.value]
    })
  };
  c.prototype.keys = function () {
    return e(this, function (g) {
      return g.key
    })
  };
  c.prototype.values = function () {
    return e(this, function (g) {
      return g.value
    })
  };
  c.prototype.forEach = function (g, f) {
    for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value,
      g.call(f, n[1], n[0], this)
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (g, f) {
    var m = f && typeof f;
    'object' == m || 'function' == m ? b.has(f) ? m = b.get(f) : (m = '' + ++h, b.set(f, m)) : m = 'p_' + f;
    var n = g.ra[m];
    if (n && C(g.ra, m)) for (g = 0; g < n.length; g++) {
      var u = n[g];
      if (f !== f && u.key !== u.key || f === u.key) return {
        id: m,
        list: n,
        index: g,
        o: u
      }
    }
    return {
      id: m,
      list: n,
      index: - 1,
      o: void 0
    }
  },
    e = function (g, f) {
      var m = g.U;
      return ka(function () {
        if (m) {
          for (; m.head != g.U;) m = m.W;
          for (; m.next != m.head;) return m = m.next,
          {
            done: !1,
            value: f(m)
          };
          m = null
        }
        return {
          done: !0,
          value: void 0
        }
      })
    },
    l = function () {
      var g = {
      };
      return g.W = g.next = g.head = g
    },
    h = 0;
  return c
});
var ua = 'function' == typeof Object.assign ? Object.assign : function (a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d) for (var e in d) C(d, e) && (a[e] = d[e])
  }
  return a
};
B('Object.assign', function (a) {
  return a || ua
});
B('Promise', function (a) {
  function b() {
    this.aa = null
  }
  function c(h) {
    return h instanceof e ? h : new e(function (g) {
      g(h)
    })
  }
  if (a) return a;
  b.prototype.Fb = function (h) {
    if (null == this.aa) {
      this.aa = [
      ];
      var g = this;
      this.Gb(function () {
        g.ld()
      })
    }
    this.aa.push(h)
  };
  var d = x.setTimeout;
  b.prototype.Gb = function (h) {
    d(h, 0)
  };
  b.prototype.ld = function () {
    for (; this.aa && this.aa.length;) {
      var h = this.aa;
      this.aa = [
      ];
      for (var g = 0; g < h.length; ++g) {
        var f = h[g];
        h[g] = null;
        try {
          f()
        } catch (m) {
          this.cd(m)
        }
      }
    }
    this.aa = null
  };
  b.prototype.cd = function (h) {
    this.Gb(function () {
      throw h;
    })
  };
  var e = function (h) {
    this.Da = 0;
    this.vb = void 0;
    this.ma = [
    ];
    var g = this.hb();
    try {
      h(g.resolve, g.reject)
    } catch (f) {
      g.reject(f)
    }
  };
  e.prototype.hb = function () {
    function h(m) {
      return function (n) {
        f || (f = !0, m.call(g, n))
      }
    }
    var g = this,
      f = !1;
    return {
      resolve: h(this.sd),
      reject: h(this.ub)
    }
  };
  e.prototype.sd = function (h) {
    if (h === this) this.ub(new TypeError('A Promise cannot resolve to itself'));
    else if (h instanceof e) this.wd(h);
    else {
      a: switch (typeof h) {
        case 'object':
          var g = null != h;
          break a;
        case 'function':
          g = !0;
          break a;
        default:
          g = !1
      }
      g ?
        this.rd(h) : this.Yb(h)
    }
  };
  e.prototype.rd = function (h) {
    var g = void 0;
    try {
      g = h.then
    } catch (f) {
      this.ub(f);
      return
    }
    'function' == typeof g ? this.xd(g, h) : this.Yb(h)
  };
  e.prototype.ub = function (h) {
    this.Ac(2, h)
  };
  e.prototype.Yb = function (h) {
    this.Ac(1, h)
  };
  e.prototype.Ac = function (h, g) {
    if (0 != this.Da) throw Error('Cannot settle(' + h + ', ' + g + '): Promise already settled in state' + this.Da);
    this.Da = h;
    this.vb = g;
    this.md()
  };
  e.prototype.md = function () {
    if (null != this.ma) {
      for (var h = 0; h < this.ma.length; ++h) l.Fb(this.ma[h]);
      this.ma = null
    }
  };
  var l = new b;
  e.prototype.wd = function (h) {
    var g = this.hb();
    h.Ha(g.resolve, g.reject)
  };
  e.prototype.xd = function (h, g) {
    var f = this.hb();
    try {
      h.call(g, f.resolve, f.reject)
    } catch (m) {
      f.reject(m)
    }
  };
  e.prototype.then = function (h, g) {
    function f(q, p) {
      return 'function' == typeof q ? function (r) {
        try {
          m(q(r))
        } catch (t) {
          n(t)
        }
      }
        : p
    }
    var m,
      n,
      u = new e(function (q, p) {
        m = q;
        n = p
      });
    this.Ha(f(h, m), f(g, n));
    return u
  };
  e.prototype.catch = function (h) {
    return this.then(void 0, h)
  };
  e.prototype.Ha = function (h, g) {
    function f() {
      switch (m.Da) {
        case 1:
          h(m.vb);
          break;
        case 2:
          g(m.vb);
          break;
        default:
          throw Error('Unexpected state: ' + m.Da);
      }
    }
    var m = this;
    null == this.ma ? l.Fb(f) : this.ma.push(f)
  };
  e.resolve = c;
  e.reject = function (h) {
    return new e(function (g, f) {
      f(h)
    })
  };
  e.race = function (h) {
    return new e(function (g, f) {
      for (var m = y(h), n = m.next(); !n.done; n = m.next()) c(n.value).Ha(g, f)
    })
  };
  e.all = function (h) {
    var g = y(h),
      f = g.next();
    return f.done ? c([]) : new e(function (m, n) {
      function u(r) {
        return function (t) {
          q[r] = t;
          p--;
          0 == p && m(q)
        }
      }
      var q = [
      ],
        p = 0;
      do q.push(void 0),
        p++,
        c(f.value).Ha(u(q.length - 1), n),
        f = g.next();
      while (!f.done)
    })
  };
  return e
});
B('Object.is', function (a) {
  return a ? a : function (b, c) {
    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
  }
});
B('Array.prototype.includes', function (a) {
  return a ? a : function (b, c) {
    var d = this;
    d instanceof String && (d = String(d));
    var e = d.length;
    c = c || 0;
    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
      var l = d[c];
      if (l === b || Object.is(l, b)) return !0
    }
    return !1
  }
});
var va = this || self,
  D = function (a) {
    var b = typeof a;
    if ('object' == b) if (a) {
      if (a instanceof Array) return 'array';
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ('[object Window]' == c) return 'object';
      if ('[object Array]' == c || 'number' == typeof a.length && 'undefined' != typeof a.splice && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable('splice')) return 'array';
      if ('[object Function]' == c || 'undefined' != typeof a.call && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable('call')) return 'function'
    } else return 'null';
    else if ('function' == b && 'undefined' == typeof a.call) return 'object';
    return b
  },
  wa = function (a, b, c) {
    return a.call.apply(a.bind, arguments)
  },
  xa = function (a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  },
  ya = function (a, b, c) {
    ya = Function.prototype.bind && - 1 != Function.prototype.bind.toString().indexOf('native code') ?
      wa : xa;
    return ya.apply(null, arguments)
  },
  za = Date.now || function () {
    return + new Date
  },
  Aa = function (a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Bd = function (d, e, l) {
      for (var h = Array(arguments.length - 2), g = 2; g < arguments.length; g++) h[g - 2] = arguments[g];
      return b.prototype[e].apply(d, h)
    }
  };
var Ba = function (a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Ba);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
};
Aa(Ba, Error);
Ba.prototype.name = 'CustomError';
var Ca = function (a, b) {
  a = a.split('%s');
  for (var c = '', d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : '%s');
  Ba.call(this, c + a[d])
};
Aa(Ca, Ba);
Ca.prototype.name = 'AssertionError';
var Da = function (a, b, c) {
  if (!a) {
    var d = 'Assertion failed';
    if (b) {
      d += ': ' + b;
      var e = Array.prototype.slice.call(arguments, 2)
    }
    throw new Ca('' + d, e || [
    ]);
  }
},
  E = function (a, b) {
    throw new Ca('Failure' + (a ? ': ' + a : ''), Array.prototype.slice.call(arguments, 1));
  };
var Ea = Array.prototype.map ? function (a, b) {
  Da(null != a.length);
  return Array.prototype.map.call(a, b, void 0)
}
  : function (a, b) {
    for (var c = a.length, d = Array(c), e = 'string' === typeof a ? a.split('') : a, l = 0; l < c; l++) l in e && (d[l] = b.call(void 0, e[l], l, a));
    return d
  };
var Fa = /&/g,
  Ga = /</g,
  Ha = />/g,
  Ia = /"/g,
  Ja = /'/g,
  Ka = /\x00/g,
  La = /[\x00&<>"']/;
var Ma = function (a) {
  var b = 0;
  return function (c) {
    va.clearTimeout(b);
    var d = arguments;
    b = va.setTimeout(function () {
      a.apply(void 0, d)
    }, 600)
  }
};
var Pa = function (a, b) {
  this.wb = a === Na && b || '';
  this.Pc = Oa
};
Pa.prototype.ba = !0;
Pa.prototype.L = function () {
  return this.wb
};
Pa.prototype.toString = function () {
  return 'Const{' + this.wb + '}'
};
var Qa = function (a) {
  if (a instanceof Pa && a.constructor === Pa && a.Pc === Oa) return a.wb;
  E('expected object of type Const, got \'' + a + '\'');
  return 'type_error:Const'
},
  Oa = {
  },
  Na = {
  };
var F = function () {
  this.Ta = '';
  this.Mc = Ra
};
F.prototype.ba = !0;
var Ra = {
};
F.prototype.L = function () {
  return this.Ta.toString()
};
F.prototype.toString = function () {
  return 'SafeScript{' + this.Ta + '}'
};
F.prototype.N = function (a) {
  this.Ta = a;
  return this
};
(new F).N('');
var Ua = function (a, b) {
  this.tb = a === Sa && b || '';
  this.Rc = Ta
};
Ua.prototype.ba = !0;
Ua.prototype.L = function () {
  return this.tb.toString()
};
Ua.prototype.toString = function () {
  return 'TrustedResourceUrl{' + this.tb + '}'
};
var Ta = {
},
  Sa = {
  };
var G = function (a, b) {
  this.sb = a === Va && b || '';
  this.Oc = Wa
};
G.prototype.ba = !0;
G.prototype.L = function () {
  return this.sb.toString()
};
G.prototype.toString = function () {
  return 'SafeUrl{' + this.sb + '}'
};
var Xa = function (a) {
  if (a instanceof G && a.constructor === G && a.Oc === Wa) return a.sb;
  E('expected object of type SafeUrl, got \'' + a + '\' of type ' + D(a));
  return 'type_error:SafeUrl'
},
  Ya = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
  Za = function (a) {
    if (a instanceof G) return a;
    a = 'object' == typeof a && a.ba ? a.L() : String(a);
    Ya.test(a) || (a = 'about:invalid#zClosurez');
    return new G(Va, a)
  },
  Wa = {
  },
  Va = {
  };
var H = function () {
  this.Ua = '';
  this.Nc = $a
};
H.prototype.ba = !0;
var $a = {
};
H.prototype.L = function () {
  return this.Ua
};
H.prototype.toString = function () {
  return 'SafeStyle{' + this.Ua + '}'
};
H.prototype.N = function (a) {
  this.Ua = a;
  return this
};
var ab = (new H).N(''),
  J = function (a) {
    var b = '',
      c;
    for (c in a) {
      if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error('Name allows only [-_a-zA-Z0-9], got: ' + c);
      var d = a[c];
      null != d && (d = 'array' == D(d) ? Ea(d, bb).join(' ') : bb(d), b += c + ':' + d + ';')
    }
    return b ? (new H).N(b) : ab
  },
  bb = function (a) {
    if (a instanceof G) return 'url("' + Xa(a).replace(/</g, '%3c').replace(/[\\"]/g, '\\$&') + '")';
    a = a instanceof Pa ? Qa(a) : cb(String(a));
    if (/[{;}]/.test(a)) throw new Ca('Value does not allow [{;}], got: %s.', [
      a
    ]);
    return a
  },
  cb = function (a) {
    var b = a.replace(db, '$1').replace(db, '$1').replace(eb, 'url');
    if (fb.test(b)) {
      if (gb.test(a)) return E('String value disallows comments, got: ' + a),
        'zClosurez';
      for (var c = b = !0, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        '\'' == e && c ? b = !b : '"' == e && b && (c = !c)
      }
      if (!b || !c) return E('String value requires balanced quotes, got: ' + a),
        'zClosurez';
      if (!hb(a)) return E('String value requires balanced square brackets and one identifier per pair of brackets, got: ' + a),
        'zClosurez'
    } else return E('String value allows only [-,."\'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: ' +
      a),
      'zClosurez';
    return ib(a)
  },
  hb = function (a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if (']' == e) {
        if (b) return !1;
        b = !0
      } else if ('[' == e) {
        if (!b) return !1;
        b = !1
      } else if (!b && !c.test(e)) return !1
    }
    return b
  },
  fb = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
  eb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
  db = /\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
  gb = /\/\*/,
  ib = function (a) {
    return a.replace(eb, function (b, c, d, e) {
      var l = '';
      d = d.replace(/^(['"])(.*)\1$/, function (h, g, f) {
        l = g;
        return f
      });
      b = Za(d).L();
      return c + l + b + l + e
    })
  };
var jb = function () {
  this.qb = ''
};
jb.prototype.ba = !0;
jb.prototype.L = function () {
  return this.qb
};
jb.prototype.toString = function () {
  return 'SafeStyleSheet{' + this.qb + '}'
};
jb.prototype.N = function (a) {
  this.qb = a;
  return this
};
(new jb).N('');
var K = function () {
  this.Sa = '';
  this.Lc = kb
};
K.prototype.ba = !0;
K.prototype.L = function () {
  return this.Sa.toString()
};
K.prototype.toString = function () {
  return 'SafeHtml{' + this.Sa + '}'
};
var kb = {
};
K.prototype.N = function (a) {
  this.Sa = a;
  return this
};
(new K).N('<!DOCTYPE html>');
(new K).N('');
(new K).N('<br>');
var lb = 2147483648 * Math.random() | 0,
  mb = function (a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase()
    })
  };
var nb = function (a, b, c) {
  this.reset(a, b, c, void 0, void 0)
};
nb.prototype.Vb = null;
var ob = 0;
nb.prototype.reset = function (a, b, c, d, e) {
  'number' == typeof e || ob++;
  d || za();
  this.ya = a;
  delete this.Vb
};
nb.prototype.zc = function (a) {
  this.ya = a
};
var pb = function (a) {
  this.od = a;
  this.ac = this.gb = this.ya = this.Ra = null
},
  qb = function (a, b) {
    this.name = a;
    this.value = b
  };
qb.prototype.toString = function () {
  return this.name
};
var rb = new qb('WARNING', 900),
  sb = new qb('INFO', 800),
  tb = new qb('CONFIG', 700);
pb.prototype.getParent = function () {
  return this.Ra
};
pb.prototype.zc = function (a) {
  this.ya = a
};
var ub = function (a) {
  if (a.ya) return a.ya;
  if (a.Ra) return ub(a.Ra);
  E('Root logger has no level set.');
  return null
};
pb.prototype.log = function (a, b, c) {
  if (a.value >= ub(this).value) for ('function' == D(b) && (b = b()), a = new nb(a, String(b), this.od), c && (a.Vb = c), c = this; c;) {
    var d = c,
      e = a;
    if (d.ac) for (var l = 0; b = d.ac[l]; l++) b(e);
    c = c.getParent()
  }
};
pb.prototype.info = function (a, b) {
  this.log(sb, a, b)
};
var vb = {
},
  wb = null,
  xb = function (a) {
    wb || (wb = new pb(''), vb[''] = wb, wb.zc(tb));
    var b;
    if (!(b = vb[a])) {
      b = new pb(a);
      var c = a.lastIndexOf('.'),
        d = a.substr(c + 1);
      c = xb(a.substr(0, c));
      c.gb || (c.gb = {
      });
      c.gb[d] = b;
      b.Ra = c;
      vb[a] = b
    }
    return b
  };
var minMax = function (a, b, c) {
  return Math.min(Math.max(a, b), c)
}; /*
  
   Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at
   http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at
   http://polymer.github.io/PATENTS.txt
  */
/*
 
 Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at
 http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at
 http://polymer.github.io/PATENTS.txt
*/
var yb = new WeakMap,
  zb = function (a) {
    return function (b) {
      for (var c = [
      ], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
      c = a.apply(null, ma(c));
      yb.set(c, !0);
      return c
    }
  },
  Ab = function (a) {
    return 'function' === typeof a && yb.has(a)
  };
var Bb = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
  Cb = function (a, b, c) {
    for (c = void 0 === c ? null : c; b !== c;) {
      var d = b.nextSibling;
      a.removeChild(b);
      b = d
    }
  }; /*
  
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at
   http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at
   http://polymer.github.io/PATENTS.txt
  */
var Db = function (a) {
  return a && a.ba ? a.L() : a
},
  Eb = {
    CONSTANT: {
      ia: Pa,
      ja: Qa
    },
    JAVASCRIPT: {
      ia: F,
      ja: function (a) {
        a instanceof F && a.constructor === F && a.Mc === Ra ? a = a.Ta : (E('expected object of type SafeScript, got \'' + a + '\' of type ' + D(a)), a = 'type_error:SafeScript');
        return a.toString()
      }
    },
    HTML: {
      ia: K,
      ja: function (a) {
        a instanceof K && a.constructor === K && a.Lc === kb ? a = a.Sa : (E('expected object of type SafeHtml, got \'' + a + '\' of type ' + D(a)), a = 'type_error:SafeHtml');
        return a.toString()
      }
    },
    RESOURCE_URL: {
      ia: Ua,
      ja: function (a) {
        a instanceof Ua && a.constructor === Ua && a.Rc === Ta ? a = a.tb : (E('expected object of type TrustedResourceUrl, got \'' + a + '\' of type ' + D(a)), a = 'type_error:TrustedResourceUrl');
        return a.toString()
      }
    },
    STRING: {
      ia: Object,
      ja: Db
    },
    STYLE: {
      ia: H,
      ja: function (a) {
        if (a instanceof H && a.constructor === H && a.Nc === $a) return a.Ua;
        E('expected object of type SafeStyle, got \'' + a + '\' of type ' + D(a));
        return 'type_error:SafeStyle'
      }
    },
    URL: {
      ia: G,
      ja: Xa
    }
  },
  Fb = function (a, b) {
    return b
  },
  Gb = {
    CONSTANT: Fb,
    JAVASCRIPT: Fb,
    HTML: function (a, b) {
      b ? a = a.replace(Fa, '&amp;').replace(Ga, '&lt;').replace(Ha, '&gt;').replace(Ia, '&quot;').replace(Ja, '&#39;').replace(Ka, '&#0;') : La.test(a) && (- 1 != a.indexOf('&') && (a = a.replace(Fa, '&amp;')), - 1 != a.indexOf('<') && (a = a.replace(Ga, '&lt;')), - 1 != a.indexOf('>') && (a = a.replace(Ha, '&gt;')), - 1 != a.indexOf('"') && (a = a.replace(Ia, '&quot;')), - 1 != a.indexOf('\'') && (a = a.replace(Ja, '&#39;')), - 1 != a.indexOf('\x00') && (a = a.replace(Ka, '&#0;')));
      return a
    },
    RESOURCE_URL: Fb,
    STRING: String,
    STYLE: Fb,
    URL: function (a, b) {
      a = Za(a).L();
      return 'about:invalid#zClosurez' === a ? b : a
    }
  };
var Jb = function (a, b, c) {
  if (Object.hasOwnProperty.call(Hb, a) && (a = Hb[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
    for (var d = null, e = !1, l = 0, h = a.length; l < h; ++l) {
      var g = a[l],
        f = g.j;
      if (!f) return g.c;
      null === d && (d = {
      });
      f = Object.hasOwnProperty.call(d, f) ? d[f] : d[f] = c(f);
      if (f === g.l) return g.c;
      null == f && (e = !0)
    }
    if (e) return null
  }
  b = Ib[b];
  return 'number' === typeof b ? b : null
},
  Lb = function (a) {
    return Object.hasOwnProperty.call(Kb, a) ? Kb[a] : null
  },
  Ib = {
    align: 1,
    alt: 1,
    'aria-activedescendant': 10,
    'aria-atomic': 1,
    'aria-autocomplete': 1,
    'aria-busy': 1,
    'aria-checked': 1,
    'aria-disabled': 1,
    'aria-dropeffect': 1,
    'aria-expanded': 1,
    'aria-haspopup': 1,
    'aria-hidden': 1,
    'aria-invalid': 1,
    'aria-label': 1,
    'aria-level': 1,
    'aria-live': 1,
    'aria-multiline': 1,
    'aria-multiselectable': 1,
    'aria-orientation': 1,
    'aria-posinset': 1,
    'aria-pressed': 1,
    'aria-readonly': 1,
    'aria-relevant': 1,
    'aria-required': 1,
    'aria-selected': 1,
    'aria-setsize': 1,
    'aria-sort': 1,
    'aria-valuemax': 1,
    'aria-valuemin': 1,
    'aria-valuenow': 1,
    'aria-valuetext': 1,
    async: 8,
    autocapitalize: 1,
    autocomplete: 1,
    autocorrect: 1,
    autofocus: 1,
    bgcolor: 1,
    border: 1,
    checked: 1,
    'class': 1,
    color: 1,
    cols: 1,
    colspan: 1,
    contenteditable: 1,
    dir: 8,
    disabled: 1,
    draggable: 1,
    enctype: 1,
    face: 1,
    'for': 10,
    formenctype: 1,
    frameborder: 1,
    height: 1,
    hidden: 1,
    href: 4,
    hreflang: 1,
    id: 10,
    ismap: 1,
    itemid: 1,
    itemprop: 1,
    itemref: 1,
    itemscope: 1,
    itemtype: 1,
    label: 1,
    lang: 1,
    list: 10,
    loop: 1,
    max: 1,
    maxlength: 1,
    min: 1,
    multiple: 1,
    muted: 1,
    name: 10,
    placeholder: 1,
    preload: 1,
    rel: 1,
    required: 1,
    reversed: 1,
    role: 1,
    rows: 1,
    rowspan: 1,
    selected: 1,
    shape: 1,
    size: 1,
    sizes: 1,
    span: 1,
    spellcheck: 1,
    src: 4,
    start: 1,
    step: 1,
    style: 5,
    summary: 1,
    tabindex: 1,
    target: 8,
    title: 1,
    translate: 1,
    valign: 1,
    value: 1,
    width: 1,
    wrap: 1
  },
  Hb = {
    a: {
      href: [
        {
          c: 3
        }
      ]
    },
    area: {
      href: [
        {
          c: 3
        }
      ]
    },
    audio: {
      src: [
        {
          c: 3
        }
      ]
    },
    blockquote: {
      cite: [
        {
          c: 3
        }
      ]
    },
    button: {
      formaction: [
        {
          c: 3
        }
      ],
      formmethod: [
        {
          c: 1
        }
      ],
      type: [
        {
          c: 1
        }
      ]
    },
    command: {
      type: [
        {
          c: 1
        }
      ]
    },
    content: {
      select: [
        {
          c: 1
        }
      ]
    },
    del: {
      cite: [
        {
          c: 3
        }
      ]
    },
    details: {
      open: [
        {
          c: 1
        }
      ]
    },
    form: {
      action: [
        {
          c: 3
        }
      ],
      method: [
        {
          c: 1
        }
      ]
    },
    iframe: {
      srcdoc: [
        {
          c: 2
        }
      ]
    },
    img: {
      src: [
        {
          c: 3
        }
      ],
      srcset: [
        {
          c: 11
        }
      ]
    },
    input: {
      formaction: [
        {
          c: 3
        }
      ],
      formmethod: [
        {
          c: 1
        }
      ],
      pattern: [
        {
          c: 1
        }
      ],
      readonly: [
        {
          c: 1
        }
      ],
      src: [
        {
          c: 3
        }
      ],
      type: [
        {
          c: 1
        }
      ]
    },
    ins: {
      cite: [
        {
          c: 3
        }
      ]
    },
    li: {
      type: [
        {
          c: 1
        }
      ]
    },
    link: {
      href: [
        {
          c: 3,
          j: 'rel',
          l: 'alternate'
        },
        {
          c: 3,
          j: 'rel',
          l: 'author'
        },
        {
          c: 3,
          j: 'rel',
          l: 'bookmark'
        },
        {
          c: 3,
          j: 'rel',
          l: 'canonical'
        },
        {
          c: 3,
          j: 'rel',
          l: 'cite'
        },
        {
          c: 3,
          j: 'rel',
          l: 'help'
        },
        {
          c: 3,
          j: 'rel',
          l: 'icon'
        },
        {
          c: 3,
          j: 'rel',
          l: 'license'
        },
        {
          c: 3,
          j: 'rel',
          l: 'next'
        },
        {
          c: 3,
          j: 'rel',
          l: 'prefetch'
        },
        {
          c: 3,
          j: 'rel',
          l: 'dns-prefetch'
        },
        {
          c: 3,
          j: 'rel',
          l: 'prerender'
        },
        {
          c: 3,
          j: 'rel',
          l: 'preconnect'
        },
        {
          c: 3,
          j: 'rel',
          l: 'preload'
        },
        {
          c: 3,
          j: 'rel',
          l: 'prev'
        },
        {
          c: 3,
          j: 'rel',
          l: 'search'
        },
        {
          c: 3,
          j: 'rel',
          l: 'subresource'
        }
      ],
      media: [
        {
          c: 1
        }
      ],
      nonce: [
        {
          c: 1
        }
      ],
      type: [
        {
          c: 1
        }
      ]
    },
    menuitem: {
      icon: [
        {
          c: 3
        }
      ]
    },
    ol: {
      type: [
        {
          c: 1
        }
      ]
    },
    q: {
      cite: [
        {
          c: 3
        }
      ]
    },
    script: {
      nonce: [
        {
          c: 1
        }
      ],
      type: [
        {
          c: 1
        }
      ]
    },
    source: {
      media: [
        {
          c: 1
        }
      ],
      src: [
        {
          c: 3
        }
      ],
      srcset: [
        {
          c: 11
        }
      ]
    },
    style: {
      media: [
        {
          c: 1
        }
      ],
      nonce: [
        {
          c: 1
        }
      ]
    },
    table: {
      cellpadding: [
        {
          c: 1
        }
      ],
      cellspacing: [
        {
          c: 1
        }
      ]
    },
    textarea: {
      readonly: [
        {
          c: 1
        }
      ]
    },
    time: {
      datetime: [
        {
          c: 1
        }
      ]
    },
    video: {
      autoplay: [
        {
          c: 1
        }
      ],
      controls: [
        {
          c: 1
        }
      ],
      poster: [
        {
          c: 3
        }
      ],
      src: [
        {
          c: 3
        }
      ]
    }
  },
  Kb = {
    a: 1,
    abbr: 1,
    address: 1,
    applet: 4,
    area: 5,
    article: 1,
    aside: 1,
    audio: 1,
    b: 1,
    base: 4,
    bdi: 1,
    bdo: 1,
    blockquote: 1,
    body: 1,
    br: 5,
    button: 1,
    canvas: 1,
    caption: 1,
    cite: 1,
    code: 1,
    col: 5,
    colgroup: 1,
    command: 1,
    content: 1,
    data: 1,
    datalist: 1,
    dd: 1,
    del: 1,
    details: 1,
    dfn: 1,
    dialog: 1,
    div: 1,
    dl: 1,
    dt: 1,
    em: 1,
    embed: 4,
    fieldset: 1,
    figcaption: 1,
    figure: 1,
    font: 1,
    footer: 1,
    form: 1,
    frame: 1,
    frameset: 1,
    h1: 1,
    h2: 1,
    h3: 1,
    h4: 1,
    h5: 1,
    h6: 1,
    head: 1,
    header: 1,
    hr: 5,
    html: 1,
    i: 1,
    iframe: 1,
    img: 5,
    input: 5,
    ins: 1,
    kbd: 1,
    keygen: 5,
    label: 1,
    legend: 1,
    li: 1,
    link: 5,
    main: 1,
    map: 1,
    mark: 1,
    math: 4,
    menu: 1,
    menuitem: 1,
    meta: 4,
    meter: 1,
    nav: 1,
    noscript: 1,
    object: 4,
    ol: 1,
    optgroup: 1,
    option: 1,
    output: 1,
    p: 1,
    param: 5,
    picture: 1,
    pre: 1,
    progress: 1,
    q: 1,
    rb: 1,
    rp: 1,
    rt: 1,
    rtc: 1,
    ruby: 1,
    s: 1,
    samp: 1,
    script: 3,
    section: 1,
    select: 1,
    slot: 1,
    small: 1,
    source: 5,
    span: 1,
    strong: 1,
    style: 2,
    sub: 1,
    summary: 1,
    sup: 1,
    svg: 4,
    table: 1,
    tbody: 1,
    td: 1,
    template: 4,
    textarea: 6,
    tfoot: 1,
    th: 1,
    thead: 1,
    time: 1,
    title: 6,
    tr: 1,
    track: 5,
    u: 1,
    ul: 1,
    'var': 1,
    video: 1,
    wbr: 5
  },
  Mb = [
    {
      auto: !0,
      ltr: !0,
      rtl: !0
    },
    {
      async: !0
    },
    {
      _self: !0,
      _blank: !0
    }
  ],
  Nb = {
    '*': {
      async: 1,
      dir: 0,
      target: 2
    }
  };
var Qb = function (a) {
  var b = Ob;
  if (!b) {
    b = Pb();
    var c = {
    };
    for (d in b) c[b[d]] = d;
    b = Ob = c
  }
  var d = b[a];
  return 'string' === typeof d ? d : String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
},
  Rb = function (a) {
    a = String(a).toLowerCase();
    var b = Pb()[a];
    return 'string' === typeof b ? b : mb(a)
  },
  Sb = function (a) {
    a = a.toLowerCase();
    a = Pb()[a];
    return 'string' === typeof a ? a : null
  },
  Pb = function () {
    if (!Tb) {
      var a = Ub,
        b = {
        };
      for (c in a) b[c] = a[c];
      Tb = b;
      a = 0;
      for (b = Vb.length; a < b; ++a) {
        var c = Vb[a];
        Tb[c.toLowerCase()] = c
      }
    }
    return Tb
  },
  Vb = 'aLink accessKey allowFullscreen bgColor cellPadding cellSpacing codeBase codeType contentEditable crossOrigin dateTime dirName formAction formEnctype formMethod formNoValidate formTarget frameBorder innerHTML innerText inputMode isMap longDesc marginHeight marginWidth maxLength mediaGroup minLength noHref noResize noShade noValidate noWrap nodeValue outerHTML outerText readOnly tabIndex textContent trueSpeed useMap vAlign vLink valueAsDate valueAsNumber valueType'.split(' '),
  Ub = {
    accept_charset: 'acceptCharset',
    'char': 'ch',
    charoff: 'chOff',
    checked: 'defaultChecked',
    'class': 'className',
    'for': 'htmlFor',
    http_equiv: 'httpEquiv',
    muted: 'defaultMuted',
    selected: 'defaultSelected',
    value: 'defaultValue'
  },
  Tb = null,
  Ob = null;
var Wb = {
},
  Xb = /^(?!(?:annotation-xml|color-profile|font-face|font-face(?:-(?:src|uri|format|name))?|missing-glyph)$)[a-z][a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*-[\-a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*$/,
  Yb = function (a, b) {
    var c = window.customElements;
    return c && c.get(a) || Wb[a] === Wb ? 2 : 'HTMLUnknownElement' ===
      b.name ? 1 : 'HTMLElement' === b.name && Xb.test(a) ? 3 : 0
  };
var Zb = /(?!,)([^\t\n\f\r ]+)(?:[\t\n\f\r ]+([.0-9+\-]+[a-z]?))?/gi,
  $b = /[\t\n\f\r ]+/,
  ac = /[\t\n\f\r ,]+/g,
  bc = function (a) {
    return (a = a.split($b, 2)) ? {
      url: a[0],
      metadata: a[1]
    }
      : null
  },
  cc = function (a) {
    var b = String(a.url).replace(ac, encodeURIComponent);
    if (a = a.metadata) {
      ac.lastIndex = 0;
      if (ac.test(a)) return null;
      b += ' ' + a
    }
    return b
  },
  dc = function (a, b, c) {
    for (var d = [
      b
    ], e = 2, l = arguments.length; e < l; ++e) d[e - 1] = arguments[e];
    a ? console.warn.apply(console, d) : console.log.apply(console, d)
  },
  ec = function (a, b, c) {
    return c
  },
  fc = function (a) {
    function b(q) {
      var p = this.getAttribute(q);
      return !p || /[\[\{]/.test(q) ? null : p
    }
    function c(q) {
      var p = q.localName;
      if (!q.getAttribute('is') && 2 === Yb(p, q.constructor)) return u;
      (q = n[p]) || (q = n[p] = document.createElement(p));
      return q
    }
    var d = a.reportHandler || void 0,
      e = a.safeTypesBridge || ec,
      l = /^$/;
    if (a = a.allowedIdentifierPrefixes) for (var h = 0, g = a.length; h < g; ++h) l = new RegExp(l.source + '|^' + String(a[h]).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08'));
    void 0 === d && 'undefined' !== typeof console && (d = dc);
    d && d(!1, 'initResin');
    var f = {
    },
      m = [
        ,
        {
          D: null,
          F: function (q, p, r) {
            return r
          },
          P: null,
          R: null
        },
        {
          D: null,
          F: null,
          P: null,
          R: 'HTML'
        },
        {
          D: null,
          F: null,
          P: 'about:invalid#zClosurez',
          R: 'URL'
        },
        {
          D: null,
          F: null,
          P: 'about:invalid#zClosurez',
          R: 'RESOURCE_URL'
        },
        {
          D: null,
          F: null,
          P: 'zClosurez',
          R: 'STYLE'
        },
        ,
        {
          D: null,
          F: null,
          P: ' /*zClosurez*/ ',
          R: 'JAVASCRIPT'
        },
        {
          D: null,
          F: function (q, p, r) {
            r = String(r).toLowerCase();
            a: {
              var t = null;
              (q = Nb[q]) && (t = q[p]);
              if ('number' !== typeof t && ((q = Nb['*']) && (t = q[p]), 'number' !== typeof t)) {
                p = !1;
                break a
              }
              p = !0 === Mb[t][String(r).toLowerCase()]
            }
            return p ?
              r : 'zClosurez'
          },
          P: 'zClosurez',
          R: null
        },
        {
          D: null,
          F: null,
          P: 'zClosurez',
          R: 'CONSTANT'
        },
        {
          D: null,
          F: function (q, p, r) {
            return l.test(r) ? r : 'zClosurez'
          },
          P: 'zClosurez',
          R: 'CONSTANT'
        },
        {
          D: function (q, p, r) {
            var t = r;
            'string' === typeof t && (t = (t = t.match(Zb)) ? t.map(bc).filter(Boolean) : [
            ]);
            if (!Array.isArray(t)) return 'about:invalid#zClosurez';
            var v = t;
            t = [
            ];
            var z = [
            ],
              ba = {
              };
            if (Array.isArray(v)) for (var ja = 0, I = v.length; ja < I; ++ja) {
              var ca = v[ja],
                w = ca && ca.url;
              if (w) {
                var M = e(w, 'URL', ba);
                if (M) {
                  var da = M !== ba;
                  (da ? t : z).push({
                    url: da ? M : w,
                    metadata: ca.metadata
                  })
                }
              }
            } else z.push(v);
            v = z.length ? JSON.stringify(z) : null;
            z = f;
            if (t.length) {
              if (!Array.isArray(t)) throw Error();
              z = t.map(cc).filter(Boolean).join(' , ') || f
            }
            v && d && d(!0, 'Failed to sanitize attribute value of <%s>: <%s %s="%O">: %s', q, q, p, r, v);
            return z === f ? 'about:invalid#zClosurez' : z
          },
          F: null,
          P: null,
          R: null
        }
      ],
      n = {
      },
      u = document.createElement('polyresinuncustomized');
    return function (q, p, r) {
      var t = q.nodeType;
      if (t !== Node.ELEMENT_NODE) {
        if (t === Node.TEXT_NODE) {
          p = q.parentElement;
          r = !p;
          if (p && p.nodeType === Node.ELEMENT_NODE) switch (t = p.localName, Yb(t, p.constructor)) {
            case 0:
            case 1:
              p = Lb(t);
              r = 1 === p || 6 === p;
              break;
            case 3:
            case 2:
              r = !0
          }
          if (r) return function (w) {
            return '' + e(w, 'STRING', w)
          }
        }
        return function (w) {
          if (!w && w !== document.all) return w;
          d && d(!0, 'Failed to sanitize %s %s%s node to value %O', q.parentElement && q.parentElement.nodeName, '#text', '', w);
          return 'zClosurez'
        }
      }
      var v = q.localName;
      t = c(q);
      switch (r) {
        case 'attribute':
          if (Rb(p) in t) break;
          return function (w) {
            return w
          };
        case 'property':
          if (p in t) break;
          var z = Sb(p);
          if (z && z in t) break;
          return function (w) {
            return w
          };
        default:
          throw Error(r + ': ' + typeof r);
      }
      var ba = 'attribute' == r ? p.toLowerCase() : Qb(p),
        ja = Jb(v, ba, ya(b, q)),
        I = f,
        ca = null;
      return function (w) {
        if (!w && w !== document.all) return w;
        if (null != ja) {
          var M = m[ja],
            da = M.R;
          ca = M.P;
          da && (I = e(w, da, f));
          I === f && (M.F ? (da = '' + e(w, 'STRING', w), I = M.F(v, ba, da)) : M.D && (I = M.D(v, ba, w)), I === ca && (I = f))
        }
        I === f && (I = ca || 'zClosurez', d && d(!0, 'Failed to sanitize attribute of <%s>: <%s %s="%O">', v, v, ba, w));
        return I
      }
    }
  },
  gc = function (a) {
    function b(l, h, g, f) {
      return f || f === document.all ? e(l, h, g)(f) : f
    }
    var c = a.UNSAFE_passThruDisallowedValues,
      d = !1;
    null != c && (d = !0 === c);
    var e = fc(a);
    return d ? function (l, h, g, f) {
      b(l, h, g, f);
      return f
    }
      : b
  };
var hc = function (a, b) {
  var c = gc(a);
  return function (d, e, l, h) {
    d = b ? b(d, e, l, h) : d;
    return h ? c(h, e, l, d) : 'zClosurez'
  }
}({
  allowedIdentifierPrefixes: [
    ''
  ],
  reportHandler: function () {
    var a = xb('resin');
    return function (b, c, d) {
      if (b) {
        var e = arguments,
          l = 2,
          h = c.replace(/%\w/g, function () {
            return e[l++]
          });
        a && a.log(rb, h, void 0)
      }
    }
  }(),
  safeTypesBridge: function (a, b, c) {
    var d = Eb[b];
    return a instanceof d.ia && (d = d.ja(a, c), d !== c) ? d : (0, Gb[b])('' + Db(a), c)
  }
}, void 0);
var N = {
},
  ic = {
  };
var O = '{{lit-' + String(Math.random()).slice(2) + '}}',
  jc = '<!--' + O + '-->',
  kc = new RegExp(O + '|' + jc),
  nc = function (a, b) {
    this.H = [
    ];
    this.element = b;
    var c = [
    ],
      d = [
      ];
    b = document.createTreeWalker(b.content, 133, null, !1);
    var e = 0,
      l = - 1,
      h = 0,
      g = a.m;
    for (a = a.values.length; h < a;) {
      var f = b.nextNode();
      if (null === f) b.currentNode = d.pop();
      else if (l++, 1 === f.nodeType) {
        if (f.hasAttributes()) {
          for (var m = f.attributes, n = m.length, u = 0, q = 0; q < n; q++) lc(m[q].name) && u++;
          for (; 0 < u--;) m = mc.exec(g[h])[2],
            n = m.toLowerCase() + '$lit$',
            q = f.getAttribute(n),
            f.removeAttribute(n),
            n = q.split(kc),
            this.H.push({
              type: 'attribute',
              index: l,
              name: m,
              m: n
            }),
            h += n.length - 1
        }
        'TEMPLATE' === f.tagName && (d.push(f), b.currentNode = f.content)
      } else if (3 === f.nodeType) {
        if (m = f.data, 0 <= m.indexOf(O)) {
          u = f.parentNode;
          m = m.split(kc);
          n = m.length - 1;
          for (q = 0; q < n; q++) {
            var p = m[q];
            if ('' === p) p = P();
            else {
              var r = mc.exec(p);
              null !== r && lc(r[2]) && (p = p.slice(0, r.index) + r[1] + r[2].slice(0, - 5) + r[3]);
              p = document.createTextNode(p)
            }
            u.insertBefore(p, f);
            this.H.push({
              type: 'node',
              index: ++l
            })
          }
          '' === m[n] ? (u.insertBefore(P(), f), c.push(f)) : f.data = m[n];
          h += n
        }
      } else if (8 === f.nodeType) if (f.data === O) {
        u = f.parentNode;
        if (null === f.previousSibling || l === e) l++,
          u.insertBefore(P(), f);
        e = l;
        this.H.push({
          type: 'node',
          index: l
        });
        null === f.nextSibling ? f.data = '' : (c.push(f), l--);
        h++
      } else for (u = - 1; - 1 !== (u = f.data.indexOf(O, u + 1));) this.H.push({
        type: 'node',
        index: - 1
      }),
        h++
    }
    c = y(c);
    for (d = c.next(); !d.done; d = c.next()) d = d.value,
      d.parentNode.removeChild(d)
  },
  lc = function (a) {
    var b = a.length - 5;
    return 0 <= b && '$lit$' === a.slice(b)
  },
  P = function () {
    return document.createComment('')
  },
  mc = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
var oc = function (a, b, c) {
  this.ka = [
  ];
  this.Wa = a;
  this.rc = b;
  this.options = c
};
oc.prototype.update = function (a) {
  for (var b = 0, c = y(this.ka), d = c.next(); !d.done; d = c.next()) d = d.value,
    void 0 !== d && d.w(a[b]),
    b++;
  a = y(this.ka);
  for (d = a.next(); !d.done; d = a.next()) b = d.value,
    void 0 !== b && b.K()
};
oc.prototype.$c = function () {
  for (var a = Bb ? this.Wa.element.content.cloneNode(!0) : document.importNode(this.Wa.element.content, !0), b = [
  ], c = this.Wa.H, d = document.createTreeWalker(a, 133, null, !1), e = 0, l = 0, h, g = d.nextNode(); e < c.length;) {
    h = c[e];
    if (- 1 !== h.index) {
      for (; l < h.index;) l++,
        'TEMPLATE' === g.nodeName && (b.push(g), d.currentNode = g.content),
        null === (g = d.nextNode()) && (d.currentNode = b.pop(), g = d.nextNode());
      if ('node' === h.type) {
        h = new pc(this.options);
        var f = g.previousSibling;
        h.S = f;
        h.v = f.nextSibling;
        this.ka.push(h)
      } else this.ka.push.apply(this.ka, ma(qc(g, h.name, h.m, this.options)))
    } else this.ka.push(void 0);
    e++
  }
  Bb && (document.adoptNode(a), customElements.upgrade(a));
  return a
};
var rc;
function sc(a) {
  var b = window;
  if ((b = b.trustedTypes || b.TrustedTypes) && void 0 === rc) try {
    rc = b.createPolicy('lit-html', {
      createHTML: function (c) {
        return c
      }
    })
  } catch (c) {
    console.error('Multiple copies of lit-html found in the page. Note that if Trusted Types is enforced, the app will break, as subsequent copies of lit-html will write raw strings to the DOM.'),
      rc = null
  }
  return rc ? rc.createHTML(a) : a
}
var tc = ' ' + O + ' ',
  ReactComponent = function (htmlString, arguments) {
    var c = uc;
    this.m = htmlString;
    this.values = arguments;
    this.type = 'html';
    this.rc = c
  };
var wc = function (a) {
  return null === a || !('object' === typeof a || 'function' === typeof a)
},
  xc = function (a) {
    fa();
    la();
    return Array.isArray(a) || !(!a || !a[Symbol.iterator])
  },
  yc = function (a, b, c) {
    this.ua = !0;
    this.element = a;
    this.name = b;
    this.m = c;
    this.H = [
    ];
    for (a = 0; a < c.length - 1; a++) this.H[a] = this.Cb()
  };
yc.prototype.Cb = function () {
  return new zc(this)
};
yc.prototype.Fa = function () {
  var a = this.m,
    b = this.H,
    c = a.length - 1;
  if (1 === c && '' === a[0] && '' === a[1] && void 0 !== b[0]) {
    var d = b[0].value;
    if (!xc(d)) return d
  }
  d = '';
  for (var e = 0; e < c; e++) {
    d += a[e];
    var l = b[e];
    if (void 0 !== l) if (l = l.value, wc(l) || !xc(l)) d += 'string' === typeof l ? l : String(l);
    else {
      l = y(l);
      for (var h = l.next(); !h.done; h = l.next()) h = h.value,
        d += 'string' === typeof h ? h : String(h)
    }
  }
  return d += a[c]
};
yc.prototype.K = function () {
  if (this.ua) {
    this.ua = !1;
    var a = this.Fa();
    a = hc(a, this.name, 'attribute', this.element);
    'symbol' === typeof a && (a = String(a));
    this.element.setAttribute(this.name, a)
  }
};
var zc = function (a) {
  this.value = void 0;
  this.Ia = a
};
zc.prototype.w = function (a) {
  a === N || wc(a) && a === this.value || (this.value = a, Ab(a) || (this.Ia.ua = !0))
};
zc.prototype.K = function () {
  for (; Ab(this.value);) {
    var a = this.value;
    this.value = N;
    a(this)
  }
  this.value !== N && this.Ia.K()
};
var pc = function (a) {
  this.h = this.value = void 0;
  this.options = a
};
k = pc.prototype;
k.w = function (a) {
  this.h = a
};
k.K = function () {
  for (; Ab(this.h);) {
    var a = this.h;
    this.h = N;
    a(this)
  }
  a = this.h;
  a !== N && (wc(a) ? a !== this.value && this.bb(a) : a instanceof ReactComponent ? this.Zc(a) : a instanceof Node ? this.ab(a) : xc(a) ? this.Yc(a) : a === ic ? (this.value = ic, this.clear()) : this.bb(a))
};
k.Ea = function (a) {
  this.v.parentNode.insertBefore(a, this.v)
};
k.ab = function (a) {
  this.value !== a && (this.clear(), this.Ea(a), this.value = a)
};
k.bb = function (a) {
  var b = this.S.nextSibling;
  a = null == a ? '' : a;
  if (b === this.v.previousSibling && 3 === b.nodeType) {
    var c = hc(a, 'data', 'property', b);
    b.data = 'string' === typeof c ? c : String(c)
  } else b = document.createTextNode(''),
    this.ab(b),
    c = hc(a, 'textContent', 'property', b),
    b.data = 'string' === typeof c ? c : String(c);
  this.value = a
};
k.Zc = function (a) {
  var b = this.options.Ad(a);
  if (this.value instanceof oc && this.value.Wa === b) this.value.update(a.values);
  else {
    var c = this.v.parentNode;
    void 0 !== hc && 'STYLE' === c.nodeName || 'SCRIPT' === c.nodeName ? this.bb('/* lit-html will not write TemplateResults to scripts and styles */') : (b = new oc(b, a.rc, this.options), c = b.$c(), b.update(a.values), this.ab(c), this.value = b)
  }
};
k.Yc = function (a) {
  Array.isArray(this.value) || (this.value = [
  ], this.clear());
  var b = this.value,
    c = 0;
  a = y(a);
  for (var d = a.next(); !d.done; d = a.next()) {
    d = d.value;
    var e = b[c];
    if (void 0 === e) if (e = new pc(this.options), b.push(e), 0 === c) {
      var l = e;
      this.Ea(l.S = P());
      this.Ea(l.v = P())
    } else {
      l = e;
      var h = b[c - 1];
      h.Ea(l.S = P());
      l.v = h.v;
      h.v = l.S
    }
    e.w(d);
    e.K();
    c++
  }
  c < b.length && (b.length = c, this.clear(e && e.v))
};
k.clear = function (a) {
  a = void 0 === a ? this.S : a;
  Cb(this.S.parentNode, a.nextSibling, this.v)
};
var Ac = function (a, b, c) {
  this.h = this.value = void 0;
  if (2 !== c.length || '' !== c[0] || '' !== c[1]) throw Error('Boolean attributes can only contain a single expression');
  this.element = a;
  this.name = b;
  this.m = c
};
Ac.prototype.w = function (a) {
  this.h = a
};
Ac.prototype.K = function () {
  for (; Ab(this.h);) {
    var a = this.h;
    this.h = N;
    a(this)
  }
  this.h !== N && (a = !!this.h, this.value !== a && (a ? this.element.setAttribute(this.name, '') : this.element.removeAttribute(this.name), this.value = a), this.h = N)
};
var Bc = function (a, b, c) {
  yc.call(this, a, b, c);
  this.yd = 2 === c.length && '' === c[0] && '' === c[1]
};
A(Bc, yc);
Bc.prototype.Cb = function () {
  return new Cc(this)
};
Bc.prototype.Fa = function () {
  return this.yd ? this.H[0].value : yc.prototype.Fa.call(this)
};
Bc.prototype.K = function () {
  if (this.ua) {
    this.ua = !1;
    var a = this.Fa();
    a = hc(a, this.name, 'property', this.element);
    this.element[this.name] = a
  }
};
var Cc = function () {
  zc.apply(this, arguments)
};
A(Cc, zc);
var Dc = !1;
try {
  var Ec = {
    get capture() {
      Dc = !0;
      return !1
    }
  };
  window.addEventListener('test', Ec, Ec);
  window.removeEventListener('test', Ec, Ec)
} catch (a) {
}
var Fc = function (a, b, c) {
  var d = this;
  this.h = this.value = void 0;
  this.element = a;
  this.Ub = b;
  this.Tb = c;
  this.Ab = function (e) {
    return d.handleEvent(e)
  }
};
Fc.prototype.w = function (a) {
  this.h = a
};
Fc.prototype.K = function () {
  for (; Ab(this.h);) {
    var a = this.h;
    this.h = N;
    a(this)
  }
  if (this.h !== N) {
    a = this.h;
    var b = this.value,
      c = null == a || null != b && (a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive);
    b = null != a && (null == b || c);
    c && this.element.removeEventListener(this.Ub, this.Ab, this.Bb);
    b && (this.Bb = a && (Dc ? {
      capture: a.capture,
      passive: a.passive,
      once: a.once
    }
      : a.capture), this.element.addEventListener(this.Ub, this.Ab, this.Bb));
    this.value = a;
    this.h = N
  }
};
Fc.prototype.handleEvent = function (a) {
  'function' === typeof this.value ? this.value.call(this.Tb || this.element, a) : this.value.handleEvent(a)
};
var qc = function (a, b, c, d) {
  var e = b[0];
  return '.' === e ? (new Bc(a, b.slice(1), c)).H : '@' === e ? [
    new Fc(a, b.slice(1), d.Tb)
  ] : '?' === e ? [
    new Ac(a, b.slice(1), c)
  ] : (new yc(a, b, c)).H
},
  uc = new function () {
  };
function Gc(a) {
  var b = Hc.get(a.type);
  void 0 === b && (b = {
    Cc: new WeakMap,
    hc: new Map
  }, Hc.set(a.type, b));
  var c = b.Cc.get(a.m);
  if (void 0 !== c) return c;
  var d = a.m.join(O);
  c = b.hc.get(d);
  if (void 0 === c) {
    c = document.createElement('template');
    for (var e = a.m.length - 1, l = '', h = !1, g = 0; g < e; g++) {
      var f = a.m[g],
        m = f.lastIndexOf('<!--');
      h = (- 1 < m || h) && - 1 === f.indexOf('-->', m + 1);
      m = mc.exec(f);
      l = null === m ? l + (f + (h ? tc : jc)) : l + (f.substr(0, m.index) + m[1] + m[2] + '$lit$' + m[3] + O)
    }
    l += a.m[e];
    c.innerHTML = sc(l);
    c = new nc(a, c);
    b.hc.set(d, c)
  }
  b.Cc.set(a.m, c);
  return c
}
var Hc = new Map;
var Ic = new WeakMap;
(window.litHtmlVersions || (window.litHtmlVersions = [
])).push('1.1.2');
var Q = function (a, b) {
  for (var c = [
  ], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
  return new ReactComponent(a, c)
};
var Jc = zb(function (a) {
  return function (b) {
    void 0 === a && b instanceof zc ? a !== b.value && b.Ia.element.removeAttribute(b.Ia.name) : b.w(a)
  }
});
var Kc = new WeakMap,
  Lc = zb(function (a) {
    for (var b = [
    ], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return function (d) {
      var e = Kc.get(d);
      void 0 === e && (e = {
        xa: 2147483647,
        values: [
        ]
      }, Kc.set(d, e));
      var l = e.values,
        h = l.length;
      e.values = b;
      for (var g = {
      }, f = 0; f < b.length && !(f > e.xa); g = {
        Y: g.Y
      }, f++) {
        g.Y = b[f];
        if (wc(g.Y) || 'function' !== typeof g.Y.then) {
          d.w(g.Y);
          e.xa = f;
          break
        }
        f < h && g.Y === l[f] || (e.xa = 2147483647, h = 0, Promise.resolve(g.Y).then(function (m) {
          return function (n) {
            var u = e.values.indexOf(m.Y);
            - 1 < u && u < e.xa && (e.xa = u, d.w(n), d.K())
          }
        }(g)))
      }
    }
  }); /*
  
   Copyright 2016 Google Inc.
  
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
  
   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.
  
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
  */
var Mc = function (a) {
  this.f = a = void 0 === a ? {
  }
    : a
};
Mc.prototype.ec = function () {
};
Mc.prototype.Ka = function () {
};
x.Object.defineProperties(Mc, {
  C: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {
      }
    }
  },
  m: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {
      }
    }
  },
  za: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {
      }
    }
  },
  Pb: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {
      }
    }
  }
});
var Nc = function (a, b, c) {
  for (var d = [
  ], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
  this.X = a;
  ma(d);
  this.Ma = void 0 === b ? this.Zb() : b;
  this.Ma.ec();
  this.fc()
};
Nc.prototype.Zb = function () {
  throw Error('Subclasses must override getDefaultFoundation to return a properly configured foundation class');
};
Nc.prototype.fc = function () {
};
Nc.prototype.Ka = function () {
  this.Ma.Ka()
}; /*
  
   Copyright 2019 Google Inc.
  
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
  
   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.
  
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
  */
var Oc;
function Pc() {
  var a = void 0 === a ? window : a;
  if (void 0 === Oc) {
    var b = !1;
    try {
      a.document.addEventListener('test', function () {
      }, {
        get passive() {
          return b = !0
        }
      })
    } catch (c) {
    }
    Oc = b
  }
  return Oc ? {
    passive: !0
  }
    : !1
}; /*
  
   Copyright 2018 Google Inc.
  
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
  
   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.
  
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
  */
var Qc = {
  yb: 'mdc-ripple-upgraded--background-focused',
  Ya: 'mdc-ripple-upgraded--foreground-activation',
  Za: 'mdc-ripple-upgraded--foreground-deactivation',
  zb: 'mdc-ripple-upgraded',
  $a: 'mdc-ripple-upgraded--unbounded'
},
  Rc = {
    Sc: '--mdc-ripple-fg-scale',
    Tc: '--mdc-ripple-fg-size',
    Uc: '--mdc-ripple-fg-translate-end',
    Vc: '--mdc-ripple-fg-translate-start',
    Wc: '--mdc-ripple-left',
    Xc: '--mdc-ripple-top'
  },
  Sc = {
    Hc: 225,
    Ic: 150,
    Jc: 0.6,
    Kc: 10,
    Qc: 300
  };
var Tc;
function Uc() {
  var a = window;
  var b = void 0 === b ? !1 : b;
  var c = a.CSS;
  if ('boolean' === typeof Tc && !b) return Tc;
  if (!c || 'function' !== typeof c.supports) return !1;
  var d = c.supports('--css-vars', 'yes');
  c = c.supports('(--css-vars: yes)') && c.supports('color', '#00000000');
  d || c ? (c = a.document, d = c.createElement('div'), d.className = 'mdc-ripple-surface--test-edge-var-bug', c.head.appendChild(d), a = a.getComputedStyle(d), a = null !== a && 'solid' === a.borderTopStyle, d.parentNode && d.parentNode.removeChild(d), a = !a) : a = !1;
  b || (Tc = a);
  return a
}
;
var Vc = [
  'touchstart',
  'pointerdown',
  'mousedown',
  'keydown'
],
  Wc = [
    'touchend',
    'pointerup',
    'mouseup',
    'contextmenu'
  ],
  Xc = [
  ],
  R = function (a) {
    Mc.call(this, Object.assign({
    }, R.Pb, a));
    var b = this;
    this.cb = !1;
    this.va = this.oa = 0;
    this.Wb = '0';
    this.G = {
      width: 0,
      height: 0
    };
    this.jc = this.Pa = this.V = 0;
    this.xb = {
      left: 0,
      top: 0
    };
    this.Z = Yc();
    this.ad = function () {
      b.cb = !0;
      Zc(b)
    };
    this.Db = function (c) {
      return $c(b, c)
    };
    this.Ja = function () {
      return ad(b)
    };
    this.Xb = function () {
      return bd(b)
    };
    this.Hb = function () {
      return cd(b)
    };
    this.xc = function () {
      return b.Oa()
    }
  };
A(R, Mc);
R.prototype.ec = function () {
  var a = this,
    b = this.f.fb();
  dd(this, b);
  if (b) {
    b = R.C;
    var c = b.zb,
      d = b.$a;
    requestAnimationFrame(function () {
      a.f.fa(c);
      a.f.ca() && (a.f.fa(d), ed(a))
    })
  }
};
R.prototype.Ka = function () {
  var a = this;
  if (this.f.fb()) {
    this.oa && (clearTimeout(this.oa), this.oa = 0, this.f.O(R.C.Ya));
    this.va && (clearTimeout(this.va), this.va = 0, this.f.O(R.C.Za));
    var b = R.C,
      c = b.zb,
      d = b.$a;
    requestAnimationFrame(function () {
      a.f.O(c);
      a.f.O(d);
      fd(a)
    })
  }
  gd(this);
  hd(this)
};
R.prototype.Oa = function () {
  var a = this;
  this.Pa && cancelAnimationFrame(this.Pa);
  this.Pa = requestAnimationFrame(function () {
    ed(a);
    a.Pa = 0
  })
};
var bd = function (a) {
  requestAnimationFrame(function () {
    return a.f.fa(R.C.yb)
  })
},
  cd = function (a) {
    requestAnimationFrame(function () {
      return a.f.O(R.C.yb)
    })
  },
  Yc = function () {
    return {
      eb: void 0,
      bc: !1,
      Na: !1,
      kb: !1,
      Xa: !1,
      ea: !1
    }
  },
  dd = function (a, b) {
    b && (Vc.forEach(function (c) {
      a.f.Ba(c, a.Db)
    }), a.f.ca() && a.f.tc(a.xc));
    a.f.Ba('focus', a.Xb);
    a.f.Ba('blur', a.Hb)
  },
  id = function (a, b) {
    'keydown' === b.type ? a.f.Ba('keyup', a.Ja) : Wc.forEach(function (c) {
      a.f.sc(c, a.Ja)
    })
  },
  gd = function (a) {
    Vc.forEach(function (b) {
      a.f.ta(b, a.Db)
    });
    a.f.ta('focus', a.Xb);
    a.f.ta('blur', a.Hb);
    a.f.ca() && a.f.Sb(a.xc)
  },
  hd = function (a) {
    a.f.ta('keyup', a.Ja);
    Wc.forEach(function (b) {
      a.f.Rb(b, a.Ja)
    })
  },
  fd = function (a) {
    var b = R.m;
    Object.keys(b).forEach(function (c) {
      0 === c.indexOf('VAR_') && a.f.da(b[c], null)
    })
  },
  $c = function (a, b) {
    if (!a.f.gc()) {
      var c = a.Z;
      if (!c.Na) {
        var d = a.qc;
        d && void 0 !== b && d.type !== b.type || (c.Na = !0, c.kb = void 0 === b, c.eb = b, c.Xa = c.kb ? !1 : void 0 !== b && ('mousedown' === b.type || 'touchstart' === b.type || 'pointerdown' === b.type), void 0 !== b && 0 < Xc.length && Xc.some(function (e) {
          return a.f.Lb(e)
        }) ?
          jd(a) : (void 0 !== b && (Xc.push(b.target), id(a, b)), c.ea = void 0 !== b && 'keydown' === b.type ? a.f.mb() : !0, c.ea && kd(a), requestAnimationFrame(function () {
            Xc = [
            ];
            c.ea || void 0 === b || ' ' !== b.key && 32 !== b.keyCode || (c.ea = void 0 !== b && 'keydown' === b.type ? a.f.mb() : !0, c.ea && kd(a));
            c.ea || (a.Z = Yc())
          })))
      }
    }
  },
  kd = function (a) {
    var b = R.m,
      c = b.Vc;
    b = b.Uc;
    var d = R.C,
      e = d.Za;
    d = d.Ya;
    var l = R.za.Hc;
    ed(a);
    var h = '',
      g = '';
    a.f.ca() || (g = ld(a), h = g.zd, g = g.kd, h = h.x + 'px, ' + h.y + 'px', g = g.x + 'px, ' + g.y + 'px');
    a.f.da(c, h);
    a.f.da(b, g);
    clearTimeout(a.oa);
    clearTimeout(a.va);
    md(a);
    a.f.O(e);
    a.f.qa();
    a.f.fa(d);
    a.oa = setTimeout(function () {
      return a.ad()
    }, l)
  },
  ld = function (a) {
    var b = a.Z,
      c = b.eb;
    if (b.Xa) {
      var d = a.f.$b(),
        e = a.f.qa();
      c ? (b = d.x + e.left, d = d.y + e.top, 'touchstart' === c.type ? (b = c.changedTouches[0].pageX - b, c = c.changedTouches[0].pageY - d) : (b = c.pageX - b, c = c.pageY - d), c = {
        x: b,
        y: c
      }) : c = {
        x: 0,
        y: 0
      }
    } else c = {
      x: a.G.width / 2,
      y: a.G.height / 2
    };
    c = {
      x: c.x - a.V / 2,
      y: c.y - a.V / 2
    };
    return {
      zd: c,
      kd: {
        x: a.G.width / 2 - a.V / 2,
        y: a.G.height / 2 - a.V / 2
      }
    }
  },
  Zc = function (a) {
    var b = R.C.Za,
      c = a.Z,
      d = c.Na;
    !c.bc && d || !a.cb || (md(a), a.f.fa(b), a.va = setTimeout(function () {
      a.f.O(b)
    }, Sc.Ic))
  },
  md = function (a) {
    a.f.O(R.C.Ya);
    a.cb = !1;
    a.f.qa()
  },
  jd = function (a) {
    a.qc = a.Z.eb;
    a.Z = Yc();
    setTimeout(function () {
      return a.qc = void 0
    }, R.za.Qc)
  },
  ad = function (a) {
    var b = a.Z;
    if (b.Na) {
      var c = Object.assign({
      }, b);
      b.kb ? (requestAnimationFrame(function () {
        var d = c.ea;
        (c.Xa || d) && Zc(a)
      }), jd(a)) : (hd(a), requestAnimationFrame(function () {
        a.Z.bc = !0;
        var d = c.ea;
        (c.Xa || d) && Zc(a);
        jd(a)
      }))
    }
  },
  ed = function (a) {
    a.G = a.f.qa();
    var b = Math.max(a.G.height, a.G.width);
    a.jc = a.f.ca() ? b : Math.sqrt(Math.pow(a.G.width, 2) + Math.pow(a.G.height, 2)) + R.za.Kc;
    b = Math.floor(b * R.za.Jc);
    a.V = a.f.ca() && 0 !== b % 2 ? b - 1 : b;
    a.Wb = '' + a.jc / a.V;
    b = R.m;
    var c = b.Wc,
      d = b.Xc,
      e = b.Sc;
    a.f.da(b.Tc, a.V + 'px');
    a.f.da(e, a.Wb);
    a.f.ca() && (a.xb = {
      left: Math.round(a.G.width / 2 - a.V / 2),
      top: Math.round(a.G.height / 2 - a.V / 2)
    }, a.f.da(c, a.xb.left + 'px'), a.f.da(d, a.xb.top + 'px'))
  };
x.Object.defineProperties(R, {
  C: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return Qc
    }
  },
  m: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return Rc
    }
  },
  za: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return Sc
    }
  },
  Pb: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {
        fa: function () {
        },
        fb: function () {
          return !0
        },
        qa: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          }
        },
        Lb: function () {
          return !0
        },
        Rb: function () {
        },
        ta: function () {
        },
        Sb: function () {
        },
        $b: function () {
          return {
            x: 0,
            y: 0
          }
        },
        mb: function () {
          return !0
        },
        gc: function () {
          return !0
        },
        ca: function () {
          return !0
        },
        sc: function () {
        },
        Ba: function () {
        },
        tc: function () {
        },
        O: function () {
        },
        da: function () {
        }
      }
    }
  }
});
var nd = function () {
  Nc.apply(this, arguments);
  this.disabled = !1
};
A(nd, Nc);
var od = function (a) {
  return {
    fa: function (b) {
      return a.X.classList.add(b)
    },
    fb: function () {
      return Uc()
    },
    qa: function () {
      return a.X.getBoundingClientRect()
    },
    Lb: function (b) {
      return a.X.contains(b)
    },
    Rb: function (b, c) {
      return document.documentElement.removeEventListener(b, c, Pc())
    },
    ta: function (b, c) {
      return a.X.removeEventListener(b, c, Pc())
    },
    Sb: function (b) {
      return window.removeEventListener('resize', b)
    },
    $b: function () {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    },
    mb: function () {
      var b = a.X;
      return (b.matches || b.webkitMatchesSelector || b.msMatchesSelector).call(b, ':active')
    },
    gc: function () {
      return !!a.disabled
    },
    ca: function () {
      return !!a.Ec
    },
    sc: function (b, c) {
      return document.documentElement.addEventListener(b, c, Pc())
    },
    Ba: function (b, c) {
      return a.X.addEventListener(b, c, Pc())
    },
    tc: function (b) {
      return window.addEventListener('resize', b)
    },
    O: function (b) {
      return a.X.classList.remove(b)
    },
    da: function (b, c) {
      return a.X.style.setProperty(b, c)
    }
  }
};
nd.prototype.Oa = function () {
  this.Ma.Oa()
};
nd.prototype.Zb = function () {
  return new R(od(this))
};
nd.prototype.fc = function () {
  this.Ec = 'mdcRippleIsUnbounded' in this.X.dataset
};
x.Object.defineProperties(nd.prototype, {
  Ec: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return !!this.Fc
    },
    set: function (a) {
      this.Fc = !!a;
      a = this.Ma;
      var b = R.C.$a;
      this.Fc ? a.f.fa(b) : a.f.O(b)
    }
  }
});
function checkInRange(n, max, debugName) {
  if (isNaN(n) || 0 > n || n > max) throw new RangeError(n + ' for ' + debugName + ' is not between 0 and ' + max);
}
var T = Math.pow(2, - 16),
  RGBA = function (r, g, b, a) {
    a = void 0 === a ? 1 : a;
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
    checkInRange(r, 1, 'red');
    checkInRange(g, 1, 'green');
    checkInRange(b, 1, 'blue');
    checkInRange(a, 1, 'alpha')
  };
RGBA.prototype.toCssString = function () {
  return 'rgba(' + 100 * this.red + '%, ' + 100 * this.green + '%, ' + (100 * this.blue + '%, ' + this.alpha + ')')
};
var V = function (a) {
  return pd(Math.round(255 * a.red)) + pd(Math.round(255 * a.green)) + pd(Math.round(255 * a.blue)) + (1 > a.alpha ? pd(Math.round(255 * a.alpha)) : '')
};
RGBA.prototype.La = function (a) {
  return Math.abs(this.red - a.red) < T && Math.abs(this.green - a.green) < T && Math.abs(this.blue - a.blue) < T && Math.abs(this.alpha - a.alpha) < T
};
var qd = function (a) {
  return 1 - a.alpha < T ? a : new RGBA(a.red, a.green, a.blue)
},
  rd = function (a, b) {
    var c = qd(b);
    if (!(1 - a.alpha < T)) {
      var d = c.alpha * (1 - a.alpha);
      a = new RGBA(a.red * a.alpha + c.red * d, a.green * a.alpha + c.green * d, a.blue * a.alpha + c.blue * d, a.alpha + d)
    }
    a = 0.2126 * W(a.red) + 0.7152 * W(a.green) + 0.0722 * W(a.blue);
    b = 0.2126 * W(b.red) + 0.7152 * W(b.green) + 0.0722 * W(b.blue);
    return a >= b ? (a + 0.05) / (b + 0.05) : (b + 0.05) / (a + 0.05)
  },
  sd = function (a, b, c, d) {
    var e = d,
      l = d;
    a = a % 360 / 60;
    var h = c * (1 - Math.abs(a % 2 - 1));
    switch (Math.floor(a)) {
      case 0:
        e += c;
        l += h;
        break;
      case 1:
        e +=
          h;
        l += c;
        break;
      case 2:
        l += c;
        d += h;
        break;
      case 3:
        l += h;
        d += c;
        break;
      case 4:
        e += h;
        d += c;
        break;
      case 5:
        e += c,
          d += h
    }
    return new RGBA(e, l, d, b)
  },
  td = function (a) {
    var b = (1 - Math.abs(2 * a.g - 1)) * a.saturation;
    return sd(a.hue, a.alpha, b, Math.max(0, a.g - b / 2))
  },
  X = function (a) {
    var b = a.value * a.saturation;
    return sd(a.hue, a.alpha, b, Math.max(0, a.value - b))
  },
  vd = function (a) {
    if (!/^[a-fA-F0-9]{3,8}$/.test(a)) throw Error('Invalid hex color string: ' + a);
    if (3 === a.length || 4 === a.length) var b = /^(.)(.)(.)(.)?$/.exec(a).slice(1, 5).map(function (e) {
      return e ?
        e + e : 'ff'
    });
    else if (6 === a.length || 8 === a.length) b = /^(..)(..)(..)(..)?$/.exec(a).slice(1, 5),
      void 0 === b[3] && (b[3] = 'ff');
    else throw Error('Invalid hex color string: ' + a);
    a = ud(b[0]) / 255;
    var c = ud(b[1]) / 255,
      d = ud(b[2]) / 255;
    b = ud(b[3]) / 255;
    return new RGBA(a, c, d, b)
  },
  wd = new RGBA(1, 1, 1),
  xd = new RGBA(0, 0, 0);
function ud(a) {
  if (!/^[a-fA-F0-9]+$/.test(a)) throw Error('Invalid hex string: ' + a);
  return parseInt(a, 16)
}
function pd(a) {
  a = a.toString(16);
  return 2 <= a.length ? a : '0' + a
}
var HSLA = function (h, s, l, a) {
  a = void 0 === a ? 1 : a;
  this.hue = h;
  this.saturation = s;
  this.g = l;
  this.alpha = a;
  checkInRange(h, 360, 'hue');
  checkInRange(s, 1, 'saturation');
  checkInRange(l, 1, 'lightness');
  checkInRange(a, 1, 'alpha')
};
HSLA.prototype.toCssString = function () {
  return 'hsla(' + this.hue + ', ' + 100 * this.saturation + '%, ' + (100 * this.g + '%, ' + this.alpha + ')')
};
HSLA.prototype.rotate = function (a) {
  return new HSLA((this.hue + a + 360) % 360, this.saturation, this.g, this.alpha)
};
var zd = function (a) {
  var b = Math.max(a.red, a.green, a.blue),
    c = Math.min(a.red, a.green, a.blue),
    d = 0,
    e = 0,
    l = minMax(0.5 * (b + c), 0, 1);
  b - c > T && (b === a.red ? d = 60 * (a.green - a.blue) / (b - c) : b === a.green ? d = 60 * (a.blue - a.red) / (b - c) + 120 : b === a.blue && (d = 60 * (a.red - a.green) / (b - c) + 240), e = 0 < l && 0.5 >= l ? minMax((b - c) / (2 * l), 0, 1) : minMax((b - c) / (2 - 2 * l), 0, 1));
  d = Math.round(d + 360) % 360;
  return new HSLA(d, e, l, a.alpha)
},
  Ad = function (a) {
    var b = minMax((2 - a.saturation) * a.value / 2, 0, 1),
      c = 0;
    0 < b && 1 > b && (c = a.saturation * a.value / (0.5 > b ? 2 * b : 2 - 2 * b));
    c = minMax(c, 0, 1);
    return new HSLA(a.hue, c, b, a.alpha)
  },
  HSVA = function (a, b, c, d) {
    d = void 0 === d ? 1 : d;
    this.hue = a;
    this.saturation = b;
    this.value = c;
    this.alpha = d;
    checkInRange(a, 360, 'hue');
    checkInRange(b, 1, 'saturation');
    checkInRange(c, 1, 'value');
    checkInRange(d, 1, 'alpha')
  },
  Cd = function (a) {
    var b = Math.max(a.red, a.green, a.blue),
      c = Math.min(a.red, a.green, a.blue),
      d = 0,
      e = 0;
    b - c > T && (e = (b - c) / b, b === a.red ? d = 60 * (a.green - a.blue) / (b - c) : b === a.green ? d = 60 * (a.blue - a.red) / (b - c) + 120 : b === a.blue && (d = 60 * (a.red - a.green) / (b - c) + 240));
    d = Math.round(d + 360) % 360;
    // console.log('HSLVA: ' + d + ' ' + e + ' ' + b + ' ' + a.alpha)
    // This is called when an new color is added from hex or when you tap on one
    // of the colors on top of the picker
    return new HSVA(d, e, b, a.alpha)
  },
  LABA = function (lightness, b, c, alpha) {
    alpha = void 0 === alpha ? 1 : alpha;
    this.g = lightness;
    this.A = b;
    this.B = c;
    this.alpha = alpha;
    checkInRange(lightness, Number.MAX_VALUE, 'lightness');
    checkInRange(alpha, 1, 'alpha')
  };
LABA.prototype.La = function (a) {
  return 0.0001 > Math.abs(this.g - a.g) && 0.0001 > Math.abs(this.A - a.A) && 0.0001 > Math.abs(this.B - a.B) && Math.abs(this.alpha - a.alpha) < T
};
var RGBAtoLABA = function (a) {
  var b = W(a.red),
    c = W(a.green),
    d = W(a.blue),
    e = 0.2126729 * b + 0.7151522 * c + 0.072175 * d;
  return new LABA(116 * Dd(e) - 16, 500 * (Dd((0.4124564 * b + 0.3575761 * c + 0.1804375 * d) / 0.95047) - Dd(e)), 200 * (Dd(e) - Dd((0.0193339 * b + 0.119192 * c + 0.9503041 * d) / 1.08883)), a.alpha)
},
  LCHA = function (l, c, h, a) {
    a = void 0 === a ? 1 : a;
    this.g = l;
    this.chroma = c;
    this.hue = h;
    this.alpha = a;
    checkInRange(l, Number.MAX_VALUE, 'lightness');
    checkInRange(c, Number.MAX_VALUE, 'chroma');
    checkInRange(h, 360, 'hue');
    checkInRange(a, 1, 'alpha')
  };
LCHA.prototype.La = function (a) {
  return 0.0001 > Math.abs(this.g - a.g) && 0.0001 > Math.abs(this.chroma - a.chroma) && 0.0001 > Math.abs(this.hue - a.hue) && Math.abs(this.alpha - a.alpha) < T
};
var LABAtoLCH = function (a) {
  return new LCHA(a.g, Math.sqrt(Math.pow(a.A, 2) + Math.pow(a.B, 2)), (180 * Math.atan2(a.B, a.A) / Math.PI + 360) % 360, a.alpha)
};
function W(a) {
  return 0.04045 >= a ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)
}
function partXYZAtoLABA(a) {
  return 0.0031308 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055
}
function Dd(a) {
  var b = 6 / 29,
    c = 1 / (3 * Math.pow(b, 2));
  return a > Math.pow(b, 3) ? Math.pow(a, 1 / 3) : c * a + 4 / 29
}
function partLABAtoXYZA(a) {
  var b = 6 / 29,
    c = 3 * Math.pow(b, 2);
  return a > b ? Math.pow(a, 3) : c * (a - 4 / 29)
}
var inverseTangent360 = function (a, b) {
  if (0.0001 > Math.abs(a) && 0.0001 > Math.abs(b)) return 0;
  a = 180 * Math.atan2(a, b) / Math.PI;
  return 0 <= a ? a : a + 360
};
var Kd = [
  [new LABA(94.67497003305085, 7.266715066863771, 1.000743882272359),
  new LABA(86.7897416761699, 18.370736761658012, 4.23637133971424),
  new LABA(72.0939162832561, 31.7948058298117, 13.2972443996896),
  new LABA(61.79353370051851, 44.129498163764545, 20.721477326799608),
  new LABA(57.194195398949574, 59.6450006197361, 34.999830012940194),
  new LABA(55.603951071861374, 66.01287384845483, 47.67169313982772),
  new LABA(51.66348502954747, 64.7487785020625, 43.244876694855286),
  new LABA(47.09455666350969, 62.29836039074277, 40.67775424698388),
  new LABA(43.77122063388739, 60.28633509183384, 40.31444686692952),
  new LABA(39.555187078007386, 58.703681355389975, 41.66495027798629)],
  [
    new LABA(92.68053776327665, 9.515385232804263, - 0.8994072969754852),
    new LABA(81.86756643628922, 25.05688089723257, - 1.9475235115390621),
    new LABA(70.90987389545768, 42.21705257720526, - 1.095154624057959),
    new LABA(61.08140805216186, 58.871233307587204, 2.1008764804626434),
    new LABA(54.97970219986448, 68.56530938366889, 7.327430728560569),
    new LABA(50.872250340749176, 74.60459195925529, 15.353576256896073),
    new LABA(47.27738650144558, 70.77855776427805, 11.70434273264508),
    new LABA(42.58424189486517, 65.5411953138309, 7.595596439803797),
    new LABA(37.977492407254836, 60.74362621842075, 2.9847124951453474),
    new LABA(29.699290034849604, 51.90485023721311, - 4.830186634107636)
  ],
  [
    new LABA(92.4362655169016, 7.542927467702299, - 6.039842848605881),
    new LABA(81.07399776904751, 19.563870217805036, - 15.719625491986044),
    new LABA(68.71394717711831, 33.79992812490556, - 26.49539972339321),
    new LABA(56.596161226236305, 47.5856631835152, - 36.480816605410915),
    new LABA(48.002791217624434, 57.30866443934879, - 43.2561127152548),
    new LABA(40.66211534692161, 64.01910773818436, - 48.05930162591041),
    new LABA(37.690702208992185, 61.13762767732481, - 49.384803274243026),
    new LABA(33.56291870731981, 57.637381239254104, - 51.39557249855828),
    new LABA(29.865391314234515, 54.29737439901333, - 52.6601973712463),
    new LABA(23.16724235420436, 48.51764437280498, - 55.16267949015293)
  ],
  [
    new LABA(92.49103426017201, 4.712320025752947, - 6.532868071709763),
    new LABA(81.24668319505597, 11.50642734909485, - 16.666600637245367),
    new LABA(68.61488216554629, 20.395329051982824, - 28.522018851715416),
    new LABA(55.60369793053023, 30.933537768905005, - 41.16439122358484),
    new LABA(45.834566190969426, 39.28806272235674, - 50.523322052772635),
    new LABA(36.608620229358664, 47.29686002828143, - 59.111766586186846),
    new LABA(34.189791237562616, 46.60426065139123, - 59.53961627676729),
    new LABA(30.52713367338361, 46.01498224754519, - 60.19975052509064),
    new LABA(27.44585524877222, 44.96180431854785, - 60.46395810756433),
    new LABA(21.98627670328218, 44.29296076245473, - 60.93653655172098)
  ],
  [
    new LABA(92.86314411983918, 1.5318147061061937, - 6.025243528950552),
    new LABA(81.8348073705298, 4.460934955458907, - 15.873561009736136),
    new LABA(69.7796913795672, 7.9043652558912765, - 26.3170846346932),
    new LABA(57.48786519938736, 12.681019504822533, - 37.23202012914528),
    new LABA(47.74592578811101, 18.520799302452374, - 46.47540679000397),
    new LABA(38.334403614455404, 25.57700668170812, - 55.28224153299287),
    new LABA(35.15116453901552, 26.231812080381168, - 54.53700978785404),
    new LABA(31.080429988007957, 27.07394930110124, - 53.97505274579958),
    new LABA(27.026672080454922, 28.165266427558983, - 53.28987325482218),
    new LABA(19.751201587921678, 30.60784576895101, - 52.13866519297474)
  ],
  [
    new LABA(94.70682457348717, - 2.835484735987326, - 6.978044694792707),
    new LABA(86.8839842970016, - 5.16908728759552, - 17.88561192754956),
    new LABA(79.0451532401558, - 6.817753527015746, - 28.968537490432176),
    new LABA(71.15083697242613, - 5.994763756850707, - 39.72549451158927),
    new LABA(65.48106058907833, - 2.735745792537936, - 48.15471238926561),
    new LABA(60.43009440850862, 2.079928897321559, - 55.10935847069616),
    new LABA(55.62267676922188, 4.998684384486918, - 55.02164729429915),
    new LABA(49.27006645904875, 8.470398370314381, - 54.494796838457546),
    new LABA(43.16828856394358, 11.968483076143844, - 53.972567377977974),
    new LABA(32.17757793894193, 18.96054990229354, - 53.45146365049088)
  ],
  [
    new LABA(95.35713467762652, - 4.797149155388203, - 6.550002550504308),
    new LABA(88.27942649540043, - 10.836006614583892, - 16.359361821940375),
    new LABA(81.10009044900976, - 15.323054522981716, - 26.419121191320947),
    new LABA(74.44713958259777, - 16.664432625362547, - 35.19702686900037),
    new LABA(69.87836465637318, - 14.291515332054693, - 41.827430329755174),
    new LABA(65.68851259178913, - 9.612635721963692, - 47.34091616039191),
    new LABA(60.88357994308973, - 7.252819027184943, - 46.67753731595634),
    new LABA(54.26166495426166, - 3.8141836897908066, - 45.97939475762498),
    new LABA(48.10661895072673, - 1.378998784464347, - 44.34466750206778),
    new LABA(36.34401147057282, 5.067812404713545, - 43.11786257561915)
  ],
  [
    new LABA(95.69295154599753, - 6.898716127301141, - 3.994284229654421),
    new LABA(89.52842524059004, - 16.412398289601725, - 9.260466069266693),
    new LABA(83.32031214655748, - 24.83036840728098, - 14.568673583304603),
    new LABA(77.35338313752958, - 30.201708572215104, - 18.92358284721101),
    new LABA(73.45322093857781, - 31.88590390189383, - 21.130459992513686),
    new LABA(69.97638465064783, - 30.679850324547953, - 23.186685661136707),
    new LABA(64.44491716553777, - 29.08337434584457, - 21.154935769156214),
    new LABA(56.99816432961103, - 27.31081477279451, - 17.86988815767443),
    new LABA(49.75464182255671, - 25.335383503694242, - 15.024722591662787),
    new LABA(36.52725894264432, - 22.129641744194515, - 9.176159146894303)
  ],
  [
    new LABA(94.18453941589918, - 6.08351703428972, - 1.5488916051161983),
    new LABA(85.68177077414457, - 15.333179440298606, - 2.8519825761476048),
    new LABA(76.85067847190405, - 24.844059173189713, - 3.8750785132192656),
    new LABA(68.02762242570138, - 32.566861154120716, - 4.015231084407134),
    new LABA(61.667257304525464, - 36.06752603289354, - 3.4734046401753815),
    new LABA(55.67310397390196, - 36.66069960626328, - 2.125617915169653),
    new LABA(51.059149495197715, - 34.65019160301408, - 1.3910484300432513),
    new LABA(45.269081019218405, - 32.13244775422941, - 0.4526371852697775),
    new LABA(39.36899076059384, - 29.25264468583161, - 0.03562564673170732),
    new LABA(28.58363043701477, - 24.585465516136413, 1.8037402162492389)
  ],
  [
    new LABA(95.30530183565223, - 6.430415645739263, 4.292950594459599),
    new LABA(88.49014579152143, - 15.23147744952702, 10.848261177683138),
    new LABA(81.22616870575376, - 24.993886168551583, 18.144696803330884),
    new LABA(74.30361721558802, - 35.56088696067356, 26.781515251907727),
    new LABA(69.0430995277442, - 42.61556126595995, 33.17109563126665),
    new LABA(63.977421814072926, - 48.54292673319982, 39.73241526342939),
    new LABA(58.777960853461366, - 46.1153692478013, 37.838910745225576),
    new LABA(52.41108688974904, - 43.21761792485762, 35.62250659009424),
    new LABA(46.2813873076426, - 40.25816227675361, 33.32343229338761),
    new LABA(34.685655305814514, - 34.75343878510312, 28.866739034359767)
  ],
  [
    new LABA(96.70518169355954, - 4.929987845095463, 6.397084523168894),
    new LABA(91.66416061199438, - 12.057032041945693, 16.054604579275143),
    new LABA(86.2244395865449, - 19.613646834080622, 26.384906423454236),
    new LABA(80.83404879636919, - 27.080171840756893, 37.378493742021334),
    new LABA(76.79543725108964, - 32.76659719736752, 45.912190572444445),
    new LABA(72.90025297028019, - 37.549139223927384, 53.51959496103027),
    new LABA(67.21532310272079, - 36.56304870773486, 50.49629051268894),
    new LABA(59.91051142210195, - 35.77011466063357, 46.56465847976187),
    new LABA(52.51015841084511, - 34.47903440699235, 42.20723868724268),
    new LABA(39.41191983353878, - 32.80460974352642, 35.255490585630014)
  ],
  [
    new LABA(97.99506057883428, - 4.059632482741494, 9.355797602381521),
    new LABA(94.80926235976536, - 9.237091467352855, 23.230650064824985),
    new LABA(91.85205843526167, - 15.053917327011114, 38.86115182206598),
    new LABA(88.75812142080242, - 19.542900400164097, 53.71785675783709),
    new LABA(86.27404180729515, - 22.173992891121596, 63.978639065232514),
    new LABA(84.20566835376492, - 24.270643520989342, 72.79624067033038),
    new LABA(78.27915100603997, - 21.181850056402496, 68.82763412297965),
    new LABA(70.82385811892824, - 17.788148932525672, 64.00327817988128),
    new LABA(62.936867012868035, - 13.697412111684903, 58.513000509287835),
    new LABA(49.498610881452535, - 6.485230564384715, 49.67432722833751)
  ],
  [
    new LABA(98.93885129752759, - 3.0098470288543178, 10.765736833790008),
    new LABA(97.22689784824074, - 6.174599368734491, 26.22932417355146),
    new LABA(95.58092947828766, - 8.907132848473886, 43.56297291446567),
    new LABA(94.09009515702486, - 10.509628942710735, 60.20019514231188),
    new LABA(93.06546746683087, - 11.008558476013008, 71.76500826005477),
    new LABA(92.12975017760128, - 10.830023094868302, 80.9090559640089),
    new LABA(87.12188349168609, - 2.3764300099239355, 78.14868195373407),
    new LABA(80.96200442419905, 8.849333792729064, 75.05050700092679),
    new LABA(75.00342770718086, 20.340173566879283, 72.24841925958934),
    new LABA(65.48207757431567, 39.647064970476094, 68.34872841768654)
  ],
  [
    new LABA(97.5642392074337, - 1.445525639405032, 11.881254316297674),
    new LABA(93.67057953749456, - 1.8693096862072434, 30.02888670415651),
    new LABA(89.94571492804107, - 1.0224503814769692, 49.649542361642276),
    new LABA(86.71009164153801, 1.0496066396428194, 68.77377342409739),
    new LABA(83.78773993319211, 5.248231820098425, 78.92920457852716),
    new LABA(81.52191382080228, 9.403655370707199, 82.69257112982746),
    new LABA(78.17240973804697, 16.628512886531887, 81.09358318806208),
    new LABA(73.80899654381052, 26.53614315250874, 78.21754052181723),
    new LABA(70.1134511665764, 35.3007623359744, 75.87510992138593),
    new LABA(63.86460405565717, 50.94648214505959, 72.17815682124423)
  ],
  [
    new LABA(96.30459517801387, 0.923151172282477, 10.598439446083074),
    new LABA(90.68320082865087, 4.103774964681062, 26.485793721916128),
    new LABA(85.00055287186233, 9.047181758866651, 44.51407622580792),
    new LABA(79.42428495742953, 16.452610724439875, 62.08721739074201),
    new LABA(75.47792699289774, 23.395742928451867, 72.64347611236501),
    new LABA(72.04246561548388, 30.681921012382098, 77.08579298904603),
    new LABA(68.94724338946975, 35.22014778433863, 74.88425044595111),
    new LABA(64.83017495535229, 40.91200730099703, 71.9596053545428),
    new LABA(60.8534207471871, 46.41483590510681, 69.18061963415211),
    new LABA(54.77571742962287, 55.282751019360035, 65.10193403547922)
  ],
  [
    new LABA(93.69219844671957, 5.763979334358293, 3.1700162796469034),
    new LABA(86.04629434276428, 15.750843803958192, 14.828476927090994),
    new LABA(77.54010042938336, 27.90113842540043, 25.99645229289065),
    new LABA(69.74095456707857, 41.14487377552256, 39.443320178900024),
    new LABA(64.37085344539341, 51.890379620443575, 50.81312471046415),
    new LABA(60.06780837277435, 61.65258736118817, 61.54771829165221),
    new LABA(57.28707915232363, 60.3250664308812, 60.07341536376447),
    new LABA(53.810052616293845, 58.36760943780162, 58.19586806694884),
    new LABA(50.301352405105874, 56.40104898089937, 55.924141992404344),
    new LABA(43.86477994548343, 52.970887703910726, 52.30067989225532)
  ],
  [
    new LABA(93.29864888069987, 0.9915456090475727, 1.442353076378411),
    new LABA(82.80884359004081, 3.116221903342209, 3.3523059451463055),
    new LABA(70.95493047668185, 5.469742193344784, 5.449009494553492),
    new LABA(58.712934619103066, 7.990991075363385, 8.352488495367627),
    new LABA(49.150208552875895, 10.570984981000397, 10.831440151197924),
    new LABA(39.63200151837749, 13.138881961627241, 13.531574711511885),
    new LABA(35.600996682015754, 12.40352847757295, 12.10432183902449),
    new LABA(30.084271265759952, 11.317148149878081, 10.547484304296217),
    new LABA(24.555014696416578, 10.816613316782464, 8.506555306791984),
    new LABA(18.35055226514404, 10.225725550338765, 7.058582769882571)
  ],
  [
    new LABA(98.27202740980219, - 0.000016418393644634932, 0.000006567357457853973),
    new LABA(96.53749336548567, - 0.00001616917905122861, 0.000006467671598286984),
    new LABA(94.0978378987781, - 0.00001581865383126768, 0.000006327461532507073),
    new LABA(89.17728373493613, - 0.00001511167768697419, 0.000006044671074789676),
    new LABA(76.61119902231323, - 0.00001330620591488696, 0.000005322482343750323),
    new LABA(65.11424774127516, - 0.000011654345155598378, 0.000004661738062239351),
    new LABA(49.238989620828065, - 0.000009373417431124409, 0.0000037493669724497636),
    new LABA(41.14266843804848, - 0.000008210152946386273, 0.0000032840611896567395),
    new LABA(27.974857206003705, - 0.000006318226192236764, 0.0000025272904768947058),
    new LABA(12.740011331302725, - 0.000004129311698131133, 0.0000016517246792524531)
  ],
  [
    new LABA(94.27665212516236, - 0.637571046109342, - 1.313515378996688),
    new LABA(85.77788001492097, - 2.2777811084512822, - 3.0177758416151557),
    new LABA(76.12296325015231, - 3.401502988883809, - 5.16867892977908),
    new LABA(66.16340108908365, - 4.819627183079045, - 7.520697631614404),
    new LABA(58.35752478513645, - 5.7195089100892105, - 9.165988916613488),
    new LABA(50.70748082202715, - 6.837992965799455, - 10.956055112409357),
    new LABA(44.85917867647632, - 6.411990559239578, - 9.74511982878765),
    new LABA(36.92458930566504, - 5.319878610845596, - 8.341943474561553),
    new LABA(29.115334784637618, - 4.168907828645069, - 6.8629962199973304),
    new LABA(19.958338450799914, - 3.3116721453186617, - 5.4486142104736786)
  ]
],
  Ld = [
    2.048875457,
    5.124792061,
    8.751659557,
    12.07628774,
    13.91449542,
    15.92738893,
    15.46585818,
    15.09779227,
    15.13738673,
    15.09818372
  ],
  Md = [
    1.762442714,
    4.213532634,
    7.395827458,
    11.07174158,
    13.89634504,
    16.37591477,
    16.27071136,
    16.54160806,
    17.35916727,
    19.88410864
  ];
var Nd = new RGBA(1, 1, 1, 1),
  Od = new RGBA(1, 1, 1, 0.6),
  Pd = new RGBA(1, 1, 1, 0.38),
  Qd = {
  },
  Rd = (Qd.HIGH = Nd, Qd.MEDIUM = Od, Qd.DISABLED = Pd, Qd),
  Sd = new RGBA(0, 0, 0, 0.87),
  Td = new RGBA(0, 0, 0, 0.6),
  Ud = new RGBA(0, 0, 0, 0.38),
  Vd = {
  },
  Wd = (Vd.HIGH = Sd, Vd.MEDIUM = Td, Vd.DISABLED = Ud, Vd);
function Xd(a) {
  var b = void 0 === b ? 4.5 : b;
  var c = rd(wd, a);
  if (c >= b) return 0;
  a = rd(xd, a);
  return a >= b ? 1 : c > a ? 0 : 1
};
function createMaterialPalette(a) {
  var b = void 0 === b ? Kd : b;
  // a is an RGBA color
  var c = RGBAtoLABA(a),
    d = Yd(c, b);
  b = d.fd;
  d = d.ed;
  var e = b[d],
    l = LABAtoLCH(e),
    h = LABAtoLCH(c),
    g = 30 > LABAtoLCH(b[5]).chroma,
    f = l.g - h.g,
    m = l.chroma - h.chroma,
    n = l.hue - h.hue,
    u = Ld[d], // VALUE FROM TABLE 1
    q = Md[d], // VALUE FROM TABLE 2
    p = 100;
  return b.map(function (x, i) {
    if (x === e) return p = Math.max(h.g - 1.7, 0),
      a;
    x = LABAtoLCH(x);
    var y = x.g - Ld[i] / u * f;
    y = Math.min(y, p);
    i = new LCHA(minMax(y, 0, 100), Math.max(0, g ? x.chroma - m : x.chroma - m * Math.min(Md[i] / q, 1.25)), (x.hue - n + 360) % 360);
    p = Math.max(i.g - 1.7, 0);
    x = i.hue * Math.PI / 180;
    i = new LABA(i.g, i.chroma * Math.cos(x), i.chroma * Math.sin(x), i.alpha);
    var z = (i.g + 16) / 116;
    x = 0.95047 * partLABAtoXYZA(z + i.A / 500);
    y = 1 * partLABAtoXYZA(z);
    z = 1.08883 * partLABAtoXYZA(z - i.B / 200);
    return new RGBA(minMax(partXYZAtoLABA(3.2404542 * x + - 1.5371385 * y + - 0.4985314 * z), 0, 1), minMax(partXYZAtoLABA(- 0.969266 * x + 1.8760108 * y + 0.041556 * z), 0, 1), minMax(partXYZAtoLABA(0.0556434 * x + - 0.2040259 * y + 1.0572252 * z), 0, 1), i.alpha)
  })
}
function Yd(inputColor, inputPalette) {
  inputPalette = void 0 === inputPalette ? Kd : inputPalette;
  if (!inputPalette.length || !inputPalette[0].length) throw Error('Invalid golden palettes');
  for (var c = Infinity, d = inputPalette[0], e = - 1, l = 0; l < inputPalette.length; l++) for (var h = 0; h < inputPalette[l].length && 0 < c; h++) {
    // CIEDE2000 LAB color difference
    var g = inputPalette[l][h],
      f = (g.g + inputColor.g) / 2,
      // Distance from g.A to g.B
      c = Math.sqrt(Math.pow(g.A, 2) + Math.pow(g.B, 2)),
      // Distance from inputColor.A to inputColor.B
      n = Math.sqrt(Math.pow(inputColor.A, 2) + Math.pow(inputColor.B, 2)),
      // Avg of distances
      u = (c + n) / 2;
    u = 0.5 * (1 - Math.sqrt(Math.pow(u, 7) / (Math.pow(u, 7) + Math.pow(25, 7))));
    var q = g.A * (1 + u),
      p = inputColor.A * (1 + u),
      // LAB to LCH `C` factor on g with `A` from `q`
      r = Math.sqrt(Math.pow(q, 2) + Math.pow(g.B, 2)),
      // LAB to LCH `C` factor on inputColor with `A` from `p`
      t = Math.sqrt(Math.pow(p, 2) + Math.pow(inputColor.B, 2));
    u = t - r;
    var v = (r + t) / 2;
    q = inverseTangent360(g.B, q);
    p = inverseTangent360(inputColor.B, p);
    r = 2 * Math.sqrt(r * t) * Math.sin((0.0001 > Math.abs(c) || 0.0001 > Math.abs(n) ? 0 : 180 >= Math.abs(p - q) ? p - q : p <= q ? p - q + 360 : p - q - 360) / 2 * Math.PI / 180);
    c = 0.0001 > Math.abs(c) || 0.0001 > Math.abs(n) ? 0 : 180 >= Math.abs(p - q) ? (q + p) / 2 : 360 > q + p ? (q + p + 360) / 2 : (q + p - 360) / 2;
    n = 1 + 0.045 * v;
    t = 1 + 0.015 * v * (1 - 0.17 * Math.cos((c - 30) * Math.PI / 180) + 0.24 * Math.cos(2 * c * Math.PI / 180) + 0.32 * Math.cos((3 * c + 6) * Math.PI / 180) - 0.2 * Math.cos((4 * c - 63) * Math.PI / 180));
    g = Math.sqrt(Math.pow((inputColor.g - g.g) / (1 + 0.015 * Math.pow(f - 50, 2) / Math.sqrt(20 + Math.pow(f - 50, 2))), 2) + Math.pow(u / (1 * n), 2) + Math.pow(r / (1 * t), 2) + u / (1 * n) * Math.sqrt(Math.pow(v, 7) / (Math.pow(v, 7) + Math.pow(25, 7))) * Math.sin(60 * Math.exp(- Math.pow((c - 275) / 25, 2)) * Math.PI / 180) * - 2 * (r / (1 * t)));
    g < c && (c = g, d = inputPalette[l], e = h)
  }
  return {
    fd: d,
    ed: e
  }
};
createMaterialPalette(wd);
va.__materialGlobalErrorHandler || (va.__materialGlobalErrorHandler = function (a) {
  throw a;
});
function Zd(a) {
  for (var b = [
  ], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
  return b.reduce(function (d, e) {
    return 'string' === typeof e ? d.concat(e) : e && e[1] ? d.concat(e[0]) : d
  }, [
  ]).join(' ')
};
var $d = function (a) {
  this.app = a
};
var ae = function (a, b) {
  this.la = a;
  this.Aa = b;
  this.Ga = !1
},
  be = function (a) {
    a.Ga || (document.addEventListener('mousemove', a.la), document.addEventListener('mouseup', a.Aa), a.Ga = !0)
  };
ae.prototype.detach = function () {
  this.Ga && (document.removeEventListener('mousemove', this.la), document.removeEventListener('mouseup', this.Aa), this.Ga = !1)
};
var ce = function (a, b) {
  a.preventDefault();
  var c = a.clientX,
    d = a.clientY,
    e = function (h) {
      if (c !== h.clientX || d !== h.clientY) c = h.clientX,
        d = h.clientY,
        b.la(h.clientX, h.clientY)
    };
  var l = new ae(e, function (h) {
    e(h);
    l.detach();
    b.Aa()
  });
  be(l);
  b.la(a.clientX, a.clientY);
  return l
};
var de = [
  '\n    <div class="',
  '" style="',
  '">\n      <div class="',
  '" style="',
  '"></div>\n    </div>\n  '
];
de.raw = de.slice();
var ee = [
  '\n      <div class="color-palette-picker__cell"\n          title="',
  '"\n          style="',
  '"\n          @click="',
  '">\n        ',
  '\n      </div>\n    '
];
ee.raw = ee.slice();
var fe = [
  '\n    <div class="color-palette-picker__row">\n      ',
  '\n    </div>\n  '
];
fe.raw = fe.slice();
function ge(a) {
  var b = a.nc,
    c = a.oc,
    d = a.selectedColor,
    e = a.kc;
  a = b.map(function (l, h) {
    var g = void 0 !== d && l.La(d);
    if (0 > h || 9 < h) throw new RangeError('colorIndex must be between 0 and 9, inclusive');
    return he(l, g, 0 === h ? 50 : 100 * h, c, function () {
      e(b, h)
    })
  }).reverse();
  return Q(fe, a)
}
function he(a, b, c, d, e) {
  var l = J({
    'background-color': a.toCssString()
  });
  b ? (b = J({
    left: '50%',
    top: '50%'
  }), a = J({
    'background-color': a.toCssString()
  }), a = Q(de, 'color-palette-picker__thumb', b, 'color-palette-picker__thumb__inner', a)) : a = void 0;
  return Q(ee, d + ' ' + c, l, e, a)
};
var ie = new WeakMap;
function je(a, b) {
  a.Va && ie.set(a.Va, b)
}
function ke(a) {
  return function (b) {
    var c = b.options;
    if (!c.Va) throw Error('No render context is available to retrieve a lifecycle for');
    c = ie.get(c.Va);
    if (!c) throw Error('No renderer is registered for the given context key');
    a(b, c)
  }
};
var le = function (a, b, c, d) {
  var e = this;
  this.Kb = a;
  this.ga = b;
  this.store = c;
  this.pd = d;
  this.uc = {
    Va: Object.create(null)
  };
  this.hd = this.isRendering = !1;
  je(this.uc, this);
  c.subscribe(function () {
    var l = e.store.getState();
    l !== e.nd && (e.nd = l, e.I())
  })
};
le.prototype.I = function () {
  var a = this;
  this.isRendering && console.warn('render() called during a render(). This is probably a bug.');
  return this.pa ? this.pa : this.pa = Promise.resolve().then(function () {
    if (!a.hd) try {
      a.isRendering = !0;
      try {
        var b = a.ga.I(a.store.getState()),
          c = a.Kb,
          d = a.uc,
          e = Ic.get(c);
        void 0 === e && (Cb(c, c.firstChild), Ic.set(c, e = new pc(Object.assign({
          Ad: Gc
        }, d))), d = e, d.S = c.appendChild(P()), d.v = c.appendChild(P()));
        e.w(b);
        e.K()
      } catch (l) {
        va.__materialGlobalErrorHandler(l)
      } finally {
        a.isRendering = !1
      }
      a.pd(a.Kb)
    } finally {
        a.pa = void 0
      }
  })
};
function me(a) {
  return function () {
    return function (b) {
      return ne(b, a)
    }
  }
}
function ne(a, b) {
  return function (c) {
    var d = a(c);
    b(c);
    return d
  }
};
var pe = function (a, b, c, d, e) {
  var l = this;
  e = void 0 === e ? [
  ] : e;
  this.sa = d;
  this.Eb = oe(this);
  this.nb = {
    width: 0,
    height: 0
  };
  this.ud = a(this.Eb);
  this.store = this.createStore(c, [
    me(function (h) {
      l.sa.actionDispatched(h)
    })
  ].concat(e));
  this.wc = new le(b, this.ud, this.store, function (h) {
    if (h.scrollWidth !== l.nb.width || h.scrollHeight !== l.nb.height) h = {
      width: h.scrollWidth,
      height: h.scrollHeight
    },
      l.sa.panelSizeChanged(h),
      l.nb = h
  })
};
pe.prototype.start = function () {
  this.sa.stateChanged(this.store.getState());
  return this.I()
};
pe.prototype.I = function () {
  return this.wc.I()
};
pe.prototype.createStore = function (a, b) {
  var c = this;
  b = Redux.applyMiddleware.apply(Redux, ma(b));
  var d = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose,
    e = this.getInitialState(),
    l = Redux.createStore(a, e, d(b));
  l.subscribe(function () {
    c.sa.stateChanged(l.getState())
  });
  return l
};
pe.prototype.getInitialState = function () {
  return this.sa.getInitialState()
};
var oe = function (a) {
  return {
    dispatch: function (b) {
      b = y(Array.isArray(b) ? b : [
        b
      ]);
      for (var c = b.next(); !c.done; c = b.next()) a.store.dispatch(c.value)
    },
    I: function () {
      a.wc.I()
    }
  }
};
function qe(a) {
  return {
    type: 'SET_PRIMARY_COLOR_PICKER',
    color: a
  }
}
function re(a) {
  return {
    type: 'COPY_TO_CLIPBOARD',
    selectedColor: a
  }
};
function se(a) {
  var b = {
  },
    c = {
      J: function (d, e) {
        var l = window;
        l.gtag && l.gtag('event', d, {
          event_category: 'inline color tool',
          event_label: e
        })
      },
      Cd: function (d, e) {
        var l = this;
        b[d] || (b[d] = Ma(function (h, g) {
          l.J(h, g)
        }));
        b[d](d, e)
      }
    };
  return function (d) {
    return function (e) {
      return function (l) {
        a(d.getState(), l, c);
        return e(l)
      }
    }
  }
};
function te() {
  return se(function (a, b, c) {
    switch (b.type) {
      case 'COPY_TO_CLIPBOARD':
        b.selectedColor && c.J('copy to clipboard');
        break;
      case 'OPEN_EXTERNAL_COLOR_TOOL':
        c.J('open external color tool');
        break;
      case 'REMOVE_SECONDARY_COLOR':
        c.J('remove secondary color');
        break;
      case 'SET_PRIMARY_COLOR_PICKER':
        c.J('set primary color picker');
        break;
      case 'SET_PRIMARY_HEX_INPUT':
        c.J('set primary hex input field');
        break;
      case 'SET_PRIMARY_HEX_COLOR':
        c.J('set primary hex color');
        break;
      case 'SET_SECONDARY_COLOR_PICKER':
        c.J('set secondary color picker');
        break;
      case 'SET_SECONDARY_HEX_INPUT':
        c.J('set secondary hex input field');
        break;
      case 'SET_SECONDARY_HEX_COLOR':
        c.J('set secondary hex color');
        break;
      case 'SHOW_SECONDARY_COLOR_PICKER':
        c.J('show secondary color picker')
    }
  })
};
var ue = '\n      <div class="mdc-text-field">\n        <input type=text\n          id=";"\n          class="mdc-text-field__input"\n          maxlength=";"\n          aria-label=";"\n          .value=";"\n          @input=";"\n          @change=";"\n          autocorrect="off"\n          autocomplete="off"\n          spellcheck="false">\n      <span class="mdc-text-field__hex">#</span>\n      <div class="mdc-line-ripple"></div>\n      </div>'.split(';');
ue.raw = ue.slice();
function ve(a) {
  var b = a.value,
    c = a.bd,
    d = a.ob,
    e = a.Qa;
  return Q(ue, a.id, Jc(a.maxLength), Jc(c), b, e, d)
};
var we = [
  '\n    <div class="',
  '" style="',
  '">\n      <div class="',
  '" style="',
  '"></div>\n    </div>\n  '
];
we.raw = we.slice();
var xe = [
  '\n      <div class="color-picker-inputs__swatch ',
  '" style="',
  '">\n      </div>\n      <div class="color-picker-inputs_hex">\n        ',
  '\n      </div>\n    '
];
xe.raw = xe.slice();
var ye = '\n      <div class="color-picker">\n        <div class="color-picker-satval" @mousedown=";">\n          <div class="color-picker-satval__mask">\n            <div class="color-picker-satval__fill" style=";"></div>\n            <div class="color-picker-satval__saturation"></div>\n            <div class="color-picker-satval__value"></div>\n          </div>\n          ;\n        </div>\n\n        <div class="color-picker-hue" @mousedown=";">\n          <div class="color-picker-hue__gradient"></div>\n          ;\n        </div>\n\n        <div class="color-picker-inputs">\n          ;\n        </div>\n      </div>\n    '.split(';');
ye.raw = ye.slice();
var ze = function () {
  $d.apply(this, arguments);
  this.jd = 'goog_' + lb++
};
A(ze, $d);
var Ae = function (a, b, c) {
  a.ha && a.ha.detach();
  var d = b.currentTarget;
  a.ha = ce(b, {
    la: function (e, l) {
      var h = d.getBoundingClientRect();
      e = new HSVA(c.hue, minMax((e - h.left) / h.width, 0, 1), 1 - minMax((l - h.top) / h.height, 0, 1), c.alpha);
      a.Nb(e)
    },
    Aa: function () {
      a.ha = void 0;
      a.Mb()
    }
  })
},
  Be = function (a, b, c) {
    a.ha && a.ha.detach();
    var d = b.currentTarget;
    a.ha = ce(b, {
      la: function (e) {
        var l = d.getBoundingClientRect();
        e = new HSVA(360 * minMax((e - l.left) / l.width, 0, 1), c.saturation, c.value, c.alpha);
        a.Nb(e)
      },
      Aa: function () {
        a.ha = void 0;
        a.Mb()
      }
    })
  };
ze.prototype.I = function (a) {
  var b = this,
    c = a.color,
    d = a.Qa;
  this.Mb = a.ob;
  this.Nb = d;
  d = c.hue / 360 * 100;
  var e = 100 * c.saturation,
    l = 100 - 100 * c.value,
    h = X(new HSVA(c.hue, 1, 1)),
    g = X(c);
  e = Ce({
    ib: 'color-picker-satval__thumb',
    color: g,
    ic: e,
    Dc: l
  });
  d = Ce({
    ib: 'color-picker-hue__thumb',
    color: h,
    ic: d,
    Dc: 50
  });
  h = J({
    'background-color': 'hsl(' + c.hue + ', 100%, 50%)'
  });
  return Q(ye, function (f) {
    Ae(b, f, c)
  }, h, e, function (f) {
    Be(b, f, c)
  }, d, De(this, a))
};
var De = function (a, b) {
  var c = b.color,
    d = b.cc,
    e = b.lc;
  b = X(c);
  a = ve({
    id: '' + a.jd,
    value: void 0 !== d ? d : V(b),
    ib: 'inline-text-field-container',
    maxLength: 6,
    bd: 'Hex code',
    Qa: e && function (l) {
      e(l.target.value)
    }
  });
  d = J({
    'background-color': '#' + V(b)
  });
  c = 0.6 < Ad(c).g ? 'color-picker-inputs__swatch--selected' : '';
  return Q(xe, c, d, a)
};
function Ce(a) {
  var b = a.ib,
    c = a.color;
  a = J({
    left: a.ic + '%',
    top: a.Dc + '%'
  });
  c = J({
    'background-color': c.toCssString()
  });
  return Q(we, b, a, b + '__inner', c)
};
function Ee(a, b) {
  return !(a.length === b.length && b.every(function (c, d) {
    return c === a[d]
  }))
};
var Ge = function (a, b, c) {
  return Fe(a, b, c, function (d) {
    if (!d.classList.contains('mdc-ripple-upgraded')) return new nd(d)
  })
},
  Fe = function (a) {
    var b = new WeakMap;
    return zb(function (c, d, e, l) {
      d = void 0 === d ? [
      ] : d;
      return ke(function (h, g) {
        h.w(c);
        for (var f = h.S.nextSibling, m, n = !1; f && f !== h.v;) f instanceof Element && b.has(f) && (m = b.get(f)) && (n = Ee(m.Qb, d)) && m.ga.Ka(),
          f = f.nextSibling;
        (g.pa || Promise.resolve()).then(function () {
          for (f = h.S.nextSibling; f && f !== h.v;) {
            if (f instanceof Element) {
              if (!m) m = {
                ga: new a(f),
                Qb: d
              },
                b.set(f, m),
                e && e(f, m.ga);
              else if (l) {
                var u = l(f, m.ga);
                u && (m.ga = u, b.set(f, m))
              }
              n && m && (m.ga = new a(f), m.Qb = d, b.set(f, m))
            }
            f = f.nextSibling
          }
        })
      })
    })
  }(nd);
var He = [
  '\n      <div id="',
  '" class="',
  '"\n          @transitionend="',
  '">\n        ',
  '\n      </div>\n    '
];
He.raw = He.slice();
var Ie = function () {
};
function Je(a) {
  var b = 'goog_' + lb++,
    c = Ie,
    d = function (e) {
      var l = e.target;
      l.id === b && (a.mc && a.mc(e), l.classList.contains(a.dc) && c())
    };
  return function (e) {
    var l = zb(function () {
      return function (g) {
        var f = g.S.nextSibling === g.v;
        e ? (c = Ie, g.w(e)) : f || (f = new Promise(function (m) {
          c = function () {
            m(void 0)
          }
        }), g.w(Lc(f, N)))
      }
    })(),
      h = Zd(a.gd, [
        a.Bc || '',
        !!a.Bc && !!e
      ], [
        a.dc,
        !e
      ]);
    return Q(He, b, h, d, l)
  }
};
var Ke = [
  '\n      <input type="text" id="clipboardcopy" readonly>\n      <div class="color-tool">\n        <div class="color-tool__content">\n          <span class="color-tool__label">Color palettes</span>\n            ',
  '\n          <div class="color-tool__clipboard">\n            ',
  '\n          </div>\n          </div>\n        <div class="utility-panel">\n          ',
  '\n        </div>\n      </div>\n      <div class="mobile-message">\n        <div class="mobile-message__logo-container">\n          <div class="mobile-message__logo"></div>\n        </div>\n        <div class="mobile-message__title">\n          <i class="mobile-message__title-icon material-icons">info_outline</i>\n          <span class="mobile-message__title-message">\n            Demos only available at larger screen size\n          </span>\n        </div>\n      </div>\n    '
];
Ke.raw = Ke.slice();
var Le = [
  '<div class="clipboard-confirmation ',
  '" @animationend="',
  '">Color copied to clipboard</div>'
];
Le.raw = Le.slice();
var Me = [
  '\n      <div class="color-picker-panel__remove">\n        ',
  '\n      </div>\n    '
];
Me.raw = Me.slice();
var Ne = [
  '\n          <button class="color-picker-panel__remove-button mdc-ripple-surface"\n              ?disabled="',
  '"\n              @click="',
  '">\n            <i class="material-icons">format_color_reset</i>\n            <span>Remove color</span>\n          </button>\n        '
];
Ne.raw = Ne.slice();
var Oe = [
  '\n        <div class="color-picker-panel__container">\n          <div class="color-picker-panel">\n            <div class="color-picker-panel__swatch-selector">\n              ',
  '\n            </div>\n            ',
  '\n            ',
  '\n          </div>\n        </div>\n      </div>\n    '
];
Oe.raw = Oe.slice();
var Pe = [
  '\n      <div class="secondary-color-picker__entry"\n          @click="',
  '">\n              <span class="secondary-color-picker__signifier">+</span>\n      </div>\n        '
];
Pe.raw = Pe.slice();
var Qe = [
  '\n        <div class="color-picker-panel">\n        <div class="color-picker-panel__swatch-selector">\n          ',
  '\n        </div>\n        ',
  '\n      </div>\n      </div>\n        '
];
Qe.raw = Qe.slice();
var Re = '\n      <div class="primary-color-picker">\n        <span class="primary-color-picker__label">Primary color</span>\n        ;\n        </div>\n      <div class="secondary-color-picker">\n        <span class="secondary-color-picker__label">Secondary color</span>\n        <div class="color-picker-panel">\n        ;\n        ;\n        </div>\n        </div>\n      <div class="external__component">\n        <a class="external__link"\n            href=";"\n            target="_blank"\n            @click=;>\n          <span class="external__logo">View in color tool</span>\n        </a>\n        <div class="external-copy">\n          See selected colors applied to UI and check accessibility\n        </div>\n      </div>\n    '.split(';');
Re.raw = Re.slice();
var Se = [
  '',
  ''
];
Se.raw = Se.slice();
var Te = [
  '',
  ''
];
Te.raw = Te.slice();
var Ue = [
  '<div class="color-palette__color-weight-label">',
  '</div>'
];
Ue.raw = Ue.slice();
var Ve = [
  '<div class="color-palette__label">',
  '</div>'
];
Ve.raw = Ve.slice();
var We = [
  '\n      <div class="color-palette__row">\n        ',
  '\n      </div>\n    '
];
We.raw = We.slice();
var Xe = '\n      <div\n          class="color-palette__cell ; ;"\n          style=";"\n          @click=";">\n        <span class="color-palette__swatch-label">;</span>\n        <div class="color-palette__cell-hex-value">#;</div>\n        ;\n      </div>\n    '.split(';');
Xe.raw = Xe.slice();
var Ye = [
  '<div class="color-palette__ripple mdc-ripple-surface"></div>'
];
Ye.raw = Ye.slice();
var Ze = '900 800 700 600 500 400 300 200 100 50'.split(' '),
  $e = /^[a-fA-F0-9]{3,6}$/,
  af = Cd(vd('6202EE')),
  bf = Cd(vd('FFF')),
  cf = function (a) {
    this.app = a;
    var b = this;
    this.vc = Je({
      gd: 'color-picker-panel',
      dc: 'color-picker-panel--hide',
      Bc: 'color-picker-panel--show',
      mc: function () {
        b.Ob && b.Ob.Oa()
      }
    });
    this.qd = new ze(a);
    this.vd = new ze(a)
  };
A(cf, $d);
var df = function (a, b, c, d) {
  var e = b ? 'color-palette__cell--selected' : '';
  b = b && d ? d.charAt(0) : '';
  d = 0 === Xd(a) ? 'ripple-white' : '';
  var l = Ge(Q(Ye)),
    h = a.toCssString();
  if (a) {
    var g = 0 === Xd(a) ? Rd.HIGH : Wd.HIGH,
      f = g.alpha;
    var m = void 0 === m ? 1 : m;
    for (var n = qd(a), u = f - 0.01, q = m; 0.01 < q - u;) {
      var p = (u + q) / 2;
      4.5 > rd(Math.abs(g.alpha - p) < T ? g : new RGBA(g.red, g.green, g.blue, p), n) ? u = p : q = p
    }
    m = (new RGBA(g.red, g.green, g.blue, minMax(q, f, m))).toCssString()
  } else m = 'rgba(255, 255, 255, 0.6)';
  m = J({
    'background-color': h,
    color: m
  });
  return Q(Xe, e, d, m, c, b, V(a), l)
},
  ef = function (a, b, c, d) {
    var e = a.map(function (l, h) {
      var g = c.some(function (f) {
        return l.La(f)
      });
      return df(l, g, function () {
        b(a, h)
      }, d)
    });
    e.reverse();
    return Q(We, e)
  },
  ff = function (a, b, c, d, e) {
    var l = [
    ];
    l.push(Q(Ve, b));
    c.reduce(function (h, g) {
      h.push(ef(g, function (f, m) {
        f = '#' + V(f[m]);
        if (m = document.querySelector('#clipboardcopy')) m.value = f,
          m.select(),
          document.execCommand('copy'),
          a.app.dispatch(re(f))
      }, d, e));
      return h
    }, l);
    Ze.reduce(function (h, g) {
      h.push(Q(Ue, g));
      return h
    }, l);
    return l
  },
  createMaterialPalettes = function (a) {
    // Takes an array of 2 colors and transforms it in 2 arrays, with every
    // swatch for every one of the 2 colors.
    var b = [
    ],
      c = [
      ];
    a = y(a);
    for (var d = a.next(); !d.done; d = a.next()) d = td(d.value),
      b.push(d),
      c.push(createMaterialPalette(d));
    return {
      yc: b,
      pc: c
    }
  },
  hf = function (a, b) {
    var c = [
    ];
    c.push(ff(a, 'Primary', [
      createMaterialPalette(b)
    ], [
      b
    ], 'PRIMARY'));
    var d = td(zd(b).rotate(180));
    c.push(ff(a, 'Complementary', [
      createMaterialPalette(d)
    ], [
      d
    ]));
    d = zd(b);
    d = [
      d.rotate(- 30),
      d.rotate(30)
    ];
    d = createMaterialPalettes(d);
    c.push(ff(a, 'Analogous', d.pc, d.yc));
    b = zd(b);
    b = [
      b.rotate(60),
      b.rotate(120)
    ];
    b = createMaterialPalettes(b);
    c.push(ff(a, 'Triadic', b.pc, b.yc));
    return Q(Te, c)
  },
  jf = function (a, b, c) {
    c || (c = new RGBA(1, 1, 1));
    var d = [
    ];
    d.push(ff(a, 'Primary', [
      createMaterialPalette(b)
    ], [
      b
    ], 'PRIMARY'));
    d.push(ff(a, 'Secondary', [
      createMaterialPalette(c)
    ], [
      c
    ], 'SECONDARY'));
    return Q(Se, d)
  },
  nf = function (a, b) {
    var c = b.pb;
    b = b.Ca;
    var d = X(c.color),
      e = b.color && X(b.color);
    d = '/tools/color/#!/?view.left=0&view.right=0&primary.color=' + V(d) + (e ? '&secondary.color=' + V(e) : '');
    c = kf(a, c);
    e = lf(a);
    b = b.jb ? mf(a, b, b.color) : a.vc();
    return Q(Re, c, e, b, d, function () {
      a.app.dispatch({
        type: 'OPEN_EXTERNAL_COLOR_TOOL'
      })
    })
  },
  kf = function (a, b) {
    var c = X(b.color),
      d = function (e) {
        a.app.dispatch(qe(e))
      };
    b = a.qd.I(Object.assign({
    }, b, {
      Qa: d,
      cc: b.M,
      ob: function () {
      },
      lc: function (e) {
        !$e.test(e) || 3 !== e.length && 6 !== e.length || a.app.dispatch({
          type: 'SET_PRIMARY_HEX_COLOR',
          color: Cd(vd(e))
        });
        a.app.dispatch({
          type: 'SET_PRIMARY_HEX_INPUT',
          hex: e
        })
      }
    }));
    c = ge({
      oc: 'Primary',
      nc: createMaterialPalette(c),
      kc: function (e, l) {
        d(Cd(e[l]))
      },
      selectedColor: c
    });
    return Q(Qe, c, b)
  },
  lf = function (a) {
    return Q(Pe, function () {
      a.app.dispatch({
        type: 'SHOW_SECONDARY_COLOR_PICKER'
      })
    })
  },
  mf = function (a, b, c) {
    c = X(c);
    var d = function (l) {
      a.app.dispatch({
        type: 'SET_SECONDARY_COLOR_PICKER',
        color: l
      })
    },
      e = createMaterialPalette(c);
    b = a.vd.I({
      color: b.color ? b.color : new HSVA(0, 0, 1),
      Qa: d,
      cc: b.M,
      ob: function () {
      },
      lc: function (l) {
        !$e.test(l) || 3 !== l.length && 6 !== l.length || a.app.dispatch({
          type: 'SET_SECONDARY_HEX_COLOR',
          color: Cd(vd(l))
        });
        a.app.dispatch({
          type: 'SET_SECONDARY_HEX_INPUT',
          hex: l
        })
      }
    });
    c = ge({
      oc: 'Secondary',
      nc: e,
      kc: function (l, h) {
        d(Cd(l[h]))
      },
      selectedColor: c
    });
    return a.vc(Q(Oe, c, b, of(a)))
  },
  of = function (a) {
    var b = Ge(Q(Ne, !1, function () {
      a.app.dispatch({
        type: 'REMOVE_SECONDARY_COLOR'
      })
    }), void 0, function (c, d) {
      a.Ob = d
    });
    return Q(Me, b)
  };
cf.prototype.I = function (a) {
  var b = this,
    c = X(a.pb.color),
    d = a.Ca.color && X(a.Ca.color);
  c = a.Ca.color ? jf(this, c, d) : hf(this, c);
  d = Q(Le, a.Ib.Jb ? 'clipboard-confirmation--visible' : '', function () {
    b.app.dispatch(re(''))
  });
  a = nf(this, a);
  return Q(Ke, c, d, a)
};
function pf(a, b) {
  var c = a.Ib;
  c = void 0 === c ? {
    Jb: ''
  }
    : c;
  switch (b.type) {
    case 'COPY_TO_CLIPBOARD':
      c = Object.assign({
      }, c, {
        Jb: b.selectedColor
      })
  }
  return {
    Ib: c,
    pb: qf(a.pb, b),
    Ca: rf(a.Ca, b)
  }
}
function qf(a, b) {
  a = void 0 === a ? {
    color: bf,
    M: V(X(bf))
  }
    : a;
  switch (b.type) {
    case 'SET_PRIMARY_COLOR_PICKER':
      return Object.assign({
      }, a, {
        color: b.color,
        M: V(X(b.color))
      });
    case 'SET_PRIMARY_HEX_COLOR':
      return Object.assign({
      }, a, {
        color: b.color
      });
    case 'SET_PRIMARY_HEX_INPUT':
      return Object.assign({
      }, a, {
        M: b.hex
      });
    default:
      return a
  }
}
function rf(a, b) {
  a = void 0 === a ? {
    color: void 0,
    M: V(X(bf)),
    jb: !1
  }
    : a;
  switch (b.type) {
    case 'SHOW_SECONDARY_COLOR_PICKER':
      return Object.assign({
      }, a, {
        color: bf,
        jb: !0
      });
    case 'SET_SECONDARY_COLOR_PICKER':
      return Object.assign({
      }, a, {
        color: b.color,
        M: V(X(b.color))
      });
    case 'SET_SECONDARY_HEX_COLOR':
      return Object.assign({
      }, a, {
        M: a.M,
        color: b.color
      });
    case 'SET_SECONDARY_HEX_INPUT':
      return Object.assign({
      }, a, {
        M: b.hex
      });
    case 'REMOVE_SECONDARY_COLOR':
      return Object.assign({
      }, a, {
        color: void 0,
        M: V(X(bf)),
        jb: !1
      });
    default:
      return a
  }
}
;
var sf = function (a, b) {
  pe.call(this, function (c) {
    return new cf(c)
  }, a, pf, b, [
    te()
  ])
};
A(sf, pe);
var tf = window;
tf.__MATERIAL = Object.assign({
}, tf.__MATERIAL, {
  buildVersion: '276519738'
});
var uf = [
  'https://material-io-project.appspot.com',
  'https://material.io',
  'https://m2-spec.appspot.com',
  'https://spec.googleplex.com'
];
function vf(a, b) {
  var c = a();
  c.start();
  var d = !1;
  window.addEventListener('message', function (e) {
    uf.includes(e.origin);
    e.data.animate && !d && (d = !0, b(c), e = window, e.gtag && e.gtag('event', 'tool view', {
      event_category: 'inline color tool'
    }))
  })
};
function wf() {
  return {
    handleError: function (a) {
      console.error(a)
    },
    log: function (a) {
      for (var b = [
      ], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
      console.log.apply(console, ma(b))
    },
    getInitialState: function () {
      return {
      }
    },
    actionDispatched: function () {
    },
    panelSizeChanged: function () {
    },
    stateChanged: function () {
    }
  }
};
function xf() {
  var a = yf;
  vf(function () {
    a.classList.add('inline-tool-initializing');
    return new sf(a, wf())
  }, function (b) {
    b.Eb.dispatch(qe(af));
    Promise.resolve().then(function () {
      a.classList.remove('inline-tool-initializing')
    })
  })
}
var yf = document.querySelector('#root-container');
yf && xf();
