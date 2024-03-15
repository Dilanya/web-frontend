import React from "react";
import bg from "../images/chart_bg.jpg";
import img from "../images/admission/our-cources_03.jpg"

export default function Undergraduate() {
  
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
            <h1>Undergraduate Degrees</h1>
          
        </div>
      </div>

      <section class="admission_cources">
        <div class="container">
            <div class="row text-justify">
                <div class="col-md-12">

                    <p>The University of Sri Jayewardenepura conducts the courses to students who have gained admission
                        to the university, These students are selected based on their performance at the General
                        Certificate of Education (Advanced Level) examination. They are admitted to 3 or 4 years full
                        time degree programmes. All the expenses to conduct these courses are met by the government
                        under the Free Education policy. The general expenditure of the University of Sri
                        Jayewardenepura is around 7.8 million rupees per day.

                        In addition, according to the resources and facilities available in different faculties and
                        considering the current national and global requirements of the country, the university offers
                        Certificate and Postgraduate Diplomas, M.A., M.Sc., M Phil, and PhD, programmes. Most of these
                        courses cater to employed graduates and are conducted on a part time basis. These courses are
                        fee-levying courses. Research relevant to postgraduate Degree are conducted in the university or
                        in outside organizations. A postgraduate Degrees are conducted by the Faculty of Graduate
                        Studies. Different courses conducted by the university and their duration are as follows.</p>
                </div>
            </div>


            <br/>
            <h2>First Degree Courses</h2>
            <br/>
            <div class="row">
                <div class="col-md-6">
                    <a href="Faculty/department.html" class="course_box">
                        <img src={img} class="img-fluid" alt="#"/>
                        <div class="couse-desc-wrap">
                            <h4>Department of Social Work</h4>
                            <p>B.Sc Accounting (Special) Degree Programme</p>

                        </div>
                        <div>
                            <p class="course_duration" style={{color: '#cbb58b', textAlign: 'center', padding: '2rem' }}>View
                                More</p>
                        </div>

                    </a>
                </div>
                <div class="col-md-6">
                    <a href="Faculty/department.html" class="course_box">
                        <img src={img} class="img-fluid" alt="#"/>


                        <div class="couse-desc-wrap">
                            <h4>Department of Anthropology</h4>
                            <p>B.Sc Accounting (Special) Degree Programme</p>

                        </div>
                        <div>
                            <p class="course_duration" style={{color: '#cbb58b', textAlign: 'center', padding: '2rem' }}>View
                                More</p>
                        </div>
                    </a>
                </div>
                <div class="col-md-6">
                    <a href="Faculty/department.html" class="course_box">
                        <img src={img} class="img-fluid" alt="#"/>
                        <div class="couse-desc-wrap">
                            <h4>Department of Social Work</h4>
                            <p>B.Sc Accounting (Special) Degree Programme</p>

                        </div>
                        <div>
                            <p class="course_duration" style={{color: '#cbb58b', textAlign: 'center', padding: '2rem' }}>View
                                More</p>
                        </div>

                    </a>
                </div>
                <div class="col-md-6">
                    <a href="Faculty/department.html" class="course_box">
                        <img src={img} class="img-fluid" alt="#"/>
                        <div class="couse-desc-wrap">
                            <h4>Department of Social Work</h4>
                            <p>B.Sc Accounting (Special) Degree Programme</p>

                        </div>
                        <div>
                            <p class="course_duration" style={{color: '#cbb58b', textAlign: 'center', padding: '2rem' }}>View
                                More</p>
                        </div>

                    </a>
                </div>
            </div>
            </div>
    </section>
      
    </div>
  );
}


