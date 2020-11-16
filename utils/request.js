import fetch from 'isomorphic-fetch';

export default async (url) => {
  const hostname = process.env.NODE_ENV === 'development' ? 'http://localhost:12345' : 'https://demo-fawn.vercel.app/';
  const res = await fetch(hostname + url);
  const data = await res.json();
  return data;
}