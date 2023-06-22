import { Outlet } from "react-router-dom";
import DefaultFooter from "../../components/footer/DefaultFooter";

export default function DefaultLayout() {
  return (
    <>
      <header>Externatic</header>
      <Outlet />
      <DefaultFooter />
    </>
  );
}
