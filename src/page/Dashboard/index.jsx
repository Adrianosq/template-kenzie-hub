import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { StyledDashboard } from "./styled.js";

export function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("@user");
  const [user, setuser] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else{
      async function getUser() {
        try {
          const reponse = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setuser(reponse.data);
        } catch (error) {
          console.log(error);
        }
      }
      getUser();
    } 
  }, []);

  function logout() {
    navigate("/login");
    localStorage.clear();
  }
  return (
    <StyledDashboard>
      <div className="header">
        <h1>Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </div>
      <div className="currentUser">
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </div>
      <div className="warning">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </StyledDashboard>
  );
}
