import React from 'react';
import cn from 'classnames'
import {observer} from 'mobx-react';



const TodoItem = observer(({todo}) => {
    return (
        <div>
            <div>{todo.title}</div>
            <div>{todo.filter}</div>
            <input
                type="checkbox"
                value={todo.done}
            />
        </div>
    );
});

export default TodoItem;
