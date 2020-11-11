import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header'
import Footer from 'layouts/Footer';
import Tabs from './components/Tabs';
import BuyCard from './components/BuyCard';
import { getCards } from '../../services/telco';
import { useSetRecoilState } from 'recoil';
import { buyCardState } from 'recoils/buyCardState';

const Type = {
  Card: 'card',
  Data: 'data',
  Topup: 'topup',
}

const tabs = [
  { type: Type.Topup, content: 'Nạp tiền điện thoại' },
  { type: Type.Card, content: 'Mua thẻ điện thoại' },
  { type: Type.Data, content: 'Mua thẻ data 3G 4G' },
]

const Telco = ({ data }) => {
  const [type, setType] = useState(Type.Card);
  const setBuyCardState = useSetRecoilState(buyCardState);

  useEffect(() => {
    setBuyCardState(data);
  }, [])

  const handleItemClick = (idx) => {
    setType(tabs[idx].type);
  }

  return (
    <footer className={styles.container}>
      <Head>
        <title>Buy Telco</title>
      </Head>

      <Header active="telco" />

      <div className={styles.main}>
        <Tabs items={tabs} onItemClick={handleItemClick} />

        { type === Type.Card && <BuyCard data={data} /> }
      </div>

      <Footer />
    </footer>
  )
}

export default Telco;

export async function getServerSideProps(context) {
  const data = await getCards();
  return {
    props: { data }, // will be passed to the page component as props
  }
}
