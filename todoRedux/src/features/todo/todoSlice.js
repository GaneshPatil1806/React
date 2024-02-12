import { nanoid, createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'Hello world!',
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        action.payload.id === todo.id ? { ...todo, text: action.payload.text } : todo
      );
    },
  },
});

export const { updateTodo, removeTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;