import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardBody, Input, Button } from '@/components';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/lib/supabase';
import { useUIStore } from '@/store/uiStore';
export const AuthPage = () => {
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { setUser, setLoading: setAuthLoading } = useAuthStore();
    const { setCurrentPage, showToast } = useUIStore();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const { data, error: authError } = await authService.signIn(email, password);
            if (authError) {
                setError(authError.message || 'Erreur de connexion');
                return;
            }
            if (data?.user) {
                setUser({
                    id: data.user.id,
                    email: data.user.email || '',
                    name: data.user.user_metadata?.name || 'User',
                    role: 'user',
                    created_at: data.user.created_at || '',
                });
                showToast('Connecté avec succès!', 'success');
                setCurrentPage('dashboard');
            }
        }
        catch (err) {
            setError('Une erreur est survenue');
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }
        if (password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }
        setLoading(true);
        try {
            const { data, error: authError } = await authService.signUp(email, password, name);
            if (authError) {
                setError(authError.message || 'Erreur lors de l\'inscription');
                return;
            }
            setSuccess('Inscription réussie! Veuillez confirmer votre email.');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setName('');
            setTimeout(() => setMode('login'), 3000);
        }
        catch (err) {
            setError('Une erreur est survenue');
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-primary-50 to-accent/10 flex items-center justify-center px-4 py-12", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "w-16 h-16 rounded-lg bg-gradient-to-br from-primary-800 to-accent flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4", children: "M" }), _jsx("h1", { className: "text-3xl font-bold text-primary-800", children: "Message Study" }), _jsx("p", { className: "text-neutral-text-secondary mt-2", children: "Premium Study Tool" })] }), _jsx(Card, { className: "shadow-lg", children: _jsxs(CardBody, { className: "space-y-6", children: [_jsxs("div", { className: "flex gap-2 border-b border-neutral-border", children: [_jsx("button", { onClick: () => { setMode('login'); setError(''); setSuccess(''); }, className: `flex-1 py-3 font-medium text-sm border-b-2 transition-all ${mode === 'login'
                                            ? 'border-accent text-accent'
                                            : 'border-transparent text-neutral-text-secondary hover:text-neutral-text'}`, children: "Connexion" }), _jsx("button", { onClick: () => { setMode('signup'); setError(''); setSuccess(''); }, className: `flex-1 py-3 font-medium text-sm border-b-2 transition-all ${mode === 'signup'
                                            ? 'border-accent text-accent'
                                            : 'border-transparent text-neutral-text-secondary hover:text-neutral-text'}`, children: "Inscription" })] }), error && (_jsx("div", { className: "p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm", children: error })), success && (_jsx("div", { className: "p-3 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm", children: success })), mode === 'login' && (_jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [_jsx(Input, { label: "Email", type: "email", placeholder: "vous@example.com", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsx(Input, { label: "Mot de passe", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx(Button, { variant: "primary", className: "w-full", isLoading: loading, disabled: loading, children: "Se connecter" })] })), mode === 'signup' && (_jsxs("form", { onSubmit: handleSignup, className: "space-y-4", children: [_jsx(Input, { label: "Nom complet", type: "text", placeholder: "Jean Dupont", value: name, onChange: (e) => setName(e.target.value), required: true }), _jsx(Input, { label: "Email", type: "email", placeholder: "vous@example.com", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsx(Input, { label: "Mot de passe", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx(Input, { label: "Confirmer le mot de passe", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true }), _jsx(Button, { variant: "primary", className: "w-full", isLoading: loading, disabled: loading, children: "S'inscrire" })] })), _jsxs("div", { className: "pt-4 border-t border-neutral-border", children: [_jsx("p", { className: "text-xs text-neutral-text-muted text-center mb-3", children: "\uD83E\uDDEA Compte de test (pour d\u00E9mo)" }), _jsxs("div", { className: "bg-neutral-bg-secondary p-3 rounded-md space-y-1 text-xs", children: [_jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " demo@example.com"] }), _jsxs("p", { children: [_jsx("strong", { children: "Password:" }), " Demo123!"] })] })] })] }) }), _jsx("p", { className: "text-center text-xs text-neutral-text-muted mt-6", children: "\u00A9 2026 Message Study. Tous droits r\u00E9serv\u00E9s." })] }) }));
};
//# sourceMappingURL=AuthPage.js.map