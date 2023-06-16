import axios from 'axios';

export type InjectionConfigType = Record<string, any>;

const InjectionConfig: InjectionConfigType = {
  HttpClient: axios,
};

export default InjectionConfig;
