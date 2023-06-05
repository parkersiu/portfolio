import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parker Siu Portfolio',
  description: 'A developer portfolio for Parker Siu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
      <Script src='https://www.google.com/recaptcha/api.js' async defer />
    </html>
  );
}
