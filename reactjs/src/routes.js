import { BrowserRouter, Switch, Route } from "react-router-dom";
import Principal from './pages/usuario/principal/index.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={Principal} />
            </Switch>
        </BrowserRouter>
    )
}