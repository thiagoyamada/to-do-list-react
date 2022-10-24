import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


import { Container, ToDoList, Input, Button, ListItem, Check, Trash, Text } from './style.js'

function App() {

  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState("")

  function inputChange(event) {

    setInputTask(event.target.value)
  }

  function buttonClick() {
    if(inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
   
  }

  function finalizarTarefa(id) {
    
    const newList = list.map( item => (
      item.id == id ? { ...item, finished: !item.finished} : item
    ))

    setList(newList)
  }

  function excluirTarefa(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonClick}>Adicionar</Button>

        <ul>
          {
          list.length > 0 ? (

            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={ () => finalizarTarefa(item.id)}/>
                <li>{item.task}</li>
                <Trash onClick={ () => excluirTarefa(item.id)} />
              </ListItem>
            ))
            ) : (
              <Text>Não há itens na lista</Text>
            )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
