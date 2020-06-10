import React, { useState, useEffect } from "react";
import "./PhotoPage.css";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import styled from "styled-components";

// const PageContainer = styled.div`
//   width: 100%;

// `;

function PhotoPage() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=8hH6L2THAQIju13d2QqNu8K45UwXsyaJRcjg3eA8"
      )
      .then(response => {
        // console.log(response.data);
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
