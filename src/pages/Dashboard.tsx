import React from 'react'
import { SearchBox, Card, CardHeader, CardBody, CardFooter, Button, Spinner } from '@/components'
import { useUIStore } from '@/store/uiStore'

export const Dashboard: React.FC = () => {
  const { setCurrentPage } = useUIStore()
  const [isLoading] = React.useState(false)

  const handleSearch = (query: string) => {
    setCurrentPage('search')
  }

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      {/* Search Hero */}
      <div className="mb-12">
        <SearchBox
          onSearch={handleSearch}
          suggestions={[
            '🔍 Essayez: "rôle des anges"',
            '🔍 Ou: "comment Dieu parle?"',
            '🔍 Ou: "âge de la grâce"',
          ]}
        />
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Spinner label="Chargement des données…" />
        </div>
      ) : (
        <>
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card hover className="cursor-pointer" onClick={() => setCurrentPage('studies')}>
              <CardHeader>
                <h3 className="text-lg font-semibold text-primary-800">Mes études en cours</h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-neutral-text-secondary mb-3">3 études actives</p>
                <ul className="text-sm space-y-2 text-neutral-text">
                  <li>• Étude sur les bandes</li>
                  <li>• L'âge de la grâce</li>
                  <li>• Ministères du Message</li>
                </ul>
              </CardBody>
              <CardFooter className="text-xs text-neutral-text-muted">
                <span>Dernier accès: Il y a 2 jours</span>
                <span className="ml-auto">→</span>
              </CardFooter>
            </Card>

            <Card hover className="cursor-pointer" onClick={() => setCurrentPage('themes')}>
              <CardHeader>
                <h3 className="text-lg font-semibold text-primary-800">Thèmes récents</h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-neutral-text-secondary mb-3">5 thèmes</p>
                <ul className="text-sm space-y-2 text-neutral-text">
                  <li>• Enregistrements</li>
                  <li>• Diffusion du Message</li>
                  <li>• Ministères</li>
                </ul>
              </CardBody>
              <CardFooter className="text-xs text-neutral-text-muted">
                <span>Dernière mise à jour: Aujourd'hui</span>
                <span className="ml-auto">→</span>
              </CardFooter>
            </Card>

            <Card hover className="cursor-pointer" onClick={() => setCurrentPage('favorites')}>
              <CardHeader>
                <h3 className="text-lg font-semibold text-primary-800">Citations favoris</h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-neutral-text-secondary mb-3">12 citations</p>
                <p className="text-sm text-neutral-text">
                  Les passages que vous avez marqués comme favoris apparaîtront ici pour un accès rapide.
                </p>
              </CardBody>
              <CardFooter className="text-xs text-neutral-text-muted">
                <span>12 items</span>
                <span className="ml-auto">→</span>
              </CardFooter>
            </Card>
          </div>

          {/* Continue studying section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Continuer mon étude</h2>
            <Card className="border-l-4 border-accent">
              <CardBody>
                <div className="mb-4 bg-accent-light border-l-4 border-accent px-4 py-3 rounded">
                  <p className="text-sm font-semibold text-primary-800">
                    Idée directrice: Le rôle des messagers de Dieu à travers les âges
                  </p>
                </div>
                <p className="text-sm text-neutral-text-secondary">
                  Les anges de Dieu accomplissent un rôle fondamental dans la communication divine et le guidage
                  spirituel de l'humanité.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="primary">Continuer la lecture</Button>
              </CardFooter>
            </Card>
          </section>

          {/* Discover section */}
          <section>
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Découvrir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hover className="cursor-pointer">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-primary-800">Citations connexes</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-neutral-text-secondary">
                    Passages liés à vos récentes consultations
                  </p>
                </CardBody>
              </Card>

              <Card hover className="cursor-pointer">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-primary-800">Recherches suggérées</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-neutral-text-secondary">Basées sur votre historique</p>
                </CardBody>
              </Card>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
