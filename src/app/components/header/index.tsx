import Image from "next/image";
import React from "react";
import styles from "./header.module.sass";

const icons = [
  {
    src: "/images/header/box.svg",
    alt: "Box",
  },
  {
    src: "/images/header/heart.svg",
    alt: "Heart Icon",
  },
  {
    src: "/images/header/UserCircle.svg",
    alt: "User Circle",
  },
  {
    src: "/images/header/ShoppingCart.svg",
    alt: "Shopping Cart",
  },
];

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topBar}>
        <div className={styles.topBarItem}>
          <Image src="/images/header/ShieldCheck.svg" alt="ShieldCheck Verify" width={20} height={20} className={styles.imageTopBar}/>
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div className={styles.topBarItem}>
        <Image src="/images/header/Truck.svg" alt="Frete grátis" width={20} height={20} className={styles.imageTopBar}/>
          <p>
            Frete grátis <span>acima de R$ 200</span>
          </p>
        </div>
        <div className={styles.topBarItem}>
        <Image src="/images/header/CreditCard.svg" alt="Parcele suas compras" width={20} height={20} className={styles.imageTopBar}/>
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
            <Image src="/images/header/lupa.svg" alt="Search Icon Lupa" height={28} width={28}/>
          </button>
        </div>
        <div className={styles.iconSet}>
          {icons.map((i, index) => (
            <Image key={index} src={i.src} alt={i.src} width={32} height={32} />
          ))}
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
            <Image src="/images/header/CrownSimple.svg" alt="Simple Crow Assinatura" width={20} height={20}/>
            ASSINATURA
          </span>
        </p>
      </nav>
    </header>
  );
}
