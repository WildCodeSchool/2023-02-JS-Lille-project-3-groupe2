import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";
import StaffLayout from "./app/staff/StaffLayout";
import DefaultHome from "./pages/default/DefaultHome";
import OfferPage from "./pages/shared/OfferPage";
import RegisterPage from "./pages/default/RegisterPage";
import LoginPage from "./pages/default/LoginPage";
import CandidateSpacePage from "./pages/candidate/CandidateSpacePage";
import CandidateApplicationFormPage from "./pages/candidate/CandidateApplicationFormPage";
import EnterpriseSpacePage from "./pages/enterprise/EnterpriseSpacePage";
import "./Utils.scss";
import DefaultLayout from "./app/default/DefaultLayout";
import ErrorPage from "./pages/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <DefaultHome /> },
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
      { path: "", element: <DefaultHome /> },

      { path: "offer", element: <OfferPage /> },
      { path: "my_space/:id", element: <EnterpriseSpacePage /> },
    ],
  },
  {
    path: "candidate",
    element: <CandidateLayout />,
    errorElement: <ErrorPage />,

    children: [
      { path: "", element: <DefaultHome /> },

      { path: "offer", element: <OfferPage /> },
      { path: "my_space/:id", element: <CandidateSpacePage /> },
      {
        path: "candidate_applicationform",
        element: <CandidateApplicationFormPage />,
      },
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
