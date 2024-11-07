import { Route, Routes } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import LoginPage from "./LoginPage";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </AuthLayout>
  );
};

export default AuthRoutes;
