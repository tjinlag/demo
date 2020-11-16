// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');

export default (req, res) => {
  const rawdata = fs.readFileSync('/data/card.json');
  const data = JSON.parse(rawdata);

  res.statusCode = 200;
  res.json(data);
}
