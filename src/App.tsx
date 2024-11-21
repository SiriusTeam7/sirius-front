import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/styles.css";
import ChallengesAvailable from "@/modules/home/components/ChallengesAvailables";
import Login from "@/modules/login/components/Login";
import MainLayout from "@/modules/core/components/MainLayout";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="challenges" element={<ChallengesAvailable />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
