const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const EDIT_TODO = 'todos/EDIT_TODO';
const EDIT_STATUS = 'todos/EDIT_STATUS';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
export const editTodo = (updatedData) => ({
  type: EDIT_TODO,
  payload: updatedData,
});
export const editStatus = (id) => ({
  type: EDIT_STATUS,
  payload: id,
});

const initialState = {
  todos: [
    {
      id: Date.now(),
      title: 'Study Redux 🚀',
      description: 'Hello World',
      isDone: false,
      date: new Date(),
    },
  ],
};

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          {
            ...action.payload,
            id: Date.now(),
            isDone: false,
            date: new Date(),
          },
        ],
      };
    }
    case DELETE_TODO: {
      const id = action.payload;
      return {
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }
    case EDIT_TODO: {
      const { id, description } = action.payload;
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              description,
            };
          }
          return {
            ...todo,
          };
        }),
      };
    }
    case EDIT_STATUS: {
      const id = action.payload;
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }

          return todo;
        }),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
