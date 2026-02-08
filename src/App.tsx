import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';

import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
