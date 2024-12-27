import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/api";
import { setUser, setAccessToken } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";


const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      const { user, accessToken } = response.data;

      // Update Redux state
      dispatch(setUser(user));
      dispatch(setAccessToken(accessToken));

      alert("Login successful!");
      navigate("/"); // Redirect to dashboard
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
