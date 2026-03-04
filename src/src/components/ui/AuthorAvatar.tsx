"use client";

import { useEffect, useState } from "react";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

// In real app — fetch author info from DB using addedBy ID
// For now: show current Telegram user info if available, fallback to initials
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

interface AuthorAvatarProps {
  addedBy: string; // user ID — will be used for DB lookup later
  name?: string; // optional display name from mock data
  size?: number;
}

export function AuthorAvatar({
  addedBy,
  name = "Участник",
  size = 28,
}: AuthorAvatarProps) {
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    // Get current user from Telegram WebApp initData
    // TODO: when auth is added, fetch actual author by addedBy ID
    if (
      typeof window !== "undefined" &&
      window.Telegram?.WebApp?.initDataUnsafe?.user
    ) {
      setTgUser(window.Telegram.WebApp.initDataUnsafe.user as TelegramUser);
    }
  }, []);

  const displayName = tgUser ? tgUser.first_name : name;
  const photoUrl = tgUser?.photo_url;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {photoUrl ? (
        <img
          src={photoUrl}
          alt=""
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: "var(--blue-muted)",
            color: "var(--blue)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: `${size * 0.38}px`,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {getInitials(displayName)}
        </div>
      )}
      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
        {displayName}
      </span>
    </div>
  );
}
