import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";

import "./Utils.scss";

import ErrorPage from "./pages/errorpage/ErrorPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import OfferPage from "./pages/offerpage/OfferPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import CandidateSpacePage from "./pages/spacepage/CandidateSpacePage";
import { AuthProvider } from "./contexts/AuthContext";
import PublicLayout from "./app/public/PublicLayout";

/* TODO check if there is no token for notloffedroutesOnly | 
Check in Candidate Layout and EnterpriseLayout if there is a token, 
if so check if it's valid and check the role */

const notLoggedRoutesOnly = [
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
];
const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "offer", element: <OfferPage /> },
    ],
  },
];
const protectedRoutes = [
  {
    path: "enterprise",
    element: <EnterpriseLayout />,
    errorElement: <ErrorPage />,

    children: [
      { path: "", element: <HomePage /> },

      { path: "offer", element: <OfferPage /> },
      { path: "my_space/:id", element: <CandidateSpacePage /> },
    ],
  },
  { path: "error", element: <ErrorPage /> },

  {
    path: "candidate",
    element: <CandidateLayout />,
    errorElement: <ErrorPage />,

    children: [
      { path: "", element: <HomePage /> },
      { path: "offer", element: <OfferPage /> },
      { path: "my_space/:id", element: <CandidateSpacePage /> },
    ],
  },
];
const router = createBrowserRouter([
  ...protectedRoutes,
  ...publicRoutes,
  ...notLoggedRoutesOnly,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
