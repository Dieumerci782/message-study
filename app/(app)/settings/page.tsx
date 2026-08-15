'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs } from '@/components/ui/tabs'

export default function SettingsPage() {
  const [email, setEmail] = useState('user@example.com')
  const [name, setName] = useState('Jean Dupont')
  const [theme, setTheme] = useState('light')

  const tabs = [
    {
      id: 'profile',
      label: 'Profil',
      content: (
        <div className="space-y-4">
          <Input
            label="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="primary">Sauvegarder les modifications</Button>
        </div>
      ),
    },
    {
      id: 'display',
      label: 'Affichage',
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-text">
              Thème
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="mt-2 block w-full rounded-md border border-neutral-border bg-neutral-bg-primary px-3 py-2 text-sm"
            >
              <option value="light">Clair</option>
              <option value="dark">Sombre</option>
              <option value="system">Système</option>
            </select>
          </div>
          <Button variant="primary">Appliquer le thème</Button>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="email-notif" defaultChecked />
            <label htmlFor="email-notif" className="text-sm text-neutral-text">
              Recevoir les notifications par email
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="study-reminders" defaultChecked />
            <label
              htmlFor="study-reminders"
              className="text-sm text-neutral-text"
            >
              Rappels d'étude quotidiens
            </label>
          </div>
          <Button variant="primary">Sauvegarder</Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
          Paramètres
        </h1>
        <p className="text-neutral-text-muted">
          Gérez vos préférences et compte
        </p>
      </div>

      {/* Settings Card */}
      <Card>
        <CardContent className="pt-6">
          <Tabs tabs={tabs} />
        </CardContent>
      </Card>
    </div>
  )
}
