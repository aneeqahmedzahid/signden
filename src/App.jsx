import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FounderMessage from './components/FounderMessage'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FounderMessage />
        <Services />
        <Gallery />
      </main>
      <Chatbot />
      <Footer />
    </div>
  )
}

export default App
