export declare const supabase: import("@supabase/supabase-js").SupabaseClient<any, "public", "public", any, any>;
export declare const authService: {
    signUp(email: string, password: string, name: string): Promise<{
        data: {
            user: import("@supabase/auth-js").User | null;
            session: import("@supabase/auth-js").Session | null;
        } | {
            user: null;
            session: null;
        };
        error: import("@supabase/auth-js").AuthError | null;
    }>;
    signIn(email: string, password: string): Promise<{
        data: {
            user: import("@supabase/auth-js").User;
            session: import("@supabase/auth-js").Session;
            weakPassword?: import("@supabase/auth-js").WeakPassword;
        } | {
            user: null;
            session: null;
            weakPassword?: null | undefined;
        };
        error: import("@supabase/auth-js").AuthError | null;
    }>;
    signOut(): Promise<{
        error: import("@supabase/auth-js").AuthError | null;
    }>;
    getCurrentUser(): Promise<{
        session: import("@supabase/auth-js").Session | null;
        error: import("@supabase/auth-js").AuthError | null;
    }>;
};
export declare const citationService: {
    getAllCitations(): Promise<{
        data: any[] | null;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    getCitationById(id: string): Promise<{
        data: any;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    getCitationsByTheme(themeId: string): Promise<{
        data: any[] | null;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    searchCitations(query: string): Promise<{
        data: any[] | null;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    createCitation(citation: any): Promise<{
        data: any;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
};
export declare const themeService: {
    getAllThemes(): Promise<{
        data: any[] | null;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    getThemeById(id: string): Promise<{
        data: any;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    createTheme(theme: any): Promise<{
        data: any;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
};
export declare const collectionService: {
    getUserCollections(userId: string): Promise<{
        data: any[] | null;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    createCollection(collection: any): Promise<{
        data: any;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
    addCitationToCollection(collectionId: string, citationId: string): Promise<{
        data: any;
        error: import("@supabase/postgrest-js").PostgrestError | null;
    }>;
};
//# sourceMappingURL=supabase.d.ts.map