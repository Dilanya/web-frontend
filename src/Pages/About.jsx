import React from "react";
import bg from "../images/chart_bg.jpg";
import logo from "../images/logo.png";
import organizationalStructure from "../images/organizational_structure_nisd.jpg"

function About() {
  
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
            <h1>About the Institute</h1>
          
        </div>
      </div>
      <section class="welcome_about" style={{backgroundColor:'white'}} >
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <h2>What we are</h2>
                <p>Welcome to the National Institute of Social Development (NISD), the premier institution in Social Work education in Sri Lanka. We are recognized by the University Grants Commission (UGC) as a degree awarding Institute, under section 25A of the Universities Act No.16 of 1978. NISD is a statutory body functioning under the purview of the State Ministry of Social Empowerment. NISD is committed to be an educational institution producing professional social workers to serve the social welfare, promote social development and social empowerment.</p>
                
            </div>
            <div class="col-md-5">
                <img src={logo} class="img-fluid" alt="logo"/>
            </div>
        </div>
        <br/>
        <div class="col-md-12" style={{textAlign: 'center'}}>
            <h2>Organizational Structure</h2>
            <img src={organizationalStructure} class="img-fluid" alt="Organizational Structure"/>
        </div>
    </div>
</section>



    </div>
  );
}

export default About;
