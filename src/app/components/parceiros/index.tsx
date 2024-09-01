import Image from "next/image";
import React from "react";
import styles from "./parceiros.module.sass";
import Link from "next/link";

export default function Parceiros() {
  return (
    <div className={styles.parceirosContainer}>
      <div className={styles.parceiroItem}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/parceiros/parceiros.svg"
            alt="Parceiros"
            width={574}
            height={350}
            className={styles.image}
          />
          <Image
            src="/images/produtosShadow.svg"
            alt="Parceiros Shadow"
            width={574}
            height={350}
            className={styles.shadow}
          />
        </div>
        <div className={styles.overlay}>
          <h2 className={styles.title}>Parceiros</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className={styles.button}>
            <Link href="#" className={styles.confira}>CONFIRA</Link>
          </button>
        </div>
      </div>
      <div className={styles.parceiroItem}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/parceiros/parceiros.svg"
            alt="Parceiros"
            width={574}
            height={350}
            className={styles.image}
          />
          <Image
            src="/images/produtosShadow.svg"
            alt="Parceiros Shadow"
            width={574}
            height={350}
            className={styles.shadow}
          />
        </div>
        <div className={styles.overlay}>
          <h2 className={styles.title}>Parceiros</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className={styles.button}>
            <Link href="#" className={styles.confira}>CONFIRA</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
