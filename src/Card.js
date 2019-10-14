import React, { useState, useEffect } from "react";

export default props => {
  const [story, setStory] = useState();
  const baseAPI = "https://hacker-news.firebaseio.com";

  const formatTime = unix => {
    const date = new Date(unix * 1000);
    return [date.getMonth(), date.getDate(), date.getFullYear()].join("/");
  };

  useEffect(() => {
    console.log(`🔄 Card ${props.id} updating...`);

    const getStory = async () => {
      const res = await fetch(baseAPI + `/v0/item/${props.id}.json`);
      const json = await res.json();
      setStory(json);
    };
    getStory();
  }, [props.id]);

  return story ? (
    <div className="card">
      <div className="row gutterBottom">
        <div>
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </div>
        <div className="details gutterLeft">{formatTime(story.time)}</div>
      </div>
      <div className="row details">
        <div>By: {story.by}</div>
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="row gutterBottom">
        <div className="loading" />
      </div>
      <div className="row details loading" />
    </div>
  );
};
