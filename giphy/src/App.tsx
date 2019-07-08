import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import Search from './components/Search/Search';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const List = Loadable({
  loader: () => import( /* webpackChunkName: "List" */'./components/List/List'),
  loading: MyLoadingComponent,
});

const Trending = Loadable({
  loader: () => import( /* webpackChunkName: "Trending" */'./components/List/giphs/Giphs'),
  loading: MyLoadingComponent,
});

const Stickers = Loadable({
  loader: () => import(/* webpackChunkName: "Stickers" */'./components/List/stickers/Stickers'),
  loading: MyLoadingComponent,
});

const Saved = Loadable({
  loader: () => import(/* webpackChunkName: "Saved" */'./components/List/saved/Saved'),
  loading: MyLoadingComponent,
});

const Searched = Loadable({
  loader: () => import(/* webpackChunkName: "Searched" */'./components/Search/Searched'),
  loading: MyLoadingComponent,
});

class App extends Component {
  render() {

    return (
      <Router>
        <Menu />
        <Search inputValue={""} />
        <Switch>
          <Route exact path="/" component={List}></Route>
          <Route exact path="/stickers" component={Stickers}></Route>
          <Route exact path="/trending" component={Trending}></Route>
          <Route exact path="/saved" component={Saved}></Route>
          <Route exact path="/search/:searched" component={Searched}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;