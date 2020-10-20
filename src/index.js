import './index.css';
import { createStore } from 'redux';

(function () {
    const $wrapper = document.querySelector('.wrapper');
    const $input = document.querySelector('.todo-input');
    const $list = document.querySelector('.todos');

    const ADD_TODO = 'add-todo';
    const DELETE_TODO = 'delete-todo';

    //addTodo, deleteTodo is returning action object
    const addTodo = (todo) => {
        return {
            type: ADD_TODO,
            todo,
        };
    };

    const deleteTodo = (id) => {
        return {
            type: DELETE_TODO,
            id,
        };
    };

    const todoReducer = (todos = [], action) => {
        switch (action.type) {
            case ADD_TODO: {
                const newTodo = { todo: action.todo, id: Date.now() };
                return [newTodo, ...todos];
            }
            case DELETE_TODO: {
                const filteredTodos = todos.filter((todo) => todo.id !== action.id);
                return filteredTodos;
            }
            default: {
                return todos;
            }
        }
    };

    const store = createStore(todoReducer);

    const dispatchAddTodo = (todo) => {
        store.dispatch(addTodo(todo));
    };

    const dispatchDeleteTodo = (id) => {
        store.dispatch(deleteTodo(id));
    };

    const printList = () => {
        const todos = store.getState();
        $list.innerHTML = todos
            .map(
                (todo) => `
                    <li id=${todo.id}>
                        ${todo.todo}
                        <button>Del</button>
                    </li>`
            )
            .join('');
    };

    store.subscribe(printList);

    const onDelete = (target) => {
        const id = parseInt(target.parentElement.id, 10);
        dispatchDeleteTodo(id);
    };

    const onSubmit = () => {
        const _todo = $input.value;
        dispatchAddTodo(_todo);
        $input.value = '';
    };

    const handleClick = (e) => {
        e.preventDefault();
        switch (e.target.textContent) {
            case 'Add': {
                onSubmit();
            }
            case 'Del': {
                onDelete(e.target);
            }
        }
    };

    $wrapper.addEventListener('click', handleClick);
})();
