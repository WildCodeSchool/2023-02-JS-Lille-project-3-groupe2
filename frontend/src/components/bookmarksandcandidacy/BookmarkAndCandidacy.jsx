import "../../Utils.scss";
import Candidacy from "../candidacy/Candidacy";
import Bookmark from "../bookmark/Bookmark";

import "./BookmarkAndCandidacy.scss";

export default function BookmarkAndCandidacy() {
  return (
    <div className="bookmarkAndCandidacyGlobalContainer">
      <Bookmark />
      <br />
      <br /> <Candidacy />
    </div>
  );
}
