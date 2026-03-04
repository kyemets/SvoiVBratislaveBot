"use client";

import { useState } from "react";
import Link from "next/link";
import { HOUSING } from "@/data/mock";
import { HOUSING_TYPE_LABELS, HousingType } from "@/types";
import { Card, Badge } from "@/components/ui";

const TYPE_COLORS: Record<HousingType, { bg: string; text: string }> = {
  rent: { bg: "#EEF3FA", text: "#1B3F6B" },
  buy: { bg: "#FFF8EE", text: "#B8860B" },
  roommate: { bg: "#F0FAF0", text: "#2D7A2D" },
};

export default function HousingPage() {
  const [activeType, setActiveType] = useState<HousingType | "all">("all");

  const filtered =
    activeType === "all"
      ? HOUSING
      : HOUSING.filter((h) => h.type === activeType);

  return (
    <div>
      <div style={{ background: "#2A1A3A", padding: "24px 20px 0" }}>
        <h1
          style={{
            margin: "0 0 16px",
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          🏠 Жильё
        </h1>
        <div style={{ display: "flex", gap: "8px", paddingBottom: "16px" }}>
          {(["all", "rent", "buy", "roommate"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              style={{
                flexShrink: 0,
                padding: "7px 16px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                background:
                  activeType === t ? "#fff" : "rgba(255,255,255,0.15)",
                color: activeType === t ? "#2A1A3A" : "#fff",
              }}
            >
              {t === "all" ? "Все" : HOUSING_TYPE_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {filtered.map((h) => {
          const colors = TYPE_COLORS[h.type];
          return (
            <Link
              key={h.id}
              href={`/housing/${h.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                {h.photo && (
                  <img
                    src={h.photo}
                    alt=""
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div style={{ padding: "14px 16px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "15px", flex: 1 }}>
                      {h.title}
                    </div>
                    {h.price && (
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#2A1A3A",
                          flexShrink: 0,
                        }}
                      >
                        {h.price >= 10000
                          ? `${(h.price / 1000).toFixed(0)}k€`
                          : `${h.price}€`}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      flexWrap: "wrap",
                      marginBottom: "8px",
                    }}
                  >
                    <Badge color={colors.bg} textColor={colors.text}>
                      {HOUSING_TYPE_LABELS[h.type]}
                    </Badge>
                    {h.rooms && (
                      <Badge color="#F5F5F5" textColor="#666">
                        {h.rooms}-комн.
                      </Badge>
                    )}
                  </div>
                  {h.address && (
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                      }}
                    >
                      📍 {h.address}
                    </div>
                  )}
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {h.description}
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
