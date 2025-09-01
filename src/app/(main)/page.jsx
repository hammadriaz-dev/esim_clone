"use client"
import Navbar from '../components/navbar/page.jsx'
import AuthCard from '../components/authcard/page'
import Footer from '../components/footer/page'

export default function Home() {
  return (
    <div className="text-zinc-700">
      <Navbar/>
      <AuthCard/>
      <Footer/>
    </div>
  );
}
