'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

const mockThemeData: Record<string, any> = {
  '1': {
    name: 'La Foi',
    description: 'Enseignements sur la nature et la puissance de la foi',
    citations: [
      {
        id: '1',
        idea: 'La foi est la substance des choses qu\'on espère',
        original: 'Hébreux 11:1',
      },
      {
        id: '2',
        idea: 'La foi vient de ce qu\'on entend',
        original: 'Romains 10:17',
      },
      {
        id: '3',
        idea: 'Sans la foi, il est impossible de plaire à Dieu',
        original: 'Hébreux 11:6',
      },
    ],
  },
  '2': {
    name: 'La Révélation',
    description: 'Messages et révélations progressives',
    citations: [
      {
        id: '1',
        idea: 'La révélation ne s\'arrête jamais',
        original: 'Apocalypse 1:1',
      },
    ],
  },
}

export default function ThemeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const theme = mockThemeData[id] || {
    name: 'Thème non trouvé',
    description: 'Ce thème n\'existe pas',
    citations: [],
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="font-serif text-4xl font-semibold text-neutral-text">
            {theme.name}
          </h1>
          <p className="mt-2 text-neutral-text-muted">{theme.description}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="text-3xl font-bold text-accent">
              {theme.citations.length}
            </div>
            <p className="text-sm text-neutral-text-muted">Citations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="text-3xl font-bold text-primary-700">0</div>
            <p className="text-sm text-neutral-text-muted">Complétées</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-6">
            <div className="text-3xl font-bold text-semantic-success">0%</div>
            <p className="text-sm text-neutral-text-muted">Progression</p>
          </CardContent>
        </Card>
      </div>

      {/* Citations */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-text">Citations</h2>
        {theme.citations.map((citation: any) => (
          <Card key={citation.id} className="cursor-pointer hover:shadow-md">
            <CardContent className="space-y-3 pt-6">
              <p className="text-sm leading-relaxed text-neutral-text">
                "{citation.idea}"
              </p>
              <div className="flex items-center justify-between">
                <Badge>{citation.original}</Badge>
                <Button variant="secondary" size="sm">
                  Ajouter aux favoris
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
