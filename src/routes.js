import { Switch, Route } from "react-router-dom";

import App from './App'

export default (
    <Switch>
        <Route path='/' exact component={App} />
    </Switch>
)