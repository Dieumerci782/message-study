import React from 'react'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', label = 'Chargement…' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizeClasses[size]} border-2 border-primary-100 border-t-primary-800 rounded-full animate-spin`} />
      {label && <p className="text-sm text-neutral-text-secondary">{label}</p>}
    </div>
  )
}

// Skeleton loader for content
export const Skeleton: React.FC<{ className?: string; count?: number }> = ({
  className = 'h-4',
  count = 1,
}) => (
  <div className="space-y-3">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className={`${className} bg-neutral-border rounded-md animate-pulse`} />
    ))}
  </div>
)
