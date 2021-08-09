import React from "react";
import { Switch, Route } from "react-router-dom";

//Routes
import { Home } from "./pages/pages-index";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
};

export default App;
