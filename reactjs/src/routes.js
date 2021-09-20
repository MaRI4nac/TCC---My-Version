import { BrowserRouter, Switch, Route } from "react-router-dom";
import Principal from './pages/usuario/principal/index.js'
import Cabecalho from './components/cabecalho/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={Cabecalho} />
            </Switch>
        </BrowserRouter>
    )
}