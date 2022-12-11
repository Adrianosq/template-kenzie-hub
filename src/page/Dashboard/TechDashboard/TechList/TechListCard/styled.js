import styled from "styled-components";

export const StyledTechListCard = styled.li`
    display: flex;
    background-color: var(--color-gray-4);
    padding: 12px;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;

    > div > h2{
        font-weight: 700;
        font-size: 14px;
        color: var(--color-gray-0)
    }

    .currentEdit{
        display: flex;
        gap: 15px;
        align-items: center;

        > p {
            font-weight: 400;
            font-size: 12px;
            color: var(--color-gray-1)
        }
    }
`