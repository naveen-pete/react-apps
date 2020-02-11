import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => { },
  logout: () => { }
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
