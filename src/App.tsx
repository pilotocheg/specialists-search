import { HashRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';

import AppRoutes from './routes';

function App() {
  return (
    <HashRouter>
      <AppRoutes />
      <Toaster position="bottom-right" />
    </HashRouter>
  );
}

export default App;
