import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SPECIALISTS } from '@/data/mock'
import { CATEGORY_LABELS, CATEGORY_ICONS, Category } from '@/types'
import { PageHeader, Card, Badge } from '@/components/ui'

interface Props {
  params: { slug: string[] }
}

export default function CatalogSlugPage({ params }: Props) {
  const [segment, id] = params.slug

  // Specialist detail page
  if (id) {
    const specialist = SPECIALISTS.find(s => s.id === id)
    if (!specialist) return notFound()

    return (
      <div>
        <div style={{ background: 'var(--blue)', padding: '24px 20px 32px' }}>
          <Link href={`/catalog/${specialist.category}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>
            ← {CATEGORY_LABELS[specialist.category]}
          </Link>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '20px' }}>
            {specialist.photo && (
              <img src={specialist.photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)' }} />
            )}
            <div>
              <h1 style={{ margin: 0, color: '#fff', fontSize: '20px' }}>{specialist.name}</h1>
              <div style={{ marginTop: '8px' }}>
                <Badge color="rgba(255,255,255,0.15)" textColor="#fff">
                  {CATEGORY_ICONS[specialist.category]} {CATEGORY_LABELS[specialist.category]}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Card style={{ padding: '18px' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>О себе</div>
            <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text)' }}>{specialist.description}</p>
          </Card>

          <a href={specialist.contact.startsWith('@') ? `https://t.me/${specialist.contact.slice(1)}` : `tel:${specialist.contact}`}
            style={{
              display: 'block',
              background: 'var(--blue)',
              color: '#fff',
              textAlign: 'center',
              padding: '16px',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '15px',
            }}>
            Написать {specialist.contact}
          </a>
        </div>
      </div>
    )
  }

  // Category list page
  const category = segment as Category
  if (!CATEGORY_LABELS[category]) return notFound()

  const specialists = SPECIALISTS.filter(s => s.category === category)

  return (
    <div>
      <PageHeader
        title={`${CATEGORY_ICONS[category]} ${CATEGORY_LABELS[category]}`}
        subtitle={`${specialists.length} специалистов`}
      />
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {specialists.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
            Пока никого нет. Будь первым!
          </div>
        )}
        {specialists.map(s => (
          <Link key={s.id} href={`/catalog/${s.category}/${s.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <div style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                {s.photo && (
                  <img src={s.photo} alt="" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                )}
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>{s.name}</div>
                  <p style={{ margin: '6px 0 0', fontSize: '13px', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {s.description}
                  </p>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '18px', flexShrink: 0 }}>›</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
