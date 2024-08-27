import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./styles/Home.module.css"
import "@/app/styles/global.css"
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
        <div className={styles.home}>
          ยินดีต้อนรับสู่
          NPRU-CS 66
        </div>
        <div className={styles.homemes}>
          ตอนนี้อยู่ในระหว่างพัฒนาเว็บ โปรดรอติดตามต่อไป
        </div>
      <Footer/>
    </main>
  );
}