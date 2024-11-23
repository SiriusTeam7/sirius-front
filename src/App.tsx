import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./modules/login/components/Login";
import MainLayout from "@/modules/core/components/MainLayout";

import { ProtectedRoute } from "./modules/login/hoc/withAuth";
import LeaderboardLayout from "./modules/leaderboard/components/LeaderboardLayout";
import ChallengeLayout from "./modules/challenge/components/ChallengeLayout";
import "../src/styles/styles.css";
import ChallengesAvailable from "./modules/home/components/ChallengesAvailables";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/challenges" element={<ChallengesAvailable />} />
        </Route>
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <ChallengeLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardLayout /></ProtectedRoute>} />
        <Route path="*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
