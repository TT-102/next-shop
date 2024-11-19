import styles from "./page.module.css";
import Image from "next/image";
import BurgerIgm2 from "@/public/images/b2.png";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.aboutpageWrapper}>
        <div className={styles.imgWrapper}>
          {/* <div className={styles.textBox}>
            <p className={styles.aboutHeader}>vår passion</p>
            <p className={styles.aboutHeader}>vårt liv</p>
            <p className={styles.aboutHeader}>vår framtid</p>
          </div> */}
          <div className={styles.verticalText}>OM OSS</div>
          <Image
            src={BurgerIgm2}
            alt="Hamburger about page"
            className={styles.burgerImg}
          />
        </div>
      </div>
    </div>
  );
}
