import React from 'react'
import { Card, CardHeader, CardBody, Button, Badge } from '@/components'

export const CitationDetailPage: React.FC = () => {
  return (
    <div className="container-narrow py-8 px-4 md:px-0">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary-800 mb-2">
          Le rôle prophétique des messagers de Dieu
        </h1>
        <p className="text-neutral-text-secondary">Citation détaillée avec contexte et ressources</p>
      </div>

      <div className="space-y-6">
        {/* Idea Directive */}
        <Card className="border-l-4 border-accent">
          <CardBody>
            <h2 className="text-lg font-bold text-primary-800 mb-2 text-accent">Idée directrice</h2>
            <p className="text-base text-neutral-text">
              Les anges de Dieu à travers les âges incarnent un ministère prophétique essentiel.
              Chaque messager reçoit une révélation spécifique pour son époque et remplit un rôle
              déterminant dans le plan divin.
            </p>
          </CardBody>
        </Card>

        {/* Original */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-primary-800">Citation originale</h2>
          </CardHeader>
          <CardBody>
            <div className="citation-text">
              "And I beheld when he had opened the sixth seal, and lo, there was a great earthquake;
              and the sun became black as the hair of mine head; and the moon became as blood..."
            </div>
          </CardBody>
        </Card>

        {/* Translation */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-primary-800">Traduction française</h2>
          </CardHeader>
          <CardBody>
            <div className="citation-text">
              "Et je vis quand il eut ouvert le sixième sceau, et voici, il y eut un grand tremblement
              de terre; et le soleil devint noir comme le crin de mon chef; et la lune devint comme du sang..."
            </div>
          </CardBody>
        </Card>

        {/* Source */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-primary-800">Source documentaire</h2>
          </CardHeader>
          <CardBody className="space-y-2 text-sm">
            <div><strong>Référence:</strong> 65-0221</div>
            <div><strong>Titre:</strong> The Seventh Seal</div>
            <div><strong>Date:</strong> 21 février 1965</div>
            <div><strong>Paragraphe:</strong> 34</div>
            <div><strong>Thème:</strong> <Badge>Enregistrements</Badge></div>
          </CardBody>
        </Card>

        {/* Related */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-primary-800">Citations connexes</h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <div className="p-3 bg-neutral-bg-secondary rounded border-l-2 border-primary-800 cursor-pointer hover:border-accent transition-colors">
              <p className="font-medium text-sm text-primary-800">Les sept âges de l'église</p>
              <p className="text-xs text-neutral-text-muted mt-1">5 citations connexes</p>
            </div>
            <div className="p-3 bg-neutral-bg-secondary rounded border-l-2 border-primary-800 cursor-pointer hover:border-accent transition-colors">
              <p className="font-medium text-sm text-primary-800">La révélation des sept sceaux</p>
              <p className="text-xs text-neutral-text-muted mt-1">12 citations connexes</p>
            </div>
          </CardBody>
        </Card>

        {/* Actions */}
        <Card>
          <CardBody>
            <div className="flex gap-3 flex-wrap">
              <Button variant="primary">⭐ Ajouter aux favoris</Button>
              <Button variant="secondary">📂 Ajouter à une collection</Button>
              <Button variant="secondary">🔀 Comparer</Button>
              <Button variant="secondary">💬 Ajouter une note</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
