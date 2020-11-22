import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Container/Home/Home";
import Characters from "./Container/Characters/Characters";
import Comics from "./Container/Comics/Comics";
import Header from "./Components/Header/Header";
import Description from "./Container/Description/Description";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <Router>
      <Header clicked={clicked} setClicked={setClicked}></Header>
      <Switch>
        <Route path="/characters/:id">
          <Description></Description>
        </Route>
        <Route path="/characters">
          <Characters></Characters>
        </Route>
        <Route path="/comics">
          <Comics></Comics>
        </Route>
        <Route path="/">
          <Home setClicked={setClicked}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
