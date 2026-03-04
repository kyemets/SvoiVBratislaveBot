'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { href: '/',          icon: '🏠', label: 'Главная' },
  { href: '/catalog',   icon: '🗂',  label: 'Каталог'  },
  { href: '/listings',  icon: '📢', label: 'Объявления' },
  { href: '/events',    icon: '🎉', label: 'События'   },
  { href: '/add',       icon: '＋',  label: 'Добавить'  },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      zIndex: 100,
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {TABS.map(tab => {
        const active = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href)
        const isAdd = tab.href === '/add'

        return (
          <Link key={tab.href} href={tab.href} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 4px 8px',
            textDecoration: 'none',
            gap: '3px',
          }}>
            <span style={{
              fontSize: isAdd ? '22px' : '20px',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isAdd ? '36px' : 'auto',
              height: isAdd ? '36px' : 'auto',
              borderRadius: isAdd ? '50%' : 0,
              background: isAdd ? 'var(--blue)' : 'transparent',
              color: isAdd ? '#fff' : 'inherit',
              marginBottom: isAdd ? '2px' : 0,
            }}>
              {tab.icon}
            </span>
            <span style={{
              fontSize: '10px',
              fontWeight: active ? 600 : 400,
              color: active ? 'var(--blue)' : 'var(--text-muted)',
              letterSpacing: '0.01em',
            }}>
              {tab.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
