import React from "react";
import CountCard from "../Components/CountCard";
import Slider from "../Components/Slider";
import Welcome from "../Components/Welcome";
import News from "../Components/News";
import Events from "../Components/Events";
import Course from "../Components/Courses";

function Home() {
  
  return (
    <div className="App">
      
      <Slider />
      <Welcome/>
      <CountCard />
      <News/>
      <Events/>
      <Course/>
    </div>
  );
}

export default Home;
