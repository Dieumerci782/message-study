import * as React from 'react'
import { cn } from '@/lib/utils'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClass = {
      sm: 'size-4',
      md: 'size-8',
      lg: 'size-12',
    }[size]

    return (
      <div
        ref={ref}
        className={cn(
          'inline-block animate-spin rounded-full border-2 border-current border-t-transparent',
          sizeClass,
          className
        )}
        {...props}
      />
    )
  }
)
Spinner.displayName = 'Spinner'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('animate-pulse rounded-md bg-neutral-text-muted/20', className)}
      {...props}
    />
  )
)
Skeleton.displayName = 'Skeleton'

export { Spinner, Skeleton }
