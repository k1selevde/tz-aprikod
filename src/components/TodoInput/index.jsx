import React from 'react';

import './TodoInput.scss'


const TodoInput = () => {
    return (
        <div>
            <div className="todoInput__wrap">
                <textarea
                    type="text"
                    className="todoInput__text"
                />
                <select

                    name=""
                    id=""
                >
                    <option value="1">РАБОТА</option>
                    <option value="1">УЧЕБА</option>
                    <option value="1">СВОБОДНОЕ ВРЕМЯ</option>
                </select>

                <button>ДОБАВИТЬ</button>
            </div>
        </div>
    );
};

export default TodoInput;
