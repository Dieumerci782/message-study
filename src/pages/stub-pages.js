import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Input, TextArea, Checkbox, Badge } from '@/components';
// ============ ASSISTANT PAGE ============
export const AssistantPage = () => {
    const [messages, setMessages] = useState([
        { id: '1', role: 'assistant', text: 'Bonjour! Je suis l\'assistant du Message. Posez-moi vos questions sur le corpus de William Marrion Branham.' },
        { id: '2', role: 'user', text: 'Quel est le message de la grâce?' },
        { id: '3', role: 'assistant', text: 'Le message de la grâce est un concept central qui parle de la miséricorde divine envers l\'humanité...' },
    ]);
    const [input, setInput] = useState('');
    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: Date.now().toString(), role: 'user', text: input }]);
            setInput('');
            setTimeout(() => {
                setMessages(m => [...m, { id: (Date.now() + 1).toString(), role: 'assistant', text: 'Réponse en cours de génération...' }]);
            }, 500);
        }
    };
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0 max-w-4xl", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800 mb-8", children: "Assistant du Message" }), _jsxs(Card, { className: "h-[600px] flex flex-col", children: [_jsx(CardBody, { className: "flex-1 overflow-y-auto space-y-4 border-b border-neutral-border", children: messages.map(msg => (_jsx("div", { className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`, children: _jsx("div", { className: `max-w-xs px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-primary-100 text-primary-900' : 'bg-neutral-bg-secondary text-neutral-text'}`, children: msg.text }) }, msg.id))) }), _jsxs(CardFooter, { className: "flex gap-2", children: [_jsx("input", { type: "text", value: input, onChange: e => setInput(e.target.value), onKeyPress: e => e.key === 'Enter' && handleSend(), placeholder: "Votre question...", className: "flex-1 px-4 py-2 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" }), _jsx(Button, { variant: "primary", onClick: handleSend, children: "Envoyer" })] })] })] }));
};
// ============ COLLECTIONS PAGE ============
export const CollectionsPage = () => {
    const [showNewCollection, setShowNewCollection] = useState(false);
    const [collectionName, setCollectionName] = useState('');
    const collections = [
        { id: '1', name: 'Révélations Divines', description: 'Citations sur les révélations de Dieu', citations: 42, created: '2026-01-15' },
        { id: '2', name: 'Spiritualité', description: 'Développement et croissance spirituelle', citations: 67, created: '2026-02-03' },
        { id: '3', name: 'Sciences', description: 'Références scientifiques du Message', citations: 23, created: '2026-02-10' },
        { id: '4', name: 'Guérison', description: 'Citations sur la guérison divine', citations: 55, created: '2026-03-01' },
    ];
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0", children: [_jsxs("div", { className: "mb-8 flex items-center justify-between", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800", children: "Mes Collections" }), _jsx(Button, { variant: "primary", onClick: () => setShowNewCollection(!showNewCollection), children: "+ Nouvelle Collection" })] }), showNewCollection && (_jsx(Card, { className: "mb-8", children: _jsxs(CardBody, { className: "space-y-4", children: [_jsx("h3", { className: "font-semibold text-primary-800", children: "Cr\u00E9er une collection" }), _jsx(Input, { label: "Nom de la collection", placeholder: "Ex: Mon th\u00E8me favori", value: collectionName, onChange: e => setCollectionName(e.target.value) }), _jsx(TextArea, { label: "Description", placeholder: "D\u00E9crivez le contenu de cette collection...", rows: 3 }), _jsxs("div", { className: "flex gap-3 justify-end", children: [_jsx(Button, { variant: "secondary", onClick: () => setShowNewCollection(false), children: "Annuler" }), _jsx(Button, { variant: "primary", onClick: () => { setShowNewCollection(false); setCollectionName(''); }, children: "Cr\u00E9er" })] })] }) })), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: collections.map(col => (_jsxs(Card, { hover: true, children: [_jsxs(CardBody, { className: "space-y-3", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsx("h3", { className: "text-lg font-semibold text-primary-800", children: col.name }), _jsx(Badge, { variant: "primary", children: col.citations })] }), _jsx("p", { className: "text-sm text-neutral-text-secondary", children: col.description }), _jsxs("p", { className: "text-xs text-neutral-text-muted", children: ["Cr\u00E9\u00E9e le ", new Date(col.created).toLocaleDateString('fr-FR')] })] }), _jsx(CardFooter, { children: _jsx(Button, { variant: "secondary", size: "sm", children: "Voir collection" }) })] }, col.id))) })] }));
};
// ============ STUDIES PAGE ============
export const StudiesPage = () => {
    const studies = [
        { id: '1', title: 'Étude: L\'Âge de la Grâce', citations: 12, notes: 8, progress: 45, created: '2026-02-01' },
        { id: '2', title: 'Révélations Scientifiques', citations: 28, notes: 15, progress: 72, created: '2026-01-15' },
        { id: '3', title: 'Ministères Spirituels', citations: 19, notes: 5, progress: 30, created: '2026-03-05' },
    ];
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800 mb-2", children: "Mes \u00C9tudes" }), _jsx("p", { className: "text-neutral-text-secondary", children: "Vos \u00E9tudes et recherches personnelles" })] }), _jsx("div", { className: "space-y-4", children: studies.map(study => (_jsxs(Card, { hover: true, className: "cursor-pointer", children: [_jsxs(CardBody, { className: "space-y-3", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsx("h3", { className: "text-lg font-semibold text-primary-800", children: study.title }), _jsxs(Badge, { variant: "success", children: [study.progress, "%"] })] }), _jsx("div", { className: "w-full bg-neutral-bg-secondary rounded-full h-2", children: _jsx("div", { className: "bg-accent h-2 rounded-full", style: { width: `${study.progress}%` } }) }), _jsxs("div", { className: "flex gap-6 text-sm text-neutral-text-secondary", children: [_jsxs("span", { children: ["\uD83D\uDCCC ", study.citations, " citations"] }), _jsxs("span", { children: ["\uD83D\uDCDD ", study.notes, " notes"] }), _jsxs("span", { children: ["\uD83D\uDCC5 ", new Date(study.created).toLocaleDateString('fr-FR')] })] })] }), _jsx(CardFooter, { children: _jsx(Button, { variant: "primary", size: "sm", children: "Continuer l\\'\u00E9tude" }) })] }, study.id))) })] }));
};
// ============ FAVORITES PAGE ============
export const FavoritesPage = () => {
    const favorites = [
        { id: '1', idea: 'La lumière triomphe des ténèbres', original: 'And the light shineth in darkness...', theme: 'Lumière Divine', date: '2026-03-10' },
        { id: '2', idea: 'Dieu parle par ses prophètes', original: 'Surely the Lord GOD will do nothing...', theme: 'Révélation', date: '2026-03-05' },
        { id: '3', idea: 'La foi guérit toutes choses', original: 'Is any sick among you?...', theme: 'Guérison', date: '2026-02-28' },
        { id: '4', idea: 'L\'amour est la plus grande vertu', original: 'Though I speak with the tongues...', theme: 'Amour', date: '2026-02-20' },
    ];
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800 mb-2", children: "Mes Favoris" }), _jsxs("p", { className: "text-neutral-text-secondary", children: [favorites.length, " citations marqu\u00E9es"] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: favorites.map(fav => (_jsxs(Card, { className: "border-l-4 border-accent", children: [_jsxs(CardBody, { className: "space-y-3", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsx(Badge, { variant: "primary", children: fav.theme }), _jsx("span", { className: "text-lg", children: "\u2B50" })] }), _jsx("h3", { className: "font-semibold text-primary-800", children: fav.idea }), _jsxs("p", { className: "text-sm text-neutral-text-secondary italic", children: ["\"", fav.original, "\""] }), _jsxs("p", { className: "text-xs text-neutral-text-muted", children: ["Ajout\u00E9 le ", new Date(fav.date).toLocaleDateString('fr-FR')] })] }), _jsx(CardFooter, { children: _jsx(Button, { variant: "ghost", size: "sm", children: "Voir d\u00E9tails" }) })] }, fav.id))) })] }));
};
// ============ NOTES PAGE ============
export const NotesPage = () => {
    const [showNewNote, setShowNewNote] = useState(false);
    const notes = [
        { id: '1', title: 'Note: L\'Âge de la Grâce', content: 'Observation importante sur les dates...', citations: 3, created: '2026-03-08' },
        { id: '2', title: 'Connexions avec Apocalypse', content: 'Parallèles intéressants entre les révélations...', citations: 7, created: '2026-02-15' },
        { id: '3', title: 'Questions à approfondir', content: 'Points qui méritent une enquête plus approfondie...', citations: 2, created: '2026-02-01' },
    ];
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0", children: [_jsxs("div", { className: "mb-8 flex items-center justify-between", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800", children: "Mes Notes" }), _jsx(Button, { variant: "primary", onClick: () => setShowNewNote(!showNewNote), children: "+ Nouvelle Note" })] }), showNewNote && (_jsx(Card, { className: "mb-8", children: _jsxs(CardBody, { className: "space-y-4", children: [_jsx(Input, { label: "Titre de la note", placeholder: "Donnez un titre..." }), _jsx(TextArea, { label: "Contenu", placeholder: "\u00C9crivez votre note...", rows: 4 }), _jsxs("div", { className: "flex gap-3 justify-end", children: [_jsx(Button, { variant: "secondary", onClick: () => setShowNewNote(false), children: "Annuler" }), _jsx(Button, { variant: "primary", onClick: () => setShowNewNote(false), children: "Cr\u00E9er note" })] })] }) })), _jsx("div", { className: "space-y-4", children: notes.map(note => (_jsxs(Card, { hover: true, className: "cursor-pointer", children: [_jsxs(CardBody, { className: "space-y-2", children: [_jsx("h3", { className: "text-lg font-semibold text-primary-800", children: note.title }), _jsx("p", { className: "text-sm text-neutral-text-secondary", children: note.content }), _jsxs("div", { className: "flex items-center gap-4 text-xs text-neutral-text-muted", children: [_jsxs("span", { children: ["\uD83D\uDCCC ", note.citations, " citation(s) li\u00E9e(s)"] }), _jsxs("span", { children: ["\uD83D\uDCC5 ", new Date(note.created).toLocaleDateString('fr-FR')] })] })] }), _jsx(CardFooter, { children: _jsx(Button, { variant: "secondary", size: "sm", children: "\u00C9diter" }) })] }, note.id))) })] }));
};
// ============ HISTORY PAGE ============
export const HistoryPage = () => {
    const history = [
        { id: '1', action: 'Consulté', item: 'Citation: "La lumière triomphe"', date: '2026-03-10 14:32', icon: '📖' },
        { id: '2', action: 'Créé collection', item: '"Révélations Divines"', date: '2026-03-09 10:15', icon: '📂' },
        { id: '3', action: 'Ajouté aux favoris', item: 'Citation: "L\'amour éternel"', date: '2026-03-08 16:45', icon: '⭐' },
        { id: '4', action: 'Créé étude', item: '"L\'Âge de la Grâce"', date: '2026-03-07 09:20', icon: '📝' },
        { id: '5', action: 'Consulté', item: 'Thème: Spiritualité', date: '2026-03-06 13:50', icon: '📖' },
        { id: '6', action: 'Recherche effectuée', item: '"révélation divine"', date: '2026-03-05 11:30', icon: '🔍' },
    ];
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800 mb-8", children: "Historique" }), _jsx("div", { className: "space-y-3", children: history.map((item, idx) => (_jsxs("div", { className: "flex gap-4", children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "text-2xl", children: item.icon }), idx < history.length - 1 && _jsx("div", { className: "w-0.5 h-12 bg-neutral-border mt-2" })] }), _jsx(Card, { className: "flex-1 hover", children: _jsxs(CardBody, { className: "space-y-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-semibold text-primary-800", children: item.action }), _jsx("span", { className: "text-xs text-neutral-text-muted", children: item.date })] }), _jsx("p", { className: "text-sm text-neutral-text-secondary", children: item.item })] }) })] }, item.id))) })] }));
};
// ============ SETTINGS PAGE ============
export const SettingsPage = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        darkMode: false,
        showReadingTime: true,
        autoSaveNotes: true,
        privateProfile: false,
    });
    return (_jsxs("div", { className: "container-normal py-8 px-4 md:px-0 max-w-2xl", children: [_jsx("h1", { className: "text-3xl font-bold text-primary-800 mb-8", children: "Param\u00E8tres" }), _jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { className: "border-b border-neutral-border", children: _jsx("h2", { className: "font-semibold text-primary-800", children: "Profil" }) }), _jsxs(CardBody, { className: "space-y-4", children: [_jsx(Input, { label: "Nom complet", defaultValue: "Jean Dupont" }), _jsx(Input, { label: "Email", type: "email", defaultValue: "jean@example.com" }), _jsx(TextArea, { label: "Biographie", placeholder: "Parlez de vous...", rows: 3 })] })] }), _jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { className: "border-b border-neutral-border", children: _jsx("h2", { className: "font-semibold text-primary-800", children: "Affichage" }) }), _jsxs(CardBody, { className: "space-y-4", children: [_jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [_jsx(Checkbox, { checked: settings.darkMode, onChange: e => setSettings({ ...settings, darkMode: e.target.checked }) }), _jsx("span", { className: "text-neutral-text", children: "Mode sombre" })] }), _jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [_jsx(Checkbox, { checked: settings.showReadingTime, onChange: e => setSettings({ ...settings, showReadingTime: e.target.checked }) }), _jsx("span", { className: "text-neutral-text", children: "Afficher temps de lecture" })] })] })] }), _jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { className: "border-b border-neutral-border", children: _jsx("h2", { className: "font-semibold text-primary-800", children: "Notifications" }) }), _jsxs(CardBody, { className: "space-y-4", children: [_jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [_jsx(Checkbox, { checked: settings.emailNotifications, onChange: e => setSettings({ ...settings, emailNotifications: e.target.checked }) }), _jsx("span", { className: "text-neutral-text", children: "Notifications par email" })] }), _jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [_jsx(Checkbox, { checked: settings.autoSaveNotes, onChange: e => setSettings({ ...settings, autoSaveNotes: e.target.checked }) }), _jsx("span", { className: "text-neutral-text", children: "Auto-sauvegarder les notes" })] })] })] }), _jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { className: "border-b border-neutral-border", children: _jsx("h2", { className: "font-semibold text-primary-800", children: "Confidentialit\u00E9" }) }), _jsxs(CardBody, { className: "space-y-4", children: [_jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [_jsx(Checkbox, { checked: settings.privateProfile, onChange: e => setSettings({ ...settings, privateProfile: e.target.checked }) }), _jsx("span", { className: "text-neutral-text", children: "Profil priv\u00E9" })] }), _jsx(Button, { variant: "secondary", size: "sm", children: "Exporter mes donn\u00E9es" })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { variant: "primary", children: "Enregistrer les modifications" }), _jsx(Button, { variant: "secondary", children: "Annuler" })] })] }));
};
//# sourceMappingURL=stub-pages.js.map