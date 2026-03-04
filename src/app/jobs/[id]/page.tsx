import { notFound } from "next/navigation";
import Link from "next/link";
import { JOBS } from "@/data/mock";
import { JOB_TYPE_LABELS } from "@/types";
import { Card, Badge } from "@/components/ui";

interface Props {
  params: { id: string };
}

export default function JobDetailPage({ params }: Props) {
  const job = JOBS.find((j) => j.id === params.id);
  if (!job) return notFound();

  return (
    <div>
      <div style={{ background: "#1A3A2A", padding: "24px 20px 28px" }}>
        <Link
          href="/jobs"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          ← Работа
        </Link>
        <div
          style={{
            marginTop: "14px",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <Badge color="rgba(255,255,255,0.15)" textColor="#fff">
            {JOB_TYPE_LABELS[job.type]}
          </Badge>
          {job.remote && (
            <Badge color="rgba(255,255,255,0.15)" textColor="#fff">
              🌐 Удалённо
            </Badge>
          )}
        </div>
        <h1 style={{ margin: "10px 0 0", color: "#fff", fontSize: "20px" }}>
          {job.title}
        </h1>
        {job.company && (
          <p
            style={{
              margin: "6px 0 0",
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
            }}
          >
            🏢 {job.company}
          </p>
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
        {job.salary && (
          <Card style={{ padding: "16px" }}>
            <div
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Зарплата
            </div>
            <div
              style={{ fontWeight: 700, fontSize: "20px", color: "#1A3A2A" }}
            >
              {job.salary}
            </div>
          </Card>
        )}

        <Card style={{ padding: "16px" }}>
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
          <p style={{ margin: 0, lineHeight: 1.6 }}>{job.description}</p>
        </Card>

        <a
          href={
            job.contact.startsWith("@")
              ? `https://t.me/${job.contact.slice(1)}`
              : `tel:${job.contact}`
          }
          style={{
            display: "block",
            background: "#1A3A2A",
            color: "#fff",
            textAlign: "center",
            padding: "16px",
            borderRadius: "var(--radius)",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Написать {job.contact}
        </a>
      </div>
    </div>
  );
}
