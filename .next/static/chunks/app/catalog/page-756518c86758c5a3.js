(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    5384: function (r, e, n) {
      (Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.bind(n, 8347)));
    },
    8347: function (r, e, n) {
      "use strict";
      n.d(e, {
        Badge: function () {
          return a;
        },
        Card: function () {
          return o;
        },
        PageHeader: function () {
          return s;
        },
      });
      var t = n(7437);
      function o(r) {
        let { children: e, onClick: n, style: o } = r;
        return (0, t.jsx)("div", {
          onClick: n,
          style: {
            background: "var(--card)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            cursor: n ? "pointer" : "default",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            ...o,
          },
          onMouseDown: (r) =>
            n && (r.currentTarget.style.transform = "scale(0.98)"),
          onMouseUp: (r) => n && (r.currentTarget.style.transform = "scale(1)"),
          onTouchStart: (r) =>
            n && (r.currentTarget.style.transform = "scale(0.98)"),
          onTouchEnd: (r) =>
            n && (r.currentTarget.style.transform = "scale(1)"),
          children: e,
        });
      }
      function s(r) {
        let { title: e, subtitle: n } = r;
        return (0, t.jsxs)("div", {
          style: { padding: "24px 20px 16px", background: "var(--blue)" },
          children: [
            (0, t.jsx)("h1", {
              style: {
                margin: 0,
                fontSize: "22px",
                color: "#fff",
                fontFamily: "Unbounded, sans-serif",
              },
              children: e,
            }),
            n &&
              (0, t.jsx)("p", {
                style: {
                  margin: "6px 0 0",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                },
                children: n,
              }),
          ],
        });
      }
      function a(r) {
        let {
          children: e,
          color: n = "var(--blue-muted)",
          textColor: o = "var(--blue)",
        } = r;
        return (0, t.jsx)("span", {
          style: {
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: "100px",
            background: n,
            color: o,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          },
          children: e,
        });
      }
      n(2265);
    },
  },
  function (r) {
    (r.O(0, [231, 971, 23, 744], function () {
      return r((r.s = 5384));
    }),
      (_N_E = r.O()));
  },
]);
