import { createStore } from 'redux';

const ADD_TODO = 'add-todo';
const DELETE_TODO = 'delete-todo';
const EDIT_TODO = 'edit-todo';

const todoReducer = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [];
        }
        case DELETE_TODO: {
            return [];
        }
        case EDIT_TODO: {
            return [];
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
            id,
        };
    },
    editTodo() {},
};

export default store;
