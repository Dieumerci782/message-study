// User & Auth
export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  role: 'user' | 'editor' | 'admin'
  created_at: string
}

// Citations
export interface Citation {
  id: string
  idea_directive: string
  original_text: string
  translation_text: string
  reference: string
  reference_title?: string
  reference_date?: string
  paragraph_number?: number
  language: string
  theme_id: string
  created_by: string
  created_at: string
  updated_at: string
  status: 'draft' | 'review' | 'verified' | 'published'
}

// Themes/Topics
export interface Theme {
  id: string
  name: string
  description: string
  icon?: string
  citation_count: number
  created_by: string
  created_at: string
  updated_at: string
}

// Collections (User-created groups)
export interface Collection {
  id: string
  user_id: string
  name: string
  description?: string
  is_public: boolean
  citations_count: number
  created_at: string
  updated_at: string
}

export interface CollectionCitation {
  id: string
  collection_id: string
  citation_id: string
  added_at: string
}

// Studies
export interface Study {
  id: string
  user_id: string
  title: string
  description?: string
  content?: string
  status: 'draft' | 'in_progress' | 'completed'
  progress_percentage: number
  created_at: string
  updated_at: string
}

export interface StudyCitation {
  id: string
  study_id: string
  citation_id: string
  notes?: string
  order: number
}

// Notes
export interface Note {
  id: string
  user_id: string
  content: string
  citation_id?: string
  theme_id?: string
  collection_id?: string
  is_public: boolean
  created_at: string
  updated_at: string
}

// Favorites
export interface Favorite {
  id: string
  user_id: string
  citation_id: string
  created_at: string
}

// History
export interface History {
  id: string
  user_id: string
  citation_id?: string
  theme_id?: string
  action: 'view' | 'search' | 'create' | 'update'
  viewed_at: string
}

// Search
export interface SearchResult {
  type: 'citation' | 'theme' | 'collection' | 'study'
  id: string
  title: string
  excerpt?: string
  relevance_score: number
  metadata?: Record<string, any>
}

// AI/Assistant
export interface AssistantMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  sources?: CitationSource[]
  created_at: string
}

export interface CitationSource {
  citation_id: string
  reference: string
  title?: string
  relevance: number
}

// Sync
export interface SyncState {
  status: 'synced' | 'syncing' | 'offline' | 'error'
  last_synced?: string
  error_message?: string
}
