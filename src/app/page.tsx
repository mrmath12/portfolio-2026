'use client';

import { useLayout } from "@/context/LayoutContext";

export default function Home() {
  const { layout } = useLayout();

  return (
    <main>Layout ativo: {layout}</main>
  );
}
