import { Outlet } from "react-router-dom";
import "./CandidateLayout.css";

function CandidateLayout() {
  return (
    <>
      <header>ma nav</header>
      <Outlet />
      <footer>mon footer</footer>
    </>
  );
}
export default CandidateLayout;
