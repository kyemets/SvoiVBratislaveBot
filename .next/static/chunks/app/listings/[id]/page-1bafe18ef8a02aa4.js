(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [201],
  {
    7281: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 7831));
    },
    7831: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }));
      var i = n(7437),
        r = n(6463),
        l = n(7138),
        o = n(9774),
        s = n(4451),
        a = n(8347);
      function d(e) {
        let { id: t, style: n } = e,
          r =
            ((function (e) {
              let t = 0;
              for (let n = 0; n < e.length; n++)
                t = e.charCodeAt(n) + ((t << 5) - t);
              return Math.abs(t);
            })(t) %
              200) +
            12;
        return (0, i.jsxs)("span", {
          style: {
            fontSize: "12px",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "3px",
            ...n,
          },
          children: [
            (0, i.jsx)("span", {
              style: { fontSize: "13px" },
              children: "\uD83D\uDC41",
            }),
            r,
          ],
        });
      }
      var c = n(2265);
      function p(e) {
        let { addedBy: t, name: n = "Участник", size: r = 28 } = e,
          [l, o] = (0, c.useState)(null);
        (0, c.useEffect)(() => {
          var e, t, n;
          (null === (n = window.Telegram) || void 0 === n
            ? void 0
            : null === (t = n.WebApp) || void 0 === t
              ? void 0
              : null === (e = t.initDataUnsafe) || void 0 === e
                ? void 0
                : e.user) && o(window.Telegram.WebApp.initDataUnsafe.user);
        }, []);
        let s = l ? l.first_name : n,
          a = null == l ? void 0 : l.photo_url;
        return (0, i.jsxs)("div", {
          style: { display: "flex", alignItems: "center", gap: "6px" },
          children: [
            a
              ? (0, i.jsx)("img", {
                  src: a,
                  alt: "",
                  style: {
                    width: r,
                    height: r,
                    borderRadius: "50%",
                    objectFit: "cover",
                  },
                })
              : (0, i.jsx)("div", {
                  style: {
                    width: r,
                    height: r,
                    borderRadius: "50%",
                    background: "var(--blue-muted)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "".concat(0.38 * r, "px"),
                    fontWeight: 700,
                    flexShrink: 0,
                  },
                  children: s
                    .split(" ")
                    .map((e) => e[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2),
                }),
            (0, i.jsx)("span", {
              style: { fontSize: "12px", color: "var(--text-muted)" },
              children: s,
            }),
          ],
        });
      }
      function x(e) {
        let { title: t, url: n } = e;
        return (0, i.jsxs)("button", {
          onClick: function () {
            var e;
            let i = "https://bratislava-app.vercel.app".concat(n);
            if (
              (encodeURIComponent("".concat(t, "\n").concat(i)),
              null === (e = window.Telegram) || void 0 === e
                ? void 0
                : e.WebApp)
            ) {
              window.Telegram.WebApp.openTelegramLink(
                "https://t.me/share/url?url="
                  .concat(encodeURIComponent(i), "&text=")
                  .concat(encodeURIComponent(t)),
              );
              return;
            }
            navigator.share
              ? navigator.share({ title: t, url: i })
              : (navigator.clipboard.writeText(i),
                alert("Ссылка скопирована!"));
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            borderRadius: "100px",
            border: "1.5px solid var(--border)",
            background: "transparent",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--text-muted)",
            transition: "all 0.15s",
          },
          children: [
            (0, i.jsx)("span", { style: { fontSize: "15px" }, children: "↗" }),
            "Поделиться",
          ],
        });
      }
      var u = n(7941),
        h = n(1200);
      function f(e) {
        let { params: t } = e,
          n = o.RH.find((e) => e.id === t.id);
        return n
          ? (0, i.jsxs)("div", {
              children: [
                n.photo &&
                  (0, i.jsx)("img", {
                    src: n.photo,
                    alt: "",
                    style: {
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                    },
                  }),
                (0, i.jsx)("div", {
                  style: {
                    background: n.photo ? "transparent" : "var(--blue)",
                    padding: n.photo ? "0" : "24px 20px 20px",
                  },
                  children:
                    !n.photo &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(l.default, {
                          href: "/listings",
                          style: {
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "13px",
                            textDecoration: "none",
                          },
                          children: "← Объявления",
                        }),
                        (0, i.jsx)("h1", {
                          style: {
                            margin: "12px 0 0",
                            color: "#fff",
                            fontSize: "20px",
                          },
                          children: n.title,
                        }),
                      ],
                    }),
                }),
                (0, i.jsxs)("div", {
                  style: {
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  },
                  children: [
                    n.photo &&
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(l.default, {
                            href: "/listings",
                            style: {
                              color: "var(--text-muted)",
                              fontSize: "13px",
                              textDecoration: "none",
                            },
                            children: "← Объявления",
                          }),
                          (0, i.jsx)("h1", {
                            style: {
                              margin: "8px 0",
                              fontSize: "20px",
                              fontFamily: "Unbounded, sans-serif",
                            },
                            children: n.title,
                          }),
                        ],
                      }),
                    (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      },
                      children: [
                        (0, i.jsx)(a.Badge, { children: s.Bv[n.type] }),
                        n.price &&
                          (0, i.jsxs)("span", {
                            style: {
                              fontWeight: 700,
                              fontSize: "20px",
                              color: "var(--blue)",
                            },
                            children: [n.price, "€"],
                          }),
                        (0, i.jsx)("div", {
                          style: { marginLeft: "auto" },
                          children: (0, i.jsx)(u._, { id: n.id }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      },
                      children: [
                        (0, i.jsxs)("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          },
                          children: [
                            (0, i.jsx)(d, { id: n.id }),
                            (0, i.jsx)(p, { addedBy: n.addedBy }),
                          ],
                        }),
                        (0, i.jsx)(x, {
                          title: n.title,
                          url: "/listings/".concat(n.id),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(a.Card, {
                      style: { padding: "18px" },
                      children: [
                        (0, i.jsx)("div", {
                          style: {
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                          },
                          children: "Описание",
                        }),
                        (0, i.jsx)("p", {
                          style: { margin: 0, lineHeight: 1.6 },
                          children: n.description,
                        }),
                      ],
                    }),
                    (0, i.jsxs)("a", {
                      href: n.contact.startsWith("@")
                        ? "https://t.me/".concat(n.contact.slice(1))
                        : "tel:".concat(n.contact),
                      style: {
                        display: "block",
                        background: "var(--blue)",
                        color: "#fff",
                        textAlign: "center",
                        padding: "16px",
                        borderRadius: "var(--radius)",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "15px",
                      },
                      children: ["Связаться ", n.contact],
                    }),
                    (0, i.jsx)(a.Card, {
                      style: { padding: "18px" },
                      children: (0, i.jsx)(h.H, { itemId: n.id }),
                    }),
                  ],
                }),
              ],
            })
          : (0, r.notFound)();
      }
    },
  },
  function (e) {
    (e.O(0, [231, 341, 971, 23, 744], function () {
      return e((e.s = 7281));
    }),
      (_N_E = e.O()));
  },
]);
