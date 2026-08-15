import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Input, TextArea, Checkbox, Badge } from '@/components'
import { useUIStore } from '@/store/uiStore'

// ============ ASSISTANT PAGE ============
export const AssistantPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant' as const, text: 'Bonjour! Je suis l\'assistant du Message. Posez-moi vos questions sur le corpus de William Marrion Branham.' },
    { id: '2', role: 'user' as const, text: 'Quel est le message de la grâce?' },
    { id: '3', role: 'assistant' as const, text: 'Le message de la grâce est un concept central qui parle de la miséricorde divine envers l\'humanité...' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), role: 'user' as const, text: input }])
      setInput('')
      setTimeout(() => {
        setMessages(m => [...m, { id: (Date.now() + 1).toString(), role: 'assistant' as const, text: 'Réponse en cours de génération...' }])
      }, 500)
    }
  }

  return (
    <div className="container-normal py-8 px-4 md:px-0 max-w-4xl">
      <h1 className="text-3xl font-bold text-primary-800 mb-8">Assistant du Message</h1>

      <Card className="h-[600px] flex flex-col">
        {/* Messages */}
        <CardBody className="flex-1 overflow-y-auto space-y-4 border-b border-neutral-border">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-primary-100 text-primary-900' : 'bg-neutral-bg-secondary text-neutral-text'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </CardBody>

        {/* Input */}
        <CardFooter className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend()}
            placeholder="Votre question..."
            className="flex-1 px-4 py-2 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button variant="primary" onClick={handleSend}>Envoyer</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// ============ COLLECTIONS PAGE ============
