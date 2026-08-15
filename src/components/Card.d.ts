import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    highlight?: boolean;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export declare const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
interface CitationCardProps {
    idea: string;
    original: string;
    translation: string;
    reference: string;
    highlighted?: boolean;
    onView?: () => void;
    onFavorite?: () => void;
    isFavorite?: boolean;
}
export declare const CitationCard: React.FC<CitationCardProps>;
export {};
//# sourceMappingURL=Card.d.ts.map