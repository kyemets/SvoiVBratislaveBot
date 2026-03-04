"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { LISTINGS } from "@/data/mock";
import { LISTING_TYPE_LABELS } from "@/types";
import { Card, Badge } from "@/components/ui";
import { ViewCount } from "@/components/ui/ViewCount";
import { AuthorAvatar } from "@/src/components/ui/AuthorAvatar";
import { ShareButton } from "@/src/components/ui/ShareButton";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { Comments } from "@/components/ui/Comments";

interface Props {
  params: { id: string };
}

export default function ListingDetailPage({ params }: Props) {
  const listing = LISTINGS.find((l) => l.id === params.id);
  if (!listing) return notFound();

  return (
    <div>
      {listing.photo && (
        <img
          src={listing.photo}
          alt=""
          style={{ width: "100%", height: "240px", objectFit: "cover" }}
        />
      )}

      <div
        style={{
          background: listing.photo ? "transparent" : "var(--blue)",
          padding: listing.photo ? "0" : "24px 20px 20px",
        }}
      >
        {!listing.photo && (
          <>
            <Link
              href="/listings"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              ← Объявления
            </Link>
            <h1 style={{ margin: "12px 0 0", color: "#fff", fontSize: "20px" }}>
              {listing.title}
            </h1>
          </>
        )}
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {listing.photo && (
          <div>
            <Link
              href="/listings"
              style={{
                color: "var(--text-muted)",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              ← Объявления
            </Link>
            <h1
              style={{
                margin: "8px 0",
                fontSize: "20px",
                fontFamily: "Unbounded, sans-serif",
              }}
            >
              {listing.title}
            </h1>
          </div>
        )}

        {/* Type badge + price + favorite */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Badge>{LISTING_TYPE_LABELS[listing.type]}</Badge>
          {listing.price && (
            <span
              style={{
                fontWeight: 700,
                fontSize: "20px",
                color: "var(--blue)",
              }}
            >
              {listing.price}€
            </span>
          )}
          <div style={{ marginLeft: "auto" }}>
            <FavoriteButton id={listing.id} />
          </div>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ViewCount id={listing.id} />
            <AuthorAvatar addedBy={listing.addedBy} />
          </div>
          <ShareButton title={listing.title} url={`/listings/${listing.id}`} />
        </div>

        {/* Description */}
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
            Описание
          </div>
          <p style={{ margin: 0, lineHeight: 1.6 }}>{listing.description}</p>
        </Card>

        {/* Contact button */}
        <a
          href={
            listing.contact.startsWith("@")
              ? `https://t.me/${listing.contact.slice(1)}`
              : `tel:${listing.contact}`
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
          Связаться {listing.contact}
        </a>

        {/* Comments */}
        <Card style={{ padding: "18px" }}>
          <Comments itemId={listing.id} />
        </Card>
      </div>
    </div>
  );
}
