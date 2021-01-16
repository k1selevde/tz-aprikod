import {action, decorate, observable} from "mobx";


let defaultTasks = [
    {id: 1, title: 'Прочитать книгу', done: false},
    {id: 2, title: 'Прочитать книгу', done: false},
    {id: 3, title: 'Прочитать книгу', done: false},
    {id: 4, title: 'Прочитать книгу', done: false},
]

class TodoListStore {
    todos: [
        {id: 1, title: "Прочитать книгу", done: false},
        {id: 2, title: 'Прочитать книгу', done: false},
        {id: 3, title: 'Прочитать книгу', done: false},
        {id: 4, title: 'Прочитать книгу', done: false},
    ];

    get activeTasks() {
        return this.tasks.filter(task => !task.done)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    deleteTodo(id) {
        this.todos.filter(todo => todo.id !== id)
    }

    toggleTodo(id) {
        // let currentTodo = this.todos.find(todo => todo.id == id)
        // currentTodo.done = !currentTodo.done
    }
}

TodoListStore = decorate(TodoListStore, {
    tasks: observable,
    addTodo: action,
    deleteTodo: action,
    toggleTodo: action
})

export default new TodoListStore();

