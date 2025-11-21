import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Industries from './components/Industries'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -inset-[25%] opacity-60 blur-3xl" style={{
          background: 'radial-gradient(60% 60% at 70% 20%, rgba(168,85,247,0.18) 0%, rgba(99,102,241,0.18) 40%, rgba(251,146,60,0.15) 70%, transparent 80%)'
        }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
