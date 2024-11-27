import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./component/Navbar";
import Login from "./component/Login";

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const location = useLocation();

  if (currentUser) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route for Login */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Navbar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/roles"
          element={
            <ProtectedRoute>
              <Navbar />
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Navigate to="/" replace />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
