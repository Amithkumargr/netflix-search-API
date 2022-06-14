import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Nav from "./components/Nav";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState(false);
  const [searchval, setsearchval] = useState("");
  // let [state, setState] = useState();

  useEffect(() => {
    axios
      .get(
        "http://api.themoviedb.org/3/movie/top_rated?api_key=4f4d874fb5bc08b8a58d7a0a52fd7491&language=en-US"
      )
      .then(res => {
        console.log(res.data.results);
        setdata(res.data.results);
        // setPopular(data);
      })

      .catch(err => console.log(err));
  }, []);

  let handleStore = () => {
    setsearch(true);
  };
  // let searchval = data.filter(val => {
  //   if (val.title.toUpperCase()) {
  //     return val;
  //   } else {
  //     return val;
  //   }
  // });
  let search1 = data
    ? data.filter(val => {
        if (searchval === "") {
          return val;
        } else if (val.title.toUpperCase().includes(searchval.toUpperCase())) {
          return val;
        }
      })
    : "";

  return (
    <div className="App">
      <Nav setsearchval={setsearchval} data={data} />
      <Button onClick={handleStore}>Search...</Button>
      <h1 sx={{ color: "red" }}> Netflix Movies</h1>
      <div className="popular-movies">
        {(search === true ? search1 : popular).map(movie => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default App;
