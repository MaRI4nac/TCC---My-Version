import React from 'react';
import { Container } from './styled';

export default function TicketOpen () {
    return (
        <Container> 
            <div className="box"> 
                <div className="Ticket-QrCode"> 
                
                </div>
                <div className="Information"> 
                    <div className="InfoTicket"> 
                        <div className="QrCode"> 
                            <img src="/assets/images/qrcode.svg" /> 
                        </div> 
                        <div className="Title"> 
                            <h2> Evento </h2>
                            <p> 22.11.21 </p>
                            <p> 11H </p>
                        </div>
                    </div>
                    <div className="InfoEvent"> 
                        <h1> PERTER PAN O MUSICAL </h1>
                        <div className="Date"> <span>DATA:</span> 22/11/2021</div>
                        <div className="Start"> <span>INÍCIO:</span> 11H</div>
                        <div className="End"> <span>FIM:</span> 13H </div>
                        <div className="Place"> <span>LOCAL:</span> Giostri Livraria Teatro (Paulista)</div>
                        <div className="Text"> 
                        Durante a realização do Evento, A NEWSIDE  não poderá controlar todo o conteúdo publicado ou disseminado. 
                        Você pode considerar comunicações, gráficos, arquivos de áudio ou outras informações de outros participantes e/ou de palestrantes inapropriados, 
                        ofensivos, prejudiciais, imprecisos, desonestos ou enganosos, mas você é o único responsável pela sua conduta, comportamento e eventual interação
                        durante o Evento, de modo que concorda em agir com responsabilidade, cautela, bom senso e segurança enquanto estiver presente na conferência, preservando a ética e 
                        os bons costumes das relações entre os envolvidos no Evento. </div>
                    </div>
                </div>
            </div>  
        </Container> 
    )
}