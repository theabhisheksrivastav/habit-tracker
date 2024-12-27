import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setAccessToken, setRefreshToken } from "./store/authSlice";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import HabitPage from "./pages/HabitPage";
import Profile from "./pages/Profile";
import CreateHabit from "./pages/CreateHabit";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user data exists in localStorage and set it to the store
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (user && accessToken && refreshToken) {
      dispatch(setUser(user));
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    }
  }, [dispatch]);

  return (
    <Routes>
      {/* Public Routes */}


      {/* Routes Using AppLayout */}
      <Route element={<AppLayout />}>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/habits"
          element={
            <ProtectedRoute>
              <HabitPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-habit"
          element={
            <ProtectedRoute>
              <CreateHabit />
            </ProtectedRoute>
          }
        />



        <Route path="/" element={<Home />} />


      </Route>
    </Routes>
  );
};

export default App;
