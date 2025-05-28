import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'
import { Produto as ProdutoType } from '../../App'
import { addCart, removeCart } from '../../redux/cart/favorites/slice'

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
    (state: RootReducer) => state.cart.listItemsCart
  )

  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)

  const handleClick = () => {
    if (estaNosFavoritos) {
      dispatch(removeCart(produto.id))
    } else {
      dispatch(addCart(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
        <S.Tag>{paraReal(produto.preco)}</S.Tag>
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.BtnComprar onClick={handleClick}>
        {estaNosFavoritos ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
