import React from "react";
import { Route, Switch } from 'react-router';
import { Main } from "./views/pages/Main";
import { Dogs } from "./views/pages/Dogs";
import { Cats } from "./views/pages/Cats";
import { Fishes } from "./views/pages/Fishes";
import { Search } from "./views/pages/Search";
import { PageNotFound } from "./views/pages/PageNotFound";

export default () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route exact path='/dogs'>
        <Dogs />
      </Route>
      <Route exact path='/cats'>
        <Cats />
      </Route>
      <Route exact path='/fishes'>
        <Fishes />
      </Route>
      <Route exact path='/search'>
        <Search />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  )
}