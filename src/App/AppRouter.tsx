import * as React from 'react';
import {
  Navigate,
  Route,
  Routes,
  useRoutes,
  useLocation
} from 'react-router-dom';

import { Page } from 'App/components/Page/Page';
import { routes } from 'App/routerConfig';

const AppRouter = () => {
  const location = useLocation();

  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/homepage" state={location.state} />}
        />

        {routes.map(({ pathname, component: Component, ...rest }, key) => (
          <Route
            key={key}
            path={pathname}
            element={
              <Page {...rest}>
                <Component />
              </Page>
            }
          />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;
