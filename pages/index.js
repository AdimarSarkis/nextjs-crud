import Head from 'next/head'
import styles from '../src/components/styles/Home.module.scss'

import Header from '../src/components/template/Header'
import Main from '../src/components/template/Main'
import Logo from '../src/components/template/Logo'
import Footer from '../src/components/template/Footer'

export default function Home() {
  return (
    <div className={`container ${styles.container}`}>
      <Head>
        <title>Nextjs CRUD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconCruz.ico" />
      </Head>
        <Logo />
        <Header />
        <Footer />
        <Main />
        <div><h3></h3></div>
      </div>
  );
}
