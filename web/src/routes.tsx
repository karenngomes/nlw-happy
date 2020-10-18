import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import CreateOrphanage from "./pages/CreateOrphanage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={OrphanagesMap} />
        <Route path="/orphanages/create" exact component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
