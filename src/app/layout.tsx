import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ReactNode } from 'react'

import './globals.css'

export const metadata = {
   title: 'Car Hub',
   description: 'Conheça os melhores carros do mundo.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-BR">
         <body className="relative">
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   )
}
