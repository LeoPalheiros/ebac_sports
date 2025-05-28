import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../redux/cart/favorites/slice'
import { api } from './cart/services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
