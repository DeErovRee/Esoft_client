import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import UserStore from './store/UserStore';
import TodoListStore from './store/TodoListStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
        user: new UserStore(),
        tasks: new TodoListStore()
      }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
