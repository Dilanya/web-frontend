import React from "react";
import bg from "../images/chart_bg.jpg";

function Journals() {
  
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
            <h1>Journals</h1>
          
        </div>
      </div>
      
    </div>
  );
}

export default Journals;
