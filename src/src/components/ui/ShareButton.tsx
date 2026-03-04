"use client";

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  function handleShare() {
    const fullUrl = `https://bratislava-app.vercel.app${url}`;
    const text = encodeURIComponent(`${title}\n${fullUrl}`);

    // Use Telegram WebApp shareUrl if available
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.openTelegramLink(
        `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
      );
      return;
    }

    // Fallback — native share or clipboard
    if (navigator.share) {
      navigator.share({ title, url: fullUrl });
    } else {
      navigator.clipboard.writeText(fullUrl);
      alert("Ссылка скопирована!");
    }
  }

  return (
    <button
      onClick={handleShare}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 14px",
        borderRadius: "100px",
        border: "1.5px solid var(--border)",
        background: "transparent",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 600,
        color: "var(--text-muted)",
        transition: "all 0.15s",
      }}
    >
      <span style={{ fontSize: "15px" }}>↗</span>
      Поделиться
    </button>
  );
}
