import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../modules/auth/authRoutes";
import AdminRoutes from "../modules/admin/adminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
