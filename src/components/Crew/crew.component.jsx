import React, { useState } from "react";
import Header from "../../components/Header/header.component";
import "./crew.style.css";
import data from "../../data.json";

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <main className="crew-page">
      <Header />
      <h3>
        <span aria-hidden="true">02</span> MEET YOUR CREW
      </h3>
      <div className="crew">
        <div className="crew-img">
          <img
            className="personnel"
            src={require(`../../images/${data.crew[crewIndex].images.webp}`)}
            alt={data.crew[crewIndex].role}
            width="100%"
          />
        </div>
        <section>
          <div className="slide-indicators">
            <button
              className={"slide-button" + (crewIndex === 0 ? " active" : "")}
              onClick={() => setCrewIndex(0)}
            ></button>
            <button
              className={"slide-button" + (crewIndex === 1 ? " active" : "")}
              onClick={() => setCrewIndex(1)}
            ></button>
            <button
              className={"slide-button" + (crewIndex === 2 ? " active" : "")}
              onClick={() => setCrewIndex(2)}
            ></button>
            <button
              className={"slide-button" + (crewIndex === 3 ? " active" : "")}
              onClick={() => setCrewIndex(3)}
            ></button>
          </div>
          <div className="crew-data">
            <h2 className="role">{data.crew[crewIndex].role.toUpperCase()}</h2>
            <h1 className="name">{data.crew[crewIndex].name.toUpperCase()}</h1>
            <p className="bio">{data.crew[crewIndex].bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Crew;
