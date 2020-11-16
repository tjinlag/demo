import React from 'react';
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header'
import Footer from 'layouts/Footer';
import { randomHistories } from 'utils/history';
import Format from 'utils/format';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import request from 'utils/request';

const History = ({ histories }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>History Page</title>
      </Head>
      <Header active="history" />

      <h2 className="py-3">History</h2>
      <div className="px-5 w-100">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Order Time</th>
              <th scope="col">Product</th>
              <th scope="col">Total amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {histories.map((history) => (
              <tr key={history.id}>
                <th scope="row">
                  <Link href={`/history/detail/${history.id}`}>
                    <a>{history.id.slice(0, 8)}</a>
                  </Link>
                </th>
                <td>{Format.date(new Date(history.buyAt))}</td>
                <td>{history.title}</td>
                <td>{Format.money(history.price)}&nbsp;đ</td>
                {history.status === 1
                  ? <td style={{ color: 'green' }}>success</td>
                  : <td>pending</td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  )
}

export default History;

export const getServerSideProps = async (ctx) => {
  const histories = await request('/api/history');
  return {
    props: {
      histories,
    }, // will be passed to the page component as props
  }
}
