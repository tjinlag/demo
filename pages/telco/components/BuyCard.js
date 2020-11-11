import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Providers from './Providers';

const Provider = {
  Viettel: 'viettel',
  Mobifone: 'mobifone',
  Vinaphone: 'vinaphone',
  Vietnamobile: 'vietnamobile',
}

// const providers = [
//   { name: Provider.Viettel, logo: 'https://www.vban.vn/Resources/images/logo/viettel1.png' },
//   { name: Provider.Mobifone, logo: 'https://www.vban.vn/Resources/images/logo/mobiphone1.png' },
//   { name: Provider.Vinaphone, logo: 'https://www.vban.vn/Resources/images/logo/vinaphone1.png' },
//   { name: Provider.Vietnamobile, logo: 'https://www.vban.vn/Resources/images/logo/vietnammobile1.png' },
// ]

const BuyCard = ({ data }) => {
  const [provider, setProvider] = useState(Provider.Viettel);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleProviderClick = (provider) => {
    setProvider(provider)
  }

  const handleCardClick = () => {
    console.log('handleCardClick');
  }

  if (!data) return null;

  const providers = data.map(({ provider, url }) => ({ name: provider, logo: url }));
  console.log(providers);
  return (
    <div className="d-flex flex-column align-items-center mt-1">
      <Providers
        data={providers}
        activeProvider={provider}
        onItemClick={handleProviderClick}
      />

      <div className="d-flex mt-2 flex-start" style={{ width: '100%', color: 'red' }}>
        { data[0].cards.map((card) => (
          <Card data={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  )
}

BuyCard.propTypes = {

}

export default BuyCard;
