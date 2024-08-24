import Image from "next/image";
import styles from "./page.module.sass";
import Header from "./components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import SectionTitle from "./components/title";
import ProductSlider from "./components/produtos";
import Parceiros from "./components/parceiros";
import ProductBanner from "./components/productBanner";
import Brands from "./components/brands";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <Categories />
      <SectionTitle>Produtos relacionados</SectionTitle>
      <ProductSlider />
      <Parceiros />
      <div className={styles.products}>
        <SectionTitle viewAllText="Ver todos">
          Produtos relacionados
        </SectionTitle>
      </div>
      <ProductBanner />
      <div className={styles.products}>
        <SectionTitle>Navegue por marcas</SectionTitle>
      </div>
      <Brands />
      <Footer />
    </div>
  );
}
