import Navbar from "./components/navbar/page";
import styles from "./styles/Home.module.css"
import "@/app/styles/global.css"
export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className={styles.home}>
        Medicine-'s Website<br/>
        ที่นี้คือเว็บไซต์ทดลองยังไงล่ะ~
      </div>
    </main>
  );
}
