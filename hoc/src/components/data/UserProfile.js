import React from 'react';

import withData from './withData';

const UserProfile = ({ name, email, data }) => {
  return (
    <div>
      <h4>User Profile</h4>
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <em>Email: </em>{email}
          </h6>

          <em>Posts:</em>
          <ul className="list-group">
            {data.map(post => <li className="list-group-item" key={post.id}>{post.title}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withData(UserProfile, 'posts', 5);
