import { Header } from './components/Header/index'
import { Hero } from './components/Hero'
import { Short } from './components/Short'
import { Text } from './components/Text/index'
import { Footer } from './components/Footer'
import { BoxInfoGroup } from './components/BoxInfoGroup/index'
import { LastFunction } from './components/LastFunction/index'
import * as S from './components/styled'
import { Gambiarra } from './components/Gambiarra'

function App() {
  return (
    <S.Container>
      <S.Top>
        <Header />
        <Hero />
      </S.Top>

      <S.Medium>
        <Short />
        <Text />
        <BoxInfoGroup />
        <Gambiarra />
      </S.Medium>

      <S.Bottom>
        <LastFunction />
        <Footer />
      </S.Bottom>
    </S.Container>
  )
}

export default App
