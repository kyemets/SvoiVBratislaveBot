import Link from "next/link";

const MORE_SECTIONS = [
  {
    href: "/listings",
    icon: "📢",
    label: "Объявления",
    desc: "Купить, продать, отдать",
    color: "#FFF8EE",
    border: "#F0D898",
  },
  {
    href: "/events",
    icon: "🎉",
    label: "События",
    desc: "Места и встречи",
    color: "#F0FAF0",
    border: "#A8D8A8",
  },
  {
    href: "/jobs",
    icon: "💼",
    label: "Работа",
    desc: "Вакансии и резюме",
    color: "#EEF5EE",
    border: "#A8C8A8",
  },
  {
    href: "/housing",
    icon: "🏠",
    label: "Жильё",
    desc: "Аренда, покупка, соседи",
    color: "#F5F0FF",
    border: "#C8A8E8",
  },
  {
    href: "/blacklist",
    icon: "⚠️",
    label: "Чёрный список",
    desc: "Мошенники и кидалы",
    color: "#0F1923",
    border: "#2A3540",
  },
];

export default function MorePage() {
  return (
    <div>
      <div style={{ background: "var(--blue)", padding: "24px 20px 20px" }}>
        <h1
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          Разделы
        </h1>
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {MORE_SECTIONS.map((s) => (
          <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
            <div
              style={{
                background: s.color,
                border: `1px solid ${s.border}`,
                borderRadius: "var(--radius)",
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span style={{ fontSize: "28px", lineHeight: 1 }}>{s.icon}</span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: s.href === "/blacklist" ? "#fff" : "var(--text)",
                    fontFamily: "Unbounded, sans-serif",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    marginTop: "2px",
                    color:
                      s.href === "/blacklist"
                        ? "rgba(255,255,255,0.5)"
                        : "var(--text-muted)",
                  }}
                >
                  {s.desc}
                </div>
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "18px",
                  color:
                    s.href === "/blacklist"
                      ? "rgba(255,255,255,0.4)"
                      : "var(--text-muted)",
                }}
              >
                ›
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
