import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const Card = React.forwardRef(({ hover = false, highlight = false, className = '', children, ...props }, ref) => (_jsx("div", { ref: ref, className: `card ${hover ? 'card-hover' : ''} ${highlight ? 'border-l-4 border-accent bg-accent-light/10' : ''} ${className}`, ...props, children: children })));
Card.displayName = 'Card';
// Card sections
export const CardHeader = ({ className = '', children, ...props }) => (_jsx("div", { className: `pb-4 border-b border-neutral-border ${className}`, ...props, children: children }));
export const CardBody = ({ className = '', children, ...props }) => (_jsx("div", { className: `py-4 ${className}`, ...props, children: children }));
export const CardFooter = ({ className = '', children, ...props }) => (_jsx("div", { className: `pt-4 border-t border-neutral-border flex gap-3 ${className}`, ...props, children: children }));
export const CitationCard = ({ idea, original, translation, reference, highlighted = false, onView, onFavorite, isFavorite = false, }) => (_jsxs(Card, { highlight: highlighted, className: "cursor-pointer hover:border-accent transition-colors", onClick: onView, children: [_jsx("div", { className: "citation-idea mb-4", children: idea }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("div", { className: "citation-label", children: "Citation originale" }), _jsx("div", { className: "citation-text text-sm", children: original })] }), _jsxs("div", { children: [_jsx("div", { className: "citation-label", children: "Traduction fran\u00E7aise" }), _jsx("div", { className: "citation-text text-sm", children: translation })] }), _jsx("div", { className: "citation-ref", children: reference }), _jsxs("div", { className: "flex gap-2 flex-wrap text-xs", children: [_jsx("button", { className: "btn btn-secondary text-xs py-1 px-2", onClick: (e) => {
                                e.stopPropagation();
                                onView?.();
                            }, children: "Voir plus" }), _jsxs("button", { className: `btn text-xs py-1 px-2 ${isFavorite ? 'text-accent' : 'btn-secondary'}`, onClick: (e) => {
                                e.stopPropagation();
                                onFavorite?.();
                            }, children: [isFavorite ? '⭐' : '☆', " Favori"] })] })] })] }));
//# sourceMappingURL=Card.js.map