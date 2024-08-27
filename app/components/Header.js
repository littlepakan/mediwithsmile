import styles from "@/app/styles/Header.module.css"
import Image from "next/image";
import "@/app/styles/global.css"

export default function Header() {
  return (
    <header>
      <div className={styles.medicine}>
        <Image src="/medicineidle.png" width={300} height={300} alt="logo"/>
        
      </div>
    </header>
  );
}
