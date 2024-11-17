import '../src/styles/styles.css'
import MainLayout from './modules/core/components/MainLayout';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from './modules/login/login';
const App = () => {

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
  };

  const AuthRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return isAuthenticated ? <Navigate to="/" /> : <>{children}</>;
  };

  return (
    <Router>
      <Routes>
      <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" />} // Redirige rutas no especificadas
        />
      </Routes>
    </Router>

  );
};

export default App;
