import { auth } from "@/lib/auth";
import { Users, DollarSign, CalendarX, ClipboardList } from "lucide-react";
import { StatsCard } from "./components/StatsCard";
import { PayrollChart } from "./components/PayrollChart";
import { ActivityFeed } from "./components/ActivityFeed";
import { QuickActions } from "./components/QuickActions";
import { signOut } from "@/lib/auth";

export const metadata = { title: "Admin Dashboard" };

const stats = [
  {
    title: "Total Employees",
    value: "248",
    change: "+6 this month",
    trend: "up" as const,
    icon: <Users className="h-5 w-5" />,
    color: "#3b82f6",
  },
  {
    title: "Monthly Payroll",
    value: "$229k",
    change: "+7.5% vs last month",
    trend: "up" as const,
    icon: <DollarSign className="h-5 w-5" />,
    color: "#10b981",
  },
  {
    title: "Pending Leaves",
    value: "14",
    change: "3 urgent",
    trend: "down" as const,
    icon: <CalendarX className="h-5 w-5" />,
    color: "#f59e0b",
  },
  {
    title: "Open Tasks",
    value: "31",
    change: "5 overdue",
    trend: "neutral" as const,
    icon: <ClipboardList className="h-5 w-5" />,
    color: "#8b5cf6",
  },
];

export default async function AdminDashboard() {
  const session = await auth();
  const user = session?.user as any;

  return (
    <div className="min-h-screen bg-[#060A12] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060A12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <span className="text-sm font-black">P</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40">PayPilot</p>
              <p className="text-sm font-bold leading-tight">Admin Console</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">{user?.name}</p>
              <p className="text-xs text-white/40">{user?.email}</p>
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/20 text-sm font-bold text-blue-400 ring-1 ring-blue-500/30">
              {user?.name?.[0]?.toUpperCase() ?? "A"}
            </div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:bg-white/10"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
        {/* Welcome */}
        <div>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Good{" "}
            {new Date().getHours() < 12
              ? "morning"
              : new Date().getHours() < 17
              ? "afternoon"
              : "evening"}
            , {user?.name?.split(" ")[0]} 👋
          </h2>
          <p className="mt-1 text-sm text-white/50">
            Here's what's happening in your organization today.
          </p>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <StatsCard key={s.title} {...s} />
          ))}
        </div>

        {/* Chart + Quick actions */}
        <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
          <PayrollChart />
          <QuickActions />
        </div>

        {/* Activity feed */}
        <ActivityFeed />
      </main>
    </div>
  );
}
