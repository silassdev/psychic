"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
  color: string;
}

export function StatsCard({ title, value, change, trend, icon, color }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ background: `radial-gradient(circle at top right, ${color}, transparent 70%)` }}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/50">{title}</p>
          <p className="mt-2 text-3xl font-black tracking-tight text-white">{value}</p>
          <div className="mt-2 flex items-center gap-1.5">
            {trend === "up" && <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />}
            {trend === "down" && <TrendingDown className="h-3.5 w-3.5 text-rose-400" />}
            <span
              className={`text-xs font-medium ${
                trend === "up" ? "text-emerald-400" : trend === "down" ? "text-rose-400" : "text-white/50"
              }`}
            >
              {change}
            </span>
          </div>
        </div>
        <div
          className="rounded-xl p-2.5"
          style={{ background: `${color}22`, border: `1px solid ${color}33` }}
        >
          <span style={{ color }}>{icon}</span>
        </div>
      </div>
    </motion.div>
  );
}
