import React, { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {DivLabels, DivInputs, DivCardLogIn,Tittle, DivInputsANDLabels,Labels,InputsLogIn,DivBNTLogIn,BntLogIn,DivGoToSignUp,DescGoToSignUp,BntSignUp} from "./style";



interface IResponseData {
	email: string;
	password: string;
}

const schema = yup.object({
	email: yup.string().required("E-mail obrigátorio").email("E-mail inválido"),
	password: yup.string().required("Senha obrigatória"),
});

function LogIn() {
	

	const navigate = useNavigate();

	function GoToSignUp() {
		navigate("/SignUp");
	}

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IResponseData>({
		resolver: yupResolver(schema),
	});

    return (
        <>
        <DivCardLogIn>
            <Tittle>ENTRAR</Tittle>
            <DivInputsANDLabels>
                <form>
                  <DivLabels>
                    <Labels>Email:</Labels>
                    <Labels>Senha:</Labels>
                  </DivLabels>
                  <DivInputs>
                    <InputsLogIn type="text" id="email"></InputsLogIn>
                    <InputsLogIn type="password" id="password"></InputsLogIn>
                  </DivInputs>
                  <DivBNTLogIn>
                    <BntLogIn type="submit">Entrar</BntLogIn>
                  </DivBNTLogIn>
                </form>
            </DivInputsANDLabels>
            <DivGoToSignUp>
                <DescGoToSignUp>Ainda não tem uma conta? Cadastre-se</DescGoToSignUp>
                <BntSignUp onClick={GoToSignUp}>SignUp</BntSignUp>
            </DivGoToSignUp>
        </DivCardLogIn>
        </>
    )

}
export default LogIn
    
