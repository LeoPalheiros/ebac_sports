import { RootReducer } from '../store'

export const totalPrice = (state: RootReducer) => {
  return state.cart.listItemsCart.reduce((acc, produto) => {
    return acc + produto.preco
  }, 0)
}
