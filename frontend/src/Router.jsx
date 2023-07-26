import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as React from "react";
import CandidateLayout from "./app/candidate/CandidateLayout";
import EnterpriseLayout from "./app/enterprise/EnterpriseLayout";
import "./Utils.scss";
import HomePage from "./pages/homepage/HomePage";
import ErrorPage from "./pages/errorpage/ErrorPage";
import LoginPage from "./pages/loginpage/LoginPage";
import OfferPage from "./pages/offerpage/OfferPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import PublicLayout from "./app/public/PublicLayout";
import ProfilePage from "./pages/spacepage/ProfilePage";
import AboutUsPage from "./pages/aboutuspage/AboutUsPage";
import CguPage from "./pages/cgupage/CguPage";
import Cookies from "./pages/cookiespage/Cookies";
import Confidentiality from "./pages/confidentialitypage/Confidentiality";
import { useAuth } from "./contexts/AuthContext";
import PreviewOfferPage from "./pages/previewofferpage/PreviewOfferPage";

function Router() {
  // AutoLogin From Tokens
  const { verifyToken } = useAuth();
  React.useEffect(() => {
    (async () => {
      try {
        const result = await verifyToken();
        if (result.response.status === 404) {
          return;
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const routes = [
    {
      path: "/",
      element: <PublicLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "offer", element: <OfferPage /> },
        { path: "offer/preview/:id", element: <PreviewOfferPage /> },
        { path: "aboutus", element: <AboutUsPage /> },
        { path: "cgu", element: <CguPage /> },
        { path: "cookies", element: <Cookies /> },
        { path: "privacy", element: <Confidentiality /> },
      ],
    },

    {
      path: "enterprise",
      element: <EnterpriseLayout />,
      errorElement: <ErrorPage />,
      children: [{ path: "profile", element: <ProfilePage /> }],
    },
    { path: "error", element: <ErrorPage /> },

    {
      path: "candidate",
      element: <CandidateLayout />,
      errorElement: <ErrorPage />,
      children: [{ path: "profile", element: <ProfilePage /> }],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default Router;
