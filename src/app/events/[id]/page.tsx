import { notFound } from "next/navigation";
import Link from "next/link";
import { EVENTS } from "@/data/mock";
import { Card, Badge } from "@/components/ui";

interface Props {
  params: { id: string };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function EventDetailPage({ params }: Props) {
  const event = EVENTS.find((e) => e.id === params.id);
  if (!event) return notFound();

  return (
    <div>
      <div style={{ background: "var(--blue)", padding: "24px 20px 28px" }}>
        <Link
          href="/events"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          ← События
        </Link>
        <div style={{ marginTop: "16px" }}>
          <Badge
            color={
              event.isPlace ? "rgba(255,255,255,0.15)" : "rgba(232,184,75,0.3)"
            }
            textColor="#fff"
          >
            {event.isPlace ? "📍 Место" : "🎉 Событие"}
          </Badge>
        </div>
        <h1 style={{ margin: "10px 0 0", color: "#fff", fontSize: "20px" }}>
          {event.title}
        </h1>
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {event.date && (
          <Card style={{ padding: "16px" }}>
            <div
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Когда
            </div>
            <div style={{ fontWeight: 600, color: "var(--blue)" }}>
              {formatDate(event.date)}
            </div>
          </Card>
        )}

        {event.address && (
          <Card style={{ padding: "16px" }}>
            <div
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Где
            </div>
            <div style={{ fontWeight: 500 }}>📍 {event.address}</div>
          </Card>
        )}

        <Card style={{ padding: "16px" }}>
          <div
            style={{
              fontSize: "12px",
              color: "var(--text-muted)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Описание
          </div>
          <p style={{ margin: 0, lineHeight: 1.6 }}>{event.description}</p>
        </Card>

        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "var(--blue)",
              color: "#fff",
              textAlign: "center",
              padding: "16px",
              borderRadius: "var(--radius)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Подробнее →
          </a>
        )}
      </div>
    </div>
  );
}
