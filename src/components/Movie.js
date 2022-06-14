import React from "react";
import Button from "@mui/material/Button";

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h3>{movie.title}</h3>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.path}
      />

      <Button sx={{ alignItems: "center" }} variant="outlined">
        play
      </Button>
    </div>
  );
};
export default Movie;
