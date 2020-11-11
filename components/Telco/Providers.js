import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Providers = ({ data, activeProvider, onItemClick }) => {
  const handleItemClick = (provider) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    onItemClick(provider);
  }

  if (!data) return null;

  return (
    <div className="d-flex flex-row">
      { data.map((provider) => (
        <div
          className={classNames('m-1 p-1 border', {'border-primary': provider === activeProvider})}
          style={{ cursor: "pointer" }}
          onClick={handleItemClick(provider)}
          key={provider.name}
        >
          <img src={provider.logo} height={50} />
        </div>
      )) }
    </div>
  )
}

export default Providers
