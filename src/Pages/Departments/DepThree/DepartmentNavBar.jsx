import React from "react";
import logo from "../../../images/logo.png";

export default function DepartmentNavBar(params) {

    const currentLocation = window.location.pathname;

    let DepartmentNameEnglish ;
    let DepartmentNameSinhala 

    if (currentLocation.startsWith("/faculty-of-social-work/department-of-psychology-and-counselling")) {
      DepartmentNameEnglish = "Department of Psychology and Counselling ";
      DepartmentNameSinhala = "මනෝවිද්‍යා සහ උපදේශන අධ්‍යනාංශය";
    } else {
        DepartmentNameEnglish = "Department of Sociology";
    }

    

    return(
        <nav class="navbar navbar2 navbar-toggleable-md navbar-light bg-faded">
                  <button
                    class="navbar-toggler navbar-toggler2 navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                  >
                    <span class="icon-menu"></span>
                  </button>
                  <a href={`/faculty-of-social-work/department-of-psychology-and-counselling`} className="navbar-brand nav-brand2">
                    <img
                      src={logo}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                  <a href={`/faculty-of-social-work/department-of-psychology-and-counselling`} class="navbar-brand nav-brand2">
                    <h2 style={{ fontSize: "15px" }}>
                      <b>
                        
                        {DepartmentNameEnglish} <br/> {DepartmentNameSinhala}
                      </b>
                    </h2>
                  </a>
                  <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href={`/faculty-of-social-work/department-of-psychology-and-counselling`}>
                          Home
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href={`/faculty-of-social-work/department-of-psychology-and-counselling/staff`}>
                          Staff
                        </a>
                      </li>
 
                    </ul>
                  </div>
                </nav>
    )
}