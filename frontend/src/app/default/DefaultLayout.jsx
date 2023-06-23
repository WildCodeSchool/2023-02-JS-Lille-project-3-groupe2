import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import SliderAutomatic from "../../components/sliderAutomatic/SliderAutomatic";

export default function DefaultLayout() {
  return (
    <>
      <header>Externatic</header>
      <Outlet />
      <Footer type="default" />
      <SliderAutomatic />
    </>
  );
}
