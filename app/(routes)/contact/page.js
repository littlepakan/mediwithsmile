import Navbar from "@/app/components/Navbar";
import styles from "@/app/styles/Home.module.css"
import Footer from "@/app/components/Footer";

import "@/app/styles/global.css"
export default function Contact() {
  return (
    <main>
      <Navbar/>
        <div className={styles.home}>
          ติดต่อ : Pakan Wongtharuea
        </div>
      <Footer/>
    </main>
  );
}
