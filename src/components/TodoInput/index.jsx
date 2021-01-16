import React, { useState } from 'react';
import { observer } from 'mobx-react'


import './TodoInput.scss'

@observer
class TodoInput extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: {title: '', filter: 'РАБОТА', done: false}
        }
        this.addTodoHandler = this.addTodoHandler.bind(this)
        this.changeTextareaHandler = this.changeTextareaHandler.bind(this)
        this.changeFilterHandler = this.changeFilterHandler.bind(this)
    }



    changeTextareaHandler(e) {
        this.setState({newTodo: {...this.state.newTodo, title: e.target.value}})
    }


    changeFilterHandler(e) {
        this.setState({newTodo: {...this.state.newTodo, filter: e.target.value}})
    }

    addTodoHandler(e) {
        if (this.state.newTodo.title) {
            this.props.todoStore.addTodo({...this.state.newTodo})
            this.setState({newTodo: {...this.state.newTodo, title: ''}})
        } else {
            alert('Введите задачу')
        }

    }

    render() {
        return (
            <div>
                <div className="todoInput__wrap">
                    <div
                        className="todoInput__top"
                    >
                        <textarea
                        type="text"
                        placeholder="Введите новую задачу"
                        value={this.state.newTodo.title}
                        className="todoInput__text"
                        onChange={(e) => this.changeTextareaHandler(e)}
                        />
                    </div>

                    <div className="todoInput__chooseCategory">
                        <p>Выберите категорию</p>
                        <select
                            className="chooseCategory__select"
                            onChange={(e) => this.changeFilterHandler(e)}
                        >
                            <option selected value="РАБОТА">РАБОТА</option>
                            <option value="УЧЕБА">УЧЕБА</option>
                            <option value="СВОБОДНОЕ ВРЕМЯ">СВОБОДНОЕ ВРЕМЯ</option>
                        </select></div>

                    <div
                        className="todoInput__bottom"
                    >
                        <button
                            className="todoInput__btn btn btn-primary"
                            onClick={this.addTodoHandler}
                        >ДОБАВИТЬ
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}


export default TodoInput;
