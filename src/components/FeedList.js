import React, { useEffect, useState } from "react";
import getFeed from "../services/feed";

export default function FeedList() {
  const [feedList, setFeedList] = useState({});
  useEffect(() => {
    getFeed().then((data) => setFeedList(data));
  }, []);
  return (
    <div>
      <h1>{feedList.title}</h1>
      <ul>
        {feedList.items?.map((item, i) => {
          console.log("entered");
          return <li key={i}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
