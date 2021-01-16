import React from 'react';

import { TodoItem} from "../";

import './TodoList.scss'


const TodoList = () => {
    return (
        <div>
            Here Todo List
            <TodoItem todo={{title: 'er', done: false}} />
        </div>
    );
};

export default TodoList;
