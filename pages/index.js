import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat top das galaxias</title>
        <meta name="Descrição" content="Foi tudo feito na mão, não roubei" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <p>Chat de Infoweb</p>
          <a href="/login"><button>login</button></a>
        </nav>
        <h1>Landing page do chat de Infoweb</h1>
      </main>
    </div>
      );
    }