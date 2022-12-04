import { Input } from "../../components/Input";
import { StyledForm } from "../../styles/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { StyledSectionLogin } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api"
import { toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  async function userLogin(data){
    try {
      const reponse = await api.post("/sessions", data)
      localStorage.setItem("@user", reponse.data.token)
      toast.success("Usuário logado com sucesso!")
      setTimeout(() => {
        navigate("/dashboard")
      }, 3000)
      
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }
  function submit(data) {
    userLogin(data)
    reset()
  }
  return (
    <StyledSectionLogin>
      <div>
        <h1>Kenzie Hub</h1>
      </div>

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
        <Link className="buttonFormGray" to={"/register"}>Cadastrar-se</Link>
      </StyledForm>
    </StyledSectionLogin>
  );
}
