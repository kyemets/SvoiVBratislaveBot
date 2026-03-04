import Link from "next/link";
import { SPECIALISTS, LISTINGS, EVENTS } from "@/data/mock";
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
];

export default function HomePage() {
  // Mix recent items from all sections
  const recentSpecialist = SPECIALISTS[SPECIALISTS.length - 1];
  const recentListing = LISTINGS[LISTINGS.length - 1];
  const recentEvent = EVENTS[EVENTS.length - 1];

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
      </div>

      {/* Section tiles */}
      <div
        style={{
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
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
                transition: "transform 0.15s",
              }}
            >
              <span style={{ fontSize: "32px", lineHeight: 1 }}>{s.icon}</span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "var(--text)",
                    fontFamily: "Unbounded, sans-serif",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    marginTop: "2px",
                  }}
                >
                  {s.desc}
                </div>
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  color: "var(--text-muted)",
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
            fontSize: "14px",
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
          {/* Recent specialist */}
          <Link
            href={`/catalog/${recentSpecialist.id}`}
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

          {/* Recent listing */}
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

          {/* Recent event */}
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
