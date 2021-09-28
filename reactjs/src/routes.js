import { BrowserRouter, Switch, Route } from "react-router-dom";
import Principal from './pages/usuario/principal/index.js'
import Cabecalho from './components/cabecalho/index'
import NWSLogar from './pages/usuario/login/logar'
import NWSCriarConta from "./pages/usuario/login/criar-conta/index.js";
import ConfirmacaoCompra from './pages/administrativo/confirmacao-compra/index.js'
import NovaSenha from './pages/usuario/nova-senha/index.js'
import EsqueceuSenha from './pages/usuario/login/esqueceu-senha/index.js'
import SiteCompleto from "./index-principal.js";
import ADMLogin from "./pages/administrativo/login/index.js";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={SiteCompleto} /> 
                <Route path="/criarconta"  component={NWSCriarConta} />
                <Route path="/cabecalho"  component={Cabecalho} />
                <Route path="/logar"  component={NWSLogar} />
                <Route path="/compra"  component={ConfirmacaoCompra} />
                <Route path="/novasenha"  component={NovaSenha} />
                <Route path="/esqueceusenha"  component={EsqueceuSenha} />
                <Route path="/admlogin" component={ADMLogin} />
            </Switch>
        </BrowserRouter>
    )
}