import React from "react";
import "./PhotoCard.css";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
`;

const DescriptionContainer = styled.div`
  width: 27%;
  height: 110vh;
  color: #636262;
  font-size: 0.84rem;
  padding-top: 20px;
  padding-right: 50px;
  padding-left: 50px;
  box-sizing: border-box;
`;

const PhotoImg = styled.img`
  width: 73%;
  height: 130vh;
  box-shadow: 0 4px 25px 10px rgba(156, 134, 197, 0.103),
    0 6px 40px 10px rgba(156, 134, 197, 0.103);
`;

const DescriptionTitle = styled.h3`
  font-size: 1.7rem;
`;

const PhotoExplanation = styled.p`
  line-height: 1.3rem;
`;

function PhotoCard(props) {
  //   console.log(props);
  return (
    <CardContainer>
      <DescriptionContainer>
        <DescriptionTitle>{props.photoData.title}</DescriptionTitle>
        <h4>Description</h4>
        <PhotoExplanation>{props.photoData.explanation}</PhotoExplanation>
        <div>
          <span>Copyright: {props.photoData.copyright}</span>

          <span>Date: {props.photoData.date}</span>
        </div>
      </DescriptionContainer>
      <PhotoImg src={props.photoData.url} />
    </CardContainer>
  );
}

export default PhotoCard;
