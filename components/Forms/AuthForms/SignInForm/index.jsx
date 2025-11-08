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
import Icon from "@/components/Icon";

export default function SignInForm({ onGoogleLogin, onEmailLogin,  visible }) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(true);

  return (
    <FormLayout visible={visible}>
        <form onSubmit={(e) => onEmailLogin(e)} className="w-full flex flex-col items-center pt-4 pb-5">
            <Icon 
                className="rounded-full "
                name="account_circle" 
                size={50} 
                color="rgb(var(--icon))" 
            />
            <h1 className="text-[rgb(var(--text-title))] text-[1.2rem] font-bold">Acesso ao Painel</h1>
            <p className=" text-[1rem] text-center text-[rgb(var(--text-paragraph))] font-normal">Entre na sua conta com seus dados abaixo:</p>
            <div className="w-[80%] mt-8">
                
                <div 
                    onClick={() => emailRef.current?.focus()}
                    className="flex items-center justify-center  bg-[rgb(var(--input-bg))] rounded-[5px] mb-4 cursor-pointer flex-col h-13 position: relative pl-4"
                >
                    <Label id="email">Email</Label>
                    <InputUi 
                        ref={emailRef} 
                        id="email" 
                        type="email" 
                        placeholder="Email@example.com" 
                        autocomplete="email" 
                        required
                    />
                </div>
                
                <div 
                    onClick={() => passwordRef.current?.focus()}
                    className="flex items-center justify-center  bg-[rgb(var(--input-bg))] rounded-[5px] cursor-pointer flex-col h-13 position: relative pl-4"
                >
                    <Label id="password">Senha</Label>
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
                        text-[rgb(var(--icon-secundary))] hover:text-[rgb(var(--icon-hover))] text-[1.2rem]  cursor-pointer position: absolute right-4" /> 
                        :
                        <FiEye onClick={(e) => {e.stopPropagation(); setShowPassword(true)}} className="
                        text-[rgb(var(--icon-secundary))] hover:text-[rgb(var(--icon-hover))] text-[1.2rem] cursor-pointer position: absolute right-4"  />
                    }
                </div>

            </div>
            <p className="text-[rgb(var(--text))] text-[0.9rem] w-full text-center cursor-pointer hover:underline mb-3.5 mt-3 italic font-medium">Esqueceu a senha?</p>
            <div className="w-[80%] ">
                <SignInButton  text="Entrar"/>
            </div>
            <p className="text-[rgb(var(--text))] text-[0.9rem] font-medium text-center mb-1.5">OU CONTINUAR COM</p>
            <div className="w-[80%] ">
                <GoogleButton onClick={() => {onGoogleLogin()}} />
            </div>
            <p className="text-[rgb(var(--text))] text-[0.9rem] text-center mt-4">Não tem uma conta? <span className="text-[rgb(var(--text-links))] cursor-pointer hover:underline">Cadastre-se agora</span></p>
        </form>
    </FormLayout>
  );
}