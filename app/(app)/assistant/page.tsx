'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Send } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const mockResponses = [
  'Je vous aide à explorer les enseignements de William Marrion Branham.',
  'Pouvez-vous clarifier votre question sur ce passage?',
  'Selon les enseignements, cela signifie que la foi est la base de toute action spirituelle.',
  'Je recommande de consulter les passages relatifs à la révélation progressive.',
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Bonjour! Je suis l\'assistant Message Study. Comment puis-je vous aider à explorer les enseignements d\'aujourd\'hui?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate assistant response delay
    setTimeout(() => {
      const randomResponse =
        mockResponses[Math.floor(Math.random() * mockResponses.length)]
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: randomResponse,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="flex h-[calc(100vh-60px)] flex-col bg-neutral-bg-primary">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-8">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <Card
              className={`max-w-md ${
                message.type === 'user'
                  ? 'bg-primary-700 text-white'
                  : 'bg-neutral-surface'
              }`}
            >
              <div className="px-4 py-3">
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p
                  className={`mt-2 text-xs ${
                    message.type === 'user'
                      ? 'text-primary-100'
                      : 'text-neutral-text-muted'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-2 p-4">
              <div className="h-2 w-2 rounded-full bg-neutral-text-muted animate-bounce" />
              <div className="h-2 w-2 rounded-full bg-neutral-text-muted animate-bounce delay-100" />
              <div className="h-2 w-2 rounded-full bg-neutral-text-muted animate-bounce delay-200" />
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input */}
      <div className="border-t border-neutral-border bg-neutral-surface p-4">
        <div className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Votre question ici..."
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="gap-2"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
