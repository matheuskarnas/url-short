import { ButtonCyan } from "../Button";
import { Container } from "./styled";

interface UrlResultProps {
    link: string;
    shortLink?: string;
}

export function UrlResult({ link, shortLink }: UrlResultProps) {
    return (
        <Container>
            <div className='link'>
                <p>{link}</p>
            </div>

            <div className='shortLink'>
                <a href={`https://${shortLink}`} >https://{shortLink}</a>
                <ButtonCyan>Copy</ButtonCyan>
            </div>
        </Container>
    )
}