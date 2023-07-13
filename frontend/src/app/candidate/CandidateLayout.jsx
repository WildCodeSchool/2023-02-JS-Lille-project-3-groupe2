import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./CandidateLayout.scss";

function CandidateLayout() {
  return (
    <>
      {/* NavBar Goes Here */}
      <div className="CandidateLayoutContainer">
        <Navbar type="default" />
        <Outlet />
        <Footer type="default" />
      </div>
    </>
  );
}
export default CandidateLayout;
