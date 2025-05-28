import Produto from '../components/Produto'
import { useGetProductQuery } from '../redux/cart/services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductQuery()

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
