"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SPECIALISTS, LISTINGS, EVENTS, JOBS, HOUSING } from "@/data/mock";
import {
  CATEGORY_LABELS,
  LISTING_TYPE_LABELS,
  JOB_TYPE_LABELS,
  HOUSING_TYPE_LABELS,
} from "@/types";
import { Card, Badge } from "@/components/ui";

type ResultItem = {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor?: string;
  badgeText?: string;
  emoji: string;
};

function search(query: string): ResultItem[] {
  if (query.length < 2) return [];
  const q = query.toLowerCase();

  const results: ResultItem[] = [];

  SPECIALISTS.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q),
  ).forEach((s) =>
    results.push({
      id: s.id,
      href: `/catalog/${s.category}/${s.id}`,
      title: s.name,
      subtitle: s.description.slice(0, 60) + "...",
      badge: CATEGORY_LABELS[s.category],
      emoji: "🗂",
    }),
  );

  LISTINGS.filter(
    (l) =>
      l.title.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q),
  ).forEach((l) =>
    results.push({
      id: l.id,
      href: `/listings/${l.id}`,
      title: l.title,
      subtitle: l.description.slice(0, 60) + "...",
      badge: LISTING_TYPE_LABELS[l.type],
      badgeColor: "#FFF8EE",
      badgeText: "#B8860B",
      emoji: "📢",
    }),
  );

  EVENTS.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q),
  ).forEach((e) =>
    results.push({
      id: e.id,
      href: `/events/${e.id}`,
      title: e.title,
      subtitle: e.description.slice(0, 60) + "...",
      badge: e.isPlace ? "Место" : "Событие",
      badgeColor: "#F0FAF0",
      badgeText: "#2D7A2D",
      emoji: "🎉",
    }),
  );

  JOBS.filter(
    (j) =>
      j.title.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q) ||
      (j.company && j.company.toLowerCase().includes(q)),
  ).forEach((j) =>
    results.push({
      id: j.id,
      href: `/jobs/${j.id}`,
      title: j.title,
      subtitle: j.company || j.description.slice(0, 60) + "...",
      badge: JOB_TYPE_LABELS[j.type],
      badgeColor: "#EEF3FA",
      badgeText: "#1B3F6B",
      emoji: "💼",
    }),
  );

  HOUSING.filter(
    (h) =>
      h.title.toLowerCase().includes(q) ||
      h.description.toLowerCase().includes(q) ||
      (h.address && h.address.toLowerCase().includes(q)),
  ).forEach((h) =>
    results.push({
      id: h.id,
      href: `/housing/${h.id}`,
      title: h.title,
      subtitle: h.address || h.description.slice(0, 60) + "...",
      badge: HOUSING_TYPE_LABELS[h.type],
      badgeColor: "#F5F0FF",
      badgeText: "#6B2FA0",
      emoji: "🏠",
    }),
  );

  return results;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => search(query), [query]);

  return (
    <div>
      <div style={{ background: "var(--blue)", padding: "24px 20px 20px" }}>
        <h1
          style={{
            margin: "0 0 14px",
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          Поиск
        </h1>
        <input
          autoFocus
          placeholder="Врач, квартира, работа..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "13px 16px",
            borderRadius: "12px",
            border: "none",
            fontSize: "15px",
            fontFamily: "Inter, sans-serif",
            background: "#fff",
            color: "var(--text)",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {query.length < 2 && (
          <div
            style={{
              textAlign: "center",
              padding: "48px 20px",
              color: "var(--text-muted)",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔍</div>
            <div style={{ fontSize: "15px" }}>Начни вводить запрос</div>
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "48px 20px",
              color: "var(--text-muted)",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>😕</div>
            <div style={{ fontSize: "15px" }}>Ничего не найдено</div>
            <div style={{ fontSize: "13px", marginTop: "6px" }}>
              Попробуй другой запрос
            </div>
          </div>
        )}

        {results.map((item) => (
          <Link
            key={`${item.emoji}-${item.id}`}
            href={item.href}
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
                <span style={{ fontSize: "24px", flexShrink: 0 }}>
                  {item.emoji}
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: "4px",
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <Badge color={item.badgeColor} textColor={item.badgeText}>
                    {item.badge}
                  </Badge>
                </div>
                <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>
                  ›
                </span>
              </div>
            </Card>
          </Link>
        ))}

        {results.length > 0 && (
          <div
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "var(--text-muted)",
              padding: "8px",
            }}
          >
            Найдено: {results.length}
          </div>
        )}
      </div>
    </div>
  );
}
