import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Database Visual Diff — Schema Change Analysis & Rollback Safety',
  description: 'Generate visual diffs of database schema changes with migration impact analysis and rollback safety scoring. Built for DBAs and backend engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ebb0317a-a94f-4fba-a030-5b1b9457210f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
