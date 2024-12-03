import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import UsersApplications from "./pages/UsersApplications";
import Users from "./pages/Users";
import Organizations from "./pages/Organizations";
import Contracts from "./pages/Contracts";
import Notifications from "./pages/Notifications";
import Coments from "./pages/Coments";
import Training from "./pages/Training";
import CaregiverApplications from "./components/CaregiverApplications/CaregiverApplications";
import InfoPersonal from "./components/PersonalInfo/InfoPersonal";
import InfoMedica from "./components/PersonalInfo/InfoMedica";
import DocumentacionCuidador from "./components/PersonalInfo/DocumentacionCuidador";
import FamilyAplications from "./pages/FamilyAplications";

const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="aplications" element={<UsersApplications />} />
      <Route path="users" element={<Users />} />
      <Route path="organizations" element={<Organizations />} />
      <Route path="contracts" element={<Contracts />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="coments" element={<Coments />} />
      <Route path="training" element={<Training />} />
      <Route path="application" element={<UsersApplications />}>
        <Route path="personalInfo" element={<InfoPersonal />} />
        <Route path="medicalInfo" element={<InfoMedica />} />
        <Route path="documentacion" element={<DocumentacionCuidador />} />
      </Route>
      <Route path="applicationFamily" element={<FamilyAplications />}>
        <Route path="personalInfo" element={<InfoPersonal />} />
        <Route path="medicalInfo" element={<InfoMedica />} />
        <Route path="documentacion" element={<DocumentacionCuidador />} />
      </Route>
    </Route>
  </Routes>
);

export default AdminRoutes;
