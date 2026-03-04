(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [374],
  {
    6181: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 6828));
    },
    6828: function (e, t, i) {
      "use strict";
      (i.r(t),
        i.d(t, {
          default: function () {
            return p;
          },
        }));
      var n = i(7437),
        r = i(7138),
        l = i(2265),
        o = i(6463),
        d = i(9774),
        s = i(4451),
        a = i(8347),
        c = i(7941),
        x = i(1200);
      function p(e) {
        let { params: t } = e,
          [i, r] = t.slug;
        return r
          ? (0, n.jsx)(h, { id: r, category: i })
          : (0, n.jsx)(g, { category: i });
      }
      function h(e) {
        let { id: t, category: i } = e,
          l = d.jt.find((e) => e.id === t);
        return l
          ? (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("div", {
                  style: {
                    background: "var(--blue)",
                    padding: "24px 20px 32px",
                  },
                  children: [
                    (0, n.jsxs)(r.default, {
                      href: "/catalog/".concat(l.category),
                      style: {
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "13px",
                        textDecoration: "none",
                      },
                      children: ["← ", s.Hs[l.category]],
                    }),
                    (0, n.jsxs)("div", {
                      style: {
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                        marginTop: "20px",
                      },
                      children: [
                        l.photo &&
                          (0, n.jsx)("img", {
                            src: l.photo,
                            alt: "",
                            style: {
                              width: 72,
                              height: 72,
                              borderRadius: "50%",
                              objectFit: "cover",
                              border: "3px solid rgba(255,255,255,0.3)",
                            },
                          }),
                        (0, n.jsxs)("div", {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, n.jsx)("h1", {
                              style: {
                                margin: 0,
                                color: "#fff",
                                fontSize: "20px",
                              },
                              children: l.name,
                            }),
                            (0, n.jsx)("div", {
                              style: { marginTop: "8px" },
                              children: (0, n.jsxs)(a.Badge, {
                                color: "rgba(255,255,255,0.15)",
                                textColor: "#fff",
                                children: [
                                  s.gO[l.category],
                                  " ",
                                  s.Hs[l.category],
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          style: { flexShrink: 0 },
                          children: (0, n.jsx)(c._, { id: l.id }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  style: {
                    padding: "20px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  },
                  children: [
                    (0, n.jsxs)(a.Card, {
                      style: { padding: "18px" },
                      children: [
                        (0, n.jsx)("div", {
                          style: {
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                          },
                          children: "О себе",
                        }),
                        (0, n.jsx)("p", {
                          style: {
                            margin: 0,
                            lineHeight: 1.6,
                            color: "var(--text)",
                          },
                          children: l.description,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("a", {
                      href: l.contact.startsWith("@")
                        ? "https://t.me/".concat(l.contact.slice(1))
                        : "tel:".concat(l.contact),
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
                      children: ["Написать ", l.contact],
                    }),
                    (0, n.jsx)(a.Card, {
                      style: { padding: "18px" },
                      children: (0, n.jsx)(x.H, { itemId: l.id }),
                    }),
                  ],
                }),
              ],
            })
          : (0, o.notFound)();
      }
      function g(e) {
        let { category: t } = e,
          [i, r] = (0, l.useState)("");
        if (!s.Hs[t]) return (0, o.notFound)();
        let c = d.jt.filter((e) => e.category === t),
          x = i.trim()
            ? c.filter(
                (e) =>
                  e.name.toLowerCase().includes(i.toLowerCase()) ||
                  e.description.toLowerCase().includes(i.toLowerCase()),
              )
            : c;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(a.PageHeader, {
              title: "".concat(s.gO[t], " ").concat(s.Hs[t]),
              subtitle: "".concat(c.length, " специалистов"),
            }),
            (0, n.jsx)("div", {
              style: { padding: "12px 16px 4px" },
              children: (0, n.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "10px 14px",
                },
                children: [
                  (0, n.jsx)("span", {
                    style: { fontSize: "16px", flexShrink: 0, opacity: 0.5 },
                    children: "\uD83D\uDD0D",
                  }),
                  (0, n.jsx)("input", {
                    type: "text",
                    value: i,
                    onChange: (e) => r(e.target.value),
                    placeholder: "Поиск по имени или описанию...",
                    style: {
                      flex: 1,
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      fontSize: "14px",
                      color: "var(--text)",
                      fontFamily: "inherit",
                    },
                  }),
                  i &&
                    (0, n.jsx)("button", {
                      onClick: () => r(""),
                      style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        padding: 0,
                        lineHeight: 1,
                      },
                      children: "✕",
                    }),
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              style: {
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              },
              children: [
                0 === x.length &&
                  i &&
                  (0, n.jsxs)("div", {
                    style: {
                      textAlign: "center",
                      padding: "40px 20px",
                      color: "var(--text-muted)",
                    },
                    children: ["Ничего не найдено по \xab", i, "\xbb"],
                  }),
                0 === x.length &&
                  !i &&
                  (0, n.jsx)("div", {
                    style: {
                      textAlign: "center",
                      padding: "40px 20px",
                      color: "var(--text-muted)",
                    },
                    children: "Пока никого нет. Будь первым!",
                  }),
                x.map((e) => (0, n.jsx)(f, { specialist: e }, e.id)),
              ],
            }),
          ],
        });
      }
      function f(e) {
        let { specialist: t } = e;
        return (0, n.jsxs)("div", {
          style: { display: "flex", gap: "10px", alignItems: "center" },
          children: [
            (0, n.jsx)(r.default, {
              href: "/catalog/".concat(t.category, "/").concat(t.id),
              style: { textDecoration: "none", flex: 1, minWidth: 0 },
              children: (0, n.jsx)(a.Card, {
                children: (0, n.jsxs)("div", {
                  style: {
                    padding: "16px",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  },
                  children: [
                    t.photo &&
                      (0, n.jsx)("img", {
                        src: t.photo,
                        alt: "",
                        style: {
                          width: 52,
                          height: 52,
                          borderRadius: "50%",
                          objectFit: "cover",
                          flexShrink: 0,
                        },
                      }),
                    (0, n.jsxs)("div", {
                      style: { minWidth: 0, flex: 1 },
                      children: [
                        (0, n.jsx)("div", {
                          style: { fontWeight: 700, fontSize: "15px" },
                          children: t.name,
                        }),
                        (0, n.jsx)("p", {
                          style: {
                            margin: "6px 0 0",
                            fontSize: "13px",
                            color: "var(--text-muted)",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          },
                          children: t.description,
                        }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      style: {
                        color: "var(--text-muted)",
                        fontSize: "18px",
                        flexShrink: 0,
                      },
                      children: "›",
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)(c._, { id: t.id }),
          ],
        });
      }
    },
  },
  function (e) {
    (e.O(0, [231, 341, 971, 23, 744], function () {
      return e((e.s = 6181));
    }),
      (_N_E = e.O()));
  },
]);
