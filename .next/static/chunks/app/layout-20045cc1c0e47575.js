(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    8422: function (e, n, t) {
      (Promise.resolve().then(t.t.bind(t, 3054, 23)),
        Promise.resolve().then(t.bind(t, 6941)),
        Promise.resolve().then(t.bind(t, 1224)));
    },
    7138: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return r.a;
        },
      });
      var o = t(231),
        r = t.n(o);
    },
    6463: function (e, n, t) {
      "use strict";
      var o = t(1169);
      (t.o(o, "notFound") &&
        t.d(n, {
          notFound: function () {
            return o.notFound;
          },
        }),
        t.o(o, "usePathname") &&
          t.d(n, {
            usePathname: function () {
              return o.usePathname;
            },
          }),
        t.o(o, "useRouter") &&
          t.d(n, {
            useRouter: function () {
              return o.useRouter;
            },
          }));
    },
    6941: function (e, n, t) {
      "use strict";
      t.d(n, {
        BottomNav: function () {
          return a;
        },
      });
      var o = t(7437),
        r = t(7138),
        i = t(6463);
      let u = [
        { href: "/", icon: "\uD83C\uDFE0", label: "Главная" },
        { href: "/catalog", icon: "\uD83D\uDDC2", label: "Каталог" },
        { href: "/search", icon: "\uD83D\uDD0D", label: "Поиск" },
        { href: "/add", icon: "＋", label: "Добавить" },
        { href: "/more", icon: "⋯", label: "Ещё" },
      ];
      function a() {
        let e = (0, i.usePathname)();
        return "/onboarding" === e
          ? null
          : (0, o.jsx)("nav", {
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
              children: u.map((n) => {
                let t = "/" === n.href ? "/" === e : e.startsWith(n.href),
                  i = "/add" === n.href;
                return (0, o.jsxs)(
                  r.default,
                  {
                    href: n.href,
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
                      (0, o.jsx)("span", {
                        style: {
                          fontSize: i ? "22px" : "20px",
                          lineHeight: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: i ? "36px" : "auto",
                          height: i ? "36px" : "auto",
                          borderRadius: i ? "50%" : 0,
                          background: i ? "var(--blue)" : "transparent",
                          color: i ? "#fff" : "inherit",
                          marginBottom: i ? "2px" : 0,
                        },
                        children: n.icon,
                      }),
                      (0, o.jsx)("span", {
                        style: {
                          fontSize: "10px",
                          fontWeight: t ? 600 : 400,
                          color: t ? "var(--blue)" : "var(--text-muted)",
                          letterSpacing: "0.01em",
                        },
                        children: n.label,
                      }),
                    ],
                  },
                  n.href,
                );
              }),
            });
      }
    },
    1224: function (e, n, t) {
      "use strict";
      t.d(n, {
        OnboardingGate: function () {
          return i;
        },
      });
      var o = t(2265),
        r = t(6463);
      function i() {
        let e = (0, r.useRouter)(),
          n = (0, r.usePathname)();
        return (
          (0, o.useEffect)(() => {
            "/onboarding" !== n &&
              (localStorage.getItem("onboarding_done") ||
                e.replace("/onboarding"));
          }, [n, e]),
          null
        );
      }
    },
    3054: function () {},
  },
  function (e) {
    (e.O(0, [141, 231, 971, 23, 744], function () {
      return e((e.s = 8422));
    }),
      (_N_E = e.O()));
  },
]);
