import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./EnterpriseLayout.scss";
import Navbar from "../../components/navbar/Navbar";

function EnterpriseLayout() {
  return (
    <div className="EnterpriseLayoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default EnterpriseLayout;
