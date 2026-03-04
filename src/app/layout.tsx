import type { Metadata } from 'next'
import './globals.css'
import { BottomNav } from '@/components/layout/BottomNav'

export const metadata: Metadata = {
  title: 'Свои в Братиславе',
  description: 'Русскоязычное сообщество в Братиславе',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <main style={{ paddingBottom: '80px', minHeight: '100vh' }}>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
