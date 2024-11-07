import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import "./index.css";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <AppRoutes />
  </Router>
);
