import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./Utils.scss";

import { AuthProvider } from "./contexts/AuthContext";
import Router from "./Router";

/* TODO check if there is no token for notloffedroutesOnly | 
Check in Candidate Layout and EnterpriseLayout if there is a token, 
if so check if it's valid and check the role */

// TODO add loader to check candidate and redirect if they are not correct type

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
