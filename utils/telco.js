const Provider = {
  Viettel: 'viettel',
  Mobifone: 'mobifone',
  Vinaphone: 'vinaphone',
  Vietnamobile: 'vietnamobile',
}

const provider2Logo = {
  [Provider.Viettel]: 'https://www.vban.vn/Resources/images/logo/viettel1.png',
  [Provider.Mobifone]: 'https://www.vban.vn/Resources/images/logo/mobiphone1.png',
  [Provider.Vinaphone]: 'https://www.vban.vn/Resources/images/logo/vinaphone1.png',
  [Provider.Vietnamobile]: 'https://www.vban.vn/Resources/images/logo/vietnammobile1.png',
}

export const getProviderLogo = (providerName) => provider2Logo[providerName] || null;