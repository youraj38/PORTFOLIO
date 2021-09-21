import React from "react";
import imag from "./image/likebtn.png";
import { actionfun } from "./redux/act_red";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  let likes = useSelector((state) => state.liks);
  let dispatch = useDispatch();
  const likfun = (e) => {
    dispatch(actionfun(e.target.alt));
    e.target.style.backgroundColor = "red";
  };

  return (
    <>
      <div id="imgdiv">
        <div id="namDiv">
          <div id="name">ARPAN PATIL</div>
        </div>
        <div id="power">
          <div id="powerext">
            <div>Web Devlopment</div>
            <div>with the power of Reacjs in frontend</div> and php mysql in
            backend
          </div>
        </div>
      </div>
      <div id="pad"></div>
      <div id="divoflikno">
        <div className="licks">Total Likes:{likes}</div>
      </div>
      <div id="flexdiv">
        <div className="comtent">
          <h3>
            <li>Frontend skils</li>
          </h3>
          <br />
          <ol>
            <li>Reactjs</li>
            <li>React-redux</li>
            <li>React-router</li>
            <li>Axios</li>
          </ol>
          <div className="likebtn" onClick={likfun}>
            <img className="likimg" src={imag} alt="1" />
          </div>
        </div>
        <div className="comtent">
          <h3>
            <li>Backend skils</li>
          </h3>
          <br />
          <ol>
            <li>php</li>
            <li>Mysql</li>
            <li>Sql Qeres</li>
            <li>Mysqli+prepaired statement</li>
          </ol>
          <div className="likebtn" onClick={likfun}>
            <img className="likimg" src={imag} alt="2" />
          </div>
        </div>
        <div className="comtent">
          <h3>
            <li>Other skils</li>
          </h3>
          <br />
          <ol>
            <li>Html5</li>
            <li>Css3</li>
            <li>Es7 Javscript</li>
            <li>C,C++,Python</li>
          </ol>
          <div className="likebtn" onClick={likfun}>
            <img className="likimg" src={imag} alt="3" />
          </div>
        </div>
      </div>
    </>
  );
}
