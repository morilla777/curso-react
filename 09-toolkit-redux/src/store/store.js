
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/counterSlice';
import pokemonReducer from './slices/pokemon/pokemonSlice';
import { todosApi } from './apis/todosApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware()
    .concat( todosApi.middleware )
})