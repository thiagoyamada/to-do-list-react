import styled from "styled-components"

import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;
    width: 500px;
    

    ul {
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 15px;
    padding-left: 10px;
    width: 60%;
`

export const Button = styled.button`
    background: #0931BC;
    border-radius: 5px;
    width: 25%;
    height: 40px;
    font-weight: 500;
    font-size: 15px;
    
    color: #ffffff;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${props => props.isFinished ? "#e8ff8b" : "#e4e4e4"};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 10px;
    

    li {
        list-style: none;
    }
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`


export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const Text = styled.h3`
    text-align: center;
`