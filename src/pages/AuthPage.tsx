import React, { useState } from 'react'
import { Card, CardBody, Input, Button } from '@/components'
import { useAuthStore } from '@/store/authStore'
import { authService } from '@/lib/supabase'
import { useUIStore } from '@/store/uiStore'

type AuthMode = 'login' | 'signup' | 'reset'

export const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const { setUser, setLoading: setAuthLoading } = useAuthStore()
  const { setCurrentPage, showToast } = useUIStore()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error: authError } = await authService.signIn(email, password)

      if (authError) {
        setError(authError.message || 'Erreur de connexion')
        return
      }

      if (data?.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || '',
          name: data.user.user_metadata?.name || 'User',
          role: 'user',
          created_at: data.user.created_at || '',
        })
        showToast('Connecté avec succès!', 'success')
        setCurrentPage('dashboard')
      }
    } catch (err) {
      setError('Une erreur est survenue')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      return
    }

    setLoading(true)

    try {
      const { data, error: authError } = await authService.signUp(email, password, name)

      if (authError) {
        setError(authError.message || 'Erreur lors de l\'inscription')
        return
      }

      setSuccess('Inscription réussie! Veuillez confirmer votre email.')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setName('')
      setTimeout(() => setMode('login'), 3000)
    } catch (err) {
      setError('Une erreur est survenue')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-bg-primary flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-md bg-primary-800 flex items-center justify-center text-white font-serif text-2xl mx-auto mb-6">
            M
          </div>
          <h1 className="text-4xl font-serif font-semibold text-neutral-text mb-2">Message Study</h1>
          <p className="text-sm text-neutral-text-muted tracking-wide">PREMIUM ACADEMIC INTERFACE</p>
        </div>

        {/* Card */}
        <Card className="shadow-lg">
          <CardBody className="space-y-6">
            {/* Mode Tabs */}
            <div className="flex gap-2 border-b border-neutral-border">
              <button
                onClick={() => { setMode('login'); setError(''); setSuccess('') }}
                className={`flex-1 py-3 font-medium text-sm border-b-2 transition-all ${
                  mode === 'login'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-neutral-text-secondary hover:text-neutral-text'
                }`}
              >
                Connexion
              </button>
              <button
                onClick={() => { setMode('signup'); setError(''); setSuccess('') }}
                className={`flex-1 py-3 font-medium text-sm border-b-2 transition-all ${
                  mode === 'signup'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-neutral-text-secondary hover:text-neutral-text'
                }`}
              >
                Inscription
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-3 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm">
                {success}
              </div>
            )}

            {/* Login Form */}
            {mode === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="vous@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  label="Mot de passe"
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  variant="primary"
                  className="w-full"
                  isLoading={loading}
                  disabled={loading}
                >
                  Se connecter
                </Button>
              </form>
            )}

            {/* Signup Form */}
            {mode === 'signup' && (
              <form onSubmit={handleSignup} className="space-y-4">
                <Input
                  label="Nom complet"
                  type="text"
                  placeholder="Jean Dupont"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="vous@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  label="Mot de passe"
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Input
                  label="Confirmer le mot de passe"
                  type="password"
                  placeholder="••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Button
                  variant="primary"
                  className="w-full"
                  isLoading={loading}
                  disabled={loading}
                >
                  S'inscrire
                </Button>
              </form>
            )}

            {/* Demo Credentials */}
            <div className="pt-4 border-t border-neutral-border">
              <p className="text-xs text-neutral-text-muted text-center mb-3">
                🧪 Compte de test (pour démo)
              </p>
              <div className="bg-neutral-bg-secondary p-3 rounded-md space-y-1 text-xs">
                <p><strong>Email:</strong> demo@example.com</p>
                <p><strong>Password:</strong> Demo123!</p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-neutral-text-muted mt-6">
          © 2026 Message Study. Tous droits réservés.
        </p>
      </div>
    </div>
  )
}
