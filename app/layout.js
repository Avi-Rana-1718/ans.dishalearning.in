import './globals.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Epilogue } from 'next/font/google'
const epilogue = Epilogue({ subsets: ['latin'] })


import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Answers - Disha Learning',
  description: 'Approved answers to all questions!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script rel="preconnect" src="https://kit.fontawesome.com/c57dc26725.js" crossorigin="anonymous"></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2591722971865211"
     crossorigin="anonymous"></script>
     <meta name="google-site-verification" content="40pVzMQlAbhoNa_ZMyvxt1kFN8glFdZVDkJljaGwDI0" />
      </head>
      <body className={epilogue.className}>
        <NavBar />
        <div>
      <main className="bg-white md:!mx-[25vw] dark:bg-[#2C2C2C] dark:text-[#f3f3f3] min-h-screen  m-3 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] p-4 rounded-[5px]">
        {children}
        </main>
        </div>
        <Footer />
        </body>
    </html>
  )
}