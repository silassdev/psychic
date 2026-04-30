"use client";

import { motion } from "framer-motion";

const events = [
  { time: "09:14 AM", user: "HR Team", action: "Processed payroll for Finance dept.", type: "payroll" },
  { time: "08:55 AM", user: "Sarah K.", action: "Requested 3 days annual leave.", type: "leave" },
  { time: "08:30 AM", user: "Admin", action: "Added new employee: James Obi.", type: "user" },
  { time: "Yesterday", user: "Mark T.", action: "Submitted overtime claim — ₦12,000.", type: "payroll" },
  { time: "Yesterday", user: "HR Team", action: "Approved leave for Ada Nwosu.", type: "leave" },
  { time: "Mon", user: "System", action: "Monthly payroll run scheduled.", type: "system" },
];

const typeStyles: Record<string, string> = {
  payroll: "bg-blue-500/20 text-blue-400",
  leave: "bg-amber-500/20 text-amber-400",
  user: "bg-emerald-500/20 text-emerald-400",
  system: "bg-purple-500/20 text-purple-400",
};

const typeDot: Record<string, string> = {
  payroll: "bg-blue-400",
  leave: "bg-amber-400",
  user: "bg-emerald-400",
  system: "bg-purple-400",
};

export function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/50">
        Recent Activity
      </p>
      <div className="space-y-3">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3"
          >
            <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${typeDot[e.type]}`} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-white/80">
                <span className="font-semibold text-white">{e.user}</span> — {e.action}
              </p>
              <p className="mt-0.5 text-xs text-white/35">{e.time}</p>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${typeStyles[e.type]}`}>
              {e.type}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
