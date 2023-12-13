import React from "react";
import Header from "./Header";
import Background1 from "../assets/1.jpg";
import Background2 from "../assets/2.jpg";
import { FaHandHolding } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { GiRoad } from "react-icons/gi";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <span>INDIA'S LEADING ONE-WAY INTER-CITY CAB SERVICE PROVIDER</span>
        <img src={Background1} alt="Background" />
      </div>
      <div className="Objective">
        <img src={Background2} alt="Background" />
      

      <div className="icon">
        <FaHandHolding
          style={{ color: "green", width: "40px", height: "30px",
          transform: 'translate(-6%, 78%)'}}
        />
        <FaCar
          style={{
            color: "green",
            width: "44px",
            height: "20px",
            transform: "translate(-6%, -50%)",
          }}
        />
        <h4 style={{color:'green'}}>
          RETURN FARE, NOT FAIR
        </h4>
        <h4>
          WHY FAY FOR RETURN JOURNEY WHEN TRAVELUNG ONE-WAY? NOW GET DISCOUNTED
          AC TAXI AT JUST HALF OF THE ROUND TEP COST FOR YOUR ONE WAY TRAVEL
        </h4>
      </div>
      <div className="icon">
        <GiRoad
          style={{ color: "green", width: "40px", height: "30px",
          transform: 'translate(-6%, 110%)'}}
        />
        <FaCar
          style={{
            color: "green",
            width: "44px",
            height: "20px",
            transform: "translate(-6%, -50%)",
          }}
        />
        <h4 style={{color:'green'}}>
          NOW AVAILABLE ROUTES ARE!
        </h4>
        <h4>
          LUCKNOW | GORAKHPUR | VARANASI | ALLAHABAD | BARELIY
        </h4>
      </div>
      </div>
    </>
  );
}

export default Home;
