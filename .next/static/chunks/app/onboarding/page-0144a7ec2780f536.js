(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [461],
  {
    8239: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 8743));
    },
    6463: function (e, n, t) {
      "use strict";
      var i = t(1169);
      (t.o(i, "notFound") &&
        t.d(n, {
          notFound: function () {
            return i.notFound;
          },
        }),
        t.o(i, "usePathname") &&
          t.d(n, {
            usePathname: function () {
              return i.usePathname;
            },
          }),
        t.o(i, "useRouter") &&
          t.d(n, {
            useRouter: function () {
              return i.useRouter;
            },
          }));
    },
    8743: function (e, n, t) {
      "use strict";
      (t.r(n),
        t.d(n, {
          default: function () {
            return u;
          },
        }));
      var i = t(7437),
        o = t(6463),
        r = t(2265);
      let s = [
        {
          emoji: "\uD83D\uDC4B",
          title: "Свои в Братиславе",
          desc: "Сообщество русскоязычных жителей Братиславы. Здесь все говорят на твоём языке.",
        },
        {
          emoji: "\uD83D\uDDC2",
          title: "Найди своего специалиста",
          desc: "Врачи, юристы, мастера — люди из нашего сообщества, которым можно доверять.",
        },
        {
          emoji: "\uD83D\uDCBC",
          title: "Работа и жильё",
          desc: "Вакансии, резюме, аренда и продажа — всё в одном месте на русском языке.",
        },
        {
          emoji: "⚠️",
          title: "Будь осторожен",
          desc: "Чёрный список поможет избежать мошенников и недобросовестных работодателей.",
        },
      ];
      function u() {
        let e = (0, o.useRouter)(),
          [n, t] = (0, r.useState)(0),
          u = s[n],
          l = n === s.length - 1;
        return (0, i.jsxs)("div", {
          style: {
            minHeight: "100vh",
            background: "var(--blue)",
            display: "flex",
            flexDirection: "column",
            padding: "48px 24px 40px",
          },
          children: [
            !l &&
              (0, i.jsx)("button", {
                onClick: function () {
                  (localStorage.setItem("onboarding_done", "1"), e.push("/"));
                },
                style: {
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "14px",
                  cursor: "pointer",
                  padding: "4px",
                },
                children: "Пропустить",
              }),
            (0, i.jsxs)("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              },
              children: [
                (0, i.jsx)("div", {
                  style: {
                    fontSize: "80px",
                    marginBottom: "32px",
                    lineHeight: 1,
                  },
                  children: u.emoji,
                }),
                (0, i.jsx)("h1", {
                  style: {
                    margin: "0 0 16px",
                    color: "#fff",
                    fontSize: "26px",
                    fontFamily: "Unbounded, sans-serif",
                    lineHeight: 1.2,
                  },
                  children: u.title,
                }),
                (0, i.jsx)("p", {
                  style: {
                    margin: 0,
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "16px",
                    lineHeight: 1.6,
                    maxWidth: "280px",
                  },
                  children: u.desc,
                }),
              ],
            }),
            (0, i.jsx)("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "32px",
              },
              children: s.map((e, t) =>
                (0, i.jsx)(
                  "div",
                  {
                    style: {
                      width: t === n ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "100px",
                      transition: "width 0.3s ease",
                      background: t === n ? "#fff" : "rgba(255,255,255,0.3)",
                    },
                  },
                  t,
                ),
              ),
            }),
            (0, i.jsx)("button", {
              onClick: function () {
                n < s.length - 1
                  ? t(n + 1)
                  : (localStorage.setItem("onboarding_done", "1"), e.push("/"));
              },
              style: {
                background: "#fff",
                color: "var(--blue)",
                border: "none",
                padding: "17px",
                borderRadius: "var(--radius)",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "Unbounded, sans-serif",
              },
              children: l ? "Начать →" : "Далее",
            }),
          ],
        });
      }
    },
  },
  function (e) {
    (e.O(0, [971, 23, 744], function () {
      return e((e.s = 8239));
    }),
      (_N_E = e.O()));
  },
]);
