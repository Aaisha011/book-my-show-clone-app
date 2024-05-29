import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovieLayout =
  (components) =>
  ({ ...props }) =>
    
  ()=> {
    return <div>
        <MovieNavbar />
        <components {...props} />
        <div>Footer</div> 
    </div>;
  };
export default MovieLayout