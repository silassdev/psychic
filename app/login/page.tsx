"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  const isLogin = mode === "login";

  useEffect(() => {
    const nextMode = searchParams.get("mode") === "signup" ? "signup" : "login";
    setMode(nextMode);
  }, [searchParams]);

  const switchMode = (nextMode: "login" | "signup") => {
    setMode(nextMode);
    router.replace(`/login?mode=${nextMode}`);
  };

  const handleGoogle = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <main className="min-h-screen bg-[#060A12] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="hidden flex-col justify-between border-r border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_50%)] p-10 lg:flex">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                PayPilot
              </p>
              <h1 className="mt-4 max-w-md text-4xl font-black tracking-tight">
                A polished access flow for payroll teams.
              </h1>
              <p className="mt-4 max-w-md leading-7 text-white/65">
                Clean access, role-based entry, and a professional first impression.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-white/60">
              <p>• Google sign-in for faster access</p>
              <p>• Credentials login for internal users</p>
              <p>• One page for login and account creation</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                  {isLogin ? "Welcome back" : "Create your account"}
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  {isLogin ? "Sign in" : "Sign up"}
                </h2>
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isLogin ? "bg-white text-slate-950" : "text-white/70"
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => switchMode("signup")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    !isLogin ? "bg-white text-slate-950" : "text-white/70"
                  }`}
                >
                  Sign up
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-xs font-black text-slate-950">
                G
              </span>
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                or
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <form className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-blue-400/50"
                />
              )}

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-blue-400/50"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-blue-400/50"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                {isLogin ? "Sign in" : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-white/55">
              {isLogin ? "Need an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => switchMode(isLogin ? "signup" : "login")}
                className="font-semibold text-white underline decoration-white/30 underline-offset-4"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Back to home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}