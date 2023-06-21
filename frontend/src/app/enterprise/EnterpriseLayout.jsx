import { Outlet } from "react-router-dom";

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
