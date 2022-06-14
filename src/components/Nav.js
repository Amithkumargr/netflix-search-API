import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = ({ setsearchval }) => {
    // console.log(setsearchval);
  const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     setdata(searchval);
  //   }, []);

  const handleChange = e => {
    
    setsearchval(e.target.value);
  };

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="search_box">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            name="fetchdata"
            onChange={e => handleChange(e)}
            // value={findval}
          />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Nav;
