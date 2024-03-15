import React from "react";
import logo from "../../../images/logo.png";

export default function DepartmentNavBarOne(params) {

    const currentLocation = window.location.pathname;

    let DepartmentNameEnglish ;
    let DepartmentNameSinhala 

    if (currentLocation.startsWith("/faculty-of-social-work/department-of-social-work")) {
      DepartmentNameEnglish = "Department of Social Work ";
      DepartmentNameSinhala = "සමාජ වැඩ අධ්‍යනාංශය";
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
                  <a href={`/faculty-of-social-work/department-of-social-work`} className="navbar-brand nav-brand2">
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
                  <a href={`/faculty-of-social-work/department-of-social-work`} class="navbar-brand nav-brand2">
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
                        <a class="nav-link" href={`/faculty-of-social-work/department-of-social-work`}>
                          Home
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href={`/faculty-of-social-work/department-of-social-work/staff`}>
                          Staff
                        </a>
                      </li>
 
                    </ul>
                  </div>
                </nav>
    )
}