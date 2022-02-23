import React, { useState } from 'react';
import './style.css';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['リスト１', 'リスト２']);
  const [completeTodos, setCompleteTodos] = useState(['リスト３', 'リスト４']);
  return (
    <>
      <div className='input-area'>
        <input  placeholder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
          <ul>
            {incompleteTodos.map((todo) => {
              return (
                <li key={todo}>
                  <div className='list-row'>
                    <p>{todo}</p>
                    <button>完了</button>
                    <button>削除</button>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <li key={todo}>
                  <div className='list-row'>
                    <p>{todo}</p>
                    <button>戻す</button>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    </>
  );
}