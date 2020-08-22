const getResource = async (url) => {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error(`Not fetch ${url}, received ${res.status}`);
  }
  const body = await res.json();
  return body;
};

getResource('https://swapi.dev/api/people/1ggggrg4454/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error(err);
  });
