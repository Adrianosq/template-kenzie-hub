import { createContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@user");

      if (!token) {
        setLoading(false);
        return;
      } else {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          setUser(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    }
    loadUser();
  }, [user]);

  async function userLogin(data) {
    try {
      const reponse = await api.post("/sessions", data);

      const { token, user: userResponse } = reponse.data;

      setUser(userResponse);
      localStorage.setItem("@user", token);

      toast.success("Usuário logado com sucesso!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <UserContext.Provider value={{ userLogin, user, loading}}>
      {children}
    </UserContext.Provider>
  );
}
