import { Outlet } from "react-router-dom";
import "./StaffLayout.css";

function StaffLayout() {
  return (
    <>
      <header>ma nav</header>
      <Outlet />
      <footer>mon footer</footer>
    </>
  );
}
export default StaffLayout;
