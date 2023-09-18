import { Header } from './components/Header/index'
import { GlobalStyle } from './globalStyle'
import { Hero } from './components/Hero'
import { Short } from './components/Short'
import { Text } from './components/Text/index'
import { Rodape } from './components/Rodape'
import { BoxInfoGrup } from './components/BoxInfoGrup/index'
import { LastFunction } from './components/LastFunction/index'
import { Top, Medium, Container, Botton } from './components/styled'
import { Gambiarra } from './components/Gambiarra'

function App() {
  return (
    <Container>
      <Top>
        <Header />
        <Hero />
      </Top>

      <Medium>
        <Short />
        <Text />
        <BoxInfoGrup />
        <Gambiarra />
      </Medium>

      <Botton>
        <LastFunction />
        <Rodape />
      </Botton>
      <GlobalStyle />
    </Container>
  )
}

export default App
