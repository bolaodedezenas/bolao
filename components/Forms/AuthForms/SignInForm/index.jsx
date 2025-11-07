"user client";

import { useRef, useState } from "react";
// components
import FormLayout from "@/components/Forms/FormLayout";
import Label from "@/components/Label";
import InputUi from "@/components/InputUi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import SignInButton from "@/components/Btns/SignInButton";
import { FiEye } from "react-icons/fi";
import GoogleButton from "@/components/Btns/GoogleButton";
//icons
import { FaAward } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function SignInForm({ onGoogleLogin, onEmailLogin,  visible }) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(true);

  return (
    <FormLayout visible={visible}>
        <form onSubmit={(e) => onEmailLogin(e)} className="w-full flex flex-col items-center">
            <FaAward className=" text-[rgb(var(--icon))]  text-[5rem] mb-2" />
            <h1 className="text-[rgb(var(--text-title))] text-[1.6rem] font-bold">Bem-vindo de volta</h1>
            <p className=" text-[1rem] text-center text-[rgb(var(--text-paragraph))]">Entre na sua conta da loteria e tente a sorte!</p>
            <div className="w-full  mt-8">
                <Label id="email">Email</Label>
                <div 
                    onClick={() => emailRef.current?.focus()}
                    className="flex items-center gap-2 bg-[#f1f1f1] pl-3 pr-3 mb-4 cursor-pointer"
                >
                    <MdOutlineMailOutline className="text-gray-400 text-3xl" />
                    <InputUi 
                        ref={emailRef} 
                        id="email" 
                        type="email" 
                        placeholder="Email@example.com" 
                        autocomplete="email" 
                        required
                    />
                </div>
                <Label id="password">Senha</Label>
                <div 
                    onClick={() => passwordRef.current?.focus()}
                    className="flex items-center gap-2 bg-[#f1f1f1] pl-3 pr-3 mb-1 cursor-pointer "
                >
                    <IoLockClosedOutline className="text-gray-400 text-3xl" />
                    <InputUi 
                        ref={passwordRef} 
                        id="password" 
                        type={showPassword ? "password" : "text"} 
                        placeholder="Digite sua senha" 
                        autocomplete="new-password"
                        required
                    />
                    {showPassword ? 
                        <FiEyeOff onClick={(e) => {e.stopPropagation(); setShowPassword(false)}}  className=" 
                        text-[rgb(var(--icon-secundary))] hover:text-[rgb(var(--icon-hover))] text-2xl cursor-pointer" /> 
                        :
                        <FiEye onClick={(e) => {e.stopPropagation(); setShowPassword(true)}} className="
                        text-[rgb(var(--icon-secundary))] hover:text-[rgb(var(--icon-hover))] text-2xl cursor-pointer"  />
                    }
                </div>
            </div>
            <p className="text-[rgb(var(--text-links))] text-[1.1rem] w-full text-right cursor-pointer hover:underline mb-1.5">Esqueceu a senha?</p>
            <SignInButton  text="Entrar"/>
            <p className="text-[rgb(var(--text-paragraph))] text-[0.9rem] mb-1.5">OU CONTINUAR COM</p>
            <GoogleButton onClick={() => {onGoogleLogin()}} />
            <p className="text-[rgb(var(--text-paragraph))] text-[1rem] text-center mt-4">Não tem uma conta? <span className="text-[rgb(var(--text-links))] cursor-pointer hover:underline">Cadastre-se agora</span></p>
            <p className="text-[rgb(var(--text-paragraph))] text-[1rem] text-center mt-2">Seus números da sorte estão te esperando! </p>
        </form>
    </FormLayout>
  );
}