import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as React from "react";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";

import "./Utils.scss";

import ErrorPage from "./pages/errorpage/ErrorPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import OfferPage from "./pages/offerpage/OfferPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import PublicLayout from "./app/public/PublicLayout";
import ProfilePage from "./pages/spacepage/ProfilePage";

function Router() {
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
        { path: "profile", element: <ProfilePage /> },
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
        { path: "profile", element: <ProfilePage /> },
      ],
    },
  ];
  const router = createBrowserRouter([
    ...publicRoutes,
    ...notLoggedRoutesOnly,
    ...protectedRoutes,
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
