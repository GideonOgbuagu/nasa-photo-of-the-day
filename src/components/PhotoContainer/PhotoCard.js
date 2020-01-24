import React from "react";
import "./PhotoCard.css";
import styled from "styled-components";
// import img from "../../assets/img/space-suit.jpg";

const CardContainer = styled.div`
  width: 100%;
  height: 105vh;
  display: flex;
`;

const DescriptionContainer = styled.div`
  width: 40%;
  height: 100vh;
  color: black;
  font-size: 0.83rem;
  padding-top: 10px;
  padding-right: 50px;
  padding-left: 50px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 1.9rem;
`;

const Description = styled.h4`
  font-size: 0.8rem;
  background-color: skyblue;
  color: white;
  display: inline;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: light;
`;

const Explanation = styled.p`
  line-height: 1.62rem;
  font-size: 0.83rem;
  margin-top: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -7px;
`;

const SpanItem = styled.h4`
  background-color: skyblue;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  display: inline;
`;

const Img = styled.img`
  width: 60%;
  height: 99vh;
  border-radius: 5px;
`;

// const SpanContain = styled.span``;

function PhotoCard(props) {
  //   console.log(props);
  return (
    <CardContainer>
      <DescriptionContainer>
        <Title>{props.photoData.title}</Title>
        <Description>Description</Description>
        <Explanation>{props.photoData.explanation}</Explanation>
        <Footer>
          <SpanItem>
            Copyright:
            {props.photoData.copyright}
          </SpanItem>
          <SpanItem>Date: {props.photoData.date}</SpanItem>
        </Footer>
      </DescriptionContainer>
      <Img src={props.photoData.url} />
    </CardContainer>
  );
}

export default PhotoCard;
