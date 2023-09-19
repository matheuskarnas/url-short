import { Container, Content } from './styled'
import { BoxInfos } from './BoxInfos'
import FullyImg from '../../images/icon-fully-customizable.svg'
import DetailsImg from '../../images/icon-detailed-records.svg'
import BrandImg from '../../images/icon-brand-recognition.svg'
// import { BarBackground } from "./BarBackground";

export function BoxInfoGroup() {
  return (
    <>
      <Container>
        <Content>
          <BoxInfos
            ImgIcon={BrandImg}
            title='Brand Recognotion'
            text='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
          />

          <BoxInfos
            ImgIcon={DetailsImg}
            title='Details Records'
            text='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
          />

          <BoxInfos
            ImgIcon={FullyImg}
            title='Fully Custumizable'
            text='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
          />
        </Content>
        {/* <BarBackground /> */}
      </Container>
    </>
  )
}
