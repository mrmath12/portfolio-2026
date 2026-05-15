import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { LayoutProvider } from "@/context/LayoutContext";
import "./globals.css";

const fontFamily = Chakra_Petch({
  variable: "--font-gemunu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matheus — Portfólio",
  description: "Desenvolvedor Fullstack com visão de produto e sensibilidade de design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={fontFamily.variable}>
      <body className="font-sans">
        <LanguageProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
