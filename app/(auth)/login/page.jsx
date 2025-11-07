"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import SignInForm from "@/components/Forms/AuthForms/SignInForm";


export default function LoginPage() {

  const router = useRouter();
  const { handleEmailLogin, handleLoginWithGoogle, user, loading } = useAuth(); // pega as funções do contexto

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



   useEffect(() => {
    if (!loading && user) {
      router.replace("/"); // usuário já logado vai para raiz
    }
  }, [user, loading, router]);

  if (loading || user) return  <Loading />;

  // Login com email e senha
  const onEmailLogin = async (e) => {
    e.preventDefault();
    // setError("");

    // const { user, error } = await handleEmailLogin(email, password);
    // if (error) return setError("Email ou senha inválidos.");
    // alert(`Login realizado! Bem-vindo, ${user.displayName || user.email}`);
    // router.push("/dashboard")
  };

  // Login com Google
  const onGoogleLogin = async (e) => {
    setError("");
    const { user, error } = await handleLoginWithGoogle();
    if (error) return setError("Erro ao entrar com Google.");
    // Exemplo dentro do onEmailLogin ou onGoogleLogin
    if (user) {
      router.push("/"); // redireciona para a página raiz
    }
    // router.push("/dashboard")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2]  sm:px-4 py-4">
      <SignInForm onGoogleLogin={onGoogleLogin} onEmailLogin={onEmailLogin} />
    </div>
  );
}
