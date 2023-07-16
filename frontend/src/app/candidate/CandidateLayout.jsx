import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./CandidateLayout.scss";

function CandidateLayout() {
  // NEED to verify Token and check if  token.role === candidat else redirect to login page
  return (
    <div className="CandidateLayoutContainer">
      <Navbar type="default" />
      <Outlet />
      <Footer type="default" />
    </div>
  );
}
export default CandidateLayout;
