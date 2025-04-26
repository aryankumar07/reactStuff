import { configureStore } from "@reduxjs/toolkit";
import TodoReducers from '../features/todoSlice'

const TodoStore = configureStore({
  reducer: TodoReducers
})


export default TodoStore

