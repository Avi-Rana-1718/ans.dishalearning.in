import './globals.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Epilogue } from 'next/font/google'
const epilogue = Epilogue({ subsets: ['latin'] })

export const metadata = {
  title: 'Answers - Disha Learning',
  description: 'Approved answers to all questions!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script rel="preconnect" src="https://kit.fontawesome.com/c57dc26725.js" crossorigin="anonymous"></script>
      </head>
      <body className={epilogue.className}>
        <NavBar />
      <main className="bg-white min-h-screen m-3 md:!mx-[25vw] shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] p-4 rounded-[5px]">
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}