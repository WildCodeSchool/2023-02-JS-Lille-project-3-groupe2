import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./PublicLayout.scss";
import { useAuth } from "../../contexts/AuthContext";

function PublicLayout() {
  return (
    <div className="PublicLayoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
