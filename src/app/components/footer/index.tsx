import React from "react";
import Image from "next/image";
import styles from "./footer.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Sobre nós</h4>
          <ul>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
          </ul>
          <div className={styles.socialMedia}>
            <Image
              src="/images/footer/facebook.svg"
              alt="Facebook"
              width={22}
              height={22}
            />
            <Image
              src="/images/footer/instagram.svg"
              alt="Instagram"
              width={22}
              height={22}
            />
            <Image
              src="/images/footer/youtube.svg"
              alt="YouTube"
              width={22}
              height={22}
            />
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
            <Image
              src="/images/footer/visa.svg"
              alt="Visa"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/elo.svg"
              alt="Elo"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/dinners.svg"
              alt="Dinners"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/mastercard.svg"
              alt="Mastercard"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/pix.svg"
              alt="Pix"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/ifood.svg"
              alt="iFood"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/amex.svg"
              alt="Amex"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/ticket.svg"
              alt="Ticket"
              width={40}
              height={25}
            />
            <Image
              src="/images/footer/sodexo.svg"
              alt="Sodexo"
              width={40}
              height={25}
            />
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
      <div className={styles.footerBottom}>
        <p>COPYRIGHT © 2019, TODOS OS DIREITOS RESERVADOS.</p>
        <div className={styles.partnerLogos}>
          <Image
            src="/images/footer/econverse.svg"
            alt="Econverse"
            width={80}
            height={30}
          />
          <Image
            src="/images/footer/vtexFooter.svg"
            alt="VTEX"
            width={80}
            height={30}
          />
        </div>
      </div>
    </footer>
  );
}
