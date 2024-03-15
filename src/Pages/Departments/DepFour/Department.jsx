import React from "react";
import bg from "../../../images/dep4.jpeg";
import msw from "../../../images/MSW/1.png";

export default function Department() {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the image covers the entire viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <div style={containerStyle}></div>

      <section class="admission_cources">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-lg-12">
              <div
                className="container"
                style={{
                  padding: "50px",
                  textAlign: "justify",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2 style={{ textAlign: "center" }}>Introduction</h2>

                <p style={{ textAlign: "justify" }}>
                  Welcome to the Department of Anthropology and Gerontology at
                  the National Institute of Social Development (NISD). Committed
                  to advancing knowledge in the fields of anthropology and
                  gerontology, our department is dedicated to excellence in
                  education and research, fostering professionals who make
                  significant contributions to the understanding of human
                  societies and the well-being of aging populations. Nestled
                  within the prestigious NISD, the Department of Anthropology
                  and Gerontology is a focal point for pioneering education and
                  research. Our inception was driven by a recognition of the
                  evolving needs in understanding the cultural dynamics and
                  addressing the challenges and opportunities associated with an
                  aging population. As stewards of knowledge in anthropology, we
                  explore the intricacies of human societies, delving into both
                  physical and cultural dimensions. Simultaneously, our focus on
                  gerontology addresses the multifaceted aspects of aging,
                  including social, psychological, and healthcare
                  considerations. The department stands as a unique hub within
                  the global education system, garnering acclaim for its
                  comprehensive study programs. In our commitment to teaching
                  and research, we aim to cultivate individuals who possess not
                  only a deep understanding of the theoretical foundations but
                  are also equipped with the practical skills essential for
                  addressing real-world challenges in the realms of anthropology
                  and gerontology muti disciplinary practice. Recognizing the
                  importance of inclusivity and accessibility in education, the
                  Department of Anthropology and Gerontology actively
                  contributes to NISD's overarching mission of providing higher
                  education that is impactful and relevant. Our faculty members,
                  experienced professionals and scholars, are dedicated to
                  guiding and mentoring students throughout their educational
                  journey. We offer a diverse array of degree programs,
                  postgraduate studies, and certificate courses tailored to meet
                  the diverse needs and aspirations of our students. Whether you
                  are passionate about understanding cultural diversity,
                  exploring the dynamics of aging, or contributing to the
                  well-being of elderly populations, the Department of
                  Anthropology and Gerontology at NISD provides a nurturing and
                  dynamic environment for your academic and professional growth.
                  Join us as we continue to shape the future of anthropological
                  and gerontological education, empowering individuals to make
                  positive impacts on societies and the aging community they
                  serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        class="row"
        style={{ padding: "50px", backgroundColor: "rgb(237, 237, 237)" }}
      >
        <div
          class="col-lg-4"
          style={{
            display: " flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Head of the Department</h4>
        </div>
        <div class="col-lg-8">
          <p style={{ textAlign: "justify" }}>
            The Bachelor of Social Work degree programme conducted by the NISD
            aims to produce professional social workers with a good grasp of
            social work values, capable of managing social welfare services,
            competent to engage in quality teaching and research and promote
            peace and harmony in a multi-ethnic Sri Lanka. The Bachelor’s degree
            course in Social Work is a full time four year programme. It is
            conducted in eight semesters, through class room lessons,
            on-site-teaching-learning methods and guided field practice. Within
            the four year study period, two fieldwork placements (in the 2nd &
            4th years) are conducted. In these two Block field placements,
            students learn the practice of social work in communities and
            agencies under the close supervision of trained professional social
            workers. The placements are full time and conducted during a total
            time period of twenty four weeks. This professional course
            anticipates the students to be committed learners working with
            people in need.
          </p>
        </div>
      </section> */}

      <section class="container">
        <div class="row">
          <div class="col-lg-6" style={{ paddingTop: "60px" }}>
            <div class="admission-pdf">
              <i class="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>
              <p>
                course details PDF
                <br />
                <a href="#">DOWNLOAD</a>
              </p>
              <a href="#" class="btn btn-warning btn-pdf_join">
                Join this course
              </a>
            </div>
          </div>
          <div class="col-lg-6 " style={{ paddingBottom: "50px" }}>
            <ul
              class="admission_rating col-md-12"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <li class="admission_star-second">
                Starts<span>:</span>
              </li>
              <li class="admission_star">7 January 2017</li>
              <li>
                Duration<span>:</span>
              </li>
              <li class="admission_star">7 months</li>
              <li class="admission_star-second">
                Timing<span>:</span>
              </li>
              <li class="admission_star">10 am - 2 pm</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div class="container" style={{ paddingBottom: "50px" }}>
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div class="card">
              <div class="card-header" role="tab" id="headingOne">
                <h5 class="mb-0">
                  <a
                    data-toggle="collapse"
                    class="accordian-link"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Admission Requirements
                  </a>
                </h5>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="card-block">
                  Admission of candidates to the first year of the course
                  leading to the Bachelor of Social Work is considered on the
                  basis of;
                  <ul>
                    <li>
                      the minimum requirements for University admission
                      prescribed by the University Grants Commission (UGC)
                    </li>
                    <li>a good working knowledge of English</li>
                  </ul>
                  Eligible candidates may be required to sit for an Entrance
                  Test. Those who qualify at this Entrance Test will be called
                  for an interview. The final selection of candidates will be
                  made on the basis of merit.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab" id="headingTwo">
                <h5 class="mb-0">
                  <a
                    class="collapsed accordian-link"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Course Structure
                  </a>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="card-block">
                  In the course structure of the BSW programme the first two
                  years are devoted to the study of foundation courses including
                  traditional liberal arts disciplines. In the 3rd and the 4th
                  years, besides the block field placement, specialised course
                  units in social work are taught.
                  <img src={msw} class="img-fluid" alt="msw" />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab" id="headingThree">
                <h5 class="mb-0">
                  <a
                    class="collapsed accordian-link"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How to Apply
                  </a>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="card-block">
                  <p style={{ textAlign: "justify" }}>
                    The advertisements calling for applications are published in
                    the news papers in the Government Gazette and in this
                    website. The eligible applicants have to prepare an
                    application on the prescribed form and submit it to the
                    NISD.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Calling Applications:</strong> Usually the
                    applications are called in the month of February each year.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>
                      For more information contact the course coordinator/s:
                    </strong>
                  </p>
                  <p class="pname" style={{ textAlign: "justify" }}>
                    <strong>Mr. V. Jeyaruban</strong>
                    <br />
                    <em>Senior Lecturer(School of Social Work)</em>
                  </p>
                  <p>
                    +94 777 683 675
                    <br />{" "}
                    <span>
                      <a href="mailto:jeyaruban10@gmail.com">
                        jeyaruban10@gmail.com
                      </a>
                    </span>
                  </p>
                  <p class="pname" style={{ textAlign: "justify" }}>
                    <strong>Mrs. Manjula Wijesekara</strong>
                    <br />
                    <em>Senior Lecturer(School of Social Work)</em>
                  </p>
                  <p>
                    +94 714 452 783
                    <br />{" "}
                    <span>
                      <a href="mailto:manjulashiromi@yahoo.com">
                        manjulashiromi@yahoo.com
                      </a>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
