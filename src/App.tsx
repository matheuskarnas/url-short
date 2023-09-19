import { Header } from './components/Header/index'
import { Hero } from './components/Hero'
import { Short } from './components/Short'
import { Text } from './components/Text/index'
import { Footer } from './components/Footer'
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
        <Footer />
      </Botton>
    </Container>
  )
}

export default App
