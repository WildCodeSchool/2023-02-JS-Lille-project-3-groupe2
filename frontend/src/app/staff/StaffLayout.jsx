import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function StaffLayout() {
  return (
    <>
      <Navbar type="default" />
      <Outlet />
      <Footer type="default" />
    </>
  );
}
export default StaffLayout;
