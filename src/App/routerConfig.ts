// import { RouteComponentProps } from 'react-router-dom';

import { lazyLoadFeatureRoute } from 'core/utils';
import { PAGE_NAME, PageConfig } from 'App/types';

/* eslint-disable-next-line */
export interface RouteConfig extends PageConfig {
  component: React.FC<any>;
  pathname: string;
}

export const pathnames: {
  [key in keyof typeof PAGE_NAME]: string;
} = {
  [PAGE_NAME.AUTH_PHONE_NUMBER]: '/auth-phone-number'
};

export const routes: RouteConfig[] = [
  /* Auth pages */
  {
    //eslint-disable-next-line
    //@ts-ignore
    pageName: PAGE_NAME.AUTH_PHONE_NUMBER,
    pathname: pathnames[PAGE_NAME.AUTH_PHONE_NUMBER],
    component: lazyLoadFeatureRoute('AuthFlow', 'PhoneNumberPage'),
    headerConfig: []
  }
];
