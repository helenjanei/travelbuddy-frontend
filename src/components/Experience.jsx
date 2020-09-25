import React from "react";
import LikeHandler from "./LikeHandler.jsx";
import "../styles/style.css";
import * as api from "../utils/api";

const Experience = (props) => {
  const {
    title,
    body,
    username,
    created_at,
    experience_id,
    likes,
  } = props.experience;
  const { loggedIn } = props;
  const date = new Date(+created_at);
  return (
    // <div className="outer-container">
    <div className="experience-inner-container">
      <h1>{title}</h1>
      <div className="image-container">
        {props.images.map((image) => (
          // <div className="single-image">
          <img
            className="experience-image"
            src={image.image_URL}
            alt={image.image_desc}
            key={image.image_id}
          ></img>
          // </div>
        ))}
      </div>
      <p>{body}</p>
      <div className="experience-user-details-container">
        <p className="user-date">
          {username} on {date.toLocaleString()}
          {/* </p> */}
          {/* <p> */}
        </p>
        <LikeHandler likes={likes} experience_id={experience_id} />
        {loggedIn === username && (
          <button
            onClick={() =>
              api
                .deleteExperience(experience_id)
                .then((deletedExperience) =>
                  console.log("deleted:", deletedExperience)
                )
            }
          >
            delete
          </button>
        )}
      </div>
    </div >
  );
};

export default Experience;
