import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';

function App() {
  // const isAuthenticated = false; // replace with real logic later (e.g., check token)
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/HomePage" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
