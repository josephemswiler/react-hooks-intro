import React, { useState } from "react";
import TopStories from "./TopStories";
import NewStories from "./NewStories";

export default () => {
  const [selected, setSelected] = useState("Top Stories");

  const handleClick = e => {
    const { innerText } = e.target;
    if (selected === innerText) {
      console.log(`😬 ${innerText} is currently displayed.`);
      return null;
    }
    setSelected(innerText);
    console.log(`🚀 Now fetching ${innerText}...`);
  };

  const getComponent = () => {
    switch (selected) {
      case "Top Stories":
        return <TopStories />;
      case "New Stories":
        return <NewStories />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="header">
        {["Top Stories", "New Stories"].map(item => (
          <button
            key={item}
            className={selected === item ? "selected" : null}
            onClick={handleClick}
          >
            {item}
          </button>
        ))}
      </header>
      {getComponent()}
    </>
  );
};
