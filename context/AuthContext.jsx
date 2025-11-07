"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/libs/firebase/FirebaseConfig";
import { loginWithGoogle, logout } from "@/libs/firebase/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
      setTimeout(() => setLoading(false), 2000);
    });
    return () => unsubscribe();
  }, []);

  const handleLoginWithGoogle = async () => {
    const { user, error } = await loginWithGoogle();
    if (error) return { error };
    setUser(user); // atualiza o state do contexto
    
    return { user };
  };

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setUser(null); // atualiza o state do contexto setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, setLoading, handleLoginWithGoogle, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
