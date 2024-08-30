import React from "react";
import styles from "./categories.module.sass";
import Image from "next/image";

export default function Categories() {
  const categories = [
    { icon: "/images/tecnologia.svg", label: "Tecnologia", active: true },
    { icon: "/images/supermercado.svg", label: "Supermercado" },
    { icon: "/images/bebidas.svg", label: "Bebidas" },
    { icon: "/images/ferramentas.svg", label: "Ferramentas" },
    { icon: "/images/saude.svg", label: "Saúde" },
    { icon: "/images/corrida.svg", label: "Esportes e Fitness" },
    { icon: "/images/moda.svg", label: "Moda" },
  ];

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <div key={index} className={styles.categoryWrapper}>
          <div
            className={`${styles.categoryCard} ${category.active ? styles.active : ""}`}
          >
            <Image src={category.icon} alt={category.label} width={48} height={48} />
          </div>
          <p className={styles.label}>{category.label}</p>
        </div>
      ))}
    </div>
  );
}
