import { createContext, useContext, useMemo, useState } from "react";
import propTypes from "prop-types";
// import api from "../services/api";

const authContext = createContext();

export function AuthProvider({ children }) {
  const { Provider } = authContext;
  /* eslint-disable */
  const [user, setUser] = useState({
    auth: null,
    infos: null,
  });

  const isLogged = () => {
    console.log(user);
    return user.auth && user.infos ? true : false;
  };

  const Login = async (email, password) => {
    /* Axios get here then set user Account and user Infos */
    try {
      //   const result = await api.get("/login");
      //   console.info(result);
      // set user here
    } catch (err) {
      console.error(err);
    }
  };

  const Logout = () => {
    setUser({
      auth: null,
      infos: null,
    });
  };
  const value = useMemo(
    () => ({
      user,
      setUser,
      Login,
      Logout,
      isLogged,
    }),
    [user, setUser, Login, Logout, isLogged]
  );

  return <Provider value={value}>{children}</Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useAuth = () => useContext(authContext);
