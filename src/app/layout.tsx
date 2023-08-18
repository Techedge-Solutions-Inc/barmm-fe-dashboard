import './styles/globals.scss'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google';
import ThemeRegistry from './themeRegistry';




export const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  // display: 'swap',
  fallback: ['Manrope'],
});


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BARMM',
  description: 'BARMM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} light`} style={{ colorScheme: "light" }}>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
