import React from "react";
import styles from "./hero.module.sass";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.bannerWrapper}>
        <Image src="/images/banner.svg" width={1443} height={395} alt="Banner" />
        <Image
          src="/images/bannerShadow.svg"
          width={1443}
          height={395}
          alt="Banner Shadow"
          className={styles.bannerShadow}
        />
        <div className={styles.textOverlay}>
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos</h2>
          <button className={styles.ctaButton}>Ver produto</button>
        </div>
      </div>
    </div>
  );
}
