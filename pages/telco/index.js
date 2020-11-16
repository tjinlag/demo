import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header'
import Footer from 'layouts/Footer';
import Tabs from 'components/Telco/Tabs';
import BuyCard from 'components/Telco/BuyCard';
import BuyData from 'components/Telco/BuyData';
import { getCards } from 'services/telco';

const Type = {
  Card: 'card',
  Data: 'data',
  Topup: 'topup',
}

const tabs = [
  { type: Type.Card, content: 'Mua thẻ điện thoại' },
  { type: Type.Data, content: 'Mua thẻ data 3G 4G' },
  { type: Type.Topup, content: 'Nạp tiền điện thoại' },
]

const Telco = ({ data }) => {
  const [type, setType] = useState(Type.Card);

  const handleItemClick = (idx) => {
    setType(tabs[idx].type);
  }

  if (!data) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>Buy Telco</title>
      </Head>

      <Header active="telco" />

      <div className={styles.main}>
        <Tabs items={tabs} onItemClick={handleItemClick} />

        { type === Type.Card && <BuyCard data={data} /> }
        { type === Type.Data && <BuyData /> }

      </div>

      <Footer />
    </div>
  )
}


Telco.getInitialProps = async (ctx) => {
  // const res = await fetch('http://localhost:12345/api/cards');
  // const data = await res.json()
  return { data: getCards() }
}

export default Telco;

