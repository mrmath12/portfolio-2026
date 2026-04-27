import type { Metadata } from "next";
import { Gemunu_Libre } from "next/font/google";
import { LayoutProvider } from "@/context/LayoutContext";
import "./globals.css";

const gemunuLibre = Gemunu_Libre({
  variable: "--font-gemunu",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
    <html lang="pt-BR" className={gemunuLibre.variable}>
      <body className="font-sans">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
