import Navbar from "@/app/components/Navbar";
import styles from "@/app/styles/Home.module.css"
import Footer from "@/app/components/Footer";

import "@/app/styles/global.css"

export default function StudentList() {
  return (
    <main>
      <Navbar/>
      <div className={styles.home}>
        รายชื่อ
      </div>
      <Footer/>
      {/* <Stdlist/> */}
    </main>
  );
}
