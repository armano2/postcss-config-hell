import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Components */
import AppRouter from './AppRouter';
import AppProvider from './AppProvider';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
