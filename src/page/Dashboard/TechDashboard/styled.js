import styled from "styled-components";

export const StyledTechDashboard = styled.div`
    padding: 20px 80px;

    .headerDashboard{
        display: flex;
        justify-content: space-between;
        align-items: center;

    > h2{
        font-weight: 600;
        font-size: 16px;
        color: var(--color-gray-0)
    }

    > button{
        width: 32px;
        height: 32px;
        border-radius: 4px;
        background-color: var(--color-gray-3);
        border: 1px solid var(--color-gray-3);

        color: var(--color-white);
        font-size: 20px;

        cursor: pointer;
    }
    }
    @media(max-width: 700px){
        padding: 20px;
    }
`