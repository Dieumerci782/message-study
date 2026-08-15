'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Folder } from 'lucide-react'

const mockCollections = [
  {
    id: '1',
    name: 'Collection Printemps 2026',
    citations: 15,
    created: '2026-03-01',
  },
  {
    id: '2',
    name: 'Passages favoris',
    citations: 8,
    created: '2026-04-15',
  },
  {
    id: '3',
    name: 'Étude de la révélation',
    citations: 22,
    created: '2026-05-20',
  },
]

export default function CollectionsPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
            Collections
          </h1>
          <p className="text-neutral-text-muted">
            Organisez vos citations en collections
          </p>
        </div>
        <Button className="gap-2" variant="primary">
          <Plus className="h-4 w-4" />
          Nouvelle collection
        </Button>
      </div>

      {/* Collections Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockCollections.map((collection) => (
          <Card key={collection.id} className="cursor-pointer hover:shadow-md">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                  <Folder className="h-5 w-5 text-primary-700" />
                </div>
                <CardTitle className="text-lg">{collection.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-neutral-text-secondary">
                {collection.citations} citations
              </p>
              <p className="text-xs text-neutral-text-muted">
                Créée le{' '}
                {new Date(collection.created).toLocaleDateString('fr-FR')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
