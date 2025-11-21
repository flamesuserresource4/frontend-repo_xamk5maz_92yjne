const industries = [
  'SaaS & Developer Tools',
  'E-commerce & Marketplaces',
  'Fintech & Banking',
  'Healthcare & Biotech',
  'Media & Entertainment',
  'Industrial & Robotics',
]

export default function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center mb-12">
          <p className="text-amber-300/80 text-sm">Who we help</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Industry-ready from day one</h2>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(item => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
