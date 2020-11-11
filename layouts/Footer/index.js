import React from 'react'
import styles from 'styles/footer.module.css'

const logoSrc = 'https://i.pinimg.com/originals/95/52/7d/95527d44fe4e92a90a49a89408b75788.jpg';

const Footer = props => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoSrc} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          Công ty ABC
        </div>
        <address className={styles.address}>
          Địa chỉ: 268 Lý Thường Kiệt, Phường 7, Quận 10, Thành phố Hồ Chí Minh, Việt Nam
        </address>
        <div className={styles.others}>
          Điện thoại: <a href='tel:0962483519'>0962483519</a>,&nbsp;
          Email: <a href='mailto:tjinlag@gmail.com'>tjinlag@gmail.com</a>
        </div>
      </div>
      <div className={styles.badge}>
        <a href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=1732" target="_blank">
          <img src="https://www.vban.vn/Resources/images/boct.svg" />
        </a>
        <a>
          <img src="https://www.vban.vn/Resources/images/globalsign2.svg" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
