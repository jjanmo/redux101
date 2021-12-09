// actions
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const EDIT_STATUS = 'todos/EDIT_STATUS';

// action creator
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
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
          },
        ],
      };
    }
    case DELETE_TODO: {
      return;
    }
    case EDIT_STATUS: {
      return;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
