// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');
const path = require('path');
const { join } = require('path');

export default (req, res) => {
  console.log(path.resolve('./public', 'data'));
  console.log(join(path.resolve('./public', 'data'), 'card.json'));
  const rawdata = fs.readFileSync(join(path.resolve('./public', 'data'), 'card.json'));
  const data = JSON.parse(rawdata);

  res.statusCode = 200;
  res.json(data);
}
