import { BrowserRouter, Switch, Route } from "react-router-dom";
import Principal from './pages/usuario/principal/index.js'
import Cabecalho from './components/cabecalho/index'
import NWSLogar from './pages/usuario/login/logar'
import NWSCriarConta from "./pages/usuario/login/criar-conta/index.js";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={NWSCriarConta} />
            </Switch>
        </BrowserRouter>
    )
}