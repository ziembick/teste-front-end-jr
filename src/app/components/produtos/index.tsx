'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './produtos.module.sass';
import { Navigation } from 'swiper/modules';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/produtos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data.products))
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30} // Ajuste o espaçamento entre os slides
        slidesPerView={4} // Ajuste o número de slides visíveis
        navigation // Ativa as setas de navegação
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className={styles.productCard}>
              <Image 
                src={product.photo} 
                alt={product.productName} 
                width={247} 
                height={228} 
                className={styles.productImage} 
              />
              <p className={styles.productName}>{product.productName}</p>
              <p className={styles.oldPrice}>R$ {product.price.toFixed(2)}</p>
              <p className={styles.newPrice}>R$ {product.price.toFixed(2)}</p>
              <p className={styles.installments}>ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
