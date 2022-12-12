import { StyledTechListCard } from "./styled";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { StyledFormTech } from "../../FormCreateTech/styled";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../../../contexts/TechContext";

Modal.setAppElement("#root");

export function TechListCard({ tech }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit } = useForm({});
  const { setIdTech, updateTech, deleteTech } = useContext(TechContext);

  function openModal(tech) {
    setModalIsOpen(true);
    setIdTech(tech.id);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function submit(data) {
    updateTech(data);
  }
  return (
    <StyledTechListCard>
      <div>
        <h2>{tech.title}</h2>
      </div>
      <div className="currentEdit">
        <p>{tech.status}</p>
        <button className="buttonEdit" onClick={() => openModal(tech)}>
          <BsPencil />
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="modal-header">
          <h2>Tecnologia Detalhes</h2>
          <button onClick={closeModal}>X</button>
        </div>
        <StyledFormTech onSubmit={handleSubmit(submit)}>
          <input type="text" value={tech.title} disabled />
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <button className="buttonRegister" type="submit">
              Salvar alterações
            </button>
            <button className="buttonDelete" type="button" onClick={deleteTech}>
              Excluir
            </button>
          </div>
        </StyledFormTech>
      </Modal>
    </StyledTechListCard>
  );
}
