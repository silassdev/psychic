import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const role = (session.user as any).role as string;

  const routes: Record<string, string> = {
    admin: "/dashboard/admin",
    hr: "/dashboard/hr",
    manager: "/dashboard/manager",
    employee: "/dashboard/employee",
  };

  redirect(routes[role] ?? "/dashboard/employee");
}
