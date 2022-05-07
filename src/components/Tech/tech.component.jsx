import React, { useState } from "react";
import Header from "../../components/Header/header.component";
import useWindowDimensions from "../handleResize";
import data from "../../data.json";
import "./tech.styles.css";

const Technology = () => {
  const size = useWindowDimensions();
  const width = size.width;
  const [techIndex, setTechIndex] = useState(0);
  return (
    <main className="tech-page">
      <Header />
      <h3>
        <span aria-hidden="true">03</span> SPACE LAUNCH 101
      </h3>
      <div className="technology">
        <div className="tech-img">
          <img
            src={
              width < 992
                ? require(`../../images/${data.technology[techIndex].images.landscape}`)
                : require(`../../images/${data.technology[techIndex].images.portrait}`)
            }
            alt={data.technology[techIndex].name}
            width="100%"
          />
        </div>
        <div className="tech-indicators">
          <button
            className={"tech-button" + (techIndex === 0 ? " active" : "")}
            onClick={() => setTechIndex(0)}
          >
            1
          </button>
          <button
            className={"tech-button" + (techIndex === 1 ? " active" : "")}
            onClick={() => setTechIndex(1)}
          >
            2
          </button>
          <button
            className={"tech-button" + (techIndex === 2 ? " active" : "")}
            onClick={() => setTechIndex(2)}
          >
            3
          </button>
        </div>
        <div className="tech-info">
          <h3>THE TERMINOLOGY...</h3>
          <h1>{data.technology[techIndex].name.toUpperCase()}</h1>
          <p>{data.technology[techIndex].description}</p>
        </div>
      </div>
    </main>
  );
};

export default Technology;
