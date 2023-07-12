import { Link } from "react-router-dom";

export default function ShowMoreBtn() {
  return (
    <div className="showMoreBtnContainer">
      <Link to="/offer">
        <button type="button" className="ShowMoreBtn">
          Voir plus...{" "}
        </button>
      </Link>
    </div>
  );
}
