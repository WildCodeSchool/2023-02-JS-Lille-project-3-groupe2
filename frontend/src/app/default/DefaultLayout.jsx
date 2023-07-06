import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

export default function DefaultLayout() {
  return (
    <>
      <header>Externatic</header>
      <Outlet />

      <Footer type="default" />
    </>
  );
}
