"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./produtos.module.sass";
import { Navigation } from "swiper/modules";
import ProductModal from "./modal";
import Link from "next/link";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("CELULAR");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/produtos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("A resposta da rede não foi bem-sucedida.");
        }
        return response.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const categories = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.menu}>
        {categories.map((category) => (
          <div
            key={category}
            className={`${styles.menuItem} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={42}
          slidesPerView={4}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          breakpoints={{
            1443: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {products.map((product, index) => {
            const oldPrice = product.price * 1.3;
            const jurosPrice = product.price / 2;

            return (
              <SwiperSlide key={index}>
                <div
                  className={styles.productCard}
                  onClick={() => openModal(product)}
                >
                  <Image
                    src={product.photo}
                    alt={product.productName}
                    width={270}
                    height={200}
                    className={styles.productImage}
                  />
                  <p className={styles.productName}>{product.productName}</p>
                  <p className={styles.oldPrice}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(oldPrice)}
                  </p>
                  <p className={styles.newPrice}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                  </p>
                  <p className={styles.installments}>
                    ou 2x de R$
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(jurosPrice)}
                    {" "}sem juros
                  </p>
                  <p className={styles.freeShipping}>Frete grátis</p>
                  <button className={styles.buyButton}>Comprar</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.swiperButtonPrev}>
        <Image
          src="/images/products/arrow-left.svg"
          width={40}
          height={40}
          alt="Arrow Left"
        />
      </div>
      <div className={styles.swiperButtonNext}>
        <Image
          src="/images/products/arrow-right.svg"
          width={40}
          height={40}
          alt="Arrow Right"
        />
      </div>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
