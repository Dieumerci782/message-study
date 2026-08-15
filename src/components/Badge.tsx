import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const variantClasses = {
      primary: 'badge-primary',
      success: 'badge-success',
      warning: 'badge-warning',
      error: 'badge-error',
      info: 'bg-semantic-info text-white',
    }

    const sizeClasses = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-3 py-1',
    }

    return (
      <span
        ref={ref}
        className={`badge ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
