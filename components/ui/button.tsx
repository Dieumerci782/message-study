import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-neutral-bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary-700 text-white hover:bg-primary-800 active:bg-primary-900',
        secondary: 'border border-neutral-border bg-neutral-bg-secondary text-neutral-text hover:bg-neutral-bg-primary active:border-primary-400',
        accent: 'bg-accent text-primary-950 hover:bg-accent-dark active:bg-accent-dark/80',
        ghost: 'text-neutral-text hover:bg-neutral-bg-secondary active:bg-neutral-bg-secondary',
        destructive: 'bg-semantic-error text-white hover:bg-red-700 active:bg-red-800',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, disabled, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || isLoading}
      ref={ref}
      {...props}
    >
      {isLoading && <span className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
      {props.children}
    </button>
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
