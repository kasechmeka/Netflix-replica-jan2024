import React, { useState, useEffect } from 'react';
import axios from '../../Utils/axios';
import requests from '../../Utils/requests';
import "./Banner.css";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchMovie();
  }, []);

  console.log(movie);
  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}>
        <div className="banner__contents">
        <p className="banner__title"> {movie?.title || movie?.name || movie?.original_name}</p>
        <div className="banner__buttons">
            <button className="banner__button play">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom"/>
    </header>
  );
};

export default Banner;