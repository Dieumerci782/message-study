'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input, TextArea } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Plus, Trash2 } from 'lucide-react'

const mockNotes = [
  {
    id: '1',
    title: 'Réflexion sur la foi',
    content: 'Comment la foi se manifeste dans notre vie quotidienne...',
    created: '2026-08-10',
  },
  {
    id: '2',
    title: 'Étude du passage Marc 11:24',
    content: 'Analyse du pouvoir de la parole et de la déclaration positive...',
    created: '2026-08-08',
  },
]

export default function NotesPage() {
  const [notes, setNotes] = useState(mockNotes)
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddNote = () => {
    if (title && content) {
      const newNote = {
        id: Date.now().toString(),
        title,
        content,
        created: new Date().toISOString().split('T')[0],
      }
      setNotes([newNote, ...notes])
      setTitle('')
      setContent('')
      setShowModal(false)
    }
  }

  const handleDelete = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id))
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
            Notes
          </h1>
          <p className="text-neutral-text-muted">Vos notes personnelles</p>
        </div>
        <Button
          onClick={() => setShowModal(true)}
          className="gap-2"
          variant="primary"
        >
          <Plus className="h-4 w-4" />
          Nouvelle note
        </Button>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{note.title}</CardTitle>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-neutral-text-muted hover:text-semantic-error"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-neutral-text">{note.content}</p>
              <p className="text-xs text-neutral-text-muted">
                {new Date(note.created).toLocaleDateString('fr-FR')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal open={showModal} onOpenChange={setShowModal} title="Nouvelle note">
        <div className="space-y-4">
          <Input
            label="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de la note..."
          />
          <TextArea
            label="Contenu"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Écrivez votre note ici..."
          />
          <div className="flex gap-3">
            <Button
              variant="primary"
              onClick={handleAddNote}
              disabled={!title || !content}
              className="flex-1"
            >
              Sauvegarder
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowModal(false)}
              className="flex-1"
            >
              Annuler
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
