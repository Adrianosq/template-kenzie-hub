import { createGlobalStyle } from "styled-components";

export const Modal = createGlobalStyle`

  .modal-overlay{
    background-color: rgba(0,0,0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0 0;
    height: 50px;
    
    > h2{
        font-weight: 700;
        font-size: 14px;
        color: var(--color-gray-0)
    }

    > button{
        font-weight: 600;
        font-size: 16px;
        color: var(--color-gray-1);
        background-color: transparent;
        border: none;
        
        cursor: pointer;
    }
}

.modal-content{
    width: 90%;
    max-width: 500px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--color-gray-3);
}

.buttonEdit{
    background-color: transparent;
    border: none;
  
    cursor: pointer;
    > svg{
        width: 20px;
        height: 20px;
    }
}
`