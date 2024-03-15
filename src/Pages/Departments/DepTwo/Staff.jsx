import React from "react";
import bg from "../../../images/chart_bg.jpg";
import staff from "../../../images/Academic New/School of Social Work/1.png";

function Staff() {
  
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
            <h1>Staff</h1>
          
        </div>
      </div>
      


      <section class="our-teachers">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="mb-5">Academic Staff</h2>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="card our-teachers-block" style={{ width: "18rem" }}>
                <img src={staff} class="card-img-top img-fluid " alt="..." />
                <div class="card-body " style={{ textAlign: "center" }}>
                  <p style={{ color: "black" }}>
                    <strong>Mr. Indika Sanjeewa</strong>
                    <br />
                  </p>
                  <hr />
                  <p style={{ color: "black" }}>
                    Lecturer
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Staff;
