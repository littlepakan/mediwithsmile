import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("เชื่อมข้อมูล MongoDB สำเร็จ!")
  } catch(error) {
    console.log("เชื่อมข้อมูล MongoDB ล้มเหลว");
  }
}