import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

import User from "@/models/users";
import bcrypt from "bcryptjs/dist/bcrypt";

export async function POST(req) {
  try {
    const { id, name, last, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({id, name, last, email, password: hashedPassword})

    return NextResponse.json({message: "สมัครสมาชิกสำเร็จ"}, {status: 201});
    
  } catch(error) {
    return NextResponse.json({message: "เกิดข้อผิดพลาดระหว่างสมัครสมาชิก"}, {status: 500});
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