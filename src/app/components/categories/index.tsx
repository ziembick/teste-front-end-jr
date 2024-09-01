import React from "react";
import styles from "./categories.module.sass";
import Image from "next/image";

export default function Categories() {
  const categories = [
    { icon: "/images/categories/tecnologia.svg", label: "Tecnologia", active: true },
    { icon: "/images/categories/supermercado.svg", label: "Supermercado" },
    { icon: "/images/categories/bebidas.svg", label: "Bebidas" },
    { icon: "/images/categories/ferramentas.svg", label: "Ferramentas" },
    { icon: "/images/categories/saude.svg", label: "Saúde" },
    { icon: "/images/categories/corrida.svg", label: "Esportes e Fitness" },
    { icon: "/images/categories/moda.svg", label: "Moda" },
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
