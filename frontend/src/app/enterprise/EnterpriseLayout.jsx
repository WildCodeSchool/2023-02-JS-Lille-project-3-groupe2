import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function EnterpriseLayout() {
  // NEED to verify Token and check if  token.role === entreprise else redirect to login page

  return (
    <div className="EnterpriseLayoutContainer">
      <Navbar type="enterprise" />
      <Outlet />
      <Footer type="enterprise" />
    </div>
  );
}
export default EnterpriseLayout;
