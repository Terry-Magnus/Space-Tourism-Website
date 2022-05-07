import React, { useState } from "react";
import Header from "../../components/Header/header.component";
import data from "../../data.json";
import "./destination.style.css";

const Destinations = () => {
  const [destinationIndex, setDestinationIndex] = useState(0);
  return (
    <main className="destination-page">
      <Header />
      <h3>
        <span aria-hidden="true">01</span> PICK YOUR DESINATION
      </h3>
      <div className="destination">
        <div className="destination-img">
          <img
            src={require(`../../images/${data.destinations[destinationIndex].images.png}`)}
            alt={data.destinations[destinationIndex].name}
            width="100%"
          />
        </div>
        <div className="destination-info">
          <div className="destination-tabs">
            <button
              className={"tab" + (destinationIndex === 0 ? " active" : "")}
              onClick={() => setDestinationIndex(0)}
            >
              {data.destinations[0].name}
            </button>
            <button
              className={"tab" + (destinationIndex === 1 ? " active" : "")}
              onClick={() => setDestinationIndex(1)}
            >
              {data.destinations[1].name}
            </button>
            <button
              className={"tab" + (destinationIndex === 2 ? " active" : "")}
              onClick={() => setDestinationIndex(2)}
            >
              {data.destinations[2].name}
            </button>
            <button
              className={"tab" + (destinationIndex === 3 ? " active" : "")}
              onClick={() => setDestinationIndex(3)}
            >
              {data.destinations[3].name}
            </button>
          </div>
          <div className="destination-details">
            <h1>{data.destinations[destinationIndex].name}</h1>
            <p>{data.destinations[destinationIndex].description}</p>
            <hr />
            <div className="destination-bottom">
              <p>
                Avg. Distance
                <br />
                <span>{data.destinations[destinationIndex].distance}</span>
              </p>
              <p>
                Est. Travel Time
                <br />
                <span>{data.destinations[destinationIndex].travel}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destinations;
