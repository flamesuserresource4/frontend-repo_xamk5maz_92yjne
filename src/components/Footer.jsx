export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-24">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} PaladiuAI. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="/test" className="hover:text-white">Diagnostics</a>
        </div>
      </div>
    </footer>
  )
}
