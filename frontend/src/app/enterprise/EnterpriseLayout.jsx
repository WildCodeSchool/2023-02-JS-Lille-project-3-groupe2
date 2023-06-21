import { Outlet } from "react-router-dom";
import "./EnterpriseLayout.css";

function EnterpriseLayout() {
  return (
    <>
      <header>ma nav</header>
      <Outlet />
      <footer>mon footer</footer>
    </>
  );
}
export default EnterpriseLayout;
