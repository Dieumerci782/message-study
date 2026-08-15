'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { authService } from '@/lib/supabase'
import { Toaster, toast } from 'sonner'

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis'),
})

const signupSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Minimum 6 caractères'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword'],
})

type LoginFormData = z.infer<typeof loginSchema>
type SignupFormData = z.infer<typeof signupSchema>

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'signup'>('login')

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleLogin = async (data: LoginFormData) => {
    const { data: authData, error } = await authService.signIn(data.email, data.password)

    if (error) {
      toast.error(error.message)
      return
    }

    if (authData?.user) {
      toast.success('Connecté avec succès!')
      router.push('/dashboard')
    }
  }

  const handleSignup = async (data: SignupFormData) => {
    const { error } = await authService.signUp(data.email, data.password, data.name)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success('Inscription réussie! Veuillez confirmer votre email.')
    setMode('login')
    signupForm.reset()
  }

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen items-center justify-center bg-neutral-bg-primary px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-primary-800 text-2xl font-serif text-white">
              M
            </div>
            <h1 className="mb-2 font-serif text-4xl font-semibold text-neutral-text">
              Message Study
            </h1>
            <p className="text-sm tracking-wide text-neutral-text-muted">
              PREMIUM ACADEMIC INTERFACE
            </p>
          </div>

          {/* Card */}
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex gap-2 border-b border-neutral-border pb-4">
                <button
                  onClick={() => {
                    setMode('login')
                    loginForm.reset()
                  }}
                  className={`flex-1 border-b-2 py-2 text-sm font-medium transition-all ${
                    mode === 'login'
                      ? 'border-accent text-accent'
                      : 'border-transparent text-neutral-text-secondary hover:text-neutral-text'
                  }`}
                >
                  Connexion
                </button>
                <button
                  onClick={() => {
                    setMode('signup')
                    signupForm.reset()
                  }}
                  className={`flex-1 border-b-2 py-2 text-sm font-medium transition-all ${
                    mode === 'signup'
                      ? 'border-accent text-accent'
                      : 'border-transparent text-neutral-text-secondary hover:text-neutral-text'
                  }`}
                >
                  Inscription
                </button>
              </div>
            </CardHeader>

            <CardContent>
              {mode === 'login' && (
                <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="vous@example.com"
                    {...loginForm.register('email')}
                    error={loginForm.formState.errors.email?.message}
                  />
                  <Input
                    label="Mot de passe"
                    type="password"
                    placeholder="••••••"
                    {...loginForm.register('password')}
                    error={loginForm.formState.errors.password?.message}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={loginForm.formState.isSubmitting}
                    disabled={loginForm.formState.isSubmitting}
                  >
                    Se connecter
                  </Button>
                </form>
              )}

              {mode === 'signup' && (
                <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                  <Input
                    label="Nom complet"
                    type="text"
                    placeholder="Jean Dupont"
                    {...signupForm.register('name')}
                    error={signupForm.formState.errors.name?.message}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="vous@example.com"
                    {...signupForm.register('email')}
                    error={signupForm.formState.errors.email?.message}
                  />
                  <Input
                    label="Mot de passe"
                    type="password"
                    placeholder="••••••"
                    {...signupForm.register('password')}
                    error={signupForm.formState.errors.password?.message}
                  />
                  <Input
                    label="Confirmer le mot de passe"
                    type="password"
                    placeholder="••••••"
                    {...signupForm.register('confirmPassword')}
                    error={signupForm.formState.errors.confirmPassword?.message}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={signupForm.formState.isSubmitting}
                    disabled={signupForm.formState.isSubmitting}
                  >
                    S'inscrire
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-neutral-text-muted">
            © 2026 Message Study. Tous droits réservés.
          </p>
        </div>
      </div>
    </>
  )
}
