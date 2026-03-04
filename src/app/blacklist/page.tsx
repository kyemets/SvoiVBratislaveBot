import Link from "next/link";
import { BLACKLIST } from "@/data/mock";
import { BLACKLIST_TYPE_LABELS, BLACKLIST_TYPE_ICONS } from "@/types";
import { Card } from "@/components/ui";

export default function BlacklistPage() {
  return (
    <div style={{ background: "#0F1923", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ padding: "24px 20px 20px" }}>
        <h1
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          ⚠️ Чёрный список
        </h1>
        <p
          style={{
            margin: "8px 0 0",
            color: "rgba(255,255,255,0.45)",
            fontSize: "13px",
            lineHeight: 1.5,
          }}
        >
          Мошенники, недобросовестные работодатели и арендодатели. Будь
          осторожен.
        </p>
      </div>

      {/* Warning banner */}
      <div
        style={{
          margin: "0 16px 16px",
          background: "rgba(255,200,0,0.1)",
          border: "1px solid rgba(255,200,0,0.25)",
          borderRadius: "12px",
          padding: "12px 14px",
          fontSize: "12px",
          color: "rgba(255,200,0,0.8)",
          lineHeight: 1.5,
        }}
      >
        ⚠️ Записи добавляются пользователями. Проверяй информацию самостоятельно
        перед выводами.
      </div>

      {/* List */}
      <div
        style={{
          padding: "0 16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {BLACKLIST.map((entry) => (
          <Link
            key={entry.id}
            href={`/blacklist/${entry.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#1A2530",
                border: "1px solid #2A3540",
                borderRadius: "16px",
                padding: "16px",
                transition: "transform 0.15s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{ fontWeight: 700, fontSize: "15px", color: "#fff" }}
                >
                  {entry.name}
                </div>
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: "100px",
                    background: "rgba(255,60,60,0.15)",
                    color: "#FF6B6B",
                    letterSpacing: "0.02em",
                  }}
                >
                  {BLACKLIST_TYPE_ICONS[entry.type]}{" "}
                  {BLACKLIST_TYPE_LABELS[entry.type]}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: 1.5,
                }}
              >
                {entry.description}
              </p>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Добавлено{" "}
                {new Date(entry.createdAt).toLocaleDateString("ru-RU")}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
