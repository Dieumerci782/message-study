'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
}

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  size = 'md',
}: ModalProps) {
  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 px-4">
        <div
          className={cn(
            'rounded-lg border border-neutral-border bg-neutral-surface shadow-xl',
            sizeClass[size]
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between border-b border-neutral-border px-6 py-4">
              <h2 className="text-lg font-semibold text-neutral-text">{title}</h2>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-md p-1 hover:bg-neutral-bg-secondary"
              >
                <X className="h-5 w-5 text-neutral-text-secondary" />
              </button>
            </div>
          )}

          {/* Content */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </>
  )
}
