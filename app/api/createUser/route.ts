import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error during user creation:", error);
    return NextResponse.json(
      { error: "User creation failed" },
      { status: 400 }
    );
  }
}
