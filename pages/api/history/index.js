// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');
const path = require('path');
const { join } = require('path');

export default (req, res) => {
  const dir = path.resolve('./public', 'data');
  const rawdata = fs.readFileSync(join(dir, 'histories.json'));
  const data = JSON.parse(rawdata);

  res.statusCode = 200;
  res.json(data);
}
