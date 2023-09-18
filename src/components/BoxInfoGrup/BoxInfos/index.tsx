import { Container } from './styled'

interface BoxInfosProps {
  title: string
  text: string
  ImgIcon: string
}

export function BoxInfos({ title, text, ImgIcon }: BoxInfosProps) {
  return (
    <Container className='boxInfo'>
      <div>
        <img src={ImgIcon} alt='teste' />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  )
}
