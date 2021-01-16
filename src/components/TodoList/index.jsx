import React from 'react';
import { observer } from "mobx-react";

import { TodoItem } from "../";

import './TodoList.scss'


@observer
class TodoList extends React.Component {

    componentDidMount() {
        console.log('Todo List: ', this.props.todoStore)
    }

    render() {
        const { todoStore } = this.props;

        return (
            <div className="todoList__wrap">
                <table className="table table-hover todoList__table">
                    <thead>
                    <tr>
                        <th scope="col">Название</th>
                        <th style={{minWidth: '200px'}} scope="col">Категория</th>
                        <th style={{textAlign: 'center'}} scope="col">Сделано</th>
                        <th style={{textAlign: 'center'}} scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todoStore.filteredTodos && Boolean(todoStore.filteredTodos[0]) && todoStore.filteredTodos.map(todo => (
                        <TodoItem key={todo.id} todoStore={todoStore}todo={todo} />
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default TodoList;
