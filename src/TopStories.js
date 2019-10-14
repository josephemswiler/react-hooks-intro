import React, { useState, useEffect } from "react";
import Card from "./Card";

export default () => {
  const [storyIds, setStoryIds] = useState([]);
  const baseAPI = "https://hacker-news.firebaseio.com";
  const title = "Top Stories";

  useEffect(() => {
    console.log(`✅ ${title} mounting...`);

    const getTopStories = async () => {
      const res = await fetch(baseAPI + "/v0/topstories.json");
      const topStories = await res.json();
      setStoryIds(topStories.slice(0, 10));
    };
    getTopStories();

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
