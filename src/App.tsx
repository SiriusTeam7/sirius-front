import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/styles/styles.css'
import MainLayout from './modules/core/components/MainLayout';
import ChallengesAvailable from "./modules/home/components/ChallengesAvailables";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="challenges" element={<ChallengesAvailable />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
