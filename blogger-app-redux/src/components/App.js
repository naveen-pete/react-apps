import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate';
import PostDetail from './PostDetail';
import { getCategories } from '../actions/categories';

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/posts"
            render={(props) => <Posts categories={categories} {...props} />}
          />
          <Route
            exact
            path="/posts/new"
            render={(props) => <PostFormCreate categories={categories} {...props} />}
          />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route
            exact
            path="/posts/:id/edit"
            render={(props) => <PostFormUpdate categories={categories} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

export default connect(null, mapDispatchToProps)(App);
