import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Message Study',
  description: 'Premium Academic Interface for studying William Marrion Branham teachings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-bg-primary">
        {children}
      </body>
    </html>
  )
}
