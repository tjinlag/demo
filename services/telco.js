export const buyCard = async (provider, denomination) => {
  console.log('buy card', denomination, provider);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1e3);
  })
}