import React from "react";
import Image from "next/image";
import styles from "./footer.module.sass";
import Link from "next/link";

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
  { src: "/images/footer/facebook.svg", alt: "Facebook", href: "https://www.facebook.com" },
  { src: "/images/footer/instagram.svg", alt: "Instagram", href: "https://www.instagram.com" },
  { src: "/images/footer/youtube.svg", alt: "Youtube", href: "https://www.youtube.com" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.about}>
            <h4>Sobre nós</h4>
            <ul>
              <li>
                <Link href="#" className={styles.links}>
                  CONHEÇA
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.links}>
                  COMO COMPRAR
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.links}>
                  INDICAÇÃO E DESCONTO
                </Link>
              </li>
            </ul>
            <div className={styles.socialMedia}>
              {socialMedia.map((image, index) => (
                <Link href={image.href} key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={22}
                    height={22}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.informations}>
            <h4>INFORMAÇÕES ÚTEIS</h4>
            <ul>
              <li>
                <Link href="#" className={styles.links}>
                  FALE CONOSCO
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.links}>
                  DÚVIDAS
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.links}>
                  PRAZOS DE ENTREGA
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.links}>
                  FORMAS DE PAGAMENTO
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.links}>
                  POLÍTICA DE PRIVACIDADE
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.links}>
                  TROCAS E DEVOLUÇÕES
                </Link>
              </li>
            </ul>
          </div>
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
