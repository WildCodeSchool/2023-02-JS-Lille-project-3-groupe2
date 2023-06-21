import { Outlet } from "react-router-dom";
import "./UserLayout.css";

export default function UserLayout() {
  return (
    <>
      <header>ma nav</header>
      <Outlet />
      <footer>mon footer</footer>
    </>
  );
}
