import React from "react";
import bg from "../images/chart_bg.jpg";
import AllEvents from "../Components/AllEvents";

function Events() {
  
  return (
    <div >
      <div class="about_bg" style={{ backgroundImage: `url(${bg})` , backgroundAttachment: 'fixed'}}>
      <div
        class="about_container"
        style=
          {{height: '5rem',
          display: 'flex',
          alignContent: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'}}
        
      ></div>
        
          <div class="col-md-12">
            <h1>Events</h1>
          
        </div>
      </div>
      <AllEvents/>
    </div>
  );
}

export default Events;
