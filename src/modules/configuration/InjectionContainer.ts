import InjectionConfig, { InjectionConfigType } from './InjectionConfig';

class InjectionContainer {
  static instance: InjectionContainer;
  configuration: InjectionConfigType = InjectionConfig;

  static getInstance(): InjectionContainer {
    if (!this.instance) {
      this.instance = new InjectionContainer();
    }
    return this.instance;
  }

  getImplementationByInterface(interfaceName: string) {
    return this.configuration[interfaceName];
  }
}

export default InjectionContainer;