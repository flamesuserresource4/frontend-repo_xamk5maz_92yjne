import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-[30%] opacity-60 blur-3xl" style={{
          background: 'radial-gradient(60% 60% at 70% 20%, rgba(168,85,247,0.25) 0%, rgba(99,102,241,0.25) 40%, rgba(251,146,60,0.2) 70%, transparent 80%)'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now integrating multi-agent AI systems
          </div>
          <h1 className="mt-6 text-5xl/tight md:text-6xl/tight font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/70">
            PaladiuAI
            <br />
            Enterprise AI Integrations
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl">
            We design, orchestrate and integrate advanced AI systems into your stack — from RAG and agents to workflow automation, analytics, and safety.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-white/90 transition">Start a project</a>
            <a href="#features" className="px-5 py-3 rounded-md bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">Explore features</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/50">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
