import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import api from "../services/api";

const authContext = createContext();

export function AuthProvider({ children }) {
  const { Provider } = authContext;

  const [userAccount, setUserAccount] = useState();
  const [userInfos, setUserInfos] = useState();

  const Login = async () => {
    /* Axios get here then set user Account and user Infos */
    try {
      const result = await api.get("/login");
      console.info(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Login();
  }, []);

  return (
    <Provider value={{ userAccount, Login, userInfos }}>{children}</Provider>
  );
}

AuthProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useAuth = () => useContext(authContext);
