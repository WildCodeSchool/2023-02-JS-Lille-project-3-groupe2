import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function EnterpriseLayout() {
  return (
    <>
      {/* NavBar Goes Here */}
      <Navbar type="enterprise" />
      <Outlet />
      <Footer type="enterprise" />
    </>
  );
}
export default EnterpriseLayout;
