import React from 'react';
import DevTools from "mobx-react-devtools";
import { observer } from "mobx-react";

import {TodoInput, TodoList, Filter} from './components'


@observer
class TodoApp extends React.Component {

    render() {
        const { todoStore } = this.props;
        return (
            <div className="app__outer">
                {/*<DevTools />*/}
                <div className="app__container">
                    <h3 className="app__title">TZ-TODO</h3>
                    <TodoInput todoStore={todoStore} />
                    <Filter todoStore={todoStore}/>
                    <TodoList todoStore={todoStore} />
                </div>
            </div>
        );
    }

};

export default TodoApp;
