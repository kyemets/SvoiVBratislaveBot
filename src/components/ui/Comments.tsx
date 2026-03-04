"use client";

import { useState } from "react";
import { useComments } from "@/hooks/useComments";

interface Props {
  itemId: string;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function Comments({ itemId }: Props) {
  const { comments, add, remove } = useComments(itemId);
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    add(text);
    setText("");
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* Section label */}
      <div
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        Обсуждение · {comments.length}
      </div>

      {/* Comment list */}
      {comments.length === 0 ? (
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          Будь первым кто оставит комментарий
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {comments.map((c) => (
            <div
              key={c.id}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "12px 14px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
                  {c.text}
                </p>
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  {formatDate(c.createdAt)}
                </span>
              </div>
              {/* Delete only own comments — since we have no auth, all are "yours" */}
              <button
                onClick={() => remove(c.id)}
                aria-label="Удалить"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  padding: "2px 4px",
                  flexShrink: 0,
                  lineHeight: 1,
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "flex-end",
        }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Написать комментарий..."
          rows={2}
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            background: "var(--card)",
            color: "var(--text)",
            fontSize: "14px",
            resize: "none",
            fontFamily: "inherit",
            outline: "none",
            lineHeight: 1.5,
          }}
        />
        <button
          onClick={handleSend}
          disabled={!text.trim()}
          style={{
            background: text.trim() ? "var(--blue)" : "var(--border)",
            color: text.trim() ? "#fff" : "var(--text-muted)",
            border: "none",
            borderRadius: "var(--radius)",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: text.trim() ? "pointer" : "default",
            transition: "background 200ms ease",
            flexShrink: 0,
            WebkitTapHighlightColor: "transparent",
            height: "fit-content",
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
