import React from "react";
import styles from "./footerBottom.module.sass";
import Image from "next/image";

const imagesBottom = [
  {
    src: "/images/footer/econverse.svg",
    alt: "Econverse",
  },
  {
    src: "/images/footer/vtexFooter.svg",
    alt: "Vtex",
  },
];

export default function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <p>COPYRIGHT © 2019, TODOS OS DIREITOS RESERVADOS.</p>
      <div className={styles.partnerLogos}>
        {imagesBottom.map((i, index) => (
          <Image key={index} src={i.src} alt={i.alt} width={80} height={30} />
        ))}
      </div>
    </div>
  );
}
