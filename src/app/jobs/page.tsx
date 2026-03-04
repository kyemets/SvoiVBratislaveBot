"use client";

import { useState } from "react";
import Link from "next/link";
import { JOBS } from "@/data/mock";
import { JOB_TYPE_LABELS, JobType } from "@/types";
import { Card, Badge } from "@/components/ui";

export default function JobsPage() {
  const [activeType, setActiveType] = useState<JobType | "all">("all");

  const filtered =
    activeType === "all" ? JOBS : JOBS.filter((j) => j.type === activeType);

  return (
    <div>
      <div style={{ background: "#1A3A2A", padding: "24px 20px 0" }}>
        <h1
          style={{
            margin: "0 0 16px",
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          💼 Работа
        </h1>
        <div style={{ display: "flex", gap: "8px", paddingBottom: "16px" }}>
          {(["all", "vacancy", "resume"] as const).map((t) => (
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
                color: activeType === t ? "#1A3A2A" : "#fff",
              }}
            >
              {t === "all" ? "Все" : JOB_TYPE_LABELS[t]}
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
        {filtered.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "15px", flex: 1 }}>
                    {job.title}
                  </div>
                  <Badge
                    color={job.type === "vacancy" ? "#EEF3FA" : "#F0FAF0"}
                    textColor={job.type === "vacancy" ? "#1B3F6B" : "#2D7A2D"}
                  >
                    {JOB_TYPE_LABELS[job.type]}
                  </Badge>
                </div>
                {job.company && (
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      marginBottom: "4px",
                    }}
                  >
                    🏢 {job.company}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "8px",
                  }}
                >
                  {job.salary && (
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#1A3A2A",
                      }}
                    >
                      {job.salary}
                    </span>
                  )}
                  {job.remote && (
                    <Badge color="#F0FAF0" textColor="#2D7A2D">
                      🌐 Удалённо
                    </Badge>
                  )}
                </div>
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
                  {job.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
