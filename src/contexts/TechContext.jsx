import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tech, setTech] = useState([])
  const [idTech, setIdTech] = useState(null);
  const token = localStorage.getItem("@user");

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  async function updateTech(data) {
    try {
      const response = await api.put(`/users/techs/${idTech}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function deleteTech() {
    try {
      const response = await api.delete(`/users/works/${idTech}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider value={{ modalIsOpen, openModal, closeModal, tech, setTech, idTech, setIdTech, updateTech}}>
      {children}
    </TechContext.Provider>
  );
}
