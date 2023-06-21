import { Outlet } from "react-router-dom";

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
