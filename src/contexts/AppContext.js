import React from 'react';

const AppContext = React.createContext({
  accessToken: null,
  setAccessToken: null,
  user: null,
  setUser: null
});

export {
  AppContext
};
