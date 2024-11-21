import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import UsersApplications from "./pages/UsersApplications";

const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="aplications" element={<UsersApplications />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
