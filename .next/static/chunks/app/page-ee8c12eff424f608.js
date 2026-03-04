(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    911: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 8212));
    },
    7138: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = a(231),
        i = a.n(n);
    },
    8212: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        }));
      var n = a(7437),
        i = a(7138),
        r = a(2265),
        s = a(9774),
        o = a(4451),
        d = a(8347);
      let l = "home_anim_played",
        c = [
          {
            href: "/catalog",
            icon: "\uD83D\uDDC2",
            label: "Каталог",
            desc: "Врачи, юристы, мастера",
            color: "#EEF3FA",
            border: "#C5D5EE",
          },
          {
            href: "/listings",
            icon: "\uD83D\uDCE2",
            label: "Объявления",
            desc: "Купить, продать, отдать",
            color: "#FFF8EE",
            border: "#F0D898",
          },
          {
            href: "/events",
            icon: "\uD83C\uDF89",
            label: "События",
            desc: "Места и встречи",
            color: "#F0FAF0",
            border: "#A8D8A8",
          },
          {
            href: "/blacklist",
            icon: "⚠️",
            label: "Чёрный список",
            desc: "Кидалы и плохие работодатели",
            color: "#0F1923",
            border: "#2A3540",
          },
        ],
        p = {
          active: !0,
          emoji: "\uD83D\uDCCC",
          text: "Добро пожаловать! Мы только запустились — добавляй своих специалистов и помогай сообществу расти.",
          link: "/add",
          linkLabel: "Добавить →",
        };
      function m(e) {
        let { count: t, label: a, delay: i, duration: s = 1100 } = e,
          o = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1100,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 200,
              n = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                let i;
                let r = n.current;
                if (!r) return;
                let s = null,
                  o = (e) => 1 - Math.pow(1 - e, 3),
                  d = (a) => {
                    s || (s = a);
                    let n = Math.min((a - s) / t, 1);
                    ((r.textContent = String(Math.round(o(n) * e))),
                      n < 1 && (i = requestAnimationFrame(d)));
                  },
                  l = setTimeout(() => {
                    i = requestAnimationFrame(d);
                  }, a);
                return () => {
                  (clearTimeout(l), cancelAnimationFrame(i));
                };
              }, [e, t, a]),
              n
            );
          })(t, s, i);
        return (0, n.jsxs)("div", {
          style: { textAlign: "center" },
          children: [
            (0, n.jsx)("div", {
              style: {
                color: "#fff",
                fontWeight: 700,
                fontSize: "20px",
                fontFamily: "Unbounded, sans-serif",
                lineHeight: 1,
              },
              children: (0, n.jsx)("span", { ref: o, children: "0" }),
            }),
            (0, n.jsx)("div", {
              style: {
                color: "rgba(255,255,255,0.55)",
                fontSize: "11px",
                marginTop: "3px",
              },
              children: a,
            }),
          ],
        });
      }
      function u() {
        var e;
        let t = s.jt[s.jt.length - 1],
          a = s.RH[s.RH.length - 1],
          u = s.FP[s.FP.length - 1],
          h = s.jt[((e = s.jt.length), Math.floor(Date.now() / 864e5) % e)],
          x = {
            specialists: s.jt.length,
            listings: s.RH.length,
            events: s.FP.length,
            jobs: s.WN.length,
            housing: s.H.length,
          },
          [f] = (0, r.useState)(() => "1" === sessionStorage.getItem(l));
        (0, r.useEffect)(() => {
          sessionStorage.setItem(l, "1");
        }, []);
        let y = f ? 0 : 400,
          g = f ? 0 : 1100;
        return (0, n.jsxs)("div", {
          className: f ? "animations-done" : "",
          children: [
            (0, n.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  '\n  :root {\n    --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    --ease-spring: cubic-bezier(0.34, 1.42, 0.64, 1);\n  }\n\n  /* ── Entrance keyframes ── */\n  @keyframes fadeSlideUp {\n    from { opacity: 0; transform: translateY(18px); }\n    to   { opacity: 1; transform: translateY(0); }\n  }\n\n  @keyframes fadeSlideDown {\n    from { opacity: 0; transform: translateY(-14px); }\n    to   { opacity: 1; transform: translateY(0); }\n  }\n\n  @keyframes fadeScaleIn {\n    from { opacity: 0; transform: scale(0.96); }\n    to   { opacity: 1; transform: scale(1); }\n  }\n\n  @keyframes fadeIn {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n  }\n\n  /* ── Hero layer ── */\n  .anim-hero-label {\n    animation: fadeIn 400ms var(--ease-out) both;\n    animation-delay: 0ms;\n  }\n  .anim-hero-title {\n    animation: fadeSlideUp 500ms var(--ease-out) both;\n    animation-delay: 60ms;\n  }\n  .anim-hero-subtitle {\n    animation: fadeSlideUp 500ms var(--ease-out) both;\n    animation-delay: 120ms;\n  }\n  .anim-hero-counters {\n    animation: fadeSlideUp 500ms var(--ease-out) both;\n    animation-delay: 200ms;\n  }\n\n  /* ── Banner ── */\n  .anim-banner {\n    animation: fadeSlideDown 450ms var(--ease-out) both;\n    animation-delay: 280ms;\n  }\n\n  /* ── Specialist of day ── */\n  .anim-specialist-label {\n    animation: fadeIn 400ms var(--ease-out) both;\n    animation-delay: 360ms;\n  }\n  .anim-specialist-card {\n    animation: fadeScaleIn 480ms var(--ease-out) both;\n    animation-delay: 420ms;\n  }\n\n  /* ── Section tiles (stagger) ── */\n  .anim-tile-0 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 520ms; }\n  .anim-tile-1 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 590ms; }\n  .anim-tile-2 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 660ms; }\n  .anim-tile-3 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 730ms; }\n\n  /* ── Recent cards (stagger) ── */\n  .anim-recent-label {\n    animation: fadeIn 400ms var(--ease-out) both;\n    animation-delay: 800ms;\n  }\n  .anim-recent-0 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 850ms; }\n  .anim-recent-1 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 910ms; }\n  .anim-recent-2 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 970ms; }\n\n  /* ── Skip all entrance animations on repeat visits ── */\n  /* Any .anim-* class inside .animations-done is instantly visible */\n  .animations-done [class*="anim-"] {\n    animation: none !important;\n    opacity: 1 !important;\n    transform: none !important;\n  }\n\n  /* ── Tap / press feedback ── */\n  .pressable {\n    transition: transform 150ms var(--ease-spring);\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n  }\n  .pressable:active {\n    transform: scale(0.97);\n    transition: transform 80ms var(--ease-out);\n  }\n\n  /* ── Arrow nudge on hover (desktop / pointer devices) ── */\n  @media (hover: hover) {\n    .pressable:hover .arrow-hint {\n      transform: translateX(4px);\n      opacity: 1;\n    }\n  }\n  .arrow-hint {\n    transition: transform 200ms var(--ease-out), opacity 200ms var(--ease-out);\n  }\n',
              },
            }),
            (0, n.jsxs)("div", {
              style: {
                background: "var(--blue)",
                padding: "32px 20px 28px",
                position: "relative",
                overflow: "hidden",
              },
              children: [
                (0, n.jsx)("div", {
                  style: {
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                  },
                }),
                (0, n.jsx)("div", {
                  style: {
                    position: "absolute",
                    bottom: -20,
                    right: 60,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(232,184,75,0.2)",
                  },
                }),
                (0, n.jsx)("p", {
                  className: "anim-hero-label",
                  style: {
                    margin: "0 0 8px",
                    color: "var(--accent)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  },
                  children: "Братислава",
                }),
                (0, n.jsxs)("h1", {
                  className: "anim-hero-title",
                  style: {
                    margin: 0,
                    color: "#fff",
                    fontSize: "26px",
                    lineHeight: 1.2,
                  },
                  children: ["Свои", (0, n.jsx)("br", {}), "в Братиславе"],
                }),
                (0, n.jsx)("p", {
                  className: "anim-hero-subtitle",
                  style: {
                    margin: "10px 0 0",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                  },
                  children: "Русскоязычное сообщество",
                }),
                (0, n.jsxs)("div", {
                  className: "anim-hero-counters",
                  style: {
                    display: "flex",
                    gap: "16px",
                    marginTop: "20px",
                    flexWrap: "wrap",
                  },
                  children: [
                    (0, n.jsx)(m, {
                      count: x.specialists,
                      label: "специалистов",
                      delay: y,
                      duration: g,
                    }),
                    (0, n.jsx)(m, {
                      count: x.listings,
                      label: "объявлений",
                      delay: y + 80,
                      duration: g,
                    }),
                    (0, n.jsx)(m, {
                      count: x.events,
                      label: "событий",
                      delay: y + 160,
                      duration: g,
                    }),
                    (0, n.jsx)(m, {
                      count: x.jobs,
                      label: "вакансий",
                      delay: y + 240,
                      duration: g,
                    }),
                  ],
                }),
              ],
            }),
            p.active &&
              (0, n.jsxs)("div", {
                className: "anim-banner",
                style: {
                  margin: "16px 16px 0",
                  background: "var(--accent)",
                  borderRadius: "var(--radius)",
                  padding: "14px 16px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                },
                children: [
                  (0, n.jsx)("span", {
                    style: { fontSize: "20px", flexShrink: 0 },
                    children: p.emoji,
                  }),
                  (0, n.jsxs)("div", {
                    style: { flex: 1 },
                    children: [
                      (0, n.jsx)("p", {
                        style: {
                          margin: 0,
                          fontSize: "13px",
                          color: "#0F1923",
                          lineHeight: 1.5,
                          fontWeight: 500,
                        },
                        children: p.text,
                      }),
                      p.link &&
                        (0, n.jsx)(i.default, {
                          href: p.link,
                          style: {
                            display: "inline-block",
                            marginTop: "8px",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#0F1923",
                            textDecoration: "none",
                          },
                          children: p.linkLabel,
                        }),
                    ],
                  }),
                ],
              }),
            (0, n.jsxs)("div", {
              style: { padding: "16px 16px 4px" },
              children: [
                (0, n.jsx)("h2", {
                  className: "anim-specialist-label",
                  style: {
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                  },
                  children: "Специалист дня",
                }),
                (0, n.jsx)("div", {
                  className: "anim-specialist-card",
                  children: (0, n.jsx)(i.default, {
                    href: "/catalog/".concat(h.category, "/").concat(h.id),
                    style: { textDecoration: "none" },
                    children: (0, n.jsxs)("div", {
                      className: "pressable",
                      style: {
                        background:
                          "linear-gradient(135deg, var(--blue) 0%, #2B5499 100%)",
                        borderRadius: "var(--radius)",
                        padding: "16px",
                        display: "flex",
                        gap: "14px",
                        alignItems: "center",
                      },
                      children: [
                        h.photo &&
                          (0, n.jsx)("img", {
                            src: h.photo,
                            alt: "",
                            style: {
                              width: 56,
                              height: 56,
                              borderRadius: "50%",
                              objectFit: "cover",
                              border: "2px solid rgba(255,255,255,0.3)",
                              flexShrink: 0,
                            },
                          }),
                        (0, n.jsxs)("div", {
                          style: { minWidth: 0, flex: 1 },
                          children: [
                            (0, n.jsx)("div", {
                              style: {
                                fontWeight: 700,
                                fontSize: "15px",
                                color: "#fff",
                              },
                              children: h.name,
                            }),
                            (0, n.jsx)("div", {
                              style: {
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.6)",
                                marginTop: "3px",
                              },
                              children: o.Hs[h.category],
                            }),
                            (0, n.jsx)("p", {
                              style: {
                                margin: "6px 0 0",
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.7)",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              },
                              children: h.description,
                            }),
                          ],
                        }),
                        (0, n.jsx)("span", {
                          className: "arrow-hint",
                          style: {
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "18px",
                            flexShrink: 0,
                          },
                          children: "›",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              style: {
                padding: "16px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              },
              children: c.map((e, t) =>
                (0, n.jsx)(
                  "div",
                  {
                    className: "anim-tile-".concat(t),
                    children: (0, n.jsx)(i.default, {
                      href: e.href,
                      style: { textDecoration: "none" },
                      children: (0, n.jsxs)("div", {
                        className: "pressable",
                        style: {
                          background: e.color,
                          border: "1px solid ".concat(e.border),
                          borderRadius: "var(--radius)",
                          padding: "18px 20px",
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                        },
                        children: [
                          (0, n.jsx)("span", {
                            style: { fontSize: "32px", lineHeight: 1 },
                            children: e.icon,
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("div", {
                                style: {
                                  fontWeight: 700,
                                  fontSize: "16px",
                                  color:
                                    "/blacklist" === e.href
                                      ? "#fff"
                                      : "var(--text)",
                                  fontFamily: "Unbounded, sans-serif",
                                },
                                children: e.label,
                              }),
                              (0, n.jsx)("div", {
                                style: {
                                  fontSize: "13px",
                                  color:
                                    "/blacklist" === e.href
                                      ? "rgba(255,255,255,0.5)"
                                      : "var(--text-muted)",
                                  marginTop: "2px",
                                },
                                children: e.desc,
                              }),
                            ],
                          }),
                          (0, n.jsx)("span", {
                            className: "arrow-hint",
                            style: {
                              marginLeft: "auto",
                              color:
                                "/blacklist" === e.href
                                  ? "rgba(255,255,255,0.4)"
                                  : "var(--text-muted)",
                              fontSize: "18px",
                            },
                            children: "›",
                          }),
                        ],
                      }),
                    }),
                  },
                  e.href,
                ),
              ),
            }),
            (0, n.jsxs)("div", {
              style: { padding: "4px 16px 24px" },
              children: [
                (0, n.jsx)("h2", {
                  className: "anim-recent-label",
                  style: {
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: "0 0 12px",
                  },
                  children: "Недавно добавлено",
                }),
                (0, n.jsxs)("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  },
                  children: [
                    (0, n.jsx)("div", {
                      className: "anim-recent-0",
                      children: (0, n.jsx)(i.default, {
                        href: "/catalog/".concat(t.category, "/").concat(t.id),
                        style: { textDecoration: "none" },
                        children: (0, n.jsx)("div", {
                          className: "pressable",
                          children: (0, n.jsx)(d.Card, {
                            children: (0, n.jsxs)("div", {
                              style: {
                                padding: "14px 16px",
                                display: "flex",
                                gap: "12px",
                                alignItems: "center",
                              },
                              children: [
                                (0, n.jsx)("img", {
                                  src: t.photo,
                                  alt: "",
                                  style: {
                                    width: 44,
                                    height: 44,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    flexShrink: 0,
                                  },
                                }),
                                (0, n.jsxs)("div", {
                                  style: { minWidth: 0 },
                                  children: [
                                    (0, n.jsx)("div", {
                                      style: {
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                      },
                                      children: t.name,
                                    }),
                                    (0, n.jsx)(d.Badge, {
                                      children: o.Hs[t.category],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("span", {
                                  className: "arrow-hint",
                                  style: {
                                    marginLeft: "auto",
                                    color: "var(--text-muted)",
                                  },
                                  children: "›",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "anim-recent-1",
                      children: (0, n.jsx)(i.default, {
                        href: "/listings/".concat(a.id),
                        style: { textDecoration: "none" },
                        children: (0, n.jsx)("div", {
                          className: "pressable",
                          children: (0, n.jsx)(d.Card, {
                            children: (0, n.jsxs)("div", {
                              style: {
                                padding: "14px 16px",
                                display: "flex",
                                gap: "12px",
                                alignItems: "center",
                              },
                              children: [
                                (0, n.jsx)("span", {
                                  style: { fontSize: "28px" },
                                  children: "\uD83D\uDCE2",
                                }),
                                (0, n.jsxs)("div", {
                                  style: { minWidth: 0 },
                                  children: [
                                    (0, n.jsx)("div", {
                                      style: {
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                      },
                                      children: a.title,
                                    }),
                                    (0, n.jsxs)("div", {
                                      style: {
                                        display: "flex",
                                        gap: "6px",
                                        marginTop: "4px",
                                        alignItems: "center",
                                      },
                                      children: [
                                        (0, n.jsx)(d.Badge, {
                                          color: "#FFF8EE",
                                          textColor: "#B8860B",
                                          children: o.Bv[a.type],
                                        }),
                                        a.price &&
                                          (0, n.jsxs)("span", {
                                            style: {
                                              fontSize: "13px",
                                              fontWeight: 600,
                                              color: "var(--blue)",
                                            },
                                            children: [a.price, "€"],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("span", {
                                  className: "arrow-hint",
                                  style: {
                                    marginLeft: "auto",
                                    color: "var(--text-muted)",
                                  },
                                  children: "›",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "anim-recent-2",
                      children: (0, n.jsx)(i.default, {
                        href: "/events/".concat(u.id),
                        style: { textDecoration: "none" },
                        children: (0, n.jsx)("div", {
                          className: "pressable",
                          children: (0, n.jsx)(d.Card, {
                            children: (0, n.jsxs)("div", {
                              style: {
                                padding: "14px 16px",
                                display: "flex",
                                gap: "12px",
                                alignItems: "center",
                              },
                              children: [
                                (0, n.jsx)("span", {
                                  style: { fontSize: "28px" },
                                  children: "\uD83C\uDF89",
                                }),
                                (0, n.jsxs)("div", {
                                  style: { minWidth: 0 },
                                  children: [
                                    (0, n.jsx)("div", {
                                      style: {
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                      },
                                      children: u.title,
                                    }),
                                    (0, n.jsx)(d.Badge, {
                                      color: "#F0FAF0",
                                      textColor: "#2D7A2D",
                                      children: u.isPlace ? "Место" : "Событие",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("span", {
                                  className: "arrow-hint",
                                  style: {
                                    marginLeft: "auto",
                                    color: "var(--text-muted)",
                                  },
                                  children: "›",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    8347: function (e, t, a) {
      "use strict";
      a.d(t, {
        Badge: function () {
          return s;
        },
        Card: function () {
          return i;
        },
        PageHeader: function () {
          return r;
        },
      });
      var n = a(7437);
      function i(e) {
        let { children: t, onClick: a, style: i } = e;
        return (0, n.jsx)("div", {
          onClick: a,
          style: {
            background: "var(--card)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            cursor: a ? "pointer" : "default",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            ...i,
          },
          onMouseDown: (e) =>
            a && (e.currentTarget.style.transform = "scale(0.98)"),
          onMouseUp: (e) => a && (e.currentTarget.style.transform = "scale(1)"),
          onTouchStart: (e) =>
            a && (e.currentTarget.style.transform = "scale(0.98)"),
          onTouchEnd: (e) =>
            a && (e.currentTarget.style.transform = "scale(1)"),
          children: t,
        });
      }
      function r(e) {
        let { title: t, subtitle: a } = e;
        return (0, n.jsxs)("div", {
          style: { padding: "24px 20px 16px", background: "var(--blue)" },
          children: [
            (0, n.jsx)("h1", {
              style: {
                margin: 0,
                fontSize: "22px",
                color: "#fff",
                fontFamily: "Unbounded, sans-serif",
              },
              children: t,
            }),
            a &&
              (0, n.jsx)("p", {
                style: {
                  margin: "6px 0 0",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                },
                children: a,
              }),
          ],
        });
      }
      function s(e) {
        let {
          children: t,
          color: a = "var(--blue-muted)",
          textColor: i = "var(--blue)",
        } = e;
        return (0, n.jsx)("span", {
          style: {
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: "100px",
            background: a,
            color: i,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          },
          children: t,
        });
      }
      a(2265);
    },
    9774: function (e, t, a) {
      "use strict";
      a.d(t, {
        FP: function () {
          return r;
        },
        H: function () {
          return o;
        },
        RH: function () {
          return i;
        },
        WN: function () {
          return s;
        },
        jt: function () {
          return n;
        },
      });
      let n = [
          {
            id: "s1",
            name: "Анна Ковалёва",
            category: "doctors",
            description:
              "Терапевт, 12 лет опыта. Принимаю на русском и словацком. Помогу с направлениями к специалистам и разберусь с местной системой здравоохранения.",
            contact: "@anna_doc_ba",
            photo: "https://i.pravatar.cc/150?img=47",
            addedBy: "user_1",
            createdAt: "2024-01-15",
          },
          {
            id: "s2",
            name: "Дмитрий Лисов",
            category: "lawyers",
            description:
              "Специализируюсь на трудовом праве и вопросах ВНЖ/ПМЖ в Словакии. Консультирую по открытию бизнеса и налоговым вопросам.",
            contact: "@dmitry_law_sk",
            photo: "https://i.pravatar.cc/150?img=12",
            addedBy: "user_2",
            createdAt: "2024-01-20",
          },
          {
            id: "s3",
            name: "Сергей Майстер",
            category: "masters",
            description:
              "Сантехника, электрика, мелкий ремонт. Работаю качественно и по честным ценам. Выезжаю по всей Братиславе.",
            contact: "+421 900 123 456",
            photo: "https://i.pravatar.cc/150?img=33",
            addedBy: "user_3",
            createdAt: "2024-02-01",
          },
          {
            id: "s4",
            name: "Мария Петренко",
            category: "nannies",
            description:
              "Опыт с детьми от 1 до 8 лет. Могу забирать из садика/школы, помогать с домашними заданиями. Есть рекомендации.",
            contact: "@masha_nanny",
            photo: "https://i.pravatar.cc/150?img=44",
            addedBy: "user_4",
            createdAt: "2024-02-10",
          },
          {
            id: "s5",
            name: "Игорь Шевченко",
            category: "tutors",
            description:
              "Математика и физика для школьников и студентов. Готовлю к экзаменам. Онлайн или офлайн.",
            contact: "@igor_tutor_ba",
            photo: "https://i.pravatar.cc/150?img=57",
            addedBy: "user_5",
            createdAt: "2024-02-15",
          },
          {
            id: "s6",
            name: "Елена Волкова",
            category: "accountants",
            description:
              "Бухгалтерия для фрилансеров и малого бизнеса в Словакии. Помогу разобраться с налогами, SZCO, s.r.o.",
            contact: "@elena_buh_sk",
            photo: "https://i.pravatar.cc/150?img=25",
            addedBy: "user_6",
            createdAt: "2024-02-20",
          },
          {
            id: "s7",
            name: "Николай Бондарь",
            category: "doctors",
            description:
              "Стоматолог. Работаю в частной клинике в центре. Первичная консультация бесплатно для своих.",
            contact: "@kolia_dentist",
            photo: "https://i.pravatar.cc/150?img=60",
            addedBy: "user_7",
            createdAt: "2024-03-01",
          },
          {
            id: "s8",
            name: "Оксана Ткач",
            category: "masters",
            description:
              "Уборка квартир и офисов. Индивидуальный подход, собственные средства. Регулярно или разово.",
            contact: "@oksana_clean",
            photo: "https://i.pravatar.cc/150?img=38",
            addedBy: "user_8",
            createdAt: "2024-03-05",
          },
        ],
        i = [
          {
            id: "l1",
            type: "sell",
            title: "Детская коляска Bugaboo",
            description:
              "Почти новая, использовали 6 месяцев. Состояние отличное, все документы есть.",
            price: 350,
            photo:
              "https://images.unsplash.com/photo-1591016432367-d7e8b8b3ee74?w=400&q=80",
            contact: "@user_kolya",
            addedBy: "user_9",
            createdAt: "2024-03-10",
          },
          {
            id: "l2",
            type: "free",
            title: "Книги на русском языке",
            description:
              "Отдам коробку книг — классика, современная проза. Самовывоз из Petržalka.",
            contact: "@marina_ba",
            addedBy: "user_10",
            createdAt: "2024-03-11",
          },
          {
            id: "l3",
            type: "wanted",
            title: "Ищу велосипед для взрослого",
            description:
              "Нужен городской велосипед в хорошем состоянии, бюджет до 150€.",
            contact: "+421 911 222 333",
            addedBy: "user_11",
            createdAt: "2024-03-12",
          },
          {
            id: "l4",
            type: "rentout",
            title: "Сдаю комнату в Ružinov",
            description:
              "Уютная комната 14м\xb2 в квартире с двумя соседями. Рядом метро. Только для порядочных людей.",
            price: 450,
            contact: "@roman_room",
            addedBy: "user_12",
            createdAt: "2024-03-13",
          },
          {
            id: "l5",
            type: "sell",
            title: "iPhone 13 Pro, 256GB",
            description:
              "В отличном состоянии, со словацким чеком. Продаю в связи с переездом.",
            price: 600,
            photo:
              "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80",
            contact: "@iphone_seller",
            addedBy: "user_13",
            createdAt: "2024-03-14",
          },
        ],
        r = [
          {
            id: "e1",
            title: "Встреча русскоязычного сообщества",
            description:
              "Ежемесячная встреча в кафе. Знакомимся, общаемся, делимся опытом жизни в Братиславе. Все желающие приветствуются.",
            date: "2024-03-20T18:00:00",
            address: "Caf\xe9 Verne, Obchodn\xe1 18",
            isPlace: !1,
            addedBy: "user_14",
            createdAt: "2024-03-10",
          },
          {
            id: "e2",
            title: "Русская библиотека",
            description:
              "Небольшая библиотека с книгами на русском. Можно взять домой или читать на месте. Работает по субботам.",
            address: "Štef\xe1nikova 25, каждую субботу 10:00–14:00",
            isPlace: !0,
            addedBy: "user_15",
            createdAt: "2024-02-01",
          },
          {
            id: "e3",
            title: "Мастер-класс по словацкому языку",
            description:
              "Разговорный клуб для начинающих. Ведёт носитель языка, занятия проходят в неформальной обстановке.",
            date: "2024-03-22T17:30:00",
            address: "Coworking Hub, Primaci\xe1lne n\xe1mestie 1",
            isPlace: !1,
            addedBy: "user_16",
            createdAt: "2024-03-08",
          },
          {
            id: "e4",
            title: "Детская площадка у Дуная",
            description:
              "Место где собираются русскоязычные семьи с детьми по выходным. Неформально, без записи.",
            address: "N\xe1brežie arm. gen. L. Svobodu, рядом с фонтаном",
            isPlace: !0,
            addedBy: "user_17",
            createdAt: "2024-02-15",
          },
        ],
        s = [
          {
            id: "j1",
            type: "vacancy",
            title: "Водитель категории B/C",
            company: "Slovak Logistics s.r.o.",
            description:
              "Развозка товаров по Братиславе и окрестностям. Опыт от 1 года. Оформление официальное, зарплата вовремя.",
            salary: "1400–1700€",
            contact: "@slovak_logistics",
            remote: !1,
            addedBy: "user_30",
            createdAt: "2024-03-10",
          },
          {
            id: "j2",
            type: "vacancy",
            title: "Разработчик React / Next.js",
            company: "Стартап (удалённо)",
            description:
              "Ищем фронтенд-разработчика в небольшую команду. Проект интересный, стек современный. Оплата в евро.",
            salary: "2500–3500€",
            contact: "@dev_hiring_ba",
            remote: !0,
            addedBy: "user_31",
            createdAt: "2024-03-11",
          },
          {
            id: "j3",
            type: "resume",
            title: "Ищу работу — бухгалтер / финансист",
            description:
              "8 лет опыта, знаю словацкое законодательство, работала в s.r.o. Готова к частичной занятости или полной. Русский, словацкий, английский.",
            contact: "@irina_fin",
            remote: !1,
            addedBy: "user_32",
            createdAt: "2024-03-12",
          },
          {
            id: "j4",
            type: "vacancy",
            title: "Повар / помощник повара",
            company: "Ресторан в центре",
            description:
              "Русская и европейская кухня. Опыт обязателен. Условия обсуждаем лично. Легальное оформление.",
            salary: "1200–1500€",
            contact: "+421 902 345 678",
            remote: !1,
            addedBy: "user_33",
            createdAt: "2024-03-13",
          },
          {
            id: "j5",
            type: "resume",
            title: "Ищу работу — IT поддержка / системный администратор",
            description:
              "5 лет опыта в техподдержке и администрировании Windows/Linux. Есть ВНЖ, готов к работе сразу.",
            contact: "@sysadmin_ba",
            remote: !1,
            addedBy: "user_34",
            createdAt: "2024-03-14",
          },
        ],
        o = [
          {
            id: "h1",
            type: "rent",
            title: "2-комнатная квартира в Ružinov",
            description:
              "Светлая квартира 55м\xb2, свежий ремонт, вся техника. Рядом метро Ružinovsk\xe1. Только некурящие.",
            price: 950,
            address: "Ružinov, Bratislava",
            rooms: 2,
            photo:
              "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80",
            contact: "@apartment_ba",
            addedBy: "user_35",
            createdAt: "2024-03-10",
          },
          {
            id: "h2",
            type: "rent",
            title: "Комната в квартире с двумя соседями",
            description:
              "Комната 16м\xb2 в трёхкомнатной квартире. Соседи тихие, работающие. Petržalka, 10 мин до центра.",
            price: 420,
            address: "Petržalka, Bratislava",
            rooms: 1,
            contact: "@room_petrzalka",
            addedBy: "user_36",
            createdAt: "2024-03-11",
          },
          {
            id: "h3",
            type: "roommate",
            title: "Ищу соседа в 3-комнатную квартиру",
            description:
              "Занята одна комната, ищем третьего. Квартира большая, есть балкон. Старый город, удобно везде добираться.",
            price: 500,
            address: "Star\xe9 Mesto, Bratislava",
            contact: "@flatmate_search",
            addedBy: "user_37",
            createdAt: "2024-03-12",
          },
          {
            id: "h4",
            type: "buy",
            title: "Продаётся 3-комнатная квартира",
            description:
              "Просторная квартира 78м\xb2, хороший этаж, два балкона. Документы в порядке, собственник. Район Karlova Ves.",
            price: 185e3,
            address: "Karlova Ves, Bratislava",
            rooms: 3,
            photo:
              "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
            contact: "@sell_flat_ba",
            addedBy: "user_38",
            createdAt: "2024-03-13",
          },
        ];
    },
    4451: function (e, t, a) {
      "use strict";
      a.d(t, {
        Bv: function () {
          return r;
        },
        Hs: function () {
          return n;
        },
        Zz: function () {
          return o;
        },
        gO: function () {
          return i;
        },
        wW: function () {
          return s;
        },
      });
      let n = {
          doctors: "Врачи",
          lawyers: "Юристы",
          masters: "Мастера",
          nannies: "Няни",
          tutors: "Репетиторы",
          accountants: "Бухгалтеры",
          other: "Другое",
        },
        i = {
          doctors: "\uD83E\uDE7A",
          lawyers: "⚖️",
          masters: "\uD83D\uDD27",
          nannies: "\uD83D\uDC76",
          tutors: "\uD83D\uDCDA",
          accountants: "\uD83D\uDCCA",
          other: "✨",
        },
        r = {
          sell: "Продам",
          buy: "Куплю",
          free: "Отдам",
          wanted: "Ищу",
          rent: "Сниму",
          rentout: "Сдам",
        },
        s = { vacancy: "Вакансия", resume: "Резюме" },
        o = { rent: "Аренда", buy: "Продажа", roommate: "Ищу соседа" };
    },
  },
  function (e) {
    (e.O(0, [231, 971, 23, 744], function () {
      return e((e.s = 911));
    }),
      (_N_E = e.O()));
  },
]);
