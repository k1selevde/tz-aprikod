import React from 'react';
import {TodoInput, TodoList} from './components'

const TodoApp = ({todoStore}) => {

    return (
        <div className="app__outer">
            <div className="app__container">
                <h3>TZ-TODO</h3>
                <TodoInput />
                <TodoList />
            </div>
        </div>
    );
};

export default TodoApp;
