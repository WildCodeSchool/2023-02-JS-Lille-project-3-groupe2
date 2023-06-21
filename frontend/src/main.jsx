import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./app/user/UserLayout";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";
import StaffLayout from "./app/staff/StaffLayout";
import Home from "./pages/user/Home";
import OfferPage from "./pages/shared/OfferPage";
import RegisterPage from "./pages/user/RegisterPage";
import LoginPage from "./pages/user/LoginPage";
import CandidateSpacePage from "./pages/candidate/CandidateSpacePage";
import CandidateApplicationFormPage from "./pages/candidate/CandidateApplicationFormPage";
import EnterpriseSpacePage from "./pages/enterprise/EnterpriseSpacePage";

//  TODO add children paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "user",
    element: <UserLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "offer", element: <OfferPage /> },
    ],
  },
  {
    path: "enterprise",
    element: <EnterpriseLayout />,
    children: [
      { path: "", element: <Home /> },

      { path: "offer", element: <OfferPage /> },
      { path: "my_space/:id", element: <EnterpriseSpacePage /> },
    ],
  },
  {
    path: "candidate",
    element: <CandidateLayout />,
    children: [
      { path: "", element: <Home /> },

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
