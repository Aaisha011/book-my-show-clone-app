// rafce
import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultLayout =
  (components) =>
  ({ ...props }) =>
     {
    return (
      <div>
        <Navbar />
        <Component {...props} />.
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayout;