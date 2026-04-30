import { auth } from "@/lib/auth";
import { signOut } from "@/lib/auth";
import { CalendarDays, Wallet, FileCheck, LogOut } from "lucide-react";

export const metadata = { title: "My Dashboard" };

const cards = [
  { label: "Next Payday", value: "May 30", sub: "30 days away", color: "#10b981", icon: <Wallet className="h-5 w-5" /> },
  { label: "Leave Balance", value: "12 days", sub: "Annual leave remaining", color: "#3b82f6", icon: <CalendarDays className="h-5 w-5" /> },
  { label: "Last Payslip", value: "$3,200", sub: "April 2026", color: "#8b5cf6", icon: <FileCheck className="h-5 w-5" /> },
];

export default async function EmployeeDashboard() {
  const session = await auth();
  const user = session?.user as any;

  return (
    <div className="min-h-screen bg-[#060A12] text-white">
      <header className="border-b border-white/10 bg-[#060A12]/80 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40">PayPilot</p>
            <p className="text-base font-bold">Hey, {user?.name?.split(" ")[0]} 👋</p>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button type="submit" className="rounded-full border border-white/10 p-2 text-white/50 hover:text-white">
              <LogOut className="h-4 w-4" />
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-lg space-y-4 px-4 py-6">
        <p className="text-xs uppercase tracking-widest text-white/40">Your Snapshot</p>
        {cards.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="rounded-xl p-2.5" style={{ background: `${c.color}22`, color: c.color }}>
              {c.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/50">{c.label}</p>
              <p className="text-2xl font-black">{c.value}</p>
              <p className="text-xs text-white/40">{c.sub}</p>
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Actions</p>
          <div className="space-y-2">
            {["Request Leave", "Download Payslip", "View Attendance Log"].map((l) => (
              <button
                key={l}
                className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                {l}
                <span className="text-white/30">→</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
