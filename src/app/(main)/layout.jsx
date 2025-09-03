'use client'

import Navbar from '../components/navbar/page'
import Footer from '../components/footer/page'
import '../globals.css'
import { AuthProvider } from '../context/authContext'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client instance outside the component
const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="font-sans bg-zinc-100 min-h-screen flex flex-col">
          <Navbar />
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </AuthProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
};