import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { StyledTechList } from "./styled";
import { TechListCard } from "./TechListCard";

export function TechList(){
    const {user} = useContext(UserContext)
   

    const techData = user.techs
    return(
        <StyledTechList>
            {
                techData.map(tech => <TechListCard key={tech.id} tech={tech} />)
            }
        </StyledTechList>
    )
}