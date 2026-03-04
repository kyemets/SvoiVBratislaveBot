"use client";

import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import { SPECIALISTS } from "@/data/mock";
import { CATEGORY_LABELS, CATEGORY_ICONS, Category } from "@/types";
import { PageHeader, Card, Badge } from "@/components/ui";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { Comments } from "@/components/ui/Comments";

interface Props {
  params: { slug: string[] };
}

export default function CatalogSlugPage({ params }: Props) {
  const [segment, id] = params.slug;

  // ── Specialist detail ────────────────────────────────────────────────────────
  if (id) {
    return <SpecialistDetail id={id} category={segment as Category} />;
  }

  // ── Category list ────────────────────────────────────────────────────────────
  return <CategoryList category={segment as Category} />;
}

// ─── Specialist detail (needs client hooks: favorites + comments) ─────────────

function SpecialistDetail({
  id,
  category,
}: {
  id: string;
  category: Category;
}) {
  const specialist = SPECIALISTS.find((s) => s.id === id);
  if (!specialist) return notFound();

  return (
    <div>
      {/* Header */}
      <div style={{ background: "var(--blue)", padding: "24px 20px 32px" }}>
        <Link
          href={`/catalog/${specialist.category}`}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          ← {CATEGORY_LABELS[specialist.category]}
        </Link>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {specialist.photo && (
            <img
              src={specialist.photo}
              alt=""
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid rgba(255,255,255,0.3)",
              }}
            />
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ margin: 0, color: "#fff", fontSize: "20px" }}>
              {specialist.name}
            </h1>
            <div style={{ marginTop: "8px" }}>
              <Badge color="rgba(255,255,255,0.15)" textColor="#fff">
                {CATEGORY_ICONS[specialist.category]}{" "}
                {CATEGORY_LABELS[specialist.category]}
              </Badge>
            </div>
          </div>
          {/* Favorite button floats right in header */}
          <div style={{ flexShrink: 0 }}>
            <FavoriteButton id={specialist.id} />
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* About */}
        <Card style={{ padding: "18px" }}>
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
            О себе
          </div>
          <p style={{ margin: 0, lineHeight: 1.6, color: "var(--text)" }}>
            {specialist.description}
          </p>
        </Card>

        {/* Contact button */}
        <a
          href={
            specialist.contact.startsWith("@")
              ? `https://t.me/${specialist.contact.slice(1)}`
              : `tel:${specialist.contact}`
          }
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
          Написать {specialist.contact}
        </a>

        {/* Comments */}
        <Card style={{ padding: "18px" }}>
          <Comments itemId={specialist.id} />
        </Card>
      </div>
    </div>
  );
}

// ─── Category list with search filter ────────────────────────────────────────

function CategoryList({ category }: { category: Category }) {
  const [query, setQuery] = useState("");

  if (!CATEGORY_LABELS[category]) return notFound();

  const all = SPECIALISTS.filter((s) => s.category === category);

  // Filter by name or description, case-insensitive
  const filtered = query.trim()
    ? all.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase()),
      )
    : all;

  return (
    <div>
      <PageHeader
        title={`${CATEGORY_ICONS[category]} ${CATEGORY_LABELS[category]}`}
        subtitle={`${all.length} специалистов`}
      />

      {/* Search filter */}
      <div style={{ padding: "12px 16px 4px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "10px 14px",
          }}
        >
          <span style={{ fontSize: "16px", flexShrink: 0, opacity: 0.5 }}>
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по имени или описанию..."
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              outline: "none",
              fontSize: "14px",
              color: "var(--text)",
              fontFamily: "inherit",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                color: "var(--text-muted)",
                padding: 0,
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div
        style={{
          padding: "12px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {filtered.length === 0 && query && (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              color: "var(--text-muted)",
            }}
          >
            Ничего не найдено по «{query}»
          </div>
        )}
        {filtered.length === 0 && !query && (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              color: "var(--text-muted)",
            }}
          >
            Пока никого нет. Будь первым!
          </div>
        )}
        {filtered.map((s) => (
          <SpecialistCard key={s.id} specialist={s} />
        ))}
      </div>
    </div>
  );
}

// ─── Specialist card with inline favorite button ──────────────────────────────

function SpecialistCard({
  specialist,
}: {
  specialist: (typeof SPECIALISTS)[0];
}) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Link
        href={`/catalog/${specialist.category}/${specialist.id}`}
        style={{ textDecoration: "none", flex: 1, minWidth: 0 }}
      >
        <Card>
          <div
            style={{
              padding: "16px",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
            }}
          >
            {specialist.photo && (
              <img
                src={specialist.photo}
                alt=""
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: "15px" }}>
                {specialist.name}
              </div>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {specialist.description}
              </p>
            </div>
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              ›
            </span>
          </div>
        </Card>
      </Link>
      {/* Favorite button sits outside the link */}
      <FavoriteButton id={specialist.id} />
    </div>
  );
}
