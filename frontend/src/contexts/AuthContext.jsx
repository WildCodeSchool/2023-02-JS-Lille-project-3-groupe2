import { createContext, useContext, useEffect, useMemo, useState } from "react";
import propTypes from "prop-types";
import api from "../services/api";

const authContext = createContext();

export function AuthProvider({ children }) {
  const { Provider } = authContext;
  /* eslint-disable */
  const [user, setUser] = useState({
    auth: null,
    infos: null,
  });

  useEffect(() => {
    console.log("Need to check token here");
  }, []);
  const [token, setToken] = useState();

  const isLogged = () => {};

  const login = async (email, password) => {
    try {
      const result = await api.post("/login", {
        email: email,
        password: password,
      });
      const { auth, infos } = result.data.user;
      await setUser({ auth: auth, infos: infos });
      return user;
      // return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const Logout = () => {
    setUser({
      auth: null,
      infos: null,
    });
    // Also need to remove token from cookie if logout otherwise it will not be able to access login page
    setToken(null);
  };
  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      Logout,
      isLogged,
      token,
      setToken,
    }),
    [user, setUser, login, Logout, isLogged, token, setToken]
  );

  return <Provider value={value}>{children}</Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useAuth = () => useContext(authContext);
