import React from 'react'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: React.ReactNode
  actions?: Array<{
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
    destructive?: boolean
  }>
  size?: 'sm' | 'md' | 'lg'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  actions,
  size = 'md',
}) => {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className={`relative bg-white rounded-lg shadow-xl ${sizeClasses[size]} w-full mx-4`}>
        {/* Header */}
        {(title || description) && (
          <div className="border-b border-neutral-border px-6 py-4">
            {title && <h2 className="text-lg font-bold text-primary-800">{title}</h2>}
            {description && <p className="text-sm text-neutral-text-secondary mt-1">{description}</p>}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4">{children}</div>

        {/* Footer with actions */}
        {actions && actions.length > 0 && (
          <div className="border-t border-neutral-border px-6 py-4 flex gap-3 justify-end">
            {actions.map((action, i) => (
              <Button
                key={i}
                variant={action.variant || 'secondary'}
                onClick={() => {
                  action.onClick()
                  onClose()
                }}
                className={action.destructive ? 'bg-semantic-error text-white hover:bg-red-700' : ''}
              >
                {action.label}
              </Button>
            ))}
            <Button variant="ghost" onClick={onClose}>
              Fermer
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
