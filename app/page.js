import Navbar from "./components/Navbar";
import styles from "./styles/Home.module.css"
import "@/app/styles/global.css"
export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className={styles.home}>
        เว็บไซต์ของเมดิซึน
      </div>
    </main>
  );
}
