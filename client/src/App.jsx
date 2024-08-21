import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginSignUp/LoginPage";
import SignUpPage from "./components/LoginSignUp/SignUpPage";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./components/UserProfile/UserProfile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profilePage" element={<UserProfile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
