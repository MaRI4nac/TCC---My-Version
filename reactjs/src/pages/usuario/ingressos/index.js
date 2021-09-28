import { Container } from './styled'
import Cabecalho from '../../../components/cabecalho'



export default function Ingressos() {
    return (
        <Container> 
            <Cabecalho />
            <div className="boxes">
                <div className="box">
                    <div className="bg"> </div>
                    <img src="/assets/images/ingresso.png" alt="" />    
                    <div className="box-textos"> 
                        <h1> PETER PAN, O MUSICAL </h1>
                        <div> <b> LOCAL: </b> R. Tagipuru, 795 - Barra Funda -SP </div>
                        <div> <b> DIA: </b> SEGUNDA, 22/11/2021 </div>
                        <div> <b> EVENTO: </b> teatro musical </div>
                        <div> <b> SITUAÇÃO: </b> aguardando aprovação </div>
                    </div>
                </div>
                <div className="box">
                    <div className="bg"> </div>
                    <img src="/assets/images/ingresso.png" alt="" />    
                    <div className="box-textos"> 
                        <h1> PETER PAN, O MUSICAL </h1>
                        <div> <b> LOCAL: </b> R. Tagipuru, 795 - Barra Funda -SP </div>
                        <div> <b> DIA: </b> SEGUNDA, 22/11/2021 </div>
                        <div> <b> EVENTO: </b> teatro musical </div>
                        <div> <b> SITUAÇÃO: </b> aguardando aprovação </div>
                    </div>
                </div>
                <div className="box">
                    <div className="bg"> </div>
                    <img src="/assets/images/ingressoDourado.png" alt="" />    
                    <div className="box-textos"> 
                        <h1> PETER PAN, O MUSICAL </h1>
                        <div> <b> LOCAL: </b> R. Tagipuru, 795 - Barra Funda -SP </div>
                        <div> <b> DIA: </b> SEGUNDA, 22/11/2021 </div>
                        <div> <b> EVENTO: </b> teatro musical </div>
                        <div> <b> SITUAÇÃO: </b> aguardando aprovação </div>
                    </div>
                </div>       
            </div>
            <button> <b> VER NA AGENDA </b> </button>
        </Container> 
    )
}