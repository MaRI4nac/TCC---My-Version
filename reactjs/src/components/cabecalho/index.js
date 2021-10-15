import { Botao } from '../botoes/styled'
import { Container } from './styled'


export default function Cabecalho() {
    return (
        <Container>
            <img className="logo-image" src="/assets/images/LOGO1 TCC.png" alt="" />
            <input type="text" placeholder="Buscar eventos..."/>
            <img className="perfil-image" src="/assets/images/Perfil-cabecalho.png" alt="" />
        </Container>
    )
}