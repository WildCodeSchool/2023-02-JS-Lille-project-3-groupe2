import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./CandidateLayout.scss";
import { useAuth } from "../../contexts/AuthContext";

function CandidateLayout() {
  const { verifyToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const result = await verifyToken();
        if (result.userAuth.account_type !== "candidat") {
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="CandidateLayoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default CandidateLayout;
