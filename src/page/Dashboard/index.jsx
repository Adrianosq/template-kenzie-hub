import { TechProvider } from "../../contexts/TechContext";
import { StyledDashboard } from "./styled";
import { TechDashboard } from "./TechDashboard";
import { UserLogado } from "./UserLogado";

export function Dashboard() {
  return (
    <StyledDashboard>
      <UserLogado />
      <TechProvider>
        <TechDashboard />
      </TechProvider>
    </StyledDashboard>
  );
}
