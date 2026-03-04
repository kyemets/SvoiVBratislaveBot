import type { Metadata } from "next";
import "./globals.css";
import { BottomNav } from "@/components/layout/BottomNav";

export const metadata: Metadata = {
  title: "Свои в Братиславе",
  description: "Русскоязычное сообщество в Братиславе",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.disableClosingConfirmation();
    }
  `,
          }}
        />
        <main style={{ paddingBottom: "80px", minHeight: "100vh" }}>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
