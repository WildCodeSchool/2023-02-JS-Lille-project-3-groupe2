import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <header>Externatic</header>
      <Outlet />
      <footer>mon footer</footer>
    </>
  );
}
