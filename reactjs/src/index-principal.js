import Routes from "./routes";
import { Link } from "react-router-dom";
import './index.css'
import { Botao } from "./components/botoes/styled";

export default function SiteCompleto () {
    return (
        <div className="organizacao-principal">
            <Botao className="idai"> <Link to="/criarconta"> Criar Conta </Link> </Botao>
            <Botao className="idai"> <Link to="/cabecalho"> Cabeçalho </Link> </Botao>
            <Botao className="idai"> <Link to="/logar"> Login (Usuário) </Link> </Botao>
            <Botao className="idai"> <Link to="/compra"> Confirmar Compra </Link> </Botao>
            <Botao className="idai"> <Link to="/esqueceusenha"> Esqueceu Senha </Link> </Botao>
            <Botao className="idai"> <Link to="/novasenha"> Nova Senha </Link> </Botao>
            <Botao className="idai"> <Link to="/admlogin"> ADM Login </Link> </Botao>
        </div>
    )
}