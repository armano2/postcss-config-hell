import { LazyExoticComponent, ComponentType, lazy } from 'react';

const lazyImport = <T extends Record<string, never>, U extends keyof T>(
  loader: (x?: string) => Promise<T>
) => {
  return new Proxy({} as unknown as T, {
    get: (target, componentName: any) => {
      if (typeof componentName === 'string') {
        return lazy(() =>
          loader(componentName).then((x) => ({
            default: x[componentName] as any as React.ComponentType<any>
          }))
        );
      }
    }
  });
};

export const lazyLoadFeatureRoute = (
  flowName: string,
  pageName: string
): LazyExoticComponent<ComponentType> => {
  try {
    const components = lazyImport(
      () =>
        import(`features/${flowName}/components/${pageName}/${pageName}.tsx`)
    );

    return components[pageName];
  } catch (e) {
    console.error(`${flowName} load error`, e);
    throw `${flowName} load error`;
  }
};

export const lazyLoadFeature = (
  featureName: string,
  pageName: string = featureName
): LazyExoticComponent<ComponentType> => {
  try {
    const components = lazyImport(
      () => import(`features/${featureName}/components/${featureName}.tsx`)
    );

    return components[pageName];
  } catch (e) {
    console.error(`${featureName} load error`, e);
    throw `${featureName} load error`;
  }
};
