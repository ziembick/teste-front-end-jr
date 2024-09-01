import React from "react";
import Image from "next/image";
import styles from "./footer.module.sass";

const paymentMethods = [
  { src: "/images/footer/visa.svg", alt: "Visa" },
  { src: "/images/footer/elo.svg", alt: "Elo" },
  { src: "/images/footer/alelo.svg", alt: "Alelo" },
  { src: "/images/footer/dinners.svg", alt: "Diners Club" },
  { src: "/images/footer/ifood.svg", alt: "iFood" },
  { src: "/images/footer/mastercard.svg", alt: "Mastercard" },
  { src: "/images/footer/pix.svg", alt: "Pix" },
  { src: "/images/footer/amex.svg", alt: "Amex" },
  { src: "/images/footer/ticket.svg", alt: "Ticket" },
  { src: "/images/footer/sodexo.svg", alt: "Sodexo" },
];

const socialMedia = [
  { src: "/images/footer/facebook.svg", alt: "Facebook" },
  { src: "/images/footer/instagram.svg", alt: "Instagram" },
  { src: "/images/footer/youtube.svg", alt: "Youtube" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.about}>
          <h4>Sobre nós</h4>
          <ul>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
          </ul>
          <div className={styles.socialMedia}>
            {socialMedia.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={22}
                height={22}
              />
            ))}
          </div>
          </div>
        </div>
        <div className={styles.section}>
          <h4>INFORMAÇÕES ÚTEIS</h4>
          <ul>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>TROCAS E DEVOLUÇÕES</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>FORMAS DE PAGAMENTO</h4>
          <div className={styles.paymentMethods}>
            {paymentMethods.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={40}
                height={25}
              />
            ))}
          </div>
        </div>
        <div className={styles.newsletter}>
          <h4>
            CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong>
          </h4>
          <p>
            Exceptetur sint occaecat cudatdat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="SEU E-MAIL" />
            <button>OK</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
