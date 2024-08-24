import React from "react";
import styles from "./hero.module.sass";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.bannerWrapper}>
        <Image 
          src="/images/banner.svg" 
          alt="Banner" 
          layout="responsive" 
          width={1443} 
          height={395} 
        />
        <Image
          src="/images/bannerShadow.svg"
          alt="Banner Shadow"
          layout="responsive"
          width={1443}
          height={395}
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
