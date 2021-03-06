import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import markdownApp from './reducers';
import './index.css';
import App from './components/App';

let store = createStore(markdownApp);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
