import React from "react";
import bg from "../images/chart_bg.jpg";
import CourseCard from "../Components/CourseCard";

export default function UpcomingCourses() {
  
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
            <h1>Upcoming Courses</h1>
          
        </div>
      </div>

      <section class="our_courses" style={{backgroundColor: 'rgb(237, 237, 237)'}}>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 style={{color: 'rgb(46, 46, 143)'}}>Upcoming Courses</h2>
            </div>
            
        </div>
        <div class="row">
                
          <CourseCard/>   
                
                
        </div> <br/>
        
    </div>
</section>
      
    </div>
  );
}


