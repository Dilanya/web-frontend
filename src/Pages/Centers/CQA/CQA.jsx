import React from "react";
import bg from "../../../images/cqa.jpeg";

function CQA() {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the image covers the entire viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const isMobile = window.innerWidth <= 767.98;
  return (

    <div  >
      
        
          <div style={containerStyle}></div>


          <section
      className="event"
      style={{ backgroundColor: "rgb(237, 237, 237)"  }}
    >
      <div className="container" style={{ textAlign: "justify" }}>
      <h2 style={{ textAlign: "center" }}>
        <strong>Centre for Quality Assurance (CQA)</strong>
      </h2>
      
      <p>
      Welcome to the Centre for Quality Assurance (CQA) at the National Institute of Social Development (NISD), where excellence is the cornerstone of our educational and research endeavors. Our commitment to quality is deeply rooted in the guidance of the National Quality Assurance Framework of Sri Lanka, ensuring the highest standards in education and research. Explore with us as we strive to elevate educational benchmarks and adhere to national accreditation standards.
      </p>
      
      <p>The Centre for Quality Assurance (CQA) at NISD is dedicated to cultivating a culture of quality that fosters excellence in teaching and learning throughout the institute. Committed to continuous improvement, our focus is on enhancing the quality of teaching, learning, research, and providing the best skills-based higher educational experience for both our students and staff.</p>
       
      </div>
      </section>
      


      <section className="event" style={{   backgroundImage: `url(${bg})`, backgroundAttachment: "fixed"  }}>
  <div className="container" style={{textAlign: "justify", backgroundColor: "#c0e4f5", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
    <br/>
    <h2 style={{textAlign: "center"}}><strong>Our Mission</strong></h2>
<p>&nbsp;</p>
<p>At the Centre for Quality Assurance, our mission is to maintain and advance the quality of education at NISD through:</p>
<p>&nbsp;</p>
<ul>
<li><strong>Program Accreditation</strong>: Precisely reviewing and accrediting academic programs to ensure global standards and align with current developments in respective fields, providing students with a strong educational foundation.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Quality Assurance Framework</strong>: Implementing ongoing assessment and evaluation processes, promoting a culture of accountability and transparency across the institution.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Faculty Development</strong>: Investing in the professional development of our faculty members, empowering them with the knowledge and skills needed to deliver exceptional education.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Student Support</strong>: Dedication to creating an inclusive and supportive learning environment by collaborating with various departments to implement initiatives that enhance student experiences.</li>
</ul>
    <br/>
  </div>
</section>


<section className="event" >
  <div className="container" style={{textAlign: "justify", backgroundColor: "#c0e4f5", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
    <br/>
    <h2 style={{textAlign: "center"}}><strong>Our Objectives</strong></h2>
    <p>&nbsp;</p>
<ul>
<li><strong>Institutionalize a Culture of Quality Assurance</strong>: Aligning our practices with national guidelines and international standards to foster a culture of quality assurance.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Alignment with UGC Requirements</strong>: Ensuring that university procedures are in harmony with UGC requirements and national standards.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Develop and Maintain Favourable Public Perception</strong>: Enhancing the public perception of the institute by consistently practicing quality assurance procedures.</li>
</ul>
<p>&nbsp;</p>
    <br/>
  </div>
</section>


<section className="event" style={{   backgroundImage: `url(${bg})`, backgroundAttachment: "fixed"  }}>
  <div className="container" style={{textAlign: "justify", backgroundColor: "#c0e4f5", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
    <br/>
    <h2 style={{textAlign: "center"}}><strong>Functions of CQA</strong></h2>
    
<p>&nbsp;</p>
<ul>
<li><strong>Supporting University and Program Entities</strong>: Assisting in preparation for external quality assurance assessments and accreditation requirements.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Guidance to Program Offering Entities</strong>: Offering guidance in defining program objectives, outcomes, graduate profiles, and course curricula in alignment with national reference points.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Supporting Faculty QA Cells</strong>: Facilitating the establishment and effective functioning of Faculty Quality Assurance cells.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Collaboration and Liaison</strong></p>
<p>&nbsp;</p>
<ul>
<li><strong>Promote and Coordinate Quality Assurance Activities</strong>: Conducting workshops, seminars, and developing manuals to enhance quality assurance activities within the institute.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Liaison with External Agencies:</strong> Collaborating with the Quality Assurance Council of the UGC, external quality assurance agencies, and relevant international agencies.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Governance and Management:</strong> Developing, reviewing, and revising by-laws and standard operational procedures necessary for the governance and management of the CQA.</li>
</ul>
    <br/>
  </div>
</section>

      
      </div>
    
  );
}

export default CQA;
