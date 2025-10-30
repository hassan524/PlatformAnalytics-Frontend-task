import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformAnalytics from './pages/PlatformAnalytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route - opens Platform Analytics */}
        <Route
          path="/"
          element={<Navigate to="/platform-analytics" replace />}
        />

        {/* Platform Analytics page */}
        <Route path="/platform-analytics" element={<PlatformAnalytics />} />

        {/* 404 - redirect to platform analytics */}
        <Route
          path="*"
          element={<Navigate to="/platform-analytics" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
