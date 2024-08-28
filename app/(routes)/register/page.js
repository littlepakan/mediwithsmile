"use client"
import React, { useState } from 'react';

import Navbar from "@/app/components/Navbar";
import styles from "@/app/styles/Register.module.css"
import Footer from "@/app/components/Footer";

import "@/app/styles/global.css"

export default function Reg() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setError("รหัสผ่านไม่ตรงกันนะ!");
      setSuccess("");
      return;
    }
    if (!id || !name || !last || !email || !password || !confirmPassword ) {
      setError("โปรดระบุข้อมูลให้ครบถ้วนนะ!");
      setSuccess("");
      return;
    }
    try {
      const resCheckUser = await fetch("http://localhost:3000/api/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      })

      const { user } = await resCheckUser.json();

      if (user) {
        setError("อีเมลถูกใช้งานไปแล้ว!");
        setSuccess("");
        return;
      }


      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id, name, last, email, password
        })
      })

      if (res.ok) {
        const form = e.target;
        setError("");
        setSuccess("สมัครสมาชิกเสร็จสิ้นแล้ว!");
        form.reset();
        console.log("สำเร็จ");
      } else {
        console.log("ล้มเหลว");
      }
      
    } catch(error) {
      console.log("สมัครสมาชิกล้มเหลว");
    }
    
  }

  return (
    <main>
      <Navbar/>
      <div className={styles.reg}>
        สมัคร
      </div>
      {error && (
        <div className={styles.reg}>
          {error}
        </div>
      )}
      {success && (
        <div className={styles.reg}>
          {success}
        </div>
      )}
      <form className={styles.regbox} onSubmit={handleSubmit}>
          <input onChange={(e) => setId(e.target.value)} className={styles.regblock} type="text" placeholder="รหัสนักศึกษา"/>
          <input onChange={(e) => setName(e.target.value)} className={styles.regblock} type="text" placeholder="ชื่อ"/>
          <input onChange={(e) => setLast(e.target.value)} className={styles.regblock} type="text" placeholder="นามสกุล"/>
          <input onChange={(e) => setEmail(e.target.value)} className={styles.regblock} type="email" placeholder="อีเมล"/>
          <input onChange={(e) => setPassword(e.target.value)} className={styles.regblock} type="password" placeholder="รหัสผ่าน"/>
          <input onChange={(e) => setConfirmPassword(e.target.value)} className={styles.regblock} type="password" placeholder="ยืนยันรหัสผ่าน"/>
          <button type="submit" className={styles.regaccept}>สมัครสมาชิก</button>
      </form>
      <Footer/>
      {/* <Stdlist/> */}
    </main>
  );
}
