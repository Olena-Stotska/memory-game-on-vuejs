(function (e) {
  function t(t) { for (var i, s, o = t[0], c = t[1], u = t[2], p = 0, d = []; p < o.length; p++)s = o[p], r[s] && d.push(r[s][0]), r[s] = 0; for (i in c)Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]); l && l(t); while (d.length)d.shift()(); return a.push(...u || []), n(); } function n() { for (var e, t = 0; t < a.length; t++) { for (var n = a[t], i = !0, o = 1; o < n.length; o++) { const c = n[o]; r[c] !== 0 && (i = !1); }i && (a.splice(t--, 1), e = s(s.s = n[0])); } return e; } var i = {},
    r = { app: 0 },
    a = []; function s(t) { if (i[t]) return i[t].exports; const n = i[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports; }s.m = e, s.c = i, s.d = function (e, t, n) { s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, s.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, s.t = function (e, t) { if (1 & t && (e = s(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const n = Object.create(null); if (s.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const i in e)s.d(n, i, (t => e[t]).bind(null, i)); return n; }, s.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return s.d(t, 'a', t), t; }, s.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, s.p = ''; let o = window.webpackJsonp = window.webpackJsonp || [],
    c = o.push.bind(o); o.push = t, o = o.slice(); for (let u = 0; u < o.length; u++)t(o[u]); var l = c; a.push([0, 'chunk-vendors']), n();
}({
  0(e, t, n) { e.exports = n('56d7'); },
  '0e34': function (e, t, n) {},
  '0f1a': function (e, t, n) { e.exports = `${n.p}img/image8.c088db84.jpg`; },
  '106f': function (e, t, n) {},
  '110c': function (e, t, n) { e.exports = `${n.p}img/image9.715f0db8.jpg`; },
  1530(e, t, n) { e.exports = `${n.p}img/image17.ac8123cd.jpg`; },
  1641(e, t, n) { e.exports = `${n.p}img/image12.33317ec6.jpg`; },
  2479(e, t, n) {
    let i = n('0e34'),
      r = n.n(i); r.a;
  },
  2670(e, t, n) { e.exports = `${n.p}img/image14.3abda404.jpg`; },
  '2cd3': function (e, t, n) {},
  '37ff': function (e, t, n) { e.exports = `${n.p}img/image15.76581e33.jpg`; },
  '384c': function (e, t, n) { e.exports = `${n.p}img/image11.64f3652d.jpg`; },
  '3f91': function (e, t, n) { e.exports = `${n.p}img/image13.56db7fed.jpg`; },
  '409b': function (e, t, n) { e.exports = `${n.p}img/image2.bc3e52ee.jpg`; },
  '41d5': function (e, t, n) { e.exports = `${n.p}img/image18.4e56b4ba.jpg`; },
  5350(e, t, n) { e.exports = `${n.p}img/image5.d961003a.jpg`; },
  '56d7': function (e, t, n) {
    n.r(t); n('cadf'), n('551c'), n('097d'); let i = n('2b0e'),
      r = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', [n('h1', [e._v('Memory Game')]), n('div', { staticClass: 'details-game' }, [n('span', [e._v('Time: '), n('Timer', { attrs: { disabled: e.isTimerDisabled } })], 1), n('span', [e._v(`Moves: ${e._s(e.counter)} `)])]), n('GameBoard', { on: { count(t) { e.counter = t; }, start(t) { e.isTimerDisabled = !1, e.counter = 0; }, finish(t) { e.isTimerDisabled = !0; } } })], 1);
      },
      a = [],
      s = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('span', [e._v(e._s(e.value))]);
      },
      o = [],
      c = (n('ac6a'), {
        props: ['disabled'],
        data() { return { startTime: 0, currentTime: 0, timerId: 0 }; },
        watch: { disabled: { immediate: !0, handler: 'resetTimer' } },
        computed: { value() { return this.humanizeTime(this.currentTime - this.startTime); } },
        methods: {
          resetTimer(e) { e ? clearInterval(this.timerId) : this.restart(); },
          restart() { const e = this; clearInterval(this.timerId), this.startTime = Date.now(), this.currentTime = this.startTime, this.timerId = setInterval(() => e.currentTime = Date.now(), 1e3); },
          humanizeTime(e) {
            let t = e / 1e3,
              n = [Math.floor(t / 3600), parseInt(t / 60 % 60), parseInt(t % 60)]; return n.forEach((e, t) => { n[t] = e < 10 ? '0'.concat(e) : e; }), n.join(':');
          },
        },
      }),
      u = c,
      l = n('2877'),
      p = Object(l.a)(u, s, o, !1, null, null, null); p.options.__file = 'Timer.vue'; let d = p.exports,
      f = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', { staticClass: 'game-area' }, [e._l(e.cells, (t, i) => n('div', { key: i }, [n('div', { staticClass: 'cell', on: { click(n) { e.selectCard(t); } } }, [e.isSelected(t) ? n('img', { class: { open: e.isOpenCard(t) }, attrs: { src: t.url } }) : e._e()])])), e.isModalShown || e.isFinished ? n('Modal', { on: { start: e.restart } }, [e.isFinished ? n('Finish') : n('GetStarted')], 1) : e._e()], 2);
      },
      m = [],
      g = n('8afe'),
      h = (n('6762'), n('2fdb'), n('f560')),
      v = n.n(h),
      b = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('transition', { attrs: { name: 'modal' } }, [n('div', { staticClass: 'modal-mask' }, [n('div', { staticClass: 'modal-wrapper' }, [n('div', { staticClass: 'modal-container' }, [n('div', { staticClass: 'modal-body', on: { click(t) { e.$emit('start'); } } }, [e._t('default')], 2)])])])]);
      },
      j = [],
      _ = (n('2479'), {}),
      C = Object(l.a)(_, b, j, !1, null, '59eed955', null); C.options.__file = 'Modal.vue'; let x = C.exports,
      O = function () {
        let e = this,
          t = e.$createElement; e._self._c; return e._m(0);
      },
      T = [function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', [n('h1', [e._v('START')])]);
      }],
      y = {},
      w = Object(l.a)(y, O, T, !1, null, null, null); w.options.__file = 'GetStarted.vue'; let M = w.exports,
      S = function () {
        let e = this,
          t = e.$createElement; e._self._c; return e._m(0);
      },
      $ = [function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', [n('h1', [e._v('You win!!!')]), n('p', [e._v('Play again')])]);
      }],
      k = {},
      E = Object(l.a)(k, S, $, !1, null, null, null); E.options.__file = 'Finish.vue'; let I = E.exports,
      D = {
        components: { Modal: x, Finish: I, GetStarted: M },
        data() {
          return {
            countMoves: 0, cells: [], isModalShown: !0, gameOff: !1, openCards: [], selectedCards: [], count: 18,
          };
        },
        watch: { isFinished(e) { e && this.$emit('finish'); } },
        computed: { isFinished() { return this.openCards.length === this.cells.length; } },
        methods: {
          genCards() { for (let e = 0; e < this.count; e++) this.cells.push({ url: n('a11c')('./image'.concat(e + 1, '.jpg')), id: e }); },
          restart() { this.cells = v()(this.cells), this.isModalShown = !1, this.openCards = [], this.countMoves = 0, this.$emit('start'); },
          isSelected(e) { return this.selectedCards.includes(e) || this.isOpenCard(e); },
          selectCard(e) { this.isSelected(e) || this.gameOff || (this.selectedCards.length < 2 && this.selectedCards.push(e), this.selectedCards.length === 2 && (this.checkCards(), this.$emit('count', ++this.countMoves))); },
          checkCards() {
            let e,
              t = this,
              n = this.selectedCards[0],
              i = this.selectedCards.every(e => e.id === n.id); i && (e = this.openCards).push.apply(e, Object(g.a)(this.selectedCards)); this.gameOff = !0, setTimeout(() => { t.gameOff = !1, t.selectedCards = []; }, 1500);
          },
          isOpenCard(e) { return this.openCards.includes(e); },
        },
        created() { this.genCards(), this.genCards(); },
      },
      F = D,
      G = (n('b308'), Object(l.a)(F, f, m, !1, null, '5ba5b59a', null)); G.options.__file = 'GameBoard.vue'; let P = G.exports,
      B = { components: { GameBoard: P, Timer: d }, data() { return { counter: 0, isTimerDisabled: !0 }; } },
      z = B,
      A = (n('5c0b'), Object(l.a)(z, r, a, !1, null, null, null)); A.options.__file = 'App.vue'; const J = A.exports; i.a.config.productionTip = !1, new i.a({ render(e) { return e(J); } }).$mount('#app');
  },
  '5a92': function (e, t, n) { e.exports = `${n.p}img/image7.257b454c.jpg`; },
  '5c0b': function (e, t, n) {
    let i = n('106f'),
      r = n.n(i); r.a;
  },
  '714c': function (e, t, n) { e.exports = `${n.p}img/image4.2738bed3.jpg`; },
  '7a2e': function (e, t, n) { e.exports = `${n.p}img/image10.dcd34984.jpg`; },
  '7f72': function (e, t, n) { e.exports = `${n.p}img/image3.05ee32ab.jpg`; },
  a11c(e, t, n) {
    const i = {
      './image1.jpg': 'bae9', './image10.jpg': '7a2e', './image11.jpg': '384c', './image12.jpg': '1641', './image13.jpg': '3f91', './image14.jpg': '2670', './image15.jpg': '37ff', './image16.jpg': 'd682', './image17.jpg': '1530', './image18.jpg': '41d5', './image2.jpg': '409b', './image3.jpg': '7f72', './image4.jpg': '714c', './image5.jpg': '5350', './image6.jpg': 'b8cb', './image7.jpg': '5a92', './image8.jpg': '0f1a', './image9.jpg': '110c',
    }; function r(e) { const t = a(e); return n(t); } function a(e) { const t = i[e]; if (!(t + 1)) { const n = new Error(`Cannot find module '${e}'`); throw n.code = 'MODULE_NOT_FOUND', n; } return t; }r.keys = function () { return Object.keys(i); }, r.resolve = a, e.exports = r, r.id = 'a11c';
  },
  b308(e, t, n) {
    let i = n('2cd3'),
      r = n.n(i); r.a;
  },
  b8cb(e, t, n) { e.exports = `${n.p}img/image6.54b01a68.jpg`; },
  bae9(e, t, n) { e.exports = `${n.p}img/image1.c4e1580e.jpg`; },
  d682(e, t, n) { e.exports = `${n.p}img/image16.c225ade0.jpg`; },
}));
// # sourceMappingURL=app.75368b53.js.map
