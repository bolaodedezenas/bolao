"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import SignUpForm from "@/components/Forms/AuthForms/SignUpForm";



export default function LoginPage() {
  const router = useRouter();
  const { user, loading , setLoading, handleLoginWithGoogle } = useAuth(); // pega as funções do contexto
  const [visible, setVisible] = useState(false);

   useEffect(() => {
    if (user) {
      router.replace("/"); // usuário já logado vai para raiz
    }
  }, [user, router]);

   if (loading) return  <Loading />;

   // Login com Google
  const onGoogleLogin = async () => {
    const { user, error } = await handleLoginWithGoogle();
    if (error) return setError("Erro ao entrar com Google."); setVisible(false);
    if (user) {
      setLoading(true);
      router.push("/"); // redireciona para a página raiz
    }
  };


  return (
    <div className="
      min-h-screen 
      flex items-center justify-center flex-col
      bg-gradient-to-t from-[rgb(var(--background-secundary))] to-[rgb(var(--background))]
      p-4
      "
    >
      <SignUpForm visible={visible} setVisible={setVisible} onGoogleLogin={onGoogleLogin}  />
    </div>
  );
}
