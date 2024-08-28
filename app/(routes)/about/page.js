import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import styles from "@/app/styles/Home.module.css";
import "@/app/styles/global.css"
export default function About() {
  return (
    <main>
      <Navbar/>
      <div className={styles.home}>
        เกี่ยวกับเรา
      </div>
      <Footer/>
    </main>
  );
}
