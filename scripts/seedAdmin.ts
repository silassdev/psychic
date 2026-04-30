import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

async function seed() {
  await connectDB();

  const exists = await User.findOne({ email: "admin@paypilot.com" });

  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashed = await bcrypt.hash("apela2024", 10);

  await User.create({
    name: "Admin",
    email: "admin@paypilot.com",
    password: hashed,
    role: "admin",
  });

  console.log("Admin created");
  process.exit();
}

seed();