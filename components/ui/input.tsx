import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helpText, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-neutral-text">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-neutral-border bg-neutral-bg-primary px-3 py-2 text-sm placeholder:text-neutral-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-semantic-error',
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-xs text-semantic-error">{error}</p>
      )}
      {helpText && !error && (
        <p className="text-xs text-neutral-text-muted">{helpText}</p>
      )}
    </div>
  )
)
Input.displayName = 'Input'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helpText?: string
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, helpText, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-neutral-text">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'flex min-h-24 w-full rounded-md border border-neutral-border bg-neutral-bg-primary px-3 py-2 text-sm placeholder:text-neutral-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-semantic-error',
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-xs text-semantic-error">{error}</p>
      )}
      {helpText && !error && (
        <p className="text-xs text-neutral-text-muted">{helpText}</p>
      )}
    </div>
  )
)
TextArea.displayName = 'TextArea'

export { Input, TextArea }
