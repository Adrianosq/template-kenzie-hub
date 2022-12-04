import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "../../styles/form";
import { Input } from "../../components/Input";
import { registerSchema } from "./registerSchema";
import { StyledSectionRegister } from "./style";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export function RegisterPage() {
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  async function registerUser(data) {
    try {
      const response = await api.post("/users", data)
      toast.success("Usuário criado com sucesso!")
      navigate("/login")

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  function submit({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) {
    const data = {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    registerUser(data);
    reset();
  }
  return (
    <StyledSectionRegister>
      <div>
        <h1>Kenzie Hub</h1>
        <Link to={"/login"}>Voltar</Link>
      </div>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h2>Crie a sua conta</h2>
        <p>Rápido e grátis, vamos nessa.</p>
        <Input
          type="text"
          id="name"
          label="Nome "
          placeholder="Digite aqui o seu nome"
          register={register("name")}
          errors={
            errors.name && <p className="formError">{errors.name.message}</p>
          }
        />

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

        <Input
          type="password"
          id="passwordConfirmed"
          label="Confirmar Senha "
          placeholder="Digite novamente sua senha"
          register={register("confirmPassword")}
          errors={
            errors.confirmPassword && (
              <p className="formError">{errors.confirmPassword.message}</p>
            )
          }
        />

        <Input
          type="text"
          id="bio"
          label="Bio "
          placeholder="fale sobre você"
          register={register("bio")}
          errors={
            errors.bio && <p className="formError">{errors.bio.message}</p>
          }
        />

        <Input
          type="text"
          id="contact"
          label="Contato "
          placeholder="Opção de contato"
          register={register("contact")}
          errors={
            errors.contact && (
              <p className="formError">{errors.contact.message}</p>
            )
          }
        />


        <div className="selectFormDiv">
          <label className="labelForm">Selecionar Modulo</label>
          <select className="selectForm" {...register("course_module")}>
            <option value="">Módulo</option>
            <option value="Primeiro Módulo (Introdução ao Frontend)">
              Primeiro Módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo Módulo (Frontend Avançado)">
              Segundo Módulo (Frontend Avançado)
            </option>
            <option value="Primeiro Módulo (Introdução ao Backend)">
              Primeiro Módulo (Introdução ao Backend)
            </option>
            <option value="Primeiro Módulo (Backen Avançado)">
              Primeiro Módulo (Backen Avançado)
            </option>
          </select>
          {errors.course_module && (
            <p className="formError">{errors.course_module.message}</p>
          )}
        </div>

        <button className="buttonForm" type="submit">
          Cadastrar
        </button>
      </StyledForm>
    </StyledSectionRegister>
  );
}
