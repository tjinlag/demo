// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');

export default (req, res) => {
  const path = join(__dirname, '/data/card.json');
  const rawdata = fs.readFileSync(path);
  const data = JSON.parse(rawdata);

  res.statusCode = 200;
  res.json(data);
}
