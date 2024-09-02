import type { Metadata } from "next";
import { Inter, Lato, Montserrat, Poppins } from "next/font/google";
import "../styles/styles.sass";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Econverse & VTEX Ecommerce",
  description: "Ecommerce developed by Paulo Ziembick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} ${poppins.variable} ${lato.className} ${lato.variable} ${montserrat.className} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
