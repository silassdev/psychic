import Link from "next/link";
import { HiOutlineMap, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060A12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/10">
                <span className="text-sm font-black tracking-tight">P</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Payroll + Attendance
                </p>
                <h2 className="text-base font-semibold leading-none text-white">
                  PayPilot
                </h2>
              </div>
            </div>

            <p className="mt-5 max-w-md leading-7 text-white/60">
              A clean payroll and attendance platform for teams that want speed,
              clarity, and better control.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <HiOutlineMap className="text-base" />
                support@paypilot.com
              </p>
              <p className="flex items-center gap-2">
                <HiOutlinePhone className="text-base" />
                +234 800 000 0000
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineMapPin className="text-base" />
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Product
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li><Link href="/login" className="transition hover:text-white">Login</Link></li>
              <li><Link href="/login?mode=signup" className="transition hover:text-white">Create account</Link></li>
              <li><Link href="#features" className="transition hover:text-white">Features</Link></li>
              <li><Link href="#workflow" className="transition hover:text-white">Workflow</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Resources
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/dashboard" className="transition hover:text-white">Dashboard</Link></li>
              <li><Link href="#metrics" className="transition hover:text-white">Metrics</Link></li>
              <li><Link href="#get-started" className="transition hover:text-white">Get started</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Connect
            </h3>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <FiGithub />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <FiLinkedin />
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-white">Need help?</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Reach out for setup, support, or product questions.
              </p>
              <Link
                href="mailto:support@paypilot.com"
                className="mt-4 inline-flex text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PayPilot. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-white">Terms of Service</Link>
            <Link href="#" className="transition hover:text-white">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}