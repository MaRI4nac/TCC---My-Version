import { BrowserRouter, Switch, Route } from "react-router-dom";
import Principal from './pages/usuario/principal/index.js'
import Cabecalho from './components/cabecalho/index'
import NWSLogar from './pages/usuario/login/logar'
import NWSCriarConta from "./pages/usuario/login/criar-conta/index.js";
import ConfirmacaoCompra from './pages/administrativo/confirmacao-compra/index.js'
import NovaSenha from './pages/usuario/nova-senha/index.js'
import EsqueceuSenha from './pages/usuario/login/esqueceu-senha/index.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={NWSCriarConta} />
                <Route path="/cabecalho" exact={true} component={Cabecalho} />
                <Route path="/logar" exact={true} component={NWSLogar} />
                <Route path="/compra" exact={true} component={ConfirmacaoCompra} />
                <Route path="/novasenha" exact={true} component={NovaSenha} />
                <Route path="/esqueceusenha" exact={true} component={EsqueceuSenha} />
            </Switch>
        </BrowserRouter>
    )
}