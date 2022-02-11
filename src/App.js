import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import UserSitesPage from "./pages/UserSitesPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/privateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute Component={UserSitesPage} />}
        />
        <Route path={"/signin"} element={<SigninPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
