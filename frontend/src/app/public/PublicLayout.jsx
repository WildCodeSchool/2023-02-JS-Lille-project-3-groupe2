import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./PublicLayout.scss";
import { useAuth } from "../../contexts/AuthContext";

function PublicLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userAuth.account_type === "candidat") {
      navigate("/candidate");
    } else if (user.userAuth.account_type === "entreprise") {
      navigate("/entreprise");
    }
  }, [user]);

  return (
    <div className="PublicLayoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
