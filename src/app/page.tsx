import Image from "next/image";
import styles from "./page.module.sass";
import Header from "./components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import SectionTitle from "./components/title";
import ProductSlider from "./components/produtos";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />

      <SectionTitle>Produtos relacionados</SectionTitle>
      <ProductSlider />
    </div>
  );
}
