import { Outlet } from "react-router-dom";
import "./UserLayout.css";

function UserLayout() {
  return (
    <>
      <header>ma nav</header>
      <Outlet />
      <footer>mon footer</footer>
    </>
  );
}
export default UserLayout;
