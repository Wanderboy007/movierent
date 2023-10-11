import MovieCard from "../component/MovieCard";
import CustNavbar from "./CustNavbar";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import React from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  async function sdsd() {
    const options = {
      method: "GET",
      url: "https://netflix54.p.rapidapi.com/search/",
      params: {
        query: search,
        offset: "0",
        limit_titles: "50",
        limit_suggestions: "10",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "6e6d9ee482msh965638333e51c12p147751jsn143cb8e95853",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMovie(response.data.titles);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    sdsd();

    console.log(movies);
  }, []);

  const handleclick = () => {
    console.log("deep ka bohot deep");
  };
  return (
    <div>
      <CustNavbar />
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={sdsd}>search</button>
      </div>

      <Container>
        <Row>
          {movies.map((movie) => {
            return (
              <Col className="rounded m-5 ">
                <MovieCard
                  MovieName={movie.jawSummary.title}
                  Description={movie.jawSummary.synopsis}
                  urlImage={movie.jawSummary.backgroundImage.url}
                  VideoId={movie.jawSummary.backgroundImage.videoId}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
