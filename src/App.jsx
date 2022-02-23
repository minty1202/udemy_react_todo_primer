import React, { useState } from 'react';
import './style.css';
import { InputTodo } from './component/InputTodo';
import { IncompleteTodos } from './component/IncompleteTodos';
import { CompleteTodos } from './component/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const deleteTodos = (index, todos, setTodos) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const onClickDelete = (index) => {
    deleteTodos(index, incompleteTodos, setIncompleteTodos)
  };

  const addTodos = (todos, newTodo, setTodos) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos)
  };

  const onClickComplete = (index) => {
    deleteTodos(index, incompleteTodos, setIncompleteTodos)
    addTodos(completeTodos, incompleteTodos[index], setCompleteTodos)
  };

  const onClickBack = (index) => {
    deleteTodos(index, completeTodos, setCompleteTodos)
    addTodos(incompleteTodos, completeTodos[index], setIncompleteTodos)
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{color: 'red', marginLeft: '15px'}}>
          登録できるTODOは5個までやで！消化して！
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
      />
    </>
  );
}