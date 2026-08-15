import React from 'react';
interface SearchBoxProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    suggestions?: string[];
    onSuggestionClick?: (suggestion: string) => void;
    isLoading?: boolean;
}
export declare const SearchBox: React.FC<SearchBoxProps>;
export {};
//# sourceMappingURL=SearchBox.d.ts.map