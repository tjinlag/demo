import React from 'react'
import PropTypes from 'prop-types'
import Format from 'utils/format';
import classNames from 'classnames';

const Card = ({ data, onClick, active }) => {
  if (!data) return null;

  const { denomination, discount, logo } = data;
  const price = denomination - discount;

  return (
    <div className='d-inline-block m-3 p-2'>
      <div
        className={classNames("d-flex p-1 flex-column border rounded-lg shadow-sm", { 'border-primary': active })}
        style={{ width: 150, color: 'SteelBlue', cursor: 'pointer' }}
        onClick={onClick}
      >
        <img src={logo} style={{ objectFit: 'scale-down', height: 30 }} className="px-auto" />
        <h5 className="align-self-center mt-1">{Format.money(denomination)}</h5>
      </div>
      <div className="text-center mt-2">
        Giá: <span style={{ fontWeight: 600 }}>{Format.money(price)}đ</span>
      </div>
    </div>
  )
}

Card.propTypes = {

}

export default Card
