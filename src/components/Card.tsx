import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  highlight?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, highlight = false, className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`card ${hover ? 'card-hover' : ''} ${highlight ? 'border-l-4 border-accent bg-accent-light/10' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)

Card.displayName = 'Card'

// Card sections
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`pb-4 border-b border-neutral-border ${className}`} {...props}>
    {children}
  </div>
)

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`py-4 ${className}`} {...props}>
    {children}
  </div>
)

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`pt-4 border-t border-neutral-border flex gap-3 ${className}`} {...props}>
    {children}
  </div>
)

// Citation-specific card
interface CitationCardProps {
  idea: string
  original: string
  translation: string
  reference: string
  highlighted?: boolean
  onView?: () => void
  onFavorite?: () => void
  isFavorite?: boolean
}

export const CitationCard: React.FC<CitationCardProps> = ({
  idea,
  original,
  translation,
  reference,
  highlighted = false,
  onView,
  onFavorite,
  isFavorite = false,
}) => (
  <Card
    highlight={highlighted}
    className="cursor-pointer hover:border-accent transition-colors"
    onClick={onView}
  >
    <div className="citation-idea mb-4">{idea}</div>

    <div className="space-y-4">
      <div>
        <div className="citation-label">Citation originale</div>
        <div className="citation-text text-sm">{original}</div>
      </div>

      <div>
        <div className="citation-label">Traduction française</div>
        <div className="citation-text text-sm">{translation}</div>
      </div>

      <div className="citation-ref">{reference}</div>

      <div className="flex gap-2 flex-wrap text-xs">
        <button
          className="btn btn-secondary text-xs py-1 px-2"
          onClick={(e) => {
            e.stopPropagation()
            onView?.()
          }}
        >
          Voir plus
        </button>
        <button
          className={`btn text-xs py-1 px-2 ${isFavorite ? 'text-accent' : 'btn-secondary'}`}
          onClick={(e) => {
            e.stopPropagation()
            onFavorite?.()
          }}
        >
          {isFavorite ? '⭐' : '☆'} Favori
        </button>
      </div>
    </div>
  </Card>
)
