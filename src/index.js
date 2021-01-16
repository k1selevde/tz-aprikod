import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


import TodoStore from './stores/TodoStore'
import TodoApp from './TodoApp'

import './styles/index.scss'




// const counterState = observable({
//     count: 0,
// })
//
// counterState.increment = function() {
//     this.count++
// }
//
// counterState.decrement = function() {
//     this.count--
// }


// @observer class TodoApp extends Component {
//
//  handleIncrement = () => { this.props.store.increment()}
//  handleDecrement = () => { this.props.store.decrement()}
//
//   render() {
//     return (
//       <div className="TodoApp">
//         <DevTools />
//
//       </div>
//     );
//   }
// }

ReactDOM.render(<TodoApp todoStore={TodoStore}/>, document.getElementById('root'));

serviceWorker.unregister();
