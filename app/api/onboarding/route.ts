import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { auth } from "@/lib/auth";

export async function PATCH(req: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { role } = await req.json();

    const allowedRoles = ["hr", "manager", "employee"];
    if (!allowedRoles.includes(role)) {
      return NextResponse.json({ error: "Invalid role selected" }, { status: 400 });
    }

    await connectDB();

    const userId = (session.user as any).id;
    
    await User.findByIdAndUpdate(userId, { role });

    return NextResponse.json({ message: "Role updated successfully" });
  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json({ error: "Failed to update role" }, { status: 500 });
  }
}
