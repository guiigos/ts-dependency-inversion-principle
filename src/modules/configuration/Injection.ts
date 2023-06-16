import InjectionContainer from './InjectionContainer';

const injectionContainer: InjectionContainer = InjectionContainer.getInstance();

export function inject(interfaceName: 'HttpClient') {
  return (target: any, propertyKey: string) => {
    target[propertyKey] = injectionContainer.getImplementationByInterface(interfaceName);
  };
}