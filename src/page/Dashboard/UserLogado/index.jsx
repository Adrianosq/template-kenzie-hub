import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";



export function UserLogado() {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
  
    function logout() {
      navigate("/login");
      localStorage.clear();
    }
  return (
    <>
      <div className="header">
        <h1>Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </div>
      <div className="currentUser">
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </div>
    </>
  );
}
