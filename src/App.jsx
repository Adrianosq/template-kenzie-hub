import { GlobalStyled } from "./styles/globalStyles";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";
import { Modal } from "./styles/modal";

export function App() {
  return (
    <>
      <GlobalStyled />
      <Modal />
      <UserProvider>
        <Routes />
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
