import React from 'react';
import { observer } from 'mobx-react';
import {ReactComponent as DeleteSvg} from '../../static/icons/delete.svg'



@observer
class TodoItem extends React.Component {
    constructor() {
        super();
        this.toggleDone = this.toggleDone.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    deleteHandler() {
        const { todo } = this.props;
        console.log('delete :', todo.title )
        this.props.todoStore.deleteTodo(todo.id)
    }

    toggleDone() {
        const { todo } = this.props;
        this.props.todoStore.toggleTodo(todo.id)
    }

    render() {
        const { todo } = this.props
        return (
            <tr>
                <td>{todo.title.slice(0,25)}</td>
                <td>{todo.filter}</td>
                <td style={{textAlign: 'center'}}>
                    <input
                        onChange={this.toggleDone}
                        type="checkbox"
                        checked={todo.done}
                    />
                </td>
                <td style={{textAlign: 'center'}}>
                    <DeleteSvg
                        onClick={this.deleteHandler}
                    />
                </td>
            </tr>
        );
    }

};









// const TodoItem = observer(({todo ,todoStore}) => {
//
//     const { deleteTodo } = todoStore
//
//     const deleteHandler = () => {
//         console.log('delete :', todo.title )
//         deleteTodo(todo.id)
//     }
//
//     const toggleDone = () => {
//
//     }
//
//     return (
//             <tr>
//                 <th scope="row">{todo.id}</th>
//                 <td>{todo.title}</td>
//                 <td>{todo.filter}</td>
//                 <td style={{textAlign: 'center'}}>
//                     <input
//                         type="checkbox"
//                         checked={todo.done}
//                     />
//                 </td>
//                 <td style={{textAlign: 'center'}}>
//                     <DeleteSvg
//                         onClick={() => deleteHandler(this)}
//                     />
//                 </td>
//             </tr>
//     );
// });

export default TodoItem;
