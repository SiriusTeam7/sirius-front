import "../src/styles/styles.css";
import MainLayout from "./modules/core/components/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./modules/login/components/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
