import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
});
// Auth helpers
export const authService = {
    async signUp(email, password, name) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name },
            },
        });
        return { data, error };
    },
    async signIn(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        return { data, error };
    },
    async signOut() {
        const { error } = await supabase.auth.signOut();
        return { error };
    },
    async getCurrentUser() {
        const { data: { session }, error } = await supabase.auth.getSession();
        return { session, error };
    },
};
// Citation helpers
export const citationService = {
    async getAllCitations() {
        const { data, error } = await supabase
            .from('citations')
            .select('*')
            .order('created_at', { ascending: false });
        return { data, error };
    },
    async getCitationById(id) {
        const { data, error } = await supabase
            .from('citations')
            .select('*')
            .eq('id', id)
            .single();
        return { data, error };
    },
    async getCitationsByTheme(themeId) {
        const { data, error } = await supabase
            .from('citations')
            .select('*')
            .eq('theme_id', themeId)
            .order('created_at', { ascending: false });
        return { data, error };
    },
    async searchCitations(query) {
        const { data, error } = await supabase
            .from('citations')
            .select('*')
            .or(`idea.ilike.%${query}%,original_text.ilike.%${query}%,translation.ilike.%${query}%`)
            .order('created_at', { ascending: false })
            .limit(50);
        return { data, error };
    },
    async createCitation(citation) {
        const { data, error } = await supabase
            .from('citations')
            .insert([citation])
            .select()
            .single();
        return { data, error };
    },
};
// Theme helpers
export const themeService = {
    async getAllThemes() {
        const { data, error } = await supabase
            .from('themes')
            .select('*')
            .order('name', { ascending: true });
        return { data, error };
    },
    async getThemeById(id) {
        const { data, error } = await supabase
            .from('themes')
            .select('*')
            .eq('id', id)
            .single();
        return { data, error };
    },
    async createTheme(theme) {
        const { data, error } = await supabase
            .from('themes')
            .insert([theme])
            .select()
            .single();
        return { data, error };
    },
};
// Collection helpers
export const collectionService = {
    async getUserCollections(userId) {
        const { data, error } = await supabase
            .from('collections')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        return { data, error };
    },
    async createCollection(collection) {
        const { data, error } = await supabase
            .from('collections')
            .insert([collection])
            .select()
            .single();
        return { data, error };
    },
    async addCitationToCollection(collectionId, citationId) {
        const { data, error } = await supabase
            .from('collection_citations')
            .insert([{ collection_id: collectionId, citation_id: citationId }])
            .select()
            .single();
        return { data, error };
    },
};
//# sourceMappingURL=supabase.js.map