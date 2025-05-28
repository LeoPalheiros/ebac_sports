import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../App'

type CartState = {
  listItemsCart: Produto[]
  listItemsFavorite: Produto[]
}

const initialState: CartState = {
  listItemsCart: [],
  listItemsFavorite: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Produto>) => {
      const index = state.listItemsCart.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index === -1) {
        state.listItemsCart.push(action.payload)
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.listItemsCart = state.listItemsCart.filter(
        (item) => item.id !== action.payload
      )
    },
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const index = state.listItemsFavorite.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index === -1) {
        state.listItemsFavorite.push(action.payload)
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.listItemsFavorite = state.listItemsFavorite.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const { addCart, removeCart, addFavorite, removeFavorite } =
  cartSlice.actions
export default cartSlice.reducer
