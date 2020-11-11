import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Providers from './Providers';
import { useSetRecoilState } from 'recoil';
import { loadingState } from 'recoils/loadingState';
import { buyCard, getDatas } from 'services/telco';
import { useVisible } from 'hooks/state';
import Portal from 'layouts/Portal';
import PayPopup from './PayPopup';
import Package from './Package';

const BuyData = () => {
  const data = getDatas();
  const providers = useMemo(() => {
    return data.map(({ provider, url }) => ({ name: provider, logo: url }));
  }, []);
  const [selectedProvider, setSelectedProvider] = useState(providers[0]);
  const [selectedPkg, setSelectedPkg] = useState(null);
  const setLoading = useSetRecoilState(loadingState);
  const [popupVisible, hidePopup, showPopup] = useVisible(false);

  const packages = useMemo(() => {
    const { packages } = data.find(({ provider }) => provider === selectedProvider.name);
    setSelectedPkg(packages[0]);
    return packages;
  }, [selectedProvider])

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider)
  }

  const handlePackageClick = (pkg) => () => {
    setSelectedPkg(pkg);
  }

  const handleSubmit = async () => {
    console.log({ selectedProvider, selectedPkg });
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      showPopup();
    }, 2e3)
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
          { packages.map((pkg, idx) => (
            <Package
              key={idx}
              data={{
                ...pkg,
                logo: selectedProvider.logo,
              }}
              active={pkg === selectedPkg}
              onClick={handlePackageClick(pkg)}
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
          {!!selectedProvider && !!selectedPkg && (
            <PayPopup
              onClose={hidePopup}
              content={`Bạn mua gói ${selectedPkg.days} ngày - ${selectedPkg.data}`}
            />
          )}
        </Portal>
      )}
    </div>
  )
}

BuyData.propTypes = {

}

export default BuyData;
