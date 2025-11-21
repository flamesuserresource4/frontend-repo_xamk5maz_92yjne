import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data?.detail || 'Submission failed')
      setStatus({ ok: true, msg: 'Thanks! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center mb-10">
          <p className="text-sky-300/80 text-sm">Get in touch</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Tell us about your project</h2>
        </header>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6">
          <input name="name" required placeholder="Your name" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input name="email" type="email" required placeholder="Email" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input name="company" placeholder="Company" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 md:col-span-2" />
          <input name="project_type" placeholder="Project type (e.g., RAG, agents, automation)" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 md:col-span-2" />
          <textarea name="message" rows="5" placeholder="What would success look like?" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-white/90 transition disabled:opacity-60">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <p className={status.ok ? 'text-emerald-400' : 'text-red-400'}>
                {status.msg}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
