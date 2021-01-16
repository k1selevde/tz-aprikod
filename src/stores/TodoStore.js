import {action, observable, computed } from "mobx";
import uniqid from 'uniqid'

class TodoListStore {

    @observable showUnfulfilled = false

    @observable todos = [
        {id: 1, title: "Прочитать книгу", filter: 'РАБОТА', done: false},
        {id: 2, title: 'Полить цветы', filter: 'СВОБОДНОЕ ВРЕМЯ', done: false},
        {id: 3, title: 'Прогуляться', filter: 'СВОБОДНОЕ ВРЕМЯ', done: true},
        {id: 4, title: 'Сдать долг', filter: 'УЧЕБА', done: false},
    ];

    @computed get filteredTodos() {
        if (this.showUnfulfilled) {
            return this.todos.filter(todo => todo.done == false);
        }
        return this.todos;
    }


    @action
    setTodos(data) {
        this.todos = data;
    }


    @action
    setShowUnfulfilled() {
        this.showUnfulfilled = !this.showUnfulfilled;
    }

    @action
    addTodo(todo) {
        let currentTodos = this.todos
        currentTodos.push({...todo, id: uniqid.time()})
        this.setTodos(currentTodos)
    }


    @action
    deleteTodo(id) {
        let currentTodos = this.todos
        currentTodos = currentTodos.filter(todo => todo.id !== id)
        this.setTodos(currentTodos)
    }


    @action
    toggleTodo(id) {
        let currentTodos = this.todos;
        const index = currentTodos.map(todo => todo.id).indexOf(id);
        currentTodos[index].done = !currentTodos[index].done;
        this.setTodos(currentTodos);
    }
}


export default new TodoListStore();

