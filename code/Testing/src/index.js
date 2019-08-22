import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './ConnectedApp'

ReactDOM.render(
    <Provider store={store}>
        <App name="some name"/>
    </Provider>, document.getElementById('root'));
