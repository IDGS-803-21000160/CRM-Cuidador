import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const AuthRoutes = ({ onLoginSuccess }) => (
  <Routes>
    <Route path="/" element={<LoginPage onLoginSuccess={onLoginSuccess} />} />
  </Routes>
);  

export default AuthRoutes;
