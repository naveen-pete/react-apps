import React from 'react';

import withData from './withData';

const Users = ({ data }) => {
  return (
    <div>
      <h4>Users</h4>

      <table className="table table-bordered table-hovered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withData(Users, 'users');
