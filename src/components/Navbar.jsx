import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-amber-400 shadow-lg shadow-purple-500/30">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="font-semibold tracking-tight">PaladiuAI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Get Started</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block text-slate-200" onClick={() => setOpen(false)}>
                {item.name}
              </a>
            ))}
            <a href="#contact" className="block px-4 py-2 rounded-md bg-white/10 text-white text-center" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
