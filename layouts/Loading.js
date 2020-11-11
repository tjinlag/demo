import React from 'react'
import PropTypes from 'prop-types'

const Loading = props => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2'
      }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

Loading.propTypes = {

}

export default Loading
