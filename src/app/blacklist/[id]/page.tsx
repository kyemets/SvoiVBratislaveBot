import { notFound } from "next/navigation";
import Link from "next/link";
import { BLACKLIST } from "@/data/mock";
import { BLACKLIST_TYPE_LABELS, BLACKLIST_TYPE_ICONS } from "@/types";

interface Props {
  params: { id: string };
}

export default function BlacklistDetailPage({ params }: Props) {
  const entry = BLACKLIST.find((b) => b.id === params.id);
  if (!entry) return notFound();

  return (
    <div style={{ background: "#0F1923", minHeight: "100vh" }}>
      <div style={{ padding: "24px 20px 20px" }}>
        <Link
          href="/blacklist"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          ← Чёрный список
        </Link>

        <div
          style={{
            marginTop: "16px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: "100px",
              background: "rgba(255,60,60,0.15)",
              color: "#FF6B6B",
            }}
          >
            {BLACKLIST_TYPE_ICONS[entry.type]}{" "}
            {BLACKLIST_TYPE_LABELS[entry.type]}
          </span>
        </div>

        <h1
          style={{
            margin: "12px 0 0",
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          {entry.name}
        </h1>
      </div>

      <div
        style={{
          padding: "0 16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            background: "#1A2530",
            border: "1px solid #2A3540",
            borderRadius: "16px",
            padding: "18px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Что произошло
          </div>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              fontSize: "14px",
            }}
          >
            {entry.description}
          </p>
        </div>

        {entry.contact && (
          <div
            style={{
              background: "#1A2530",
              border: "1px solid #2A3540",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Контакт / аккаунт
            </div>
            <div style={{ color: "#FF6B6B", fontWeight: 600 }}>
              {entry.contact}
            </div>
          </div>
        )}

        <div
          style={{
            background: "rgba(255,200,0,0.08)",
            border: "1px solid rgba(255,200,0,0.2)",
            borderRadius: "12px",
            padding: "14px 16px",
            fontSize: "12px",
            color: "rgba(255,200,0,0.7)",
            lineHeight: 1.5,
          }}
        >
          ⚠️ Информация предоставлена пользователями сообщества. Делай
          собственные выводы.
        </div>
      </div>
    </div>
  );
}
