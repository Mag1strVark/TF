import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state/state'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state}/>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())


