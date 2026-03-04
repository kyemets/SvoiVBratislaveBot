import Link from "next/link";
import { SPECIALISTS, LISTINGS, EVENTS, JOBS, HOUSING } from "@/data/mock";
import { CATEGORY_LABELS, LISTING_TYPE_LABELS } from "@/types";
import { Card, Badge } from "@/components/ui";

const SECTIONS = [
  {
    href: "/catalog",
    icon: "🗂",
    label: "Каталог",
    desc: "Врачи, юристы, мастера",
    color: "#EEF3FA",
    border: "#C5D5EE",
  },
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
    href: "/blacklist",
    icon: "⚠️",
    label: "Чёрный список",
    desc: "Кидалы и плохие работодатели",
    color: "#0F1923",
    border: "#2A3540",
  },
];

// Admin banner — edit this to show announcements
const ADMIN_BANNER = {
  active: true,
  emoji: "📌",
  text: "Добро пожаловать! Мы только запустились — добавляй своих специалистов и помогай сообществу расти.",
  link: "/add",
  linkLabel: "Добавить →",
};

// Seeded random for "specialist of the day" — changes daily, stable within a day
function getDailySpecialistIndex(total: number): number {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return day % total;
}

export default function HomePage() {
  const recentSpecialist = SPECIALISTS[SPECIALISTS.length - 1];
  const recentListing = LISTINGS[LISTINGS.length - 1];
  const recentEvent = EVENTS[EVENTS.length - 1];

  const dailySpecialist =
    SPECIALISTS[getDailySpecialistIndex(SPECIALISTS.length)];

  // Counters across all sections
  const counts = {
    specialists: SPECIALISTS.length,
    listings: LISTINGS.length,
    events: EVENTS.length,
    jobs: JOBS.length,
    housing: HOUSING.length,
  };

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "var(--blue)",
          padding: "32px 20px 28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -20,
            right: 60,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(232,184,75,0.2)",
          }}
        />
        <p
          style={{
            margin: "0 0 8px",
            color: "var(--accent)",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Братислава
        </p>
        <h1
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "26px",
            lineHeight: 1.2,
          }}
        >
          Свои
          <br />в Братиславе
        </h1>
        <p
          style={{
            margin: "10px 0 0",
            color: "rgba(255,255,255,0.65)",
            fontSize: "14px",
          }}
        >
          Русскоязычное сообщество
        </p>

        {/* Counters */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "специалистов", count: counts.specialists },
            { label: "объявлений", count: counts.listings },
            { label: "событий", count: counts.events },
            { label: "вакансий", count: counts.jobs },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "20px",
                  fontFamily: "Unbounded, sans-serif",
                  lineHeight: 1,
                }}
              >
                {item.count}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "11px",
                  marginTop: "3px",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin banner */}
      {ADMIN_BANNER.active && (
        <div
          style={{
            margin: "16px 16px 0",
            background: "var(--accent)",
            borderRadius: "var(--radius)",
            padding: "14px 16px",
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "20px", flexShrink: 0 }}>
            {ADMIN_BANNER.emoji}
          </span>
          <div style={{ flex: 1 }}>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#0F1923",
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {ADMIN_BANNER.text}
            </p>
            {ADMIN_BANNER.link && (
              <Link
                href={ADMIN_BANNER.link}
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0F1923",
                  textDecoration: "none",
                }}
              >
                {ADMIN_BANNER.linkLabel}
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Specialist of the day */}
      <div style={{ padding: "16px 16px 4px" }}>
        <h2
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}
        >
          Специалист дня
        </h2>
        <Link
          href={`/catalog/${dailySpecialist.category}/${dailySpecialist.id}`}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, var(--blue) 0%, #2B5499 100%)",
              borderRadius: "var(--radius)",
              padding: "16px",
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
            {dailySpecialist.photo && (
              <img
                src={dailySpecialist.photo}
                alt=""
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,0.3)",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: "15px", color: "#fff" }}>
                {dailySpecialist.name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.6)",
                  marginTop: "3px",
                }}
              >
                {CATEGORY_LABELS[dailySpecialist.category]}
              </div>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {dailySpecialist.description}
              </p>
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              ›
            </span>
          </div>
        </Link>
      </div>

      {/* Section tiles */}
      <div
        style={{
          padding: "16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {SECTIONS.map((s) => (
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
              <span style={{ fontSize: "32px", lineHeight: 1 }}>{s.icon}</span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "16px",
                    color: s.href === "/blacklist" ? "#fff" : "var(--text)",
                    fontFamily: "Unbounded, sans-serif",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color:
                      s.href === "/blacklist"
                        ? "rgba(255,255,255,0.5)"
                        : "var(--text-muted)",
                    marginTop: "2px",
                  }}
                >
                  {s.desc}
                </div>
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  color:
                    s.href === "/blacklist"
                      ? "rgba(255,255,255,0.4)"
                      : "var(--text-muted)",
                  fontSize: "18px",
                }}
              >
                ›
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent */}
      <div style={{ padding: "4px 16px 24px" }}>
        <h2
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            margin: "0 0 12px",
          }}
        >
          Недавно добавлено
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link
            href={`/catalog/${recentSpecialist.category}/${recentSpecialist.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <img
                  src={recentSpecialist.photo}
                  alt=""
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {recentSpecialist.name}
                  </div>
                  <Badge>{CATEGORY_LABELS[recentSpecialist.category]}</Badge>
                </div>
                <span
                  style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                >
                  ›
                </span>
              </div>
            </Card>
          </Link>

          <Link
            href={`/listings/${recentListing.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "28px" }}>📢</span>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {recentListing.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      marginTop: "4px",
                      alignItems: "center",
                    }}
                  >
                    <Badge color="#FFF8EE" textColor="#B8860B">
                      {LISTING_TYPE_LABELS[recentListing.type]}
                    </Badge>
                    {recentListing.price && (
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--blue)",
                        }}
                      >
                        {recentListing.price}€
                      </span>
                    )}
                  </div>
                </div>
                <span
                  style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                >
                  ›
                </span>
              </div>
            </Card>
          </Link>

          <Link
            href={`/events/${recentEvent.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <div
                style={{
                  padding: "14px 16px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "28px" }}>🎉</span>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {recentEvent.title}
                  </div>
                  <Badge color="#F0FAF0" textColor="#2D7A2D">
                    {recentEvent.isPlace ? "Место" : "Событие"}
                  </Badge>
                </div>
                <span
                  style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                >
                  ›
                </span>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
