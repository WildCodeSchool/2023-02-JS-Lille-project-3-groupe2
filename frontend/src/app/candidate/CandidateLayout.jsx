import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./CandidateLayout.scss";

function CandidateLayout() {
  return (
    <div className="CandidateLayoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default CandidateLayout;
