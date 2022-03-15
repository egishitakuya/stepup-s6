import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { Default } from "../components/templetes/Default";
import { Header } from "../components/templetes/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Default>
            <Top />
          </Default>
        </Route>
        <Route path="/users">
          <Header>
            <Users />
          </Header>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
