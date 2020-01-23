import React from "react";
import "./PhotoCard.css";

function PhotoCard(props) {
  //   console.log(props);
  return (
    <div>
      <img src={props.photoData.url} />
      <div>
        <h3>{props.photoData.title}</h3>
        <h5>Description</h5>
        <p>{props.photoData.explanation}</p>
        <div>
          <span>Copyright: {props.photoData.copyright}</span>

          <span>Date: {props.photoData.date}</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
