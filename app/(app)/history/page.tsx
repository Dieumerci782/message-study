'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  Search,
  Heart,
  FileText,
  Clock,
} from 'lucide-react'

const mockHistory = [
  {
    id: '1',
    type: 'citation',
    action: 'Lu la citation',
    item: 'La foi est la substance des choses',
    timestamp: '2026-08-15T14:30:00',
    icon: BookOpen,
  },
  {
    id: '2',
    type: 'search',
    action: 'Recherché',
    item: '"révélation"',
    timestamp: '2026-08-15T13:15:00',
    icon: Search,
  },
  {
    id: '3',
    type: 'favorite',
    action: 'Ajouté aux favoris',
    item: 'Le Saint Esprit guide...',
    timestamp: '2026-08-15T11:45:00',
    icon: Heart,
  },
  {
    id: '4',
    type: 'note',
    action: 'Créé une note',
    item: 'Réflexions sur la foi',
    timestamp: '2026-08-14T16:20:00',
    icon: FileText,
  },
]

export default function HistoryPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
          Historique
        </h1>
        <p className="text-neutral-text-muted">
          Suivi de votre activité
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {mockHistory.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.id}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <Icon className="h-5 w-5 text-primary-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-text">
                    <span className="font-medium">{item.action}</span>{' '}
                    <span className="text-neutral-text-secondary">
                      {item.item}
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-neutral-text-muted">
                    {new Date(item.timestamp).toLocaleString('fr-FR')}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
