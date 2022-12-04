import styled from "styled-components";

export const StyledForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        background-color: var(--color-gray-3);

        > h2 {
            font-weight: 700;
            color: var(--color-gray-0);
            font-size: 14px;
            margin-top: 30px;
        }

        > p{
            font-size: 9px;
            font-weight: 400;
            color: var(--color-gray-1)
        }   
        
    .inputForm{
        min-width: 270px;
        height: 48px;
        padding: 0 16px;

        background-color: var(--color-gray-2);
        border: 1px solid var(--color-gray-2);
        border-radius: 4px;

        &::placeholder{
            color: var(--color-gray-1);
            font-weight: 400;
            font-size: 16px;
        }
    }

    .labelForm{
        font-weight: 400;
        font-size: 12px;
        color: var(--color-gray-0);
    }

    .buttonForm{
        width: 270px;
        height: 48px;
        background-color: var(--color-negative);
        border: 1px solid var(--color-negative);
        border-radius: 4px;

        color: var(--color-white);
        font-weight: 500;
        font-size: 16px;
        margin: 30px;
        
        cursor: pointer;
    }

    .buttonFormGray{
        width: 270px;
        height: 48px;
        background-color: var(--color-gray-1);
        border: 1px solid var(--color-gray-1);
        border-radius: 4px;

        color: var(--color-white);
        font-weight: 500;
        font-size: 16px;
        margin: 30px;

        align-items: center;
        justify-content: center;
        display: flex;
        
        cursor: pointer;
    }

    .selectForm{
        display: flex;
        width: 270px;
        height: 48px;
        padding: 0 16px;

        background-color: var(--color-gray-2);
        border: 1px solid var(--color-gray-2);
        border-radius: 4px;

        color: var(--color-gray-1);
        font-weight: 400;
        font-size: 16px;
    }

    .selectForm > option{
        color: var(--color-gray-1);
        font-weight: 400;
        font-size: 16px;

        width: 329px;
        height: 48px;
        padding: 0 16px;
    }

    .formError{
        color: var(--color-negative);
        width: 329px;
    }

    .selectFormDiv{
        height: 48px;
    }
`