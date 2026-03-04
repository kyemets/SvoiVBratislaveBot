'use client'

import React from 'react'

interface CardProps {
  children: React.ReactNode
  onClick?: () => void
  style?: React.CSSProperties
}

export function Card({ children, onClick, style }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--card)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        ...style,
      }}
      onMouseDown={e => onClick && ((e.currentTarget.style.transform = 'scale(0.98)'))}
      onMouseUp={e => onClick && ((e.currentTarget.style.transform = 'scale(1)'))}
      onTouchStart={e => onClick && ((e.currentTarget.style.transform = 'scale(0.98)'))}
      onTouchEnd={e => onClick && ((e.currentTarget.style.transform = 'scale(1)'))}
    >
      {children}
    </div>
  )
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ padding: '24px 20px 16px', background: 'var(--blue)' }}>
      <h1 style={{ margin: 0, fontSize: '22px', color: '#fff', fontFamily: 'Unbounded, sans-serif' }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ margin: '6px 0 0', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Badge({ children, color = 'var(--blue-muted)', textColor = 'var(--blue)' }: {
  children: React.ReactNode
  color?: string
  textColor?: string
}) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: '100px',
      background: color,
      color: textColor,
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.02em',
    }}>
      {children}
    </span>
  )
}
