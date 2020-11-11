import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Providers from './Providers';
import { useSetRecoilState } from 'recoil';
import { loadingState } from 'recoils/loadingState';
import { buyCard } from 'services/telco';
import { useVisible } from 'hooks/state';
import Portal from 'layouts/Portal';
import PayPopup from './PayPopup';
import Format from 'utils/format';

const BuyCard = ({ data }) => {
  const providers = useMemo(() => {
    return data.map(({ provider, url }) => ({ name: provider, logo: url }));
  }, [data]);
  const [selectedProvider, setSelectedProvider] = useState(providers[0]);
  const [selectedCard, setSelectedCard] = useState(null);
  const setLoading = useSetRecoilState(loadingState);
  const [popupVisible, hidePopup, showPopup] = useVisible(false);

  const cards = useMemo(() => {
    const { cards } = data.find(({ provider }) => provider === selectedProvider.name);
    setSelectedCard(cards[0]);
    return cards;
  }, [data, selectedProvider])

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider)
  }

  const handleCardClick = (card) => () => {
    setSelectedCard(card);
  }

  const handleSubmit = async () => {
    console.log({ selectedProvider, selectedCard });
    setLoading(true)
    await buyCard(selectedProvider.name, selectedCard.denomination);
    setLoading(false);
    showPopup();
  }

  return (
    <div className="d-flex flex-column align-items-center mt-3 mx-5">
      <Providers
        data={providers}
        activeProvider={selectedProvider}
        onItemClick={handleProviderClick}
      />

      <div>
        <div className="d-block mt-2 mx-5" style={{ width: 1000 }}>
          { cards.map((card, idx) => (
            <Card
              key={idx}
              data={{
                ...card,
                logo: selectedProvider.logo,
              }}
              active={card === selectedCard}
              onClick={handleCardClick(card)}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="btn px-5 font-weight-bold"
        style={{ backgroundColor: 'steelblue', color: 'white', textDecoration: 'uppercase' }}
        onClick={handleSubmit}
      >Xác nhận</button>

      { popupVisible && (
        <Portal>
          {!!selectedProvider && !!selectedCard && (
            <PayPopup
              content={`Bạn mua 1 thẻ ${selectedProvider.name} - mệnh giá ${Format.money(selectedCard.denomination)}đ`}
              onClose={hidePopup}
            />
          )}
        </Portal>
      )}
    </div>
  )
}

BuyCard.propTypes = {

}

export default BuyCard;
