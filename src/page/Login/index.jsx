import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { StyledSectionLogin } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FormLogin } from "./FormLogin";

export function Login() {
  const { userLogin } = useContext(UserContext);
  const {register, handleSubmit, formState: { errors }, reset,} = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  
  function submit(data) {
    userLogin(data);
    reset();
  }
  return (
    <StyledSectionLogin>
      <div>
        <h1>Kenzie Hub</h1>
      </div>
      <FormLogin handleSubmit={handleSubmit} submit={submit} register={register} errors={errors}/> 

    </StyledSectionLogin>
  );
}
