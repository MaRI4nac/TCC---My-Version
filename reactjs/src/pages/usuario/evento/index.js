import { Container } from './styled'
import Cabecalho from '../../../components/cabecalho'


export default function TelaEvento() {
    return (
        <Container>
            <div className="teste"> 
                <Cabecalho />
            </div>
            <div className="secondary-container">
                <div className="box"> 
                    <img src="/assets/images/fotoEvento.png" alt=""/>
                    <div className="box-text"> 
                        <h1> Naquela Noite Eu Olhei Pela Janela e Vi A Lua Morrer </h1>
                        <div className="li"> 
                            <div className="ball"> 
                            </div> Categoria: Drama <div> </div>
                        </div>
                        <div className="li"> 
                            <div className="ball"> 
                            </div> Duração: 50 Minutos <div> </div>
                        </div>
                        <div className="li"> 
                            <div className="ball"> 
                            </div> Classificação etária: 16 Anos <div> </div>
                        </div>
                        <div className="li"> 
                            <div className="ball"> 
                            </div> Perço: R$60,00 <div> </div>
                        </div>
                    </div> 
                </div>
            

            </div>
        </Container>
    )
}