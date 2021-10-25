import { Switch, Route } from "react-router-dom";

import { Details, List } from "./pages";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <List />
    </Route>

    <Route exact path="/:id">
      <Details />
    </Route>
  </Switch>
);

export default Routes;
