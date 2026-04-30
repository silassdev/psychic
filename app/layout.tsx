import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/lib/auth";
import Footer from "@/app/footer";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PayPilot",
    template: "%s | PayPilot",
  },
  description:
    "Modern payroll and attendance software for managing employees, payroll, leave, and time tracking.",
  applicationName: "PayPilot",
  keywords: [
    "payroll",
    "attendance",
    "HR software",
    "employee management",
    "Next.js",
    "MongoDB",
  ],
  authors: [{ name: "Silas" }],
  creator: "Silas",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "PayPilot",
    description:
      "Modern payroll and attendance software for growing teams.",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPilot",
    description:
      "Modern payroll and attendance software for growing teams.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const isAuthed = !!session?.user;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Providers>
          <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
              <Link href="/" className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <span className="text-sm font-black tracking-tight">P</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Payroll + Attendance</p>
                  <h1 className="text-base font-semibold leading-none text-white">PayPilot</h1>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
                <a href="#features" className="transition hover:text-white">Features</a>
                <a href="#workflow" className="transition hover:text-white">Workflow</a>
                <a href="#metrics" className="transition hover:text-white">Impact</a>
                <a href="#get-started" className="transition hover:text-white">Get started</a>
              </nav>

                <div className="flex items-center gap-3">
                  {isAuthed ? (
                    <Link
                      href="/dashboard"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className="group grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                      aria-label="Account"
                    >
                      <HiOutlineUserCircle className="text-2xl transition group-hover:scale-110" />
                    </Link>
                  )}
                </div>
            </div>
          </header>

          {children}

          <Footer />
          <Toaster position="top-center" toastOptions={{ style: { background: "#1e293b", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" } }} />
        </Providers>
      </body>
    </html>
  );
}