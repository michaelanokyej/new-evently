import React from "react";

export default React.createContext({
  token: null,
  userid: null,
  login: (token, userId, expiration) => {},
  logout: () => {},
  backDropClickHandler: () => {},
  drawerToggleClickHandler: () => {},
})