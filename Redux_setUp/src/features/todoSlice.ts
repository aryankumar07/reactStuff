import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  todo: string;
}

// Define the type for the initial state
interface InitialState {
  todos: Todo[];
}

// Set the initial state with the correct type
const InitialValue: InitialState = {
  todos: []
}

const TodoSlice = createSlice({
  name: "slice",
  initialState: InitialValue,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        todo: action.payload
      }
      state.todos.push(newTodo)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const {
  addTodo,
  removeTodo
} = TodoSlice.actions

export default TodoSlice.reducer

