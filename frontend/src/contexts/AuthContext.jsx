import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import api from "../services/api";

const authContext = createContext();

export function AuthProvider({ children }) {
  const { Provider } = authContext;
  const [user, setUser] = useState({
    auth: null,
    infos: null,
  });

  const verifyToken = async () => {
    try {
      const result = await api.post("/login");
      console.info(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  const login = async (email, password) => {
    try {
      const result = await api.post("/login", {
        email,
        password,
      });
      const { auth, infos } = result.data.user;
      setUser({ auth, infos });
      return { auth, infos };
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
    // setToken(null); // If needed, you can setToken here
  };

  const value = {
    user,
    setUser,
    login,
    Logout,
  };

  return <Provider value={value}>{children}</Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useAuth = () => useContext(authContext);
