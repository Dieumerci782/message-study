'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  BookOpen,
  Lightbulb,
  Users,
  Zap,
  Globe,
} from 'lucide-react'

const mockThemes = [
  {
    id: '1',
    name: 'La Foi',
    description: 'Enseignements sur la nature et la puissance de la foi',
    icon: Heart,
    citations: 24,
    color: 'primary',
  },
  {
    id: '2',
    name: 'La Révélation',
    description: 'Messages et révélations progressives',
    icon: Lightbulb,
    citations: 31,
    color: 'accent',
  },
  {
    id: '3',
    name: 'Le Saint Esprit',
    description: 'L\'œuvre du Saint Esprit dans nos vies',
    icon: Zap,
    citations: 19,
    color: 'success',
  },
  {
    id: '4',
    name: 'La Parole de Dieu',
    description: 'L\'autorité et la puissance de la parole divine',
    icon: BookOpen,
    citations: 27,
    color: 'primary',
  },
  {
    id: '5',
    name: 'L\'Église',
    description: 'Structure et rôle de l\'église dans le plan de Dieu',
    icon: Users,
    citations: 22,
    color: 'info',
  },
  {
    id: '6',
    name: 'Le Royaume',
    description: 'Les mystères du royaume de Dieu',
    icon: Globe,
    citations: 29,
    color: 'warning',
  },
]

export default function ThemesPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
          Thèmes
        </h1>
        <p className="text-neutral-text-muted">
          Explorez les différents thèmes d'enseignement
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockThemes.map((theme) => {
          const Icon = theme.icon
          return (
            <Link key={theme.id} href={`/themes/${theme.id}`}>
              <Card className="h-full cursor-pointer transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <Icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <CardTitle className="text-lg">{theme.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-neutral-text-secondary">
                    {theme.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="primary">
                      {theme.citations} citations
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
