import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ MovieName, Description, urlImage, VideoId }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" fluid src={urlImage} />
        <Card.Body>
          <Card.Title>{MovieName}</Card.Title>
          <Card.Text>{Description}</Card.Text>
          <a href={`http://www.netflix.com/watch/${VideoId}`} variant="success">
            Watch Now
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
