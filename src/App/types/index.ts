export * from './user';

export enum PAGE_NAME {
  /* Auth */
  AUTH_PHONE_NUMBER = 'AUTH_PHONE_NUMBER'
}

export type PageConfig = Partial<{
  headerConfig: {
    type: any;
    props?: any;
  }[];
  pageName: PAGE_NAME;
  defaultBack: string;
  isRestricted: boolean;
}>;
