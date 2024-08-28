import Navbar from "@/app/components/Navbar";
import styles from "@/app/styles/Home.module.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

import "@/app/styles/global.css"
export default function Welcome() {
  return (
    <main>
      <Navbar/>
      <Header/>
        <div className={styles.home}>
          ยินดีต้อนรับสู่
          NPRU-CS 66 (Welcome)
        </div>
        <div className={styles.homemes}>
          ตอนนี้อยู่ในระหว่างพัฒนาเว็บ โปรดรอติดตามต่อไป
        </div>
      <Footer/>
    </main>
  );
}
