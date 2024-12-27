import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setAccessToken } from "../store/authSlice";
import { loginUser } from "../utils/api";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      // Call loginUser API
      const response = await loginUser({ email, password });

      // Update Redux store with user and token
      dispatch(setUser(response.data.user));
      dispatch(setAccessToken(response.data.accessToken));

      // Optionally redirect to dashboard or handle post-login logic
      console.log("Login successful:", response.data);
    } catch (err: any) {
      // Handle errors (e.g., invalid credentials)
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
