import mongoose, { Schema, model, models } from "mongoose";

export type UserRole = "admin" | "hr" | "manager" | "employee";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  employeeId?: string;
  status: "active" | "inactive";
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "hr", "manager", "employee"],
      default: "employee",
    },
    employeeId: { type: String },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const User = models.User || model<IUser>("User", UserSchema);