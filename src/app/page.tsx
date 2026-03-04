"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SPECIALISTS, LISTINGS, EVENTS, JOBS, HOUSING } from "@/data/mock";
import { CATEGORY_LABELS, LISTING_TYPE_LABELS } from "@/types";
import { Card, Badge } from "@/components/ui";

// ─── Animation CSS ────────────────────────────────────────────────────────────
// All timings use Apple's preferred ease-out curve.
// Stagger is baked into animation-delay so zero JS is needed for entrances.
const ANIMATION_STYLES = `
  :root {
    --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-spring: cubic-bezier(0.34, 1.42, 0.64, 1);
  }

  /* ── Entrance keyframes ── */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeScaleIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Hero layer ── */
  .anim-hero-label {
    animation: fadeIn 400ms var(--ease-out) both;
    animation-delay: 0ms;
  }
  .anim-hero-title {
    animation: fadeSlideUp 500ms var(--ease-out) both;
    animation-delay: 60ms;
  }
  .anim-hero-subtitle {
    animation: fadeSlideUp 500ms var(--ease-out) both;
    animation-delay: 120ms;
  }
  .anim-hero-counters {
    animation: fadeSlideUp 500ms var(--ease-out) both;
    animation-delay: 200ms;
  }

  /* ── Banner ── */
  .anim-banner {
    animation: fadeSlideDown 450ms var(--ease-out) both;
    animation-delay: 280ms;
  }

  /* ── Specialist of day ── */
  .anim-specialist-label {
    animation: fadeIn 400ms var(--ease-out) both;
    animation-delay: 360ms;
  }
  .anim-specialist-card {
    animation: fadeScaleIn 480ms var(--ease-out) both;
    animation-delay: 420ms;
  }

  /* ── Section tiles (stagger) ── */
  .anim-tile-0 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 520ms; }
  .anim-tile-1 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 590ms; }
  .anim-tile-2 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 660ms; }
  .anim-tile-3 { animation: fadeSlideUp 420ms var(--ease-out) both; animation-delay: 730ms; }

  /* ── Recent cards (stagger) ── */
  .anim-recent-label {
    animation: fadeIn 400ms var(--ease-out) both;
    animation-delay: 800ms;
  }
  .anim-recent-0 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 850ms; }
  .anim-recent-1 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 910ms; }
  .anim-recent-2 { animation: fadeSlideUp 380ms var(--ease-out) both; animation-delay: 970ms; }

  /* ── Tap / press feedback ── */
  /* Scale down on press, spring back slightly over 1 on release */
  .pressable {
    transition: transform 150ms var(--ease-spring);
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
  .pressable:active {
    transform: scale(0.97);
    transition: transform 80ms var(--ease-out);
  }

  /* ── Arrow nudge on hover (desktop / pointer devices) ── */
  @media (hover: hover) {
    .pressable:hover .arrow-hint {
      transform: translateX(4px);
      opacity: 1;
    }
  }
  .arrow-hint {
    transition: transform 200ms var(--ease-out), opacity 200ms var(--ease-out);
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    href: "/catalog",
    icon: "🗂",
    label: "Каталог",
    desc: "Врачи, юристы, мастера",
    color: "#EEF3FA",
    border: "#C5D5EE",
  },
  {
    href: "/listings",
    icon: "📢",
    label: "Объявления",
    desc: "Купить, продать, отдать",
    color: "#FFF8EE",
    border: "#F0D898",
  },
  {
    href: "/events",
    icon: "🎉",
    label: "События",
    desc: "Места и встречи",
    color: "#F0FAF0",
    border: "#A8D8A8",
  },
  {
    href: "/blacklist",
    icon: "⚠️",
    label: "Чёрный список",
    desc: "Кидалы и плохие работодатели",
    color: "#0F1923",
    border: "#2A3540",
  },
];

const ADMIN_BANNER = {
  active: true,
  emoji: "📌",
  text: "Добро пожаловать! Мы только запустились — добавляй своих специалистов и помогай сообществу расти.",
  link: "/add",
  linkLabel: "Добавить →",
};

function getDailySpecialistIndex(total: number): number {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return day % total;
}

// ─── Counter hook ──────────────────────────────────────────────────────────────
// Animates a number from 0 → target over `duration` ms using easeOut.
function useCountUp(target: number, duration = 1100, delay = 200) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startTime: number | null = null;
    let raf: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = String(Math.round(easeOut(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay]);

  return ref;
}

// ─── Counter component ────────────────────────────────────────────────────────
function AnimatedCounter({
  count,
  label,
  delay,
}: {
  count: number;
  label: string;
  delay: number;
}) {
  const ref = useCountUp(count, 1100, delay);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "20px",
          fontFamily: "Unbounded, sans-serif",
          lineHeight: 1,
        }}
      >
        <span ref={ref}>0</span>
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "11px",
          marginTop: "3px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const recentSpecialist = SPECIALISTS[SPECIALISTS.length - 1];
  const recentListing = LISTINGS[LISTINGS.length - 1];
  const recentEvent = EVENTS[EVENTS.length - 1];

  const dailySpecialist =
    SPECIALISTS[getDailySpecialistIndex(SPECIALISTS.length)];

  const counts = {
    specialists: SPECIALISTS.length,
    listings: LISTINGS.length,
    events: EVENTS.length,
    jobs: JOBS.length,
    housing: HOUSING.length,
  };

  // Counter delays are offset from the hero-counters animation delay (200ms)
  const counterBaseDelay = 400;

  return (
    <div>
      {/* Inject animation styles once */}
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_STYLES }} />

      {/* ── Hero ── */}
      <div
        style={{
          background: "var(--blue)",
          padding: "32px 20px 28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles — purely visual, no animation needed */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -20,
            right: 60,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(232,184,75,0.2)",
          }}
        />

        <p
          className="anim-hero-label"
          style={{
            margin: "0 0 8px",
            color: "var(--accent)",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Братислава
        </p>

        <h1
          className="anim-hero-title"
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "26px",
            lineHeight: 1.2,
          }}
        >
          Свои
          <br />в Братиславе
        </h1>

        <p
          className="anim-hero-subtitle"
          style={{
            margin: "10px 0 0",
            color: "rgba(255,255,255,0.65)",
            fontSize: "14px",
          }}
        >
          Русскоязычное сообщество
        </p>

        {/* Counters — animate in as a group, numbers count up internally */}
        <div
          className="anim-hero-counters"
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <AnimatedCounter
            count={counts.specialists}
            label="специалистов"
            delay={counterBaseDelay}
          />
          <AnimatedCounter
            count={counts.listings}
            label="объявлений"
            delay={counterBaseDelay + 80}
          />
          <AnimatedCounter
            count={counts.events}
            label="событий"
            delay={counterBaseDelay + 160}
          />
          <AnimatedCounter
            count={counts.jobs}
            label="вакансий"
            delay={counterBaseDelay + 240}
          />
        </div>
      </div>

      {/* ── Admin Banner ── */}
      {ADMIN_BANNER.active && (
        <div
          className="anim-banner"
          style={{
            margin: "16px 16px 0",
            background: "var(--accent)",
            borderRadius: "var(--radius)",
            padding: "14px 16px",
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "20px", flexShrink: 0 }}>
            {ADMIN_BANNER.emoji}
          </span>
          <div style={{ flex: 1 }}>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#0F1923",
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {ADMIN_BANNER.text}
            </p>
            {ADMIN_BANNER.link && (
              <Link
                href={ADMIN_BANNER.link}
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0F1923",
                  textDecoration: "none",
                }}
              >
                {ADMIN_BANNER.linkLabel}
              </Link>
            )}
          </div>
        </div>
      )}

      {/* ── Specialist of the Day ── */}
      <div style={{ padding: "16px 16px 4px" }}>
        <h2
          className="anim-specialist-label"
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}
        >
          Специалист дня
        </h2>

        <div className="anim-specialist-card">
          <Link
            href={`/catalog/${dailySpecialist.category}/${dailySpecialist.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              className="pressable"
              style={{
                background:
                  "linear-gradient(135deg, var(--blue) 0%, #2B5499 100%)",
                borderRadius: "var(--radius)",
                padding: "16px",
                display: "flex",
                gap: "14px",
                alignItems: "center",
              }}
            >
              {dailySpecialist.photo && (
                <img
                  src={dailySpecialist.photo}
                  alt=""
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(255,255,255,0.3)",
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{ fontWeight: 700, fontSize: "15px", color: "#fff" }}
                >
                  {dailySpecialist.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.6)",
                    marginTop: "3px",
                  }}
                >
                  {CATEGORY_LABELS[dailySpecialist.category]}
                </div>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {dailySpecialist.description}
                </p>
              </div>
              <span
                className="arrow-hint"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                ›
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Section Tiles ── */}
      <div
        style={{
          padding: "16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {SECTIONS.map((s, i) => (
          <div key={s.href} className={`anim-tile-${i}`}>
            <Link href={s.href} style={{ textDecoration: "none" }}>
              <div
                className="pressable"
                style={{
                  background: s.color,
                  border: `1px solid ${s.border}`,
                  borderRadius: "var(--radius)",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "32px", lineHeight: 1 }}>
                  {s.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: s.href === "/blacklist" ? "#fff" : "var(--text)",
                      fontFamily: "Unbounded, sans-serif",
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color:
                        s.href === "/blacklist"
                          ? "rgba(255,255,255,0.5)"
                          : "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
                <span
                  className="arrow-hint"
                  style={{
                    marginLeft: "auto",
                    color:
                      s.href === "/blacklist"
                        ? "rgba(255,255,255,0.4)"
                        : "var(--text-muted)",
                    fontSize: "18px",
                  }}
                >
                  ›
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* ── Recent ── */}
      <div style={{ padding: "4px 16px 24px" }}>
        <h2
          className="anim-recent-label"
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            margin: "0 0 12px",
          }}
        >
          Недавно добавлено
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Recent Specialist */}
          <div className="anim-recent-0">
            <Link
              href={`/catalog/${recentSpecialist.category}/${recentSpecialist.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="pressable">
                <Card>
                  <div
                    style={{
                      padding: "14px 16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={recentSpecialist.photo}
                      alt=""
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {recentSpecialist.name}
                      </div>
                      <Badge>
                        {CATEGORY_LABELS[recentSpecialist.category]}
                      </Badge>
                    </div>
                    <span
                      className="arrow-hint"
                      style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                    >
                      ›
                    </span>
                  </div>
                </Card>
              </div>
            </Link>
          </div>

          {/* Recent Listing */}
          <div className="anim-recent-1">
            <Link
              href={`/listings/${recentListing.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="pressable">
                <Card>
                  <div
                    style={{
                      padding: "14px 16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "28px" }}>📢</span>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {recentListing.title}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          marginTop: "4px",
                          alignItems: "center",
                        }}
                      >
                        <Badge color="#FFF8EE" textColor="#B8860B">
                          {LISTING_TYPE_LABELS[recentListing.type]}
                        </Badge>
                        {recentListing.price && (
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "var(--blue)",
                            }}
                          >
                            {recentListing.price}€
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className="arrow-hint"
                      style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                    >
                      ›
                    </span>
                  </div>
                </Card>
              </div>
            </Link>
          </div>

          {/* Recent Event */}
          <div className="anim-recent-2">
            <Link
              href={`/events/${recentEvent.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="pressable">
                <Card>
                  <div
                    style={{
                      padding: "14px 16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "28px" }}>🎉</span>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {recentEvent.title}
                      </div>
                      <Badge color="#F0FAF0" textColor="#2D7A2D">
                        {recentEvent.isPlace ? "Место" : "Событие"}
                      </Badge>
                    </div>
                    <span
                      className="arrow-hint"
                      style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                    >
                      ›
                    </span>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
