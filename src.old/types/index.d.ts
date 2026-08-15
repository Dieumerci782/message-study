export interface User {
    id: string;
    email: string;
    name: string;
    avatar_url?: string;
    role: 'user' | 'editor' | 'admin';
    created_at: string;
}
export interface Citation {
    id: string;
    idea_directive: string;
    original_text: string;
    translation_text: string;
    reference: string;
    reference_title?: string;
    reference_date?: string;
    paragraph_number?: number;
    language: string;
    theme_id: string;
    created_by: string;
    created_at: string;
    updated_at: string;
    status: 'draft' | 'review' | 'verified' | 'published';
}
export interface Theme {
    id: string;
    name: string;
    description: string;
    icon?: string;
    citation_count: number;
    created_by: string;
    created_at: string;
    updated_at: string;
}
export interface Collection {
    id: string;
    user_id: string;
    name: string;
    description?: string;
    is_public: boolean;
    citations_count: number;
    created_at: string;
    updated_at: string;
}
export interface CollectionCitation {
    id: string;
    collection_id: string;
    citation_id: string;
    added_at: string;
}
export interface Study {
    id: string;
    user_id: string;
    title: string;
    description?: string;
    content?: string;
    status: 'draft' | 'in_progress' | 'completed';
    progress_percentage: number;
    created_at: string;
    updated_at: string;
}
export interface StudyCitation {
    id: string;
    study_id: string;
    citation_id: string;
    notes?: string;
    order: number;
}
export interface Note {
    id: string;
    user_id: string;
    content: string;
    citation_id?: string;
    theme_id?: string;
    collection_id?: string;
    is_public: boolean;
    created_at: string;
    updated_at: string;
}
export interface Favorite {
    id: string;
    user_id: string;
    citation_id: string;
    created_at: string;
}
export interface History {
    id: string;
    user_id: string;
    citation_id?: string;
    theme_id?: string;
    action: 'view' | 'search' | 'create' | 'update';
    viewed_at: string;
}
export interface SearchResult {
    type: 'citation' | 'theme' | 'collection' | 'study';
    id: string;
    title: string;
    excerpt?: string;
    relevance_score: number;
    metadata?: Record<string, any>;
}
export interface AssistantMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    sources?: CitationSource[];
    created_at: string;
}
export interface CitationSource {
    citation_id: string;
    reference: string;
    title?: string;
    relevance: number;
}
export interface SyncState {
    status: 'synced' | 'syncing' | 'offline' | 'error';
    last_synced?: string;
    error_message?: string;
}
//# sourceMappingURL=index.d.ts.map