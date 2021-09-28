import { Container } from './styled'

export default function ConfirmacaoCompra () { 

    return ( 
                <Container> 
                    <div className = "Text"> 
                        <div className = "Title-top"> INGRESSOS </div> 
                        <div className = "Caption-top"> CONFIRMAÇÃO DE COMPRAS </div>     
                    </div> 

                    <div className = "Tickets"> 
                        <div className = "Confirm-Ticket">  
                          <div className = "Image-ticket"> <img src = "/assets/images/NWS-Ticket.png" width = "190" height = "130" />  </div>
                            <div className = "Event-Information"> 
                                <div className = "Title"> Yumi Zezinha da Fé </div> 
                                <div className = ""> INGRESSO: perter pan, o musical </div> 
                                <div> PAGAMENTO: Master Card ****5778</div>    
                            </div> 

                            <div className = "Buttons-confirm"> 
                                <button> <img src="/assets/images/NWS-buttons.png" width = "50"  height = "50" />  </button>  
                                <button> <img src="/assets/images/NWS-buttons2.png" width = "50" height = "50" /> </button>   
                            </div> 
                        </div> 
                        
                        <div className = "Confirm-Ticket"> 
                            <div className = "Image-ticket"> <img src = "/assets/images/NWS-Ticket.png" width = "190" height = "130" />  </div>
                                <div className = "Event-Information"> 
                                    <div className = "Title"> Yumi Zezinha da Fé </div> 
                                    <div className = ""> INGRESSO: perter pan, o musical </div> 
                                    <div> PAGAMENTO: Master Card ****5778</div>    
                                </div> 

                                <div className = "Buttons-confirm"> 
                                    <button> <img src="/assets/images/NWS-buttons.png"  width = "50"  height = "50" /> </button> 
                                    <button> <img src="/assets/images/NWS-buttons2.png"  width = "50" height = "50" /> </button> 
                                </div> 
                        </div> 
                        
                        <div className = "Confirm-Ticket"> 
                            <div className = "Image-ticket"> <img src = "/assets/images/NWS-Ticket.png" width = "190" height = "130" />  </div>
                                <div className = "Event-Information"> 
                                    <div className = "Title"> Yumi Zezinha da Fé </div> 
                                    <div className = "About-Ticket"> INGRESSO: perter pan, o musical </div> 
                                    <div className = "Adress"> PAGAMENTO: Master Card ****5778</div>    
                                </div> 

                                <div className = "Buttons-confirm"> 
                                    <button> <img src="/assets/images/NWS-buttons.png" width = "50"  height = "50" /> </button> 
                                    <button> <img src="/assets/images/NWS-buttons2.png"  width = "50"  height = "50" /> </button> 
                                </div> 
                        </div> 
                    </div> 
                
                </Container> 

    )
}