const Format = {
  money: (amount) => `${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
}

export default Format;