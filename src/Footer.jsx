import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const fun = () => {
    window.scrollTo(0, 0);
    console.log("vvvv");
  };

  return (
    <>
      <div id="manfooter">
        <div id="footerbox1">
          <NavLink onClick={fun} className="navlinks" to="/About">
            SUVICES
          </NavLink>
        </div>
      </div>
    </>
  );
}
