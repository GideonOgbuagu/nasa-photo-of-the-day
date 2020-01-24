import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoPage from "./components/PhotoContainer/PhotoPage";
// import img from "./assets/img/space-suit.jpg";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

function App() {
  return (
    <AppContainer>
      <PhotoPage />
    </AppContainer>
  );
}

export default App;
