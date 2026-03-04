"use client";

export type SortOrder = "newest" | "oldest";

interface SortFilterProps {
  value: SortOrder;
  onChange: (v: SortOrder) => void;
  darkBg?: boolean;
}

export function SortFilter({ value, onChange, darkBg }: SortFilterProps) {
  const activeBg = darkBg ? "#fff" : "var(--blue)";
  const activeText = darkBg ? "var(--blue)" : "#fff";
  const inactiveBg = darkBg ? "rgba(255,255,255,0.15)" : "var(--blue-muted)";
  const inactiveText = darkBg ? "#fff" : "var(--text-muted)";

  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {(["newest", "oldest"] as SortOrder[]).map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          style={{
            padding: "6px 14px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 600,
            background: value === opt ? activeBg : inactiveBg,
            color: value === opt ? activeText : inactiveText,
            transition: "all 0.15s",
          }}
        >
          {opt === "newest" ? "🕐 Новые" : "📅 Старые"}
        </button>
      ))}
    </div>
  );
}

// Sort helper used in all list pages
export function sortByDate<T extends { createdAt: string }>(
  items: T[],
  order: SortOrder,
): T[] {
  return [...items].sort((a, b) => {
    const diff =
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return order === "newest" ? diff : -diff;
  });
}
