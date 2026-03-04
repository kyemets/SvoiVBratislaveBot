"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SLIDES = [
  {
    emoji: "👋",
    title: "Свои в Братиславе",
    desc: "Сообщество русскоязычных жителей Братиславы. Здесь все говорят на твоём языке.",
  },
  {
    emoji: "🗂",
    title: "Найди своего специалиста",
    desc: "Врачи, юристы, мастера — люди из нашего сообщества, которым можно доверять.",
  },
  {
    emoji: "💼",
    title: "Работа и жильё",
    desc: "Вакансии, резюме, аренда и продажа — всё в одном месте на русском языке.",
  },
  {
    emoji: "⚠️",
    title: "Будь осторожен",
    desc: "Чёрный список поможет избежать мошенников и недобросовестных работодателей.",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  function handleNext() {
    if (current < SLIDES.length - 1) {
      setCurrent(current + 1);
    } else {
      // Mark onboarding as done
      localStorage.setItem("onboarding_done", "1");
      router.push("/");
    }
  }

  function handleSkip() {
    localStorage.setItem("onboarding_done", "1");
    router.push("/");
  }

  const slide = SLIDES[current];
  const isLast = current === SLIDES.length - 1;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--blue)",
        display: "flex",
        flexDirection: "column",
        padding: "48px 24px 40px",
      }}
    >
      {/* Skip */}
      {!isLast && (
        <button
          onClick={handleSkip}
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.5)",
            fontSize: "14px",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          Пропустить
        </button>
      )}

      {/* Slide content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            marginBottom: "32px",
            lineHeight: 1,
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))",
          }}
        >
          {slide.emoji}
        </div>
        <h1
          style={{
            margin: "0 0 16px",
            color: "#fff",
            fontSize: "26px",
            fontFamily: "Unbounded, sans-serif",
            lineHeight: 1.2,
          }}
        >
          {slide.title}
        </h1>
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.7)",
            fontSize: "16px",
            lineHeight: 1.6,
            maxWidth: "280px",
          }}
        >
          {slide.desc}
        </p>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        {SLIDES.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "100px",
              transition: "width 0.3s ease",
              background: i === current ? "#fff" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleNext}
        style={{
          background: "#fff",
          color: "var(--blue)",
          border: "none",
          padding: "17px",
          borderRadius: "var(--radius)",
          fontSize: "16px",
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "Unbounded, sans-serif",
        }}
      >
        {isLast ? "Начать →" : "Далее"}
      </button>
    </div>
  );
}
