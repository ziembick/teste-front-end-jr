import React from "react";
import styles from "./categories.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      icon: "/images/categories/tecnologia.svg",
      label: "Tecnologia",
      href: "#",
      active: true,
    },
    {
      icon: "/images/categories/supermercado.svg",
      href: "#",
      label: "Supermercado",
    },
    { icon: "/images/categories/bebidas.svg", label: "Bebidas", href: "#" },
    {
      icon: "/images/categories/ferramentas.svg",
      label: "Ferramentas",
      href: "#",
    },
    { icon: "/images/categories/saude.svg", label: "Saúde", href: "#" },
    {
      icon: "/images/categories/corrida.svg",
      label: "Esportes e Fitness",
      href: "#",
    },
    { icon: "/images/categories/moda.svg", label: "Moda", href: "#" },
  ];

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <Link key={index} href={category.href} className={styles.categoryWrapper}>
          <div
            className={`${styles.categoryCard} ${
              category.active ? styles.active : ""
            }`}
          >
            <Image
              src={category.icon}
              alt={category.label}
              width={48}
              height={48}
            />
          </div>
          <p className={styles.label}>{category.label}</p>
        </Link>
      ))}
    </div>
  );
}
