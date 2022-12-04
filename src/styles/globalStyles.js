import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
     * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: #000000;
  }

  html{
    background-color: var(--color-gray-4);
  }
  :root{
    --color-primary: #FF577F;
    --color-primayr-50: #FF427F;
    --color-secondary: #EB5757;

    --color-gray-4: #121214;
    --color-gray-3: #212529;
    --color-gray-2: #343B41;
    --color-gray-1: #868E96;
    --color-gray-0: #F8F9FA;
    --color-white: #FFFFFF;
    
    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
  }
`