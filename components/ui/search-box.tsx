'use client'

import * as React from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBoxProps {
  placeholder?: string
  onSearch: (value: string) => void
  debounceMs?: number
  suggestions?: string[]
  onSuggestionClick?: (suggestion: string) => void
}

export function SearchBox({
  placeholder = 'Rechercher...',
  onSearch,
  debounceMs = 300,
  suggestions = [],
  onSuggestionClick,
}: SearchBoxProps) {
  const [value, setValue] = React.useState('')
  const [showSuggestions, setShowSuggestions] = React.useState(false)
  const debounceTimer = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value)
    }, debounceMs)

    return () => clearTimeout(timer)
  }, [value, onSearch, debounceMs])

  const handleClear = () => {
    setValue('')
    setShowSuggestions(false)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion)
    setShowSuggestions(false)
    onSuggestionClick?.(suggestion)
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-text-muted" />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setShowSuggestions(true)
          }}
          onFocus={() => value && setShowSuggestions(true)}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-md border border-neutral-border bg-neutral-bg-primary py-2 pl-10 pr-10 text-sm placeholder:text-neutral-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
          )}
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-text-muted hover:text-neutral-text"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full z-10 mt-2 w-full rounded-md border border-neutral-border bg-neutral-surface shadow-md">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-2 text-left text-sm hover:bg-neutral-bg-secondary first:rounded-t-md last:rounded-b-md"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
