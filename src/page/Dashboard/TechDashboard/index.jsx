import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { StyledTechDashboard } from "./styled";
import { FormCreateTech } from "./FormCreateTech";
import { TechList } from "./TechList";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function TechDashboard() {
  const { modalIsOpen, openModal, closeModal } = useContext(TechContext);

  return (
    <StyledTechDashboard>
      <div className="headerDashboard">
        <h2>Tecnilogias</h2>
        <button onClick={openModal}>+</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="modal-header">
            <h2>Cadastrar Tecnologias</h2>
            <button onClick={closeModal}>X</button>
          </div>
          <FormCreateTech />
        </Modal>
      </div>

      <TechList />
    </StyledTechDashboard>
  );
}
