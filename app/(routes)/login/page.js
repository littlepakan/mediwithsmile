"use client"
import React, { useState } from 'react'
import Navbar from "@/app/components/Navbar";
import styles from "@/app/styles/Register.module.css"
import Footer from "@/app/components/Footer";
import { login } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import "@/app/styles/global.css"

export default function Login() {
  
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await login("credentials", {
        id, password, redirect: false
      })

      if (res.error) {
        setError("Invalid")
      }

      router.replace("");

    } catch(error) {
      console.log(error)
    }
  }


  return (
    <main>
      <Navbar/>
      <div className={styles.reg}>
        เข้าสู่ระบบ
      </div>
      {error && (
        <div className={styles.reg}>
          {error}
        </div>
      )}
      <form className={styles.regbox} onSubmit={handleSubmit}>
          <input onChange={(e) => setId(e.target.value)} className={styles.regblock} type="text" placeholder="รหัสนักศึกษา"/>
          <input onChange={(e) => setPassword(e.target.value)} className={styles.regblock} type="password" placeholder="รหัสผ่าน"/>
          <button type="submit" className={styles.regaccept}>ล็อกอิน</button>
      </form>
      <div className={styles.regmes}>
          ตอนนี้อยู่หน้าล็อกอิน ยังไม่พร้อมใช้งาน โปรดรอติดตามต่อไป
        </div>
      <Footer/>
      {/* <Stdlist/> */}
    </main>
  );
}
