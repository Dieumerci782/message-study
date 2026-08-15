import React, { useState } from 'react'
import { SearchBox, Card, CardBody, Badge, Button } from '@/components'
import { useUIStore } from '@/store/uiStore'

export const SearchPage: React.FC = () => {
  const { setCurrentPage } = useUIStore()
  const [query, setQuery] = useState('')
  const [results] = useState<any[]>([])

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      <div className="mb-8">
        <SearchBox onSearch={setQuery} />
      </div>

      {query && (
        <>
          <h2 className="text-2xl font-bold text-primary-800 mb-2">Résultats de recherche</h2>
          <p className="text-sm text-neutral-text-secondary mb-6">
            {results.length} résultats pour "{query}"
          </p>
        </>
      )}

      {results.length === 0 && query && (
        <div className="text-center py-12">
          <p className="text-neutral-text-secondary mb-4">Aucun résultat trouvé</p>
          <p className="text-sm text-neutral-text-muted">Essayez une autre recherche</p>
        </div>
      )}

      <div className="space-y-4">
        {results.map((result, i) => (
          <Card
            key={i}
            hover
            className="cursor-pointer"
            onClick={() => setCurrentPage('citation')}
          >
            <CardBody className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge>{result.category}</Badge>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-800 mb-1">{result.title}</h3>
                  <p className="text-sm text-neutral-text-secondary line-clamp-2">
                    {result.excerpt}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-neutral-text-muted">
                <span>Ref: {result.reference}</span>
                <span>Pertinence: {result.relevance}%</span>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
