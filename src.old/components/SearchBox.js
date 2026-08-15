import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Input } from './Input';
export const SearchBox = ({ placeholder = 'Rechercher dans le Message…', onSearch, suggestions = [
    '🔍 Essayez: "rôle des anges"',
    '🔍 Ou: "comment Dieu parle?"',
    '🔍 Ou: "âge de la grâce"',
], onSuggestionClick, isLoading = false, }) => {
    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            onSearch?.(value);
            setShowSuggestions(false);
        }
    };
    const handleSuggestionClick = (suggestion) => {
        const clean = suggestion.replace(/^🔍\s*(?:Essayez:|Ou:)\s*/, '').replace(/"/g, '');
        setValue(clean);
        onSuggestionClick?.(clean);
        setShowSuggestions(false);
    };
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("form", { onSubmit: handleSubmit, className: "relative", children: _jsx(Input, { type: "text", placeholder: placeholder, value: value, onChange: (e) => {
                        setValue(e.target.value);
                        setShowSuggestions(true);
                    }, onFocus: () => setShowSuggestions(true), className: "text-lg h-16", icon: isLoading ? '⟳' : '🔍' }) }), showSuggestions && (_jsx("div", { className: "space-y-2", children: suggestions.map((suggestion, i) => (_jsx("button", { onClick: () => handleSuggestionClick(suggestion), className: "block text-sm text-neutral-text-secondary hover:text-neutral-text transition-colors", children: suggestion }, i))) }))] }));
};
//# sourceMappingURL=SearchBox.js.map