import React, { useState } from "react";
import "../../Utils.scss";
import "./bookmark.scss";
import BookmarkCard from "../bookmarkCard/BookmarkCard";

export default function Bookmark() {
  const [bookmark] = useState([]);

  const bookmarkArray = [
    {
      social_denomination: "Lyreco",
      title: "Dev FullStack",
      bookmark_date: "23/01/23",
    },
    {
      social_denomination: "Inetum",
      title: "Dev back-end",
      bookmark_date: "28/01/23",
    },
    {
      social_denomination: "GoWeb",
      title: "Dev Front-end",
      bookmark_date: "22/01/23",
    },
    {
      social_denomination: "Auchan Retails",
      title: "Data Analyste",
      bookmark_date: "13/01/23",
    },
  ];
  return (
    <div className="bookmarkGlobalContainer">
      <div className="bookmarkTitleContainer">
        <h1 className="bookmarkCardMainTitle">Mes Favoris</h1>
      </div>
      <div className="bookmarkMapContainer">
        {bookmarkArray.map((item) => (
          <BookmarkCard
            key={item.bookmark_date}
            socialDenomination={item.social_denomination}
            title={item.title}
            bookmarksDate={item.bookmark_date}
          />
        ))}
      </div>
    </div>
  );
}
