import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { StyledForm } from "../../../styles/form";

export function FormLogin({handleSubmit, submit, register, errors}) {
    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <Input
          type="email"
          id="email"
          label="E-mail "
          placeholder="Digite aqui o seu e-mail"
          register={register("email")}
          errors={
            errors.email && <p className="formError">{errors.email.message}</p>
          }
        />

        <Input
          type="password"
          id="password"
          label="Senha "
          placeholder="Digite aqui a sua senha"
          register={register("password")}
          errors={
            errors.password && (
              <p className="formError">{errors.password.message}</p>
            )
          }
        />

        <button className="buttonForm" type="submit">
          Entrar
        </button>
        <p>Ainda não possui uma conta?</p>
        <Link className="buttonFormGray" to={"/register"}>
          Cadastrar-se
        </Link>
      </StyledForm>
    )
}