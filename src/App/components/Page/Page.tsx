import * as React from 'react';

/* Types */
import { AppContext, AppContextType } from 'App/AppProvider';
import { PageConfig } from 'App/types';

/* Styles */
import styles from './style.css';

type PageProps = PageConfig & {
  children: JSX.Element;
};

const Page: React.FC<PageProps> = React.memo(
  ({
    children,
    headerConfig,
    pageName,
    defaultBack,
    isRestricted
  }: PageProps) => {
    const {
      actions: { setActivePageData }
    } = React.useContext<AppContextType>(AppContext);

    React.useEffect(() => {
      const activePageData = {
        pageName,
        headerConfig,
        defaultBack
      };

      setActivePageData((prevState: PageConfig) => ({
        ...prevState,
        ...activePageData
      }));
    }, []);

    return <section className={styles.page}>{children}</section>;
  }
);

Page.displayName = 'Page';

export { Page };
