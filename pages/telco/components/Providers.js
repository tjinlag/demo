import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Providers = ({ data, activeProvider, onItemClick }) => {
  const handleItemClick = (providerName) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    onItemClick(providerName);
  }

  if (!data) return null;

  return (
    <div className="d-flex flex-row">
      { data.map(({ name, logo }) => (
        <div
          className={classNames('m-1 p-1 border', {'border-info': name === activeProvider})}
          onClick={handleItemClick(name)}
          id={name}
        >
          <img src={logo} height={50} />
        </div>
      )) }
    </div>
  )
}

export default Providers
