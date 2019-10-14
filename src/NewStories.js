import React, { useState, useEffect } from "react";
import Card from "./Card";

export default () => {
  const [storyIds, setStoryIds] = useState([]);
  const baseAPI = "https://hacker-news.firebaseio.com";
  const title = "New Stories";

  useEffect(() => {
    console.log(`🔥 ${title} mounting...`);

    const getNewStories = async () => {
      const res = await fetch(baseAPI + "/v0/newstories.json");
      const newStories = await res.json();
      setStoryIds(newStories.slice(0, 10));
    };
    getNewStories();

    return () => {
      console.log(`🖖 ${title} unmounting...`);
    };
  }, []);

  return (
    <section className="container">
      <h1>{title}</h1>
      {storyIds && storyIds.map(item => <Card key={item} id={item} />)}
    </section>
  );
};
