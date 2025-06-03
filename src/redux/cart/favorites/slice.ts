import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../types'

interface FavoritesState {
  listFavorites: Produto[]
}

const initialState: FavoritesState = {
  listFavorites: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Produto>) => {
      state.listFavorites.push(action.payload)
    },
    removeToFavorite: (state, action: PayloadAction<number>) => {
      state.listFavorites = state.listFavorites.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const { addToFavorite, removeToFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
