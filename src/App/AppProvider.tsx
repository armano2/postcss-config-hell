import * as React from 'react';

/* Types */
import { User, PageConfig } from 'App/types';

export type AppContextState = {
  userData: User;
  activePageData: PageConfig;
};

export type AppContextActions = {
  handleAppInit: () => void;
  setPartialUserData: (user: User) => void;
  // setActivePageData: (pageData: AppContextState['activePageData']) => void;
  setActivePageData: any;
};

export type AppContextType = {
  state: AppContextState;
  actions: AppContextActions;
};

//eslint-disable-next-line
//@ts-ignore
export const AppContext = React.createContext<AppContextType>(null);

type Props = {
  children: string | JSX.Element | (string | JSX.Element)[];
};

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [userData, setUserData] = React.useState<User>({});
  const [activePageData, setActivePageData] = React.useState<PageConfig>({});

  const handleAppInit = React.useCallback(async () => {
    // await appInitializationService.appInit();
    // const userData = appInitializationService.getUserData();
    // const isAppInitialized = appInitializationService.checkInitializationReady();
    // setUserData(userData);
    // setIsAppInitialized(isAppInitialized);
  }, []);

  const setPartialUserData = React.useCallback((user: User) => {
    setUserData((prevState: User) => ({
      ...prevState,
      ...user
    }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: {
          userData,
          activePageData
        },
        actions: {
          handleAppInit,
          setPartialUserData,
          setActivePageData
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
