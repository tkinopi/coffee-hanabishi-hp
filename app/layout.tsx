import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '珈琲花びし | 福岡・薬院の珈琲専門店',
  description: '福岡市中央区薬院にある珈琲専門店「珈琲花びし」。丁寧にハンドドリップで淹れた一杯と、手作りのランチ・スイーツをお楽しみください。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
