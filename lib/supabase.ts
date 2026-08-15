import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

// Auth Service
export const authService = {
  async signUp(email: string, password: string, name: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    })
    return { data, error }
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  async getCurrentUser() {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },
}

// Citation Service
export const citationService = {
  async getAllCitations() {
    const { data, error } = await supabase
      .from('citations')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },

  async getCitationById(id: string) {
    const { data, error } = await supabase
      .from('citations')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  async getCitationsByTheme(themeId: string) {
    const { data, error } = await supabase
      .from('citations')
      .select('*')
      .eq('theme_id', themeId)
      .order('created_at', { ascending: false })
    return { data, error }
  },

  async searchCitations(query: string) {
    const { data, error } = await supabase
      .from('citations')
      .select('*')
      .or(`idea.ilike.%${query}%,original_text.ilike.%${query}%,translation.ilike.%${query}%`)
      .order('created_at', { ascending: false })
      .limit(50)
    return { data, error }
  },

  async createCitation(citation: any) {
    const { data, error } = await supabase
      .from('citations')
      .insert([citation])
      .select()
      .single()
    return { data, error }
  },
}

// Theme Service
export const themeService = {
  async getAllThemes() {
    const { data, error } = await supabase
      .from('themes')
      .select('*')
      .order('name', { ascending: true })
    return { data, error }
  },

  async getThemeById(id: string) {
    const { data, error } = await supabase
      .from('themes')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  async createTheme(theme: any) {
    const { data, error } = await supabase
      .from('themes')
      .insert([theme])
      .select()
      .single()
    return { data, error }
  },
}

// Collection Service
export const collectionService = {
  async getUserCollections(userId: string) {
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    return { data, error }
  },

  async createCollection(collection: any) {
    const { data, error } = await supabase
      .from('collections')
      .insert([collection])
      .select()
      .single()
    return { data, error }
  },

  async addCitationToCollection(collectionId: string, citationId: string) {
    const { data, error } = await supabase
      .from('collection_citations')
      .insert([{ collection_id: collectionId, citation_id: citationId }])
      .select()
      .single()
    return { data, error }
  },
}
