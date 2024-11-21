import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "./modules/auth/authRoutes";
import AdminRoutes from "./modules/admin/adminRoutes";
import ProtectedRoute from "./modules/admin/components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route
            path="/login/*"
            element={
              <AuthRoutes onLoginSuccess={() => setIsAuthenticated(true)} />
            }
          />
          <Route path="*" element={<Navigate to="login" replace />} />
        </>
      ) : (
        <>
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminRoutes />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </>
      )}
    </Routes>
  );
}

export default App;
