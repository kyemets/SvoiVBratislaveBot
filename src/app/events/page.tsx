import Link from 'next/link'
import { EVENTS } from '@/data/mock'
import { PageHeader, Card, Badge } from '@/components/ui'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })
}

export default function EventsPage() {
  const upcomingEvents = EVENTS.filter(e => !e.isPlace)
  const places = EVENTS.filter(e => e.isPlace)

  return (
    <div>
      <PageHeader title="События и места" subtitle="Встречи, тусовки, точки на карте" />

      <div style={{ padding: '20px 16px' }}>

        {upcomingEvents.length > 0 && (
          <>
            <h2 style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Ближайшие события
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {upcomingEvents.map(event => (
                <Link key={event.id} href={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
                  <Card>
                    <div style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ fontWeight: 700, fontSize: '15px', flex: 1 }}>{event.title}</div>
                        <Badge color="#EEF3FA" textColor="var(--blue)">Событие</Badge>
                      </div>
                      {event.date && (
                        <div style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: 600, marginBottom: '4px' }}>
                          📅 {formatDate(event.date)}
                        </div>
                      )}
                      {event.address && (
                        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📍 {event.address}</div>
                      )}
                      <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {event.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}

        {places.length > 0 && (
          <>
            <h2 style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Места
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {places.map(place => (
                <Link key={place.id} href={`/events/${place.id}`} style={{ textDecoration: 'none' }}>
                  <Card>
                    <div style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ fontWeight: 700, fontSize: '15px', flex: 1 }}>{place.title}</div>
                        <Badge color="#F0FAF0" textColor="#2D7A2D">Место</Badge>
                      </div>
                      {place.address && (
                        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>📍 {place.address}</div>
                      )}
                      <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {place.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
