import { Route, Routes } from 'react-router';

import SearchPage from './pages/search';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
    </Routes>
  );
}

export default AppRoutes;
