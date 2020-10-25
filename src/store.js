import { createStore } from 'redux';

const ADD_TODO = 'add-todo';
const DELETE_TODO = 'delete-todo';
const EDIT_TODO = 'edit-todo';
const EDIT_STATUS = 'edit-status';

const todoReducer = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                { id: Date.now(), todo: action.todo, status: false, date: new Date().toString() },
                ...todos,
            ];
        }
        case DELETE_TODO: {
            return todos.filter((todo) => todo.id !== action.id);
        }
        case EDIT_TODO: {
            return [];
        }
        case EDIT_STATUS: {
            const filteredTodo = todos.filter((todo) => todo.id === action.id)[0];
            filteredTodo.status = !filteredTodo.status;
            return todos;
        }
        default: {
            return todos;
        }
    }
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
