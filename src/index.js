import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


import TodoStore from './stores/TodoStore'
import TodoApp from './TodoApp'

import './styles/index.scss'



ReactDOM.render(<TodoApp todoStore={TodoStore}/>, document.getElementById('root'));

serviceWorker.unregister();
