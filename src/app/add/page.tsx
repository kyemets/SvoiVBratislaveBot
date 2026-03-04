"use client";

import { useState } from "react";
import {
  CATEGORY_LABELS,
  CATEGORY_ICONS,
  LISTING_TYPE_LABELS,
  Category,
  ListingType,
} from "@/types";
import { Card } from "@/components/ui";

type Section = "catalog" | "listings" | "events";

const SECTION_OPTIONS: {
  value: Section;
  icon: string;
  label: string;
  desc: string;
}[] = [
  {
    value: "catalog",
    icon: "🗂",
    label: "Специалист",
    desc: "Врач, юрист, мастер и др.",
  },
  {
    value: "listings",
    icon: "📢",
    label: "Объявление",
    desc: "Купить, продать, отдать",
  },
  { value: "events", icon: "🎉", label: "Событие", desc: "Встреча или место" },
];

export default function AddPage() {
  const [section, setSection] = useState<Section | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Catalog fields
  const [catCategory, setCatCategory] = useState<Category>("doctors");
  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");
  const [catContact, setCatContact] = useState("");

  // Listing fields
  const [listType, setListType] = useState<ListingType>("sell");
  const [listTitle, setListTitle] = useState("");
  const [listDesc, setListDesc] = useState("");
  const [listPrice, setListPrice] = useState("");
  const [listContact, setListContact] = useState("");

  // Event fields
  const [evTitle, setEvTitle] = useState("");
  const [evDesc, setEvDesc] = useState("");
  const [evDate, setEvDate] = useState("");
  const [evAddress, setEvAddress] = useState("");
  const [evIsPlace, setEvIsPlace] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 14px",
    borderRadius: "12px",
    border: "1.5px solid var(--border)",
    fontSize: "15px",
    fontFamily: "Inter, sans-serif",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
    color: "var(--text)",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--text-muted)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "6px",
    display: "block",
  };

  if (submitted) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>✅</div>
        <h2
          style={{
            fontFamily: "Unbounded, sans-serif",
            fontSize: "20px",
            margin: "0 0 12px",
          }}
        >
          Добавлено!
        </h2>
        <p style={{ color: "var(--text-muted)", margin: "0 0 24px" }}>
          Запись появится после проверки модератором.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSection(null);
          }}
          style={{
            background: "var(--blue)",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            borderRadius: "var(--radius)",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Добавить ещё
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ background: "var(--blue)", padding: "24px 20px 20px" }}>
        <h1
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "22px",
            fontFamily: "Unbounded, sans-serif",
          }}
        >
          Добавить
        </h1>
      </div>

      <div
        style={{
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Step 1: choose section */}
        <div>
          <span style={labelStyle}>Что добавляем?</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {SECTION_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSection(opt.value)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "var(--radius)",
                  cursor: "pointer",
                  border: `2px solid ${section === opt.value ? "var(--blue)" : "var(--border)"}`,
                  background:
                    section === opt.value ? "var(--blue-muted)" : "#fff",
                  textAlign: "left",
                  transition: "all 0.15s",
                }}
              >
                <span style={{ fontSize: "26px" }}>{opt.icon}</span>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "var(--text)",
                    }}
                  >
                    {opt.label}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    {opt.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: form based on section */}
        {section === "catalog" && (
          <Card
            style={{
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div>
              <span style={labelStyle}>Категория</span>
              <select
                value={catCategory}
                onChange={(e) => setCatCategory(e.target.value as Category)}
                style={{ ...inputStyle }}
              >
                {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
                  <option key={cat} value={cat}>
                    {CATEGORY_ICONS[cat]} {CATEGORY_LABELS[cat]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span style={labelStyle}>Имя</span>
              <input
                style={inputStyle}
                placeholder="Иван Иванов"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
              />
            </div>
            <div>
              <span style={labelStyle}>О себе</span>
              <textarea
                style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }}
                placeholder="Опыт, специализация, как могу помочь..."
                value={catDesc}
                onChange={(e) => setCatDesc(e.target.value)}
              />
            </div>
            <div>
              <span style={labelStyle}>Контакт</span>
              <input
                style={inputStyle}
                placeholder="@username или +421..."
                value={catContact}
                onChange={(e) => setCatContact(e.target.value)}
              />
            </div>
          </Card>
        )}

        {section === "listings" && (
          <Card
            style={{
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div>
              <span style={labelStyle}>Тип</span>
              <select
                value={listType}
                onChange={(e) => setListType(e.target.value as ListingType)}
                style={{ ...inputStyle }}
              >
                {(Object.keys(LISTING_TYPE_LABELS) as ListingType[]).map(
                  (t) => (
                    <option key={t} value={t}>
                      {LISTING_TYPE_LABELS[t]}
                    </option>
                  ),
                )}
              </select>
            </div>
            <div>
              <span style={labelStyle}>Заголовок</span>
              <input
                style={inputStyle}
                placeholder="Детская коляска Bugaboo"
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}
              />
            </div>
            <div>
              <span style={labelStyle}>Описание</span>
              <textarea
                style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                placeholder="Подробности..."
                value={listDesc}
                onChange={(e) => setListDesc(e.target.value)}
              />
            </div>
            <div>
              <span style={labelStyle}>Цена (€, если есть)</span>
              <input
                style={inputStyle}
                type="number"
                placeholder="350"
                value={listPrice}
                onChange={(e) => setListPrice(e.target.value)}
              />
            </div>
            <div>
              <span style={labelStyle}>Контакт</span>
              <input
                style={inputStyle}
                placeholder="@username или +421..."
                value={listContact}
                onChange={(e) => setListContact(e.target.value)}
              />
            </div>
          </Card>
        )}

        {section === "events" && (
          <Card
            style={{
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              {[false, true].map((isPlace) => (
                <button
                  key={String(isPlace)}
                  onClick={() => setEvIsPlace(isPlace)}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "13px",
                    border: `2px solid ${evIsPlace === isPlace ? "var(--blue)" : "var(--border)"}`,
                    background:
                      evIsPlace === isPlace ? "var(--blue-muted)" : "#fff",
                    color:
                      evIsPlace === isPlace
                        ? "var(--blue)"
                        : "var(--text-muted)",
                  }}
                >
                  {isPlace ? "📍 Место" : "🎉 Событие"}
                </button>
              ))}
            </div>
            <div>
              <span style={labelStyle}>Название</span>
              <input
                style={inputStyle}
                placeholder="Встреча в кафе"
                value={evTitle}
                onChange={(e) => setEvTitle(e.target.value)}
              />
            </div>
            <div>
              <span style={labelStyle}>Описание</span>
              <textarea
                style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                placeholder="Подробности..."
                value={evDesc}
                onChange={(e) => setEvDesc(e.target.value)}
              />
            </div>
            {!evIsPlace && (
              <div>
                <span style={labelStyle}>Дата и время</span>
                <input
                  style={inputStyle}
                  type="datetime-local"
                  value={evDate}
                  onChange={(e) => setEvDate(e.target.value)}
                />
              </div>
            )}
            <div>
              <span style={labelStyle}>Адрес</span>
              <input
                style={inputStyle}
                placeholder="Obchodná 18"
                value={evAddress}
                onChange={(e) => setEvAddress(e.target.value)}
              />
            </div>
          </Card>
        )}

        {section && (
          <button
            onClick={handleSubmit}
            style={{
              background: "var(--blue)",
              color: "#fff",
              border: "none",
              padding: "16px",
              borderRadius: "var(--radius)",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Отправить на проверку
          </button>
        )}
      </div>
    </div>
  );
}
