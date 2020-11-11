import React from 'react';
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header'
import Footer from 'layouts/Footer';

const Billing = () => {
  return (
    <footer className={styles.container}>
      <Head>
        <title>Billing</title>
      </Head>

      <Header active="billing" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Billing Page
        </h1>
      </main>

      <Footer />
    </footer>
  )
}

export default Billing;
