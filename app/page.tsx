export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visual Diff for{" "}
          <span className="text-[#58a6ff]">Database Schema</span>{" "}Changes
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload before/after SQL schemas or connect your Git repo. Get instant visual diffs,
          migration impact analysis, and rollback safety scores — before you ship.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Get Started — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Mock diff preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden text-left">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#0d1117]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-3 text-xs text-[#8b949e] font-mono">schema_diff — users_table.sql</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-1">
            <div className="text-[#8b949e]">  id BIGINT PRIMARY KEY,</div>
            <div className="text-[#8b949e]">  email VARCHAR(255) NOT NULL,</div>
            <div className="bg-[#3d1f1f] text-[#f85149] px-2 rounded">- username VARCHAR(100),</div>
            <div className="bg-[#1a3a2a] text-[#3fb950] px-2 rounded">+ username VARCHAR(255) NOT NULL,</div>
            <div className="bg-[#1a3a2a] text-[#3fb950] px-2 rounded">+ INDEX idx_username (username),</div>
            <div className="text-[#8b949e]">  created_at TIMESTAMP DEFAULT NOW()</div>
          </div>
          <div className="flex gap-4 px-5 py-3 border-t border-[#30363d] bg-[#0d1117]">
            <span className="text-xs font-semibold text-[#3fb950]">+2 additions</span>
            <span className="text-xs font-semibold text-[#f85149]">-1 deletion</span>
            <span className="ml-auto text-xs font-semibold text-[#e3b341]">Rollback Safety: 87/100</span>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: "⚡", title: "Instant Visual Diffs", desc: "Side-by-side and inline diff views for any SQL schema change." },
          { icon: "🔍", title: "Impact Analysis", desc: "Understand which tables, indexes, and constraints are affected." },
          { icon: "🛡️", title: "Rollback Safety Score", desc: "AI-powered scoring to assess how safely a migration can be reversed." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per workspace. Unlimited schemas.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited schema diffs",
              "Git repo integration",
              "Migration impact reports",
              "Rollback safety scoring",
              "Team collaboration (5 seats)",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which databases are supported?",
              a: "PostgreSQL, MySQL, SQLite, and Microsoft SQL Server. Support for MongoDB schema validation is coming soon."
            },
            {
              q: "How does the rollback safety score work?",
              a: "We analyze the migration for destructive operations (DROP, TRUNCATE, NOT NULL additions on populated columns) and score reversibility from 0–100 based on risk factors."
            },
            {
              q: "Can I use this with my existing migration tool?",
              a: "Yes. We support raw SQL files, Flyway, Liquibase, Alembic, and Rails migrations. Connect your Git repo and we auto-detect changes on every push."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Database Visual Diff. All rights reserved.
      </footer>
    </main>
  )
}
