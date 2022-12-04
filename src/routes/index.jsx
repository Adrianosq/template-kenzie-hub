import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../page/Dashboard";
import { Login } from "../page/Login";
import { RegisterPage } from "../page/Register";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
