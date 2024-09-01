import React, { useState } from "react";
import Image from "next/image";
import styles from "./modal.module.sass";
import Link from "next/link";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          <div className={styles.closeIcon}>
            <Image
              src="/images/products/line.svg"
              alt="Line 1"
              className={styles.line1}
              width={24}
              height={24}
            />
            <Image
              src="/images/products/line.svg"
              alt="Line 2"
              className={styles.line2}
              width={24}
              height={24}
            />
          </div>
        </button>

        <div className={styles.modalProductInfo}>
          <Image
            src={product.photo}
            alt={product.productName}
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.modalDetails}>
            <h1>{product.productName}</h1>
            <p className={styles.modalPrice}>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>

            <p className={styles.description}>
              Many desktop publishing packages and web page editors now many
              desktop publishing
            </p>
            <p className={styles.moreDetails}>
              <Link href="#" className={styles.detailsLink}>Ver mais detalhes do produto &gt;</Link>
            </p>
            <div className={styles.modalActions}>
              <div className={styles.quantitySelector}>
                <button
                  onClick={handleDecrease}
                  className={styles.quantityButton}
                >
                  <Image
                    src="/images/modal/minus.svg"
                    alt="Minus"
                    width={20}
                    height={20}
                  />
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className={styles.quantityInput}
                />
                <button
                  onClick={handleIncrease}
                  className={styles.quantityButton}
                >
                  <Image
                    src="/images/modal/plus.svg"
                    alt="Plus"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
            <button className={styles.buyButton}>
              <Link href="#" className={styles.buyLink}>
                COMPRAR
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
