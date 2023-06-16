export default interface IHttpClient {
  get: <T>(...rest: any) => Promise<T>;
}