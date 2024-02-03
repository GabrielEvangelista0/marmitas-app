import Card from "@/ui/card/card";
import styles from "./style.module.css";
import { getData } from "@/lib/crud";
import Image from "next/image";


export default async function Admin() {
  const data = await getData();
  console.log(data)
  return (
    <section className={styles.container}>
      <Card width='100%' height='100px' title='Total de vendas'>
        <p className={styles.totalValue}>R$ 100,00</p>
      </Card>
      <Card width='100%' height='100px' title='Total de pedidos'>
        <p className={styles.totalValue}>100,00</p>
      </Card>
      <Card width='100%' height='100%' title='Ultimas vendas' className={styles.ultimasVendas}>
        
      </Card>
      <Card width="100%" height="100%" title="Grafico de vendas" className={styles.grafico}>
      </Card>
    </section>
  )
}
