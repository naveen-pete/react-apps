import React, { useContext } from 'react';

import Auth from './components/Auth';
import Ingredients from './components/Ingredients/Ingredients';
import { AuthContext } from './context/AuthContext';

const App = props => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuthenticated) {
    content = <Ingredients />;
  }

  return content;
};

export default App;
