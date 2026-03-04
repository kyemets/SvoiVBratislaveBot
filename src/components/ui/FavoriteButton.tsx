"use client";

import { useFavorites } from "@/hooks/useFavorites";

interface Props {
  id: string;
}

export function FavoriteButton({ id }: Props) {
  const { isFavorite, toggle } = useFavorites();
  const active = isFavorite(id);

  return (
    <button
      onClick={() => toggle(id)}
      aria-label={active ? "Убрать из избранного" : "Добавить в избранное"}
      style={{
        background: active ? "rgba(232,60,60,0.1)" : "var(--card)",
        border: `1px solid ${active ? "rgba(232,60,60,0.3)" : "var(--border)"}`,
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "18px",
        flexShrink: 0,
        transition:
          "transform 150ms cubic-bezier(0.34,1.56,0.64,1), background 200ms ease",
        WebkitTapHighlightColor: "transparent",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.88)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.88)")}
      onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {active ? "❤️" : "🤍"}
    </button>
  );
}
