import { createStore } from 'redux';

const ADD_TODO = 'add-todo';
const DELETE_TODO = 'delete-todo';
const EDIT_STATUS = 'edit-status';

const todosLocalStorage = window.localStorage;

const todoReducer = (todos = JSON.parse(todosLocalStorage.getItem('todos')) || [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            todos = [
                { id: Date.now(), todo: action.todo, status: false, date: new Date().toString() },
                ...todos,
            ];
            break;
        }
        case DELETE_TODO: {
            todos = todos.filter((todo) => todo.id !== action.id);
            break;
        }
        case EDIT_STATUS: {
            todos = todos.map((todo) =>
                todo.id === action.id ? { ...todo, status: !todo.status } : todo
            );
            break;
        }
        default: {
            break;
        }
    }
    todosLocalStorage.setItem('todos', JSON.stringify(todos));
    return todos;
};

const store = createStore(todoReducer);

export const actionCreator = {
    addTodo(todo) {
        return {
            type: ADD_TODO,
            todo,
            id: Date.now(),
        };
    },
    deleteTodo(id) {
        return {
            type: DELETE_TODO,
            id: parseInt(id),
        };
    },
    editTodo() {},
    editStatus(id) {
        return {
            type: EDIT_STATUS,
            id: parseInt(id),
        };
    },
};

export default store;
