import ChuckNorris from './src/services/ChuckNorris';

async function getData() {
  const chuckNorris = new ChuckNorris();
  const result = await chuckNorris.fetchData();

  console.info(result.data.value);
}

getData();