import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
