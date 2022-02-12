import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { routes } from "./constants/routes";
import ProtectedRoute from "./utils/ProtectedRoute";
import SitesPage from "./pages/SitesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={routes.ROOT}
          element={<ProtectedRoute Component={SitesPage} />}
        />
        <Route path={routes.SIGNIN} element={<SigninPage />} />
        <Route path={routes.SIGNUP} element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
