import React from "react";
import imag from "./image/likebtn.png";
import { actionfun } from "./redux/act_red";
import { useSelector, useDispatch } from "react-redux";

export default function About() {
  let likes = useSelector((state) => state.liks);
  let dispatch = useDispatch();
  const likfun = (e) => {
    dispatch(actionfun(e.target.alt));
    e.target.style.backgroundColor = "red";
  };

  return (
    <>
      <div id="divoflikno">
        <div className="licks">Total Likes:{likes}</div>
      </div>
      <div id="aboutmaincotiner">
        <div className="aboutitems">
          <h4 className="titel">Services</h4>
          Im a full stack devloper with the power of reactjs and php with mysql
          database. I can make fully responsive webssite wit multi page
          application. im expert in php mysqli+prepaired statemment inn react i
          can handel multipal stats by redux stete managment
          <div className="likebtn" onClick={likfun}>
            <img className="likimg" src={imag} alt="4" />
          </div>
        </div>
        <div className="aboutitems">
          <h4 className="titel">Contect</h4>
          <p>Name:Arpan patil</p>
          <p>Mobile no:7987877856</p>
          <p>Email:a48793138@gmail.com</p>
          <div className="likebtn" onClick={likfun}>
            <img className="likimg" src={imag} alt="5" />
          </div>
        </div>
      </div>
    </>
  );
}
