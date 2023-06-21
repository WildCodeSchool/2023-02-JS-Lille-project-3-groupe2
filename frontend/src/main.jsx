import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./app/user/UserLayout";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";
import StaffLayout from "./app/staff/StaffLayout";
import DefaultHome from "./pages/user/DefaultHome";
import OfferPage from "./pages/shared/OfferPage";
import RegisterPage from "./pages/user/RegisterPage";
import LoginPage from "./pages/user/LoginPage";
import CandidateSpacePage from "./pages/candidate/CandidateSpacePage";
import CandidateApplicationFormPage from "./pages/candidate/CandidateApplicationFormPage";
import EnterpriseSpacePage from "./pages/enterprise/EnterpriseSpacePage";
import "./Utils.scss";
import EntrepriseHome from "./pages/enterprise/EnterpriseHome";
import CandidateHome from "./pages/candidate/CandidateHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultHome />,
  },
  {
    path: "user",
    element: <UserLayout />,
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
    children: [
      { path: "", element: <EntrepriseHome /> },

      { path: "offer", element: <OfferPage /> },
      { path: "my_space/:id", element: <EnterpriseSpacePage /> },
    ],
  },
  {
    path: "candidate",
    element: <CandidateLayout />,
    children: [
      { path: "", element: <CandidateHome /> },

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
