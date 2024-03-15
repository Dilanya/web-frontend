import React from "react";
import logo from "../images/logo.png";

export default function Welcome(params) {
  const isMobile = window.innerWidth <= 767.98;
  return (
    <section class="clearfix about "
      style={{
        backgroundColor: "whiteSmoke",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div class="col-md-11">
        <h2 style={{ color: "rgb(46, 46, 143)" }} >
          Welcome to National Institute of Social Development
        </h2>
        <p style={{ textAlign: isMobile ? "justify" : "justify" }}>
          Welcome to the National Institute of Social Development (NISD), the
          premier institution in Social Work education in Sri Lanka. We are
          recognized by the University Grants Commission (UGC) as a degree
          awarding Institute, under section 25A of the Universities Act No.16 of
          1978. NISD is a statutory body functioning under the purview of the
          State Ministry of Social Empowerment. NISD is committed to be an
          educational institution producing professional social workers to serve
          the social welfare, promote social development and social empowerment.
        </p>
        <a href="/about" class="btn btn-link" style={{color: '#2e2e8f' , display:'flex'}}>
          Read More
        </a>
        <br/>
        <div class="row g-0">
          <div class="col-md-3 m-3 d-flex " style={{ alignItems: "center" }}>
            <img src={logo} class="img-fluid rounded-start" alt="nisd-logo" />
          </div>
          <div
            class="col-md-1"
            style={{ display: isMobile ? "none" : "block" }}
          >
            <div
              style={{
                borderLeft: "4px solid #2e2e8f",
                height: "85%",
                marginTop: "25px",
              }}
            ></div>
          </div>
          <div
            class="col-md-7 mt-3 "
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div class="card-body d-flex" style={{ flexDirection: "column" }}>
              <h2 class="card-title" style={{ color: "#2e2e8f" , textAlign: isMobile ? "center" : "justify" }}>
                Our Vision
              </h2>
              <p
                class="card-text"
                style={{ textAlign: isMobile ? "center" : "justify" }}
              >
                To be a center of excellence, nationally and globally in Social
                Work Education, Training and Research
              </p>
            </div>

            <br />
            <div class="card-body d-flex" style={{ flexDirection: "column" }}>
              <h2 class="card-title " style={{ color: "#2e2e8f", textAlign: isMobile ? "center" : "justify"  }}>
                Our Mission
              </h2>

              <p
                class="card-text"
                style={{ textAlign: isMobile ? "center" : "justify" }}
              >
                To enhance human resources for social development through the
                preparation of competent manpower in social work at all levels,
                generate and disseminate new knowledge and technologies for
                social work practice, provide specialized services for social
                welfare and social development
              </p>
            </div>
          </div>
        </div>
        </div>

      
     
    </section>
  );
}
