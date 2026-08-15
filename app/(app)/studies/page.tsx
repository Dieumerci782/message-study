'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const mockStudies = [
  {
    id: '1',
    title: 'Les Mystères du Royaume',
    progress: 65,
    citations: 12,
    notes: 5,
    started: '2026-07-15',
  },
  {
    id: '2',
    title: 'La Révélation Progressive',
    progress: 40,
    citations: 8,
    notes: 3,
    started: '2026-07-20',
  },
  {
    id: '3',
    title: 'Le Saint Esprit',
    progress: 85,
    citations: 18,
    notes: 9,
    started: '2026-06-10',
  },
]

export default function StudiesPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
          Mes Études
        </h1>
        <p className="text-neutral-text-muted">
          Suivez vos études et apprentissages
        </p>
      </div>

      {/* Studies */}
      <div className="space-y-4">
        {mockStudies.map((study) => (
          <Card key={study.id}>
            <CardHeader>
              <CardTitle className="text-lg">{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress Bar */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-text">
                    Progression
                  </span>
                  <span className="text-sm text-neutral-text-muted">
                    {study.progress}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-neutral-border">
                  <div
                    className="h-full rounded-full bg-accent transition-all"
                    style={{ width: `${study.progress}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-neutral-text-muted">Citations</p>
                  <p className="text-lg font-semibold text-neutral-text">
                    {study.citations}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-text-muted">Notes</p>
                  <p className="text-lg font-semibold text-neutral-text">
                    {study.notes}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-text-muted">Commencé</p>
                  <p className="text-xs text-neutral-text-secondary">
                    {new Date(study.started).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>

              <Button variant="secondary" className="w-full">
                Continuer
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
