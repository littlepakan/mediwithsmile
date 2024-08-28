"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/Nav.module.css"
export default function Navbar() {
  return (
    <nav className={styles.navbox}>
      <Link className={styles.navblock} href="/">หน้าแรก</Link>
      <Link className={styles.navblock} href="/news">ข่าวสาร</Link>
      <Link className={styles.navblock} href="/homework">การบ้าน</Link>
      <Image src="/logodarktheme.png" width={50} height={50} alt="logo"/>
      <Link className={styles.navblock} href="/login">เข้าสู่ระบบ</Link>
      <Link className={styles.navblock} href="/studentlist">รายชื่อ</Link>
      <Link className={styles.navblock} href="/contact">ติดต่อ</Link>
    </nav>
  );
}
