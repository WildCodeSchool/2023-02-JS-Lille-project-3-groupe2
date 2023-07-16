import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./PublicLayout.scss";

function PublicLayout() {
  return (
    <div className="PublicLayoutContainer">
      <Navbar type="default" />
      <Outlet />
      <Footer type="default" />
    </div>
  );
}
export default PublicLayout;
