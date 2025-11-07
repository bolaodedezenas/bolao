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




export default function SignInForm({ onGoogleLogin, onEmailLogin  }) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [showPassword, setShowPassword] = useState(true);

  return (
    <FormLayout>
        <form onSubmit={(e) => onEmailLogin(e)} className="w-full flex flex-col items-center  gap-2 ">
            <FaAward className=" text-[var(--cornflower-blue-700)]  text-[5rem] mb-2" />
            <h3 className="text-[var(--cornflower-blue-600)] text-[1.6rem] font-light">Bem-vindo de volta</h3>
            <p className=" text-[1rem] text-center text-neutral-500">Entre na sua conta da loteria e tente a sorte!</p>
            <div className="w-full  mt-8">
                <Label id="email">Email</Label>
                <div 
                    onClick={() => emailRef.current?.focus()}
                    className="flex items-center gap-2 bg-[#f1f1f17a] pl-3 pr-3 mb-4 cursor-pointer"
                >
                    <MdOutlineMailOutline className="text-gray-400 text-3xl" />
                    <InputUi ref={emailRef} id="email" type="email" placeholder="Email@example.com"/>
                </div>
                <Label id="password">Senha</Label>
                <div 
                    onClick={() => passwordRef.current?.focus()}
                    className="flex items-center gap-2 bg-[#f1f1f17a] pl-3 pr-3 mb-1 cursor-pointer "
                >
                    <IoLockClosedOutline className="text-gray-400 text-3xl" />
                    <InputUi ref={passwordRef} id="password" type={showPassword ? "password" : "text"} placeholder="Digite sua senha"/>
                    {showPassword ? 
                        <FiEyeOff onClick={(e) => {e.stopPropagation(); setShowPassword(false)}}  className="text-gray-400 hover:text-[var(--cornflower-blue-600)] text-2xl cursor-pointer" /> 
                        :
                        <FiEye onClick={(e) => {e.stopPropagation(); setShowPassword(true)}} className="text-gray-400 hover:text-[var(--cornflower-blue-600)] text-2xl cursor-pointer" />
                    }
                </div>
            </div>
            <p className="text-[var(--cornflower-blue-600)] text-[1.1rem] w-full text-right cursor-pointer hover:underline">Esqueceu a senha?</p>
            <SignInButton  text="Entrar"/>
            <p className="text-gray-500 text-[0.9rem]">OU CONTINUAR COM</p>
            <GoogleButton onClick={() => {onGoogleLogin()}} />
            <p className="text-gray-600 text-[1rem] text-center mt-4">Não tem uma conta? <span className="text-[var(--cornflower-blue-600)] cursor-pointer hover:underline">Cadastre-se agora</span></p>
            <p className="text-gray-600 text-[1rem] text-center mt-2">Seus números da sorte estão te esperando! </p>
        </form>
    </FormLayout>
  );
}