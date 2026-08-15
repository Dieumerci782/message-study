import React, { useState } from 'react'
import { Input } from './Input'

interface SearchBoxProps {
  placeholder?: string
  onSearch?: (query: string) => void
  suggestions?: string[]
  onSuggestionClick?: (suggestion: string) => void
  isLoading?: boolean
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Rechercher dans le Message…',
  onSearch,
  suggestions = [
    '🔍 Essayez: "rôle des anges"',
    '🔍 Ou: "comment Dieu parle?"',
    '🔍 Ou: "âge de la grâce"',
  ],
  onSuggestionClick,
  isLoading = false,
}) => {
  const [value, setValue] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onSearch?.(value)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    const clean = suggestion.replace(/^🔍\s*(?:Essayez:|Ou:)\s*/, '').replace(/"/g, '')
    setValue(clean)
    onSuggestionClick?.(clean)
    setShowSuggestions(false)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setShowSuggestions(true)
          }}
          onFocus={() => setShowSuggestions(true)}
          className="text-lg h-16"
          icon={isLoading ? '⟳' : '🔍'}
        />
      </form>

      {showSuggestions && (
        <div className="space-y-2">
          {suggestions.map((suggestion, i) => (
            <button
              key={i}
              onClick={() => handleSuggestionClick(suggestion)}
              className="block text-sm text-neutral-text-secondary hover:text-neutral-text transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
