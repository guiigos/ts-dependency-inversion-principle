import IHttpClient from '../modules/interfaces/IHttpClient';
import { inject } from '../modules/configuration/Injection';

type Jokes = {
  data: {
    value: string,
  },
};

class ChuckNorris {
  @inject('HttpClient')
  httpClient: IHttpClient;

  fetchData() {
    return new Promise<Jokes>((resolve, reject) =>
      this.httpClient
        .get<Jokes>('https://api.chucknorris.io/jokes/random')
        .then(resolve)
        .catch(reject));
  }
}

export default ChuckNorris;
