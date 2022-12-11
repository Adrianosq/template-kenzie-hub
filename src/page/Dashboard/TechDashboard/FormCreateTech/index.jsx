import { useForm } from "react-hook-form";
import { StyledFormTech } from "./styled";
import { api } from "../../../../services/api";
import { useContext } from "react";
import { toast } from "react-toastify";
import { TechContext } from "../../../../contexts/TechContext";

export function FormCreateTech() {
  const { setTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm({});

  async function registerTech(data) {
    try {
      const token = localStorage.getItem("@user");
      const response = await api.post("/users/techs", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error)
    }
  }

  function submit(data) {
    registerTech(data);
  }

  return (
    <StyledFormTech onSubmit={handleSubmit(submit)}>
      <label htmlFor="">Nome</label>
      <input
        type="text"
        placeholder="Nome da tecnologia"
        {...register("title")}
      />
      <label htmlFor="">Selecionar status</label>
      <select {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <div>
        <button className="buttonRegister">Cadastrar Tecnologia</button>
      </div>
    </StyledFormTech>
  );
}
