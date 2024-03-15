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
      style={{ backgroundColor: "rgb(237, 237, 237)" , padding: isMobile ? "15px" : "50px" }}
    >
      <div className="container" style={{ textAlign: "justify" }}>
      <h2 style={{ textAlign: "center" }}>
        <strong>Welcome to NISD Zero Plastic NISD Community !!!</strong>
      </h2>
      
      <p>
      Welcome to the Centre for Quality Assurance (CQA) at the National Institute of Social Development (NISD), where excellence is the cornerstone of our educational and research endeavors. Our commitment to quality is deeply rooted in the guidance of the National Quality Assurance Framework of Sri Lanka, ensuring the highest standards in education and research. Explore with us as we strive to elevate educational benchmarks and adhere to national accreditation standards.
      </p>
      
       
      </div>
      </section>
      


      <section className="event" style={{  padding: isMobile ? "15px" : '100px' , backgroundImage: `url(${bg})`, backgroundAttachment: "fixed"  }}>
  <div className="container" style={{textAlign: "justify", backgroundColor: "#616d97", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
    <br/><p>
      <strong> Mission </strong>
    </p>
    <p>
      Empower communities through education on the environmental and health
      hazards of plastic usage, promoting behavioural change, and supporting
      small and medium-scale entrepreneurs in the creation and adoption of
      eco-friendly alternatives, fostering a sustainable and plastic-free
      future.
    </p>
    <p>
      <strong> Vision </strong>
    </p>
    <p>
      As student social workers, we strive to protect the environment from
      plastics and empower local entrepreneurs through the promotion of
      eco-friendly alternatives, contributing to a sustainable future.
    </p> <br/>
  </div>
</section>

      <section className="event" style={{ backgroundColor: "rgb(237, 237, 237)"}}><div className="container" style={{ textAlign: "justify" }}>
      <p>
        <strong> Senior Treasurer </strong>
      </p>
      <p>
        Mr. Janaka Bandara <br /> Lecturer <br /> Department of Social Work
      </p>
      <p>
        <strong> Advisor </strong>
      </p>
      <p>
        Mr. Thavarasa Tharshan <br /> Lecturer <br /> Department of Social Work
      </p>
      <p>
        <strong> Executive Board </strong>
      </p>
      <p>President - Pavani Lakshika Ravihari</p>
      <p>Vice President - Raveesha Shalindi</p>
      <p>Secretary - Kavishal Rasintha</p>
      <p>Ass. Secretary - Viruni Wathsala</p>
      <p>Tresurer - Kusal Madhubashitha</p>
      <p>Editor - Kosala Jayanath</p>
      <p>Sub Editor - Inoji Shakya</p>
      <p>
        <strong> Director Board </strong>
      </p>
      <p>Director of Membership - Pramodya Rathnayake</p>
      <p>Director of Public Relations - Dilmi Nadeera</p>
      <p>Director of Partnership - Oneli Perera</p>
      <p>Director of Professional Development - Nirusha Hulugalla</p>
      <p>Director of Social Media &amp; Marketing - Wishwa Dilshan</p>
      <p>Director of Finance &amp;Fundraising - Aqeela Nowshadh</p>
      <p>Director of Fellowship - Samadi Jayasundara</p>
      <p>Director of Environmental Services- Hijabudeen Usama</p>
      <p>
        <strong> Deputy Director Board </strong>
      </p>
      <p>D.Director of Membership - Achala Viragi</p>
      <p>D.Director of Public Relations - Himansi Ranasinghe</p>
      <p>D.Director of Partnership - Mahesh Lakmal</p>
      <p>D.Director of Professional Development - Ayesha Nilakshi</p>
      <p>D.Director of Social Media &amp; Marketing - Shanuka Pathum</p>
      <p>D.Director of Finance &amp;Fundraising - Sachini Charunya</p>
      <p>D.Director of Fellowship - Buddika Jeewantha</p>
      <p>D.Director of Environmental Services - Ishan Kavinda</p>
      </div></section>
      </div>
    
  );
}

export default CQA;
