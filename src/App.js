import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoPage from "./components/PhotoContainer/PhotoPage";
import axios from "axios";

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        // console.log(response.data);
        setPhoto(response.data);
      })
      .catch(error => {
        console.log("Something went wrong:", error);
      });
  }, []);

  return (
    <div className='App'>
      <PhotoPage parentPhotoData={photo} />
    </div>
  );
}

export default App;
