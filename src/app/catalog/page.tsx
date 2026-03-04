import Link from 'next/link'
import { SPECIALISTS } from '@/data/mock'
import { CATEGORY_LABELS, CATEGORY_ICONS, Category } from '@/types'
import { PageHeader, Card } from '@/components/ui'

const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[]

export default function CatalogPage() {
  return (
    <div>
      <PageHeader title="Каталог" subtitle="Найди своего специалиста" />

      <div style={{ padding: '20px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {CATEGORIES.map(cat => {
            const count = SPECIALISTS.filter(s => s.category === cat).length
            return (
              <Link key={cat} href={`/catalog/${cat}`} style={{ textDecoration: 'none' }}>
                <Card style={{ padding: '20px 16px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '10px' }}>{CATEGORY_ICONS[cat]}</div>
                  <div style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'Unbounded, sans-serif', color: 'var(--text)' }}>
                    {CATEGORY_LABELS[cat]}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {count} {count === 1 ? 'специалист' : count < 5 ? 'специалиста' : 'специалистов'}
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
