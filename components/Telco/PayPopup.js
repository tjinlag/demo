import React from 'react'
import PropTypes from 'prop-types'
import { useCountDown } from 'hooks/state'
import Format from 'utils/format';

const formatRemainTime = (remainTime) => {
  const minutes = Math.floor(remainTime / 60);
  const seconds = remainTime % 60;
  console.log({ minutes, seconds });

  return `${`${minutes}`.padStart(2, '0')}:${`${seconds}`.padStart(2, '0')}`
}

const PayPopup = ({ onClose, providerName, denomination }) => {
  const remainTime = useCountDown(3*60);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2',
        zIndex: 100,
      }}
    >
      <div className="d-flex flex-column bg-info rounded-lg" style={{ width: 600, color: 'white' }}>
        <div
          style={{
            position: 'relative',
            color: 'white',
            float: 'right',
            left: 575,
            cursor: 'pointer'
          }}
          onClick={onClose}
        >
          <img src="/assets/images/cancel.png" width={25} height={25} />
        </div>
        <h2 className="text-center">Xác nhận thanh toán</h2>
        <h6 className="text-center">{`Bạn mua 1 thẻ ${providerName} - mệnh giá ${Format.money(denomination)}đ`}</h6>
        <div className="d-flex flex-row p-2">
          <div className="d-flex">
            <img src="/assets/images/qr-tjinlag-facebook.png" style={{ width: 200, height: 200 }} />
          </div>
          <div className="d-flex flex-column flex-shrink-10 align-items-center justify-content-center" style={{ width: '100%' }}>
            <h6 className="text-center">
              Vui lòng thanh toán giao dịch này để tiếp tục
            </h6>
            <h3 className="mt-1 font-weight-bold">{formatRemainTime(remainTime)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

PayPopup.propTypes = {
  onClose: PropTypes.func,
}

export default PayPopup
