"use client";

import { motion } from "framer-motion";
import { UserPlus, PlayCircle, CalendarCheck, Settings } from "lucide-react";

const actions = [
  { label: "Add Employee", icon: <UserPlus className="h-5 w-5" />, color: "#3b82f6", href: "#" },
  { label: "Run Payroll", icon: <PlayCircle className="h-5 w-5" />, color: "#10b981", href: "#" },
  { label: "Approve Leaves", icon: <CalendarCheck className="h-5 w-5" />, color: "#f59e0b", href: "#" },
  { label: "Settings", icon: <Settings className="h-5 w-5" />, color: "#8b5cf6", href: "#" },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/50">
        Quick Actions
      </p>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((a, i) => (
          <motion.a
            key={i}
            href={a.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-4 text-center transition hover:bg-white/5"
            style={{ borderColor: `${a.color}22` }}
          >
            <span
              className="rounded-lg p-2"
              style={{ background: `${a.color}22`, color: a.color }}
            >
              {a.icon}
            </span>
            <span className="text-xs font-semibold text-white/80">{a.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
