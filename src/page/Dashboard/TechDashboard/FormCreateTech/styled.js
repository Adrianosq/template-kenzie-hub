import styled from "styled-components";

export const StyledFormTech = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    
    > div{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > label{
        font-weight: 400;
        font-size: 12px;
        color: var(--color-gray-0)
    }

    > input{
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

    > select{
         min-width: 270px;
        height: 48px;
        padding: 0 16px;

        background-color: var(--color-gray-2);
        border: 1px solid var(--color-gray-2);
        border-radius: 4px;
    }
    
    .buttonRegister{
        width: 270px;
        height: 48px;
        background-color: var(--color-negative);
        border: 1px solid var(--color-negative);
        border-radius: 4px;

        color: var(--color-white);
        font-weight: 500;
        font-size: 16px;
        
        
        cursor: pointer;
    }

    .buttonDelete{
        background-color: var(--color-gray-1);
        width: 78px;
        height: 48px;
        border: 1px solid var(--color-gray-1);
        border-radius: 4px;
        margin-left: 20px;
        
        cursor: pointer;
    }
`