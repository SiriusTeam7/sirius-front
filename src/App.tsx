import "../src/styles/styles.css";
import MainLayout from "./modules/core/components/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./modules/login/components/Login";
import { ProtectedRoute } from "./modules/login/hoc/withAuth";
import LeaderboardLayout from "./modules/leaderboard/components/LeaderboardLayout";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardLayout /></ProtectedRoute>} />
        <Route path="*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
