import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate';
import PostDetail from './PostDetail';

const App = () => (
  <div className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/new" component={PostFormCreate} />
      <Route path="/posts/:id/edit" component={PostFormUpdate} />
      <Route path="/posts/:id" component={PostDetail} />
    </Switch>
  </div>
);

export default App;
