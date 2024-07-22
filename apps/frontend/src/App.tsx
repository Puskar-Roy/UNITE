import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/homepage/Home";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import ProfileSetup from "./components/ProfileSetup";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/Forgot-Password";
import OTP from "./components/auth/OTP";
import { ThemeProvider } from "./context/ThemeCOntext";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const { state } = useAuthContext();
  console.log(state);
  
  return (
    <>
      
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={state.user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!state.user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!state.user ? <Register /> : <Navigate to="/" />} />
            <Route path="/profile" element={state.user ? <ProfileSetup /> : <Navigate to="/login" />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp/:userId" element={<OTP />} />
            <Route path="/contact" element={state.user ? <Contact /> : <Navigate to="/login" />} />
          </Routes>
        </ThemeProvider>
        <Footer />
      
    </>
  );
}

export default App;
