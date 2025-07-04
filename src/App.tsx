import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
