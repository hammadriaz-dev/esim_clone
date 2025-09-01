'use client'

import Navbar from '../components/navbar/page'
import Footer from '../components/footer/page'
import '../globals.css' // Assuming you have a global CSS file

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="font-sans bg-zinc-100 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};