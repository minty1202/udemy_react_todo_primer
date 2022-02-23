import React, { useState } from 'react';
import './style.css';

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
      <div className='input-area'>
        <input  placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div className='list-row'>
                    <p>{todo}</p>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div className='list-row'>
                    <p>{todo}</p>
                    <button onClick={() => onClickBack(index)}>戻す</button>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    </>
  );
}