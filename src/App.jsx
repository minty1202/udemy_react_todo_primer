import React from 'react';
import './style.css';

export const App = () => {
  return (
    <>
      <div>
        <input />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
          <ul>
            <li>
              <div>
                <p>リスト</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
            <li>
              <div>
                <p>リスト</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          </ul>
      </div>
      <div>
        <p>完了のTODO</p>
          <ul>
            <li>
              <div>
                <p>リスト</p>
                <button>戻す</button>
              </div>
            </li>
            <li>
              <div>
                <p>リスト</p>
                <button>戻す</button>
              </div>
            </li>
          </ul>
      </div>
    </>
  );
}