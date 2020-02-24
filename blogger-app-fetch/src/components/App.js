import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostDetail from './PostDetail';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate'

const App = () => {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/create" component={PostFormCreate} />
        <Route exact path="/posts/:id" component={PostDetail} />
        <Route path="/posts/:id/edit" component={PostFormUpdate} />
      </Switch>
    </div>
  );
};

export default App;
