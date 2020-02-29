import React from 'react';

const Home = props => {
  const { history } = props;
  return <div>
    <h2>Blogger App Home</h2>
    <button className="btn btn-sm btn-primary mr-1"
      onClick={() => history.push('/posts')}
    >Go to Posts</button>
    <button className="btn btn-sm btn-info "
      onClick={() => history.push('/posts/new')}
    >Create a Post</button>
  </div>
};

export default Home;
