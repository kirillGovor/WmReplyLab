import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
//import List from './components/List/List';
import Search from './components/Search/Search';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Stickers from './components/List/Stickers';
//import Trending from './components/List/Giphs';
//import Searched from './components/Search/Searched';
//import Saved from './components/List/Saved';

import Loadable from 'react-loadable';



function MyLoadingComponent() {
  return <div>Loading...</div>;
}
const List = Loadable({
  loader: () => import( /* webpackChunkName: "List" */'./components/List/List'),
  loading: MyLoadingComponent,
});


const Trending = Loadable({
  loader: () => import( /* webpackChunkName: "Trending" */'./components/List/Giphs'),
  loading: MyLoadingComponent,
});
const Stickers = Loadable({
  loader: () => import(/* webpackChunkName: "Stickers" */'./components/List/Stickers'),
  loading: MyLoadingComponent,
});

const Saved = Loadable({
  loader: () => import(/* webpackChunkName: "Saved" */'./components/List/Saved'),
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
        <Switch>
        </Switch>
        <Menu />
        <Search inputValue={""} />
        <Route exact path="/" component={List}></Route>
        <Route exact path="/stickers" component={Stickers}></Route>
        <Route exact path="/trending" component={Trending}></Route>
        <Route exact path="/saved" component={Saved}></Route>
        <Route exact path="/search/:string" component={Searched}></Route>
      </Router>
    );
  }
}

export default App;