export const CollectionsPage: React.FC = () => {
  const [showNewCollection, setShowNewCollection] = useState(false)
  const [collectionName, setCollectionName] = useState('')

  const collections = [
    { id: '1', name: 'Révélations Divines', description: 'Citations sur les révélations de Dieu', citations: 42, created: '2026-01-15' },
    { id: '2', name: 'Spiritualité', description: 'Développement et croissance spirituelle', citations: 67, created: '2026-02-03' },
    { id: '3', name: 'Sciences', description: 'Références scientifiques du Message', citations: 23, created: '2026-02-10' },
    { id: '4', name: 'Guérison', description: 'Citations sur la guérison divine', citations: 55, created: '2026-03-01' },
  ]

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary-800">Mes Collections</h1>
        <Button variant="primary" onClick={() => setShowNewCollection(!showNewCollection)}>
          + Nouvelle Collection
        </Button>
      </div>

      {showNewCollection && (
        <Card className="mb-8">
          <CardBody className="space-y-4">
            <h3 className="font-semibold text-primary-800">Créer une collection</h3>
            <Input label="Nom de la collection" placeholder="Ex: Mon thème favori" value={collectionName} onChange={e => setCollectionName(e.target.value)} />
            <TextArea label="Description" placeholder="Décrivez le contenu de cette collection..." rows={3} />
            <div className="flex gap-3 justify-end">
              <Button variant="secondary" onClick={() => setShowNewCollection(false)}>Annuler</Button>
              <Button variant="primary" onClick={() => { setShowNewCollection(false); setCollectionName('') }}>Créer</Button>
            </div>
          </CardBody>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map(col => (
          <Card key={col.id} hover>
            <CardBody className="space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-primary-800">{col.name}</h3>
                <Badge variant="primary">{col.citations}</Badge>
              </div>
              <p className="text-sm text-neutral-text-secondary">{col.description}</p>
              <p className="text-xs text-neutral-text-muted">Créée le {new Date(col.created).toLocaleDateString('fr-FR')}</p>
            </CardBody>
            <CardFooter>
              <Button variant="secondary" size="sm">Voir collection</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ============ STUDIES PAGE ============
export const StudiesPage: React.FC = () => {
  const studies = [
    { id: '1', title: 'Étude: L\'Âge de la Grâce', citations: 12, notes: 8, progress: 45, created: '2026-02-01' },
    { id: '2', title: 'Révélations Scientifiques', citations: 28, notes: 15, progress: 72, created: '2026-01-15' },
    { id: '3', title: 'Ministères Spirituels', citations: 19, notes: 5, progress: 30, created: '2026-03-05' },
  ]

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-2">Mes Études</h1>
        <p className="text-neutral-text-secondary">Vos études et recherches personnelles</p>
      </div>

      <div className="space-y-4">
        {studies.map(study => (
          <Card key={study.id} hover className="cursor-pointer">
            <CardBody className="space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-primary-800">{study.title}</h3>
                <Badge variant="success">{study.progress}%</Badge>
              </div>
              <div className="w-full bg-neutral-bg-secondary rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: `${study.progress}%` }} />
              </div>
              <div className="flex gap-6 text-sm text-neutral-text-secondary">
                <span>📌 {study.citations} citations</span>
                <span>📝 {study.notes} notes</span>
                <span>📅 {new Date(study.created).toLocaleDateString('fr-FR')}</span>
              </div>
            </CardBody>
            <CardFooter>
              <Button variant="primary" size="sm">Continuer l\'étude</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ============ FAVORITES PAGE ============
export const FavoritesPage: React.FC = () => {
  const favorites = [
    { id: '1', idea: 'La lumière triomphe des ténèbres', original: 'And the light shineth in darkness...', theme: 'Lumière Divine', date: '2026-03-10' },
    { id: '2', idea: 'Dieu parle par ses prophètes', original: 'Surely the Lord GOD will do nothing...', theme: 'Révélation', date: '2026-03-05' },
    { id: '3', idea: 'La foi guérit toutes choses', original: 'Is any sick among you?...', theme: 'Guérison', date: '2026-02-28' },
    { id: '4', idea: 'L\'amour est la plus grande vertu', original: 'Though I speak with the tongues...', theme: 'Amour', date: '2026-02-20' },
  ]

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-2">Mes Favoris</h1>
        <p className="text-neutral-text-secondary">{favorites.length} citations marquées</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favorites.map(fav => (
          <Card key={fav.id} className="border-l-4 border-accent">
            <CardBody className="space-y-3">
              <div className="flex items-start justify-between">
                <Badge variant="primary">{fav.theme}</Badge>
                <span className="text-lg">⭐</span>
              </div>
              <h3 className="font-semibold text-primary-800">{fav.idea}</h3>
              <p className="text-sm text-neutral-text-secondary italic">"{fav.original}"</p>
              <p className="text-xs text-neutral-text-muted">Ajouté le {new Date(fav.date).toLocaleDateString('fr-FR')}</p>
            </CardBody>
            <CardFooter>
              <Button variant="ghost" size="sm">Voir détails</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ============ NOTES PAGE ============
export const NotesPage: React.FC = () => {
  const [showNewNote, setShowNewNote] = useState(false)

  const notes = [
    { id: '1', title: 'Note: L\'Âge de la Grâce', content: 'Observation importante sur les dates...', citations: 3, created: '2026-03-08' },
    { id: '2', title: 'Connexions avec Apocalypse', content: 'Parallèles intéressants entre les révélations...', citations: 7, created: '2026-02-15' },
    { id: '3', title: 'Questions à approfondir', content: 'Points qui méritent une enquête plus approfondie...', citations: 2, created: '2026-02-01' },
  ]

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary-800">Mes Notes</h1>
        <Button variant="primary" onClick={() => setShowNewNote(!showNewNote)}>+ Nouvelle Note</Button>
      </div>

      {showNewNote && (
        <Card className="mb-8">
          <CardBody className="space-y-4">
            <Input label="Titre de la note" placeholder="Donnez un titre..." />
            <TextArea label="Contenu" placeholder="Écrivez votre note..." rows={4} />
            <div className="flex gap-3 justify-end">
              <Button variant="secondary" onClick={() => setShowNewNote(false)}>Annuler</Button>
              <Button variant="primary" onClick={() => setShowNewNote(false)}>Créer note</Button>
            </div>
          </CardBody>
        </Card>
      )}

      <div className="space-y-4">
        {notes.map(note => (
          <Card key={note.id} hover className="cursor-pointer">
            <CardBody className="space-y-2">
              <h3 className="text-lg font-semibold text-primary-800">{note.title}</h3>
              <p className="text-sm text-neutral-text-secondary">{note.content}</p>
              <div className="flex items-center gap-4 text-xs text-neutral-text-muted">
                <span>📌 {note.citations} citation(s) liée(s)</span>
                <span>📅 {new Date(note.created).toLocaleDateString('fr-FR')}</span>
              </div>
            </CardBody>
            <CardFooter>
              <Button variant="secondary" size="sm">Éditer</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ============ HISTORY PAGE ============
export const HistoryPage: React.FC = () => {
  const history = [
    { id: '1', action: 'Consulté', item: 'Citation: "La lumière triomphe"', date: '2026-03-10 14:32', icon: '📖' },
    { id: '2', action: 'Créé collection', item: '"Révélations Divines"', date: '2026-03-09 10:15', icon: '📂' },
    { id: '3', action: 'Ajouté aux favoris', item: 'Citation: "L\'amour éternel"', date: '2026-03-08 16:45', icon: '⭐' },
    { id: '4', action: 'Créé étude', item: '"L\'Âge de la Grâce"', date: '2026-03-07 09:20', icon: '📝' },
    { id: '5', action: 'Consulté', item: 'Thème: Spiritualité', date: '2026-03-06 13:50', icon: '📖' },
    { id: '6', action: 'Recherche effectuée', item: '"révélation divine"', date: '2026-03-05 11:30', icon: '🔍' },
  ]

  return (
    <div className="container-normal py-8 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-primary-800 mb-8">Historique</h1>

      <div className="space-y-3">
        {history.map((item, idx) => (
          <div key={item.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="text-2xl">{item.icon}</div>
              {idx < history.length - 1 && <div className="w-0.5 h-12 bg-neutral-border mt-2" />}
            </div>
            <Card className="flex-1 hover">
              <CardBody className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-primary-800">{item.action}</h3>
                  <span className="text-xs text-neutral-text-muted">{item.date}</span>
                </div>
                <p className="text-sm text-neutral-text-secondary">{item.item}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============ SETTINGS PAGE ============
export const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    showReadingTime: true,
    autoSaveNotes: true,
    privateProfile: false,
  })

  return (
    <div className="container-normal py-8 px-4 md:px-0 max-w-2xl">
      <h1 className="text-3xl font-bold text-primary-800 mb-8">Paramètres</h1>

      {/* Profil */}
      <Card className="mb-6">
        <CardHeader className="border-b border-neutral-border">
          <h2 className="font-semibold text-primary-800">Profil</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <Input label="Nom complet" defaultValue="Jean Dupont" />
          <Input label="Email" type="email" defaultValue="jean@example.com" />
          <TextArea label="Biographie" placeholder="Parlez de vous..." rows={3} />
        </CardBody>
      </Card>

      {/* Préférences d'affichage */}
      <Card className="mb-6">
        <CardHeader className="border-b border-neutral-border">
          <h2 className="font-semibold text-primary-800">Affichage</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox checked={settings.darkMode} onChange={e => setSettings({...settings, darkMode: e.target.checked})} />
            <span className="text-neutral-text">Mode sombre</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox checked={settings.showReadingTime} onChange={e => setSettings({...settings, showReadingTime: e.target.checked})} />
            <span className="text-neutral-text">Afficher temps de lecture</span>
          </label>
        </CardBody>
      </Card>

      {/* Notifications */}
      <Card className="mb-6">
        <CardHeader className="border-b border-neutral-border">
          <h2 className="font-semibold text-primary-800">Notifications</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox checked={settings.emailNotifications} onChange={e => setSettings({...settings, emailNotifications: e.target.checked})} />
            <span className="text-neutral-text">Notifications par email</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox checked={settings.autoSaveNotes} onChange={e => setSettings({...settings, autoSaveNotes: e.target.checked})} />
            <span className="text-neutral-text">Auto-sauvegarder les notes</span>
          </label>
        </CardBody>
      </Card>

      {/* Confidentialité */}
      <Card className="mb-6">
        <CardHeader className="border-b border-neutral-border">
          <h2 className="font-semibold text-primary-800">Confidentialité</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox checked={settings.privateProfile} onChange={e => setSettings({...settings, privateProfile: e.target.checked})} />
            <span className="text-neutral-text">Profil privé</span>
          </label>
          <Button variant="secondary" size="sm">Exporter mes données</Button>
        </CardBody>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="primary">Enregistrer les modifications</Button>
        <Button variant="secondary">Annuler</Button>
      </div>
    </div>
  )
}
