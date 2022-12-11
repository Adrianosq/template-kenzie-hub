import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function ProtectRoutes() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null; // pode ser o componente de loading
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
