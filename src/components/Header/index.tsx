import { useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'

import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { totalPrice } from '../../redux/cart/cart-selectors'

const Header = () => {
  const listItemsCart = useSelector(
    (state: RootReducer) => state.cart.listItemsCart
  )

  const listItemsFavorite = useSelector(
    (state: RootReducer) => state.favorites.listFavorites
  )

  const selectorTotalPrice = useSelector(totalPrice)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{listItemsFavorite.length} favoritos</span>
        <img src={cesta} alt="Carrinho de compras" />
        <span>
          {listItemsCart.length} itens, valor total:{' '}
          {paraReal(selectorTotalPrice)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
