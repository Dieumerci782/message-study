import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
  icon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, icon, className = '', ...props }, ref) => (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-sans text-sm font-medium text-neutral-text">
          {label}
          {props.required && <span className="text-semantic-error ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && <span className="absolute left-3 top-3 text-neutral-text-muted">{icon}</span>}
        <input
          ref={ref}
          className={`input ${icon ? 'pl-10' : ''} ${error ? 'border-semantic-error' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-semantic-error font-medium">{error}</p>}
      {helpText && !error && <p className="text-xs text-neutral-text-muted">{helpText}</p>}
    </div>
  )
)

Input.displayName = 'Input'

// TextArea variant
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helpText?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helpText, className = '', ...props }, ref) => (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-sans text-sm font-medium text-neutral-text">
          {label}
          {props.required && <span className="text-semantic-error ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        className={`input resize-vertical min-h-[120px] ${error ? 'border-semantic-error' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-semantic-error font-medium">{error}</p>}
      {helpText && !error && <p className="text-xs text-neutral-text-muted">{helpText}</p>}
    </div>
  )
)

TextArea.displayName = 'TextArea'

// Select variant
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: Array<{ value: string; label: string }>
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-sans text-sm font-medium text-neutral-text">{label}</label>
      )}
      <select
        ref={ref}
        className={`input cursor-pointer ${error ? 'border-semantic-error' : ''} ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-semantic-error font-medium">{error}</p>}
    </div>
  )
)

Select.displayName = 'Select'

// Checkbox variant
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        ref={ref}
        type="checkbox"
        className={`w-4 h-4 rounded cursor-pointer border border-neutral-border focus:ring-2 focus:ring-primary-800 ${className}`}
        {...props}
      />
      {label && <span className="text-sm text-neutral-text">{label}</span>}
    </label>
  )
)

Checkbox.displayName = 'Checkbox'
