import { ADMLog } from "./styled"
import { Botao } from "../../../components/botoes/styled"

export default function ADMLogin () {
    return (
        <ADMLog>
         <div className = "Logo"> 
            <div class="tela-login">
                <div class="log-titulo"> Administrador </div>
                <div class="log-digit">
                    <div class="log-inputs">
                        <input type="text" placeholder="Usuário" />
                        <input type="text" placeholder="Senha" />
                    </div>
                </div>
                    <div class="log-bot-bot">
                        <Botao class="log-criar-conta"> Entrar </Botao>
                    </div>
            </div>
        </div>
    </ADMLog>
    )
}