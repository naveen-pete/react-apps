import React from 'react';

const Home = (props) => {
  const history = props.history;

  return <div>
    <h3>Blogger App Home</h3>

    <button className="btn btn-sm btn-primary mr-1" onClick={() => history.push('/posts')}>Go to Posts</button>
    <button className="btn btn-sm btn-info" onClick={() => history.push('/create-post')}>Create a Post</button>
  </div>;
};

export default Home;
