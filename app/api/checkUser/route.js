import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

import User from "@/models/users";

export async function POST(req) {
  try {
    await connectMongoDB()
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");

    console.log("User: ",user);

    return NextResponse.json({ user });
  } catch(error) {
    console.log(error)
  }
}


// export async function GET() {
//   return Response.json({
//     message: `GET method called`,
//   });
// }


// export async function POST() {
//   return Response.json({
//     message: `POST method called`,
//   });
// }


// export async function PUT() {
//   return Response.json({
//     message: `PUT method called`,
//   });
// }


// export async function DELETE() {
//   return Response.json({
//     message: `DELETE method called`,
//   });
// }