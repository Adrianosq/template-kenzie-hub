import styled from "styled-components";

export const StyledDashboard = styled.div`

   .header{
      display: flex;
      justify-content: space-between;
      padding: 20px 80px;
      box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

   > h1{
      color: var(--color-primary);
   }

   > button{
      width: 55px;
      height: 32px;

      padding: 0 16px;

      background-color: var(--color-gray-3);
      border-radius: 4px;
      border: 1px solid var(--color-gray-3);

      color: var(--color-gray-0);
      font-size: 12px;
      font-weight: 600;

      cursor: pointer;
   }
   }

   .currentUser{
      display: flex;
      justify-content: space-between;
      padding: 20px 80px;
      box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

      > h2{
         font-size: 18px;
         font-weight: 700;
         color: var(--color-gray-0);
      }

      > p{
         font-size: 18px;
         font-weight: 400;
         color: var(--color-gray-0);
      }
   }

   .warning{
      display: flex;
      flex-direction: column;
      padding: 20px 80px;
      gap: 15px;

      > h2{
         font-size: 18px;
         font-weight: 700;
         color: var(--color-gray-0);
      }

      > p{
         font-size: 16px;
         font-weight: 400;
         color: var(--color-white);
      }
   }

   @media (max-width: 700px){
      .header{
         padding: 20px 20px;
      }
      .currentUser{
         padding: 20px 20px;
         flex-direction: column;
         gap: 15px;
      }
      .warning{
         display: none;
      }
   }
`