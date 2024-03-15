import React from "react";
import bg from "../images/chart_bg.jpg";
import nisd from "../images/nisd.jpeg";

export default function History() {
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
          <h1>History of the Institute</h1>
        </div>
      </div>

      <section class="welcome_about" style={{ backgroundColor: "white" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <h2>History of NISD</h2>
              <p style={{ textAlign: "justify" }}>
                Welcome to the National Institute of Social Development (NISD) –
                a distinguished institution with a rich history and a commitment
                to excellence in social work education. Our journey began in
                1952 when visionary leaders, non-governmental organizations, and
                government representatives collaborated to establish the Ceylon
                Institute of Social Work. Evolving over the years, we were later
                re-named the Sri Lanka School of Social Work, marking the
                commencement of our Diploma in Social Work in 1964. 
                <br />
              </p>
            </div>
            <div class="col-md-5">
              <img src={nisd} class="img-fluid" alt="NISD" />
            </div>
          </div>
          <p style={{ textAlign: "justify" }}>
          In 1987,
                recognizing our potential, the University Grants Commission
                advocated for the elevation of the Sri Lanka School of Social
                Work to an Independent Institution. Subsequently, in 1989, the
                Cabinet approved the establishment of the National Institute of
                Social Development, paving the way for higher education in
                Social Work. An Act of Parliament, the National Institute of
                Social Development Act No.41 of 1992, officially re-named and
                upgraded our institution. A significant milestone was reached in 2005 when the Government of
            the Democratic Socialist Republic of Sri Lanka, following the
            recommendation of the University Grants Commission, declared the
            NISD as a degree-awarding institution. This led to the initiation of
            the Bachelor of Social Work degree program in December 2005. Our
            commitment to excellence continued, with the approval of the
            Master's Degree program in Social Work by the University Grants
            Commission. The Government of Sri Lanka, formalizing this approval,
            declared the NISD as a degree-awarding institution for both the
            Bachelor of Social Work and the Master of Social Work degrees in
            2008. To ensure accessibility for all, we expanded our language
            offerings in 2013. Initially conducted only in English, the Bachelor
            of Social Work Degree program is now available in Sinhala, Tamil,
            and English mediums, providing students the opportunity to pursue
            their degrees in their mother tongue. NISD takes pride in offering a
            diverse range of degree programs, postgraduate studies, and
            certificate courses. Our commitment to accessibility is further
            emphasized by the establishment of regional centers in Thawalawa
            (Anuradhapura), Ranna (Hambantota), Kilinochchi, and Ampara. As we
            continue to evolve and adapt, NISD remains dedicated to shaping the
            future of social work education, producing skilled professionals who
            contribute meaningfully to society. Join us on this transformative
            journey at the National Institute of Social Development, where
            excellence meets inclusivity.
          </p>
        </div>
      </section>
    </div>
  );
}
