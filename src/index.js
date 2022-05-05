import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

import TodoApp from './components/TodoApp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoApp />
        </Provider>
    </React.StrictMode>
);

