import { Container } from './styled'
import workingImg from '../../images/illustration-working.svg'
import { ButtonCyan } from '../Button'

export function Hero() {
    return (
        <Container>
            <div>
                <h1>More than just shorter links</h1>
                <h2>Build your brand's recognition and get detailed<br />insights on how links are performing.</h2>
                <ButtonCyan>Get Started</ButtonCyan>
            </div>
            <div>
                <img src={workingImg} alt="girl at working" />
            </div>
        </Container>
    )
}