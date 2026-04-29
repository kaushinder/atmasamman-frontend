import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, restore user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("atmasamman_user");
    const token = localStorage.getItem("atmasamman_token");
    if (stored && token) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("atmasamman_user");
        localStorage.removeItem("atmasamman_token");
      }
    }
    setLoading(false);
  }, []);

const signup = async (name, email, password) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json(); // read JSON first

    if (!res.ok) {
      throw new Error(data.message || "Signup failed"); // now has the real message
    }

    if (!data.success) throw new Error(data.message || "Signup failed");

    localStorage.setItem("atmasamman_token", data.token);
    localStorage.setItem("atmasamman_user", JSON.stringify(data.data));
    setCurrentUser(data.data);
    return data;
  } catch (err) {
    console.error("Signup error:", err);
    throw err;
  }
};
  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        // Try to get server error message, fallback to status text
        let msg = "Login failed";
        try {
          const errData = await res.json();
          msg = errData.message || msg;
        } catch {}
        throw new Error(msg);
      }

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Login failed");
      localStorage.setItem("atmasamman_token", data.token);
      localStorage.setItem("atmasamman_user", JSON.stringify(data.data));
      setCurrentUser(data.data);
      return data;
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("atmasamman_token");
    localStorage.removeItem("atmasamman_user");
    setCurrentUser(null);
  };

  const forgotPassword = async (email) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        let msg = "Failed to send reset email";
        try {
          const errData = await res.json();
          msg = errData.message || msg;
        } catch {}
        throw new Error(msg);
      }
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to send reset email");
      return data;
    } catch (err) {
      console.error("Forgot password error:", err);
      throw err;
    }
  };

  const getToken = () => localStorage.getItem("atmasamman_token");

  const authFetch = async (url, options = {}) => {
    const token = getToken();
    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
    });
  };

  const value = { currentUser, loading, signup, login, logout, forgotPassword, getToken, authFetch };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
