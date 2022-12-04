import styled from "styled-components";

export const StyledSectionRegister = styled.section`
        margin: 0 auto;
        max-width: 370px;
        padding: 10px;

        > div{
                display: flex;
                justify-content: space-between;
                padding: 20px 0;

                > h1{
                color: var(--color-primary)
                }

                > a{
                        background-color: var(--color-gray-3);
                        padding: 0 16px;
                        width: 67px;
                        height: 40px;
                        border-radius: 4px;
                        border: 1px solid var(--color-gray-3);

                        font-weight: 600;
                        font-size: 12px;
                        color: var(--color-gray-0);

                        align-items: center;
                        display: flex;
                        justify-content: center;

                        cursor: pointer;
                }
        }  
`