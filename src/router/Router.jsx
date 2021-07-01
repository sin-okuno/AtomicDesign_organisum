import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/template/DefaultLayout";
import { HeaderOnlyLayout } from "../components/template/HeaderOnlyLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnlyLayout>
            <Users />
          </HeaderOnlyLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
