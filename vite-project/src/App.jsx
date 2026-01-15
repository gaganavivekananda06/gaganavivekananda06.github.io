import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./index.css"

export default function App() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("All")
  const [active, setActive] = useState(null)
  const projects = [
    {
      id: "sharecart",
      title: "ShareCart",
      sub: "Collaborative shopping app",
      tech: ["React", "Firebase", "TypeScript"],
      summary:
        "Real-time shared lists, voting and cross-platform sync. Reduced list friction in pilots.",
      img: "/assets/sharecart.jpg",
      accent: "from-[#ff8c7e] to-[#ff6b6b]"
    },
    {
      id: "clinicscreen",
      title: "ClinicScreen",
      sub: "Screening reminders dashboard",
      tech: ["Python", "Pandas", "Flask"],
      summary:
        "Clinician dashboard to prioritize patients for preventive screening outreach.",
      img: "/assets/clinicscreen.jpg",
      accent: "from-[#7fd1ff] to-[#6b9eff]"
    },
    {
      id: "coursematch",
      title: "CourseMatch",
      sub: "Student-career matching tool",
      tech: ["Node.js", "MongoDB"],
      summary:
        "Recommendation engine matching students to projects and internships by skills.",
      img: "/assets/coursematch.jpg",
      accent: "from-[#7effb2] to-[#44d3a6]"
    }
  ]

  const techs = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech))).sort()]

  const filtered = projects.filter((p) => {
    if (filter !== "All" && !p.tech.includes(filter)) return false
    if (
      query &&
      !(`${p.title} ${p.sub} ${p.tech.join(" ")}`.toLowerCase().includes(query.toLowerCase()))
    )
      return false
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-inter">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl avatar-shadow overflow-hidden">
              {/* replace with your image or use gradient */}
              <div className="w-full h-full bg-gradient-to-br from-[#ff8c7e] to-[#ff6b6b]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Gagana Vivek</h1>
              <p className="mt-2 text-gray-300 max-w-xl">
                Software &amp; Data Engineer — product-minded, delivery-focused. I build
                production-ready apps and data tooling that solve real problems.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8c7e] rounded-lg font-semibold shadow-lg"
                >
                  View projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-white/10 rounded-lg text-sm"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-64">
            <div className="bg-black/40 border border-white/6 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Projects shipped</div>
                  <div className="text-2xl font-bold">7+</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Experience</div>
                  <div className="text-2xl font-bold">4y</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-300">Product design + data pipelines + infra</div>
            </div>
          </div>
        </header>

        {/* PROJECTS */}
        <main className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl p-6 bg-black/40 border border-white/6">
              <h2 className="text-2xl font-semibold">Selected work</h2>
              <p className="mt-2 text-gray-300">Click a card to open a short case preview.</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {techs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filter === t ? "bg-white text-black" : "bg-white/6"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/6 text-sm"
                />
                <div className="text-sm text-gray-400">{filtered.length} projects</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  whileHover={{ y: -8 }}
                  onClick={() => setActive(p)}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-2xl"
                >
                  <div
                    className={`h-44 w-full bg-gradient-to-br ${p.accent} flex items-end p-4 text-white font-bold text-lg`}
                    style={{ backgroundBlendMode: "normal" }}
                  >
                    {p.title}
                  </div>
                  <div className="p-5 bg-gradient-to-b from-black/10 to-black/5 border border-white/5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{p.sub}</h3>
                        <p className="text-gray-300 mt-2 text-sm">{p.summary}</p>
                        <div className="mt-3 flex gap-2 flex-wrap">
                          {p.tech.map((t) => (
                            <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl p-4 bg-black/40 border border-white/6">
              <h4 className="font-semibold">Highlights</h4>
              <ul className="mt-3 text-sm text-gray-300 space-y-2">
                <li>Product-driven engineering</li>
                <li>End-to-end delivery: frontend → backend → infra</li>
                <li>Data pipelines & analytics</li>
              </ul>
            </div>

            <div className="rounded-2xl p-4 bg-black/40 border border-white/6">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-sm text-gray-300">
                Email: <a href="mailto:gagana@example.com" className="text-pink-300">gagana@example.com</a>
              </p>
              <div className="mt-3 flex gap-2">
                <a href="#" className="text-sm px-3 py-1 bg-white/5 rounded">GitHub</a>
                <a href="#" className="text-sm px-3 py-1 bg-white/5 rounded">LinkedIn</a>
              </div>
            </div>
          </aside>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gagana Vivek · Built for clarity and impact
        </footer>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
            <div onClick={() => setActive(null)} className="absolute inset-0 bg-black/70" />
            <motion.div initial={{ y: 10 }} animate={{ y: 0 }} exit={{ y: 6 }} className="relative z-10 w-full max-w-3xl mx-6 p-6 rounded-2xl bg-white text-black">
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 text-gray-600">Close</button>
              <h3 className="text-2xl font-bold">{active.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{active.summary}</p>
              <div className="mt-4 flex gap-2">
                {active.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>)}
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#" className="px-4 py-2 rounded bg-gradient-to-r from-[#ff6b6b] to-[#ff8c7e] text-white">Live</a>
                <a href="#" className="px-4 py-2 rounded border">Code</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}