import { Log } from "./styled"
import { Botao } from "../../../../components/botoes/styled"

export default function NWSLogar () {
    return (
        <Log>
            <div className = "Logo"> 
                <div class="tela-login">
                    <div class="log-titulo"> Faça seu Login! </div>
                    <div class="log-digit">
                        <div class="log-inputs">
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Senha" />
                        </div>
                           <div class="log-esqueci-senha"> Esqueci minha senha </div>
                        </div>
                    <div class="log-botoes">
                        <div class="log-nao-tem-conta">Não tem uma conta? Crie aqui!</div>
                        <div class="log-bot-bot">
                            <Botao> Criar Conta </Botao>
                            <Botao> Entrar </Botao>
                        </div>  
                    </div>
                </div>
            </div>
        </Log>
    )
}