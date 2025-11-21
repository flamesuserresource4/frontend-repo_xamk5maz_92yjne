const steps = [
  {
    k: '01',
    title: 'Discovery',
    desc: 'Deep-dive into objectives, data, constraints and success criteria.'
  },
  {
    k: '02',
    title: 'Design',
    desc: 'System architecture, model/tool selection, evaluation plan, safety.'
  },
  {
    k: '03',
    title: 'Build',
    desc: 'Implement agents, pipelines, integrations, human-review touchpoints.'
  },
  {
    k: '04',
    title: 'Launch & Iterate',
    desc: 'Tight feedback loops, telemetry, A/B tests and continuous tuning.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center mb-12">
          <p className="text-fuchsia-300/80 text-sm">How we work</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">A pragmatic, outcome-first approach</h2>
        </header>
        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map(s => (
            <li key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs text-white/60">{s.k}</span>
              <h3 className="mt-2 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
