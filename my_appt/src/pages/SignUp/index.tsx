import { FieldValues, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import React from 'react'
import { yupResolver } from "@hookForm/resolvers/yup";
import * as yup from "yup";
import { Form, useNavigate } from "react-router-dom";
import {Tittle,DivCardSingUp,DivInputsANDLabelsCard,DivLabels,LabelDesc,DivInputs, Inputs ,ButtonCreateAccount, DivBNTSingIn,ButtonGoToSingIn, DescLogInRoute} from "./style"

interface IResponseData {
    id:string
	name: string;
	email: string;
	password: string;
	contact: string;
	
}

const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório")
    
});

function SignUp() {
 	/*const { } = useContext();*/
	 const navigate = useNavigate();

     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IResponseData>({
           resolver: yupResolver(schema),
      });
	

	 function GoToLogin() {
	  navigate("/LogIn", { replace: true });
	 }
   return(
	
	<DivCardSingUp>
        <Tittle>FAÇA AQUI SEU CADASTRO</Tittle>
		<Form>
		<DivInputsANDLabelsCard>
			<DivLabels>
				<LabelDesc>Nome:</LabelDesc>
                <LabelDesc>Contato</LabelDesc>
                <LabelDesc>Email:</LabelDesc>
                <LabelDesc>Senha:</LabelDesc>
			</DivLabels>
			<DivInputs>
				<Inputs type="text" id="name"></Inputs>
                <Inputs type="text" id="contact"></Inputs>
                <Inputs type="text" id="email"></Inputs>
                <Inputs type="password" id="password"></Inputs>
			</DivInputs>
		</DivInputsANDLabelsCard>
		<ButtonCreateAccount type="submit">Criar Conta</ButtonCreateAccount>
		</Form>
		<DivBNTSingIn>
            <DescLogInRoute>Já tem um conta? Entre:</DescLogInRoute>
			<ButtonGoToSingIn onClick={GoToLogin}>Sing In</ButtonGoToSingIn>
		</DivBNTSingIn>

	</DivCardSingUp>
	
   )

}
export default SignUp;
