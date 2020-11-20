import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Container/Home/Home";
import Characters from "./Container/Characters/Characters";
import Comics from "./Container/Comics/Comics";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/characters">
          <Characters></Characters>
        </Route>
        <Route path="/comics">
          <Comics></Comics>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
