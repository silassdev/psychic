"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineUserCircle } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#060A12] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* LEFT */}
          <div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-black leading-tight sm:text-6xl"
            >
              Payroll and attendance, simplified.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-white/70"
            >
              Manage employees, track attendance, and run payroll from a clean,
              focused dashboard built for real workflows.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex gap-4"
            >
              <Link href="/login"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                    aria-label="Account"
                  >
                    <HiOutlineUserCircle className="text-2xl" />
                </Link>
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-white/60">Today</p>
            <h3 className="mt-2 text-xl font-bold">Operations</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">Present staff</p>
                <p className="text-3xl font-bold">128</p>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">Payroll</p>
                <p className="text-3xl font-bold">Ready</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            "Attendance tracking",
            "Payroll processing",
            "Role-based access",
          ].map((title) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/60">
                Built for clarity and speed.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
        >
          <h2 className="text-3xl font-black">
            Ready to manage your payroll properly?
          </h2>

          <Link
            href="/login?mode=signup"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Create account
          </Link>
        </motion.div>
      </section>
    </main>
  );
}