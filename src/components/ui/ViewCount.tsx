// Mock view counts — replace with real DB calls when MongoDB is connected
// Formula: seeded random based on id so counts are stable across renders

function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function mockViewCount(id: string): number {
  const base = seededRandom(id) % 200;
  return base + 12; // minimum 12 views
}

interface ViewCountProps {
  id: string;
  style?: React.CSSProperties;
}

export function ViewCount({ id, style }: ViewCountProps) {
  const count = mockViewCount(id);

  return (
    <span
      style={{
        fontSize: "12px",
        color: "var(--text-muted)",
        display: "flex",
        alignItems: "center",
        gap: "3px",
        ...style,
      }}
    >
      <span style={{ fontSize: "13px" }}>👁</span>
      {count}
    </span>
  );
}
