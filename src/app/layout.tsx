import { cn } from './lib/utils';
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata={
    title:'Insight-Xplorer',
    description:'Unleash the power of discovery — Insight-Xplorer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='light'>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
            <Navbar/>
          {children}
        </body>
    </html>
  )
}