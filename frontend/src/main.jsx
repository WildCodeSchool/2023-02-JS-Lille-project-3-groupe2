import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./app/user/UserLayout";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";
import StaffLayout from "./app/staff/StaffLayout";
import Home from "./pages/user/Home";

//  TODO add children paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <UserLayout />,
  },
  {
    path: "/enterprise",
    element: <EnterpriseLayout />,
  },
  {
    path: "/candidate",
    element: <CandidateLayout />,
  },
  {
    path: "/staff",
    element: <StaffLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
