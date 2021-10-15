
import { Botao } from '../../../../components/botoes/styled';
import {Container } from './styled';

export default function ForgotPassword () {
    return (
        <Container> 
            <div className = "Logo"> 
                <div className = "Box-forgotPass">
                    <div className = "Title"> Esqueceu a senha? </div> 
                    <div className = "Text"> 
                        Digite aqui seu e-mail para fazermos a confirmação de sua conta para que possa alterar sua senha. 
                        Enviaremos em seu e-mail um link que te redirecionará para uma nova tela para que altere sua senha. 
                    </div> 
                    <div className = "E-mail"> 
                        <input type="text" placeholder="E-mail" /> 
                    </div>
                    <div className = "Button">
                        <Botao>  Criar Conta </Botao>
                    </div> 
                </div>
            </div>
        </Container>

    )
} 