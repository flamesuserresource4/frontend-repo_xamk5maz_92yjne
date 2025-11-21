import { CircuitBoard, Workflow, ShieldCheck, Rocket } from 'lucide-react'

const features = [
  {
    icon: CircuitBoard,
    title: 'Agent Orchestration',
    desc: 'Design and deploy resilient multi-agent systems with role, tool, and memory design tuned to your goals.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Wire up AI to your CRMs, data warehouses, docs, APIs and queues. Human-in-the-loop where it matters.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Guardrails',
    desc: 'Policy, evals, red-teaming and circuit breakers. We ship safe-by-default systems.'
  },
  {
    icon: Rocket,
    title: 'Performance & Observability',
    desc: 'Latency budgets, caching, tracing and analytics to keep your AI humming under load.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center mb-12">
          <p className="text-emerald-300/80 text-sm">Capabilities</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Everything you need to integrate AI</h2>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
