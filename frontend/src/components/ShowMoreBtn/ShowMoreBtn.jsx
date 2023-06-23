export default function ShowMoreBtn({ onClick }) {
  return (
    <div className="showMoreBtnContainer">
      <button className="ShowMoreBtn" onClick={{ onClick }}>
        Voir plus...
      </button>
    </div>
  );
}
