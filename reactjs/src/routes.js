import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cabecalho from './components/cabecalho/index'
import BuscaDireta from './pages/usuario/busca-direta'
import TelaEvento from './pages/usuario/evento'
import Ingressos from './pages/usuario/ingressos'
import BuscaDirecionada from './pages/usuario/busca-direcionada'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={TelaEvento} />
            </Switch>
        </BrowserRouter>
    )
}