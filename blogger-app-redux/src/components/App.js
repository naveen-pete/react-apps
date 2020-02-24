import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostDetail from './PostDetail';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate';
import { getCategories } from '../actions/categories';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
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
  }
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

export default connect(null, mapDispatchToProps)(App);
