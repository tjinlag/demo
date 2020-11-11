const fs = require('fs');

export const getCards = async () => {
  const rawdata = fs.readFileSync('./data/card.json');
  const data = JSON.parse(rawdata);

  return data;
}