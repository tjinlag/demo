import React from 'react';
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header'
import Footer from 'layouts/Footer';

const Tickets = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buy tickets</title>
      </Head>

      <Header active="tickets" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tickets Page
        </h1>
      </main>

      <Footer />
    </div>
  )
}

export default Tickets;
