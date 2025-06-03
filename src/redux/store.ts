import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/carrinho/slice'
import favoritesReducer from './cart/favorites/slice'
import { api } from './cart/services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
