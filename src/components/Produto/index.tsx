import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'
import { Produto as ProdutoType } from '../../types'
import {
  addToFavorite,
  removeToFavorite
} from '../../redux/cart/favorites/slice'
import { addToCart, removeToCart } from '../../redux/cart/carrinho/slice'

import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number): string =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const Produto = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector(
    (state: RootReducer) => state.favorites.listFavorites
  )

  const carrinho = useSelector((state: RootReducer) => state.cart.listItemsCart)

  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)
  const estaNoCarrinho = carrinho.some((p) => p.id === produto.id)

  const handleFavoritoClick = () => {
    if (estaNosFavoritos) {
      dispatch(removeToFavorite(produto.id))
    } else {
      dispatch(addToFavorite(produto))
    }
  }

  const handleCarrinhoClick = () => {
    if (estaNoCarrinho) {
      dispatch(removeToCart(produto.id))
    } else {
      dispatch(addToCart(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
        <S.Tag>{paraReal(produto.preco)}</S.Tag>
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.BtnComprar onClick={handleFavoritoClick}>
        {estaNosFavoritos ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleCarrinhoClick}>
        {estaNoCarrinho ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
