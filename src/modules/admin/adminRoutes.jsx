import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import Dashboard from "./Dashboard";

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
