// import type { Metadata } from "next";
// import "./globals.css";
// import { BottomNav } from "@/components/layout/BottomNav";

// export const metadata: Metadata = {
//   title: "Свои в Братиславе",
//   description: "Русскоязычное сообщество в Братиславе",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ru">
//       <head>
//         <script src="https://telegram.org/js/telegram-web-app.js" />
//       </head>
//       <body>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//           window.addEventListener('load', function() {
//             if (window.Telegram && window.Telegram.WebApp) {
//               window.Telegram.WebApp.ready();
//               window.Telegram.WebApp.expand();
//             }
//           });
//         `,
//           }}
//         />
//         <main style={{ paddingBottom: "80px", minHeight: "100vh" }}>
//           {children}
//         </main>
//         <BottomNav />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import { BottomNav } from "@/components/layout/BottomNav";
import { OnboardingGate } from "@/components/ui/OnboardingGate";

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
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.addEventListener('load', function() {
            if (window.Telegram && window.Telegram.WebApp) {
              window.Telegram.WebApp.ready();
              window.Telegram.WebApp.expand();
            }
          });
        `,
          }}
        />
        <OnboardingGate />
        <main style={{ paddingBottom: "80px", minHeight: "100vh" }}>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
