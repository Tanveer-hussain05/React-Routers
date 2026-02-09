import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

   const savedUser = localStorage.getItem("user");
  useEffect(() => {
  
    const savedLogin = localStorage.getItem("loggedIn");

    if (savedUser && savedLogin === "true") {
      setUser(JSON.parse(savedUser));
      setLoggedIn(true);
    }
  }, []);

  
  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("loggedIn", "true");
    } else {
      localStorage.removeItem("user");
      localStorage.setItem("loggedIn", "false");
    }
  }, [user, loggedIn]);

  const isAunthenticated =savedUser;

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn ,isAunthenticated}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
