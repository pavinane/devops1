import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodosAPI, createTodoAPI } from "./todoApi.js";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    return await fetchTodosAPI();
  }
);

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todo) => {
    return await createTodoAPI(todo);
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })

      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export default todoSlice.reducer;