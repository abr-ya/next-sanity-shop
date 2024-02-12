import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Roboto } from "next/font/google";

import { Header, ShoppingCartModal } from "./components";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Next 14 + Tailwind CSS App",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={roboto.className}>
      <Header />
      <ShoppingCartModal />
      {children}
    </body>
  </html>
);

export default RootLayout;
