import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./PublicLayout.scss";
import { useAuth } from "../../contexts/AuthContext";

function PublicLayout() {
  const { verifyToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const result = await verifyToken();
        if (result.userAuth.account_type === "candidat") {
          navigate("/candidate");
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="PublicLayoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
