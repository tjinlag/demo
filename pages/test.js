import React from 'react'
import PropTypes from 'prop-types'

const test = props => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      { arr.map(x => (
        <div>item{x}</div>
      ))}
    </div>
  )
}

test.propTypes = {

}

export default test
