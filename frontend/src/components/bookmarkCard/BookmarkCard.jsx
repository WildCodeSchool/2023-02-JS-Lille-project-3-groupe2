import "../../Utils.scss";
import "./BookmarkCard.scss";
import Proptypes from "prop-types";

export default function BookmarkCard({
  socialDenomination,
  bookmarksDate,
  title,
}) {
  return (
    <div className="bookmarkCardSubContainer">
      <h4 className="bookmarkCardSecondTitle">
        {" "}
        Entreprise : {socialDenomination}
      </h4>
      <h4 className="bookmarkCardStatus">Titre : {title}</h4>
      <h4 className="bookmarkCardApplicationDate">
        {" "}
        Date de favoris : {bookmarksDate}
      </h4>
    </div>
  );
}

BookmarkCard.propTypes = {
  socialDenomination: Proptypes.string.isRequired,
  bookmarksDate: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};
