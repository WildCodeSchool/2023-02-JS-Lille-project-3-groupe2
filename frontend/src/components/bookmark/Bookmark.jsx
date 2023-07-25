import React, { useEffect, useState } from "react";
import "../../Utils.scss";
import "./bookmark.scss";
import api from "../../services/api";
import BookmarkCard from "../bookmarkCard/BookmarkCard";

export default function Bookmark() {
  const [bookmark, setBookmark] = useState([]);

  const getBookmark = async () => {
    try {
      const result = await api.get("/candidate/1/bookmarks");
      setBookmark([result.data]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBookmark();
  }, []);

  return (
    <div className="bookmarkGlobalContainer">
      <div className="bookmarkTitleContainer">
        <h1 className="bookmarkCardMainTitle">Mes Favoris</h1>
      </div>
      <div className="bookmarkMapContainer">
        {bookmark.map((item) => (
          <BookmarkCard
            key={item.bookmark_date}
            socialDenomination={item.enterprise_title}
            title={item.offer_title}
            bookmarksDate={item.bookmark_date}
          />
        ))}
      </div>
    </div>
  );
}
