import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function CandidateLayout() {
  return (
    <>
      {/* NavBar Goes Here */}
      <Navbar type="default" />
      <Outlet />

      <Footer type="default" />
    </>
  );
}
export default CandidateLayout;
