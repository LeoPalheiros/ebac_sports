import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../types'

interface CartState {
  listItemsCart: Produto[]
}

const initialState: CartState = {
  listItemsCart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      state.listItemsCart.push(action.payload)
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      state.listItemsCart = state.listItemsCart.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const { addToCart, removeToCart } = cartSlice.actions
export default cartSlice.reducer
