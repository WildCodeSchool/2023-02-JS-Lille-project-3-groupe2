import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";
import StaffLayout from "./app/staff/StaffLayout";

import "./Utils.scss";

import ErrorPage from "./pages/errorpage/ErrorPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import OfferPage from "./pages/offerpage/OfferPage";
import SpacePage from "./pages/spacepage/SpacePage";
import RegisterPage from "./pages/registerpage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CandidateLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "offer", element: <OfferPage /> },
    ],
  },
  {
    path: "enterprise",
    element: <EnterpriseLayout />,
    errorElement: <ErrorPage />,

    children: [
      { path: "", element: <HomePage /> },

      { path: "offer", element: <OfferPage /> },
      { path: "my_space/:id", element: <SpacePage /> },
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
      { path: "my_space/:id", element: <SpacePage /> },
    ],
  },
  {
    path: "staff",
    element: <StaffLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
