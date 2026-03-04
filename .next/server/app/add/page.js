(() => {
  var e = {};
  ((e.id = 853),
    (e.ids = [853]),
    (e.modules = {
      7849: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external");
      },
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      5319: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          r(4988),
          r(9176),
          r(5866));
        var n = r(3191),
          s = r(8716),
          a = r(7922),
          l = r.n(a),
          i = r(5231),
          o = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => i[e]);
        r.d(t, o);
        let d = [
            "",
            {
              children: [
                "add",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 4988)),
                        "/Users/kostiantyn/Downloads/bratislava-app/src/app/add/page.tsx",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 9176)),
                "/Users/kostiantyn/Downloads/bratislava-app/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/add/page.tsx",
          ],
          u = "/add/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          x = new n.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/add/page",
              pathname: "/add",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      9363: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 2994, 23)),
          Promise.resolve().then(r.t.bind(r, 6114, 23)),
          Promise.resolve().then(r.t.bind(r, 9727, 23)),
          Promise.resolve().then(r.t.bind(r, 9671, 23)),
          Promise.resolve().then(r.t.bind(r, 1868, 23)),
          Promise.resolve().then(r.t.bind(r, 4759, 23)));
      },
      586: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 1809));
      },
      7764: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 9596)),
          Promise.resolve().then(r.bind(r, 108)));
      },
      1809: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => o }));
        var n = r(326),
          s = r(7577),
          a = r(5342),
          l = r(2068);
        let i = [
          {
            value: "catalog",
            icon: "\uD83D\uDDC2",
            label: "Специалист",
            desc: "Врач, юрист, мастер и др.",
          },
          {
            value: "listings",
            icon: "\uD83D\uDCE2",
            label: "Объявление",
            desc: "Купить, продать, отдать",
          },
          {
            value: "events",
            icon: "\uD83C\uDF89",
            label: "Событие",
            desc: "Встреча или место",
          },
        ];
        function o() {
          let [e, t] = (0, s.useState)(null),
            [r, o] = (0, s.useState)(!1),
            [d, c] = (0, s.useState)("doctors"),
            [u, p] = (0, s.useState)(""),
            [x, h] = (0, s.useState)(""),
            [g, v] = (0, s.useState)(""),
            [f, y] = (0, s.useState)("sell"),
            [m, b] = (0, s.useState)(""),
            [j, D] = (0, s.useState)(""),
            [S, C] = (0, s.useState)(""),
            [w, k] = (0, s.useState)(""),
            [P, z] = (0, s.useState)(""),
            [_, B] = (0, s.useState)(""),
            [T, U] = (0, s.useState)(""),
            [A, W] = (0, s.useState)(""),
            [q, H] = (0, s.useState)(!1),
            E = {
              width: "100%",
              padding: "13px 14px",
              borderRadius: "12px",
              border: "1.5px solid var(--border)",
              fontSize: "15px",
              fontFamily: "Inter, sans-serif",
              background: "#fff",
              outline: "none",
              boxSizing: "border-box",
              color: "var(--text)",
            },
            O = {
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--text-muted)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "6px",
              display: "block",
            };
          return r
            ? (0, n.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "70vh",
                  padding: "40px 20px",
                  textAlign: "center",
                },
                children: [
                  n.jsx("div", {
                    style: { fontSize: "64px", marginBottom: "20px" },
                    children: "✅",
                  }),
                  n.jsx("h2", {
                    style: {
                      fontFamily: "Unbounded, sans-serif",
                      fontSize: "20px",
                      margin: "0 0 12px",
                    },
                    children: "Добавлено!",
                  }),
                  n.jsx("p", {
                    style: { color: "var(--text-muted)", margin: "0 0 24px" },
                    children: "Запись появится после проверки модератором.",
                  }),
                  n.jsx("button", {
                    onClick: () => {
                      (o(!1), t(null));
                    },
                    style: {
                      background: "var(--blue)",
                      color: "#fff",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "var(--radius)",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                    },
                    children: "Добавить ещё",
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  n.jsx("div", {
                    style: {
                      background: "var(--blue)",
                      padding: "24px 20px 20px",
                    },
                    children: n.jsx("h1", {
                      style: {
                        margin: 0,
                        color: "#fff",
                        fontSize: "22px",
                        fontFamily: "Unbounded, sans-serif",
                      },
                      children: "Добавить",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    style: {
                      padding: "20px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    },
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          n.jsx("span", {
                            style: O,
                            children: "Что добавляем?",
                          }),
                          n.jsx("div", {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            },
                            children: i.map((r) =>
                              (0, n.jsxs)(
                                "button",
                                {
                                  onClick: () => t(r.value),
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "14px",
                                    padding: "14px 16px",
                                    borderRadius: "var(--radius)",
                                    cursor: "pointer",
                                    border: `2px solid ${e === r.value ? "var(--blue)" : "var(--border)"}`,
                                    background:
                                      e === r.value
                                        ? "var(--blue-muted)"
                                        : "#fff",
                                    textAlign: "left",
                                    transition: "all 0.15s",
                                  },
                                  children: [
                                    n.jsx("span", {
                                      style: { fontSize: "26px" },
                                      children: r.icon,
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        n.jsx("div", {
                                          style: {
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            color: "var(--text)",
                                          },
                                          children: r.label,
                                        }),
                                        n.jsx("div", {
                                          style: {
                                            fontSize: "12px",
                                            color: "var(--text-muted)",
                                          },
                                          children: r.desc,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                r.value,
                              ),
                            ),
                          }),
                        ],
                      }),
                      "catalog" === e &&
                        (0, n.jsxs)(l.Card, {
                          style: {
                            padding: "18px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                          },
                          children: [
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Категория",
                                }),
                                n.jsx("select", {
                                  value: d,
                                  onChange: (e) => c(e.target.value),
                                  style: { ...E },
                                  children: Object.keys(a.Hs).map((e) =>
                                    (0, n.jsxs)(
                                      "option",
                                      {
                                        value: e,
                                        children: [a.gO[e], " ", a.Hs[e]],
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", { style: O, children: "Имя" }),
                                n.jsx("input", {
                                  style: E,
                                  placeholder: "Иван Иванов",
                                  value: u,
                                  onChange: (e) => p(e.target.value),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", { style: O, children: "О себе" }),
                                n.jsx("textarea", {
                                  style: {
                                    ...E,
                                    minHeight: "90px",
                                    resize: "vertical",
                                  },
                                  placeholder:
                                    "Опыт, специализация, как могу помочь...",
                                  value: x,
                                  onChange: (e) => h(e.target.value),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Контакт",
                                }),
                                n.jsx("input", {
                                  style: E,
                                  placeholder: "@username или +421...",
                                  value: g,
                                  onChange: (e) => v(e.target.value),
                                }),
                              ],
                            }),
                          ],
                        }),
                      "listings" === e &&
                        (0, n.jsxs)(l.Card, {
                          style: {
                            padding: "18px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                          },
                          children: [
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", { style: O, children: "Тип" }),
                                n.jsx("select", {
                                  value: f,
                                  onChange: (e) => y(e.target.value),
                                  style: { ...E },
                                  children: Object.keys(a.Bv).map((e) =>
                                    n.jsx(
                                      "option",
                                      { value: e, children: a.Bv[e] },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Заголовок",
                                }),
                                n.jsx("input", {
                                  style: E,
                                  placeholder: "Детская коляска Bugaboo",
                                  value: m,
                                  onChange: (e) => b(e.target.value),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Описание",
                                }),
                                n.jsx("textarea", {
                                  style: {
                                    ...E,
                                    minHeight: "80px",
                                    resize: "vertical",
                                  },
                                  placeholder: "Подробности...",
                                  value: j,
                                  onChange: (e) => D(e.target.value),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Цена (€, если есть)",
                                }),
                                n.jsx("input", {
                                  style: E,
                                  type: "number",
                                  placeholder: "350",
                                  value: S,
                                  onChange: (e) => C(e.target.value),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Контакт",
                                }),
                                n.jsx("input", {
                                  style: E,
                                  placeholder: "@username или +421...",
                                  value: w,
                                  onChange: (e) => k(e.target.value),
                                }),
                              ],
                            }),
                          ],
                        }),
                      "events" === e &&
                        (0, n.jsxs)(l.Card, {
                          style: {
                            padding: "18px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                          },
                          children: [
                            n.jsx("div", {
                              style: { display: "flex", gap: "8px" },
                              children: [!1, !0].map((e) =>
                                n.jsx(
                                  "button",
                                  {
                                    onClick: () => H(e),
                                    style: {
                                      flex: 1,
                                      padding: "10px",
                                      borderRadius: "12px",
                                      cursor: "pointer",
                                      fontWeight: 600,
                                      fontSize: "13px",
                                      border: `2px solid ${q === e ? "var(--blue)" : "var(--border)"}`,
                                      background:
                                        q === e ? "var(--blue-muted)" : "#fff",
                                      color:
                                        q === e
                                          ? "var(--blue)"
                                          : "var(--text-muted)",
                                    },
                                    children: e
                                      ? "\uD83D\uDCCD Место"
                                      : "\uD83C\uDF89 Событие",
                                  },
                                  String(e),
                                ),
                              ),
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Название",
                                }),
                                n.jsx("input", {
                                  style: E,
                                  placeholder: "Встреча в кафе",
                                  value: P,
                                  onChange: (e) => z(e.target.value),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", {
                                  style: O,
                                  children: "Описание",
                                }),
                                n.jsx("textarea", {
                                  style: {
                                    ...E,
                                    minHeight: "80px",
                                    resize: "vertical",
                                  },
                                  placeholder: "Подробности...",
                                  value: _,
                                  onChange: (e) => B(e.target.value),
                                }),
                              ],
                            }),
                            !q &&
                              (0, n.jsxs)("div", {
                                children: [
                                  n.jsx("span", {
                                    style: O,
                                    children: "Дата и время",
                                  }),
                                  n.jsx("input", {
                                    style: E,
                                    type: "datetime-local",
                                    value: T,
                                    onChange: (e) => U(e.target.value),
                                  }),
                                ],
                              }),
                            (0, n.jsxs)("div", {
                              children: [
                                n.jsx("span", { style: O, children: "Адрес" }),
                                n.jsx("input", {
                                  style: E,
                                  placeholder: "Obchodn\xe1 18",
                                  value: A,
                                  onChange: (e) => W(e.target.value),
                                }),
                              ],
                            }),
                          ],
                        }),
                      e &&
                        n.jsx("button", {
                          onClick: function () {
                            o(!0);
                          },
                          style: {
                            background: "var(--blue)",
                            color: "#fff",
                            border: "none",
                            padding: "16px",
                            borderRadius: "var(--radius)",
                            fontSize: "15px",
                            fontWeight: 600,
                            cursor: "pointer",
                            width: "100%",
                          },
                          children: "Отправить на проверку",
                        }),
                    ],
                  }),
                ],
              });
        }
      },
      9596: (e, t, r) => {
        "use strict";
        r.d(t, { BottomNav: () => i });
        var n = r(326),
          s = r(434),
          a = r(5047);
        let l = [
          { href: "/", icon: "\uD83C\uDFE0", label: "Главная" },
          { href: "/catalog", icon: "\uD83D\uDDC2", label: "Каталог" },
          { href: "/search", icon: "\uD83D\uDD0D", label: "Поиск" },
          { href: "/add", icon: "＋", label: "Добавить" },
          { href: "/more", icon: "⋯", label: "Ещё" },
        ];
        function i() {
          let e = (0, a.usePathname)();
          return "/onboarding" === e
            ? null
            : n.jsx("nav", {
                style: {
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  zIndex: 100,
                  paddingBottom: "env(safe-area-inset-bottom)",
                },
                children: l.map((t) => {
                  let r = "/" === t.href ? "/" === e : e.startsWith(t.href),
                    a = "/add" === t.href;
                  return (0, n.jsxs)(
                    s.default,
                    {
                      href: t.href,
                      style: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 4px 8px",
                        textDecoration: "none",
                        gap: "3px",
                      },
                      children: [
                        n.jsx("span", {
                          style: {
                            fontSize: a ? "22px" : "20px",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: a ? "36px" : "auto",
                            height: a ? "36px" : "auto",
                            borderRadius: a ? "50%" : 0,
                            background: a ? "var(--blue)" : "transparent",
                            color: a ? "#fff" : "inherit",
                            marginBottom: a ? "2px" : 0,
                          },
                          children: t.icon,
                        }),
                        n.jsx("span", {
                          style: {
                            fontSize: "10px",
                            fontWeight: r ? 600 : 400,
                            color: r ? "var(--blue)" : "var(--text-muted)",
                            letterSpacing: "0.01em",
                          },
                          children: t.label,
                        }),
                      ],
                    },
                    t.href,
                  );
                }),
              });
        }
      },
      108: (e, t, r) => {
        "use strict";
        (r.d(t, { OnboardingGate: () => s }), r(7577));
        var n = r(5047);
        function s() {
          return ((0, n.useRouter)(), (0, n.usePathname)(), null);
        }
      },
      2068: (e, t, r) => {
        "use strict";
        r.d(t, { Badge: () => l, Card: () => s, PageHeader: () => a });
        var n = r(326);
        function s({ children: e, onClick: t, style: r }) {
          return n.jsx("div", {
            onClick: t,
            style: {
              background: "var(--card)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              cursor: t ? "pointer" : "default",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              ...r,
            },
            onMouseDown: (e) =>
              t && (e.currentTarget.style.transform = "scale(0.98)"),
            onMouseUp: (e) =>
              t && (e.currentTarget.style.transform = "scale(1)"),
            onTouchStart: (e) =>
              t && (e.currentTarget.style.transform = "scale(0.98)"),
            onTouchEnd: (e) =>
              t && (e.currentTarget.style.transform = "scale(1)"),
            children: e,
          });
        }
        function a({ title: e, subtitle: t }) {
          return (0, n.jsxs)("div", {
            style: { padding: "24px 20px 16px", background: "var(--blue)" },
            children: [
              n.jsx("h1", {
                style: {
                  margin: 0,
                  fontSize: "22px",
                  color: "#fff",
                  fontFamily: "Unbounded, sans-serif",
                },
                children: e,
              }),
              t &&
                n.jsx("p", {
                  style: {
                    margin: "6px 0 0",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "13px",
                  },
                  children: t,
                }),
            ],
          });
        }
        function l({
          children: e,
          color: t = "var(--blue-muted)",
          textColor: r = "var(--blue)",
        }) {
          return n.jsx("span", {
            style: {
              display: "inline-block",
              padding: "3px 10px",
              borderRadius: "100px",
              background: t,
              color: r,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            },
            children: e,
          });
        }
        r(7577);
      },
      5342: (e, t, r) => {
        "use strict";
        r.d(t, {
          Bv: () => a,
          Hs: () => n,
          Zz: () => i,
          gO: () => s,
          wW: () => l,
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
          s = {
            doctors: "\uD83E\uDE7A",
            lawyers: "⚖️",
            masters: "\uD83D\uDD27",
            nannies: "\uD83D\uDC76",
            tutors: "\uD83D\uDCDA",
            accountants: "\uD83D\uDCCA",
            other: "✨",
          },
          a = {
            sell: "Продам",
            buy: "Куплю",
            free: "Отдам",
            wanted: "Ищу",
            rent: "Сниму",
            rentout: "Сдам",
          },
          l = { vacancy: "Вакансия", resume: "Резюме" },
          i = { rent: "Аренда", buy: "Продажа", roommate: "Ищу соседа" };
      },
      4988: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, { $$typeof: () => l, __esModule: () => a, default: () => i }));
        var n = r(8570);
        let s = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/add/page.tsx`,
          ),
          { __esModule: a, $$typeof: l } = s;
        s.default;
        let i = (0, n.createProxy)(
          String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/add/page.tsx#default`,
        );
      },
      9176: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => h, metadata: () => x }));
        var n = r(9510);
        r(5023);
        var s = r(8570);
        let a = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx`,
          ),
          { __esModule: l, $$typeof: i } = a;
        a.default;
        let o = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx#BottomNav`,
          ),
          d = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx`,
          ),
          { __esModule: c, $$typeof: u } = d;
        d.default;
        let p = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx#OnboardingGate`,
          ),
          x = {
            title: "Свои в Братиславе",
            description: "Русскоязычное сообщество в Братиславе",
          };
        function h({ children: e }) {
          return (0, n.jsxs)("html", {
            lang: "ru",
            children: [
              n.jsx("head", {
                children: n.jsx("script", {
                  src: "https://telegram.org/js/telegram-web-app.js",
                }),
              }),
              (0, n.jsxs)("body", {
                children: [
                  n.jsx("script", {
                    dangerouslySetInnerHTML: {
                      __html: `
          window.addEventListener('load', function() {
            if (window.Telegram && window.Telegram.WebApp) {
              window.Telegram.WebApp.ready();
              window.Telegram.WebApp.expand();
            }
          });
        `,
                    },
                  }),
                  (0, n.jsxs)("main", {
                    style: { paddingBottom: "80px", minHeight: "100vh" },
                    children: [n.jsx(p, {}), e],
                  }),
                  n.jsx(o, {}),
                ],
              }),
            ],
          });
        }
      },
      5023: () => {},
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [24], () => r(5319));
  module.exports = n;
})();
