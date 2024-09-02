import React from "react";
import styles from "./productBanner.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function ProductBanner() {
  return (
    <div className={styles.parceirosContainer}>
      <div className={styles.parceiroItem}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/productBanner/produtosBanner.png"
            alt="Produtos"
            width={588}
            height={284}
            className={styles.image}
          />
          <Image
            src="/images/produtosShadow.svg"
            alt="Produtos"
            width={588}
            height={284}
            className={styles.shadow}
          />
        </div>
        <div className={styles.overlay}>
          <h2 className={styles.title}>Produtos</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className={styles.button}>
            <Link href="#" className={styles.confira}>
              CONFIRA
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.parceiroItem}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/productBanner/produtosBanner.png"
            alt="Produtos"
            width={589}
            height={284}
            className={styles.image}
          />
          <Image
            src="/images/produtosShadow.svg"
            alt="Produtos"
            width={589}
            height={284}
            className={styles.shadow}
          />
        </div>
        <div className={styles.overlay}>
          <h2 className={styles.title}>Produtos</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className={styles.button}>
            <Link href="#" className={styles.confira}>
              CONFIRA
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
