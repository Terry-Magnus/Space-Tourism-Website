import React from "react";
import "./homepage.style.css";
import Header from "../../components/Header/header.component";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="homepage">
      <Header />
      <div className="home">
        <div className="lead">
          <h3>So you want to travel to</h3>
          <h1>Space</h1>
          <p>
            Let's face it. If you want to go to space, you might as well <br />
            genuinely go to outerspace and not hover kind of on the
            <br /> edge of it. Well sit back, and relax because we'll give you a
            truly out of this world experience!
          </p>
        </div>
        <div className="explore">
          <button>
            <Link to="/destination">Explore</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
