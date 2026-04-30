import Link from "next/link";

const stats = [
  { label: "Attendance accuracy", value: "99.9%" },
  { label: "Payroll cycles saved", value: "8 hrs" },
  { label: "Admin actions", value: "1 click" },
  { label: "Teams supported", value: "∞" },
];

const features = [
  {
    title: "Smart attendance",
    desc: "Clock-in, clock-out, late tracking, overtime, and exception handling in one clean flow.",
  },
  {
    title: "Payroll engine",
    desc: "Preview, approve, and generate payroll with deductions, bonuses, and net pay calculations.",
  },
  {
    title: "Role-based access",
    desc: "Admin, HR, manager, and employee views stay separated with strict permissions.",
  },
  {
    title: "Audit-ready records",
    desc: "Every sensitive action can be tracked, reviewed, and traced later with confidence.",
  },
  {
    title: "Responsive dashboards",
    desc: "Built for desktop and mobile so teams can manage work from anywhere.",
  },
  {
    title: "Vercel-friendly MVP",
    desc: "Designed to stay lean, fast, and reliable on free hosting without unnecessary complexity.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create employees",
    desc: "Set staff profiles, departments, salary rules, and access roles.",
  },
  {
    step: "02",
    title: "Track time",
    desc: "Capture attendance with clock-in and clock-out records.",
  },
  {
    step: "03",
    title: "Run payroll",
    desc: "Preview totals, approve changes, and issue payslips instantly.",
  },
];

const highlights = [
  "Clean Tailwind UI",
  "MongoDB-backed data",
  "Next.js App Router",
  "Fast admin workflow",
  "MVP-ready structure",
  "Built for expansion",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.24),_transparent_26%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-28 lg:pt-12">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
                <span className="text-lg font-black tracking-tight">P</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white/60">Payroll + Attendance</p>
                <h1 className="text-base font-semibold tracking-wide text-white">PayPilot</h1>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#workflow" className="transition hover:text-white">Workflow</a>
              <a href="#metrics" className="transition hover:text-white">Impact</a>
            </nav>

            <Link
              href="#get-started"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
            >
              Launch MVP
            </Link>
          </header>

          <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Built for modern payroll teams
              </div>

              <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Run attendance and payroll without the usual mess.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                A sharp, modern HR operations app for managing staff records, attendance, leave, and payroll from a single dashboard. Fast on Vercel. Clean in MongoDB. Built to scale later.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#get-started"
                  className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
                >
                  Start building
                </Link>
                <Link
                  href="#features"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore features
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <p className="text-2xl font-black tracking-tight text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-sm text-white/55">Today</p>
                    <h3 className="text-lg font-semibold text-white">Operations overview</h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Live status
                  </div>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#0c1220] p-5 ring-1 ring-white/8">
                    <p className="text-sm text-white/50">Present staff</p>
                    <p className="mt-2 text-4xl font-black tracking-tight">128</p>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                    </div>
                    <p className="mt-3 text-sm text-white/55">84% check-in completion</p>
                  </div>

                  <div className="rounded-3xl bg-[#0c1220] p-5 ring-1 ring-white/8">
                    <p className="text-sm text-white/50">Payroll status</p>
                    <p className="mt-2 text-4xl font-black tracking-tight">Ready</p>
                    <p className="mt-4 text-sm text-white/55">Preview approved, payslips queued, deductions synced.</p>
                  </div>

                  <div className="rounded-3xl bg-[#0c1220] p-5 ring-1 ring-white/8 sm:col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/50">This month</p>
                        <p className="mt-1 text-2xl font-bold">Attendance accuracy improved</p>
                      </div>
                      <p className="text-2xl font-black text-emerald-300">+12%</p>
                    </div>
                    <div className="mt-5 grid grid-cols-7 gap-2">
                      {[18, 34, 22, 48, 39, 60, 44].map((height, index) => (
                        <div key={index} className="flex h-28 items-end rounded-2xl bg-white/5 p-2">
                          <div
                            className="w-full rounded-xl bg-gradient-to-t from-cyan-400 to-blue-500"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Features</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Everything the MVP needs, nothing bloated.</h3>
          </div>
          <div className="hidden max-w-md text-right text-sm text-white/55 md:block">
            Built around the actual workflow of payroll teams, not a fantasy enterprise dashboard.
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition group-hover:bg-blue-500/20">
                <span className="h-3 w-3 rounded-full bg-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white">{feature.title}</h4>
              <p className="mt-3 leading-7 text-white/65">{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Workflow</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-white">Simple path from staff setup to payroll output.</h3>
            <p className="mt-5 leading-7 text-white/65">
              This structure keeps the app lean enough for free hosting while leaving space for stronger enterprise features later.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-lg font-black text-white">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="mt-2 leading-7 text-white/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metrics" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Speed</p>
            <p className="mt-3 text-4xl font-black tracking-tight">Fast enough for daily use</p>
            <p className="mt-4 leading-7 text-white/70">Keep data access tight, calculations lightweight, and requests short.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Trust</p>
            <p className="mt-3 text-4xl font-black tracking-tight">Secure by default</p>
            <p className="mt-4 leading-7 text-white/65">Protected routes, hashed passwords, and role checks are non-negotiable.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Scale</p>
            <p className="mt-3 text-4xl font-black tracking-tight">Ready for expansion</p>
            <p className="mt-4 leading-7 text-white/65">The structure can grow into multi-branch, tax logic, approvals, and reporting later.
            </p>
          </div>
        </div>
      </section>

      <section id="get-started" className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/6 p-8 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.16),_transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Get started</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Ship the MVP first. Add the heavy stuff later.
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                This page is set up as a polished starting point for the payroll app. Replace the marketing shell with authenticated dashboard screens as development continues.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/login"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Go to login
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Open dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
