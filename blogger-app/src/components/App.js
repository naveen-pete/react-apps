import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate';
import PostDetail from './PostDetail';
import { getCategories } from '../api/categories';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categories = getCategories();
    setCategories(categories);
  }, []);

  return (
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
}

export default App;
