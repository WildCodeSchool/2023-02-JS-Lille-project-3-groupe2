import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function CandidateLayout() {
  return (
    <>
      <header>ma nav</header>
      <Outlet />

      <Footer type="default" />
    </>
  );
}
export default CandidateLayout;
