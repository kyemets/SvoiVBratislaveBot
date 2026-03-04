"use client";

import { useState } from "react";
import Link from "next/link";
import { LISTINGS } from "@/data/mock";
import { LISTING_TYPE_LABELS, ListingType } from "@/types";
import { Card, Badge } from "@/components/ui";
import { ViewCount } from "@/components/ui/ViewCount";
import {
  SortOrder,
  sortByDate,
  SortFilter,
} from "@/src/components/ui/SortFilter";

const TYPE_COLORS: Record<ListingType, { bg: string; text: string }> = {
  sell: { bg: "#EEF3FA", text: "#1B3F6B" },
  buy: { bg: "#F0FAF0", text: "#2D7A2D" },
  free: { bg: "#FFF0F0", text: "#C0392B" },
  wanted: { bg: "#FFF8EE", text: "#B8860B" },
  rent: { bg: "#F5F0FF", text: "#6B2FA0" },
  rentout: { bg: "#F0F8FF", text: "#1A6EA0" },
};

export default function ListingsPage() {
  const [activeType, setActiveType] = useState<ListingType | "all">("all");
  const [sort, setSort] = useState<SortOrder>("newest");

  const filtered = sortByDate(
    activeType === "all"
      ? LISTINGS
      : LISTINGS.filter((l) => l.type === activeType),
    sort,
  );

  return (
    <div>
      <div style={{ background: "var(--blue)", padding: "24px 20px 0" }}>
        <h1
          style={{
            margin: "0 0 16px",
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          Объявления
        </h1>

        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "12px",
            scrollbarWidth: "none",
          }}
        >
          <button
            onClick={() => setActiveType("all")}
            style={{
              flexShrink: 0,
              padding: "7px 16px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
              background:
                activeType === "all" ? "#fff" : "rgba(255,255,255,0.15)",
              color: activeType === "all" ? "var(--blue)" : "#fff",
            }}
          >
            Все
          </button>
          {(Object.keys(LISTING_TYPE_LABELS) as ListingType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              style={{
                flexShrink: 0,
                padding: "7px 16px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                background:
                  activeType === type ? "#fff" : "rgba(255,255,255,0.15)",
                color: activeType === type ? "var(--blue)" : "#fff",
              }}
            >
              {LISTING_TYPE_LABELS[type]}
            </button>
          ))}
        </div>

        <div style={{ paddingBottom: "16px" }}>
          <SortFilter value={sort} onChange={setSort} darkBg />
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
        {filtered.map((listing) => {
          const colors = TYPE_COLORS[listing.type];
          return (
            <Link
              key={listing.id}
              href={`/listings/${listing.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                {listing.photo && (
                  <img
                    src={listing.photo}
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
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "15px", flex: 1 }}>
                      {listing.title}
                    </div>
                    {listing.price && (
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "16px",
                          color: "var(--blue)",
                          flexShrink: 0,
                        }}
                      >
                        {listing.price}€
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      margin: "6px 0 10px",
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {listing.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Badge color={colors.bg} textColor={colors.text}>
                      {LISTING_TYPE_LABELS[listing.type]}
                    </Badge>
                    <ViewCount id={listing.id} />
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
