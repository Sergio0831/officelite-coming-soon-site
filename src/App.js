import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./scss/main.scss";
const Home = React.lazy(() => import("./components/Home"));
const SignUp = React.lazy(() => import("./components/SignUp"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback={<p>Loading</p>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
