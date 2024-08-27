import styles from "@/app/styles/Footer.module.css"
import Image from "next/image";
import "@/app/styles/global.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      พัฒนาเพื่อการศึกษา | พัฒนาโดย Medicineー (Pakan Wongtharuea) | version 0.1.0
    </footer>
  );
}
