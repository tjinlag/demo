import React from 'react'
import PropTypes from 'prop-types'
import Format from 'utils/format';

const Card = ({ data, onClick }) => {
  const { denomination, discount, logo = "https://www.vban.vn/Resources/images/logo/viettel1.png" } = data;
  const price = denomination - discount;
  return (
    <div
      className="d-block m-2 border rounded-lg shadow align-items-center"
      style={{ width: 100 }}
      onClick={onClick}
    >
      <div className="d-flex flex-column">
        <img src={logo} style={{ objectFit: 'scale-down', height: 25 }} className="px-auto" />
        <h6 className="align-self-center mt-1">{Format.money(price)}đ</h6>
      </div>
    </div>
  )
}

Card.propTypes = {

}

export default Card
