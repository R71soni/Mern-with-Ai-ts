import { connectDB } from "@/backend/config/mongoose.config";
import UserModel from "@/backend/model/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const user = await request.json();

    const savedUser = await UserModel.create(user);

    return NextResponse.json(
      {
        message: "User registered successfully!",
        status: true,
        data: savedUser,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Unable to register user!",
        status: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}