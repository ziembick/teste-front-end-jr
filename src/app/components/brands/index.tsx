'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './brands.module.sass';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Brands() {
  const brandImages = Array(15).fill('/images/brands/logoBrands.svg'); 

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={5}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        {brandImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.brandItem}>
              <Link href="#">
              <Image src={image} alt={`Brand Logo ${index + 1}`} width={172} height={172} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperButtonPrev}>
        <Image src="/images/brands/arrow-brands.svg" width={40} height={40} alt='Arrow Left' style={{ transform: 'rotate(180deg)' }}/>
      </div>
      <div className={styles.swiperButtonNext}>
        <Image src="/images/brands/arrow-brands.svg" width={40} height={40} alt='Arrow Right'/>
      </div>
    </div>
  );
}
