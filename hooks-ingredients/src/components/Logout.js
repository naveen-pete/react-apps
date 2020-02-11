import React, { useContext } from 'react';

import './Logout.css';
import Card from './UI/Card';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => authContext.logout();

  return <div className="logout">
    <Card>
      <button type="button" onClick={handleLogout}>Logout</button>
    </Card>
  </div>;
};

export default Logout;
