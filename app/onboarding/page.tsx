"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Users, CalendarCheck, FileText } from "lucide-react";

export default function OnboardingPage() {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const roles = [
    {
      id: "hr",
      title: "HR Professional",
      desc: "Manage employees, run payroll, and approve leaves.",
      icon: <Users className="h-6 w-6" />,
      color: "#3b82f6", // blue
    },
    {
      id: "manager",
      title: "Team Manager",
      desc: "Oversee your team, approve schedules, and track attendance.",
      icon: <CalendarCheck className="h-6 w-6" />,
      color: "#f59e0b", // amber
    },
    {
      id: "employee",
      title: "Employee",
      desc: "View your payslips, request time off, and track payday.",
      icon: <FileText className="h-6 w-6" />,
      color: "#10b981", // emerald
    },
  ];

  const handleContinue = async () => {
    if (!selectedRole) return;
    setLoading(true);

    try {
      const res = await fetch("/api/onboarding", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selectedRole }),
      });

      if (!res.ok) {
        throw new Error("Failed to update role");
      }

      // Update the NextAuth session so the layout/API redirects correctly
      await update({ role: selectedRole });
      
      toast.success("Profile setup complete!");
      router.push("/dashboard");
      router.refresh();
    } catch (e) {
      toast.error("An error occurred during setup.");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#060A12] px-6 py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12"
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Welcome to PayPilot
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Choose your role
          </h1>
          <p className="mt-3 text-sm text-white/55">
            Select how you'll be using PayPilot so we can tailor your dashboard to your needs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {roles.map((role) => {
            const isSelected = selectedRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`relative flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all ${
                  isSelected
                    ? "bg-white/10 shadow-lg shadow-black/20"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
                style={{
                  borderColor: isSelected ? role.color : "rgba(255,255,255,0.1)",
                }}
              >
                {isSelected && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{
                      background: `radial-gradient(circle at top, ${role.color}, transparent 60%)`,
                    }}
                  />
                )}
                <div
                  className="rounded-xl p-3"
                  style={{
                    background: `${role.color}22`,
                    color: role.color,
                  }}
                >
                  {role.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{role.title}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                    {role.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleContinue}
            disabled={!selectedRole || loading}
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-950" />
                Setting up...
              </>
            ) : (
              "Continue to Dashboard"
            )}
          </button>
        </div>
      </motion.div>
    </main>
  );
}
