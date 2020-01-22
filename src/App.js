import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [] = useState();

  useEffect(function(){
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(response => {
      console.log(response);
    })
  }, []);
  return (
    <div className="App">

      <PhotoPage />
    </div>
  );
}

export default App;
