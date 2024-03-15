import React from "react";
import bg from "../images/chart_bg.jpg";
import msw from "../images/MSW/1.png" 

export default function Postgraduate() {
  
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
            <h1>Postgraduate Degrees</h1>
          
        </div>
      </div>

      <section class="admission_cources">
        <div class="container">
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
                    Studies. Different courses conducted by the university and their duration are as follows.
                </p> <br/>
            <h2>Master of Social Work (MSW)</h2>
            <br/>
            <div >
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
                    Studies. Different courses conducted by the university and their duration are as follows.
                </p>
            <img src={msw} class="img-fluid" alt="msw"/>
            
            </div>
            <br/>

            <a href="www.nisd.ac.lk" style={{color: '#cbb58b', textAlign: 'center', padding: '2rem' }}>For Register Details</a>
        </div>
    </section>
      
    </div>
  );
}


