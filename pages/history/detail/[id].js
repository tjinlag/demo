import React from 'react';
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header'
import Footer from 'layouts/Footer';
import request from 'utils/request';

const HistoryDetail = ({ history }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>History Detail Page</title>
      </Head>
      <Header active="history" />

      <pre className="mt-5">
        {JSON.stringify(history, null, 4)}
      </pre>

      <Footer />
    </div>
  )
}

export default HistoryDetail;

export const getServerSideProps = async (ctx) => {
  const history = await request(`/api/history/${ctx.params.id}`);
  return {
    props: {
      history,
    }, // will be passed to the page component as props
  }
}
