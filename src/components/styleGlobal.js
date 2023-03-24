import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    }

    body{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(2,35,73,1) 50%, rgba(0,0,0,1) 100%);
    }

    `;
export const Container = styled.section`
    height: 99vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Formulario = styled.form`
    height: 72vh;
    width: 30vw;

    h1{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        font-size: 2.5em;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: white;
    }

    @media(max-width: 700px){
        width: 80vw;
        height: 78vh;
        


        h1{
            width: 78.5vw;
            font-size: 3em;
        }
    }
    
`;

export const addLista = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;


    .AddTarefas{
        height: 6.8vh;
        width: 3vw;
        background-color: transparent;
        border: none;
        font-size: 1.8em;
        color: white;
        transition: 0.5s;

        &:hover{
            transform: scale(1.2);
                cursor: pointer;
        }
    }

    .EntradaTarefas{
        height: 6vh;
        width: 22vw;
        padding: 2px 8px;
        background: linear-gradient(#fff, #fff) padding-box,
            linear-gradient(45deg, slateblue, coral) border-box;
        border: 2px solid transparent;
        border-radius: 50px;
        font-size:1em
        
    }

    .LimparTarefas{
        height: 7vh;
        width: 4vw;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1.67em;
        transition: 0.5s;

        &:hover{
            transform: scale(1.10);
            cursor: pointer;
        }
    }

    @media(max-width: 700px){
        .AddTarefas{
            height: 7.5vh;
            width: 12vw;
        }

        .EntradaTarefas{
            width: 50vw;
        }

        .LimparTarefas{
            height: 7.5vh;
            width: 12vw;
        }

    }
`;

export const Lista = styled.ol`
    height: 42.5vh;
    width: 26.6vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 700px){
        width: 67.8vw;
    }

`;

export const ItensLista = styled.div`
    height: 6vh;
    width: 27vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 42px;
    margin-bottom: 7px;
    background-color: #F0FFFF;
    background: linear-gradient(#fff, #fff) padding-box,
        linear-gradient(45deg, slateblue, coral) border-box;
    border: 3px solid transparent;
    border-radius: 50px;

    .Checkbox{
        height: 25px;
        width: 30px;
        position: relative;
        top: 0vh;
        right: -0.5vw;
        transition: 0.5s;

        &:hover{
            transform: scale(1.10);
            cursor: pointer;
        }
    }

    .Tarefa{
        height: 5vh;
        width: 19vw;
        position: relative;
        top: 0.2vh;
        right: -1vw;
        font-size: 1.15em;
    }   

    .Delete{
        
        height: 5vh;
        width: 2vw;
        position: relative;
        top: 0.3vh;
        right: -1.7vw;
        background: transparent;
        border: none;
        font-size: 1.5em;
        transition: 0.5s;

        &:hover{
            transform: scale(1.2);
            cursor: pointer;
        }
}

    input:checked + label{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-decoration: line-through red;
        font-weight: 600;
        color: red;
    }

    @media(max-width: 700px){
        height: 6vh;
        width: 67.8vw;
        padding-left: 5px;
        border: solid greenyellow;
        }

        .Tarefa{
            width: 40vw;
            font-size: 1.3em;
        }

        .Delete{
            width: 15vw;
        }
`;
