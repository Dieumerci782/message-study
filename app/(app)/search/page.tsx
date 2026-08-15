'use client'

import { useState } from 'react'
import { SearchBox } from '@/components/ui/search-box'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/spinner'

// Mock data
const mockCitations = [
  {
    id: '1',
    idea: 'La foi est la substance des choses qu\'on espère',
    theme: 'Foi',
    relevance: 0.95,
  },
  {
    id: '2',
    idea: 'La parole de Dieu ne peut être compromise',
    theme: 'Parole',
    relevance: 0.87,
  },
  {
    id: '3',
    idea: 'Le Saint Esprit guide les justes',
    theme: 'Esprit',
    relevance: 0.78,
  },
  {
    id: '4',
    idea: 'La révélation est continue',
    theme: 'Révélation',
    relevance: 0.91,
  },
]

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<typeof mockCitations>([])

  const handleSearch = (value: string) => {
    if (!value) {
      setResults([])
      return
    }

    setIsLoading(true)
    // Simulate search delay
    setTimeout(() => {
      const filtered = mockCitations.filter((c) =>
        c.idea.toLowerCase().includes(value.toLowerCase()) ||
        c.theme.toLowerCase().includes(value.toLowerCase())
      )
      setResults(filtered)
      setIsLoading(false)
    }, 300)
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
          Recherche
        </h1>
        <p className="text-neutral-text-muted">
          Explorez les citations et enseignements
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl">
        <SearchBox
          placeholder="Rechercher par mot-clé ou thème..."
          onSearch={handleSearch}
          suggestions={[
            'Foi',
            'Révélation',
            'Esprit Saint',
            'Parole de Dieu',
            'Salut',
          ]}
          onSuggestionClick={(suggestion) => handleSearch(suggestion)}
        />
      </div>

      {/* Results */}
      {query && isLoading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      )}

      {query && !isLoading && results.length === 0 && (
        <div className="rounded-lg border border-neutral-border bg-neutral-bg-secondary p-8 text-center">
          <p className="text-neutral-text-muted">
            Aucun résultat pour "{query}"
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm text-neutral-text-muted">
            {results.length} résultat{results.length > 1 ? 's' : ''}
          </p>

          {results.map((citation) => (
            <Card key={citation.id} className="cursor-pointer hover:shadow-md">
              <CardContent className="space-y-3 pt-6">
                <p className="text-sm leading-relaxed text-neutral-text">
                  "{citation.idea}"
                </p>
                <div className="flex items-center justify-between">
                  <Badge>{citation.theme}</Badge>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 rounded-full bg-neutral-border">
                      <div
                        className="h-full rounded-full bg-accent transition-all"
                        style={{ width: `${citation.relevance * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-neutral-text-muted">
                      {Math.round(citation.relevance * 100)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
