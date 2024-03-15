import React from "react";
import bg from "../../images/zero-plastic.jpg";

export default function ZeroPlastic(params) {

    const isMobile = window.innerWidth <= 767.98;
  return (
    <div>
      <div
        class="about_bg"
        style={{ backgroundImage: `url(${bg})`, backgroundAttachment: "fixed" }}
      >
        <div
          class="about_container"
          style={{
            height: "5rem",
            display: "flex",
            alignContent: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        ></div>

        <div class="col-md-12">
          <h1>Zero Plastic NISD Community </h1>
        </div>
      </div>


      <section
      className="event"
      style={{ backgroundColor: "rgb(237, 237, 237)" , padding: isMobile ? "15px" : "50px" }}
    >
      <div className="container" style={{ textAlign: "justify" }}>
      <h2 style={{ textAlign: "center" }}>
        <strong>Welcome to Zero Plastic NISD Community !!!</strong>
      </h2>
      
      <p>
        The Zeroplastic NISD Club, part of Sri Lanka's largest environment
        volunteering organization, is dedicated to climate action. Through the
        perspective of student social workers, the club aims to reduce plastic
        waste, promote sustainable alternatives, and support local
        entrepreneurs. The mission includes fostering social behaviour change
        for the 3Rs, addressing high plastic usage, and creating awareness about
        the plastic crisis, aligning with SDGs 12, 13, 14, and 15.
      </p>
      
      <p>
        University-based volunteers actively contribute to impactful awareness
        programs. With a focus on climate action, the club endeavours to protect
        the environment from plastics, champion eco-friendly alternatives, and
        cultivate a sustainable future. This multipronged approach aims to raise
        awareness, empower communities, and enhance the organization's impact
        within the community in the context of climate action and environmental
        sustainability.
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
