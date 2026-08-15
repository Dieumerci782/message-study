import React from 'react'
import { Card, CardBody, Button } from '@/components'
import { useUIStore } from '@/store/uiStore'

interface StubPageProps {
  title: string
  description: string
  icon: string
}

export const StubPage: React.FC<StubPageProps> = ({ title, description, icon }) => {
  const { setCurrentPage } = useUIStore()

  return (
    <div className="container-normal py-12 px-4 md:px-0 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="text-center max-w-md">
        <CardBody className="space-y-4">
          <div className="text-6xl">{icon}</div>
          <h1 className="text-2xl font-bold text-primary-800">{title}</h1>
          <p className="text-neutral-text-secondary">{description}</p>
          <div className="flex gap-3 justify-center pt-4">
            <Button variant="secondary" onClick={() => setCurrentPage('dashboard')}>
              ← Retour
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
