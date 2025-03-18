// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import { api } from './api' // O arquivo de configuração do RTK Query
import cartReducer from './cartSlice' // Seu slice de carrinho

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer // Adiciona o reducer da API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // Adiciona o middleware do RTK Query
})
