import { createContext } from "react";

const UserContext = createContext({
  user: null,
  messages: [],
  get isAdmin() {
    if (this.user) return this.user.isAdmin;
    return null;
  },
  get isLoggedIn() {
    return this.user !== null;
  },
  get isAnon() {
    return this.user === null;
  },
});

export default UserContext;
