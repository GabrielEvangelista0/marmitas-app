'use client';

import Baner from "@/components/Baner";
import Cardapio from "@/components/Cardapio";

export default function Home() {
  return (
    <main >
      <button onClick={async () => {
        const res = await fetch('/api/teste')
        const data = await res.json()
        console.log(data);
      }}>
        Testar
      </button>
      <Baner />
      <Cardapio />
    </main>
  )
}
