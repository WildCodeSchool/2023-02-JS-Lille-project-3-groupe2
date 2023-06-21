import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <header>Externatic</header>
      <Outlet />
      <footer>mon footer</footer>
    </>
  );
}
