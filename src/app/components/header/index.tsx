import Image from "next/image";
import React from "react";
import {
  PiShieldCheck,
  PiTruck,
  PiCreditCard,
  PiMagnifyingGlass,
  PiCrownSimpleLight,
} from "react-icons/pi";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import styles from "./header.module.sass";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topBar}>
        <div className={styles.topBarItem}>
          <PiShieldCheck />
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div className={styles.topBarItem}>
          <PiTruck />
          <p>
            Frete grátis <span>acima de R$ 200</span>
          </p>
        </div>
        <div className={styles.topBarItem}>
          <PiCreditCard />
          <p>
            Parcele <span>suas compras</span>
          </p>
        </div>
      </div>
      <div className={styles.mainBar}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.svg"
            width={139}
            height={51}
            alt="Logo VTEX"
          />
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="O que você está buscando?"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <PiMagnifyingGlass />
          </button>
        </div>
        <div className={styles.iconSet}>
          <Image src="/images/vector.svg" width={24} height={24} alt="Vector" />
          <FaRegHeart width={32} height={32} />
          <FaRegUserCircle width={32} height={32} />
          <TbShoppingCart width={32} height={32} />
        </div>
      </div>
      <nav className={styles.navBar}>
        <p>TODAS CATEGORIAS</p>
        <p>SUPERMERCADO</p>
        <p>LIVROS</p>
        <p>MODA</p>
        <p>LANÇAMENTOS</p>
        <p className={styles.highlight}>OFERTAS DO DIA</p>
        <p>
          <span className={styles.crownText}>
            <PiCrownSimpleLight width={20} height={20} size={18}/>
            ASSINATURA
          </span>
        </p>
      </nav>
    </header>
  );
}
