import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { name, email } = await req.json()
    const { db } = await connectToDatabase()

    const result = await db.collection("users").updateOne(
      { email: session.user?.email },
      { $set: { name, email } }
    )

    if (result.modifiedCount === 1) {
      return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 })
    } else {
      return NextResponse.json({ message: "Failed to update profile" }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ message: "An error occurred while updating the profile" }, { status: 500 })
  }
}
