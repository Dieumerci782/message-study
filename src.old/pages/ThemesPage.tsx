import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Spinner } from '@/components'
import { useUIStore } from '@/store/uiStore'

export const ThemesPage: React.FC = () => {
  const { setCurrentPage } = useUIStore()
  const [isLoading] = React.useState(false)

  const themes = [
    { id: '1', name: 'Enregistrements', description: 'Les enregistrements audio des prédications', icon: '📻', count: 234 },
    { id: '2', name: 'Diffusion du Message', description: 'La diffusion à travers le monde', icon: '📡', count: 156 },
    { id: '3', name: 'Ministères', description: 'Les différents ministères et rôles', icon: '🙏', count: 189 },
    { id: '4', name: 'Âges spirituels', description: 'Évolution spirituelle et périodes', icon: '✨', count: 267 },
    { id: '5', name: 'Révélations scientifiques', description: 'Principes scientifiques mentionnés', icon: '🔬', count: 98 },
    { id: '6', name: 'Nations et peuples', description: 'Références aux différentes nations', icon: '🌍', count: 142 },
  ]

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary-800">Thématiques</h1>
        <Button variant="primary">+ Nouveau thème</Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Spinner label="Chargement des thèmes…" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              hover
              className="cursor-pointer"
              onClick={() => setCurrentPage('theme-detail')}
            >
              <CardBody className="space-y-3">
                <div className="text-4xl">{theme.icon}</div>
                <h3 className="text-lg font-semibold text-primary-800">{theme.name}</h3>
                <p className="text-sm text-neutral-text-secondary">{theme.description}</p>
              </CardBody>
              <CardFooter className="justify-between text-xs text-neutral-text-muted">
                <span>{theme.count} citations</span>
                <span>→</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
