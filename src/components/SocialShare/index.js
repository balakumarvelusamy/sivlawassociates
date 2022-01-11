import React from "react";
import "./style.scss";
import config from "../../config.json";
const tags = [
  {
    name: "Facebook",
    url: config.fburl,
  },

  {
    name: "Linked In",
    url: config.linkedinurl,
  },
  {
    name: "Instagram",
    url: config.instagramurl,
  },
  {
    name: "Whats App",
    url: config.whatsappurl,
  },
];

const Tags = () => {
  return (
    <div className="tagsWrap">
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>
            <a href={tag.url} target="_blank">
              {tag.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tags;
