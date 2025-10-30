import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformAnalytics from './pages/PlatformAnalytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/platform-analytics" replace />}
        />

        <Route path="/platform-analytics" element={<PlatformAnalytics />} />

        <Route
          path="*"
          element={<Navigate to="/platform-analytics" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
