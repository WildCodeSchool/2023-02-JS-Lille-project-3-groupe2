import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function EnterpriseLayout() {
  return (
    <>
      <header>ma nav</header>
      <Outlet />
      <Footer type="enterprise" />
    </>
  );
}
export default EnterpriseLayout;
