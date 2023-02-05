import { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from 'react-hook-form';
import React from 'react'
import { yupResolver } from "@hookForm/resolvers/yup";
import * as yup from "yup";
import { Form, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {DivCardSingUp,DivInputsANDLabelsCard,DivLabels,LabelDesc,DivInputs, Inputs ,ButtonCreateAccount, DivBNTSingIn,ButtonGoToSingIn } from "./style"

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
		<Form>
		<DivInputsANDLabelsCard>
			<DivLabels>
				<LabelDesc>

				</LabelDesc>
			</DivLabels>
			<DivInputs>
				<Inputs>
				</Inputs>
			</DivInputs>
		</DivInputsANDLabelsCard>
		<ButtonCreateAccount>Criar Conta</ButtonCreateAccount>
		</Form>
		<DivBNTSingIn>
			<ButtonGoToSingIn>Sing In</ButtonGoToSingIn>
		</DivBNTSingIn>

	</DivCardSingUp>
	
   )

}
export default SignUp;
