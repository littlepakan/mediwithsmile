import Navbar from "@/app/components/Navbar";
import styles from "@/app/styles/Home.module.css";
import Footer from "@/app/components/Footer";
import "@/app/styles/global.css"
export default function News() {
  return (
    <main>
      <Navbar/>
      <div className={styles.home}>
        ข่าวแบบปฏิทิน (เร็วๆ นี้)
      </div>
      <Footer/>
    </main>
  );
}
