import React from "react";
import { Route, Routes } from "react-router-dom";
import '../src/app.css'
import  Destination from "./components/Destination/destination.component";
import Home from "./components/Homepage/homepage.component"
import Crew from "./components/Crew/crew.component"
import Technology from "./components/Tech/tech.component";

function App()  {
  return(
    <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
        </Routes>
    </div>
  )
}

export default App;