import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import UserSitesPage from "./pages/UserSitesPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/privateRoute";
import { routes } from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={routes.ROOT}
          element={<ProtectedRoute Component={UserSitesPage} />}
        />
        <Route path={routes.SIGNIN} element={<SigninPage />} />
        <Route path={routes.SIGNUP} element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
