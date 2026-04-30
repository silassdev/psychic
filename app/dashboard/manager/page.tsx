import { auth } from "@/lib/auth";
import { signOut } from "@/lib/auth";
import { Users, CalendarCheck, Clock, LogOut } from "lucide-react";

export const metadata = { title: "Manager Dashboard" };

const cards = [
  { label: "My Team", value: "18", sub: "2 on leave today", color: "#3b82f6", icon: <Users className="h-5 w-5" /> },
  { label: "Leave Requests", value: "3", sub: "Pending your approval", color: "#f59e0b", icon: <CalendarCheck className="h-5 w-5" /> },
  { label: "Next Payroll", value: "May 30", sub: "In 30 days", color: "#10b981", icon: <Clock className="h-5 w-5" /> },
];

export default async function ManagerDashboard() {
  const session = await auth();
  const user = session?.user as any;

  return (
    <div className="min-h-screen bg-[#060A12] text-white">
      <header className="border-b border-white/10 bg-[#060A12]/80 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40">PayPilot · Manager</p>
            <p className="text-base font-bold">Hi, {user?.name?.split(" ")[0]} 👋</p>
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
        <p className="text-xs uppercase tracking-widest text-white/40">Your Overview</p>
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
            {["Approve / Reject Leaves", "View Team Schedule", "Submit Overtime Report"].map((l) => (
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
