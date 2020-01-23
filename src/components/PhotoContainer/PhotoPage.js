import React, { useState, useEffect } from "react";
import "./PhotoPage.css";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoPage() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response.data);
        setPhoto(response.data);
      })
      .catch(error => {
        console.log("Something went wrong:", error);
      });
  }, []);

  return (
    <div>
      <PhotoCard photoData={photo} />
    </div>
  );
}

export default PhotoPage;
